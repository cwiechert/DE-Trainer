// DE-Trainer — preguntas originales basadas en "Fundamentals of Data Engineering"
// (Joe Reis & Matt Housley, O'Reilly, 2022). Track: general.
// Cada pregunta evalúa conceptos; NO reproduce texto literal del libro y cita el capítulo.
//
// Cobertura por capítulo:
//   cap. 1 — Data Engineering Described       -> fde-c1-XX
//   cap. 2 — The Data Engineering Lifecycle   -> fde-c2-XX
//   cap. 3 — Designing Good Data Architecture  -> fde-c3-XX
//   cap. 4 — Choosing Technologies             -> fde-c4-XX
//   cap. 5 — Data Generation in Source Systems -> fde-c5-XX
//   cap. 6 — Storage                           -> fde-c6-XX
//   cap. 7 — Ingestion                         -> fde-c7-XX
//   cap. 9 — Serving Data (Analytics, ML, Reverse ETL) -> fde-c9-XX
//   cap. 10 — Security and Privacy             -> fde-c10-XX
//   cap. 11 — The Future of Data Engineering   -> fde-c11-XX
//   cap. 8 — Queries, Modeling, and Transformation -> fde-c8-XX
window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "fde-c1-01",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Según Reis & Housley, ¿cuál es la mejor definición de ingeniería de datos?",
    options: [
      "El desarrollo, implementación y mantenimiento de sistemas y procesos que toman datos en bruto y producen información consistente y de alta calidad para usos posteriores como análisis y machine learning",
      "La construcción y el ajuste (tuning) de modelos de machine learning en producción",
      "El diseño de dashboards y reportes de inteligencia de negocio para los ejecutivos",
      "La administración exclusiva de bases de datos relacionales y la escritura de consultas SQL",
    ],
    correct:
      "El desarrollo, implementación y mantenimiento de sistemas y procesos que toman datos en bruto y producen información consistente y de alta calidad para usos posteriores como análisis y machine learning",
    explanation:
      "Reis & Housley definen la ingeniería de datos como el desarrollo, implementación y mantenimiento de sistemas que convierten datos en bruto en información de alta calidad para usos downstream (análisis, ML). Es la intersección de seguridad, gestión de datos, DataOps, arquitectura de datos, orquestación e ingeniería de software, y el ingeniero gestiona el ciclo de vida desde los sistemas fuente hasta servir los datos. Construir modelos de ML o dashboards son tareas que normalmente NO hace directamente.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  {
    id: "fde-c1-02",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt:
      "El ciclo de vida de la ingeniería de datos tiene 'corrientes subyacentes' (undercurrents) que lo atraviesan de extremo a extremo. ¿Cuáles de las siguientes son corrientes subyacentes (y NO etapas del ciclo)?",
    options: [
      "Seguridad",
      "DataOps",
      "Orquestación",
      "Ingeniería de software",
      "Ingesta",
      "Servir (serving)",
      "Generación",
    ],
    correctSet: ["Seguridad", "DataOps", "Orquestación", "Ingeniería de software"],
    explanation:
      "Las corrientes subyacentes son ideas críticas que cruzan todo el ciclo: seguridad, gestión de datos, DataOps, arquitectura de datos, orquestación e ingeniería de software. En cambio, generación, almacenamiento, ingesta, transformación y servir son las ETAPAS del ciclo, no corrientes subyacentes.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  {
    id: "fde-c1-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "order",
    prompt:
      "Ordena las tres etapas del modelo simplificado de madurez de datos de Reis & Housley, de la más temprana a la más avanzada.",
    ordered: [
      "Empezar con los datos (Starting with data)",
      "Escalar con los datos (Scaling with data)",
      "Liderar con los datos (Leading with data)",
    ],
    explanation:
      "El modelo simplificado tiene tres etapas: (1) Empezar con los datos — equipo pequeño, ingeniero generalista, objetivos difusos, peticiones ad hoc; (2) Escalar con los datos — prácticas formales, arquitecturas escalables, roles que pasan de generalistas a especialistas, adopción de DevOps/DataOps; (3) Liderar con los datos — empresa data-driven, autoservicio de analítica y ML, foco en gobernanza, catálogos y linaje. La madurez no depende de la edad ni los ingresos de la empresa, sino de cómo se aprovechan los datos como ventaja competitiva.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  {
    id: "fde-c1-04",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt:
      "Reis & Housley sostienen que la ingeniería de datos NO es una subdisciplina de la ciencia de datos. ¿Qué afirmación refleja mejor su postura y la 'jerarquía de necesidades de la ciencia de datos' (Rogati)?",
    options: [
      "La ingeniería de datos está aguas arriba (upstream) de la ciencia de datos: provee la base sólida (recolección, almacenamiento, infraestructura) sin la cual la IA/ML de las capas superiores no es viable",
      "La ciencia de datos está aguas arriba de la ingeniería de datos y le entrega modelos ya entrenados para que esta los despliegue",
      "Son sinónimos; la distinción es solo de título y no afecta el flujo de datos",
      "La ingeniería de datos solo cobra importancia después de tener modelos de ML en producción",
    ],
    correct:
      "La ingeniería de datos está aguas arriba (upstream) de la ciencia de datos: provee la base sólida (recolección, almacenamiento, infraestructura) sin la cual la IA/ML de las capas superiores no es viable",
    explanation:
      "La ingeniería de datos se sitúa aguas arriba de la ciencia de datos: el ingeniero provee los insumos (datos recolectados, almacenados y procesados) que el científico consume aguas abajo. En la jerarquía de Rogati, la IA/ML está en la cima pero requiere una base sólida (movimiento/almacenamiento, recolección, infraestructura) en los niveles inferiores; por eso se estima que los científicos de datos gastan 70-80% del tiempo recolectando y limpiando datos cuando esa base no existe.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  {
    id: "fde-c1-05",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Reis & Housley distinguen ingenieros de datos 'Tipo A' y 'Tipo B'. ¿Cuál es la diferencia?",
    options: [
      "Tipo A (abstracción): evita el trabajo pesado indiferenciado y usa productos y servicios gestionados listos para usar; Tipo B (build): construye herramientas y sistemas a medida que escalan la ventaja competitiva de la empresa",
      "Tipo A trabaja solo con datos en batch y Tipo B solo con streaming en tiempo real",
      "Tipo A son perfiles junior y Tipo B senior, según los años de experiencia",
      "Tipo A escribe únicamente SQL y Tipo B únicamente Python",
    ],
    correct:
      "Tipo A (abstracción): evita el trabajo pesado indiferenciado y usa productos y servicios gestionados listos para usar; Tipo B (build): construye herramientas y sistemas a medida que escalan la ventaja competitiva de la empresa",
    explanation:
      "El Tipo A ('abstraction') mantiene la arquitectura simple y abstracta apoyándose en productos y servicios gestionados off-the-shelf, y aparece en empresas de cualquier nivel de madurez. El Tipo B ('build') construye herramientas a medida que escalan y aprovechan la competencia central de la empresa; es más común en las etapas 2 y 3 (escalar y liderar). Pueden coexistir e incluso ser la misma persona.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  {
    id: "fde-c1-06",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "multi",
    prompt:
      "¿Cuáles son los lenguajes 'primarios' de la ingeniería de datos según Reis & Housley (al momento de escribir el libro)?",
    options: ["SQL", "Python", "Un lenguaje de la JVM (Java o Scala)", "bash", "R", "JavaScript", "Go"],
    correctSet: ["SQL", "Python", "Un lenguaje de la JVM (Java o Scala)", "bash"],
    explanation:
      "Los autores clasifican los lenguajes en primarios y secundarios. Primarios: SQL (lingua franca de los datos), Python (puente entre ingeniería y ciencia de datos), un lenguaje de la JVM como Java o Scala (frecuente en proyectos Apache: Spark, Hive) y bash (CLI para scripting y operaciones del SO). R, JavaScript, Go, Rust, C#, Julia, etc., son secundarios: útiles según el dominio o la empresa.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  {
    id: "fde-c1-07",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt:
      "Completa: en el ciclo de vida de la ingeniería de datos, la etapa de ________ es transversal y sostiene/atraviesa la ingesta, la transformación y el servir (no es un paso estrictamente secuencial).",
    accept: ["almacenamiento", "storage", "el almacenamiento"],
    answerDisplay: "Almacenamiento (storage)",
    explanation:
      "Aunque el ciclo se enumera de forma lineal (Generación, Almacenamiento, Ingesta, Transformación, Servir), el almacenamiento es transversal: sostiene y atraviesa las etapas de ingesta, transformación y servir, por lo que suele representarse abarcando varias etapas en lugar de un único paso secuencial.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  {
    id: "fde-c1-08",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt:
      "Un ingeniero de datos 'external-facing' (que sirve a apps externas: redes sociales, IoT, e-commerce) enfrenta retos distintos a uno 'internal-facing'. ¿Cuál los describe mejor?",
    options: [
      "Cargas de concurrencia mucho mayores, necesidad de límites estrictos a las consultas de cada usuario, y seguridad más compleja (p. ej. datos multitenant en una misma tabla)",
      "Menor concurrencia y requisitos de seguridad más laxos, porque los datos no salen de la empresa",
      "Únicamente construye dashboards de BI y reportes para el management interno",
      "Trabaja solo con cargas batch nocturnas, sin restricciones de latencia ni de concurrencia",
    ],
    correct:
      "Cargas de concurrencia mucho mayores, necesidad de límites estrictos a las consultas de cada usuario, y seguridad más compleja (p. ej. datos multitenant en una misma tabla)",
    explanation:
      "El ingeniero external-facing alimenta aplicaciones de usuarios externos, con bucles de retroalimentación app→pipeline→app. Sus motores de consulta suelen manejar mucha mayor concurrencia que los internos, requieren límites estrictos por usuario para acotar el impacto de cualquier consulta, y enfrentan una seguridad más sensible, en especial con datos multitenant (de muchos clientes en una misma tabla). El internal-facing, en cambio, suele servir BI, reportes, procesos y modelos para stakeholders internos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 1 — Data Engineering Described",
  },

  // ---- cap. 2 — The Data Engineering Lifecycle ----
  {
    id: "fde-c2-01",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En ingesta de datos, ¿cuál es la diferencia entre los modelos 'push' y 'pull', y cómo se relacionan con ETL y CDC?",
    options: [
      "En push, el sistema fuente escribe/empuja los datos hacia un destino; en pull, el sistema de ingesta consulta y extrae del fuente. El 'extract' de ETL es pull; el CDC por binary logs es un ejemplo de push",
      "En push el sistema de ingesta extrae del fuente; en pull el fuente envía los datos. ETL siempre usa push",
      "Push y pull son sinónimos; la diferencia es solo el protocolo de red",
      "Push solo aplica a batch y pull solo a streaming",
    ],
    correct:
      "En push, el sistema fuente escribe/empuja los datos hacia un destino; en pull, el sistema de ingesta consulta y extrae del fuente. El 'extract' de ETL es pull; el CDC por binary logs es un ejemplo de push",
    explanation:
      "En el modelo push el sistema fuente escribe los datos hacia un destino (BD, object store, endpoint); en el modelo pull el sistema de ingesta consulta y recupera desde el fuente. La 'E' (extract) de ETL es pull: consulta un snapshot de la tabla fuente en un horario fijo. El CDC por binary logs es push (la BD empuja a su log y el ingestor lo lee, con poca carga sobre la fuente). En la práctica los datos se empujan y se jalan a lo largo del pipeline.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-02",
    topic: "ingesta",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Entre los métodos de Change Data Capture (CDC), ¿cuál añade la MENOR carga adicional a la base de datos fuente?",
    options: [
      "CDC basado en binary logs (logs de transacciones): la BD ya escribe el log de commits y el ingestor lo lee, sin consultar las tablas directamente",
      "CDC basado en triggers que disparan un mensaje por cada fila modificada",
      "CDC basado en timestamps que consulta repetidamente la tabla por filas cambiadas",
      "Tomar snapshots completos de toda la tabla cada pocos minutos",
    ],
    correct:
      "CDC basado en binary logs (logs de transacciones): la BD ya escribe el log de commits y el ingestor lo lee, sin consultar las tablas directamente",
    explanation:
      "El CDC por binary logs aprovecha que la base de datos ya registra cada commit en su log; el sistema de ingesta lee ese log y no interactúa directamente con las tablas, añadiendo poca o ninguna carga a la fuente. Los triggers (push por fila) y el CDC por timestamp (pull que consulta la tabla) imponen más carga; los snapshots completos son los más costosos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-03",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Reis & Housley, ¿cuál es un buen criterio para decidir entre ingesta por streaming (tiempo real) y batch/micro-batch?",
    options: [
      "Adoptar streaming en tiempo real solo cuando exista un caso de negocio que justifique los costos y la complejidad extra; para muchos casos (entrenar modelos, reportes) batch o micro-batch es excelente",
      "Siempre preferir streaming en tiempo real, porque batch está obsoleto",
      "Usar streaming únicamente cuando los datos sean pequeños",
      "Batch y streaming dan exactamente la misma latencia, así que da igual cuál elegir",
    ],
    correct:
      "Adoptar streaming en tiempo real solo cuando exista un caso de negocio que justifique los costos y la complejidad extra; para muchos casos (entrenar modelos, reportes) batch o micro-batch es excelente",
    explanation:
      "Aunque casi todos los datos nacen como stream, el tiempo real añade costos, complejidad, mantenimiento y posibles puntos de fallo. Los autores recomiendan adoptar verdadero streaming solo cuando un caso de negocio lo justifique frente al batch; a menudo un enfoque micro-batch (p. ej. cada minuto) basta. Batch sigue siendo excelente para entrenamiento de modelos y reportes periódicos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-04",
    topic: "almacenamiento",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "En almacenamiento, las 'temperaturas' de los datos (hot, warm/lukewarm, cold) se definen principalmente por:",
    options: [
      "La frecuencia de acceso: hot = muy frecuente (recuperación rápida), warm = ocasional, cold = rara vez (archivado barato, pero recuperación cara)",
      "La temperatura física del disco donde se guardan",
      "El tamaño del dataset: hot = grande, cold = pequeño",
      "La antigüedad del dato exclusivamente, sin importar el acceso",
    ],
    correct:
      "La frecuencia de acceso: hot = muy frecuente (recuperación rápida), warm = ocasional, cold = rara vez (archivado barato, pero recuperación cara)",
    explanation:
      "La 'temperatura' refleja la frecuencia de acceso. Los datos hot se consultan muchas veces (hasta varias por segundo) y requieren recuperación rápida; los warm/lukewarm, cada semana o mes; los cold, rara vez, y se archivan en tiers muy baratos de almacenar pero con recuperación costosa (p. ej. clases de archivado en la nube). No depende de la antigüedad ni del tamaño per se, sino del patrón de acceso.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-05",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál afirmación sobre el almacenamiento de objetos (object storage, p. ej. Amazon S3) es correcta?",
    options: [
      "No gestiona metadatos de esquema por sí mismo (requiere un metastore aparte), y aplicarle actualizaciones de acceso aleatorio de alta frecuencia es un antipatrón costoso",
      "Gestiona el esquema internamente igual que un data warehouse en la nube",
      "Está optimizado para muchas actualizaciones pequeñas y aleatorias fila por fila",
      "No puede usarse como capa de almacenamiento para data lakes",
    ],
    correct:
      "No gestiona metadatos de esquema por sí mismo (requiere un metastore aparte), y aplicarle actualizaciones de acceso aleatorio de alta frecuencia es un antipatrón costoso",
    explanation:
      "El object storage es schema-agnóstico: no administra metadatos de esquema internamente (a diferencia de un cloud data warehouse), por lo que el esquema se gestiona en un metastore externo. Además, aplicar muchas actualizaciones de acceso aleatorio sobre objetos es un antipatrón con gran sobrecarga de rendimiento: favorece escrituras/lecturas de objetos completos. Es la capa estándar para data lakes y para transmisión de datos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-06",
    topic: "transformacion",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Inmediatamente después de la ingesta, ¿qué tipo de transformaciones 'básicas' se aplican típicamente a los datos?",
    options: [
      "Mapear a los tipos correctos (texto → numérico/fecha), llevar los registros a formatos estándar y eliminar los registros defectuosos",
      "Entrenar modelos de machine learning sobre los datos en bruto",
      "Generar directamente los dashboards finales para los ejecutivos",
      "Borrar permanentemente la tabla fuente",
    ],
    correct:
      "Mapear a los tipos correctos (texto → numérico/fecha), llevar los registros a formatos estándar y eliminar los registros defectuosos",
    explanation:
      "La transformación convierte los datos de su forma original en algo útil. Justo tras la ingesta, las transformaciones básicas mapean a los tipos correctos (p. ej. strings a numéricos y fechas), estandarizan formatos y descartan registros malos. Etapas posteriores aplican normalización, cambios de esquema, agregaciones para reportes o featurización para ML.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-07",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En la etapa de transformación, la 'featurización' (featurization) se refiere a:",
    options: [
      "Extraer y enriquecer características (features) útiles para entrenar modelos de ML; una vez los científicos definen cómo featurizar, el ingeniero puede automatizar ese proceso en el pipeline",
      "Añadir nuevas funcionalidades a la interfaz de usuario de la aplicación",
      "Comprimir los datos para ahorrar almacenamiento",
      "Eliminar todas las columnas numéricas del dataset",
    ],
    correct:
      "Extraer y enriquecer características (features) útiles para entrenar modelos de ML; una vez los científicos definen cómo featurizar, el ingeniero puede automatizar ese proceso en el pipeline",
    explanation:
      "La featurización extrae y realza características relevantes para entrenar modelos de ML; combina conocimiento de dominio (qué features predicen mejor) con experiencia de ciencia de datos. El punto clave para ingeniería de datos: una vez definidas las features, el ingeniero puede automatizar su cálculo dentro de la etapa de transformación. La lógica de negocio (modelado de datos) también es un gran motor de la transformación.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-08",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Algunas arquitecturas de BI adoptan un enfoque 'logic-on-read'. ¿Qué significa?",
    options: [
      "Los datos se almacenan limpios pero bastante crudos (mínima lógica de negocio precomputada) y la lógica se aplica al consultar, manteniéndose en un repositorio del sistema de BI",
      "La lógica de negocio se hornea por completo en la etapa de transformación antes de almacenar, y nunca se aplica al leer",
      "Los datos solo pueden leerse una vez (write-once, read-once)",
      "Es un sinónimo exacto del ETL tradicional",
    ],
    correct:
      "Los datos se almacenan limpios pero bastante crudos (mínima lógica de negocio precomputada) y la lógica se aplica al consultar, manteniéndose en un repositorio del sistema de BI",
    explanation:
      "En 'logic-on-read', los datos se guardan limpios pero relativamente crudos, con poca lógica de negocio precomputada; la lógica y definiciones de negocio viven en un repositorio del sistema de BI y se aplican al consultar el data warehouse, para que reportes y dashboards se alineen con las definiciones del negocio. Contrasta con aplicar toda la lógica en la etapa de transformación antes de almacenar.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-09",
    topic: "orquestacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué distingue a un motor de orquestación (p. ej. Airflow) de un simple planificador (scheduler) como cron?",
    options: [
      "Un scheduler puro solo conoce el tiempo; un orquestador conoce además las dependencias entre trabajos (como un DAG) y lanza cada tarea cuando sus dependencias upstream se completan",
      "Cron conoce las dependencias entre trabajos y Airflow solo el horario",
      "No hay diferencia; orquestador y scheduler son lo mismo",
      "Un orquestador solo puede ejecutar un único trabajo a la vez, sin dependencias",
    ],
    correct:
      "Un scheduler puro solo conoce el tiempo; un orquestador conoce además las dependencias entre trabajos (como un DAG) y lanza cada tarea cuando sus dependencias upstream se completan",
    explanation:
      "Un planificador puro como cron solo es consciente del tiempo (ejecuta a tal hora). Un motor de orquestación incorpora metadatos de dependencias entre trabajos, normalmente como un DAG: verifica que las dependencias upstream estén listas y lanza cada tarea en cuanto sus predecesoras terminan, en lugar de a una hora fija. Además aporta historial, visualización, alertas y backfilling.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-10",
    topic: "orquestacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Reis & Housley afirman que la orquestación clásica (con DAGs de tareas) es estrictamente un concepto de batch. ¿Cuál es su alternativa en streaming?",
    options: [
      "El 'streaming DAG', más difícil de construir y mantener (plataformas como Pulsar buscan reducir esa carga)",
      "El cron, que es la versión en streaming del DAG",
      "El snapshot completo de tabla",
      "El feature store",
    ],
    correct: "El 'streaming DAG', más difícil de construir y mantener (plataformas como Pulsar buscan reducir esa carga)",
    explanation:
      "La orquestación con DAGs de tareas es estrictamente un concepto batch. Su equivalente en streaming es el 'streaming DAG', que sigue siendo difícil de construir y mantener; plataformas de nueva generación como Pulsar buscan reducir esa carga de ingeniería y operación.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-11",
    topic: "orquestacion",
    track: "general",
    difficulty: "basico",
    type: "fill",
    prompt: "Completa: en los orquestadores actuales, el concepto central es 'pipelines as code' — los ingenieros usan código (típicamente ________) para declarar las tareas de datos y sus dependencias.",
    accept: ["python", "el lenguaje python"],
    answerDisplay: "Python",
    explanation:
      "El concepto central de los orquestadores modernos es 'pipelines as code': los ingenieros declaran en código —típicamente Python— las tareas de datos y las dependencias entre ellas, y el motor de orquestación interpreta esas instrucciones para ejecutarlas con los recursos disponibles. Airflow, escrito en Python, popularizó este enfoque.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-12",
    topic: "orquestacion",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "¿Cuáles de las siguientes son capacidades propias de un motor de orquestación (más allá de lo que ofrece un cron)?",
    options: [
      "Verificar dependencias entre trabajos antes de ejecutarlos (DAG)",
      "Backfilling de DAGs o tareas nuevas",
      "Alertas cuando un trabajo no termina a tiempo o falla",
      "Historial y visualización de las ejecuciones",
      "Garantizar la exactitud factual del contenido de negocio en cada fila",
      "Eliminar por completo la necesidad de escribir código",
    ],
    correctSet: [
      "Verificar dependencias entre trabajos antes de ejecutarlos (DAG)",
      "Backfilling de DAGs o tareas nuevas",
      "Alertas cuando un trabajo no termina a tiempo o falla",
      "Historial y visualización de las ejecuciones",
    ],
    explanation:
      "Un orquestador coordina trabajos según un DAG de dependencias: verifica que las dependencias estén listas, hace backfilling de DAGs/tareas nuevas, monitorea sistemas externos, emite alertas (p. ej. si un pipeline nocturno no termina a las 10 a.m.) y guarda historial y visualización. No valida la 'exactitud factual' del negocio (eso es calidad de datos) ni elimina la necesidad de escribir código (los pipelines se declaran como código).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-13",
    topic: "calidad",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Según el libro (citando 'Data Governance: The Definitive Guide'), las tres categorías centrales de la gobernanza de datos son:",
    options: [
      "Descubribilidad (discoverability), seguridad (security) y responsabilidad (accountability)",
      "Velocidad, variedad y volumen",
      "Extracción, transformación y carga",
      "Hot, warm y cold",
    ],
    correct: "Descubribilidad (discoverability), seguridad (security) y responsabilidad (accountability)",
    explanation:
      "Las categorías centrales de la gobernanza de datos son descubribilidad, seguridad y responsabilidad (accountability). Dentro de ellas hay subcategorías como calidad de datos, metadatos y privacidad. La gobernanza involucra personas, procesos y tecnología para maximizar el valor del dato protegiéndolo con controles adecuados.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-14",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "El DMBOK identifica cuatro categorías de metadatos útiles para el ingeniero de datos. ¿Cuáles son?",
    options: [
      "Metadatos de negocio (business)",
      "Metadatos técnicos (technical)",
      "Metadatos operacionales (operational)",
      "Metadatos de referencia (reference)",
      "Metadatos de marketing",
      "Metadatos financieros",
    ],
    correctSet: [
      "Metadatos de negocio (business)",
      "Metadatos técnicos (technical)",
      "Metadatos operacionales (operational)",
      "Metadatos de referencia (reference)",
    ],
    explanation:
      "El DMBOK define cuatro categorías: (1) negocio — definiciones, reglas y dueños del dato; (2) técnicos — modelo y esquema, linaje, mapeos de campos, workflows de pipeline; (3) operacionales — resultados de ejecución: estadísticas de procesos, job IDs, logs de runtime y de error; (4) referencia — datos para clasificar otros datos (códigos, unidades, calendarios). Los metadatos son 'datos sobre los datos' y sostienen todo el ciclo.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-15",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es el linaje de datos (data lineage)?",
    options: [
      "El registro de un rastro de auditoría del dato a lo largo de su ciclo de vida: qué sistemas lo procesan y de qué datos upstream depende, conforme se transforma y combina",
      "El número total de filas almacenadas en el data warehouse",
      "La antigüedad del dato medida en días desde su creación",
      "La temperatura de acceso (hot/cold) de una tabla",
    ],
    correct:
      "El registro de un rastro de auditoría del dato a lo largo de su ciclo de vida: qué sistemas lo procesan y de qué datos upstream depende, conforme se transforma y combina",
    explanation:
      "El linaje de datos registra un rastro de auditoría de la evolución del dato: los sistemas que lo procesan y los datos upstream de los que depende, conforme se transforma y combina. Ayuda al rastreo de errores, la responsabilidad, la depuración y el cumplimiento (p. ej. para borrar los datos de un usuario hay que saber dónde están y sus dependencias). Se relaciona con el DODD (Data Observability Driven Development).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-16",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En gestión de datos maestros (Master Data Management, MDM), ¿qué es un 'golden record' (registro dorado)?",
    options: [
      "Una definición consistente y armonizada de una entidad de negocio (empleado, cliente, producto, ubicación) a través de toda la organización y sus socios",
      "El registro más antiguo de una tabla de hechos",
      "Una copia de respaldo cifrada de la base de datos",
      "La fila con el valor numérico más alto en un dataset",
    ],
    correct:
      "Una definición consistente y armonizada de una entidad de negocio (empleado, cliente, producto, ubicación) a través de toda la organización y sus socios",
    explanation:
      "Los datos maestros describen entidades de negocio (empleados, clientes, productos, ubicaciones). El MDM construye definiciones consistentes de esas entidades —los 'golden records'— que armonizan la información a través de la organización y con sus socios. Es un proceso de operaciones de negocio facilitado por tecnología; el ingeniero de datos suele colaborar aunque no siempre sea el dueño.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  {
    id: "fde-c2-17",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuáles son los tres elementos técnicos centrales de DataOps según Reis & Housley?",
    options: [
      "Automatización; observabilidad y monitoreo; y respuesta a incidentes",
      "Generación, almacenamiento e ingesta",
      "Hot, warm y cold",
      "Extracción, transformación y carga",
    ],
    correct: "Automatización; observabilidad y monitoreo; y respuesta a incidentes",
    explanation:
      "DataOps mapea las mejores prácticas de Agile, DevOps y control estadístico de procesos (SPC) a los datos. Sus tres pilares técnicos son: automatización (control de versiones de código/datos, CI/CD, configuración como código), observabilidad y monitoreo (para atrapar 'datos malos', el asesino silencioso), y respuesta a incidentes (hallar la causa raíz y resolver rápido, con comunicación abierta y sin culpas). Ante todo, DataOps es primero un conjunto de hábitos culturales.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 2 — The Data Engineering Lifecycle",
  },

  // ---- cap. 8 — Queries, Modeling, and Transformation ----
  // -- SQL / Queries --
  {
    id: "fde-c8-01",
    topic: "sql",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "SQL se divide en sublenguajes. Los comandos GRANT, DENY y REVOKE (controlar quién accede a qué) pertenecen a:",
    options: [
      "DCL (Data Control Language)",
      "DDL (Data Definition Language)",
      "DML (Data Manipulation Language)",
      "TCL (Transaction Control Language)",
    ],
    correct: "DCL (Data Control Language)",
    explanation:
      "DCL (Data Control Language) controla el acceso a los objetos/datos con GRANT, DENY y REVOKE. DDL define objetos (CREATE, DROP, ALTER); DML manipula datos (SELECT, INSERT, UPDATE, DELETE, COPY, MERGE); TCL controla transacciones (COMMIT, ROLLBACK).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-02",
    topic: "sql",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la función del optimizador de consultas (query optimizer) y qué te muestra un 'explain plan' (EXPLAIN)?",
    options: [
      "El optimizador decide cómo ejecutar la consulta al menor costo (orden de joins, índices, tamaño de escaneo); el explain plan muestra ese plan y estadísticas de recursos por etapa",
      "El optimizador escribe el SQL por ti y el explain plan corrige errores de sintaxis",
      "El optimizador cifra la consulta y el explain plan la descifra",
      "El optimizador solo formatea el texto del SQL para que sea legible",
    ],
    correct:
      "El optimizador decide cómo ejecutar la consulta al menor costo (orden de joins, índices, tamaño de escaneo); el explain plan muestra ese plan y estadísticas de recursos por etapa",
    explanation:
      "El optimizador de consultas reordena y refactoriza los pasos para ejecutar la consulta de la forma menos costosa, evaluando joins, índices y volumen de datos escaneados. El comando EXPLAIN (explain plan) revela el plan elegido, los objetos usados (tablas, índices, caché) y estadísticas de consumo de recursos por etapa, lo que ayuda a diagnosticar y mejorar consultas lentas.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-03",
    topic: "sql",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Por qué se desaconseja ejecutar 'SELECT *' sin predicados en una base OLAP de pago por uso?",
    options: [
      "Escanea toda la tabla (todas las filas y columnas), lo que es ineficiente y caro; conviene podar (pruning): en columnar, seleccionar solo las columnas necesarias",
      "Porque SELECT * está prohibido por el estándar SQL",
      "Porque SELECT * siempre devuelve resultados incorrectos",
      "Porque SELECT * bloquea permanentemente la tabla para otros usuarios",
    ],
    correct:
      "Escanea toda la tabla (todas las filas y columnas), lo que es ineficiente y caro; conviene podar (pruning): en columnar, seleccionar solo las columnas necesarias",
    explanation:
      "SELECT * sin predicados escanea la tabla completa, lo que es ineficiente y costoso, sobre todo si la base cobra por bytes escaneados o cómputo. La regla es consultar solo lo que necesitas y usar 'pruning': en bases columnares, seleccionar solo las columnas requeridas (y aprovechar cluster/partition keys); en bases por filas, apoyarse en índices.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-04",
    topic: "sql",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Reis & Housley recomiendan usar CTEs (common table expressions) en lugar de subconsultas anidadas o tablas temporales. ¿Por qué?",
    options: [
      "Permiten componer consultas complejas de forma legible y mantenible, y a menudo rinden mejor que crear tablas intermedias",
      "Porque las CTEs cifran los datos automáticamente",
      "Porque las CTEs eliminan la necesidad de un optimizador de consultas",
      "Porque las subconsultas anidadas no son válidas en SQL",
    ],
    correct:
      "Permiten componer consultas complejas de forma legible y mantenible, y a menudo rinden mejor que crear tablas intermedias",
    explanation:
      "Las CTEs permiten componer consultas complejas de manera legible, ayudando a entender el flujo de la consulta; la legibilidad es clave en consultas complejas. Además, suelen ofrecer mejor rendimiento que un script que crea tablas intermedias (si hay que crearlas, conviene que sean temporales).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-05",
    topic: "sql",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "En un join, observas que la salida tiene muchísimas más filas de las esperadas y la consulta consume recursos enormes o falla. ¿Qué fenómeno es y cómo se mitiga?",
    options: [
      "Una 'explosión de filas' (row explosion) por coincidencias muchos-a-muchos en claves de join repetidas; ayuda reordenar predicados/filtrar antes del join",
      "Un 'dirty read'; se mitiga deshabilitando ACID",
      "Un 'broadcast join'; se mitiga aumentando la RAM del cliente",
      "Una 'vacuum'; se mitiga ejecutando VACUUM más seguido",
    ],
    correct:
      "Una 'explosión de filas' (row explosion) por coincidencias muchos-a-muchos en claves de join repetidas; ayuda reordenar predicados/filtrar antes del join",
    explanation:
      "La explosión de filas ocurre cuando hay muchas coincidencias muchos-a-muchos (p. ej. una clave que se repite 5 veces en A y 10 en B produce 5×10 = 50 filas). Puede agotar los recursos o tumbar la consulta. Si el optimizador puede reordenar predicados y aplicar filtros temprano, reduce drásticamente el cómputo; conviene filtrar antes del join.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-06",
    topic: "sql",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es un 'dirty read' y con qué propiedad de las transacciones se relaciona?",
    options: [
      "Leer una fila modificada por una transacción aún NO confirmada (uncommitted); se relaciona con el aislamiento de las propiedades ACID",
      "Leer datos cifrados sin la clave correcta",
      "Leer una tabla que fue vaciada con TRUNCATE",
      "Leer solo las columnas necesarias en una base columnar",
    ],
    correct:
      "Leer una fila modificada por una transacción aún NO confirmada (uncommitted); se relaciona con el aislamiento de las propiedades ACID",
    explanation:
      "Un 'dirty read' ocurre cuando se lee una fila alterada por una transacción todavía no confirmada (uncommitted). Sin cumplimiento ACID, una consulta puede devolver resultados inesperados. Las transacciones mantienen un estado consistente y gestionan el aislamiento cuando varios eventos concurrentes leen/escriben los mismos objetos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-07",
    topic: "sql",
    track: "general",
    difficulty: "basico",
    type: "fill",
    prompt: "Completa: las transacciones (updates/deletes) dejan 'registros muertos' (dead records) que ya no se referencian; el proceso de eliminarlos para liberar espacio y mejorar el rendimiento se llama ________.",
    accept: ["vacuuming", "vacuum", "vacuumado", "vacumming"],
    answerDisplay: "Vacuuming (VACUUM)",
    explanation:
      "El vacuuming elimina los registros muertos que dejan updates, deletes y operaciones de índice. Es importante porque libera espacio (menos 'bloat', consultas más rápidas), mejora la exactitud de los planes del optimizador y limpia índices. Su manejo varía por motor (p. ej. Snowflake usa 'time-travel', BigQuery una ventana fija de 7 días, Databricks retiene hasta hacer VACUUM manual).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  // -- Data Modeling --
  {
    id: "fde-c8-08",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En modelado de datos se va de lo abstracto a lo concreto con tres modelos: conceptual, lógico y físico. ¿Cuál es la diferencia?",
    options: [
      "Conceptual = lógica/reglas de negocio y entidades (diagrama ER); lógico = añade tipos, claves primarias y foráneas; físico = implementación en un sistema concreto (BD, esquemas, tablas, configuración)",
      "Conceptual = el código SQL final; lógico = el plan de ejecución; físico = el hardware del servidor",
      "Los tres son sinónimos; solo cambia el nombre según la empresa",
      "Conceptual = tablas físicas; lógico = diagramas; físico = reglas de negocio",
    ],
    correct:
      "Conceptual = lógica/reglas de negocio y entidades (diagrama ER); lógico = añade tipos, claves primarias y foráneas; físico = implementación en un sistema concreto (BD, esquemas, tablas, configuración)",
    explanation:
      "El modelo conceptual captura la lógica y reglas de negocio y las entidades (suele visualizarse en un diagrama entidad-relación). El lógico añade detalle: tipos de datos, claves primarias y foráneas. El físico define cómo se implementa en un sistema concreto (bases, esquemas, tablas y configuración). Se avanza del concepto abstracto a la implementación.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-09",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es la 'granularidad' (grain) de los datos y qué recomiendan Reis & Housley al respecto?",
    options: [
      "Es la resolución a la que se almacena/consulta el dato; conviene modelar al menor grano posible, porque agregar luego es fácil pero recuperar el detalle ya agregado es casi imposible",
      "Es el tamaño físico del bloque de disco; conviene maximizarlo siempre",
      "Es el número de columnas de una tabla; conviene minimizarlo siempre",
      "Es la antigüedad del dato; conviene borrar lo más viejo",
    ],
    correct:
      "Es la resolución a la que se almacena/consulta el dato; conviene modelar al menor grano posible, porque agregar luego es fácil pero recuperar el detalle ya agregado es casi imposible",
    explanation:
      "El grano es la resolución a la que se guardan y consultan los datos (típicamente al nivel de una clave primaria, p. ej. orden o producto, a menudo con fecha). La recomendación es modelar al menor grano posible: desde un dataset muy granular es fácil agregar, pero es generalmente imposible reconstruir el detalle que ya se agregó.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-10",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "order",
    prompt: "Ordena los niveles de normalización de Codd, de MENOS a MÁS normalizado.",
    ordered: [
      "Desnormalizado (sin normalizar; se permiten datos anidados y redundantes)",
      "Primera forma normal (1NF): columnas atómicas y clave primaria única",
      "Segunda forma normal (2NF): 1NF + sin dependencias parciales",
      "Tercera forma normal (3NF): 2NF + sin dependencias transitivas",
    ],
    explanation:
      "Las formas normales son secuenciales y cada una incorpora las condiciones de la anterior. Desnormalizado: sin normalizar. 1NF: cada columna es única y de un solo valor, con clave primaria única. 2NF: 1NF más eliminación de dependencias parciales (un subconjunto de una clave compuesta determina una columna no clave). 3NF: 2NF más sin dependencias transitivas (una columna no clave depende de otra columna no clave). Se suele considerar 'normalizada' una base en 3NF.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-11",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "Inmon define el data warehouse con cuatro características clave. ¿Cuáles son?",
    options: [
      "Orientado a un tema (subject-oriented)",
      "Integrado (integrated)",
      "No volátil (nonvolatile)",
      "Variante en el tiempo (time-variant)",
      "Optimizado para OLTP transaccional",
      "Desnormalizado por diseño",
    ],
    correctSet: [
      "Orientado a un tema (subject-oriented)",
      "Integrado (integrated)",
      "No volátil (nonvolatile)",
      "Variante en el tiempo (time-variant)",
    ],
    explanation:
      "Inmon define el data warehouse como una colección de datos orientada a un tema (ventas, marketing…), integrada (datos de fuentes dispares consolidados y normalizados en 3NF), no volátil (no cambia una vez almacenada) y variante en el tiempo (se pueden consultar distintos rangos temporales), en apoyo a las decisiones de gestión. Está posicionado para analítica, NO para OLTP, y la integración es su rasgo más importante ('single source of truth').",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-12",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia de enfoque entre el modelado de Inmon y el de Kimball?",
    options: [
      "Inmon es top-down: integra todo el negocio en un DW muy normalizado (3NF) y sirve la analítica vía data marts; Kimball es bottom-up: modela hechos y dimensiones (star schema, con denormalización) en el propio DW",
      "Inmon usa hubs/links/satellites y Kimball usa 3NF estricta",
      "Inmon es solo para streaming y Kimball solo para batch en la nube",
      "No hay diferencia real; ambos exigen 6NF",
    ],
    correct:
      "Inmon es top-down: integra todo el negocio en un DW muy normalizado (3NF) y sirve la analítica vía data marts; Kimball es bottom-up: modela hechos y dimensiones (star schema, con denormalización) en el propio DW",
    explanation:
      "Inmon (top-down) integra los datos de todo el negocio en un data warehouse muy normalizado (3NF, 'single source of truth') y sirve analítica específica por departamento mediante data marts. Kimball (bottom-up) modela directamente en el DW con tablas de hechos y dimensiones (star schema), aceptando denormalización y cierta redundancia; itera más rápido a costa de una integración más laxa.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-13",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "El modelo Data Vault (Dan Linstedt) usa tres tipos principales de tablas, cargadas en modo insert-only. ¿Cuáles son?",
    options: [
      "Hubs: almacenan las claves de negocio (business keys) únicas",
      "Links: mantienen las relaciones (muchos-a-muchos) entre claves de negocio",
      "Satellites: guardan los atributos descriptivos y el contexto de una clave",
      "Facts: tablas de medidas numéricas inmutables",
      "Dimensions: atributos cualitativos en torno a un hecho",
    ],
    correctSet: [
      "Hubs: almacenan las claves de negocio (business keys) únicas",
      "Links: mantienen las relaciones (muchos-a-muchos) entre claves de negocio",
      "Satellites: guardan los atributos descriptivos y el contexto de una clave",
    ],
    explanation:
      "El Data Vault separa la estructura de los atributos: un hub guarda las claves de negocio únicas (con hash key, load date, record source); un link mantiene las relaciones (muchos-a-muchos) entre claves de negocio de distintos hubs; un satellite contiene los atributos descriptivos y el contexto de una clave. La lógica de negocio se interpreta al consultar. 'Facts' y 'dimensions' son del modelo Kimball, no del Data Vault.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-14",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué una 'tabla ancha' (wide, muy denormalizada, con cientos de columnas y muchos nulls) funciona bien en una base columnar pero mal en una relacional por filas?",
    options: [
      "En columnar solo se leen las columnas consultadas y los nulls casi no ocupan espacio; en relacional por filas cada fila reserva todo el esquema y debe leerse entera",
      "En columnar cada null ocupa más que un valor real; por eso es ineficiente",
      "Porque las bases relacionales no admiten más de 10 columnas",
      "Porque las columnas anchas solo existen en streaming",
    ],
    correct:
      "En columnar solo se leen las columnas consultadas y los nulls casi no ocupan espacio; en relacional por filas cada fila reserva todo el esquema y debe leerse entera",
    explanation:
      "Una tabla ancha denormalizada evita joins (mejor rendimiento de escaneo) pero suele ser dispersa (muchos nulls). En una base columnar, las consultas leen solo las columnas seleccionadas y los nulls prácticamente no ocupan espacio; además, añadir un campo es al inicio solo un cambio de metadatos. En una relacional por filas, cada fila reserva el espacio de todo el esquema y debe leerse completa, lo que degrada mucho el rendimiento.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  // -- Transformations --
  {
    id: "fde-c8-15",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia fundamental entre una 'query' (consulta) y una 'transformación'?",
    options: [
      "Una query recupera datos según filtros y joins; una transformación PERSISTE los resultados (efímera o permanentemente) para consumo posterior, y suele encadenarse en pipelines complejos orquestados",
      "Una transformación solo lee datos y una query solo los escribe",
      "Son exactamente lo mismo; 'transformación' es solo el término en español de 'query'",
      "Una query siempre tarda más que una transformación",
    ],
    correct:
      "Una query recupera datos según filtros y joins; una transformación PERSISTE los resultados (efímera o permanentemente) para consumo posterior, y suele encadenarse en pipelines complejos orquestados",
    explanation:
      "Una query recupera datos según lógica de filtrado y joins. Una transformación persiste esos resultados (de forma efímera o permanente) para que los consuman otras transformaciones o queries, evitando recomputar lo mismo muchas veces. Las transformaciones suelen combinar varias fuentes y reusar resultados intermedios, por lo que dependen mucho de la orquestación.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-16",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "En joins distribuidos, ¿cuál es la diferencia entre un 'broadcast join' y un 'shuffle hash join'?",
    options: [
      "Broadcast: una tabla es pequeña y se envía (broadcast) completa a todos los nodos para unirla con las partes de la grande (barato); shuffle hash: ninguna cabe en un nodo, así que se reparticiona por la clave de join reordenando datos entre nodos (más costoso)",
      "Broadcast solo funciona en bases por filas; shuffle hash solo en columnar",
      "Broadcast reparticiona ambas tablas por hash; shuffle hash envía una tabla pequeña a todos los nodos",
      "Son sinónimos; ambos requieren mover toda la tabla grande por la red",
    ],
    correct:
      "Broadcast: una tabla es pequeña y se envía (broadcast) completa a todos los nodos para unirla con las partes de la grande (barato); shuffle hash: ninguna cabe en un nodo, así que se reparticiona por la clave de join reordenando datos entre nodos (más costoso)",
    explanation:
      "Un join distribuido divide el join lógico en joins más pequeños por nodo. En el broadcast join (asimétrico) una tabla es lo bastante pequeña para caber en un nodo, así que el motor la difunde a todos los nodos y la une con las partes de la tabla grande: es mucho menos costoso. Si ninguna tabla cabe en un nodo, se usa un shuffle hash join, que reparticiona ambas por la clave de join (reshuffle entre nodos), consumiendo más recursos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-17",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "¿Cuáles de los siguientes son patrones de actualización (update patterns) de datos persistidos descritos por Reis & Housley?",
    options: [
      "Truncate-and-reload (vaciar la tabla y recargarla)",
      "Insert-only (solo insertar registros nuevos)",
      "Delete (hard delete permanente o soft delete con marca)",
      "Upsert / merge (actualizar si la clave existe, insertar si no; merge añade borrar)",
      "Broadcast join",
      "Vacuuming",
    ],
    correctSet: [
      "Truncate-and-reload (vaciar la tabla y recargarla)",
      "Insert-only (solo insertar registros nuevos)",
      "Delete (hard delete permanente o soft delete con marca)",
      "Upsert / merge (actualizar si la clave existe, insertar si no; merge añade borrar)",
    ],
    explanation:
      "Los patrones de actualización incluyen: truncate-and-reload (vaciar y regenerar la tabla), insert-only (solo insertar, manteniendo el estado actual por la versión más reciente de cada clave), delete (hard delete permanente o soft delete que marca el registro) y upsert/merge (actualizar si la clave coincide, insertar si no; merge añade la capacidad de borrar). 'Broadcast join' es una estrategia de join y 'vacuuming' es limpieza de registros muertos, no patrones de actualización.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-18",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué los patrones upsert/merge son más costosos en sistemas basados en archivos (data lakes, columnar) que en bases por filas?",
    options: [
      "Los sistemas de archivos no soportan actualización in-place: usan copy-on-write (COW), así que cambiar/borrar un registro obliga a reescribir el archivo (o partición/bloque) completo",
      "Porque el merge no existe en bases columnares",
      "Porque las bases por filas no soportan claves primarias",
      "Porque COW cifra cada archivo antes de escribirlo",
    ],
    correct:
      "Los sistemas de archivos no soportan actualización in-place: usan copy-on-write (COW), así que cambiar/borrar un registro obliga a reescribir el archivo (o partición/bloque) completo",
    explanation:
      "En bases por filas, un update busca el registro y lo cambia in-place. Los sistemas basados en archivos no permiten actualización in-place: usan copy-on-write (COW), por lo que modificar o borrar un registro implica reescribir el archivo afectado (aunque COW puede operar a nivel de partición, cluster o bloque, no siempre toda la tabla). Por eso conviene una buena estrategia de particionado/clustering y hacer merges por micro-batch/hora en lugar de near real-time.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-19",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Al cargar datos en una base OLAP columnar, ¿cuál es un antipatrón común de quienes vienen de sistemas por filas?",
    options: [
      "Hacer inserciones fila por fila (single-row inserts); satura el sistema y crea muchos archivos pequeños. Mejor cargar en micro-batch o batch",
      "Cargar en micro-batch en lugar de fila por fila",
      "Seleccionar solo las columnas necesarias al leer",
      "Definir una cluster key en tablas muy grandes",
    ],
    correct:
      "Hacer inserciones fila por fila (single-row inserts); satura el sistema y crea muchos archivos pequeños. Mejor cargar en micro-batch o batch",
    explanation:
      "Insertar fila por fila (single-row inserts) en una base columnar es un antipatrón: impone una carga enorme y escribe muchos archivos pequeños separados, muy ineficientes para lecturas posteriores (luego hay que recluster). Lo recomendable es cargar en micro-batch o batch periódico. (La excepción es la arquitectura tipo Lambda de BigQuery/Druid, que hibrida un buffer de streaming con almacenamiento columnar.)",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-20",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre una 'vista' (view) y una 'vista materializada' (materialized view)?",
    options: [
      "Una view es solo una consulta guardada que se ejecuta cada vez que la consultas (sin precómputo); una materialized view precomputa y persiste los resultados, sirviendo como una forma de caché",
      "Una view persiste los datos en disco y una materialized view no guarda nada",
      "Son idénticas; 'materializada' es solo otro nombre para 'view'",
      "Una materialized view solo puede usarse en streaming",
    ],
    correct:
      "Una view es solo una consulta guardada que se ejecuta cada vez que la consultas (sin precómputo); una materialized view precomputa y persiste los resultados, sirviendo como una forma de caché",
    explanation:
      "Una vista es un objeto que se consulta como una tabla, pero en realidad es una consulta que referencia otras tablas: se combina y ejecuta cada vez (sin precómputo). Una vista materializada precomputa y persiste sus resultados, actuando como una forma de caché de consulta; evita recomputar joins o agregaciones costosas en cada lectura.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  // -- Streaming queries --
  {
    id: "fde-c8-21",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En consultas sobre streams se usan distintos tipos de 'ventanas' (windows). ¿Cuál describe correctamente las ventanas de sesión, fijas (tumbling) y deslizantes (sliding)?",
    options: [
      "Sesión: agrupa eventos cercanos y cierra tras un gap de inactividad (por clave); fija/tumbling: periodos fijos que no se solapan; deslizante/sliding: ventanas de largo fijo que sí pueden solaparse",
      "Sesión: periodos fijos sin solapamiento; tumbling: ventanas que se solapan; sliding: agrupa por inactividad",
      "Las tres son idénticas; solo cambia el nombre del proveedor",
      "Sesión y tumbling solo aplican a batch; sliding solo a OLTP",
    ],
    correct:
      "Sesión: agrupa eventos cercanos y cierra tras un gap de inactividad (por clave); fija/tumbling: periodos fijos que no se solapan; deslizante/sliding: ventanas de largo fijo que sí pueden solaparse",
    explanation:
      "Una ventana de sesión agrupa eventos próximos y filtra los periodos de inactividad (cierra tras un gap, p. ej. 5 minutos; es por clave, cada usuario tiene las suyas). Una ventana fija o tumbling cubre periodos fijos y consecutivos que no se solapan (p. ej. cada 20 s). Una ventana deslizante (sliding) tiene largo fijo pero puede solaparse (p. ej. una de 60 s generada cada 30 s).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  {
    id: "fde-c8-22",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En procesamiento de streams, el 'enriquecimiento' (enrichment) se refiere a:",
    options: [
      "Unir (join) un stream con otros datos (de una caché, tabla o object storage) para añadir contexto y emitir un stream enriquecido",
      "Aumentar la frecuencia de los eventos del stream artificialmente",
      "Comprimir el stream para ahorrar ancho de banda",
      "Borrar los eventos duplicados del stream",
    ],
    correct:
      "Unir (join) un stream con otros datos (de una caché, tabla o object storage) para añadir contexto y emitir un stream enriquecido",
    explanation:
      "El enriquecimiento une un stream con datos adicionales para producir un stream mejorado. Por ejemplo, un retailer recibe eventos con IDs de producto y usuario y los enriquece con detalles del producto e info demográfica buscándolos en una base en memoria (caché), emitiendo eventos enriquecidos a otro stream. La fuente de enriquecimiento puede ser una tabla, un RDBMS o un archivo en object storage.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 8 — Queries, Modeling, and Transformation",
  },

  // ---- cap. 3 — Designing Good Data Architecture ----
  {
    id: "fde-c3-01",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cómo definen Reis & Housley la 'arquitectura de datos'?",
    options: [
      "El diseño de sistemas para soportar las necesidades de datos cambiantes de una empresa, mediante decisiones flexibles y reversibles tomadas tras una evaluación cuidadosa de trade-offs",
      "El conjunto de servidores físicos donde se guardan las bases de datos",
      "Un diagrama fijo que, una vez aprobado, no debe cambiar nunca",
      "La elección de un único proveedor propietario para toda la empresa",
    ],
    correct:
      "El diseño de sistemas para soportar las necesidades de datos cambiantes de una empresa, mediante decisiones flexibles y reversibles tomadas tras una evaluación cuidadosa de trade-offs",
    explanation:
      "La arquitectura de datos (subconjunto de la arquitectura empresarial) es el diseño de sistemas para soportar las necesidades de datos en evolución, logrado con decisiones flexibles y reversibles y una evaluación cuidadosa de trade-offs. Es 'viva': el cambio y la evolución son centrales a su propósito; no es un diagrama estático.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-02",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Bezos distingue decisiones de 'puerta de una vía' (one-way door) y 'puerta de dos vías' (two-way door). ¿Qué implica para la arquitectura?",
    options: [
      "One-way door = casi imposible de revertir; two-way door = fácilmente reversible. Conviene preferir decisiones reversibles (two-way doors) siempre que se pueda",
      "One-way door = fácilmente reversible; two-way door = irreversible",
      "Ambas son irreversibles; solo cambia el costo",
      "Se refiere al número de puertas físicas en el data center",
    ],
    correct:
      "One-way door = casi imposible de revertir; two-way door = fácilmente reversible. Conviene preferir decisiones reversibles (two-way doors) siempre que se pueda",
    explanation:
      "Una decisión 'one-way door' (Tipo 1) es casi imposible de revertir; una 'two-way door' es fácilmente reversible (entras, y si no te gusta, sales). Como el panorama de datos cambia rápido y el futuro es impredecible, conviene priorizar decisiones reversibles: bajan el riesgo, mantienen ágil la arquitectura y permiten iterar más rápido.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre la arquitectura 'operacional' y la 'técnica' de datos?",
    options: [
      "Operacional describe QUÉ debe ocurrir (personas, procesos, requisitos de negocio, calidad, latencia); técnica describe CÓMO se ingiere, almacena, transforma y sirve",
      "Operacional es el hardware y técnica es el software, sin más",
      "Son sinónimos; solo cambia el nombre según el proveedor",
      "Operacional es solo para streaming y técnica solo para batch",
    ],
    correct:
      "Operacional describe QUÉ debe ocurrir (personas, procesos, requisitos de negocio, calidad, latencia); técnica describe CÓMO se ingiere, almacena, transforma y sirve",
    explanation:
      "La arquitectura operacional abarca los requisitos funcionales: qué procesos de negocio sirve el dato, cómo se gestiona la calidad, qué latencia se requiere (el QUÉ). La arquitectura técnica detalla cómo se ingiere, almacena, transforma y sirve el dato a lo largo del ciclo de vida (el CÓMO).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-04",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Al 'planificar para el fallo', ¿qué distinguen el RTO (recovery time objective) y el RPO (recovery point objective)?",
    options: [
      "RTO = tiempo máximo aceptable de caída del servicio; RPO = pérdida máxima aceptable de datos (el estado aceptable tras recuperarse)",
      "RTO = pérdida máxima de datos; RPO = tiempo máximo de caída",
      "Ambos miden el porcentaje de tiempo operativo del sistema",
      "RTO y RPO son lo mismo que disponibilidad y fiabilidad",
    ],
    correct:
      "RTO = tiempo máximo aceptable de caída del servicio; RPO = pérdida máxima aceptable de datos (el estado aceptable tras recuperarse)",
    explanation:
      "El RTO es el tiempo máximo aceptable de interrupción de un servicio (se fija según el impacto de negocio: un día puede bastar para un reporte interno, pero 5 minutos de caída dañan a un e-commerce). El RPO es el estado aceptable tras la recuperación; en datos suele referirse a la pérdida máxima aceptable de datos durante una caída.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-05",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Cuál es la diferencia entre 'disponibilidad' (availability) y 'fiabilidad' (reliability)?",
    options: [
      "Disponibilidad = % de tiempo que el servicio está operable; fiabilidad = probabilidad de cumplir su función según estándares durante un intervalo. Baja fiabilidad puede causar baja disponibilidad",
      "Disponibilidad = probabilidad de no fallar; fiabilidad = porcentaje de uptime",
      "Son exactamente lo mismo",
      "Disponibilidad mide el costo y fiabilidad mide la latencia",
    ],
    correct:
      "Disponibilidad = % de tiempo que el servicio está operable; fiabilidad = probabilidad de cumplir su función según estándares durante un intervalo. Baja fiabilidad puede causar baja disponibilidad",
    explanation:
      "La disponibilidad es el porcentaje de tiempo que un servicio o componente está operable. La fiabilidad es la probabilidad de que el sistema cumpla los estándares de su función prevista durante un intervalo dado. Están relacionadas: si un sistema no cumple su rendimiento, puede volverse no disponible (baja fiabilidad → baja disponibilidad); la elasticidad mejora la fiabilidad.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-06",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre escalado vertical y horizontal, y qué es la 'elasticidad'?",
    options: [
      "Vertical = aumentar recursos de una sola máquina (con límites); horizontal = añadir más máquinas (sistema distribuido, p. ej. leader-follower); elasticidad = escalar automáticamente hacia arriba/abajo según la carga (algunos 'a cero')",
      "Vertical = añadir máquinas; horizontal = agrandar una máquina",
      "Elasticidad significa que el sistema nunca se apaga",
      "Vertical y horizontal son sinónimos; elasticidad no existe en la nube",
    ],
    correct:
      "Vertical = aumentar recursos de una sola máquina (con límites); horizontal = añadir más máquinas (sistema distribuido, p. ej. leader-follower); elasticidad = escalar automáticamente hacia arriba/abajo según la carga (algunos 'a cero')",
    explanation:
      "El escalado vertical agranda una sola máquina (CPU/RAM/disco), pero tiene límites duros y poca alta disponibilidad. El horizontal añade máquinas en un sistema distribuido (a menudo leader-follower, con redundancia/replicación). La elasticidad es la capacidad de escalar dinámicamente hacia arriba y abajo según la carga; algunos sistemas serverless escalan 'a cero' (se apagan al estar inactivos) para ahorrar costos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-07",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En arquitecturas por capas (tiers), ¿qué problema resuelve una arquitectura multitier (n-tier / 3-tier) frente a una single-tier?",
    options: [
      "Single-tier acopla BD y aplicación en un mismo servidor (si falla uno, falla todo; útil solo para prototipos); multitier separa capas (datos, lógica, presentación) para desacoplar recursos y mejorar fiabilidad y flexibilidad",
      "Multitier coloca todo en un solo servidor y single-tier lo separa en capas",
      "No hay diferencia funcional; solo cambia el nombre",
      "Single-tier es la recomendada para producción a gran escala",
    ],
    correct:
      "Single-tier acopla BD y aplicación en un mismo servidor (si falla uno, falla todo; útil solo para prototipos); multitier separa capas (datos, lógica, presentación) para desacoplar recursos y mejorar fiabilidad y flexibilidad",
    explanation:
      "En single-tier, base de datos y aplicación están fuertemente acopladas en un servidor: si falla el servidor, la BD o la app, cae todo; sirve para prototipos, no para producción. La multitier (n-tier, típicamente 3-tier: datos, lógica de aplicación, presentación) separa las capas, evitando que compitan por recursos y permitiendo usar distintas tecnologías por capa.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-08",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre una arquitectura monolítica y una de microservicios?",
    options: [
      "El monolito agrupa todo fuertemente acoplado (difícil de cambiar/reutilizar); los microservicios son servicios separados, descentralizados y débilmente acoplados, cada uno con una función específica (si uno cae, los demás siguen)",
      "El monolito está formado por servicios independientes y los microservicios por un solo bloque",
      "Los microservicios siempre comparten una única base de datos y código",
      "No hay diferencia de acoplamiento; solo de lenguaje de programación",
    ],
    correct:
      "El monolito agrupa todo fuertemente acoplado (difícil de cambiar/reutilizar); los microservicios son servicios separados, descentralizados y débilmente acoplados, cada uno con una función específica (si uno cae, los demás siguen)",
    explanation:
      "Un monolito reúne tanto como sea posible 'bajo un mismo techo', con fuerte acoplamiento: cambiar o reutilizar componentes es difícil. Los microservicios son lo opuesto: servicios separados, descentralizados y débilmente acoplados, cada uno con una función concreta; si uno cae temporalmente, no afecta a los demás. Los autores recomiendan el acoplamiento débil como ideal, de forma pragmática.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-09",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿En qué consiste una arquitectura orientada a eventos (event-driven)?",
    options: [
      "Un evento (algo que ocurrió, un cambio de estado) se produce, se enruta y se consume de forma asíncrona, sin dependencias fuertes entre productor, enrutador y consumidor; distribuye el estado entre servicios",
      "Todos los servicios comparten memoria y se llaman directamente entre sí",
      "Es un sinónimo de procesamiento por lotes nocturno",
      "Requiere que productor y consumidor estén fuertemente acoplados",
    ],
    correct:
      "Un evento (algo que ocurrió, un cambio de estado) se produce, se enruta y se consume de forma asíncrona, sin dependencias fuertes entre productor, enrutador y consumidor; distribuye el estado entre servicios",
    explanation:
      "Un evento es algo que ocurrió, típicamente un cambio de estado (un nuevo pedido, una actualización). El flujo event-driven abarca producción, enrutamiento y consumo de eventos de forma asíncrona y sin acoplamiento fuerte entre productor, enrutador y consumidor. La arquitectura event-driven usa esto para comunicarse entre servicios y distribuir el estado, lo que aporta resiliencia si un servicio o nodo cae.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-10",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué diferencia un proyecto 'brownfield' de uno 'greenfield', y qué es el 'patrón estrangulador' (strangler)?",
    options: [
      "Brownfield = rediseñar una arquitectura existente (con sus limitaciones); greenfield = empezar de cero. El patrón estrangulador reemplaza la arquitectura legada pieza por pieza, en vez de un 'big bang' arriesgado",
      "Brownfield = empezar de cero; greenfield = modernizar lo existente. El strangler reescribe todo de golpe",
      "Ambos son idénticos; el strangler es un tipo de base de datos",
      "Greenfield obliga a usar siempre la tecnología más nueva por moda",
    ],
    correct:
      "Brownfield = rediseñar una arquitectura existente (con sus limitaciones); greenfield = empezar de cero. El patrón estrangulador reemplaza la arquitectura legada pieza por pieza, en vez de un 'big bang' arriesgado",
    explanation:
      "Un proyecto brownfield refactoriza/reorganiza una arquitectura existente, condicionado por decisiones pasadas. Un greenfield parte de cero (cuidado con el 'shiny object syndrome' y el 'resume-driven development'). El patrón estrangulador reemplaza el legado de forma incremental y quirúrgica (una pieza a la vez), permitiendo decisiones reversibles, frente a una reescritura 'big bang' arriesgada.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-11",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Entre los principios de buena arquitectura está 'abrazar FinOps'. ¿Qué busca FinOps?",
    options: [
      "Gestionar de forma colaborativa (ingeniería + finanzas) y basada en datos el gasto en la nube, monitoreándolo continuamente y optimizando la economía unitaria del pay-as-you-go",
      "Eliminar por completo el uso de la nube para ahorrar dinero",
      "Comprar todo el hardware por adelantado (CapEx) cada pocos años",
      "Maximizar el rendimiento sin importar el costo",
    ],
    correct:
      "Gestionar de forma colaborativa (ingeniería + finanzas) y basada en datos el gasto en la nube, monitoreándolo continuamente y optimizando la economía unitaria del pay-as-you-go",
    explanation:
      "FinOps es una práctica de gestión financiera de la nube: ingeniería, finanzas y negocio colaboran en decisiones de gasto basadas en datos. Como el modelo pay-as-you-go vuelve el gasto muy dinámico, FinOps monitorea el costo de forma continua, alerta ante picos y considera límites duros. También contempla 'ataques de costo' (p. ej. descargas masivas de un bucket S3 que disparan la factura), mitigables con políticas requester-pays o monitoreo.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-12",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: el modelo de seguridad que NO confía por defecto en nada (dentro ni fuera del perímetro) y exige verificación, en contraste con el modelo de 'perímetro endurecido', se llama seguridad de confianza ________ (en inglés, ____-trust).",
    accept: ["cero", "zero", "confianza cero", "zero trust", "zero-trust"],
    answerDisplay: "Confianza cero (zero-trust)",
    explanation:
      "El modelo tradicional de 'perímetro endurecido' confía en lo de adentro y desconfía de lo de afuera, pero es vulnerable a ataques internos y phishing; en la nube ese perímetro se erosiona. La seguridad de confianza cero (zero-trust) no confía por defecto en nada y verifica continuamente. Se complementa con el 'modelo de responsabilidad compartida' (el proveedor asegura la nube; el usuario, lo que pone EN la nube). Por eso, todo ingeniero de datos debe considerarse también ingeniero de seguridad.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  // -- Patrones de arquitectura (almacenamiento) --
  {
    id: "fde-c3-13",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Como patrón de arquitectura, ¿qué caracteriza a un data warehouse (organizacionalmente)?",
    options: [
      "Es un hub central para reporting/análisis que separa el OLAP de las bases de producción (OLTP) y centraliza/organiza los datos vía ETL; técnicamente suele apoyarse en sistemas MPP",
      "Es un volcado sin estructura de datos crudos en object storage",
      "Es una base transaccional optimizada para muchas escrituras pequeñas",
      "Es exclusivamente un sistema de streaming en tiempo real",
    ],
    correct:
      "Es un hub central para reporting/análisis que separa el OLAP de las bases de producción (OLTP) y centraliza/organiza los datos vía ETL; técnicamente suele apoyarse en sistemas MPP",
    explanation:
      "El data warehouse es un hub central de datos para reporting y análisis. Organizacionalmente: separa el procesamiento analítico (OLAP) de las bases de producción (OLTP) —desviando carga de los sistemas operativos— y centraliza/organiza los datos, tradicionalmente mediante ETL que los carga en data marts. Técnicamente suele basarse en sistemas MPP (procesamiento masivamente paralelo), hoy a menudo columnares.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-14",
    topic: "almacenamiento",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué es un 'data mart'?",
    options: [
      "Un subconjunto más refinado del data warehouse, enfocado en un solo departamento o línea de negocio; hace los datos más accesibles y añade una etapa extra de transformación (p. ej. prejoins/agregaciones) para mejorar el rendimiento",
      "Una copia exacta y completa del data warehouse para respaldo",
      "Un mercado público donde se compran y venden datasets",
      "El sistema de producción transaccional de la empresa",
    ],
    correct:
      "Un subconjunto más refinado del data warehouse, enfocado en un solo departamento o línea de negocio; hace los datos más accesibles y añade una etapa extra de transformación (p. ej. prejoins/agregaciones) para mejorar el rendimiento",
    explanation:
      "Un data mart es un subconjunto refinado del warehouse orientado a un departamento o línea de negocio. Existe por dos razones: hacer los datos más accesibles para analistas, y aportar una etapa adicional de transformación más allá del ETL/ELT inicial (datos prejoined/agregados) que mejora el rendimiento de reportes y consultas con joins complejos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-15",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: un data lake de primera generación (1.0) sin gestión de esquema, catálogo ni capacidad de actualización suele degenerar en un 'pantano de datos', en inglés un data ________.",
    accept: ["swamp", "pantano", "data swamp", "pantano de datos"],
    answerDisplay: "Data swamp (pantano de datos)",
    explanation:
      "El data lake 1.0 (originado en HDFS, luego object storage) prometía volcar todos los datos —estructurados y no— en un lugar central barato y casi ilimitado. Pero sin gestión de esquema, catálogo ni descubrimiento, y siendo esencialmente write-only (sin updates/deletes fáciles, un problema con GDPR), muchos se convirtieron en 'data swamps' (pantanos de datos), con términos como 'dark data' y WORN (write once, read never). El lakehouse surgió para corregir esto (añade ACID y gestión sobre object storage).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-16",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál fue la innovación clave de los data warehouses en la nube (BigQuery, Snowflake) frente a los MPP tradicionales?",
    options: [
      "Separar el cómputo del almacenamiento: los datos viven en object storage (capacidad casi ilimitada) y el cómputo se levanta bajo demanda y se paga por uso",
      "Eliminar por completo el lenguaje SQL",
      "Exigir comprar un clúster MPP por varios millones de dólares por adelantado",
      "Forzar que cómputo y almacenamiento estén siempre fuertemente acoplados",
    ],
    correct:
      "Separar el cómputo del almacenamiento: los datos viven en object storage (capacidad casi ilimitada) y el cómputo se levanta bajo demanda y se paga por uso",
    explanation:
      "Amazon Redshift inició la revolución del cloud DW (clúster bajo demanda en vez de contrato multimillonario). BigQuery, Snowflake y otros popularizaron la separación de cómputo y almacenamiento: los datos residen en object storage (almacenamiento casi ilimitado) y el cómputo se levanta bajo demanda, pagando por uso. Esto acerca el cloud DW al data lake; la frontera entre ambos se difumina.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-17",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué caracteriza al 'modern data stack'?",
    options: [
      "Componentes en la nube, plug-and-play, modulares y listos para usar (pipelines, almacenamiento, transformación, gobernanza, monitoreo, visualización), con foco en self-service, precios claros y comunidad",
      "Un único producto monolítico y propietario que hace todo",
      "Herramientas exclusivamente on-premises sin conexión a la nube",
      "Una arquitectura que prohíbe el uso de open source",
    ],
    correct:
      "Componentes en la nube, plug-and-play, modulares y listos para usar (pipelines, almacenamiento, transformación, gobernanza, monitoreo, visualización), con foco en self-service, precios claros y comunidad",
    explanation:
      "El modern data stack busca reemplazar los toolsets monolíticos y caros por componentes en la nube, plug-and-play, modulares y económicos (pipelines, almacenamiento, transformación, gestión/gobernanza, monitoreo, visualización, exploración). Sus claves: self-service (analítica y pipelines), gestión ágil de datos, herramientas open source o propietarias simples con precios claros, y comunidad activa. Encaja con la idea de plataforma de datos convergente.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  {
    id: "fde-c3-18",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "multi",
    prompt: "El 'data mesh' (Zhamak Dehghani) descentraliza la plataforma monolítica de datos. ¿Cuáles son sus cuatro componentes/principios clave?",
    options: [
      "Propiedad y arquitectura de datos descentralizada y orientada a dominios",
      "Datos como producto (data as a product)",
      "Infraestructura de datos self-serve como plataforma",
      "Gobernanza computacional federada",
      "Centralización de todos los datos en un único data lake",
      "Eliminación total de la gobernanza de datos",
    ],
    correctSet: [
      "Propiedad y arquitectura de datos descentralizada y orientada a dominios",
      "Datos como producto (data as a product)",
      "Infraestructura de datos self-serve como plataforma",
      "Gobernanza computacional federada",
    ],
    explanation:
      "El data mesh invierte el modelo centralizado (data lake/warehouse monolítico): en vez de llevar los datos a una plataforma central, cada dominio aloja y sirve sus datasets de forma consumible. Sus cuatro principios son: (1) propiedad/arquitectura descentralizada orientada a dominios, (2) datos como producto, (3) infraestructura self-serve como plataforma y (4) gobernanza computacional federada. Aplica domain-driven design a la arquitectura de datos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 3 — Designing Good Data Architecture",
  },

  // ---- cap. 4 — Choosing Technologies Across the Data Engineering Lifecycle ----
  {
    id: "fde-c4-01",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre gasto de capital (capex) y gasto operativo (opex), y qué enfoque recomiendan Reis & Housley para datos?",
    options: [
      "Capex = inversión grande por adelantado (comprar hardware/licencias); opex = gasto gradual pay-as-you-go. Recomiendan un enfoque 'opex-first' centrado en la nube por su flexibilidad y bajo costo inicial",
      "Capex = pago por uso mensual; opex = compra única por adelantado. Recomiendan capex siempre",
      "Capex y opex son lo mismo; la nube no cambió nada",
      "Opex obliga a firmar contratos multimillonarios de hardware",
    ],
    correct:
      "Capex = inversión grande por adelantado (comprar hardware/licencias); opex = gasto gradual pay-as-you-go. Recomiendan un enfoque 'opex-first' centrado en la nube por su flexibilidad y bajo costo inicial",
    explanation:
      "El costo total de propiedad (TCO) incluye costos directos (atribuibles a la iniciativa, p. ej. salarios o la factura de AWS) e indirectos (overhead). El capex es una inversión grande por adelantado (hardware/licencias que se deprecian); el opex es gradual y pay-as-you-go, más flexible y fácil de atribuir. Con la nube, los autores recomiendan un enfoque 'opex-first' por su flexibilidad y bajo costo inicial.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-02",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es el 'costo total de oportunidad de propiedad' (TOCO) y por qué importa al elegir tecnología?",
    options: [
      "El costo de las oportunidades perdidas al elegir una tecnología/arquitectura sobre otras; importa porque las tecnologías inflexibles son 'trampas para osos': fáciles de adoptar y muy dolorosas de abandonar",
      "El costo del hardware comprado por adelantado, sin contar el software",
      "El costo de la electricidad del data center",
      "El precio de lista de una licencia propietaria",
    ],
    correct:
      "El costo de las oportunidades perdidas al elegir una tecnología/arquitectura sobre otras; importa porque las tecnologías inflexibles son 'trampas para osos': fáciles de adoptar y muy dolorosas de abandonar",
    explanation:
      "El TOCO (total opportunity cost of ownership) es el costo de las oportunidades que se excluyen al comprometerse con una tecnología, stack o pipeline (aunque sea en la nube, una vez que es core y difícil de abandonar). Es un punto ciego frecuente: hay que evaluar qué tan rápido y barato podrías migrar a algo mejor. Las tecnologías inflexibles son como 'trampas para osos': fáciles de adoptar, dolorosas de escapar.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "Reis & Housley distinguen tecnologías 'inmutables' (perduran, efecto Lindy) de 'transitorias' (van y vienen). ¿Cuáles citan como ejemplos de tecnologías INMUTABLES sobre las que conviene construir?",
    options: [
      "Object storage (p. ej. Amazon S3, Azure Blob)",
      "SQL",
      "bash",
      "Redes y servidores (networking)",
      "Un framework de frontend de JavaScript de moda",
      "Una herramienta de una startup recién financiada con mucho hype",
    ],
    correctSet: [
      "Object storage (p. ej. Amazon S3, Azure Blob)",
      "SQL",
      "bash",
      "Redes y servidores (networking)",
    ],
    explanation:
      "Las tecnologías inmutables sostienen la nube o han resistido el paso del tiempo (efecto Lindy: cuanto más lleva establecida una tecnología, más durará): object storage, redes, servidores, seguridad, y lenguajes como SQL y bash. Las transitorias siguen un ciclo de hype → crecimiento → obsolescencia (p. ej. frameworks de frontend JS, herramientas de startups con mucho hype). El consejo: construir sobre las inmutables y rodearlas de herramientas transitorias, reevaluando cada ~2 años.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-04",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre IaaS, PaaS y SaaS?",
    options: [
      "IaaS = recursos 'crudos' rentados (VMs, discos virtuales); PaaS = servicios gestionados sobre IaaS (BD gestionadas, Kubernetes gestionado, streaming gestionado); SaaS = plataforma de software completa y operada (Salesforce, Fivetran)",
      "IaaS = software completo listo; PaaS = hardware crudo; SaaS = VMs sin gestionar",
      "Son tres nombres para lo mismo",
      "IaaS solo existe on-premises y SaaS solo en blockchain",
    ],
    correct:
      "IaaS = recursos 'crudos' rentados (VMs, discos virtuales); PaaS = servicios gestionados sobre IaaS (BD gestionadas, Kubernetes gestionado, streaming gestionado); SaaS = plataforma de software completa y operada (Salesforce, Fivetran)",
    explanation:
      "IaaS (infraestructura como servicio) renta 'rebanadas' de hardware: VMs y discos virtuales (p. ej. EC2). PaaS añade servicios gestionados más sofisticados sobre IaaS (BD gestionadas como RDS, Kubernetes gestionado como GKE/AKS, streaming como Kinesis), ocultando la gestión de máquinas individuales. SaaS sube otro escalón de abstracción: una plataforma de software completa con mínima gestión operativa (Salesforce, Google Workspace, Fivetran).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-05",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué caracteriza al cómputo 'serverless' (p. ej. FaaS como AWS Lambda) y cuándo puede volverse caro?",
    options: [
      "Ejecutar código sin gestionar servidores, con escalado automático (incluso a cero) y pago por uso; puede ser carísimo si se maneja un evento por invocación a tasas de eventos muy altas (overhead por invocación)",
      "Significa que no hay servidores en absoluto; el código corre en el navegador del usuario",
      "Es siempre más barato que cualquier alternativa, sin importar la carga",
      "Obliga a aprovisionar y mantener servidores 24/7",
    ],
    correct:
      "Ejecutar código sin gestionar servidores, con escalado automático (incluso a cero) y pago por uso; puede ser carísimo si se maneja un evento por invocación a tasas de eventos muy altas (overhead por invocación)",
    explanation:
      "Serverless permite ejecutar código sin gestionar servidores ('muchos servidores invisibles'), con escalado automático de cero a alto y pago por uso. FaaS (función como servicio, p. ej. Lambda) es la variante más popular, pero BigQuery también es serverless. Cuidado: manejar un evento por invocación a tasas de eventos muy altas tiene un overhead inherente y puede salir catastróficamente caro frente a alternativas como multithreading; conviene monitorear el costo por evento y modelar el costo al crecer la tasa.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-06",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué es un despliegue 'multicloud' y cuándo se justifica frente a una estrategia de una sola nube?",
    options: [
      "Desplegar cargas en varias nubes públicas (p. ej. para aprovechar el mejor servicio de cada una o estar cerca de clientes); se justifica solo si hay una razón de peso, porque añade complejidad, costos de egress y networking difícil",
      "Usar una sola nube con varias regiones; siempre es la opción por defecto",
      "Alojar todo on-premises sin nube",
      "Es idéntico a hybrid cloud y nunca añade complejidad",
    ],
    correct:
      "Desplegar cargas en varias nubes públicas (p. ej. para aprovechar el mejor servicio de cada una o estar cerca de clientes); se justifica solo si hay una razón de peso, porque añade complejidad, costos de egress y networking difícil",
    explanation:
      "Las opciones de ubicación son on-premises, cloud, hybrid cloud y multicloud. Multicloud despliega cargas en varias nubes públicas, p. ej. para aprovechar el mejor servicio de cada una (Snowflake/Databricks lo ofrecen) o servir cerca de clientes. Pero añade complejidad notable: costos de egress, cuellos de botella de red e integración/seguridad cross-cloud. Los autores aconsejan una sola nube salvo que haya una razón de peso (regulación, cercanía a clientes, servicios específicos).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-07",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: en la nube suele ser barato o gratis meter datos, pero sacarlos puede ser muy caro por las tarifas de ________ (la 'gravedad de los datos': una vez que aterrizan, cuesta mucho extraerlos).",
    accept: ["egress", "egreso", "salida", "data egress"],
    answerDisplay: "Egress (egreso de datos)",
    explanation:
      "Los proveedores cloud quieren retenerte (lock-in): meter datos es barato o gratis, pero sacarlos cuesta caro por las tarifas de egress (egreso). La 'gravedad de los datos' es real: una vez que los datos aterrizan en una nube, extraerlos y migrar procesos puede ser muy costoso. Hay que tener en cuenta el egress antes de que llegue una factura sorpresa.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-08",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Sobre 'build versus buy', ¿cuál es la recomendación general de Reis & Housley?",
    options: [
      "Por defecto favorecer OSS/COSS y servicios gestionados; construir/personalizar solo donde aporte una ventaja competitiva real (evitar el 'undifferentiated heavy lifting')",
      "Construir siempre todo desde cero para tener control total",
      "Comprar siempre soluciones propietarias, nunca usar open source",
      "Nunca usar servicios gestionados porque salen caros",
    ],
    correct:
      "Por defecto favorecer OSS/COSS y servicios gestionados; construir/personalizar solo donde aporte una ventaja competitiva real (evitar el 'undifferentiated heavy lifting')",
    explanation:
      "Build vs buy se reduce a TCO, TOCO y si la solución da ventaja competitiva. La recomendación: por defecto apoyarse en 'hombros de gigantes' (OSS/COSS y servicios gestionados) y construir/personalizar solo donde genere ventaja competitiva o reduzca fricción de forma sustancial. Construir todo desde cero suele ser bajo ROI (caro en tiempo y costo de oportunidad). Conecta con el ingeniero 'Tipo A' (abstracción).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-09",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre OSS 'gestionado por la comunidad' (community-managed) y 'OSS comercial' (COSS)?",
    options: [
      "Community-managed: lo mantiene una comunidad y tú lo auto-hospedas/mantienes; COSS: un proveedor aloja y gestiona el OSS por ti (normalmente como SaaS), p. ej. Databricks (Spark), Confluent (Kafka), dbt Labs (dbt)",
      "Community-managed siempre cuesta dinero y COSS es gratis",
      "COSS prohíbe el acceso al código fuente; community-managed no tiene código abierto",
      "Son lo mismo; solo cambia el nombre comercial",
    ],
    correct:
      "Community-managed: lo mantiene una comunidad y tú lo auto-hospedas/mantienes; COSS: un proveedor aloja y gestiona el OSS por ti (normalmente como SaaS), p. ej. Databricks (Spark), Confluent (Kafka), dbt Labs (dbt)",
    explanation:
      "El OSS gestionado por la comunidad lo mantiene un equipo distribuido de colaboradores; tú lo auto-hospedas y te encargas de updates, mantenimiento y parches. El COSS (commercial OSS) lo aloja y gestiona un proveedor por ti, típicamente como SaaS, ofreciendo el 'core' gratis y cobrando por mejoras o gestión (Databricks/Spark, Confluent/Kafka, dbt Labs/dbt). Al elegir community-managed conviene mirar mindshare, madurez, comunidad y soporte.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-10",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En el debate 'monolito vs modular' para el stack de datos, ¿qué papel juega la orquestación y qué es un 'monolito distribuido'?",
    options: [
      "Lo modular (best-of-breed, intercambiable) gana flexibilidad pero exige interoperar muchas piezas: la orquestación es el 'pegamento' que las une. Un 'monolito distribuido' es un sistema distribuido que aún comparte dependencias/código comunes y arrastra los males del monolito",
      "El monolito siempre es mejor y la orquestación es innecesaria",
      "Modular significa un único sistema autocontenido sin dependencias",
      "El 'monolito distribuido' es la solución ideal sin desventajas",
    ],
    correct:
      "Lo modular (best-of-breed, intercambiable) gana flexibilidad pero exige interoperar muchas piezas: la orquestación es el 'pegamento' que las une. Un 'monolito distribuido' es un sistema distribuido que aún comparte dependencias/código comunes y arrastra los males del monolito",
    explanation:
      "El monolito es simple de razonar pero frágil, rígido y con costo de salida alto; lo modular usa tecnologías desacopladas best-of-breed e intercambiables (clave dado el ritmo de cambio), a costa de tener más piezas que interoperar: por eso la orquestación se vuelve el pegamento del stack. El 'monolito distribuido' es un sistema distribuido que, pese a desacoplarse, comparte un set común de dependencias/código (p. ej. un clúster Hadoop, o Airflow donde toda librería cliente debe instalarse en todo el clúster), heredando males del monolito; se mitiga con infraestructura efímera o contenedores.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  {
    id: "fde-c4-11",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué es un contenedor y en qué se diferencia de una máquina virtual (VM) tradicional?",
    options: [
      "Un contenedor empaqueta un espacio de usuario aislado (filesystem y procesos) y se le llama 'VM ligera'; a diferencia de una VM, no envuelve un sistema operativo completo, así que muchos pueden coexistir compartiendo el kernel",
      "Un contenedor es físicamente un servidor; una VM es software",
      "Un contenedor envuelve un sistema operativo completo y una VM solo procesos",
      "No hay diferencia; son sinónimos exactos",
    ],
    correct:
      "Un contenedor empaqueta un espacio de usuario aislado (filesystem y procesos) y se le llama 'VM ligera'; a diferencia de una VM, no envuelve un sistema operativo completo, así que muchos pueden coexistir compartiendo el kernel",
    explanation:
      "Los contenedores, motor de microservicios y serverless, suelen llamarse 'máquinas virtuales ligeras': mientras una VM tradicional envuelve un sistema operativo completo, un contenedor empaqueta solo un espacio de usuario aislado (un filesystem y unos procesos), por lo que muchos contenedores pueden coexistir en una misma máquina de forma eficiente. Ayudan a descomponer el 'monolito distribuido' en entornos de software separados.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 4 — Choosing Technologies",
  },

  // ---- cap. 5 — Data Generation in Source Systems ----
  {
    id: "fde-c5-01",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "El patrón CRUD (create, read, update, delete) es la forma más común de almacenar el estado de una aplicación. ¿Cómo se puede extraer datos de una tabla que aplica CRUD para analítica?",
    options: [
      "Con extracción por snapshots (foto periódica del estado actual) o con CDC (captura de cada evento insert/update/delete), que da el historial completo y permite analítica casi en tiempo real",
      "Solo es posible reescribir la aplicación entera para que use otra base",
      "CRUD impide cualquier extracción de datos hacia analítica",
      "Únicamente copiando manualmente fila por fila a Excel",
    ],
    correct:
      "Con extracción por snapshots (foto periódica del estado actual) o con CDC (captura de cada evento insert/update/delete), que da el historial completo y permite analítica casi en tiempo real",
    explanation:
      "CRUD (crear, leer, actualizar, borrar) son las cuatro operaciones básicas del almacenamiento persistente y el patrón más común para guardar el estado de una app (en APIs REST y bases). Para llevar esos datos a analítica hay dos enfoques: extracción por snapshots (captura el estado actual periódicamente) o CDC (captura cada evento de cambio), que conserva el historial completo de operaciones y habilita analítica casi en tiempo real.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-02",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: antes de confirmar una escritura, muchas bases de datos la registran primero en un registro binario llamado write-________ log (WAL), clave para la recuperación ante fallos y base del CDC por logs.",
    accept: ["ahead", "write-ahead log", "wal", "ahead log"],
    answerDisplay: "Write-ahead log (WAL)",
    explanation:
      "El write-ahead log (WAL) es típicamente un archivo binario en formato nativo de la base: el servidor guarda cada operación de escritura/actualización en el log ANTES de confirmar (acknowledge) la petición. Esto garantiza la recuperabilidad: si el servidor falla, al reiniciar recupera su estado completando el trabajo pendiente del log. Además, los database logs son la base del CDC para generar streams de eventos a partir de los cambios.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-03",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Reis & Housley distinguen varios 'tipos de tiempo' en la ingesta. ¿Qué es el 'ingestion time' (tiempo de ingesta) frente al 'event time' y el 'process time'?",
    options: [
      "Event time = cuándo se generó el evento en la fuente; ingestion time = cuándo se ingiere a una cola/almacenamiento; process time = cuándo se procesa (la duración del procesamiento es el 'processing time')",
      "Ingestion time = cuándo se generó el evento; event time = cuándo se almacena para siempre",
      "Los tres son el mismo instante exacto",
      "Ingestion time mide el tamaño del evento en bytes",
    ],
    correct:
      "Event time = cuándo se generó el evento en la fuente; ingestion time = cuándo se ingiere a una cola/almacenamiento; process time = cuándo se procesa (la duración del procesamiento es el 'processing time')",
    explanation:
      "El event time es cuándo se generó el evento en el sistema fuente; el ingestion time es cuándo se ingiere desde la fuente hacia una cola, caché, memoria, object storage o base; el process time ocurre después, cuando el dato se procesa (típicamente una transformación), y el 'processing time' es cuánto tardó. Conviene registrar todos estos timestamps automáticamente para rastrear el movimiento del dato por el pipeline.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-04",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es una diferencia clave entre una API REST y GraphQL?",
    options: [
      "REST es stateless y suele restringir la consulta a un modelo de datos específico por endpoint; GraphQL permite recuperar múltiples modelos de datos en una sola petición, con consultas más flexibles (basadas en JSON)",
      "REST permite traer varios modelos en una petición y GraphQL solo uno",
      "GraphQL no usa HTTP y REST sí",
      "Son idénticas; GraphQL es solo el nombre de REST en Facebook",
    ],
    correct:
      "REST es stateless y suele restringir la consulta a un modelo de datos específico por endpoint; GraphQL permite recuperar múltiples modelos de datos en una sola petición, con consultas más flexibles (basadas en JSON)",
    explanation:
      "REST (representational state transfer) es el paradigma dominante de APIs HTTP: interacciones stateless (cada llamada es independiente) construidas en torno a verbos HTTP, pero generalmente limita cada endpoint a un modelo de datos. GraphQL (creado en Facebook) permite recuperar múltiples modelos en una sola petición, con consultas más flexibles y expresivas, devolviendo datos con forma similar al JSON de la consulta. Ambos conviven en la práctica.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-05",
    topic: "ingesta",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué es un 'webhook' y por qué se le llama a veces 'reverse API'?",
    options: [
      "Un patrón event-based: cuando ocurre un evento en la fuente, esta llama a un endpoint HTTP del consumidor; la conexión va de la fuente al consumidor (al revés que una API típica)",
      "Una API que solo permite leer datos, nunca escribir",
      "Un tipo de base de datos NoSQL para grafos",
      "Un formato de archivo para logs binarios",
    ],
    correct:
      "Un patrón event-based: cuando ocurre un evento en la fuente, esta llama a un endpoint HTTP del consumidor; la conexión va de la fuente al consumidor (al revés que una API típica)",
    explanation:
      "Un webhook es un patrón simple de transmisión basado en eventos: cuando ocurren ciertos eventos en el sistema fuente, este dispara una llamada (POST) a un endpoint HTTP alojado por el consumidor de datos. Como la conexión va de la fuente hacia el consumidor —al revés que en una API típica, donde el consumidor llama a la fuente— se les llama 'reverse APIs'. Para analítica se suelen recoger estos eventos con colas de mensajes.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-06",
    topic: "ingesta",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Como mínimo, ¿qué debe capturar un log de eventos, y en qué formatos se codifican los logs?",
    options: [
      "Quién, qué y cuándo (who/what/when); se codifican como binarios (compactos, p. ej. database logs), semiestructurados (texto serializado, normalmente JSON) o de texto plano sin estructura",
      "Solo la marca de tiempo, sin más; siempre en formato binario",
      "Únicamente el nombre del servidor; siempre en XML",
      "Solo errores; siempre en texto plano",
    ],
    correct:
      "Quién, qué y cuándo (who/what/when); se codifican como binarios (compactos, p. ej. database logs), semiestructurados (texto serializado, normalmente JSON) o de texto plano sin estructura",
    explanation:
      "Un log registra eventos y su metadata; como mínimo captura quién (usuario/sistema/servicio asociado), qué (el evento y su metadata) y cuándo (timestamp). Se codifican en tres formas: binarios (formato compacto y eficiente, p. ej. los database logs), semiestructurados (texto serializado, casi siempre JSON: portables pero menos eficientes) y de texto plano/no estructurados (la salida de consola del software, sin estándar general).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-07",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "NoSQL ('not only SQL') agrupa bases que abandonan el paradigma relacional. ¿Cuáles de las siguientes son tipos de base NoSQL descritos en el libro?",
    options: [
      "Clave-valor (key-value)",
      "Documental (document)",
      "Wide-column (columna ancha)",
      "De grafos (graph)",
      "De búsqueda (search) y de series de tiempo (time series)",
      "Esquema en estrella (star schema)",
    ],
    correctSet: [
      "Clave-valor (key-value)",
      "Documental (document)",
      "Wide-column (columna ancha)",
      "De grafos (graph)",
      "De búsqueda (search) y de series de tiempo (time series)",
    ],
    explanation:
      "NoSQL ('not only SQL') abarca bases que abandonan el paradigma relacional para ganar rendimiento, escalabilidad o flexibilidad de esquema (sacrificando a menudo consistencia fuerte, joins o esquema fijo). El libro cubre: clave-valor, documental, wide-column, de grafos, de búsqueda y de series de tiempo. El 'esquema en estrella' NO es un tipo de base, sino una técnica de modelado dimensional (Kimball).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-08",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué caracteriza a una base de datos documental (document store) como MongoDB?",
    options: [
      "Almacena documentos (objetos anidados, normalmente JSON) en colecciones, recuperados por clave; no soporta joins, el esquema es flexible y suele NO ser ACID (a menudo eventualmente consistente)",
      "Almacena filas con esquema fijo y claves foráneas, siempre ACID y con joins nativos",
      "Solo guarda pares clave-valor en memoria, sin persistencia",
      "Está optimizada exclusivamente para recorridos de grafos",
    ],
    correct:
      "Almacena documentos (objetos anidados, normalmente JSON) en colecciones, recuperados por clave; no soporta joins, el esquema es flexible y suele NO ser ACID (a menudo eventualmente consistente)",
    explanation:
      "Una base documental es un tipo especializado de clave-valor: guarda documentos (objetos anidados, en la práctica JSON) en colecciones (≈ tablas) recuperados por clave. No soporta joins (los datos no se normalizan fácilmente; idealmente todo lo relacionado va en un mismo documento), el esquema es flexible (bendición y maldición) y generalmente NO es ACID, siendo a menudo eventualmente consistente. Para analítica suele requerir un full scan o CDC.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-09",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuándo es adecuada una base de datos de grafos (p. ej. Neo4j)?",
    options: [
      "Cuando importa analizar la conectividad entre elementos: almacena nodos y aristas (edges) y permite consultas de recorrido (traversals) complejas, con lenguajes como Cypher o SPARQL",
      "Cuando solo se necesita recuperar registros por una única clave en memoria",
      "Cuando se requieren agregaciones analíticas sobre tablas columnar gigantes",
      "Cuando los datos son series de tiempo de sensores IoT",
    ],
    correct:
      "Cuando importa analizar la conectividad entre elementos: almacena nodos y aristas (edges) y permite consultas de recorrido (traversals) complejas, con lenguajes como Cypher o SPARQL",
    explanation:
      "Una base de grafos almacena datos con estructura de grafo matemático (nodos y aristas) y es ideal cuando importa la conectividad entre elementos y los recorridos complejos (p. ej. '¿a cuántos usuarios llego atravesando dos conexiones?' en una red social), algo lento y costoso en una documental. Usan lenguajes especializados como Cypher, SPARQL, GQL o RDF.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-10",
    topic: "modelado",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué es una base de datos clave-valor (key-value store) y un uso típico?",
    options: [
      "Una base NoSQL que recupera registros mediante una clave única que identifica cada registro (como un hash map); un uso típico es el caché en memoria de datos de sesión para apps web/móviles",
      "Una base relacional con claves primarias y foráneas para joins",
      "Una base optimizada para recorrer grafos de relaciones sociales",
      "Una base columnar para agregaciones analíticas sobre petabytes",
    ],
    correct:
      "Una base NoSQL que recupera registros mediante una clave única que identifica cada registro (como un hash map); un uso típico es el caché en memoria de datos de sesión para apps web/móviles",
    explanation:
      "Una base clave-valor recupera registros mediante una clave única (similar a un hash map o diccionario, pero potencialmente más escalable). Las variantes en memoria son populares para caché de datos de sesión en apps web/móviles, donde se necesita lookup ultrarrápido y alta concurrencia (almacenamiento temporal). También las hay con persistencia durable. Document stores y wide-column son, en sentido amplio, tipos de clave-valor.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-11",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia sutil pero esencial entre un 'mensaje' (message queue) y un 'stream' (event-streaming platform)?",
    options: [
      "Un mensaje es una señal discreta que, tras ser recibida/confirmada, se elimina de la cola; un stream es un log append-only de eventos que se retiene mucho tiempo, permitiendo reprocesar/rebobinar y agregar sobre muchos eventos",
      "Un mensaje se retiene meses y un stream se borra al consumirse",
      "Son exactamente lo mismo, solo cambia el proveedor",
      "Un stream solo transporta un evento a la vez y un mensaje millones",
    ],
    correct:
      "Un mensaje es una señal discreta que, tras ser recibida/confirmada, se elimina de la cola; un stream es un log append-only de eventos que se retiene mucho tiempo, permitiendo reprocesar/rebobinar y agregar sobre muchos eventos",
    explanation:
      "Un mensaje es dato crudo comunicado entre sistemas vía una cola (publish/subscribe): es discreto y singular, y una vez entregado y confirmado se elimina de la cola. Un stream es un log append-only y ordenado de registros de eventos, retenido durante una ventana larga (semanas/meses), lo que permite operaciones complejas sobre muchos eventos (agregaciones) y rebobinar a un punto en el tiempo. Las plataformas de streaming también pueden hacer paso de mensajes.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-12",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En colas de mensajes, ¿qué diferencia la entrega 'exactly-once' de 'at-least-once', y por qué se busca que el sistema sea idempotente?",
    options: [
      "Exactly-once: tras confirmar, el mensaje no se vuelve a entregar; at-least-once: puede entregarse/consumirse más de una vez. La idempotencia hace que procesar un mensaje una o varias veces dé el mismo resultado, cubriendo fallos (p. ej. procesar y caer antes de confirmar)",
      "Exactly-once entrega siempre dos veces y at-least-once nunca entrega",
      "La idempotencia significa que el mensaje se borra inmediatamente",
      "Son lo mismo; la idempotencia no aporta nada",
    ],
    correct:
      "Exactly-once: tras confirmar, el mensaje no se vuelve a entregar; at-least-once: puede entregarse/consumirse más de una vez. La idempotencia hace que procesar un mensaje una o varias veces dé el mismo resultado, cubriendo fallos (p. ej. procesar y caer antes de confirmar)",
    explanation:
      "Con entrega 'exactly-once', tras la confirmación (ack) el mensaje desaparece y no se reentrega; con 'at-least-once', un mensaje puede ser consumido más de una vez (útil cuando los duplicados no importan). Idealmente los sistemas son idempotentes: procesar un mensaje una o varias veces produce el mismo resultado. Esto cubre escenarios sutiles, p. ej. un consumidor que procesa el mensaje pero falla justo antes de confirmarlo (se procesaría dos veces).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-13",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En una plataforma de streaming, ¿qué es una 'partición' y por qué importa elegir bien la 'partition key' (evitar 'hotspotting')?",
    options: [
      "Una partición subdivide un stream para dar paralelismo y throughput; los mensajes se reparten por partition key (misma clave → misma partición). Una mala clave causa hotspotting: demasiados mensajes a una partición, sobrecargándola",
      "Una partición es una copia de respaldo del stream; la clave no afecta el reparto",
      "El hotspotting es deseable porque concentra todo el trabajo en un nodo",
      "La partition key solo sirve para cifrar los mensajes",
    ],
    correct:
      "Una partición subdivide un stream para dar paralelismo y throughput; los mensajes se reparten por partition key (misma clave → misma partición). Una mala clave causa hotspotting: demasiados mensajes a una partición, sobrecargándola",
    explanation:
      "Las particiones subdividen un stream (como los carriles de una autopista) para permitir paralelismo y mayor throughput. Los mensajes se distribuyen por 'partition key': los de igual clave caen en la misma partición (útil, p. ej., para enviar todos los eventos de un dispositivo al mismo servidor). El riesgo es el 'hotspotting': una clave mal elegida (p. ej. el estado de EE. UU. con poblaciones desiguales) envía un número desproporcionado de mensajes a una partición, sobrecargándola. Hay que elegir una clave que distribuya de forma pareja.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  {
    id: "fde-c5-14",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Las siglas ACID describen un conjunto crítico de características de las bases de datos. ¿Qué significan?",
    options: [
      "Atomicidad (la transacción ocurre como una unidad, todo-o-nada), Consistencia (una lectura devuelve la última versión escrita), Aislamiento (Isolation: las actualizaciones concurrentes acaban como una ejecución secuencial) y Durabilidad (lo confirmado no se pierde, ni ante corte de energía)",
      "Acceso, Concurrencia, Indexación y Distribución",
      "Agregación, Compresión, Ingesta y Despliegue",
      "Es un sinónimo de 'eventual consistency'",
    ],
    correct:
      "Atomicidad (la transacción ocurre como una unidad, todo-o-nada), Consistencia (una lectura devuelve la última versión escrita), Aislamiento (Isolation: las actualizaciones concurrentes acaban como una ejecución secuencial) y Durabilidad (lo confirmado no se pierde, ni ante corte de energía)",
    explanation:
      "ACID = Atomicidad, Consistencia, Aislamiento (Isolation) y Durabilidad. Una transacción atómica es un conjunto de cambios que se confirman como una unidad (p. ej. una transferencia bancaria: o se actualizan ambas cuentas o ninguna). Las bases relacionales suelen ser ACID, lo que simplifica el trabajo del desarrollador; relajar ACID (p. ej. consistencia eventual) puede mejorar rendimiento y escala, pero hay que entender el modelo de consistencia para evitar desastres.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 5 — Data Generation in Source Systems",
  },

  // ---- cap. 6 — Storage ----
  {
    id: "fde-c6-01",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "order",
    prompt: "Ordena estos tipos de almacenamiento de MENOR a MAYOR latencia de acceso típica (la jerarquía de caché).",
    ordered: [
      "Caché de CPU (~1 nanosegundo)",
      "RAM (~0.1 microsegundos)",
      "SSD (~0.1 milisegundos)",
      "HDD / disco magnético (~4 milisegundos)",
      "Object storage (~100 milisegundos)",
    ],
    explanation:
      "La jerarquía de caché va de la memoria más rápida y cara a la más lenta y barata: caché de CPU (~1 ns, ~1 TB/s) → RAM (~0.1 µs, ~100 GB/s, ~$10/GB) → SSD (~0.1 ms, ~4 GB/s, ~$0.20/GB) → HDD (~4 ms, ~300 MB/s, ~$0.03/GB) → object storage (~100 ms, ~$0.02/GB-mes) → archivado (horas, ~$0.004/GB-mes). Cuanto más rápida la capa, mayor su costo y menor su capacidad; el archivado funciona como una 'caché inversa'.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-02",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué los discos magnéticos (HDD) siguen siendo la base del almacenamiento masivo pese a que los SSD son mucho más rápidos?",
    options: [
      "Porque el HDD es mucho más barato por GB (~3¢ vs ~20-30¢ del SSD); por eso el object storage sobre HDD lidera el almacenamiento a gran escala, mientras el SSD domina en OLTP por su baja latencia y alto IOPS",
      "Porque el HDD tiene menor latencia y más IOPS que el SSD",
      "Porque los SSD no pueden almacenar datos de forma persistente",
      "Porque el HDD es el único medio que permite acceso aleatorio",
    ],
    correct:
      "Porque el HDD es mucho más barato por GB (~3¢ vs ~20-30¢ del SSD); por eso el object storage sobre HDD lidera el almacenamiento a gran escala, mientras el SSD domina en OLTP por su baja latencia y alto IOPS",
    explanation:
      "El HDD usa platos giratorios y cabezales: sufre de seek time y latencia rotacional (~4 ms) y bajo IOPS (50-500), pero cuesta ~3¢/GB. El SSD (sin partes mecánicas) ofrece latencia <0.1 ms, decenas de miles de IOPS y altas velocidades, pero cuesta ~10× más por GB. Por eso el SSD es el estándar para OLTP (miles de transacciones/seg) y el object storage sobre HDD (paralelizando lecturas entre miles de discos) lidera el almacenamiento masivo de data lakes y cloud DW.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-03",
    topic: "almacenamiento",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué caracteriza a la memoria RAM frente al SSD/HDD, y qué implicación tiene para el almacenamiento?",
    options: [
      "La RAM es volátil (pierde los datos al cortarse la energía) y mucho más rápida y cara; SSD/HDD son no volátiles. Por eso la RAM se usa sobre todo para caché/procesamiento, persistiendo a un medio durable",
      "La RAM es no volátil y conserva los datos sin energía, igual que un HDD",
      "La RAM es más lenta y barata que el HDD",
      "La RAM solo sirve para almacenamiento de archivo a largo plazo",
    ],
    correct:
      "La RAM es volátil (pierde los datos al cortarse la energía) y mucho más rápida y cara; SSD/HDD son no volátiles. Por eso la RAM se usa sobre todo para caché/procesamiento, persistiendo a un medio durable",
    explanation:
      "La RAM (memoria del sistema, típicamente DRAM) está ligada a la CPU, es volátil (pierde datos en menos de un segundo sin energía) y mucho más rápida (latencia ~100 ns, ~1000× más que SSD) pero cara (~$10/GB). SSD y HDD son no volátiles (retienen datos al apagarse). Por eso la RAM se usa para caché, procesamiento e índices; los datos que deben perdurar se escriben a un medio durable (algunas arquitecturas usan baterías para volcar a disco ante un corte).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-04",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En el contexto de almacenamiento, ¿qué es la 'serialización'?",
    options: [
      "El proceso de aplanar y empacar los datos (que en memoria no tienen un formato apto para disco/red) en un formato estándar que un lector pueda decodificar (p. ej. JSON, CSV, Parquet, Avro)",
      "El proceso de comprimir datos para que ocupen menos espacio",
      "La asignación de un número secuencial a cada fila de una tabla",
      "La ejecución de transacciones una tras otra en serie",
    ],
    correct:
      "El proceso de aplanar y empacar los datos (que en memoria no tienen un formato apto para disco/red) en un formato estándar que un lector pueda decodificar (p. ej. JSON, CSV, Parquet, Avro)",
    explanation:
      "Los datos en memoria no están en un formato apto para guardarse en disco o transmitirse por red. La serialización los aplana y empaca en un formato estándar de intercambio que otro lector puede decodificar (maneja tipos, reglas de estructura y excepciones). El almacenamiento de bajo nivel de las bases es una forma de serialización: las bases por filas organizan los datos por fila (lookups rápidos), las columnares por columna (compresión y escaneos eficientes). Formatos populares: Parquet, Avro, Arrow (en memoria).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-05",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuáles son las ventajas de la compresión en sistemas de almacenamiento, y su principal desventaja?",
    options: [
      "Ventajas: los datos ocupan menos espacio y se incrementa la velocidad efectiva de escaneo por disco y el ancho de banda de red (p. ej. ratio 10:1 → 200 MB/s pasan a 2 GB/s efectivos). Desventaja: consume CPU/tiempo extra para comprimir y descomprimir",
      "Ventaja única: cifra los datos; desventaja: ninguna",
      "No tiene ventajas; siempre ralentiza todo",
      "Solo sirve para datos en RAM, nunca en disco o red",
    ],
    correct:
      "Ventajas: los datos ocupan menos espacio y se incrementa la velocidad efectiva de escaneo por disco y el ancho de banda de red (p. ej. ratio 10:1 → 200 MB/s pasan a 2 GB/s efectivos). Desventaja: consume CPU/tiempo extra para comprimir y descomprimir",
    explanation:
      "La compresión hace los datos más pequeños, lo que da tres ventajas: ocupan menos disco; aumenta la velocidad efectiva de escaneo por disco (un ratio 10:1 lleva 200 MB/s a 2 GB/s efectivos); y mejora el ancho de banda de red efectivo (10 Gbps → 100 Gbps con 10:1). La desventaja es el consumo extra de CPU y tiempo para comprimir/descomprimir al leer o escribir.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-06",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "El libro describe tres grandes tipos de sistemas de almacenamiento (abstracciones de acceso). ¿Cuáles son?",
    options: [
      "Almacenamiento de archivos (file storage)",
      "Almacenamiento de bloques (block storage)",
      "Almacenamiento de objetos (object storage)",
      "Serialización",
      "Compresión",
    ],
    correctSet: [
      "Almacenamiento de archivos (file storage)",
      "Almacenamiento de bloques (block storage)",
      "Almacenamiento de objetos (object storage)",
    ],
    explanation:
      "Los tres tipos de sistemas de almacenamiento son: file storage (organiza archivos en un árbol de directorios; soporta longitud finita, append y acceso aleatorio), block storage (el almacenamiento crudo de SSD/HDD; un bloque es la unidad direccionable mínima; base de las BD transaccionales y discos de VM, p. ej. EBS, RAID, SAN) y object storage (almacén clave-valor de objetos inmutables, base de data lakes). Serialización y compresión son 'ingredientes' del almacenamiento, no tipos de sistema.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-07",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cómo localiza el object storage (p. ej. S3) un objeto, a diferencia de un sistema de archivos?",
    options: [
      "Usa un contenedor lógico de nivel superior (bucket) y referencia cada objeto por una clave (key); NO recorre un árbol de directorios real, aunque la clave 'parezca' una ruta — por eso listar por 'carpeta' (prefijo) puede ser costoso",
      "Recorre un árbol de directorios físico real, carpeta por carpeta, como un filesystem Unix",
      "Asigna a cada objeto una dirección de bloque física en el disco",
      "Solo permite acceder a los objetos por su número de fila",
    ],
    correct:
      "Usa un contenedor lógico de nivel superior (bucket) y referencia cada objeto por una clave (key); NO recorre un árbol de directorios real, aunque la clave 'parezca' una ruta — por eso listar por 'carpeta' (prefijo) puede ser costoso",
    explanation:
      "El object storage es un almacén clave-valor de objetos inmutables: usa un contenedor de nivel superior (bucket, único en todo AWS para S3) y referencia cada objeto por su key (única dentro del bucket). Aunque una key como 'project-data/11/23/2021/data.txt' parezca tener subcarpetas, NO hay un árbol de directorios real: el sistema solo ve una clave. Por eso operaciones tipo 'ls' a nivel de 'directorio' filtran por prefijo de clave y pueden ser costosas si el bucket tiene millones de objetos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-08",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Para qué sirven el versionado de objetos (object versioning) y las políticas de ciclo de vida (lifecycle policies) en object storage?",
    options: [
      "El versionado retiene versiones antiguas de un objeto (clave+versión = referencia única e inmutable), evitando lecturas obsoletas pero aumentando el costo de almacenamiento; las lifecycle policies automatizan borrar versiones viejas o moverlas a tiers de archivo",
      "El versionado borra automáticamente todas las versiones antiguas para ahorrar espacio",
      "Las lifecycle policies cifran los objetos al escribirlos",
      "Ambos solo aplican a bases de datos relacionales, no a object storage",
    ],
    correct:
      "El versionado retiene versiones antiguas de un objeto (clave+versión = referencia única e inmutable), evitando lecturas obsoletas pero aumentando el costo de almacenamiento; las lifecycle policies automatizan borrar versiones viejas o moverlas a tiers de archivo",
    explanation:
      "Como reescribir un objeto bajo la misma clave crea uno nuevo (y actualizar referencias toma tiempo, de ahí posibles lecturas obsoletas en sistemas eventualmente consistentes), el versionado retiene versiones previas: la combinación clave+versión es una referencia única e inmutable que siempre devuelve el mismo objeto. El costo: cada versión almacena el objeto completo (no diffs), aumentando el almacenamiento. Las lifecycle policies automatizan eliminar versiones viejas o migrarlas a tiers de archivo baratos según condiciones (antigüedad, nº de versiones).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-09",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En sistemas distribuidos, ¿qué significan 'consistencia eventual' y 'consistencia fuerte', y qué describe el acrónimo BASE?",
    options: [
      "Consistencia fuerte: toda lectura devuelve el último valor escrito (vía consenso), a costa de más latencia; consistencia eventual: las lecturas devuelven datos consistentes 'con el tiempo', priorizando velocidad/escala. BASE (basically available, soft-state, eventual consistency) es la base de la consistencia eventual, opuesto a ACID",
      "Consistencia eventual garantiza siempre el último dato; consistencia fuerte nunca lo garantiza",
      "BASE significa 'Backup And Storage Encryption' y no se relaciona con la consistencia",
      "Ambas consistencias son idénticas; BASE es sinónimo de ACID",
    ],
    correct:
      "Consistencia fuerte: toda lectura devuelve el último valor escrito (vía consenso), a costa de más latencia; consistencia eventual: las lecturas devuelven datos consistentes 'con el tiempo', priorizando velocidad/escala. BASE (basically available, soft-state, eventual consistency) es la base de la consistencia eventual, opuesto a ACID",
    explanation:
      "Con consistencia fuerte, la BD distribuida asegura (vía consenso) que toda lectura devuelva el último valor escrito; se usa cuando se requiere corrección y se tolera mayor latencia. Con consistencia eventual, las lecturas devuelven valores consistentes 'en algún momento', un trade-off común para escalar horizontalmente en gran volumen. BASE (basically available, soft-state, eventual consistency) es la base de la consistencia eventual y el opuesto de ACID. La consistencia se decide en tres lugares: la tecnología, su configuración y, a veces, por consulta (p. ej. DynamoDB ofrece lecturas eventuales o fuertemente consistentes).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-10",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué distingue al HDFS (Hadoop Distributed File System) del object storage?",
    options: [
      "HDFS combina cómputo y almacenamiento en los mismos nodos (procesamiento in situ, p. ej. MapReduce); parte los archivos en bloques gestionados por el NameNode y replica cada bloque (típicamente ×3) para durabilidad/disponibilidad",
      "HDFS separa siempre cómputo y almacenamiento, sin replicación",
      "HDFS no soporta archivos grandes ni clústeres",
      "HDFS es idéntico a S3 y no permite procesamiento local",
    ],
    correct:
      "HDFS combina cómputo y almacenamiento en los mismos nodos (procesamiento in situ, p. ej. MapReduce); parte los archivos en bloques gestionados por el NameNode y replica cada bloque (típicamente ×3) para durabilidad/disponibilidad",
    explanation:
      "El HDFS (basado en Google File System) combina cómputo y almacenamiento en los mismos nodos, permitiendo procesamiento in situ (originalmente con MapReduce), a diferencia del object storage, que tiene soporte limitado de procesamiento interno. Parte los archivos grandes en bloques gestionados por el NameNode (que mantiene directorios, metadata y la ubicación de los bloques) y replica cada bloque típicamente en 3 nodos; si un nodo cae, el NameNode ordena re-replicar. HDFS sigue vivo en instalaciones legadas y motores como Amazon EMR y Spark.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-11",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: en almacenamiento de streaming (p. ej. Kafka con retención larga), la capacidad de devolver un rango de datos históricos almacenados para reprocesarlos o correr queries batch sobre un periodo se llama ________.",
    accept: ["replay", "reproducción", "repetición", "rebobinado"],
    answerDisplay: "Replay (reproducción)",
    explanation:
      "Los frameworks de streaming distribuidos como Kafka (y Kinesis, Pulsar, Pub/Sub) permiten retención de datos de larga duración (Kafka puede empujar mensajes antiguos a object storage para retención indefinida). Asociado a la retención está el 'replay' (reproducción): la capacidad de devolver un rango de datos históricos almacenados, ya sea para correr queries batch sobre un periodo o reprocesar datos en un pipeline de streaming. Es el mecanismo estándar de recuperación de datos en almacenamiento de streaming.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-12",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre 'schema on write' y 'schema on read'?",
    options: [
      "Schema on write: la tabla tiene un esquema integrado y toda escritura debe cumplirlo (patrón clásico del data warehouse; impone estándares); schema on read: el esquema se determina al leer (más flexible, permite escribir casi cualquier dato, pero más difícil de consumir luego)",
      "Schema on write determina el esquema al leer; schema on read lo impone al escribir",
      "Son lo mismo; solo cambia el nombre del proveedor",
      "Schema on read solo funciona con CSV; schema on write solo con imágenes",
    ],
    correct:
      "Schema on write: la tabla tiene un esquema integrado y toda escritura debe cumplirlo (patrón clásico del data warehouse; impone estándares); schema on read: el esquema se determina al leer (más flexible, permite escribir casi cualquier dato, pero más difícil de consumir luego)",
    explanation:
      "El esquema es la 'piedra Rosetta' que indica cómo leer los datos (no tiene por qué ser relacional). Con 'schema on write' (patrón clásico del data warehouse), la tabla tiene un esquema integrado y toda escritura debe conformarse a él, lo que impone estándares y facilita el consumo futuro (un data lake necesita un metastore para soportarlo). Con 'schema on read', el esquema se determina al leer, priorizando flexibilidad (se puede escribir casi cualquier dato) a costa de mayor dificultad para consumirlo después; idealmente se usan formatos con esquema incorporado como Parquet (CSV es notorio por su inconsistencia).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  {
    id: "fde-c6-13",
    topic: "almacenamiento",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué es un 'data catalog' (catálogo de datos)?",
    options: [
      "Un almacén centralizado de metadatos de todos los datos de la organización, que integra linaje y relaciones, suele nutrirse de escaneo automático y ofrece un portal de búsqueda (con capa social tipo wiki)",
      "Una copia de respaldo cifrada del data warehouse",
      "Un tipo de índice físico dentro de una tabla columnar",
      "El sistema de facturación del proveedor cloud",
    ],
    correct:
      "Un almacén centralizado de metadatos de todos los datos de la organización, que integra linaje y relaciones, suele nutrirse de escaneo automático y ofrece un portal de búsqueda (con capa social tipo wiki)",
    explanation:
      "Un data catalog es un almacén centralizado de metadatos de todos los datos de la organización; trabaja sobre fuentes operacionales y analíticas, integra linaje y relaciones, y permite editar descripciones. Suele apoyarse en un escaneo automático que recolecta (e infiere) metadatos de data lakes, warehouses y bases operacionales, y ofrece un portal humano de búsqueda con capa social (wiki). Es pieza clave del data lakehouse (descubrimiento de tablas) y facilita que negocio, analistas y científicos encuentren datos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 6 — Storage",
  },

  // ---- cap. 7 — Ingestion ----
  {
    id: "fde-c7-01",
    topic: "ingesta",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Cuál es la diferencia entre 'ingesta de datos' (data ingestion) e 'integración de datos' (data integration)?",
    options: [
      "Ingesta = mover datos de un punto A a B (de sistemas fuente al almacenamiento); integración = combinar datos de fuentes dispares en un nuevo dataset (p. ej. unir CRM + analytics web en un perfil de usuario)",
      "Ingesta = combinar varias fuentes; integración = mover de A a B",
      "Son exactamente lo mismo",
      "Ingesta solo aplica a streaming; integración solo a batch",
    ],
    correct:
      "Ingesta = mover datos de un punto A a B (de sistemas fuente al almacenamiento); integración = combinar datos de fuentes dispares en un nuevo dataset (p. ej. unir CRM + analytics web en un perfil de usuario)",
    explanation:
      "La ingesta de datos es el proceso de mover datos de un lugar a otro (de los sistemas fuente al almacenamiento, como paso intermedio del ciclo de vida). La integración de datos combina datos de fuentes dispares en un nuevo dataset (p. ej. unir CRM, analytics de publicidad y web para crear un perfil de usuario). No confundir tampoco con la 'ingesta interna' de un sistema (copiar de una tabla a otra), que es parte de la transformación.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-02",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Reis & Housley proponen el mantra 'todos los datos son no acotados hasta que se acotan'. ¿Qué significan 'bounded' y 'unbounded'?",
    options: [
      "Unbounded (no acotado) = el dato tal como existe en la realidad, fluyendo continuamente conforme ocurren los eventos; bounded (acotado) = una forma conveniente de agrupar el dato por una frontera, p. ej. el tiempo (un batch)",
      "Bounded = dato que fluye sin parar; unbounded = un lote cerrado de tamaño fijo",
      "Bounded significa cifrado y unbounded sin cifrar",
      "Son sinónimos de batch y micro-batch respectivamente",
    ],
    correct:
      "Unbounded (no acotado) = el dato tal como existe en la realidad, fluyendo continuamente conforme ocurren los eventos; bounded (acotado) = una forma conveniente de agrupar el dato por una frontera, p. ej. el tiempo (un batch)",
    explanation:
      "El dato 'unbounded' (no acotado) es el dato tal como existe en la realidad: los eventos ocurren de forma continua o esporádica, fluyendo sin fin. El dato 'bounded' (acotado) es una forma conveniente de agrupar ese flujo según una frontera, típicamente el tiempo (un batch). Los procesos de negocio llevan tiempo imponiendo límites artificiales cortando lotes discretos; los sistemas de ingesta por streaming preservan la naturaleza no acotada del dato para procesarlo de forma continua.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-03",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre ingesta síncrona y asíncrona, y por qué importa?",
    options: [
      "Síncrona: fuente, ingesta y destino están fuertemente acoplados (si un paso falla, los siguientes no arrancan y hay que reejecutar todo); asíncrona: las dependencias operan a nivel de evento individual, disponibles en cuanto se ingieren, con buffers que absorben picos",
      "Síncrona procesa eventos uno a uno en paralelo; asíncrona procesa todo en un único batch acoplado",
      "Son lo mismo; solo cambia el nombre",
      "La asíncrona siempre pierde datos y la síncrona nunca",
    ],
    correct:
      "Síncrona: fuente, ingesta y destino están fuertemente acoplados (si un paso falla, los siguientes no arrancan y hay que reejecutar todo); asíncrona: las dependencias operan a nivel de evento individual, disponibles en cuanto se ingieren, con buffers que absorben picos",
    explanation:
      "En la ingesta síncrona, fuente, ingesta y destino están fuertemente acoplados (común en ETL antiguos): si un proceso falla, los downstream no arrancan y a menudo hay que reejecutar todo el batch desde el inicio. En la ingesta asíncrona, las dependencias operan al nivel de eventos individuales (como microservicios): cada evento queda disponible en cuanto se ingiere y un buffer (p. ej. Kinesis como 'amortiguador') modera los picos para no saturar el procesamiento downstream.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-04",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Para manejar ingesta 'bursty' (a ráfagas) y evitar perder datos en picos, ¿qué técnica es clave?",
    options: [
      "Buffering (almacenamiento intermedio que recoge eventos durante los picos), idealmente con servicios gestionados que escalan el throughput automáticamente",
      "Apagar la ingesta durante los picos para no saturar",
      "Procesar siempre fila por fila sin ningún buffer",
      "Asumir que la generación de datos es siempre a tasa constante",
    ],
    correct:
      "Buffering (almacenamiento intermedio que recoge eventos durante los picos), idealmente con servicios gestionados que escalan el throughput automáticamente",
    explanation:
      "La generación de datos rara vez es a tasa constante: fluye y refluye. Se necesita buffering (almacenamiento intermedio) para recoger eventos durante los picos y evitar perder datos, dando tiempo a que el sistema escale. También hay que considerar backfills repentinos (p. ej. una fuente que vuelve tras caerse). El consejo: usar servicios gestionados que escalan el throughput por ti en lugar de añadir servidores/shards manualmente.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-05",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "El 'payload' es el dataset que ingieres. ¿Qué características suyas debes considerar?",
    options: [
      "Kind (tipo y formato: tabular/imagen/video/texto; CSV/Parquet/JPG…)",
      "Shape (forma/dimensiones: filas×columnas, profundidad de anidación, ancho×alto×RGB…)",
      "Size (tamaño en bytes; se puede comprimir o trocear en chunks)",
      "Schema y tipos de datos (campos y sus tipos)",
      "Metadata (datos sobre los datos)",
      "El color del logo de la empresa que lo genera",
    ],
    correctSet: [
      "Kind (tipo y formato: tabular/imagen/video/texto; CSV/Parquet/JPG…)",
      "Shape (forma/dimensiones: filas×columnas, profundidad de anidación, ancho×alto×RGB…)",
      "Size (tamaño en bytes; se puede comprimir o trocear en chunks)",
      "Schema y tipos de datos (campos y sus tipos)",
      "Metadata (datos sobre los datos)",
    ],
    explanation:
      "Un payload tiene: kind (tipo —tabular, imagen, video, texto— y formato —CSV, Parquet, JPG—), shape (dimensiones: M filas × N columnas, profundidad de anidación JSON, ancho×alto×RGB de una imagen…), size (bytes; se puede comprimir o trocear en chunks para transmitir y reensamblar), schema y tipos de datos (no siempre explícitos: texto/imágenes/audio no tienen esquema explícito), y metadata. Entender el esquema subyacente de la fuente es el gran reto de ingeniería.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-06",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En ingesta de datos en streaming, ¿qué es un 'schema registry' (registro de esquemas)?",
    options: [
      "Un repositorio de metadatos que mantiene la integridad de esquema y tipos ante esquemas cambiantes, versionando los cambios y permitiendo serialización/deserialización consistente entre productores y consumidores",
      "Un índice físico dentro de una tabla columnar",
      "Una cola donde se guardan los eventos que fallan al ingerirse",
      "El catálogo de precios del proveedor cloud",
    ],
    correct:
      "Un repositorio de metadatos que mantiene la integridad de esquema y tipos ante esquemas cambiantes, versionando los cambios y permitiendo serialización/deserialización consistente entre productores y consumidores",
    explanation:
      "En streaming cada mensaje tiene un esquema, y estos pueden evolucionar entre productores y consumidores. Un schema registry es un repositorio de metadatos que mantiene la integridad de esquema y tipos frente a esquemas cambiantes: describe el modelo de datos de los mensajes, versiona e historiza los cambios y permite serializar/deserializar de forma consistente entre productores y consumidores. Ayuda a mitigar la evolución de esquema (junto con dead-letter queues y la comunicación con los equipos upstream).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-07",
    topic: "ingesta",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Además de 'push' y 'pull', existe el patrón 'poll'. ¿Qué es el polling?",
    options: [
      "Revisar periódicamente una fuente para detectar cambios; cuando los detecta, el destino jala (pull) los datos",
      "Que la fuente empuje datos al destino sin que este los pida",
      "Borrar los datos de la fuente tras leerlos una vez",
      "Cifrar los datos antes de transmitirlos",
    ],
    correct:
      "Revisar periódicamente una fuente para detectar cambios; cuando los detecta, el destino jala (pull) los datos",
    explanation:
      "El polling es un patrón relacionado con el pull: consiste en revisar periódicamente la fuente para detectar cambios; cuando se detecta un cambio, el destino jala (pull) los datos como en una extracción pull normal. Recuerda: en push la fuente envía los datos al destino; en pull el destino los lee de la fuente; la línea entre ambos suele ser difusa.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-08",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En ingesta batch, ¿cuál es la diferencia entre extracción por 'snapshot completo' y 'diferencial' (incremental)?",
    options: [
      "Snapshot completo: capturar todo el estado actual de la fuente en cada lectura (simple pero costoso); diferencial/incremental: traer solo los cambios desde la última lectura (minimiza tráfico de red y almacenamiento)",
      "Snapshot trae solo los cambios; diferencial trae todo cada vez",
      "Ambos traen exactamente lo mismo; solo cambia el nombre",
      "El diferencial solo funciona en bases de grafos",
    ],
    correct:
      "Snapshot completo: capturar todo el estado actual de la fuente en cada lectura (simple pero costoso); diferencial/incremental: traer solo los cambios desde la última lectura (minimiza tráfico de red y almacenamiento)",
    explanation:
      "El ingeniero elige entre capturar snapshots completos (toda la foto del estado actual de la fuente en cada lectura: simple, pero mueve y almacena más datos) o actualizaciones diferenciales/incrementales (solo los cambios desde la última lectura: ideal para minimizar tráfico de red y uso de almacenamiento). Pese a su mayor costo, los snapshots completos siguen siendo muy comunes por su simplicidad.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-09",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "La ingesta basada en archivos (file-based export/ingestion) se considera un patrón 'push'. ¿Qué ventaja tiene y qué métodos de intercambio usa?",
    options: [
      "El trabajo de exportar/preprocesar se hace del lado de la fuente, que controla qué datos salen (mejor seguridad que dar acceso directo a la BD); métodos comunes: object storage, SFTP, EDI o SCP",
      "Da acceso directo de lectura a la base de datos de producción, lo cual es más seguro",
      "Solo funciona con bases de datos de grafos",
      "Es siempre más lento y menos seguro que una conexión directa a la BD",
    ],
    correct:
      "El trabajo de exportar/preprocesar se hace del lado de la fuente, que controla qué datos salen (mejor seguridad que dar acceso directo a la BD); métodos comunes: object storage, SFTP, EDI o SCP",
    explanation:
      "En la ingesta basada en archivos, los datos se serializan a archivos en un formato intercambiable y se entregan al sistema de ingesta. Es un patrón push porque la exportación y el preprocesamiento ocurren del lado de la fuente, dando a sus ingenieros control total sobre qué se exporta y cómo se prepara; además, suele ser preferible por seguridad a permitir acceso directo a los backends. Métodos comunes de intercambio: object storage, SFTP (secure file transfer protocol), EDI (electronic data interchange) o SCP (secure copy).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-10",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es una 'dead-letter queue' (cola de mensajes muertos) y para qué sirve?",
    options: [
      "Un lugar aparte donde se reenrutan y almacenan los eventos que no pudieron ingerirse (tópico inexistente, tamaño excesivo, TTL expirado); evita que esos eventos erróneos bloqueen a los demás y permite diagnosticar/reprocesar",
      "Una cola donde se guardan los eventos más prioritarios para procesarlos primero",
      "El registro de esquemas de los mensajes",
      "Una técnica para comprimir mensajes antiguos",
    ],
    correct:
      "Un lugar aparte donde se reenrutan y almacenan los eventos que no pudieron ingerirse (tópico inexistente, tamaño excesivo, TTL expirado); evita que esos eventos erróneos bloqueen a los demás y permite diagnosticar/reprocesar",
    explanation:
      "A veces los eventos no se ingieren con éxito (se envían a un tópico/cola inexistente, exceden el tamaño máximo o expiraron su TTL). La dead-letter queue es una ubicación separada a la que se reenrutan y almacenan esos eventos problemáticos, segregándolos de los 'buenos'. Así evitan bloquear la ingesta de los demás mensajes, y el ingeniero puede diagnosticar la causa de los errores y, tras corregirla, reprocesar algunos de esos mensajes.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  {
    id: "fde-c7-11",
    topic: "ingesta",
    track: "general",
    difficulty: "basico",
    type: "fill",
    prompt: "Completa: el parámetro que define cuánto tiempo se conserva un evento antes de que, si no se ingiere/confirma, desaparezca automáticamente, se llama tiempo de vida o ________ (siglas en inglés).",
    accept: ["ttl", "time to live", "tiempo de vida"],
    answerDisplay: "TTL (time to live)",
    explanation:
      "El TTL (time to live) es el tiempo máximo de retención de un mensaje: cuánto vive un evento antes de ser confirmado e ingerido; si no se ingiere antes de expirar su TTL, desaparece automáticamente, lo que ayuda a reducir la 'backpressure' y el volumen innecesario. Hay que balancearlo: un TTL muy corto (ms/seg) hace desaparecer mensajes antes de procesarlos; uno muy largo (semanas/meses) crea un backlog. Ejemplos: Pub/Sub hasta 7 días, Kinesis hasta 365 días, Kafka configurable hasta retención indefinida.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 7 — Ingestion",
  },

  // ---- cap. 9 — Serving Data for Analytics, Machine Learning, and Reverse ETL ----
  {
    id: "fde-c9-01",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Reis & Housley, ¿cuál es la consideración 'raíz' al servir datos, y cómo se construye?",
    options: [
      "La confianza (trust): los usuarios deben creer que el dato representa fielmente su negocio; se construye con validación de datos, observabilidad y confirmando la validez con los stakeholders",
      "La velocidad de la consulta, por encima de todo lo demás",
      "El número de dashboards publicados",
      "El costo del almacenamiento",
    ],
    correct:
      "La confianza (trust): los usuarios deben creer que el dato representa fielmente su negocio; se construye con validación de datos, observabilidad y confirmando la validez con los stakeholders",
    explanation:
      "Por encima de todo, la confianza es la consideración raíz al servir datos: la arquitectura más sofisticada es irrelevante si los usuarios no creen que el dato representa fielmente su negocio. Perder la confianza suele ser la muerte silenciosa de un proyecto de datos y recuperarla es muy difícil. Se construye con validación de datos (asegurar que representan con exactitud la realidad), observabilidad de datos (vista continua del dato y sus procesos) e inspección/confirmación con los stakeholders, a lo largo de todo el ciclo.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-02",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre un SLA y un SLO?",
    options: [
      "El SLA es el contrato con los stakeholders sobre qué esperar del producto de datos (p. ej. 'datos disponibles y de alta calidad'); el SLO es la parte que mide el desempeño frente a lo acordado (p. ej. '99% de uptime, 95% de datos sin defectos')",
      "El SLO es el contrato general y el SLA solo la métrica de medición",
      "Son lo mismo; SLA es el término en inglés y SLO en español",
      "El SLA mide la latencia y el SLO el costo, sin relación entre sí",
    ],
    correct:
      "El SLA es el contrato con los stakeholders sobre qué esperar del producto de datos (p. ej. 'datos disponibles y de alta calidad'); el SLO es la parte que mide el desempeño frente a lo acordado (p. ej. '99% de uptime, 95% de datos sin defectos')",
    explanation:
      "Un SLA (service-level agreement) le dice a los usuarios qué esperar de tu producto de datos: es un contrato con los stakeholders (p. ej. 'los datos estarán disponibles de forma fiable y serán de alta calidad'). El SLO (service-level objective) es una parte clave del SLA que describe cómo medirás el desempeño frente a lo acordado (p. ej. '99% de uptime, 95% de datos libres de defectos'). Ambos pueden tomar la forma de 'data contracts'. No basta con acordarlos: la comunicación continua es central.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-03",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Al servir datos, ¿cuál es la diferencia entre 'definición de datos' (data definition) y 'lógica de datos' (data logic)?",
    options: [
      "La definición es el significado de un dato en la organización (p. ej. qué es un 'cliente'); la lógica son las fórmulas/reglas para derivar métricas a partir del dato (p. ej. cómo se calcula el churn o el beneficio neto)",
      "La definición son las fórmulas de cálculo; la lógica es el significado del dato",
      "Son lo mismo; solo cambia el término según el departamento",
      "La definición es el tipo de dato (int, string) y la lógica es su tamaño en bytes",
    ],
    correct:
      "La definición es el significado de un dato en la organización (p. ej. qué es un 'cliente'); la lógica son las fórmulas/reglas para derivar métricas a partir del dato (p. ej. cómo se calcula el churn o el beneficio neto)",
    explanation:
      "La definición de datos es el significado del dato tal como se entiende en toda la organización (p. ej. qué cuenta como 'cliente', que puede variar entre departamentos y debe documentarse). La lógica de datos estipula las fórmulas para derivar métricas (gross sales, customer lifetime value): para calcular el churn necesitas la definición de cliente; para el beneficio neto, reglas de qué gastos restar. Cuando definiciones y lógica viven solo como 'conocimiento institucional' (anécdotas), se pierde la corrección; conviene declararlas formalmente (en un data catalog y en una capa semántica).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-04",
    topic: "calidad",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Para servir datos sensibles a analistas reduciendo el riesgo de fuga de información, ¿qué técnica recomienda el libro?",
    options: [
      "Ofuscación de datos: servir datos sintéticos, mezclados (scrambled) o anonimizados, que conserven la señal útil pero dificulten identificar información protegida (PII)",
      "Dar acceso de administrador a todos para que cada quien filtre lo que necesita",
      "Enviar los datos crudos por email a quien los pida",
      "Eliminar todas las columnas numéricas del dataset",
    ],
    correct:
      "Ofuscación de datos: servir datos sintéticos, mezclados (scrambled) o anonimizados, que conserven la señal útil pero dificulten identificar información protegida (PII)",
    explanation:
      "Dar acceso a datos crudos (aun con campos/filas limitados) plantea el riesgo de rastrear el dato hasta una persona. Los avances en ofuscación de datos permiten servir datasets sintéticos, mezclados (scrambled) o anonimizados que conservan suficiente señal para que el analista/científico trabaje, pero dificultan identificar la información protegida. No es perfecto (con esfuerzo, muchos datasets pueden des-anonimizarse), pero reduce el riesgo de fuga.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-05",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Reis & Housley advierten que la etapa de servir datos presenta la mayor 'superficie de seguridad'. ¿Qué prácticas recomiendan?",
    options: [
      "Aplicar el principio de mínimo privilegio (acceso solo al necesario), servir en modo solo-lectura por defecto, usar vistas filtradas en entornos multitenant, y revocar accesos que ya no se necesiten",
      "Dar permisos totales (carte blanche) a todos para no frenar el análisis",
      "Compartir los datos públicamente sin control de acceso",
      "Nunca usar roles ni grupos IAM",
    ],
    correct:
      "Aplicar el principio de mínimo privilegio (acceso solo al necesario), servir en modo solo-lectura por defecto, usar vistas filtradas en entornos multitenant, y revocar accesos que ya no se necesiten",
    explanation:
      "De todas las etapas del ciclo, servir presenta la mayor superficie de seguridad. Se recomienda: principio de mínimo privilegio para personas y sistemas (solo el acceso necesario para la tarea), servir en solo-lectura por defecto, control de acceso lo más granular posible (campos, filas, columnas), combinar grupos de usuarios con roles IAM, y en multitenant mediar el acceso con vistas filtradas para que cada quien vea solo sus datos. La seguridad bien hecha es un habilitador (permite más analítica), no un impedimento.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-06",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre analítica de negocio (business), operacional (operational) y embebida (embedded)?",
    options: [
      "Business: usa datos históricos/actuales para decisiones estratégicas (insights accionables); operational: usa datos en tiempo real para acción inmediata (p. ej. monitoreo, alertas); embedded: analítica orientada al cliente, incrustada en una app (data app)",
      "Business es en tiempo real; operational es histórica; embedded no usa datos",
      "Las tres son idénticas; solo cambia el nombre del proveedor de BI",
      "Embedded es solo interna y operational solo externa",
    ],
    correct:
      "Business: usa datos históricos/actuales para decisiones estratégicas (insights accionables); operational: usa datos en tiempo real para acción inmediata (p. ej. monitoreo, alertas); embedded: analítica orientada al cliente, incrustada en una app (data app)",
    explanation:
      "Business analytics usa datos históricos y actuales para decisiones estratégicas (dashboards, reportes, análisis ad hoc; insights accionables a más largo plazo). Operational analytics usa datos en tiempo real para acción inmediata (p. ej. monitoreo de apps, alertas que disparan escalado): 'acción inmediata vs. insights accionables'. Embedded analytics es orientada al cliente, incrustada en una aplicación (data app), con exigencias de baja latencia, consultas rápidas y alta concurrencia. La línea entre business y operational se difumina con el streaming.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-07",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: el proceso de servir datos cargándolos desde un sistema OLAP de vuelta a los sistemas fuente (p. ej. devolver leads puntuados a un CRM) se llama ________ ETL.",
    accept: ["reverse", "reversa", "inverso", "inversa"],
    answerDisplay: "Reverse ETL",
    explanation:
      "Reverse ETL toma datos procesados del lado de salida del ciclo de vida y los carga de vuelta a los sistemas fuente. Ejemplo: extraes datos del CRM al warehouse, entrenas un modelo de lead scoring y devuelves los leads puntuados AL CRM, donde el equipo de ventas trabaja (reduciendo fricción para el usuario final). Los autores lo llaman en broma 'BLT' (bidirectional load and transform). Advertencia: crea bucles de retroalimentación (p. ej. pujas de anuncios que se disparan por un error de modelo), así que hay que añadir monitoreo y guardrails.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-08",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es una 'capa de métricas' (metrics layer) o 'capa semántica' (semantic layer), y qué problema resuelve?",
    options: [
      "Una herramienta para mantener y computar la lógica de negocio de forma reutilizable ('write once, use anywhere'); resuelve la repetición e inconsistencia de las métricas en scripts ETL (p. ej. Looker/LookML, dbt)",
      "Una capa de caché en RAM para acelerar consultas",
      "Un índice físico dentro de una tabla columnar",
      "Un formato de archivo para almacenar imágenes",
    ],
    correct:
      "Una herramienta para mantener y computar la lógica de negocio de forma reutilizable ('write once, use anywhere'); resuelve la repetición e inconsistencia de las métricas en scripts ETL (p. ej. Looker/LookML, dbt)",
    explanation:
      "Una capa de métricas (semantic layer / headless BI son términos muy relacionados) es una herramienta para mantener y computar la lógica de negocio de forma reutilizable: 'escribir una vez, usar en cualquier lugar', un enfoque orientado a objetos para métricas y cálculos. Resuelve el problema clásico de repetición e inconsistencia en scripts ETL ('¿estos números son correctos?'). Ejemplos: Looker (LookML genera SQL con query pushdown a la BD) y dbt (define flujos SQL y definiciones estándar de métricas en la capa de transformación).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-09",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es 'query federation' (consulta federada) y cuándo es ideal usarla?",
    options: [
      "Consultar datos de múltiples fuentes (data lakes, RDBMS, warehouses, APIs) sin centralizarlos primero; ideal para análisis exploratorio ad hoc y cuando la fuente debe mantenerse controlada (da acceso solo-lectura). Ej.: Trino, Presto, Starburst",
      "Copiar todos los datos a un único OLAP antes de poder consultarlos",
      "Cifrar las consultas SQL para que no se puedan leer",
      "Ejecutar la misma consulta en paralelo sobre una sola tabla",
    ],
    correct:
      "Consultar datos de múltiples fuentes (data lakes, RDBMS, warehouses, APIs) sin centralizarlos primero; ideal para análisis exploratorio ad hoc y cuando la fuente debe mantenerse controlada (da acceso solo-lectura). Ej.: Trino, Presto, Starburst",
    explanation:
      "La query federation jala datos de múltiples fuentes (data lakes, RDBMS, data warehouses, APIs, filesystems) mediante motores de virtualización de consultas distribuidas, sin tener que centralizar los datos en un OLAP. Es ideal para análisis exploratorio ad hoc (mezclar fuentes sin montar pipelines) y cuando la fuente debe controlarse estrictamente, ya que da acceso solo-lectura (el usuario lee solo la versión que le corresponde). Cuidado: si toca sistemas de producción vivos, evita consumir recursos excesivos. Ejemplos: Trino, Presto (OSS), Starburst (gestionado).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-10",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué es un 'data product' (producto de datos) y qué marco ayuda a diseñarlo bien?",
    options: [
      "Un producto que facilita un objetivo final mediante el uso de datos; ayuda pensar en los 'jobs to be done' (qué 'trabajo' contrata el usuario al producto) y diseñar con bucles de retroalimentación positivos",
      "Cualquier tabla almacenada en el data warehouse, sin importar su uso",
      "Un informe en PDF que se envía una sola vez y no se vuelve a tocar",
      "El hardware físico donde corren los pipelines",
    ],
    correct:
      "Un producto que facilita un objetivo final mediante el uso de datos; ayuda pensar en los 'jobs to be done' (qué 'trabajo' contrata el usuario al producto) y diseñar con bucles de retroalimentación positivos",
    explanation:
      "Un data product (D. J. Patil) es 'un producto que facilita un objetivo final mediante el uso de datos'. Diseñarlo es un 'deporte de contacto' que mezcla producto, negocio y tecnología. Ayuda pensar en los 'jobs to be done': el usuario 'contrata' el producto para un 'trabajo', así que hay que entender su motivación (un error clásico es construir sin entender los requisitos). Un buen data product tiene bucles de retroalimentación positivos: más uso genera más datos útiles que lo mejoran.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  {
    id: "fde-c9-11",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué el 'self-service' de datos (que el usuario final cree sus propios reportes/análisis) suele ser difícil en la práctica?",
    options: [
      "Porque el éxito depende de tener la audiencia correcta: un ejecutivo suele querer un dashboard predefinido (ignora las herramientas self-serve), y un analista ya usa herramientas potentes como SQL; en ambos extremos la BI self-service es la herramienta equivocada",
      "Porque el self-service es técnicamente imposible de implementar",
      "Porque a los usuarios nunca les interesan los datos",
      "Porque siempre es más barato no dar ningún acceso a los datos",
    ],
    correct:
      "Porque el éxito depende de tener la audiencia correcta: un ejecutivo suele querer un dashboard predefinido (ignora las herramientas self-serve), y un analista ya usa herramientas potentes como SQL; en ambos extremos la BI self-service es la herramienta equivocada",
    explanation:
      "El self-service BI/data science es mayormente aspiracional: suele fallar porque depende de entender al usuario final. Un ejecutivo normalmente quiere un dashboard predefinido de métricas claras (ignorará las herramientas self-serve y, si surgen preguntas, recurrirá a analistas); un analista ya hace self-service con herramientas más potentes como SQL, así que una capa de BI self-service no le aporta. El self-service exitoso requiere la audiencia adecuada (p. ej. ejecutivos con base en datos dispuestos a 'cortar y rebanar' ellos mismos) y un buen balance entre flexibilidad y guardrails.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 9 — Serving Data for Analytics, ML, and Reverse ETL",
  },

  // ---- cap. 10 — Security and Privacy ----
  {
    id: "fde-c10-01",
    topic: "calidad",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Según Reis & Housley, ¿cuál es el eslabón más débil de la seguridad y qué actitud recomiendan al ingeniero de datos?",
    options: [
      "Las personas son el eslabón más débil; recomiendan 'el poder del pensamiento negativo' y ser siempre paranoico (la mejor forma de proteger datos sensibles es no ingerirlos si no hay una necesidad real downstream)",
      "El hardware es el eslabón más débil; recomiendan comprar servidores nuevos cada año",
      "El cifrado es el eslabón más débil; recomiendan no usarlo",
      "Las personas son el eslabón más fuerte, así que no hay que preocuparse por ellas",
    ],
    correct:
      "Las personas son el eslabón más débil; recomiendan 'el poder del pensamiento negativo' y ser siempre paranoico (la mejor forma de proteger datos sensibles es no ingerirlos si no hay una necesidad real downstream)",
    explanation:
      "La seguridad suele comprometerse a nivel humano: tú eres el eslabón más débil. Los autores recomiendan el 'poder del pensamiento negativo' (imaginar escenarios de ataque/fuga para prevenirlos) y ser siempre paranoico (verificar cualquier petición de credenciales). Clave: la mejor forma de proteger datos privados/sensibles es no ingerirlos en primer lugar si no hay una necesidad real downstream. La privacidad depende de la seguridad y está regulada (FERPA, HIPAA, GDPR), con sanciones severas.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  {
    id: "fde-c10-02",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué distingue el 'security theater' (teatro de seguridad) de un verdadero 'hábito de seguridad', y qué es la 'seguridad activa'?",
    options: [
      "Security theater = cumplir la letra del compliance (SOC-2, ISO 27001) sin compromiso real, creando ilusión de seguridad; hábito de seguridad = hornear una mentalidad de seguridad en la cultura. La seguridad activa investiga amenazas reales y vulnerabilidades propias, en vez de solo seguir checklists",
      "Security theater es la seguridad real y el hábito es la falsa",
      "La seguridad activa significa apagar todos los sistemas por la noche",
      "Son lo mismo; solo cambia el nombre",
    ],
    correct:
      "Security theater = cumplir la letra del compliance (SOC-2, ISO 27001) sin compromiso real, creando ilusión de seguridad; hábito de seguridad = hornear una mentalidad de seguridad en la cultura. La seguridad activa investiga amenazas reales y vulnerabilidades propias, en vez de solo seguir checklists",
    explanation:
      "El 'security theater' es hacer seguridad en la letra del compliance (políticas de cientos de páginas que nadie lee, revisión anual que se olvida, marcar la casilla de la auditoría SOC-2/ISO 27001) sin compromiso real: crea ilusión de seguridad con huecos enormes. En su lugar, busca el espíritu de una seguridad genuina y habitual, horneada en la cultura (p. ej. training mensual). La 'seguridad activa' va más allá de checklists y phishings simulados: investiga ataques reales y las vulnerabilidades específicas de tu organización.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  {
    id: "fde-c10-03",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "El principio de mínimo privilegio es central en seguridad y privacidad. ¿Qué es un proceso 'broken glass' (romper el cristal) asociado?",
    options: [
      "Mínimo privilegio: dar a persona/sistema solo los privilegios y datos que necesita, y solo mientras los necesita. 'Broken glass': dato que se retiene pero solo se accede tras un proceso de aprobación de emergencia, revocando el acceso al terminar",
      "Broken glass significa borrar todos los datos cuando hay una brecha",
      "Mínimo privilegio significa dar acceso de administrador a todos por defecto",
      "Broken glass es un tipo de cifrado en reposo",
    ],
    correct:
      "Mínimo privilegio: dar a persona/sistema solo los privilegios y datos que necesita, y solo mientras los necesita. 'Broken glass': dato que se retiene pero solo se accede tras un proceso de aprobación de emergencia, revocando el acceso al terminar",
    explanation:
      "El principio de mínimo privilegio da a personas y sistemas (¡trátalos igual!) solo los privilegios y datos necesarios para la tarea, y solo durante el tiempo que se necesitan; el antipatrón es dar acceso administrativo total ('carte blanche'). Para datos que deben retenerse pero accederse solo en emergencias, se usa un proceso 'broken glass': el usuario accede únicamente tras un proceso de aprobación de emergencia, y el acceso se revoca de inmediato al terminar. Complementa con controles a nivel de columna/fila/celda y enmascarado de PII.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  {
    id: "fde-c10-04",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: los datos deben cifrarse tanto 'at rest' (en reposo, en el dispositivo de almacenamiento) como en tránsito por la red — lo que en inglés se llama cifrado 'over the ________' (p. ej. vía HTTPS).",
    accept: ["wire", "red", "transito", "tránsito", "over the wire"],
    answerDisplay: "Over the wire (en tránsito)",
    explanation:
      "El cifrado es un requisito base (aunque no una bala de plata: no protege ante una brecha humana que entregue credenciales). Cifrado at rest: en el dispositivo de almacenamiento (full-disk en laptops, server-side en servidores/BD/object storage, también los backups). Cifrado 'over the wire' (en tránsito): hoy es el default (HTTPS en APIs cloud); ojo con el manejo de claves y con buckets dejados públicos. Evita protocolos viejos como FTP (inseguro, vulnerable a man-in-the-middle).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  {
    id: "fde-c10-05",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "multi",
    prompt: "Como parte de logging, monitoreo y alertas de seguridad, ¿qué áreas recomiendan vigilar Reis & Housley?",
    options: [
      "Acceso (quién accede a qué, cuándo y desde dónde; patrones extraños)",
      "Recursos (disco, CPU, memoria, I/O fuera de lo normal)",
      "Facturación (picos de gasto que delaten uso malicioso)",
      "Permisos en exceso (privilegios no usados por un usuario/cuenta de servicio)",
      "El color preferido de cada empleado",
    ],
    correctSet: [
      "Acceso (quién accede a qué, cuándo y desde dónde; patrones extraños)",
      "Recursos (disco, CPU, memoria, I/O fuera de lo normal)",
      "Facturación (picos de gasto que delaten uso malicioso)",
      "Permisos en exceso (privilegios no usados por un usuario/cuenta de servicio)",
    ],
    explanation:
      "Los atacantes no anuncian su entrada; parte de DataOps es observar, detectar y alertar. Áreas a monitorear: acceso (quién/qué/cuándo/desde dónde, usuarios nuevos o patrones raros), recursos (disco/CPU/memoria/I/O anómalos), facturación (picos de gasto que delaten uso malicioso, sobre todo en SaaS/cloud) y permisos en exceso (privilegios no usados, que conviene alertar o revocar automáticamente). Combínalos en un dashboard y un plan de respuesta a incidentes.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  {
    id: "fde-c10-06",
    topic: "calidad",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Cuál es una buena práctica de seguridad de acceso de red para un ingeniero de datos?",
    options: [
      "Permitir solo las IPs de los sistemas/usuarios que deben acceder (whitelisting) y evitar abrir conexiones ampliamente (p. ej. SSH o bases con acceso 0.0.0.0/0 a todo internet)",
      "Abrir los puertos a todo internet (0.0.0.0/0) para facilitar el acceso",
      "Dejar los buckets S3 públicos por comodidad",
      "Usar siempre FTP sin cifrar desde redes públicas",
    ],
    correct:
      "Permitir solo las IPs de los sistemas/usuarios que deben acceder (whitelisting) y evitar abrir conexiones ampliamente (p. ej. SSH o bases con acceso 0.0.0.0/0 a todo internet)",
    explanation:
      "Malas prácticas frecuentes: buckets S3 públicos con datos sensibles, instancias EC2 con SSH abierto a 0.0.0.0/0 (todas las IPs), o bases abiertas a todo internet. Buenas prácticas: entender qué IPs y puertos están abiertos, a quién y por qué; permitir solo las IPs de los sistemas/usuarios que deben acceder (whitelisting); evitar abrir conexiones ampliamente; y usar siempre conexiones cifradas (no una web sin cifrar desde una cafetería). La nube tiende a zero-trust (cada acción requiere autenticación).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  {
    id: "fde-c10-07",
    topic: "calidad",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Cómo se deben manejar las credenciales y secretos según el ejemplo de política de seguridad del libro?",
    options: [
      "Usar SSO con MFA por defecto, nunca compartir contraseñas, nunca poner credenciales en el código (tratarlas como configuración y usar un gestor de secretos), y deshabilitar/borrar credenciales viejas",
      "Embeber las credenciales directamente en el código y commitearlas al control de versiones",
      "Compartir las contraseñas por email para mayor comodidad del equipo",
      "Usar una sola contraseña simple para todos los sistemas",
    ],
    correct:
      "Usar SSO con MFA por defecto, nunca compartir contraseñas, nunca poner credenciales en el código (tratarlas como configuración y usar un gestor de secretos), y deshabilitar/borrar credenciales viejas",
    explanation:
      "Reglas básicas de credenciales: usar single sign-on (SSO) por defecto con autenticación multifactor (MFA); no compartir contraseñas/credenciales; cuidado con phishing; deshabilitar o (mejor) borrar credenciales viejas; nunca poner credenciales en el código (manejarlas como configuración, jamás commitearlas al control de versiones, usar un gestor de secretos); y aplicar siempre el mínimo privilegio. El mal manejo de claves es una fuente importante de fugas de datos.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  {
    id: "fde-c10-08",
    topic: "calidad",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "En la era del ransomware, ¿qué práctica de prevención de desastres enfatiza el libro?",
    options: [
      "Respaldar (backup) los datos regularmente —para recuperación ante desastres y continuidad— y probar la restauración de esos backups de forma periódica",
      "Nunca hacer backups, porque ocupan espacio",
      "Confiar en que el proveedor cloud nunca pierde datos, así que no hace falta respaldar",
      "Pagar siempre al atacante, ya que el seguro lo cubre por completo",
    ],
    correct:
      "Respaldar (backup) los datos regularmente —para recuperación ante desastres y continuidad— y probar la restauración de esos backups de forma periódica",
    explanation:
      "Los datos desaparecen: discos muertos, borrados accidentales de una base o bucket, o un atacante que los secuestra (ransomware, cada vez más común; algunos seguros reducen los pagos). Hay que respaldar los datos regularmente, tanto para recuperación ante desastres como para continuidad del negocio si una versión queda comprometida, y —crucialmente— probar la restauración de los backups periódicamente. El backup cae bajo 'prevención de desastres', adyacente a seguridad.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 10 — Security and Privacy",
  },

  // ---- cap. 11 — The Future of Data Engineering ----
  {
    id: "fde-c11-01",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Algunos temen que las herramientas cada vez más simples hagan desaparecer al ingeniero de datos. ¿Cuál es la postura de Reis & Housley?",
    options: [
      "El ciclo de vida (y el rol) no desaparecerá: si las herramientas se simplifican, el ingeniero sube en la cadena de valor hacia trabajo de más alto nivel (como pasó con los desarrolladores móviles, que no desaparecieron al mejorar los SO)",
      "El rol desaparecerá por completo en pocos años",
      "Las herramientas nunca se simplificarán, así que el rol seguirá igual",
      "El ingeniero de datos será reemplazado por el científico de datos",
    ],
    correct:
      "El ciclo de vida (y el rol) no desaparecerá: si las herramientas se simplifican, el ingeniero sube en la cadena de valor hacia trabajo de más alto nivel (como pasó con los desarrolladores móviles, que no desaparecieron al mejorar los SO)",
    explanation:
      "Los autores consideran 'superficial y miope' pensar que las herramientas simples eliminarán al ingeniero de datos. A medida que las organizaciones aprovechan los datos de nuevas formas, harán falta nuevos sistemas y workflows; el ingeniero está en el centro de diseñarlos y mantenerlos. Si el tooling se simplifica, el ingeniero sube en la cadena de valor hacia trabajo de más alto nivel (analogía: los SO móviles más sofisticados no eliminaron a los desarrolladores de apps, los liberaron para hacer apps mejores).",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 11 — The Future of Data Engineering",
  },

  {
    id: "fde-c11-02",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué tendencia, con herramientas como Fivetran y Airbyte, cambia el trabajo del ingeniero de datos según el libro?",
    options: [
      "Los conectores de datos gestionados/off-the-shelf: externalizan el 'plumbing' de conectarse a fuentes externas, liberando tiempo del ingeniero para los problemas únicos del negocio",
      "Obligan a construir todos los conectores a mano desde cero",
      "Eliminan la necesidad de cualquier almacenamiento",
      "Hacen que el SQL deje de usarse",
    ],
    correct:
      "Los conectores de datos gestionados/off-the-shelf: externalizan el 'plumbing' de conectarse a fuentes externas, liberando tiempo del ingeniero para los problemas únicos del negocio",
    explanation:
      "Tradicionalmente, los ingenieros gastaban mucho tiempo construyendo y manteniendo la 'fontanería' para conectarse a fuentes externas. La nueva generación de conectores gestionados off-the-shelf (Fivetran, Airbyte) es muy atractiva incluso para ingenieros muy técnicos: convierte los conectores de API en un problema externalizado, recapturando tiempo y ancho de banda mental para enfocarse en los problemas únicos que mueven el negocio. Es parte de la tendencia general hacia la simplificación.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 11 — The Future of Data Engineering",
  },

  {
    id: "fde-c11-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En su visión de un 'sistema operativo de datos a escala cloud' e interoperabilidad, ¿qué predicen Reis & Housley?",
    options: [
      "Que la ingeniería de datos coalescerá en torno a estándares de interoperabilidad: el object storage como capa de intercambio batch y formatos como Parquet/Avro reemplazando a CSV (mala interoperabilidad) y JSON crudo (bajo rendimiento)",
      "Que CSV y JSON crudo serán los formatos dominantes del futuro",
      "Que cada empresa usará un formato propietario incompatible",
      "Que el object storage desaparecerá",
    ],
    correct:
      "Que la ingeniería de datos coalescerá en torno a estándares de interoperabilidad: el object storage como capa de intercambio batch y formatos como Parquet/Avro reemplazando a CSV (mala interoperabilidad) y JSON crudo (bajo rendimiento)",
    explanation:
      "Los servicios cloud simplificados (BigQuery, Blob Storage, Snowflake, Lambda) se parecen a servicios de un sistema operativo, pero a escala de muchas máquinas. La siguiente frontera es un 'data OS' a mayor nivel de abstracción: la DE coalescerá en torno a un puñado de estándares de interoperabilidad. El object storage crecerá como capa de intercambio batch entre servicios, y formatos de nueva generación como Parquet y Avro ya están desplazando al CSV (interoperabilidad pésima) y al JSON crudo (rendimiento pobre). Un catálogo de metadatos será otro ingrediente clave.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 11 — The Future of Data Engineering",
  },

  {
    id: "fde-c11-04",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "El libro propone el 'live data stack' como sucesor del 'modern data stack' (MDS). ¿Qué lo caracteriza?",
    options: [
      "Fusiona analítica y ML en tiempo real dentro de las aplicaciones usando streaming; trata el dato como un flujo no acotado (frente al MDS, basado en batch y el data warehouse), apoyado en pipelines de streaming y bases analíticas en tiempo real",
      "Es idéntico al MDS pero con otro nombre comercial",
      "Procesa todo en batch nocturno, sin streaming",
      "Elimina por completo el machine learning",
    ],
    correct:
      "Fusiona analítica y ML en tiempo real dentro de las aplicaciones usando streaming; trata el dato como un flujo no acotado (frente al MDS, basado en batch y el data warehouse), apoyado en pipelines de streaming y bases analíticas en tiempo real",
    explanation:
      "El MDS, aunque democratizó grandes herramientas, es básicamente un reempaquetado de prácticas de data warehouse con tecnología cloud/SaaS, limitado a técnicas batch que tratan el dato como acotado. El 'live data stack' fusiona analítica y ML en tiempo real dentro de las aplicaciones mediante streaming, tratando el dato como un flujo continuo no acotado. Sus dos tecnologías núcleo: pipelines de streaming y bases de datos analíticas en tiempo real (Druid, ClickHouse, Rockset, Firebolt) con ingesta rápida y queries en menos de un segundo.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 11 — The Future of Data Engineering",
  },

  {
    id: "fde-c11-05",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "fill",
    prompt: "Completa: en un contexto de streaming, el libro prevé un giro 'de vuelta al futuro' de ELT hacia algo parecido a ETL, que llaman provisionalmente 'stream, transform, and ________' (STL).",
    accept: ["load", "cargar", "carga"],
    answerDisplay: "Load (STL: stream, transform, load)",
    explanation:
      "Con el auge de los streams, los autores esperan un 'momento de vuelta al futuro' en las transformaciones: alejarse del ELT (transformar dentro de la base) hacia algo más parecido a ETL, que llaman provisionalmente STL (stream, transform, load). En streaming, la extracción es un proceso continuo y permanente. El batch no desaparecerá (sigue útil para entrenar modelos, reportes trimestrales), pero la transformación en streaming se volverá la norma.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 11 — The Future of Data Engineering",
  },

  {
    id: "fde-c11-06",
    topic: "fundamentos",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "Reis & Housley llaman 'materia oscura' (dark matter) del mundo de los datos a la plataforma de datos más usada. ¿Cuál es?",
    options: [
      "La hoja de cálculo (spreadsheet): usada por cientos de millones de personas, es una aplicación de datos interactiva accesible a todo tipo de usuarios, y mucha analítica vive ahí sin llegar a los sistemas sofisticados",
      "El data warehouse en la nube",
      "El data lake sobre HDFS",
      "La base de datos de grafos",
    ],
    correct:
      "La hoja de cálculo (spreadsheet): usada por cientos de millones de personas, es una aplicación de datos interactiva accesible a todo tipo de usuarios, y mucha analítica vive ahí sin llegar a los sistemas sofisticados",
    explanation:
      "La plataforma de datos más usada es la humilde hoja de cálculo (entre 700 millones y 2.000 millones de usuarios): la 'materia oscura' del mundo de los datos. Mucha analítica (reporting financiero, supply-chain, hasta CRM) vive en spreadsheets y nunca llega a los sistemas sofisticados. En el fondo, una hoja de cálculo es una aplicación de datos interactiva que soporta analítica compleja y es accesible a todo el espectro de usuarios; los autores predicen una nueva clase de herramientas que combinen su interactividad con el poder de los OLAP en la nube.",
    reference: "Fundamentals of Data Engineering (Reis & Housley, O'Reilly), cap. 11 — The Future of Data Engineering",
  },
]);
