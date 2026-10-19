import React, { useEffect, useState } from 'react';
import { Lock, KeyRound } from 'lucide-react';

/**
 * DEMO ERİŞİM KAPISI
 *
 * Uygulama henüz herkese açık değil. Kapı, rastgele bir ziyaretçinin
 * yarım içeriği görmesini engeller: doğru erişim kodu girilmeden
 * uygulama render edilmez.
 *
 * NE DEĞİLDİR — açıkça söylemek gerekir: bu bir GÜVENLİK duvarı değil,
 * bir GÖRÜNÜRLÜK kapısıdır. Uygulama statik bir paket; dersler, sözlük
 * ve yazıt verisi tarayıcıya inen JS dosyasının içinde. Kodu bilmeyen
 * biri arayüzü göremez, ama paketi indirip içindeki veriyi okuyabilir.
 * İçeriğin gerçekten korunması gerekirse veri sunucu tarafına taşınmalı
 * ve istek başına yetkilendirilmeli — bu, demo için gereğinden büyük
 * bir iş.
 *
 * Kod `VITE_DEMO_KODU` ile derleme sırasında gömülür. Boş bırakılırsa
 * kapı hiç çıkmaz (geliştirme ve herkese açık sürüm için).
 */

const KOD = (import.meta.env.VITE_DEMO_KODU ?? '').trim();
const ANAHTAR = 'gokturkce_demo_erisim';

/** Kodun kendisini saklamıyoruz; yalnız "geçti" damgası tutuluyor. */
const damga = (kod: string): string => {
  let h = 2166136261;
  for (let i = 0; i < kod.length; i++) {
    h ^= kod.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
};

export const kapiAcikMi = (): boolean => {
  if (!KOD) return true;
  try {
    return localStorage.getItem(ANAHTAR) === damga(KOD);
  } catch {
    return false;
  }
};

export const ErisimKapisi: React.FC<{ onAcildi: () => void }> = ({ onAcildi }) => {
  const [deger, setDeger] = useState('');
  const [hata, setHata] = useState(false);

  // Bağlantıya kod eklenebilsin: .../#kod=XXXX ya da ?kod=XXXX
  // Demoda hocaya tek bağlantı göndermek, kod yazdırmaktan kolay.
  useEffect(() => {
    const adres = new URLSearchParams(
      window.location.search || window.location.hash.replace(/^#/, '?')
    );
    const gelen = adres.get('kod');
    if (gelen && gelen === KOD) {
      try {
        localStorage.setItem(ANAHTAR, damga(KOD));
      } catch {
        /* özel sekmede yazılamayabilir; o zaman elle girilir */
      }
      onAcildi();
    }
  }, [onAcildi]);

  const dene = (e: React.FormEvent) => {
    e.preventDefault();
    if (deger.trim() !== KOD) {
      setHata(true);
      return;
    }
    try {
      localStorage.setItem(ANAHTAR, damga(KOD));
    } catch {
      /* saklanamazsa her açılışta sorulur */
    }
    onAcildi();
  };

  return (
    <div className="min-h-dvh flex items-center justify-center bg-zemin px-6">
      <form
        onSubmit={dene}
        className="w-full max-w-sm space-y-5 p-7 bg-zemin-2 border border-zemin-4 rounded-3xl text-center"
      >
        <div className="flex justify-center">
          <span className="runic text-5xl text-marka">𐱅𐰇𐰼𐰜</span>
        </div>
        <div className="space-y-1.5">
          <h1 className="text-lg font-bold text-white font-serif">Göktürkçe Öğrenek</h1>
          <p className="text-xs text-metin-2 leading-relaxed">
            Bu sürüm geliştirme aşamasında ve kapalı bir tanıtımdır.
            Görmek için size verilen erişim kodunu girin.
          </p>
        </div>

        <label className="block text-left space-y-1.5">
          <span className="text-xs font-semibold text-metin-2 flex items-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5" /> Erişim kodu
          </span>
          <input
            type="text"
            value={deger}
            onChange={(e) => {
              setDeger(e.target.value);
              setHata(false);
            }}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            className="w-full px-3 py-2.5 rounded-xl bg-zemin border border-zemin-4 text-white text-sm tracking-wide focus:outline-none focus:border-marka"
            placeholder="••••••"
          />
        </label>

        {hata && (
          <p className="text-xs text-uyari-acik">Kod doğru değil. Tekrar deneyin.</p>
        )}

        <button
          type="submit"
          className="w-full py-2.5 rounded-xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Gir
        </button>

        <p className="text-[11px] text-metin-3 leading-relaxed">
          Kodunuz yoksa bu sayfa size açık değildir. İçerik hazır olduğunda
          herkese açılacaktır.
        </p>
      </form>
    </div>
  );
};

export default ErisimKapisi;
