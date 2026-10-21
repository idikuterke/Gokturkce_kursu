import React from 'react';
import { Sparkles, Hammer } from 'lucide-react';
import { GORSELLER, webYollari, type Gorsel } from '../data/gorseller';

interface SahneProps {
  /** GORSELLER anahtarı. */
  gorsel: string;
  /** Görselin altında açıklama ve köken etiketi gösterilsin mi. */
  etiket?: boolean;
  /** Yükseklik sınıfı; varsayılan geniş bant. */
  yukseklik?: string;
  /** Üzerine bindirilecek içerik (başlık vb.). */
  children?: React.ReactNode;
  className?: string;
  /** İlk ekranda görünüyorsa eager yükle. */
  oncelikli?: boolean;
}

/** Görselin ne olduğunu açık söyleyen rozet. */
const KokenRozeti: React.FC<{ g: Gorsel }> = ({ g }) =>
  g.tur === 'sahne' ? (
    <span
      title={g.uretim}
      className="inline-flex items-center gap-1 text-[10px] leading-none px-2 py-1 rounded-full bg-black/55 text-metin-2 border border-white/10 backdrop-blur-sm"
    >
      <Sparkles className="w-3 h-3 flex-shrink-0" />
      Canlandırma — yapay zekâ ile üretildi, anıtın fotoğrafı değil
    </span>
  ) : (
    <span
      title={`${g.uretim} · ${g.tamga?.dogrulama ?? ''}`}
      className="inline-flex items-center gap-1 text-[10px] leading-none px-2 py-1 rounded-full bg-black/55 text-marka-acik border border-marka-acik/25 backdrop-blur-sm"
    >
      <Hammer className="w-3 h-3 flex-shrink-0" />
      Yazı {g.tamga?.kaynak}&apos;den kazındı — doğrulandı
    </span>
  );

/**
 * Üretilmiş görselleri tek bir yerden, kökeni söylenerek gösterir.
 *
 * Etiket isteğe bağlı değil, varsayılan: bu görseller difüzyon modeliyle
 * üretildi ve bir kısmı taş dokusu üzerine kazınmış gerçek tamga taşıyor.
 * İkisini de etiketsiz göstermek öğreneni yanıltır — biri gerçek anıt
 * fotoğrafı sanılır, diğerinin yazısı uydurma sanılır.
 */
export const Sahne: React.FC<SahneProps> = ({
  gorsel,
  etiket = true,
  yukseklik = 'h-40 sm:h-56',
  children,
  className = '',
  oncelikli = false,
}) => {
  const g = GORSELLER[gorsel];
  if (!g) return null;
  const { kucuk, buyuk } = webYollari(g);

  return (
    <figure className={`relative overflow-hidden rounded-2xl bg-zemin-2 ${className}`}>
      <picture>
        <source
          type="image/webp"
          srcSet={`${kucuk} 672w, ${buyuk} 1344w`}
          sizes="(max-width: 640px) 100vw, 1100px"
        />
        <img
          src={g.jpg}
          alt={g.alt}
          width={1344}
          height={768}
          loading={oncelikli ? 'eager' : 'lazy'}
          decoding="async"
          className={`w-full ${yukseklik} object-cover select-none`}
          draggable={false}
        />
      </picture>

      {/* Alttan karartma: üstteki metin her görselde okunur kalsın. */}
      <div className="absolute inset-0 bg-gradient-to-t from-zemin via-zemin/25 to-transparent pointer-events-none" />

      {children && <div className="absolute inset-0 flex items-end p-4 sm:p-6">{children}</div>}

      {etiket && (
        <figcaption className="absolute left-3 bottom-3 right-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-metin font-semibold drop-shadow">{g.baslik}</span>
          {g.tamga && (
            <span className="runic text-sm text-marka-acik drop-shadow" aria-hidden="true">
              {g.tamga.dizi}
            </span>
          )}
          <KokenRozeti g={g} />
        </figcaption>
      )}
    </figure>
  );
};
