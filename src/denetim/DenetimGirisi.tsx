import React from 'react';

/**
 * Uygulamanin sag alt kosesinde duran, denetim ekranina goturen dugme.
 * Yalnizca gelistirme modunda cizilir — main.tsx icinde
 * import.meta.env.DEV ile korunur, uretim paketine girmez.
 */
export const DenetimGirisi: React.FC = () => (
  <button
    onClick={() => {
      window.location.hash = '#denetim';
    }}
    title="Denetim ekranını aç (cümlecik / dize / sözlük)"
    className="fixed bottom-4 right-4 z-50 rounded-full bg-uyari px-4 py-3 text-sm font-bold text-zemin shadow-lg transition-transform hover:scale-105"
  >
    ✎ Denetim
  </button>
);

export default DenetimGirisi;
