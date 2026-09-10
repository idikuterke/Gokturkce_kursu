// Baskı renderer: content/*.json → A4 print HTML (gokturk-baski.css).
// Eski Python hattının (build.py / uret2.py doc_html) çıktısını birebir üretir; regresyon diff'i buna dayanır.
import fs from "node:fs";
import path from "node:path";
import { ROOT } from "./kapi.mjs";

const P = (...s) => path.join(ROOT, ...s);
const CSS = fs.readFileSync(P("03_Tasarim/gokturk-baski.css"), "utf8");

// uret2.py EXTRA_CSS — tamga albümü kart/tablo stilleri (yalnız ihtiyaç duyan belgelere eklenir)
const EXTRA_CSS = `
.kart-tablo { width:100%; border-collapse:collapse; table-layout:fixed; margin-bottom:0; }
.kart-tablo td { border:1px dashed #C9BBA0; height:47mm; text-align:center; vertical-align:middle; padding:2mm 1.5mm; }
.kart-tamga { font-family:'Noto Sans Old Turkic','Turk Bitig','BabelStone Irk Bitig',serif; direction:rtl; unicode-bidi:isolate; font-size:30pt; line-height:1.1; color:var(--murekkep); }
.kart-deger { font-weight:700; font-size:10pt; margin-top:1.6mm; }
.kart-ad { font-family:'JetBrains Mono',Consolas,monospace; font-size:7pt; color:#8A7A64; margin-top:0.8mm; }
.kutu { display:inline-block; width:3.2mm; height:3.2mm; border:1.2px solid var(--tas); margin-right:2mm; vertical-align:-0.2mm; }
.kontrol-liste { list-style:none; padding-left:0; }
.kontrol-liste li { margin-bottom:1.8mm; }
.akis { margin:2mm 0 4mm 0; }
.akis-dugum { text-align:center; background:var(--panel); border:1px solid var(--cizgi); border-top:3px solid var(--okr); padding:3mm; font-weight:700; }
.akis-oklar { text-align:center; color:var(--okr); font-size:13pt; margin:1mm 0; letter-spacing:1em; }
.mono-blok { font-family:'JetBrains Mono',Consolas,monospace; font-size:8.5pt; background:#F5EFE0; border:1px solid var(--cizgi); padding:3mm 4mm; margin:2mm 0 3.5mm 0; page-break-inside:avoid; }
.mono-blok p { margin:0 0 1.5mm 0; text-align:left; }
`;
// build.py ile üretilen ilk iki belge EXTRA_CSS içermiyordu; birebir eşleşme için ayrım korunur.
const EXTRA_CSS_YOK = new Set(["kitapcik", "yapraklar"]);

const chr = (cp) => String.fromCodePoint(parseInt(cp.slice(2), 16));

// ---------- blok çizerler ----------
function falBlok(r, no) {
  return (
    '<div class="fal-kutusu">' +
    `<p class="not" style="margin-bottom:1.5mm"><b>${no}. FAL</b> · Zar: ${r.orijinal_zar ?? "—"} · <span class="cevrim">${r.tip ?? ""}</span></p>` +
    `<div class="runik-satir runic">${r.gokturkce}</div>` +
    `<p><span class="cevrim">${r.transliterasyon}</span></p>` +
    `<p class="not">${r.turkce}</p>` +
    "</div>"
  );
}

function orhunBlok(d, k) {
  const g = k.goster ?? ["runik", "transkripsiyon", "turkce"];
  let h = '<div class="fal-kutusu">';
  h += `<p class="not" style="margin-bottom:1.5mm"><b>${k.baslik ?? d.kaynak_ad + " · " + d.yuz + " " + d.satir}</b></p>`;
  if (g.includes("runik")) h += `<div class="runik-satir runic">${d.gokturkce}</div>`;
  if (g.includes("transkripsiyon")) h += `<p><span class="cevrim">${d.transkripsiyon}</span></p>`;
  if (g.includes("turkce")) h += `<p class="not">${d.turkce}</p>`;
  return h + "</div>";
}

