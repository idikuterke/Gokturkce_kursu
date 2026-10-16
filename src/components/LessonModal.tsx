import React, { useState, useEffect, useMemo } from 'react';
import { X, Heart, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, Award, Sparkles, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Lesson, Exercise, UserProgress } from '../types';
import { playChiselSound, playSuccessSound, playErrorSound, playVictoryFanfare } from '../utils/audio';
import { shuffle, shuffleDistinct } from '../utils/shuffle';
import { speakTamgaOrWord } from '../utils/speech';
import { MascotAlp } from './MascotAlp';

interface LessonModalProps {
  lesson: Lesson;
  progress: UserProgress;
  onComplete: (xpEarned: number) => void;
  onClose: () => void;
  onHeartLoss: () => void;
  onRefillHearts: () => void;
  onListenPronunciation?: () => void;
  onLearnWord?: (wordId: string) => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  progress,
  onComplete,
  onClose,
  onHeartLoss,
  onRefillHearts,
  onListenPronunciation,
  onLearnWord
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [speakingText, setSpeakingText] = useState<string | null>(null);
  
  // Pair match state
  const [selectedPairRune, setSelectedPairRune] = useState<string | null>(null);
  const [selectedPairSound, setSelectedPairSound] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, boolean>>({});

  // Word builder & translation token state
  const [arrangedTokens, setArrangedTokens] = useState<string[]>([]);
  const [availableTokens, setAvailableTokens] = useState<string[]>([]);

  // Submission state
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  // Yanlis yanitlanan alistirma kuyrugun sonuna eklenir ve dogru
  // yanitlanana kadar tekrar sorulur. `queue` bu yuzden ders boyunca
  // buyuyebilir; `lesson.exercises` ise degismeden kalir.
  const [queue, setQueue] = useState<Exercise[]>(lesson.exercises);
  // Ilk denemede yanlis yanitlanan alistirmalarin kimlikleri. Hem isabet
  // oranini durust tutar hem de "Tekrar" rozetini tetikler.
  const [missedIds, setMissedIds] = useState<Set<string>>(new Set());

  const currentExercise: Exercise = queue[currentIndex];
  const progressPercent = Math.round((currentIndex / queue.length) * 100);
  const isRetry = missedIds.has(currentExercise.id);

  // Initialize tokens when exercise changes
  useEffect(() => {
    setIsChecked(false);
    setIsCorrect(false);
    setSelectedChoice(null);
    setSelectedPairRune(null);
    setSelectedPairSound(null);
    setMatchedPairs({});

    if (currentExercise.type === 'word_builder' && currentExercise.targetWord) {
      const tokens = shuffle(currentExercise.targetWord.tokens);
      setAvailableTokens(tokens);
      setArrangedTokens([]);
    } else if (currentExercise.type === 'translation' && currentExercise.translationData) {
      const tokens = shuffle(currentExercise.translationData.wordPool);
      setAvailableTokens(tokens);
      setArrangedTokens([]);
    }
  }, [currentIndex, currentExercise]);

  // Eslestirmede ses sutunu tamga sutunuyla ayni sirada olmamali; aksi
  // halde dogru cevap hep tam karsiya gelir ve alistirma okumadan cozulur.
  // Alistirma degismedikce sira sabit kalsin diye useMemo ile tutuluyor.
  const shuffledSoundPairs = useMemo(
    () => shuffleDistinct(currentExercise.pairs ?? []),
    // currentIndex de bagimlilikta: ayni alistirma tekrar sorulunca
    // sira yeniden karissin, ezberden cozulmesin.
    [currentIndex, currentExercise.id, currentExercise.pairs]
  );

  // Pair match selection logic
  useEffect(() => {
    if (selectedPairRune && selectedPairSound && currentExercise.pairs) {
      const pair = currentExercise.pairs.find(p => p.rune === selectedPairRune);
      if (pair && pair.sound === selectedPairSound) {
        playChiselSound();
        setMatchedPairs(prev => ({ ...prev, [selectedPairRune]: true }));
      } else {
        playErrorSound();
      }
      setSelectedPairRune(null);
      setSelectedPairSound(null);
    }
  }, [selectedPairRune, selectedPairSound, currentExercise.pairs]);

