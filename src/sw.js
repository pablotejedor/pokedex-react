const cacheName = 'Pokedex';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './assets/styles/main.css',
        './assets/scripts/index.js',
        './assets/styles/img/camp.jpg',
        './assets/styles/img/background-query.png',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});