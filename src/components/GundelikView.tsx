import React, { useEffect, useMemo, useState } from 'react';
import { Volume2, Check, X, Info } from 'lucide-react';
import { shuffle } from '../utils/shuffle';
import { speakTamgaOrWord } from '../utils/speech';
import { playChiselSound } from '../utils/audio';

interface GundelikKelime {
  id: string;
  kelime: string;
  tema: string;
  runik: string;
  tanikli: boolean;
  tanikDize: string | null;
  uretilenRunik: string;
  tamgaSayisi: number;
  sira: 'kalin' | 'ince';
  adimlar: string[];
  zorluk: number;
}

interface GundelikVeri {
  uyari: string;
  kaynak: string;
  kelimeler: GundelikKelime[];
}

/**
 * Gündelik Türkçeyi Göktürk harfleriyle yazma alıştırması.
 *
 * Kitabe içeriğinden AYRIDIR: buradaki yazımların çoğu hiçbir yazıtta
 * geçmez, 13 maddelik imla kuralından üretilmiştir. Ekran bunu her
 * kayıtta açıkça söyler; yazıtta geçenler ayrıca "tanıklı" rozetiyle
 * işaretlenir.
 */
export const GundelikView: React.FC = () => {
  const [veri, setVeri] = useState<GundelikVeri | null>(null);
  const [tema, setTema] = useState<string>('hepsi');
  const [sira, setSira] = useState(0);
  const [secim, setSecim] = useState<string | null>(null);
  const [adimlariGoster, setAdimlariGoster] = useState(false);

  useEffect(() => {
    let iptal = false;
    import('../data/generated/gundelik.json')
      .then((m) => {
        if (!iptal) setVeri((m.default ?? m) as unknown as GundelikVeri);
      })
      .catch(() => {
        if (!iptal) setVeri({ uyari: '', kaynak: '', kelimeler: [] });
      });
    return () => {
      iptal = true;
    };
  }, []);

  const temalar = useMemo(
    () => ['hepsi', ...Array.from(new Set((veri?.kelimeler ?? []).map((k) => k.tema)))],
    [veri]
  );

  const liste = useMemo(() => {
    const hepsi = veri?.kelimeler ?? [];
    const suzulmus = tema === 'hepsi' ? hepsi : hepsi.filter((k) => k.tema === tema);
    return [...suzulmus].sort((a, b) => a.zorluk - b.zorluk);
  }, [veri, tema]);

  const aktif = liste[sira];

  const secenekler = useMemo(() => {
    if (!aktif || !veri) return [];
    const digerleri = veri.kelimeler
      .filter((k) => k.id !== aktif.id && Math.abs(k.tamgaSayisi - aktif.tamgaSayisi) <= 1)
      .slice(0, 12);
    return shuffle([aktif, ...shuffle(digerleri).slice(0, 3)]).map((k) => k.runik);
    // Soru değişince yeniden karıştır.
  }, [aktif?.id, veri]);

  if (!veri) return <p className="p-8 text-metin-3">Yükleniyor…</p>;
  if (!liste.length) return <p className="p-8 text-metin-3">Kelime bulunamadı.</p>;

  const ileri = () => {
    setSecim(null);
    setAdimlariGoster(false);
    setSira((s) => (s + 1) % liste.length);
  };

  return (
    <div className="space-y-5">
      <div className="p-4 bg-uyari/10 border border-uyari/40 rounded-2xl">
        <p className="text-sm text-uyari-acik font-semibold">Bu bölüm tarihsel metin değildir</p>
        <p className="text-xs text-metin-2 mt-1">
          Buradaki yazımlar 13 maddelik imla kuralından üretilmiştir; çoğu hiçbir
          yazıtta geçmez. Amaç harfleri bildiğin kelimelerle öğrenmek. Yazıtlarda
          geçen kelimeler <span className="text-basari font-semibold">tanıklı</span> rozetiyle
          işaretlidir ve o kelimelerde yazıttaki biçim kullanılır.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {temalar.map((t) => (
          <button
            key={t}
            onClick={() => {
              setTema(t);
              setSira(0);
              setSecim(null);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              t === tema ? 'bg-marka text-zemin' : 'bg-zemin-2 text-metin-2 hover:bg-zemin-3'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="p-6 bg-zemin-2 border border-zemin-4 rounded-3xl space-y-5">
        <div className="flex items-center justify-between text-xs text-metin-3">
          <span>
            {sira + 1} / {liste.length}
          </span>
          {aktif.tanikli ? (
            <span className="px-2 py-0.5 rounded-full bg-basari/20 text-basari font-semibold">
              tanıklı · {aktif.tanikDize}
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full bg-zemin text-metin-3">kuraldan üretildi</span>
          )}
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-metin-2">Bu kelime Göktürk harfleriyle nasıl yazılır?</p>
          <p className="text-3xl font-bold text-white font-serif">{aktif.kelime}</p>
          <p className="text-xs text-metin-3">
            {aktif.sira === 'kalin' ? 'kalın sıra' : 'ince sıra'} · {aktif.tamgaSayisi} tamga
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {secenekler.map((r) => {
            const dogru = r === aktif.runik;
            const secili = secim === r;
            return (
              <button
                key={r}
                onClick={() => {
                  if (secim) return;
                  playChiselSound();
                  setSecim(r);
                }}
                dir="rtl"
                lang="otk"
                className={`relative py-4 px-5 rounded-2xl border-2 text-2xl runic transition-colors ${
                  !secim
                    ? 'bg-zemin border-zemin-4 hover:border-marka text-white'
                    : dogru
                      ? 'bg-basari/15 border-basari text-white'
                      : secili
                        ? 'bg-hata/15 border-hata text-white'
                        : 'bg-zemin border-zemin-4 text-metin-3'
                }`}
              >
                {r}
                {secim && dogru && <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-basari" />}
                {secim && secili && !dogru && <X className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-hata" />}
              </button>
            );
          })}
        </div>

        {secim && (
          <div className="space-y-3">
            <button
              onClick={() => {
                playChiselSound();
                speakTamgaOrWord(aktif.kelime, aktif.runik);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zemin border border-zemin-4 hover:border-marka transition-colors"
            >
              <span className="runic text-xl text-white" dir="rtl" lang="otk">
                {aktif.runik}
              </span>
              <Volume2 className="w-4 h-4 text-metin-3" />
            </button>

            <button
              onClick={() => setAdimlariGoster((v) => !v)}
              className="flex items-center gap-1.5 text-xs text-marka-acik hover:underline"
            >
              <Info className="w-3.5 h-3.5" />
              {adimlariGoster ? 'Kuralları gizle' : 'Hangi kurallar uygulandı?'}
            </button>

            {adimlariGoster && (
              <ul className="space-y-1 p-3 bg-zemin border border-zemin-4 rounded-2xl">
                {aktif.adimlar.map((a, i) => (
                  <li key={i} className="text-xs text-metin-2">
                    · {a}
                  </li>
                ))}
                {aktif.tanikli && aktif.uretilenRunik !== aktif.runik && (
                  <li className="text-xs text-uyari-acik pt-1">
                    Kurallardan <span className="runic">{aktif.uretilenRunik}</span> çıkıyor, ama
                    yazıtta <span className="runic">{aktif.runik}</span> geçiyor — tanıklı biçim esastır.
                  </li>
                )}
              </ul>
            )}

            <button
              onClick={ileri}
              className="w-full py-3 rounded-2xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-sm transition-colors"
            >
              Devam Et
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
