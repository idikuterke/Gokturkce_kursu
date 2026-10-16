// Üretilen kuşakları uygulamanın Unit/Lesson/Exercise yapısına çevirir.
//
// Neden çeviri: üretilen alıştırmalar ayrı bir sekmede kalsaydı XP, can,
// günlük görev ve rütbe sistemine bağlanmazdı. Mevcut tiplere çevrilince
// aynı LessonModal'da çalışıyorlar ve ilerleme tek yerden akıyor.
import type { Exercise, Lesson, Unit } from '../../types';
import type { Kusak, SozlukKelimesi, UretilmisAlistirma } from './tipler';
import { alistirmalariYukle, sozluguYukle } from './yukle';

let kusaklarSoz: Promise<Kusak[]> | null = null;

const kusaklariYukle = (): Promise<Kusak[]> => {
  kusaklarSoz ??= import('./kusaklar.json').then((m) => m.default as Kusak[]);
  return kusaklarSoz;
};

const ACCENT = ['#2BC4C4', '#F59E0B', '#A78BFA', '#37B36A', '#F87171'];

const alistirmayaCevir = (
  a: UretilmisAlistirma,
  anlamlar: Map<string, string>
): Exercise | null => {
  if (a.tur === 'runik_oku') {
    if (!a.dogru || !a.secenekler?.length) return null;
    return {
      id: a.id,
      type: 'choice',
      prompt: 'Bu kelimenin okunuşu hangisidir?',
      subprompt: `Kaynak: ${a.kaynak}`,
      runePrompt: a.runik,
      options: a.secenekler,
      correctAnswer: a.dogru,
      explanation: `Bu sözcük ${a.kaynak} dizesinde geçiyor.`
    };
  }

  // Kelime kurma: "Anlam" alanı gösterildiği için anlamı bilinmeyen kelime
  // buraya alınmaz — üretim tarafında da süzülüyor, burada ikinci kapı.
  const anlam = anlamlar.get(a.runik);
  if (!a.transkripsiyon || !anlam) return null;
  return {
    id: a.id,
    type: 'word_builder',
    prompt: `Tamgaları SAĞDAN SOLA dizerek "${a.transkripsiyon}" kelimesini oluşturun`,
    subprompt: `Kaynak: ${a.kaynak}`,
    targetWord: {
      rune: a.runik,
      latin: a.transkripsiyon,
      meaning: anlam,
      // Runik tamgalar BMP dışında; kod noktasına göre bölünür.
      tokens: [...a.runik]
    },
    explanation: `${a.transkripsiyon} — ${anlam}. ${a.kaynak} dizesinde geçiyor.`
  };
};

/**
 * Elle yazılmış aşamaların ardına eklenecek kuşakları Unit[] olarak verir.
 * Veri inmezse boş dizi döner; öğrenme yolu elle yazılmış içerikle çalışır.
 */
export const uretilmisKusaklar = async (): Promise<Unit[]> => {
  const [kusaklar, alistirmalar, sozluk] = await Promise.all([
    kusaklariYukle(),
    alistirmalariYukle(),
    sozluguYukle().catch(() => [] as SozlukKelimesi[])
  ]);

  const alistirmaDizini = new Map(alistirmalar.map((a) => [a.id, a]));
  const anlamlar = new Map(sozluk.map((k) => [k.runik, k.anlam]));

  return kusaklar
    .map((kusak, i): Unit => {
      const dersler: Lesson[] = kusak.dersler
        .map((ders): Lesson => ({
          id: ders.id,
          unitId: kusak.id,
          title: ders.baslik,
          subtitle: ders.altbaslik,
          iconName: 'ScrollText',
          type: 'standard',
          xp: ders.xp,
          exercises: ders.alistirmaIdleri
            .map((id) => alistirmaDizini.get(id))
            .filter((a): a is UretilmisAlistirma => Boolean(a))
            .map((a) => alistirmayaCevir(a, anlamlar))
            .filter((e): e is Exercise => e !== null)
        }))
        // Alıştırması kalmayan ders gösterilmez.
        .filter((d) => d.exercises.length > 0);

      return {
        id: kusak.id,
        number: kusak.numara,
        title: kusak.baslik,
        subtitle: kusak.altbaslik,
        description: kusak.aciklama,
        accentColor: ACCENT[i % ACCENT.length],
        lessons: dersler
      };
    })
    .filter((u) => u.lessons.length > 0);
};