function metinRef(k, g) {
  const r = g.refCoz(k);
  if (!r) throw new Error(`Kırık metin-ref ${k.db}:${k.ref} (kapı bunu yakalamalıydı)`);
  if (k.db === "irkbitig") {
    if (k.goster && k.goster.length === 1 && k.goster[0] === "runik")
      return r.gokturkce; // satır içi ham runik metin (eski «FALx_RUNIK» belirteci; sarmalayıcı prose'da)
    return falBlok(r, k.ref);
  }
  return orhunBlok(r, k);
}

function tamgaGrid(k, tamgalar) {
  const gruplar = k.grup === "*" ? tamgalar.gruplar : tamgalar.gruplar.filter((g) => g.id === k.grup);
  if (k.gorunum === "kart") {
    const tum = gruplar.flatMap((g) => g.tamgalar);
    const out = ['<p class="not">Kesme çizgileri boyunca keserek 47 kartlık tamga setini hazırlayabilirsiniz. Kartlar dersi izleyen gruplama sırasıyla dizilmiştir.</p>'];
    for (let i = 0; i < tum.length; i += 12) {
      const parca = tum.slice(i, i + 12);
      const hucre = parca.map((t) => `<td><div class="kart-tamga">${chr(t.cp)}</div><div class="kart-deger">${t.deger}</div><div class="kart-ad">${t.ad}</div></td>`).join("");
      out.push(`<table class="kart-tablo"><tr>${hucre}</tr></table>` + (i + 12 < tum.length ? '<div style="page-break-after:always"></div>' : ""));
    }
    return out.join("");
  }
  return gruplar.map((g) => {
    const satir = g.tamgalar.map((t) =>
      `<tr><td class="merkez" style="width:22mm"><span class="runic" style="font-size:1.9em">${chr(t.cp)}</span></td>` +
      `<td><b>${t.deger}</b></td><td class="not">${t.ad} · ${t.cp}</td></tr>`).join("");
    return `<h3 class="alt-baslik">${g.baslik}</h3>` +
      `<table class="tablo"><tr><th class="merkez" style="width:22mm">Tamga</th><th style="width:52mm">Ders değeri</th><th>Unicode resmi adı</th></tr>${satir}</table>`;
  }).join("");
}

function tamgaPair(k) {
  return `<table class="tablo"><tr><th>Ses</th><th class="merkez">Kalın</th><th class="merkez">İnce</th></tr>` +
    `<tr><td><b>${k.ses}</b></td><td class="merkez"><span class="runic" style="font-size:1.9em">${chr(k.kalin.cp)}</span><br><span class="not">${k.kalin.deger}</span></td>` +
    `<td class="merkez"><span class="runic" style="font-size:1.9em">${chr(k.ince.cp)}</span><br><span class="not">${k.ince.deger}</span></td></tr></table>`;
}

function ornekKelime(k) {
  return k.ornekler.map((o) =>
    `<p><b>${o.latin}</b>${o.anlam ? ` (${o.anlam})` : ""} ➔ <span class="runic">${o.runik}</span> — ${o.aciklama}` +
    (o.hatali ? ` <span class="not">[Hatalı yazım: <span class="runic">${o.hatali}</span>]</span>` : "") + "</p>").join("");
}

function alistirma(k, egitmen) {
  return `<p class="not">${k.yonerge}</p>` + k.maddeler.map((m, i) => {
    const soru = m.soruRunik ? `<span class="runic">${m.soruRunik}</span>` : m.soru;
    const cevap = egitmen && (m.cevap || m.cevapRunik)
      ? `<span class="cevap-blok">${m.cevapRunik ? `<span class="runic">${m.cevapRunik}</span> ` : ""}${m.cevap ?? ""}${m.aciklama ? ` <span class="not">(${m.aciklama})</span>` : ""}</span>`
      : '<span class="cevap-satiri blank">________________</span>';
    return `<p class="alisirma"><span class="alisirma-no">${i + 1}.</span> ${soru} ➔ ${cevap}</p>`;
  }).join("");
}

