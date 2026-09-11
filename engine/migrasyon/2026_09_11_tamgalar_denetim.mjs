// 2026-09-11 — tamgalar.json denetim raporu düzeltmeleri (3) + yapraklar.json öğretici notu + AJAN_BRIEF §4.6.
// Kaynak: 00_Kaynaklar/kitaplar/tamgalar_denetim_raporu.md — provenans: Tekin, Orhon Türkçesi Grameri (2003) s. 22-23
//   (00_Kaynaklar/kitaplar/tekin_otg_2003/s022.md, s023.md) + Unicode kod tablosu (00_Kaynaklar/kitaplar/unicode_kod_tablosu_10C00.txt).
// 1) U+10C2A ny/ñ: "Irk Bitig" kısıtı kaldırılır (kutupsuz + kagit), Orhun tanıkları not alanına.
// 2) U+10C48 𐱈 BAŞ hece damgası ligatur grubuna (𐰿'nin ardına); (8)→(9); "8 hece damgası"→"9 hece damgası"; teklif cetveli satırı.
// 3) U+10C31 𐰱 İÇ/Çİ kaydına Tekin'in ikinci "Çİ birleşik damgası" notu.
// 4) yapraklar.json: ete / iri / koku / atar alıştırma satırlarına "(öğretici örnek)" notu — runik ve boşluklara dokunulmaz.
// 5) AJAN_BRIEF.md §4 madde 6 ifadesi.
// PDF: Edge headless (build.mjs ile aynı komut). Tekrar çalıştırılabilir (idempotent). CRLF/LF korunur.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const P = (...a) => path.join(ROOT, ...a);

function oku(f) {
  const t = fs.readFileSync(P("content", f), "utf8");
  return { veri: JSON.parse(t), crlf: t.includes("\r\n"), sonNL: t.endsWith("\n") };
}
function yaz(f, d) {
  let o = JSON.stringify(d.veri, null, 1);
  if (d.crlf) o = o.replace(/\n/g, "\r\n");
  if (d.sonNL) o += d.crlf ? "\r\n" : "\n";
  fs.writeFileSync(P("content", f), o);
  console.log("yazıldı:", f);
}
// Metin dosyası: satır sonu biçimi korunarak dönüştür
function metinDuzenle(rel, fn) {
  const t = fs.readFileSync(P(rel), "utf8");
  const crlf = t.includes("\r\n");
  const lf = crlf ? t.replace(/\r\n/g, "\n") : t;
  const yeni = fn(lf);
  if (yeni === lf) { console.log(`${rel}: değişiklik yok`); return false; }
  fs.writeFileSync(P(rel), crlf ? yeni.replace(/\n/g, "\r\n") : yeni);
  console.log("yazıldı:", rel);
  return true;
}

// ---------- 1-3) tamgalar.json ----------
const NY_DEGER = "ny / ñ";
const NY_NOT = "Orhun'da da kullanılır: koñ (KT D12), azkıña (KT D34), çıgañ (KT G10) — Tekin 2003 s. 23; ŋ ile karıştırılmaz";
const CI_NOT = "Tekin 2003 s. 23 ayrıca 'Çİ birleşik damgası' adlı ikinci bir işaret ayırır; Unicode'da kodlanmamıştır.";
const BAS = {
  cp: "U+10C48",
  deger: "baş (hece/kelime damgası)",
  ad: "ORKHON BASH",
  not: "Orhun tablosunda BAŞ hece damgası (Tekin 2003 s. 23); Irk Bitig'de ideogram; nadir",
  kaynak: "Tekin 2003 s. 23; Unicode 15.1 ORKHON BASH"
};
{
  const t = oku("tamgalar.json");
  let degisti = false;
  // 1) ny/ñ — kutupsuz + kagit
  for (const gid of ["kutupsuz", "kagit"]) {
    const g = t.veri.gruplar.find((x) => x.id === gid);
    if (!g) throw new Error(`tamgalar: ${gid} grubu yok`);
    const k = g.tamgalar.find((x) => x.cp === "U+10C2A");
    if (!k) throw new Error(`tamgalar › ${gid}: U+10C2A yok`);
    if (k.deger !== NY_DEGER) { k.deger = NY_DEGER; degisti = true; }
    if (k.not !== NY_NOT) { k.not = NY_NOT; degisti = true; }
  }
  // 2) 𐱈 BAŞ — ligatur grubuna, 𐰿'nin hemen ardına
  const lig = t.veri.gruplar.find((g) => g.id === "ligatur");
  if (!lig) throw new Error("tamgalar: ligatur grubu yok");
  if (!lig.tamgalar.some((x) => x.cp === "U+10C48")) {
    const i = lig.tamgalar.findIndex((x) => x.cp === "U+10C3F");
    if (i < 0) throw new Error("tamgalar › ligatur: U+10C3F (𐰿) yok");
    lig.tamgalar.splice(i + 1, 0, BAS);
    degisti = true;
  }
  if (lig.baslik.includes("(8)")) { lig.baslik = lig.baslik.replace("(8)", "(9)"); degisti = true; }
  const KAYNAK_EK = "; 𐱈 (baş): Tekin 2003 s. 23 — 00_Kaynaklar/kitaplar/tamgalar_denetim_raporu.md";
  if (lig.kaynak && !lig.kaynak.includes("𐱈 (baş)")) { lig.kaynak += KAYNAK_EK; degisti = true; }
  // 3) 𐰱 İÇ/Çİ notu
  const ic = lig.tamgalar.find((x) => x.cp === "U+10C31");
  if (!ic) throw new Error("tamgalar › ligatur: U+10C31 yok");
  if (!(ic.not ?? "").includes("Çİ birleşik damgası")) { ic.not = ic.not ? `${ic.not} ${CI_NOT}` : CI_NOT; degisti = true; }
  if (degisti) yaz("tamgalar.json", t); else console.log("tamgalar.json: değişiklik yok");
}

