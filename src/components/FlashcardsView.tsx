import React, { useState, useEffect } from 'react';
import { 
  RotateCw, 
  CheckCircle2, 
  HelpCircle, 
  ArrowLeft, 
  ArrowRight, 
  Shuffle, 
  Sparkles, 
  Volume2, 
  Award,
  Layers,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TAMGALAR } from '../data/tamgalarData';
import { TamgaItem } from '../types';
import { playChiselSound, playSuccessSound, playVictoryFanfare } from '../utils/audio';
import { speakTamgaOrWord } from '../utils/speech';

interface FlashcardsViewProps {
  onEarnXp?: (xp: number) => void;
  onCompleteSeries?: () => void;
  onListenPronunciation?: () => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({ 
  onEarnXp,
  onCompleteSeries,
  onListenPronunciation
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [deck, setDeck] = useState<TamgaItem[]>(TAMGALAR);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Filter deck
  useEffect(() => {
    let list = TAMGALAR;
    if (filter === 'unluler') {
      list = TAMGALAR.filter(t => t.category === 'unluler');
    } else if (filter === 'kutuplu') {
      list = TAMGALAR.filter(t => t.category === 'kutuplu');
    } else if (filter === 'kutupsuz') {
      list = TAMGALAR.filter(t => t.category === 'kutupsuz');
    } else if (filter === 'ligatur') {
      list = TAMGALAR.filter(t => t.category === 'ligatur');
    }
    setDeck(list);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCount(0);
    setReviewCount(0);
    setIsCompleted(false);
  }, [filter]);

  // Keyboard shortcut listener (Space = flip, ArrowRight = next, ArrowLeft = prev)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentIndex, deck.length]);

  const currentCard = deck[currentIndex] || deck[0];

  const handleFlip = () => {
    playChiselSound();
    setIsFlipped(prev => !prev);
  };

  const handleNext = () => {
    if (currentIndex + 1 < deck.length) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    } else {
      handleFinishSession();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleMarkKnown = () => {
    playSuccessSound();
    setKnownCount(prev => prev + 1);
    if (onEarnXp) {
      onEarnXp(5);
    }
    handleNext();
  };

  const handleMarkReview = () => {
    playChiselSound();
    setReviewCount(prev => prev + 1);
    handleNext();
  };

  const handleShuffle = () => {
    playChiselSound();
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleRestart = () => {
    playChiselSound();
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCount(0);
    setReviewCount(0);
    setIsCompleted(false);
  };

  const handleFinishSession = () => {
    setIsCompleted(true);
    playVictoryFanfare();
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.6 }
    });
    if (onCompleteSeries) {
      onCompleteSeries();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zemin-4 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-marka flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Hızlı Ezber & Tekrar Modu
          </span>
          <h2 className="text-3xl font-bold text-white font-serif mt-1">
            Kartlarla Çalış (Flashcards)
          </h2>
          <p className="text-sm text-metin-2 mt-1">
            Ön yüzde runik tamga, arka yüzde okunuşu ve imla ipuçları. Boşluk tuşu ile kartı çevirebilirsiniz.
          </p>
        </div>

        {/* Shuffle Button */}
        <button
          onClick={handleShuffle}
          className="flex items-center gap-2 px-4 py-2 bg-zemin-2 hover:bg-zemin-3 border border-zemin-4 hover:border-marka rounded-xl text-xs font-semibold text-metin transition-colors self-start sm:self-auto"
        >
          <Shuffle className="w-4 h-4 text-marka" />
          <span>Karıştır</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="kaydirma-ipucu flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { id: 'all', label: `Tümü (${TAMGALAR.length})` },
          { id: 'unluler', label: 'Ünlüler (4)' },
          { id: 'kutuplu', label: 'Kutuplu (16)' },
          { id: 'kutupsuz', label: 'Kutupsuz (9)' },
          { id: 'ligatur', label: 'Ligatürler (9)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              playChiselSound();
              setFilter(tab.id);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              filter === tab.id
                ? 'bg-marka text-zemin shadow-md shadow-marka/20'
                : 'bg-zemin-2 text-metin-2 hover:text-white border border-zemin-4'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Progress & Counter */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-metin-2">
            Kart: <span className="text-white">{currentIndex + 1}</span> / {deck.length}
          </span>
          <div className="flex items-center gap-4">
            <span className="text-basari flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> {knownCount} Öğrenildi
            </span>
            <span className="text-amber-400 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" /> {reviewCount} Tekrar
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-zemin-2 rounded-full overflow-hidden border border-zemin-4">
          <div
            className="h-full bg-gradient-to-r from-marka to-basari transition-all duration-300 rounded-full"
            style={{ width: `${Math.round(((currentIndex + 1) / deck.length) * 100)}%` }}
          />
        </div>
      </div>

      {/* Flashcard Area */}
      {!isCompleted ? (
        <div className="flex flex-col items-center space-y-6">
          {/* Flip Card Container */}
          <div
            onClick={handleFlip}
            className="relative w-full max-w-xl h-96 cursor-pointer select-none perspective-[1000px] group"
          >
            <div
              className={`w-full h-full duration-500 transform-gpu transition-transform [transform-style:preserve-3d] relative ${
                isFlipped ? '[transform:rotateY(180deg)]' : ''
              }`}
            >
              {/* FRONT FACE: TAMGA */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-zemin-2 via-zemin-3 to-[#0e1726] border-2 border-marka/60 group-hover:border-marka rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-2xl shadow-marka/10 transition-colors">
                {/* Top card pill */}
                <div className="w-full flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zemin text-marka border border-zemin-4">
                    {currentCard.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakTamgaOrWord(currentCard.rune, currentCard.sound);
                      }}
                      className="p-1.5 rounded-full bg-zemin hover:bg-marka/20 text-marka border border-zemin-4 transition-colors"
                      title="Telaffuzu Dinle"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-metin-3 font-mono">
                      {currentCard.codePoint}
                    </span>
                  </div>
                </div>

                {/* Giant Centered Stone Rune */}
                <div className="my-auto flex flex-col items-center">
                  <span className="runic text-8xl sm:text-9xl font-bold text-white group-hover:text-marka transition-colors leading-none drop-shadow-[0_8px_24px_rgba(43,196,196,0.3)]">
                    {currentCard.rune}
                  </span>
                </div>

                {/* Bottom Hint */}
                <div className="w-full flex items-center justify-center gap-1.5 text-xs text-metin-3 group-hover:text-metin-2 transition-colors">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Okunuşunu görmek için karta tıkla veya boşluk (space) tuşuna bas</span>
                </div>
              </div>

              {/* BACK FACE: SOUND & MEANING */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-zemin-3 via-zemin-2 to-[#0d1624] border-2 border-altin/70 group-hover:border-altin rounded-3xl p-8 flex flex-col justify-between text-left shadow-2xl shadow-black/60 transition-colors">
                {/* Top header */}
                <div className="flex items-center justify-between border-b border-zemin-4 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-altin block">
                      Okunuş & Tahlil
                    </span>
                    <h3 className="text-xl font-bold text-white font-serif">{currentCard.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="runic text-4xl text-marka leading-none">{currentCard.rune}</span>
                  </div>
                </div>

                {/* Big Phonetic Sound Showcase */}
                <div className="bg-zemin p-4 rounded-2xl border border-zemin-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakTamgaOrWord(currentCard.rune, currentCard.sound);
                        if (onListenPronunciation) onListenPronunciation();
                      }}
                      className="p-2 rounded-xl bg-zemin-3 hover:bg-marka/20 text-marka border border-zemin-4 hover:border-marka transition-colors"
                      title="Sesi Dinle"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-metin-3 block">
                        Fonetik Ses Değeri
                      </span>
                      <span className="text-2xl font-bold text-marka font-serif">{currentCard.sound}</span>
                    </div>
                  </div>
                  {currentCard.type && (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      currentCard.type === 'kalın'
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/40'
                        : currentCard.type === 'ince'
                        ? 'bg-blue-500/15 text-blue-400 border border-blue-500/40'
                        : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/40'
                    }`}>
                      {currentCard.type}
                    </span>
                  )}
                </div>

                {/* Example Inscription Word */}
                <div className="space-y-1 bg-zemin p-3.5 rounded-2xl border border-zemin-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-metin-3 block tracking-wider">
                      Yazıtlardan Örnek
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakTamgaOrWord(currentCard.exampleWord);
                        if (onListenPronunciation) onListenPronunciation();
                      }}
                      className="text-xs text-marka hover:text-white flex items-center gap-1 transition-colors"
                      title="Örnek Kelimeyi Dinle"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Dinle</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-white">{currentCard.exampleWord} — {currentCard.exampleMeaning}</span>
                    <span className="runic text-xl text-amber-400">{currentCard.exampleRunic}</span>
                  </div>
                </div>

                {/* Mnemonic Hook */}
                <p className="text-xs text-metin-2 italic bg-zemin/60 p-2.5 rounded-xl border border-zemin-4">
                  💡 {currentCard.mnemonicHint}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Prev */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`py-3 px-4 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                currentIndex === 0
                  ? 'bg-zemin-2 border-zemin-4 text-metin-3 cursor-not-allowed'
                  : 'bg-zemin-3 border-zemin-4 text-white hover:border-bilgi'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Önceki</span>
            </button>

            {/* Flip toggle */}
            <button
              onClick={handleFlip}
              className="py-3 px-4 rounded-2xl bg-zemin-2 hover:bg-zemin-3 border border-zemin-4 hover:border-marka text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCw className="w-4 h-4 text-marka" />
              <span>{isFlipped ? 'Tamgaya Dön' : 'Çevir'}</span>
            </button>

            {/* Tekrar et (Needs review) */}
            <button
              onClick={handleMarkReview}
              className="py-3 px-4 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Tekrar Et</span>
            </button>

            {/* Biliyorum (Mastered) */}
            <button
              onClick={handleMarkKnown}
              className="py-3 px-4 rounded-2xl bg-basari hover:bg-[#2ea35d] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-basari/20"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Biliyorum (+5 XP)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Completion screen */
        <div className="max-w-md mx-auto bg-zemin-2 border-2 border-marka rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-zoomIn">
          <div className="w-20 h-20 mx-auto rounded-full bg-marka/15 border-2 border-marka flex items-center justify-center text-marka">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-marka">
              Tebrikler Alpım!
            </span>
            <h3 className="text-2xl font-bold text-white font-serif">
              Kart Turunu Tamamladın
            </h3>
            <p className="text-sm text-metin-2">
              Seçilen gruptaki tüm tamgaları gözden geçirdin. Hafızanı taze tutmak için dilediğin zaman kartları karıştırıp yeniden başlayabilirsin.
            </p>
          </div>

          {/* Daily Quest completion badge */}
          <div className="bg-zemin-3 border border-marka/40 rounded-2xl p-3 flex items-center justify-between text-left">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🎯</span>
              <div>
                <span className="text-xs font-bold text-white block">Günlük Görev İlerlemesi</span>
                <span className="text-[11px] text-marka font-semibold">&quot;Bir Tamga Serisi Tamamla&quot; görevin kaydedildi!</span>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-lg border border-amber-400/30">
              +25 XP Hazır
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="bg-zemin-3 border border-zemin-4 p-4 rounded-2xl">
              <span className="text-xs text-metin-2 block mb-1">Öğrenilen</span>
              <span className="text-2xl font-bold text-basari">{knownCount}</span>
            </div>
            <div className="bg-zemin-3 border border-zemin-4 p-4 rounded-2xl">
              <span className="text-xs text-metin-2 block mb-1">Tekrar Edilecek</span>
              <span className="text-2xl font-bold text-amber-400">{reviewCount}</span>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="w-full py-3.5 rounded-2xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-sm shadow-xl shadow-marka/20 transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Yeniden Başla</span>
          </button>
        </div>
      )}
    </div>
  );
};
