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
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
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
 * md. 9 — hece damgaları. KORPUS SAYIMI (18.10.2026 denetimi):
 *   𐰸 ok/uk/ko/ku  → 295 geçiş ligatürlü, 57 ayrık (%84)
 *   söz başında da serbest: KOP 𐰸𐰆𐰯, KUL 𐰸𐰆𐰞, KIZ 𐰶𐰃𐰔, KÜN 𐰜𐰇𐰤
 *     (𐰸 ile 45, 𐰶 ile 25, 𐰜 ile 9 kelime söz başında)
 *
 * Eski sürümdeki "söz başında yasak" kaydı korpusa aykırıydı; kaldırıldı.
 *
 * YÖN ÖNEMLİ:
 *   ünsüz+ünlü (ko, ku) → damga YAZILIR, ünlü ayrıca yazılır: KOP 𐰸𐰆𐰯
 *   ünlü+ünsüz (ok, uk) → damga tek başına yeter: YOK 𐰖𐰸, IDUK 𐰃𐰑𐰸
 *
 * 𐰱 yalnız "iç" dizilişindedir. Korpusta iki kelime var, ikisi de
 * ünlü+ünsüz: İÇiKDİ 𐰱𐰚𐰓𐰃, İÇGeRTiM 𐰱𐰏𐰼𐱅𐰢. "çi" için kullanılamaz —
 * keçi 𐰚𐰱 yazılırsa "ke-iç" okunur (denetim bulgusu).
 */
//
// Her damga aynı ölçüde yaygın DEĞİL. Korpus (geçiş sayısı):
//
//   damga   söz başı              iç konum
//   𐰸       ligatür 106 / 33      ligatür 189 /  24   → her yerde
//   𐰶       ligatür  61 / 51      ligatür  26 / 108   → yalnız söz başı (kı)
//   𐰜       ligatür  21 /145      ligatür  42 /  45   → hiç (𐰚 + ünlü yeğlenir)
//
// Bu yüzden 𐰜 tablodan çıkarıldı: KÜN korpusta 𐰚𐰇𐰤'dir, 𐰜𐰇𐰤 değil.
const HECE_DAMGALARI = [
  { glif: "𐰸", unluOnce: ["ok", "uk"], unluSonra: ["ko", "ku"] },
  { glif: "𐰶", unluOnce: ["ık"], unluSonra: ["kı"], unluSonraSozBasi: true },
  { glif: "𐰱", unluOnce: ["iç"], unluSonra: [] }
];

/**
 * Ünsüz kümesi damgaları. Korpus oranları karar verir:
 *   𐰨 nç    → 160 geçiş ligatürlü,   1 ayrık  → ZORUNLU
 *   𐰦 nt/nd → 173 geçiş ligatürlü,  31 ayrık  → ZORUNLU
 *   𐰡 lt/ld →  71 geçiş ligatürlü, 180 ayrık  → uygulanmaz (azınlık)
 *
 * Önceki sürümde üçü birden uygulanmıyordu; gerekçe olarak yazılan
 * "20 ligatür / 54 ayrık" sayısı yalnız lt/ld için doğruymuş.
 */
const KUME_DAMGALARI = [
  { glif: "𐰨", ciftler: ["nç"] },
  { glif: "𐰦", ciftler: ["nt", "nd"] }
];

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

/** Kelimenin genel sırası — yalnız etiket için (ünsüz seçimi heceye bakar). */
function sira(kelime) {
  let kalin = 0;
  let ince = 0;
  for (const h of kelime) {
    if (KALIN_UNLU.has(h)) kalin++;
    else if (INCE_UNLU.has(h)) ince++;
  }
  return kalin >= ince ? "kalin" : "ince";
}

