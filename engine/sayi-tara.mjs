#!/usr/bin/env node
/**
 * Talat Tekin, Orhon Türkçesi Grameri (2003) — SAYILAR bölümü çıkarıcı.
 *
 * Kitapta §280-290, s. 128-135. Alt başlıklar:
 *   Asıl sayılar · Onluklararası Sayılar · Niteleme Yapıları ·
 *   Kesir Sayıları · Yaklaşıklık Sayıları · Sıra Sayıları ·
 *   Topluluk Sayıları · Katlama Sayıları · Belirsizlik Sayıları
 *
 * Neden kitaptan: projede "göktürkçe sayılar.txt" adlı bir çalışma yaprağı
 * var ama o KURS İÇERİĞİ — kaynak sayılmaz (dairesel olur) ve içinde
 * doğrulanabilir bir hata da taşıyor ("z: 𐰯"; 𐰯 p'dir, z 𐰔'dir).
 * Bu yüzden sayı bilgisi yalnız Tekin 2003'ten alınır.
 *
 * Runik katman korpustan (orhun-db) eşlenir, kitaptan DEĞİL: kitabın metin
 * katmanında tamgalar yok. Eşlenemeyen öğe runiksiz kalır ve alıştırmaya
 * giremez.
 *
 * Çıktı: docs/sayilar.json   (katman "kitap" — insan denetimi ayrı)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);

const satirlar = readFileSync(P("00_Kaynaklar/kitaplar/tekin_otg_2003.md"), "utf8").split("\n");

const BAS = satirlar.findIndex((s) => /^## Sayılar\s*$/.test(s));
const SON = satirlar.findIndex((s, i) => i > BAS && /^## Zarflar\s*$/.test(s));
if (BAS < 0 || SON < 0) {
  console.error("Sayılar bölümü bulunamadı (## Sayılar … ## Zarflar).");
  process.exit(1);
}

const SAYFA = /^# s\. (\d+) —/;
const BASLIK = /^## (.+?)\s*$/;
const MADDE_NO = /^\*\*(\d+)\.\*\*/;
// *gösterim* "anlam" (ATIF)   — atıf isteğe bağlı
const OGE = /\*([^*]+?)\*\s*"([^"]+?)"(?:\s*\(([^)]*)\))?/g;

// ── Korpus: runik eşleme ────────────────────────────────────────────────────
const KATLAMA = new Map(Object.entries({
  "ä": "e", "ā": "a", "ē": "e", "ī": "i", "ō": "o", "ū": "u",
  "ǖ": "ü", "ȫ": "ö", "ï": "ı", "ń": "ŋ", "ñ": "ŋ", "é": "e",
  "ḍ": "d", "ẓ": "z", "š": "ş", "č": "ç", "γ": "g",
}));
const sade = (x) =>
  [...String(x).toLocaleLowerCase("tr")]
    .map((c) => KATLAMA.get(c) ?? c)
    .join("")
    .replace(/[^a-zçğıöşüŋ]/g, "");

const korpus = new Map();
for (const k of JSON.parse(readFileSync(P("src/data/generated/kelimeler.json"), "utf8"))) {
  const a = sade(k.transkripsiyon);
  // Aynı okunuşun birden çok yazımı olabilir; en sık geçeni alınır.
  const onceki = korpus.get(a);
  if (!onceki || k.siklik > onceki.siklik) korpus.set(a, k);
}

// Tekin'in gösterimi ile korpus transkripsiyonu her zaman birebir değil:
// Tekin *eki*, korpus İKİ; Tekin *üküş*, korpus ÖKÜŞ yazıyor. Bu fark
// yazının kendisinden geliyor — Göktürk yazısı o ile u'yu, ö ile ü'yü
// AYIRMAZ, yani iki gösterim aynı tamga dizisini okuyor. Bu yüzden
// eşleme kademeli: önce birebir, olmazsa yazıda ayırt edilmeyen ünlüler
// katlanarak. Hangi kademede eşleştiği kayda yazılır; birebir olmayan
// eşleme alıştırmaya girmeden önce göz ister.
const KADEMELER = [
  { ad: "tam", harita: new Map() },
  { ad: "o~u/ö~ü", harita: new Map() },   // yazıda ayrılmaz
  { ad: "e~i/ı~i", harita: new Map() },   // gösterim farkı
];
const yuvarla = (x) => x.replace(/[ou]/g, "O").replace(/[öü]/g, "Ö");
const duzle = (x) => yuvarla(x).replace(/[eiı]/g, "E");
for (const [a, k] of korpus) {
  KADEMELER[0].harita.set(a, k);
  for (const [i, f] of [[1, yuvarla], [2, duzle]]) {
    const anahtar = f(a);
    const onceki = KADEMELER[i].harita.get(anahtar);
    // Belirsiz anahtar (iki ayrı sözcük aynı kalıba düşüyor) eşlenmez.
    if (onceki === undefined) KADEMELER[i].harita.set(anahtar, k);
    else if (onceki && onceki.transkripsiyon !== k.transkripsiyon) KADEMELER[i].harita.set(anahtar, null);
  }
}

