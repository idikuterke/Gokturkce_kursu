// ÜRETİLMİŞ DOSYA — elle düzenlemeyin. Üreten: engine/icerik-uret.mjs

export interface KorpusDizesi {
  id: string;
  kaynak: string;
  kaynakAd: string;
  yuz: string;
  satir: number;
  runik: string;
  transkripsiyon: string;
  turkce: string;
  kelimeSayisi: number;
  yipranma: boolean;
  dogrulama: {
    iskelet: string;
    ceviri: string;
    okuma: string;
    denetleyen: string | null;
    kaynak: string | null;
    tarih: string | null;
  };
}

export interface KorpusKelimesi {
  runik: string;
  transkripsiyon: string;
  /** Korpusta kaç kez geçiyor. */
  siklik: number;
  /** En fazla 5 dize kimliği (kaynak gösterimi için). */
  gectigiDizeler: string[];
  /** Yazılmamış ünlü sayısı — okuma zorluğunun ana etkeni. */
  dusenUnlu: number;
  /** Kaynak dizelerin tamamı iskelet denetiminden geçtiyse true. */
  guvenilir: boolean;
  /** 1-5 bandı. */
  zorluk: number;
}

export type UretilmisAlistirmaTuru =
  | 'runik_oku'
  | 'kelime_kur'
  | 'kelime_ceviri'
  | 'dize_ceviri';

export interface SozlukKelimesi {
  id: string;
  /** Korpustan doğrulanmış runik yazım. */
  runik: string;
  transkripsiyon: string;
  anlam: string;
  /** Süzgeç için sabit küme. */
  kategori: string;
  /** Kaynaktaki özgün, daha ayrıntılı etiket. */
  kategoriEtiketi: string;
  kaynak: string | null;
  /** Kaynağı doğrulanmamışsa true — arayüzde işaretlenir. */
  teyitGerek: boolean;
  /** Kitabelerde geçen çekimli biçimler, atıflarıyla. */
  bicimler: Array<{
    runik: string;
    transkripsiyon: string;
    siklik: number;
    dizeler: string[];
  }>;
}

export interface KusakDersi {
  id: string;
  baslik: string;
  altbaslik: string;
  xp: number;
  /** Alıştırmalar kimlikle anılır; veri alistirmalar.json'da tekrarlanmaz. */
  alistirmaIdleri: string[];
}

export interface Kusak {
  id: string;
  /** Elle yazılmış 5 aşamanın ardından gelir; numara 6'dan başlar. */
  numara: number;
  /** Alıştırma zorluk bandı (1-5). */
  bant: number;
  baslik: string;
  altbaslik: string;
  aciklama: string;
  dersler: KusakDersi[];
}

export interface UretilmisAlistirma {
  id: string;
  tur: UretilmisAlistirmaTuru;
  zorluk: number;
  runik: string;
  /** runik_oku: doğru okunuş. kelime_kur: hedef kelime. */
  transkripsiyon?: string;
  dogru?: string;
  secenekler?: string[];
  /** runik_oku: biliniyorsa günümüz Türkçesi karşılığı. */
  anlam?: string | null;
  /** dize_ceviri: karşılık çeviri değil günümüz okumasıysa true. */
  gunumuzOkumasi?: boolean;
  /**
   * dize_ceviri: akademik denetimden geçmemiş ama kaynaklı karşılık.
   * Doluysa arayüz kaynağı ve denetlenmediğini gösterir.
   */
  denetlenmemisKaynak?: string | null;
  /** Kaynak kitabe dizesinin kimliği (ör. KT-G-1). */
  kaynak: string;
}
