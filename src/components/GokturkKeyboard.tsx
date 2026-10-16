import React, { useState } from 'react';
import { Keyboard, Copy, Check, Sparkles, RefreshCw, Share2, Delete, Eraser } from 'lucide-react';
import { TAMGALAR } from '../data/tamgalarData';
import { SOZLUK } from '../data/sozlukData';
import { playChiselSound, playSuccessSound } from '../utils/audio';

export const GokturkKeyboard: React.FC = () => {
  const [inputText, setInputText] = useState('türk');
  const [runicResult, setRunicResult] = useState('𐱅𐰇𐰼𐰜');
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'unlu' | 'kutup' | 'diger'>('all');

  // Simple phonetic converter based on known vocabulary and spelling patterns
  const convertToRunic = (text: string): string => {
    if (!text.trim()) return '';
    const words = text.toLowerCase().trim().split(/\s+/);
    
    const convertedWords = words.map(word => {
      // 1. Check exact word in dictionary first
      const dictMatch = SOZLUK.find(s => s.id === word || s.transcription.toLowerCase() === word);
      if (dictMatch) {
        return dictMatch.runic;
      }

      // 2. Rule-based phonetic approximation
      // Determine overall frontness/backness (vowel harmony)
      const hasBackVowels = /[aıou]/.test(word);
      let res = '';

      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        switch (char) {
          case 'a':
          case 'e':
            // If at beginning or end of word, render A/E tamga
            if (i === 0 || i === word.length - 1) res += '𐰀';
            break;
          case 'ı':
          case 'i':
            res += '𐰃';
            break;
          case 'o':
          case 'u':
            res += '𐰆';
            break;
          case 'ö':
          case 'ü':
            res += '𐰇';
            break;
          case 'b':
            res += hasBackVowels ? '𐰉' : '𐰋';
            break;
          case 'd':
            res += hasBackVowels ? '𐰑' : '𐰓';
            break;
          case 'g':
          case 'ğ':
            res += hasBackVowels ? '𐰍' : '𐰏';
            break;
          case 'k':
            res += hasBackVowels ? '𐰴' : '𐰚';
            break;
          case 'l':
            res += hasBackVowels ? '𐰞' : '𐰠';
            break;
          case 'm':
            res += '𐰢';
            break;
          case 'n':
            res += hasBackVowels ? '𐰣' : '𐰤';
            break;
          case 'r':
            res += hasBackVowels ? '𐰺' : '𐰼';
            break;
          case 's':
            res += hasBackVowels ? '𐰽' : '𐰾';
            break;
          case 't':
            res += hasBackVowels ? '𐱃' : '𐱅';
            break;
          case 'y':
            res += hasBackVowels ? '𐰖' : '𐰘';
            break;
          case 'z':
            res += '𐰔';
            break;
          case 'ç':
            res += '𐰲';
            break;
          case 'ş':
            res += '𐱁';
            break;
          case 'p':
            res += '𐰯';
            break;
          default:
            break;
        }
      }
      return res || word;
    });

    return convertedWords.join(' : ');
  };

  const handleInputChange = (val: string) => {
    setInputText(val);
    setRunicResult(convertToRunic(val));
  };

  const handleVirtualRuneClick = (rune: string) => {
    playChiselSound();
    setRunicResult(prev => prev + rune);
  };

  const handleVirtualBackspace = () => {
    playChiselSound();
    setRunicResult(prev => {
      if (!prev) return prev;
      // Sozcuk ayraci tek parca olarak silinsin
      if (prev.endsWith(' : ')) return prev.slice(0, -3);
      // Runik tamgalar BMP disinda (surrogate cifti): UTF-16 birimiyle degil
      // kod noktasiyla sil, yoksa yarim karakter kalir.
      const codePoints = Array.from(prev);
      codePoints.pop();
      return codePoints.join('');
    });
  };

  const handleVirtualClear = () => {
    playChiselSound();
    setRunicResult('');
  };

  const handleCopy = () => {
    playSuccessSound();
    navigator.clipboard.writeText(runicResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sampleWords = [
    { latin: 'türk', label: 'Türk (𐱅𐰇𐰼𐰜)' },
    { latin: 'tengri', label: 'Tengri (𐱅𐰭𐰼𐰃)' },
    { latin: 'bilge', label: 'Bilge (𐰋𐰃𐰠𐰏𐰀)' },
    { latin: 'kagan', label: 'Kağan (𐰴𐰍𐰣)' },
    { latin: 'bodun', label: 'Bodun (𐰉𐰆𐰑𐰣)' },
    { latin: 'esen', label: 'Esen (𐰾𐰤)' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#233754] pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#2BC4C4] flex items-center gap-1.5">
          <Keyboard className="w-3.5 h-3.5" /> İnteraktif Runik Yazıcı
        </span>
        <h2 className="text-3xl font-bold text-white font-serif mt-1">
          Göktürkçe Çevirici ve Sanal Klavye
        </h2>
        <p className="text-sm text-[#9FB0C6] mt-1">
          Latin harfleriyle yazın, imla kurallarına uygun olarak anında sağdan sola Göktürk runik yazısına dönüşsün.
        </p>
      </div>

      {/* Quick sample chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <span className="text-xs text-[#6C7F99] font-medium whitespace-nowrap">Örnekler:</span>
        {sampleWords.map(sw => (
          <button
            key={sw.latin}
            onClick={() => handleInputChange(sw.latin)}
            className="px-3 py-1 bg-[#101B2C] hover:bg-[#152338] border border-[#233754] hover:border-[#2BC4C4] rounded-full text-xs text-[#E6EDF5] whitespace-nowrap transition-colors"
          >
            {sw.label}
          </button>
        ))}
      </div>

      {/* Input & Output Studio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Latin Input */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#9FB0C6] block">
            Latin Harfleriyle Metin
          </label>
          <div className="relative">
            <textarea
              rows={4}
              value={inputText}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Türkçe kelime veya cümle yazın..."
              className="w-full p-4 bg-[#101B2C] border-2 border-[#233754] focus:border-[#2BC4C4] rounded-2xl text-base text-white placeholder-[#6C7F99] outline-none transition-colors resize-none"
            />
            {inputText && (
              <button
                onClick={() => handleInputChange('')}
                className="absolute right-3 top-3 text-[#6C7F99] hover:text-white p-1 text-xs"
              >
                Temizle
              </button>
            )}
          </div>
        </div>

        {/* Runic Stone Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-[#2BC4C4] block">
              Göktürkçe Çıktı (Sağdan Sola)
            </label>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#152338] hover:bg-[#1f3350] border border-[#233754] rounded-lg text-xs font-semibold text-[#2BC4C4] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı!' : 'Kopyala'}</span>
            </button>
          </div>
          
          <div className="min-h-36 p-6 bg-gradient-to-br from-[#101B2C] to-[#152338] border-2 border-[#2BC4C4]/50 rounded-2xl flex items-center justify-center text-center shadow-inner">
            <p className="runic text-4xl sm:text-5xl text-white leading-relaxed tracking-wider select-all drop-shadow-[0_4px_12px_rgba(43,196,196,0.3)]">
              {runicResult || <span className="text-[#6C7F99] text-base font-sans italic">Runik yazı burada belirecek...</span>}
            </p>
          </div>
        </div>
      </div>

      {/* Virtual On-Screen Runic Keyboard */}
      <div className="bg-[#101B2C] border border-[#233754] rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-white flex items-center gap-2 font-serif">
            <Keyboard className="w-4 h-4 text-[#2BC4C4]" /> Sanal Göktürk Tamga Tuş takımı
          </h4>
          <span className="text-xs text-[#6C7F99]">Tuşlara tıklayarak doğrudan metne ekleyin</span>
        </div>

        {/* Keyboard Keys Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2">
          {TAMGALAR.map(t => (
            <button
              key={t.codePoint + t.name}
              onClick={() => handleVirtualRuneClick(t.rune)}
              title={`${t.name} (${t.sound})`}
              className="h-12 rounded-xl bg-[#152338] hover:bg-[#2BC4C4] text-white hover:text-[#0B1320] border border-[#233754] hover:border-[#2BC4C4] font-bold runic text-2xl flex items-center justify-center transition-all active:scale-95 shadow"
            >
              {t.rune}
            </button>
          ))}
          {/* Word separator ':' button */}
          <button
            onClick={() => handleVirtualRuneClick(' : ')}
            title="Sözcük Ayracı (:)"
            className="h-12 rounded-xl bg-[#152338] hover:bg-[#C9A24A] text-amber-400 hover:text-black border border-[#233754] font-bold text-xl flex items-center justify-center transition-all active:scale-95 shadow"
          >
            :
          </button>

          {/* Geri silme */}
          <button
            onClick={handleVirtualBackspace}
            disabled={!runicResult}
            title="Son tamgayı sil"
            aria-label="Son tamgayı sil"
            className="h-12 col-span-2 rounded-xl bg-[#152338] hover:bg-rose-500/90 text-[#9FB0C6] hover:text-white border border-[#233754] hover:border-rose-500 flex items-center justify-center gap-1.5 text-xs font-bold transition-all active:scale-95 shadow disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#152338] disabled:hover:text-[#9FB0C6]"
          >
            <Delete className="w-4 h-4" /> Sil
          </button>

          {/* Tumunu temizle */}
          <button
            onClick={handleVirtualClear}
            disabled={!runicResult}
            title="Çıktıyı tamamen temizle"
            aria-label="Çıktıyı tamamen temizle"
            className="h-12 col-span-2 rounded-xl bg-[#152338] hover:bg-[#233754] text-[#9FB0C6] hover:text-white border border-[#233754] flex items-center justify-center gap-1.5 text-xs font-bold transition-all active:scale-95 shadow disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Eraser className="w-4 h-4" /> Tümünü Sil
          </button>
        </div>
      </div>
    </div>
  );
};
