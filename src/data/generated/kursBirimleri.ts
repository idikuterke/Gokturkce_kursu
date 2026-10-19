import type { Unit, Lesson, Exercise } from '../../types';

interface KursBirimi {
  id: string;
  kademe: 'tamlama' | 'cümlecik' | 'paragraf';
  yazit: string;
  dizeler: string[];
  kelimeSayisi: number;
  runik: string;
  okunus: string;
  ceviri: string;
  kaynaklar: string[];
  katman: string;
  hizalama: string;
  /** Kitabın okuyuşu ile korpus transkripsiyonunun ayrıldığı sözcükler. */
  okuyusFarklari?: { kitap?: string; korpus?: string; not?: string }[];
}

/**
 * DERECELİ KURS BİRİMLERİ — öğrenme yolunun SONU.
 *
 * Tamlama (2-4 kelime) → cümlecik (4-10) → paragraf (10+). Tek sözcük
 * okumayı bitiren öğrenen buradan gerçek yazıt pasajlarına geçer.
 *
 * Okunuş ve çeviri Tekin 1998'den (katman "kitap", sayfa atıflı); tamga
 * katmanı korpustan kurulup doğrulandı.
 *
 * ANLAM SORULMAZ. Cümle ve cümlecik düzeyinde yalnız OKUNUŞ sorulur —
 * öğrenen Eski Türkçe gramerini bilmediği için cümle anlamı sormak
 * öğretmiyor, tahmine zorluyor. Türkçe karşılık cevaptan sonra bilgi
 * olarak gösterilir.
 */

const karistir = <T,>(d: T[]): T[] => {
  const k = [...d];
  for (let i = k.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [k[i], k[j]] = [k[j], k[i]];
  }
  return k;
};

const atif = (b: KursBirimi): string =>
  `${b.dizeler.join(", ")} · ${b.kaynaklar[0] ?? "Tekin 1998"}`;

/**
 * Okuyuş farkı notu.
 *
 * Aynı tamga dizisini iki yayım farklı okuyabiliyor: Tekin 1998
 * *bolmış*, korpus *bolmuş*. Sebep yazının kendisi — ünlülerin çoğu
 * taşa yazılmıyor, hangi ünlüyle okunacağı yayımcının kararı.
 * Bunu saklamak yerine öğretiyoruz: öğrenci yazıt okumanın gerçeğini
 * baştan görsün.
 */
function okuyusNotu(b: KursBirimi): string {
  const f = b.okuyusFarklari ?? [];
  if (!f.length) return '';
  const sinirFarki = f.find((x) => x.not);
  if (sinirFarki) {
    return (
      '  —  Okuyuş farkı: kitap ile korpus sözcüğü aynı yerde bölmüyor ' +
      '(örn. kül tigin ~ költigin). Tamgalar aynı; boşluk taşta yazmıyor.'
    );
  }
  const liste = f
    .filter((x) => x.kitap && x.korpus)
    .map((x) => `${x.kitap} ~ ${x.korpus}`)
    .join(', ');
  if (!liste) return '';
  return (
    `  —  Okuyuş farkı (${liste}): tamgalar aynı, okuyuş farklı. ` +
    'Ünlülerin çoğu taşa yazılmadığı için aynı satır iki yayımda farklı ' +
    'okunabiliyor; burada soldaki Tekin 1998, sağdaki korpus okuyuşu.'
  );
}

/**
 * Doğru okunuşu bozarak aynı uzunlukta çeldirici üretir.
 *
 * Uzun pasajlarda havuzda yeterli eş uzunlukta başka pasaj yok. Rastgele
 * kısa şık koymak soruyu okumadan çözülür hâle getiriyordu; bunun yerine
 * doğru cevabın iki sözcüğü başka yazıt sözcükleriyle değiştirilir.
 * Şıklar aynı uzunlukta olur, ayrım ancak okuyarak yapılır.
 */
function bozarakUret(b: KursBirimi, havuz: KursBirimi[]): string[] {
  const kendi = b.okunus.split(/\s+/);
  const baskaSozcukler = [
    ...new Set(
      havuz
        .filter((x) => x.id !== b.id)
        .flatMap((x) => x.okunus.split(/\s+/))
        .filter((w) => w.length > 2 && !kendi.includes(w))
    ),
  ];
  if (baskaSozcukler.length < 2 || kendi.length < 4) return [];
  const uretilen = new Set<string>();
  for (let deneme = 0; deneme < 40 && uretilen.size < 3; deneme++) {
    const kopya = [...kendi];
    const kacTane = 2;
    for (let n = 0; n < kacTane; n++) {
      const yer = Math.floor(Math.random() * kopya.length);
      kopya[yer] = baskaSozcukler[Math.floor(Math.random() * baskaSozcukler.length)];
    }
    const metin = kopya.join(" ");
    if (metin !== b.okunus) uretilen.add(metin);
  }
  return [...uretilen];
}

