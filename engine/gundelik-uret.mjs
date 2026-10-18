#!/usr/bin/env node
/**
 * GÜNDELİK MODÜL — bugünün Türkçesini Göktürk harfleriyle yazma.
 *
 *   node engine/gundelik-uret.mjs
 *
 * NE DEĞİLDİR: Bu modül TARİHSEL METİN DEĞİLDİR. Üretilen yazımlar
 * 13 maddelik imla kuralına uygundur ama hiçbir yazıtta geçmez.
 * Kitabe içeriğiyle karışmaması için ayrı dosyaya, ayrı etikete ve
 * ayrı alıştırma türüne (`gundelik_yaz`) yazılır.
 *
 * NEDEN VAR: Öğrenen bildiği kelimeyi yazarak harfleri öğrenir.
 * Korpus kelimeleriyle başlamak hem anlamı hem yazımı aynı anda
 * yüklüyor; bu modül yükün yarısını kaldırır.
 *
 * Kurallar: 00_Kaynaklar/imla_kurallari_13_madde.md
 *   md.2  söz sonu ünlüleri HER ZAMAN yazılır
 *   md.3  söz başı/ilk hece kısa a/e yazılmaz; ı/i ve yuvarlaklar yazılır
 *   md.4  söz içi kısa a/e gösterilmez
 *   md.6  kutuplu ünsüzler (b d g k l n r s t y) kalın/ince ikişer harf
 *   md.8  ikiz ünsüz tek harf yazılır
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const oku = (p) => JSON.parse(readFileSync(P(p), "utf8"));

const tamgalar = oku("05_Kaynak_DB/tamga-siniflari-v1-kilitli.json").classes;

/** sound → glyph, kalın/ince ayrımıyla. */
const harita = { kalin: new Map(), ince: new Map(), notr: new Map() };
for (const c of tamgalar) {
  if (c.category !== "vowel" && c.category !== "consonant") continue;
  const kova = c.harmony === "back" ? harita.kalin : c.harmony === "front" ? harita.ince : harita.notr;
  for (const s of c.sound) kova.set(s, c.glyph_ref.core_orhun);
}

/**
 * md. 9 — hece damgaları. Ünlü+ünsüz (ya da ünsüz+ünlü) çifti tek
 * tamgayla yazılır. Korpus doğrulaması bunu zorunlu kıldı: balık
 * 𐰉𐰞𐰶 (ı+k ligatürü), ok 𐰸 (o+k) — ligatürsüz yazım korpustan sapıyor.
 *
 * Konum yasağı: söz başında ko/ku/kö/kü/kı tek başına ligatürle
 * yazılamaz (kök = 𐰚𐰜, kıldı = 𐰴𐰃𐰡𐰃).
 */
const HECE_DAMGALARI = [
  { ciftler: ["ok", "uk", "ko", "ku"], glif: "𐰸", sozBasiYasak: ["ko", "ku"] },
  { ciftler: ["ök", "ük", "kö", "kü"], glif: "𐰜", sozBasiYasak: ["kö", "kü"] },
  { ciftler: ["ık", "kı"], glif: "𐰶", sozBasiYasak: ["kı"] },
  { ciftler: ["iç", "çi"], glif: "𐰱", sozBasiYasak: [] }
];

// Ünsüz kümesi damgaları (𐰡 lt/ld, 𐰦 nt/nd, 𐰨 nç) OTOMATİK
// UYGULANMAZ. Korpus sayımı: 𐰡 ligatürlü 20 kelimeye karşı ayrık
// l+t yazımı 54 — ligatür azınlıkta, yani seçimlik. Zorunlu saymak
// korpustan sapan yazım üretiyordu (altı: bizim 𐰡𐰃, korpus 𐰞𐱃𐰃).

