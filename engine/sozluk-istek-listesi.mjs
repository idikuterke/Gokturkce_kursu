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
// Tekin'in gösterimi uzunluk ve ön/art için ayrı işaretler kullanıyor:
// ä (ön e), ā ē ī ō ū (uzun), ń ñ (ny). Bunları SİLMEK sözcükleri
// birbirine karıştırıyordu: "äbir-" → "bir" olup "bir" maddesiyle
// çakışıyor, "bir" belirsiz sayılıp ön dolgu düşüyordu.
// Doğrusu silmek değil KATLAMAK.
//
// ŋ'yi n'ye katlamak HATALIYDI. Orhun Türkçesinde ŋ ayrı bir sestir ve
// ayrı sözcükler kurar: kaŋ "baba" / kan "kan, han", küŋ "cariye" /
// kün "gün", oŋ / on. Katlayınca "kaŋım" sözlükteki "kanı" + m ile
// eşleşiyor, "babam" yerine "hani, nerede" önerisi çıkıyordu.
// Doğrusu ń/ñ/ŋ üçlüsünü tek bir ŋ'de toplamak, n'ye karıştırmamak.
const KATLAMA = new Map(Object.entries({
  "ä": "e", "ā": "a", "ē": "e", "ī": "i", "ō": "o", "ū": "u",
  "ǖ": "ü", "ȫ": "ö", "ï": "ı", "ń": "ŋ", "ñ": "ŋ", "é": "e",
  "ḍ": "d", "ẓ": "z", "š": "ş", "č": "ç", "γ": "g",
}));
const sadelestir = (x) =>
  [...x.toLocaleLowerCase("tr")]
    .map((c) => KATLAMA.get(c) ?? c)
    .join("")
    .replace(/[^a-zçğıöşüŋ]/g, "");

let ataSozluk = [];
let ataEkler = [];
let tekinSozluk = [];
try {
  ataSozluk = JSON.parse(fs.readFileSync(P("docs/ata-sozluk.json"), "utf8")).kelimeler ?? [];
  ataEkler = JSON.parse(fs.readFileSync(P("docs/ata-ekler.json"), "utf8")).ekler ?? [];
} catch { /* tarama yapılmamışsa ön dolgu olmaz */ }
try {
  tekinSozluk = JSON.parse(fs.readFileSync(P("docs/tekin-sozluk.json"), "utf8")).kelimeler ?? [];
} catch { /* Tekin sözlüğü taranmamışsa yalnız Ata kullanılır */ }

// Sözlük sentezi: Tekin 2003 + Tekin 1998 + Ata 2011 + Tanyeri birleşimi.
// Çıkarıcı proje/kurs kaynaklı anlamları zaten ayıklıyor (dairesel olurdu).
let sentez = [];
try {
  sentez = JSON.parse(fs.readFileSync(P("docs/sozluk-sentez.json"), "utf8")).kelimeler ?? [];
} catch { /* sentez taranmamışsa tek tek kaynaklar kullanılır */ }

// KAYNAK SIRASI. Hepsi katman "kitap"; hiçbiri denetimsiz kullanılmaz.
// Proje kendi üretimini (çekirdek sözlük, content/sozluk.json) kaynak
// GÖSTERMEZ — dairesel olur. Sentez çıkarıcısı bunları zaten eliyor.
//
// Sentez, Tekin 2003 ve Ata 2011'i ZATEN İÇERİR. Üçünü birden yüklemek
// aynı sözcüğü iki ayrı kayıt yapıyor; anlam metinleri birebir aynı
// olmadığı için anahtar "belirsiz" sayılıp ön dolgu düşüyordu
// (241 → 122). Sentez varsa tek kaynak odur.
const SOZLUK_KAYNAKLARI = sentez.length ? sentez.map((k) => ({
    kelime: k.kelime,
    anlam: k.anlamlar[0].anlam,
    kaynak: k.anlamlar[0].kaynak,
    eser: k.anlamlar[0].kaynak.split(",")[0].trim(),
    ...(k.anlamlar.length > 1
      ? { digerKaynaklar: k.anlamlar.slice(1).map((a) => `${a.anlam} [${a.kaynak}]`) }
      : {}),
})) : [
  ...tekinSozluk.map((k) => ({ ...k, eser: "Tekin 2003" })),
  ...ataSozluk.map((k) => ({ ...k, eser: "Ata 2011" })),
];

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

