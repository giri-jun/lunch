const CACHE_NAME = "lunch-roulette-cache-v1";
const urlsToCache = [
  "./",
  "index.html",
  "manifest.json",
  "image 1.png",
  "image 2.png"
];

// install
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// fetch
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
