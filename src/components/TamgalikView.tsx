import React, { useState } from 'react';
import { Search, Sparkles, Volume2, Info, X, Check, Layers } from 'lucide-react';
import { TAMGALAR } from '../data/tamgalarData';
import { TamgaItem } from '../types';
import { playChiselSound, playSuccessSound } from '../utils/audio';
import { speakTamgaOrWord } from '../utils/speech';

interface TamgalikViewProps {
  onOpenFlashcards?: () => void;
  onListenPronunciation?: () => void;
}

export const TamgalikView: React.FC<TamgalikViewProps> = ({ onOpenFlashcards, onListenPronunciation }) => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTamga, setActiveTamga] = useState<TamgaItem | null>(null);

  const filteredTamgalar = TAMGALAR.filter(item => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'unluler' && item.category === 'unluler') ||
      (filter === 'kutuplu' && item.category === 'kutuplu') ||
      (filter === 'kutupsuz' && item.category === 'kutupsuz') ||
      (filter === 'ligatur' && item.category === 'ligatur');

    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sound.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.exampleWord.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.exampleMeaning.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zemin-4 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-marka flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Kadim Alfabe Kataloğu
          </span>
          <h2 className="text-3xl font-bold text-white font-serif mt-1">
            Göktürk Tamgalığı
          </h2>
          <p className="text-sm text-metin-2 mt-1">
            Orhun ve Yenisey bengü taşlarında kullanılan 38 ana tamga ve ligatür.
          </p>
        </div>

        {/* Search Bar & Flashcard action */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {onOpenFlashcards && (
            <button
              onClick={onOpenFlashcards}
              className="flex items-center gap-2 px-3.5 py-2 bg-marka hover:bg-marka-koyu text-zemin rounded-xl text-xs font-bold transition-all shadow-md shadow-marka/20 whitespace-nowrap active:scale-95"
            >
              <Layers className="w-4 h-4" />
              <span>Kartlarla Çalış</span>
            </button>
          )}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-metin-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ses veya kelime ara..."
              className="w-full pl-10 pr-4 py-2 bg-zemin-2 border border-zemin-4 focus:border-marka rounded-xl text-sm text-white placeholder-metin-3 outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="kaydirma-ipucu flex items-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Tüm Tamgalar' },
          { id: 'unluler', label: 'Ünlüler (4 Tamga - 8 Ses)' },
          { id: 'kutuplu', label: 'Kutuplu Ünsüzler (Kalın/İnce)' },
          { id: 'kutupsuz', label: 'Kutupsuz Ünsüzler' },
          { id: 'ligatur', label: 'Çift Sesli Ligatürler' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              playChiselSound();
              setFilter(tab.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              filter === tab.id
                ? 'bg-marka text-zemin shadow-md shadow-marka/20'
                : 'bg-zemin-2 text-metin-2 hover:text-white border border-zemin-4'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tamgalar Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredTamgalar.map((item) => (
          <div
            key={item.codePoint + item.name}
            onClick={() => {
              playChiselSound();
              setActiveTamga(item);
            }}
            className="group relative bg-zemin-2 hover:bg-zemin-3 border border-zemin-4 hover:border-marka rounded-2xl p-4 text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl shadow-black/40 flex flex-col items-center justify-between"
          >
            {/* Polarity Tag */}
            {item.type && (
              <span className={`self-end text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                item.type === 'kalın'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  : item.type === 'ince'
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              }`}>
                {item.type}
              </span>
            )}

            {/* Giant Stone Tamga */}
            <div className="my-3 text-metin group-hover:text-marka transition-colors relative">
              <span className="runic text-5xl font-bold leading-none select-none">
                {item.rune}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speakTamgaOrWord(item.rune, item.sound);
                  if (onListenPronunciation) onListenPronunciation();
                }}
                className="absolute -right-3 -bottom-1 p-1 rounded-full bg-zemin border border-zemin-4 text-metin-3 group-hover:text-marka hover:bg-marka/20 transition-all opacity-0 group-hover:opacity-100"
                title="Sesi Dinle"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sound & Info */}
            <div className="space-y-0.5 w-full">
              <span className="text-xs font-bold text-white block truncate">{item.name}</span>
              <span className="text-[11px] text-marka block truncate">{item.sound}</span>
              <span className="text-[10px] text-metin-3 block font-mono">{item.codePoint}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {activeTamga && (
        <div className="fixed inset-0 z-50 bg-zemin/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-zemin-2 border-2 border-marka rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative animate-zoomIn">
            <button
              onClick={() => setActiveTamga(null)}
              className="absolute top-5 right-5 text-metin-2 hover:text-white p-2 rounded-xl hover:bg-zemin-3"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top stone preview */}
            <div className="flex items-center gap-6 bg-zemin border border-zemin-4 p-6 rounded-2xl">
              <div 
                onClick={() => {
                  speakTamgaOrWord(activeTamga.rune, activeTamga.sound);
                  if (onListenPronunciation) onListenPronunciation();
                }}
                className="w-24 h-24 rounded-2xl bg-zemin-3 border-2 border-marka hover:border-amber-400 flex items-center justify-center text-marka hover:text-amber-400 shadow-inner flex-shrink-0 cursor-pointer transition-all group"
                title="Telaffuzu Dinle"
              >
                <span className="runic text-6xl leading-none font-bold group-hover:scale-105 transition-transform">{activeTamga.rune}</span>
              </div>
              <div className="flex-1">
                <span className="text-xs text-marka font-bold uppercase tracking-wider block">
                  {activeTamga.category.toUpperCase()} • {activeTamga.type ?? 'NÖTR'}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white font-serif">{activeTamga.name}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      speakTamgaOrWord(activeTamga.rune, activeTamga.sound);
                      if (onListenPronunciation) onListenPronunciation();
                    }}
                    className="p-2 rounded-xl bg-zemin-3 hover:bg-marka/20 text-marka border border-zemin-4 hover:border-marka transition-colors"
                    title="Sesi Dinle"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-metin-2 font-semibold mt-0.5">Ses Değeri: <span className="text-marka font-bold">{activeTamga.sound}</span></p>
                <p className="text-xs text-metin-3 font-mono mt-1">Unicode: {activeTamga.codePoint}</p>
              </div>
            </div>

            {/* Example Inscription Word */}
            <div className="bg-zemin-3 border border-zemin-4 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-marka uppercase tracking-wider block">
                  Yazıtlardan Örnek Kelime
                </span>
                <button
                  type="button"
                  onClick={() => {
                    speakTamgaOrWord(activeTamga.exampleWord);
                    if (onListenPronunciation) onListenPronunciation();
                  }}
                  className="text-xs text-marka hover:text-white flex items-center gap-1 transition-colors"
                  title="Örnek Kelimeyi Dinle"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dinle</span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-white font-serif">{activeTamga.exampleWord}</span>
                  <span className="text-xs text-metin-2 block">{activeTamga.exampleMeaning}</span>
                </div>
                <div className="text-right">
                  <span className="runic text-3xl font-bold text-white block">{activeTamga.exampleRunic}</span>
                </div>
              </div>
            </div>

            {/* Mnemonic Memory Hook */}
            <div className="bg-zemin border border-zemin-4 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Hatırlatıcı İpucu (Mnemonik)
              </span>
              <p className="text-xs text-metin leading-relaxed">
                {activeTamga.mnemonicHint}
              </p>
            </div>

            <button
              onClick={() => {
                playSuccessSound();
                setActiveTamga(null);
              }}
              className="w-full py-3 rounded-2xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-sm transition-colors"
            >
              Anladım
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
