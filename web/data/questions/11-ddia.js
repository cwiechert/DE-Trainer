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
]);
