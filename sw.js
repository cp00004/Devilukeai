const CACHE = "deviluke-v12";
const BASE = (self.location.pathname.replace(/\/[^/]*$/, "") || "");
const FILES = [BASE+"/",BASE+"/index.html",BASE+"/chat.html",BASE+"/create.html",BASE+"/login.html",BASE+"/personas.html",BASE+"/download.html",BASE+"/my-bots.html",BASE+"/creator.html",BASE+"/d.ai.png",BASE+"/manifest.json",BASE+"/premium-wings.png",BASE+"/deviluke-banner.png"];
const OFFLINE_HTML = "<!doctype html><title>Offline</title><body style='background:#000;color:#fff;font-family:sans-serif;padding:24px'>Deviluke AI is offline. Please reconnect and try again.</body>";

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
  if (e.request.mode !== "navigate") return;
  e.respondWith((async () => {
    try {
      return await fetch(e.request);
    } catch (err) {
      return await caches.match(e.request)
        || await caches.match(BASE + "/index.html")
        || new Response(OFFLINE_HTML, {
          status: 503,
          headers: { "Content-Type": "text/html; charset=utf-8" }
        });
    }
  })());
});
