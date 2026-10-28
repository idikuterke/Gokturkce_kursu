import React, { useEffect, useState } from 'react';
import { Type } from 'lucide-react';

/**
 * YAZI BOYUTU DENETİMİ
 *
 * Hedef kitlede yaşlı yetişkinler de var; uygulamada yazıyı büyütmenin
 * yolu yoktu. Kök yazı boyutu değişince rem tabanlı bütün ölçüler
 * birlikte büyüyor (index.css'teki html[data-yazi] kuralları).
 *
 * Tarayıcının kendi yakınlaştırması da iş görür ama o, kişinin bütün
 * sitelerde ayar yapmasını ister; uygulamanın kendi denetimi olması
 * UDL'nin "algılama seçenekleri" ilkesinin karşılığı.
 */

export type Boyut = 'normal' | 'buyuk' | 'daha-buyuk';

const SECENEKLER: { id: Boyut; etiket: string; ornek: string }[] = [
  { id: 'normal', etiket: 'Normal', ornek: 'text-sm' },
  { id: 'buyuk', etiket: 'Büyük', ornek: 'text-base' },
  { id: 'daha-buyuk', etiket: 'Daha büyük', ornek: 'text-lg' },
];

const KEY = 'gokturkce_yazi_boyutu';

/** Seçimi <html> üzerine yazar; CSS oradan okuyor. */
export const yaziBoyutunuUygula = (b: Boyut): void => {
  if (b === 'normal') document.documentElement.removeAttribute('data-yazi');
  else document.documentElement.setAttribute('data-yazi', b);
};

/** Açılışta saklanan boyutu geri yükler. main.tsx'ten çağrılıyor. */
export const yaziBoyutunuYukle = (): void => {
  try {
    const kayit = localStorage.getItem(KEY) as Boyut | null;
    if (kayit) yaziBoyutunuUygula(kayit);
  } catch {
    // erişilemiyorsa varsayılan boyut
  }
};

export const YaziBoyutu: React.FC = () => {
  const [boyut, setBoyut] = useState<Boyut>(() => {
    try {
      return (localStorage.getItem(KEY) as Boyut | null) ?? 'normal';
    } catch {
      return 'normal';
    }
  });

  useEffect(() => {
    yaziBoyutunuUygula(boyut);
    try {
      localStorage.setItem(KEY, boyut);
    } catch {
      // saklanamadıysa oturum boyunca geçerli
    }
  }, [boyut]);

  return (
    <section
      aria-labelledby="yazi-baslik"
      className="rounded-2xl border border-zemin-4 bg-zemin-2 p-5 space-y-3"
    >
      <h2 id="yazi-baslik" className="text-sm font-bold text-white flex items-center gap-2">
        <Type className="w-4 h-4 text-marka" aria-hidden="true" />
        Yazı boyutu
      </h2>
      <div className="flex gap-2" role="group" aria-labelledby="yazi-baslik">
        {SECENEKLER.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setBoyut(s.id)}
            aria-pressed={boyut === s.id}
            className={`flex-1 py-2.5 px-3 rounded-xl border font-bold transition-colors ${s.ornek} ${
              boyut === s.id
                ? 'border-marka bg-zemin-3 text-white'
                : 'border-zemin-4 bg-zemin-3 text-metin-2 hover:text-white'
            }`}
          >
            {s.etiket}
          </button>
        ))}
      </div>
      <p className="text-[11px] text-metin-3">
        Seçimin saklanıyor; uygulamanın tamamında geçerli.
      </p>
    </section>
  );
};
