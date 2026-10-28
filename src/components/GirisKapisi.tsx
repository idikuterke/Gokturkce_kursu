import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, Sparkles } from 'lucide-react';
import { GIRIS_SORULARI, ASAMA_ADI, amacCumlesi, Asama } from '../data/girisSorulari';
import { OgrenciProfili } from '../types';

/**
 * GİRİŞ KAPISI — ilk açılışta bir kez sorulan ihtiyaç analizi.
 *
 * Üç soru ve bir özet. Yanıtlar öğrenme yolunun nereden açılacağını
 * belirler ve eğitmenin ihtiyaç analizi kaydı olur (ISO 29993 §7).
 *
 * İKİ KURAL:
 *  1. Beyan ilerleme değildir. "Alfabeyi okuyabiliyorum" diyen kişinin
 *     yolu o aşamadan AÇILIR, dersleri tamamlanmış SAYILMAZ. XP'si
 *     sıfır kalır, grafiği boş başlar. Sahte veri üretmiyoruz.
 *  2. Atlanabilir. Yetişkini soruya hapsetmek, öz yönetim ilkesinin
 *     tam tersi. Atlayan kişi en baştan başlar; profili `atlandi`
 *     olarak işaretlenir ki analiz eksik olduğu bilinsin.
 */

interface GirisKapisiProps {
  onTamamla: (profil: OgrenciProfili) => void;
  /** Profil zaten varsa (yeniden yanıtlama) başlangıç değerleri. */
  mevcut?: OgrenciProfili;
}

type Yanitlar = { amac: string[]; onBilgi: string[]; sure: string[] };

const bosYanit: Yanitlar = { amac: [], onBilgi: [], sure: [] };

