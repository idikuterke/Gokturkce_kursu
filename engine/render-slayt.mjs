// Slayt renderer: content/*.json → tek dosya HTML (koyu projeksiyon teması, gömülü Old Turkic fontu, sıfır dış bağımlılık).
// Aynı dosya: tarayıcıda sunum (ok tuşları, F = tam ekran, quiz geri bildirimi) · Ctrl+P / --hedef slayt-pdf ile her slayt bir sayfa.
// Kural: bir blok = bir slayt. Yalnız targets içinde "slayt" olan bloklar çizilir.
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./kapi.mjs";

const P = (...s) => path.join(ROOT, ...s);
const FONT_B64 = fs.readFileSync(P("03_Tasarim/fontlar/NotoSansOldTurkic-Regular.ttf")).toString("base64");
const chr = (cp) => String.fromCodePoint(parseInt(cp.slice(2), 16));
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Görseller tek dosya ilkesi gereği base64 gömülür (JPEG/PNG). Yol repo köküne görelidir.
function gorselUri(src) {
  const p = path.isAbsolute(src) ? src : P(src);
  if (!fs.existsSync(p)) throw new Error(`Görsel yok: ${src}`);
  const mime = /\.png$/i.test(p) ? "image/png" : /\.svg$/i.test(p) ? "image/svg+xml" : "image/jpeg";
  return `data:${mime};base64,${fs.readFileSync(p).toString("base64")}`;
}
// Düz metin içindeki runik dizileri span.runic ile sarar (font + RTL garantisi)
const runikSar = (s) => String(s).replace(/([\u{10C00}-\u{10C4F}][\u{10C00}-\u{10C4F}\s:∶]*[\u{10C00}-\u{10C4F}]|[\u{10C00}-\u{10C4F}])/gu, '<span class="runic">$1</span>');
const kelimeler = (s) => s.split(/\s*:\s*/).map((k) => k.trim()).filter(Boolean);