/** "bir yegirmi" → { runik, kademe, eksik } — her sözcük ayrı eşlenir. */
function runikEsle(okunus) {
  const sozcukler = okunus.split(/\s+/).filter(Boolean);
  const parcalar = [];
  const eksik = [];
  let enKotu = 0;
  for (const s of sozcukler) {
    const temiz = sade(s);
    let bulundu = null;
    for (const [i, kademe] of KADEMELER.entries()) {
      const anahtar = i === 0 ? temiz : (i === 1 ? yuvarla(temiz) : duzle(temiz));
      const k = kademe.harita.get(anahtar);
      if (k) { bulundu = k; enKotu = Math.max(enKotu, i); break; }
    }
    if (bulundu) parcalar.push(bulundu.runik);
    else eksik.push(s);
  }
  if (eksik.length) return { runik: null, kademe: null, eksik };
  return { runik: parcalar.join(" : "), kademe: KADEMELER[enKotu].ad, eksik: [] };
}

// ── Tarama ──────────────────────────────────────────────────────────────────
const bolumler = [];
let bolum = null;
let sayfa = 128;
let maddeNo = null;

for (let i = BAS; i < SON; i++) {
  const satir = satirlar[i];

  const s = satir.match(SAYFA);
  if (s) { sayfa = Number(s[1]); continue; }

  const b = satir.match(BASLIK);
  if (b && b[1] !== "Sayılar") {
    bolum = { ad: b[1], maddeler: [], ogeler: [] };
    bolumler.push(bolum);
    continue;
  }
  if (!bolum) continue;

  const m = satir.match(MADDE_NO);
  if (m) {
    maddeNo = Number(m[1]);
    if (!bolum.maddeler.includes(maddeNo)) bolum.maddeler.push(maddeNo);
  }

  // §280 listesi tek satırda ve tırnaksız: "*bir, eki, üç, …* (BK G 1)"
  if (bolum.ad === "Asıl sayılar" && /^\*bir, eki/.test(satir)) {
    const [, liste, atif] = satir.match(/^\*(.+?)\*\s*\(([^)]*)\)/) ?? [];
    if (liste) {
      const DEGER = { bir: 1, eki: 2, üç: 3, tört: 4, beş: 5, biş: 5, altı: 6,
        yeti: 7, yiti: 7, säkiz: 8, tokuz: 9, on: 10, yegirmi: 20, yigirmi: 20,
        otuz: 30, kırk: 40, älig: 50, altmış: 60, yetmiş: 70,
        "säkiz on": 80, "tokuz on": 90, yüz: 100, bıŋ: 1000, biŋ: 1000,
        miŋ: 1000, "bir tümän": 10000 };
      for (const ham of liste.split(/,\s*/)) {
        for (const bicim of ham.split(/\s*~\s*/)) {
          const okunus = bicim.trim();
          const deger = DEGER[okunus];
          if (deger === undefined) continue;
          bolum.ogeler.push({ okunus, deger, anlam: String(deger), atif, sayfa, madde: maddeNo, tip: "sayı" });
        }
      }
    }
    continue;
  }

  // §284'te tek kesir sayısı tırnaksız tanımlanıyor:
  //   "...anlamındaki *sıŋar* sözcüğüdür"
  const tanim = satir.match(/sayısı (.+?) anlamındaki \*([^*]+)\* sözcüğüdür/);
  if (tanim) {
    bolum.ogeler.push({
      okunus: tanim[2].trim(), anlam: tanim[1].trim(), atif: null,
      sayfa, madde: maddeNo, tip: "sözcük",
    });
    continue;
  }

  // Bir satırda tırnaktan önce birden çok *…* varsa hangisinin karşılığı
  // olduğu belirsiz: "*ekin* (*ekinti* yerine) *sü* \"ikinci ordu\"".
  // Böyle öğeler şüpheli işaretlenir, alıştırmaya alınmaz.
  // Önek, bir ÖNCEKİ öğenin bittiği yerden başlar. Satır başından
  // ölçmek liste satırlarını bozuyordu: "*üçünç* \"üçüncü\", *törtünç*
  // \"dördüncü\"" dizisinde ikinci öğe de şüpheli sayılıyordu.
  let oncekiSon = 0;
  for (const esl of satir.matchAll(OGE)) {
    const [tam, gosterim, anlam, atif] = esl;
    const oncesi = satir.slice(oncekiSon, esl.index);
    oncekiSon = esl.index + tam.length;
    const okunus = gosterim.trim();
    // Cümle örnekleri (uzun) sayı öğesi değil; kural metninde kalsın.
    if (okunus.split(/\s+/).length > 4) continue;
    // Köken notu: "*kat-* \"katmak\"", "(< *il+ki*)" — sayı öğesi değil.
    if (/-$/.test(okunus) || /\+/.test(okunus) || /\(<\s*$|<\s*\\?\*?$/.test(oncesi.trim())) continue;
    const deger = sayiDegeri(anlam);
    // Madde numarası ("**287.**") yıldızlı sayılmaz; iki nokta ya da
    // virgülle biten önek liste girişidir, belirsizlik değildir.
    const onekTemiz = oncesi.replace(/\*\*\d+\.\*\*/g, "");
    const supheli = /\*[^*]+\*/.test(onekTemiz) && !/[:,;]\s*$/.test(onekTemiz);
    bolum.ogeler.push({
      okunus,
      ...(deger !== null ? { deger } : {}),
      anlam: anlam.trim(),
      atif: (atif ?? "").trim() || null,
      sayfa,
      madde: maddeNo,
      tip: deger !== null ? "sayı" : (okunus.split(/\s+/).length <= 2 ? "sözcük" : "örnek"),
      ...(supheli ? { supheli: true } : {}),
    });
  }
}

