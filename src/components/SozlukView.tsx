import React, { useEffect, useMemo, useState } from 'react';
import { Search, Shield, Sparkles, BookOpen, Volume2, Check, Target, AlertTriangle, Quote } from 'lucide-react';
import { SOZLUK, SozlukWord } from '../data/sozlukData';
import { sozluguYukle } from '../data/generated/yukle';
import { playChiselSound, playSuccessSound } from '../utils/audio';
import { speakTamgaOrWord } from '../utils/speech';

interface SozlukViewProps {
  onLearnWord?: (wordId: string) => void;
  onListenPronunciation?: () => void;
  wordsLearnedCount?: number;
  learnedWordsRecord?: Record<string, boolean>;
}

export const SozlukView: React.FC<SozlukViewProps> = ({
  onLearnWord,
  onListenPronunciation,
  wordsLearnedCount = 0,
  learnedWordsRecord = {}
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [localLearned, setLocalLearned] = useState<Record<string, boolean>>({});
  // Korpustan doğrulanmış sözlük (~84 kelime) ayrı parçada; bu ekran açılınca iner.
  const [uretilmis, setUretilmis] = useState<SozlukWord[]>([]);
  // Çekimli biçimler kelime kimliğine göre; kart altında kaynağıyla gösterilir.
  const [bicimler, setBicimler] = useState<Record<string, Array<{ runik: string; transkripsiyon: string; siklik: number; dizeler: string[] }>>>({});
  const [teyitGerek, setTeyitGerek] = useState<Record<string, boolean>>({});
  const [etiketler, setEtiketler] = useState<Record<string, string>>({});

  useEffect(() => {
    let iptal = false;
    sozluguYukle()
      .then((liste) => {
        if (iptal) return;
        setUretilmis(
          liste.map((k) => ({
            id: k.id,
            runic: k.runik,
            transcription: k.transkripsiyon,
            meaning: k.anlam,
            category: k.kategori as SozlukWord['category'],
            // Tamga tahlili yalnızca elle yazılmış kayıtlarda var. Buraya
            // kategori yazmak kutuyu ("Tamga Tahlili") yanlış doldurur.
            breakdown: '',
            source: k.kaynak ?? undefined
          }))
        );
        setBicimler(Object.fromEntries(liste.map((k) => [k.id, k.bicimler])));
        setEtiketler(Object.fromEntries(liste.map((k) => [k.id, k.kategoriEtiketi])));
        setTeyitGerek(Object.fromEntries(liste.map((k) => [k.id, k.teyitGerek])));
      })
      .catch(() => {
        // Üretilmiş sözlük inmezse elle yazılmış liste tek başına çalışır.
      });
    return () => { iptal = true; };
  }, []);

  // Elle yazılmış kayıtlar öncelikli: tamga tahlilleri onlarda.
  // Birleştirme `id` üzerinden: ilerleme kaydı da kelimeyi id ile tutuyor,
  // ayrıca aynı kelimenin iki yazımı ("il" ve "il / el") tek karta düşsün.
  const tumKelimeler = useMemo(() => {
    const harita = new Map<string, SozlukWord>();
    for (const k of uretilmis) harita.set(k.id, k);
    for (const k of SOZLUK) harita.set(k.id, k);
    return [...harita.values()].sort((a, b) => a.transcription.localeCompare(b.transcription, 'tr'));
  }, [uretilmis]);

  const isWordLearned = (id: string) => Boolean(learnedWordsRecord[id] || localLearned[id]);

  const handleLearnClick = (word: SozlukWord) => {
    if (isWordLearned(word.id)) return;
    playSuccessSound();
    setLocalLearned(prev => ({ ...prev, [word.id]: true }));
    if (onLearnWord) {
      onLearnWord(word.id);
    }
  };

  const handleSpeech = (word: SozlukWord) => {
    speakTamgaOrWord(word.transcription, word.runic);
    if (onListenPronunciation) {
      onListenPronunciation();
    }
  };

  const filteredWords = tumKelimeler.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.transcription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Daily Quest Motivation Banner */}
      <div className="p-4 bg-gradient-to-r from-zemin-2 via-zemin-3 to-zemin-2 border border-marka/40 rounded-2xl flex items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-marka/15 border border-marka/40 flex items-center justify-center text-marka">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-marka uppercase tracking-wider block">
              Günün Görevi: 3 Kelime Öğren
            </span>
            <p className="text-xs text-metin-2">
              Aşağıdaki kelimelerden herhangi birini inceleyip &quot;Kelimeyi Öğren&quot; butonuna basarak günlük görevine ilerle.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-zemin px-3.5 py-1.5 rounded-xl border border-zemin-4 text-xs font-semibold">
          <span className="text-metin-2">Bugün:</span>
          <span className="text-amber-400 font-bold font-mono">{wordsLearnedCount}/3</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zemin-4 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-marka flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> Kadim Söz Varlığı
          </span>
          <h2 className="text-3xl font-bold text-white font-serif mt-1">
            Orhun Türkçesi Altın Sözlüğü
          </h2>
          <p className="text-sm text-metin-2 mt-1">
            Bengü taşlarda ve eski Türk yazmalarında geçen temel kavramlar, runik çözümlemeleri ve anlamları.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-metin-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Kelime veya anlam ara..."
            className="w-full pl-10 pr-4 py-2 bg-zemin-2 border border-zemin-4 focus:border-marka rounded-xl text-sm text-white placeholder-metin-3 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="kaydirma-ipucu flex items-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Tüm Kelimeler' },
          { id: 'devlet', label: 'Devlet & Töre' },
          { id: 'dogalguc', label: 'Tengri & Tabiat' },
          { id: 'askeri', label: 'Alplık & Savaş' },
          { id: 'temel', label: 'Günlük Yaşam' },
          { id: 'sayi', label: 'Sayılar' },
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              playChiselSound();
              setSelectedCategory(cat.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-marka text-zemin shadow-md shadow-marka/20'
                : 'bg-zemin-2 text-metin-2 hover:text-white border border-zemin-4'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Dictionary Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.map((item) => (
          <div
            key={item.id}
            className="bg-zemin-2 border border-zemin-4 hover:border-marka rounded-2xl p-5 space-y-4 transition-all duration-200 shadow-lg shadow-black/20 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white font-serif block">{item.transcription}</span>
                  <button
                    type="button"
                    onClick={() => handleSpeech(item)}
                    className="p-1.5 rounded-lg bg-zemin-3 hover:bg-marka/20 text-marka border border-zemin-4 hover:border-marka transition-colors"
                    title="Sesli Telaffuzunu Dinle"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs text-marka font-semibold">{item.meaning}</span>
              </div>
              <div className="text-right">
                <span className="runic text-3xl font-bold text-white block">{item.runic}</span>
              </div>
            </div>

            {item.breakdown ? (
              <div className="space-y-1 bg-zemin-3 p-3 rounded-xl border border-zemin-4">
                <span className="text-[10px] uppercase font-bold text-metin-3 block tracking-wider">
                  Tamga Tahlili
                </span>
                <p className="text-xs text-metin leading-relaxed">
                  {item.breakdown}
                </p>
              </div>
            ) : etiketler[item.id] ? (
              <span className="inline-flex self-start px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-zemin-3 border border-zemin-4 text-metin-2">
                {etiketler[item.id]}
              </span>
            ) : null}

            {bicimler[item.id]?.length > 1 && (
              <div className="space-y-1.5 bg-zemin p-3 rounded-xl border border-zemin-4">
                <span className="text-[10px] uppercase font-bold text-metin-3 block tracking-wider flex items-center gap-1">
                  <Quote className="w-3 h-3" /> Kitabelerdeki Biçimleri
                </span>
                {bicimler[item.id].slice(0, 3).map((b) => (
                  <div key={b.runik + b.transkripsiyon} className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="runic text-base text-marka">{b.runik}</span>
                    <span className="text-metin-2 font-mono flex-1 truncate">{b.transkripsiyon}</span>
                    <span className="text-metin-3 font-mono" title={b.dizeler.join(', ')}>
                      ×{b.siklik}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {teyitGerek[item.id] && (
              <p className="text-[10px] text-amber-400/90 flex items-start gap-1.5 leading-snug">
                <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                Anlamın kaynağı doğrulanmadı.
              </p>
            )}

            {/* Bottom Actions & Source */}
            <div className="space-y-2 pt-2 border-t border-zemin-4">
              {item.source && (
                <div className="text-[10px] text-metin-3 font-medium flex items-center justify-between">
                  <span>Kaynak: {item.source}</span>
                  <span className="text-altin">Bengü Taş</span>
                </div>
              )}

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleSpeech(item)}
                  className="text-xs text-metin-2 hover:text-marka flex items-center gap-1 transition-colors"
                >
                  <Volume2 className="w-3 h-3" />
                  <span>Dinle</span>
                </button>

                {isWordLearned(item.id) ? (
                  <span className="text-xs font-bold text-basari flex items-center gap-1 bg-basari/10 px-2.5 py-1 rounded-lg border border-basari/30">
                    <Check className="w-3.5 h-3.5" /> Öğrenildi
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleLearnClick(item)}
                    className="text-xs font-bold text-zemin bg-marka hover:bg-marka-koyu px-3 py-1 rounded-lg shadow-sm shadow-marka/20 active:scale-95 transition-all flex items-center gap-1"
                  >
                    <span>+ Kelimeyi Öğren</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
