const CACHE = "deviluke-v8";
const BASE = (self.location.pathname.replace(/\/[^/]*$/, "") || "");
const FILES = [BASE+"/",BASE+"/index.html",BASE+"/chat.html",BASE+"/create.html",BASE+"/login.html",BASE+"/personas.html",BASE+"/download.html",BASE+"/my-bots.html",BASE+"/creator.html",BASE+"/d.ai.png",BASE+"/manifest.json",BASE+"/premium-wings.png",BASE+"/deviluke-banner.png"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES).catch(() => {})));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE ? caches.delete(k) : Promise.resolve()))
    ).then(() => clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data && e.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

// Only intercept navigation requests so API calls (JSONBin etc) go direct
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  }
});