/** "11" → 11 · "10,000" → 10000 · "yirmi üç şehir" → null */
function sayiDegeri(anlam) {
  const t = anlam.trim().replace(/[.,](?=\d{3}\b)/g, "");
  return /^\d+$/.test(t) ? Number(t) : null;
}

// Yineleyenleri temizle (aynı öğe birkaç kez örneklenmiş olabilir).
for (const b of bolumler) {
  const gorulen = new Map();
  for (const o of b.ogeler) {
    const anahtar = `${sade(o.okunus)}|${o.anlam}`;
    if (!gorulen.has(anahtar)) gorulen.set(anahtar, o);
  }
  b.ogeler = [...gorulen.values()];
  for (const o of b.ogeler) {
    const r = runikEsle(o.okunus);
    o.runik = r.runik;
    o.runikEslesme = r.kademe;
    if (r.eksik.length) o.runikEksik = r.eksik;
  }
}

const cikti = {
  aciklama:
    "Orhon Türkçesinde sayılar. Okunuş, anlam ve atıflar Talat Tekin, " +
    "Orhon Türkçesi Grameri (2003) §280-290, s. 128-135'ten alınmıştır. " +
    "Runik katman proje korpusundan (orhun-db) eşlenmiştir; kitabın metin " +
    "katmanında tamga yoktur. Kurs içeriği kaynak olarak kullanılmamıştır.",
  kaynak: "Tekin 2003, §280-290, s. 128-135",
  katman: "kitap",
  denetlendi: false,
  bolumler,
};

writeFileSync(P("docs/sayilar.json"), JSON.stringify(cikti, null, 2) + "\n", "utf8");

// Uygulamaya giden alt küme: yalnız runiği olan, şüphesiz, cümle olmayan
// öğeler. Cümle ve cümlecik ANLAMI sorulmaz kuralı gereği "örnek" tipi
// dışarıda; onlar kural metninde kalır.
const uygulama = {
  uyari:
    "Sayı öğeleri Tekin 2003 §280-290'dan; runik katman korpustan eşlendi. " +
    "Katman \"kitap\" — insan denetiminden geçmedi.",
  kaynak: cikti.kaynak,
  katman: "kitap",
  ogeler: bolumler.flatMap((b) =>
    b.ogeler
      .filter((o) => o.runik && !o.supheli && o.tip !== "örnek")
      .map((o) => ({
        id: `sayi-${sade(o.okunus).replace(/\s+/g, "-")}-${o.deger ?? sade(o.anlam).slice(0, 8)}`,
        bolum: b.ad,
        okunus: o.okunus,
        ...(o.deger !== undefined ? { deger: o.deger } : {}),
        anlam: o.anlam,
        runik: o.runik,
        runikEslesme: o.runikEslesme,
        atif: o.atif,
        sayfa: o.sayfa,
        madde: o.madde,
        tip: o.tip,
      }))
  ),
};
// Aynı id iki kez gelmesin (beş ~ biş gibi değişkeler aynı değere düşer).
const gorulenId = new Set();
uygulama.ogeler = uygulama.ogeler.filter((o) => !gorulenId.has(o.id) && gorulenId.add(o.id));
writeFileSync(P("src/data/generated/sayilar.json"), JSON.stringify(uygulama, null, 2) + "\n", "utf8");

const toplam = bolumler.reduce((n, b) => n + b.ogeler.length, 0);
const runikli = bolumler.reduce((n, b) => n + b.ogeler.filter((o) => o.runik).length, 0);
console.log(`${bolumler.length} bölüm · ${toplam} öğe → docs/sayilar.json`);
for (const b of bolumler) {
  const r = b.ogeler.filter((o) => o.runik).length;
  console.log(`  ${b.ad.padEnd(22)} §${b.maddeler.join(",").padEnd(7)} ${String(b.ogeler.length).padStart(3)} öğe · ${r} runik`);
}
console.log(`runik eşlenen: ${runikli}/${toplam}`);
const tipler = {};
for (const b of bolumler) for (const o of b.ogeler) tipler[o.tip ?? "?"] = (tipler[o.tip ?? "?"] ?? 0) + 1;
console.log(`tip: ${Object.entries(tipler).map(([t, n]) => `${t} ${n}`).join(" · ")}`);
const alistirmalik = bolumler.flatMap((b) => b.ogeler).filter((o) => o.runik && !o.supheli && o.tip !== "örnek");
console.log(`alıştırmaya uygun: ${alistirmalik.length} (runikli, şüphesiz, cümle değil)`);
