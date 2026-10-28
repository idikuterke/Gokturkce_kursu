import type { Unit, Lesson, Exercise } from '../../types';

interface SayiOgesi {
  id: string;
  bolum: string;
  okunus: string;
  deger?: number;
  anlam: string;
  runik: string;
  runikEslesme: string;
  atif: string | null;
  sayfa: number;
  madde: number;
  tip: 'sayı' | 'sözcük';
}

/**
 * SAYI KUŞAKLARI — gündelik ile kitabe arasında.
 *
 * Neden ayrı modül: Orhon Türkçesinde sayı sistemi bugünküyle aynı
 * değil. Ara sayılar TOPLAMA ile kurulmaz, bir sonraki onluğa atılan
 * adım olarak adlandırılır: *eki yegirmi* 22 değil 12'dir. Bunu
 * bilmeyen okur kitabedeki her tarihi yanlış okur.
 *
 * Kaynak Talat Tekin, Orhon Türkçesi Grameri (2003) §280-290,
 * s. 128-135. Runik katman korpustan eşlendi; kurs içeriği kaynak
 * olarak kullanılmadı.
 */

const karistir = <T,>(d: T[]): T[] => {
  const k = [...d];
  for (let i = k.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [k[i], k[j]] = [k[j], k[i]];
  }
  return k;
};

/**
 * Kitapta köşeli parantez ONARILMIŞ metni gösterir: yazıt kırık, Tekin
 * eksiği tamamlamış. Soru metninde "eki yegir[mi]" gürültü yapıyor;
 * parantez kaldırılır, onarım açıklamada söylenir.
 */
const onarimliMi = (x: string): boolean => /[[\]]/.test(x);
const duzMetin = (x: string): string => x.replace(/[[\]]/g, '');

const atifNotu = (o: SayiOgesi): string =>
  `Tekin 2003, §${o.madde}, s. ${o.sayfa}${o.atif ? ` (${o.atif})` : ''}`;

/** "eki yegirmi" → { birlik: 2, onluk: 20 } — ara sayının iki parçası. */
function parcala(o: SayiOgesi, hepsi: SayiOgesi[]): { birlik: number; onluk: number } | null {
  const sozcukler = o.okunus.split(/\s+/);
  if (sozcukler.length < 2) return null;
  const deger = (s: string): number | undefined =>
    hepsi.find((x) => x.bolum === 'Asıl sayılar' && x.okunus === s)?.deger;
  const birlik = deger(sozcukler[0]);
  const onluk = deger(sozcukler.slice(1).join(' ')) ?? deger(sozcukler[1]);
  if (birlik === undefined || onluk === undefined) return null;
  return { birlik, onluk };
}

/** "otuz artukı säkiz" → { onluk: 30, birlik: 8 } */
function katmayiCoz(o: SayiOgesi, hepsi: SayiOgesi[]): { onluk: number; birlik: number } | null {
  const [sol, , sag] = o.okunus.split(/\s+/);
  const deger = (x?: string): number | undefined =>
    hepsi.find((y) => y.bolum === 'Asıl sayılar' && y.okunus === x)?.deger;
  const onluk = deger(sol);
  const birlik = deger(sag);
  if (onluk === undefined || birlik === undefined) return null;
  return { onluk, birlik };
}

/** Değer sorusu: "*eki yegirmi* kaç eder?" */
function degerSorusu(o: SayiOgesi, hepsi: SayiOgesi[]): Exercise | null {
  if (o.deger === undefined) return null;
  const p = parcala(o, hepsi);
  // Çeldiriciler rastgele değil: biri tam da bugünkü TOPLAMA mantığının
  // verdiği yanlış cevap. Yanılgının kendisi şık olunca kural öğretiliyor.
  // artukı katmasında tuzak başka: "otuz artukı bir" GERÇEKTEN toplamadır
  // (31). Yanılgı, onu ara sayı gibi okumaktır — o zaman 21 çıkardı.
  const artukli = /artukı/.test(o.okunus);
  const katma = artukli ? katmayiCoz(o, hepsi) : null;
  const adaylar = katma
    ? [katma.onluk, katma.birlik, katma.onluk - 10 + katma.birlik]
    : p
      ? [p.birlik + p.onluk, p.onluk, p.birlik]
      : [o.deger + 1, o.deger * 2, Math.max(1, o.deger - 10)];
  const yanlislar = [...new Set(adaylar)].filter((x) => x !== o.deger).slice(0, 3);
  if (yanlislar.length < 3) return null;

  const aciklama = katma
    ? `${o.okunus} = ${katma.onluk} + ${katma.birlik} = ${o.deger}. ` +
      `artukı "fazlası, artı" demek; burada gerçekten TOPLAMA var. ` +
      `Ara sayı mantığıyla okunsaydı ${katma.onluk - 10 + katma.birlik} çıkardı. — ${atifNotu(o)}`
    : p
    ? `${o.okunus} = "${p.onluk}'ye doğru ${p.birlik}." sayısı, yani ${o.deger}. ` +
      `Toplama değil: ${p.birlik} + ${p.onluk} = ${p.birlik + p.onluk} DEĞİL. ` +
      `Ara sayılar bulunulan onluğu değil, ulaşılacak onluğu gösterir. — ${atifNotu(o)}`
    : `${duzMetin(o.okunus)} = ${o.deger}. — ${atifNotu(o)}`;

  return {
    id: `${o.id}-deger`,
    type: 'choice',
    kazanim: ['K5'],
    prompt: `“${duzMetin(o.okunus)}” kaç eder?`,
    options: karistir([o.deger, ...yanlislar].map(String)),
    correctAnswer: String(o.deger),
    explanation: aciklama,
  };
}

