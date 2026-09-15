// PWA varlık üretici — build/paket'i kurulabilir/çevrimdışı web uygulamasına çevirir.
//   Önkoşul: `npm run paket` (build/paket hazır). Sonrası: `node engine/pwa-uret.mjs`
//   Üretir: manifest.webmanifest, sw.js (içerik karmalı precache), icons/ (SVG 512 + PNG 192), _headers
//   İkon: Noto Sans Old Turkic 𐱅 glifinin opentype.js ile çıkarılan yolu (SVG) + 03_Tasarim/pwa/icon-192.png (canvas PNG).
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import opentype from "opentype.js";
import { ROOT } from "./kapi.mjs";

const P = (...s) => path.join(ROOT, ...s);
const PAKET = P("build/paket");
if (!fs.existsSync(path.join(PAKET, "index.html"))) throw new Error("Önce `npm run paket`: build/paket yok");

// ---------- ikonlar ----------
const font = opentype.loadSync(P("03_Tasarim/fontlar/NotoSansOldTurkic-Regular.ttf"));
const glif = font.charToGlyph(String.fromCodePoint(0x10c30)); // 𐱅 (türük/türk'ün ilk tamgası)
const boyut = 512, olcek = 0.52 * boyut;
const yol = glif.getPath(0, 0, olcek);
const bb = yol.getBoundingBox();
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${boyut} ${boyut}">
<rect width="${boyut}" height="${boyut}" fill="#0B1320"/>
<g transform="translate(${(boyut - (bb.x2 - bb.x1)) / 2 - bb.x1},${(boyut - (bb.y1 - bb.y2)) / 2 - bb.y2})">
<path d="${yol.toPathData(1)}" fill="#2BC4C4"/></g></svg>`;
fs.mkdirSync(path.join(PAKET, "icons"), { recursive: true });
fs.writeFileSync(path.join(PAKET, "icons", "icon-512.svg"), svg, "utf8");
fs.copyFileSync(P("03_Tasarim/pwa/icon-192.png"), path.join(PAKET, "icons", "icon-192.png"));

// ---------- manifest ----------
const manifest = {
  name: "Göktürkçe Okuma-Yazma Öğreneği",
  short_name: "Göktürkçe Kursu",
  description: "Türk Runik Yazı Sistemi · 4 Yedigün · çevrimdışı kurs paketi",
  start_url: "./index.html",
  scope: "./",
  display: "standalone",
  background_color: "#0B1320",
  theme_color: "#0B1320",
  lang: "tr",
  icons: [
    { src: "icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
    { src: "icons/icon-512.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
  ],
};
fs.writeFileSync(path.join(PAKET, "manifest.webmanifest"), JSON.stringify(manifest, null, 2), "utf8");

// ---------- service worker (içerik karmalı precache) ----------
const dosyalar = [];
(function gez(yol) {
  for (const d of fs.readdirSync(yol, { withFileTypes: true })) {
    const p = path.join(yol, d.name);
    if (d.isDirectory()) gez(p);
    else dosyalar.push("/" + path.relative(PAKET, p).split(path.sep).join("/"));
  }
})(PAKET);
// Host kontrol dosyaları precache'e girmez (Vercel/Netlify servis etmez → 404 → addAll patlar)
const PRECACHE = dosyalar.filter((d) => !d.endsWith("/_headers"));
const karmala = (dosyalar) =>
  crypto.createHash("sha256").update(dosyalar.map((d) => d + ":" + crypto.createHash("sha256").update(fs.readFileSync(path.join(PAKET, d))).digest("hex")).join("|")).digest("hex").slice(0, 12);
const SURUM = karmala(dosyalar);
const sw = `// GK Paket SW — sürüm ${SURUM} (pwa-uret.mjs üretir; elle düzenlemeyin)
const ONBELLEK = "gk-paket-${SURUM}";
const LISTE = ${JSON.stringify(PRECACHE, null, 0)};
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
});`;
fs.writeFileSync(path.join(PAKET, "sw.js"), sw, "utf8");

// ---------- _headers (Netlify/Cloudflare) ----------
fs.writeFileSync(path.join(PAKET, "_headers"), "/sw.js\n  Cache-Control: no-cache\n/manifest.webmanifest\n  Cache-Control: no-cache\n", "utf8");

// ---------- index.html enjeksiyonu (idempotent; paket.mjs'i yeniden koşturmadan PWA'ya bağlar) ----------
const INDEX = path.join(PAKET, "index.html");
let idx = fs.readFileSync(INDEX, "utf8");
const EK = `<link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#0B1320"><link rel="icon" href="icons/icon-192.png"><script>if(location.protocol!=="file:"){try{navigator.serviceWorker.register("sw.js").catch(()=>{})}catch(e){}}</script>`;
if (!idx.includes('rel="manifest"')) {
  idx = idx.replace("</head>", EK + "</head>");
  fs.writeFileSync(INDEX, idx, "utf8");
}

// ---------- BENIOKU-PWA ----------
fs.writeFileSync(path.join(PAKET, "BENIOKU-PWA.txt"),
`GÖKTÜRKÇE PAKET KURS — PWA DAĞITIM NOTU
Bu klasör tam bir kurulabilir web uygulamasıdır (manifest + service worker + ikonlar).

Yerel test : node engine/onizleme-sunucu.mjs  → http://127.0.0.1:5173/
Dağıtım    : klasörü olduğu gibi yükleyin —
             Vercel   : vercel deploy --prod (yapılandırma: vercel.json hazır)
             Netlify  : netlify deploy --prod (yapılandırma: netlify.toml hazır)
             Pages    : repoya koyup kök dizin = build/paket seçin

Notlar:
- Service worker TÜM dosyaları önceden önbelleğe alır (precache); ilk ziyaretten sonra tam çevrimdışı çalışır.
- sw.js sürümü içerik karmasıdır: içerik değişince pwa-uret.mjs yeni karmayı üretir, istemciler otomatik güncellenir.
- file:// ile açım SW kaydetmez ama paket yine de çalışır (çevrimdışı zip sürümü).
`, "utf8");

console.log(`PWA: manifest + sw (${PRECACHE.length} dosya precache, sürüm ${SURUM}) + ikonlar → build/paket`);
console.log("Dağıtım: build/paket klasörünü vercel/netlify/pages'e yükleyin (bkz. build/paket/BENIOKU-PWA.txt)");