const KALIN_UNLU = new Set(["a", "ı", "o", "u"]);
const INCE_UNLU = new Set(["e", "i", "ö", "ü"]);
const UNLU = new Set([...KALIN_UNLU, ...INCE_UNLU]);
/** Göktürk yazısında bulunmayan sesler — bu kelimeler üretilmez. */
const YOK_SES = new Set(["f", "h", "j"]);

/**
 * Bugünkü sesin Eski Türkçedeki karşılığı. Uydurma değil, ses
 * denkliği: ev < eb, ver- < ber- (md. 12 b~m/b~v değişmesi),
 * dağ < tag, ağaç < ıgaç — ğ sesi Eski Türkçede g'dir.
 */
const SES_DENKLIGI = new Map([
  ["ğ", { ses: "g", not: "ğ sesi Eski Türkçede g'dir (dağ < tag)" }],
  ["v", { ses: "b", not: "v sesi Eski Türkçede b'dir (ev < eb, ver- < ber-)" }],
  ["c", { ses: "ç", not: "c sesi Eski Türkçede ç'dir (karınca < karınçga)" }]
]);

/** Kelimenin kalın mı ince mi olduğunu son ünlüden değil, çoğunluktan bul. */
function sira(kelime) {
  let kalin = 0;
  let ince = 0;
  for (const h of kelime) {
    if (KALIN_UNLU.has(h)) kalin++;
    else if (INCE_UNLU.has(h)) ince++;
  }
  return kalin >= ince ? "kalin" : "ince";
}

/** Bir sesi uygun tamgaya çevir. */
function tamga(ses, siraAdi) {
  const kova = siraAdi === "kalin" ? harita.kalin : harita.ince;
  return kova.get(ses) ?? harita.notr.get(ses) ?? null;
}

/**
 * Türkçe sözcüğü Göktürk tamgalarına çevirir.
 * Dönüş: { runik, adimlar, uyari } — adimlar hangi kuralın neden
 * uygulandığını söyler, arayüzde öğretici olarak gösterilir.
 */
export function gokturkceYaz(kelime) {
  const k = kelime.toLocaleLowerCase("tr").trim();
  for (const h of k) if (YOK_SES.has(h)) {
    return { runik: null, uyari: `"${h}" sesi Göktürk yazısında yok.`, adimlar: [] };
  }

  const s = sira(k);
  const harfler = [...k];
  const cikti = [];
  const adimlar = [];

  for (let i = 0; i < harfler.length; i++) {
    // md. 9 — iki harflik hece damgası var mı?
    const cift = (harfler[i] ?? "") + (harfler[i + 1] ?? "");
    const damga = HECE_DAMGALARI.find((d) => d.ciftler.includes(cift));
    if (damga && !(i === 0 && damga.sozBasiYasak.includes(cift))) {
      cikti.push(damga.glif);
      adimlar.push(`"${cift}" hece damgası ${damga.glif} (md. 9)`);
      i++; // çifti tükettik
      continue;
    }

    let h = harfler[i];
    const denk = SES_DENKLIGI.get(h);
    if (denk) {
      adimlar.push(denk.not);
      h = denk.ses;
      harfler[i] = h;
    }
    const sonMu = i === harfler.length - 1;

    // md.8 — ikiz ünsüz tek harf
    if (!UNLU.has(h) && i > 0 && harfler[i - 1] === h) {
      adimlar.push(`${h}${h} ikiz ünsüz → tek tamga (md. 8)`);
      continue;
    }

    if (UNLU.has(h)) {
      // md.2 — söz sonu ünlüsü her zaman yazılır
      if (sonMu) {
        const g = tamga(h, s);
        if (g) { cikti.push(g); adimlar.push(`son ünlü "${h}" yazılır (md. 2)`); }
        continue;
      }
      // md.3 / md.4 — kısa a/e yazılmaz
      if (h === "a" || h === "e") {
        adimlar.push(`kısa "${h}" yazılmaz (md. ${i === 0 || i === 1 ? 3 : 4})`);
        continue;
      }
      // ı/i ve yuvarlaklar yazılır
      const g = tamga(h, s);
      if (g) { cikti.push(g); adimlar.push(`"${h}" yazılır (md. 3)`); }
      continue;
    }

    const g = tamga(h, s);
    if (!g) return { runik: null, uyari: `"${h}" için tamga bulunamadı.`, adimlar };
    cikti.push(g);
    const kutuplu = ["b", "d", "g", "k", "l", "n", "r", "s", "t", "y"].includes(h);
    adimlar.push(kutuplu ? `"${h}" → ${s === "kalin" ? "kalın" : "ince"} biçim (md. 6)` : `"${h}"`);
  }

  if (!cikti.length) return { runik: null, uyari: "Yazılacak tamga kalmadı.", adimlar };
  // md.1 — sağdan sola yazılır; dizgi soldan sağa tutulur, arayüz dir="rtl" ile çevirir.
  return { runik: cikti.join(""), uyari: null, adimlar, sira: s };
}

