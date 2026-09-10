// Build: content/*.json → (kapı) → hedefler.
//   --hedef baski   : A4 HTML + Edge headless PDF → 04_PDF/  (varsayılan)
//   --hedef slayt   : (sonraki adım) slayt-html / slayt-pdf
//   --sadece-html   : PDF üretme
//   --diff          : üretilen HTML'i 03_Tasarim/html/ içindeki eski Python çıktısıyla karşılaştır (regresyon)
//   --belge id      : yalnız bir belge
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { PDFDocument } from "pdf-lib";
import { kapiHazirla, ROOT } from "./kapi.mjs";
import { belgeCiz } from "./render-baski.mjs";

const P = (...s) => path.join(ROOT, ...s);
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] ?? true : d; };
const HEDEF = arg("--hedef", "baski");
const SADECE_HTML = process.argv.includes("--sadece-html");
const DIFF = process.argv.includes("--diff");
const BELGE = arg("--belge", null);
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

// Belge → çıktı adları (eski hattın adları; 04_PDF sıralaması korunur)
const CIKTI = {
  "kitapcik":       { html: "kitapcik.html",                         pdf: "01_Kurs_Kitapcigi_Egitmen_Kilavuzu.pdf", egitmen: true },
  "yapraklar":      { html: "yapraklar.html",                        pdf: "02_Ogrenci_Calisma_Yapraklari.pdf",      egitmen: false },
  "tamga-albumu":   { html: "03_Tamga_Albumu_Harf_Kartlari.html",    pdf: "03_Tamga_Albumu_Harf_Kartlari.pdf",      egitmen: false },
  "irkbitig-foyu":  { html: "04_Irk_Bitig_Okuma_Foyu.html",          pdf: "04_Irk_Bitig_Okuma_Foyu.pdf",            egitmen: false },
  "ek-uniteler":    { html: "05_Ek_Uniteler_Foyu.html",              pdf: "05_Ek_Uniteler_Foyu.pdf",                egitmen: false },
  "degerlendirme":  { html: "06_Degerlendirme_Seti.html",            pdf: "06_Degerlendirme_Seti.pdf",              egitmen: true },
};

const OUT_HTML = P("build/baski/html");
const OUT_PDF = P("04_PDF");
fs.mkdirSync(OUT_HTML, { recursive: true });

const kapi = await kapiHazirla();
const belgeler = Object.keys(CIKTI).filter((id) => !BELGE || id === BELGE);
let hata = false;

for (const id of belgeler) {
  const doc = JSON.parse(fs.readFileSync(P("content", id + ".json"), "utf8"));
  kapi.belgeDenetle(doc);
  let html = belgeCiz(doc, { kapi, egitmen: CIKTI[id].egitmen });
  const r = kapi.ciktiDenetle(html, id);
  const h = kapi.sonuc();
  if (h.length) { hata = true; console.error(`✗ ${id}\n  ` + h.join("\n  ")); continue; }
  fs.writeFileSync(path.join(OUT_HTML, CIKTI[id].html), html, "utf8");
  let satir = `✓ ${id.padEnd(14)} tamga ${String(r.farkli).padStart(2)} | ${(html.length / 1024).toFixed(1)} KB`;
  if (DIFF) {
    const eskiP = P("03_Tasarim/html", CIKTI[id].html);
    if (fs.existsSync(eskiP)) {
      // satır sonu farkı (Python text-mode CRLF) yok sayılır
      const norm = (s) => s.replace(/\r\n/g, "\n");
      const eski = norm(fs.readFileSync(eskiP, "utf8"));
      html = norm(html);
      if (eski === html) satir += " | DIFF: BİREBİR AYNI";
      else {
        // ilk fark konumunu göster
        let i = 0; while (i < eski.length && eski[i] === html[i]) i++;
        satir += ` | DIFF: FARKLI @${i}  eski«${eski.slice(i, i + 60).replace(/\n/g, "⏎")}»  yeni«${html.slice(i, i + 60).replace(/\n/g, "⏎")}»`;
        hata = true;
      }
    } else satir += " | DIFF: eski çıktı yok";
  }
  console.log(satir);
}
if (hata) { console.error("BUILD DURDU."); process.exit(1); }
if (SADECE_HTML || HEDEF !== "baski") process.exit(0);

// ---------- Edge headless PDF ----------
if (!fs.existsSync(EDGE)) { console.error("Edge bulunamadı: " + EDGE); process.exit(1); }
let toplam = 0;
for (const id of belgeler) {
  const htmlP = path.join(OUT_HTML, CIKTI[id].html).replace(/\\/g, "/");
  const pdfP = path.join(OUT_PDF, CIKTI[id].pdf);
  if (fs.existsSync(pdfP)) fs.unlinkSync(pdfP);
  const prof = path.join(process.env.TEMP ?? ROOT, "edge_gk_" + id);
  const res = spawnSync(EDGE, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--user-data-dir=${prof}`, `--print-to-pdf=${pdfP}`, `file:///${htmlP}`], { timeout: 240000 });
  if (res.status !== 0 || !fs.existsSync(pdfP) || fs.statSync(pdfP).size < 10000) { console.error(`PDF üretilemedi: ${pdfP}`); process.exit(1); }
  const pdf = await PDFDocument.load(fs.readFileSync(pdfP), { updateMetadata: false });
  const n = pdf.getPageCount(); toplam += n;
  console.log(`PDF ${CIKTI[id].pdf.padEnd(42)} sayfa ${String(n).padStart(2)} | ${(fs.statSync(pdfP).size / 1024).toFixed(0)} KB`);
}
console.log(`TOPLAM ${toplam} sayfa — bitti.`);