// Ata'nın listesi eki yalnız kitaptaki ÖRNEK biçimiyle veriyor: "-dım"
// var, "-dum" yok; "+u)g" var, "+ı)g" yok. Oysa bunlar aynı ekin ünlü
// uyumu ve ünsüz uyumu değişkeleri. Eksik değişke yüzünden "bodunıg"
// çözümlenemiyor, "bodunug" çözümleniyordu.
// Bu yüzden her eki kapalı iki dönüşümle genişletiyoruz:
//   ünlü uyumu   a~e · ı~i~u~ü
//   ünsüz uyumu  ek başındaki d~t, g~k, b~p
// Uydurma değil: aynı biçimbirimin dildeki düzenli değişkeleri.
const UYUM = [["a", "e"], ["ı", "i", "u", "ü"]];
const BAS_UYUM = { d: "t", t: "d", g: "k", k: "g", b: "p", p: "b" };
function degiskeler(ek) {
  let kume = [""];
  for (const harf of ek) {
    const oymak = UYUM.find((u) => u.includes(harf));
    const seçenek = oymak ?? [harf];
    kume = kume.flatMap((on) => seçenek.map((h) => on + h));
  }
  const esi = BAS_UYUM[ek[0]];
  return esi ? [...kume, ...kume.map((x) => esi + x.slice(1))] : kume;
}
const ekKumesi = (suz) => {
  const k = new Set();
  for (const e of ataEkler.filter(suz)) for (const d of degiskeler(sadelestir(e.ek))) if (d) k.add(d);
  return k;
};
const isimEki = (e) => e.ek.startsWith("+");
const fiilEki = (e) => e.ek.startsWith("-");
const ISIM_EKI = ekKumesi((e) => isimEki(e) && !yapimMi(e.islev));
const FIIL_EKI = ekKumesi((e) => fiilEki(e) && !yapimMi(e.islev));
// Yapım ve çekim eklerinin tamamı: "bu biçim bir kök + ek mi" sorusu
// için kullanılır (ön dolgu için değil).
const ISIM_EKI_TUM = ekKumesi(isimEki);
const FIIL_EKI_TUM = ekKumesi(fiilEki);

/** Bir maddenin arama anahtarları. bir(i) hem "bir" hem "biri" olabilir. */
function anahtarlar(kelime) {
  // "yōk, yok" gibi varyantlı başsözcükler ayrı ayrı aranabilmeli.
  const cikti = [];
  for (const parca of String(kelime).split(/\s*,\s*/)) {
    const govde = parca.trim().replace(/-$/, "");
    if (!govde) continue;
    cikti.push(sadelestir(govde.replace(/\([^)]*\)/g, "")));
    cikti.push(sadelestir(govde));
  }
  return [...new Set(cikti)].filter(Boolean);
}

// anahtar → maddeler. Birden çok FARKLI anlam varsa ön dolgu yapılmaz:
// bir (sayı) / bir- (vermek) / bir(i) (güney) ayırt edilemez, tahmin etmeyiz.
const ataHarita = new Map();
for (const k of SOZLUK_KAYNAKLARI) {
  const fiilMi = k.kelime.trim().endsWith("-");
  for (const a of anahtarlar(k.kelime)) {
    if (!ataHarita.has(a)) ataHarita.set(a, []);
    ataHarita.get(a).push({ ...k, fiilMi, anahtar: a });
  }
}
// İki kaynak aynı sözcüğü farklı kelimelerle açıklayabilir; bu belirsizlik
// değildir. Belirsizlik, AYNI eserde aynı anahtara birden çok farklı madde
// düşmesidir (bir / bir- / bir(i) gibi).
// Birden çok kitap aynı sözcüğü verince en yetkili olan seçilir.
// Örnek: "yok" maddesi Tekin 1998'de "olmak, azalmak" (kaynakta hatalı
// görünüyor), Tekin 2003'te "yok". Sıralama olmadan ilk gelen kazanıyordu.
const ESER_SIRASI = ["Tekin 2003", "Tekin 1998", "Ata 2011", "Tanyeri"];
const eserAgirligi = (e) => {
  const i = ESER_SIRASI.findIndex((x) => String(e ?? "").startsWith(x));
  return i < 0 ? ESER_SIRASI.length : i;
};
const enYetkili = (liste) =>
  [...liste].sort((a, b) => eserAgirligi(a.eser) - eserAgirligi(b.eser))[0];

