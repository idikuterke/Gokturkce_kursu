// Sınav sonucu toplama sunucusu — sıfır bağımlılık (node:http).
//   POST /api/sonuc          ← slaytlardaki GKTracker (web modu) JSON gönderir → data/sonuclar.jsonl'e eklenir
//   GET  /sonuclar?token=…   → eğitmen panosu (tablo) ; GET /sonuclar.csv?token=… → CSV
//   GET  /api/saglik         → {ok:true}
// Ortam: PORT (varsayılan 8787), SONUC_TOKEN (pano parolası; zorunlu), SONUC_DIR (varsayılan ./data)
// Çalıştırma: SONUC_TOKEN=gizli node engine/sonuc-sunucu.mjs   |  Render/Railway: aynı komut, PORT otomatik.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const PORT = Number(process.env.PORT ?? 8787);
const TOKEN = process.env.SONUC_TOKEN;
const DIR = process.env.SONUC_DIR ?? path.resolve("data");
const DOSYA = path.join(DIR, "sonuclar.jsonl");
fs.mkdirSync(DIR, { recursive: true });
if (!TOKEN) { console.error("SONUC_TOKEN ortam değişkeni zorunlu (pano parolası)."); process.exit(1); }

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, GET, OPTIONS", "Access-Control-Allow-Headers": "content-type" };

function oku() {
  if (!fs.existsSync(DOSYA)) return [];
  return fs.readFileSync(DOSYA, "utf8").split("\n").filter(Boolean).map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
}

// Gelen kaydı doğrula ve sadeleştir — istemciden gelen her şey veridir, güvenilmez.
function temizle(g, ip) {
  const s = (v, n = 200) => String(v ?? "").slice(0, n);
  const cevaplar = g.cevaplar && typeof g.cevaplar === "object" ? Object.fromEntries(Object.entries(g.cevaplar).slice(0, 60).map(([k, v]) => [s(k, 40), { d: v?.d ? 1 : 0, i: Number.isInteger(v?.i) ? v.i : null }])) : {};
  return {
    alindi: new Date().toISOString(), ip,
    kurs: s(g.kurs, 60), modul: s(g.modul, 40), ad: s(g.ad, 120), eposta: s(g.eposta, 120), not: s(g.not, 500),
    puan: Number.isFinite(+g.puan) ? Math.max(0, Math.min(100, +g.puan)) : null,
    dogru: Number.isInteger(g.dogru) ? g.dogru : null, soru: Number.isInteger(g.soru) ? g.soru : null,
    gecti: !!g.gecti, cevaplar, cihaz: s(g.cihaz, 64), surum: s(g.surum, 40),
  };
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  if (req.method === "OPTIONS") { res.writeHead(204, CORS); return res.end(); }

  if (req.method === "POST" && url.pathname === "/api/sonuc") {
    let body = ""; req.on("data", (c) => { body += c; if (body.length > 64_000) req.destroy(); });
    req.on("end", () => {
      try {
        const kayit = temizle(JSON.parse(body), req.headers["x-forwarded-for"]?.split(",")[0] ?? req.socket.remoteAddress);
        if (!kayit.modul || kayit.puan === null) throw new Error("eksik alan");
        fs.appendFileSync(DOSYA, JSON.stringify(kayit) + "\n", "utf8");
        console.log(`[sonuç] ${kayit.alindi} ${kayit.modul} ${kayit.ad || "(adsız)"} ${kayit.puan}/100 ${kayit.gecti ? "GEÇTİ" : "KALDI"}`);
        res.writeHead(200, { ...CORS, "content-type": "application/json" }); res.end(JSON.stringify({ ok: true }));
      } catch (e) { res.writeHead(400, { ...CORS, "content-type": "application/json" }); res.end(JSON.stringify({ ok: false, hata: e.message })); }
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/saglik") { res.writeHead(200, { ...CORS, "content-type": "application/json" }); return res.end('{"ok":true}'); }

  if (req.method === "GET" && (url.pathname === "/sonuclar" || url.pathname === "/sonuclar.csv")) {
    if (url.searchParams.get("token") !== TOKEN) { res.writeHead(401); return res.end("token gerekli: /sonuclar?token=…"); }
    const kayitlar = oku().reverse();
    if (url.pathname.endsWith(".csv")) {
      const kolon = ["alindi", "kurs", "modul", "ad", "eposta", "puan", "dogru", "soru", "gecti", "not", "cihaz"];
      const csv = "﻿" + [kolon.join(";"), ...kayitlar.map((k) => kolon.map((c) => `"${String(k[c] ?? "").replace(/"/g, '""')}"`).join(";"))].join("\r\n");
      res.writeHead(200, { "content-type": "text/csv; charset=utf-8", "content-disposition": "attachment; filename=sonuclar.csv" }); return res.end(csv);
    }
    const satir = kayitlar.map((k) => `<tr><td>${esc(k.alindi.replace("T", " ").slice(0, 16))}</td><td>${esc(k.modul)}</td><td>${esc(k.ad)}</td><td>${esc(k.eposta)}</td><td class="n">${k.puan}</td><td class="n">${k.dogru}/${k.soru}</td><td class="${k.gecti ? "g" : "k"}">${k.gecti ? "GEÇTİ" : "KALDI"}</td><td>${esc(k.not)}</td><td class="c">${esc(k.cihaz)}</td></tr>`).join("");
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    return res.end(`<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><title>Sınav Sonuçları</title><style>
body{font-family:Segoe UI,Arial,sans-serif;background:#0B1320;color:#E6EDF5;margin:0;padding:24px}h1{font-family:Georgia,serif;font-weight:400;color:#fff}a{color:#2BC4C4}
table{border-collapse:collapse;width:100%;font-size:14px}th{text-align:left;color:#2BC4C4;border-bottom:1px solid #2BC4C4;padding:8px}td{border-bottom:1px solid #233754;padding:8px;vertical-align:top}
.n{text-align:right;font-variant-numeric:tabular-nums}.g{color:#37B36A;font-weight:600}.k{color:#E0564B;font-weight:600}.c{color:#6C7F99;font-size:11px}</style></head><body>
<h1>Göktürkçe Öğreneği — Sınav Sonuçları</h1><p>${kayitlar.length} kayıt · <a href="/sonuclar.csv?token=${esc(TOKEN)}">CSV indir</a> · geçen: ${kayitlar.filter((k) => k.gecti).length}</p>
<table><tr><th>Alındı</th><th>Modül</th><th>Ad</th><th>E-posta</th><th>Puan</th><th>Doğru</th><th>Karar</th><th>Not</th><th>Cihaz</th></tr>${satir}</table></body></html>`);
  }
  res.writeHead(404, CORS); res.end("yok");
});
server.listen(PORT, () => console.log(`Sonuç sunucusu :${PORT} · kayıt: ${DOSYA} · pano: /sonuclar?token=…`));
