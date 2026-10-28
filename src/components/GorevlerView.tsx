import React, { useState } from 'react';
import { Hammer, ArrowRight, Check, AlertTriangle } from 'lucide-react';
import { GOREVLER, gorevleriSirala, Gorev } from '../data/gorevler';
import { KAZANIMLAR } from '../data/kazanimlar';
import { OgrenciProfili } from '../types';

/**
 * GÖREVLER — üretim odaklı işler
 *
 * Sonunda gösterilebilir bir şey kalan görevler. Görevler yeni araç
 * yazmıyor; var olan runik yazıcı, kitabe okuyucu ve çizim pratiğine
 * amaç veriyor.
 *
 * Tamamlama ÖĞRENCİNİN BEYANI. Uygulama "adını yazdın mı" diye
 * denetleyemez; beyan da ilerleme sayılmaz, XP vermez. Yalnız işaret
 * kalır ve çalışma raporuna girer.
 */

interface GorevlerViewProps {
  profil?: OgrenciProfili | null;
  onAracaGit: (sekme: string) => void;
}

const KEY = 'gokturkce_gorevler_v1';

export const GorevlerView: React.FC<GorevlerViewProps> = ({ profil, onAracaGit }) => {
  const [yapilan, setYapilan] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '{}');
    } catch {
      return {};
    }
  });

  const isaretle = (g: Gorev) => {
    setYapilan((onceki) => {
      const guncel = { ...onceki };
      if (guncel[g.id]) delete guncel[g.id];
      else guncel[g.id] = new Date().toISOString();
      try {
        localStorage.setItem(KEY, JSON.stringify(guncel));
      } catch {
        // saklanamadıysa oturum boyunca geçerli
      }
      return guncel;
    });
  };

  const liste = gorevleriSirala(GOREVLER, profil?.amaclar ?? []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div className="border-b border-zemin-4 pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-marka flex items-center gap-1.5">
          <Hammer className="w-3.5 h-3.5" aria-hidden="true" /> Üretim Görevleri
        </span>
        <h1 className="text-3xl font-bold text-white font-serif mt-1">Görevler</h1>
        <p className="text-sm text-metin-2 mt-1">
          Şık seçmek değil, bir şey üretmek. Her görevin sonunda
          gösterebileceğin bir çıktı kalır.
          {profil?.amaclar?.length
            ? ' Giriş sorularındaki amacına uyanlar önce geliyor.'
            : ''}
        </p>
      </div>

      <ul className="space-y-4">
        {liste.map((g) => {
          const bitti = !!yapilan[g.id];
          return (
            <li
              key={g.id}
              className={`rounded-2xl border p-5 space-y-3 transition-colors ${
                bitti ? 'border-basari/40 bg-zemin-2' : 'border-zemin-4 bg-zemin-2'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-white font-serif">{g.baslik}</h2>
                  <p className="text-xs text-metin-2 mt-1 leading-relaxed">{g.amac}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  {g.kazanim.map((k) => (
                    <span
                      key={k}
                      title={KAZANIMLAR[k].tanim}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zemin-3 border border-zemin-4 text-metin-3"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              <ol className="space-y-1 list-decimal list-inside">
                {g.adimlar.map((a, i) => (
                  <li key={i} className="text-xs text-metin-2 leading-relaxed">
                    {a}
                  </li>
                ))}
              </ol>

              {g.uyari && (
                <p className="text-[11px] text-amber-400/90 flex gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 p-2.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-px" aria-hidden="true" />
                  <span>{g.uyari}</span>
                </p>
              )}

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onAracaGit(g.sekme)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  Aracı aç
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => isaretle(g)}
                  aria-pressed={bitti}
                  className={`py-2.5 px-3 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition-colors ${
                    bitti
                      ? 'border-basari text-basari bg-zemin-3'
                      : 'border-zemin-4 text-metin-2 hover:text-white bg-zemin-3'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  {bitti ? 'Yaptım' : 'Yaptım olarak işaretle'}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="text-[11px] text-metin-3 text-center">
        İşaretleme kendi beyanın: XP getirmez, ilerleme sayılmaz. Yalnız
        çalışma raporunda görünür.
      </p>
    </div>
  );
};