/**
 * HER ÜNSÜZÜN BAĞLI OLDUĞU ÜNLÜ — kalın/ince biçimi bu belirler.
 *
 * Eski motor kelimenin tamamına tek bir sıra veriyordu. Karışık ünlülü
 * sözcüklerde (kitap, kiraz, elma, badem) bu yanlış: Göktürk yazısında
 * ünsüz kendi HECESİNİN ünlüsüne uyar, kelimenin çoğunluğuna değil.
 *
 * Korpus kanıtı — aynı yazımda iki seri birden:
 *   TeMiRKaPıGKA  𐱅𐰢𐰼𐰴𐰯𐰍𐰴𐰀   ince T,R  +  kalın K,G,K
 *   YOLuGTİGiN    𐰖𐰆𐰞𐰍𐱅𐰃𐰏𐰤   kalın Y,L,G  +  ince T,G,N
 *   KaÇaNeŊ       𐰴𐰲𐰤𐰭          kalın K  +  ince N
 * Karışık ünlülü kelimelerde ölçüm: hece bölmeli %100, kelime düzeyi %50.
 *
 * Hece bölme (Türkçe): söz başı öbeği sonraki ünlüye, söz sonu öbeği
 * önceki ünlüye bağlanır. İki ünlü arasında tek ünsüz varsa sonraki
 * hecenin başıdır (sağdaki ünlü); öbek varsa ilki önceki hecenin
 * sonudur (soldaki ünlü), kalanı sonraki hecenin başı.
 *   el-ma   → l soldaki "e"ye  → ince 𐰠   (denetim bulgusu)
 *   ki-tap  → k sağdaki "i"ye  → ince 𐰚   (denetim bulgusu)
 *   ba-dem  → d sağdaki "e"ye  → ince 𐰓   (denetim bulgusu)
 */
function unsuzUnluBagi(harfler) {
  const n = harfler.length;
  const bag = new Array(n).fill(null);
  const unluYerleri = [];
  for (let i = 0; i < n; i++) if (UNLU.has(harfler[i])) unluYerleri.push(i);
  if (!unluYerleri.length) return bag;

  for (let i = 0; i < n; i++) {
    if (UNLU.has(harfler[i])) continue;
    const sag = unluYerleri.find((j) => j > i);
    const sol = [...unluYerleri].reverse().find((j) => j < i);
    if (sag === undefined) { bag[i] = sol; continue; }  // söz sonu öbeği
    if (sol === undefined) { bag[i] = sag; continue; }  // söz başı öbeği
    // Öbeğin ilk ünsüzü müyüz (solumuzda ünlü var mı)?
    const obeginIlki = UNLU.has(harfler[i - 1]);
    const tekUnsuz = sag - i === 1;
    bag[i] = obeginIlki && !tekUnsuz ? sol : sag;
  }
  return bag;
}

/** Bir sesi uygun tamgaya çevir. */
function tamga(ses, siraAdi) {
  const kova = siraAdi === "kalin" ? harita.kalin : harita.ince;
  return kova.get(ses) ?? harita.notr.get(ses) ?? null;
}

