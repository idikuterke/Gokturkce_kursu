// Üretilmiş içeriğe erişim. Veri yalnızca gerektiğinde indirilir.
//
// Bu dosyalar toplam ~740 kB. Statik import edilseydi açılış paketine
// girerdi; dinamik import Vite'ın ayrı parçalara bölmesini sağlar, böylece
// yalnızca alıştırma/deşifre ekranını açan kullanıcı indirir.
import type { KorpusDizesi, KorpusKelimesi, UretilmisAlistirma } from './tipler';

let korpusSoz: Promise<KorpusDizesi[]> | null = null;
let kelimelerSoz: Promise<KorpusKelimesi[]> | null = null;
let alistirmalarSoz: Promise<UretilmisAlistirma[]> | null = null;

export const korpusuYukle = (): Promise<KorpusDizesi[]> => {
  korpusSoz ??= import('./korpus.json').then((m) => m.default as KorpusDizesi[]);
  return korpusSoz;
};

export const kelimeleriYukle = (): Promise<KorpusKelimesi[]> => {
  kelimelerSoz ??= import('./kelimeler.json').then((m) => m.default as KorpusKelimesi[]);
  return kelimelerSoz;
};

export const alistirmalariYukle = (): Promise<UretilmisAlistirma[]> => {
  alistirmalarSoz ??= import('./alistirmalar.json').then((m) => m.default as UretilmisAlistirma[]);
  return alistirmalarSoz;
};

/** Belirli bir zorluk bandındaki alıştırmalar. */
export const zorlugaGoreAlistirma = async (zorluk: number) =>
  (await alistirmalariYukle()).filter((a) => a.zorluk === zorluk);

/** Bir alıştırmanın dayandığı kitabe dizesi — kaynak göstermek için. */
export const alistirmaninKaynagi = async (alistirma: UretilmisAlistirma) =>
  (await korpusuYukle()).find((d) => d.id === alistirma.kaynak) ?? null;
