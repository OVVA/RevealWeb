const CACHE_NAME = 'reveal-cache-v1';
const urlsToCache = [
  '/',
  '/css/bootstrap.css',
  '/css/theme-tangerine.css',
  '/js/jquery-3.1.1.min.js',
  '/js/scripts.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});