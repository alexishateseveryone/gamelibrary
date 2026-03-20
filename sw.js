const CACHE_NAME = 'sanrio-v1';
const ASSETS = [
  './',
  './index.html',
  './bg.mp3',
  './hellokitty.png',
  './angel.png',
  './pochaco.png',
  './pompompurin.png',
  './keropi.png',
  './cinnamorol.png',
  './melody.png',
  './kuromi.png'
];

// Install and Cache Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve from Cache when Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});