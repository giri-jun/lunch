const CACHE_NAME = "lunch-roulette-cache-v1";
const urlsToCache = [
  "./",
  "index.html",
  "image 1.png",
  "image 2.png",
  "manifest.json"
];

// Install SW and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached files when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
