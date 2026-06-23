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
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Kleppmann, ¿cuál es la diferencia entre un 'fault' (fallo de componente) y una 'failure' (falla del sistema)?",
    options: [
      "Un fault es un componente que se desvía de su especificación; una failure es cuando el sistema en su conjunto deja de dar el servicio al usuario. El objetivo es diseñar tolerancia a fallos que evite que los faults causen failures",
      "Son sinónimos exactos",
      "Un fault es la caída total del sistema; una failure es un error menor de un componente",
      "Un fault solo ocurre en hardware y una failure solo en software",
    ],
    correct:
      "Un fault es un componente que se desvía de su especificación; una failure es cuando el sistema en su conjunto deja de dar el servicio al usuario. El objetivo es diseñar tolerancia a fallos que evite que los faults causen failures",
    explanation:
      "Un fault es cuando un componente se desvía de su especificación; una failure es cuando el sistema completo deja de proveer el servicio requerido al usuario. Como es imposible reducir la probabilidad de fault a cero, conviene diseñar mecanismos de tolerancia a fallos que eviten que los faults se conviertan en failures. La fiabilidad consiste en 'seguir funcionando correctamente aun cuando las cosas van mal', construyendo sistemas fiables a partir de partes no fiables.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-02",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué en sistemas tolerantes a fallos puede tener sentido provocar fallos deliberadamente (p. ej. el Chaos Monkey de Netflix)?",
    options: [
      "Para ejercitar y probar continuamente la maquinaria de tolerancia a fallos, aumentando la confianza en que los fallos se manejarán bien cuando ocurran de forma natural (muchos bugs críticos se deben a mal manejo de errores)",
      "Para reducir el costo del hardware eliminando servidores al azar",
      "Porque provocar fallos hace que el sistema sea más rápido",
      "Para entrenar a los atacantes externos",
    ],
    correct:
      "Para ejercitar y probar continuamente la maquinaria de tolerancia a fallos, aumentando la confianza en que los fallos se manejarán bien cuando ocurran de forma natural (muchos bugs críticos se deben a mal manejo de errores)",
    explanation:
      "Contraintuitivamente, en sistemas tolerantes a fallos puede convenir aumentar la tasa de fallos provocándolos a propósito (p. ej. matando procesos al azar, como el Chaos Monkey de Netflix). Muchos bugs críticos se deben a un mal manejo de errores; al inducir fallos deliberadamente, se ejercita y prueba constantemente la maquinaria de tolerancia, aumentando la confianza en que los fallos reales se manejarán correctamente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann distingue fallos de hardware, de software y humanos. ¿Qué afirmación es correcta?",
    options: [
      "Los fallos de hardware suelen ser aleatorios e independientes; los de software son sistemáticos y correlacionados entre nodos (causan más failures); los errores humanos (p. ej. de configuración) son una de las principales causas de caídas",
      "Los fallos de hardware son sistemáticos y correlacionados; los de software, aleatorios e independientes",
      "Los errores humanos son insignificantes frente a los de hardware",
      "Todos los tipos de fallo son siempre independientes entre sí",
    ],
    correct:
      "Los fallos de hardware suelen ser aleatorios e independientes; los de software son sistemáticos y correlacionados entre nodos (causan más failures); los errores humanos (p. ej. de configuración) son una de las principales causas de caídas",
    explanation:
      "Los fallos de hardware (discos, RAM, energía) suelen ser aleatorios e independientes; con muchas máquinas se vuelven frecuentes (de ahí la redundancia y la tolerancia por software). Los fallos de software son sistemáticos y correlacionados entre nodos (un bug ante cierta entrada puede tumbar todas las instancias), causando más failures. Los errores humanos —p. ej. de configuración de los operadores— resultaron ser la principal causa de caídas en un estudio (el hardware solo el 10-25%). Se mitigan con buenas abstracciones, sandboxes, testing, recuperación rápida (rollback) y monitoreo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-04",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Al describir el rendimiento, ¿qué distingue 'throughput', 'response time' (tiempo de respuesta) y 'latency' (latencia)?",
    options: [
      "Throughput = registros/segundo o tiempo total de un job (importa en batch); response time = lo que ve el cliente (procesamiento + retrasos de red y de cola); latency = el tiempo que una petición espera a ser atendida (latente)",
      "Throughput y response time son lo mismo; latency es el costo en dólares",
      "Latency es lo que ve el cliente y response time el tiempo de cómputo puro",
      "Throughput mide el número de errores por segundo",
    ],
    correct:
      "Throughput = registros/segundo o tiempo total de un job (importa en batch); response time = lo que ve el cliente (procesamiento + retrasos de red y de cola); latency = el tiempo que una petición espera a ser atendida (latente)",
    explanation:
      "En sistemas batch (p. ej. Hadoop) importa el throughput: registros procesados por segundo o el tiempo total del job. En sistemas online importa el tiempo de respuesta. Cuidado: response time y latency no son lo mismo: el response time es lo que ve el cliente (el service time de procesar más retrasos de red y de cola); la latency es la duración durante la cual la petición está latente, esperando ser atendida.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-05",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué Kleppmann recomienda usar percentiles (mediana/p50, p95, p99) en vez del promedio (media) para describir tiempos de respuesta?",
    options: [
      "Porque la media no dice cuántos usuarios experimentaron realmente un retraso; la mediana (p50) indica el tiempo típico, y los percentiles altos (p95/p99/p999) revelan los outliers que afectan la experiencia",
      "Porque la media es matemáticamente imposible de calcular",
      "Porque los percentiles siempre son más pequeños que la media",
      "Porque la mediana ignora por completo los valores lentos",
    ],
    correct:
      "Porque la media no dice cuántos usuarios experimentaron realmente un retraso; la mediana (p50) indica el tiempo típico, y los percentiles altos (p95/p99/p999) revelan los outliers que afectan la experiencia",
    explanation:
      "La media (promedio aritmético) no es buena para conocer el tiempo de respuesta 'típico' porque no dice cuántos usuarios sufrieron el retraso. Mejor usar percentiles: la mediana (p50) indica que la mitad de las peticiones se sirven más rápido que ese valor; los percentiles altos (p95, p99, p999) revelan cuán malos son los outliers. Ojo: promediar percentiles entre máquinas es matemáticamente incorrecto; lo correcto es sumar los histogramas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-06",
    topic: "fundamentos",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "En el ejemplo de Twitter (Kleppmann), ¿por qué se prefirió pre-computar cada home timeline al publicar el tweet en vez de hacer un join al leer?",
    options: [
      "Porque la tasa de lecturas de timeline (300k/s) es mucho mayor que la de publicación (4.6k/s): conviene hacer más trabajo al escribir y menos al leer; el 'fan-out' (seguidores por usuario) es el load parameter clave",
      "Porque escribir siempre es más barato que leer, sin importar las tasas",
      "Porque los joins están prohibidos en bases relacionales",
      "Porque pre-computar elimina la necesidad de almacenamiento",
    ],
    correct:
      "Porque la tasa de lecturas de timeline (300k/s) es mucho mayor que la de publicación (4.6k/s): conviene hacer más trabajo al escribir y menos al leer; el 'fan-out' (seguidores por usuario) es el load parameter clave",
    explanation:
      "El reto de escala de Twitter no es el volumen de tweets, sino el 'fan-out': cada usuario sigue a muchos y es seguido por muchos. Como las lecturas de timeline (300k/s) superan por dos órdenes de magnitud a las publicaciones (4.6k/s), conviene pre-computar cada timeline al escribir (insertar el tweet en el buzón de cada seguidor) y abaratar la lectura. El 'load parameter' clave es la distribución de seguidores por usuario; las celebridades (30M+ seguidores) obligan a un enfoque híbrido. Los load parameters describen la carga para razonar sobre escalabilidad.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 1 — Reliable, Scalable, and Maintainable Applications",
  },

  {
    id: "ddia-c1-08",
    topic: "fundamentos",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Kleppmann, ¿para qué tipo de relaciones conviene el modelo documental frente al relacional?",
    options: [
      "Documental: bueno para relaciones uno-a-muchos / estructuras de árbol (mejor locality, todo en una sola consulta); relacional: mejor para relaciones muchos-a-uno y muchos-a-muchos, gracias a los joins",
      "Documental: ideal para muchos-a-muchos; relacional: solo sirve para uno-a-uno",
      "Ambos son idénticos para cualquier tipo de relación",
      "Documental: óptimo para joins complejos; relacional: incapaz de hacer joins",
    ],
    correct:
      "Documental: bueno para relaciones uno-a-muchos / estructuras de árbol (mejor locality, todo en una sola consulta); relacional: mejor para relaciones muchos-a-uno y muchos-a-muchos, gracias a los joins",
    explanation:
      "El modelo documental representa bien relaciones uno-a-muchos (estructuras de árbol, como las posiciones/educación de un perfil), guardando todo en un documento: mejor locality y una sola consulta. Pero el soporte de joins suele ser débil, así que las relaciones muchos-a-uno y muchos-a-muchos encajan mejor en el modelo relacional (referencia por ID + join). Como los datos tienden a interconectarse al añadir features, lo documental se vuelve menos atractivo; para datos muy interconectados, los grafos son lo más natural.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-03",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué Kleppmann recomienda guardar un ID (en vez del texto, p. ej. 'Filantropía') para datos como la región o la industria de un perfil?",
    options: [
      "Porque el ID no tiene significado para humanos y por eso nunca necesita cambiar; el texto significativo se guarda en un solo lugar, evitando duplicación, overhead de escritura e inconsistencias. Eliminar esa duplicación es la idea clave de la normalización",
      "Porque los IDs ocupan más espacio y eso mejora el rendimiento",
      "Porque el texto no se puede almacenar en una base de datos",
      "Porque los IDs son siempre más legibles para los usuarios finales",
    ],
    correct:
      "Porque el ID no tiene significado para humanos y por eso nunca necesita cambiar; el texto significativo se guarda en un solo lugar, evitando duplicación, overhead de escritura e inconsistencias. Eliminar esa duplicación es la idea clave de la normalización",
    explanation:
      "Guardar un ID en vez del texto es una cuestión de duplicación: con un ID, la información significativa para humanos (p. ej. 'Filantropía') vive en un solo lugar y todo lo demás la referencia. Como el ID no significa nada para humanos, nunca necesita cambiar; en cambio, lo significativo puede cambiar, y si está duplicado hay que actualizar todas las copias (con overhead de escritura y riesgo de inconsistencias). Eliminar esa duplicación es la idea clave de la normalización, que requiere relaciones muchos-a-uno (que encajan peor en el modelo documental).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-04",
    topic: "modelado",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es la ventaja y la principal limitación del 'data locality' (localidad) del modelo documental?",
    options: [
      "Ventaja: el documento se guarda como una cadena continua, así que si necesitas gran parte de él se carga en una sola lectura (menos seeks); limitación: la BD suele cargar el documento ENTERO aunque accedas a una parte pequeña, y al actualizar reescribe todo — conviene mantener documentos pequeños",
      "Ventaja: permite consultar campos anidados directamente sin cargar nada; limitación: ninguna",
      "Ventaja: los documentos grandes siempre son más rápidos; limitación: no admite JSON",
      "La localidad solo existe en bases relacionales, nunca en documentales",
    ],
    correct:
      "Ventaja: el documento se guarda como una cadena continua, así que si necesitas gran parte de él se carga en una sola lectura (menos seeks); limitación: la BD suele cargar el documento ENTERO aunque accedas a una parte pequeña, y al actualizar reescribe todo — conviene mantener documentos pequeños",
    explanation:
      "Un documento se almacena como una sola cadena continua (JSON/XML/BSON). Si la app suele necesitar gran parte del documento (p. ej. renderizar un perfil), hay una ventaja de rendimiento por esa locality (evita múltiples lookups de índice y seeks). Pero la ventaja solo aplica si necesitas grandes partes a la vez: la BD suele cargar el documento entero aunque accedas a una porción pequeña, y al actualizar normalmente se reescribe todo. Por eso se recomienda mantener los documentos pequeños. (Spanner, Oracle y las column-families de Bigtable logran locality también en modelo relacional.)",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-05",
    topic: "modelado",
    track: "general",
    difficulty: "basico",
    type: "single",
    prompt: "¿Qué tendencia observa Kleppmann entre las bases de datos relacionales y las documentales?",
    options: [
      "Convergencia: la mayoría de las relacionales soportan XML/JSON (indexar y consultar dentro de los documentos) y algunas documentales añaden joins (p. ej. RethinkDB); un híbrido relacional-documental es un buen camino a futuro",
      "Divergencia total: cada vez se parecen menos y son incompatibles",
      "Las documentales están desapareciendo por completo",
      "Las relacionales eliminaron todo soporte para JSON",
    ],
    correct:
      "Convergencia: la mayoría de las relacionales soportan XML/JSON (indexar y consultar dentro de los documentos) y algunas documentales añaden joins (p. ej. RethinkDB); un híbrido relacional-documental es un buen camino a futuro",
    explanation:
      "Los modelos se están pareciendo cada vez más, y eso es bueno porque se complementan. La mayoría de las relacionales (PostgreSQL, MySQL, DB2) soportan XML y JSON con capacidad de indexar y consultar dentro de los documentos; del lado documental, RethinkDB soporta joins y algunos drivers de MongoDB resuelven referencias (join del lado cliente). Un híbrido relacional-documental, que maneje datos tipo documento y también consultas relacionales, es un buen camino a futuro.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-06",
    topic: "sql",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué diferencia un lenguaje de consulta declarativo (como SQL) de uno imperativo (como el de CODASYL/IMS)?",
    options: [
      "Imperativo: le indicas a la máquina qué operaciones hacer y en qué orden (paso a paso, siguiendo 'access paths'); declarativo: solo especificas el patrón de los datos que quieres (qué condiciones cumplir, cómo transformarlos), y el optimizador decide cómo ejecutarlo",
      "Declarativo: especificas el algoritmo exacto; imperativo: solo el patrón del resultado",
      "Son lo mismo; 'declarativo' es el término en español de 'imperativo'",
      "Imperativo significa que no usa código; declarativo que usa bucles",
    ],
    correct:
      "Imperativo: le indicas a la máquina qué operaciones hacer y en qué orden (paso a paso, siguiendo 'access paths'); declarativo: solo especificas el patrón de los datos que quieres (qué condiciones cumplir, cómo transformarlos), y el optimizador decide cómo ejecutarlo",
    explanation:
      "Un lenguaje imperativo (como las APIs de los antiguos modelos jerárquico/red de CODASYL) le dice a la máquina qué operaciones ejecutar y en qué orden, siguiendo 'access paths' que el programador debía gestionar a mano. SQL es declarativo: solo especificas el patrón de los datos que quieres (condiciones, orden, agrupación, agregación), y el optimizador de consultas decide qué índices y métodos de join usar y en qué orden. El gran aporte del modelo relacional fue automatizar la elección del 'access path' mediante el optimizador.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-07",
    topic: "sql",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué los lenguajes de consulta declarativos (como SQL) resultaron superiores a las APIs imperativas?",
    options: [
      "Porque ocultan los detalles de implementación del motor (permiten introducir optimizaciones de rendimiento sin cambiar las consultas) y se prestan mejor a la ejecución en paralelo, al no fijar un orden de operaciones; además son más concisos",
      "Porque obligan a la base a ejecutar todo en un orden fijo definido por el usuario",
      "Porque impiden cualquier optimización automática",
      "Porque son imposibles de paralelizar entre varios cores",
    ],
    correct:
      "Porque ocultan los detalles de implementación del motor (permiten introducir optimizaciones de rendimiento sin cambiar las consultas) y se prestan mejor a la ejecución en paralelo, al no fijar un orden de operaciones; además son más concisos",
    explanation:
      "Un lenguaje declarativo es más conciso, pero sobre todo oculta los detalles de implementación del motor: la BD puede introducir mejoras de rendimiento (reorganizar datos, nuevos índices) sin que haya que cambiar las consultas. Además, como solo especifica el patrón del resultado y no el algoritmo ni el orden, se presta mucho mejor a la ejecución en paralelo (hoy las CPUs crecen en cores, no en frecuencia). El código imperativo es difícil de paralelizar porque fija un orden de instrucciones. (Analogía: CSS declarativo vs. manipular estilos imperativamente con JavaScript.)",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-08",
    topic: "sql",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "En modelos de grafos, ¿qué distingue al 'property graph' del 'triple-store' y qué lenguajes de consulta usan?",
    options: [
      "Un grafo tiene vértices (nodos) y aristas (edges); el property graph (Neo4j) se consulta con Cypher; el triple-store (RDF) almacena tripletes sujeto-predicado-objeto (Datomic, AllegroGraph) y se consulta con SPARQL (también existe Datalog). Los grafos son lo más natural para datos muy interconectados (muchos-a-muchos) y heterogéneos",
      "Ambos son idénticos y usan SQL estándar",
      "El property graph usa SPARQL y el triple-store usa Cypher, sin diferencia de estructura",
      "Los grafos solo sirven para datos homogéneos y relaciones uno-a-uno",
    ],
    correct:
      "Un grafo tiene vértices (nodos) y aristas (edges); el property graph (Neo4j) se consulta con Cypher; el triple-store (RDF) almacena tripletes sujeto-predicado-objeto (Datomic, AllegroGraph) y se consulta con SPARQL (también existe Datalog). Los grafos son lo más natural para datos muy interconectados (muchos-a-muchos) y heterogéneos",
    explanation:
      "Un grafo se compone de vértices (nodos/entidades) y aristas (edges/relaciones). Kleppmann describe dos modelos: el property graph (Neo4j, Titan), donde vértices y aristas tienen un id y propiedades clave-valor, consultado con el lenguaje declarativo Cypher; y el triple-store (Datomic, AllegroGraph), que almacena todo como tripletes (sujeto, predicado, objeto) —base de RDF— y se consulta con SPARQL (existe también Datalog, y lenguajes imperativos como Gremlin). Los grafos brillan con datos muy interconectados (muchos-a-muchos) y heterogéneos (distintos tipos de vértices en un mismo store, p. ej. el grafo social de Facebook).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  {
    id: "ddia-c2-09",
    topic: "sql",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cómo se ubica el modelo de consulta MapReduce respecto a lo declarativo y lo imperativo?",
    options: [
      "Está en medio: la lógica se expresa con fragmentos de código (funciones map y reduce) que el framework llama repetidamente; deben ser funciones puras (sin efectos secundarios ni consultas extra), lo que permite re-ejecutarlas en cualquier orden y ante fallos",
      "Es puramente declarativo, idéntico a SQL",
      "Es puramente imperativo y no puede distribuirse",
      "No tiene nada que ver con map ni reduce",
    ],
    correct:
      "Está en medio: la lógica se expresa con fragmentos de código (funciones map y reduce) que el framework llama repetidamente; deben ser funciones puras (sin efectos secundarios ni consultas extra), lo que permite re-ejecutarlas en cualquier orden y ante fallos",
    explanation:
      "MapReduce (popularizado por Google, soportado de forma limitada por MongoDB/CouchDB para queries de solo lectura) no es ni declarativo ni totalmente imperativo: está en medio. La lógica se expresa con fragmentos de código —las funciones map y reduce, de la programación funcional— que el framework llama repetidamente. Deben ser funciones puras: solo usan su entrada, no hacen consultas adicionales ni tienen efectos secundarios, lo que permite ejecutarlas en cualquier orden y re-ejecutarlas ante fallos. Por su menor comodidad y menos oportunidades de optimización, MongoDB añadió luego un lenguaje declarativo (aggregation pipeline) — un NoSQL 'reinventando SQL'.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 2 — Data Models and Query Languages",
  },

  // ---- cap. 3 — Storage and Retrieval ----
  {
    id: "ddia-c3-01",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿En qué consiste un motor de almacenamiento 'log-structured' con índice hash (como Bitcask de Riak)?",
    options: [
      "Los datos se escriben solo añadiendo (append) a un log; un hash map en memoria mapea cada clave a un offset de byte en el archivo. Es muy rápido en escrituras (secuenciales), pero todas las claves deben caber en RAM y no sirve para range queries",
      "Los datos se sobreescriben in-place y no se usa ningún índice",
      "Guarda todo en un árbol B en páginas de tamaño fijo",
      "Solo funciona para datos analíticos columnares",
    ],
    correct:
      "Los datos se escriben solo añadiendo (append) a un log; un hash map en memoria mapea cada clave a un offset de byte en el archivo. Es muy rápido en escrituras (secuenciales), pero todas las claves deben caber en RAM y no sirve para range queries",
    explanation:
      "En un motor log-structured con índice hash (Bitcask), las escrituras solo se añaden (append) a un log, y un hash map en memoria mapea cada clave a su offset de byte en el archivo. Las escrituras secuenciales son muy rápidas. Para no llenar el disco, el log se parte en segmentos y se hace 'compaction' (descartar claves duplicadas, quedándose con el valor más reciente; los borrados usan un registro especial llamado 'tombstone'). Limitaciones: todas las claves deben caber en RAM y no soporta range queries eficientes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-02",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué son una SSTable y un LSM-tree, y qué papel juega la 'memtable'?",
    options: [
      "Una SSTable (Sorted String Table) es un segmento de pares clave-valor ordenados por clave; el LSM-tree acumula escrituras en una memtable (árbol balanceado en memoria) que, al llenarse, se vuelca a una SSTable en disco, con merge/compaction en segundo plano. Soporta range queries y alto throughput de escritura",
      "Una SSTable guarda los datos sin ningún orden y la memtable está en disco",
      "El LSM-tree sobreescribe páginas in-place como un B-tree",
      "La memtable es un índice hash que debe caber entero en disco",
    ],
    correct:
      "Una SSTable (Sorted String Table) es un segmento de pares clave-valor ordenados por clave; el LSM-tree acumula escrituras en una memtable (árbol balanceado en memoria) que, al llenarse, se vuelca a una SSTable en disco, con merge/compaction en segundo plano. Soporta range queries y alto throughput de escritura",
    explanation:
      "Una SSTable es un segmento con los pares clave-valor ordenados por clave: hace el merge eficiente (estilo mergesort) y solo necesita un índice en memoria disperso (una clave cada pocos KB). El LSM-tree (Log-Structured Merge-tree) acumula las escrituras en una 'memtable' (árbol balanceado en memoria, p. ej. red-black tree); al superar un umbral, se vuelca a disco como una SSTable, y un proceso de fondo hace merge/compaction. Lo usan LevelDB, RocksDB, Cassandra, HBase, Lucene. Como los datos quedan ordenados, soporta range queries y, al escribir secuencialmente, alto throughput de escritura.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-03",
    topic: "almacenamiento",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué caracteriza a un índice B-tree, la estructura de índice más usada en bases relacionales?",
    options: [
      "Divide la BD en páginas de tamaño fijo (típicamente 4 KB) que se leen/escriben de a una y se actualizan in-place; forma un árbol balanceado (profundidad O(log n)) con un 'branching factor' de varios cientos; usa un write-ahead log (WAL) para recuperarse de caídas",
      "Solo permite añadir (append) a segmentos inmutables, nunca actualizar in-place",
      "Mantiene todas las claves en un hash map en memoria",
      "Almacena cada columna por separado para analítica",
    ],
    correct:
      "Divide la BD en páginas de tamaño fijo (típicamente 4 KB) que se leen/escriben de a una y se actualizan in-place; forma un árbol balanceado (profundidad O(log n)) con un 'branching factor' de varios cientos; usa un write-ahead log (WAL) para recuperarse de caídas",
    explanation:
      "El B-tree (1970, 'ubicuo') es el índice estándar en casi todas las bases relacionales. A diferencia del enfoque log-structured (segmentos de tamaño variable que solo se añaden), el B-tree divide la BD en páginas de tamaño fijo (típicamente 4 KB) que se leen/escriben de a una y se sobreescriben in-place. Forma un árbol balanceado (profundidad O(log n)); el número de referencias a hijos por página es el 'branching factor' (varios cientos). Como sobreescribir páginas in-place es riesgoso ante caídas, usa un write-ahead log (WAL / redo log) para restaurar un estado consistente, y latches (locks ligeros) para concurrencia.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-05",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Comparando LSM-trees y B-trees, ¿qué afirmación es correcta (incluyendo qué es la 'write amplification')?",
    options: [
      "Regla general: los LSM-trees suelen ser más rápidos en escrituras (escriben secuencialmente, menor 'write amplification', mejor compresión) y los B-trees en lecturas (cada clave está en un solo lugar). La 'write amplification' es cuando una escritura lógica produce múltiples escrituras físicas a disco",
      "Los B-trees siempre son más rápidos tanto en lecturas como en escrituras",
      "La 'write amplification' significa que las escrituras se pierden ante un corte de energía",
      "Los LSM-trees no permiten range queries y los B-trees sí",
    ],
    correct:
      "Regla general: los LSM-trees suelen ser más rápidos en escrituras (escriben secuencialmente, menor 'write amplification', mejor compresión) y los B-trees en lecturas (cada clave está en un solo lugar). La 'write amplification' es cuando una escritura lógica produce múltiples escrituras físicas a disco",
    explanation:
      "Como regla general, los LSM-trees son más rápidos en escrituras y los B-trees en lecturas (estos deben revisar varias SSTables en distintas etapas de compaction). La 'write amplification' es cuando una sola escritura lógica genera múltiples escrituras físicas a disco a lo largo del tiempo (el B-tree escribe al WAL y a la página; el LSM reescribe en compactions). Importa en SSDs (se desgastan con reescrituras). Los LSM suelen sostener mayor throughput de escritura y comprimen mejor; pero la compaction puede interferir con lecturas en percentiles altos (los B-trees son más predecibles), y como en un B-tree cada clave está en un solo lugar, facilita locks/transacciones.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-06",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué diferencia un 'heap file', un 'clustered index' y un 'covering index'?",
    options: [
      "Heap file: el índice guarda una referencia a la fila, almacenada aparte sin orden. Clustered index: guarda la fila completa dentro del índice (evita el salto extra). Covering index: guarda algunas columnas en el índice, permitiendo responder ciertas queries solo con el índice",
      "Los tres son idénticos; solo cambia el nombre",
      "Heap file guarda la fila dentro del índice y clustered index una referencia aparte",
      "Un covering index no puede acelerar ninguna consulta",
    ],
    correct:
      "Heap file: el índice guarda una referencia a la fila, almacenada aparte sin orden. Clustered index: guarda la fila completa dentro del índice (evita el salto extra). Covering index: guarda algunas columnas en el índice, permitiendo responder ciertas queries solo con el índice",
    explanation:
      "El valor de un índice puede ser la fila misma o una referencia a ella. Con un 'heap file', la fila se guarda aparte sin orden particular y el índice solo apunta a su ubicación (evita duplicar datos cuando hay varios índices secundarios). Un 'clustered index' guarda la fila completa dentro del índice, ahorrando el salto extra (en InnoDB la clave primaria siempre es clustered). Un 'covering index' (con included columns) es un punto medio: guarda algunas columnas en el índice, de modo que ciertas queries se responden solo con el índice ('cubren' la query). Aceleran lecturas pero añaden almacenamiento y overhead de escritura.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-07",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Según Kleppmann, ¿cuál es la verdadera razón del mejor rendimiento de las bases de datos en memoria (in-memory)?",
    options: [
      "NO es evitar leer de disco (un motor en disco con suficiente RAM tampoco lee, por el caché del SO), sino evitar el overhead de codificar las estructuras de datos en memoria a un formato apto para escribir en disco",
      "Que nunca necesitan persistir datos, así que no hay durabilidad posible",
      "Que el disco es más rápido que la RAM",
      "Que solo pueden almacenar datos más pequeños que la caché de CPU",
    ],
    correct:
      "NO es evitar leer de disco (un motor en disco con suficiente RAM tampoco lee, por el caché del SO), sino evitar el overhead de codificar las estructuras de datos en memoria a un formato apto para escribir en disco",
    explanation:
      "Contraintuitivamente, la ventaja de las bases en memoria no es evitar leer de disco —un motor basado en disco con suficiente RAM tampoco lee, porque el SO cachea los bloques recientes en memoria—, sino evitar el overhead de codificar las estructuras de datos en memoria a un formato serializable en disco. Pueden ofrecer durabilidad escribiendo un log de cambios o snapshots a disco, replicando, o con hardware especial. Ejemplos: VoltDB, MemSQL, Redis (que además ofrece modelos como colas de prioridad y sets, difíciles con índices en disco).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-08",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "En almacenamiento columnar para analítica, ¿qué técnicas de compresión son especialmente efectivas?",
    options: [
      "Bitmap encoding (un bitmap por cada valor distinto de la columna, con 1 bit por fila) y, si hay muchos ceros (sparse), run-length encoding; aprovechan que una columna suele tener pocos valores distintos y permiten resolver WHERE ... IN (...) con un OR de bitmaps muy eficiente",
      "Cifrado AES de cada columna por separado",
      "Guardar cada fila completa comprimida con ZIP",
      "No es posible comprimir datos columnares",
    ],
    correct:
      "Bitmap encoding (un bitmap por cada valor distinto de la columna, con 1 bit por fila) y, si hay muchos ceros (sparse), run-length encoding; aprovechan que una columna suele tener pocos valores distintos y permiten resolver WHERE ... IN (...) con un OR de bitmaps muy eficiente",
    explanation:
      "El almacenamiento columnar se presta muy bien a la compresión porque los valores de una columna suelen ser repetitivos. Una técnica efectiva en data warehouses es el 'bitmap encoding': si una columna tiene n valores distintos, se crean n bitmaps (uno por valor), con 1 bit por fila (1 si la fila tiene ese valor). Si hay muchos ceros (bitmaps sparse), se aplica además 'run-length encoding'. Esto permite resolver consultas típicas como WHERE product_sk IN (30,68,69) cargando esos bitmaps y haciendo un OR bit a bit, muy eficiente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  {
    id: "ddia-c3-09",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es un 'data cube' (OLAP cube) y cuál es su principal ventaja y desventaja?",
    options: [
      "Un caso especial de vista materializada: una grilla de agregados (SUM, COUNT…) agrupados por varias dimensiones, precomputados. Ventaja: ciertas queries se vuelven muy rápidas; desventaja: menos flexibilidad que consultar los datos crudos (solo agrega por las dimensiones definidas)",
      "Una base de datos transaccional optimizada para escrituras fila por fila",
      "Un índice hash que mantiene todas las claves en memoria",
      "Un formato de archivo para almacenar imágenes en 3D",
    ],
    correct:
      "Un caso especial de vista materializada: una grilla de agregados (SUM, COUNT…) agrupados por varias dimensiones, precomputados. Ventaja: ciertas queries se vuelven muy rápidas; desventaja: menos flexibilidad que consultar los datos crudos (solo agrega por las dimensiones definidas)",
    explanation:
      "Un data cube (OLAP cube) es un caso especial de vista materializada: una grilla de agregados (SUM, COUNT, AVG…) agrupados por distintas dimensiones (fecha, producto, tienda…), precomputados. Ventaja: ciertas consultas se vuelven muy rápidas porque ya están calculadas (p. ej. ventas totales por tienda). Desventaja: menos flexibilidad que consultar los datos crudos, porque solo se puede agregar por las dimensiones definidas (no, p. ej., por un atributo que no sea dimensión). Por eso los warehouses guardan los datos crudos y usan cubos solo como aceleración.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 3 — Storage and Retrieval",
  },

  // ---- cap. 4 — Encoding and Evolution ----
  {
    id: "ddia-c4-01",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Cuando coexisten versiones viejas y nuevas del código y de los datos, ¿qué significan compatibilidad 'backward' y 'forward'?",
    options: [
      "Backward (hacia atrás): el código NUEVO puede leer datos escritos por código VIEJO; forward (hacia adelante): el código VIEJO puede leer datos escritos por código NUEVO (más difícil, requiere que el viejo ignore lo que no reconoce)",
      "Backward: el código viejo lee datos nuevos; forward: el código nuevo lee datos viejos",
      "Son lo mismo; solo cambia el idioma del término",
      "Backward significa que los datos se borran al actualizar",
    ],
    correct:
      "Backward (hacia atrás): el código NUEVO puede leer datos escritos por código VIEJO; forward (hacia adelante): el código VIEJO puede leer datos escritos por código NUEVO (más difícil, requiere que el viejo ignore lo que no reconoce)",
    explanation:
      "Como los cambios de código no son instantáneos (rolling upgrades del lado servidor, usuarios que no actualizan del lado cliente), versiones viejas y nuevas de código y datos coexisten. Para que el sistema siga funcionando hace falta compatibilidad en ambos sentidos: backward (el código nuevo lee datos escritos por código viejo) —normalmente fácil, porque conoces el formato viejo— y forward (el código viejo lee datos escritos por código nuevo) —más difícil, porque el código viejo debe ignorar las adiciones que no reconoce.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-02",
    topic: "modelado",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En Thrift/Protocol Buffers, ¿cómo se mantiene la compatibilidad al evolucionar el esquema (schema evolution)?",
    options: [
      "Cada campo se identifica por un 'field tag' (número), no por su nombre: puedes renombrar un campo pero NO cambiar su tag; al añadir un campo nuevo debes darle un tag nuevo y hacerlo opcional/con default (forward: el código viejo ignora tags que no conoce; backward: no puedes añadir campos required)",
      "El esquema no puede cambiar nunca una vez desplegado",
      "Los campos se identifican por su posición y orden exacto en el código",
      "Hay que reescribir todos los datos existentes en cada cambio",
    ],
    correct:
      "Cada campo se identifica por un 'field tag' (número), no por su nombre: puedes renombrar un campo pero NO cambiar su tag; al añadir un campo nuevo debes darle un tag nuevo y hacerlo opcional/con default (forward: el código viejo ignora tags que no conoce; backward: no puedes añadir campos required)",
    explanation:
      "En Thrift/Protocol Buffers, un registro codificado es la concatenación de sus campos, cada uno identificado por un 'field tag' (número) y anotado con su tipo. Como los datos nunca referencian nombres de campo, puedes renombrar un campo, pero NO cambiar su tag. Para mantener forward compatibility, el código viejo simplemente ignora los tags que no reconoce (el tipo le dice cuántos bytes saltar). Para backward compatibility, todo campo añadido tras el despliegue inicial debe ser opcional o tener default (no puedes añadir un 'required'); un tag eliminado no puede reutilizarse.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-03",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué problemas tienen los formatos de codificación específicos del lenguaje (Java Serializable, pickle) y los textuales (JSON/XML/CSV)?",
    options: [
      "Los de lenguaje atan los datos a un lenguaje, son un riesgo de seguridad (instanciar clases arbitrarias) y descuidan el versionado; los textuales no imponen esquema y tienen ambigüedad con números (JSON no distingue int/float ni precisión; XML/CSV no distinguen número de string)",
      "No tienen ningún problema; son siempre la mejor opción",
      "Los textuales son binarios y por eso ilegibles para humanos",
      "Los de lenguaje son los más portables entre organizaciones",
    ],
    correct:
      "Los de lenguaje atan los datos a un lenguaje, son un riesgo de seguridad (instanciar clases arbitrarias) y descuidan el versionado; los textuales no imponen esquema y tienen ambigüedad con números (JSON no distingue int/float ni precisión; XML/CSV no distinguen número de string)",
    explanation:
      "Los formatos específicos del lenguaje (Java Serializable, Ruby Marshal, pickle de Python) son cómodos pero atan los datos a ese lenguaje, son un riesgo de seguridad (decodificar puede instanciar clases arbitrarias → ejecución remota de código), y descuidan el versionado y la eficiencia. Los textuales estandarizados (JSON/XML/CSV) son legibles y portables, pero no imponen esquema y tienen problemas sutiles: ambigüedad con números (JSON no distingue enteros de floats ni fija precisión; XML/CSV no distinguen un número de un string de dígitos) y no soportan binario nativamente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-04",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué caracteriza a Apache Thrift y Protocol Buffers como formatos de codificación binaria?",
    options: [
      "Requieren un esquema (definido en un IDL) y una herramienta de generación de código; codifican los datos de forma muy compacta usando field tags numéricos en lugar de nombres de campo (más pequeños que las variantes binarias de JSON)",
      "No requieren esquema y guardan los nombres de campo en cada registro",
      "Solo funcionan con texto plano legible por humanos",
      "Son lenguajes de consulta declarativos, no formatos de codificación",
    ],
    correct:
      "Requieren un esquema (definido en un IDL) y una herramienta de generación de código; codifican los datos de forma muy compacta usando field tags numéricos en lugar de nombres de campo (más pequeños que las variantes binarias de JSON)",
    explanation:
      "Thrift (Facebook) y Protocol Buffers (Google), ambos open source desde 2007-08, requieren un esquema para los datos, definido en un IDL (interface definition language), y traen una herramienta de generación de código que produce clases para codificar/decodificar. Codifican muy compacto: en vez de incluir los nombres de campo (como las variantes 'binary JSON'), usan 'field tags' numéricos del esquema, e integers de longitud variable. El registro de ejemplo cabe en ~33 bytes (vs 81 de JSON textual).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-05",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué distingue a Apache Avro de Thrift/Protocol Buffers en cuanto a esquemas?",
    options: [
      "Avro no usa field tags: separa el 'writer's schema' (con el que se escribió) del 'reader's schema' (que espera quien lee), que solo deben ser compatibles; la librería resuelve las diferencias emparejando campos por NOMBRE. Esto lo hace amigable con esquemas generados dinámicamente (p. ej. desde una tabla SQL, en Hadoop)",
      "Avro guarda el esquema completo dentro de cada registro individual",
      "Avro no soporta evolución de esquema en absoluto",
      "Avro identifica los campos por su posición numérica fija, igual que Protobuf",
    ],
    correct:
      "Avro no usa field tags: separa el 'writer's schema' (con el que se escribió) del 'reader's schema' (que espera quien lee), que solo deben ser compatibles; la librería resuelve las diferencias emparejando campos por NOMBRE. Esto lo hace amigable con esquemas generados dinámicamente (p. ej. desde una tabla SQL, en Hadoop)",
    explanation:
      "Avro (subproyecto de Hadoop) no usa field tags. Distingue el 'writer's schema' (con el que se codificaron los datos) del 'reader's schema' (que espera el código lector); no tienen que ser iguales, solo compatibles, y la librería resuelve las diferencias emparejando campos por nombre (campos que sobran se ignoran; campos que faltan se rellenan con su default). Para mantener compatibilidad solo se pueden añadir/quitar campos con default. Su gran ventaja es que es amigable con esquemas generados dinámicamente (p. ej. exportar una BD relacional a un object container file, regenerando el esquema en cada cambio sin asignar tags a mano).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-06",
    topic: "ingesta",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann describe tres 'modos de dataflow' (cómo fluyen los datos entre procesos). ¿Cuáles son?",
    options: [
      "A través de bases de datos (quien escribe codifica, quien lee decodifica; 'los datos sobreviven al código'), a través de servicios (llamadas REST/RPC entre cliente y servidor), y a través de paso de mensajes asíncrono (message brokers, actores)",
      "Solo batch, micro-batch y streaming",
      "Hot, warm y cold",
      "Únicamente a través de archivos CSV enviados por email",
    ],
    correct:
      "A través de bases de datos (quien escribe codifica, quien lee decodifica; 'los datos sobreviven al código'), a través de servicios (llamadas REST/RPC entre cliente y servidor), y a través de paso de mensajes asíncrono (message brokers, actores)",
    explanation:
      "La compatibilidad es una relación entre el proceso que codifica los datos y el que los decodifica. Kleppmann describe tres modos de dataflow: (1) a través de bases de datos —quien escribe codifica y quien lee decodifica; como 'los datos sobreviven al código' (data outlives code), se requiere compatibilidad backward y forward, y la evolución de esquema hace que la BD parezca tener un solo esquema aunque guarde versiones históricas—; (2) a través de servicios (REST/RPC, cliente-servidor, base de SOA/microservicios); y (3) a través de paso de mensajes asíncrono (message brokers, modelo de actores).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 4 — Encoding and Evolution",
  },

  {
    id: "ddia-c4-07",
    topic: "modelado",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "¿En qué consiste la replicación basada en líder (single-leader / master-slave)?",
    options: [
      "Una réplica es el líder (recibe todas las escrituras de los clientes); las demás son followers que reciben un replication log / change stream del líder y aplican los cambios en el mismo orden. Los clientes pueden leer de cualquier réplica, pero solo escriben en el líder",
      "Cualquier réplica acepta escrituras y se sincronizan entre sí sin un orden definido",
      "Todas las réplicas son de solo lectura y nadie puede escribir",
      "El líder solo lee y los followers solo escriben",
    ],
    correct:
      "Una réplica es el líder (recibe todas las escrituras de los clientes); las demás son followers que reciben un replication log / change stream del líder y aplican los cambios en el mismo orden. Los clientes pueden leer de cualquier réplica, pero solo escriben en el líder",
    explanation:
      "La replicación basada en líder (master-slave / active-passive) designa una réplica como líder (primary): los clientes envían todas las escrituras al líder, que las aplica localmente y luego envía los cambios a los followers mediante un replication log o change stream; cada follower los aplica en el mismo orden. Los clientes pueden leer de cualquier réplica, pero solo el líder acepta escrituras. La usan PostgreSQL, MySQL, MongoDB, y también brokers como Kafka.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-02",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es el trade-off entre replicación síncrona y asíncrona, y qué es 'semi-síncrona'?",
    options: [
      "Síncrona: el líder espera la confirmación del follower antes de reportar éxito (garantiza copia actualizada, pero un follower caído bloquea las escrituras); asíncrona: el líder no espera (más rápida y disponible, pero puede perder escrituras si el líder falla). Semi-síncrona: un follower síncrono y el resto asíncronos",
      "Síncrona no espera confirmación y asíncrona sí",
      "Ambas garantizan durabilidad total sin ningún riesgo",
      "Semi-síncrona significa que no hay replicación en absoluto",
    ],
    correct:
      "Síncrona: el líder espera la confirmación del follower antes de reportar éxito (garantiza copia actualizada, pero un follower caído bloquea las escrituras); asíncrona: el líder no espera (más rápida y disponible, pero puede perder escrituras si el líder falla). Semi-síncrona: un follower síncrono y el resto asíncronos",
    explanation:
      "Con replicación síncrona, el líder espera a que el follower confirme la escritura antes de reportar éxito: garantiza una copia actualizada y consistente, pero si el follower síncrono no responde, el líder debe bloquear todas las escrituras. Por eso es impráctico que todos sean síncronos. Una configuración 'semi-síncrona' común es tener un follower síncrono y el resto asíncronos (al menos dos nodos con copia al día). La replicación totalmente asíncrona es más rápida y disponible, pero una escritura confirmada al cliente puede perderse si el líder falla irrecuperablemente.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-03",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuáles son los métodos de implementación del replication log, y por qué el 'logical (row-based) log' es ventajoso?",
    options: [
      "Statement-based (reenvía cada sentencia SQL; falla con funciones no deterministas como NOW()/RAND()), WAL shipping (envía el log de bajo nivel, acoplado al storage engine), logical/row-based log (cambios a nivel de fila, desacoplado del motor → permite versiones distintas y CDC) y trigger-based (en la capa de aplicación)",
      "Solo existe el método statement-based y es siempre el mejor",
      "El logical log copia bytes de disco crudos acoplados al motor",
      "El WAL shipping es independiente del motor de almacenamiento",
    ],
    correct:
      "Statement-based (reenvía cada sentencia SQL; falla con funciones no deterministas como NOW()/RAND()), WAL shipping (envía el log de bajo nivel, acoplado al storage engine), logical/row-based log (cambios a nivel de fila, desacoplado del motor → permite versiones distintas y CDC) y trigger-based (en la capa de aplicación)",
    explanation:
      "Métodos del replication log: (1) statement-based: reenvía cada sentencia INSERT/UPDATE/DELETE, pero se rompe con funciones no deterministas (NOW(), RAND()), autoincrementos o efectos secundarios; (2) WAL shipping: envía el log de bajo nivel del storage engine, pero queda acoplado a su formato (impide versiones distintas entre líder y follower, dificultando upgrades sin downtime); (3) logical (row-based) log: registra cambios a nivel de fila, desacoplado del motor, lo que permite compatibilidad entre versiones y que aplicaciones externas lo parseen (base del Change Data Capture); (4) trigger-based: en la capa de aplicación, flexible pero con más overhead.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-04",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En la replicación basada en líder, ¿qué es el 'failover' y qué peligro es el 'split brain'?",
    options: [
      "Failover: promover un follower a nuevo líder cuando el líder falla (detección por timeout, elección, reconfiguración). 'Split brain' es el peligro de que dos nodos crean ser el líder a la vez y ambos acepten escrituras, llevando a pérdida o corrupción de datos",
      "Failover significa apagar toda la base de datos permanentemente",
      "Split brain es cuando el líder se divide la carga entre dos followers de forma segura",
      "Failover solo ocurre en replicación sin líder",
    ],
    correct:
      "Failover: promover un follower a nuevo líder cuando el líder falla (detección por timeout, elección, reconfiguración). 'Split brain' es el peligro de que dos nodos crean ser el líder a la vez y ambos acepten escrituras, llevando a pérdida o corrupción de datos",
    explanation:
      "El failover maneja la caída del líder: se detecta (normalmente por timeout), se elige un nuevo líder (idealmente el follower más al día; es un problema de consenso) y se reconfigura el sistema. Está lleno de riesgos: con replicación asíncrona, las escrituras no replicadas del viejo líder pueden descartarse (violando durabilidad); el 'split brain' es el peligro de que dos nodos crean ser líder simultáneamente y ambos acepten escrituras, corrompiendo datos; y elegir el timeout correcto es difícil (muy corto → failovers innecesarios). Por eso algunos equipos prefieren el failover manual.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-05",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Con replicación asíncrona aparece el 'replication lag'. ¿Qué garantiza la consistencia 'read-after-write' (read-your-writes)?",
    options: [
      "Que un usuario, tras hacer una escritura, siempre verá sus propias actualizaciones al volver a leer (no promete nada sobre las escrituras de OTROS usuarios). Evita que el usuario crea que perdió su dato al leer de un follower atrasado",
      "Que todos los usuarios ven instantáneamente las escrituras de todos los demás",
      "Que las lecturas nunca devuelven datos, solo escrituras",
      "Que el follower siempre está más actualizado que el líder",
    ],
    correct:
      "Que un usuario, tras hacer una escritura, siempre verá sus propias actualizaciones al volver a leer (no promete nada sobre las escrituras de OTROS usuarios). Evita que el usuario crea que perdió su dato al leer de un follower atrasado",
    explanation:
      "El 'replication lag' es el retraso entre una escritura en el líder y su reflejo en un follower (consistencia eventual: el retraso suele ser <1 s pero puede crecer a minutos). La consistencia read-after-write (read-your-writes) garantiza que un usuario, tras escribir, siempre verá sus propias actualizaciones al recargar (no promete nada sobre escrituras de otros). Se implementa, por ejemplo, leyendo del líder lo que el usuario pudo haber modificado, o recordando el timestamp de la última escritura del cliente y sirviendo solo desde réplicas suficientemente al día.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-06",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué anomalía de replication lag evita la garantía de 'monotonic reads' (lecturas monótonas)?",
    options: [
      "Evita que el usuario 'vea el tiempo ir hacia atrás': que tras leer un dato nuevo, una lectura posterior (de un follower más atrasado) devuelva un dato más viejo. Se logra, p. ej., haciendo que cada usuario lea siempre de la misma réplica (por hash de su ID)",
      "Evita que dos usuarios escriban a la vez",
      "Garantiza que las lecturas siempre devuelven el valor más reciente del líder",
      "Impide que existan followers atrasados",
    ],
    correct:
      "Evita que el usuario 'vea el tiempo ir hacia atrás': que tras leer un dato nuevo, una lectura posterior (de un follower más atrasado) devuelva un dato más viejo. Se logra, p. ej., haciendo que cada usuario lea siempre de la misma réplica (por hash de su ID)",
    explanation:
      "Si un usuario hace varias lecturas que caen en réplicas con distinto lag, puede ver 'el tiempo ir hacia atrás': primero ve un comentario recién añadido (réplica al día) y luego no lo ve (réplica atrasada). La garantía de 'monotonic reads' (más fuerte que eventual, más débil que consistencia fuerte) impide esa anomalía: si haces varias lecturas en secuencia, no verás datos más viejos tras haber visto datos más nuevos. Se logra haciendo que cada usuario lea siempre de la misma réplica (p. ej. elegida por hash de su ID).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-07",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué garantiza 'consistent prefix reads' (lecturas de prefijo consistente)?",
    options: [
      "Que si una secuencia de escrituras ocurre en cierto orden, quien las lea las verá aparecer en ese mismo orden (preserva la causalidad). Es un problema típico en bases particionadas sin orden global de escrituras (p. ej. ver la respuesta antes que la pregunta)",
      "Que todas las lecturas devuelven el mismo prefijo de bytes",
      "Que el usuario siempre lee del líder",
      "Que las escrituras se aplican en orden aleatorio en cada réplica",
    ],
    correct:
      "Que si una secuencia de escrituras ocurre en cierto orden, quien las lea las verá aparecer en ese mismo orden (preserva la causalidad). Es un problema típico en bases particionadas sin orden global de escrituras (p. ej. ver la respuesta antes que la pregunta)",
    explanation:
      "La garantía de 'consistent prefix reads' dice que si una secuencia de escrituras ocurre en cierto orden, cualquiera que las lea las verá en ese mismo orden, preservando la causalidad. Sin ella puede pasar la anomalía de 'ver la respuesta antes que la pregunta'. Es un problema particular de bases particionadas (sharded), donde las particiones operan de forma independiente y no hay un orden global de escrituras. Una solución es escribir las operaciones causalmente relacionadas en la misma partición, o rastrear explícitamente dependencias causales.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-08",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuándo tiene sentido la replicación multi-líder (multi-leader) y cuál es su mayor problema?",
    options: [
      "Casos: operación multi-datacenter (un líder por DC, escrituras locales), clientes con operación offline (cada dispositivo es un líder) y edición colaborativa. Su mayor problema: pueden ocurrir conflictos de escritura concurrentes que requieren resolución",
      "Es ideal dentro de un solo datacenter y nunca genera conflictos",
      "Solo permite un líder, igual que single-leader",
      "Elimina por completo la necesidad de resolver conflictos",
    ],
    correct:
      "Casos: operación multi-datacenter (un líder por DC, escrituras locales), clientes con operación offline (cada dispositivo es un líder) y edición colaborativa. Su mayor problema: pueden ocurrir conflictos de escritura concurrentes que requieren resolución",
    explanation:
      "La replicación multi-líder (master-master / active-active) permite que más de un nodo acepte escrituras, cada líder actuando como follower de los demás. Tiene sentido en: operación multi-datacenter (un líder por DC, las escrituras se procesan localmente y se replican async, ocultando la latencia entre DCs y tolerando mejor sus caídas), clientes con operación offline (cada dispositivo es un líder local que sincroniza luego, p. ej. apps de calendario) y edición colaborativa. Su mayor problema: el mismo dato puede modificarse concurrentemente en dos líderes, generando conflictos de escritura que hay que resolver (no ocurre con single-leader).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-09",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Ante conflictos de escritura (multi-líder/sin líder), ¿qué debe garantizar la resolución y qué riesgo tiene 'last write wins' (LWW)?",
    options: [
      "Debe ser convergente: todas las réplicas deben llegar al MISMO valor final. LWW (elegir el de timestamp más alto) es popular pero peligrosamente propenso a perder datos (descarta escrituras); alternativas: fusionar valores, registrar el conflicto, o CRDTs que resuelven conflictos automáticamente",
      "Cada réplica puede quedar con un valor final distinto sin problema",
      "LWW nunca pierde datos y es siempre la mejor opción",
      "Los conflictos se resuelven a nivel de transacción completa, nunca por fila",
    ],
    correct:
      "Debe ser convergente: todas las réplicas deben llegar al MISMO valor final. LWW (elegir el de timestamp más alto) es popular pero peligrosamente propenso a perder datos (descarta escrituras); alternativas: fusionar valores, registrar el conflicto, o CRDTs que resuelven conflictos automáticamente",
    explanation:
      "Como en multi-líder no hay un orden definido de escrituras, la resolución de conflictos debe ser 'convergente': todas las réplicas deben llegar al mismo valor final una vez replicado todo. Opciones: 'last write wins' (LWW), que elige el de mayor timestamp/ID —popular pero peligrosamente propenso a perder datos—; fusionar valores; registrar el conflicto para resolverlo después (quizá preguntando al usuario); o usar CRDTs (conflict-free replicated datatypes), que resuelven conflictos automáticamente de forma sensata. La resolución suele aplicar a nivel de fila/documento, no de transacción entera.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 5 — Replication",
  },

  {
    id: "ddia-c5-10",
    topic: "calidad",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es el trade-off entre particionar por rango de clave (key range) y por hash de la clave?",
    options: [
      "Por rango: las claves quedan ordenadas (permite range queries eficientes) pero arriesga hot spots si se accede a claves cercanas (p. ej. timestamps); por hash: distribuye la carga de forma pareja pero destruye el orden, haciendo ineficientes las range queries",
      "Por rango distribuye mejor la carga y por hash permite range queries",
      "Ambos preservan el orden de las claves y permiten range queries",
      "El hash garantiza que nunca habrá hot spots, ni siquiera con una sola clave caliente",
    ],
    correct:
      "Por rango: las claves quedan ordenadas (permite range queries eficientes) pero arriesga hot spots si se accede a claves cercanas (p. ej. timestamps); por hash: distribuye la carga de forma pareja pero destruye el orden, haciendo ineficientes las range queries",
    explanation:
      "El objetivo del particionado (sharding) es repartir datos y carga de forma pareja, evitando 'hot spots'. Por rango de clave: cada partición posee un rango continuo de claves ordenadas (como una enciclopedia), lo que permite range queries eficientes, pero arriesga hot spots si la app accede a claves cercanas (p. ej. escribir por timestamp manda todo a la partición de 'hoy'). Por hash de la clave: una función hash reparte las claves de forma uniforme entre particiones, pero destruye el orden, volviendo ineficientes las range queries. Cassandra combina ambos con una clave compuesta (hash de la primera parte, orden en el resto).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-02",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Aun particionando por hash, una sola clave muy 'caliente' (p. ej. la de una celebridad) genera un hot spot. ¿Qué técnica de aplicación lo alivia?",
    options: [
      "Añadir un número aleatorio al inicio/fin de la clave caliente (p. ej. 2 dígitos la reparten en 100 claves/particiones); a cambio, las lecturas deben leer de las 100 claves y combinar, y hay que llevar registro de qué claves se dividieron",
      "Hacer el hash dos veces seguidas resuelve el problema automáticamente",
      "Aumentar el TTL de la clave caliente",
      "No hay nada que se pueda hacer; el hot spot es inevitable",
    ],
    correct:
      "Añadir un número aleatorio al inicio/fin de la clave caliente (p. ej. 2 dígitos la reparten en 100 claves/particiones); a cambio, las lecturas deben leer de las 100 claves y combinar, y hay que llevar registro de qué claves se dividieron",
    explanation:
      "El hash reparte claves distintas, pero no ayuda si toda la carga es para la MISMA clave (el hash de dos IDs iguales es igual), p. ej. una celebridad con millones de seguidores. La mayoría de los sistemas no compensan esto automáticamente, así que es responsabilidad de la app: una técnica simple es añadir un número aleatorio al inicio o fin de la clave caliente (2 dígitos la reparten en 100 claves, distribuibles en distintas particiones). El costo: las lecturas deben consultar las 100 claves y combinar resultados, y conviene aplicar esto solo a las pocas claves calientes (llevando registro de cuáles se dividieron).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-03",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Al particionar índices secundarios, ¿qué diferencia hay entre el enfoque 'por documento' (índice local) y 'por término' (índice global)?",
    options: [
      "Por documento (local): cada partición indexa solo sus propios documentos; escribir es simple pero leer requiere 'scatter/gather' (consultar todas las particiones). Por término (global): el índice se particiona por el término buscado; leer es eficiente (una sola partición) pero escribir es más lento (un documento afecta varias particiones del índice)",
      "Por documento la lectura es eficiente y la escritura lenta; por término al revés",
      "Ambos enfoques son idénticos en lecturas y escrituras",
      "El índice global se almacena siempre en un solo nodo sin particionar",
    ],
    correct:
      "Por documento (local): cada partición indexa solo sus propios documentos; escribir es simple pero leer requiere 'scatter/gather' (consultar todas las particiones). Por término (global): el índice se particiona por el término buscado; leer es eficiente (una sola partición) pero escribir es más lento (un documento afecta varias particiones del índice)",
    explanation:
      "Con índice 'por documento' (local): cada partición mantiene su propio índice secundario solo de sus documentos. Escribir es simple (solo toca la partición del documento), pero leer por el índice requiere 'scatter/gather': enviar la consulta a TODAS las particiones y combinar (propenso a tail latency amplification). Lo usan MongoDB, Cassandra, Elasticsearch. Con índice 'por término' (global): el índice se particiona por el término buscado (p. ej. color:red), no por documento. Leer es eficiente (basta la partición que contiene el término), pero escribir es más lento y complejo, porque un documento puede afectar varias particiones del índice (idealmente requeriría una transacción distribuida; en la práctica las actualizaciones suelen ser asíncronas, como en DynamoDB).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-04",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para asignar particiones a nodos al rebalancear, ¿por qué NO conviene usar 'hash mod N' (donde N es el número de nodos)?",
    options: [
      "Porque si N (el número de nodos) cambia, la mayoría de las claves deben moverse a otro nodo (hash(key) mod N cambia para casi todas), haciendo el rebalanceo carísimo",
      "Porque el operador mod no existe en la mayoría de lenguajes",
      "Porque mod N nunca distribuye las claves de forma pareja",
      "Porque mod N requiere una transacción distribuida en cada lectura",
    ],
    correct:
      "Porque si N (el número de nodos) cambia, la mayoría de las claves deben moverse a otro nodo (hash(key) mod N cambia para casi todas), haciendo el rebalanceo carísimo",
    explanation:
      "El problema de 'hash mod N' es que, al cambiar N (al añadir o quitar nodos), el resultado de hash(key) mod N cambia para la mayoría de las claves, obligando a moverlas casi todas entre nodos. Por ejemplo, hash(key)=123456 va al nodo 6 con 10 nodos, al 3 con 11 y al 0 con 12. Esos movimientos masivos hacen el rebalanceo excesivamente caro. Se necesita un enfoque que no mueva más datos de lo necesario.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  {
    id: "ddia-c6-05",
    topic: "almacenamiento",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "Tras particionar, ¿cómo sabe un cliente a qué nodo conectarse (request routing / service discovery)?",
    options: [
      "Tres enfoques: (1) el cliente contacta cualquier nodo, que reenvía si no le corresponde; (2) un 'routing tier' decide y reenvía; (3) el cliente conoce la asignación. El reto es que todos acuerden el mapeo partición→nodo, a menudo con un servicio de coordinación como ZooKeeper (o gossip en Cassandra/Riak)",
      "El cliente siempre se conecta a un único nodo maestro fijo que nunca cambia",
      "No hace falta routing: cualquier nodo tiene todos los datos",
      "El cliente adivina el nodo al azar hasta acertar",
    ],
    correct:
      "Tres enfoques: (1) el cliente contacta cualquier nodo, que reenvía si no le corresponde; (2) un 'routing tier' decide y reenvía; (3) el cliente conoce la asignación. El reto es que todos acuerden el mapeo partición→nodo, a menudo con un servicio de coordinación como ZooKeeper (o gossip en Cassandra/Riak)",
    explanation:
      "El 'request routing' es un caso de 'service discovery'. Hay tres enfoques: (1) el cliente contacta cualquier nodo (round-robin); si no posee la partición, la reenvía; (2) todas las peticiones pasan por un 'routing tier' (load balancer consciente de particiones) que las reenvía; (3) el cliente conoce la asignación y se conecta directo. El reto clave es que todos los participantes acuerden el mapeo partición→nodo conforme cambia con el rebalanceo: muchos sistemas usan un servicio de coordinación externo como ZooKeeper (HBase, SolrCloud, Kafka), mientras que Cassandra y Riak usan un protocolo gossip entre nodos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 6 — Partitioning",
  },

  // ---- cap. 7 — Transactions ----
  {
    id: "ddia-c7-01",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann afina el significado de ACID. ¿Qué matices destaca sobre la Atomicidad y la Consistencia?",
    options: [
      "Atomicidad = 'abortabilidad': si una transacción falla a medias, se aborta y se descartan sus escrituras (no es sobre concurrencia; eso es Isolation). Consistencia (en ACID) es una propiedad de la APLICACIÓN (sus invariantes), no de la BD; por eso 'la C no pertenece realmente a ACID'",
      "Atomicidad trata de la concurrencia entre transacciones; Consistencia la garantiza siempre la base de datos sola",
      "Atomicidad significa que la transacción es indivisible en bits; Consistencia es el cifrado de los datos",
      "Ambas son responsabilidad exclusiva del hardware",
    ],
    correct:
      "Atomicidad = 'abortabilidad': si una transacción falla a medias, se aborta y se descartan sus escrituras (no es sobre concurrencia; eso es Isolation). Consistencia (en ACID) es una propiedad de la APLICACIÓN (sus invariantes), no de la BD; por eso 'la C no pertenece realmente a ACID'",
    explanation:
      "Kleppmann precisa ACID: la Atomicidad NO es sobre concurrencia (eso es Isolation), sino sobre qué pasa si una transacción falla a medias: se aborta y se descartan sus escrituras (mejor término sería 'abortabilidad'), permitiendo reintentar con seguridad. La Consistencia en ACID es un concepto de la APLICACIÓN: tus invariantes (p. ej. débitos = créditos) deben preservarse, pero es la app quien define transacciones correctas; la BD no puede garantizarlo sola (solo Atomicidad, Isolation y Durabilidad son propiedades de la BD). Por eso 'la C no pertenece realmente a ACID'.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-02",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es la diferencia entre operaciones de un solo objeto (single-object) y transacciones multi-objeto?",
    options: [
      "Single-object: atomicidad/aislamiento sobre UN objeto (p. ej. compare-and-set, incremento atómico; evitan lost updates pero no son 'transacciones' en el sentido usual). Multi-objeto: agrupan escrituras a varios objetos (filas/documentos/índices) como una unidad, necesario para mantener datos sincronizados (claves foráneas, denormalización, índices secundarios)",
      "Single-object agrupa varias filas y multi-objeto solo una",
      "Ambas son exactamente lo mismo",
      "Las multi-objeto solo existen en bases NoSQL sin esquema",
    ],
    correct:
      "Single-object: atomicidad/aislamiento sobre UN objeto (p. ej. compare-and-set, incremento atómico; evitan lost updates pero no son 'transacciones' en el sentido usual). Multi-objeto: agrupan escrituras a varios objetos (filas/documentos/índices) como una unidad, necesario para mantener datos sincronizados (claves foráneas, denormalización, índices secundarios)",
    explanation:
      "Casi todos los motores garantizan atomicidad y aislamiento a nivel de UN objeto (un par clave-valor en un nodo): operaciones como incremento atómico o compare-and-set evitan 'lost updates', pero NO son transacciones en el sentido usual (agrupar varias operaciones sobre varios objetos). Las transacciones multi-objeto agrupan escrituras a varios objetos como una unidad, y son necesarias cuando hay que mantener datos sincronizados: referencias por clave foránea, datos denormalizados que deben actualizarse juntos, o índices secundarios (que son objetos distintos y podrían quedar inconsistentes).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-03",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué dos garantías ofrece el nivel de aislamiento 'read committed' (uno de los más comunes, default en PostgreSQL)?",
    options: [
      "No dirty reads (solo se ven las escrituras de otras transacciones una vez confirmadas) y no dirty writes (no se sobreescribe un valor aún no confirmado). NO previene lost updates ni read skew",
      "Garantiza serializabilidad completa, evitando todas las race conditions",
      "Permite leer datos no confirmados (dirty reads) para mayor velocidad",
      "Bloquea todas las lecturas hasta que terminan todas las escrituras",
    ],
    correct:
      "No dirty reads (solo se ven las escrituras de otras transacciones una vez confirmadas) y no dirty writes (no se sobreescribe un valor aún no confirmado). NO previene lost updates ni read skew",
    explanation:
      "El nivel 'read committed' (default en Oracle, PostgreSQL, SQL Server) ofrece dos garantías: (1) no dirty reads: solo ves las escrituras de otra transacción cuando esta confirma (y todas a la vez); (2) no dirty writes: la segunda escritura sobre un objeto espera a que la primera transacción confirme/aborte (típicamente con row-level locks). Los dirty reads se evitan recordando el valor viejo committed mientras la transacción está en curso (los lectores no se bloquean). Pero read committed NO previene 'lost updates' ni 'read skew' (nonrepeatable read).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-04",
    topic: "calidad",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es el 'read skew' (nonrepeatable read) y qué nivel de aislamiento lo resuelve?",
    options: [
      "Ver la base en un estado inconsistente al leer distintas partes en momentos distintos (p. ej. ver $900 cuando una transferencia entre dos cuentas está a medias). Lo resuelve el snapshot isolation. Es intolerable en backups y queries analíticas/de integridad",
      "Ver datos no confirmados de otra transacción; lo resuelve el cifrado",
      "Que dos escrituras se pisen; lo resuelve un índice",
      "Un desbalanceo de carga entre particiones",
    ],
    correct:
      "Ver la base en un estado inconsistente al leer distintas partes en momentos distintos (p. ej. ver $900 cuando una transferencia entre dos cuentas está a medias). Lo resuelve el snapshot isolation. Es intolerable en backups y queries analíticas/de integridad",
    explanation:
      "El 'read skew' (lectura no repetible) ocurre cuando una transacción lee distintas partes de la BD en momentos distintos y la ve en un estado inconsistente: p. ej. Alice ve una cuenta con $500 (antes de recibir) y otra con $400 (después de enviar), pareciendo que faltan $100. Es tolerable bajo read committed (cada valor estaba committed al leerlo), pero intolerable para backups (un backup que tarda horas) o queries analíticas/de integridad que escanean gran parte de la BD. La solución es el snapshot isolation, que da una vista consistente congelada en el tiempo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-06",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué es el problema de 'lost update' y cómo se previene?",
    options: [
      "Dos transacciones hacen un ciclo read-modify-write concurrente sobre el mismo objeto y una modificación se pierde (la segunda escritura 'pisa' la primera). Se previene con operaciones atómicas (UPDATE ... SET x = x+1), compare-and-set, bloqueo explícito (FOR UPDATE) o detección automática de lost updates",
      "Una transacción lee datos no confirmados; se previene con read committed",
      "Se pierde toda la base de datos al fallar el líder; se previene con backups",
      "Un índice queda desactualizado; se previene con vacuum",
    ],
    correct:
      "Dos transacciones hacen un ciclo read-modify-write concurrente sobre el mismo objeto y una modificación se pierde (la segunda escritura 'pisa' la primera). Se previene con operaciones atómicas (UPDATE ... SET x = x+1), compare-and-set, bloqueo explícito (FOR UPDATE) o detección automática de lost updates",
    explanation:
      "El 'lost update' ocurre cuando dos transacciones leen un valor, lo modifican y lo reescriben (read-modify-write) concurrentemente: la segunda escritura no incluye la modificación de la primera, que se pierde (p. ej. dos incrementos de contador que solo suben 1, o dos usuarios editando un documento JSON). Soluciones: operaciones de escritura atómicas (UPDATE counters SET value = value + 1, la mejor opción), compare-and-set (escribir solo si el valor no cambió), bloqueo explícito de las filas (SELECT ... FOR UPDATE), o la detección automática de lost updates que ofrecen algunas implementaciones de snapshot isolation.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-07",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué es el 'write skew' y por qué es más difícil de prevenir que un lost update?",
    options: [
      "Dos transacciones leen los mismos objetos y luego actualizan objetos DISTINTOS, violando un invariante (p. ej. dos médicos se dan de baja a la vez tras comprobar que hay 'al menos 2 de guardia', quedando 0). Las operaciones atómicas de un objeto no ayudan; suele requerir serializabilidad real o bloqueo explícito (FOR UPDATE). Surge por 'phantoms'",
      "Es lo mismo que un dirty read y se evita con read committed",
      "Es un desbalanceo de carga entre nodos",
      "Se previene siempre con un incremento atómico de un solo objeto",
    ],
    correct:
      "Dos transacciones leen los mismos objetos y luego actualizan objetos DISTINTOS, violando un invariante (p. ej. dos médicos se dan de baja a la vez tras comprobar que hay 'al menos 2 de guardia', quedando 0). Las operaciones atómicas de un objeto no ayudan; suele requerir serializabilidad real o bloqueo explícito (FOR UPDATE). Surge por 'phantoms'",
    explanation:
      "El 'write skew' es una generalización del lost update: dos transacciones leen los mismos objetos y luego actualizan objetos DISTINTOS, violando un invariante que abarca varias filas (p. ej. ambos médicos de guardia comprueban 'hay ≥2 de guardia', ambos pasan, ambos se dan de baja y queda 0). Como afectan objetos distintos, no es un dirty write ni un lost update, y las operaciones atómicas de un solo objeto o la detección de lost updates no ayudan. A menudo surge por un 'phantom' (una escritura que cambia el resultado de una búsqueda previa). Prevenirlo automáticamente requiere aislamiento serializable; si no, hay que bloquear explícitamente las filas (FOR UPDATE).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  {
    id: "ddia-c7-08",
    topic: "calidad",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cómo logra el 'two-phase locking' (2PL) la serializabilidad, y en qué se diferencia del snapshot isolation?",
    options: [
      "Con locks: varias transacciones pueden leer un objeto a la vez (modo compartido), pero escribir exige acceso exclusivo. En 2PL los escritores bloquean a los lectores y viceversa; el snapshot isolation, en cambio, sigue el lema 'lectores nunca bloquean escritores ni viceversa'",
      "2PL no usa locks; deja correr todo y aborta al final como SSI",
      "En 2PL los lectores nunca bloquean a nadie, igual que en snapshot isolation",
      "2PL es lo mismo que two-phase commit (2PC)",
    ],
    correct:
      "Con locks: varias transacciones pueden leer un objeto a la vez (modo compartido), pero escribir exige acceso exclusivo. En 2PL los escritores bloquean a los lectores y viceversa; el snapshot isolation, en cambio, sigue el lema 'lectores nunca bloquean escritores ni viceversa'",
    explanation:
      "El 2PL (two-phase locking, distinto del 2PC) logra serializabilidad con locks más estrictos: varias transacciones pueden leer un objeto a la vez (lock compartido), pero en cuanto alguien quiere escribir necesita acceso exclusivo. Si A leyó un objeto y B quiere escribirlo, B espera a que A termine, y viceversa: en 2PL los escritores bloquean a los lectores y los lectores a los escritores (a diferencia del snapshot isolation, cuyo lema es 'lectores nunca bloquean escritores, ni escritores a lectores'). Por eso 2PL protege contra todas las race conditions (lost updates, write skew), pero con peor rendimiento y riesgo de deadlocks. Lo usa el nivel 'serializable' de MySQL/InnoDB y SQL Server.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 7 — Transactions",
  },

  // ---- cap. 8 — The Trouble with Distributed Systems ----
  {
    id: "ddia-c8-01",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un sistema distribuido con red poco fiable, ¿por qué es difícil 'detectar fallos' de un nodo?",
    options: [
      "Porque cuando envías una petición y no llega respuesta, no puedes distinguir si el nodo está caído, si está lento, o si el mensaje (o su respuesta) se perdió en la red: lo único que tienes es un timeout, y elegirlo es un trade-off (corto → declaras muerto a un nodo vivo; largo → tardas en reaccionar)",
      "Porque la red siempre entrega los mensajes instantáneamente y sin pérdidas",
      "Porque un nodo caído siempre avisa explícitamente antes de morir",
      "Porque los fallos parciales no existen: o todo funciona o nada funciona",
    ],
    correct:
      "Porque cuando envías una petición y no llega respuesta, no puedes distinguir si el nodo está caído, si está lento, o si el mensaje (o su respuesta) se perdió en la red: lo único que tienes es un timeout, y elegirlo es un trade-off (corto → declaras muerto a un nodo vivo; largo → tardas en reaccionar)",
    explanation:
      "Los sistemas distribuidos sufren 'fallos parciales' no deterministas: parte funciona y parte no. Las redes son asíncronas y poco fiables: al no recibir respuesta no puedes saber si el nodo está caído, lento, o si se perdió la petición o su respuesta. Lo único disponible es un timeout, y elegirlo es un trade-off: demasiado corto declara muerto a un nodo que solo iba lento (causando acciones innecesarias, p. ej. failovers); demasiado largo tarda en reaccionar. No hay forma infalible de detectar el fallo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-02",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es la diferencia entre un reloj 'time-of-day' (wall-clock) y un reloj 'monotónico', y para qué sirve cada uno?",
    options: [
      "Time-of-day: fecha/hora del calendario, sincronizado por NTP, pero puede saltar hacia atrás (no sirve para medir duraciones). Monotónico: siempre avanza, su valor absoluto no significa nada (no comparable entre máquinas), pero es ideal para medir duraciones (timeouts, tiempos de respuesta)",
      "El monotónico da la fecha del calendario y el time-of-day mide duraciones",
      "Ambos son idénticos y siempre están perfectamente sincronizados entre nodos",
      "El time-of-day nunca cambia y el monotónico salta hacia atrás constantemente",
    ],
    correct:
      "Time-of-day: fecha/hora del calendario, sincronizado por NTP, pero puede saltar hacia atrás (no sirve para medir duraciones). Monotónico: siempre avanza, su valor absoluto no significa nada (no comparable entre máquinas), pero es ideal para medir duraciones (timeouts, tiempos de respuesta)",
    explanation:
      "El reloj 'time-of-day' (wall-clock, p. ej. System.currentTimeMillis()) devuelve la fecha/hora del calendario (segundos desde el epoch), sincronizado por NTP; pero puede saltar hacia atrás si NTP lo reajusta, e ignora leap seconds, por lo que NO sirve para medir tiempo transcurrido. El reloj 'monotónico' (System.nanoTime()) está garantizado a siempre avanzar; su valor absoluto es arbitrario y no comparable entre máquinas, pero la diferencia entre dos lecturas mide bien una duración (timeouts, response time). En sistemas distribuidos, usar el monotónico para medir intervalos es seguro; el time-of-day no.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué Kleppmann advierte que NO se deben usar los timestamps de los relojes (time-of-day) para ordenar eventos entre nodos (p. ej. para 'last write wins')?",
    options: [
      "Porque los relojes de distintos nodos nunca están perfectamente sincronizados (drift del cuarzo, error de NTP de decenas de ms, saltos al resincronizar): un 'last write wins' basado en timestamps puede descartar silenciosamente escrituras por clock skew, perdiendo datos",
      "Porque los timestamps son siempre exactos al nanosegundo en todos los nodos",
      "Porque ordenar por timestamp es lo más fiable que existe",
      "Porque los relojes monotónicos están perfectamente sincronizados entre máquinas",
    ],
    correct:
      "Porque los relojes de distintos nodos nunca están perfectamente sincronizados (drift del cuarzo, error de NTP de decenas de ms, saltos al resincronizar): un 'last write wins' basado en timestamps puede descartar silenciosamente escrituras por clock skew, perdiendo datos",
    explanation:
      "Aunque los relojes parecen simples, tienen muchas trampas: el cuarzo deriva (drift, p. ej. 200 ppm), NTP solo es tan preciso como la red (error mínimo de ~35 ms por internet, a veces ~1 s), un reloj muy desviado puede ser reseteado y 'saltar' hacia atrás, y los leap seconds han tumbado sistemas. Por eso es peligroso usar timestamps de relojes para ordenar eventos entre nodos: una estrategia 'last write wins' puede descartar silenciosamente una escritura cuyo nodo tenía el reloj atrasado (clock skew), perdiendo datos. Para ordenar causalmente se usan mecanismos lógicos (version vectors, números de secuencia), no relojes físicos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-04",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué un nodo de un sistema distribuido puede 'pausarse' arbitrariamente y qué implicación tiene?",
    options: [
      "Por una pausa stop-the-world del garbage collector (u otras: hibernación de VM, swapping…), un hilo puede quedar congelado segundos o minutos sin darse cuenta; al despertar cree que apenas pasó tiempo, aunque los demás ya lo declararon muerto. No se puede asumir un límite de tiempo de respuesta",
      "Porque el reloj monotónico se detiene físicamente",
      "Porque la red garantiza que ningún nodo se pausa nunca",
      "Porque el nodo avisa siempre antes de pausarse y nadie lo declara muerto",
    ],
    correct:
      "Por una pausa stop-the-world del garbage collector (u otras: hibernación de VM, swapping…), un hilo puede quedar congelado segundos o minutos sin darse cuenta; al despertar cree que apenas pasó tiempo, aunque los demás ya lo declararon muerto. No se puede asumir un límite de tiempo de respuesta",
    explanation:
      "Un nodo puede sufrir pausas arbitrarias: una pausa 'stop-the-world' del garbage collector congela todos los hilos durante segundos o incluso un minuto; también la pausa de una VM al compartir CPU, el swapping a disco, o suspender un laptop. Lo peligroso es que el nodo no se da cuenta: al reanudarse cree que apenas pasó tiempo, aunque los demás ya lo declararon muerto y, por ejemplo, eligieron otro líder. Por eso no se puede asumir un límite superior en el tiempo de respuesta de un nodo (sistema asíncrono), lo que complica leases, locks y liderazgo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-05",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un sistema distribuido, ¿por qué 'la verdad la define la mayoría' (quorum)?",
    options: [
      "Porque un nodo no puede confiar en su propio juicio (puede estar semi-desconectado o haber sufrido una pausa GC sin saberlo): muchos algoritmos deciden por quórum (votación), p. ej. una mayoría absoluta. Si un quórum declara muerto a un nodo, este debe acatarlo aunque se sienta vivo",
      "Porque el nodo más rápido siempre tiene razón",
      "Porque un solo nodo líder decide todo sin consultar a nadie",
      "Porque las decisiones se toman al azar entre los nodos",
    ],
    correct:
      "Porque un nodo no puede confiar en su propio juicio (puede estar semi-desconectado o haber sufrido una pausa GC sin saberlo): muchos algoritmos deciden por quórum (votación), p. ej. una mayoría absoluta. Si un quórum declara muerto a un nodo, este debe acatarlo aunque se sienta vivo",
    explanation:
      "Un nodo no puede confiar en su propio juicio: puede estar semi-desconectado (recibe pero sus respuestas se pierden) o haber sufrido una pausa GC, y ser declarado muerto erróneamente sin poder evitarlo. Por eso un sistema distribuido no puede depender de un solo nodo; muchos algoritmos deciden por quórum (votación entre nodos), comúnmente una mayoría absoluta (>la mitad). Si un quórum declara muerto a un nodo, debe considerarse muerto y este debe ceder, aunque se sienta vivo. La mayoría es segura porque solo puede haber una mayoría a la vez (no dos decisiones mayoritarias en conflicto).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-06",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Para qué sirve un 'fencing token' al usar un lock/lease distribuido?",
    options: [
      "Es un número que crece cada vez que se concede el lock; el cliente lo incluye en cada escritura y el recurso RECHAZA escrituras con un token menor al ya procesado. Evita que un nodo pausado, que cree tener aún el lease (ya expirado), corrompa el recurso",
      "Es una contraseña que cifra el recurso",
      "Es un timeout que apaga el nodo automáticamente",
      "Es un identificador aleatorio que no necesita verificarse en el recurso",
    ],
    correct:
      "Es un número que crece cada vez que se concede el lock; el cliente lo incluye en cada escritura y el recurso RECHAZA escrituras con un token menor al ya procesado. Evita que un nodo pausado, que cree tener aún el lease (ya expirado), corrompa el recurso",
    explanation:
      "Si un cliente con un lease se pausa demasiado (p. ej. GC), su lease expira y otro cliente obtiene uno nuevo; al despertar, el primero cree (incorrectamente) que aún lo tiene y escribe, corrompiendo el recurso. El 'fencing token' lo previene: el servicio de locks devuelve un número que aumenta en cada concesión; el cliente lo incluye en cada escritura, y el recurso rechaza cualquier escritura con un token menor al máximo ya procesado. Clave: el RECURSO debe verificar el token activamente (no basta con que el cliente compruebe su lock). En ZooKeeper se puede usar el zxid o cversion como token.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  {
    id: "ddia-c8-07",
    topic: "calidad",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "Al razonar sobre algoritmos distribuidos se usan 'system models'. ¿Cuáles son los modelos de temporización y de fallos de nodos?",
    options: [
      "Temporización: síncrono (límites conocidos de retraso/pausas), parcialmente síncrono (normalmente acotado pero a veces no) y asíncrono (sin supuestos de tiempo). Fallos de nodos: crash-stop (falla y no vuelve), crash-recovery (puede volver) y bizantino (arbitrario/malicioso). El parcialmente síncrono + crash-recovery suele ser el más realista",
      "Solo existe un único modelo y asume que la red es perfecta",
      "Síncrono significa que los nodos mienten y asíncrono que son honestos",
      "Crash-stop significa que el nodo se recupera y bizantino que se apaga limpiamente",
    ],
    correct:
      "Temporización: síncrono (límites conocidos de retraso/pausas), parcialmente síncrono (normalmente acotado pero a veces no) y asíncrono (sin supuestos de tiempo). Fallos de nodos: crash-stop (falla y no vuelve), crash-recovery (puede volver) y bizantino (arbitrario/malicioso). El parcialmente síncrono + crash-recovery suele ser el más realista",
    explanation:
      "Para diseñar algoritmos robustos se formalizan 'system models'. Por temporización: síncrono (existen límites conocidos para el retraso de red y las pausas de proceso —poco realista—), parcialmente síncrono (suele comportarse como síncrono pero a veces excede los límites —el más realista—) y asíncrono (no se puede asumir nada sobre el tiempo, ni siquiera relojes). Por fallos de nodos: crash-stop (un nodo falla y nunca vuelve), crash-recovery (puede caer y reanudarse, conservando lo persistido en disco) y bizantino (comportamiento arbitrario, incluido mentir). Combinar 'parcialmente síncrono + crash-recovery' suele ser el modelo más útil para sistemas reales.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 8 — The Trouble with Distributed Systems",
  },

  // ---- cap. 9 — Consistency and Consensus ----
  {
    id: "ddia-c9-01",
    topic: "calidad",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es la diferencia entre linearizabilidad y serializabilidad (que suelen confundirse)?",
    options: [
      "Serializabilidad: propiedad de AISLAMIENTO de transacciones (varias operaciones sobre varios objetos) equivalente a algún orden serial. Linearizabilidad: garantía de RECENCIA sobre lecturas/escrituras de un objeto individual (no agrupa en transacciones). Combinarlas = 'strict serializability'",
      "Son exactamente lo mismo, solo cambia el nombre",
      "Linearizabilidad agrupa transacciones y serializabilidad opera sobre un solo objeto",
      "La serializabilidad es más débil que la consistencia eventual",
    ],
    correct:
      "Serializabilidad: propiedad de AISLAMIENTO de transacciones (varias operaciones sobre varios objetos) equivalente a algún orden serial. Linearizabilidad: garantía de RECENCIA sobre lecturas/escrituras de un objeto individual (no agrupa en transacciones). Combinarlas = 'strict serializability'",
    explanation:
      "Se confunden porque ambas suenan a 'ordenar secuencialmente', pero son distintas: la serializabilidad es una propiedad de aislamiento de transacciones (que leen/escriben varios objetos) y garantiza un resultado equivalente a ejecutarlas en ALGÚN orden serial (no necesariamente el real). La linearizabilidad es una garantía de recencia sobre lecturas/escrituras de un objeto individual; no agrupa operaciones en transacciones, así que por sí sola no evita el write skew. Combinar ambas se llama 'strict serializability'. El 2PL y la ejecución serial real suelen ser linearizables; el SSI (snapshot) NO lo es (lee de un snapshot, no del valor más reciente).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué es el 'total order broadcast' (atomic broadcast) y por qué es clave para la replicación?",
    options: [
      "Un protocolo que entrega mensajes a todos los nodos de forma fiable (si llega a uno, llega a todos) y en el MISMO orden total, fijado al entregarse. Si cada mensaje es una escritura y todas las réplicas las aplican en ese orden, quedan consistentes ('state machine replication')",
      "Un protocolo que entrega cada mensaje a un solo nodo al azar",
      "Una forma de ordenar mensajes por el timestamp del reloj de pared",
      "Un método para comprimir mensajes en la red",
    ],
    correct:
      "Un protocolo que entrega mensajes a todos los nodos de forma fiable (si llega a uno, llega a todos) y en el MISMO orden total, fijado al entregarse. Si cada mensaje es una escritura y todas las réplicas las aplican en ese orden, quedan consistentes ('state machine replication')",
    explanation:
      "El 'total order broadcast' (broadcast atómico) es un protocolo de mensajes entre nodos con dos garantías de seguridad: entrega fiable (si un mensaje llega a un nodo, llega a todos) y entrega totalmente ordenada (todos los nodos los reciben en el mismo orden), con el orden fijado al momento de entregar (no se puede insertar retroactivamente). Es justo lo que necesita la replicación: si cada mensaje es una escritura y todas las réplicas las aplican en el mismo orden, quedan consistentes ('state machine replication'). También sirve para implementar transacciones serializables y un log. Es más fuerte que ordenar por timestamps. ZooKeeper y etcd lo implementan.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-04",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué son los 'Lamport timestamps' y para qué sirven?",
    options: [
      "Relojes lógicos (no físicos): un par (contador, ID de nodo) que provee un orden total consistente con la causalidad, sin depender de relojes de pared. Cada nodo lleva su contador máximo y lo propaga en los mensajes",
      "Timestamps del reloj de pared sincronizados por NTP",
      "Un identificador aleatorio para cada transacción",
      "El número de versión de un objeto en object storage",
    ],
    correct:
      "Relojes lógicos (no físicos): un par (contador, ID de nodo) que provee un orden total consistente con la causalidad, sin depender de relojes de pared. Cada nodo lleva su contador máximo y lo propaga en los mensajes",
    explanation:
      "Como los relojes físicos no son fiables para ordenar eventos entre nodos, se usan relojes lógicos. Un Lamport timestamp es un par (contador, ID de nodo) que provee un orden total consistente con la causalidad: se comparan primero por contador y, en empate, por ID de nodo. Cada nodo y cliente lleva el máximo contador que ha visto y lo incluye en cada petición/respuesta, de modo que el contador se propaga. Son más compactos que los version vectors, pero (a diferencia del total order broadcast) el orden total solo queda determinado después de recolectar todas las operaciones, no en tiempo real.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-05",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cómo funciona el 'two-phase commit' (2PC) para commits atómicos distribuidos y cuál es su gran problema?",
    options: [
      "Un coordinador pregunta a todos los participantes si pueden confirmar (fase 1: prepare); si todos dicen sí, el coordinador decide commit y se lo ordena a todos (fase 2). Problema: si el coordinador falla tras el prepare, los participantes 'in-doubt' quedan bloqueados esperando, sin poder decidir por su cuenta",
      "Cada nodo confirma su parte de forma independiente sin coordinarse",
      "Es lo mismo que el two-phase locking (2PL)",
      "Garantiza la confirmación incluso si todos los nodos fallan",
    ],
    correct:
      "Un coordinador pregunta a todos los participantes si pueden confirmar (fase 1: prepare); si todos dicen sí, el coordinador decide commit y se lo ordena a todos (fase 2). Problema: si el coordinador falla tras el prepare, los participantes 'in-doubt' quedan bloqueados esperando, sin poder decidir por su cuenta",
    explanation:
      "El 2PC logra atomicidad cuando una transacción abarca varios nodos: un coordinador ejecuta dos fases. Fase 1 (prepare): pregunta a cada participante si está seguro de poder confirmar; al responder 'sí', el participante promete confirmar (renuncia a abortar). Fase 2: si TODOS prometieron, el coordinador escribe su decisión (commit) y la envía a todos; si alguno dijo no, aborta. El commit es irrevocable. Su gran problema: si el coordinador falla justo después del prepare, los participantes 'in-doubt' quedan bloqueados esperando su decisión, sin poder decidir solos (no es tolerante a fallos: no cumple la propiedad de 'termination' del consenso). No confundir 2PC con 2PL.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-06",
    topic: "calidad",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué relación hay entre el consenso y el total order broadcast, y cuáles son algoritmos de consenso conocidos?",
    options: [
      "El total order broadcast equivale a rondas repetidas de consenso (cada decisión = entregar un mensaje en el orden total). Algoritmos: Paxos, Raft, Zab y Viewstamped Replication (VSR), que implementan total order broadcast directamente por eficiencia",
      "El consenso y el total order broadcast no tienen ninguna relación",
      "El único algoritmo de consenso es el 'last write wins'",
      "El total order broadcast requiere abandonar todo tipo de quórum",
    ],
    correct:
      "El total order broadcast equivale a rondas repetidas de consenso (cada decisión = entregar un mensaje en el orden total). Algoritmos: Paxos, Raft, Zab y Viewstamped Replication (VSR), que implementan total order broadcast directamente por eficiencia",
    explanation:
      "El total order broadcast equivale a rondas repetidas de consenso: en cada ronda los nodos proponen el siguiente mensaje a entregar y deciden cuál va a continuación en el orden total (el acuerdo garantiza mismo orden, la integridad que no se duplican, la validez que no se inventan, la terminación que no se pierden). Los algoritmos de consenso tolerante a fallos más conocidos —Paxos, Raft, Zab, Viewstamped Replication (VSR)— en realidad deciden una secuencia de valores, es decir, implementan total order broadcast directamente (más eficiente que decidir un valor a la vez). Implementar consenso uno mismo es muy difícil; conviene usar servicios existentes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  {
    id: "ddia-c9-08",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Para qué se usan los servicios de coordinación como Apache ZooKeeper y etcd?",
    options: [
      "Implementan operaciones linearizables de forma tolerante a fallos (vía consenso) para tareas de coordinación: elección de líder, locks distribuidos con fencing tokens, detección de membresía de nodos (failure detection) y almacenar metadatos de configuración/asignación de particiones",
      "Son bases de datos analíticas columnar para petabytes",
      "Son motores de búsqueda de texto completo",
      "Son sistemas de archivos distribuidos para almacenar video",
    ],
    correct:
      "Implementan operaciones linearizables de forma tolerante a fallos (vía consenso) para tareas de coordinación: elección de líder, locks distribuidos con fencing tokens, detección de membresía de nodos (failure detection) y almacenar metadatos de configuración/asignación de particiones",
    explanation:
      "ZooKeeper y etcd son servicios de coordinación que usan algoritmos de consenso para ofrecer operaciones linearizables de forma tolerante a fallos. Se usan para: elección de líder (evitar split brain), locks distribuidos (a menudo con fencing tokens como el zxid), detección de membresía/fallos de nodos, y guardar metadatos de cluster (configuración, asignación de particiones a nodos). Manejan pequeñas cantidades de datos que cambian lentamente, no datos de aplicación. Librerías como Apache Curator dan 'recetas' de alto nivel sobre ZooKeeper.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 9 — Consistency and Consensus",
  },

  // ---- cap. 10 — Batch Processing ----
  {
    id: "ddia-c10-01",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Kleppmann distingue tres tipos de sistemas según cómo procesan datos. ¿Cuál describe un sistema de procesamiento por lotes (batch) y su métrica principal?",
    options: [
      "Toma una gran cantidad de datos de entrada, corre un job que los procesa y produce datos de salida; suele tardar de minutos a días sin un usuario esperando, y su métrica principal es el throughput (cuánto tarda en procesar un dataset de cierto tamaño)",
      "Espera la petición de un cliente y responde lo más rápido posible; su métrica principal es el response time y la disponibilidad",
      "Opera sobre eventos poco después de que ocurren, con baja latencia; es un sistema 'near-real-time'",
      "Procesa cada registro de forma interactiva con un usuario esperando, optimizando la latencia por petición",
    ],
    correct:
      "Toma una gran cantidad de datos de entrada, corre un job que los procesa y produce datos de salida; suele tardar de minutos a días sin un usuario esperando, y su métrica principal es el throughput (cuánto tarda en procesar un dataset de cierto tamaño)",
    explanation:
      "El libro distingue: (1) servicios (sistemas online) que esperan una petición y responden rápido, midiéndose por response time y disponibilidad; (2) sistemas batch (offline) que toman un gran dataset de entrada, corren un job (minutos a días) y producen una salida, normalmente programados periódicamente y sin un usuario esperando, cuya métrica principal es el throughput; y (3) stream processing (near-real-time), a medio camino, que opera sobre eventos poco después de que ocurren. El cap. 10 trata el batch; el cap. 11, el streaming.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-02",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Según Kleppmann, ¿qué hace que las herramientas de Unix (awk, sort, uniq, grep…) se compongan tan bien en pipelines de procesamiento de datos?",
    options: [
      "Una interfaz uniforme (todo es un 'archivo': una secuencia ordenada de bytes, por convención texto ASCII por líneas) y la separación entre lógica y 'cableado' (los programas leen de stdin y escriben a stdout sin saber de dónde viene ni a dónde va su entrada/salida); además tratan la entrada como inmutable",
      "Que todas comparten una base de datos central con un esquema estricto",
      "Que cada herramienta abre directamente sus archivos y conexiones de red, acoplándose fuertemente entre sí",
      "Que reescriben el archivo de entrada in-place para ahorrar memoria",
    ],
    correct:
      "Una interfaz uniforme (todo es un 'archivo': una secuencia ordenada de bytes, por convención texto ASCII por líneas) y la separación entre lógica y 'cableado' (los programas leen de stdin y escriben a stdout sin saber de dónde viene ni a dónde va su entrada/salida); además tratan la entrada como inmutable",
    explanation:
      "La 'filosofía Unix' (hacer una cosa bien, esperar que la salida de un programa sea la entrada de otro) se apoya en dos ideas: (1) una interfaz uniforme —en Unix todo es un archivo, es decir una secuencia de bytes, y por convención muchas herramientas la tratan como texto ASCII separado por saltos de línea—, lo que permite conectar la salida de cualquier programa con la entrada de otro; y (2) la separación de lógica y cableado: los programas usan stdin/stdout y no saben (ni les importa) de dónde viene su entrada ni a dónde va su salida, así el usuario los conecta con pipes. Además la entrada se trata como inmutable, lo que facilita experimentar y depurar. Estas ideas se trasladan a MapReduce.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-03",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Para contar las URLs más visitadas en un log enorme, ¿qué ventaja tiene la cadena Unix `sort | uniq -c` frente a un script que mantiene una tabla hash en memoria?",
    options: [
      "Cuando el working set no cabe en RAM, `sort` maneja datasets mayores que la memoria derramando (spilling) a disco y mezclando segmentos ordenados (mergesort, con acceso secuencial eficiente en disco), y además paraleliza entre varios CPU; la tabla hash en memoria solo funciona si todas las claves distintas caben en RAM",
      "La tabla hash siempre es más lenta porque es O(n²)",
      "`sort` carga el archivo entero en memoria de una vez, por eso es más rápido",
      "No hay diferencia: ambos exigen que todo el dataset quepa en RAM",
    ],
    correct:
      "Cuando el working set no cabe en RAM, `sort` maneja datasets mayores que la memoria derramando (spilling) a disco y mezclando segmentos ordenados (mergesort, con acceso secuencial eficiente en disco), y además paraleliza entre varios CPU; la tabla hash en memoria solo funciona si todas las claves distintas caben en RAM",
    explanation:
      "El script en memoria mantiene una tabla hash URL→contador: funciona bien si el working set (las claves distintas) cabe en RAM. Si no cabe, el enfoque por ordenamiento tiene ventaja: `sort` de GNU Coreutils derrama automáticamente a disco cuando el dataset supera la memoria y paraleliza entre varios cores. Es el mismo principio de las SSTables/LSM-trees: ordenar trozos en memoria, escribirlos como segmentos y mezclarlos; el mergesort tiene acceso secuencial, óptimo en disco. Así la simple cadena Unix escala a datasets grandes sin quedarse sin memoria.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-04",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿En qué se basa HDFS (el filesystem distribuido de Hadoop) y qué principio de eficiencia aprovecha MapReduce al correr sobre él?",
    options: [
      "En el principio shared-nothing: un daemon en cada máquina expone sus discos y un NameNode central registra qué bloques están en qué máquina; los bloques se replican (o se usan erasure codes) para tolerar fallos. MapReduce aplica 'poner la computación cerca de los datos', ejecutando cada mapper en una máquina que ya tiene una réplica de su bloque de entrada para evitar copiarlo por red",
      "En almacenamiento compartido (shared-disk) con hardware especializado tipo SAN; MapReduce siempre copia todos los datos por la red",
      "En una única máquina muy potente que guarda todo el dataset en sus discos",
      "En RAM replicada entre nodos, sin usar discos locales",
    ],
    correct:
      "En el principio shared-nothing: un daemon en cada máquina expone sus discos y un NameNode central registra qué bloques están en qué máquina; los bloques se replican (o se usan erasure codes) para tolerar fallos. MapReduce aplica 'poner la computación cerca de los datos', ejecutando cada mapper en una máquina que ya tiene una réplica de su bloque de entrada para evitar copiarlo por red",
    explanation:
      "HDFS se basa en el principio shared-nothing (frente al shared-disk de un NAS/SAN con hardware especializado): solo requiere máquinas comunes conectadas por una red de datacenter. Un daemon en cada máquina expone sus discos por red y un servidor central, el NameNode, registra qué bloques de archivo están en qué máquina, creando conceptualmente un gran filesystem sobre los discos de todas. Para tolerar fallos, los bloques se replican en varias máquinas (o se usan erasure codes tipo Reed–Solomon, con menos overhead). MapReduce aprovecha la localidad: el scheduler intenta correr cada mapper en una máquina que ya tiene una réplica de su bloque de entrada ('computation near the data'), ahorrando tráfico de red.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-05",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Cuál es el patrón de ejecución de un job MapReduce y qué papel juega el ordenamiento (sort)?",
    options: [
      "1) leer la entrada y partirla en registros; 2) el mapper extrae un par clave-valor de cada registro; 3) el framework ordena todos los pares por clave; 4) el reducer itera sobre los pares ya ordenados combinando los de la misma clave. Solo escribes mapper y reducer: el sort intermedio es implícito, lo añade el framework",
      "El mapper ordena los datos y el reducer los lee sin ordenar; tú implementas el sort a mano",
      "Mapper y reducer corren en paralelo sobre el mismo registro, sin ningún orden de por medio",
      "El reducer se ejecuta antes que el mapper para preparar las claves",
    ],
    correct:
      "1) leer la entrada y partirla en registros; 2) el mapper extrae un par clave-valor de cada registro; 3) el framework ordena todos los pares por clave; 4) el reducer itera sobre los pares ya ordenados combinando los de la misma clave. Solo escribes mapper y reducer: el sort intermedio es implícito, lo añade el framework",
    explanation:
      "El patrón MapReduce replica el ejemplo del análisis de logs: (1) el input format parser parte los archivos en registros; (2) el mapper se llama una vez por registro y extrae un par clave-valor (sin guardar estado entre registros); (3) el framework ordena todos los pares por clave —este paso es implícito, no lo escribes—; (4) el reducer recibe cada clave con un iterador sobre todos sus valores y produce la salida. El número de map tasks lo fija el número de bloques de entrada; el de reduce tasks lo configura el autor. Solo programas mapper y reducer.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-06",
    topic: "transformacion",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "En un 'reduce-side sort-merge join' (p. ej. unir eventos de actividad con el perfil de cada usuario por user ID), ¿cómo logra MapReduce juntar los registros relacionados?",
    options: [
      "Los mappers de ambas entradas emiten el user ID como clave; al particionar y ordenar por clave, los eventos y el registro de perfil del mismo user ID quedan adyacentes en la entrada del reducer (con un 'secondary sort' se garantiza que el perfil llegue primero). El reducer guarda el perfil y recorre los eventos sin hacer ninguna petición por red",
      "El reducer consulta la base de datos de usuarios por red para cada evento, uno a uno",
      "Se cargan ambas entradas completas en la memoria del coordinador y se cruzan ahí",
      "Se ordena por el timestamp del reloj de pared en lugar de por clave",
    ],
    correct:
      "Los mappers de ambas entradas emiten el user ID como clave; al particionar y ordenar por clave, los eventos y el registro de perfil del mismo user ID quedan adyacentes en la entrada del reducer (con un 'secondary sort' se garantiza que el perfil llegue primero). El reducer guarda el perfil y recorre los eventos sin hacer ninguna petición por red",
    explanation:
      "Consultar la BD remota por cada evento sería lentísimo (limitado por el round-trip) y no determinista. En su lugar se copia la BD de usuarios al mismo filesystem distribuido y se hace un sort-merge join: un set de mappers recorre los eventos (clave = user ID, valor = evento) y otro recorre la BD (clave = user ID, valor = perfil). Al particionar y ordenar por clave, todos los registros del mismo user ID quedan adyacentes en el reducer; con un 'secondary sort' se ordena para que el perfil llegue primero. El reducer guarda el perfil en una variable local y recorre los eventos, sin pedir nada por red. Es la idea de 'juntar los datos relacionados en el mismo lugar': los mappers 'envían mensajes' a los reducers, y la clave actúa como dirección de destino.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-08",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Al hacer un join o GROUP BY en MapReduce, ¿qué problema causan las 'hot keys' (o 'linchpin objects', p. ej. una celebridad con millones de seguidores) y cómo se mitiga?",
    options: [
      "Concentran demasiados registros en un solo reducer (skew / hot spots): como el job no termina hasta que acaba el reducer más lento, lo retrasan todo. Se mitiga repartiendo los registros de la clave caliente entre varios reducers (p. ej. el 'skewed join' de Pig muestrea primero las claves calientes y luego las distribuye al azar, replicando el otro lado del join a esos reducers)",
      "Hacen que el reducer devuelva resultados incorrectos; se corrige cifrando la clave",
      "Saturan la memoria del NameNode; se mitiga añadiendo más NameNodes",
      "No son un problema porque MapReduce reparte siempre las claves de forma perfectamente equitativa",
    ],
    correct:
      "Concentran demasiados registros en un solo reducer (skew / hot spots): como el job no termina hasta que acaba el reducer más lento, lo retrasan todo. Se mitiga repartiendo los registros de la clave caliente entre varios reducers (p. ej. el 'skewed join' de Pig muestrea primero las claves calientes y luego las distribuye al azar, replicando el otro lado del join a esos reducers)",
    explanation:
      "El patrón 'llevar todos los registros de una clave al mismo reducer' se rompe si una clave acumula muchísimos datos (hot key / linchpin object, como una celebridad). Eso causa skew (hot spots): un reducer procesa muchos más registros que los demás, y como el job solo termina cuando acaban TODOS sus reducers, ese straggler retrasa todo el workflow (y los jobs siguientes). Mitigaciones: el 'skewed join' de Pig corre primero un job de muestreo para detectar las claves calientes y, en el join real, envía sus registros a varios reducers elegidos al azar (replicando el otro lado del join a todos esos reducers); el 'sharded join' de Crunch es similar pero con las claves calientes especificadas a mano; Hive las guarda en archivos aparte y usa un map-side join para ellas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-09",
    topic: "transformacion",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "Como un solo job MapReduce resuelve problemas limitados, es común encadenar muchos jobs en 'workflows'. ¿Cómo se encadenan y qué herramientas los gestionan?",
    options: [
      "La salida de un job se escribe en un directorio de HDFS que el siguiente lee como entrada; un job solo puede empezar cuando los que producen su entrada terminaron con éxito (la salida solo es válida si el job completó). Para gestionar esas dependencias se usan schedulers de workflows como Oozie, Azkaban, Luigi, Airflow y Pinball",
      "Los jobs se comunican por memoria compartida sin tocar disco, igual que las pipes de Unix",
      "Un único job lo hace todo, por lo que nunca se encadenan jobs",
      "El NameNode decide automáticamente el orden de ejecución sin necesidad de configuración",
    ],
    correct:
      "La salida de un job se escribe en un directorio de HDFS que el siguiente lee como entrada; un job solo puede empezar cuando los que producen su entrada terminaron con éxito (la salida solo es válida si el job completó). Para gestionar esas dependencias se usan schedulers de workflows como Oozie, Azkaban, Luigi, Airflow y Pinball",
    explanation:
      "Un solo job MapReduce puede, por ejemplo, contar vistas por URL, pero no las URLs más populares (eso exige un segundo sort). Por eso los jobs se encadenan en workflows: el primer job escribe su salida en un directorio designado de HDFS y el segundo se configura para leer ese mismo directorio. El framework no tiene soporte explícito de workflows: el encadenamiento es implícito por nombre de directorio. Como la salida de un job solo es válida si completó con éxito (MapReduce descarta la salida de jobs fallidos), un job solo arranca cuando los que producen su entrada terminaron bien. Para manejar estas dependencias (y workflows de 50–100 jobs en sistemas de recomendación) se usan schedulers como Oozie, Azkaban, Luigi, Airflow y Pinball, además de herramientas de más alto nivel como Pig y Hive.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-11",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Si un job batch debe producir una base de datos para que la consulte una app web (p. ej. 'productos relacionados'), ¿por qué es mala idea que los mappers/reducers escriban directamente en la BD de producción, registro a registro, y qué se hace en su lugar?",
    options: [
      "Una petición de red por registro es órdenes de magnitud más lenta que el throughput del batch, muchas tareas en paralelo pueden saturar la BD, y las escrituras externas rompen la garantía 'todo o nada' (efectos visibles de tareas parciales o reintentadas). En su lugar se construye una BD nueva como archivos inmutables en el filesystem distribuido y se cargan en bloque en servidores de solo lectura (p. ej. Voldemort, que cambia atómicamente a los archivos nuevos)",
      "No pasa nada: escribir registro a registro en la BD de producción es la práctica recomendada",
      "Hay que escribir directamente, pero sin índices, para ir más rápido",
      "Se debe escribir a la BD desde el NameNode para centralizar las escrituras",
    ],
    correct:
      "Una petición de red por registro es órdenes de magnitud más lenta que el throughput del batch, muchas tareas en paralelo pueden saturar la BD, y las escrituras externas rompen la garantía 'todo o nada' (efectos visibles de tareas parciales o reintentadas). En su lugar se construye una BD nueva como archivos inmutables en el filesystem distribuido y se cargan en bloque en servidores de solo lectura (p. ej. Voldemort, que cambia atómicamente a los archivos nuevos)",
    explanation:
      "Escribir desde el job a la BD de producción registro a registro es mala idea: (1) una petición de red por registro es órdenes de magnitud más lenta que el throughput de un batch; (2) muchas tareas paralelas pueden saturar la BD y degradar sus consultas; (3) rompe la limpia semántica 'todo o nada' de MapReduce, exponiendo efectos secundarios de tareas parcialmente completadas o reintentadas (speculative execution). Mejor: construir una BD nueva como archivos inmutables dentro del directorio de salida del job (como los índices de búsqueda) y cargarlos en bloque en servidores de solo lectura. Voldemort, Terrapin, ElephantDB y el bulk loading de HBase hacen esto; Voldemort sigue sirviendo los archivos viejos mientras copia los nuevos y luego cambia atómicamente, pudiendo revertir si algo falla.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-12",
    topic: "fundamentos",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Qué ventajas operativas se derivan de que un job batch trate su entrada como inmutable y no produzca efectos secundarios (solo su salida)?",
    options: [
      "Si un bug corrompe la salida, basta revertir el código y reejecutar (o volver a la salida anterior guardada en otro directorio) — 'human fault tolerance'; los reintentos automáticos de tareas fallidas son seguros porque la entrada no cambia y la salida de tareas fallidas se descarta; y los mismos archivos de entrada pueden alimentar varios jobs distintos",
      "Que la salida se escribe in-place sobre la entrada, ahorrando espacio en disco",
      "Que no hace falta esquema ni validación porque nada puede salir mal",
      "Que cada job debe escribir en la base de datos de producción para ser útil",
    ],
    correct:
      "Si un bug corrompe la salida, basta revertir el código y reejecutar (o volver a la salida anterior guardada en otro directorio) — 'human fault tolerance'; los reintentos automáticos de tareas fallidas son seguros porque la entrada no cambia y la salida de tareas fallidas se descarta; y los mismos archivos de entrada pueden alimentar varios jobs distintos",
    explanation:
      "Tratar la entrada como inmutable y evitar efectos secundarios (como escribir a BD externas) da mantenibilidad: (1) si introduces un bug y la salida sale mal, basta revertir el código y reejecutar, o conservar la salida anterior en otro directorio y volver a ella —algo imposible en una BD con transacciones read-write, donde revertir el código no deshace los datos malos escritos: es la 'human fault tolerance'—; (2) minimizar la irreversibilidad acelera el desarrollo (afín a Agile); (3) los reintentos automáticos de tareas son seguros precisamente porque la entrada es inmutable y la salida de tareas fallidas se descarta; (4) los mismos archivos sirven de entrada a varios jobs, incluidos jobs de monitoreo. Separar lógica de cableado permite además reutilizar código entre equipos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-13",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuál es una diferencia clave entre el enfoque de Hadoop (HDFS + MapReduce) y una base de datos MPP analítica, según Kleppmann?",
    options: [
      "Hadoop permite volcar datos crudos en HDFS en cualquier formato y decidir cómo interpretarlos después (schema-on-read, 'data lake', 'sushi principle: raw data is better'), trasladando el modelado al consumidor; una BD MPP exige modelar y estructurar los datos por adelantado (schema-on-write) antes de importarlos a su formato propietario",
      "Hadoop exige modelar todo por adelantado, mientras que una BD MPP acepta cualquier formato crudo",
      "Hadoop solo puede ejecutar SQL y una BD MPP solo puede ejecutar código arbitrario",
      "Son idénticos salvo en el nombre y el proveedor",
    ],
    correct:
      "Hadoop permite volcar datos crudos en HDFS en cualquier formato y decidir cómo interpretarlos después (schema-on-read, 'data lake', 'sushi principle: raw data is better'), trasladando el modelado al consumidor; una BD MPP exige modelar y estructurar los datos por adelantado (schema-on-write) antes de importarlos a su formato propietario",
    explanation:
      "Aunque MapReduce reimplementó algoritmos de join paralelo ya presentes en las bases MPP (Teradata, Gamma…), difiere en dos ejes. Diversidad de almacenamiento: en HDFS los archivos son secuencias de bytes en cualquier modelo/formato, así que puedes volcar datos crudos y decidir luego cómo procesarlos (schema-on-read), lo que acelera la recolección centralizada de datos ('data lake', 'sushi principle: raw data is better') y traslada la interpretación al consumidor; una MPP exige modelado y schema-on-write por adelantado. Diversidad de procesamiento: una MPP es un sistema monolítico optimizado para SQL, mientras que sobre HDFS puedes correr código arbitrario (machine learning, indexación, análisis de imágenes), no solo consultas SQL.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-14",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué MapReduce está diseñado para tolerar la terminación frecuente de tareas y escribe tan a menudo a disco, si los fallos de hardware no son tan habituales?",
    options: [
      "Porque se diseñó para datacenters de uso mixto (Google) donde los jobs batch corren con baja prioridad y pueden ser 'preemptados' (terminados) en cualquier momento para liberar recursos a procesos de mayor prioridad (~5% de riesgo por hora). Recuperarse a nivel de tarea individual y materializar a disco permite sobrevivir a esas terminaciones y usar mejor el cluster",
      "Porque el hardware de los clusters es extremadamente poco fiable y falla cada pocos minutos",
      "Porque escribir a disco siempre es más rápido que usar memoria",
      "Porque las BD MPP no toleran ningún fallo y MapReduce simplemente copia su diseño",
    ],
    correct:
      "Porque se diseñó para datacenters de uso mixto (Google) donde los jobs batch corren con baja prioridad y pueden ser 'preemptados' (terminados) en cualquier momento para liberar recursos a procesos de mayor prioridad (~5% de riesgo por hora). Recuperarse a nivel de tarea individual y materializar a disco permite sobrevivir a esas terminaciones y usar mejor el cluster",
    explanation:
      "Frente a una BD MPP —que si un nodo cae aborta toda la query y la reintenta, y prefiere mantener datos en memoria— MapReduce tolera el fallo de una tarea reintentándola a nivel individual y es muy proclive a escribir a disco. La razón no es hardware poco fiable: MapReduce se diseñó para los datacenters de uso mixto de Google, donde servicios online de alta prioridad y jobs batch de baja prioridad comparten máquinas. Un proceso de mayor prioridad puede 'preemptar' (terminar) a uno batch para reclamar recursos; una tarea de una hora tiene ~5% de probabilidad de ser terminada así, más de un orden de magnitud por encima de los fallos de hardware. Tolerar esas terminaciones frecuentes (recuperación por tarea + materialización a disco) permite sobrecomprometer recursos y mejorar la utilización del cluster.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-15",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Encadenar varios jobs MapReduce 'materializa' el estado intermedio (lo escribe completo a HDFS entre job y job). ¿Qué desventajas tiene esto frente a las tuberías (pipes) de Unix?",
    options: [
      "Un job no puede empezar hasta que TODAS las tareas del job anterior terminen (los 'stragglers' lo retrasan), muchos mappers son redundantes (solo releen lo que el reducer anterior acaba de escribir) y guardar el estado temporal replicado en el filesystem distribuido es excesivo. Las pipes de Unix, en cambio, transmiten la salida de forma incremental sin materializarla",
      "Ninguna: materializar todo a HDFS es siempre lo óptimo",
      "Que pierde datos al no replicarlos en varios nodos",
      "Que obliga a usar un único job gigante imposible de depurar",
    ],
    correct:
      "Un job no puede empezar hasta que TODAS las tareas del job anterior terminen (los 'stragglers' lo retrasan), muchos mappers son redundantes (solo releen lo que el reducer anterior acaba de escribir) y guardar el estado temporal replicado en el filesystem distribuido es excesivo. Las pipes de Unix, en cambio, transmiten la salida de forma incremental sin materializarla",
    explanation:
      "Cuando la salida de un job solo alimenta a otro del mismo equipo, los archivos en HDFS son mero 'estado intermedio': escribirlos completos es 'materialización'. Frente a las pipes de Unix (que transmiten incrementalmente con un pequeño buffer en memoria), materializar tiene tres desventajas: (1) un job solo arranca cuando TODAS las tareas del anterior terminaron, así que los 'stragglers' (tareas lentas por skew o carga) retrasan todo el workflow; (2) muchos mappers son redundantes, pues solo releen lo que un reducer acaba de escribir para reparticionarlo/ordenarlo; (3) replicar ese estado temporal en varios nodos del filesystem distribuido es excesivo. Estos problemas motivaron los motores de dataflow.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-16",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Los motores de dataflow (Spark, Tez, Flink) mejoran a MapReduce. ¿Qué los caracteriza y cómo toleran fallos sin escribir todo el estado intermedio a HDFS?",
    options: [
      "Manejan todo el workflow como UN job de 'operadores' conectados (no map/reduce rígidamente alternados), evitan ordenar salvo cuando hace falta y mantienen el estado intermedio en memoria o disco local. Para tolerar fallos, si se pierde un dato lo RECOMPUTAN a partir de su linaje (Spark: RDDs; Flink: checkpoints de operadores); por eso conviene que los operadores sean deterministas",
      "Son exactamente MapReduce con otro nombre y también materializan todo a HDFS entre etapas",
      "No toleran ningún fallo: si un nodo cae, hay que reiniciar todo el cluster",
      "Replican cada registro intermedio a tres NameNodes para no perder nada",
    ],
    correct:
      "Manejan todo el workflow como UN job de 'operadores' conectados (no map/reduce rígidamente alternados), evitan ordenar salvo cuando hace falta y mantienen el estado intermedio en memoria o disco local. Para tolerar fallos, si se pierde un dato lo RECOMPUTAN a partir de su linaje (Spark: RDDs; Flink: checkpoints de operadores); por eso conviene que los operadores sean deterministas",
    explanation:
      "Spark, Tez y Flink modelan explícitamente el flujo de datos por varias etapas como un solo job: en vez de map/reduce alternados rígidos, encadenan 'operadores' de forma flexible. Ventajas: ordenar solo donde haga falta, eliminar mappers redundantes, optimizar localidad, reutilizar JVMs y mantener el estado intermedio en memoria o disco local (menos I/O que replicarlo a HDFS), pudiendo ejecutar de forma 'pipelined'. Para tolerar fallos no materializan todo: si se pierde estado intermedio, lo recomputan a partir del registro de cómo se calculó —Spark usa el linaje de los RDD (resilient distributed datasets); Flink hace checkpoints del estado de los operadores—. Como la recomputación puede enviar datos a operadores aguas abajo, los operadores deben ser deterministas (si no, hay que matar y reejecutar también los de aguas abajo). Entrada inmutable y salida final siguen yendo a HDFS.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-17",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para procesar grafos enteros en batch (p. ej. PageRank), el modelo Pregel / 'bulk synchronous parallel' (BSP) es popular porque MapReduce no maneja bien los algoritmos iterativos. ¿Cómo funciona Pregel?",
    options: [
      "Se 'piensa como un vértice': en cada iteración se llama a una función por cada vértice pasándole los mensajes que le enviaron otros vértices (normalmente por las aristas); el vértice recuerda su estado en memoria entre iteraciones, así que solo procesa los mensajes nuevos. Si en una parte del grafo no hay mensajes, no se hace trabajo. El framework tolera fallos con checkpoints periódicos",
      "Relee el grafo entero y reescribe toda la salida en cada iteración, igual que MapReduce",
      "Ejecuta una única pasada sin iterar, exactamente como un mapper",
      "Ordena los vértices por timestamp de reloj y los procesa en ese orden",
    ],
    correct:
      "Se 'piensa como un vértice': en cada iteración se llama a una función por cada vértice pasándole los mensajes que le enviaron otros vértices (normalmente por las aristas); el vértice recuerda su estado en memoria entre iteraciones, así que solo procesa los mensajes nuevos. Si en una parte del grafo no hay mensajes, no se hace trabajo. El framework tolera fallos con checkpoints periódicos",
    explanation:
      "Muchos algoritmos de grafos avanzan recorriendo una arista a la vez y repitiendo hasta converger (transitive closure, PageRank). Eso no se expresa bien en MapReduce, que hace una sola pasada y relee todo el dataset por iteración aunque casi nada cambie. El modelo Pregel/BSP (Giraph, GraphX, Gelly) lo optimiza con el lema 'pensar como un vértice': en cada iteración una función se llama por cada vértice y recibe los mensajes que le mandaron otros vértices (típicamente por las aristas, como un mapper 'enviando un mensaje' a un reducer); a diferencia de MapReduce, el vértice recuerda su estado en memoria entre iteraciones, así que solo procesa mensajes nuevos, y si una zona del grafo no recibe mensajes no hace trabajo. Es similar al modelo de actores, pero con estado y mensajes durables y rondas fijas. La tolerancia a fallos se logra con checkpoints periódicos del estado de los vértices.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 10 — Batch Processing",
  },

  {
    id: "ddia-c10-18",
    topic: "fundamentos",
    track: "general",
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
    difficulty: "intermedio",
    type: "single",
    prompt: "En un sistema de mensajería, ¿qué tres opciones hay si los productores envían mensajes más rápido de lo que los consumidores pueden procesar, y qué hacen las pipes de Unix / TCP?",
    options: [
      "Descartar mensajes, encolarlos en un buffer, o aplicar 'backpressure' (flow control: bloquear al productor hasta que el consumidor avance). Las pipes de Unix y TCP usan backpressure: tienen un buffer pequeño y fijo, y si se llena, el emisor se bloquea",
      "Solo se pueden descartar mensajes; no existe otra opción",
      "Siempre se aplica backpressure y nunca se encola nada en ningún sistema",
      "Los mensajes se duplican para procesarlos más rápido",
    ],
    correct:
      "Descartar mensajes, encolarlos en un buffer, o aplicar 'backpressure' (flow control: bloquear al productor hasta que el consumidor avance). Las pipes de Unix y TCP usan backpressure: tienen un buffer pequeño y fijo, y si se llena, el emisor se bloquea",
    explanation:
      "Cuando los productores superan a los consumidores hay tres estrategias: (1) descartar mensajes (aceptable para métricas/sensores periódicos donde un dato perdido no es grave, pero malo si cuentas eventos); (2) encolar en un buffer (¿qué pasa cuando la cola crece? ¿se derrama a disco y cómo afecta al rendimiento?); o (3) aplicar backpressure / flow control, bloqueando al productor. Las pipes de Unix y TCP usan backpressure con un buffer pequeño de tamaño fijo: si se llena, el emisor se bloquea hasta que el receptor saque datos. Qué estrategia conviene depende de si la aplicación tolera perder mensajes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-02",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Cuando varios consumidores leen del mismo topic en un message broker, ¿qué distingue los patrones 'load balancing' y 'fan-out'?",
    options: [
      "Load balancing: cada mensaje se entrega a UNO de los consumidores (reparten el trabajo, útil para paralelizar procesamiento costoso). Fan-out: cada mensaje se entrega a TODOS los consumidores (varios consumidores independientes reciben el mismo flujo, como varios jobs batch leyendo el mismo archivo). Se pueden combinar",
      "Load balancing entrega cada mensaje a todos y fan-out a uno solo",
      "Ambos entregan cada mensaje a un solo consumidor elegido al azar",
      "Fan-out elimina los mensajes y load balancing los conserva",
    ],
    correct:
      "Load balancing: cada mensaje se entrega a UNO de los consumidores (reparten el trabajo, útil para paralelizar procesamiento costoso). Fan-out: cada mensaje se entrega a TODOS los consumidores (varios consumidores independientes reciben el mismo flujo, como varios jobs batch leyendo el mismo archivo). Se pueden combinar",
    explanation:
      "Con varios consumidores en un topic hay dos patrones: (1) load balancing —cada mensaje va a uno solo de los consumidores, que así reparten la carga; útil cuando procesar un mensaje es costoso y quieres paralelizar (en AMQP, varios clientes en la misma cola; en JMS, 'shared subscription')—; y (2) fan-out —cada mensaje se entrega a todos los consumidores, permitiendo que varios sistemas independientes 'sintonicen' el mismo flujo sin afectarse, el equivalente streaming de varios jobs batch que leen el mismo archivo (subscripciones a topic en JMS, exchange bindings en AMQP)—. Se pueden combinar: dos grupos de consumidores, cada grupo recibe todo, pero dentro de cada grupo se balancea.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-03",
    topic: "streaming",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "En un broker tipo JMS/AMQP, ¿por qué la combinación de 'load balancing' con 'acknowledgments y redelivery' puede reordenar los mensajes?",
    options: [
      "El consumidor confirma (ack) cada mensaje al procesarlo; si se desconecta sin confirmar, el broker reentrega ese mensaje a OTRO consumidor. Si un consumidor cae procesando m3 mientras otro procesa m4, m3 se reentrega después, así que se procesa m4 antes que m3: el orden cambia. Para evitarlo, usa una cola por consumidor (sin load balancing)",
      "Porque el broker ordena los mensajes por el timestamp del reloj de pared",
      "Porque los mensajes se entregan siempre en orden aleatorio por diseño",
      "Porque el ack borra todos los mensajes anteriores de la cola",
    ],
    correct:
      "El consumidor confirma (ack) cada mensaje al procesarlo; si se desconecta sin confirmar, el broker reentrega ese mensaje a OTRO consumidor. Si un consumidor cae procesando m3 mientras otro procesa m4, m3 se reentrega después, así que se procesa m4 antes que m3: el orden cambia. Para evitarlo, usa una cola por consumidor (sin load balancing)",
    explanation:
      "Para no perder mensajes si un consumidor cae, los brokers usan acknowledgments: el cliente avisa explícitamente al terminar de procesar un mensaje y entonces el broker lo quita de la cola. Si la conexión se cierra o expira sin ack, el broker asume que no se procesó y lo reentrega a otro consumidor. Combinado con load balancing, esto reordena: si el consumidor 2 cae procesando m3 mientras el 1 procesa m4, m3 se reentrega luego al consumidor 1, que procesa m4, m3, m5 — distinto del orden de envío. Aunque el broker intente preservar el orden (como exigen JMS y AMQP), load balancing + redelivery lo rompe. Solución: una cola por consumidor. Solo importa si hay dependencias causales entre mensajes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-04",
    topic: "streaming",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuándo conviene un message broker basado en log (Kafka, Kinesis) frente a uno tradicional tipo JMS/AMQP (RabbitMQ, ActiveMQ)?",
    options: [
      "Log-based (orden total por partición, retención en disco, replay): ideal con alto throughput, mensajes rápidos de procesar y donde el orden importa; su límite es que el paralelismo de un grupo es como máximo el nº de particiones y un mensaje lento bloquea a los siguientes (head-of-line blocking). JMS/AMQP: mejor cuando procesar cada mensaje es costoso y quieres paralelizar mensaje a mensaje, y el orden no importa tanto",
      "El log-based solo sirve para colas de tareas y el JMS para análisis en tiempo real",
      "Son idénticos: la elección no afecta al rendimiento ni al orden",
      "El JMS/AMQP retiene los mensajes en disco para reprocesar y el log-based los borra al confirmar",
    ],
    correct:
      "Log-based (orden total por partición, retención en disco, replay): ideal con alto throughput, mensajes rápidos de procesar y donde el orden importa; su límite es que el paralelismo de un grupo es como máximo el nº de particiones y un mensaje lento bloquea a los siguientes (head-of-line blocking). JMS/AMQP: mejor cuando procesar cada mensaje es costoso y quieres paralelizar mensaje a mensaje, y el orden no importa tanto",
    explanation:
      "Un broker basado en log (Kafka, Kinesis, DistributedLog) almacena los mensajes en un log particionado append-only en disco; soporta fan-out trivial (varios consumidores leen sin borrar) y hace load balancing asignando particiones enteras a nodos de un grupo. Esto da alto throughput y conserva el orden DENTRO de cada partición, pero tiene dos límites: el nº de nodos que comparten el consumo de un topic es como máximo el nº de particiones, y un mensaje lento bloquea los siguientes de su partición (head-of-line blocking). Por eso el log-based brilla con alto throughput, mensajes rápidos y orden importante; el estilo JMS/AMQP (que asigna mensajes individuales y los borra al confirmar) es mejor cuando procesar un mensaje es caro y quieres paralelizar mensaje a mensaje sin importar tanto el orden.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-05",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un broker basado en log, ¿qué es el 'consumer offset' y qué ventaja operativa permite frente a confirmar (ack) cada mensaje individualmente?",
    options: [
      "Como cada partición es un log ordenado, basta registrar periódicamente el offset hasta el que un consumidor ha procesado (todo lo anterior está hecho, lo posterior no); el broker no necesita rastrear el ack de cada mensaje. Además, como leer no borra el log, puedes reprocesar el pasado arrancando un consumidor con un offset viejo (replay)",
      "El offset cifra los mensajes para que solo el consumidor correcto los lea",
      "El offset es la cantidad de memoria que usa el broker",
      "El offset obliga a borrar cada mensaje en cuanto se lee, impidiendo reprocesar",
    ],
    correct:
      "Como cada partición es un log ordenado, basta registrar periódicamente el offset hasta el que un consumidor ha procesado (todo lo anterior está hecho, lo posterior no); el broker no necesita rastrear el ack de cada mensaje. Además, como leer no borra el log, puedes reprocesar el pasado arrancando un consumidor con un offset viejo (replay)",
    explanation:
      "Al consumir una partición en orden, todos los mensajes con offset menor al actual del consumidor ya se procesaron y los de offset mayor no: por eso el broker solo necesita registrar periódicamente el offset del consumidor, sin rastrear acks individuales (menos overhead, más batching → más throughput). Es análogo al log sequence number de la replicación líder-seguidor: el broker actúa como líder y el consumidor como seguidor; si un consumidor cae, otro retoma desde el último offset guardado (reprocesando quizá algunos mensajes). Y como consumir es solo-lectura (no borra el log), puedes reprocesar: arrancas una copia del consumidor con los offsets de ayer y escribes a otro destino, repitiéndolo con distinto código. Eso acerca el log-based messaging a los procesos batch.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-06",
    topic: "almacenamiento",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En un broker basado en log que escribe todo a disco, ¿cómo se evita quedarse sin espacio y qué le pasa a un consumidor demasiado lento?",
    options: [
      "El log se divide en segmentos y los segmentos viejos se borran o archivan: funciona como un buffer circular (ring buffer) de tamaño acotado por el disco, que descarta los mensajes más antiguos. Un consumidor tan lento que su offset apunte a un segmento ya borrado se 'cae del log' y pierde esos mensajes; conviene monitorear cuánto va por detrás del head",
      "El log crece infinitamente sin borrar nunca nada, así que ningún consumidor pierde mensajes",
      "Los mensajes se guardan solo en memoria y se pierden todos al reiniciar el broker",
      "El broker bloquea a todos los productores hasta que el consumidor más lento termine",
    ],
    correct:
      "El log se divide en segmentos y los segmentos viejos se borran o archivan: funciona como un buffer circular (ring buffer) de tamaño acotado por el disco, que descarta los mensajes más antiguos. Un consumidor tan lento que su offset apunte a un segmento ya borrado se 'cae del log' y pierde esos mensajes; conviene monitorear cuánto va por detrás del head",
    explanation:
      "Como solo se hace append, el log llenaría el disco; por eso se divide en segmentos y de vez en cuando los viejos se borran o se mueven a archivo. Efectivamente es un buffer circular (ring buffer) de tamaño acotado por el disco que descarta los mensajes más antiguos —pero al estar en disco puede retener días o semanas de historia—. Es una forma de 'buffering' con buffer grande pero fijo. Si un consumidor se atrasa tanto que su offset apunta a un segmento ya borrado, pierde esos mensajes; por eso conviene monitorear cuánto va por detrás del head y alertar. Ventaja clave: un consumidor lento o caído solo se afecta a sí mismo (no perturba a los demás), así que puedes consumir un log de producción para pruebas/depuración sin riesgo.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-07",
    topic: "ingesta",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para mantener sincronizados varios sistemas (BD, índice de búsqueda, caché…), una opción es 'dual writes' (la app escribe a cada sistema). ¿Qué dos problemas serios tiene?",
    options: [
      "(1) Race condition: dos escrituras concurrentes pueden llegar en distinto orden a cada sistema, dejándolos permanentemente inconsistentes sin que se note ningún error; (2) tolerancia a fallos: una de las escrituras puede tener éxito y la otra fallar, descuadrando los sistemas (resolverlo es el problema del commit atómico, costoso)",
      "Que son demasiado lentas pero siempre consistentes",
      "Que requieren un único líder y por eso nunca fallan",
      "Que solo funcionan con bases de datos relacionales",
    ],
    correct:
      "(1) Race condition: dos escrituras concurrentes pueden llegar en distinto orden a cada sistema, dejándolos permanentemente inconsistentes sin que se note ningún error; (2) tolerancia a fallos: una de las escrituras puede tener éxito y la otra fallar, descuadrando los sistemas (resolverlo es el problema del commit atómico, costoso)",
    explanation:
      "Con 'dual writes' la app escribe explícitamente a cada sistema (primero la BD, luego el índice, etc.). Dos problemas graves: (1) race condition —si dos clientes escriben X concurrentemente (A y B), la BD puede quedar en B y el índice en A porque las escrituras se intercalan en distinto orden en cada sistema; quedan inconsistentes para siempre sin ningún error visible, salvo que tengas detección de concurrencia como version vectors—; (2) fallo parcial —una escritura tiene éxito y la otra falla, descuadrando los sistemas; garantizar que ambas tengan éxito o ninguna es el problema del commit atómico, caro de resolver (2PC)—. La raíz es que no hay un único líder que fije el orden. La solución es hacer un sistema el líder y derivar los demás de su log (CDC).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-08",
    topic: "ingesta",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué es la 'log compaction' (compactación de log) y por qué permite reconstruir un sistema derivado sin volver a tomar un snapshot completo de la BD origen?",
    options: [
      "El motor descarta periódicamente, en segundo plano, los registros duplicados de cada clave y conserva solo el valor más reciente (un 'tombstone' marca borrados). Así el espacio depende del contenido actual, no del nº de escrituras. Un consumidor que arranca desde el offset 0 de un topic compactado ve el valor más reciente de cada clave, es decir, una copia completa de la BD",
      "Comprime los mensajes con gzip para ahorrar ancho de banda",
      "Borra todos los mensajes en cuanto un consumidor los confirma",
      "Combina todas las particiones en una sola para garantizar orden total global",
    ],
    correct:
      "El motor descarta periódicamente, en segundo plano, los registros duplicados de cada clave y conserva solo el valor más reciente (un 'tombstone' marca borrados). Así el espacio depende del contenido actual, no del nº de escrituras. Un consumidor que arranca desde el offset 0 de un topic compactado ve el valor más reciente de cada clave, es decir, una copia completa de la BD",
    explanation:
      "Si solo puedes guardar historia limitada del log, cada nuevo sistema derivado exigiría un snapshot. La log compaction lo evita: en segundo plano, el motor busca registros con la misma clave, tira los duplicados y conserva solo la última actualización de cada clave (un valor especial nulo, 'tombstone', marca un borrado y se elimina al compactar). Mientras una clave no se sobrescriba/borre, permanece para siempre; el espacio depende del contenido actual de la BD, no del número de escrituras. Aplicado a CDC (cada cambio con su primary key), basta arrancar un consumidor desde el offset 0 del topic compactado para obtener el valor más reciente de cada clave: una copia completa de la BD sin tomar otro snapshot. Kafka soporta log compaction.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-10",
    topic: "modelado",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿En qué se diferencia el 'event sourcing' del 'change data capture' (CDC)?",
    options: [
      "Nivel de abstracción: en CDC la app usa la BD de forma mutable (update/delete) y los cambios se extraen a bajo nivel (parseando el log), reflejando cambios de estado. En event sourcing la lógica se construye sobre eventos inmutables a nivel de aplicación (intención del usuario: 'el alumno canceló su matrícula'), en un store append-only donde update/delete están prohibidos",
      "Son exactamente lo mismo con distinto nombre",
      "El event sourcing parsea el binlog y el CDC guarda eventos de negocio",
      "El CDC prohíbe los borrados y el event sourcing los fomenta",
    ],
    correct:
      "Nivel de abstracción: en CDC la app usa la BD de forma mutable (update/delete) y los cambios se extraen a bajo nivel (parseando el log), reflejando cambios de estado. En event sourcing la lógica se construye sobre eventos inmutables a nivel de aplicación (intención del usuario: 'el alumno canceló su matrícula'), en un store append-only donde update/delete están prohibidos",
    explanation:
      "Ambos guardan los cambios como un log de eventos, pero a distinto nivel. En CDC la aplicación trata la BD de forma mutable (actualiza y borra a voluntad) y el log de cambios se extrae a bajo nivel (p. ej. parseando el replication log), capturando cambios de estado; la app ni se entera de que hay CDC. En event sourcing la lógica se construye explícitamente sobre eventos inmutables que reflejan acciones del usuario a nivel de dominio ('el alumno canceló su matrícula', no 'se borró una fila de enrollments'); el event store es append-only y update/delete se desaconsejan o prohíben. Event sourcing es potente para modelar: expresa la intención de forma neutral, facilita evolucionar la app y depurar, y permite encadenar nuevos efectos a eventos existentes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-11",
    topic: "modelado",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "En event sourcing se distingue entre 'command' y 'event'. ¿Cuál es la diferencia y por qué importa?",
    options: [
      "Un command es una petición que aún puede fallar (p. ej. reservar un asiento ya ocupado): la app debe validarlo primero. Si la validación tiene éxito, se convierte en un event, que es un hecho durable e inmutable. Un consumidor del log NO puede rechazar un event, así que la validación debe ocurrir síncronamente ANTES de generarlo",
      "Command y event son sinónimos; ambos son inmutables desde el inicio",
      "Un event puede fallar y un command es siempre un hecho consumado",
      "Los commands se guardan en el log y los events se descartan",
    ],
    correct:
      "Un command es una petición que aún puede fallar (p. ej. reservar un asiento ya ocupado): la app debe validarlo primero. Si la validación tiene éxito, se convierte en un event, que es un hecho durable e inmutable. Un consumidor del log NO puede rechazar un event, así que la validación debe ocurrir síncronamente ANTES de generarlo",
    explanation:
      "La filosofía de event sourcing separa command y event. Cuando llega una petición del usuario es un command: aún puede fallar, p. ej. por violar una invariante (registrar un username o reservar un asiento ya tomado). La app debe validar primero que puede ejecutar el command; si la validación tiene éxito y se acepta, se convierte en un event, que es durable, inmutable y un 'hecho' (aunque luego se cancele la reserva, sigue siendo cierto que existió). Un consumidor del stream no puede rechazar un event: cuando lo ve ya es parte inmutable del log y otros pueden haberlo visto. Por eso la validación debe ser síncrona ANTES de generar el event (p. ej. con una transacción serializable que valida y publica), o dividir en dos eventos: reserva tentativa y confirmación.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-12",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Kleppmann (citando a Pat Helland) dice 'la verdad es el log; la base de datos es una caché de un subconjunto del log'. ¿Qué idea expresa, y qué es CQRS?",
    options: [
      "El estado mutable es el resultado de un log append-only de eventos inmutables: state y changelog son dos caras de la misma moneda (el estado es la 'integral' del stream de eventos en el tiempo). Si tomas el log de eventos como sistema de registro y derivas de él varias vistas optimizadas para lectura, eso es CQRS (Command Query Responsibility Segregation): separar la forma en que se escriben los datos de cómo se leen",
      "Que la base de datos siempre es más fiable que cualquier log y debe ser la única fuente de verdad",
      "Que hay que borrar el log en cuanto la BD tiene el estado actual",
      "CQRS significa cifrar las queries para separar lectura y escritura por seguridad",
    ],
    correct:
      "El estado mutable es el resultado de un log append-only de eventos inmutables: state y changelog son dos caras de la misma moneda (el estado es la 'integral' del stream de eventos en el tiempo). Si tomas el log de eventos como sistema de registro y derivas de él varias vistas optimizadas para lectura, eso es CQRS (Command Query Responsibility Segregation): separar la forma en que se escriben los datos de cómo se leen",
    explanation:
      "Todo estado mutable es el resultado de una secuencia de eventos que lo mutaron (el saldo es la suma de créditos/débitos; los asientos disponibles, el resultado de las reservas). Estado y log de cambios no se contradicen: son dos caras de la misma moneda —el estado es lo que obtienes al 'integrar' el stream de eventos en el tiempo, y el changelog al 'derivar' el estado—. Si consideras el log de eventos inmutables como el sistema de registro y cualquier estado mutable como derivado de él, razonas mejor sobre el flujo de datos ('la verdad es el log; la BD es una caché del log'). Separar la forma de escritura (log append-only) de varias vistas de lectura derivadas es CQRS, y vuelve casi irrelevante el debate normalización/denormalización en las vistas de lectura.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-13",
    topic: "fundamentos",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cuáles son las 'limitaciones de la inmutabilidad' al guardar para siempre toda la historia de cambios?",
    options: [
      "Con mucho churn (muchos updates/deletes sobre un dataset pequeño) la historia inmutable puede crecer demasiado y la compaction/GC se vuelve crítica; y a veces hay que borrar datos de verdad por motivos administrativos o legales (privacidad/GDPR, fugas), lo que exige 'reescribir la historia' (excision en Datomic), algo sorprendentemente difícil porque hay copias en muchos sitios",
      "Ninguna: guardar toda la historia para siempre nunca tiene inconvenientes",
      "Que la inmutabilidad impide por completo hacer consultas de lectura",
      "Que obliga a usar exclusivamente bases de datos relacionales",
    ],
    correct:
      "Con mucho churn (muchos updates/deletes sobre un dataset pequeño) la historia inmutable puede crecer demasiado y la compaction/GC se vuelve crítica; y a veces hay que borrar datos de verdad por motivos administrativos o legales (privacidad/GDPR, fugas), lo que exige 'reescribir la historia' (excision en Datomic), algo sorprendentemente difícil porque hay copias en muchos sitios",
    explanation:
      "Mantener la historia inmutable para siempre depende del 'churn' del dataset: cargas que mayormente añaden son fáciles de hacer inmutables, pero con muchos updates/deletes sobre un dataset pequeño la historia puede crecer prohibitivamente, con fragmentación, y el rendimiento de la compaction y el garbage collection se vuelve crítico. Además, a veces hay que borrar datos de verdad por motivos administrativos o legales: regulaciones de privacidad (borrar datos personales tras cerrar una cuenta), protección de datos (quitar información errónea) o contener una fuga. En esos casos no basta con añadir otro evento 'considérese borrado': hay que reescribir la historia (Datomic lo llama 'excision'; Fossil, 'shunning'), y borrar de verdad es difícil porque quedan copias en motores de almacenamiento, filesystems, SSDs y backups inmutables.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-15",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En el 'complex event processing' (CEP), ¿cómo se invierte la relación entre queries y datos respecto a una base de datos normal?",
    options: [
      "En una BD normal los datos se guardan de forma persistente y las queries son transitorias (llega una query, busca y se olvida). En CEP es al revés: las queries se almacenan a largo plazo y los eventos de los streams fluyen continuamente a través de ellas; cuando un patrón de eventos coincide, el motor emite un 'evento complejo'",
      "CEP no usa queries; solo agrega métricas numéricas",
      "En CEP los datos son persistentes y las queries transitorias, igual que en una BD normal",
      "CEP guarda los eventos para siempre y nunca define patrones a buscar",
    ],
    correct:
      "En una BD normal los datos se guardan de forma persistente y las queries son transitorias (llega una query, busca y se olvida). En CEP es al revés: las queries se almacenan a largo plazo y los eventos de los streams fluyen continuamente a través de ellas; cuando un patrón de eventos coincide, el motor emite un 'evento complejo'",
    explanation:
      "El complex event processing (CEP) busca patrones de eventos en un stream, parecido a como una regex busca patrones de caracteres en un texto; los patrones se describen con un lenguaje declarativo (a menudo tipo SQL) y un motor mantiene una máquina de estados que hace el matching. La clave es que invierte la relación query/datos respecto a una BD: normalmente los datos son persistentes y las queries transitorias (llega una query, busca datos que coincidan y se olvida); en CEP las queries se almacenan a largo plazo y son los eventos los que fluyen continuamente a través de ellas, emitiéndose un 'evento complejo' al detectar una coincidencia. Implementaciones: Esper, IBM InfoSphere Streams, Apama, TIBCO StreamBase; también motores como Samza añaden SQL sobre streams.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-16",
    topic: "streaming",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "En 'stream analytics' se usan a veces algoritmos probabilísticos como Bloom filters o HyperLogLog. ¿Por qué, y qué malentendido aclara Kleppmann?",
    options: [
      "Porque dan resultados aproximados usando mucha menos memoria en el procesador (Bloom filters para pertenencia a un conjunto, HyperLogLog para estimar cardinalidad). Aclaración: el stream processing NO es inherentemente aproximado o 'lossy'; los algoritmos probabilísticos son solo una optimización, y también puedes calcular resultados exactos",
      "Porque el stream processing siempre pierde datos y nunca puede ser exacto",
      "Porque son obligatorios: sin ellos no se puede hacer ninguna ventana",
      "Porque cifran los eventos para proteger la privacidad",
    ],
    correct:
      "Porque dan resultados aproximados usando mucha menos memoria en el procesador (Bloom filters para pertenencia a un conjunto, HyperLogLog para estimar cardinalidad). Aclaración: el stream processing NO es inherentemente aproximado o 'lossy'; los algoritmos probabilísticos son solo una optimización, y también puedes calcular resultados exactos",
    explanation:
      "El stream analytics se orienta a agregaciones y métricas estadísticas sobre muchos eventos en ventanas de tiempo (tasa de eventos, media móvil, percentiles). Para ahorrar memoria se usan a veces algoritmos probabilísticos: Bloom filters para pertenencia a un conjunto, HyperLogLog para estimar cardinalidad (nº de elementos distintos), y estimadores de percentiles. Dan resultados aproximados con mucha menos memoria que los exactos. El malentendido que Kleppmann corrige: esto NO significa que el stream processing sea inherentemente aproximado o 'lossy' — no hay nada intrínsecamente inexacto en procesar streams; los algoritmos probabilísticos son meramente una optimización, y también puedes computar resultados exactos si lo necesitas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-17",
    topic: "streaming",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Un 'stream-stream join' (window join), p. ej. calcular el click-through rate uniendo eventos de búsqueda con eventos de clic por session ID, ¿qué exige del procesador y por qué necesita una ventana?",
    options: [
      "El procesador debe mantener estado: indexar por session ID todos los eventos recientes (búsquedas y clics) y, al llegar uno, buscar en el otro índice un match. Necesita una ventana porque el clic puede tardar (segundos a días) o no llegar; si la búsqueda expira sin clic, emite 'no se hizo clic'. No basta con incrustar la búsqueda en el evento de clic, pues perderías las búsquedas sin clic",
      "Basta con incrustar los datos de la búsqueda dentro del evento de clic; no hace falta estado ni ventana",
      "Debe ordenar todo el stream infinito antes de unir, como un sort-merge join batch",
      "Solo une eventos que llegan exactamente en el mismo milisegundo",
    ],
    correct:
      "El procesador debe mantener estado: indexar por session ID todos los eventos recientes (búsquedas y clics) y, al llegar uno, buscar en el otro índice un match. Necesita una ventana porque el clic puede tardar (segundos a días) o no llegar; si la búsqueda expira sin clic, emite 'no se hizo clic'. No basta con incrustar la búsqueda en el evento de clic, pues perderías las búsquedas sin clic",
    explanation:
      "En un stream-stream join ambas entradas son streams de eventos de actividad y el operador busca eventos relacionados dentro de una ventana de tiempo. Para el click-through rate, search y click se conectan por session ID. El clic puede tardar mucho (segundos a días), llegar antes que la búsqueda por retrasos de red, o no llegar nunca; por eso eliges una ventana (p. ej. unir si ocurren a menos de una hora). El procesador mantiene estado: indexa por session ID los eventos recientes de cada stream y, al llegar uno, consulta el otro índice buscando match; si la búsqueda expira sin clic, emite que no hubo clic. Incrustar la búsqueda en el evento de clic NO equivale al join, porque perderías las búsquedas sin clic — y para medir calidad necesitas ambas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-18",
    topic: "streaming",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Un 'table-table join' en streaming mantiene una vista materializada, como la home timeline de Twitter (caché por usuario de los tweets de a quién sigue). ¿Cómo se implementa con streams?",
    options: [
      "El procesador consume streams de cambios de ambas 'tablas' (tweets: enviar/borrar; follows: seguir/dejar de seguir) y mantiene el set de seguidores de cada usuario; cada cambio en un lado se une con el estado actual del otro, actualizando las timelines. El resultado es un stream de cambios a la vista materializada del join entre tweets y follows",
      "Consulta la BD por cada lectura de timeline, iterando sobre todos los seguidos en tiempo real",
      "Une solo eventos que ocurren dentro de una ventana de 30 minutos",
      "No mantiene estado: recalcula toda la timeline desde cero en cada tweet",
    ],
    correct:
      "El procesador consume streams de cambios de ambas 'tablas' (tweets: enviar/borrar; follows: seguir/dejar de seguir) y mantiene el set de seguidores de cada usuario; cada cambio en un lado se une con el estado actual del otro, actualizando las timelines. El resultado es un stream de cambios a la vista materializada del join entre tweets y follows",
    explanation:
      "En un table-table join ambas entradas son changelogs de 'tablas' y cada cambio en un lado se une con el último estado del otro, produciendo un stream de cambios a la vista materializada del join. La home timeline de Twitter es una caché por usuario (un 'inbox') que evita iterar en cada lectura sobre todos los seguidos. Para mantenerla, el procesador consume eventos de tweets (enviar/borrar) y de follows (seguir/dejar de seguir), y mantiene el set de seguidores de cada usuario: al llegar un tweet de u, se añade a la timeline de cada seguidor de u; al dejar de seguir, se quitan sus tweets, etc. Equivale a mantener la vista materializada de un SELECT que une tweets y follows agrupando por follower_id, actualizada cada vez que cambian las tablas subyacentes.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-19",
    topic: "modelado",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Al unir un stream con una tabla que cambia en el tiempo (p. ej. ventas con tasas de impuesto), surge la 'time-dependence' del join. ¿Cuál es el problema y cómo lo resuelve una 'slowly changing dimension' (SCD)?",
    options: [
      "Si el estado con el que unes cambia, importa con qué versión unir: normalmente quieres la tasa vigente AL MOMENTO de la venta, no la actual (clave al reprocesar historia). Si el orden entre streams es indeterminado, el join se vuelve no determinista. La SCD lo resuelve dando un identificador único a cada versión del registro (cada cambio de tasa → nuevo id) e incluyendo en la venta el id vigente; eso impide la log compaction (hay que conservar todas las versiones)",
      "El problema es que la tabla es demasiado grande; la SCD la comprime",
      "No hay problema: siempre se une con el valor actual y es determinista",
      "La SCD borra las versiones viejas para acelerar, perdiendo el histórico",
    ],
    correct:
      "Si el estado con el que unes cambia, importa con qué versión unir: normalmente quieres la tasa vigente AL MOMENTO de la venta, no la actual (clave al reprocesar historia). Si el orden entre streams es indeterminado, el join se vuelve no determinista. La SCD lo resuelve dando un identificador único a cada versión del registro (cada cambio de tasa → nuevo id) e incluyendo en la venta el id vigente; eso impide la log compaction (hay que conservar todas las versiones)",
    explanation:
      "Todos los joins de stream mantienen estado a partir de una entrada y lo consultan con la otra; el orden de los eventos que mantienen el estado importa (seguir y luego dejar de seguir no es lo mismo que al revés), pero entre streams/particiones distintos no hay garantía de orden. Así, si el estado con el que unes cambia en el tiempo, ¿con qué versión unes? Normalmente quieres la vigente al momento del evento (la tasa de impuesto a la fecha de la venta, no la actual), crucial al reprocesar datos históricos. Si el orden entre streams es indeterminado, el join es no determinista (reejecutar puede dar otro resultado). En data warehouses esto es una 'slowly changing dimension' (SCD): se da un id único a cada versión del registro (cada cambio de tasa → nuevo id) y la venta referencia el id vigente, haciéndolo determinista — pero impide la log compaction, pues hay que retener todas las versiones.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  {
    id: "ddia-c11-20",
    topic: "streaming",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para lograr semántica 'exactly-once' (mejor llamada 'effectively-once') ante fallos en un stream procesador de larga duración, ¿qué mecanismos se usan, y por qué no bastan por sí solos al escribir a sistemas externos?",
    options: [
      "Microbatching (Spark Streaming: trata bloques pequeños como mini-batches) y checkpointing (Flink: snapshots periódicos del estado, restaura y descarta la salida posterior al último checkpoint). Dan exactly-once DENTRO del framework, pero al producir efectos externos (escribir a una BD, enviar email) un reinicio los repetiría; hace falta además commit atómico o escrituras idempotentes (p. ej. usando el offset del mensaje)",
      "Basta con reiniciar el job desde el principio, como en batch, porque el stream es finito",
      "Solo se necesita aumentar la memoria del procesador",
      "Se descarta toda la salida del job ante cualquier fallo, igual que en MapReduce",
    ],
    correct:
      "Microbatching (Spark Streaming: trata bloques pequeños como mini-batches) y checkpointing (Flink: snapshots periódicos del estado, restaura y descarta la salida posterior al último checkpoint). Dan exactly-once DENTRO del framework, pero al producir efectos externos (escribir a una BD, enviar email) un reinicio los repetiría; hace falta además commit atómico o escrituras idempotentes (p. ej. usando el offset del mensaje)",
    explanation:
      "En batch, tolerar fallos es fácil: reinicias la tarea y descartas su salida parcial, logrando 'exactly-once' (mejor: 'effectively-once' — los registros pueden procesarse varias veces, pero el efecto visible es como si una sola). En streaming no puedes esperar a que termine (es infinito), así que se usan mecanismos de grano fino: microbatching (Spark Streaming trata bloques de ~1 s como mini-batches) y checkpointing (Flink hace snapshots periódicos del estado vía barriers; al caer, restaura el último checkpoint y descarta la salida posterior). Dan exactly-once dentro del framework, pero en cuanto la salida sale al exterior (escribir a BD, enviar email/push) el framework ya no puede descartarla y un reinicio la duplicaría. Para evitarlo: commit atómico (que todos los efectos —salida, estado, avance del offset— ocurran o ninguno) o escrituras idempotentes (p. ej. guardar el offset del mensaje junto al valor para no reaplicar).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 11 — Stream Processing",
  },

  // ---- cap. 12 — The Future of Data Systems ----
  {
    id: "ddia-c12-01",
    topic: "ingesta",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Para integrar varios sistemas (BD, índice de búsqueda, caché, data warehouse), Kleppmann recomienda 'derivar' unos datos de otros en vez de 'dual writes'. ¿Cuál es el principio clave?",
    options: [
      "Hacer que todas las entradas pasen por un único sistema que decide UN orden total de escrituras (vía CDC o event sourcing log) y derivar las demás representaciones procesando esas escrituras en el mismo orden (state machine replication). Así los sistemas derivados quedan consistentes con el de registro, y la actualización suele poder hacerse determinista e idempotente",
      "Que cada cliente escriba directamente a cada sistema (dual writes), que es la forma más robusta",
      "Que todos los sistemas usen relojes de pared sincronizados para ordenar las escrituras",
      "Que se evite por completo replicar datos entre sistemas",
    ],
    correct:
      "Hacer que todas las entradas pasen por un único sistema que decide UN orden total de escrituras (vía CDC o event sourcing log) y derivar las demás representaciones procesando esas escrituras en el mismo orden (state machine replication). Así los sistemas derivados quedan consistentes con el de registro, y la actualización suele poder hacerse determinista e idempotente",
    explanation:
      "Como ninguna herramienta sirve para todos los patrones de acceso, las apps combinan varias (BD, índice, caché, analítica…) y hay que mantenerlas en sync. La solución robusta no es 'dual writes' (que sufre race conditions y fallos parciales, dejando los sistemas permanentemente inconsistentes), sino derivar: canalizar toda la entrada por un único sistema que fija UN orden total de escrituras (con change data capture o un log de event sourcing) y aplicar esas escrituras en el mismo orden a las demás representaciones. Es el principio de 'state machine replication' / total order broadcast: garantiza que los sistemas derivados sean consistentes con el de registro, y actualizarlos desde un event log suele poder hacerse determinista e idempotente, facilitando recuperarse de fallos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-02",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Cómo se compara mantener sistemas sincronizados con 'derived data' basado en logs frente a usar 'transacciones distribuidas' (2PC/XA)?",
    options: [
      "Logran un objetivo similar por medios distintos: las transacciones distribuidas ordenan con locks (mutua exclusión) y usan commit atómico para efecto exactly-once; los sistemas log-based ordenan con un log y se basan en retry determinista + idempotencia. Las transacciones dan linealizabilidad (p. ej. read-your-writes) pero XA tiene mala tolerancia a fallos y rendimiento; el derived data log-based escala mejor y desacopla, aunque suele ser asíncrono (sin esas garantías de tiempo por defecto)",
      "Son idénticos en todo y la elección es indiferente",
      "El derived data log-based usa locks y el 2PC usa un log de eventos",
      "Las transacciones distribuidas (XA) tienen excelente rendimiento y tolerancia a fallos, por lo que siempre son preferibles",
    ],
    correct:
      "Logran un objetivo similar por medios distintos: las transacciones distribuidas ordenan con locks (mutua exclusión) y usan commit atómico para efecto exactly-once; los sistemas log-based ordenan con un log y se basan en retry determinista + idempotencia. Las transacciones dan linealizabilidad (p. ej. read-your-writes) pero XA tiene mala tolerancia a fallos y rendimiento; el derived data log-based escala mejor y desacopla, aunque suele ser asíncrono (sin esas garantías de tiempo por defecto)",
    explanation:
      "Ambos enfoques mantienen sistemas consistentes, pero por medios distintos: las transacciones distribuidas deciden el orden con locks (mutua exclusión, 2PL) y aseguran efecto exactly-once con commit atómico; los sistemas log-based (CDC, event sourcing) deciden el orden con un log y se apoyan en retry determinista + idempotencia. La gran diferencia: las transacciones dan linealizabilidad (que implica garantías útiles como leer tus propias escrituras), mientras que los sistemas derivados suelen actualizarse de forma asíncrona y no la ofrecen por defecto. Kleppmann opina que XA tiene mala tolerancia a fallos y rendimiento, y que —a falta de un buen protocolo de transacciones distribuidas ampliamente soportado— el derived data basado en logs es el enfoque más prometedor para integrar sistemas heterogéneos, por su loose coupling.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-03",
    topic: "fundamentos",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Por qué construir UN orden total de eventos (total order broadcast) se vuelve inviable al escalar a sistemas grandes y complejos?",
    options: [
      "Porque normalmente exige que todo pase por un único líder; si el throughput supera a una máquina hay que particionar (y el orden entre particiones queda indefinido), si hay varios datacenters suele haber un líder por DC (orden indefinido entre ellos), los microservicios con estado independiente no tienen orden definido entre sus eventos, y los clientes offline ven eventos en otro orden. Escalar el consenso más allá de un nodo es un problema abierto",
      "Porque los logs no se pueden guardar en disco",
      "Porque ordenar eventos es trivial y siempre se hace por reloj de pared global",
      "Porque un solo líder puede manejar cualquier throughput sin límite",
    ],
    correct:
      "Porque normalmente exige que todo pase por un único líder; si el throughput supera a una máquina hay que particionar (y el orden entre particiones queda indefinido), si hay varios datacenters suele haber un líder por DC (orden indefinido entre ellos), los microservicios con estado independiente no tienen orden definido entre sus eventos, y los clientes offline ven eventos en otro orden. Escalar el consenso más allá de un nodo es un problema abierto",
    explanation:
      "Un log totalmente ordenado es factible en sistemas pequeños (de ahí la popularidad de la replicación single-leader), pero al escalar surgen límites: construir el orden total normalmente requiere pasar todo por un único líder; si el throughput supera a una máquina hay que particionar y el orden entre particiones distintas queda ambiguo; con varios datacenters suele haber un líder por DC (la coordinación síncrona entre DCs es ineficiente), dejando indefinido el orden entre eventos de DCs distintos; los microservicios desplegados con estado independiente no tienen orden definido entre sus eventos; y los clientes con estado local/offline ven eventos en órdenes distintos a los del servidor. Decidir un orden total es total order broadcast ≡ consenso, y diseñar consenso que escale más allá del throughput de un nodo y funcione geo-distribuido sigue siendo un problema de investigación abierto.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-04",
    topic: "transformacion",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "¿Por qué 'reprocesar' datos existentes (con batch o stream) es clave para evolucionar un sistema, y qué ventaja tiene una migración gradual con vistas derivadas?",
    options: [
      "Sin reprocesar, la evolución de esquema se limita a cambios simples (añadir un campo opcional o un tipo de registro). Reprocesando puedes reestructurar el dataset a un modelo completamente nuevo: mantienes el esquema viejo y el nuevo como dos vistas derivadas en paralelo del mismo dato, mueves usuarios al nuevo gradualmente y, si algo falla, vuelves al viejo. Cada etapa es reversible, lo que reduce el riesgo de daño irreversible",
      "Reprocesar borra los datos históricos para ahorrar espacio",
      "La migración gradual obliga a apagar el sistema durante meses",
      "Solo permite añadir campos; nunca cambiar el modelo de datos",
    ],
    correct:
      "Sin reprocesar, la evolución de esquema se limita a cambios simples (añadir un campo opcional o un tipo de registro). Reprocesando puedes reestructurar el dataset a un modelo completamente nuevo: mantienes el esquema viejo y el nuevo como dos vistas derivadas en paralelo del mismo dato, mueves usuarios al nuevo gradualmente y, si algo falla, vuelves al viejo. Cada etapa es reversible, lo que reduce el riesgo de daño irreversible",
    explanation:
      "El stream processing refleja cambios recientes con baja latencia; el batch permite reprocesar grandes volúmenes históricos para derivar nuevas vistas. Reprocesar es el mecanismo para evolucionar el sistema: sin él, la evolución de esquema se limita a cambios simples (un campo opcional nuevo, un tipo de registro nuevo), tanto en schema-on-write como schema-on-read; con él puedes reestructurar el dataset a un modelo totalmente distinto. La migración gradual mantiene el esquema viejo y el nuevo como dos vistas derivadas en paralelo del mismo dato subyacente: derivas usuarios al nuevo poco a poco para probar rendimiento y detectar bugs mientras la mayoría sigue en el viejo. Su belleza es que cada etapa es reversible (siempre hay un sistema que funciona al que volver), reduciendo el riesgo de daño irreversible — análogo a convertir vías de tren a 'gauge' mixto añadiendo un tercer riel.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-05",
    topic: "transformacion",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué propone la 'lambda architecture' y qué problemas prácticos tiene según Kleppmann?",
    options: [
      "Registra la entrada como eventos inmutables y corre en paralelo un sistema batch (vistas exactas pero lentas) y uno de streaming (vistas aproximadas rápidas), fusionando ambos al consultar. Problemas: mantener la MISMA lógica en dos frameworks distintos, la complejidad de fusionar las dos salidas (difícil con joins/sesiones), y que el batch suele tener que incrementalizarse (acercándose al streaming) en vez de reprocesar todo",
      "Propone usar solo batch y prohibir el streaming, sin ningún inconveniente",
      "Es un protocolo de consenso que reemplaza a Paxos",
      "Almacena los datos cifrados en dos copias idénticas para tolerar fallos",
    ],
    correct:
      "Registra la entrada como eventos inmutables y corre en paralelo un sistema batch (vistas exactas pero lentas) y uno de streaming (vistas aproximadas rápidas), fusionando ambos al consultar. Problemas: mantener la MISMA lógica en dos frameworks distintos, la complejidad de fusionar las dos salidas (difícil con joins/sesiones), y que el batch suele tener que incrementalizarse (acercándose al streaming) en vez de reprocesar todo",
    explanation:
      "La lambda architecture registra la entrada como eventos inmutables que solo crecen (como event sourcing) y deriva vistas corriendo en paralelo dos sistemas: uno batch (Hadoop) que produce vistas exactas pero con retraso, y uno de streaming (Storm) que produce una actualización rápida y aproximada; al consultar se fusionan. Influyó positivamente al popularizar derivar vistas de streams de eventos inmutables y reprocesar cuando haga falta. Pero tiene problemas: hay que mantener la misma lógica en dos frameworks distintos (doble esfuerzo de debug/tuning/operación); fusionar las dos salidas es fácil con una agregación simple sobre una tumbling window pero difícil con joins o sesionización; y reprocesar todo el histórico a menudo es caro, así que el batch acaba incrementalizándose, acercándose al streaming y perdiendo su simplicidad. Por eso conviene unificar batch y streaming en un mismo sistema.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-06",
    topic: "transformacion",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "Kleppmann propone 'desempaquetar' (unbundle) la base de datos en componentes especializados. ¿Qué distingue una 'federated database' de un sistema 'unbundled'?",
    options: [
      "Federated database (polystore): unifica las LECTURAS dando una interfaz de query única sobre múltiples motores de almacenamiento (tradición relacional). Unbundled: unifica las ESCRITURAS, sincronizando cambios entre sistemas dispares con CDC y event logs (tradición Unix de herramientas pequeñas que se componen). Sincronizar escrituras es el problema más difícil",
      "Son sinónimos; ambos solo unifican lecturas",
      "Federated unifica escrituras con 2PC y unbundled unifica lecturas con SQL",
      "Ambos eliminan la necesidad de cualquier base de datos",
    ],
    correct:
      "Federated database (polystore): unifica las LECTURAS dando una interfaz de query única sobre múltiples motores de almacenamiento (tradición relacional). Unbundled: unifica las ESCRITURAS, sincronizando cambios entre sistemas dispares con CDC y event logs (tradición Unix de herramientas pequeñas que se componen). Sincronizar escrituras es el problema más difícil",
    explanation:
      "Visto en grande, el flujo de datos de una organización parece una enorme base de datos donde cada proceso batch/stream/ETL actúa como el subsistema que mantiene índices o vistas materializadas (de hecho un CREATE INDEX no es más que reprocesar el dataset y derivar una vista). Hay dos formas complementarias de componer herramientas dispares: (1) federated database o polystore —unifica las LECTURAS ofreciendo una interfaz de consulta única sobre varios motores (p. ej. los foreign data wrappers de PostgreSQL); sigue la tradición relacional de un lenguaje de alto nivel—; y (2) unbundled database —unifica las ESCRITURAS, asegurando que cada cambio llegue a todos los sistemas correctos vía CDC y event logs; sigue la tradición Unix de herramientas pequeñas que hacen una cosa bien y se componen—. Mantener las escrituras en sync entre tecnologías heterogéneas es el problema de ingeniería más difícil, y un log ordenado de eventos con consumidores idempotentes es mejor abstracción que las transacciones distribuidas.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-08",
    topic: "modelado",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "En el enfoque 'dataflow', para una conversión de moneda en una compra, ¿qué ventaja tiene suscribirse a un stream de tasas de cambio frente a llamar a un servicio de tasas por RPC (microservicios)?",
    options: [
      "El procesador de compras se suscribe por adelantado al stream de cambios de tasa y guarda la tasa actual en una BD LOCAL; al procesar una compra solo consulta esa BD local (misma máquina/proceso), reemplazando una petición de red síncrona por una consulta local: más rápido y más robusto ante la caída del otro servicio. Es un stream-table join en vez de un RPC ('la petición de red más rápida y fiable es la que no se hace')",
      "Hay que llamar al servicio de tasas por RPC en cada compra, que es lo más rápido y fiable",
      "Suscribirse al stream obliga a cifrar cada compra individualmente",
      "El stream elimina la dependencia temporal del tipo de cambio al reprocesar",
    ],
    correct:
      "El procesador de compras se suscribe por adelantado al stream de cambios de tasa y guarda la tasa actual en una BD LOCAL; al procesar una compra solo consulta esa BD local (misma máquina/proceso), reemplazando una petición de red síncrona por una consulta local: más rápido y más robusto ante la caída del otro servicio. Es un stream-table join en vez de un RPC ('la petición de red más rápida y fiable es la que no se hace')",
    explanation:
      "Componer operadores de stream en un sistema de dataflow se parece a los microservicios (loose coupling, equipos independientes), pero el mecanismo de comunicación es distinto: streams de mensajes asíncronos unidireccionales en vez de request/response síncrono. Ejemplo de la conversión de moneda: en microservicios, el código de compra consultaría por RPC un servicio de tasas en cada compra; en dataflow, se suscribe por adelantado al stream de cambios de tasa y guarda la tasa actual en una BD local, de modo que al procesar la compra solo consulta esa BD local (quizá en el mismo proceso). Reemplaza una petición de red síncrona por una consulta local: más rápido y robusto ante la caída del otro servicio ('la petición de red más rápida y fiable es la que no se hace'). En vez de un RPC, ahora hay un stream-table join entre eventos de compra y de actualización de tasa — que sigue siendo time-dependent (al reprocesar necesitarías la tasa histórica).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-09",
    topic: "almacenamiento",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Kleppmann distingue el 'write path' del 'read path'. ¿Qué papel cumplen caches, índices y vistas materializadas en ese marco?",
    options: [
      "El write path es el trabajo precomputado de forma eager al escribir (actualizar índices/vistas) y el read path el trabajo lazy que solo ocurre al consultar. Caches, índices y vistas materializadas DESPLAZAN la frontera entre ambos: precomputan más en el write path para hacer menos en el read path (sin índice, una búsqueda escanea todo como grep; precomputar todas las queries posibles sería infinito)",
      "Los índices solo afectan al read path y nunca añaden trabajo al escribir",
      "El write path es lazy y el read path es eager",
      "Las vistas materializadas eliminan por completo el trabajo tanto al leer como al escribir",
    ],
    correct:
      "El write path es el trabajo precomputado de forma eager al escribir (actualizar índices/vistas) y el read path el trabajo lazy que solo ocurre al consultar. Caches, índices y vistas materializadas DESPLAZAN la frontera entre ambos: precomputan más en el write path para hacer menos en el read path (sin índice, una búsqueda escanea todo como grep; precomputar todas las queries posibles sería infinito)",
    explanation:
      "El 'write path' es la parte del viaje del dato que se precomputa de forma eager en cuanto se escribe (pasa por etapas batch/stream que actualizan cada dataset derivado), aunque nadie lo haya pedido aún — similar a la evaluación eager. El 'read path' es la parte lazy que solo ocurre cuando alguien consulta. El dataset derivado es donde ambos se encuentran, y representa un trade-off entre cuánto trabajo se hace al escribir y cuánto al leer. Caches, índices y vistas materializadas no hacen más que desplazar esa frontera: precomputan resultados en el write path para ahorrar esfuerzo en el read path. Sin índice, una búsqueda escanearía todos los documentos (como grep): menos trabajo al escribir, mucho más al leer. Precomputar el resultado de todas las queries posibles sería el otro extremo (espacio/tiempo infinitos). Una cache de las queries comunes es un punto intermedio.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-10",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Según el 'end-to-end argument', ¿por qué una transacción serializable o la supresión de duplicados de TCP no bastan para evitar que una operación (p. ej. una transferencia) se ejecute dos veces?",
    options: [
      "Porque la supresión de duplicados de bajo nivel solo cubre su tramo (TCP, una conexión; la transacción, cliente-BD), pero si el usuario reenvía un POST tras un timeout, para el servidor es una petición nueva y para la BD una transacción nueva. La función solo puede implementarse correctamente con ayuda de los extremos: hace falta un identificador de operación (p. ej. UUID) propagado de punta a punta y una uniqueness constraint que rechace el duplicado",
      "Porque TCP y las transacciones ya garantizan exactly-once de extremo a extremo en todos los casos",
      "Porque las transacciones serializables son siempre incorrectas",
      "Porque hay que cifrar la transferencia para que no se duplique",
    ],
    correct:
      "Porque la supresión de duplicados de bajo nivel solo cubre su tramo (TCP, una conexión; la transacción, cliente-BD), pero si el usuario reenvía un POST tras un timeout, para el servidor es una petición nueva y para la BD una transacción nueva. La función solo puede implementarse correctamente con ayuda de los extremos: hace falta un identificador de operación (p. ej. UUID) propagado de punta a punta y una uniqueness constraint que rechace el duplicado",
    explanation:
      "El 'end-to-end argument' (Saltzer, Reed, Clark, 1984): una función solo puede implementarse correcta y completamente con el conocimiento y la ayuda de las aplicaciones en los EXTREMOS de la comunicación; ponerla solo en el sistema de comunicación no basta (aunque ayude como optimización). La supresión de duplicados de TCP solo vale dentro de una conexión, y una transacción atada a la conexión cliente-BD tampoco cubre el tramo usuario-servidor: si el POST expira y el usuario lo reenvía, para el servidor es otra petición y para la BD otra transacción, así que una transferencia no idempotente podría cobrarse dos veces. La solución es end-to-end: generar un identificador único de operación (UUID o hash de los campos) en el cliente, propagarlo hasta la BD y apoyarse en una uniqueness constraint sobre request_id que haga fallar el INSERT duplicado. El mismo razonamiento aplica a checksums y cifrado: solo los end-to-end cubren todos los fallos.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-11",
    topic: "calidad",
    track: "general",
    difficulty: "avanzado",
    type: "single",
    prompt: "Imponer una 'uniqueness constraint' (username único, un asiento por persona) en un sistema distribuido requiere consenso. ¿Cómo se logra con mensajería basada en log, sin transacciones distribuidas?",
    options: [
      "Se particiona el log por el valor que debe ser único (p. ej. hash del username) y un stream processor consume secuencialmente esa partición en un solo hilo: como ve las peticiones en un orden total determinista, decide cuál de las conflictivas llegó primero (la acepta y marca como tomada) y rechaza las demás, emitiendo éxito/rechazo a un stream de salida que el cliente observa. Escala añadiendo particiones",
      "Se usa replicación multi-master asíncrona, que garantiza la unicidad",
      "Cada nodo decide por su cuenta sin coordinarse",
      "Se ordena por timestamp de reloj de pared para elegir el ganador",
    ],
    correct:
      "Se particiona el log por el valor que debe ser único (p. ej. hash del username) y un stream processor consume secuencialmente esa partición en un solo hilo: como ve las peticiones en un orden total determinista, decide cuál de las conflictivas llegó primero (la acepta y marca como tomada) y rechaza las demás, emitiendo éxito/rechazo a un stream de salida que el cliente observa. Escala añadiendo particiones",
    explanation:
      "Imponer unicidad en entorno distribuido requiere consenso: ante varias peticiones concurrentes con el mismo valor, el sistema debe aceptar una y rechazar las demás. Lo común es un único líder, pero también se logra con un log: como el log garantiza que todos los consumidores ven los mensajes en el mismo orden (total order broadcast ≡ consenso), basta particionar el log por el valor que debe ser único (p. ej. hash del username) y que un stream processor consuma esa partición secuencialmente en un solo hilo, llevando en una BD local qué valores están tomados. Así decide de forma determinista cuál de las peticiones conflictivas fue primera (la acepta) y rechaza el resto, emitiendo mensajes de éxito/rechazo que el cliente observa. Escala aumentando particiones. La replicación multi-master asíncrona queda descartada, porque dos masters podrían aceptar valores conflictivos a la vez. El principio general: enrutar al mismo partición todas las escrituras que puedan entrar en conflicto y procesarlas en serie.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-12",
    topic: "calidad",
    track: "general",
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
    difficulty: "avanzado",
    type: "single",
    prompt: "¿Qué son las 'loosely interpreted constraints' y los sistemas 'coordination-avoiding', y por qué resultan atractivos?",
    options: [
      "Muchas apps toleran violar temporalmente una restricción y arreglarla luego con una 'compensating transaction' (disculparse: reembolsar un cobro doble, ofrecer descuento si falta stock, reubicar a un pasajero por overbooking). Si el coste de la disculpa es aceptable, no hace falta una restricción linearizable; basta validar tras escribir, preservando la integrity sin coordinación síncrona. Así, un sistema coordination-avoiding puede correr multi-datacenter con mejor rendimiento y tolerancia a fallos",
      "Son restricciones que se imponen siempre de forma síncrona y linearizable, sin excepción",
      "Significan que los datos pueden perderse libremente sin consecuencias",
      "Requieren transacciones distribuidas XA en cada operación",
    ],
    correct:
      "Muchas apps toleran violar temporalmente una restricción y arreglarla luego con una 'compensating transaction' (disculparse: reembolsar un cobro doble, ofrecer descuento si falta stock, reubicar a un pasajero por overbooking). Si el coste de la disculpa es aceptable, no hace falta una restricción linearizable; basta validar tras escribir, preservando la integrity sin coordinación síncrona. Así, un sistema coordination-avoiding puede correr multi-datacenter con mejor rendimiento y tolerancia a fallos",
    explanation:
      "Una uniqueness constraint estricta exige consenso/coordinación (un solo nodo por partición), con su coste en rendimiento y disponibilidad. Pero muchas apps reales se contentan con restricciones laxas: si dos personas reservan el mismo asiento o piden más stock del disponible, puedes disculparte y compensar (una 'compensating transaction': reembolsar uno de dos cobros, ofrecer un descuento por el retraso, reubicar a un pasajero por overbooking — las aerolíneas y hoteles sobrevenden a propósito). Si el coste de la disculpa (dinero/reputación) es aceptable, validar TODAS las restricciones antes de escribir es innecesariamente restrictivo: puedes escribir optimistamente y comprobar después, preservando la integrity sin coordinación síncrona. Como además los sistemas de dataflow mantienen integrity sin commit atómico, surgen los sistemas 'coordination-avoiding': pueden operar multi-datacenter en multi-leader, con cada DC funcionando independiente, logrando mejor rendimiento y tolerancia a fallos (timeliness débil pero integrity fuerte).",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },

  {
    id: "ddia-c12-14",
    topic: "calidad",
    track: "general",
    difficulty: "intermedio",
    type: "single",
    prompt: "Bajo el lema 'trust, but verify', ¿qué actitud propone Kleppmann sobre los 'system models' y la integridad de los datos?",
    options: [
      "Los system models asumen de forma binaria que ciertas cosas no pasan nunca (datos en disco no se corrompen, la RAM no falla, los checksums de TCP atrapan todo), pero en realidad es cuestión de probabilidades: a suficiente escala ocurren bit-flips, corrupción en disco/red que evade checksums, y bugs incluso en BD maduras. Conviene no confiar ciegamente: auditar y verificar la integridad de los datos de forma proactiva (p. ej. con checksums end-to-end y chequeos periódicos)",
      "Hay que confiar plenamente en que el hardware y el software nunca corrompen datos, sin verificar jamás",
      "La integridad solo depende de cifrar los datos en reposo",
      "Los system models garantizan matemáticamente que nunca ocurrirá ninguna corrupción",
    ],
    correct:
      "Los system models asumen de forma binaria que ciertas cosas no pasan nunca (datos en disco no se corrompen, la RAM no falla, los checksums de TCP atrapan todo), pero en realidad es cuestión de probabilidades: a suficiente escala ocurren bit-flips, corrupción en disco/red que evade checksums, y bugs incluso en BD maduras. Conviene no confiar ciegamente: auditar y verificar la integridad de los datos de forma proactiva (p. ej. con checksums end-to-end y chequeos periódicos)",
    explanation:
      "Razonar sobre correctness implica un 'system model': asumimos que ciertas cosas fallan (procesos caen, la red pierde mensajes) y otras no (los datos en disco tras fsync no se pierden, la RAM no se corrompe, la CPU multiplica bien). Esas suposiciones son razonables casi siempre, pero los modelos tradicionales las tratan de forma binaria cuando en realidad es cuestión de probabilidades: a suficiente escala, los eventos improbables ocurren —bit-flips por hardware/radiación o incluso por patrones de acceso (rowhammer), corrupción de datos en disco o en red que evade los checksums de TCP, y bugs incluso en BD maduras como MySQL (uniqueness) o PostgreSQL (write skew en serializable)—. La actitud 'trust, but verify' propone no confiar ciegamente en esas promesas: auditar y verificar la integridad de los datos de forma proactiva (checksums end-to-end, sistemas auto-validantes, chequeos periódicos) en vez de asumir que la corrupción nunca pasa.",
    reference: "Designing Data-Intensive Applications (Kleppmann, O'Reilly), cap. 12 — The Future of Data Systems",
  },
]);