export const GirisKapisi: React.FC<GirisKapisiProps> = ({ onTamamla, mevcut }) => {
  const [adim, setAdim] = useState(0);
  const [yanitlar, setYanitlar] = useState<Yanitlar>(() => ilkYanitlar(mevcut));

  const basligaOdak = useRef<HTMLHeadingElement>(null);
  const sonAdim = GIRIS_SORULARI.length; // özet adımı
  useEffect(() => {
    basligaOdak.current?.focus();
  }, [adim]);

  const soru = GIRIS_SORULARI[adim];
  const secili = soru ? yanitlar[soru.id] : [];
  const ilerleyebilir = adim === sonAdim || secili.length > 0;

  const sec = (secenekId: string) => {
    if (!soru) return;
    setYanitlar((y) => {
      const simdiki = y[soru.id];
      if (!soru.cokluSecim) return { ...y, [soru.id]: [secenekId] };
      return {
        ...y,
        [soru.id]: simdiki.includes(secenekId)
          ? simdiki.filter((x) => x !== secenekId)
          : [...simdiki, secenekId],
      };
    });
  };

  const profilKur = (atlandi = false): OgrenciProfili => {
    const onBilgiId = yanitlar.onBilgi[0] ?? 'sifir';
    const onBilgiSecenek = GIRIS_SORULARI[1].secenekler.find((s) => s.id === onBilgiId);
    const sureSecenek = GIRIS_SORULARI[2].secenekler.find((s) => s.id === yanitlar.sure[0]);
    return {
      amaclar: yanitlar.amac,
      onBilgi: onBilgiId,
      baslangic: (onBilgiSecenek?.baslangic ?? 'alfabe') as Asama,
      haftalikDakika: sureSecenek?.dakika ?? 0,
      tarih: new Date().toISOString(),
      ...(atlandi ? { atlandi: true } : {}),
    };
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-zemin"
      role="dialog"
      aria-modal="true"
      aria-labelledby="giris-baslik"
    >
      <div className="min-h-full flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl">
          {/* Üst şerit: nerede olduğunu göster */}
          <div className="flex items-center gap-2 mb-6">
            <Compass className="w-4 h-4 text-marka shrink-0" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-marka">
              Başlangıç
            </span>
            <div
              className="flex-1 flex gap-1.5 ml-2"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={sonAdim + 1}
              aria-valuenow={adim + 1}
              aria-label={`Adım ${adim + 1} / ${sonAdim + 1}`}
            >
              {Array.from({ length: sonAdim + 1 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= adim ? 'bg-marka' : 'bg-zemin-4'
                  }`}
                />
              ))}
            </div>
          </div>

          {soru ? (
            <fieldset className="border-0 p-0 m-0">
              <legend className="w-full">
                <h2
                  id="giris-baslik"
                  ref={basligaOdak}
                  tabIndex={-1}
                  className="text-2xl md:text-3xl font-bold text-white font-serif outline-none"
                >
                  {soru.baslik}
                </h2>
                <p className="text-sm text-metin-2 mt-2">{soru.altBaslik}</p>
              </legend>

              <div className="mt-6 space-y-3">
                {soru.secenekler.map((s) => {
                  const isaretli = secili.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => sec(s.id)}
                      aria-pressed={isaretli}
                      className={`w-full text-left rounded-2xl border p-4 transition-colors flex items-start gap-3 ${
                        isaretli
                          ? 'border-marka bg-zemin-3'
                          : 'border-zemin-4 bg-zemin-2 hover:border-marka'
                      }`}
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 shrink-0 rounded-md border flex items-center justify-center ${
                          isaretli ? 'bg-marka border-marka' : 'border-zemin-4'
                        }`}
                        aria-hidden="true"
                      >
                        {isaretli && <Check className="w-3.5 h-3.5 text-zemin" />}
                      </span>
                      <span>
                        <span className="block font-bold text-white text-sm">{s.etiket}</span>
                        {s.aciklama && (
                          <span className="block text-xs text-metin-2 mt-0.5">{s.aciklama}</span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ) : (
            <Ozet yanitlar={yanitlar} profil={profilKur()} baslikRef={basligaOdak} />
          )}

          {/* Gezinme */}
          <div className="mt-8 flex items-center gap-3">
            {adim > 0 && (
              <button
                type="button"
                onClick={() => setAdim((a) => a - 1)}
                className="py-3 px-4 rounded-xl bg-zemin-3 border border-zemin-4 text-metin-2 hover:text-white text-sm font-bold flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Geri
              </button>
            )}
            <button
              type="button"
              disabled={!ilerleyebilir}
              onClick={() => (adim === sonAdim ? onTamamla(profilKur()) : setAdim((a) => a + 1))}
              className="flex-1 py-3 px-4 rounded-xl bg-marka hover:bg-marka-koyu disabled:opacity-40 disabled:cursor-not-allowed text-zemin font-bold text-sm flex items-center justify-center gap-1.5 transition-colors"
            >
              {adim === sonAdim ? 'Başla' : 'Devam'}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {adim < sonAdim && (
            <button
              type="button"
              onClick={() => onTamamla(profilKur(true))}
              className="w-full mt-3 py-2 text-xs text-metin-3 hover:text-metin-2 underline underline-offset-2 transition-colors"
            >
              Şimdilik atla, en baştan başlayayım
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/** Son adım: ne dediğini geri okut, sonra başlat. */
const Ozet: React.FC<{
  yanitlar: Yanitlar;
  profil: OgrenciProfili;
  baslikRef: React.RefObject<HTMLHeadingElement | null>;
}> = ({ yanitlar, profil, baslikRef }) => {
  const sure = GIRIS_SORULARI[2].secenekler.find((s) => s.id === yanitlar.sure[0]);
  const satirlar: { etiket: string; deger: string }[] = [
    { etiket: 'Amacın', deger: amacCumlesi(yanitlar.amac) },
    { etiket: 'Başlangıç', deger: ASAMA_ADI[profil.baslangic] },
    { etiket: 'Haftalık süre', deger: sure ? sure.etiket : 'Belirtmedin' },
  ];
  return (
    <div>
      <h2
        id="giris-baslik"
        ref={baslikRef}
        tabIndex={-1}
        className="text-2xl md:text-3xl font-bold text-white font-serif outline-none"
      >
        Yolun hazır
      </h2>
      <p className="text-sm text-metin-2 mt-2">
        İstediğin zaman profilinden değiştirebilirsin.
      </p>

      <dl className="mt-6 rounded-2xl border border-zemin-4 bg-zemin-2 divide-y divide-zemin-4">
        {satirlar.map((s) => (
          <div key={s.etiket} className="flex items-baseline justify-between gap-4 p-4">
            <dt className="text-xs uppercase tracking-wider text-metin-3 shrink-0">{s.etiket}</dt>
            <dd className="text-sm text-white font-bold text-right">{s.deger}</dd>
          </div>
        ))}
      </dl>

      {profil.baslangic !== 'alfabe' && (
        <p className="mt-4 text-xs text-metin-2 leading-relaxed flex gap-2 rounded-xl border border-zemin-4 bg-zemin-3 p-3">
          <Sparkles className="w-4 h-4 text-marka shrink-0 mt-px" aria-hidden="true" />
          <span>
            <strong className="text-white">{ASAMA_ADI[profil.baslangic]}</strong> aşamasına kadar
            olan üniteler kendi beyanınla açılıyor — tamamlanmış sayılmıyor. Önceki üniteler açık
            kalır, istediğinde geri dönersin.
          </span>
        </p>
      )}
    </div>
  );
};

/** Yeniden yanıtlamada, mevcut profili form durumuna geri çevirir. */
function ilkYanitlar(mevcut?: OgrenciProfili): Yanitlar {
  return mevcut
    ? {
        amac: mevcut.amaclar,
        onBilgi: [mevcut.onBilgi],
        sure: [
          GIRIS_SORULARI[2].secenekler.find((s) => s.dakika === mevcut.haftalikDakika)?.id ?? '',
        ].filter(Boolean),
      }
    : bosYanit;
}
