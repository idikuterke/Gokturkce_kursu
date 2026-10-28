/**
 * YANSITMA NOTLARI
 *
 * Ders sonunda tek soru: "Bugün en çok ne zorladı?" İki işi birden
 * görüyor — öğrenen kendi öğrenmesine dönüp bakıyor (yansıtıcı
 * öğrenme), eğitmen de hangi noktanın takıldığını puandan değil
 * öğrencinin kendi cümlesinden okuyor.
 *
 * Not isteğe bağlı. Zorunlu tutmak, dersi bitirmenin önüne bir engel
 * daha koymak olurdu; yetişkin istemediğinde geçer.
 *
 * Tarayıcıda saklanıyor; çalışma raporuna giriyor. Serbest metin
 * olduğu için kişi kendi adını yazabilir — rapor paneli bunu
 * uyarıyor, metin olduğu gibi aktarılıyor, biz ayıklamıyoruz:
 * sessizce kırpılan bir not, öğrencinin yazdığını sandığı not olmaz.
 */

export interface YansimaNotu {
  dersId: string;
  dersAdi: string;
  tarih: string;
  metin: string;
}

const KEY = 'gokturkce_yansima_v1';
/** Serbest metin sınırı; depolamayı da arayüzü de koruyor. */
export const EN_UZUN = 280;
/** Saklanan en fazla not; eskiler düşer. */
const SINIR = 200;

export const yansimalariOku = (): YansimaNotu[] => {
  try {
    const ham = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(ham) ? (ham as YansimaNotu[]) : [];
  } catch {
    return [];
  }
};

/** Boş not saklanmaz. Döndürülen liste yeniden okumayı gerektirmez. */
export const yansimaEkle = (not: YansimaNotu): YansimaNotu[] => {
  const metin = not.metin.trim().slice(0, EN_UZUN);
  if (!metin) return yansimalariOku();
  const liste = [...yansimalariOku(), { ...not, metin }].slice(-SINIR);
  try {
    localStorage.setItem(KEY, JSON.stringify(liste));
  } catch {
    // saklanamadıysa oturum boyunca geçerli
  }
  return liste;
};