const tekAnlam = (liste) => {
  const esereGore = new Map();
  for (const x of liste) {
    if (!esereGore.has(x.eser)) esereGore.set(x.eser, new Set());
    esereGore.get(x.eser).add(x.anlam);
  }
  return [...esereGore.values()].every((s) => s.size === 1);
};

const ataKokler = [...ataHarita.keys()].sort((a, b) => b.length - a.length);

function ataEslesmesi(transkripsiyon) {
  const w = sadelestir(transkripsiyon);
  if (!w) return null;

  const tam = ataHarita.get(w);
  if (tam) {
    if (!tekAnlam(tam)) return null;                 // belirsiz → ön dolgu yok
    return { ...enYetkili(tam), eslesme: "tam" };
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
    return { ...enYetkili(uyan), eslesme: "kök", kok, ek: kalan };
  }
  return null;
}


// ── Ekli biçimler: kuyruğa GİRMEZ ───────────────────────────────────────────
// Kullanıcının saptaması: "sözlüklerde var olmayanların neredeyse tamamı ek
// almış sözcükler". Doğru: 432 maddenin yarısı bodun+ıg, kagan+ka, kel+ti
// türünden çekimli biçim. Kökün anlamı sorulduktan sonra bunları tek tek
// sormak zaman kaybı; üstelik aynı anlam alıştırmada tekrara düşüyor.
//
// Ölçüt sözlüğün kendisi: bir biçim sözlükte BAŞSÖZCÜK ise sözlükbirimdir,
// yapım ekiyle kurulmuş olsa bile kalır (bilig, birle, tapa böyle korunur).
// Başsözcük değilse ve bilinen bir kök + bilinen bir eke ayrılıyorsa
// dilbilgisel biçimdir, kuyruktan çıkar.
//
// Çıkanlar silinmez: docs/sozluk-cekimli-bicimler.json'a çözümlemesiyle
// yazılır. Yanlış ayrılan bir biçim orada görülüp geri alınabilir.
// Tek ek yetmiyor: kagan+ı+ŋa, sü+si+n, olur+ma+dım gibi iki üç ekli
// biçimler korpusta bol. Bu yüzden ekler sondan soyularak, en uzun kök
// (en az ek) önce denenerek çözümleniyor. Kök sözlükte başsözcük olmak
// zorunda; uydurma kök kabul edilmez.
const TUM_EKLER = [...new Set([...ISIM_EKI_TUM, ...FIIL_EKI_TUM])].sort((a, b) => b.length - a.length);
const EN_COK_EK = 3;

function cozumle(transkripsiyon) {
  const w = sadelestir(transkripsiyon);
  if (!w || ataHarita.has(w)) return null;      // başsözcük → sözlükbirim

  // adim = kaç ek soyulacak. Az ekli çözüm her zaman tercih edilir.
  for (let adim = 1; adim <= EN_COK_EK; adim++) {
    const bulunan = soy(w, adim);
    if (bulunan) return bulunan;
  }
  return null;
}

