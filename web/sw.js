/* DE-Trainer — service worker (offline).
 * Precachea el "app shell" y los datos. Cache-first con caché en tiempo de
 * ejecución (para fuentes de Google y cualquier GET que falte). Para publicar
 * una versión nueva, sube el número de CACHE. */
const CACHE = "detrainer-v1";

const ASSETS = [
  "./index.html",
  "./css/styles.css",
  "./js/app.js",
  "./data/questions/00-core.js",
  "./data/questions/general.js",
  "./data/questions/databricks.js",
  "./data/questions/10-fundamentals.js",
  "./data/questions/11-ddia.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Navegaciones: sirve el index cacheado (la app es de una sola página).
  if (req.mode === "navigate") {
    e.respondWith(caches.match("./index.html").then((r) => r || fetch(req)));
    return;
  }

  // Resto: cache-first; si no está, va a la red y guarda una copia.
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((resp) => {
          if (resp && (resp.ok || resp.type === "opaque")) {
            const copy = resp.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return resp;
        })
        .catch(() => cached);
    })
  );
});
