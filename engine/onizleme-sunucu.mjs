// Önizleme statik sunucusu — sıfır bağımlılık (node:http). Statik klasörleri servis eder (varsayılan: build/paket).
//   node engine/onizleme-sunucu.mjs                        → PORT=5173, kök=build/paket
//   PORT=3000 KOK=build/baski/html node engine/onizleme-sunucu.mjs
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const PORT = Number(process.env.PORT) || 5173; // "" veya geçersiz değer → 5173
const KOK = path.resolve(process.env.KOK ?? "build/paket");
const TURLER = {
  ".html": "text/html; charset=utf-8", ".pdf": "application/pdf", ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".png": "image/png", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf", ".otf": "font/otf", ".ico": "image/x-icon",
};
http.createServer((istek, yanit) => {
  const yol = path.normalize(decodeURIComponent(new URL(istek.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  const uzanti = path.extname(yol);
  let dosya = path.join(KOK, yol === "/" || !uzanti ? path.join(yol, "index.html") : yol);
  if (!fs.existsSync(dosya) && uzanti) dosya = path.join(KOK, yol); // uzantısız ama gerçek dosya (ör. _headers)
  if (!dosya.startsWith(KOK)) { yanit.writeHead(403); return yanit.end(); }
  fs.readFile(dosya, (hata, veri) => {
    if (hata) { yanit.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return yanit.end("Bulunamadi: " + yol); }
    yanit.writeHead(200, { "Content-Type": TURLER[path.extname(dosya).toLowerCase()] ?? "application/octet-stream" });
    yanit.end(veri);
  });
}).listen(PORT, "127.0.0.1", () => console.log(`Onizleme sunucusu ayakta: http://127.0.0.1:${PORT}/ (kok: ${KOK})`));
