/**
 * LEITNER KUTU SİSTEMİ
 *
 * Kart destesi rastgele karışıyordu: iyi bilinen tamga ile hiç
 * tanınmayan tamga aynı sıklıkta çıkıyordu. Leitner, kartı bildikçe
 * yukarı kutuya taşır ve bir sonraki gösterimi erteler; yanlışta birinci
 * kutuya düşürür. Böylece çalışma süresi zayıf tamgalara kayar.
 *
 * Aralıklar gün cinsinden, klasik 5 kutulu dizilim:
 *   1. kutu  aynı gün   (yeni ya da unutulmuş)
 *   2. kutu  1 gün
 *   3. kutu  3 gün
 *   4. kutu  7 gün
 *   5. kutu  16 gün
 *
 * Burada yalnız saf işlevler var; bileşen bunları çağırıp sonucu
 * localStorage'a yazıyor. Saf olması sınanabilir olmasını sağlıyor —
 * tarih aritmetiği gözle doğrulanacak bir şey değil.
 */

export const KUTU_SAYISI = 5;

/** Kutudan sonraki gösterime kaç gün. */
export const ARALIK: Record<number, number> = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };

export interface KartDurumu {
  /** 1-5. */
  kutu: number;
  /** YYYY-MM-DD; bu tarihten itibaren gösterilir. */
  sonraki: string;
}

export type LeitnerDurumu = Record<string, KartDurumu>;

/** Yerel takvim gününü YYYY-MM-DD olarak verir (UTC kayması olmadan). */
export const gunAnahtari = (d: Date): string => {
  const y = d.getFullYear();
  const a = String(d.getMonth() + 1).padStart(2, '0');
  const g = String(d.getDate()).padStart(2, '0');
  return `${y}-${a}-${g}`;
};

/** Verilen güne gün ekler. */
const gunEkle = (d: Date, gun: number): Date => {
  const y = new Date(d);
  y.setDate(y.getDate() + gun);
  return y;
};

/**
 * Kartın yeni durumu. Bildiyse bir üst kutuya, bilemediyse birinci
 * kutuya. Beşinci kutudaki doğru cevap kartı beşte tutar ama erteler.
 */
export const yeniDurum = (
  onceki: KartDurumu | undefined,
  biliyor: boolean,
  bugun = new Date()
): KartDurumu => {
  const simdikiKutu = onceki?.kutu ?? 1;
  const kutu = biliyor ? Math.min(KUTU_SAYISI, simdikiKutu + 1) : 1;
  return { kutu, sonraki: gunAnahtari(gunEkle(bugun, ARALIK[kutu])) };
};

/** Kartın vadesi geldi mi? Hiç görülmemiş kart her zaman vadelidir. */
export const vadesiGeldi = (durum: KartDurumu | undefined, bugun = new Date()): boolean =>
  !durum || durum.sonraki <= gunAnahtari(bugun);

/**
 * Çalışma destesi: yalnız vadesi gelen kartlar, zayıftan güçlüye.
 * Aynı kutudakiler arasında sıra giriş sırasıdır — rastgelelik yok,
 * böylece aynı gün içinde tekrar açıldığında deste kaymaz.
 */
export const calismaDestesi = <T extends { rune: string }>(
  kartlar: T[],
  durumlar: LeitnerDurumu,
  bugun = new Date()
): T[] =>
  kartlar
    .filter((k) => vadesiGeldi(durumlar[k.rune], bugun))
    .sort((a, b) => (durumlar[a.rune]?.kutu ?? 1) - (durumlar[b.rune]?.kutu ?? 1));

/** Kutu dağılımı: [1. kutu, 2. kutu, …]. Görülmemiş kart 1. kutuda sayılır. */
export const kutuDagilimi = <T extends { rune: string }>(
  kartlar: T[],
  durumlar: LeitnerDurumu
): number[] => {
  const sayim = Array<number>(KUTU_SAYISI).fill(0);
  for (const k of kartlar) sayim[(durumlar[k.rune]?.kutu ?? 1) - 1]++;
  return sayim;
};

/** Vadesi gelmemiş kartlardan en yakın tarih; hepsi vadeliyse undefined. */
export const sonrakiVade = <T extends { rune: string }>(
  kartlar: T[],
  durumlar: LeitnerDurumu,
  bugun = new Date()
): string | undefined =>
  kartlar
    .map((k) => durumlar[k.rune]?.sonraki)
    .filter((t): t is string => !!t && t > gunAnahtari(bugun))
    .sort()[0];
