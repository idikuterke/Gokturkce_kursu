import { KazanimKodu } from '../types';

/**
 * GERÇEK HAYATTAN GÖREVLER
 *
 * Alıştırmaların çoğu tanıma düzeyindeydi: şık seç, eşleştir, diz.
 * Bunlar ÜRETİM görevleri — sonunda elde edilebilir, gösterilebilir bir
 * şey kalıyor. Knowles'un problem odaklılık varsayımı: yetişkin konuyu
 * değil, yapacağı işi merkeze alır.
 *
 * Her görev, giriş kapısındaki amaçlarla eşleşiyor (`amaclar`); seçtiği
 * amaca uyan görevler öne çıkıyor. Uymayanlar gizlenmiyor — yetişkinin
 * önüne konan şeyi daraltmak, öz yönetimin tersi.
 *
 * `arac` görevin hangi ekrana götürdüğü. Yeni araç yazılmadı: runik
 * yazıcı, kitabe okuyucu ve çizim pratiği zaten vardı, görevler onlara
 * amaç veriyor.
 *
 * DOĞRULUK UYARISI. Runik yazıcı sözlükte olmayan sözcükleri kural
 * tabanlı YAKLAŞIK çeviriyle yazıyor; kitabelerde böyle yazılacağının
 * güvencesi yok. Ad ve serbest metin görevlerinin `uyari` alanı bunu
 * söylüyor ve kullanıcı dosyaya kazımadan önce görüyor.
 */

export type GorevAraci = 'yazici' | 'kitabe' | 'cizim' | 'sozluk';

export interface Gorev {
  id: string;
  baslik: string;
  /** Neden yapılıyor — görevin gerçek hayattaki karşılığı. */
  amac: string;
  adimlar: string[];
  arac: GorevAraci;
  /** Hangi ekrana götürür (App'teki sekme kimliği). */
  sekme: string;
  /** Ölçme planındaki kazanım bağı. */
  kazanim: KazanimKodu[];
  /** Giriş kapısındaki amaç kimlikleri; boşsa herkese uygun. */
  amaclar: string[];
  uyari?: string;
}

export const GOREVLER: Gorev[] = [
  {
    id: 'adini-yaz',
    baslik: 'Adını tamgalarla yaz',
    amac: 'İlk ürünün: kendi adın. Yazıp kopyalayabilir, bir yere kaydedebilirsin.',
    adimlar: [
      'Runik yazıcıyı aç ve adını yaz.',
      'Çıkan tamgaları alfabe tablosundan tek tek doğrula.',
      'Beğendiğinde kopyala; mesajda, profilde ya da bir tasarımda kullan.',
    ],
    arac: 'yazici',
    sekme: 'klavye',
    kazanim: ['K4'],
    amaclar: ['tasarim', 'kimlik'],
    uyari:
      'Yazıcı, sözlükte olmayan sözcükleri kural tabanlı yaklaşık çeviriyle yazar. Adlar kitabelerde geçmez; çıkan yazım bir öneridir, tanıklı bir yazım değildir. Kalıcı bir şeye (dövme, oyma, baskı) geçirmeden önce bir uzmana danış.',
  },
  {
    id: 'tamga-mesaji',
    baslik: 'Birine tamga mesajı gönder',
    amac:
      'Kısa bir söz seç, tamgalarla yaz ve gönder. Karşıdakinin çözmesi için alfabe tablosunu da paylaş.',
    adimlar: [
      'Sözlükten anlamı kaynaklı iki üç sözcük seç.',
      'Runik yazıcıda yan yana diz.',
      'Kopyala, gönder; istersen alfabe kartını da ekle.',
    ],
    arac: 'yazici',
    sekme: 'klavye',
    kazanim: ['K4', 'K7'],
    amaclar: ['kimlik', 'ogretme'],
    uyari:
      'Sözlükteki sözcükler tanıklı yazımla çıkar; sözlük dışı sözcüklerde yazım yaklaşıktır.',
  },
  {
    id: 'kitabe-satiri',
    baslik: 'Bir kitabe satırını kendin çöz',
    amac:
      'Hazır okumaya bakmadan gerçek bir bengü taş satırını çözmeyi dene; sonra yayımlanmış okumayla karşılaştır.',
    adimlar: [
      'Bengü Taşlar ekranından bir satır seç.',
      'Tamgaları sağdan sola tek tek oku, kendi okumanı yaz.',
      'Yayımlanmış okumayla karşılaştır; ayrıldığın yeri not et.',
    ],
    arac: 'kitabe',
    sekme: 'kitabeler',
    kazanim: ['K6', 'K8'],
    amaclar: ['arastirma', 'kimlik'],
  },
  {
    id: 'tamga-kaz',
    baslik: 'Bir tamgayı eliyle kaz',
    amac:
      'Tamgayı tanımak başka, çizmek başka. El hareketi biçimi hafızaya farklı yazar.',
    adimlar: [
      'Çizim pratiğini aç ve bir tamga seç.',
      'Kılavuz çizgileri izleyerek birkaç kez çiz.',
      'Kılavuzu kapatıp aynı tamgayı yeniden çiz.',
    ],
    arac: 'cizim',
    sekme: 'alistirma',
    kazanim: ['K1', 'K2'],
    amaclar: ['tasarim', 'ogretme'],
  },
];

/** Seçili amaçlara uyan görevler önce gelir; hiçbiri gizlenmez. */
export const gorevleriSirala = (gorevler: Gorev[], amaclar: string[]): Gorev[] => {
  if (!amaclar.length) return gorevler;
  const uyar = (g: Gorev) => (g.amaclar.some((a) => amaclar.includes(a)) ? 0 : 1);
  return [...gorevler].sort((a, b) => uyar(a) - uyar(b));
};