// ---------- 2b) "8 hece damgası" → "9 hece damgası" (tüm content) ----------
for (const f of fs.readdirSync(P("content")).filter((x) => x.endsWith(".json"))) {
  const d = oku(f);
  let m = JSON.stringify(d.veri);
  const o = m;
  m = m.split("8 hece damgası").join("9 hece damgası");
  if (m !== o) { d.veri = JSON.parse(m); yaz(f, d); }
}

// ---------- 2c) Teklif cetveli: 𐱈 satırı 𐰿 satırının altına (md + html) ----------
metinDuzenle("Gokturkce_Kurs_Teklifi_Revize.md", (t) => {
  const YENI = "| 𐱈 | baş — hece/kelime damgası; Orhun'da nadir; Irk Bitig ideogram | U+10C48 |";
  if (t.includes(YENI)) return t;
  const AS = "| 𐰿 | aş — hece damgası; Orhun'da nadir; Yenisey varyantı U+10C40 | U+10C3F |";
  if (!t.includes(AS)) throw new Error("teklif md: 𐰿 satırı yok");
  // eski kısa satır varsa kaldır
  t = t.split("\n").filter((l) => !/^\| 𐱈 \|/.test(l)).join("\n");
  return t.replace(AS, AS + "\n" + YENI);
});
metinDuzenle("Gokturkce_Kurs_Teklifi_Revize.html", (t) => {
  const YENI = '    <tr><td class="runic">𐱈</td><td>baş — hece/kelime damgası; Orhun\'da nadir; Irk Bitig ideogram</td><td>U+10C48</td></tr>';
  if (t.includes(YENI)) return t;
  const AS = '    <tr><td class="runic">𐰿</td><td>aş — hece damgası; Orhun\'da nadir; Yenisey varyantı U+10C40</td><td>U+10C3F</td></tr>';
  if (!t.includes(AS)) throw new Error("teklif html: 𐰿 satırı yok");
  t = t.split("\n").filter((l) => !l.includes('<td class="runic">𐱈</td>')).join("\n");
  return t.replace(AS, AS + "\n" + YENI);
});

// ---------- 4) yapraklar.json: öğretici örnek notu ----------
{
  const d = oku("yapraklar.json");
  let m = JSON.stringify(d.veri);
  const o = m;
  const NOT = "; öğretici örnek";
  const satirlar = [
    ["<li><b>ete</b> <span class=\\\"not\\\">(ince ünlü uyumu; ilk “e” düşer, son “e” yazılır", "<li><b>ete</b> <span class=\\\"not\\\">(ince ünlü uyumu; ilk “e” düşer, son “e” yazılır" + NOT],
    ["<li><b>iri</b> <span class=\\\"not\\\">(ince ünlü uyumu; ilk “i” yazılır, ince “r” ve son “i” yazılır", "<li><b>iri</b> <span class=\\\"not\\\">(ince ünlü uyumu; ilk “i” yazılır, ince “r” ve son “i” yazılır" + NOT],
    ["<li><b>koku</b> <span class=\\\"not\\\">(ilk hecedeki ünlü düşer, kelime sonu ünlü korunur", "<li><b>koku</b> <span class=\\\"not\\\">(ilk hecedeki ünlü düşer, kelime sonu ünlü korunur" + NOT],
    ["<li><b>atar</b> <span class=\\\"not\\\">(kısa a'ları düşürünüz", "<li><b>atar</b> <span class=\\\"not\\\">(kısa a'ları düşürünüz" + NOT],
  ];
  for (const [eski, yeni] of satirlar) {
    if (m.includes(yeni)) continue;
    if (!m.includes(eski)) throw new Error("yapraklar: satır bulunamadı: " + eski.slice(0, 40));
    m = m.split(eski).join(yeni);
  }
  if (m !== o) { d.veri = JSON.parse(m); yaz("yapraklar.json", d); } else console.log("yapraklar.json: değişiklik yok");
}

// ---------- 5) AJAN_BRIEF.md §4 madde 6 ----------
metinDuzenle("AJAN_BRIEF.md", (t) =>
  t.replace("`𐱈` (BAŞ) kayıtta kalır;", "`𐱈` (BAŞ) tamgalar.json ligatur grubunda (Tekin 2003 s. 23);"));

// ---------- 2d) Teklif PDF — Edge headless (build.mjs ile aynı bayraklar) ----------
{
  const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
  const htmlP = P("Gokturkce_Kurs_Teklifi_Revize.html").replace(/\\/g, "/");
  const pdfP = P("Gokturkce_Kurs_Teklifi_Revize.pdf");
  const prof = path.join(process.env.TEMP ?? ROOT, "edge_gk_teklif");
  const res = spawnSync(EDGE, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--user-data-dir=${prof}`, `--print-to-pdf=${pdfP}`, `file:///${htmlP}`], { timeout: 240000 });
  if (res.status !== 0 || !fs.existsSync(pdfP)) console.error("UYARI: teklif pdf üretilemedi", res.status, String(res.stderr).slice(0, 300));
  else console.log("yazıldı: Gokturkce_Kurs_Teklifi_Revize.pdf");
}
console.log("bitti");
