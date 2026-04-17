const CACHE_NAME = 'tourism-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles/style.css',
  './manifest.json',
  './img/icon-192.png',
  './img/icon-512.png'
];

// Instalación: Guarda los archivos en la caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Archivos en caché con éxito');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación: Limpia cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estrategia de respuesta: Primero busca en caché, si no, va a la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