export function gokturkceYaz(kelime) {
  const ham = kelime.toLocaleLowerCase("tr").trim();
  for (const h of ham) if (YOK_SES.has(h)) {
    return { runik: null, uyari: `"${h}" sesi Göktürk yazısında yok.`, adimlar: [] };
  }

  const adimlar = [];

  // Ses denklikleri ÖNCE uygulanır: küme damgası (nç) ancak c→ç
  // dönüşümünden sonra görünür hale geliyor (karınca → karınça).
  const harfler = [];
  for (const h of ham) {
    const denk = SES_DENKLIGI.get(h);
    if (denk) { adimlar.push(denk.not); harfler.push(denk.ses); }
    else harfler.push(h);
  }

  const s = sira(harfler.join(""));
  const bag = unsuzUnluBagi(harfler);
  /** Bu konumdaki ünsüz hangi sıradan yazılır? */
  const konumSirasi = (i) => {
    const v = bag[i] === null ? null : harfler[bag[i]];
    if (v === null) return s;
    return KALIN_UNLU.has(v) ? "kalin" : "ince";
  };

  const cikti = [];
  let unluSirasi = 0;          // kaçıncı ünlüdeyiz (1 = ilk hece)
  // md. 2 "söz sonu ünlüsü" = kelimenin SON HARFİ ünlüyse. Kelimenin son
  // ünlüsü değil: kitap'ta "a" son ünlüdür ama söz sonunda değildir.
  const sonHarfYeri = harfler.length - 1;

  for (let i = 0; i < harfler.length; i++) {
    const cift = (harfler[i] ?? "") + (harfler[i + 1] ?? "");

    // md. 9a — ünlü+ünsüz hece damgası (ok, uk, ık, iç): tek tamga yeter.
    const onceli = HECE_DAMGALARI.find((d) => d.unluOnce.includes(cift));
    if (onceli) {
      unluSirasi++;
      cikti.push(onceli.glif);
      adimlar.push(`"${cift}" hece damgası ${onceli.glif} (md. 9)`);
      i++;
      continue;
    }

    // md. 9b — ünsüz+ünlü hece damgası (ko, ku, kö, kü, kı): damga
    // yazılır, ünlü AYRICA yazılır. Korpus: KOP 𐰸𐰆𐰯, KUL 𐰸𐰆𐰞.
    const sonrali = HECE_DAMGALARI.find(
      (d) => d.unluSonra.includes(cift) && !(d.unluSonraSozBasi && i > 0)
    );
    if (sonrali) {
      cikti.push(sonrali.glif);
      adimlar.push(`"${cift}" hece damgası ${sonrali.glif} (md. 9)`);
      // Ünsüz damgaya girdi; ünlü ayrıca, kendi kuralıyla yazılır.
      const unluYeri = i + 1;
      const v = harfler[unluYeri];
      unluSirasi++;
      if (yazilirMi(v, unluSirasi, unluYeri === sonHarfYeri, adimlar)) {
        const g = tamga(v, KALIN_UNLU.has(v) ? "kalin" : "ince");
        if (g) cikti.push(g);
      }
      i = unluYeri;              // ikisini de tükettik
      continue;
    }

    // md. 10 — ünsüz kümesi damgası (nç, nt, nd). Korpusta baskın.
    const kume = KUME_DAMGALARI.find((d) => d.ciftler.includes(cift));
    if (kume) {
      cikti.push(kume.glif);
      adimlar.push(`"${cift}" küme damgası ${kume.glif} (md. 10)`);
      i++;
      continue;
    }

    const h = harfler[i];

    // md. 8 — ikiz ünsüz tek harf
    if (!UNLU.has(h) && i > 0 && harfler[i - 1] === h) {
      adimlar.push(`${h}${h} ikiz ünsüz → tek tamga (md. 8)`);
      continue;
    }

    if (UNLU.has(h)) {
      unluSirasi++;
      if (!yazilirMi(h, unluSirasi, i === sonHarfYeri, adimlar)) continue;
      const g = tamga(h, s);
      if (g) cikti.push(g);
      continue;
    }

    const yerelSira = konumSirasi(i);
    const g = tamga(h, yerelSira);
    if (!g) return { runik: null, uyari: `"${h}" için tamga bulunamadı.`, adimlar };
    cikti.push(g);
    const kutuplu = ["b", "d", "g", "k", "l", "n", "r", "s", "t", "y"].includes(h);
    if (kutuplu) {
      const komsu = bag[i] === null ? null : harfler[bag[i]];
      adimlar.push(
        `"${h}" → ${yerelSira === "kalin" ? "kalın" : "ince"} biçim` +
          (komsu ? ` (hecesindeki "${komsu}" ünlüsüne uyar, md. 6)` : " (md. 6)")
      );
    } else {
      adimlar.push(`"${h}"`);
    }
  }

  if (!cikti.length) return { runik: null, uyari: "Yazılacak tamga kalmadı.", adimlar };
  // md.1 — sağdan sola yazılır; dizgi soldan sağa tutulur, arayüz dir="rtl" ile çevirir.
  return { runik: cikti.join(""), uyari: null, adimlar, sira: s };
}

