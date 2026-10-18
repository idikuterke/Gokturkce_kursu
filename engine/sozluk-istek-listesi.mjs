// NotebookLM / uzman için "anlam bekleyen kelimeler" listesi üretir.
//
// Neden böyle: sıfırdan sözlük istemek güvenilmez çıktı verdi — gelen 100
// kelimelik listede runik yazımların tamamı, atıfların %85'i uydurmaydı.
// Oysa runik yazım ve atıf bizde ZATEN doğrulanmış durumda (korpus, makine
// denetimli). Bu yüzden dışarıdan yalnızca EKSİK olan sorulur: anlam,
// kategori ve kaynak. Model uyduramasın diye runik ve atıf hazır verilir.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Windows'ta URL.pathname "/E:/..." dondurur; path.join ile birlesince
// "E:\\E:\\..." olur ve betik ENOENT ile oler. fileURLToPath her
// platformda dogru yerel yolu verir.
const KOK = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => path.join(KOK, p);

const kelimeler = JSON.parse(fs.readFileSync(P("src/data/generated/kelimeler.json"), "utf8"));
const korpus = JSON.parse(fs.readFileSync(P("src/data/generated/korpus.json"), "utf8"));
const dizeler = new Map(korpus.map((d) => [d.id, d]));

// Uygulamada anlamı zaten olan kelimeler atlanır.
const mevcut = new Set();
const sozlukTs = fs.readFileSync(P("src/data/sozlukData.ts"), "utf8");
for (const m of sozlukTs.matchAll(/transcription:\s*'([^']+)'/g)) {
  mevcut.add(m[1].toLowerCase().replace(/ŋ/g, "ng"));
}

const esik = Number(process.argv[2] || 3);
const normal = (s) => s.toLowerCase().replace(/ŋ/g, "ng").replace(/ñ/g, "ny");

// ── Ata sözlüğü: ÖN DOLGU ───────────────────────────────────────────────────
// Aysu Ata, Orhun Türkçesi (AÖF 2011) kitabının sözcük çözümlemelerinden
// çıkarılan anlamlar (engine/ata-tara.mjs). Buradan gelen anlam DOĞRULANMIŞ
// SAYILMAZ: katmanı "kitap", sayfa atıflı bir yayın alıntısıdır. Denetim
// ekranında insanın önüne ön dolgu olarak gelir, onaylanınca geçerli olur.
//
// Eşleşme iki türlü:
//   tam  — korpus biçimi sözlük maddesiyle birebir (bodun = bodun)
//   kök  — korpus biçimi maddeyle başlıyor, kalanı bilinen bir ek
//          (bodunıg = bodun + ıg).  Ekler yine Ata'dan, uydurma değil.
const sadelestir = (x) =>
  x.toLocaleLowerCase("tr").replace(/[^a-zçğıöşüŋé]/g, "");

let ataSozluk = [];
let ataEkler = [];
try {
  ataSozluk = JSON.parse(fs.readFileSync(P("docs/ata-sozluk.json"), "utf8")).kelimeler ?? [];
  ataEkler = JSON.parse(fs.readFileSync(P("docs/ata-ekler.json"), "utf8")).ekler ?? [];
} catch { /* tarama yapılmamışsa ön dolgu olmaz */ }

// Ata'nın kendi gösterimi iki ayrımı taşıyor; ikisini de kullanıyoruz:
//   kelime sonundaki "-"   → FİİL maddesi   (bir- "vermek")
//   ek başındaki "+" / "-" → isim eki / fiil eki
// Böylece "bir + miş" kurulamaz: -miş fiil ekidir, isim köküne eklenmez.
//
// Üçüncü ayrım: ÇEKİM eki mi YAPIM eki mi. Yapım eki (ve kalıplaşmış
// zarf-fiil) yeni bir sözcük kurar, kökün anlamı taşınmaz:
//   tap- "bulmak" + -a  →  tapa "-e doğru"      (kökün anlamı değil)
//   bir(i) "güney" + le →  birle "ile"          (kökün anlamı değil)
// Bu yüzden ön dolgu yalnız ÇEKİM ekiyle kurulur.
const yapimMi = (islev) => /yapım eki|zarf-fiil|sıfat-fiil|kalıplaş/i.test(islev);
const cekimEkleri = ataEkler.filter((e) => !yapimMi(e.islev));
const ISIM_EKI = new Set(cekimEkleri.filter((e) => e.ek.startsWith("+")).map((e) => sadelestir(e.ek)));
const FIIL_EKI = new Set(cekimEkleri.filter((e) => e.ek.startsWith("-")).map((e) => sadelestir(e.ek)));

