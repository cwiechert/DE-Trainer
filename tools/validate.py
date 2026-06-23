#!/usr/bin/env python3
"""Valida el banco de preguntas de DE-Trainer sin navegador.

Recorre web/data/questions/*.js, extrae el catálogo de temas (window.TOPICS) y
todas las preguntas, y comprueba la integridad:
  - ids únicos
  - topic válido (en TOPICS), track válido, dificultad válida
  - >=2 opciones, sin duplicadas
  - 'correct' (single) / cada 'correctSet' (multi) presente en 'options'
  - explicación y referencia no vacías

Uso:  python tools/validate.py   (código de salida 1 si hay errores)

Nota: los .js usan claves sin comillas, comas finales y comentarios; este script
los tolera convirtiéndolos a JSON. No ejecuta JS.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
QDIR = ROOT / "web" / "data" / "questions"
VALID_DIFF = {"basico", "intermedio", "avanzado"}
VALID_TRACK = {"general", "databricks"}
VALID_SOURCE = {"databricks", "fundamentals", "ddia"}


def strip_to_json(text):
    out, i, n = [], 0, len(text)
    in_str = esc = False
    while i < n:
        c = text[i]
        if in_str:
            out.append(c)
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
            i += 1
            continue
        if c == '"':
            in_str = True; out.append(c); i += 1; continue
        if c == "/" and i + 1 < n and text[i + 1] == "*":
            i = text.index("*/", i + 2) + 2; continue
        if c == "/" and i + 1 < n and text[i + 1] == "/":
            while i < n and text[i] != "\n":
                i += 1
            continue
        if c == ",":
            j = i + 1
            while j < n and text[j] in " \t\r\n":
                j += 1
            if j < n and text[j] in "}]":
                i += 1; continue
            out.append(c); i += 1; continue
        m = re.match(r"[A-Za-z_]\w*", text[i:])
        if m:
            word = m.group(0); k = i + len(word); j = k
            while j < n and text[j] in " \t\r\n":
                j += 1
            if j < n and text[j] == ":":
                out.append('"' + word + '"'); i = k; continue
        out.append(c); i += 1
    return "".join(out)


def balanced(text, start, open_ch, close_ch):
    depth, i, n = 0, start, len(text)
    in_str = esc = False
    while i < n:
        c = text[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == open_ch:
                depth += 1
            elif c == close_ch:
                depth -= 1
                if depth == 0:
                    return text[start:i + 1]
        i += 1
    raise ValueError("literal sin cerrar")


def find_object_after(text, marker):
    p = text.index(marker)
    b = text.index("{", p)
    return balanced(text, b, "{", "}")


def find_data_array(text):
    """Primer array cuyo primer elemento es un objeto: salta los '[]' vacíos."""
    i, n = 0, len(text)
    in_str = esc = False
    while i < n:
        c = text[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
            i += 1
            continue
        if c == '"':
            in_str = True; i += 1; continue
        if c == "[":
            j = i + 1
            while j < n and text[j] in " \t\r\n":
                j += 1
            while j < n and text[j] == "/" and j + 1 < n and text[j + 1] in "/*":
                if text[j + 1] == "*":
                    j = text.index("*/", j + 2) + 2
                else:
                    while j < n and text[j] != "\n":
                        j += 1
                while j < n and text[j] in " \t\r\n":
                    j += 1
            if j < n and text[j] == "{":
                return balanced(text, i, "[", "]")
        i += 1
    return None


def main():
    core = (QDIR / "00-core.js").read_text(encoding="utf-8")
    topics = json.loads(strip_to_json(find_object_after(core, "window.TOPICS")))

    questions = []
    per_file = {}
    for f in sorted(QDIR.glob("*.js")):
        text = f.read_text(encoding="utf-8")
        arr = find_data_array(text)
        if not arr:
            # 00-core.js solo define window.TOPICS; no contiene preguntas.
            if f.name != "00-core.js":
                print(f"  aviso: {f.name} sin array de preguntas")
            continue
        qs = json.loads(strip_to_json(arr))
        per_file[f.name] = len(qs)
        questions.extend(qs)

    errors, ids = [], set()
    for q in questions:
        qid = q.get("id", "<sin id>")
        if qid in ids:
            errors.append(f"id duplicado: {qid}")
        ids.add(qid)
        if q.get("topic") not in topics:
            errors.append(f"{qid}: tema desconocido {q.get('topic')}")
        if q.get("track") not in VALID_TRACK:
            errors.append(f"{qid}: track inválido {q.get('track')}")
        if q.get("source") not in VALID_SOURCE:
            errors.append(f"{qid}: source inválido {q.get('source')}")
        if q.get("difficulty") not in VALID_DIFF:
            errors.append(f"{qid}: dificultad inválida {q.get('difficulty')}")
        if not q.get("explanation"):
            errors.append(f"{qid}: sin explicación")
        if not q.get("reference"):
            errors.append(f"{qid}: sin referencia")
        t = q.get("type")
        if t in ("single", "multi"):
            opts = q.get("options") or []
            if len(opts) < 2:
                errors.append(f"{qid}: <2 opciones")
            if len(set(opts)) != len(opts):
                errors.append(f"{qid}: opciones duplicadas")
            if t == "single":
                if q.get("correct") not in opts:
                    errors.append(f'{qid}: correct no está en options -> "{q.get("correct")}"')
            else:
                cs = q.get("correctSet") or []
                if not cs:
                    errors.append(f"{qid}: correctSet vacío")
                for c in cs:
                    if c not in opts:
                        errors.append(f'{qid}: correctSet "{c}" no está en options')
        elif t == "fill":
            acc = q.get("accept") or []
            if not isinstance(acc, list) or not acc or not all(isinstance(a, str) and a.strip() for a in acc):
                errors.append(f"{qid}: 'fill' requiere 'accept' (lista de respuestas no vacías)")
        elif t == "order":
            ordered = q.get("ordered") or []
            if not isinstance(ordered, list) or len(ordered) < 2:
                errors.append(f"{qid}: 'order' requiere 'ordered' con >=2 elementos")
            elif len(set(ordered)) != len(ordered):
                errors.append(f"{qid}: 'order' tiene elementos duplicados")
        else:
            errors.append(f"{qid}: type inválido {t}")

    by_topic, by_track, by_diff, by_type, by_source = {}, {}, {}, {}, {}
    for q in questions:
        by_topic[q.get("topic")] = by_topic.get(q.get("topic"), 0) + 1
        by_track[q.get("track")] = by_track.get(q.get("track"), 0) + 1
        by_diff[q.get("difficulty")] = by_diff.get(q.get("difficulty"), 0) + 1
        by_type[q.get("type")] = by_type.get(q.get("type"), 0) + 1
        by_source[q.get("source")] = by_source.get(q.get("source"), 0) + 1

    print(f"Archivos: {', '.join(f'{k}={v}' for k, v in per_file.items())}")
    print(f"Total preguntas: {len(questions)}")
    print(f"Temas declarados: {len(topics)} | con preguntas: {len(by_topic)}")
    print("Por enfoque:", by_track)
    print("Por fuente:", by_source)
    print("Por formato:", by_type)
    print("Por dificultad:", by_diff)
    print("Por tema:", json.dumps(by_topic, ensure_ascii=False))
    if errors:
        print("\nERRORES:")
        print("\n".join("  - " + e for e in errors))
        sys.exit(1)
    print("\nOK: sin errores de integridad")


if __name__ == "__main__":
    main()
