// Önizleme statik sunucusu — sıfır bağımlılık (node:http). Statik klasörleri servis eder (varsayılan: build/paket).
// Ayrıca /api/sonuc, /api/saglik ve /sonuclar uç noktalarını destekler.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.PORT) || 3000;
const KOK = path.resolve(process.env.KOK ?? path.join(ROOT, "build/paket"));

// İlk açılışta paket derlenmemişse otomatik üret
if (!fs.existsSync(path.join(KOK, "index.html"))) {
  console.log("Paket dizini bulunamadı, otomatik derleme başlatılıyor...");
  try {
    spawnSync("node", ["engine/build.mjs"], { stdio: "inherit", cwd: ROOT });
    spawnSync("node", ["engine/build.mjs", "--hedef", "slayt"], { stdio: "inherit", cwd: ROOT });
    spawnSync("node", ["engine/paket.mjs"], { stdio: "inherit", cwd: ROOT });
    spawnSync("node", ["engine/pwa-uret.mjs"], { stdio: "inherit", cwd: ROOT });
  } catch (e) {
    console.error("Derleme uyarısı:", e);
  }
}

// Sınav sonuçları yapılandırması
const TOKEN = process.env.SONUC_TOKEN || "egitmen";
const DIR = process.env.SONUC_DIR ?? path.join(ROOT, "data");
const DOSYA = path.join(DIR, "sonuclar.jsonl");
try { fs.mkdirSync(DIR, { recursive: true }); } catch {}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
};

