import { Exercise, KazanimKodu, Lesson } from '../types';
import { TAMGALAR } from './tamgalarData';

/**
 * KAZANIM TABLOSU — docs/olcme/olcme-plani.md
 *
 * Tablo uydurulmadı: ön test / son test formları (A/B) zaten bu sekiz
 * kazanımı ölçüyor. Ders kartı da aynı tabloyu kullanıyor ki "derste ne
 * öğrendim" ile "testte ne ölçüldü" ayrışmasın — ISO 29993'ün tasarım
 * (§8) ve ölçme (§12) maddelerinin istediği hizalama budur.
 *
 * `fiil` alanı kartta gösterilen cümledir: öğrenci "bunu yapabileceksin"
 * diye okur, "bu kazanım" diye değil. Knowles'un "öğrenme nedenini bilme"
 * varsayımı soyut başlıkla değil, somut yapabilirlikle karşılanır.
 */
export interface Kazanim {
  kod: KazanimKodu;
  /** Ölçme planındaki tanım, birebir. */
  tanim: string;
  /** Kartta gösterilen "…yapabileceksin" cümlesi. */
  fiil: string;
  /** Ölçme planındaki zorluk (1-5). */
  zorluk: number;
}

export const KAZANIMLAR: Record<KazanimKodu, Kazanim> = {
  K1: {
    kod: 'K1',
    tanim: 'Ünlü tamgasını tanıma',
    fiil: 'Ünlü tamgalarını tanıyabileceksin',
    zorluk: 1,
  },
  K2: {
    kod: 'K2',
    tanim: 'Kalın/ince ünsüz ayrımı',
    fiil: 'Kalın ve ince ünsüz tamgalarını ayırabileceksin',
    zorluk: 2,
  },
  K3: {
    kod: 'K3',
    tanim: 'Hece damgasını okuma',
    fiil: 'Hece damgalarını okuyabileceksin',
    zorluk: 3,
  },
  K4: {
    kod: 'K4',
    tanim: 'İmla: sözcüğü tamgalarla yazma',
    fiil: 'Bir sözcüğü tamgalarla yazabileceksin',
    zorluk: 3,
  },
  K5: {
    kod: 'K5',
    tanim: 'Sayı mantığı (hedef onluk)',
    fiil: 'Orhon sayılarını çözebileceksin',
    zorluk: 3,
  },
  K6: {
    kod: 'K6',
    tanim: 'Yazıt sözcüğünü okuma',
    fiil: 'Yazıttaki bir sözcüğü okuyabileceksin',
    zorluk: 4,
  },
  K7: {
    kod: 'K7',
    tanim: 'Sözcük anlamı',
    fiil: 'Sözcüğün anlamını söyleyebileceksin',
    zorluk: 4,
  },
  K8: {
    kod: 'K8',
    tanim: 'Yazıt pasajını okuma',
    fiil: 'Bir kitabe satırını baştan sona okuyabileceksin',
    zorluk: 5,
  },
};

/** Tamgadan sınıfına: ünlü mü, kutuplu ünsüz mü, hece damgası mı. */
const TAMGA_SINIFI = new Map(TAMGALAR.map((t) => [t.rune, t.category]));

/** Bir metindeki runik tamgaların sınıflarını toplar. */
const siniflar = (...metinler: (string | undefined)[]): Set<string> => {
  const bulunan = new Set<string>();
  for (const m of metinler) {
    if (!m) continue;
    for (const c of m) {
      const s = TAMGA_SINIFI.get(c);
      if (s) bulunan.add(s);
    }
  }
  return bulunan;
};

/**
 * Açık kazanımı olmayan (elle yazılmış) alıştırmalar için çıkarım.
 *
 * Üretilmiş alıştırmalar kodunu üretim noktasında taşıyor; burası yalnız
 * curriculumData.ts'teki elle yazılmış 39 alıştırma için. Çıkarım
 * alıştırmanın NE YAPTIRDIĞINA bakıyor: tamga sınıfı ve alıştırma türü.
 */
const cikarim = (ex: Exercise): KazanimKodu[] => {
  if (ex.type === 'word_builder' || ex.type === 'cloze') return ['K4'];
  if (ex.type === 'translation') return ['K7'];
  // İmla kuralını tanıma: kuralın kendisi kalın/ince uyumu üzerine.
  if (ex.type === 'identify_rule') return ['K2'];

  const sinif = siniflar(
    ex.runePrompt,
    ...(ex.options ?? []),
    ...(ex.pairs ?? []).map((p) => p.rune)
  );
  const kodlar: KazanimKodu[] = [];
  if (sinif.has('unluler')) kodlar.push('K1');
  if (sinif.has('kutuplu')) kodlar.push('K2');
  if (sinif.has('ligatur')) kodlar.push('K3');
  return kodlar;
};

/** Tek alıştırmanın kazanımları: açık kod varsa o, yoksa çıkarım. */
export const alistirmaKazanimlari = (ex: Exercise): KazanimKodu[] =>
  ex.kazanim?.length ? ex.kazanim : cikarim(ex);

/**
 * Dersin kazanımları: alıştırmalarının birleşimi, zorluğa göre sıralı.
 * Hiçbir alıştırma kod vermiyorsa boş döner — kart o zaman gösterilmez.
 * Boş kartı uydurma bir cümleyle doldurmuyoruz.
 */
export const dersKazanimlari = (ders: Lesson): Kazanim[] => {
  const kodlar = new Set<KazanimKodu>();
  for (const ex of ders.exercises) for (const k of alistirmaKazanimlari(ex)) kodlar.add(k);
  return [...kodlar].map((k) => KAZANIMLAR[k]).sort((a, b) => a.zorluk - b.zorluk);
};
