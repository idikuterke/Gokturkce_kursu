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
  // md. 20 — ko/ku ve kı sözcük İÇİNDE damgayla yazılmaz, 𐰴 kullanılır.
  // md. 19 — sözcük BAŞINDA ko/ku sıklıkla, kı sıklıkla damgalıdır.
  { glif: "𐰸", unluOnce: ["ok", "uk"], unluSonra: ["ko", "ku"], unluSonraSozBasi: true },
  // md. 6 ve 21 — ök/ük söz başında ve içinde 𐰜. md. 19: kö/kü damgası
  // "nâdiren" kullanılır, bu yüzden unluSonra boş bırakıldı.
  { glif: "𐰜", unluOnce: ["ök", "ük"], unluSonra: [] },
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
// md. 11 — f, c/j, h, v yerine p, ç, k, b kullanılır; "yok ses" kalmadı.
const YOK_SES = new Set();

/**
 * Bugünkü sesin Eski Türkçedeki karşılığı. Uydurma değil, ses
 * denkliği: ev < eb, ver- < ber- (md. 12 b~m/b~v değişmesi),
 * dağ < tag, ağaç < ıgaç — ğ sesi Eski Türkçede g'dir.
 */
const SES_DENKLIGI = new Map([
  ["ğ", { ses: "g", not: "ğ sesi Eski Türkçede g'dir (dağ < tag)" }],
  ["v", { ses: "b", not: "v sesi Göktürk yazısında b ile yazılır (md. 11)" }],
  ["c", { ses: "ç", not: "c sesi Göktürk yazısında ç ile yazılır (md. 11)" }],
  ["j", { ses: "ç", not: "j sesi Göktürk yazısında ç ile yazılır (md. 11)" }],
  ["f", { ses: "p", not: "f sesi Göktürk yazısında p ile yazılır (md. 11)" }],
  ["h", { ses: "k", not: "h sesi Göktürk yazısında k ile yazılır (md. 11)" }]
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
 * Kaynak kuralı (Tuğrul Çavdar, "KökTürük (Orhun) Abacasınıŋ Yazım
 * Kuralları", md. 3):
 *   "Bir harfin kalın mı ince mi olduğunu varsa ÖŊÜNDEKİ sesli,
 *    yoksa ARDINDAKİ sesli belirler."
 *
 * Dayanağı Tekin'de de var: runik ünsüz işaretleri ünlüyle başlayıp
 * ünsüzle biten hece değerindedir (ab hecedir, ba değildir) — yani
 * ünsüz kendinden ÖNCEKİ ünlüye bağlıdır.
 *
 * Bir önceki sürüm heceye (onset/coda) bakıyordu. Korpusta iki kural
 * yalnız 2 konumda çelişiyor (YİŞ-KA, BİR-KIRK — ikisi de bileşik
 * sınırı), yani ölçüm ayırt edemiyor; kaynak ayırt ediyor.
 *
 * Karışık ünlülü yazımda iki seri birlikte görünür:
 *   TeMiRKaPıGKA  𐱅𐰢𐰼𐰴𐰯𐰍𐰴𐰀   ince T,R  +  kalın K,G,K
 *   YOLuGTİGiN    𐰖𐰆𐰞𐰍𐱅𐰃𐰏𐰤   kalın Y,L,G  +  ince T,G,N
 */
function unsuzUnluBagi(harfler) {
  const n = harfler.length;
  const bag = new Array(n).fill(null);
  const unluYerleri = [];
  for (let i = 0; i < n; i++) if (UNLU.has(harfler[i])) unluYerleri.push(i);
  if (!unluYerleri.length) return bag;

  for (let i = 0; i < n; i++) {
    if (UNLU.has(harfler[i])) continue;
    const sol = [...unluYerleri].reverse().find((j) => j < i);
    const sag = unluYerleri.find((j) => j > i);
    bag[i] = sol !== undefined ? sol : sag;   // md. 3
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
  const ilkUnlu = harfler.find((h) => UNLU.has(h)) ?? null;   // md. 7 ölçütü
  // Hece damgası yazıldıysa ONDAN SONRAKİ ünlü md. 7'den muaftır (md. 22).
  let damgaMuafiyeti = false;
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
      // md. 22 — damgadan SONRAKİ hecenin ünlüsü md. 7'nin dışındadır.
      // Bu, ünsüz+ünlü damgası kadar ünlü+ünsüz damgası için de geçerli:
      //   "𐰸'dan sonraki hecede o/u varsa o/u yazılır"  (Çavdar md. 22)
      // Korpus: TOKUZ 𐱃𐰸𐰆𐰔 — ikinci "u" yazılıyor.
      // Önceki sürüm bu muafiyeti yalnız ünsüz+ünlü dalında uyguluyordu;
      // dokuz 𐰑𐰸𐰔 çıkıyordu, 𐰑𐰸𐰆𐰔 olmalıydı (denetim bulgusu).
      damgaMuafiyeti = true;
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
      // md. 22 — hece damgasından sonraki ünlü md. 7'nin dışındadır,
      // a/e değilse yazılır: okun 𐰸𐰆𐰣, tokuz 𐱃𐰸𐰆𐰔.
      const damgaSonrasi = v !== "a" && v !== "e";
      if (damgaSonrasi) {
        adimlar.push(`hece damgasından sonraki "${v}" yazılır (md. 22)`);
      }
      if (damgaSonrasi || yazilirMi(v, unluSirasi, unluYeri === sonHarfYeri, ilkUnlu, adimlar)) {
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
    if (!UNLU.has(h)) damgaMuafiyeti = false;   // muafiyet yalnız bitişik ünlüye

    // md. 8 — ikiz ünsüz tek harf
    if (!UNLU.has(h) && i > 0 && harfler[i - 1] === h) {
      adimlar.push(`${h}${h} ikiz ünsüz → tek tamga (md. 8)`);
      continue;
    }

    if (UNLU.has(h)) {
      unluSirasi++;
      const muaf = damgaMuafiyeti && h !== "a" && h !== "e";
      damgaMuafiyeti = false;
      if (muaf) {
        adimlar.push(`hece damgasından sonraki "${h}" yazılır (md. 22)`);
      } else if (!yazilirMi(h, unluSirasi, i === sonHarfYeri, ilkUnlu, adimlar)) {
        continue;
      }
      const g = tamga(h, s);
      if (g) cikti.push(g);
      continue;
    }

    let yerelSira = konumSirasi(i);

    // md. 16 — söz başında "yı/yi", kalın hece olsa bile İNCE y ile.
    //   korpus: YIŞ 𐰘𐰃𐱁, YIL 𐰘𐰃𐰞, YILKA 𐰘𐰃𐰞𐰴𐰀
    if (h === "y" && i === 0 && (harfler[1] === "ı" || harfler[1] === "i")) {
      yerelSira = "ince";
      adimlar.push('söz başında "yı" — kalın hece olsa da ince y (md. 16)');
    }
    // md. 13 — söz sonunda "-ın", kalın hece olsa bile İNCE n ile.
    //   korpus: OGLIN 𐰆𐰍𐰞𐰃𐰤, YOTuZIN 𐰖𐰆𐱃𐰔𐰃𐰤, KaŊIN 𐰴𐰭𐰃𐰤
    if (
      h === "n" && i === harfler.length - 1 &&
      (harfler[i - 1] === "ı" || harfler[i - 1] === "i")
    ) {
      yerelSira = "ince";
      adimlar.push('söz sonunda "-ın" — kalın hece olsa da ince n (md. 13)');
    }

    const g = tamga(h, yerelSira);
    if (!g) return { runik: null, uyari: `"${h}" için tamga bulunamadı.`, adimlar };
    cikti.push(g);
    const kutuplu = ["b", "d", "g", "k", "l", "n", "r", "s", "t", "y"].includes(h);
    if (kutuplu) {
      const komsu = bag[i] === null ? null : harfler[bag[i]];
      adimlar.push(
        `"${h}" → ${yerelSira === "kalin" ? "kalın" : "ince"} biçim` +
          (komsu ? ` ("${komsu}" ünlüsüne uyar, md. 3)` : " (md. 3)")
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
 * Bu ünlü yazılır mı? — Çavdar md. 4, 6, 7, 8.
 *
 *   md. 4  söz başı ve ortasında a/e yazılmaz; söz sonunda yazılır
 *   md. 6  söz başındaki ı/i, o/u, ö/ü her zaman yazılır
 *   md. 8  söz sonundaki bütün ünlüler yazılır
 *   md. 7  ilk hecedeki ünlüye göre sonraki heceler:
 *            ilk hecede a/e  → sonraki ı/i YAZILMAZ, yuvarlak YAZILIR
 *            ilk hecede ı/i  → sonraki ı/i YAZILMAZ
 *            ilk hecede o/u  → sonraki o/u YAZILMAZ
 *            ilk hecede ö/ü  → sonraki ö/ü YAZILMAZ
 *            ilk hecede yuvarlak → sonraki ı/i YAZILIR
 *            ilk hecede düz      → sonraki yuvarlak YAZILIR
 *
 * Yani md. 7 tek cümleyle: sonraki hecenin ünlüsü, ilk hecenin
 * ünlüsüyle AYNI ÖBEKTEN ise yazılmaz. Öbekler: düz {a,e,ı,i},
 * kalın yuvarlak {o,u}, ince yuvarlak {ö,ü}.
 *
 * md. 22 — hece damgasından (𐰸 𐰜 𐰶 𐰱) sonra gelen ünlü bu kuralın
 * dışındadır, yazılır. Çağrı yerinde ele alınıyor.
 */
const unluObegi = (h) => {
  if (h === "o" || h === "u") return "yuvarlak-kalin";
  if (h === "ö" || h === "ü") return "yuvarlak-ince";
  return "duz";
};

function yazilirMi(h, unluSirasi, sonMu, ilkUnlu, adimlar) {
  if (sonMu) { adimlar.push(`söz sonundaki "${h}" yazılır (md. 8)`); return true; }
  if (unluSirasi <= 1) {
    if (h === "a" || h === "e") { adimlar.push(`söz başı/ortası "${h}" yazılmaz (md. 4)`); return false; }
    adimlar.push(`ilk hecedeki "${h}" yazılır (md. 6)`);
    return true;
  }
  if (h === "a" || h === "e") { adimlar.push(`söz ortası "${h}" yazılmaz (md. 4)`); return false; }
  if (unluObegi(h) === unluObegi(ilkUnlu)) {
    adimlar.push(`ilk hecedeki "${ilkUnlu}" ile aynı öbekten — "${h}" yazılmaz (md. 7)`);
    return false;
  }
  adimlar.push(`ilk hecedeki "${ilkUnlu}" ile farklı öbekten — "${h}" yazılır (md. 7)`);
  return true;
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
  // Denetleyen AÇIKÇA bir yazım yazdıysa (runik alanı dolu) o geçerlidir;
  // motorun ne ürettiğinden bağımsız. Mühür yalnız "yazım doğru" denip
  // hiçbir şey yazılmamış, ama motor sonradan başka bir şey üretmişse düşer.
  if (
    istisna?.gorulenRunik && istisna.sonuc === "dogru" && !istisna.runik &&
    istisna.gorulenRunik !== sonuc.runik
  ) {
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
  if (istisna?.runik) {
    // İnsanın yazdığı biçim asıldır — "düzeltildi" de olsa "doğru" da olsa.
    if (istisna.runik !== runik) insanDuzeltti++; else insanOnayli++;
    runik = istisna.runik;
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
    // Kabul edilen ikinci yazım(lar). Alıştırmada ÇELDİRİCİ OLARAK
    // KULLANILMAZ: iki şık da doğru olurdu.
    ...(istisna?.alternatifler?.length ? { alternatifler: istisna.alternatifler } : {}),
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
