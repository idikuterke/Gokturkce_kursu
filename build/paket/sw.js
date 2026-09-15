// GK Paket SW — sürüm 01439ad62d20 (pwa-uret.mjs üretir; elle düzenlemeyin)
const ONBELLEK = "gk-paket-01439ad62d20";
const LISTE = ["/BENIOKU-PWA.txt","/BENIOKU.txt","/icons/icon-192.png","/icons/icon-512.svg","/index.html","/manifest.webmanifest","/pdf/02_Ogrenci_Calisma_Yapraklari.pdf","/pdf/03_Tamga_Albumu_Harf_Kartlari.pdf","/pdf/04_Irk_Bitig_Okuma_Foyu.pdf","/pdf/05_Ek_Uniteler_Foyu.pdf","/pdf/07_Bitirme_Sinavi.pdf","/pdf/08_Cuzdan_Karti_A6.pdf","/sw.js","/yedigun-1.html","/yedigun-2.html","/yedigun-3.html","/yedigun-4.html"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(ONBELLEK).then((c) => c.addAll(LISTE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((a) => Promise.all(a.filter((k) => k !== ONBELLEK).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((v) => v || fetch(e.request).then((y) => {
      const kopya = y.clone();
      if (y.ok && new URL(e.request.url).origin === location.origin) caches.open(ONBELLEK).then((c) => c.put(e.request, kopya));
      return y;
    }).catch(() => caches.match("./index.html")))
  );
});