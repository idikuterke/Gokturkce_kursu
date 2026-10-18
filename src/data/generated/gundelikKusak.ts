import type { Unit, Lesson, Exercise } from '../../types';

interface GundelikKelime {
  id: string;
  kelime: string;
  tema: string;
  runik: string;
  tanikli: boolean;
  tamgaSayisi: number;
  adimlar: string[];
  zorluk: number;
}

/**
 * GÜNDELİK KUŞAKLAR — öğrenme yolunun BAŞINDA.
 *
 * Kitabe aşamalarından önce gelir: öğrenen bildiği kelimeyle harfleri
 * öğrenir, sonra tanımadığı Eski Türkçe sözcüklere geçer. Tersi sıra
 * anlamı ve yazımı aynı anda yüklüyordu.
 *
 * Buradaki yazımların çoğu TARİHSEL DEĞİLDİR; imla kuralından
 * üretilmiştir. Her alıştırma bunu açıklamasında söyler.
 */

const TEMA_SIRASI: { tema: string; baslik: string; altbaslik: string }[] = [
  { tema: 'sayı', baslik: 'Sayılar', altbaslik: 'Bildiğin sayılarla ilk tamgalar' },
  { tema: 'renk', baslik: 'Renkler', altbaslik: 'Kısa sözcüklerle kalın/ince ayrımı' },
  { tema: 'doğa', baslik: 'Doğa', altbaslik: 'Su, taş, gök — en eski sözcükler' },
  { tema: 'aile', baslik: 'Aile', altbaslik: 'Ana, ata, oğul' },
  { tema: 'hayvan', baslik: 'Hayvanlar', altbaslik: 'Bozkırın canlıları' },
  { tema: 'fiil', baslik: 'Eylemler', altbaslik: 'Gel, git, bak' },
  { tema: 'yiyecek', baslik: 'Yiyecekler', altbaslik: 'Ekmek, et, süt' },
  { tema: 'meyve', baslik: 'Meyveler', altbaslik: 'Elma, üzüm, dut' },
  { tema: 'sebze', baslik: 'Ekinler', altbaslik: 'Arpa, buğday, darı' },
  { tema: 'doğa terimi', baslik: 'Yer ve Gök', altbaslik: 'Irmak, bulut, yağmur' },
  { tema: 'gündelik', baslik: 'Gündelik Sözler', altbaslik: 'Ev, göz, söz' }
];

const DERS_BASINA = 6;

const karistir = <T,>(d: T[]): T[] => {
  const k = [...d];
  for (let i = k.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [k[i], k[j]] = [k[j], k[i]];
  }
  return k;
};

function alistirmayaCevir(k: GundelikKelime, havuz: GundelikKelime[]): Exercise | null {
  // Çeldiriciler benzer uzunlukta başka yazımlar: eleme uzunluğa
  // bakarak yapılamasın.
  const yakin = havuz
    .filter((x) => x.id !== k.id && Math.abs(x.tamgaSayisi - k.tamgaSayisi) <= 1)
    .map((x) => x.runik);
  const yanlislar = karistir(Array.from(new Set(yakin))).slice(0, 3);
  if (yanlislar.length < 3) return null;

  const kaynakNotu = k.tanikli
    ? 'Bu yazım yazıtlarda geçiyor (tanıklı).'
    : 'Bu yazım imla kuralından üretildi; yazıtlarda geçmez.';

  return {
    id: k.id,
    type: 'choice',
    prompt: `"${k.kelime}" sözcüğü Göktürk harfleriyle nasıl yazılır?`,
    subprompt: `${k.tamgaSayisi} tamga`,
    options: karistir([k.runik, ...yanlislar]),
    correctAnswer: k.runik,
    explanation: `${k.adimlar.join(' · ')}  —  ${kaynakNotu}`
  };
}

/** Gündelik üniteleri verir; veri inmezse boş dizi döner. */
export const gundelikKusaklar = async (): Promise<Unit[]> => {
  let kelimeler: GundelikKelime[];
  try {
    const m = await import('./gundelik.json');
    kelimeler = ((m.default ?? m) as unknown as { kelimeler: GundelikKelime[] }).kelimeler;
  } catch {
    return [];
  }

  const uniteler: Unit[] = [];
  let numara = 0;

  for (const { tema, baslik, altbaslik } of TEMA_SIRASI) {
    const temaKelimeleri = kelimeler
      .filter((k) => k.tema === tema)
      .sort((a, b) => a.zorluk - b.zorluk);
    if (temaKelimeleri.length < 4) continue;

    numara++;
    const dersler: Lesson[] = [];
    for (let i = 0; i < temaKelimeleri.length; i += DERS_BASINA) {
      const dilim = temaKelimeleri.slice(i, i + DERS_BASINA);
      const exercises = dilim
        .map((k) => alistirmayaCevir(k, kelimeler))
        .filter((e): e is Exercise => e !== null);
      if (!exercises.length) continue;
      dersler.push({
        id: `gundelik-${tema}-${i / DERS_BASINA + 1}`,
        unitId: `gundelik-${tema}`,
        title: `${baslik} ${i / DERS_BASINA + 1}`,
        subtitle: altbaslik,
        iconName: 'PenLine',
        type: 'standard',
        xp: 10,
        exercises
      });
    }
    if (!dersler.length) continue;

    uniteler.push({
      id: `gundelik-${tema}`,
      number: numara,
      title: baslik,
      subtitle: altbaslik,
      description: 'Bugünün Türkçesini tamgalarla yaz — tarihsel metin değildir',
      // Gündelik kuşaklar kitabe kuşaklarından görsel olarak ayrılsın.
      accentColor: 'uyari',
      lessons: dersler
    });
  }

  return uniteler;
};