/**
 * Bu ünlü yazılır mı? Korpus sayımı (yazılan / yazılmayan geçiş):
 *
 *   ünlü   1. hece        sonraki heceler
 *   ı      %95            %42
 *   i      %75            %41
 *   u      %99            %40
 *   ü      %100           %43
 *   o/ö    %99            %98
 *   a/e    %21            %20
 *
 * Kural: a/e hiç yazılmaz (md. 3-4). o/ö her yerde yazılır. ı/i/u/ü
 * yalnız İLK HECEDE yazılır. Söz sonu ünlüsü her zaman yazılır (md. 2).
 *
 * Eski motor ı/i/u/ü'yü her hecede yazıyordu; sonraki hecelerde korpus
 * bunu %58 oranında çürütüyor. Denetimde iki bulgu da bu kuraldan:
 *   sığır   𐰽𐰃𐰍𐰺   (ikinci ı yazılmaz)
 *   karınca 𐰴𐰺𐰨𐰀   (ikinci hecedeki ı yazılmaz)
 */
function yazilirMi(h, unluSirasi, sonMu, adimlar) {
  if (sonMu) { adimlar.push(`son ünlü "${h}" yazılır (md. 2)`); return true; }
  if (h === "a" || h === "e") { adimlar.push(`kısa "${h}" yazılmaz (md. ${unluSirasi <= 1 ? 3 : 4})`); return false; }
  if (h === "o" || h === "ö") { adimlar.push(`yuvarlak "${h}" her hecede yazılır (md. 3)`); return true; }
  if (unluSirasi <= 1) { adimlar.push(`ilk hecedeki "${h}" yazılır (md. 3)`); return true; }
  adimlar.push(`ilk heceden sonraki "${h}" yazılmaz (md. 4)`);
  return false;
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

// ── İNSAN DENETİMİ ──────────────────────────────────────────────────────────
// Denetim ekranının "Gündelik yazım" sekmesinden onaylanan / düzeltilen /
// çıkarılan kelimeler. gundelik-denetim-uygula.mjs yazar.
// Sıra: insan kararı > korpus tanığı > kural çıktısı.
// Korpus esastır ilkesi burada da geçerli — ama insan korpusu okuyarak
// karar verdiği için insan mührü en üsttedir.
const istisnaYolu = P("05_Kaynak_DB/gundelik-istisnalar.json");
const istisnalar = existsSync(istisnaYolu)
  ? JSON.parse(readFileSync(istisnaYolu, "utf8")).kayitlar ?? {}
  : {};

const gorulenKelime = new Set();
let insanOnayli = 0;
let insanDuzeltti = 0;
let insanCikardi = 0;
const muhurDustu = [];
for (const { t, tema } of KELIMELER) {
  // Aynı sözcük iki temada geçerse id ve React anahtarı çakışır; ilki kalır.
  if (gorulenKelime.has(t)) { atlanan.push({ kelime: t, sebep: `"${t}" listede iki kez var (ikincisi: ${tema}).` }); continue; }
  gorulenKelime.add(t);
  const sonuc = gokturkceYaz(t);
  if (!sonuc.runik) { atlanan.push({ kelime: t, sebep: sonuc.uyari }); continue; }

  let istisna = istisnalar[t];

  // MÜHÜR GEÇERLİLİĞİ.
  // İnsan, ekranda belli bir yazımı görüp onayladı. İmla kuralı
  // sonradan düzeltilince üretilen yazım değişebilir — o onay artık
  // başka bir yazıma aittir. Eski mührü yeni yazıma taşımak,
  // denetlenmemiş bir şeyi denetlenmiş göstermek olur.
  if (istisna?.gorulenRunik && istisna.sonuc === "dogru" && istisna.gorulenRunik !== sonuc.runik) {
    muhurDustu.push(`${t} (${istisna.gorulenRunik} → ${sonuc.runik})`);
    istisna = null;
  }

  if (istisna?.sonuc === "cikarilsin") {
    insanCikardi++;
    atlanan.push({ kelime: t, sebep: `insan denetimi çıkardı${istisna.not ? `: ${istisna.not}` : ""}` });
    continue;
  }

  const korpusta = korpusKelimeleri.get(t);
  if (korpusta) tanikli++;

  // Yazım seçimi: insan düzeltmesi > korpus tanığı > kural çıktısı.
  let runik = korpusta ? korpusta.runik : sonuc.runik;
  if (istisna?.sonuc === "duzeltildi" && istisna.runik) {
    runik = istisna.runik;
    insanDuzeltti++;
  } else if (istisna?.sonuc === "dogru") {
    insanOnayli++;
  }

  kayitlar.push({
    id: `gundelik-${t}`,
    kelime: t,
    tema,
    runik,
    tanikli: Boolean(korpusta),
    tanikDize: korpusta?.gectigiDizeler?.[0] ?? null,
    // İnsan denetiminden geçti mi — arayüz bunu etikete yazar.
    insanDenetimi: istisna ? istisna.sonuc : null,
    uretilenRunik: sonuc.runik,
    tamgaSayisi: [...runik].length,
    sira: sonuc.sira,
    adimlar: sonuc.adimlar,
    // Zorluk tamga sayısına göre: 2 tamga kolay, 6+ zor.
    zorluk: Math.max(1, Math.min(5, [...runik].length - 1))
  });
}

// ── EŞ YAZIM (homograf) ─────────────────────────────────────────────────────
// Göktürk yazısında kısa a/e yazılmadığı için farklı sözcükler aynı
// tamga dizisine düşebilir: taş/ateş → 𐱃𐱁, buz/boz → 𐰉𐰆𐰔,
// göz/güz → 𐰏𐰇𐰔, kuş/koş → 𐰴𐰆𐱁.
//
// Bu yazının gerçek bir özelliği, hata değil — ama ALIŞTIRMADA hatadır:
// "boz nasıl yazılır?" sorusunda çeldirici olarak buz'un yazımı konursa
// iki şık birebir aynı olur ve doğru şık iki tane olur. Her kayıt
// eşlerini taşır; alıştırma üreticisi bunları çeldirici olarak kullanmaz
// ve açıklamada eş yazımı söyler.
const yazimHaritasi = new Map();
for (const k of kayitlar) {
  if (!yazimHaritasi.has(k.runik)) yazimHaritasi.set(k.runik, []);
  yazimHaritasi.get(k.runik).push(k.kelime);
}
let esYazimSayisi = 0;
for (const k of kayitlar) {
  const esler = yazimHaritasi.get(k.runik).filter((w) => w !== k.kelime);
  k.esYazim = esler;
  if (esler.length) esYazimSayisi++;
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
if (insanOnayli || insanDuzeltti || insanCikardi) {
  console.log(
    `  insan denetimi  : ${insanOnayli} onay · ${insanDuzeltti} düzeltme · ${insanCikardi} çıkarıldı`
  );
} else {
  console.log("  insan denetimi  : yok (denetim ekranı → Gündelik yazım)");
}
if (muhurDustu.length) {
  console.log(
    `\n  kural değiştiği için mührü düşen ${muhurDustu.length} kelime ` +
      "— yeniden denetlenecek:"
  );
  for (const m of muhurDustu) console.log(`    ${m}`);
}
console.log(`tema dağılımı   : ${Object.entries(temalar).map(([t, n]) => `${t} ${n}`).join(" · ")}`);
if (esYazimSayisi) {
  const ciftler = [...yazimHaritasi.entries()].filter(([, w]) => w.length > 1);
  console.log(`\neş yazım (aynı tamga dizisi) ${ciftler.length} küme:`);
  for (const [runik, w] of ciftler) console.log(`  ${runik}  ${w.join(" = ")}`);
  console.log("  → bunlar birbirine çeldirici olarak verilmez.");
}
if (atlanan.length) {
  console.log(`\natlanan ${atlanan.length}:`);
  for (const a of atlanan) console.log(`  ${a.kelime}: ${a.sebep}`);
}
console.log("\nyazıldı: src/data/generated/gundelik.json");
