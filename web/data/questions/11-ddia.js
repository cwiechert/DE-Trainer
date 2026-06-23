// DE-Trainer — preguntas originales basadas en "Designing Data-Intensive Applications"
// (Martin Kleppmann, O'Reilly, 2017). Track: general.
// Cada pregunta evalúa conceptos; NO reproduce texto literal del libro y cita el capítulo.
// IMPORTANTE: todas las preguntas de este archivo van en UN único window.QUESTIONS.concat([...])
// (el validador solo parsea el primer array por archivo).
//
// Cobertura por capítulo:
//   cap. 1 — Reliable, Scalable, and Maintainable Applications -> ddia-c1-XX
//   cap. 2 — Data Models and Query Languages   -> ddia-c2-XX
//   cap. 3 — Storage and Retrieval             -> ddia-c3-XX
//   cap. 4 — Encoding and Evolution            -> ddia-c4-XX
//   cap. 5 — Replication                       -> ddia-c5-XX
//   cap. 6 — Partitioning                      -> ddia-c6-XX
//   cap. 7 — Transactions                      -> ddia-c7-XX
//   cap. 8 — The Trouble with Distributed Systems -> ddia-c8-XX
//   cap. 9 — Consistency and Consensus         -> ddia-c9-XX
//   cap. 10 — Batch Processing                 -> ddia-c10-XX
//   cap. 11 — Stream Processing                -> ddia-c11-XX
//   cap. 12 — The Future of Data Systems       -> ddia-c12-XX
window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "ddia-c1-01",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Kleppmann, ¿cuál es la diferencia entre un 'fault' (fallo de componente) y una 'failure' (falla del sistema)?",
    options: [
      "Un fault es un componente que se desvía de su especificación; una failure es cuando el sistema entero deja de dar servicio",
      "Un fault y una failure son exactamente lo mismo: son dos términos para un mismo evento de avería",
      "Un fault es la caída total del sistema y una failure es solo un error menor de un componente aislado, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
      "Un fault solo ocurre en el hardware y una failure solo ocurre en el software de la aplicación",
    ],
    correct:
      "Un fault es un componente que se desvía de su especificación; una failure es cuando el sistema entero deja de dar servicio",
    explanation:
      "Un fault es cuando un componente se desvía de su especificación; una failure es cuando el sistema completo deja de proveer el servicio requerido al usuario. Como es imposible reducir la probabilidad de fault a cero, conviene diseñar mecanismos de tolerancia a fallos que eviten que los faults se conviertan en failures. La fiabilidad consiste en 'seguir funcionando correctamente aun cuando las cosas van mal', construyendo sistemas fiables a partir de partes no fiables.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-02",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué en sistemas tolerantes a fallos puede tener sentido provocar fallos deliberadamente (p. ej. el Chaos Monkey de Netflix)?",
    options: [
      "Para ejercitar y probar la maquinaria de tolerancia a fallos, ganando confianza en que se manejarán bien cuando ocurran de verdad",
      "Para reducir el costo del hardware eliminando algunos servidores del clúster elegidos al azar",
      "Porque provocar fallos a propósito hace que el sistema responda más rápido a sus usuarios finales, y conviene tenerlo en cuenta al diseñar y operar la plataforma de datos",
      "Para entrenar a los atacantes externos en cómo penetrar las defensas del sistema distribuido",
    ],
    correct:
      "Para ejercitar y probar la maquinaria de tolerancia a fallos, ganando confianza en que se manejarán bien cuando ocurran de verdad",
    explanation:
      "Contraintuitivamente, en sistemas tolerantes a fallos puede convenir aumentar la tasa de fallos provocándolos a propósito (p. ej. matando procesos al azar, como el Chaos Monkey de Netflix). Muchos bugs críticos se deben a un mal manejo de errores; al inducir fallos deliberadamente, se ejercita y prueba constantemente la maquinaria de tolerancia, aumentando la confianza en que los fallos reales se manejarán correctamente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-03",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann distingue fallos de hardware, de software y humanos. ¿Qué afirmación es correcta?",
    options: [
      "Hardware: aleatorios e independientes; software: sistemáticos y correlacionados; los errores humanos son una causa principal de caídas",
      "Los fallos de hardware son sistemáticos y correlacionados, y los de software, aleatorios e independientes, de acuerdo con las best practices habituales en plataformas de datos",
      "Los errores humanos son insignificantes frente a los fallos de hardware y de software del sistema",
      "Todos los tipos de fallo son siempre del todo independientes entre sí y nunca están correlacionados",
    ],
    correct:
      "Hardware: aleatorios e independientes; software: sistemáticos y correlacionados; los errores humanos son una causa principal de caídas",
    explanation:
      "Los fallos de hardware (discos, RAM, energía) suelen ser aleatorios e independientes; con muchas máquinas se vuelven frecuentes (de ahí la redundancia y la tolerancia por software). Los fallos de software son sistemáticos y correlacionados entre nodos (un bug ante cierta entrada puede tumbar todas las instancias), causando más failures. Los errores humanos —p. ej. de configuración de los operadores— resultaron ser la principal causa de caídas en un estudio (el hardware solo el 10-25%). Se mitigan con buenas abstracciones, sandboxes, testing, recuperación rápida (rollback) y monitoreo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-04",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Al describir el rendimiento, ¿qué distingue 'throughput', 'response time' (tiempo de respuesta) y 'latency' (latencia)?",
    options: [
      "Throughput = registros/seg o tiempo total (batch); response time = lo que ve el cliente; latency = el tiempo que la petición espera latente",
      "El throughput y el response time son lo mismo, mientras que la latency es el costo del sistema en dólares, según la escala del sistema y los requisitos concretos del negocio",
      "La latency es lo que ve el cliente y el response time es solo el tiempo de cómputo puro del servidor",
      "El throughput mide en realidad el número de errores que produce el sistema por cada segundo de uso",
    ],
    correct:
      "Throughput = registros/seg o tiempo total (batch); response time = lo que ve el cliente; latency = el tiempo que la petición espera latente",
    explanation:
      "En sistemas batch (p. ej. Hadoop) importa el throughput: registros procesados por segundo o el tiempo total del job. En sistemas online importa el tiempo de respuesta. Cuidado: response time y latency no son lo mismo: el response time es lo que ve el cliente (el service time de procesar más retrasos de red y de cola); la latency es la duración durante la cual la petición está latente, esperando ser atendida.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-05",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué Kleppmann recomienda usar percentiles (mediana/p50, p95, p99) en vez del promedio (media) para describir tiempos de respuesta?",
    options: [
      "La media no dice cuántos usuarios sufrieron el retraso; la mediana (p50) da el típico y los percentiles altos (p95/p99) los outliers",
      "Porque la media aritmética es algo matemáticamente imposible de calcular sobre los tiempos de respuesta",
      "Porque los percentiles siempre dan valores más pequeños que la media en cualquier tipo de distribución",
      "Porque la mediana ignora por completo los valores lentos y por eso describe mejor el caso típico de uso, lo que afecta al rendimiento y al coste del procesamiento",
    ],
    correct:
      "La media no dice cuántos usuarios sufrieron el retraso; la mediana (p50) da el típico y los percentiles altos (p95/p99) los outliers",
    explanation:
      "La media (promedio aritmético) no es buena para conocer el tiempo de respuesta 'típico' porque no dice cuántos usuarios sufrieron el retraso. Mejor usar percentiles: la mediana (p50) indica que la mitad de las peticiones se sirven más rápido que ese valor; los percentiles altos (p95, p99, p999) revelan cuán malos son los outliers. Ojo: promediar percentiles entre máquinas es matemáticamente incorrecto; lo correcto es sumar los histogramas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-06",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "fill",
    prompt: "Completa: los percentiles altos del tiempo de respuesta (p95, p99, p999), importantes porque afectan a los usuarios más lentos (a menudo los más valiosos, con más datos), se conocen como latencias de ________ (en inglés, 'tail').",
    accept: ["cola", "tail", "tail latency", "latencias de cola"],
    answerDisplay: "Cola (tail latencies)",
    explanation:
      "Los percentiles altos del tiempo de respuesta se llaman 'tail latencies' (latencias de cola) y son importantes porque afectan directamente la experiencia de los usuarios más lentos —que suelen ser los más valiosos (más datos por más compras)—; por eso Amazon especifica requisitos en el percentil 99.9 aunque solo afecte a 1 de cada 1000 peticiones. Fenómenos relacionados: el 'head-of-line blocking' (unas pocas peticiones lentas retrasan a las siguientes) y la 'tail latency amplification' (si una petición de usuario hace muchas llamadas backend, basta una lenta para volver lenta toda la petición).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-07",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "En el ejemplo de Twitter (Kleppmann), ¿por qué se prefirió pre-computar cada home timeline al publicar el tweet en vez de hacer un join al leer?",
    options: [
      "Porque las lecturas (300k/s) superan a las publicaciones (4.6k/s): conviene más trabajo al escribir; el fan-out es el load parameter clave",
      "Porque escribir siempre es más barato que leer, sin importar cuáles sean las tasas de cada operación",
      "Porque los joins están prohibidos en las bases de datos relacionales tradicionales que utiliza Twitter, según la escala del sistema y los requisitos concretos del negocio",
      "Porque pre-computar cada timeline elimina por completo la necesidad de almacenar los datos en disco",
    ],
    correct:
      "Porque las lecturas (300k/s) superan a las publicaciones (4.6k/s): conviene más trabajo al escribir; el fan-out es el load parameter clave",
    explanation:
      "El reto de escala de Twitter no es el volumen de tweets, sino el 'fan-out': cada usuario sigue a muchos y es seguido por muchos. Como las lecturas de timeline (300k/s) superan por dos órdenes de magnitud a las publicaciones (4.6k/s), conviene pre-computar cada timeline al escribir (insertar el tweet en el buzón de cada seguidor) y abaratar la lectura. El 'load parameter' clave es la distribución de seguidores por usuario; las celebridades (30M+ seguidores) obligan a un enfoque híbrido. Los load parameters describen la carga para razonar sobre escalabilidad.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-08",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "multi",
    prompt: "La mayor parte del costo del software está en su mantenimiento. ¿Cuáles son los tres principios de diseño para la mantenibilidad según Kleppmann?",
    options: [
      "Operabilidad (operability): facilitar a operaciones mantener el sistema funcionando",
      "Simplicidad (simplicity): facilitar que nuevos ingenieros entiendan el sistema, quitando complejidad",
      "Evolucionabilidad (evolvability): facilitar cambiar el sistema y adaptarlo a nuevos casos de uso",
      "Velocidad (speed): que el sistema sea siempre el más rápido posible",
      "Monolitismo: mantener todo en un solo bloque acoplado",
    ],
    correctSet: [
      "Operabilidad (operability): facilitar a operaciones mantener el sistema funcionando",
      "Simplicidad (simplicity): facilitar que nuevos ingenieros entiendan el sistema, quitando complejidad",
      "Evolucionabilidad (evolvability): facilitar cambiar el sistema y adaptarlo a nuevos casos de uso",
    ],
    explanation:
      "Como la mayoría del costo del software está en el mantenimiento (arreglar bugs, operar, adaptar a nuevos casos), Kleppmann define tres principios de mantenibilidad: operabilidad (que operaciones pueda mantenerlo funcionando con fluidez), simplicidad (quitar complejidad para que nuevos ingenieros lo entiendan; se logra con buenas abstracciones) y evolucionabilidad (facilitar cambios y adaptación a nuevos requisitos). La 'velocidad' no es uno de ellos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  // ---- cap. 2 — Data Models and Query Languages ----
  {
    id: "ddia-c2-01",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: el desajuste entre el modelo de objetos del código (orientado a objetos) y el modelo de tablas/filas/columnas de una BD relacional —que los frameworks ORM como Hibernate intentan reducir— se llama '________ mismatch' (desajuste de impedancia).",
    accept: ["impedance", "impedancia", "impedance mismatch"],
    answerDisplay: "Impedance (mismatch de impedancia)",
    explanation:
      "Como la mayoría del desarrollo es orientado a objetos pero los datos se guardan en tablas relacionales, hace falta una capa de traducción incómoda entre ambos modelos: ese desajuste se llama 'impedance mismatch'. Los ORM (ActiveRecord, Hibernate) reducen el código repetitivo de esa traducción, pero no ocultan del todo la diferencia. Para estructuras autocontenidas (como un currículum), una representación JSON/documento reduce este desajuste.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-02",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Kleppmann, ¿para qué tipo de relaciones conviene el modelo documental frente al relacional?",
    options: [
      "Documental: bueno para uno-a-muchos y árboles (mejor locality, una sola consulta); relacional: mejor para muchos-a-uno y muchos-a-muchos",
      "El modelo documental es ideal para muchos-a-muchos y el relacional solo sirve para relaciones uno-a-uno, de acuerdo con las best practices habituales en plataformas de datos",
      "Ambos modelos son del todo idénticos y se comportan igual para cualquier tipo de relación entre datos",
      "El documental es óptimo para los joins complejos y el relacional es incapaz de realizar ningún join",
    ],
    correct:
      "Documental: bueno para uno-a-muchos y árboles (mejor locality, una sola consulta); relacional: mejor para muchos-a-uno y muchos-a-muchos",
    explanation:
      "El modelo documental representa bien relaciones uno-a-muchos (estructuras de árbol, como las posiciones/educación de un perfil), guardando todo en un documento: mejor locality y una sola consulta. Pero el soporte de joins suele ser débil, así que las relaciones muchos-a-uno y muchos-a-muchos encajan mejor en el modelo relacional (referencia por ID + join). Como los datos tienden a interconectarse al añadir features, lo documental se vuelve menos atractivo; para datos muy interconectados, los grafos son lo más natural.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-03",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué Kleppmann recomienda guardar un ID (en vez del texto, p. ej. 'Filantropía') para datos como la región o la industria de un perfil?",
    options: [
      "El ID no significa nada para humanos y nunca cambia; el texto vive en un solo lugar (evita duplicación e inconsistencias): es la normalización",
      "Porque los IDs ocupan bastante más espacio en disco que el texto y eso mejora el rendimiento de lectura",
      "Porque el texto significativo no se puede llegar a almacenar dentro de una base de datos relacional",
      "Porque los identificadores numéricos son siempre mucho más legibles para los usuarios finales que el texto, a lo largo de todo el ciclo de vida de la ingeniería de datos",
    ],
    correct:
      "El ID no significa nada para humanos y nunca cambia; el texto vive en un solo lugar (evita duplicación e inconsistencias): es la normalización",
    explanation:
      "Guardar un ID en vez del texto es una cuestión de duplicación: con un ID, la información significativa para humanos (p. ej. 'Filantropía') vive en un solo lugar y todo lo demás la referencia. Como el ID no significa nada para humanos, nunca necesita cambiar; en cambio, lo significativo puede cambiar, y si está duplicado hay que actualizar todas las copias (con overhead de escritura y riesgo de inconsistencias). Eliminar esa duplicación es la idea clave de la normalización, que requiere relaciones muchos-a-uno (que encajan peor en el modelo documental).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-04",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es la ventaja y la principal limitación del 'data locality' (localidad) del modelo documental?",
    options: [
      "Ventaja: el documento es una cadena continua (una sola lectura si usas gran parte); límite: carga el documento entero aunque accedas a poco",
      "Ventaja: permite consultar los campos anidados directamente sin cargar nada; y además no tiene ninguna limitación",
      "Ventaja: los documentos de mayor tamaño siempre resultan más rápidos de leer; y como límite, no admite el formato JSON",
      "La propiedad de localidad solo existe en las bases de datos relacionales, nunca en las documentales puras",
    ],
    correct:
      "Ventaja: el documento es una cadena continua (una sola lectura si usas gran parte); límite: carga el documento entero aunque accedas a poco",
    explanation:
      "Un documento se almacena como una sola cadena continua (JSON/XML/BSON). Si la app suele necesitar gran parte del documento (p. ej. renderizar un perfil), hay una ventaja de rendimiento por esa locality (evita múltiples lookups de índice y seeks). Pero la ventaja solo aplica si necesitas grandes partes a la vez: la BD suele cargar el documento entero aunque accedas a una porción pequeña, y al actualizar normalmente se reescribe todo. Por eso se recomienda mantener los documentos pequeños. (Spanner, Oracle y las column-families de Bigtable logran locality también en modelo relacional.)",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-05",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué tendencia observa Kleppmann entre las bases de datos relacionales y las documentales?",
    options: [
      "Convergencia: las relacionales soportan JSON/XML y algunas documentales añaden joins (RethinkDB); un híbrido es buen camino a futuro",
      "Divergencia total: cada vez se parecen menos entre sí y se han vuelto del todo incompatibles la una con la otra",
      "Las bases de datos documentales están desapareciendo por completo del mercado en favor de las relacionales",
      "Las bases de datos relacionales eliminaron por completo cualquier tipo de soporte para el formato JSON",
    ],
    correct:
      "Convergencia: las relacionales soportan JSON/XML y algunas documentales añaden joins (RethinkDB); un híbrido es buen camino a futuro",
    explanation:
      "Los modelos se están pareciendo cada vez más, y eso es bueno porque se complementan. La mayoría de las relacionales (PostgreSQL, MySQL, DB2) soportan XML y JSON con capacidad de indexar y consultar dentro de los documentos; del lado documental, RethinkDB soporta joins y algunos drivers de MongoDB resuelven referencias (join del lado cliente). Un híbrido relacional-documental, que maneje datos tipo documento y también consultas relacionales, es un buen camino a futuro.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-06",
    topic: "sql",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué diferencia un lenguaje de consulta declarativo (como SQL) de uno imperativo (como el de CODASYL/IMS)?",
    options: [
      "Imperativo: le dices a la máquina qué operaciones hacer y en qué orden; declarativo: solo el patrón que quieres y el optimizador decide",
      "El declarativo especifica el algoritmo exacto paso a paso y el imperativo solo el patrón del resultado final, a lo largo de todo el ciclo de vida de la ingeniería de datos",
      "Son exactamente lo mismo: 'declarativo' es simplemente el término en español de la palabra 'imperativo'",
      "Imperativo significa que no usa nada de código y declarativo significa que usa bucles para recorrer datos",
    ],
    correct:
      "Imperativo: le dices a la máquina qué operaciones hacer y en qué orden; declarativo: solo el patrón que quieres y el optimizador decide",
    explanation:
      "Un lenguaje imperativo (como las APIs de los antiguos modelos jerárquico/red de CODASYL) le dice a la máquina qué operaciones ejecutar y en qué orden, siguiendo 'access paths' que el programador debía gestionar a mano. SQL es declarativo: solo especificas el patrón de los datos que quieres (condiciones, orden, agrupación, agregación), y el optimizador de consultas decide qué índices y métodos de join usar y en qué orden. El gran aporte del modelo relacional fue automatizar la elección del 'access path' mediante el optimizador.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-07",
    topic: "sql",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué los lenguajes de consulta declarativos (como SQL) resultaron superiores a las APIs imperativas?",
    options: [
      "Ocultan los detalles del motor (optimizar sin cambiar consultas) y se paralelizan mejor al no fijar un orden; además son más concisos",
      "Porque obligan a la base de datos a ejecutar siempre todo en un orden fijo definido a mano por el usuario, sobre todo al trabajar con grandes volúmenes de datos",
      "Porque impiden por completo cualquier tipo de optimización automática por parte del motor de la base",
      "Porque resultan imposibles de paralelizar entre los varios cores de los procesadores modernos actuales",
    ],
    correct:
      "Ocultan los detalles del motor (optimizar sin cambiar consultas) y se paralelizan mejor al no fijar un orden; además son más concisos",
    explanation:
      "Un lenguaje declarativo es más conciso, pero sobre todo oculta los detalles de implementación del motor: la BD puede introducir mejoras de rendimiento (reorganizar datos, nuevos índices) sin que haya que cambiar las consultas. Además, como solo especifica el patrón del resultado y no el algoritmo ni el orden, se presta mucho mejor a la ejecución en paralelo (hoy las CPUs crecen en cores, no en frecuencia). El código imperativo es difícil de paralelizar porque fija un orden de instrucciones. (Analogía: CSS declarativo vs. manipular estilos imperativamente con JavaScript.)",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-08",
    topic: "sql",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "En modelos de grafos, ¿qué distingue al 'property graph' del 'triple-store' y qué lenguajes de consulta usan?",
    options: [
      "Grafo: vértices y aristas; property graph (Neo4j) con Cypher; triple-store (RDF) con tripletes y SPARQL; ideal para datos muy interconectados",
      "Ambos modelos de grafo son del todo idénticos entre sí y los dos se consultan usando el lenguaje SQL estándar, lo que afecta al rendimiento y al coste del procesamiento",
      "El property graph se consulta con SPARQL y el triple-store con Cypher, sin ninguna diferencia de estructura",
      "Las bases de grafos solo sirven para datos homogéneos y para relaciones de tipo estrictamente uno-a-uno",
    ],
    correct:
      "Grafo: vértices y aristas; property graph (Neo4j) con Cypher; triple-store (RDF) con tripletes y SPARQL; ideal para datos muy interconectados",
    explanation:
      "Un grafo se compone de vértices (nodos/entidades) y aristas (edges/relaciones). Kleppmann describe dos modelos: el property graph (Neo4j, Titan), donde vértices y aristas tienen un id y propiedades clave-valor, consultado con el lenguaje declarativo Cypher; y el triple-store (Datomic, AllegroGraph), que almacena todo como tripletes (sujeto, predicado, objeto) —base de RDF— y se consulta con SPARQL (existe también Datalog, y lenguajes imperativos como Gremlin). Los grafos brillan con datos muy interconectados (muchos-a-muchos) y heterogéneos (distintos tipos de vértices en un mismo store, p. ej. el grafo social de Facebook).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-09",
    topic: "sql",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cómo se ubica el modelo de consulta MapReduce respecto a lo declarativo y lo imperativo?",
    options: [
      "En medio: la lógica se expresa con funciones map y reduce que el framework llama; deben ser puras para re-ejecutarse en cualquier orden",
      "Es un modelo puramente declarativo, completamente idéntico en todo al lenguaje de consulta SQL estándar",
      "Es un modelo puramente imperativo y, por su propia naturaleza, no se puede distribuir entre varios nodos, como suele observarse al operar estos sistemas en producción",
      "No tiene absolutamente nada que ver con las operaciones de map ni con las de reduce a pesar del nombre",
    ],
    correct:
      "En medio: la lógica se expresa con funciones map y reduce que el framework llama; deben ser puras para re-ejecutarse en cualquier orden",
    explanation:
      "MapReduce (popularizado por Google, soportado de forma limitada por MongoDB/CouchDB para queries de solo lectura) no es ni declarativo ni totalmente imperativo: está en medio. La lógica se expresa con fragmentos de código —las funciones map y reduce, de la programación funcional— que el framework llama repetidamente. Deben ser funciones puras: solo usan su entrada, no hacen consultas adicionales ni tienen efectos secundarios, lo que permite ejecutarlas en cualquier orden y re-ejecutarlas ante fallos. Por su menor comodidad y menos oportunidades de optimización, MongoDB añadió luego un lenguaje declarativo (aggregation pipeline) — un NoSQL 'reinventando SQL'.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  // ---- cap. 3 — Storage and Retrieval ----
  {
    id: "ddia-c3-01",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿En qué consiste un motor de almacenamiento 'log-structured' con índice hash (como Bitcask de Riak)?",
    options: [
      "Las escrituras solo se añaden (append) a un log y un hash map en memoria mapea cada clave a su offset; rápido al escribir, pero todo en RAM",
      "Los datos se sobreescriben siempre in-place en el archivo y no se utiliza ningún tipo de índice para buscarlos, según la escala del sistema y los requisitos concretos del negocio",
      "Guarda absolutamente todos los datos dentro de un árbol B organizado en páginas de tamaño fijo en el disco",
      "Solo sirve para almacenar datos analíticos en formato columnar, nunca para cargas transaccionales OLTP",
    ],
    correct:
      "Las escrituras solo se añaden (append) a un log y un hash map en memoria mapea cada clave a su offset; rápido al escribir, pero todo en RAM",
    explanation:
      "En un motor log-structured con índice hash (Bitcask), las escrituras solo se añaden (append) a un log, y un hash map en memoria mapea cada clave a su offset de byte en el archivo. Las escrituras secuenciales son muy rápidas. Para no llenar el disco, el log se parte en segmentos y se hace 'compaction' (descartar claves duplicadas, quedándose con el valor más reciente; los borrados usan un registro especial llamado 'tombstone'). Limitaciones: todas las claves deben caber en RAM y no soporta range queries eficientes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-02",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué son una SSTable y un LSM-tree, y qué papel juega la 'memtable'?",
    options: [
      "SSTable: segmento de pares clave-valor ordenados; el LSM acumula en una memtable que se vuelca a SSTable, con compaction de fondo",
      "Una SSTable guarda los pares clave-valor sin ningún orden particular y la memtable reside siempre en el disco",
      "El LSM-tree sobreescribe sus páginas in-place exactamente igual que lo hace un índice de tipo B-tree clásico",
      "La memtable es en realidad un índice hash que debe caber por completo dentro del disco, y nunca en la memoria",
    ],
    correct:
      "SSTable: segmento de pares clave-valor ordenados; el LSM acumula en una memtable que se vuelca a SSTable, con compaction de fondo",
    explanation:
      "Una SSTable es un segmento con los pares clave-valor ordenados por clave: hace el merge eficiente (estilo mergesort) y solo necesita un índice en memoria disperso (una clave cada pocos KB). El LSM-tree (Log-Structured Merge-tree) acumula las escrituras en una 'memtable' (árbol balanceado en memoria, p. ej. red-black tree); al superar un umbral, se vuelca a disco como una SSTable, y un proceso de fondo hace merge/compaction. Lo usan LevelDB, RocksDB, Cassandra, HBase, Lucene. Como los datos quedan ordenados, soporta range queries y, al escribir secuencialmente, alto throughput de escritura.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-03",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: para evitar leer disco buscando claves que NO existen, los motores LSM usan a menudo una estructura de datos eficiente en memoria que aproxima el contenido de un conjunto: el filtro de ________.",
    accept: ["bloom", "bloom filter", "filtro de bloom"],
    answerDisplay: "Bloom (filtro de Bloom)",
    explanation:
      "El algoritmo LSM-tree puede ser lento al buscar claves inexistentes, porque debe revisar la memtable y todas las SSTables hasta la más antigua (posiblemente leyendo de disco en cada una) antes de concluir que la clave no existe. Para optimizarlo se usa un filtro de Bloom: una estructura de datos eficiente en memoria que aproxima el contenido de un conjunto y puede decir con certeza si una clave NO está en la base (puede dar falsos positivos pero no falsos negativos), ahorrando muchas lecturas de disco innecesarias.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-04",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué caracteriza a un índice B-tree, la estructura de índice más usada en bases relacionales?",
    options: [
      "Divide la BD en páginas fijas (~4 KB) que se actualizan in-place; árbol balanceado con branching factor de cientos; usa un WAL ante caídas",
      "Solo permite añadir (append) datos a segmentos que son inmutables, y nunca actualiza nada de forma in-place, tal como ocurre en muchos pipelines de ingeniería de datos",
      "Mantiene absolutamente todas las claves de la tabla dentro de un hash map almacenado en la memoria RAM",
      "Almacena cada una de las columnas de la tabla por separado para optimizar las cargas de trabajo analíticas",
    ],
    correct:
      "Divide la BD en páginas fijas (~4 KB) que se actualizan in-place; árbol balanceado con branching factor de cientos; usa un WAL ante caídas",
    explanation:
      "El B-tree (1970, 'ubicuo') es el índice estándar en casi todas las bases relacionales. A diferencia del enfoque log-structured (segmentos de tamaño variable que solo se añaden), el B-tree divide la BD en páginas de tamaño fijo (típicamente 4 KB) que se leen/escriben de a una y se sobreescriben in-place. Forma un árbol balanceado (profundidad O(log n)); el número de referencias a hijos por página es el 'branching factor' (varios cientos). Como sobreescribir páginas in-place es riesgoso ante caídas, usa un write-ahead log (WAL / redo log) para restaurar un estado consistente, y latches (locks ligeros) para concurrencia.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-05",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Comparando LSM-trees y B-trees, ¿qué afirmación es correcta (incluyendo qué es la 'write amplification')?",
    options: [
      "Regla: LSM más rápido al escribir (secuencial, menos write amplification); B-tree al leer; write amplification = una escritura lógica genera varias físicas",
      "Los índices B-tree son siempre más rápidos que los LSM-trees tanto en las lecturas como en las escrituras",
      "La 'write amplification' significa que las escrituras se pierden por completo ante un corte de energía",
      "Los LSM-trees no permiten realizar range queries sobre los datos, mientras que los B-trees sí lo permiten, y conviene tenerlo en cuenta al diseñar y operar la plataforma de datos",
    ],
    correct:
      "Regla: LSM más rápido al escribir (secuencial, menos write amplification); B-tree al leer; write amplification = una escritura lógica genera varias físicas",
    explanation:
      "Como regla general, los LSM-trees son más rápidos en escrituras y los B-trees en lecturas (estos deben revisar varias SSTables en distintas etapas de compaction). La 'write amplification' es cuando una sola escritura lógica genera múltiples escrituras físicas a disco a lo largo del tiempo (el B-tree escribe al WAL y a la página; el LSM reescribe en compactions). Importa en SSDs (se desgastan con reescrituras). Los LSM suelen sostener mayor throughput de escritura y comprimen mejor; pero la compaction puede interferir con lecturas en percentiles altos (los B-trees son más predecibles), y como en un B-tree cada clave está en un solo lugar, facilita locks/transacciones.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-06",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué diferencia un 'heap file', un 'clustered index' y un 'covering index'?",
    options: [
      "Heap file: el índice apunta a la fila guardada aparte; clustered index: guarda la fila dentro del índice; covering index: guarda algunas columnas",
      "Los tres conceptos son del todo idénticos entre sí: lo único que cambia entre ellos es el nombre que reciben, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
      "El heap file guarda la fila completa dentro del índice y el clustered index solo una referencia aparte",
      "Un covering index no es capaz de acelerar ningún tipo de consulta, solo ocupa espacio adicional en el disco",
    ],
    correct:
      "Heap file: el índice apunta a la fila guardada aparte; clustered index: guarda la fila dentro del índice; covering index: guarda algunas columnas",
    explanation:
      "El valor de un índice puede ser la fila misma o una referencia a ella. Con un 'heap file', la fila se guarda aparte sin orden particular y el índice solo apunta a su ubicación (evita duplicar datos cuando hay varios índices secundarios). Un 'clustered index' guarda la fila completa dentro del índice, ahorrando el salto extra (en InnoDB la clave primaria siempre es clustered). Un 'covering index' (con included columns) es un punto medio: guarda algunas columnas en el índice, de modo que ciertas queries se responden solo con el índice ('cubren' la query). Aceleran lecturas pero añaden almacenamiento y overhead de escritura.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-07",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Según Kleppmann, ¿cuál es la verdadera razón del mejor rendimiento de las bases de datos en memoria (in-memory)?",
    options: [
      "No es evitar leer disco (con RAM suficiente el motor en disco tampoco lee, por el caché del SO), sino evitar serializar las estructuras a disco",
      "Que nunca necesitan persistir los datos en disco, así que no ofrecen ningún tipo de durabilidad posible, según la escala del sistema y los requisitos concretos del negocio",
      "Que el disco resulta ser más rápido que la memoria RAM en las operaciones de lectura y de escritura",
      "Que solo pueden almacenar datos que sean más pequeños que la propia caché interna del procesador (CPU)",
    ],
    correct:
      "No es evitar leer disco (con RAM suficiente el motor en disco tampoco lee, por el caché del SO), sino evitar serializar las estructuras a disco",
    explanation:
      "Contraintuitivamente, la ventaja de las bases en memoria no es evitar leer de disco —un motor basado en disco con suficiente RAM tampoco lee, porque el SO cachea los bloques recientes en memoria—, sino evitar el overhead de codificar las estructuras de datos en memoria a un formato serializable en disco. Pueden ofrecer durabilidad escribiendo un log de cambios o snapshots a disco, replicando, o con hardware especial. Ejemplos: VoltDB, MemSQL, Redis (que además ofrece modelos como colas de prioridad y sets, difíciles con índices en disco).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-08",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "En almacenamiento columnar para analítica, ¿qué técnicas de compresión son especialmente efectivas?",
    options: [
      "Bitmap encoding (un bitmap por valor distinto, 1 bit por fila) y run-length si hay muchos ceros; resuelve WHERE ... IN con un OR de bitmaps",
      "Cifrar cada una de las columnas de la tabla por separado usando el algoritmo de cifrado AES de 256 bits",
      "Guardar cada fila completa de la tabla comprimida de forma individual con el algoritmo de compresión ZIP",
      "No es posible aplicar ningún tipo de compresión a los datos almacenados en formato columnar para analítica, al menos en la mayoría de las arquitecturas de datos modernas",
    ],
    correct:
      "Bitmap encoding (un bitmap por valor distinto, 1 bit por fila) y run-length si hay muchos ceros; resuelve WHERE ... IN con un OR de bitmaps",
    explanation:
      "El almacenamiento columnar se presta muy bien a la compresión porque los valores de una columna suelen ser repetitivos. Una técnica efectiva en data warehouses es el 'bitmap encoding': si una columna tiene n valores distintos, se crean n bitmaps (uno por valor), con 1 bit por fila (1 si la fila tiene ese valor). Si hay muchos ceros (bitmaps sparse), se aplica además 'run-length encoding'. Esto permite resolver consultas típicas como WHERE product_sk IN (30,68,69) cargando esos bitmaps y haciendo un OR bit a bit, muy eficiente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-09",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es un 'data cube' (OLAP cube) y cuál es su principal ventaja y desventaja?",
    options: [
      "Un caso especial de vista materializada: agregados precomputados por varias dimensiones; ventaja: queries muy rápidas; límite: poca flexibilidad",
      "Una base de datos transaccional (OLTP) optimizada para hacer escrituras pequeñas fila por fila a gran velocidad, lo que afecta al rendimiento y al coste del procesamiento",
      "Un índice de tipo hash que mantiene absolutamente todas las claves de la tabla cargadas dentro de la memoria",
      "Un formato de archivo especializado que se usa para almacenar imágenes tridimensionales y modelos en 3D",
    ],
    correct:
      "Un caso especial de vista materializada: agregados precomputados por varias dimensiones; ventaja: queries muy rápidas; límite: poca flexibilidad",
    explanation:
      "Un data cube (OLAP cube) es un caso especial de vista materializada: una grilla de agregados (SUM, COUNT, AVG…) agrupados por distintas dimensiones (fecha, producto, tienda…), precomputados. Ventaja: ciertas consultas se vuelven muy rápidas porque ya están calculadas (p. ej. ventas totales por tienda). Desventaja: menos flexibilidad que consultar los datos crudos, porque solo se puede agregar por las dimensiones definidas (no, p. ej., por un atributo que no sea dimensión). Por eso los warehouses guardan los datos crudos y usan cubos solo como aceleración.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  // ---- cap. 4 — Encoding and Evolution ----
  {
    id: "ddia-c4-01",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Cuando coexisten versiones viejas y nuevas del código y de los datos, ¿qué significan compatibilidad 'backward' y 'forward'?",
    options: [
      "Backward: el código NUEVO lee datos del VIEJO; forward: el código VIEJO lee datos del NUEVO (más difícil, debe ignorar lo que no reconoce)",
      "Backward significa que el código viejo lee datos nuevos y forward que el código nuevo lee datos viejos, tal como ocurre en muchos pipelines de ingeniería de datos",
      "Son exactamente lo mismo: lo único que cambia entre ambos conceptos es el idioma en que se nombran",
      "Backward significa que los datos se borran de forma automática cada vez que se actualiza el software",
    ],
    correct:
      "Backward: el código NUEVO lee datos del VIEJO; forward: el código VIEJO lee datos del NUEVO (más difícil, debe ignorar lo que no reconoce)",
    explanation:
      "Como los cambios de código no son instantáneos (rolling upgrades del lado servidor, usuarios que no actualizan del lado cliente), versiones viejas y nuevas de código y datos coexisten. Para que el sistema siga funcionando hace falta compatibilidad en ambos sentidos: backward (el código nuevo lee datos escritos por código viejo) —normalmente fácil, porque conoces el formato viejo— y forward (el código viejo lee datos escritos por código nuevo) —más difícil, porque el código viejo debe ignorar las adiciones que no reconoce.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-02",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En Thrift/Protocol Buffers, ¿cómo se mantiene la compatibilidad al evolucionar el esquema (schema evolution)?",
    options: [
      "Cada campo tiene un 'field tag' numérico (no el nombre): puedes renombrar pero no cambiar el tag; los campos nuevos van opcionales o con default",
      "El esquema de los datos no puede cambiar nunca una sola vez que ha sido desplegado a producción",
      "Los campos se identifican siempre por su posición y su orden exacto dentro del código de la aplicación",
      "Hay que reescribir por completo todos los datos ya existentes cada vez que se hace un cambio al esquema, de acuerdo con las best practices habituales en plataformas de datos",
    ],
    correct:
      "Cada campo tiene un 'field tag' numérico (no el nombre): puedes renombrar pero no cambiar el tag; los campos nuevos van opcionales o con default",
    explanation:
      "En Thrift/Protocol Buffers, un registro codificado es la concatenación de sus campos, cada uno identificado por un 'field tag' (número) y anotado con su tipo. Como los datos nunca referencian nombres de campo, puedes renombrar un campo, pero NO cambiar su tag. Para mantener forward compatibility, el código viejo simplemente ignora los tags que no reconoce (el tipo le dice cuántos bytes saltar). Para backward compatibility, todo campo añadido tras el despliegue inicial debe ser opcional o tener default (no puedes añadir un 'required'); un tag eliminado no puede reutilizarse.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-03",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué problemas tienen los formatos de codificación específicos del lenguaje (Java Serializable, pickle) y los textuales (JSON/XML/CSV)?",
    options: [
      "Los de lenguaje atan los datos a un lenguaje y son un riesgo de seguridad; los textuales no imponen esquema y son ambiguos con los números",
      "Ninguno de los dos tiene ningún problema: son siempre la mejor opción posible para codificar cualquier dato",
      "Los formatos textuales son en realidad binarios y por eso resultan completamente ilegibles para los humanos",
      "Los formatos específicos del lenguaje son los más portables que existen para intercambiar datos entre empresas, y conviene tenerlo en cuenta al diseñar y operar la plataforma de datos",
    ],
    correct:
      "Los de lenguaje atan los datos a un lenguaje y son un riesgo de seguridad; los textuales no imponen esquema y son ambiguos con los números",
    explanation:
      "Los formatos específicos del lenguaje (Java Serializable, Ruby Marshal, pickle de Python) son cómodos pero atan los datos a ese lenguaje, son un riesgo de seguridad (decodificar puede instanciar clases arbitrarias → ejecución remota de código), y descuidan el versionado y la eficiencia. Los textuales estandarizados (JSON/XML/CSV) son legibles y portables, pero no imponen esquema y tienen problemas sutiles: ambigüedad con números (JSON no distingue enteros de floats ni fija precisión; XML/CSV no distinguen un número de un string de dígitos) y no soportan binario nativamente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-04",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué caracteriza a Apache Thrift y Protocol Buffers como formatos de codificación binaria?",
    options: [
      "Requieren un esquema (en un IDL) y generación de código; codifican muy compacto con field tags numéricos en vez de nombres de campo",
      "No requieren ningún esquema y guardan el nombre completo de cada campo dentro de cada uno de los registros, según la escala del sistema y los requisitos concretos del negocio",
      "Solo son capaces de funcionar con datos en formato de texto plano legible directamente por los humanos",
      "Son en realidad lenguajes de consulta declarativos, y no formatos de codificación binaria de los datos",
    ],
    correct:
      "Requieren un esquema (en un IDL) y generación de código; codifican muy compacto con field tags numéricos en vez de nombres de campo",
    explanation:
      "Thrift (Facebook) y Protocol Buffers (Google), ambos open source desde 2007-08, requieren un esquema para los datos, definido en un IDL (interface definition language), y traen una herramienta de generación de código que produce clases para codificar/decodificar. Codifican muy compacto: en vez de incluir los nombres de campo (como las variantes 'binary JSON'), usan 'field tags' numéricos del esquema, e integers de longitud variable. El registro de ejemplo cabe en ~33 bytes (vs 81 de JSON textual).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-05",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué distingue a Apache Avro de Thrift/Protocol Buffers en cuanto a esquemas?",
    options: [
      "Avro no usa field tags: separa writer's schema y reader's schema (solo compatibles) y empareja campos por NOMBRE; ideal para esquemas dinámicos",
      "Avro guarda el esquema completo de los datos dentro de cada uno de los registros individuales que codifica",
      "Avro no es capaz de soportar la evolución de esquema en absoluto una vez que los datos se han escrito",
      "Avro identifica cada uno de sus campos por su posición numérica fija, exactamente igual que Protocol Buffers, como suele observarse al operar estos sistemas en producción",
    ],
    correct:
      "Avro no usa field tags: separa writer's schema y reader's schema (solo compatibles) y empareja campos por NOMBRE; ideal para esquemas dinámicos",
    explanation:
      "Avro (subproyecto de Hadoop) no usa field tags. Distingue el 'writer's schema' (con el que se codificaron los datos) del 'reader's schema' (que espera el código lector); no tienen que ser iguales, solo compatibles, y la librería resuelve las diferencias emparejando campos por nombre (campos que sobran se ignoran; campos que faltan se rellenan con su default). Para mantener compatibilidad solo se pueden añadir/quitar campos con default. Su gran ventaja es que es amigable con esquemas generados dinámicamente (p. ej. exportar una BD relacional a un object container file, regenerando el esquema en cada cambio sin asignar tags a mano).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-06",
    topic: "ingesta",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann describe tres 'modos de dataflow' (cómo fluyen los datos entre procesos). ¿Cuáles son?",
    options: [
      "Vía bases de datos (escritor codifica, lector decodifica; 'los datos sobreviven al código'), vía servicios (REST/RPC) y vía mensajes asíncronos",
      "Únicamente mediante procesamiento batch, procesamiento micro-batch y procesamiento en streaming continuo, sobre todo al trabajar con grandes volúmenes de datos",
      "Mediante las temperaturas de los datos: datos calientes (hot), templados (warm) y datos fríos (cold)",
      "Solamente a través de archivos en formato CSV que se intercambian enviándolos por correo electrónico",
    ],
    correct:
      "Vía bases de datos (escritor codifica, lector decodifica; 'los datos sobreviven al código'), vía servicios (REST/RPC) y vía mensajes asíncronos",
    explanation:
      "La compatibilidad es una relación entre el proceso que codifica los datos y el que los decodifica. Kleppmann describe tres modos de dataflow: (1) a través de bases de datos —quien escribe codifica y quien lee decodifica; como 'los datos sobreviven al código' (data outlives code), se requiere compatibilidad backward y forward, y la evolución de esquema hace que la BD parezca tener un solo esquema aunque guarde versiones históricas—; (2) a través de servicios (REST/RPC, cliente-servidor, base de SOA/microservicios); y (3) a través de paso de mensajes asíncrono (message brokers, modelo de actores).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-07",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "basico",
    type: "fill",
    prompt: "Completa: desplegar una versión nueva del software a unos pocos nodos a la vez (verificando que va bien antes de seguir), sin downtime del servicio, se llama un '________ upgrade' (despliegue escalonado).",
    accept: ["rolling", "gradual", "escalonado", "rolling upgrade"],
    answerDisplay: "Rolling upgrade",
    explanation:
      "Un 'rolling upgrade' (o staged rollout) despliega la versión nueva a unos pocos nodos a la vez, comprueba que funcionan bien y avanza gradualmente por todos los nodos, sin downtime del servicio. Esto fomenta releases más frecuentes y mejor evolucionabilidad, pero implica que código viejo y nuevo (y datos viejos y nuevos) coexisten temporalmente, por lo que hacen falta compatibilidad backward y forward.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  // ---- cap. 5 — Replication ----
  {
    id: "ddia-c5-01",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿En qué consiste la replicación basada en líder (single-leader / master-slave)?",
    options: [
      "Una réplica es el líder (recibe todas las escrituras); las demás son followers que aplican su replication log; los clientes leen de cualquiera",
      "Cualquier réplica acepta escrituras y todas se sincronizan entre sí sin seguir ningún orden definido entre ellas, a lo largo de todo el ciclo de vida de la ingeniería de datos",
      "Todas las réplicas son de solo lectura y, por tanto, ningún cliente puede llegar a escribir datos en ellas",
      "El líder se encarga solamente de leer datos y los followers se encargan solamente de escribir los datos",
    ],
    correct:
      "Una réplica es el líder (recibe todas las escrituras); las demás son followers que aplican su replication log; los clientes leen de cualquiera",
    explanation:
      "La replicación basada en líder (master-slave / active-passive) designa una réplica como líder (primary): los clientes envían todas las escrituras al líder, que las aplica localmente y luego envía los cambios a los followers mediante un replication log o change stream; cada follower los aplica en el mismo orden. Los clientes pueden leer de cualquier réplica, pero solo el líder acepta escrituras. La usan PostgreSQL, MySQL, MongoDB, y también brokers como Kafka.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-02",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es el trade-off entre replicación síncrona y asíncrona, y qué es 'semi-síncrona'?",
    options: [
      "Síncrona: el líder espera la confirmación del follower (copia al día pero bloquea si cae); asíncrona: no espera (rápida, puede perder datos); semi: un follower síncrono",
      "La replicación síncrona no espera ninguna confirmación y la asíncrona sí que espera la confirmación del follower",
      "Ambas formas de replicación garantizan una durabilidad total de los datos sin ningún tipo de riesgo de pérdida",
      "La replicación semi-síncrona significa en realidad que no se aplica ningún tipo de replicación entre las réplicas, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
    ],
    correct:
      "Síncrona: el líder espera la confirmación del follower (copia al día pero bloquea si cae); asíncrona: no espera (rápida, puede perder datos); semi: un follower síncrono",
    explanation:
      "Con replicación síncrona, el líder espera a que el follower confirme la escritura antes de reportar éxito: garantiza una copia actualizada y consistente, pero si el follower síncrono no responde, el líder debe bloquear todas las escrituras. Por eso es impráctico que todos sean síncronos. Una configuración 'semi-síncrona' común es tener un follower síncrono y el resto asíncronos (al menos dos nodos con copia al día). La replicación totalmente asíncrona es más rápida y disponible, pero una escritura confirmada al cliente puede perderse si el líder falla irrecuperablemente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-03",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuáles son los métodos de implementación del replication log, y por qué el 'logical (row-based) log' es ventajoso?",
    options: [
      "Statement-based (reenvía SQL; falla con NOW()/RAND()), WAL shipping (acoplado al motor), logical/row-based (desacoplado, base del CDC) y trigger-based",
      "Solo existe el método statement-based de replicación y, además, resulta ser siempre el mejor de todos ellos",
      "El logical log se limita a copiar los bytes crudos del disco y queda fuertemente acoplado al motor de almacenamiento, como suele observarse al operar estos sistemas en producción",
      "El método de WAL shipping es completamente independiente del motor de almacenamiento que use la base de datos",
    ],
    correct:
      "Statement-based (reenvía SQL; falla con NOW()/RAND()), WAL shipping (acoplado al motor), logical/row-based (desacoplado, base del CDC) y trigger-based",
    explanation:
      "Métodos del replication log: (1) statement-based: reenvía cada sentencia INSERT/UPDATE/DELETE, pero se rompe con funciones no deterministas (NOW(), RAND()), autoincrementos o efectos secundarios; (2) WAL shipping: envía el log de bajo nivel del storage engine, pero queda acoplado a su formato (impide versiones distintas entre líder y follower, dificultando upgrades sin downtime); (3) logical (row-based) log: registra cambios a nivel de fila, desacoplado del motor, lo que permite compatibilidad entre versiones y que aplicaciones externas lo parseen (base del Change Data Capture); (4) trigger-based: en la capa de aplicación, flexible pero con más overhead.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-04",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En la replicación basada en líder, ¿qué es el 'failover' y qué peligro es el 'split brain'?",
    options: [
      "Failover: promover un follower a nuevo líder cuando el líder cae; el 'split brain' es el peligro de que dos nodos crean ser líder y ambos escriban",
      "El failover significa apagar por completo y de forma permanente toda la base de datos del sistema distribuido",
      "El split brain es cuando el líder reparte su carga de trabajo entre dos followers distintos de una forma segura, y conviene tenerlo en cuenta al diseñar y operar la plataforma de datos",
      "El proceso de failover solo llega a ocurrir en los sistemas de replicación que funcionan sin ningún líder",
    ],
    correct:
      "Failover: promover un follower a nuevo líder cuando el líder cae; el 'split brain' es el peligro de que dos nodos crean ser líder y ambos escriban",
    explanation:
      "El failover maneja la caída del líder: se detecta (normalmente por timeout), se elige un nuevo líder (idealmente el follower más al día; es un problema de consenso) y se reconfigura el sistema. Está lleno de riesgos: con replicación asíncrona, las escrituras no replicadas del viejo líder pueden descartarse (violando durabilidad); el 'split brain' es el peligro de que dos nodos crean ser líder simultáneamente y ambos acepten escrituras, corrompiendo datos; y elegir el timeout correcto es difícil (muy corto → failovers innecesarios). Por eso algunos equipos prefieren el failover manual.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-05",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Con replicación asíncrona aparece el 'replication lag'. ¿Qué garantiza la consistencia 'read-after-write' (read-your-writes)?",
    options: [
      "Que un usuario, tras escribir, siempre verá sus propias actualizaciones al volver a leer (no promete nada sobre las escrituras de otros usuarios)",
      "Que todos los usuarios del sistema ven de forma instantánea las escrituras que hacen todos los demás usuarios, de acuerdo con las best practices habituales en plataformas de datos",
      "Que las operaciones de lectura nunca llegan a devolver ningún dato, sino que solo devuelven las escrituras",
      "Que un follower siempre está más actualizado que el propio líder de la replicación en todo momento dado",
    ],
    correct:
      "Que un usuario, tras escribir, siempre verá sus propias actualizaciones al volver a leer (no promete nada sobre las escrituras de otros usuarios)",
    explanation:
      "El 'replication lag' es el retraso entre una escritura en el líder y su reflejo en un follower (consistencia eventual: el retraso suele ser <1 s pero puede crecer a minutos). La consistencia read-after-write (read-your-writes) garantiza que un usuario, tras escribir, siempre verá sus propias actualizaciones al recargar (no promete nada sobre escrituras de otros). Se implementa, por ejemplo, leyendo del líder lo que el usuario pudo haber modificado, o recordando el timestamp de la última escritura del cliente y sirviendo solo desde réplicas suficientemente al día.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-06",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué anomalía de replication lag evita la garantía de 'monotonic reads' (lecturas monótonas)?",
    options: [
      "Evita 'ver el tiempo ir hacia atrás': que tras leer un dato nuevo, una lectura posterior devuelva uno más viejo; se logra leyendo siempre de la misma réplica",
      "Evita por completo que dos usuarios distintos del sistema puedan llegar a escribir el mismo dato a la vez",
      "Garantiza que todas las operaciones de lectura siempre devuelven el valor más reciente que tiene el líder",
      "Impide que lleguen a existir followers que estén atrasados respecto al líder en el sistema de replicación, según la escala del sistema y los requisitos concretos del negocio",
    ],
    correct:
      "Evita 'ver el tiempo ir hacia atrás': que tras leer un dato nuevo, una lectura posterior devuelva uno más viejo; se logra leyendo siempre de la misma réplica",
    explanation:
      "Si un usuario hace varias lecturas que caen en réplicas con distinto lag, puede ver 'el tiempo ir hacia atrás': primero ve un comentario recién añadido (réplica al día) y luego no lo ve (réplica atrasada). La garantía de 'monotonic reads' (más fuerte que eventual, más débil que consistencia fuerte) impide esa anomalía: si haces varias lecturas en secuencia, no verás datos más viejos tras haber visto datos más nuevos. Se logra haciendo que cada usuario lea siempre de la misma réplica (p. ej. elegida por hash de su ID).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-07",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué garantiza 'consistent prefix reads' (lecturas de prefijo consistente)?",
    options: [
      "Que si unas escrituras ocurren en cierto orden, quien las lea las verá en ese mismo orden (preserva causalidad); típico en bases particionadas",
      "Que todas las operaciones de lectura del sistema devuelven exactamente el mismo prefijo de bytes de los datos, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "Que el usuario siempre lee del líder de la replicación y nunca de ninguno de los followers del sistema",
      "Que las escrituras se aplican en un orden completamente aleatorio en cada una de las réplicas del sistema",
    ],
    correct:
      "Que si unas escrituras ocurren en cierto orden, quien las lea las verá en ese mismo orden (preserva causalidad); típico en bases particionadas",
    explanation:
      "La garantía de 'consistent prefix reads' dice que si una secuencia de escrituras ocurre en cierto orden, cualquiera que las lea las verá en ese mismo orden, preservando la causalidad. Sin ella puede pasar la anomalía de 'ver la respuesta antes que la pregunta'. Es un problema particular de bases particionadas (sharded), donde las particiones operan de forma independiente y no hay un orden global de escrituras. Una solución es escribir las operaciones causalmente relacionadas en la misma partición, o rastrear explícitamente dependencias causales.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-08",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuándo tiene sentido la replicación multi-líder (multi-leader) y cuál es su mayor problema?",
    options: [
      "Casos: multi-datacenter (un líder por DC), clientes offline y edición colaborativa; su mayor problema son los conflictos de escritura concurrentes",
      "Es la opción ideal dentro de un solo datacenter y, además, nunca llega a generar ningún tipo de conflicto",
      "Solo permite tener un único líder a la vez, exactamente igual que la replicación basada en un único líder, a lo largo de todo el ciclo de vida de la ingeniería de datos",
      "Elimina por completo cualquier necesidad de tener que resolver conflictos entre escrituras concurrentes",
    ],
    correct:
      "Casos: multi-datacenter (un líder por DC), clientes offline y edición colaborativa; su mayor problema son los conflictos de escritura concurrentes",
    explanation:
      "La replicación multi-líder (master-master / active-active) permite que más de un nodo acepte escrituras, cada líder actuando como follower de los demás. Tiene sentido en: operación multi-datacenter (un líder por DC, las escrituras se procesan localmente y se replican async, ocultando la latencia entre DCs y tolerando mejor sus caídas), clientes con operación offline (cada dispositivo es un líder local que sincroniza luego, p. ej. apps de calendario) y edición colaborativa. Su mayor problema: el mismo dato puede modificarse concurrentemente en dos líderes, generando conflictos de escritura que hay que resolver (no ocurre con single-leader).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-09",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Ante conflictos de escritura (multi-líder/sin líder), ¿qué debe garantizar la resolución y qué riesgo tiene 'last write wins' (LWW)?",
    options: [
      "Debe converger: todas las réplicas deben llegar al MISMO valor final; LWW (mayor timestamp) es propenso a perder datos; alternativas: fusionar o CRDTs",
      "Cada una de las réplicas del sistema puede quedarse con un valor final distinto sin que eso suponga ningún problema, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "La estrategia 'last write wins' (LWW) nunca llega a perder ningún dato y es siempre la mejor opción posible",
      "Los conflictos siempre se resuelven a nivel de una transacción completa, y nunca a nivel de una fila individual",
    ],
    correct:
      "Debe converger: todas las réplicas deben llegar al MISMO valor final; LWW (mayor timestamp) es propenso a perder datos; alternativas: fusionar o CRDTs",
    explanation:
      "Como en multi-líder no hay un orden definido de escrituras, la resolución de conflictos debe ser 'convergente': todas las réplicas deben llegar al mismo valor final una vez replicado todo. Opciones: 'last write wins' (LWW), que elige el de mayor timestamp/ID —popular pero peligrosamente propenso a perder datos—; fusionar valores; registrar el conflicto para resolverlo después (quizá preguntando al usuario); o usar CRDTs (conflict-free replicated datatypes), que resuelven conflictos automáticamente de forma sensata. La resolución suele aplicar a nivel de fila/documento, no de transacción entera.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-10",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "fill",
    prompt: "Completa: en replicación sin líder (Dynamo-style) con n réplicas, w confirmaciones por escritura y r lecturas, la condición de quórum que (en general) garantiza leer el valor más reciente es w + r ___ n (mayor que n).",
    accept: [">", "> n", "mayor", "mayor que n", "mayor que", "es mayor"],
    answerDisplay: "w + r > n",
    explanation:
      "En la replicación sin líder (Dynamo-style: Cassandra, Riak, Voldemort), cualquier réplica acepta escrituras y no hay failover. Con n réplicas, cada escritura debe confirmarse en w nodos y cada lectura consulta r nodos. Si w + r > n, los conjuntos de nodos escritos y leídos se solapan en al menos uno con el valor más reciente (quorum reads/writes). Mecanismos para que las réplicas atrasadas se pongan al día: 'read repair' (el cliente reescribe el valor nuevo en la réplica que devolvió uno viejo) y un proceso 'anti-entropy' de fondo. Ojo: con 'sloppy quorums' o escrituras concurrentes, aún pueden leerse valores obsoletos; las garantías fuertes requieren transacciones o consenso.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  // ---- cap. 6 — Partitioning ----
  {
    id: "ddia-c6-01",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es el trade-off entre particionar por rango de clave (key range) y por hash de la clave?",
    options: [
      "Por rango: claves ordenadas (range queries eficientes) pero arriesga hot spots; por hash: reparte la carga pareja pero destruye el orden",
      "El particionado por rango distribuye mejor la carga y el particionado por hash es el que permite las range queries, sobre todo al trabajar con grandes volúmenes de datos",
      "Ambos enfoques de particionado preservan el orden de las claves y permiten hacer range queries de forma eficiente",
      "El particionado por hash garantiza que nunca habrá hot spots, ni siquiera cuando hay una sola clave muy caliente",
    ],
    correct:
      "Por rango: claves ordenadas (range queries eficientes) pero arriesga hot spots; por hash: reparte la carga pareja pero destruye el orden",
    explanation:
      "El objetivo del particionado (sharding) es repartir datos y carga de forma pareja, evitando 'hot spots'. Por rango de clave: cada partición posee un rango continuo de claves ordenadas (como una enciclopedia), lo que permite range queries eficientes, pero arriesga hot spots si la app accede a claves cercanas (p. ej. escribir por timestamp manda todo a la partición de 'hoy'). Por hash de la clave: una función hash reparte las claves de forma uniforme entre particiones, pero destruye el orden, volviendo ineficientes las range queries. Cassandra combina ambos con una clave compuesta (hash de la primera parte, orden en el resto).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-02",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Aun particionando por hash, una sola clave muy 'caliente' (p. ej. la de una celebridad) genera un hot spot. ¿Qué técnica de aplicación lo alivia?",
    options: [
      "Añadir un número aleatorio al inicio o fin de la clave caliente (2 dígitos la reparten en 100 claves); las lecturas deben combinar las 100",
      "Aplicar la función de hash dos veces seguidas sobre la clave caliente resuelve el problema de forma automática",
      "Aumentar el valor del TTL (time to live) que tiene asignado la clave caliente dentro del sistema de partición",
      "No hay absolutamente nada que se pueda hacer al respecto: el hot spot de la clave caliente es del todo inevitable, según la escala del sistema y los requisitos concretos del negocio",
    ],
    correct:
      "Añadir un número aleatorio al inicio o fin de la clave caliente (2 dígitos la reparten en 100 claves); las lecturas deben combinar las 100",
    explanation:
      "El hash reparte claves distintas, pero no ayuda si toda la carga es para la MISMA clave (el hash de dos IDs iguales es igual), p. ej. una celebridad con millones de seguidores. La mayoría de los sistemas no compensan esto automáticamente, así que es responsabilidad de la app: una técnica simple es añadir un número aleatorio al inicio o fin de la clave caliente (2 dígitos la reparten en 100 claves, distribuibles en distintas particiones). El costo: las lecturas deben consultar las 100 claves y combinar resultados, y conviene aplicar esto solo a las pocas claves calientes (llevando registro de cuáles se dividieron).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-03",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Al particionar índices secundarios, ¿qué diferencia hay entre el enfoque 'por documento' (índice local) y 'por término' (índice global)?",
    options: [
      "Por documento (local): cada partición indexa lo suyo (escribir simple, leer requiere scatter/gather); por término (global): leer eficiente, escribir lento",
      "Con el enfoque por documento la lectura es eficiente y la escritura es lenta, y con el por término ocurre justo al revés",
      "Ambos enfoques de particionado del índice secundario son del todo idénticos tanto en las lecturas como en las escrituras, al menos en la mayoría de las arquitecturas de datos modernas",
      "El índice global siempre se almacena entero en un único nodo del clúster, sin llegar a particionarse entre varios nodos",
    ],
    correct:
      "Por documento (local): cada partición indexa lo suyo (escribir simple, leer requiere scatter/gather); por término (global): leer eficiente, escribir lento",
    explanation:
      "Con índice 'por documento' (local): cada partición mantiene su propio índice secundario solo de sus documentos. Escribir es simple (solo toca la partición del documento), pero leer por el índice requiere 'scatter/gather': enviar la consulta a TODAS las particiones y combinar (propenso a tail latency amplification). Lo usan MongoDB, Cassandra, Elasticsearch. Con índice 'por término' (global): el índice se particiona por el término buscado (p. ej. color:red), no por documento. Leer es eficiente (basta la partición que contiene el término), pero escribir es más lento y complejo, porque un documento puede afectar varias particiones del índice (idealmente requeriría una transacción distribuida; en la práctica las actualizaciones suelen ser asíncronas, como en DynamoDB).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-04",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para asignar particiones a nodos al rebalancear, ¿por qué NO conviene usar 'hash mod N' (donde N es el número de nodos)?",
    options: [
      "Porque si N cambia, hash(key) mod N cambia para casi todas las claves, obligando a mover la mayoría entre nodos (rebalanceo carísimo)",
      "Porque el operador de módulo (mod) no existe en la mayoría de los lenguajes de programación modernos",
      "Porque la operación 'mod N' nunca llega a distribuir las claves de forma pareja entre los distintos nodos, según la escala del sistema y los requisitos concretos del negocio",
      "Porque la operación 'mod N' requiere ejecutar una transacción distribuida en cada una de las lecturas",
    ],
    correct:
      "Porque si N cambia, hash(key) mod N cambia para casi todas las claves, obligando a mover la mayoría entre nodos (rebalanceo carísimo)",
    explanation:
      "El problema de 'hash mod N' es que, al cambiar N (al añadir o quitar nodos), el resultado de hash(key) mod N cambia para la mayoría de las claves, obligando a moverlas casi todas entre nodos. Por ejemplo, hash(key)=123456 va al nodo 6 con 10 nodos, al 3 con 11 y al 0 con 12. Esos movimientos masivos hacen el rebalanceo excesivamente caro. Se necesita un enfoque que no mueva más datos de lo necesario.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-05",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "multi",
    prompt: "¿Cuáles son estrategias válidas de rebalanceo de particiones descritas por Kleppmann?",
    options: [
      "Número fijo de particiones: crear muchas más particiones que nodos y mover particiones enteras al añadir/quitar nodos",
      "Particionado dinámico: dividir una partición en dos cuando supera un tamaño (y fusionar si encoge), como en un B-tree",
      "Particiones proporcionales al número de nodos (un número fijo de particiones por nodo)",
      "Hash mod N (reasignar todo según el número de nodos)",
      "Asignar cada registro a un nodo totalmente al azar y reasignar a diario",
    ],
    correctSet: [
      "Número fijo de particiones: crear muchas más particiones que nodos y mover particiones enteras al añadir/quitar nodos",
      "Particionado dinámico: dividir una partición en dos cuando supera un tamaño (y fusionar si encoge), como en un B-tree",
      "Particiones proporcionales al número de nodos (un número fijo de particiones por nodo)",
    ],
    explanation:
      "Tres estrategias de rebalanceo: (1) Número fijo de particiones: crear muchas más particiones que nodos (p. ej. 1000 para 10 nodos); al añadir un nodo, este 'roba' algunas particiones enteras a cada uno (Riak, Elasticsearch, Couchbase). (2) Particionado dinámico: cuando una partición supera un tamaño se divide en dos (y se fusiona si encoge), como en un B-tree; el número de particiones se adapta al volumen (HBase, MongoDB; usa 'pre-splitting' para no empezar con una sola). (3) Proporcional al número de nodos: número fijo de particiones por nodo (Cassandra); al unirse un nodo, divide algunas particiones existentes. 'Hash mod N' es justamente lo que NO se debe hacer, y asignar al azar obligaría a consultar todos los nodos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-06",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Tras particionar, ¿cómo sabe un cliente a qué nodo conectarse (request routing / service discovery)?",
    options: [
      "(1) el cliente contacta cualquier nodo (reenvía si no le toca); (2) un routing tier decide; (3) el cliente conoce la asignación; suelen usar ZooKeeper",
      "El cliente siempre se conecta a un único nodo maestro fijo que no cambia jamás durante toda la operación",
      "No hace falta ningún tipo de routing, porque cualquiera de los nodos del clúster tiene todos los datos",
      "El cliente va probando los nodos del clúster completamente al azar hasta que por fin acierta con el correcto, lo que afecta al rendimiento y al coste del procesamiento",
    ],
    correct:
      "(1) el cliente contacta cualquier nodo (reenvía si no le toca); (2) un routing tier decide; (3) el cliente conoce la asignación; suelen usar ZooKeeper",
    explanation:
      "El 'request routing' es un caso de 'service discovery'. Hay tres enfoques: (1) el cliente contacta cualquier nodo (round-robin); si no posee la partición, la reenvía; (2) todas las peticiones pasan por un 'routing tier' (load balancer consciente de particiones) que las reenvía; (3) el cliente conoce la asignación y se conecta directo. El reto clave es que todos los participantes acuerden el mapeo partición→nodo conforme cambia con el rebalanceo: muchos sistemas usan un servicio de coordinación externo como ZooKeeper (HBase, SolrCloud, Kafka), mientras que Cassandra y Riak usan un protocolo gossip entre nodos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  // ---- cap. 7 — Transactions ----
  {
    id: "ddia-c7-01",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann afina el significado de ACID. ¿Qué matices destaca sobre la Atomicidad y la Consistencia?",
    options: [
      "Atomicidad = 'abortabilidad' (si falla a medias, se aborta; no es concurrencia); la Consistencia (ACID) es de la APLICACIÓN, no de la BD",
      "La atomicidad trata sobre la concurrencia entre transacciones; y la consistencia la garantiza siempre la base de datos sola",
      "La atomicidad significa que la transacción es indivisible a nivel de bits; y la consistencia es el cifrado de los datos",
      "Tanto la atomicidad como la consistencia son responsabilidad exclusiva del hardware del servidor de base de datos",
    ],
    correct:
      "Atomicidad = 'abortabilidad' (si falla a medias, se aborta; no es concurrencia); la Consistencia (ACID) es de la APLICACIÓN, no de la BD",
    explanation:
      "Kleppmann precisa ACID: la Atomicidad NO es sobre concurrencia (eso es Isolation), sino sobre qué pasa si una transacción falla a medias: se aborta y se descartan sus escrituras (mejor término sería 'abortabilidad'), permitiendo reintentar con seguridad. La Consistencia en ACID es un concepto de la APLICACIÓN: tus invariantes (p. ej. débitos = créditos) deben preservarse, pero es la app quien define transacciones correctas; la BD no puede garantizarlo sola (solo Atomicidad, Isolation y Durabilidad son propiedades de la BD). Por eso 'la C no pertenece realmente a ACID'.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-02",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre operaciones de un solo objeto (single-object) y transacciones multi-objeto?",
    options: [
      "Single-object: atomicidad/aislamiento sobre UN objeto (compare-and-set); multi-objeto: agrupa escrituras a varios objetos como una unidad",
      "La operación single-object agrupa varias filas a la vez y la transacción multi-objeto opera solo sobre una fila",
      "Ambas operaciones, la single-object y la multi-objeto, son en realidad exactamente la misma cosa con otro nombre, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "Las transacciones multi-objeto solo existen en las bases de datos NoSQL que no tienen ningún esquema fijo",
    ],
    correct:
      "Single-object: atomicidad/aislamiento sobre UN objeto (compare-and-set); multi-objeto: agrupa escrituras a varios objetos como una unidad",
    explanation:
      "Casi todos los motores garantizan atomicidad y aislamiento a nivel de UN objeto (un par clave-valor en un nodo): operaciones como incremento atómico o compare-and-set evitan 'lost updates', pero NO son transacciones en el sentido usual (agrupar varias operaciones sobre varios objetos). Las transacciones multi-objeto agrupan escrituras a varios objetos como una unidad, y son necesarias cuando hay que mantener datos sincronizados: referencias por clave foránea, datos denormalizados que deben actualizarse juntos, o índices secundarios (que son objetos distintos y podrían quedar inconsistentes).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-03",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué dos garantías ofrece el nivel de aislamiento 'read committed' (uno de los más comunes, default en PostgreSQL)?",
    options: [
      "No dirty reads (solo ves escrituras ya confirmadas) y no dirty writes (no pisas un valor sin confirmar); NO previene lost updates ni read skew",
      "Garantiza la serializabilidad completa de las transacciones, evitando todas las posibles race conditions",
      "Permite leer datos que aún no han sido confirmados (dirty reads) para así conseguir una mayor velocidad",
      "Bloquea todas las operaciones de lectura hasta que terminan por completo todas las operaciones de escritura, según la escala del sistema y los requisitos concretos del negocio",
    ],
    correct:
      "No dirty reads (solo ves escrituras ya confirmadas) y no dirty writes (no pisas un valor sin confirmar); NO previene lost updates ni read skew",
    explanation:
      "El nivel 'read committed' (default en Oracle, PostgreSQL, SQL Server) ofrece dos garantías: (1) no dirty reads: solo ves las escrituras de otra transacción cuando esta confirma (y todas a la vez); (2) no dirty writes: la segunda escritura sobre un objeto espera a que la primera transacción confirme/aborte (típicamente con row-level locks). Los dirty reads se evitan recordando el valor viejo committed mientras la transacción está en curso (los lectores no se bloquean). Pero read committed NO previene 'lost updates' ni 'read skew' (nonrepeatable read).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-04",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "fill",
    prompt: "Completa: el aislamiento 'snapshot isolation' (cada transacción lee de un snapshot consistente del inicio) se implementa manteniendo varias versiones committed de cada objeto, una técnica llamada control de concurrencia ________ (siglas MVCC).",
    accept: ["multiversión", "multiversion", "multi-versión", "multi version", "mvcc"],
    answerDisplay: "Multiversión (MVCC)",
    explanation:
      "El 'snapshot isolation' hace que cada transacción lea de un snapshot consistente de la BD tal como estaba al iniciar (ideal para queries largas de solo lectura, backups y analítica). Se implementa con control de concurrencia multiversión (MVCC): la BD mantiene varias versiones committed de cada objeto a la vez, etiquetadas con el ID de la transacción que las escribió, y reglas de visibilidad deciden cuáles ve cada transacción. Principio clave: 'los lectores nunca bloquean a los escritores, ni los escritores a los lectores'. Confusamente, Oracle lo llama 'serializable' y PostgreSQL/MySQL lo llaman 'repeatable read'.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-05",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es el 'read skew' (nonrepeatable read) y qué nivel de aislamiento lo resuelve?",
    options: [
      "Ver la base en estado inconsistente al leer partes en momentos distintos (p. ej. ver $900 a medias); lo resuelve el snapshot isolation",
      "Ver datos que aún no han sido confirmados por otra transacción; y se resuelve cifrando los datos en reposo",
      "Que dos escrituras concurrentes se pisen entre sí; y se resuelve creando un índice secundario sobre la tabla",
      "Un simple desbalanceo de la carga de trabajo entre las distintas particiones de la base de datos distribuida, lo que afecta al rendimiento y al coste del procesamiento",
    ],
    correct:
      "Ver la base en estado inconsistente al leer partes en momentos distintos (p. ej. ver $900 a medias); lo resuelve el snapshot isolation",
    explanation:
      "El 'read skew' (lectura no repetible) ocurre cuando una transacción lee distintas partes de la BD en momentos distintos y la ve en un estado inconsistente: p. ej. Alice ve una cuenta con $500 (antes de recibir) y otra con $400 (después de enviar), pareciendo que faltan $100. Es tolerable bajo read committed (cada valor estaba committed al leerlo), pero intolerable para backups (un backup que tarda horas) o queries analíticas/de integridad que escanean gran parte de la BD. La solución es el snapshot isolation, que da una vista consistente congelada en el tiempo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-06",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es el problema de 'lost update' y cómo se previene?",
    options: [
      "Dos transacciones hacen read-modify-write a la vez y una modificación se pierde; se previene con operaciones atómicas, CAS o FOR UPDATE",
      "Una transacción lee datos que aún no se han confirmado; y se previene usando el nivel de aislamiento read committed",
      "Se pierde toda la base de datos cuando falla el líder de la replicación; y se previene haciendo copias de seguridad",
      "Un índice secundario queda desactualizado respecto a la tabla; y se previene ejecutando el comando vacuum a menudo",
    ],
    correct:
      "Dos transacciones hacen read-modify-write a la vez y una modificación se pierde; se previene con operaciones atómicas, CAS o FOR UPDATE",
    explanation:
      "El 'lost update' ocurre cuando dos transacciones leen un valor, lo modifican y lo reescriben (read-modify-write) concurrentemente: la segunda escritura no incluye la modificación de la primera, que se pierde (p. ej. dos incrementos de contador que solo suben 1, o dos usuarios editando un documento JSON). Soluciones: operaciones de escritura atómicas (UPDATE counters SET value = value + 1, la mejor opción), compare-and-set (escribir solo si el valor no cambió), bloqueo explícito de las filas (SELECT ... FOR UPDATE), o la detección automática de lost updates que ofrecen algunas implementaciones de snapshot isolation.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-07",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué es el 'write skew' y por qué es más difícil de prevenir que un lost update?",
    options: [
      "Dos transacciones leen lo mismo y actualizan objetos DISTINTOS, violando un invariante; las operaciones atómicas de un objeto no ayudan",
      "Es exactamente lo mismo que un dirty read y, por tanto, se evita con el nivel de aislamiento read committed, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
      "Es simplemente un desbalanceo de la carga de trabajo entre los distintos nodos del sistema distribuido",
      "Se previene siempre y en todos los casos con una operación de incremento atómico sobre un único objeto",
    ],
    correct:
      "Dos transacciones leen lo mismo y actualizan objetos DISTINTOS, violando un invariante; las operaciones atómicas de un objeto no ayudan",
    explanation:
      "El 'write skew' es una generalización del lost update: dos transacciones leen los mismos objetos y luego actualizan objetos DISTINTOS, violando un invariante que abarca varias filas (p. ej. ambos médicos de guardia comprueban 'hay ≥2 de guardia', ambos pasan, ambos se dan de baja y queda 0). Como afectan objetos distintos, no es un dirty write ni un lost update, y las operaciones atómicas de un solo objeto o la detección de lost updates no ayudan. A menudo surge por un 'phantom' (una escritura que cambia el resultado de una búsqueda previa). Prevenirlo automáticamente requiere aislamiento serializable; si no, hay que bloquear explícitamente las filas (FOR UPDATE).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-08",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "multi",
    prompt: "El aislamiento serializable previene TODAS las race conditions (resultado equivalente a ejecutar las transacciones una a una). ¿Cuáles son las tres técnicas para implementarlo según Kleppmann?",
    options: [
      "Ejecución serial real (un solo hilo, una transacción a la vez; usa stored procedures y datos en memoria, p. ej. VoltDB, Redis)",
      "Two-phase locking (2PL): bloqueos en modo compartido/exclusivo",
      "Serializable snapshot isolation (SSI): control de concurrencia optimista que detecta conflictos al hacer commit",
      "Eventual consistency con resolución de conflictos LWW",
      "Particionar por hash mod N",
    ],
    correctSet: [
      "Ejecución serial real (un solo hilo, una transacción a la vez; usa stored procedures y datos en memoria, p. ej. VoltDB, Redis)",
      "Two-phase locking (2PL): bloqueos en modo compartido/exclusivo",
      "Serializable snapshot isolation (SSI): control de concurrencia optimista que detecta conflictos al hacer commit",
    ],
    explanation:
      "El aislamiento serializable es el más fuerte: garantiza que el resultado sea como si las transacciones se hubieran ejecutado una a una (serialmente), previniendo todas las race conditions. Se implementa con tres técnicas: (1) ejecución serial real —una transacción a la vez en un solo hilo, viable desde ~2007 con RAM barata y transacciones OLTP cortas encapsuladas en stored procedures; VoltDB, Redis, Datomic; limitada a un core—; (2) two-phase locking (2PL) —durante décadas la única opción viable, con locks compartidos/exclusivos—; y (3) serializable snapshot isolation (SSI) —control de concurrencia optimista que deja correr las transacciones y aborta las que causaron un conflicto de serialización al hacer commit—. La consistencia eventual con LWW NO es serializable.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-09",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cómo logra el 'two-phase locking' (2PL) la serializabilidad, y en qué se diferencia del snapshot isolation?",
    options: [
      "Con locks: varios pueden leer a la vez (compartido), escribir exige exclusivo; en 2PL escritores y lectores se bloquean (al revés que snapshot)",
      "El 2PL no usa ningún tipo de lock: deja correr todas las transacciones y aborta al final, exactamente igual que el SSI",
      "En el 2PL los lectores no llegan a bloquear nunca a nadie, igual que ocurre en el aislamiento de tipo snapshot isolation, lo que afecta al rendimiento y al coste del procesamiento",
      "El 2PL (two-phase locking) es en realidad exactamente lo mismo que el 2PC (two-phase commit), solo cambia el nombre",
    ],
    correct:
      "Con locks: varios pueden leer a la vez (compartido), escribir exige exclusivo; en 2PL escritores y lectores se bloquean (al revés que snapshot)",
    explanation:
      "El 2PL (two-phase locking, distinto del 2PC) logra serializabilidad con locks más estrictos: varias transacciones pueden leer un objeto a la vez (lock compartido), pero en cuanto alguien quiere escribir necesita acceso exclusivo. Si A leyó un objeto y B quiere escribirlo, B espera a que A termine, y viceversa: en 2PL los escritores bloquean a los lectores y los lectores a los escritores (a diferencia del snapshot isolation, cuyo lema es 'lectores nunca bloquean escritores, ni escritores a lectores'). Por eso 2PL protege contra todas las race conditions (lost updates, write skew), pero con peor rendimiento y riesgo de deadlocks. Lo usa el nivel 'serializable' de MySQL/InnoDB y SQL Server.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  // ---- cap. 8 — The Trouble with Distributed Systems ----
  {
    id: "ddia-c8-01",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un sistema distribuido con red poco fiable, ¿por qué es difícil 'detectar fallos' de un nodo?",
    options: [
      "Porque al no llegar respuesta no distingues si el nodo cayó, va lento, o se perdió el mensaje; solo tienes un timeout (un trade-off)",
      "Porque la red siempre entrega todos los mensajes de forma instantánea y sin que se llegue a perder ninguno",
      "Porque un nodo que se cae siempre avisa de forma explícita a los demás justo antes de llegar a morir del todo",
      "Porque los fallos parciales no llegan a existir nunca: o bien todo el sistema funciona, o bien no funciona nada",
    ],
    correct:
      "Porque al no llegar respuesta no distingues si el nodo cayó, va lento, o se perdió el mensaje; solo tienes un timeout (un trade-off)",
    explanation:
      "Los sistemas distribuidos sufren 'fallos parciales' no deterministas: parte funciona y parte no. Las redes son asíncronas y poco fiables: al no recibir respuesta no puedes saber si el nodo está caído, lento, o si se perdió la petición o su respuesta. Lo único disponible es un timeout, y elegirlo es un trade-off: demasiado corto declara muerto a un nodo que solo iba lento (causando acciones innecesarias, p. ej. failovers); demasiado largo tarda en reaccionar. No hay forma infalible de detectar el fallo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-02",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es la diferencia entre un reloj 'time-of-day' (wall-clock) y un reloj 'monotónico', y para qué sirve cada uno?",
    options: [
      "Time-of-day: fecha del calendario (NTP), pero puede saltar atrás; monotónico: siempre avanza, ideal para medir duraciones (timeouts)",
      "El reloj monotónico es el que da la fecha del calendario y el reloj time-of-day es el que mide las duraciones",
      "Ambos relojes son del todo idénticos entre sí y siempre están perfectamente sincronizados entre todos los nodos",
      "El reloj time-of-day no cambia jamás su valor y el reloj monotónico salta hacia atrás de forma constante",
    ],
    correct:
      "Time-of-day: fecha del calendario (NTP), pero puede saltar atrás; monotónico: siempre avanza, ideal para medir duraciones (timeouts)",
    explanation:
      "El reloj 'time-of-day' (wall-clock, p. ej. System.currentTimeMillis()) devuelve la fecha/hora del calendario (segundos desde el epoch), sincronizado por NTP; pero puede saltar hacia atrás si NTP lo reajusta, e ignora leap seconds, por lo que NO sirve para medir tiempo transcurrido. El reloj 'monotónico' (System.nanoTime()) está garantizado a siempre avanzar; su valor absoluto es arbitrario y no comparable entre máquinas, pero la diferencia entre dos lecturas mide bien una duración (timeouts, response time). En sistemas distribuidos, usar el monotónico para medir intervalos es seguro; el time-of-day no.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-03",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué Kleppmann advierte que NO se deben usar los timestamps de los relojes (time-of-day) para ordenar eventos entre nodos (p. ej. para 'last write wins')?",
    options: [
      "Porque los relojes de distintos nodos nunca están bien sincronizados (drift, error de NTP, saltos); un LWW por timestamp puede perder datos",
      "Porque los timestamps de los relojes son siempre exactos al nanosegundo en todos y cada uno de los nodos",
      "Porque ordenar los eventos por su timestamp es, con diferencia, el método más fiable que existe hoy en día",
      "Porque los relojes monotónicos sí que están perfectamente sincronizados entre todas las máquinas del clúster, según la escala del sistema y los requisitos concretos del negocio",
    ],
    correct:
      "Porque los relojes de distintos nodos nunca están bien sincronizados (drift, error de NTP, saltos); un LWW por timestamp puede perder datos",
    explanation:
      "Aunque los relojes parecen simples, tienen muchas trampas: el cuarzo deriva (drift, p. ej. 200 ppm), NTP solo es tan preciso como la red (error mínimo de ~35 ms por internet, a veces ~1 s), un reloj muy desviado puede ser reseteado y 'saltar' hacia atrás, y los leap seconds han tumbado sistemas. Por eso es peligroso usar timestamps de relojes para ordenar eventos entre nodos: una estrategia 'last write wins' puede descartar silenciosamente una escritura cuyo nodo tenía el reloj atrasado (clock skew), perdiendo datos. Para ordenar causalmente se usan mecanismos lógicos (version vectors, números de secuencia), no relojes físicos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-04",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué un nodo de un sistema distribuido puede 'pausarse' arbitrariamente y qué implicación tiene?",
    options: [
      "Por una pausa stop-the-world del GC (o VM, swapping…) un hilo se congela sin enterarse; al despertar cree que apenas pasó tiempo",
      "Porque el reloj monotónico de la máquina se detiene físicamente durante un cierto periodo de tiempo dado",
      "Porque la red garantiza de forma explícita que ninguno de los nodos del sistema llegue a pausarse jamás",
      "Porque el nodo siempre avisa a los demás justo antes de pausarse y por eso nadie llega a declararlo muerto, de acuerdo con las best practices habituales en plataformas de datos",
    ],
    correct:
      "Por una pausa stop-the-world del GC (o VM, swapping…) un hilo se congela sin enterarse; al despertar cree que apenas pasó tiempo",
    explanation:
      "Un nodo puede sufrir pausas arbitrarias: una pausa 'stop-the-world' del garbage collector congela todos los hilos durante segundos o incluso un minuto; también la pausa de una VM al compartir CPU, el swapping a disco, o suspender un laptop. Lo peligroso es que el nodo no se da cuenta: al reanudarse cree que apenas pasó tiempo, aunque los demás ya lo declararon muerto y, por ejemplo, eligieron otro líder. Por eso no se puede asumir un límite superior en el tiempo de respuesta de un nodo (sistema asíncrono), lo que complica leases, locks y liderazgo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-05",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un sistema distribuido, ¿por qué 'la verdad la define la mayoría' (quorum)?",
    options: [
      "Porque un nodo no puede fiarse de su propio juicio (semi-desconectado, pausa GC); muchos algoritmos deciden por quórum (mayoría)",
      "Porque el nodo que resulta ser el más rápido de todos siempre es el que tiene la razón en cualquier decisión",
      "Porque un único nodo líder es el que decide absolutamente todo sin tener que consultar a ningún otro nodo",
      "Porque las decisiones del sistema distribuido se terminan tomando completamente al azar entre todos los nodos",
    ],
    correct:
      "Porque un nodo no puede fiarse de su propio juicio (semi-desconectado, pausa GC); muchos algoritmos deciden por quórum (mayoría)",
    explanation:
      "Un nodo no puede confiar en su propio juicio: puede estar semi-desconectado (recibe pero sus respuestas se pierden) o haber sufrido una pausa GC, y ser declarado muerto erróneamente sin poder evitarlo. Por eso un sistema distribuido no puede depender de un solo nodo; muchos algoritmos deciden por quórum (votación entre nodos), comúnmente una mayoría absoluta (>la mitad). Si un quórum declara muerto a un nodo, debe considerarse muerto y este debe ceder, aunque se sienta vivo. La mayoría es segura porque solo puede haber una mayoría a la vez (no dos decisiones mayoritarias en conflicto).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-06",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Para qué sirve un 'fencing token' al usar un lock/lease distribuido?",
    options: [
      "Un número que crece en cada concesión del lock; el cliente lo manda en cada escritura y el recurso rechaza los tokens menores ya procesados",
      "Es una contraseña que se utiliza para cifrar el contenido del recurso compartido entre los distintos clientes",
      "Es un timeout que se encarga de apagar el nodo de forma automática cuando expira su lease sobre el recurso",
      "Es un identificador generado al azar que no necesita ser verificado de ninguna forma por el recurso compartido, lo que afecta al rendimiento y al coste del procesamiento",
    ],
    correct:
      "Un número que crece en cada concesión del lock; el cliente lo manda en cada escritura y el recurso rechaza los tokens menores ya procesados",
    explanation:
      "Si un cliente con un lease se pausa demasiado (p. ej. GC), su lease expira y otro cliente obtiene uno nuevo; al despertar, el primero cree (incorrectamente) que aún lo tiene y escribe, corrompiendo el recurso. El 'fencing token' lo previene: el servicio de locks devuelve un número que aumenta en cada concesión; el cliente lo incluye en cada escritura, y el recurso rechaza cualquier escritura con un token menor al máximo ya procesado. Clave: el RECURSO debe verificar el token activamente (no basta con que el cliente compruebe su lock). En ZooKeeper se puede usar el zxid o cversion como token.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-07",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "fill",
    prompt: "Completa: un sistema que sigue funcionando correctamente aunque algunos nodos 'mientan' (envíen respuestas arbitrarias, corruptas o maliciosas) es tolerante a fallos ________ (el problema de los generales de Bizancio).",
    accept: ["bizantinos", "byzantine", "bizantino", "bizantinas"],
    answerDisplay: "Bizantinos (Byzantine fault tolerance)",
    explanation:
      "El libro asume nodos 'poco fiables pero honestos': pueden ir lentos, no responder o tener estado desactualizado, pero si responden, dicen la verdad según su conocimiento. Un 'fallo bizantino' es cuando un nodo puede mentir: enviar respuestas arbitrarias, corruptas o maliciosas (p. ej. afirmar haber recibido un mensaje que no recibió). Alcanzar consenso en ese entorno es el 'problema de los generales de Bizancio'. Un sistema es tolerante a fallos bizantinos (BFT) si sigue operando correctamente pese a nodos maliciosos; importa en contextos como aeroespacial o blockchains, pero en un datacenter controlado normalmente se asume que no hay nodos mentirosos (sería demasiado costoso).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-08",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Al razonar sobre algoritmos distribuidos se usan 'system models'. ¿Cuáles son los modelos de temporización y de fallos de nodos?",
    options: [
      "Temporización: síncrono, parcialmente síncrono y asíncrono; fallos: crash-stop, crash-recovery y bizantino; el más realista es parcial+recovery",
      "Solo existe un único modelo de sistema posible, y ese modelo asume que la red de comunicación es siempre perfecta, como suele observarse al operar estos sistemas en producción",
      "El modelo síncrono significa que los nodos mienten y el modelo asíncrono significa que los nodos son honestos",
      "El modelo crash-stop significa que el nodo se recupera y el bizantino significa que el nodo se apaga limpiamente",
    ],
    correct:
      "Temporización: síncrono, parcialmente síncrono y asíncrono; fallos: crash-stop, crash-recovery y bizantino; el más realista es parcial+recovery",
    explanation:
      "Para diseñar algoritmos robustos se formalizan 'system models'. Por temporización: síncrono (existen límites conocidos para el retraso de red y las pausas de proceso —poco realista—), parcialmente síncrono (suele comportarse como síncrono pero a veces excede los límites —el más realista—) y asíncrono (no se puede asumir nada sobre el tiempo, ni siquiera relojes). Por fallos de nodos: crash-stop (un nodo falla y nunca vuelve), crash-recovery (puede caer y reanudarse, conservando lo persistido en disco) y bizantino (comportamiento arbitrario, incluido mentir). Combinar 'parcialmente síncrono + crash-recovery' suele ser el modelo más útil para sistemas reales.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  // ---- cap. 9 — Consistency and Consensus ----
  {
    id: "ddia-c9-01",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "fill",
    prompt: "Completa: la garantía de consistencia más fuerte —que hace que el sistema parezca tener una sola copia de los datos, de modo que toda lectura ve la escritura más reciente (recency guarantee)— se llama ________.",
    accept: ["linearizabilidad", "linearizability", "linealizabilidad", "linearizable"],
    answerDisplay: "Linearizabilidad (linearizability)",
    explanation:
      "La linearizabilidad (o consistencia 'fuerte') es una garantía de recencia sobre un registro (objeto individual): hace que el sistema parezca tener una sola copia de los datos, de modo que en cuanto una escritura se completa, toda lectura posterior ve ese valor (o uno más nuevo). Es útil cuando se necesita corrección estricta: locks/elección de líder (todos deben acordar quién tiene el lock), restricciones de unicidad (username/email), etc. Tiene un costo: en una partición de red, un sistema linearizable puede volverse no disponible (relacionado con el teorema CAP).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-02",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es la diferencia entre linearizabilidad y serializabilidad (que suelen confundirse)?",
    options: [
      "Serializabilidad: aislamiento de transacciones (varios objetos) equivalente a algún orden serial; linearizabilidad: recencia sobre un objeto",
      "Son exactamente lo mismo entre sí: lo único que cambia entre los dos conceptos es el nombre que reciben",
      "La linearizabilidad agrupa las transacciones y la serializabilidad opera siempre sobre un único objeto aislado",
      "La serializabilidad es una garantía más débil que la propia consistencia eventual de los sistemas distribuidos, sobre todo al trabajar con grandes volúmenes de datos",
    ],
    correct:
      "Serializabilidad: aislamiento de transacciones (varios objetos) equivalente a algún orden serial; linearizabilidad: recencia sobre un objeto",
    explanation:
      "Se confunden porque ambas suenan a 'ordenar secuencialmente', pero son distintas: la serializabilidad es una propiedad de aislamiento de transacciones (que leen/escriben varios objetos) y garantiza un resultado equivalente a ejecutarlas en ALGÚN orden serial (no necesariamente el real). La linearizabilidad es una garantía de recencia sobre lecturas/escrituras de un objeto individual; no agrupa operaciones en transacciones, así que por sí sola no evita el write skew. Combinar ambas se llama 'strict serializability'. El 2PL y la ejecución serial real suelen ser linearizables; el SSI (snapshot) NO lo es (lee de un snapshot, no del valor más reciente).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-03",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué es el 'total order broadcast' (atomic broadcast) y por qué es clave para la replicación?",
    options: [
      "Entrega mensajes a todos de forma fiable y en el MISMO orden total (fijado al entregar); base de la 'state machine replication'",
      "Es un protocolo que se encarga de entregar cada uno de los mensajes a un solo nodo elegido completamente al azar",
      "Es una forma de ordenar los mensajes del sistema según el timestamp del reloj de pared de cada uno de los nodos",
      "Es un método de compresión que sirve para reducir el tamaño de los mensajes que viajan por la red del clúster",
    ],
    correct:
      "Entrega mensajes a todos de forma fiable y en el MISMO orden total (fijado al entregar); base de la 'state machine replication'",
    explanation:
      "El 'total order broadcast' (broadcast atómico) es un protocolo de mensajes entre nodos con dos garantías de seguridad: entrega fiable (si un mensaje llega a un nodo, llega a todos) y entrega totalmente ordenada (todos los nodos los reciben en el mismo orden), con el orden fijado al momento de entregar (no se puede insertar retroactivamente). Es justo lo que necesita la replicación: si cada mensaje es una escritura y todas las réplicas las aplican en el mismo orden, quedan consistentes ('state machine replication'). También sirve para implementar transacciones serializables y un log. Es más fuerte que ordenar por timestamps. ZooKeeper y etcd lo implementan.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-04",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué son los 'Lamport timestamps' y para qué sirven?",
    options: [
      "Relojes lógicos: un par (contador, ID de nodo) que da un orden total consistente con la causalidad, sin depender de relojes de pared",
      "Son timestamps del reloj de pared de cada nodo que se mantienen sincronizados entre sí mediante el protocolo NTP",
      "Son un identificador generado completamente al azar que se asigna a cada una de las transacciones del sistema",
      "Son el número de versión que tiene asignado cada uno de los objetos almacenados en el almacenamiento de objetos",
    ],
    correct:
      "Relojes lógicos: un par (contador, ID de nodo) que da un orden total consistente con la causalidad, sin depender de relojes de pared",
    explanation:
      "Como los relojes físicos no son fiables para ordenar eventos entre nodos, se usan relojes lógicos. Un Lamport timestamp es un par (contador, ID de nodo) que provee un orden total consistente con la causalidad: se comparan primero por contador y, en empate, por ID de nodo. Cada nodo y cliente lleva el máximo contador que ha visto y lo incluye en cada petición/respuesta, de modo que el contador se propaga. Son más compactos que los version vectors, pero (a diferencia del total order broadcast) el orden total solo queda determinado después de recolectar todas las operaciones, no en tiempo real.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-05",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cómo funciona el 'two-phase commit' (2PC) para commits atómicos distribuidos y cuál es su gran problema?",
    options: [
      "Un coordinador pregunta a todos si pueden confirmar (prepare); si todos dicen sí, decide commit (fase 2). Problema: si el coordinador cae tras el prepare, los participantes quedan bloqueados",
      "Cada uno de los nodos confirma su propia parte de la transacción de forma independiente sin coordinarse con los demás, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "El two-phase commit (2PC) es en realidad exactamente lo mismo que el two-phase locking (2PL), solo cambia el nombre",
      "Garantiza que la transacción se confirme de forma correcta incluso si llegan a fallar absolutamente todos los nodos",
    ],
    correct:
      "Un coordinador pregunta a todos si pueden confirmar (prepare); si todos dicen sí, decide commit (fase 2). Problema: si el coordinador cae tras el prepare, los participantes quedan bloqueados",
    explanation:
      "El 2PC logra atomicidad cuando una transacción abarca varios nodos: un coordinador ejecuta dos fases. Fase 1 (prepare): pregunta a cada participante si está seguro de poder confirmar; al responder 'sí', el participante promete confirmar (renuncia a abortar). Fase 2: si TODOS prometieron, el coordinador escribe su decisión (commit) y la envía a todos; si alguno dijo no, aborta. El commit es irrevocable. Su gran problema: si el coordinador falla justo después del prepare, los participantes 'in-doubt' quedan bloqueados esperando su decisión, sin poder decidir solos (no es tolerante a fallos: no cumple la propiedad de 'termination' del consenso). No confundir 2PC con 2PL.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-06",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "multi",
    prompt: "Un algoritmo de consenso (hacer que varios nodos acuerden un valor) debe cumplir cuatro propiedades. ¿Cuáles son?",
    options: [
      "Acuerdo uniforme (uniform agreement): no hay dos nodos que decidan distinto",
      "Integridad (integrity): ningún nodo decide dos veces",
      "Validez (validity): si se decide un valor v, alguien propuso v",
      "Terminación (termination): todo nodo que no caiga acaba decidiendo (requiere una mayoría funcionando)",
      "Linealidad: las decisiones se toman en orden de timestamp de reloj",
      "Disponibilidad total: funciona aunque caigan TODOS los nodos",
    ],
    correctSet: [
      "Acuerdo uniforme (uniform agreement): no hay dos nodos que decidan distinto",
      "Integridad (integrity): ningún nodo decide dos veces",
      "Validez (validity): si se decide un valor v, alguien propuso v",
      "Terminación (termination): todo nodo que no caiga acaba decidiendo (requiere una mayoría funcionando)",
    ],
    explanation:
      "El consenso (varios nodos acuerdan un valor, p. ej. quién reserva el último asiento) debe cumplir: acuerdo uniforme (no hay dos nodos que decidan distinto), integridad (ningún nodo decide dos veces), validez (si se decide v, fue propuesto) y terminación (todo nodo que no caiga acaba decidiendo). Las tres primeras son propiedades de SEGURIDAD; la terminación es de VIVEZA y formaliza la tolerancia a fallos. Cualquier algoritmo de consenso requiere que al menos una MAYORÍA de nodos funcione para garantizar terminación; aun así, las propiedades de seguridad se mantienen aunque caiga la mayoría. La mayoría asumen que no hay fallos bizantinos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-07",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué relación hay entre el consenso y el total order broadcast, y cuáles son algoritmos de consenso conocidos?",
    options: [
      "El total order broadcast equivale a rondas repetidas de consenso; algoritmos: Paxos, Raft, Zab y Viewstamped Replication (VSR)",
      "El consenso y el total order broadcast no guardan ninguna relación entre sí, son dos conceptos totalmente separados",
      "El único algoritmo de consenso que existe es la estrategia de resolución de conflictos 'last write wins' (LWW)",
      "El total order broadcast exige abandonar por completo cualquier tipo de quórum entre los nodos del sistema distribuido",
    ],
    correct:
      "El total order broadcast equivale a rondas repetidas de consenso; algoritmos: Paxos, Raft, Zab y Viewstamped Replication (VSR)",
    explanation:
      "El total order broadcast equivale a rondas repetidas de consenso: en cada ronda los nodos proponen el siguiente mensaje a entregar y deciden cuál va a continuación en el orden total (el acuerdo garantiza mismo orden, la integridad que no se duplican, la validez que no se inventan, la terminación que no se pierden). Los algoritmos de consenso tolerante a fallos más conocidos —Paxos, Raft, Zab, Viewstamped Replication (VSR)— en realidad deciden una secuencia de valores, es decir, implementan total order broadcast directamente (más eficiente que decidir un valor a la vez). Implementar consenso uno mismo es muy difícil; conviene usar servicios existentes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-08",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Para qué se usan los servicios de coordinación como Apache ZooKeeper y etcd?",
    options: [
      "Implementan operaciones linearizables (vía consenso) para coordinar: elección de líder, locks con fencing tokens, detección de fallos y metadatos",
      "Son bases de datos analíticas de tipo columnar pensadas para almacenar y consultar petabytes de datos históricos, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "Son motores de búsqueda de texto completo, optimizados para indexar y consultar grandes volúmenes de documentos",
      "Son sistemas de archivos distribuidos pensados para almacenar grandes archivos de video y otros datos binarios",
    ],
    correct:
      "Implementan operaciones linearizables (vía consenso) para coordinar: elección de líder, locks con fencing tokens, detección de fallos y metadatos",
    explanation:
      "ZooKeeper y etcd son servicios de coordinación que usan algoritmos de consenso para ofrecer operaciones linearizables de forma tolerante a fallos. Se usan para: elección de líder (evitar split brain), locks distribuidos (a menudo con fencing tokens como el zxid), detección de membresía/fallos de nodos, y guardar metadatos de cluster (configuración, asignación de particiones a nodos). Manejan pequeñas cantidades de datos que cambian lentamente, no datos de aplicación. Librerías como Apache Curator dan 'recetas' de alto nivel sobre ZooKeeper.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  // ---- cap. 10 — Batch Processing ----
  {
    id: "ddia-c10-01",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann distingue tres tipos de sistemas según cómo procesan datos. ¿Cuál describe un sistema de procesamiento por lotes (batch) y su métrica principal?",
    options: [
      "Toma un gran dataset, corre un job y produce una salida (minutos a días, sin usuario esperando); su métrica es el throughput",
      "Espera la petición de un cliente y responde lo más rápido posible; su métrica principal es el response time y la disponibilidad",
      "Opera sobre los eventos poco después de que ocurren, con baja latencia; es un sistema de tipo 'near-real-time' (nearline)",
      "Procesa cada registro de forma interactiva con un usuario esperando, optimizando la latencia de cada una de las peticiones",
    ],
    correct:
      "Toma un gran dataset, corre un job y produce una salida (minutos a días, sin usuario esperando); su métrica es el throughput",
    explanation:
      "El libro distingue: (1) servicios (sistemas online) que esperan una petición y responden rápido, midiéndose por response time y disponibilidad; (2) sistemas batch (offline) que toman un gran dataset de entrada, corren un job (minutos a días) y producen una salida, normalmente programados periódicamente y sin un usuario esperando, cuya métrica principal es el throughput; y (3) stream processing (near-real-time), a medio camino, que opera sobre eventos poco después de que ocurren. El cap. 10 trata el batch; el cap. 11, el streaming.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-02",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Kleppmann, ¿qué hace que las herramientas de Unix (awk, sort, uniq, grep…) se compongan tan bien en pipelines de procesamiento de datos?",
    options: [
      "Una interfaz uniforme (todo es un archivo, una secuencia de bytes) y separar lógica de cableado (stdin/stdout); además entrada inmutable",
      "Que todas las herramientas comparten una misma base de datos central que tiene un esquema estricto y bien definido",
      "Que cada una de las herramientas abre directamente sus propios archivos y conexiones de red, acoplándose fuertemente entre sí",
      "Que todas las herramientas reescriben el archivo de entrada in-place para así poder ahorrar la memoria del sistema",
    ],
    correct:
      "Una interfaz uniforme (todo es un archivo, una secuencia de bytes) y separar lógica de cableado (stdin/stdout); además entrada inmutable",
    explanation:
      "La 'filosofía Unix' (hacer una cosa bien, esperar que la salida de un programa sea la entrada de otro) se apoya en dos ideas: (1) una interfaz uniforme —en Unix todo es un archivo, es decir una secuencia de bytes, y por convención muchas herramientas la tratan como texto ASCII separado por saltos de línea—, lo que permite conectar la salida de cualquier programa con la entrada de otro; y (2) la separación de lógica y cableado: los programas usan stdin/stdout y no saben (ni les importa) de dónde viene su entrada ni a dónde va su salida, así el usuario los conecta con pipes. Además la entrada se trata como inmutable, lo que facilita experimentar y depurar. Estas ideas se trasladan a MapReduce.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-03",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Para contar las URLs más visitadas en un log enorme, ¿qué ventaja tiene la cadena Unix `sort | uniq -c` frente a un script que mantiene una tabla hash en memoria?",
    options: [
      "Cuando el working set no cabe en RAM, sort derrama a disco y mezcla segmentos ordenados (mergesort secuencial) y paraleliza entre CPUs",
      "La tabla hash en memoria siempre resulta ser más lenta que el sort, porque su complejidad es del orden de O(n²)",
      "El comando sort carga el archivo de entrada entero dentro de la memoria de una sola vez, y por eso es más rápido",
      "No hay ninguna diferencia entre ambos enfoques: los dos exigen que el dataset completo quepa por entero en la RAM",
    ],
    correct:
      "Cuando el working set no cabe en RAM, sort derrama a disco y mezcla segmentos ordenados (mergesort secuencial) y paraleliza entre CPUs",
    explanation:
      "El script en memoria mantiene una tabla hash URL→contador: funciona bien si el working set (las claves distintas) cabe en RAM. Si no cabe, el enfoque por ordenamiento tiene ventaja: `sort` de GNU Coreutils derrama automáticamente a disco cuando el dataset supera la memoria y paraleliza entre varios cores. Es el mismo principio de las SSTables/LSM-trees: ordenar trozos en memoria, escribirlos como segmentos y mezclarlos; el mergesort tiene acceso secuencial, óptimo en disco. Así la simple cadena Unix escala a datasets grandes sin quedarse sin memoria.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-04",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿En qué se basa HDFS (el filesystem distribuido de Hadoop) y qué principio de eficiencia aprovecha MapReduce al correr sobre él?",
    options: [
      "Shared-nothing: un daemon por máquina y un NameNode central; los bloques se replican. MapReduce corre cada mapper junto a su dato (locality)",
      "En almacenamiento compartido (shared-disk) con hardware especializado tipo SAN; y MapReduce siempre copia todos los datos por la red",
      "En una única máquina muy potente que guarda por completo todo el dataset dentro de sus propios discos locales internos",
      "En la memoria RAM replicada entre todos los nodos del clúster, sin llegar a usar nunca los discos locales de las máquinas",
    ],
    correct:
      "Shared-nothing: un daemon por máquina y un NameNode central; los bloques se replican. MapReduce corre cada mapper junto a su dato (locality)",
    explanation:
      "HDFS se basa en el principio shared-nothing (frente al shared-disk de un NAS/SAN con hardware especializado): solo requiere máquinas comunes conectadas por una red de datacenter. Un daemon en cada máquina expone sus discos por red y un servidor central, el NameNode, registra qué bloques de archivo están en qué máquina, creando conceptualmente un gran filesystem sobre los discos de todas. Para tolerar fallos, los bloques se replican en varias máquinas (o se usan erasure codes tipo Reed–Solomon, con menos overhead). MapReduce aprovecha la localidad: el scheduler intenta correr cada mapper en una máquina que ya tiene una réplica de su bloque de entrada ('computation near the data'), ahorrando tráfico de red.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-05",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es el patrón de ejecución de un job MapReduce y qué papel juega el ordenamiento (sort)?",
    options: [
      "Leer y partir en registros; el mapper extrae clave-valor; el framework ORDENA por clave; el reducer combina los de la misma clave (sort implícito)",
      "El mapper es el que ordena los datos y el reducer los lee sin ningún orden; tú tienes que implementar el sort a mano, de acuerdo con las best practices habituales en plataformas de datos",
      "El mapper y el reducer corren en paralelo sobre el mismo registro a la vez, sin que haya ningún orden de por medio",
      "El reducer se ejecuta siempre antes que el mapper, para así poder ir preparando las claves de los datos de entrada",
    ],
    correct:
      "Leer y partir en registros; el mapper extrae clave-valor; el framework ORDENA por clave; el reducer combina los de la misma clave (sort implícito)",
    explanation:
      "El patrón MapReduce replica el ejemplo del análisis de logs: (1) el input format parser parte los archivos en registros; (2) el mapper se llama una vez por registro y extrae un par clave-valor (sin guardar estado entre registros); (3) el framework ordena todos los pares por clave —este paso es implícito, no lo escribes—; (4) el reducer recibe cada clave con un iterador sobre todos sus valores y produce la salida. El número de map tasks lo fija el número de bloques de entrada; el de reduce tasks lo configura el autor. Solo programas mapper y reducer.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-06",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: en MapReduce, el proceso de particionar la salida de los mappers por reducer (según el hash de la clave), ordenarla y copiarla desde los mappers hacia los reducers se llama el ________.",
    accept: ["shuffle", "el shuffle"],
    answerDisplay: "Shuffle",
    explanation:
      "El 'shuffle' es el proceso de particionar la salida de cada mapper por reducer (usando el hash de la clave para decidir qué reduce task recibe cada par), ordenarla y copiarla de los mappers a los reducers. Cada map task escribe en su disco local archivos ya ordenados por partición (técnica similar a las SSTables); cuando termina, el scheduler avisa a los reducers para que descarguen su partición de cada mapper y la mezclen preservando el orden. Es un término confuso: a diferencia de barajar un mazo de cartas, aquí no hay aleatoriedad alguna.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-07",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "En un 'reduce-side sort-merge join' (p. ej. unir eventos de actividad con el perfil de cada usuario por user ID), ¿cómo logra MapReduce juntar los registros relacionados?",
    options: [
      "Los mappers emiten el user ID como clave; al ordenar, eventos y perfil quedan adyacentes en el reducer (secondary sort); sin pedir nada por red",
      "El reducer consulta la base de datos remota de usuarios por la red para cada uno de los eventos, uno a uno por separado, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "Se cargan ambas entradas completas en la memoria del nodo coordinador del job y se cruzan ahí, sin usar los reducers",
      "Se ordenan los registros por el timestamp del reloj de pared de cada uno, en lugar de ordenarlos por su clave de join",
    ],
    correct:
      "Los mappers emiten el user ID como clave; al ordenar, eventos y perfil quedan adyacentes en el reducer (secondary sort); sin pedir nada por red",
    explanation:
      "Consultar la BD remota por cada evento sería lentísimo (limitado por el round-trip) y no determinista. En su lugar se copia la BD de usuarios al mismo filesystem distribuido y se hace un sort-merge join: un set de mappers recorre los eventos (clave = user ID, valor = evento) y otro recorre la BD (clave = user ID, valor = perfil). Al particionar y ordenar por clave, todos los registros del mismo user ID quedan adyacentes en el reducer; con un 'secondary sort' se ordena para que el perfil llegue primero. El reducer guarda el perfil en una variable local y recorre los eventos, sin pedir nada por red. Es la idea de 'juntar los datos relacionados en el mismo lugar': los mappers 'envían mensajes' a los reducers, y la clave actúa como dirección de destino.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-08",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Al hacer un join o GROUP BY en MapReduce, ¿qué problema causan las 'hot keys' (o 'linchpin objects', p. ej. una celebridad con millones de seguidores) y cómo se mitiga?",
    options: [
      "Concentran demasiados registros en un solo reducer (skew); el job espera al más lento. Se mitiga repartiendo la clave caliente entre varios reducers",
      "Hacen que el reducer devuelva resultados incorrectos para esa clave; y el problema se corrige cifrando la clave caliente, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
      "Saturan por completo la memoria del NameNode del clúster; y el problema se mitiga simplemente añadiendo más NameNodes",
      "No suponen ningún problema, porque MapReduce siempre reparte todas las claves entre los reducers de forma equitativa",
    ],
    correct:
      "Concentran demasiados registros en un solo reducer (skew); el job espera al más lento. Se mitiga repartiendo la clave caliente entre varios reducers",
    explanation:
      "El patrón 'llevar todos los registros de una clave al mismo reducer' se rompe si una clave acumula muchísimos datos (hot key / linchpin object, como una celebridad). Eso causa skew (hot spots): un reducer procesa muchos más registros que los demás, y como el job solo termina cuando acaban TODOS sus reducers, ese straggler retrasa todo el workflow (y los jobs siguientes). Mitigaciones: el 'skewed join' de Pig corre primero un job de muestreo para detectar las claves calientes y, en el join real, envía sus registros a varios reducers elegidos al azar (replicando el otro lado del join a todos esos reducers); el 'sharded join' de Crunch es similar pero con las claves calientes especificadas a mano; Hive las guarda en archivos aparte y usa un map-side join para ellas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-09",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "multi",
    prompt: "Los 'map-side joins' evitan el ordenamiento y los reducers, pero exigen supuestos sobre las entradas. ¿Cuáles de las siguientes son variantes válidas de map-side join descritas por Kleppmann?",
    options: [
      "Broadcast hash join: una entrada es lo bastante pequeña para cargarse entera en una tabla hash en memoria de cada mapper, que escanea la entrada grande consultándola",
      "Partitioned hash join (bucketed map join en Hive): ambas entradas están particionadas igual (misma clave, misma función hash, mismo nº de particiones), así cada mapper une una sola partición de cada lado",
      "Map-side merge join: ambas entradas están particionadas Y ordenadas por la misma clave, así el mapper las mezcla incrementalmente como haría un reducer",
      "Reduce-side broadcast join: el reducer difunde la entrada grande a todos los mappers antes de empezar",
      "Timestamp join: los registros se unen por la hora del reloj de pared en que llegaron",
    ],
    correctSet: [
      "Broadcast hash join: una entrada es lo bastante pequeña para cargarse entera en una tabla hash en memoria de cada mapper, que escanea la entrada grande consultándola",
      "Partitioned hash join (bucketed map join en Hive): ambas entradas están particionadas igual (misma clave, misma función hash, mismo nº de particiones), así cada mapper une una sola partición de cada lado",
      "Map-side merge join: ambas entradas están particionadas Y ordenadas por la misma clave, así el mapper las mezcla incrementalmente como haría un reducer",
    ],
    explanation:
      "Un map-side join usa un job recortado: sin reducers ni sort, cada mapper lee un bloque de entrada y escribe un archivo de salida. Variantes: (1) broadcast hash join —la entrada pequeña cabe en memoria, así que cada mapper la carga en una tabla hash y escanea la entrada grande consultándola (soportado como 'replicated join' en Pig, 'MapJoin' en Hive)—; (2) partitioned/bucketed hash join —ambas entradas están particionadas igual (misma clave, hash y nº de particiones), así cada mapper carga solo su partición—; (3) map-side merge join —ambas además ordenadas por la clave, así el mapper las mezcla incrementalmente como un reducer—. La salida de un map-side join queda particionada/ordenada como la entrada grande (no por la clave del join). Las otras dos opciones no existen.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-10",
    topic: "orquestacion",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Como un solo job MapReduce resuelve problemas limitados, es común encadenar muchos jobs en 'workflows'. ¿Cómo se encadenan y qué herramientas los gestionan?",
    options: [
      "La salida de un job va a un directorio de HDFS que el siguiente lee; un job arranca cuando los suyos terminan. Schedulers: Oozie, Airflow, Luigi",
      "Los distintos jobs se comunican entre sí por la memoria compartida, sin tener que tocar el disco, igual que las pipes de Unix",
      "Un único job se encarga de hacer absolutamente todo el trabajo, por lo que nunca se llegan a encadenar varios jobs",
      "El NameNode del clúster decide de forma automática el orden de ejecución de los jobs, sin necesidad de configurar nada",
    ],
    correct:
      "La salida de un job va a un directorio de HDFS que el siguiente lee; un job arranca cuando los suyos terminan. Schedulers: Oozie, Airflow, Luigi",
    explanation:
      "Un solo job MapReduce puede, por ejemplo, contar vistas por URL, pero no las URLs más populares (eso exige un segundo sort). Por eso los jobs se encadenan en workflows: el primer job escribe su salida en un directorio designado de HDFS y el segundo se configura para leer ese mismo directorio. El framework no tiene soporte explícito de workflows: el encadenamiento es implícito por nombre de directorio. Como la salida de un job solo es válida si completó con éxito (MapReduce descarta la salida de jobs fallidos), un job solo arranca cuando los que producen su entrada terminaron bien. Para manejar estas dependencias (y workflows de 50–100 jobs en sistemas de recomendación) se usan schedulers como Oozie, Azkaban, Luigi, Airflow y Pinball, además de herramientas de más alto nivel como Pig y Hive.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-11",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Si un job batch debe producir una base de datos para que la consulte una app web (p. ej. 'productos relacionados'), ¿por qué es mala idea que los mappers/reducers escriban directamente en la BD de producción, registro a registro, y qué se hace en su lugar?",
    options: [
      "Una petición de red por registro es lentísima, satura la BD y rompe el 'todo o nada'. Mejor: archivos inmutables cargados en bloque (Voldemort)",
      "No pasa absolutamente nada: escribir registro a registro en la base de datos de producción es la práctica recomendada por el libro",
      "Hay que escribir directamente a la base de datos de producción, pero hacerlo sin ningún índice para así poder ir más rápido",
      "Se debe escribir a la base de datos desde el NameNode del clúster, para así poder centralizar todas las escrituras en un punto",
    ],
    correct:
      "Una petición de red por registro es lentísima, satura la BD y rompe el 'todo o nada'. Mejor: archivos inmutables cargados en bloque (Voldemort)",
    explanation:
      "Escribir desde el job a la BD de producción registro a registro es mala idea: (1) una petición de red por registro es órdenes de magnitud más lenta que el throughput de un batch; (2) muchas tareas paralelas pueden saturar la BD y degradar sus consultas; (3) rompe la limpia semántica 'todo o nada' de MapReduce, exponiendo efectos secundarios de tareas parcialmente completadas o reintentadas (speculative execution). Mejor: construir una BD nueva como archivos inmutables dentro del directorio de salida del job (como los índices de búsqueda) y cargarlos en bloque en servidores de solo lectura. Voldemort, Terrapin, ElephantDB y el bulk loading de HBase hacen esto; Voldemort sigue sirviendo los archivos viejos mientras copia los nuevos y luego cambia atómicamente, pudiendo revertir si algo falla.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-12",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué ventajas operativas se derivan de que un job batch trate su entrada como inmutable y no produzca efectos secundarios (solo su salida)?",
    options: [
      "Si un bug corrompe la salida, basta revertir el código y reejecutar (human fault tolerance); los reintentos son seguros y el input alimenta varios jobs",
      "Que la salida del job se escribe in-place directamente sobre la entrada del job, lo que ahorra mucho espacio en el disco",
      "Que no hace falta tener ningún esquema ni hacer ninguna validación de los datos, porque ya nada puede llegar a salir mal nunca, de acuerdo con las best practices habituales en plataformas de datos",
      "Que cada uno de los jobs batch del workflow debe escribir directamente en la base de datos de producción para poder ser útil",
    ],
    correct:
      "Si un bug corrompe la salida, basta revertir el código y reejecutar (human fault tolerance); los reintentos son seguros y el input alimenta varios jobs",
    explanation:
      "Tratar la entrada como inmutable y evitar efectos secundarios (como escribir a BD externas) da mantenibilidad: (1) si introduces un bug y la salida sale mal, basta revertir el código y reejecutar, o conservar la salida anterior en otro directorio y volver a ella —algo imposible en una BD con transacciones read-write, donde revertir el código no deshace los datos malos escritos: es la 'human fault tolerance'—; (2) minimizar la irreversibilidad acelera el desarrollo (afín a Agile); (3) los reintentos automáticos de tareas son seguros precisamente porque la entrada es inmutable y la salida de tareas fallidas se descarta; (4) los mismos archivos sirven de entrada a varios jobs, incluidos jobs de monitoreo. Separar lógica de cableado permite además reutilizar código entre equipos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-13",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es una diferencia clave entre el enfoque de Hadoop (HDFS + MapReduce) y una base de datos MPP analítica, según Kleppmann?",
    options: [
      "Hadoop vuelca datos crudos en HDFS y los interpreta después (schema-on-read, data lake); una MPP exige modelar por adelantado (schema-on-write)",
      "Hadoop exige modelar todos los datos por adelantado, mientras que una base de datos MPP acepta cualquier formato de datos crudos",
      "Hadoop solo es capaz de ejecutar consultas SQL, mientras que una base de datos MPP solo puede ejecutar código arbitrario del usuario",
      "Hadoop y una base de datos MPP son del todo idénticos entre sí, salvo por el nombre comercial y el proveedor que los ofrece",
    ],
    correct:
      "Hadoop vuelca datos crudos en HDFS y los interpreta después (schema-on-read, data lake); una MPP exige modelar por adelantado (schema-on-write)",
    explanation:
      "Aunque MapReduce reimplementó algoritmos de join paralelo ya presentes en las bases MPP (Teradata, Gamma…), difiere en dos ejes. Diversidad de almacenamiento: en HDFS los archivos son secuencias de bytes en cualquier modelo/formato, así que puedes volcar datos crudos y decidir luego cómo procesarlos (schema-on-read), lo que acelera la recolección centralizada de datos ('data lake', 'sushi principle: raw data is better') y traslada la interpretación al consumidor; una MPP exige modelado y schema-on-write por adelantado. Diversidad de procesamiento: una MPP es un sistema monolítico optimizado para SQL, mientras que sobre HDFS puedes correr código arbitrario (machine learning, indexación, análisis de imágenes), no solo consultas SQL.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-14",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué MapReduce está diseñado para tolerar la terminación frecuente de tareas y escribe tan a menudo a disco, si los fallos de hardware no son tan habituales?",
    options: [
      "Se diseñó para datacenters de uso mixto (Google), donde los jobs batch de baja prioridad pueden ser preemptados (~5%/hora) en cualquier momento",
      "Porque el hardware de los clústeres es extremadamente poco fiable y, por ello, llega a fallar cada pocos minutos de operación",
      "Porque escribir los datos al disco siempre resulta ser bastante más rápido que mantenerlos dentro de la memoria del sistema",
      "Porque las bases de datos MPP no toleran ningún tipo de fallo y MapReduce simplemente se limita a copiar ese mismo diseño suyo",
    ],
    correct:
      "Se diseñó para datacenters de uso mixto (Google), donde los jobs batch de baja prioridad pueden ser preemptados (~5%/hora) en cualquier momento",
    explanation:
      "Frente a una BD MPP —que si un nodo cae aborta toda la query y la reintenta, y prefiere mantener datos en memoria— MapReduce tolera el fallo de una tarea reintentándola a nivel individual y es muy proclive a escribir a disco. La razón no es hardware poco fiable: MapReduce se diseñó para los datacenters de uso mixto de Google, donde servicios online de alta prioridad y jobs batch de baja prioridad comparten máquinas. Un proceso de mayor prioridad puede 'preemptar' (terminar) a uno batch para reclamar recursos; una tarea de una hora tiene ~5% de probabilidad de ser terminada así, más de un orden de magnitud por encima de los fallos de hardware. Tolerar esas terminaciones frecuentes (recuperación por tarea + materialización a disco) permite sobrecomprometer recursos y mejorar la utilización del cluster.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-15",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Encadenar varios jobs MapReduce 'materializa' el estado intermedio (lo escribe completo a HDFS entre job y job). ¿Qué desventajas tiene esto frente a las tuberías (pipes) de Unix?",
    options: [
      "Un job espera a que TODAS las tareas anteriores terminen (los stragglers retrasan), hay mappers redundantes y replicar el estado temporal sobra",
      "No tiene ninguna desventaja: materializar por completo todo el estado intermedio a HDFS entre los jobs es siempre lo óptimo de todo",
      "Que se pierden los datos del estado intermedio, porque al materializarlos a HDFS no se llegan a replicar en varios nodos del clúster",
      "Que obliga a tener que usar un único job gigantesco que resulta del todo imposible de depurar cuando algo va mal en él",
    ],
    correct:
      "Un job espera a que TODAS las tareas anteriores terminen (los stragglers retrasan), hay mappers redundantes y replicar el estado temporal sobra",
    explanation:
      "Cuando la salida de un job solo alimenta a otro del mismo equipo, los archivos en HDFS son mero 'estado intermedio': escribirlos completos es 'materialización'. Frente a las pipes de Unix (que transmiten incrementalmente con un pequeño buffer en memoria), materializar tiene tres desventajas: (1) un job solo arranca cuando TODAS las tareas del anterior terminaron, así que los 'stragglers' (tareas lentas por skew o carga) retrasan todo el workflow; (2) muchos mappers son redundantes, pues solo releen lo que un reducer acaba de escribir para reparticionarlo/ordenarlo; (3) replicar ese estado temporal en varios nodos del filesystem distribuido es excesivo. Estos problemas motivaron los motores de dataflow.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-16",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Los motores de dataflow (Spark, Tez, Flink) mejoran a MapReduce. ¿Qué los caracteriza y cómo toleran fallos sin escribir todo el estado intermedio a HDFS?",
    options: [
      "Manejan todo el workflow como UN job de operadores (mantienen estado en memoria/disco local); ante fallos lo RECOMPUTAN del linaje (RDDs, checkpoints)",
      "Son exactamente lo mismo que MapReduce pero con otro nombre, y también materializan por completo todo el estado intermedio a HDFS",
      "No toleran ningún tipo de fallo: si uno de los nodos del clúster llega a caerse, hay que reiniciar por completo todo el clúster entero",
      "Replican cada uno de los registros del estado intermedio a tres NameNodes distintos del clúster para así no llegar a perder nada",
    ],
    correct:
      "Manejan todo el workflow como UN job de operadores (mantienen estado en memoria/disco local); ante fallos lo RECOMPUTAN del linaje (RDDs, checkpoints)",
    explanation:
      "Spark, Tez y Flink modelan explícitamente el flujo de datos por varias etapas como un solo job: en vez de map/reduce alternados rígidos, encadenan 'operadores' de forma flexible. Ventajas: ordenar solo donde haga falta, eliminar mappers redundantes, optimizar localidad, reutilizar JVMs y mantener el estado intermedio en memoria o disco local (menos I/O que replicarlo a HDFS), pudiendo ejecutar de forma 'pipelined'. Para tolerar fallos no materializan todo: si se pierde estado intermedio, lo recomputan a partir del registro de cómo se calculó —Spark usa el linaje de los RDD (resilient distributed datasets); Flink hace checkpoints del estado de los operadores—. Como la recomputación puede enviar datos a operadores aguas abajo, los operadores deben ser deterministas (si no, hay que matar y reejecutar también los de aguas abajo). Entrada inmutable y salida final siguen yendo a HDFS.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-17",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para procesar grafos enteros en batch (p. ej. PageRank), el modelo Pregel / 'bulk synchronous parallel' (BSP) es popular porque MapReduce no maneja bien los algoritmos iterativos. ¿Cómo funciona Pregel?",
    options: [
      "Se 'piensa como un vértice': cada iteración llama a una función por vértice con los mensajes recibidos; el vértice recuerda su estado entre iteraciones",
      "Relee el grafo entero y reescribe toda la salida en cada una de las iteraciones, exactamente igual que lo hace MapReduce, y conviene tenerlo en cuenta al diseñar y operar la plataforma de datos",
      "Ejecuta una única pasada sobre el grafo sin llegar a iterar nunca, exactamente igual que lo hace una sola tarea mapper",
      "Ordena todos los vértices del grafo por el timestamp del reloj de pared de cada uno y los procesa siguiendo ese orden",
    ],
    correct:
      "Se 'piensa como un vértice': cada iteración llama a una función por vértice con los mensajes recibidos; el vértice recuerda su estado entre iteraciones",
    explanation:
      "Muchos algoritmos de grafos avanzan recorriendo una arista a la vez y repitiendo hasta converger (transitive closure, PageRank). Eso no se expresa bien en MapReduce, que hace una sola pasada y relee todo el dataset por iteración aunque casi nada cambie. El modelo Pregel/BSP (Giraph, GraphX, Gelly) lo optimiza con el lema 'pensar como un vértice': en cada iteración una función se llama por cada vértice y recibe los mensajes que le mandaron otros vértices (típicamente por las aristas, como un mapper 'enviando un mensaje' a un reducer); a diferencia de MapReduce, el vértice recuerda su estado en memoria entre iteraciones, así que solo procesa mensajes nuevos, y si una zona del grafo no recibe mensajes no hace trabajo. Es similar al modelo de actores, pero con estado y mensajes durables y rondas fijas. La tolerancia a fallos se logra con checkpoints periódicos del estado de los vértices.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-18",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: la característica que distingue a un job batch es que su entrada está ________ (tiene un tamaño conocido y fijo), por lo que el job sabe cuándo terminó de leerla y eventualmente acaba — a diferencia de los streams del cap. 11, cuya entrada es 'unbounded' (nunca termina).",
    accept: ["acotada", "bounded", "limitada", "acotado"],
    answerDisplay: "Acotada (bounded)",
    explanation:
      "El rasgo distintivo de un job batch es que lee una entrada y produce una salida derivada de ella, sin modificar la entrada, y crucialmente esa entrada está 'bounded' (acotada): tiene un tamaño conocido y fijo —por ejemplo, un conjunto de logs en cierto instante o un snapshot de una BD—. Al ser acotada, el job sabe cuándo terminó de leer todo y por tanto eventualmente completa. En el cap. 11 (stream processing) la entrada es 'unbounded' (no acotada): flujos interminables de datos, así que el job nunca 'termina' porque siempre puede llegar más trabajo. Ese cambio de supuesto altera mucho cómo se construyen los sistemas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  // ---- cap. 11 — Stream Processing ----
  {
    id: "ddia-c11-01",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un sistema de mensajería, ¿qué tres opciones hay si los productores envían mensajes más rápido de lo que los consumidores pueden procesar, y qué hacen las pipes de Unix / TCP?",
    options: [
      "Descartar mensajes, encolarlos en un buffer o aplicar backpressure (bloquear al productor); las pipes de Unix y TCP usan backpressure con buffer fijo",
      "Solo se pueden descartar los mensajes que sobran: en este escenario no existe ninguna otra opción posible para el sistema",
      "En todos los sistemas se aplica siempre backpressure y, por tanto, nunca se llega a encolar ningún mensaje en ningún buffer, a lo largo de todo el ciclo de vida de la ingeniería de datos",
      "Los mensajes que sobran se duplican entre varios consumidores para así poder llegar a procesarlos de una forma más rápida",
    ],
    correct:
      "Descartar mensajes, encolarlos en un buffer o aplicar backpressure (bloquear al productor); las pipes de Unix y TCP usan backpressure con buffer fijo",
    explanation:
      "Cuando los productores superan a los consumidores hay tres estrategias: (1) descartar mensajes (aceptable para métricas/sensores periódicos donde un dato perdido no es grave, pero malo si cuentas eventos); (2) encolar en un buffer (¿qué pasa cuando la cola crece? ¿se derrama a disco y cómo afecta al rendimiento?); o (3) aplicar backpressure / flow control, bloqueando al productor. Las pipes de Unix y TCP usan backpressure con un buffer pequeño de tamaño fijo: si se llena, el emisor se bloquea hasta que el receptor saque datos. Qué estrategia conviene depende de si la aplicación tolera perder mensajes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-02",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Cuando varios consumidores leen del mismo topic en un message broker, ¿qué distingue los patrones 'load balancing' y 'fan-out'?",
    options: [
      "Load balancing: cada mensaje va a UNO de los consumidores (reparten el trabajo); fan-out: cada mensaje va a TODOS; se pueden combinar",
      "El load balancing entrega cada uno de los mensajes a todos los consumidores y el fan-out lo entrega solo a uno de ellos",
      "Ambos patrones entregan cada uno de los mensajes a un único consumidor que se elige completamente al azar entre todos",
      "El patrón fan-out elimina los mensajes tras entregarlos y el patrón load balancing en cambio los conserva en el broker",
    ],
    correct:
      "Load balancing: cada mensaje va a UNO de los consumidores (reparten el trabajo); fan-out: cada mensaje va a TODOS; se pueden combinar",
    explanation:
      "Con varios consumidores en un topic hay dos patrones: (1) load balancing —cada mensaje va a uno solo de los consumidores, que así reparten la carga; útil cuando procesar un mensaje es costoso y quieres paralelizar (en AMQP, varios clientes en la misma cola; en JMS, 'shared subscription')—; y (2) fan-out —cada mensaje se entrega a todos los consumidores, permitiendo que varios sistemas independientes 'sintonicen' el mismo flujo sin afectarse, el equivalente streaming de varios jobs batch que leen el mismo archivo (subscripciones a topic en JMS, exchange bindings en AMQP)—. Se pueden combinar: dos grupos de consumidores, cada grupo recibe todo, pero dentro de cada grupo se balancea.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-03",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "En un broker tipo JMS/AMQP, ¿por qué la combinación de 'load balancing' con 'acknowledgments y redelivery' puede reordenar los mensajes?",
    options: [
      "El consumidor confirma (ack) cada mensaje; si se desconecta sin confirmar, el broker lo reentrega a OTRO consumidor, alterando el orden",
      "Porque el broker ordena todos los mensajes según el timestamp del reloj de pared de cada uno de los consumidores del topic",
      "Porque los mensajes del broker se entregan siempre en un orden totalmente aleatorio por el propio diseño del sistema de colas",
      "Porque la operación de ack (confirmación) borra del broker todos los mensajes anteriores al que se acaba de confirmar",
    ],
    correct:
      "El consumidor confirma (ack) cada mensaje; si se desconecta sin confirmar, el broker lo reentrega a OTRO consumidor, alterando el orden",
    explanation:
      "Para no perder mensajes si un consumidor cae, los brokers usan acknowledgments: el cliente avisa explícitamente al terminar de procesar un mensaje y entonces el broker lo quita de la cola. Si la conexión se cierra o expira sin ack, el broker asume que no se procesó y lo reentrega a otro consumidor. Combinado con load balancing, esto reordena: si el consumidor 2 cae procesando m3 mientras el 1 procesa m4, m3 se reentrega luego al consumidor 1, que procesa m4, m3, m5 — distinto del orden de envío. Aunque el broker intente preservar el orden (como exigen JMS y AMQP), load balancing + redelivery lo rompe. Solución: una cola por consumidor. Solo importa si hay dependencias causales entre mensajes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-04",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuándo conviene un message broker basado en log (Kafka, Kinesis) frente a uno tradicional tipo JMS/AMQP (RabbitMQ, ActiveMQ)?",
    options: [
      "Log-based (orden por partición, retención, replay): ideal con alto throughput y orden importante (límite: head-of-line blocking); JMS/AMQP: mejor si procesar es caro",
      "El broker log-based solo sirve para colas de tareas y el broker JMS solo sirve para el análisis en tiempo real",
      "Ambos tipos de broker son idénticos entre sí: la elección no afecta ni al rendimiento ni al orden de los mensajes",
      "El JMS/AMQP retiene los mensajes en disco para poder reprocesarlos y el log-based los borra justo al confirmarlos, al menos en la mayoría de las arquitecturas de datos modernas",
    ],
    correct:
      "Log-based (orden por partición, retención, replay): ideal con alto throughput y orden importante (límite: head-of-line blocking); JMS/AMQP: mejor si procesar es caro",
    explanation:
      "Un broker basado en log (Kafka, Kinesis, DistributedLog) almacena los mensajes en un log particionado append-only en disco; soporta fan-out trivial (varios consumidores leen sin borrar) y hace load balancing asignando particiones enteras a nodos de un grupo. Esto da alto throughput y conserva el orden DENTRO de cada partición, pero tiene dos límites: el nº de nodos que comparten el consumo de un topic es como máximo el nº de particiones, y un mensaje lento bloquea los siguientes de su partición (head-of-line blocking). Por eso el log-based brilla con alto throughput, mensajes rápidos y orden importante; el estilo JMS/AMQP (que asigna mensajes individuales y los borra al confirmar) es mejor cuando procesar un mensaje es caro y quieres paralelizar mensaje a mensaje sin importar tanto el orden.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-05",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un broker basado en log, ¿qué es el 'consumer offset' y qué ventaja operativa permite frente a confirmar (ack) cada mensaje individualmente?",
    options: [
      "Basta registrar periódicamente el offset hasta el que un consumidor procesó; el broker no rastrea cada ack y puedes reprocesar el pasado (replay)",
      "El offset cifra cada uno de los mensajes del log para que solo el consumidor correcto sea capaz de llegar a leerlos",
      "El offset es simplemente la cantidad total de memoria RAM que está usando el broker en un momento dado de la operación",
      "El offset obliga al broker a borrar cada mensaje en cuanto se lee, lo que impide por completo poder reprocesar el pasado, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
    ],
    correct:
      "Basta registrar periódicamente el offset hasta el que un consumidor procesó; el broker no rastrea cada ack y puedes reprocesar el pasado (replay)",
    explanation:
      "Al consumir una partición en orden, todos los mensajes con offset menor al actual del consumidor ya se procesaron y los de offset mayor no: por eso el broker solo necesita registrar periódicamente el offset del consumidor, sin rastrear acks individuales (menos overhead, más batching → más throughput). Es análogo al log sequence number de la replicación líder-seguidor: el broker actúa como líder y el consumidor como seguidor; si un consumidor cae, otro retoma desde el último offset guardado (reprocesando quizá algunos mensajes). Y como consumir es solo-lectura (no borra el log), puedes reprocesar: arrancas una copia del consumidor con los offsets de ayer y escribes a otro destino, repitiéndolo con distinto código. Eso acerca el log-based messaging a los procesos batch.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-06",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un broker basado en log que escribe todo a disco, ¿cómo se evita quedarse sin espacio y qué le pasa a un consumidor demasiado lento?",
    options: [
      "El log se divide en segmentos y los viejos se borran (buffer circular); un consumidor cuyo offset apunte a un segmento borrado pierde esos mensajes",
      "El log crece de forma infinita sin llegar a borrar nunca ningún dato, así que ninguno de los consumidores pierde mensajes",
      "Los mensajes se guardan únicamente en la memoria del broker y se pierden todos cuando el broker se llega a reiniciar",
      "El broker bloquea a todos los productores del topic hasta que el consumidor más lento de todos llega a terminar su trabajo, de acuerdo con las best practices habituales en plataformas de datos",
    ],
    correct:
      "El log se divide en segmentos y los viejos se borran (buffer circular); un consumidor cuyo offset apunte a un segmento borrado pierde esos mensajes",
    explanation:
      "Como solo se hace append, el log llenaría el disco; por eso se divide en segmentos y de vez en cuando los viejos se borran o se mueven a archivo. Efectivamente es un buffer circular (ring buffer) de tamaño acotado por el disco que descarta los mensajes más antiguos —pero al estar en disco puede retener días o semanas de historia—. Es una forma de 'buffering' con buffer grande pero fijo. Si un consumidor se atrasa tanto que su offset apunta a un segmento ya borrado, pierde esos mensajes; por eso conviene monitorear cuánto va por detrás del head y alertar. Ventaja clave: un consumidor lento o caído solo se afecta a sí mismo (no perturba a los demás), así que puedes consumir un log de producción para pruebas/depuración sin riesgo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-07",
    topic: "ingesta",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para mantener sincronizados varios sistemas (BD, índice de búsqueda, caché…), una opción es 'dual writes' (la app escribe a cada sistema). ¿Qué dos problemas serios tiene?",
    options: [
      "(1) Race condition: dos escrituras concurrentes llegan en distinto orden a cada sistema, dejándolos inconsistentes; (2) fallo parcial: una tiene éxito y otra falla",
      "Que las escrituras dobles son demasiado lentas, aunque a cambio mantienen siempre todos los sistemas consistentes entre sí, lo que afecta al rendimiento y al coste del procesamiento",
      "Que las escrituras dobles requieren siempre tener un único líder y, justo por esa razón, no llegan a fallar nunca jamás",
      "Que las escrituras dobles solo llegan a funcionar correctamente cuando todos los sistemas son bases de datos relacionales",
    ],
    correct:
      "(1) Race condition: dos escrituras concurrentes llegan en distinto orden a cada sistema, dejándolos inconsistentes; (2) fallo parcial: una tiene éxito y otra falla",
    explanation:
      "Con 'dual writes' la app escribe explícitamente a cada sistema (primero la BD, luego el índice, etc.). Dos problemas graves: (1) race condition —si dos clientes escriben X concurrentemente (A y B), la BD puede quedar en B y el índice en A porque las escrituras se intercalan en distinto orden en cada sistema; quedan inconsistentes para siempre sin ningún error visible, salvo que tengas detección de concurrencia como version vectors—; (2) fallo parcial —una escritura tiene éxito y la otra falla, descuadrando los sistemas; garantizar que ambas tengan éxito o ninguna es el problema del commit atómico, caro de resolver (2PC)—. La raíz es que no hay un único líder que fije el orden. La solución es hacer un sistema el líder y derivar los demás de su log (CDC).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-08",
    topic: "ingesta",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "fill",
    prompt: "Completa: el proceso de observar todos los cambios escritos en una base de datos y extraerlos como un stream (p. ej. parseando el binlog de MySQL con Debezium) para replicarlos a otros sistemas se llama ________ (siglas CDC).",
    accept: ["change data capture", "captura de cambios de datos", "captura de datos de cambio", "cdc", "captura de cambios"],
    answerDisplay: "Change Data Capture (CDC)",
    explanation:
      "Change Data Capture (CDC) observa todos los cambios escritos en una BD y los extrae como un stream, idealmente en cuanto se escriben, para aplicarlos en orden a sistemas derivados (índice de búsqueda, caché, data warehouse), que quedan así sincronizados. En esencia CDC convierte una BD en el líder (de la que se capturan los cambios) y a los demás en seguidores, y un broker basado en log es ideal para transportarlos porque preserva el orden (evita la race condition de los dual writes). Se puede implementar con triggers (frágil, costoso) o, mejor, parseando el log de replicación: Debezium/Maxwell leen el binlog de MySQL, Bottled Water el WAL de PostgreSQL, GoldenGate el de Oracle. Como la replicación, suele ser asíncrona (aplica el replication lag).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-09",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué es la 'log compaction' (compactación de log) y por qué permite reconstruir un sistema derivado sin volver a tomar un snapshot completo de la BD origen?",
    options: [
      "El motor descarta en segundo plano los duplicados de cada clave y conserva solo el último valor (tombstone marca borrados); el offset 0 da una copia completa",
      "Comprime cada uno de los mensajes del log con el algoritmo gzip para así poder ahorrar ancho de banda en la red del clúster",
      "Borra del log absolutamente todos los mensajes en cuanto uno de los consumidores los llega a confirmar mediante su ack",
      "Combina por completo todas las particiones del topic en una sola partición para así garantizar un orden total a nivel global, sobre todo al trabajar con grandes volúmenes de datos",
    ],
    correct:
      "El motor descarta en segundo plano los duplicados de cada clave y conserva solo el último valor (tombstone marca borrados); el offset 0 da una copia completa",
    explanation:
      "Si solo puedes guardar historia limitada del log, cada nuevo sistema derivado exigiría un snapshot. La log compaction lo evita: en segundo plano, el motor busca registros con la misma clave, tira los duplicados y conserva solo la última actualización de cada clave (un valor especial nulo, 'tombstone', marca un borrado y se elimina al compactar). Mientras una clave no se sobrescriba/borre, permanece para siempre; el espacio depende del contenido actual de la BD, no del número de escrituras. Aplicado a CDC (cada cambio con su primary key), basta arrancar un consumidor desde el offset 0 del topic compactado para obtener el valor más reciente de cada clave: una copia completa de la BD sin tomar otro snapshot. Kafka soporta log compaction.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-10",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿En qué se diferencia el 'event sourcing' del 'change data capture' (CDC)?",
    options: [
      "Nivel de abstracción: CDC usa la BD mutable y extrae cambios a bajo nivel; event sourcing construye la lógica sobre eventos inmutables de dominio",
      "Son exactamente lo mismo entre sí: lo único que cambia entre los dos enfoques es el nombre que recibe cada uno de ellos, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
      "El event sourcing parsea el binlog de la base de datos y, en cambio, el CDC guarda eventos de negocio de alto nivel",
      "El change data capture (CDC) prohíbe por completo los borrados de datos y el event sourcing en cambio los fomenta",
    ],
    correct:
      "Nivel de abstracción: CDC usa la BD mutable y extrae cambios a bajo nivel; event sourcing construye la lógica sobre eventos inmutables de dominio",
    explanation:
      "Ambos guardan los cambios como un log de eventos, pero a distinto nivel. En CDC la aplicación trata la BD de forma mutable (actualiza y borra a voluntad) y el log de cambios se extrae a bajo nivel (p. ej. parseando el replication log), capturando cambios de estado; la app ni se entera de que hay CDC. En event sourcing la lógica se construye explícitamente sobre eventos inmutables que reflejan acciones del usuario a nivel de dominio ('el alumno canceló su matrícula', no 'se borró una fila de enrollments'); el event store es append-only y update/delete se desaconsejan o prohíben. Event sourcing es potente para modelar: expresa la intención de forma neutral, facilita evolucionar la app y depurar, y permite encadenar nuevos efectos a eventos existentes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-11",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "En event sourcing se distingue entre 'command' y 'event'. ¿Cuál es la diferencia y por qué importa?",
    options: [
      "Un command aún puede fallar (la app lo valida); si pasa, se vuelve un event durable e inmutable; un consumidor no puede rechazar un event ya publicado",
      "El command y el event son sinónimos entre sí: ambos son inmutables desde el primer momento en que se crean en el sistema, lo que afecta al rendimiento y al coste del procesamiento",
      "Un event todavía puede llegar a fallar mientras que un command es siempre un hecho ya consumado e inmutable del todo",
      "Los commands son los que se guardan en el log de eventos y los events en cambio se descartan en cuanto se procesan",
    ],
    correct:
      "Un command aún puede fallar (la app lo valida); si pasa, se vuelve un event durable e inmutable; un consumidor no puede rechazar un event ya publicado",
    explanation:
      "La filosofía de event sourcing separa command y event. Cuando llega una petición del usuario es un command: aún puede fallar, p. ej. por violar una invariante (registrar un username o reservar un asiento ya tomado). La app debe validar primero que puede ejecutar el command; si la validación tiene éxito y se acepta, se convierte en un event, que es durable, inmutable y un 'hecho' (aunque luego se cancele la reserva, sigue siendo cierto que existió). Un consumidor del stream no puede rechazar un event: cuando lo ve ya es parte inmutable del log y otros pueden haberlo visto. Por eso la validación debe ser síncrona ANTES de generar el event (p. ej. con una transacción serializable que valida y publica), o dividir en dos eventos: reserva tentativa y confirmación.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-12",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Kleppmann (citando a Pat Helland) dice 'la verdad es el log; la base de datos es una caché de un subconjunto del log'. ¿Qué idea expresa, y qué es CQRS?",
    options: [
      "El estado mutable es el resultado de un log de eventos inmutables (es su 'integral'); derivar varias vistas de lectura del log es CQRS",
      "Que la base de datos es siempre más fiable que cualquier log y, por tanto, debe ser la única fuente de verdad del sistema",
      "Que hay que borrar por completo el log de eventos en cuanto la base de datos ya tiene calculado el estado actual del sistema",
      "Que CQRS significa cifrar las queries para así poder separar la lectura de la escritura por motivos de seguridad de los datos",
    ],
    correct:
      "El estado mutable es el resultado de un log de eventos inmutables (es su 'integral'); derivar varias vistas de lectura del log es CQRS",
    explanation:
      "Todo estado mutable es el resultado de una secuencia de eventos que lo mutaron (el saldo es la suma de créditos/débitos; los asientos disponibles, el resultado de las reservas). Estado y log de cambios no se contradicen: son dos caras de la misma moneda —el estado es lo que obtienes al 'integrar' el stream de eventos en el tiempo, y el changelog al 'derivar' el estado—. Si consideras el log de eventos inmutables como el sistema de registro y cualquier estado mutable como derivado de él, razonas mejor sobre el flujo de datos ('la verdad es el log; la BD es una caché del log'). Separar la forma de escritura (log append-only) de varias vistas de lectura derivadas es CQRS, y vuelve casi irrelevante el debate normalización/denormalización en las vistas de lectura.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-13",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "multi",
    prompt: "¿Cuáles son ventajas de basar un sistema en un log append-only de eventos inmutables (frente a solo mantener estado mutable)? Selecciona todas las correctas.",
    options: [
      "Auditabilidad: como en la contabilidad de doble entrada, un error no se borra; se añade una transacción compensatoria y queda el rastro completo",
      "Recuperación de bugs: si código defectuoso escribe datos malos, es más fácil diagnosticar y recuperar que si sobrescribió datos destructivamente",
      "Captura más información que el estado actual (p. ej. que un cliente añadió un ítem al carrito y luego lo quitó, útil para analítica)",
      "Permite derivar varias vistas de lectura distintas del mismo log de eventos",
      "Garantiza que los datos nunca habrá que borrarlos, ignorando cualquier regulación de privacidad",
      "Elimina por completo la necesidad de control de concurrencia en cualquier escenario",
    ],
    correctSet: [
      "Auditabilidad: como en la contabilidad de doble entrada, un error no se borra; se añade una transacción compensatoria y queda el rastro completo",
      "Recuperación de bugs: si código defectuoso escribe datos malos, es más fácil diagnosticar y recuperar que si sobrescribió datos destructivamente",
      "Captura más información que el estado actual (p. ej. que un cliente añadió un ítem al carrito y luego lo quitó, útil para analítica)",
      "Permite derivar varias vistas de lectura distintas del mismo log de eventos",
    ],
    explanation:
      "Los eventos inmutables aportan: auditabilidad (los contables llevan siglos usando un ledger append-only: un error no se borra, se compensa con otra transacción y queda el historial); recuperación de bugs (si despliegas código que escribe datos malos, recuperarte es mucho más fácil con un log inmutable que si sobrescribiste destructivamente — la 'human fault tolerance' del cap. 10); más información que el estado actual (saber que un cliente puso un ítem en el carrito y lo quitó se pierde en una BD que borra, pero se conserva en el log, útil para analítica); y poder derivar varias vistas de lectura del mismo log (Druid, Kafka Connect sinks…). NO es cierto que elimine el control de concurrencia en todos los casos ni que exima de borrar datos: la inmutabilidad tiene límites (privacidad/GDPR).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-14",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuáles son las 'limitaciones de la inmutabilidad' al guardar para siempre toda la historia de cambios?",
    options: [
      "Con mucho churn la historia inmutable crece demasiado (compaction/GC crítico); y a veces hay que borrar de verdad por ley (GDPR), lo que es difícil",
      "Ninguna en absoluto: guardar para siempre toda la historia de los cambios no llega a tener nunca ningún tipo de inconveniente",
      "Que la propiedad de inmutabilidad de los datos impide por completo poder hacer cualquier tipo de consulta de lectura sobre ellos",
      "Que el uso de la inmutabilidad obliga a tener que usar exclusivamente bases de datos relacionales, y nunca de ningún otro tipo",
    ],
    correct:
      "Con mucho churn la historia inmutable crece demasiado (compaction/GC crítico); y a veces hay que borrar de verdad por ley (GDPR), lo que es difícil",
    explanation:
      "Mantener la historia inmutable para siempre depende del 'churn' del dataset: cargas que mayormente añaden son fáciles de hacer inmutables, pero con muchos updates/deletes sobre un dataset pequeño la historia puede crecer prohibitivamente, con fragmentación, y el rendimiento de la compaction y el garbage collection se vuelve crítico. Además, a veces hay que borrar datos de verdad por motivos administrativos o legales: regulaciones de privacidad (borrar datos personales tras cerrar una cuenta), protección de datos (quitar información errónea) o contener una fuga. En esos casos no basta con añadir otro evento 'considérese borrado': hay que reescribir la historia (Datomic lo llama 'excision'; Fossil, 'shunning'), y borrar de verdad es difícil porque quedan copias en motores de almacenamiento, filesystems, SSDs y backups inmutables.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-15",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En el 'complex event processing' (CEP), ¿cómo se invierte la relación entre queries y datos respecto a una base de datos normal?",
    options: [
      "En una BD los datos son persistentes y las queries transitorias; en CEP es al revés: las queries se almacenan y los eventos fluyen a través de ellas",
      "El CEP no llega a usar ningún tipo de query: lo único que hace es agregar métricas numéricas sobre los eventos del stream",
      "En el CEP los datos son persistentes y las queries son transitorias, exactamente igual que ocurre en una base de datos normal, lo que afecta al rendimiento y al coste del procesamiento",
      "El CEP guarda para siempre todos los eventos del stream y, además, nunca llega a definir ningún patrón de eventos a buscar",
    ],
    correct:
      "En una BD los datos son persistentes y las queries transitorias; en CEP es al revés: las queries se almacenan y los eventos fluyen a través de ellas",
    explanation:
      "El complex event processing (CEP) busca patrones de eventos en un stream, parecido a como una regex busca patrones de caracteres en un texto; los patrones se describen con un lenguaje declarativo (a menudo tipo SQL) y un motor mantiene una máquina de estados que hace el matching. La clave es que invierte la relación query/datos respecto a una BD: normalmente los datos son persistentes y las queries transitorias (llega una query, busca datos que coincidan y se olvida); en CEP las queries se almacenan a largo plazo y son los eventos los que fluyen continuamente a través de ellas, emitiéndose un 'evento complejo' al detectar una coincidencia. Implementaciones: Esper, IBM InfoSphere Streams, Apama, TIBCO StreamBase; también motores como Samza añaden SQL sobre streams.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-16",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "En 'stream analytics' se usan a veces algoritmos probabilísticos como Bloom filters o HyperLogLog. ¿Por qué, y qué malentendido aclara Kleppmann?",
    options: [
      "Dan resultados aproximados usando mucha menos memoria (Bloom: pertenencia; HyperLogLog: cardinalidad); pero el streaming NO es inherentemente lossy",
      "Porque el procesamiento de streams siempre pierde datos por el camino y, por tanto, nunca llega a poder ser del todo exacto",
      "Porque resultan ser del todo obligatorios: sin esos algoritmos no se puede llegar a calcular ninguna ventana sobre el stream, según la escala del sistema y los requisitos concretos del negocio",
      "Porque cifran cada uno de los eventos del stream para así poder proteger la privacidad de los datos de los usuarios finales",
    ],
    correct:
      "Dan resultados aproximados usando mucha menos memoria (Bloom: pertenencia; HyperLogLog: cardinalidad); pero el streaming NO es inherentemente lossy",
    explanation:
      "El stream analytics se orienta a agregaciones y métricas estadísticas sobre muchos eventos en ventanas de tiempo (tasa de eventos, media móvil, percentiles). Para ahorrar memoria se usan a veces algoritmos probabilísticos: Bloom filters para pertenencia a un conjunto, HyperLogLog para estimar cardinalidad (nº de elementos distintos), y estimadores de percentiles. Dan resultados aproximados con mucha menos memoria que los exactos. El malentendido que Kleppmann corrige: esto NO significa que el stream processing sea inherentemente aproximado o 'lossy' — no hay nada intrínsecamente inexacto en procesar streams; los algoritmos probabilísticos son meramente una optimización, y también puedes computar resultados exactos si lo necesitas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-17",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Un 'stream-stream join' (window join), p. ej. calcular el click-through rate uniendo eventos de búsqueda con eventos de clic por session ID, ¿qué exige del procesador y por qué necesita una ventana?",
    options: [
      "Debe mantener estado: indexar por session ID los eventos recientes y buscar el match en el otro índice; la ventana cubre que el clic tarde o no llegue",
      "Basta con incrustar los datos de la búsqueda dentro del evento de clic; no hace falta mantener ningún estado ni ninguna ventana",
      "Debe ordenar por completo todo el stream infinito antes de poder unir, exactamente igual que un sort-merge join de tipo batch",
      "Solo une aquellos eventos que llegan exactamente en el mismo milisegundo, descartando todos los demás pares de eventos del stream",
    ],
    correct:
      "Debe mantener estado: indexar por session ID los eventos recientes y buscar el match en el otro índice; la ventana cubre que el clic tarde o no llegue",
    explanation:
      "En un stream-stream join ambas entradas son streams de eventos de actividad y el operador busca eventos relacionados dentro de una ventana de tiempo. Para el click-through rate, search y click se conectan por session ID. El clic puede tardar mucho (segundos a días), llegar antes que la búsqueda por retrasos de red, o no llegar nunca; por eso eliges una ventana (p. ej. unir si ocurren a menos de una hora). El procesador mantiene estado: indexa por session ID los eventos recientes de cada stream y, al llegar uno, consulta el otro índice buscando match; si la búsqueda expira sin clic, emite que no hubo clic. Incrustar la búsqueda en el evento de clic NO equivale al join, porque perderías las búsquedas sin clic — y para medir calidad necesitas ambas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-18",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Un 'table-table join' en streaming mantiene una vista materializada, como la home timeline de Twitter (caché por usuario de los tweets de a quién sigue). ¿Cómo se implementa con streams?",
    options: [
      "Consume los changelogs de ambas tablas (tweets y follows), mantiene los seguidores de cada usuario y une cada cambio con el estado actual del otro",
      "Consulta la base de datos por cada lectura de la timeline, iterando en tiempo real sobre todos los usuarios a los que se sigue",
      "Une solamente aquellos eventos que llegan a ocurrir dentro de una misma ventana de tiempo de treinta minutos de duración",
      "No mantiene ningún tipo de estado: recalcula por completo toda la timeline desde cero cada vez que se publica un nuevo tweet",
    ],
    correct:
      "Consume los changelogs de ambas tablas (tweets y follows), mantiene los seguidores de cada usuario y une cada cambio con el estado actual del otro",
    explanation:
      "En un table-table join ambas entradas son changelogs de 'tablas' y cada cambio en un lado se une con el último estado del otro, produciendo un stream de cambios a la vista materializada del join. La home timeline de Twitter es una caché por usuario (un 'inbox') que evita iterar en cada lectura sobre todos los seguidos. Para mantenerla, el procesador consume eventos de tweets (enviar/borrar) y de follows (seguir/dejar de seguir), y mantiene el set de seguidores de cada usuario: al llegar un tweet de u, se añade a la timeline de cada seguidor de u; al dejar de seguir, se quitan sus tweets, etc. Equivale a mantener la vista materializada de un SELECT que une tweets y follows agrupando por follower_id, actualizada cada vez que cambian las tablas subyacentes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-19",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Al unir un stream con una tabla que cambia en el tiempo (p. ej. ventas con tasas de impuesto), surge la 'time-dependence' del join. ¿Cuál es el problema y cómo lo resuelve una 'slowly changing dimension' (SCD)?",
    options: [
      "Importa con qué versión unir: quieres la vigente AL MOMENTO del evento (no la actual); la SCD da un id único a cada versión e impide la log compaction",
      "El problema es que la tabla con la que unes es demasiado grande, y la SCD se encarga de comprimirla para que ocupe menos espacio",
      "No hay ningún problema con esto: el join siempre se hace con el valor actual de la tabla y, por tanto, es siempre determinista",
      "La SCD se encarga de borrar las versiones viejas de los registros para así acelerar el join, perdiendo el histórico de los datos, lo que afecta al rendimiento y al coste del procesamiento",
    ],
    correct:
      "Importa con qué versión unir: quieres la vigente AL MOMENTO del evento (no la actual); la SCD da un id único a cada versión e impide la log compaction",
    explanation:
      "Todos los joins de stream mantienen estado a partir de una entrada y lo consultan con la otra; el orden de los eventos que mantienen el estado importa (seguir y luego dejar de seguir no es lo mismo que al revés), pero entre streams/particiones distintos no hay garantía de orden. Así, si el estado con el que unes cambia en el tiempo, ¿con qué versión unes? Normalmente quieres la vigente al momento del evento (la tasa de impuesto a la fecha de la venta, no la actual), crucial al reprocesar datos históricos. Si el orden entre streams es indeterminado, el join es no determinista (reejecutar puede dar otro resultado). En data warehouses esto es una 'slowly changing dimension' (SCD): se da un id único a cada versión del registro (cada cambio de tasa → nuevo id) y la venta referencia el id vigente, haciéndolo determinista — pero impide la log compaction, pues hay que retener todas las versiones.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-20",
    topic: "streaming",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para lograr semántica 'exactly-once' (mejor llamada 'effectively-once') ante fallos en un stream procesador de larga duración, ¿qué mecanismos se usan, y por qué no bastan por sí solos al escribir a sistemas externos?",
    options: [
      "Microbatching (Spark) y checkpointing (Flink): dan exactly-once dentro del framework, pero los efectos externos se repiten; hace falta commit atómico o idempotencia",
      "Basta con reiniciar el job desde el principio, exactamente igual que en batch, porque al fin y al cabo el stream es finito",
      "Lo único que se necesita es aumentar la cantidad de memoria RAM que tiene disponible el procesador de streams del sistema",
      "Se descarta por completo toda la salida del job ante cualquier fallo que ocurra, exactamente igual que se hace en MapReduce, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
    ],
    correct:
      "Microbatching (Spark) y checkpointing (Flink): dan exactly-once dentro del framework, pero los efectos externos se repiten; hace falta commit atómico o idempotencia",
    explanation:
      "En batch, tolerar fallos es fácil: reinicias la tarea y descartas su salida parcial, logrando 'exactly-once' (mejor: 'effectively-once' — los registros pueden procesarse varias veces, pero el efecto visible es como si una sola). En streaming no puedes esperar a que termine (es infinito), así que se usan mecanismos de grano fino: microbatching (Spark Streaming trata bloques de ~1 s como mini-batches) y checkpointing (Flink hace snapshots periódicos del estado vía barriers; al caer, restaura el último checkpoint y descarta la salida posterior). Dan exactly-once dentro del framework, pero en cuanto la salida sale al exterior (escribir a BD, enviar email/push) el framework ya no puede descartarla y un reinicio la duplicaría. Para evitarlo: commit atómico (que todos los efectos —salida, estado, avance del offset— ocurran o ninguno) o escrituras idempotentes (p. ej. guardar el offset del mensaje junto al valor para no reaplicar).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  // ---- cap. 12 — The Future of Data Systems ----
  {
    id: "ddia-c12-01",
    topic: "ingesta",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para integrar varios sistemas (BD, índice de búsqueda, caché, data warehouse), Kleppmann recomienda 'derivar' unos datos de otros en vez de 'dual writes'. ¿Cuál es el principio clave?",
    options: [
      "Canalizar toda la entrada por un único sistema que fija UN orden total (vía CDC o event log) y derivar las demás vistas en ese mismo orden",
      "Que cada uno de los clientes escriba directamente en cada uno de los sistemas (dual writes), que es la forma más robusta de todas",
      "Que todos los sistemas usen relojes de pared perfectamente sincronizados entre sí para poder ordenar todas las escrituras",
      "Que se evite por completo replicar los datos entre los distintos sistemas que componen la arquitectura de la aplicación",
    ],
    correct:
      "Canalizar toda la entrada por un único sistema que fija UN orden total (vía CDC o event log) y derivar las demás vistas en ese mismo orden",
    explanation:
      "Como ninguna herramienta sirve para todos los patrones de acceso, las apps combinan varias (BD, índice, caché, analítica…) y hay que mantenerlas en sync. La solución robusta no es 'dual writes' (que sufre race conditions y fallos parciales, dejando los sistemas permanentemente inconsistentes), sino derivar: canalizar toda la entrada por un único sistema que fija UN orden total de escrituras (con change data capture o un log de event sourcing) y aplicar esas escrituras en el mismo orden a las demás representaciones. Es el principio de 'state machine replication' / total order broadcast: garantiza que los sistemas derivados sean consistentes con el de registro, y actualizarlos desde un event log suele poder hacerse determinista e idempotente, facilitando recuperarse de fallos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-02",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cómo se compara mantener sistemas sincronizados con 'derived data' basado en logs frente a usar 'transacciones distribuidas' (2PC/XA)?",
    options: [
      "Objetivo similar, medios distintos: las transacciones ordenan con locks y commit atómico (dan linealizabilidad, pero XA rinde mal); el log-based escala y desacopla",
      "Son del todo idénticos entre sí en absolutamente todo, así que la elección entre uno y otro resulta completamente indiferente",
      "El enfoque de derived data basado en logs usa locks de exclusión mutua y el 2PC en cambio se basa en un log de eventos",
      "Las transacciones distribuidas (XA) tienen un excelente rendimiento y tolerancia a fallos, por lo que siempre son preferibles, al menos en la mayoría de las arquitecturas de datos modernas",
    ],
    correct:
      "Objetivo similar, medios distintos: las transacciones ordenan con locks y commit atómico (dan linealizabilidad, pero XA rinde mal); el log-based escala y desacopla",
    explanation:
      "Ambos enfoques mantienen sistemas consistentes, pero por medios distintos: las transacciones distribuidas deciden el orden con locks (mutua exclusión, 2PL) y aseguran efecto exactly-once con commit atómico; los sistemas log-based (CDC, event sourcing) deciden el orden con un log y se apoyan en retry determinista + idempotencia. La gran diferencia: las transacciones dan linealizabilidad (que implica garantías útiles como leer tus propias escrituras), mientras que los sistemas derivados suelen actualizarse de forma asíncrona y no la ofrecen por defecto. Kleppmann opina que XA tiene mala tolerancia a fallos y rendimiento, y que —a falta de un buen protocolo de transacciones distribuidas ampliamente soportado— el derived data basado en logs es el enfoque más prometedor para integrar sistemas heterogéneos, por su loose coupling.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-03",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué construir UN orden total de eventos (total order broadcast) se vuelve inviable al escalar a sistemas grandes y complejos?",
    options: [
      "Exige un único líder; si supera a una máquina hay que particionar (orden ambiguo); con varios DC o microservicios o clientes offline el orden queda indefinido",
      "Porque los logs de eventos del sistema no se pueden llegar a guardar de ninguna forma en el disco de las máquinas del clúster",
      "Porque ordenar los eventos es algo trivial que siempre se hace simplemente usando un reloj de pared global compartido por todos, tal como ocurre en muchos pipelines de ingeniería de datos",
      "Porque un solo nodo líder es capaz de manejar cualquier throughput de eventos que se le presente, sin ningún tipo de límite",
    ],
    correct:
      "Exige un único líder; si supera a una máquina hay que particionar (orden ambiguo); con varios DC o microservicios o clientes offline el orden queda indefinido",
    explanation:
      "Un log totalmente ordenado es factible en sistemas pequeños (de ahí la popularidad de la replicación single-leader), pero al escalar surgen límites: construir el orden total normalmente requiere pasar todo por un único líder; si el throughput supera a una máquina hay que particionar y el orden entre particiones distintas queda ambiguo; con varios datacenters suele haber un líder por DC (la coordinación síncrona entre DCs es ineficiente), dejando indefinido el orden entre eventos de DCs distintos; los microservicios desplegados con estado independiente no tienen orden definido entre sus eventos; y los clientes con estado local/offline ven eventos en órdenes distintos a los del servidor. Decidir un orden total es total order broadcast ≡ consenso, y diseñar consenso que escale más allá del throughput de un nodo y funcione geo-distribuido sigue siendo un problema de investigación abierto.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-04",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué 'reprocesar' datos existentes (con batch o stream) es clave para evolucionar un sistema, y qué ventaja tiene una migración gradual con vistas derivadas?",
    options: [
      "Sin reprocesar, la evolución de esquema se limita a cambios simples; reprocesando reestructuras todo y mantienes vista vieja y nueva en paralelo (reversible)",
      "El reprocesar los datos existentes borra por completo todos los datos históricos del sistema para así poder ahorrar espacio en disco, al menos en la mayoría de las arquitecturas de datos modernas",
      "La migración gradual de los datos obliga a tener que apagar por completo todo el sistema durante varios meses mientras se hace",
      "El reprocesar los datos solo permite añadir campos nuevos a los registros; nunca permite llegar a cambiar el modelo de datos",
    ],
    correct:
      "Sin reprocesar, la evolución de esquema se limita a cambios simples; reprocesando reestructuras todo y mantienes vista vieja y nueva en paralelo (reversible)",
    explanation:
      "El stream processing refleja cambios recientes con baja latencia; el batch permite reprocesar grandes volúmenes históricos para derivar nuevas vistas. Reprocesar es el mecanismo para evolucionar el sistema: sin él, la evolución de esquema se limita a cambios simples (un campo opcional nuevo, un tipo de registro nuevo), tanto en schema-on-write como schema-on-read; con él puedes reestructurar el dataset a un modelo totalmente distinto. La migración gradual mantiene el esquema viejo y el nuevo como dos vistas derivadas en paralelo del mismo dato subyacente: derivas usuarios al nuevo poco a poco para probar rendimiento y detectar bugs mientras la mayoría sigue en el viejo. Su belleza es que cada etapa es reversible (siempre hay un sistema que funciona al que volver), reduciendo el riesgo de daño irreversible — análogo a convertir vías de tren a 'gauge' mixto añadiendo un tercer riel.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-05",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué propone la 'lambda architecture' y qué problemas prácticos tiene según Kleppmann?",
    options: [
      "Corre en paralelo un sistema batch (exacto, lento) y uno streaming (aproximado, rápido) y los fusiona; problemas: doble lógica, fusión compleja, batch se incrementaliza",
      "Propone usar solamente procesamiento batch y prohibir por completo el streaming, y además no tiene ningún tipo de inconveniente, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "Es en realidad un protocolo de consenso distribuido que viene a reemplazar por completo al conocido algoritmo de Paxos",
      "Almacena todos los datos cifrados en dos copias idénticas entre sí para así poder tolerar los fallos del sistema distribuido",
    ],
    correct:
      "Corre en paralelo un sistema batch (exacto, lento) y uno streaming (aproximado, rápido) y los fusiona; problemas: doble lógica, fusión compleja, batch se incrementaliza",
    explanation:
      "La lambda architecture registra la entrada como eventos inmutables que solo crecen (como event sourcing) y deriva vistas corriendo en paralelo dos sistemas: uno batch (Hadoop) que produce vistas exactas pero con retraso, y uno de streaming (Storm) que produce una actualización rápida y aproximada; al consultar se fusionan. Influyó positivamente al popularizar derivar vistas de streams de eventos inmutables y reprocesar cuando haga falta. Pero tiene problemas: hay que mantener la misma lógica en dos frameworks distintos (doble esfuerzo de debug/tuning/operación); fusionar las dos salidas es fácil con una agregación simple sobre una tumbling window pero difícil con joins o sesionización; y reprocesar todo el histórico a menudo es caro, así que el batch acaba incrementalizándose, acercándose al streaming y perdiendo su simplicidad. Por eso conviene unificar batch y streaming en un mismo sistema.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-06",
    topic: "transformacion",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "multi",
    prompt: "Para unificar batch y stream processing en un mismo sistema (los beneficios de la lambda architecture sin sus desventajas), ¿qué capacidades se necesitan? Selecciona todas.",
    options: [
      "Poder reproducir (replay) eventos históricos por el MISMO motor que procesa el stream reciente (p. ej. un broker log-based, o leer de HDFS)",
      "Semántica exactly-once en el stream processor (la salida es como si no hubiera habido fallos, descartando la salida parcial de tareas fallidas)",
      "Ventanas por event time, no por processing time (el processing time no tiene sentido al reprocesar histórico); p. ej. la API de Apache Beam sobre Flink o Dataflow",
      "Obligar a que toda la lógica se escriba dos veces, una para batch y otra para stream",
      "Usar relojes de pared sincronizados globalmente para ordenar todos los eventos",
    ],
    correctSet: [
      "Poder reproducir (replay) eventos históricos por el MISMO motor que procesa el stream reciente (p. ej. un broker log-based, o leer de HDFS)",
      "Semántica exactly-once en el stream processor (la salida es como si no hubiera habido fallos, descartando la salida parcial de tareas fallidas)",
      "Ventanas por event time, no por processing time (el processing time no tiene sentido al reprocesar histórico); p. ej. la API de Apache Beam sobre Flink o Dataflow",
    ],
    explanation:
      "Trabajos recientes logran los beneficios de la lambda architecture sin sus desventajas implementando batch (reprocesar histórico) y streaming (procesar eventos según llegan) en UN mismo sistema. Hacen falta tres capacidades, cada vez más disponibles: (1) poder reproducir eventos históricos por el mismo motor que procesa el stream reciente (brokers log-based que permiten replay, o stream processors que leen de HDFS); (2) semántica exactly-once, garantizando que la salida sea como si no hubiera habido fallos (descartando la salida parcial de tareas fallidas, igual que en batch); y (3) ventanas por event time, no por processing time, porque al reprocesar el histórico el processing time no significa nada — Apache Beam ofrece una API para expresar esto, ejecutable sobre Flink o Google Cloud Dataflow. Escribir la lógica dos veces o usar relojes globales NO son requisitos (son justo lo que se quiere evitar).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-07",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Kleppmann propone 'desempaquetar' (unbundle) la base de datos en componentes especializados. ¿Qué distingue una 'federated database' de un sistema 'unbundled'?",
    options: [
      "Federated (polystore): unifica las LECTURAS con una interfaz de query única sobre varios motores; unbundled: unifica las ESCRITURAS con CDC y event logs",
      "Son sinónimos entre sí: tanto la federated database como el sistema unbundled solo unifican las lecturas de los datos, especialmente cuando el sistema debe escalar a muchos nodos y usuarios",
      "La federated unifica las escrituras usando el 2PC y el sistema unbundled unifica las lecturas usando el lenguaje SQL",
      "Ambos enfoques eliminan por completo cualquier necesidad de tener una base de datos en la arquitectura del sistema",
    ],
    correct:
      "Federated (polystore): unifica las LECTURAS con una interfaz de query única sobre varios motores; unbundled: unifica las ESCRITURAS con CDC y event logs",
    explanation:
      "Visto en grande, el flujo de datos de una organización parece una enorme base de datos donde cada proceso batch/stream/ETL actúa como el subsistema que mantiene índices o vistas materializadas (de hecho un CREATE INDEX no es más que reprocesar el dataset y derivar una vista). Hay dos formas complementarias de componer herramientas dispares: (1) federated database o polystore —unifica las LECTURAS ofreciendo una interfaz de consulta única sobre varios motores (p. ej. los foreign data wrappers de PostgreSQL); sigue la tradición relacional de un lenguaje de alto nivel—; y (2) unbundled database —unifica las ESCRITURAS, asegurando que cada cambio llegue a todos los sistemas correctos vía CDC y event logs; sigue la tradición Unix de herramientas pequeñas que hacen una cosa bien y se componen—. Mantener las escrituras en sync entre tecnologías heterogéneas es el problema de ingeniería más difícil, y un log ordenado de eventos con consumidores idempotentes es mejor abstracción que las transacciones distribuidas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-08",
    topic: "modelado",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "En el enfoque 'dataflow', para una conversión de moneda en una compra, ¿qué ventaja tiene suscribirse a un stream de tasas de cambio frente a llamar a un servicio de tasas por RPC (microservicios)?",
    options: [
      "El procesador se suscribe por adelantado al stream de tasas y guarda la actual en una BD LOCAL; al comprar solo consulta local (un stream-table join, no un RPC)",
      "Hay que llamar al servicio de tasas por RPC en cada una de las compras, porque ese es el método más rápido y fiable de todos",
      "Suscribirse al stream de tasas obliga al sistema a tener que cifrar cada una de las compras de forma individual por separado, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "El stream de tasas elimina por completo la dependencia temporal del tipo de cambio en el momento de reprocesar las compras",
    ],
    correct:
      "El procesador se suscribe por adelantado al stream de tasas y guarda la actual en una BD LOCAL; al comprar solo consulta local (un stream-table join, no un RPC)",
    explanation:
      "Componer operadores de stream en un sistema de dataflow se parece a los microservicios (loose coupling, equipos independientes), pero el mecanismo de comunicación es distinto: streams de mensajes asíncronos unidireccionales en vez de request/response síncrono. Ejemplo de la conversión de moneda: en microservicios, el código de compra consultaría por RPC un servicio de tasas en cada compra; en dataflow, se suscribe por adelantado al stream de cambios de tasa y guarda la tasa actual en una BD local, de modo que al procesar la compra solo consulta esa BD local (quizá en el mismo proceso). Reemplaza una petición de red síncrona por una consulta local: más rápido y robusto ante la caída del otro servicio ('la petición de red más rápida y fiable es la que no se hace'). En vez de un RPC, ahora hay un stream-table join entre eventos de compra y de actualización de tasa — que sigue siendo time-dependent (al reprocesar necesitarías la tasa histórica).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-09",
    topic: "almacenamiento",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Kleppmann distingue el 'write path' del 'read path'. ¿Qué papel cumplen caches, índices y vistas materializadas en ese marco?",
    options: [
      "Write path: trabajo eager al escribir (actualizar índices/vistas); read path: lazy al consultar. Caches/índices/vistas DESPLAZAN la frontera entre ambos",
      "Los índices solo llegan a afectar al read path del sistema y nunca añaden ningún trabajo adicional en el momento de escribir, sobre todo al trabajar con grandes volúmenes de datos",
      "El write path del sistema es la parte lazy del trabajo y, en cambio, el read path es la parte eager que se precomputa antes",
      "Las vistas materializadas eliminan por completo todo el trabajo del sistema, tanto al leer los datos como al escribirlos",
    ],
    correct:
      "Write path: trabajo eager al escribir (actualizar índices/vistas); read path: lazy al consultar. Caches/índices/vistas DESPLAZAN la frontera entre ambos",
    explanation:
      "El 'write path' es la parte del viaje del dato que se precomputa de forma eager en cuanto se escribe (pasa por etapas batch/stream que actualizan cada dataset derivado), aunque nadie lo haya pedido aún — similar a la evaluación eager. El 'read path' es la parte lazy que solo ocurre cuando alguien consulta. El dataset derivado es donde ambos se encuentran, y representa un trade-off entre cuánto trabajo se hace al escribir y cuánto al leer. Caches, índices y vistas materializadas no hacen más que desplazar esa frontera: precomputan resultados en el write path para ahorrar esfuerzo en el read path. Sin índice, una búsqueda escanearía todos los documentos (como grep): menos trabajo al escribir, mucho más al leer. Precomputar el resultado de todas las queries posibles sería el otro extremo (espacio/tiempo infinitos). Una cache de las queries comunes es un punto intermedio.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-10",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Según el 'end-to-end argument', ¿por qué una transacción serializable o la supresión de duplicados de TCP no bastan para evitar que una operación (p. ej. una transferencia) se ejecute dos veces?",
    options: [
      "La dedupe de bajo nivel solo cubre su tramo (TCP, una conexión); si el usuario reenvía un POST es otra petición. Hace falta un id de operación end-to-end",
      "Porque tanto TCP como las transacciones ya garantizan por sí solos la semántica exactly-once de extremo a extremo en todos los casos",
      "Porque las transacciones de tipo serializable son siempre incorrectas y por eso no llegan a evitar nunca los duplicados",
      "Porque hay que cifrar la operación de transferencia de extremo a extremo para así evitar que se llegue a ejecutar dos veces",
    ],
    correct:
      "La dedupe de bajo nivel solo cubre su tramo (TCP, una conexión); si el usuario reenvía un POST es otra petición. Hace falta un id de operación end-to-end",
    explanation:
      "El 'end-to-end argument' (Saltzer, Reed, Clark, 1984): una función solo puede implementarse correcta y completamente con el conocimiento y la ayuda de las aplicaciones en los EXTREMOS de la comunicación; ponerla solo en el sistema de comunicación no basta (aunque ayude como optimización). La supresión de duplicados de TCP solo vale dentro de una conexión, y una transacción atada a la conexión cliente-BD tampoco cubre el tramo usuario-servidor: si el POST expira y el usuario lo reenvía, para el servidor es otra petición y para la BD otra transacción, así que una transferencia no idempotente podría cobrarse dos veces. La solución es end-to-end: generar un identificador único de operación (UUID o hash de los campos) en el cliente, propagarlo hasta la BD y apoyarse en una uniqueness constraint sobre request_id que haga fallar el INSERT duplicado. El mismo razonamiento aplica a checksums y cifrado: solo los end-to-end cubren todos los fallos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-11",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "Imponer una 'uniqueness constraint' (username único, un asiento por persona) en un sistema distribuido requiere consenso. ¿Cómo se logra con mensajería basada en log, sin transacciones distribuidas?",
    options: [
      "Se particiona el log por el valor único (hash del username) y un stream processor lo consume en serie: decide cuál llegó primero y rechaza el resto",
      "Se usa la replicación multi-master asíncrona entre los nodos, que es la que se encarga de garantizar la unicidad del valor",
      "Cada uno de los nodos del sistema decide por su cuenta cuál de las peticiones acepta, sin tener que coordinarse con los demás",
      "Se ordenan las peticiones por el timestamp del reloj de pared de cada nodo para así poder elegir cuál de ellas es la ganadora, a lo largo de todo el ciclo de vida de la ingeniería de datos",
    ],
    correct:
      "Se particiona el log por el valor único (hash del username) y un stream processor lo consume en serie: decide cuál llegó primero y rechaza el resto",
    explanation:
      "Imponer unicidad en entorno distribuido requiere consenso: ante varias peticiones concurrentes con el mismo valor, el sistema debe aceptar una y rechazar las demás. Lo común es un único líder, pero también se logra con un log: como el log garantiza que todos los consumidores ven los mensajes en el mismo orden (total order broadcast ≡ consenso), basta particionar el log por el valor que debe ser único (p. ej. hash del username) y que un stream processor consuma esa partición secuencialmente en un solo hilo, llevando en una BD local qué valores están tomados. Así decide de forma determinista cuál de las peticiones conflictivas fue primera (la acepta) y rechaza el resto, emitiendo mensajes de éxito/rechazo que el cliente observa. Escala aumentando particiones. La replicación multi-master asíncrona queda descartada, porque dos masters podrían aceptar valores conflictivos a la vez. El principio general: enrutar al mismo partición todas las escrituras que puedan entrar en conflicto y procesarlas en serie.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-12",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "fill",
    prompt: "Completa: Kleppmann separa dos requisitos que suelen mezclarse en 'consistencia': la 'timeliness' (ver el estado actualizado) y la 'integrity' (ausencia de corrupción). Las violaciones de timeliness son consistencia 'eventual' (temporales), mientras que las violaciones de integrity son inconsistencia ________ (no se arreglan esperando; requieren reparación explícita).",
    accept: ["perpetua", "permanente", "perpetual", "permanent"],
    answerDisplay: "Perpetua (perpetual inconsistency)",
    explanation:
      "El término 'consistencia' mezcla dos cosas distintas: (1) timeliness —que los usuarios vean el estado actualizado; si leen una copia stale, la inconsistencia es temporal y se resuelve esperando/reintentando (la linealizabilidad es una forma fuerte de timeliness, read-your-writes una más débil)—; e (2) integrity —ausencia de corrupción: ni pérdida ni datos contradictorios o falsos; una vista derivada debe reflejar correctamente su origen—. En eslogan: 'las violaciones de timeliness son consistencia eventual; las de integrity son inconsistencia perpetua' (esperar no arregla la corrupción; hace falta chequeo y reparación explícitos). Kleppmann afirma que en la mayoría de las apps la integrity importa mucho más que la timeliness (un retraso en tu extracto bancario es normal; que los saldos no cuadren o desaparezca dinero es catastrófico). Lo interesante de los sistemas de dataflow es que desacoplan ambas: son asíncronos (sin timeliness por defecto) pero preservan la integrity mediante exactly-once/idempotencia, sin necesidad de commit atómico.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-13",
    topic: "fundamentos",
    track: "general",
    source: "ddia",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué son las 'loosely interpreted constraints' y los sistemas 'coordination-avoiding', y por qué resultan atractivos?",
    options: [
      "Muchas apps toleran violar una restricción y arreglarla luego con una 'compensating transaction'; si la disculpa es aceptable, no hace falta coordinación",
      "Son restricciones que se imponen siempre de forma síncrona y linearizable entre todos los nodos del sistema, sin ninguna excepción",
      "Significan que los datos del sistema se pueden llegar a perder de forma totalmente libre y sin que ello tenga ninguna consecuencia, y conviene tenerlo en cuenta al diseñar y operar la plataforma de datos",
      "Requieren tener que ejecutar transacciones distribuidas de tipo XA en cada una de las operaciones que realiza la aplicación",
    ],
    correct:
      "Muchas apps toleran violar una restricción y arreglarla luego con una 'compensating transaction'; si la disculpa es aceptable, no hace falta coordinación",
    explanation:
      "Una uniqueness constraint estricta exige consenso/coordinación (un solo nodo por partición), con su coste en rendimiento y disponibilidad. Pero muchas apps reales se contentan con restricciones laxas: si dos personas reservan el mismo asiento o piden más stock del disponible, puedes disculparte y compensar (una 'compensating transaction': reembolsar uno de dos cobros, ofrecer un descuento por el retraso, reubicar a un pasajero por overbooking — las aerolíneas y hoteles sobrevenden a propósito). Si el coste de la disculpa (dinero/reputación) es aceptable, validar TODAS las restricciones antes de escribir es innecesariamente restrictivo: puedes escribir optimistamente y comprobar después, preservando la integrity sin coordinación síncrona. Como además los sistemas de dataflow mantienen integrity sin commit atómico, surgen los sistemas 'coordination-avoiding': pueden operar multi-datacenter en multi-leader, con cada DC funcionando independiente, logrando mejor rendimiento y tolerancia a fallos (timeliness débil pero integrity fuerte).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-14",
    topic: "calidad",
    track: "general",
    source: "ddia",
    difficulty: "intermedio",
    type: "single",
    prompt: "Bajo el lema 'trust, but verify', ¿qué actitud propone Kleppmann sobre los 'system models' y la integridad de los datos?",
    options: [
      "Los system models asumen de forma binaria que ciertas cosas no pasan, pero a escala ocurren (bit-flips, corrupción, bugs); mejor auditar y verificar la integridad",
      "Hay que confiar plenamente en que el hardware y el software no llegan a corromper nunca los datos, sin tener que verificar jamás nada",
      "La integridad de los datos del sistema depende única y exclusivamente de cifrar todos esos datos mientras están en reposo en el disco, y por eso es un factor importante al elegir la tecnología y la arquitectura para cada caso",
      "Los system models garantizan de forma matemática que en el sistema no llegará a ocurrir jamás ningún tipo de corrupción de datos",
    ],
    correct:
      "Los system models asumen de forma binaria que ciertas cosas no pasan, pero a escala ocurren (bit-flips, corrupción, bugs); mejor auditar y verificar la integridad",
    explanation:
      "Razonar sobre correctness implica un 'system model': asumimos que ciertas cosas fallan (procesos caen, la red pierde mensajes) y otras no (los datos en disco tras fsync no se pierden, la RAM no se corrompe, la CPU multiplica bien). Esas suposiciones son razonables casi siempre, pero los modelos tradicionales las tratan de forma binaria cuando en realidad es cuestión de probabilidades: a suficiente escala, los eventos improbables ocurren —bit-flips por hardware/radiación o incluso por patrones de acceso (rowhammer), corrupción de datos en disco o en red que evade los checksums de TCP, y bugs incluso en BD maduras como MySQL (uniqueness) o PostgreSQL (write skew en serializable)—. La actitud 'trust, but verify' propone no confiar ciegamente en esas promesas: auditar y verificar la integridad de los datos de forma proactiva (checksums end-to-end, sistemas auto-validantes, chequeos periódicos) en vez de asumir que la corrupción nunca pasa.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },
]);