function quiz(k, egitmen) {
  const harf = "ABCDE";
  return `<div class="soru"><p class="soru-baslik">${k.yedigun ? `<span class="puan">${k.yedigun}. YEDİGÜN</span>` : ""}${k.konu ?? ""}</p><p>${k.soru}</p>` +
    `<p>${k.secenekler.map((s, i) => `${harf[i]}) ${s}`).join("<br>")}</p>` +
    (egitmen ? `<p class="cevap-blok"><b>Doğru: ${harf[k.dogru]}</b>${k.geriBildirim?.ok ? ` — ${k.geriBildirim.ok}` : ""}</p>` : "") + "</div>";
}

function gorsel(k) {
  const w = { tam: "100%", yarim: "50%", kucuk: "30%" }[k.genislik ?? "tam"];
  return `<figure style="margin:2mm 0;width:${w}"><img src="${k.src}" alt="${k.alt}" style="max-width:100%">` +
    (k.altyazi ? `<figcaption class="not">${k.altyazi}${k.kaynak ? ` · ${k.kaynak}` : ""}</figcaption>` : "") + "</figure>";
}

export function blokCiz(k, ctx) {
  switch (k.type) {
    case "prose": return k.html;
    case "bilgi-karti": return `<div class="bilgi-karti"><div class="bk-baslik">${k.baslik}</div>${k.html}</div>`;
    case "bolum-ayraci": return `<div class="kapak"><div>${k.friz ? `<div class="kapak-friz">${k.friz}</div>` : ""}<h1>${k.baslik}</h1>${k.altbaslik ? `<p class="alt-baslik">${k.altbaslik}</p>` : ""}</div></div>`;
    case "metin-ref": return metinRef(k, ctx.kapi);
    case "tamga-grid": return tamgaGrid(k, ctx.kapi.tamgalar);
    case "tamga-pair": return tamgaPair(k);
    case "ornek-kelime": return ornekKelime(k);
    case "alistirma": return alistirma(k, ctx.egitmen);
    case "quiz": return quiz(k, ctx.egitmen);
    case "gorsel": return gorsel(k);
    default: throw new Error(`Bilinmeyen blok tipi: ${k.type}`);
  }
}

/** Belgeyi A4 baskı HTML'ine çevirir. ctx: { kapi, egitmen } */
export function belgeCiz(doc, ctx) {
  const css = CSS + (EXTRA_CSS_YOK.has(doc.id) ? "" : EXTRA_CSS);
  const parts = ['<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8">', `<title>${doc.baslik}</title>`, `<style>${css}</style></head><body>`];
  parts.push(doc.kapakHtml ?? kapakCiz(doc.kapak, doc));
  for (const b of doc.bolumler) {
    const bloklar = b.bloklar.filter((k) => k.targets.includes("baski"));
    if (!bloklar.length) continue;
    parts.push('<section class="bolum">');
    parts.push(`<div class="bolum-kicker">${b.kicker ?? ""}</div>`);
    parts.push(`<h2 class="bolum-baslik">${b.baslik}</h2>`);
    if (b.ozet) parts.push(`<p class="bolum-ozet">${b.ozet}</p>`);
    parts.push('<hr class="baslik-cizgi">');
    parts.push(bloklar.map((k) => blokCiz(k, ctx)).join(""));
    parts.push("</section>");
  }
  parts.push("</body></html>");
  return parts.join("");
}

function kapakCiz(k, doc) {
  return `<div class="kapak"><div><div class="kapak-friz">${k.friz}</div><div class="cift-cizgi"></div><div class="kicker">${k.kicker}</div>` +
    `<h1>${doc.baslik}</h1>${doc.altbaslik ? `<p class="alt-baslik">${doc.altbaslik}</p>` : ""}` +
    (k.meta ? `<div class="kapak-meta"><table>${k.meta.map((m) => `<tr><td class="k">${m.k}</td><td>${m.v}</td></tr>`).join("")}</table></div>` : "") +
    `</div>${k.not ? `<div class="not">${k.not}</div>` : ""}</div>`;
}
