"use strict";

/* ------------------------------------------------------------------ *
 * DE-Trainer — autoevaluación de data engineering y Databricks
 * Datos: questions.js (window.QUESTIONS) + window.TOPICS (curados a mano).
 * Cada pregunta revela su explicación razonada y la fuente al responder.
 * Filtros: enfoque (track), tema (topic) y dificultad.
 * Formatos de pregunta:
 *   single  — una alternativa correcta (incluye Verdadero/Falso)
 *   multi   — varias correctas (elige todas)
 *   fill    — completar con texto (comandos/sintaxis); compara contra 'accept'
 *   order   — ordenar/secuenciar elementos ('ordered' = orden correcto)
 * ------------------------------------------------------------------ */

const TOPICS = window.TOPICS || {};

// Fuentes (libros / documentación) sobre las que se pregunta.
const SOURCES = [
  { key: "databricks", label: "Databricks", short: "Databricks" },
  { key: "fundamentals", label: "Fundamentals of Data Engineering", short: "Fundamentals" },
  { key: "ddia", label: "Designing Data-Intensive Applications", short: "DDIA" },
];
const SOURCE_SHORT = Object.fromEntries(SOURCES.map((s) => [s.key, s.short]));

const DIFFICULTIES = [
  { key: "basico", label: "Básico" },
  { key: "intermedio", label: "Intermedio" },
  { key: "avanzado", label: "Avanzado" },
];
const DIFF_LABELS = Object.fromEntries(DIFFICULTIES.map((d) => [d.key, d.label]));

// Formatos que se comprueban con el botón "Comprobar" (no se responden de un clic).
const CHECKED_TYPES = new Set(["multi", "fill", "order"]);

const state = {
  all: [],
  pool: [],                                    // preguntas según filtros activos
  selectedSources: new Set(SOURCES.map((s) => s.key)),
  selectedTopics: new Set(),
  selectedDifficulties: new Set(DIFFICULTIES.map((d) => d.key)),
  availableTopics: [],                          // claves presentes en el banco
  seen: new Set(),                              // ids ya mostrados en el ciclo (no se repiten)
  current: null,
  answered: false,
  score: 0,
  total: 0,
  streak: 0,
};