/** w'yi tam `adim` ek soyarak bir başsözcüğe indirmeye çalışır. */
function soy(w, adim, sonrakiEkler = []) {
  for (const ek of TUM_EKLER) {
    if (!w.endsWith(ek) || w.length - ek.length < 2) continue;
    const govde = w.slice(0, w.length - ek.length);
    const ekler = [ek, ...sonrakiEkler];
    if (adim === 1) {
      const adaylar = ataHarita.get(govde);
      if (!adaylar) continue;
      // Köke BİTİŞİK ek, kökün türüne uymalı: isim köküne fiil çekimi gelmez.
      const uyan = adaylar.some((a) => (a.fiilMi ? FIIL_EKI_TUM : ISIM_EKI_TUM).has(ek));
      if (!uyan) continue;
      const cekim = adaylar.some((a) => (a.fiilMi ? FIIL_EKI : ISIM_EKI).has(ek));
      // Çok ekli çözümlemede köke bitişik ek ÇEKİM olmalı. Yapım ekiyle
      // başlayan uzun zincirler sözcüğü parçalıyordu: öküş "çok" →
      // ök+ü+ş, yaguru "yakın" → yag+u+ru, Toŋra → toŋ+r+a. Oysa
      // dilbilgisel biçim zinciri (kagan+ı+ŋa, olur+ma+dım) hep
      // çekimle başlar.
      if (ekler.length > 1 && !cekim) continue;
      return { kok: govde, ek: ekler.join(" + "), tip: cekim ? "çekim" : "yapım" };
    }
    const alt = soy(govde, adim - 1, ekler);
    if (alt) return alt;
  }
  return null;
}

// Aynı sözcüğün yazım değişkeleri (TÜRK/TÜRK, ÖKÜŞ/ÖKüŞ, aTIN/ATIN) ayrı
// kayıt olarak geliyordu: 432 kaydın 29'u yinelemeydi, denetleyen aynı
// soruyu iki kez görüyordu. Anahtar büyük/küçük harf farkını yok sayar
// ama ŋ ile n'yi AYIRIR (küŋ "cariye" ≠ kün "gün").
const yinelemesiz = new Map();
for (const k of kelimeler.filter(
  (k) => k.guvenilir && k.siklik >= esik && !mevcut.has(normal(k.transkripsiyon))
)) {
  const anahtar = sadelestir(k.transkripsiyon);
  const onceki = yinelemesiz.get(anahtar);
  if (!onceki || k.siklik > onceki.siklik) yinelemesiz.set(anahtar, k);
}

// Hangi kökler projede ZATEN kayıtlı: uygulamanın sözlüğü + denetimden
// geçip kaynak veriye yazılanlar.
//
// Denetlenmiş sözcük kuyrukta DURMAMALI. src/data/sozlukData.ts elle
// yazılmış çekirdek sözlüktü; denetimden geçenler oraya değil
// 05_Kaynak_DB/sozluk-anlamlar.json'a yazılıyor. O dosya okunmadığı için
// onaylanan 48 sözcük kuyrukta kalıyor, tarayıcı geçmişi silinince
// yeniden soruluyordu.
const kayitliKokler = new Set([...mevcut].map(sadelestir));
const denetlenmis = new Set();
try {
  const kaynak = JSON.parse(fs.readFileSync(P("05_Kaynak_DB/sozluk-anlamlar.json"), "utf8"));
  const liste = Array.isArray(kaynak) ? kaynak : kaynak.kelimeler ?? [];
  for (const k of liste) {
    if (!k.anlam) continue;
    kayitliKokler.add(sadelestir(k.transkripsiyon || k.id));
    if (k.denetleyen === "insan") denetlenmis.add(sadelestir(k.transkripsiyon || k.id));
  }
} catch { /* henüz denetim uygulanmamış */ }

// Ekli biçimleri köke göre öbekle.
const obekler = new Map();
const yalin = [];
for (const k of yinelemesiz.values()) {
  const c = cozumle(k.transkripsiyon);
  if (!c) { yalin.push(k); continue; }
  if (!obekler.has(c.kok)) obekler.set(c.kok, []);
  obekler.get(c.kok).push({ kelime: k, coz: c });
}

