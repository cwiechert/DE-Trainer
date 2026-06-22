# 🔥 DE-Trainer

App web para practicar **data engineering** y prepararse para la certificación
**Databricks Certified Data Engineer Associate**, con preguntas de opción múltiple
y **explicación razonada + fuente** tras cada respuesta (al fallar, te dice por qué
es incorrecto y cuál era la respuesta correcta).

Misma arquitectura que GeoTrainer/MediLearner: app **estática y autónoma**
(HTML/CSS/JS, sin build ni dependencias). Se abre `web/index.html` y funciona offline.

## Cómo ejecutar

No necesita instalación. **Abre `web/index.html`** en el navegador (doble clic).
Las fuentes tipográficas se cargan de Google Fonts si hay internet; el resto funciona
sin conexión.

## Qué ofrece

- **Banco curado** (54 preguntas iniciales, en crecimiento) que mezcla **DE general**
  y **Databricks**.
- **Filtro de enfoque**: practica solo **Databricks** (modo certificación), solo
  **DE general**, o ambos.
- **Filtros** por tema y por dificultad (básico / intermedio / avanzado).
- **Explicación + fuente** al responder (libro de referencia o doc oficial de Databricks).
- **Dos formatos**: respuesta única y selección múltiple.
- **Estadísticas** (aciertos, precisión, racha), **tema claro/oscuro** y **atajos**
  (`1`–`5` responder, `Enter` continuar).

### Temas

**DE general:** fundamentos y ciclo de vida · modelado de datos · almacenamiento y
formatos · ingesta y CDC · transformación (ETL/ELT) · orquestación · streaming ·
calidad y gobernanza · SQL.

**Databricks:** plataforma lakehouse · Delta Lake · Apache Spark · Auto Loader /
ingesta · Lakeflow / DLT pipelines · Databricks SQL · Unity Catalog · Jobs / Workflows.

## El examen Databricks Data Engineer Associate (versión jul-2025)

- **Formato:** ~45-60 preguntas de opción única · 90 min · ~70/100 para aprobar.
  El código viene en SQL cuando es posible; si no, en Python.
- **Dominios y peso aproximado:**
  | Dominio | Peso |
  |---|---|
  | Databricks Intelligence Platform | ~10% |
  | Development & Ingestion | ~30% |
  | Data Processing & Transformations | ~31% |
  | Productionizing Data Pipelines | ~18% |
  | Data Governance & Quality | ~11% |
- Nota: **Delta Live Tables (DLT)** se renombró en 2025 a **Lakeflow Declarative
  Pipelines**; el examen incorpora también **Databricks Asset Bundles** y la **CLI**
  para CI/CD. Consulta siempre la [guía oficial del examen](https://www.databricks.com/learn/certification/data-engineer-associate).

> ⚠️ Las preguntas son **originales**, alineadas a best practices y a la documentación
> oficial; **no** son preguntas reales del examen ni dumps (eso viola la política de
> certificación). Sirven para estudiar conceptos, no para memorizar respuestas.

## Estructura del proyecto

```
DE-Trainer/
├── web/
│   ├── index.html                 # enlaza los archivos del banco + app.js
│   ├── css/styles.css
│   ├── js/app.js                  # motor de quiz (filtros enfoque/tema/dificultad)
│   └── data/questions/
│       ├── 00-core.js             # window.TOPICS + preguntas de DE general
│       └── 01-databricks.js       # preguntas de Databricks (por dominio del examen)
├── sources/                       # PDFs de referencia (el libro pendiente) — no se versiona
│   └── README.md
├── tools/validate.py              # valida la integridad del banco
└── README.md
```

## Cómo añadir preguntas

Crea un archivo nuevo en `web/data/questions/` (p. ej. `02-libro-streaming.js`) con el
patrón de anexado y enlázalo en `web/index.html`. Cada pregunta:

```js
window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "delta-007",            // identificador único
    topic: "deltalake",         // clave de window.TOPICS
    track: "databricks",        // "databricks" | "general"
    difficulty: "intermedio",   // "basico" | "intermedio" | "avanzado"
    type: "single",             // "single" | "multi"
    prompt: "Enunciado (puede incluir <code>código</code>)…",
    options: ["A", "B", "C", "D"],
    correct: "B",               // (single) debe coincidir EXACTO con una opción
    // correctSet: ["A", "C"],  // (multi) en vez de correct
    explanation: "Por qué es correcta y por qué fallan las otras…",
    reference: "Doc Databricks / libro + edición",
  },
]);
```

Para un tema nuevo, agrégalo a `window.TOPICS` (clave, etiqueta, color) en `00-core.js`.
**Valida siempre** tras editar: `python tools/validate.py`.

## Fuentes de referencia

**Data engineering general (best practices / estándares):**

- *Fundamentals of Data Engineering* — Joe Reis & Matt Housley (O'Reilly): el ciclo
  de vida de la ingeniería de datos (columna vertebral del temario general).
- *Designing Data-Intensive Applications* — Martin Kleppmann (2.ª ed.): sistemas
  distribuidos, consistencia, streaming.
- *The Data Warehouse Toolkit* — Ralph Kimball: modelado dimensional (estándar de oro).
- *Streaming Systems* — Akidau et al.: procesamiento de streams (event time, watermarks).
- *DAMA-DMBOK*: gobernanza y gestión de datos.

**Databricks:**

- Documentación oficial (Delta Lake, Auto Loader, Structured Streaming, Lakeflow
  Declarative Pipelines, Unity Catalog, Jobs, Asset Bundles).
- *Databricks Certified Data Engineer Associate Study Guide* — Derar Alhussein (O'Reilly).
- Guía oficial del examen (Databricks).

> 📚 El **libro PDF** que aportará el usuario se dejará en `sources/` para generar más
> preguntas basadas en él (pendiente, ver `sources/README.md`).

## Ideas para próximas versiones

- Crecer el banco a varios cientos de preguntas; equilibrar por dominio según el peso
  del examen.
- Modo "examen simulado": 45 preguntas cronometradas con puntuación final tipo cert.
- Etiquetar cada pregunta de Databricks con su dominio oficial del examen.
- Persistir estadísticas y repasar los fallos (repetición espaciada).