/* ── Kelime listesi ─────────────────────────────────────────────────
   Gündelik, somut, öğrenenin zaten bildiği sözcükler. f/h/j/v içeren
   sözcükler listeye alınmadı (Göktürk yazısında bu sesler yok). */
const KELIMELER = [
  { t: "su", tema: "doğa" }, { t: "taş", tema: "doğa" }, { t: "ay", tema: "doğa" },
  { t: "gün", tema: "doğa" }, { t: "yıldız", tema: "doğa" }, { t: "dağ", tema: "doğa" },
  { t: "deniz", tema: "doğa" }, { t: "yol", tema: "doğa" }, { t: "ağaç", tema: "doğa" },
  { t: "toprak", tema: "doğa" }, { t: "gök", tema: "doğa" }, { t: "yer", tema: "doğa" },
  { t: "yel", tema: "doğa" }, { t: "kar", tema: "doğa" }, { t: "buz", tema: "doğa" },

  { t: "ana", tema: "aile" }, { t: "ata", tema: "aile" }, { t: "oğul", tema: "aile" },
  { t: "kız", tema: "aile" }, { t: "kardeş", tema: "aile" }, { t: "dede", tema: "aile" },
  { t: "er", tema: "aile" }, { t: "ad", tema: "aile" },

  { t: "bir", tema: "sayı" }, { t: "iki", tema: "sayı" }, { t: "üç", tema: "sayı" },
  { t: "dört", tema: "sayı" }, { t: "beş", tema: "sayı" }, { t: "altı", tema: "sayı" },
  { t: "yedi", tema: "sayı" }, { t: "sekiz", tema: "sayı" }, { t: "dokuz", tema: "sayı" },
  { t: "on", tema: "sayı" }, { t: "yüz", tema: "sayı" }, { t: "bin", tema: "sayı" },

  { t: "al", tema: "renk" }, { t: "ak", tema: "renk" }, { t: "kara", tema: "renk" },
  { t: "sarı", tema: "renk" }, { t: "mor", tema: "renk" }, { t: "boz", tema: "renk" },

  { t: "gel", tema: "fiil" }, { t: "git", tema: "fiil" }, { t: "bak", tema: "fiil" },
  { t: "dur", tema: "fiil" }, { t: "otur", tema: "fiil" }, { t: "yaz", tema: "fiil" },
  { t: "oku", tema: "fiil" }, { t: "bil", tema: "fiil" }, { t: "ver", tema: "fiil" },
  { t: "al", tema: "fiil" }, { t: "sor", tema: "fiil" }, { t: "koş", tema: "fiil" },
  { t: "uyu", tema: "fiil" }, { t: "iç", tema: "fiil" }, { t: "ye", tema: "fiil" },

  { t: "ekmek", tema: "yiyecek" }, { t: "et", tema: "yiyecek" }, { t: "süt", tema: "yiyecek" },
  { t: "tuz", tema: "yiyecek" }, { t: "bal", tema: "yiyecek" }, { t: "aş", tema: "yiyecek" },

  { t: "ev", tema: "gündelik" }, { t: "kapı", tema: "gündelik" }, { t: "at", tema: "gündelik" },
  { t: "it", tema: "gündelik" }, { t: "kuş", tema: "gündelik" }, { t: "balık", tema: "gündelik" },
  { t: "göz", tema: "gündelik" }, { t: "el", tema: "gündelik" }, { t: "baş", tema: "gündelik" },
  { t: "söz", tema: "gündelik" }, { t: "ok", tema: "gündelik" }, { t: "kitap", tema: "gündelik" },
  { t: "yaş", tema: "gündelik" }, { t: "iyi", tema: "gündelik" }, { t: "ulu", tema: "gündelik" },

  { t: "elma", tema: "meyve" }, { t: "armut", tema: "meyve" }, { t: "üzüm", tema: "meyve" },
  { t: "kiraz", tema: "meyve" }, { t: "dut", tema: "meyve" }, { t: "ceviz", tema: "meyve" },
  // Not: ceviz, incir, mercimek, lahana, nohut, bahar listeden
  // çıkarıldı — Arapça/Farsça alıntı, Eski Türkçede karşılıkları yok.
  { t: "badem", tema: "meyve" }, { t: "nar", tema: "meyve" }, { t: "erik", tema: "meyve" },
  { t: "karpuz", tema: "meyve" }, { t: "kayısı", tema: "meyve" },

  { t: "soğan", tema: "sebze" }, { t: "sarımsak", tema: "sebze" }, { t: "turp", tema: "sebze" },
  { t: "darı", tema: "sebze" }, { t: "buğday", tema: "sebze" }, { t: "arpa", tema: "sebze" },
  { t: "pırasa", tema: "sebze" },

  { t: "kurt", tema: "hayvan" }, { t: "koyun", tema: "hayvan" }, { t: "keçi", tema: "hayvan" },
  { t: "sığır", tema: "hayvan" }, { t: "deve", tema: "hayvan" }, { t: "tilki", tema: "hayvan" },
  { t: "ayı", tema: "hayvan" }, { t: "kaplan", tema: "hayvan" }, { t: "geyik", tema: "hayvan" },
  { t: "tavşan", tema: "hayvan" }, { t: "kartal", tema: "hayvan" }, { t: "doğan", tema: "hayvan" },
  { t: "yılan", tema: "hayvan" }, { t: "arı", tema: "hayvan" }, { t: "karınca", tema: "hayvan" },
  { t: "sıçan", tema: "hayvan" }, { t: "domuz", tema: "hayvan" }, { t: "aygır", tema: "hayvan" },
  { t: "buzağı", tema: "hayvan" }, { t: "kuzu", tema: "hayvan" },

  { t: "orman", tema: "doğa terimi" }, { t: "ova", tema: "doğa terimi" },
  { t: "çöl", tema: "doğa terimi" }, { t: "ırmak", tema: "doğa terimi" },
  { t: "göl", tema: "doğa terimi" }, { t: "pınar", tema: "doğa terimi" },
  { t: "kaya", tema: "doğa terimi" }, { t: "kum", tema: "doğa terimi" },
  { t: "çamur", tema: "doğa terimi" }, { t: "duman", tema: "doğa terimi" },
  { t: "ateş", tema: "doğa terimi" }, { t: "yağmur", tema: "doğa terimi" },
  { t: "bulut", tema: "doğa terimi" }, { t: "gölge", tema: "doğa terimi" },
  { t: "ışık", tema: "doğa terimi" }, { t: "karanlık", tema: "doğa terimi" },
  { t: "yaz", tema: "doğa terimi" }, { t: "kış", tema: "doğa terimi" },
  { t: "bahar", tema: "doğa terimi" }, { t: "güz", tema: "doğa terimi" },
  { t: "tan", tema: "doğa terimi" }, { t: "akşam", tema: "doğa terimi" }
];

