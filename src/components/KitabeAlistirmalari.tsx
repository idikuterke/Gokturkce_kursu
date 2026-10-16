import { useEffect, useMemo, useState } from 'react';
import { Loader2, ScrollText, Volume2, RotateCcw, Check, X } from 'lucide-react';
import type { UretilmisAlistirma, KorpusDizesi } from '../data/generated/tipler';
import { alistirmalariYukle, korpusuYukle } from '../data/generated/yukle';
import { shuffle } from '../utils/shuffle';
import { playChiselSound, playSuccessSound, playErrorSound } from '../utils/audio';
import { speakTamgaOrWord } from '../utils/speech';

interface KitabeAlistirmalariProps {
  onEarnXp: (xp: number) => void;
}

const ZORLUK_ADI: Record<number, string> = {
  1: 'Başlangıç',
  2: 'Kolay',
  3: 'Orta',
  4: 'Zor',
  5: 'Usta'
};

export const KitabeAlistirmalari: React.FC<KitabeAlistirmalariProps> = ({ onEarnXp }) => {
  const [hepsi, setHepsi] = useState<UretilmisAlistirma[] | null>(null);
  const [korpus, setKorpus] = useState<KorpusDizesi[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [zorluk, setZorluk] = useState(1);
  const [sira, setSira] = useState(0);
  const [secim, setSecim] = useState<string | null>(null);
  const [dogruSayisi, setDogruSayisi] = useState(0);

  // Üretilmiş içerik ~740 kB; yalnızca bu ekran açılınca indirilir.
  useEffect(() => {
    let iptal = false;
    Promise.all([alistirmalariYukle(), korpusuYukle()])
      .then(([a, k]) => {
        if (iptal) return;
        setHepsi(a);
        setKorpus(k);
      })
      .catch(() => {
        if (!iptal) setHata('Alıştırmalar yüklenemedi. Bağlantını kontrol edip tekrar dene.');
      });
    return () => { iptal = true; };
  }, []);

  // Yalnızca çoktan seçmeli okuma alıştırmaları; kelime kurma dersin içinde.
  const liste = useMemo(() => {
    if (!hepsi) return [];
    return hepsi.filter((a) => a.tur === 'runik_oku' && a.zorluk === zorluk).slice(0, 20);
  }, [hepsi, zorluk]);

  const aktif = liste[sira];
  const secenekler = useMemo(
    () => (aktif?.secenekler ? shuffle(aktif.secenekler) : []),
    // Soru değişince yeniden karıştır.
    [aktif?.id]
  );
  const kaynakDize = useMemo(
    () => (aktif && korpus ? korpus.find((d) => d.id === aktif.kaynak) ?? null : null),
    [aktif, korpus]
  );

  const zorlugaGec = (z: number) => {
    setZorluk(z);
    setSira(0);
    setSecim(null);
    setDogruSayisi(0);
  };

  const cevapla = (s: string) => {
    if (secim) return;
    setSecim(s);
    if (s === aktif.dogru) {
      playSuccessSound();
      setDogruSayisi((n) => n + 1);
      onEarnXp(5);
    } else {
      playErrorSound();
    }
  };

  const ileri = () => {
    setSecim(null);
    setSira((n) => n + 1);
  };

  if (hata) {
    return <p className="text-sm text-rose-400 text-center py-12">{hata}</p>;
  }

  if (!hepsi) {
    return (
      <div className="flex items-center justify-center gap-3 py-20 text-[#6C7F99] text-sm">
        <Loader2 className="w-5 h-5 animate-spin text-[#2BC4C4]" />
        Kitabe alıştırmaları yükleniyor...
      </div>
    );
  }

  const bitti = sira >= liste.length;

  return (
    <div className="space-y-6">
      <div className="p-5 bg-[#0C242A] border border-[#1E4D57] rounded-3xl space-y-3">
        <div className="flex items-center gap-2">
          <ScrollText className="w-4 h-4 text-[#2DD4BF]" />
          <h3 className="text-sm font-bold text-white font-serif">Kitabe Alıştırmaları</h3>
        </div>
        <p className="text-xs text-[#9FB0C6] leading-snug">
          Her soru Orhun yazıtlarından gerçek bir satıra dayanıyor. Şıklar da
          kitabelerde geçen gerçek kelimeler — tamgaları okumadan ayırt edilemezler.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {[1, 2, 3, 4, 5].map((z) => (
            <button
              key={z}
              onClick={() => zorlugaGec(z)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                zorluk === z
                  ? 'bg-[#2BC4C4] border-[#2BC4C4] text-[#0B1320]'
                  : 'bg-[#102B33] border-[#1E4D57] text-[#94A3B8] hover:text-white'
              }`}
            >
              {ZORLUK_ADI[z]}
            </button>
          ))}
        </div>
      </div>

      {bitti ? (
        <div className="p-8 bg-[#101B2C] border-2 border-[#2BC4C4] rounded-3xl text-center space-y-4">
          <h4 className="text-xl font-bold text-white font-serif">
            {ZORLUK_ADI[zorluk]} bölümü bitti
          </h4>
          <p className="text-sm text-[#9FB0C6]">
            {liste.length} sorudan <span className="text-[#37B36A] font-bold">{dogruSayisi}</span> doğru.
          </p>
          <button
            onClick={() => zorlugaGec(zorluk)}
            className="px-5 py-2.5 rounded-xl bg-[#2BC4C4] hover:bg-[#25adad] text-[#0B1320] font-bold text-sm inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Tekrar çöz
          </button>
        </div>
      ) : (
        <div className="p-6 bg-[#101B2C] border border-[#233754] rounded-3xl space-y-5">
          <div className="flex items-center justify-between text-xs text-[#6C7F99]">
            <span>Soru {sira + 1} / {liste.length}</span>
            <span className="font-mono">{dogruSayisi} doğru</span>
          </div>

          <div className="text-center space-y-3">
            <p className="text-sm text-[#9FB0C6]">Bu kelimenin okunuşu hangisidir?</p>
            <button
              onClick={() => { playChiselSound(); speakTamgaOrWord(aktif.dogru ?? aktif.runik, aktif.runik); }}
              title="Telaffuzu dinle"
              className="group inline-flex flex-col items-center gap-2 px-8 py-6 bg-[#0B1320] border-2 border-[#233754] hover:border-[#2BC4C4] rounded-3xl transition-colors"
            >
              <span className="runic text-6xl text-[#2BC4C4] leading-none">{aktif.runik}</span>
              <Volume2 className="w-4 h-4 text-[#6C7F99] group-hover:text-[#2BC4C4]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {secenekler.map((s) => {
              const dogru = s === aktif.dogru;
              const secili = secim === s;
              return (
                <button
                  key={s}
                  onClick={() => cevapla(s)}
                  disabled={!!secim}
                  className={`relative min-h-14 py-3 px-5 rounded-2xl border-2 text-center font-semibold text-sm transition-all flex items-center justify-center ${
                    secim
                      ? dogru
                        ? 'bg-[#37B36A]/20 border-[#37B36A] text-[#37B36A]'
                        : secili
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                        : 'bg-[#152338] border-[#233754] text-[#6C7F99]'
                      : 'bg-[#152338] border-[#233754] text-[#E6EDF5] hover:border-[#3B82F6]'
                  }`}
                >
                  {s}
                  {secim && dogru && <Check className="absolute right-4 w-4 h-4" />}
                  {secim && secili && !dogru && <X className="absolute right-4 w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {secim && (
            <div className="space-y-3 pt-1">
              {kaynakDize && (
                <div className="p-3 bg-[#0B1320] border border-[#233754] rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2DD4BF]">
                    Kaynak · {kaynakDize.kaynakAd} {kaynakDize.yuz} {kaynakDize.satir}
                  </span>
                  <p className="text-[11px] text-[#9FB0C6] font-mono leading-snug line-clamp-2">
                    {kaynakDize.transkripsiyon.slice(0, 150)}…
                  </p>
                  {kaynakDize.dogrulama.ceviri !== 'gecti' && (
                    <p className="text-[10px] text-amber-400/80">
                      Çeviri akademik denetimden geçmedi.
                    </p>
                  )}
                </div>
              )}
              <button
                onClick={ileri}
                className="w-full py-3 rounded-2xl bg-[#2BC4C4] hover:bg-[#25adad] text-[#0B1320] font-bold text-sm transition-colors active:scale-95"
              >
                Devam Et
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
