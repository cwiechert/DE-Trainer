// DE-Trainer — preguntas originales basadas en "Fundamentals of Data Engineering"
// (Joe Reis & Matt Housley, O'Reilly, 2022). Track: general.
// Cada pregunta evalúa conceptos; NO reproduce texto literal del libro y cita el capítulo.
//
// Cobertura por capítulo:
//   cap. 1 — Data Engineering Described       -> fde-c1-XX
//   cap. 2 — The Data Engineering Lifecycle   -> fde-c2-XX
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
]);
