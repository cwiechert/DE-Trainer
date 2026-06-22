// DE-Trainer — catálogo de temas (window.TOPICS) y arranque del banco.
// Las preguntas viven en general.js (DE general) y databricks.js (Databricks).
// Paleta fría = DE general; paleta cálida (rojos/naranjas) = Databricks.

window.TOPICS = {
  // ---- DE general ----
  fundamentos:    { label: "Fundamentos y ciclo de vida", color: "#6366f1" },
  modelado:       { label: "Modelado de datos",           color: "#0ea5e9" },
  almacenamiento: { label: "Almacenamiento y formatos",   color: "#14b8a6" },
  ingesta:        { label: "Ingesta y CDC",               color: "#22c55e" },
  transformacion: { label: "Transformación (ETL/ELT)",    color: "#84cc16" },
  orquestacion:   { label: "Orquestación",                color: "#3b82f6" },
  streaming:      { label: "Streaming",                   color: "#06b6d4" },
  calidad:        { label: "Calidad y gobernanza",        color: "#8b5cf6" },
  sql:            { label: "SQL",                          color: "#a855f7" },
  // ---- Databricks ----
  lakehouse:      { label: "Plataforma Lakehouse",        color: "#ef4444" },
  deltalake:      { label: "Delta Lake",                  color: "#f97316" },
  spark:          { label: "Apache Spark",                color: "#f59e0b" },
  autoloader:     { label: "Auto Loader / Ingesta",       color: "#fb923c" },
  dlt:            { label: "Lakeflow / DLT Pipelines",    color: "#e11d48" },
  databricksql:   { label: "Databricks SQL",              color: "#fbbf24" },
  unitycatalog:   { label: "Unity Catalog",               color: "#dc2626" },
  workflows:      { label: "Jobs / Workflows",            color: "#f43f5e" },
};

window.QUESTIONS = window.QUESTIONS || [];