/** Yazım sorusu: sayının tamga dizisi. */
function yazimSorusu(o: SayiOgesi, hepsi: SayiOgesi[]): Exercise | null {
  const tamga = (s: string) => [...s.replace(/[\s:]/g, '')].length;
  const kendi = tamga(o.runik);
  const havuz = [...new Set(
    hepsi
      .filter((x) => x.runik !== o.runik && Math.abs(tamga(x.runik) - kendi) <= 2)
      .map((x) => x.runik)
  )];
  if (havuz.length < 3) return null;
  const baslik =
    o.deger !== undefined
      ? `${duzMetin(o.okunus)} (${o.deger})`
      : `${duzMetin(o.okunus)} — ${o.anlam}`;
  return {
    id: `${o.id}-yazim`,
    type: 'choice',
    // Hem sayı mantığı hem imla.
    kazanim: ['K4', 'K5'],
    prompt: `“${baslik}” Göktürk harfleriyle nasıl yazılır?`,
    options: karistir([o.runik, ...karistir(havuz).slice(0, 3)]),
    correctAnswer: o.runik,
    explanation:
      `${duzMetin(o.okunus)} — ${o.runik}. Yazım yazıtlardan alındı; kuraldan üretilmedi.` +
      (onarimliMi(o.okunus)
        ? ` (Yazıt bu sözcükte kırık; Tekin eksiği ${o.okunus} biçiminde tamamlamış.)`
        : '') +
      (o.runikEslesme !== 'tam'
        ? ` (Tekin'in gösterimi ile korpus transkripsiyonu arasında ${o.runikEslesme} farkı var; ` +
          'Göktürk yazısı bu ünlüleri ayırmaz, tamga dizisi aynıdır.)'
        : '') +
      ` — ${atifNotu(o)}`,
  };
}

/** Ters yön: "17 sayısı Orhon Türkçesinde nasıl söylenir?" */
function soyleyisSorusu(o: SayiOgesi, hepsi: SayiOgesi[]): Exercise | null {
  if (o.deger === undefined || o.okunus.split(/\s+/).length < 2) return null;
  const havuz = [...new Set(
    hepsi
      .filter((x) => x.deger !== undefined && x.okunus !== o.okunus && x.okunus.split(/\s+/).length >= 2)
      .map((x) => x.okunus)
  )];
  if (havuz.length < 3) return null;
  return {
    id: `${o.id}-soyleyis`,
    type: 'choice',
    kazanim: ['K5'],
    prompt: `${o.deger} sayısı Orhon Türkçesinde nasıl söylenir?`,
    options: karistir([duzMetin(o.okunus), ...karistir(havuz).map(duzMetin).slice(0, 3)]),
    correctAnswer: duzMetin(o.okunus),
    explanation: `${o.deger} = ${duzMetin(o.okunus)}. — ${atifNotu(o)}`,
  };
}

/** Sözcük anlamı: sıra, kesir, belirsizlik sayıları. Tek sözcük sorulur. */
function anlamSorusu(o: SayiOgesi, hepsi: SayiOgesi[]): Exercise | null {
  const havuz = [...new Set(
    hepsi.filter((x) => x.tip === 'sözcük' && x.anlam !== o.anlam).map((x) => x.anlam)
  )];
  if (havuz.length < 3) return null;
  return {
    id: `${o.id}-anlam`,
    type: 'choice',
    kazanim: ['K5', 'K7'],
    prompt: `“${duzMetin(o.okunus)}” ne demek?`,
    options: karistir([o.anlam, ...karistir(havuz).slice(0, 3)]),
    correctAnswer: o.anlam,
    explanation: `${duzMetin(o.okunus)} — “${o.anlam}”. — ${atifNotu(o)}`,
  };
}

