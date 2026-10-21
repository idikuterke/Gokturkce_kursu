/**
 * BİLGE ALP'İN SÖZLERİ
 *
 * Maskotun tek sabit repliği vardı (LearningPath'te gömülü). Burada söz
 * bağlama göre seçiliyor: karşılama, doğru/yanlış cevap, seri, kuşak
 * bitişi, can tükenmesi, uzun aradan dönüş.
 *
 * KURAL — sözlerde geçen Eski Türkçe sözcükler uydurulmaz. Her söz en çok
 * bir sözcüğe `sozcuk` alanıyla bağlanır; o alan onaylı sözlüğün
 * (src/data/generated/sozluk.json, 124 madde) kimliğidir. Anlamı ve kaynağı
 * arayüz çalışma anında oradan okur — burada elle yazılmaz ki sözlük
 * güncellendiğinde maskot yanlış anlam söylemesin.
 *
 * Sözcüksüz sözler de olur; her cümleye ders sıkıştırmak bıktırır.
 */

export type Ruh = 'idle' | 'happy' | 'thinking' | 'proud' | 'cheer' | 'uyari';

export type Baglam =
  | 'karsilama'
  | 'donus'
  | 'yanlis'
  | 'kusakBitti'
  | 'canBitti'
  | 'kitabe';

export interface BilgeSozu {
  metin: string;
  ruh: Ruh;
  /** Onaylı sözlükteki madde kimliği; arayüz anlamı oradan gösterir. */
  sozcuk?: string;
}

export const BILGE_SOZLERI: Record<Baglam, BilgeSozu[]> = {
  karsilama: [
    { metin: 'Hoş geldin. Taşlar sabırlıdır, acele yok.', ruh: 'idle' },
    { metin: 'Bugün bir tamga öğrensen yeter; yolu adım kurar.', ruh: 'idle', sozcuk: 'yol' },
    { metin: 'Yazı kalıcıdır. Yazılan söz taşta durur.', ruh: 'proud', sozcuk: 'bitig' },
    { metin: 'Önce bakmayı öğren, okumak sonra gelir.', ruh: 'thinking' },
  ],
  donus: [
    { metin: 'Döndün demek. Bıraktığın yer seni bekliyordu.', ruh: 'happy' },
    { metin: 'Ara vermek yolu bitirmez; yalnız uzatır.', ruh: 'idle', sozcuk: 'yol' },
    { metin: 'Taş bin üç yüz yıl bekledi, birkaç gün onun yanında nedir?', ruh: 'thinking', sozcuk: 'bengu' },
  ],
  yanlis: [
    { metin: 'Olmadı. Tamgayı bir daha, yavaşça gör.', ruh: 'uyari' },
    { metin: 'Yanılmak öğrenmenin kendisidir, kaçma.', ruh: 'uyari' },
    { metin: 'Sağdan sola bak. Yazı o yöne akar.', ruh: 'thinking' },
    { metin: 'Kalın mı ince mi? Ünlü, ünsüzün biçimini belirler.', ruh: 'thinking' },
  ],
  kusakBitti: [
    { metin: 'Bir kuşağı bitirdin. Arkana bak, yol uzamış.', ruh: 'proud', sozcuk: 'yol' },
    { metin: 'Öğrendiğin sözcükler artık senin. Kimse geri alamaz.', ruh: 'cheer' },
    { metin: 'Kutlu olsun.', ruh: 'proud', sozcuk: 'kut' },
  ],
  canBitti: [
    { metin: 'Canın tükendi. Bu bir yenilgi değil, mola.', ruh: 'uyari' },
    { metin: 'Dinlen. Yarın göz daha keskin olur.', ruh: 'idle' },
  ],
  kitabe: [
    { metin: 'Bu satırlar gerçek bir taştan. Kimse uydurmadı.', ruh: 'proud', sozcuk: 'bengu' },
    { metin: 'Burada bir halkın sesi var. Yavaş oku.', ruh: 'thinking', sozcuk: 'bodun' },
    { metin: 'Gökten söz açıldığında durup düşün.', ruh: 'thinking', sozcuk: 'tengri' },
  ],
};

/**
 * Bağlamdan bir söz seçer. Rastgele değil sıralı: aynı oturumda aynı söz
 * üst üste çıkmasın, ama her açılışta da aynı yerden başlamasın diye
 * sayaç dışarıdan veriliyor (bileşen kendi sayacını tutar).
 */
export const bilgeSozu = (baglam: Baglam, sayac: number): BilgeSozu => {
  const liste = BILGE_SOZLERI[baglam];
  return liste[((sayac % liste.length) + liste.length) % liste.length];
};