// ---------- Tema: "Bengü Gece" — koyu zemin, turkuaz/mavi ince şeritler, akademik ----------
const CSS = `
@font-face{font-family:'Noto Sans Old Turkic';src:url(data:font/ttf;base64,${FONT_B64}) format('truetype')}
:root{
  --zemin:#0B1320; --zemin2:#101B2C; --panel:#152338; --cizgi:#233754;
  --metin:#E6EDF5; --metin2:#9FB0C6; --sonuk:#6C7F99;
  --turkuaz:#2BC4C4; --mavi:#3B82F6; --altin:#C9A24A; --kirmizi:#E0564B; --yesil:#37B36A;
  --serif:Georgia,'Source Serif 4','Times New Roman',serif; --sans:'Segoe UI',Calibri,Arial,sans-serif; --mono:'JetBrains Mono',Consolas,monospace;
}
*{box-sizing:border-box} html,body{margin:0;height:100%;background:var(--zemin);color:var(--metin);font-family:var(--sans);overflow:hidden}
.runic{font-family:'Noto Sans Old Turkic',serif;direction:rtl;unicode-bidi:isolate}
.deck{position:relative;width:100vw;height:100vh}
.slayt{position:absolute;inset:0;display:none;flex-direction:column;padding:6vh 7vw 9vh;background:
  linear-gradient(90deg,var(--turkuaz) 0 3px,transparent 3px) left/100% 100% no-repeat,
  linear-gradient(90deg,var(--mavi) 0 1px,transparent 1px) 8px 0/100% 100% no-repeat, var(--zemin)}
.slayt.aktif{display:flex}
.slayt .ust{display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid var(--cizgi);padding-bottom:1vh;margin-bottom:3vh;font-size:1.6vh;letter-spacing:.14em;text-transform:uppercase;color:var(--sonuk)}
.slayt .ust b{color:var(--turkuaz);font-weight:600}
.slayt .govde{flex:1;display:flex;flex-direction:column;justify-content:center;min-height:0}
h1{font-family:var(--serif);font-weight:400;font-size:6.2vh;line-height:1.1;margin:0 0 2vh;color:#fff}
h2{font-family:var(--serif);font-weight:400;font-size:5vh;margin:0 0 2vh;color:#fff}
h3{font-family:var(--serif);font-weight:400;font-size:4.2vh;margin:0 0 3vh;color:#fff;border-left:3px solid var(--turkuaz);padding-left:2vh}
p,li{font-size:3vh;line-height:1.45;margin:0 0 1.6vh} ul{padding-left:3vh} li{margin-bottom:1.4vh}
b{color:#fff} .not{color:var(--metin2);font-size:2.3vh} .buyuk{font-size:4.6vh} .ok{color:var(--turkuaz)}
.cevrim{font-style:italic;color:var(--altin)} .runic.satir{font-size:5.5vh;line-height:1.5;text-align:right;color:#fff;letter-spacing:.06em}
.kicker{color:var(--turkuaz);letter-spacing:.2em;text-transform:uppercase;font-size:1.9vh;margin-bottom:2vh}
.friz{font-size:7vh;color:var(--turkuaz);opacity:.9;margin:2vh 0 4vh;text-align:left;direction:rtl}
.alt{color:var(--metin2);font-size:3vh;font-family:var(--serif)}
table.tablo{border-collapse:collapse;width:100%;font-size:2.6vh} .tablo th{color:var(--turkuaz);font-weight:600;text-align:left;border-bottom:1px solid var(--turkuaz);padding:1vh 1.5vh;letter-spacing:.05em}
.tablo td{border-bottom:1px solid var(--cizgi);padding:1.1vh 1.5vh;vertical-align:middle}
.meta{display:grid;grid-template-columns:auto 1fr;gap:1vh 3vh;font-size:2.4vh;margin-top:4vh} .meta .k{color:var(--sonuk);letter-spacing:.12em;font-size:1.9vh;text-transform:uppercase;align-self:center}
/* tamga kartları */
.cift{display:grid;grid-template-columns:1fr auto 1fr;gap:4vw;align-items:center;flex:1}
.kart{background:var(--panel);border:1px solid var(--cizgi);border-top:3px solid var(--turkuaz);border-radius:6px;padding:4vh 3vw;text-align:center}
.kart.ince{border-top-color:var(--mavi)} .kart .tamga{font-size:26vh;line-height:1;color:#fff} .kart .deger{font-size:3vh;margin-top:2vh;color:var(--metin2)} .kart .etiket{font-size:1.9vh;letter-spacing:.18em;text-transform:uppercase;color:var(--turkuaz)} .kart.ince .etiket{color:var(--mavi)}
.ses{font-family:var(--serif);font-size:18vh;color:var(--sonuk);line-height:1}
.izgara{display:grid;grid-template-columns:repeat(auto-fit,minmax(18vw,1fr));gap:2vh;flex:1;align-content:center}
.izgara .kart{padding:3vh 1vw} .izgara .kart .tamga{font-size:15vh} .izgara .kart .deger{font-size:2.6vh;color:#fff} .izgara .kart .ad{font-family:var(--mono);font-size:1.6vh;color:var(--sonuk);margin-top:1vh}
.tablo .runic{font-size:5vh;color:#fff}
.tablo.sik{font-size:2.4vh} .tablo.sik td{padding:.55vh 1.2vh} .tablo.sik .t{text-align:center;width:9vw;direction:ltr} .tablo.sik .runic{font-size:4.2vh;line-height:1.1} .tablo.sik .ses-k{font-family:var(--serif);font-size:3.4vh;color:var(--turkuaz);width:5vw}
/* örnek kelime (adım adım) */
.ornek{display:grid;grid-template-columns:1fr 1.2fr 2fr;gap:2vw;align-items:center;padding:2.2vh 0;border-bottom:1px solid var(--cizgi);font-size:3vh}
.ornek .latin{font-family:var(--serif);font-size:4.4vh;color:#fff} .ornek .latin small{color:var(--metin2);font-size:2.4vh;font-family:var(--sans)}
.ornek .runic{font-size:7vh;color:var(--turkuaz);text-align:center} .ornek .acik{color:var(--metin2);font-size:2.5vh}
.ornek .gizli{visibility:hidden} .ornek.acildi .gizli{visibility:visible}
.hata{color:var(--kirmizi)}
/* quiz */
.quiz .soru{font-size:3.4vh;margin-bottom:3vh} .secenek{display:block;width:100%;text-align:left;background:var(--panel);color:var(--metin);border:1px solid var(--cizgi);border-radius:6px;padding:1.8vh 2.5vh;margin-bottom:1.4vh;font:inherit;font-size:2.7vh;cursor:pointer}
.secenek:hover{border-color:var(--turkuaz)} .secenek .h{display:inline-block;width:3.5vh;color:var(--turkuaz);font-weight:600}
.secenek.dogru{border-color:var(--yesil);background:#12301F} .secenek.yanlis{border-color:var(--kirmizi);background:#33191A}
.geri{min-height:5vh;font-size:2.6vh;margin-top:1vh;color:var(--metin2)} .geri.ok{color:var(--yesil)} .geri.no{color:var(--kirmizi)}
/* metin-ref */
.metin .runic.satir{font-size:6.5vh}
.metin .trans{font-family:var(--serif);font-style:italic;font-size:3.2vh;color:var(--altin);margin:2vh 0 1vh;text-align:right}
.metin .turkce{font-size:2.8vh;color:var(--metin2);text-align:right}
/* gövde dışı */
.alt-bant{position:absolute;left:0;right:0;bottom:0;height:5vh;display:flex;align-items:center;justify-content:space-between;padding:0 7vw;font-size:1.7vh;color:var(--sonuk);letter-spacing:.1em}
.ilerleme{position:absolute;left:0;bottom:0;height:3px;background:linear-gradient(90deg,var(--turkuaz),var(--mavi));width:0;transition:width .25s}
.yardim{position:absolute;right:2vw;top:2vh;font-size:1.6vh;color:var(--sonuk);opacity:.6}
figure{margin:0;text-align:center} figure img{max-height:62vh;max-width:100%;border:1px solid var(--cizgi);border-radius:4px} figcaption{color:var(--metin2);font-size:2.3vh;margin-top:1.8vh;line-height:1.4} figcaption .runic{color:#fff;font-size:1.3em} figcaption .kaynak{color:var(--sonuk);font-size:.8em}
@media print{
  @page{size:297mm 167mm;margin:0}
  html,body{overflow:visible;height:auto;background:var(--zemin)}
  .deck{width:auto;height:auto}
  .slayt{display:flex!important;position:relative;width:297mm;height:167mm;page-break-after:always;padding:12mm 20mm 16mm;-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .slayt:last-child{page-break-after:auto}
  .yardim,.ilerleme{display:none} .alt-bant{position:absolute}
  .ornek .gizli{visibility:visible} .secenek.cevap{border-color:var(--yesil)}
  h1{font-size:16mm} h2{font-size:13mm} h3{font-size:11mm} p,li{font-size:7.5mm} .kart .tamga{font-size:60mm} .izgara .kart .tamga{font-size:38mm} .runic.satir{font-size:14mm} .metin .runic.satir{font-size:16mm}
}
`;