const el = {
  controls: document.getElementById("controls"),
  card: document.getElementById("card"),
  qbadge: document.getElementById("qbadge"),
  prompt: document.getElementById("prompt"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  nextBtn: document.getElementById("nextBtn"),
  score: document.getElementById("score"),
  accuracy: document.getElementById("accuracy"),
  streak: document.getElementById("streak"),
};

/* ---------------------------- utilidades --------------------------- */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const arraysEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Normaliza una respuesta de texto: minúsculas, sin espacios extra ni puntuación/
// comillas/backticks/punto y coma en los extremos. Para preguntas de "completar".
function normalizeText(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/[`"'();]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/* --------------------- dropdown multiselección --------------------- */

function makeDropdown({ label, items, selected, allLabel, summarize, onChange }) {
  const root = document.createElement("div");
  root.className = "dropdown";

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "dropdown-btn";
  btn.setAttribute("aria-haspopup", "true");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML =
    `<span class="dd-label">${label}</span>` +
    `<span class="dd-value"></span>` +
    `<span class="dd-caret" aria-hidden="true">▾</span>`;
  const valueEl = btn.querySelector(".dd-value");

  const panel = document.createElement("div");
  panel.className = "dropdown-panel";
  panel.hidden = true;

  const master = document.createElement("label");
  master.className = "dd-option master";
  const masterBox = document.createElement("input");
  masterBox.type = "checkbox";
  master.append(masterBox, document.createTextNode("Todos"));
  panel.appendChild(master);
  panel.appendChild(Object.assign(document.createElement("div"), { className: "dd-divider" }));

  const boxes = items.map((item) => {
    const opt = document.createElement("label");
    opt.className = "dd-option";
    const box = document.createElement("input");
    box.type = "checkbox";
    box.value = item.value;
    box.checked = selected.has(item.value);
    if (item.dot) {
      const dot = document.createElement("span");
      dot.className = "dd-dot";
      dot.style.background = item.dot;
      opt.append(box, dot, document.createTextNode(item.label));
    } else {
      opt.append(box, document.createTextNode(item.label));
    }
    panel.appendChild(opt);
    box.addEventListener("change", () => {
      box.checked ? selected.add(item.value) : selected.delete(item.value);
      refresh();
      onChange();
    });
    return box;
  });

  masterBox.addEventListener("change", () => {
    if (masterBox.checked) items.forEach((i) => selected.add(i.value));
    else selected.clear();
    boxes.forEach((b) => (b.checked = selected.has(b.value)));
    refresh();
    onChange();
  });

  function refresh() {
    const n = selected.size;
    const total = items.length;
    masterBox.checked = n === total;
    masterBox.indeterminate = n > 0 && n < total;
    if (n === total) valueEl.textContent = allLabel;
    else if (n === 0) valueEl.textContent = "Ninguno";
    else if (n === 1) valueEl.textContent = items.find((i) => selected.has(i.value)).label;
    else valueEl.textContent = summarize(n, total);
  }

  function toggle(open) {
    const isOpen = open ?? panel.hidden;
    panel.hidden = !isOpen;
    root.classList.toggle("open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
  }
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllDropdowns(root);
    toggle();
  });
  panel.addEventListener("click", (e) => e.stopPropagation());
  root._close = () => toggle(false);

  root.append(btn, panel);
  refresh();
  return root;
}

function closeAllDropdowns(except) {
  document.querySelectorAll(".dropdown").forEach((d) => {
    if (d !== except && d._close) d._close();
  });
}
document.addEventListener("click", () => closeAllDropdowns());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllDropdowns();
});

function buildControls() {
  const sources = makeDropdown({
    label: "Fuente",
    items: SOURCES.map((s) => ({ value: s.key, label: s.label })),
    selected: state.selectedSources,
    allLabel: "Todas",
    summarize: (n) => `${n} fuentes`,
    onChange: () => {
      applyFilters();
      newQuestion();
    },
  });

  const topics = makeDropdown({
    label: "Tema",
    items: state.availableTopics.map((value) => ({
      value,
      label: TOPICS[value] ? TOPICS[value].label : value,
      dot: TOPICS[value] ? TOPICS[value].color : undefined,
    })),
    selected: state.selectedTopics,
    allLabel: "Todos",
    summarize: (n) => `${n} temas`,
    onChange: () => {
      applyFilters();
      newQuestion();
    },
  });

  const difficulty = makeDropdown({
    label: "Dificultad",
    items: DIFFICULTIES.map((d) => ({ value: d.key, label: d.label })),
    selected: state.selectedDifficulties,
    allLabel: "Todas",
    summarize: (n) => `${n} niveles`,
    onChange: () => {
      applyFilters();
      newQuestion();
    },
  });

  const themeBtn = document.createElement("button");
  themeBtn.type = "button";
  themeBtn.className = "theme-toggle";
  themeBtn.addEventListener("click", toggleTheme);
  el.themeToggle = themeBtn;

  el.controls.append(sources, topics, difficulty, themeBtn);
  updateThemeButton();
}

function updateThemeButton() {
  if (!el.themeToggle) return;
  const dark = document.documentElement.dataset.theme === "dark";
  el.themeToggle.textContent = dark ? "☀️" : "🌙";
  const label = dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
  el.themeToggle.setAttribute("aria-label", label);
  el.themeToggle.title = label;
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("detrainer.theme", next);
  } catch (_) {}
  updateThemeButton();
}

/* ----------------------- selección de preguntas -------------------- */

function applyFilters() {
  state.pool = state.all.filter(
    (q) =>
      state.selectedSources.has(q.source) &&
      state.selectedTopics.has(q.topic) &&
      state.selectedDifficulties.has(q.difficulty)
  );
}

function newQuestion() {
  if (state.pool.length === 0) {
    renderError("No hay preguntas con esta combinación. Activa más enfoques, temas o niveles.");
    return;
  }
  // No repetir ninguna ya vista en este ciclo: elige solo entre las pendientes.
  let candidates = state.pool.filter((q) => !state.seen.has(q.id));
  if (candidates.length === 0) {
    // Ciclo agotado (ya se vieron todas las del filtro): reinicia evitando
    // que la primera del nuevo ciclo sea, de inmediato, la última mostrada.
    state.seen.clear();
    const lastId = state.current && state.current.id;
    candidates = state.pool.filter((q) => q.id !== lastId);
    if (candidates.length === 0) candidates = state.pool;
  }

  const q = pick(candidates);
  state.seen.add(q.id);

  state.current = {
    ...q,
    multi: q.type === "multi",
    options: Array.isArray(q.options) ? shuffle(q.options) : undefined,
    orderPool: Array.isArray(q.ordered) ? shuffle(q.ordered) : undefined,
    chosen: [],
  };
  state.answered = false;
  renderQuestion();
}

/* ----------------------------- render ------------------------------ */

function renderError(msg) {
  el.qbadge.hidden = true;
  el.feedback.hidden = true;
  el.options.innerHTML = "";
  el.prompt.innerHTML = `<span class="error">${msg}</span>`;
  el.nextBtn.hidden = true;
}

function renderQuestion() {
  const q = state.current;
  const meta = TOPICS[q.topic] || { label: q.topic, color: "#888" };

  el.qbadge.hidden = false;
  el.qbadge.style.setProperty("--badge", meta.color);
  el.qbadge.innerHTML =
    `<span class="badge-icon"></span> ${meta.label}` +
    `<span class="badge-track">${SOURCE_SHORT[q.source] || q.source}</span>` +
    `<span class="badge-diff">${DIFF_LABELS[q.difficulty] || q.difficulty}</span>`;

  const hint =
    q.type === "multi"
      ? "Elige todas las que correspondan"
      : q.type === "order"
      ? "Toca los elementos en el orden correcto"
      : q.type === "fill"
      ? "Escribe tu respuesta y pulsa Comprobar"
      : "";
  el.prompt.innerHTML = q.prompt + (hint ? `<span class="multi-hint">${hint}</span>` : "");

  el.options.innerHTML = "";
  el.options.className = "options";
  if (q.type === "fill") renderFill(q);
  else if (q.type === "order") renderOrder(q);
  else renderChoices(q); // single | multi

  el.feedback.hidden = true;
  el.feedback.className = "feedback";
  el.feedback.innerHTML = "";

  // El botón principal: "Comprobar" en formatos que se comprueban; oculto en single.
  if (CHECKED_TYPES.has(q.type)) {
    el.nextBtn.hidden = false;
    el.nextBtn.innerHTML = "Comprobar";
  } else {
    el.nextBtn.hidden = true;
    el.nextBtn.innerHTML = 'Siguiente <span aria-hidden="true">→</span>';
  }

  el.card.classList.remove("fade-in");
  void el.card.offsetWidth;
  el.card.classList.add("fade-in");
}

// --- single / multi: botones de alternativa ---
function renderChoices(q) {
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.dataset.value = opt;
    btn.innerHTML =
      `<span class="key">${i + 1}</span>` +
      `<span class="opt-text">${opt}</span>` +
      `<span class="opt-mark" aria-hidden="true"></span>`;
    if (q.multi) {
      btn.classList.add("multi");
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => toggleMulti(btn));
    } else {
      btn.addEventListener("click", () => answerSingle(opt));
    }
    el.options.appendChild(btn);
  });
}

// --- fill: entrada de texto ---
function renderFill(q) {
  const wrap = document.createElement("div");
  wrap.className = "fill-wrap";
  const input = document.createElement("input");
  input.type = "text";
  input.className = "fill-input";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "Escribe tu respuesta…";
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !state.answered) {
      e.preventDefault();
      checkFillAnswer();
    }
  });
  wrap.appendChild(input);
  el.options.appendChild(wrap);
  el._fillInput = input;
  setTimeout(() => input.focus(), 0);
}

// --- order: secuencia + pool ---
function renderOrder(q) {
  const cont = document.createElement("div");
  cont.className = "order";

  const seq = document.createElement("div");
  seq.className = "order-seq";
  seq.id = "orderSeq";

  const pool = document.createElement("div");
  pool.className = "order-pool";
  pool.id = "orderPool";

  const reset = document.createElement("button");
  reset.type = "button";
  reset.className = "order-reset";
  reset.textContent = "Reiniciar orden";
  reset.addEventListener("click", () => {
    if (state.answered) return;
    q.chosen = [];
    paintOrder(q);
  });

  cont.append(seq, pool, reset);
  el.options.appendChild(cont);
  paintOrder(q);
}

function paintOrder(q) {
  const seq = document.getElementById("orderSeq");
  const pool = document.getElementById("orderPool");
  seq.innerHTML = "";
  pool.innerHTML = "";

  q.chosen.forEach((val, i) => {
    const chip = document.createElement("div");
    chip.className = "order-chip";
    chip.dataset.value = val;
    chip.innerHTML = `<span class="order-num">${i + 1}</span>${val}`;
    if (!state.answered) {
      chip.classList.add("removable");
      chip.title = "Quitar";
      chip.addEventListener("click", () => {
        q.chosen = q.chosen.filter((v) => v !== val);
        paintOrder(q);
      });
    }
    seq.appendChild(chip);
  });
  if (q.chosen.length === 0) {
    const ph = document.createElement("span");
    ph.className = "order-placeholder";
    ph.textContent = "Tu orden aparecerá aquí…";
    seq.appendChild(ph);
  }

  q.orderPool
    .filter((v) => !q.chosen.includes(v))
    .forEach((val) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "order-item";
      btn.textContent = val;
      btn.disabled = state.answered;
      btn.addEventListener("click", () => {
        if (state.answered) return;
        q.chosen.push(val);
        paintOrder(q);
      });
      pool.appendChild(btn);
    });
}

// Bloque de explicación + referencia que se revela tras responder.
function renderFeedback(isCorrect, headline) {
  const q = state.current;
  el.feedback.hidden = false;
  el.feedback.classList.add(isCorrect ? "ok" : "bad");
  el.feedback.innerHTML =
    `<p class="fb-headline">${headline}</p>` +
    `<p class="fb-explanation">${q.explanation}</p>` +
    (q.reference
      ? `<p class="fb-reference"><span class="fb-reference-tag">Fuente</span> ${q.reference}</p>`
      : "");
}

function recordResult(isCorrect) {
  state.total += 1;
  if (isCorrect) {
    state.score += 1;
    state.streak += 1;
  } else {
    state.streak = 0;
  }
  updateStats();
}

/* --------------------------- comprobación -------------------------- */

function answerSingle(value) {
  if (state.answered) return;
  state.answered = true;
  const q = state.current;
  const correct = value === q.correct;
  recordResult(correct);

  el.options.querySelectorAll(".option").forEach((btn) => {
    btn.disabled = true;
    const v = btn.dataset.value;
    const mark = btn.querySelector(".opt-mark");
    if (v === q.correct) {
      btn.classList.add("correct");
      mark.textContent = "✓";
    } else if (v === value) {
      btn.classList.add("wrong");
      mark.textContent = "✗";
    } else {
      btn.classList.add("dimmed");
    }
  });

  renderFeedback(correct, correct ? "¡Correcto! 🎉" : `Incorrecto — la respuesta era: ${q.correct}`);
  el.nextBtn.hidden = false;
  el.nextBtn.focus();
}

function toggleMulti(btn) {
  if (state.answered) return;
  const on = btn.classList.toggle("selected");
  btn.setAttribute("aria-pressed", String(on));
}

function checkMultiAnswer() {
  if (state.answered) return;
  state.answered = true;
  const q = state.current;
  const correctSet = new Set(q.correctSet);
  const selected = new Set(
    [...el.options.querySelectorAll(".option.selected")].map((b) => b.dataset.value)
  );
  const isCorrect =
    selected.size === correctSet.size && [...correctSet].every((v) => selected.has(v));
  recordResult(isCorrect);

  el.options.querySelectorAll(".option").forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("selected");
    const v = btn.dataset.value;
    const mark = btn.querySelector(".opt-mark");
    if (correctSet.has(v)) {
      btn.classList.add("correct"); // todas las correctas en verde (incluidas las no marcadas)
      mark.textContent = "✓";
    } else if (selected.has(v)) {
      btn.classList.add("wrong");
      mark.textContent = "✗";
    } else {
      btn.classList.add("dimmed");
    }
  });

  renderFeedback(
    isCorrect,
    isCorrect ? "¡Correcto! 🎉" : `Incorrecto — eran: ${q.correctSet.join(", ")}`
  );
  el.nextBtn.innerHTML = 'Siguiente <span aria-hidden="true">→</span>';
  el.nextBtn.focus();
}

function checkFillAnswer() {
  if (state.answered) return;
  const q = state.current;
  const input = el._fillInput;
  if (!input) return;
  state.answered = true;

  const norm = normalizeText(input.value);
  const accepted = (q.accept || []).map(normalizeText);
  const isCorrect = norm.length > 0 && accepted.includes(norm);
  recordResult(isCorrect);

  input.disabled = true;
  input.classList.add(isCorrect ? "correct" : "wrong");
  const shown = q.answerDisplay || (q.accept && q.accept[0]) || "";
  renderFeedback(
    isCorrect,
    isCorrect ? "¡Correcto! 🎉" : `Incorrecto — una respuesta válida era: ${shown}`
  );
  el.nextBtn.innerHTML = 'Siguiente <span aria-hidden="true">→</span>';
  el.nextBtn.focus();
}

function checkOrderAnswer() {
  if (state.answered) return;
  const q = state.current;
  state.answered = true;

  const isCorrect = arraysEqual(q.chosen, q.ordered);
  recordResult(isCorrect);

  // Pinta la secuencia elegida marcando aciertos por posición.
  const seq = document.getElementById("orderSeq");
  if (seq) {
    seq.innerHTML = "";
    q.chosen.forEach((val, i) => {
      const chip = document.createElement("div");
      chip.className = "order-chip " + (q.ordered[i] === val ? "correct" : "wrong");
      chip.innerHTML = `<span class="order-num">${i + 1}</span>${val}`;
      seq.appendChild(chip);
    });
    if (q.chosen.length === 0) {
      const ph = document.createElement("span");
      ph.className = "order-placeholder";
      ph.textContent = "(no ordenaste nada)";
      seq.appendChild(ph);
    }
  }
  paintDisablePool();

  renderFeedback(
    isCorrect,
    isCorrect
      ? "¡Correcto! 🎉"
      : `Incorrecto — el orden correcto era: ${q.ordered.join("  →  ")}`
  );
  el.nextBtn.innerHTML = 'Siguiente <span aria-hidden="true">→</span>';
  el.nextBtn.focus();
}

function paintDisablePool() {
  const pool = document.getElementById("orderPool");
  if (pool) pool.querySelectorAll("button").forEach((b) => (b.disabled = true));
  const reset = el.options.querySelector(".order-reset");
  if (reset) reset.disabled = true;
}

// El botón principal hace "Comprobar" (según el tipo) o "Siguiente".
function onPrimary() {
  const q = state.current;
  if (q && !state.answered && CHECKED_TYPES.has(q.type)) {
    if (q.type === "multi") checkMultiAnswer();
    else if (q.type === "fill") checkFillAnswer();
    else if (q.type === "order") checkOrderAnswer();
  } else {
    newQuestion();
  }
}

function updateStats() {
  el.score.textContent = state.score;
  el.streak.textContent = state.streak;
  el.accuracy.textContent =
    state.total === 0 ? "—" : `${Math.round((state.score / state.total) * 100)}%`;
}

/* ------------------------------ setup ------------------------------ */

function bindEvents() {
  el.nextBtn.addEventListener("click", onPrimary);
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, select, textarea")) return;
    const q = state.current;
    const n = Number(e.key);
    // Atajos numéricos solo para alternativas (single/multi).
    if (n >= 1 && n <= 9 && !state.answered && q && (q.type === "single" || q.type === "multi")) {
      const btn = el.options.querySelectorAll(".option")[n - 1];
      if (btn) btn.click();
    } else if (e.key === "Enter" || e.key === " ") {
      if (q && CHECKED_TYPES.has(q.type) && !state.answered) {
        e.preventDefault();
        onPrimary();
      } else if (state.answered) {
        e.preventDefault();
        newQuestion();
      }
    }
  });
}

function init() {
  if (!Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
    renderError("No se cargaron las preguntas (data/questions/).");
    return;
  }
  state.all = window.QUESTIONS;
  // Temas presentes en el banco, en el orden definido en TOPICS.
  const present = new Set(state.all.map((q) => q.topic));
  state.availableTopics = Object.keys(TOPICS).filter((k) => present.has(k));
  present.forEach((k) => {
    if (!state.availableTopics.includes(k)) state.availableTopics.push(k);
  });
  state.selectedTopics = new Set(state.availableTopics);

  applyFilters();
  buildControls();
  bindEvents();
  newQuestion();
}

init();