const DERS_BASINA = 6;

function dersleriKur(
  uniteId: string,
  baslik: string,
  altbaslik: string,
  alistirmalar: Exercise[]
): Lesson[] {
  const dersler: Lesson[] = [];
  for (let i = 0; i < alistirmalar.length; i += DERS_BASINA) {
    const dilim = alistirmalar.slice(i, i + DERS_BASINA);
    if (!dilim.length) continue;
    dersler.push({
      id: `${uniteId}-${i / DERS_BASINA + 1}`,
      unitId: uniteId,
      title: `${baslik} ${i / DERS_BASINA + 1}`,
      subtitle: altbaslik,
      iconName: 'Hash',
      type: 'standard',
      xp: 10,
      exercises: dilim,
    });
  }
  return dersler;
}

/** Sayı ünitelerini verir; veri inmezse boş dizi döner. */
export const sayiKusaklar = async (): Promise<Unit[]> => {
  let ogeler: SayiOgesi[];
  try {
    const m = await import('./sayilar.json');
    ogeler = ((m.default ?? m) as unknown as { ogeler: SayiOgesi[] }).ogeler;
  } catch {
    return [];
  }
  if (!ogeler?.length) return [];

  const bolumde = (ad: string) => ogeler.filter((o) => o.bolum === ad);
  const temel = bolumde('Asıl sayılar');
  const ara = bolumde('Onluklararası Sayılar');
  const artukli = ara.filter((o) => /artukı/.test(o.okunus));
  const duzAra = ara.filter((o) => !/artukı/.test(o.okunus));
  const buyuk = bolumde('Niteleme Yapıları');
  const digerleri = [
    ...bolumde('Sıra Sayıları'),
    ...bolumde('Kesir Sayıları'),
    ...bolumde('Katlama Sayıları'),
    ...bolumde('Belirsizlik Sayıları'),
  ];

  const sirala = (x: Exercise[]) => x.filter(Boolean);
  const uniteler: Unit[] = [];

  const ekle = (
    id: string,
    baslik: string,
    altbaslik: string,
    aciklama: string,
    alistirmalar: Exercise[]
  ) => {
    const dersler = dersleriKur(id, baslik, altbaslik, alistirmalar);
    if (!dersler.length) return;
    uniteler.push({
      id,
      number: uniteler.length + 1,
      title: baslik,
      subtitle: altbaslik,
      description: aciklama,
      accentColor: 'marka',
      lessons: dersler,
    });
  };

  ekle(
    'sayi-temel',
    'Sayı Tamgaları',
    'Birlikler, onluklar, yüzler',
    'Yazıtlarda geçen sayıların okunuşu ve yazımı — Tekin 2003 §280',
    sirala([
      ...temel.map((o) => yazimSorusu(o, ogeler)).filter((e): e is Exercise => !!e),
      ...temel.map((o) => degerSorusu(o, ogeler)).filter((e): e is Exercise => !!e),
    ])
  );

  ekle(
    'sayi-ara',
    'Ara Sayılar',
    'eki yegirmi neden 12?',
    'Ara sayılar toplama ile değil, hedeflenen onluğa göre kurulur — Tekin 2003 §281',
    sirala([
      ...duzAra.map((o) => degerSorusu(o, ogeler)).filter((e): e is Exercise => !!e),
      ...duzAra.map((o) => soyleyisSorusu(o, ogeler)).filter((e): e is Exercise => !!e),
    ])
  );

  ekle(
    'sayi-artuki',
    'artukı Katması',
    'Otuzdan sonra ikinci yol',
    '30\'dan büyük sayılar çoğunlukla "artukı" ile katmalı kurulur — Tekin 2003 §281.3',
    sirala([
      ...artukli.flatMap((o) => [degerSorusu(o, ogeler), yazimSorusu(o, ogeler)]).filter((e): e is Exercise => !!e),
      ...buyuk.map((o) => degerSorusu(o, ogeler)).filter((e): e is Exercise => !!e),
    ])
  );

  ekle(
    'sayi-turleri',
    'Sıra ve Katlama',
    'bişinç, tört yolı, sıŋar',
    'Sıra, kesir, katlama ve belirsizlik sayıları — Tekin 2003 §284-290',
    sirala(
      digerleri
        .flatMap((o) => [anlamSorusu(o, ogeler), yazimSorusu(o, ogeler)])
        .filter((e): e is Exercise => !!e)
    )
  );

  return uniteler;
};
