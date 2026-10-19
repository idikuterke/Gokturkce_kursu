import React, { useState } from 'react';
import { PencilLine } from 'lucide-react';

/**
 * Denetim ekranina goturen dugme.
 *
 * Eskiden parlak turuncu, buyuk ve icerigin ustundeydi; tanitimda
 * gosterirken ilk goze carpan sey oluyordu. Artik kosede kucuk ve
 * soluk duruyor, uzerine gelince aciliyor. Islev ayni.
 *
 * Yalnizca gelistirme modunda ya da VITE_DENETIM=acik ile derlenmis
 * kapali tanitim surumunde cizilir (main.tsx icinde korunuyor).
 */
export const DenetimGirisi: React.FC = () => {
  const [acik, setAcik] = useState(false);
  return (
    <button
      onClick={() => {
        window.location.hash = '#denetim';
      }}
      onMouseEnter={() => setAcik(true)}
      onMouseLeave={() => setAcik(false)}
      onFocus={() => setAcik(true)}
      onBlur={() => setAcik(false)}
      title="Denetim ekranını aç (cümlecik / dize / sözlük)"
      aria-label="Denetim ekranını aç"
      className={`fixed bottom-3 left-3 z-50 flex items-center gap-1.5 rounded-full border border-zemin-4 bg-zemin-2/80 px-2.5 py-1.5 text-[11px] font-semibold text-metin-3 backdrop-blur transition-all hover:border-uyari hover:text-uyari ${
        acik ? 'opacity-100' : 'opacity-35'
      }`}
    >
      <PencilLine className="h-3.5 w-3.5" />
      {acik && <span>Denetim</span>}
    </button>
  );
};

export default DenetimGirisi;