/* ── Üretim ─────────────────────────────────────────────────────── */

/**
 * KORPUS ESASTIR. Bir kelime yazıtlarda geçiyorsa üretilen yazım
 * değil, TANIKLI yazım kullanılır. Kural motoru yalnız korpusta
 * olmayan kelimeler için çalışır.
 * Doğrulama: 77 kelimenin 23'ü korpusla birebir aynı çıktı; kalan
 * 2 fark (iki, beş) korpusun kalıplaşmış biçimleri — bu yüzden
 * tanıklı olan kazanır.
 */
const korpusKelimeleri = new Map();
for (const k of oku("src/data/generated/kelimeler.json")) {
  const sade = k.transkripsiyon.toLocaleLowerCase("tr").replace(/[^a-zçğıöşü]/g, "");
  // En sık geçen biçim kazanır.
  const mevcut = korpusKelimeleri.get(sade);
  if (!mevcut || (k.siklik ?? 0) > (mevcut.siklik ?? 0)) korpusKelimeleri.set(sade, k);
}

const kayitlar = [];
const atlanan = [];
let tanikli = 0;

for (const { t, tema } of KELIMELER) {
  const sonuc = gokturkceYaz(t);
  if (!sonuc.runik) { atlanan.push({ kelime: t, sebep: sonuc.uyari }); continue; }
  const korpusta = korpusKelimeleri.get(t);
  if (korpusta) tanikli++;
  kayitlar.push({
    id: `gundelik-${t}`,
    kelime: t,
    tema,
    // Tanıklı yazım varsa o, yoksa kurallardan üretilen.
    runik: korpusta ? korpusta.runik : sonuc.runik,
    tanikli: Boolean(korpusta),
    tanikDize: korpusta?.gectigiDizeler?.[0] ?? null,
    uretilenRunik: sonuc.runik,
    tamgaSayisi: [...(korpusta ? korpusta.runik : sonuc.runik)].length,
    sira: sonuc.sira,
    adimlar: sonuc.adimlar,
    // Zorluk tamga sayısına göre: 2 tamga kolay, 6+ zor.
    zorluk: Math.max(1, Math.min(5, [...(korpusta ? korpusta.runik : sonuc.runik)].length - 1))
  });
}

