/**
 * GÖRSEL KAYITLARI
 *
 * Kayıtlar public/gorsel/KAYNAK.md'den birebir alındı. İki tür var ve
 * ikisi arayüzde AYNI BİÇİMDE sunulmaz:
 *
 *   "sahne"  — difüzyon modeliyle (Flux1-dev) üretilmiş, METİNSİZ görsel.
 *              Gerçek anıtın fotoğrafı DEĞİL; canlandırmadır. Arayüzde
 *              böyle etiketlenir, yoksa öğrenen bunu Orhun Vadisi'nde
 *              çekilmiş bir kare sanır.
 *
 *   "kazıma" — taş dokusu modelden, ama üzerindeki tamgalar engine/gorsel/
 *              kazi.py ile kaynaktaki Unicode diziden deterministik olarak
 *              kazındı ve maske kontrolünden geçti. Yazı uydurma değil;
 *              hangi dizgi olduğu ve nereden geldiği burada yazılı.
 *
 * İlke (projenin kuralı): difüzyon modeli hiçbir zaman tamga çizmez.
 */

export type GorselTuru = 'sahne' | 'kazıma';

export interface Gorsel {
  id: string;
  /** public/ altındaki yedek JPEG. webp sürümleri gorsel/web/ altında. */
  jpg: string;
  alt: string;
  /** Arayüzde görselin altında görünen kısa açıklama. */
  baslik: string;
  tur: GorselTuru;
  /** Nasıl üretildiği — etikette gösterilir. */
  uretim: string;
  /** Kazıma görsellerde taşa işlenen dizi ve nereden geldiği. */
  tamga?: { dizi: string; okunus: string; kaynak: string; dogrulama: string };
}

export const GORSELLER: Record<string, Gorsel> = {
  'orhun-bengu-tas': {
    id: 'orhun-bengu-tas',
    jpg: '/gorsel/orhun-bengu-tas.jpg',
    alt: 'Bozkırda tek başına duran, yüzü boş granit bengü taş',
    baslik: 'Bozkırda bir bengü taş',
    tur: 'sahne',
    uretim: 'Flux1-dev (ComfyUI), seed 1893, metinsiz istem',
  },
  'irk-bitig-sayfa': {
    id: 'irk-bitig-sayfa',
    jpg: '/gorsel/irk-bitig-sayfa.jpg',
    alt: 'Koyu ahşap masada açık duran, sayfaları boş eski kâğıt defter',
    baslik: 'Irk Bitig gibi bir defter',
    tur: 'sahne',
    uretim: 'Flux1-dev (ComfyUI), seed 907, metinsiz istem',
  },
  'keski-firca': {
    id: 'keski-firca',
    jpg: '/gorsel/keski-firca.jpg',
    alt: 'Solda taş üzerinde demir keski ve tokmak, sağda boş kâğıtta fırça',
    baslik: 'Taşa keski, kâğıda fırça',
    tur: 'sahne',
    uretim: 'Flux1-dev (ComfyUI), seed 7440, metinsiz istem',
  },
  'tengri-tas': {
    id: 'tengri-tas',
    jpg: '/gorsel/tengri-tas.jpg',
    alt: 'Granit yüzeye kazınmış 𐱅𐰭𐰼𐰃 (teŋri) yazısı',
    baslik: 'Taşa kazınmış teŋri',
    tur: 'kazıma',
    uretim: 'taş dokusu Flux1-dev (seed 552) + engine/gorsel/kazi.py',
    tamga: {
      dizi: '𐱅𐰭𐰼𐰃',
      okunus: 'teŋri',
      kaynak: 'EDPT s. 523',
      dogrulama: 'maske kontrolü: t-ŋ-r-ı · geçerli (10.09.2026)',
    },
  },
  'tas-esen': {
    id: 'tas-esen',
    jpg: '/gorsel/tas-esen.jpg',
    alt: 'Granit yüzeye kazınmış 𐰾𐰤 (esen) yazısı',
    baslik: 'Taşa kazınmış esen',
    tur: 'kazıma',
    uretim: 'taş dokusu Flux1-dev + engine/gorsel/kazi.py',
    tamga: {
      dizi: '𐰾𐰤',
      okunus: 'esen',
      kaynak: 'ince sıralı yazım',
      dogrulama: 'maske kontrolü: s-n · geçerli',
    },
  },
  'tas-kok': {
    id: 'tas-kok',
    jpg: '/gorsel/tas-kok.jpg',
    alt: 'Granit yüzeye kazınmış 𐰚𐰜 (kök) yazısı',
    baslik: 'Taşa kazınmış kök',
    tur: 'kazıma',
    uretim: 'taş dokusu Flux1-dev + engine/gorsel/kazi.py',
    tamga: {
      dizi: '𐰚𐰜',
      okunus: 'kök',
      kaynak: 'EDPT s. 708',
      dogrulama: 'maske kontrolü: k-ök · geçerli',
    },
  },
  'tas-bir-otuz': {
    id: 'tas-bir-otuz',
    jpg: '/gorsel/tas-bir-otuz.jpg',
    alt: 'Granit yüzeye kazınmış 𐰋𐰃𐰼 : 𐰆𐱃𐰔 (bir otuz) yazısı',
    baslik: 'Taşa kazınmış bir otuz (21)',
    tur: 'kazıma',
    uretim: 'taş dokusu Flux1-dev + engine/gorsel/kazi.py',
    tamga: {
      dizi: '𐰋𐰃𐰼 : 𐰆𐱃𐰔',
      okunus: 'bir otuz',
      kaynak: 'KT-G-1',
      dogrulama: 'maske kontrolü: 7 glifin tamamı okundu · geçerli',
    },
  },
};

/** <picture> için webp yolları; üretimi engine/gorsel/web-surum.py. */
export const webYollari = (g: Gorsel) => ({
  kucuk: `/gorsel/web/${g.id}-672.webp`,
  buyuk: `/gorsel/web/${g.id}-1344.webp`,
});