/** Okunuş sorusu: tamgalar verilir, doğru okunuş seçilir. */
function okunusSorusu(b: KursBirimi, havuz: KursBirimi[]): Exercise | null {
  // Çeldiriciler aynı kademeden ve yakın uzunluktan: uzunluğa bakarak
  // bedava elenen şık olmasın.
  const uygun = (tolerans: number) =>
    havuz
      .filter(
        (x) =>
          x.id !== b.id &&
          x.okunus !== b.okunus &&
          Math.abs(x.kelimeSayisi - b.kelimeSayisi) <= tolerans
      )
      .map((x) => x.okunus);
  // Paragraf az sayıda; dar tolerans üç çeldirici bulamıyor ve soru hiç
  // üretilmiyordu. Dar başla, yetmezse biraz genişlet.
  let secenekler = [...new Set(uygun(Math.max(2, b.kelimeSayisi * 0.4)))];
  // Havuzda eş uzunlukta pasaj yoksa havuzu GENİŞLETME: doğru cevabı
  // bozarak aynı uzunlukta çeldirici üret. 20 sözcüklük bir pasajın
  // yanına 4 sözcüklük şık koymak soruyu okumadan çözdürüyordu — uzun
  // olan hep doğru oluyordu.
  if (secenekler.length < 3) secenekler = bozarakUret(b, havuz);
  if (secenekler.length < 3) secenekler = [...new Set(uygun(Infinity))];
  if (secenekler.length < 3) return null;
  return {
    id: `${b.id}-okunus`,
    type: 'choice',
    prompt: 'Bu pasajın okunuşu hangisidir?',
    runePrompt: b.runik,
    options: karistir([b.okunus, ...karistir(secenekler).slice(0, 3)]),
    correctAnswer: b.okunus,
    explanation: `${atif(b)}. Anlamı: ${b.ceviri}${okuyusNotu(b)}`,
  };
}

/** Eksik sözcük: pasajdan bir sözcük çıkarılır, tamgası sorulur. */
function eksikSozcukSorusu(b: KursBirimi, havuz: KursBirimi[]): Exercise | null {
  const sozcukler = b.runik.split(' : ').filter(Boolean);
  const okunuslar = b.okunus.split(/\s+/);
  if (sozcukler.length < 3 || sozcukler.length !== okunuslar.length) return null;

  // Baştaki ve sondaki sözcük çıkarılmaz: bağlam kalsın.
  const yer = 1 + Math.floor(Math.random() * (sozcukler.length - 2));
  const dogru = sozcukler[yer];
  // Boşluk işareti olarak □ : ␣ (U+2423) çoğu yedek yazı tipinde yok,
  // kutucuk yerine tofu çıkıyordu.
  const bosluklu = sozcukler.map((s, i) => (i === yer ? '□' : s)).join(' : ');

  const digerleri = [
    ...new Set(
      havuz
        .flatMap((x) => x.runik.split(' : '))
        .filter((x) => x && x !== dogru && Math.abs([...x].length - [...dogru].length) <= 1)
    ),
  ];
  if (digerleri.length < 3) return null;

  return {
    id: `${b.id}-eksik`,
    type: 'choice',
    prompt: `Boşluğa hangi sözcük gelir? (okunuşu: ${okunuslar[yer]})`,
    runePrompt: bosluklu,
    options: karistir([dogru, ...karistir(digerleri).slice(0, 3)]),
    correctAnswer: dogru,
    explanation:
      `${okunuslar[yer]} — ${dogru}. Pasajın tamamı: ${b.okunus}. ` +
      `Anlamı: ${b.ceviri}  ·  ${atif(b)}${okuyusNotu(b)}`,
  };
}

const KADEMELER: { kademe: KursBirimi['kademe']; baslik: string; altbaslik: string; aciklama: string }[] = [
  {
    kademe: 'tamlama',
    baslik: 'Yazıttan Tamlamalar',
    altbaslik: 'İki üç sözcüklük gerçek pasajlar',
    aciklama: 'Köl Tigin, Bilge Kağan ve Tonyukuk yazıtlarından kısa tamlamalar — Tekin 1998',
  },
  {
    kademe: 'cümlecik',
    baslik: 'Yazıttan Cümlecikler',
    altbaslik: 'Dört on sözcüklük pasajlar',
    aciklama: 'Yazıt cümlecikleri; okunuş sorulur, anlam cevaptan sonra verilir — Tekin 1998',
  },
  {
    kademe: 'paragraf',
    baslik: 'Yazıttan Paragraflar',
    altbaslik: 'Uzun pasajlar',
    aciklama: 'Yazıtların uzun pasajları — Tekin 1998',
  },
];

const DERS_BASINA = 5;

/** Dereceli kurs birimlerini verir; veri inmezse boş dizi döner. */
export const kursBirimKusaklari = async (): Promise<Unit[]> => {
  let birimler: KursBirimi[];
  try {
    const m = await import('./kursBirimleri.json');
    birimler = ((m.default ?? m) as unknown as { birimler: KursBirimi[] }).birimler;
  } catch {
    return [];
  }
  if (!birimler?.length) return [];

  const uniteler: Unit[] = [];
  for (const { kademe, baslik, altbaslik, aciklama } of KADEMELER) {
    const kume = birimler
      .filter((b) => b.kademe === kademe)
      .sort((a, b) => a.kelimeSayisi - b.kelimeSayisi);
    if (!kume.length) continue;

    const alistirmalar = kume.flatMap((b) =>
      [okunusSorusu(b, birimler), eksikSozcukSorusu(b, birimler)].filter(
        (e): e is Exercise => e !== null
      )
    );
    if (!alistirmalar.length) continue;

    const dersler: Lesson[] = [];
    for (let i = 0; i < alistirmalar.length; i += DERS_BASINA) {
      dersler.push({
        id: `kurs-${kademe}-${i / DERS_BASINA + 1}`,
        unitId: `kurs-${kademe}`,
        title: `${baslik} ${i / DERS_BASINA + 1}`,
        subtitle: altbaslik,
        iconName: 'ScrollText',
        type: 'standard',
        xp: 15,
        exercises: alistirmalar.slice(i, i + DERS_BASINA),
      });
    }

    uniteler.push({
      id: `kurs-${kademe}`,
      number: uniteler.length + 1,
      title: baslik,
      subtitle: altbaslik,
      description: aciklama,
      accentColor: 'basari',
      lessons: dersler,
    });
  }
  return uniteler;
};
