/**
 * GİRİŞ EKRANI — İHTİYAÇ ANALİZİ SORULARI
 *
 * Sorular burada veri olarak duruyor, bileşenin içinde gömülü değil:
 * aynı maddeler pilot başında ve sonunda öz değerlendirme anketi olarak
 * da kullanılacak, iki yerde ayrı ayrı yazılırsa ayrışırlar.
 *
 * Neden bu üç soru:
 *   amac      → Knowles'un "öğrenme nedenini bilme" varsayımı. Yetişkin
 *               neden öğrendiğini bilmeden başlamaz; uygulama da bunu
 *               bilmeden ona uygun görev gösteremez.
 *   onBilgi   → ISO 29993 §7 (ihtiyaç analizi) + öz yönetim. Alfabeyi
 *               bilen birini alfabenin ilk dersinde tutmak, yetişkini
 *               çocuk yerine koymaktır.
 *   sure      → Gerçekçi hedef. Haftada 15 dakika ayıracak kişiye 5
 *               üniteli bir yol vaat etmek, bırakma sebebidir.
 *
 * onBilgi seçeneklerindeki `baslangic`, öğrenme yolunda hangi aşamanın
 * AÇILACAĞINI söyler — tamamlanmış saymaz. Beyan ilerleme değildir:
 * açılan ünite hâlâ çalışılmamış görünür, XP'si sıfırdır.
 */

export type Asama = 'alfabe' | 'gundelik' | 'sayi' | 'kitabe';

export interface Secenek {
  id: string;
  etiket: string;
  aciklama?: string;
  /** Yalnız onBilgi sorusunda: bu beyanla açılacak aşama. */
  baslangic?: Asama;
  /** Yalnız sure sorusunda: haftalık dakika. */
  dakika?: number;
}

export interface GirisSorusu {
  id: 'amac' | 'onBilgi' | 'sure';
  baslik: string;
  altBaslik: string;
  /** Birden çok seçenek işaretlenebilir mi? */
  cokluSecim: boolean;
  secenekler: Secenek[];
}

export const GIRIS_SORULARI: GirisSorusu[] = [
  {
    id: 'amac',
    baslik: 'Göktürkçeyi neden öğrenmek istiyorsun?',
    altBaslik: 'Birden fazla seçebilirsin. Buna göre sana uygun görevleri öne çıkaracağız.',
    cokluSecim: true,
    secenekler: [
      { id: 'tasarim', etiket: 'Tasarım ve dövme', aciklama: 'Adımı, bir sözü doğru yazmak istiyorum' },
      { id: 'arastirma', etiket: 'Akademik araştırma', aciklama: 'Kaynak metinleri kendim okumak istiyorum' },
      { id: 'kimlik', etiket: 'Kültürel merak', aciklama: 'Yazıtların ne dediğini anlamak istiyorum' },
      { id: 'ogretme', etiket: 'Öğretmek', aciklama: 'Başkalarına anlatacağım' },
    ],
  },
  {
    id: 'onBilgi',
    baslik: 'Şu an nerede duruyorsun?',
    altBaslik: 'Kendi değerlendirmen yeter; sınav yok. Yolu buna göre açacağız.',
    cokluSecim: false,
    secenekler: [
      {
        id: 'sifir',
        etiket: 'Alfabeyi hiç görmedim',
        aciklama: 'En baştan başlayalım',
        baslangic: 'alfabe',
      },
      {
        id: 'birkac',
        etiket: 'Birkaç tamga tanıyorum',
        aciklama: 'Yine alfabeden başlayalım, hızlı geçersin',
        baslangic: 'alfabe',
      },
      {
        id: 'okuyabiliyorum',
        etiket: 'Alfabeyi okuyabiliyorum',
        aciklama: 'Gündelik sözcüklerden başlayalım',
        baslangic: 'gundelik',
      },
      {
        id: 'yazit',
        etiket: 'Yazıt okumayı deniyorum',
        aciklama: 'Doğrudan kitabe çözümlemesine geçelim',
        baslangic: 'kitabe',
      },
    ],
  },
  {
    id: 'sure',
    baslik: 'Haftada ne kadar vakit ayırabilirsin?',
    altBaslik: 'Dürüst bir sayı, iddialı bir sayıdan iyidir. İstediğin zaman değiştirirsin.',
    cokluSecim: false,
    secenekler: [
      { id: 'az', etiket: '15 dakika', aciklama: 'Haftada bir kısa oturum', dakika: 15 },
      { id: 'orta', etiket: '1 saat', aciklama: 'Haftada iki-üç oturum', dakika: 60 },
      { id: 'cok', etiket: '3 saat', aciklama: 'Neredeyse her gün', dakika: 180 },
      { id: 'yogun', etiket: '3 saatten fazla', aciklama: 'Hızlı ilerlemek istiyorum', dakika: 300 },
    ],
  },
];

/** Beyan edilen aşamanın insan okuyacağı adı. */
export const ASAMA_ADI: Record<Asama, string> = {
  alfabe: 'Alfabe',
  gundelik: 'Gündelik Sözcükler',
  sayi: 'Sayı Dizgesi',
  kitabe: 'Kitabe Çözümleme',
};

/** Seçili amaç kimliklerinden okunur bir cümle kurar. */
export const amacCumlesi = (amaclar: string[]): string => {
  const etiketler = GIRIS_SORULARI[0].secenekler
    .filter((s) => amaclar.includes(s.id))
    .map((s) => s.etiket.toLocaleLowerCase('tr'));
  if (!etiketler.length) return 'Henüz belirtmedin';
  if (etiketler.length === 1) return etiketler[0];
  return `${etiketler.slice(0, -1).join(', ')} ve ${etiketler.at(-1)}`;
};