const CIKTI = P("src/data/generated");
mkdirSync(CIKTI, { recursive: true });
writeFileSync(
  join(CIKTI, "gundelik.json"),
  JSON.stringify({
    surum: "gundelik-v1",
    uyari:
      "TARİHSEL METİN DEĞİLDİR. Bu yazımlar 13 maddelik imla kuralına göre " +
      "üretilmiştir; hiçbir yazıtta geçmez. Harf öğretmek içindir.",
    kaynak: "00_Kaynaklar/imla_kurallari_13_madde.md",
    uretim: new Date().toISOString().slice(0, 10),
    kelimeler: kayitlar
  })
);

const temalar = {};
for (const k of kayitlar) temalar[k.tema] = (temalar[k.tema] ?? 0) + 1;

console.log(`üretilen kelime : ${kayitlar.length} / ${KELIMELER.length}`);
console.log(`  tanıklı (korpus): ${tanikli}  ← yazıtlarda geçiyor, tanıklı yazım kullanıldı`);
console.log(`  kuraldan üretilen: ${kayitlar.length - tanikli}`);
console.log(`tema dağılımı   : ${Object.entries(temalar).map(([t, n]) => `${t} ${n}`).join(" · ")}`);
if (atlanan.length) {
  console.log(`\natlanan ${atlanan.length}:`);
  for (const a of atlanan) console.log(`  ${a.kelime}: ${a.sebep}`);
}
console.log("\nyazıldı: src/data/generated/gundelik.json");