// ---------- blok → slayt ----------
function ust(doc, bolum, i, n) {
  return `<div class="ust"><span><b>${esc(doc.baslik.split("—")[0].trim())}</b> · ${esc(bolum?.kicker ?? "")} ${esc(bolum?.baslik ?? "")}</span><span>${i} / ${n}</span></div>`;
}

function kapakSlayt(doc) {
  const k = doc.kapak;
  return `<div class="govde"><div class="kicker">${esc(k.kicker)}</div><div class="friz runic">${k.friz}</div><h1>${esc(doc.baslik)}</h1>` +
    (doc.altbaslik ? `<div class="alt">${esc(doc.altbaslik)}</div>` : "") +
    (k.meta ? `<div class="meta">${k.meta.map((m) => `<div class="k">${esc(m.k)}</div><div>${esc(m.v)}</div>`).join("")}</div>` : "") + "</div>";
}

function tamgaPair(k) {
  return `<div class="govde"><div class="cift">` +
    `<div class="kart kalin"><div class="etiket">Kalın</div><div class="tamga runic">${chr(k.kalin.cp)}</div><div class="deger">${esc(k.kalin.deger)}</div></div>` +
    `<div class="ses">${esc(k.ses)}</div>` +
    `<div class="kart ince"><div class="etiket">İnce</div><div class="tamga runic">${chr(k.ince.cp)}</div><div class="deger">${esc(k.ince.deger)}</div></div>` +
    `</div></div>`;
}

