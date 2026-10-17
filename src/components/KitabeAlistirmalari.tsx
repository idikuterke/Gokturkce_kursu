import { useEffect, useMemo, useState } from 'react';
import { Loader2, ScrollText, Volume2, RotateCcw, Check, X, Hammer } from 'lucide-react';
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
  // Kelime kurma: tepsiye konan tamgalar ve havuzda kalanlar.
  const [tepsi, setTepsi] = useState<string[]>([]);
  const [havuz, setHavuz] = useState<string[]>([]);

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

  // Okuma ve kurma soruları dönüşümlü: aynı kelimeyi önce tanıyıp sonra
  // yazmak, tek tür soru sormaktan daha iyi pekiştiriyor.
  const liste = useMemo(() => {
    if (!hepsi) return [];
    const bandda = hepsi.filter((a) => a.zorluk === zorluk);
    const okuma = bandda.filter((a) => a.tur === 'runik_oku');
    const kurma = bandda.filter((a) => a.tur === 'kelime_kur');
    const ceviri = bandda.filter((a) => a.tur === 'kelime_ceviri');
    const dizeCeviri = bandda.filter((a) => a.tur === 'dize_ceviri');
    const karisik: UretilmisAlistirma[] = [];
    for (let i = 0; i < 8; i++) {
      if (okuma[i]) karisik.push(okuma[i]);
      if (kurma[i]) karisik.push(kurma[i]);
      if (ceviri[i]) karisik.push(ceviri[i]);
      if (dizeCeviri[i]) karisik.push(dizeCeviri[i]);
    }
    return karisik;
  }, [hepsi, zorluk]);

  const aktif = liste[sira];
  const secenekler = useMemo(
    () => (aktif?.secenekler ? shuffle(aktif.secenekler) : []),
    // Soru değişince yeniden karıştır.
    [aktif?.id]
  );
  useEffect(() => {
    if (aktif?.tur === 'kelime_kur') {
      // Tamgalar kod noktasına göre bölünür; runik tamgalar BMP dışında.
      setHavuz(shuffle([...aktif.runik]));
      setTepsi([]);
    }
  }, [aktif?.id, aktif?.tur, aktif?.runik]);

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

  const tamgaKoy = (indeks: number) => {
    if (secim) return;
    playChiselSound();
    setTepsi((t) => [...t, havuz[indeks]]);
    setHavuz((h) => h.filter((_, i) => i !== indeks));
  };

  const tamgaGeriAl = (indeks: number) => {
    if (secim) return;
    playChiselSound();
    setHavuz((h) => [...h, tepsi[indeks]]);
    setTepsi((t) => t.filter((_, i) => i !== indeks));
  };

  const kurmayiKontrolEt = () => {
    if (secim) return;
    const dogru = tepsi.join('') === aktif.runik;
    setSecim(dogru ? 'dogru' : 'yanlis');
    if (dogru) {
      playSuccessSound();
      setDogruSayisi((n) => n + 1);
      onEarnXp(5);
    } else {
      playErrorSound();
    }
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
      <div className="flex items-center justify-center gap-3 py-20 text-metin-3 text-sm">
        <Loader2 className="w-5 h-5 animate-spin text-marka" />
        Kitabe alıştırmaları yükleniyor...
      </div>
    );
  }

  const bitti = sira >= liste.length;

  return (
    <div className="space-y-6">
      <div className="p-5 bg-derin-3 border border-derin rounded-3xl space-y-3">
        <div className="flex items-center gap-2">
          <ScrollText className="w-4 h-4 text-marka-acik" />
          <h3 className="text-sm font-bold text-white font-serif">Kitabe Alıştırmaları</h3>
        </div>
        <p className="text-xs text-metin-2 leading-snug">
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
                  ? 'bg-marka border-marka text-zemin'
                  : 'bg-derin-2 border-derin text-metin-4 hover:text-white'
              }`}
            >
              {ZORLUK_ADI[z]}
            </button>
          ))}
        </div>
      </div>

      {bitti ? (
        <div className="p-8 bg-zemin-2 border-2 border-marka rounded-3xl text-center space-y-4">
          <h4 className="text-xl font-bold text-white font-serif">
            {ZORLUK_ADI[zorluk]} bölümü bitti
          </h4>
          <p className="text-sm text-metin-2">
            {liste.length} sorudan <span className="text-basari font-bold">{dogruSayisi}</span> doğru.
          </p>
          <button
            onClick={() => zorlugaGec(zorluk)}
            className="px-5 py-2.5 rounded-xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-sm inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Tekrar çöz
          </button>
        </div>
      ) : (
        <div className="p-6 bg-zemin-2 border border-zemin-4 rounded-3xl space-y-5">
          <div className="flex items-center justify-between text-xs text-metin-3">
            <span>Soru {sira + 1} / {liste.length}</span>
            <span className="font-mono">{dogruSayisi} doğru</span>
          </div>

          {aktif.tur === 'kelime_kur' ? (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <p className="text-sm text-metin-2 flex items-center justify-center gap-1.5">
                  <Hammer className="w-4 h-4 text-marka-acik" />
                  Bu kelimeyi tamgalarla <strong className="text-white">sağdan sola</strong> kurun
                </p>
                <button
                  onClick={() => { playChiselSound(); speakTamgaOrWord(aktif.transkripsiyon ?? '', aktif.runik); }}
                  title="Telaffuzu dinle"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zemin border border-zemin-4 hover:border-marka transition-colors"
                >
                  <span className="text-lg font-bold text-white font-serif">{aktif.transkripsiyon}</span>
                  <Volume2 className="w-4 h-4 text-metin-3" />
                </button>
              </div>

              {/* Tepsi: Göktürk yazısı sağdan sola; ilk konan tamga en sağda durur. */}
              <div
                dir="rtl"
                className={`min-h-20 p-4 rounded-2xl border-2 flex items-center justify-center gap-2 flex-wrap transition-colors ${
                  secim === 'dogru'
                    ? 'bg-basari/10 border-basari'
                    : secim === 'yanlis'
                    ? 'bg-rose-500/10 border-rose-500'
                    : 'bg-zemin-3 border-zemin-4'
                }`}
              >
                {tepsi.length === 0 ? (
                  <span dir="ltr" className="text-xs text-metin-3 italic">
                    Aşağıdaki tamgalara tıklayarak buraya yerleştirin...
                  </span>
                ) : (
                  tepsi.map((t, i) => (
                    <button
                      key={`${t}-${i}`}
                      onClick={() => tamgaGeriAl(i)}
                      title="Geri al"
                      className="min-w-14 h-14 px-3 rounded-xl bg-marka hover:bg-rose-500 text-zemin hover:text-white font-bold runic text-2xl whitespace-nowrap flex items-center justify-center transition-colors"
                    >
                      {t}
                    </button>
                  ))
                )}
              </div>

              {havuz.length > 0 && (
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {havuz.map((t, i) => (
                    <button
                      key={`${t}-${i}`}
                      onClick={() => tamgaKoy(i)}
                      className="min-w-14 h-14 px-3 rounded-xl bg-zemin-2 border-2 border-zemin-4 hover:border-marka text-white font-bold runic text-2xl whitespace-nowrap flex items-center justify-center transition-colors active:scale-95"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}

              {!secim && (
                <button
                  onClick={kurmayiKontrolEt}
                  disabled={tepsi.length === 0}
                  className="w-full py-3 rounded-2xl bg-marka hover:bg-marka-koyu disabled:opacity-40 disabled:cursor-not-allowed text-zemin font-bold text-sm transition-colors active:scale-95"
                >
                  Kontrol Et
                </button>
              )}

              {secim === 'yanlis' && (
                <p className="text-center text-sm text-rose-400">
                  Doğrusu: <span className="runic text-2xl text-white align-middle">{aktif.runik}</span>
                </p>
              )}
            </div>
          ) : (
          <>
          <div className="text-center space-y-3">
            <p className="text-sm text-metin-2">
              {aktif.tur === 'kelime_ceviri'
                ? `"${aktif.transkripsiyon}" kelimesi ne anlama geliyor?`
                : aktif.tur === 'dize_ceviri'
                  ? aktif.gunumuzOkumasi
                    ? 'Bu kitabe satırının günümüz okuması hangisidir?'
                    : 'Bu kitabe satırı ne anlama geliyor?'
                  : 'Bu kelimenin okunuşu hangisidir?'}
            </p>
            <button
              onClick={() => { playChiselSound(); speakTamgaOrWord(aktif.dogru ?? aktif.runik, aktif.runik); }}
              title="Telaffuzu dinle"
              className="group inline-flex flex-col items-center gap-2 px-8 py-6 bg-zemin border-2 border-zemin-4 hover:border-marka rounded-3xl transition-colors"
            >
              <span className="runic text-6xl text-marka leading-none">{aktif.runik}</span>
              <Volume2 className="w-4 h-4 text-metin-3 group-hover:text-marka" />
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
                        ? 'bg-basari/20 border-basari text-basari'
                        : secili
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                        : 'bg-zemin-3 border-zemin-4 text-metin-3'
                      : 'bg-zemin-3 border-zemin-4 text-metin hover:border-bilgi'
                  }`}
                >
                  {s}
                  {secim && dogru && <Check className="absolute right-4 w-4 h-4" />}
                  {secim && secili && !dogru && <X className="absolute right-4 w-4 h-4" />}
                </button>
              );
            })}
          </div>
          </>
          )}

          {secim && (
            <div className="space-y-3 pt-1">
              {kaynakDize && (
                <div className="p-3 bg-zemin border border-zemin-4 rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-marka-acik">
                    Kaynak · {kaynakDize.kaynakAd} {kaynakDize.yuz} {kaynakDize.satir}
                  </span>
                  <p className="text-[11px] text-metin-2 font-mono leading-snug line-clamp-2">
                    {kaynakDize.transkripsiyon.slice(0, 150)}…
                  </p>
                  {kaynakDize.dogrulama.ceviri !== 'gecti' && (
                    <p className="text-[10px] text-amber-400/80">
                      Çeviri akademik denetimden geçmedi.
                    </p>
                  )}
                  {aktif.denetlenmemisKaynak && (
                    <p className="text-[10px] text-amber-400/80">
                      {aktif.denetlenmemisKaynak} — yayından alınmıştır, ayrıca
                      denetlenmemiştir.
                    </p>
                  )}
                </div>
              )}
              <button
                onClick={ileri}
                className="w-full py-3 rounded-2xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-sm transition-colors active:scale-95"
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