/** Bir maddenin arama anahtarları. bir(i) hem "bir" hem "biri" olabilir. */
function anahtarlar(kelime) {
  const govde = kelime.replace(/-$/, "");
  const parantezsiz = sadelestir(govde.replace(/\([^)]*\)/g, ""));
  const parantezli = sadelestir(govde);
  return [...new Set([parantezsiz, parantezli])].filter(Boolean);
}

// anahtar → maddeler. Birden çok FARKLI anlam varsa ön dolgu yapılmaz:
// bir (sayı) / bir- (vermek) / bir(i) (güney) ayırt edilemez, tahmin etmeyiz.
const ataHarita = new Map();
for (const k of ataSozluk) {
  const fiilMi = k.kelime.trim().endsWith("-");
  for (const a of anahtarlar(k.kelime)) {
    if (!ataHarita.has(a)) ataHarita.set(a, []);
    ataHarita.get(a).push({ ...k, fiilMi, anahtar: a });
  }
}
const tekAnlam = (liste) => new Set(liste.map((x) => x.anlam)).size === 1;

const ataKokler = [...ataHarita.keys()].sort((a, b) => b.length - a.length);

function ataEslesmesi(transkripsiyon) {
  const w = sadelestir(transkripsiyon);
  if (!w) return null;

  const tam = ataHarita.get(w);
  if (tam) {
    if (!tekAnlam(tam)) return null;                 // belirsiz → ön dolgu yok
    return { ...tam[0], eslesme: "tam" };
  }

  for (const kok of ataKokler) {
    if (kok.length < 3 || !w.startsWith(kok) || w === kok) continue;
    const kalan = w.slice(kok.length);
    if (!kalan || kalan.length > 6) continue;
    const adaylar = ataHarita.get(kok);
    // Ek, maddenin türüne uymalı: fiil kökü → fiil eki, isim kökü → isim eki.
    const uyan = adaylar.filter((a) =>
      a.fiilMi ? FIIL_EKI.has(kalan) : ISIM_EKI.has(kalan)
    );
    if (!uyan.length) continue;
    if (!tekAnlam(uyan)) continue;                   // belirsiz → atla
    return { ...uyan[0], eslesme: "kök", kok, ek: kalan };
  }
  return null;
}

const istek = kelimeler
  .filter((k) => k.guvenilir && k.siklik >= esik && !mevcut.has(normal(k.transkripsiyon)))
  .map((k) => {
    const d = dizeler.get(k.gectigiDizeler[0]);
    return {
      runic: k.runik,                       // DOĞRULANMIŞ — değiştirme
      transcription: k.transkripsiyon,      // DOĞRULANMIŞ — değiştirme
      attestation: k.gectigiDizeler[0],     // DOĞRULANMIŞ — değiştirme
      attestation_text: d ? d.transkripsiyon.slice(0, 120) : null,
      frequency: k.siklik,
      meaning: null,                        // ← DOLDURULACAK
      category: null,                       // ← DOLDURULACAK
      source: null,                         // ← DOLDURULACAK (eser, sayfa)
      // Ön dolgu: doldurulmuş değil, ÖNERİ. Denetim ekranı forma koyar.
      ...(() => {
        const a = ataEslesmesi(k.transkripsiyon);
        if (!a) return {};
        return {
          oneri: {
            meaning: a.eslesme === "kök" ? `${a.anlam}  (${a.kok} + ${a.ek})` : a.anlam,
            source: a.kaynak,
            eslesme: a.eslesme,
            katman: "kitap"
          }
        };
      })()
    };
  });

const cikti = P("docs/sozluk-anlam-bekleyenler.json");
fs.writeFileSync(cikti, JSON.stringify(istek, null, 2) + "\n", "utf8");
const onerili = istek.filter((x) => x.oneri);
const tamSayi = onerili.filter((x) => x.oneri.eslesme === "tam").length;
console.log(`sıklık >= ${esik} | ${istek.length} kelime → docs/sozluk-anlam-bekleyenler.json`);
console.log(
  `Ata ön dolgusu : ${onerili.length} kelimede (${tamSayi} tam, ${onerili.length - tamSayi} kök+ek)` +
    `  — katman "kitap", denetimden geçmeden kullanılmaz`
);