function tamgaGrid(k, tamgalar) {
  const gruplar = k.grup === "*" ? tamgalar.gruplar : tamgalar.gruplar.filter((g) => g.id === k.grup);
  const tum = gruplar.flatMap((g) => g.tamgalar);
  const baslik = gruplar.length === 1 ? gruplar[0].baslik : "Tamga Envanteri";
  if (k.gorunum === "tablo" || tum.length > 12) {
    // Kutuplu grup: ses başına bir satır (kalın | ince) → 10 satır. Diğerleri: ≤10 satırlık sütunlara böl.
    if (k.grup === "kutuplu" && tamgalar.ciftler) {
      const satir = tamgalar.ciftler.map((c) => `<tr><td class="ses-k">${esc(c.ses)}</td><td class="runic t">${chr(c.kalin.cp)}</td><td>${esc(c.kalin.deger)}</td><td class="runic t">${chr(c.ince.cp)}</td><td>${esc(c.ince.deger)}</td></tr>`).join("");
      return `<div class="govde"><h3>${esc(baslik)}</h3><table class="tablo sik"><tr><th>Ses</th><th class="t">Kalın</th><th></th><th class="t">İnce</th><th></th></tr>${satir}</table></div>`;
    }
    const sutunSay = Math.ceil(tum.length / 10), boy = Math.ceil(tum.length / sutunSay);
    const sutun = (arr) => `<table class="tablo sik"><tr><th class="t">Tamga</th><th>Değer</th></tr>${arr.map((t) => `<tr><td class="runic t">${chr(t.cp)}</td><td>${esc(t.deger)}</td></tr>`).join("")}</table>`;
    const parcalar = []; for (let i = 0; i < tum.length; i += boy) parcalar.push(sutun(tum.slice(i, i + boy)));
    return `<div class="govde"><h3>${esc(baslik)}</h3><div style="display:grid;grid-template-columns:repeat(${sutunSay},1fr);gap:3vw;align-items:start">${parcalar.join("")}</div></div>`;
  }
  return `<div class="govde"><h3>${esc(baslik)}</h3><div class="izgara">${tum.map((t) =>
    `<div class="kart"><div class="tamga runic">${chr(t.cp)}</div><div class="deger">${esc(t.deger)}</div><div class="ad">${esc(t.ad ?? t.cp)}</div></div>`).join("")}</div></div>`;
}

function ornekKelime(k) {
  return `<div class="govde"><h3>Tahtada Kelime Tahlili <span class="not">(tıkla / boşluk: sırayla aç)</span></h3>` + k.ornekler.map((o) =>
    `<div class="ornek" data-adim><div class="latin">${esc(o.latin)}${o.anlam ? ` <small>(${esc(o.anlam)})</small>` : ""}</div>` +
    `<div class="runic gizli">${o.runik}</div><div class="acik gizli">${esc(o.aciklama)}${o.hatali ? ` <span class="hata">Hatalı: <span class="runic">${o.hatali}</span></span>` : ""}</div></div>`).join("") + "</div>";
}

function quiz(k, idx) {
  const harf = "ABCDE";
  return `<div class="govde quiz" data-quiz="${idx}" data-dogru="${k.dogru}" data-ok="${esc(k.geriBildirim?.ok ?? "Doğru.")}" data-no="${esc(k.geriBildirim?.no ?? "Tekrar deneyin.")}">` +
    `<div class="kicker">${k.rol === "sertifika" ? "Sertifika sorusu" : "Pekiştirme"}${k.konu ? " · " + esc(k.konu) : ""}</div><div class="soru">${k.soru}</div>` +
    k.secenekler.map((s, i) => `<button class="secenek${i === k.dogru ? " cevap" : ""}" data-i="${i}"><span class="h">${harf[i]}</span>${s}</button>`).join("") +
    `<div class="geri"></div></div>`;
}

function metinRef(k, kapi) {
  const r = kapi.refCoz(k);
  const g = k.goster ?? ["runik", "transkripsiyon", "turkce"];
  let runik, trans, turkce, baslik;
  if (k.db === "irkbitig") {
    runik = r.gokturkce; trans = r.transliterasyon; turkce = r.turkce; baslik = k.baslik ?? `Irk Bitig · ${k.ref}. Fal · Zar ${r.orijinal_zar}`;
  } else {
    let rw = kelimeler(r.gokturkce), tw = kelimeler(r.transkripsiyon), uw = kelimeler(r.turkce);
    if (k.kelimeAralik) { const [a, b] = k.kelimeAralik; rw = rw.slice(a, b); tw = tw.slice(a, b); uw = uw.slice(a, b); }
    runik = rw.join(" : "); trans = tw.join(" · "); turkce = uw.join(" · "); baslik = k.baslik ?? `${r.kaynak_ad} · ${r.yuz} ${r.satir}`;
  }
  return `<div class="govde metin"><div class="kicker">${esc(baslik)}</div>` +
    (g.includes("runik") ? `<div class="runic satir">${runik}</div>` : "") +
    (g.includes("transkripsiyon") ? `<div class="trans">${esc(trans)}</div>` : "") +
    (g.includes("turkce") ? `<div class="turkce">${esc(turkce)}</div>` : "") + "</div>";
}