// Kök kayıtlıysa ekli biçimlerin tamamı düşer — "bodun yeterli".
// Kök HİÇBİR YERDE yoksa biçimlerin hepsini atmak sözcüğü tümden
// kaybettirir: korpus "kel-" fiilini yalın hâlde hiç geçirmiyor, yalnız
// kelti / kelip / kelmedi diye geçiyor. O yüzden öbekten EN SIK biçim
// temsilci olarak kuyrukta kalır, gerisi düşer: 10 soru yerine 1.
// Kök korpusta yalın hâlde de geçiyorsa (bodun, kagan) zaten kuyrukta:
// ekli biçimine ayrıca gerek yok.
const yalinKokler = new Set(yalin.map((k) => sadelestir(k.transkripsiyon)));

const cekimliler = [];
const temsilciler = new Set();
for (const [kok, uyeler] of obekler) {
  uyeler.sort((a, b) => b.kelime.siklik - a.kelime.siklik);
  const kokVar = kayitliKokler.has(kok) || yalinKokler.has(kok);
  for (const [sira, u] of uyeler.entries()) {
    if (!kokVar && sira === 0) { temsilciler.add(u.kelime); continue; }
    const kokAnlami = enYetkili(ataHarita.get(kok));
    cekimliler.push({
      transcription: u.kelime.transkripsiyon,
      runic: u.kelime.runik,
      frequency: u.kelime.siklik,
      cozumleme: `${kok} + ${u.coz.ek}`,
      ekTipi: u.coz.tip,
      kokAnlami: kokAnlami?.anlam ?? null,
      kaynak: kokAnlami?.kaynak ?? null,
      dusmeSebebi: kokVar ? "kök zaten kayıtlı" : `kök "${kok}" için ${uyeler[0].kelime.transkripsiyon} soruldu`,
    });
  }
}
const istek = [...yalin, ...temsilciler]
  .filter((k) => !denetlenmis.has(sadelestir(k.transkripsiyon)))
  .sort((a, b) => b.siklik - a.siklik);
const kuyruk = istek
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
            ...(a.digerKaynaklar?.length ? { digerKaynaklar: a.digerKaynaklar } : {}),
            source: a.kaynak,
            eser: a.eser,
            eslesme: a.eslesme,
            katman: "kitap"
          }
        };
      })()
    };
  });

fs.writeFileSync(P("docs/sozluk-anlam-bekleyenler.json"), JSON.stringify(kuyruk, null, 2) + "\n", "utf8");
cekimliler.sort((a, b) => b.frequency - a.frequency);
fs.writeFileSync(
  P("docs/sozluk-cekimli-bicimler.json"),
  JSON.stringify(
    {
      aciklama:
        "Kuyruğa alınmayan biçimler: sözlükte başsözcük değil, bilinen bir " +
        "kök + bilinen bir eke ayrılıyor. Kökün anlamı yeterli. " +
        "Yanlış ayrılmış bir biçim görürsen söyle, kuyruğa geri alınır.",
      sayi: cekimliler.length,
      bicimler: cekimliler,
    },
    null,
    2
  ) + "\n",
  "utf8"
);

const onerili = kuyruk.filter((x) => x.oneri);
const tamSayi = onerili.filter((x) => x.oneri.eslesme === "tam").length;
const cekimSayi = cekimliler.filter((x) => x.ekTipi === "çekim").length;
console.log(`sıklık >= ${esik} | ${kuyruk.length} kelime → docs/sozluk-anlam-bekleyenler.json`);
console.log(
  `ekli biçim     : ${cekimliler.length} kayıt kuyruk dışı ` +
    `(${cekimSayi} çekim, ${cekimliler.length - cekimSayi} yapım) → docs/sozluk-cekimli-bicimler.json`
);
const esereGore = {};
for (const x of onerili) esereGore[x.oneri.eser] = (esereGore[x.oneri.eser] ?? 0) + 1;
console.log(
  `ön dolgu       : ${onerili.length} / ${kuyruk.length} kelimede ` +
    `(${tamSayi} tam, ${onerili.length - tamSayi} kök+ek)  — katman "kitap"`
);
console.log(`  kaynağa göre : ${Object.entries(esereGore).map(([e, n]) => `${e} ${n}`).join(" · ")}`);