function oku() {
  if (!fs.existsSync(DOSYA)) return [];
  return fs.readFileSync(DOSYA, "utf8").split("\n").filter(Boolean).map((l) => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
}

function temizle(g, ip) {
  const s = (v, n = 200) => String(v ?? "").slice(0, n);
  const cevaplar = g.cevaplar && typeof g.cevaplar === "object"
    ? Object.fromEntries(Object.entries(g.cevaplar).slice(0, 60).map(([k, v]) => [s(k, 40), { d: v?.d ? 1 : 0, i: Number.isInteger(v?.i) ? v.i : null }]))
    : {};
  return {
    alindi: new Date().toISOString(), ip,
    kurs: s(g.kurs, 60), modul: s(g.modul, 40), ad: s(g.ad, 120), eposta: s(g.eposta, 120), not: s(g.not, 500),
    puan: Number.isFinite(+g.puan) ? Math.max(0, Math.min(100, +g.puan)) : null,
    dogru: Number.isInteger(g.dogru) ? g.dogru : null, soru: Number.isInteger(g.soru) ? g.soru : null,
    gecti: !!g.gecti, cevaplar, cihaz: s(g.cihaz, 64), surum: s(g.surum, 40),
  };
}

const TURLER = {
  ".html": "text/html; charset=utf-8",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".ico": "image/x-icon",
};

const server = http.createServer((istek, yanit) => {
  const parsedUrl = new URL(istek.url, "http://localhost");
  const pathname = parsedUrl.pathname;

  // CORS preflight
  if (istek.method === "OPTIONS") {
    yanit.writeHead(204, CORS);
    return yanit.end();
  }

  // API: Sağlık kontrolü
  if (istek.method === "GET" && pathname === "/api/saglik") {
    yanit.writeHead(200, { ...CORS, "content-type": "application/json" });
    return yanit.end('{"ok":true}');
  }

  // API: Sınav sonucu kaydetme
  if (istek.method === "POST" && pathname === "/api/sonuc") {
    let body = "";
    istek.on("data", (c) => {
      body += c;
      if (body.length > 64_000) istek.destroy();
    });
    istek.on("end", () => {
      try {
        const ip = istek.headers["x-forwarded-for"]?.split(",")[0]?.trim() ?? istek.socket.remoteAddress;
        const kayit = temizle(JSON.parse(body), ip);
        if (!kayit.modul || kayit.puan === null) throw new Error("eksik alan");
        fs.appendFileSync(DOSYA, JSON.stringify(kayit) + "\n", "utf8");
        console.log(`[sonuç] ${kayit.alindi} ${kayit.modul} ${kayit.ad || "(adsız)"} ${kayit.puan}/100 ${kayit.gecti ? "GEÇTİ" : "KALDI"}`);
        yanit.writeHead(200, { ...CORS, "content-type": "application/json" });
        yanit.end(JSON.stringify({ ok: true }));
      } catch (e) {
        yanit.writeHead(400, { ...CORS, "content-type": "application/json" });
        yanit.end(JSON.stringify({ ok: false, hata: e.message }));
      }
    });
    return;
  }

  // Pano / Sonuçlar
  if (istek.method === "GET" && (pathname === "/sonuclar" || pathname === "/sonuclar.csv")) {
    const reqToken = parsedUrl.searchParams.get("token");
    if (process.env.SONUC_TOKEN && reqToken !== TOKEN) {
      yanit.writeHead(401, { "content-type": "text/plain; charset=utf-8" });
      return yanit.end("token gerekli: /sonuclar?token=…");
    }
    const kayitlar = oku().reverse();
    if (pathname.endsWith(".csv")) {
      const kolon = ["alindi", "kurs", "modul", "ad", "eposta", "puan", "dogru", "soru", "gecti", "not", "cihaz"];
      const csv = "\uFEFF" + [kolon.join(";"), ...kayitlar.map((k) => kolon.map((c) => `"${String(k[c] ?? "").replace(/"/g, '""')}"`).join(";"))].join("\r\n");
      yanit.writeHead(200, { "content-type": "text/csv; charset=utf-8", "content-disposition": "attachment; filename=sonuclar.csv" });
      return yanit.end(csv);
    }
    const satir = kayitlar.map((k) => `<tr><td>${esc(k.alindi.replace("T", " ").slice(0, 16))}</td><td>${esc(k.modul)}</td><td>${esc(k.ad)}</td><td>${esc(k.eposta)}</td><td class="n">${k.puan}</td><td class="n">${k.dogru}/${k.soru}</td><td class="${k.gecti ? "g" : "k"}">${k.gecti ? "GEÇTİ" : "KALDI"}</td><td>${esc(k.not)}</td><td class="c">${esc(k.cihaz)}</td></tr>`).join("");
    yanit.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    return yanit.end(`<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><title>Sınav Sonuçları</title><style>
body{font-family:Segoe UI,Arial,sans-serif;background:#0B1320;color:#E6EDF5;margin:0;padding:24px}h1{font-family:Georgia,serif;font-weight:400;color:#fff}a{color:#2BC4C4}
table{border-collapse:collapse;width:100%;font-size:14px}th{text-align:left;color:#2BC4C4;border-bottom:1px solid #2BC4C4;padding:8px}td{border-bottom:1px solid #233754;padding:8px;vertical-align:top}
.n{text-align:right;font-variant-numeric:tabular-nums}.g{color:#37B36A;font-weight:600}.k{color:#E0564B;font-weight:600}.c{color:#6C7F99;font-size:11px}</style></head><body>
<h1>Göktürkçe Öğreneği — Sınav Sonuçları</h1><p>${kayitlar.length} kayıt · <a href="/sonuclar.csv${reqToken ? `?token=${esc(reqToken)}` : ""}">CSV indir</a> · geçen: ${kayitlar.filter((k) => k.gecti).length}</p>
<table><tr><th>Alındı</th><th>Modül</th><th>Ad</th><th>E-posta</th><th>Puan</th><th>Doğru</th><th>Karar</th><th>Not</th><th>Cihaz</th></tr>${satir}</table></body></html>`);
  }

  // Statik dosya servisi
  const yol = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const uzanti = path.extname(yol);
  let dosya = path.join(KOK, yol === "/" || !uzanti ? path.join(yol, "index.html") : yol);
  if (!fs.existsSync(dosya) && uzanti) dosya = path.join(KOK, yol);
  if (!dosya.startsWith(KOK)) {
    yanit.writeHead(403);
    return yanit.end();
  }

  fs.readFile(dosya, (hata, veri) => {
    if (hata) {
      yanit.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return yanit.end("Bulunamadi: " + yol);
    }
    const contentType = TURLER[path.extname(dosya).toLowerCase()] ?? "application/octet-stream";
    const headers = { "Content-Type": contentType };
    if (pathname === "/sw.js" || pathname === "/manifest.webmanifest") {
      headers["Cache-Control"] = "no-cache";
    }
    yanit.writeHead(200, headers);
    yanit.end(veri);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Önizleme sunucusu ayakta: http://0.0.0.0:${PORT}/ (kök: ${KOK})`);
});