  // Check if answer can be submitted
  const canCheck = (): boolean => {
    if (isChecked) return true;
    if (currentExercise.type === 'choice' || currentExercise.type === 'cloze' || currentExercise.type === 'identify_rule') {
      return selectedChoice !== null;
    }
    if (currentExercise.type === 'pair_match' && currentExercise.pairs) {
      return Object.keys(matchedPairs).length === currentExercise.pairs.length;
    }
    if (currentExercise.type === 'word_builder') {
      return arrangedTokens.length > 0;
    }
    if (currentExercise.type === 'translation') {
      return arrangedTokens.length > 0;
    }
    return false;
  };

  // Evaluate the answer
  const handleCheck = () => {
    if (isChecked) {
      // Continue to next exercise or finish
      if (currentIndex + 1 < queue.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // Complete lesson!
        setIsFinished(true);
        playVictoryFanfare();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        onComplete(lesson.xp);
      }
      return;
    }

    let correct = false;

    if (currentExercise.type === 'choice' || currentExercise.type === 'cloze' || currentExercise.type === 'identify_rule') {
      correct = selectedChoice === currentExercise.correctAnswer;
    } else if (currentExercise.type === 'pair_match' && currentExercise.pairs) {
      correct = Object.keys(matchedPairs).length === currentExercise.pairs.length;
    } else if (currentExercise.type === 'word_builder' && currentExercise.targetWord) {
      // In RTL Turkish runic writing, token arrangement
      const formedWord = arrangedTokens.join('');
      correct = formedWord === currentExercise.targetWord.rune;
    } else if (currentExercise.type === 'translation' && currentExercise.translationData) {
      const expected = currentExercise.translationData.correctWords.join(' ');
      const given = arrangedTokens.join(' ');
      correct = given === expected;
    }

    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      playSuccessSound();
      // Isabet orani yalnizca ilk denemeleri sayar; tekrar turunda
      // verilen dogru cevap orani sismesin.
      if (!missedIds.has(currentExercise.id)) {
        setCorrectCount(prev => prev + 1);
      }
      if (currentExercise.type === 'word_builder' && currentExercise.targetWord && onLearnWord) {
        onLearnWord(currentExercise.targetWord.latin);
      }
    } else {
      playErrorSound();
      onHeartLoss();
      // Dogru yanitlanana kadar kuyrugun sonunda yeniden sorulsun.
      setMissedIds(prev => new Set(prev).add(currentExercise.id));
      setQueue(prev => [...prev, currentExercise]);
    }
  };

  // Web Speech API pronunciation handler
  const handleSpeak = (text: string, contextSound?: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setSpeakingText(text);
    speakTamgaOrWord(text, contextSound, () => {
      setSpeakingText(null);
    });
    if (onListenPronunciation) {
      onListenPronunciation();
    }
  };

  // Token click handlers with audio pronunciation
  const handleSelectToken = (token: string, index: number) => {
    playChiselSound();
    handleSpeak(token);
    setArrangedTokens(prev => [...prev, token]);
    setAvailableTokens(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveToken = (token: string, index: number) => {
    playChiselSound();
    handleSpeak(token);
    setArrangedTokens(prev => prev.filter((_, i) => i !== index));
    setAvailableTokens(prev => [...prev, token]);
  };

  // Game over state if hearts reach 0
  if (progress.hearts <= 0 && !isFinished) {
    return (
      <div className="fixed inset-0 z-50 bg-zemin/95 backdrop-blur-md flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-zemin-2 border-2 border-rose-500/50 rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-zoomIn">
          <div className="w-20 h-20 mx-auto rounded-full bg-rose-500/10 border-2 border-rose-500 flex items-center justify-center text-rose-500 animate-pulse">
            <Heart className="w-10 h-10 fill-rose-500" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-serif">Canların Tükendi!</h3>
            <p className="text-sm text-metin-2">
              Bengü taşları sökmek sabır ister alpım. Hemen canını tazeleyebilir veya serbest antrenmanla devam edebilirsin.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={onRefillHearts}
              className="w-full py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm shadow-lg shadow-rose-500/30 transition-colors"
            >
              Canları Tazele (+5 Can)
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-zemin-3 hover:bg-[#1b2d47] text-metin-2 font-medium text-sm transition-colors border border-zemin-4"
            >
              Öğrenme Yoluna Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Finished Celebration Screen
  if (isFinished) {
    const accuracy = Math.round((correctCount / lesson.exercises.length) * 100);
    return (
      <div className="fixed inset-0 z-50 bg-zemin/95 backdrop-blur-md flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-zemin-2 border-2 border-marka rounded-3xl p-8 text-center space-y-6 shadow-2xl animate-zoomIn">
          <div className="flex justify-center">
            <MascotAlp mood="proud" size={130} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-marka">
              Ders Tamamlandı!
            </span>
            <h3 className="text-3xl font-bold text-white font-serif">{lesson.title}</h3>
            <p className="text-sm text-metin-2">
              Tebrikler alpım! Bir adımı daha geride bıraktın ve kadim Türk runiklerini hafızana kazıdın.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="bg-zemin-3 border border-zemin-4 p-4 rounded-2xl">
              <span className="text-xs text-metin-2 block mb-1">Kazanılan Puan</span>
              <span className="text-2xl font-bold text-marka">+{lesson.xp} XP</span>
            </div>
            <div className="bg-zemin-3 border border-zemin-4 p-4 rounded-2xl">
              <span className="text-xs text-metin-2 block mb-1">İsabet Oranı</span>
              <span className="text-2xl font-bold text-basari">%{accuracy}</span>
            </div>
          </div>

          {missedIds.size > 0 && (
            <p className="text-xs text-amber-400/90 flex items-center justify-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" />
              {missedIds.size} alıştırmayı tekrar ederek pekiştirdin
            </p>
          )}

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-base shadow-xl shadow-marka/30 transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Devam Et</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-zemin flex flex-col justify-between">
      {/* Top Header Bar */}
      <div className="max-w-4xl w-full mx-auto px-4 pt-6 pb-4 flex items-center gap-4">
        <button
          onClick={onClose}
          className="text-metin-2 hover:text-white p-2 rounded-xl hover:bg-zemin-3 transition-colors"
          title="Çıkış"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 h-3.5 bg-zemin-3 rounded-full overflow-hidden border border-zemin-4">
          <div
            className="h-full bg-gradient-to-r from-marka to-basari rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Hearts */}
        <div className="flex items-center gap-1.5 text-rose-500 font-bold text-sm bg-zemin-3 border border-zemin-4 px-3 py-1.5 rounded-full">
          <Heart className="w-4 h-4 fill-rose-500" />
          <span>{progress.hearts}</span>
        </div>
      </div>

      {/* Main Exercise View Container */}
      <div className="flex-1 max-w-2xl w-full mx-auto px-4 py-6 flex flex-col justify-center overflow-y-auto">
        {/* Prompt Header */}
        <div className="mb-6 space-y-2">
          {isRetry && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-400 border border-amber-400/30">
              <RotateCcw className="w-3 h-3" /> Tekrar
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif leading-snug">
            {currentExercise.prompt}
          </h3>
          {currentExercise.subprompt && (
            <p className="text-sm text-metin-2 font-medium">{currentExercise.subprompt}</p>
          )}
        </div>

        {/* Big Rune Showcase if present */}
        {currentExercise.runePrompt && (
          <div 
            onClick={() => handleSpeak(currentExercise.runePrompt!)}
            className="group my-4 p-8 bg-zemin-2 border-2 border-zemin-4 hover:border-marka rounded-3xl flex flex-col items-center justify-center text-marka shadow-inner cursor-pointer transition-all active:scale-[0.99]"
            title="Telaffuzu dinlemek için tıkla"
          >
            <span className={`runic text-7xl sm:text-8xl leading-none transition-all drop-shadow-[0_4px_12px_rgba(43,196,196,0.3)] ${
              speakingText === currentExercise.runePrompt ? 'scale-110 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]' : 'group-hover:scale-105'
            }`}>
              {currentExercise.runePrompt}
            </span>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-metin-2 group-hover:text-marka bg-zemin-3 px-3 py-1 rounded-full border border-zemin-4 transition-colors">
              <Volume2 className={`w-3.5 h-3.5 ${speakingText === currentExercise.runePrompt ? 'text-amber-400 animate-pulse' : 'text-marka'}`} />
              <span>{speakingText === currentExercise.runePrompt ? 'Okunuyor...' : 'Telaffuzunu Dinle'}</span>
            </div>
          </div>
        )}

        {/* 1. Multiple Choice View */}
        {(currentExercise.type === 'choice' || currentExercise.type === 'identify_rule') && currentExercise.options && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
            {currentExercise.options.map((option) => {
              const isSelected = selectedChoice === option;
              return (
                // Geçersiz HTML olmasın diye div: içinde hoparlör düğmesi var,
                // <button> içine <button> konamaz (React de uyarıyor).
                // Erişilebilirlik role/tabIndex/klavye ile korunuyor.
                <div
                  key={option}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isChecked ? -1 : 0}
                  onClick={() => {
                    if (isChecked) return;
                    playChiselSound();
                    setSelectedChoice(option);
                    handleSpeak(option);
                  }}
                  onKeyDown={(e) => {
                    if (isChecked) return;
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      playChiselSound();
                      setSelectedChoice(option);
                      handleSpeak(option);
                    }
                  }}
                  className={`relative min-h-16 py-3 pl-12 pr-20 rounded-2xl border-2 text-center transition-all font-medium text-sm flex items-center justify-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-marka ${
                    isSelected
                      ? 'bg-marka/15 border-marka text-white shadow-[0_0_15px_rgba(43,196,196,0.2)]'
                      : 'bg-zemin-3 border-zemin-4 text-metin hover:border-bilgi/60 hover:bg-[#1a2c47]'
                  }`}
                >
                  <span className="leading-relaxed">{option}</span>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleSpeak(option, undefined, e)}
                      title="Telaffuzu Dinle"
                      className={`p-1.5 rounded-lg hover:bg-marka/20 transition-colors ${
                        speakingText === option ? 'text-amber-400 bg-amber-400/20 animate-pulse' : 'text-metin-3 hover:text-marka'
                      }`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs flex-shrink-0 ${
                      isSelected ? 'border-marka bg-marka text-zemin font-bold' : 'border-metin-3'
                    }`}>
                      {isSelected && '✓'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. Cloze Sentence Fill-in */}
        {currentExercise.type === 'cloze' && currentExercise.clozeSentence && (
          <div className="space-y-6 my-2">
            <div className="p-6 bg-zemin-2 border-2 border-zemin-4 rounded-2xl text-center space-y-3 relative group">
              <button
                type="button"
                onClick={() => handleSpeak(currentExercise.clozeSentence?.fullMeaning || '')}
                className="absolute right-4 top-4 p-2 rounded-xl bg-zemin-3 border border-zemin-4 hover:border-marka text-marka hover:text-white transition-colors"
                title="Cümlenin Telaffuzunu Dinle"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <div 
                onClick={() => handleSpeak(currentExercise.clozeSentence?.fullMeaning || '')}
                className="flex items-center justify-center gap-3 runic text-4xl sm:text-5xl text-white cursor-pointer"
                title="Dinlemek için tıkla"
              >
                <span>{currentExercise.clozeSentence.preRune}</span>
                <span className="w-14 h-14 border-2 border-dashed border-marka rounded-xl flex items-center justify-center text-marka bg-zemin-3">
                  {selectedChoice || '?'}
                </span>
                <span>{currentExercise.clozeSentence.postRune}</span>
              </div>
              <div className="text-xs text-metin-2 pt-2 border-t border-zemin-4 flex items-center justify-center gap-2">
                <span>Anlam: <span className="text-white font-semibold">{currentExercise.clozeSentence.fullMeaning}</span></span>
              </div>
            </div>

            {/* Option Chips */}
            <div className="flex items-center justify-center gap-3">
              {currentExercise.options?.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    if (isChecked) return;
                    playChiselSound();
                    setSelectedChoice(opt);
                    handleSpeak(opt);
                  }}
                  className={`w-14 h-14 rounded-2xl border-2 runic text-2xl font-bold flex items-center justify-center transition-all ${
                    selectedChoice === opt
                      ? 'bg-marka text-zemin border-marka scale-105 shadow-lg'
                      : 'bg-zemin-3 text-white border-zemin-4 hover:border-marka'
                  }`}
                  title="Seç ve Telaffuzunu Dinle"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3. Pair Matching View */}
        {currentExercise.type === 'pair_match' && currentExercise.pairs && (
          <div className="grid grid-cols-2 gap-4 my-2">
            {/* Runes Column */}
            <div className="space-y-2.5">
              <span className="text-xs text-metin-2 font-semibold uppercase tracking-wider block mb-1">
                Tamgalar (Dinlemek için tıkla)
              </span>
              {currentExercise.pairs.map((pair) => {
                const isMatched = matchedPairs[pair.rune];
                const isSelected = selectedPairRune === pair.rune;
                return (
                  <button
                    key={pair.rune}
                    disabled={isMatched || isChecked}
                    onClick={() => {
                      playChiselSound();
                      handleSpeak(pair.rune, pair.sound);
                      setSelectedPairRune(pair.rune);
                    }}
                    className={`relative w-full min-h-16 py-3 px-12 rounded-2xl border-2 text-center transition-all flex items-center justify-center ${
                      isMatched
                        ? 'bg-basari/20 border-basari text-basari opacity-60 cursor-default'
                        : isSelected
                        ? 'bg-marka/20 border-marka text-white shadow-lg'
                        : 'bg-zemin-3 border-zemin-4 text-white hover:border-bilgi'
                    }`}
                  >
                    <span className="runic text-3xl font-bold leading-none">{pair.rune}</span>
                    <Volume2 className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-metin-3 opacity-70" />
                  </button>
                );
              })}
            </div>

            {/* Sounds Column */}
            <div className="space-y-2.5">
              <span className="text-xs text-metin-2 font-semibold uppercase tracking-wider block mb-1">
                Ses Değerleri
              </span>
              {shuffledSoundPairs.map((pair) => {
                const isMatched = matchedPairs[pair.rune];
                const isSelected = selectedPairSound === pair.sound;
                return (
                  <button
                    key={pair.sound}
                    disabled={isMatched || isChecked}
                    onClick={() => {
                      playChiselSound();
                      handleSpeak(pair.sound);
                      setSelectedPairSound(pair.sound);
                    }}
                    className={`relative w-full min-h-16 py-3 px-12 rounded-2xl border-2 text-center text-sm font-semibold transition-all flex items-center justify-center ${
                      isMatched
                        ? 'bg-basari/20 border-basari text-basari opacity-60 cursor-default'
                        : isSelected
                        ? 'bg-marka/20 border-marka text-white shadow-lg'
                        : 'bg-zemin-3 border-zemin-4 text-metin hover:border-bilgi'
                    }`}
                  >
                    <span>{pair.sound}</span>
                    <Volume2 className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-metin-3 opacity-70" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Word Builder View (Right-to-Left Rune Assembler) */}
        {currentExercise.type === 'word_builder' && currentExercise.targetWord && (
          <div className="space-y-6 my-2">
            {/* Target Meaning */}
            <div className="p-4 bg-zemin-2 border border-zemin-4 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-metin-2 block">Hedef Kelime</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-lg font-bold text-white font-serif">{currentExercise.targetWord.latin}</span>
                  <button
                    type="button"
                    onClick={() => handleSpeak(currentExercise.targetWord?.latin || currentExercise.targetWord?.rune || '')}
                    className="p-1.5 rounded-lg bg-zemin-3 hover:bg-marka/20 text-marka border border-zemin-4 hover:border-marka transition-colors"
                    title="Kelimeyi Dinle"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-metin-2 block">Anlam</span>
                <span className="text-sm font-semibold text-marka">{currentExercise.targetWord.meaning}</span>
              </div>
            </div>

            {/* Answer Tray (RTL!) */}
            <div
              dir="rtl"
              className="min-h-20 p-4 bg-zemin-3 border-2 border-zemin-4 rounded-2xl flex items-center justify-center gap-2 flex-wrap"
            >
              {arrangedTokens.length === 0 ? (
                <span dir="ltr" className="text-xs text-metin-3 italic">
                  Aşağıdaki tamgalara tıklayarak buraya yerleştirin (telaffuzları seslendirilecektir)...
                </span>
              ) : (
                arrangedTokens.map((token, idx) => (
                  <button
                    key={`${token}-${idx}`}
                    onClick={() => !isChecked && handleRemoveToken(token, idx)}
                    className="min-w-14 h-14 px-3 rounded-xl bg-marka hover:bg-rose-500 text-zemin hover:text-white font-bold runic text-2xl whitespace-nowrap flex items-center justify-center transition-all shadow-md group"
                    title="Kaldırmak ve telaffuzunu dinlemek için tıkla"
                  >
                    {token}
                  </button>
                ))
              )}
            </div>

            {/* Available Tokens Pool */}
            <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
              {availableTokens.map((token, idx) => (
                <button
                  key={`${token}-${idx}`}
                  disabled={isChecked}
                  onClick={() => handleSelectToken(token, idx)}
                  className="min-w-14 h-14 px-3 rounded-xl bg-zemin-2 border-2 border-zemin-4 hover:border-marka text-white font-bold runic text-2xl whitespace-nowrap flex items-center justify-center transition-all shadow active:scale-95"
                  title="Yerleştir ve telaffuzu dinle"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 5. Translation Exercise View */}
        {currentExercise.type === 'translation' && currentExercise.translationData && (
          <div className="space-y-6 my-2">
            {/* Ancient Inscription Quote Card */}
            <div className="p-5 bg-gradient-to-r from-zemin-2 to-zemin-3 border-2 border-zemin-4 rounded-2xl space-y-2 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs text-marka font-semibold uppercase tracking-wider block">
                  Bengü Taş Dizesi
                </span>
                <button
                  type="button"
                  onClick={() => handleSpeak(currentExercise.translationData?.transcription || currentExercise.translationData?.runicText || '')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zemin text-xs font-semibold text-marka border border-zemin-4 hover:border-marka transition-colors"
                  title="Bengü Taş Dizesini Dinle"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dizeyi Dinle</span>
                </button>
              </div>
              <p className="runic text-2xl sm:text-3xl text-white leading-relaxed text-right">
                {currentExercise.translationData.runicText}
              </p>
              <p className="text-xs text-metin-2 italic border-t border-zemin-4 pt-2">
                Okunuş: {currentExercise.translationData.transcription}
              </p>
            </div>

            {/* Translation Tray */}
            <div className="min-h-18 p-4 bg-zemin-3 border-2 border-zemin-4 rounded-2xl flex items-center gap-2 flex-wrap">
              {arrangedTokens.length === 0 ? (
                <span className="text-xs text-metin-3 italic">
                  Kelimeleri sırasıyla seçerek Türkçe cümleyi oluşturun...
                </span>
              ) : (
                arrangedTokens.map((token, idx) => (
                  <button
                    key={`${token}-${idx}`}
                    onClick={() => !isChecked && handleRemoveToken(token, idx)}
                    className="px-3.5 py-1.5 rounded-xl bg-marka text-zemin font-semibold text-sm shadow hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    {token}
                  </button>
                ))
              )}
            </div>

            {/* Word Tokens Pool */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {availableTokens.map((token, idx) => (
                <button
                  key={`${token}-${idx}`}
                  disabled={isChecked}
                  onClick={() => handleSelectToken(token, idx)}
                  className="px-3.5 py-2 rounded-xl bg-zemin-2 border border-zemin-4 hover:border-marka text-white font-medium text-sm transition-all shadow"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Feedback Banner & Action Bar */}
      <div className={`w-full border-t transition-all duration-300 ${
        !isChecked
          ? 'bg-zemin border-zemin-4'
          : isCorrect
          ? 'bg-basari/15 border-basari'
          : 'bg-rose-500/15 border-rose-500'
      }`}>
        <div className="max-w-3xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Feedback message */}
          {isChecked ? (
            <div className="flex items-start gap-3 w-full sm:w-auto">
              <div className={`p-2 rounded-xl ${isCorrect ? 'bg-basari text-white' : 'bg-rose-500 text-white'}`}>
                {isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
              </div>
              <div>
                <h4 className={`text-base font-bold font-serif ${isCorrect ? 'text-basari' : 'text-rose-400'}`}>
                  {isCorrect ? 'Harika! Doğru Cevap' : 'Yanlış Cevap'}
                </h4>
                {currentExercise.explanation && (
                  <p className="text-xs text-metin mt-0.5 max-w-lg leading-relaxed">
                    {currentExercise.explanation}
                  </p>
                )}
                {!isCorrect && currentExercise.correctAnswer && (
                  <p className="text-xs text-rose-300 font-semibold mt-1">
                    Doğru Cevap: {currentExercise.correctAnswer}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="hidden sm:block text-xs text-metin-3">
              Seçimini yap ve kontrol et düğmesine tıkla.
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={handleCheck}
            disabled={!canCheck()}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 flex-shrink-0 ${
              !canCheck()
                ? 'bg-zemin-3 text-metin-3 border border-zemin-4 cursor-not-allowed'
                : !isChecked
                ? 'bg-marka hover:bg-marka-koyu text-zemin active:scale-95 shadow-marka/20'
                : isCorrect
                ? 'bg-basari hover:bg-[#2e9c5b] text-white active:scale-95'
                : 'bg-rose-500 hover:bg-rose-600 text-white active:scale-95'
            }`}
          >
            <span>{isChecked ? 'Devam Et' : 'Kontrol Et'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
