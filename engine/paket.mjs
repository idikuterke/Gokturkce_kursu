// Paket kurs (online, kendi hızında) derleyici.
// build/slayt/*.html + 04_PDF/*.pdf → build/paket/ (index.html ana sayfa, modüller, pdf/) → Gokturkce_Paket_Kurs.zip
// Çevrimdışı çalışır: tek klasör, dış bağımlılık yok. İlerleme/puan tarayıcıda (GKTracker, none modu).
// Önkoşul: `node engine/build.mjs` ve `node engine/build.mjs --hedef slayt` çalıştırılmış olmalı (kapıdan geçmiş çıktılar).
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { ROOT } from "./kapi.mjs";

const P = (...s) => path.join(ROOT, ...s);
const OUT = P("build/paket");
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "pdf"), { recursive: true });

const moduller = [1, 2, 3, 4].map((n) => {
  const doc = JSON.parse(fs.readFileSync(P("content", `yedigun-${n}.json`), "utf8"));
  const src = P("build/slayt", `yedigun-${n}.html`);
  if (!fs.existsSync(src)) throw new Error(`Önce slayt build: ${src}`);
  fs.copyFileSync(src, path.join(OUT, `yedigun-${n}.html`));
  const slayt = (fs.readFileSync(src, "utf8").match(/<section class="slayt/g) || []).length;
  return { n, id: doc.id, baslik: doc.baslik, alt: doc.altbaslik, kazanim: doc.kapak?.meta?.find((m) => m.k === "KAZANIM")?.v ?? "", slayt, sinav: doc.sinav ?? null };
});

// PDF seti (öğrenci sürümleri; eğitmen kılavuzu ve cevap anahtarı pakete girmez)
const PDFLER = [
  ["02_Ogrenci_Calisma_Yapraklari.pdf", "Öğrenci Çalışma Yaprakları"],
  ["03_Tamga_Albumu_Harf_Kartlari.pdf", "Tamga Albümü ve Harf Kartları"],
  ["04_Irk_Bitig_Okuma_Foyu.pdf", "Irk Bitig Okuma Föyü"],
  ["05_Ek_Uniteler_Foyu.pdf", "Ek Üniteler Föyü"],
  ["07_Bitirme_Sinavi.pdf", "Bitirme Sınavı (basılı sürüm)"],
];
for (const [f] of PDFLER) fs.copyFileSync(P("04_PDF", f), path.join(OUT, "pdf", f));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const FONT_B64 = fs.readFileSync(P("03_Tasarim/fontlar/NotoSansOldTurkic-Regular.ttf")).toString("base64");

const index = `<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Göktürkçe Okuma-Yazma Öğreneği — Paket Kurs</title>
<style>
@font-face{font-family:'Noto Sans Old Turkic';src:url(data:font/ttf;base64,${FONT_B64}) format('truetype')}
:root{--zemin:#0B1320;--panel:#152338;--cizgi:#233754;--metin:#E6EDF5;--metin2:#9FB0C6;--sonuk:#6C7F99;--turkuaz:#2BC4C4;--mavi:#3B82F6;--yesil:#37B36A;--kirmizi:#E0564B;--altin:#C9A24A}
*{box-sizing:border-box}body{margin:0;background:var(--zemin);color:var(--metin);font-family:'Segoe UI',Calibri,Arial,sans-serif;line-height:1.5}
.runic{font-family:'Noto Sans Old Turkic',serif;direction:rtl;unicode-bidi:isolate}
header{padding:8vh 8vw 4vh;border-left:3px solid var(--turkuaz);margin:4vh 0 0 6vw}
.kicker{color:var(--turkuaz);letter-spacing:.2em;text-transform:uppercase;font-size:13px}
h1{font-family:Georgia,serif;font-weight:400;font-size:44px;margin:12px 0 6px;color:#fff}
.friz{font-size:34px;color:var(--turkuaz);margin:14px 0;text-align:left}
.alt{color:var(--metin2);font-size:18px;font-family:Georgia,serif}
main{padding:0 8vw 8vh}h2{font-family:Georgia,serif;font-weight:400;font-size:26px;color:#fff;margin:40px 0 16px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}
.kart{display:block;background:var(--panel);border:1px solid var(--cizgi);border-top:3px solid var(--turkuaz);border-radius:6px;padding:20px 22px;color:inherit;text-decoration:none}
.kart:hover{border-color:var(--turkuaz)}.kart .no{font-family:Georgia,serif;font-size:40px;color:var(--sonuk);line-height:1}.kart h3{margin:8px 0 6px;font-size:18px;color:#fff;font-weight:600}
.kart p{margin:0;color:var(--metin2);font-size:14px}.kart .durum{margin-top:12px;font-size:13px;color:var(--sonuk)}.durum.tamam{color:var(--yesil)}.durum.kaldi{color:var(--kirmizi)}.durum.devam{color:var(--altin)}
.pdf{border-top-color:var(--mavi)}
.not{color:var(--sonuk);font-size:13px;margin-top:40px;border-top:1px solid var(--cizgi);padding-top:16px}
</style></head><body>
<header><div class="kicker">Türk Runik Yazı Sistemi · Okuma-Yazma Eğitimi · Paket Kurs</div>
<h1>Göktürkçe Okuma-Yazma Öğreneği</h1>
<div class="friz runic">𐱅𐰭𐰼𐰃 · 𐰋𐰃𐰠𐰏𐰀 · 𐰴𐰍𐰣 · 𐱅𐰇𐰼𐰜</div>
<div class="alt">4 Yedigün · kendi hızınızda · eğitmen: İbrahim (Bayram) Bilir</div></header>
<main>
<h2>Yedigünler</h2><div class="grid">
${moduller.map((m) => `<a class="kart" href="yedigun-${m.n}.html" data-doc="${m.id}"><div class="no">${m.n}</div><h3>${esc(m.baslik.split("—")[1]?.trim() ?? m.baslik)}</h3><p>${esc(m.kazanim)}</p><p style="margin-top:8px">${m.slayt} slayt${m.sinav ? " · sertifika sınavı" : ""}</p><div class="durum">Başlanmadı</div></a>`).join("\n")}
</div>
<h2>İndirilebilir Kaynaklar</h2><div class="grid">
${PDFLER.map(([f, ad]) => `<a class="kart pdf" href="pdf/${f}" target="_blank"><h3>${esc(ad)}</h3><p>PDF · A4 · font gömülü</p></a>`).join("\n")}
</div>
<p class="not">Kullanım: bir Yedigün'ü açın; ok tuşları / boşluk ile ilerleyin, <b>F</b> tam ekran. Quiz cevaplarınız ve kaldığınız slayt bu tarayıcıda saklanır. Sertifika: Yedigün 4 sınavında 60/100 (12 sorudan 8) ve %80 devam. Tüm runik metinler Unicode (U+10C00–10C4F), font gömülü; internet gerekmez.<br>Kaynaklar: Kül Tigin / Bilge Kağan / Tonyukuk yazıtları (turkbitig.com metinleri), Irk Bitig veri tabanı; akademik omurga Prof. Dr. Aysu Ata (TUR203). Görseller temsilîdir; runik yazılar fonttan üretilmiştir.</p>
</main>
<script>
document.querySelectorAll('.kart[data-doc]').forEach(function(k){try{var st=JSON.parse(localStorage.getItem('gk:'+k.dataset.doc)||'null');var d=k.querySelector('.durum');if(!st)return;
 var c=Object.keys(st.cevaplar||{}).length;
 if(st.tamam){d.textContent=st.tamam.gecti?'Sınav: GEÇTİ · '+st.puan.raw+'/100':'Sınav: KALDI · '+st.puan.raw+'/100';d.className='durum '+(st.tamam.gecti?'tamam':'kaldi')}
 else if(c||st.slayt){d.textContent='Devam ediyor · slayt '+((st.slayt||0)+1)+(c?' · '+c+' cevap':'');d.className='durum devam'}}catch(e){}});
</script></body></html>`;
fs.writeFileSync(path.join(OUT, "index.html"), index, "utf8");
fs.writeFileSync(path.join(OUT, "BENIOKU.txt"),
`GÖKTÜRKÇE OKUMA-YAZMA ÖĞRENEĞİ — PAKET KURS
Başlamak için: index.html dosyasını çift tıklayın (Chrome / Edge / Firefox).
İnternet gerekmez. Klasörü olduğu gibi kopyalayın; dosya adlarını değiştirmeyin.
Yedigün 1–4: slayt dersleri (ok tuşları / boşluk, F = tam ekran). Quiz cevapları tarayıcıda saklanır.
Sertifika sınavı: Yedigün 4, 12 soru, geçme 60/100. Sonuç ekranının görüntüsünü eğitmene iletin.
pdf/: çalışma yaprakları, tamga kartları, Irk Bitig föyü, ek üniteler, basılı sınav.
Eğitmen: İbrahim (Bayram) Bilir · Sürüm ${new Date().toISOString().slice(0, 10)}
`, "utf8");

// zip (PowerShell Compress-Archive — ek bağımlılık yok)
const zip = P("build", "Gokturkce_Paket_Kurs.zip");
if (fs.existsSync(zip)) fs.unlinkSync(zip);
const r = spawnSync("powershell", ["-NoProfile", "-Command", `Compress-Archive -Path '${OUT}\\*' -DestinationPath '${zip}' -CompressionLevel Optimal`], { encoding: "utf8" });
if (r.status !== 0) console.error("zip uyarı:", r.stderr);
const boyut = (p) => (fs.statSync(p).size / 1024 / 1024).toFixed(1) + " MB";
console.log(`Paket: ${path.relative(ROOT, OUT)} → ${moduller.length} modül (${moduller.reduce((a, m) => a + m.slayt, 0)} slayt), ${PDFLER.length} PDF`);
if (fs.existsSync(zip)) console.log(`Zip: ${path.relative(ROOT, zip)} (${boyut(zip)})`);
