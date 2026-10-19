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
  // üretilmiyordu. Dar başla, yetmezse genişlet.
  let secenekler = [...new Set(uygun(Math.max(2, b.kelimeSayisi * 0.4)))];
  if (secenekler.length < 3) secenekler = [...new Set(uygun(b.kelimeSayisi))];
  if (secenekler.length < 3) secenekler = [...new Set(uygun(Infinity))];
  if (secenekler.length < 3) return null;
  return {
    id: `${b.id}-okunus`,
    type: 'choice',
    prompt: 'Bu pasajın okunuşu hangisidir?',
    runePrompt: b.runik,
    options: karistir([b.okunus, ...karistir(secenekler).slice(0, 3)]),
    correctAnswer: b.okunus,
    explanation:
      `${atif(b)}. Anlamı: ${b.ceviri}` +
      (b.hizalama !== 'tam'
        ? `  —  Kitabın okuyuşu ile korpus yazımı arasında ufak fark var (${b.hizalama}); tamgalar korpustan.`
        : ''),
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
  const bosluklu = sozcukler.map((s, i) => (i === yer ? '␣' : s)).join(' : ');

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
      `Anlamı: ${b.ceviri}  ·  ${atif(b)}`,
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