function blokSlayt(k, ctx, idx) {
  switch (k.type) {
    case "bolum-ayraci": return `<div class="govde"><div class="kicker">Bölüm</div>${k.friz ? `<div class="friz runic">${k.friz}</div>` : ""}<h1>${esc(k.baslik)}</h1>${k.altbaslik ? `<div class="alt">${esc(k.altbaslik)}</div>` : ""}</div>`;
    case "prose": return `<div class="govde">${k.html}</div>`;
    case "bilgi-karti": return `<div class="govde"><h3>${esc(k.baslik)}</h3>${k.html}</div>`;
    case "tamga-pair": return tamgaPair(k);
    case "tamga-grid": return tamgaGrid(k, ctx.kapi.tamgalar);
    case "ornek-kelime": return ornekKelime(k);
    case "quiz": return quiz(k, idx);
    case "metin-ref": return metinRef(k, ctx.kapi);
    case "gorsel": return `<div class="govde"><figure><img src="${gorselUri(k.src)}" alt="${esc(k.alt)}">${k.altyazi ? `<figcaption>${runikSar(k.altyazi)}${k.kaynak ? ` <span class="kaynak">· ${esc(k.kaynak)}</span>` : ""}</figcaption>` : ""}</figure></div>`;
    case "alistirma": return `<div class="govde"><h3>${esc(k.yonerge)}</h3><ul>${k.maddeler.map((m) => `<li>${m.soruRunik ? `<span class="runic">${m.soruRunik}</span>` : esc(m.soru)} ➔ ________</li>`).join("")}</ul></div>`;
    default: throw new Error(`Slayt için bilinmeyen blok: ${k.type}`);
  }
}

const JS = `
(function(){
  var s=[].slice.call(document.querySelectorAll('.slayt')),i=0,bar=document.querySelector('.ilerleme'),say=document.querySelector('.sayac');
  function go(n){i=Math.max(0,Math.min(s.length-1,n));s.forEach(function(e,j){e.classList.toggle('aktif',j===i)});bar.style.width=((i+1)/s.length*100)+'%';if(say)say.textContent=(i+1)+' / '+s.length;location.hash=i+1;}
  function adim(){var a=s[i].querySelector('.ornek[data-adim]:not(.acildi)');if(a){a.classList.add('acildi');return true}return false}
  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();if(!adim())go(i+1)}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();go(i-1)}
    else if(e.key==='Home')go(0);else if(e.key==='End')go(s.length-1);
    else if(e.key==='f'||e.key==='F'){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}
  });
  document.addEventListener('click',function(e){
    var b=e.target.closest('.secenek');
    if(b){var q=b.closest('.quiz');if(q.dataset.bitti)return;var d=+q.dataset.dogru,g=q.querySelector('.geri');
      q.querySelectorAll('.secenek').forEach(function(x){if(+x.dataset.i===d)x.classList.add('dogru')});
      if(+b.dataset.i===d){g.textContent='✓ '+q.dataset.ok;g.className='geri ok'}else{b.classList.add('yanlis');g.textContent='✗ '+q.dataset.no;g.className='geri no'}
      q.dataset.bitti=1;return}
    if(e.target.closest('.ornek')){adim();return}
    if(e.clientX>window.innerWidth*0.85){if(!adim())go(i+1)}else if(e.clientX<window.innerWidth*0.15)go(i-1);
  });
  var h=parseInt(location.hash.slice(1),10);go(isNaN(h)?0:h-1);
})();`;

/** Belgeyi tek dosya slayt HTML'ine çevirir. */
export function slaytCiz(doc, ctx) {
  const slaytlar = [];
  slaytlar.push({ bolum: null, html: kapakSlayt(doc) });
  for (const b of doc.bolumler)
    for (const k of b.bloklar.filter((k) => k.targets.includes("slayt")))
      slaytlar.push({ bolum: b, blok: k });
  const n = slaytlar.length;
  const body = slaytlar.map((s, i) =>
    `<section class="slayt${i === 0 ? " aktif" : ""}" data-n="${i + 1}">${i === 0 ? "" : ust(doc, s.bolum, i + 1, n)}${s.html ?? blokSlayt(s.blok, ctx, i)}` +
    `<div class="alt-bant"><span>Göktürkçe Okuma-Yazma Öğreneği · İbrahim (Bayram) Bilir</span><span>${esc(doc.altbaslik ?? "")}</span></div></section>`).join("\n");
  return `<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(doc.baslik)}</title><style>${CSS}</style></head>` +
    `<body><div class="deck">${body}</div><div class="yardim">← → boşluk · F tam ekran</div><div class="ilerleme"></div><script>${JS}</script></body></html>`;
}
