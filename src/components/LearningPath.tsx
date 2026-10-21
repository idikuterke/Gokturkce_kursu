import React, { useState } from 'react';
import { 
  Check, Lock, Star, Play, Sparkles, Award, Shield, Flame, 
  BookOpen, Compass, Layers, RefreshCw, BarChart2, Heart, Gift, 
  ChevronRight, Volume2, PenTool, CheckCircle2
} from 'lucide-react';
import { Unit, Lesson, UserProgress, TamgaItem } from '../types';
import { BilgeAlp } from './BilgeAlp';
import { TAMGALAR } from '../data/tamgalarData';
import { playChiselSound, playSuccessSound, playVictoryFanfare } from '../utils/audio';
import { DailyQuestsWidget } from './DailyQuestsWidget';
import { GununTamgasiModal } from './GununTamgasiModal';
import confetti from 'canvas-confetti';

interface LearningPathProps {
  units: Unit[];
  progress: UserProgress;
  onStartLesson: (lesson: Lesson) => void;
  onOpenTamgalik: () => void;
  onOpenFlashcards: () => void;
  onQuickPractice: () => void;
  onClaimReward: (questId: string) => void;
  onClaimSuperBonus: () => void;
  onNavigateToTab: (tab: string) => void;
  onOpenQuestsModal?: () => void;
  onEarnChestReward?: (xp: number, hearts: number) => void;
  onStartDrawingTamga?: (tamga: TamgaItem) => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({
  units,
  progress,
  onStartLesson,
  onOpenTamgalik,
  onOpenFlashcards,
  onQuickPractice,
  onClaimReward,
  onClaimSuperBonus,
  onNavigateToTab,
  onOpenQuestsModal,
  onEarnChestReward,
  onStartDrawingTamga
}) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isGununTamgasiOpen, setIsGununTamgasiOpen] = useState(false);
  const [openedChests, setOpenedChests] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('gokturkce_opened_chests');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Pick today's tamga based on day of year
  const dayIndex = Math.floor(Date.now() / 86400000) % TAMGALAR.length;
  const todaysTamga = TAMGALAR[dayIndex];

  // Helper to determine if a lesson is unlocked
  const isLessonUnlocked = (unit: Unit, lessonIndex: number): boolean => {
    if (unit.number === 1 && lessonIndex === 0) return true;
    
    if (lessonIndex > 0) {
      const prevLesson = unit.lessons[lessonIndex - 1];
      return !!progress.completedLessons[prevLesson.id];
    }
    
    const prevUnit = units[unit.number - 2];
    if (prevUnit) {
      const lastLessonOfPrevUnit = prevUnit.lessons[prevUnit.lessons.length - 1];
      return !!progress.completedLessons[lastLessonOfPrevUnit.id];
    }
    
    return false;
  };

  // Open star chest handler
  const handleOpenChest = (chestId: string) => {
    if (openedChests[chestId]) return;

    playVictoryFanfare();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F59E0B', '#2DD4BF', '#FBBF24']
    });

    const updated = { ...openedChests, [chestId]: true };
    setOpenedChests(updated);
    try {
      localStorage.setItem('gokturkce_opened_chests', JSON.stringify(updated));
    } catch {
      // ignore
    }

    if (onEarnChestReward) {
      onEarnChestReward(25, 1);
    }
  };

  // Dynamic Winding Offsets for Duolingo Path (Zig-Zag / Steppe Trail)
  const getWindingOffsetClass = (index: number): string => {
    const cycle = index % 6;
    switch (cycle) {
      case 0: return 'translate-x-0';
      case 1: return 'translate-x-8 sm:translate-x-14';
      case 2: return 'translate-x-14 sm:translate-x-24';
      case 3: return 'translate-x-8 sm:translate-x-14';
      case 4: return 'translate-x-0';
      case 5: return '-translate-x-8 sm:-translate-x-14';
      default: return 'translate-x-0';
    }
  };

  // Today's summary stats
  const todayCompletedCount = Object.keys(progress.completedLessons || {}).length;
  const todayXp = progress.xp;

  return (
    <div className="max-w-6xl mx-auto px-4 py-5 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left 2 Columns: Duolingo Vertical Learning Path */}
      <div className="lg:col-span-2 space-y-8 sm:space-y-10">
        
        {/* Banner with Bilge Bozkır Alpi Mascot */}
        {/* Telefonda daha derli toplu: öğrenme yolunun ilk dersi
            ekranın altında görünsün diye iç boşluk ve aralık kısıldı. */}
        <div className="relative overflow-hidden bg-gradient-to-r from-derin-3 via-[#10343D] to-derin-3 border border-derin rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-2xl">
          <div className="space-y-2.5 text-center sm:text-left z-10 max-w-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-uyari/10 text-uyari border border-uyari/30">
              <Sparkles className="w-3.5 h-3.5" /> Bozkırın Kadim Yolculuğu
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">
              Taşlara Kazınan Tarih Seni Bekliyor
            </h2>
            <p className="text-xs sm:text-sm text-metin-4 leading-relaxed">
              Her gün birkaç dakika ayırarak Orhun bengü taşlarını orijinal runik tamgalarıyla okumayı öğren.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <button
                onClick={() => onNavigateToTab('alistirma')}
                className="btn-3d-teal px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Yazma Pratiği Yap</span>
              </button>
              <button
                onClick={() => onNavigateToTab('kesfet')}
                className="btn-3d-bronze px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-marka-acik" />
                <span>Kitabeleri Oku</span>
              </button>
            </div>
          </div>

          <div className="z-10 flex-shrink-0 scale-75 sm:scale-100 origin-center">
            {/* Daha önce tek sabit replik vardı. Artık bağlama göre
                konuşuyor: hiç ilerleme yoksa karşılama, varsa dönüş. */}
            <BilgeAlp baglam={todayCompletedCount > 0 ? 'donus' : 'karsilama'} size={135} />
          </div>

          {/* Subtle Runic Ambient Background */}
          {/* Telefonda gizli: dar ekranda tamgalar düğmelerin arkasından
              geçip yarım kalmış bir çizim gibi görünüyordu. */}
          <div className="absolute right-2 top-0 bottom-0 pointer-events-none opacity-5 hidden sm:flex items-center justify-center select-none runic text-9xl text-white font-bold">
            𐱅𐰇𐰼𐰜
          </div>
        </div>

        {/* Units & Duolingo Winding Nodes */}
        {units.map((unit) => {
          const unitLessons = unit.lessons;
          const completedInUnit = unitLessons.filter(l => progress.completedLessons[l.id]).length;
          const unitProgressPercent = Math.round((completedInUnit / unitLessons.length) * 100);

          return (
            <div key={unit.id} className="space-y-6">
              {/* Unit Header Card */}
              <div className="bg-[#0C2228] border border-[#1A424B] rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs font-bold text-uyari tracking-wider uppercase font-mono">
                      {unit.number}. Aşama
                    </span>
                    <span className="text-xs text-marka-acik">· {unit.subtitle}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif">{unit.title}</h3>
                  <p className="text-xs text-metin-4">{unit.description}</p>
                </div>

                {/* Circular Duolingo Progress Indicator */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-[#15343D]"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-marka-acik transition-all duration-700 ease-out"
                        strokeDasharray={`${unitProgressPercent}, 100`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-[11px] font-bold text-white font-mono">
                      %{unitProgressPercent}
                    </span>
                  </div>
                  <div className="text-left text-xs">
                    <p className="font-bold text-white">{completedInUnit} / {unitLessons.length}</p>
                    <p className="text-[10px] text-[#64748B]">Ders Bitti</p>
                  </div>
                </div>
              </div>

              {/* Dikey Kıvrımlı Yol Haritası (Duolingo Path) */}
              <div className="relative py-6 flex flex-col items-center gap-6">
                {/* Connecting Steppe Trail Line */}
                <div className="absolute top-4 bottom-8 w-2 bg-gradient-to-b from-[#1C4852] via-[#205763] to-[#1C4852] rounded-full pointer-events-none opacity-60" />

                {unitLessons.map((lesson, idx) => {
                  const isCompleted = !!progress.completedLessons[lesson.id];
                  const isUnlocked = isLessonUnlocked(unit, idx);
                  const isCurrentActive = isUnlocked && !isCompleted;
                  const offsetClass = getWindingOffsetClass(idx);
                  const isExam = lesson.type === 'exam';

                  // Show star chest after every 3 lessons
                  const showChestBefore = idx > 0 && idx % 3 === 0;
                  const chestId = `chest_${unit.id}_${idx}`;
                  const isChestOpened = !!openedChests[chestId];

                  return (
                    <React.Fragment key={lesson.id}>
                      {/* Interactive Star Chest Node */}
                      {showChestBefore && (
                        <div className={`relative z-10 transition-transform ${offsetClass} my-1`}>
                          <button
                            onClick={() => handleOpenChest(chestId)}
                            title={isChestOpened ? 'Açıldı' : 'Yıldız Sandığını Aç (+25 XP & 1 Can)'}
                            className={`p-3.5 rounded-2xl flex items-center gap-2 transition-all cursor-pointer ${
                              isChestOpened
                                ? 'bg-derin-2 border border-[#19404B] text-gray-500 opacity-60'
                                : 'btn-3d-gold animate-bounce shadow-lg shadow-uyari/25'
                            }`}
                          >
                            <Gift className={`w-5 h-5 ${isChestOpened ? 'text-gray-400' : 'text-toprak-2 animate-spin'}`} />
                            <span className="text-xs font-bold whitespace-nowrap">
                              {isChestOpened ? 'Sandık Alındı' : 'Yıldız Sandığı!'}
                            </span>
                          </button>
                        </div>
                      )}

                      {/* Main Lesson Node */}
                      <div className={`relative z-10 transition-transform ${offsetClass} flex flex-col items-center`}>
                        {/* Active Lesson Floating Banner / Flag */}
                        {isCurrentActive && (
                          <div className="mb-2 animate-bounce">
                            <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-uyari text-toprak-2 shadow-md border border-[#FDE68A] flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-toprak-2" /> BAŞLA
                            </span>
                          </div>
                        )}

                        {/* Duolingo Circular 3D Node Button */}
                        <button
                          onClick={() => {
                            if (isUnlocked) {
                              playChiselSound();
                              setSelectedLesson(lesson);
                            }
                          }}
                          disabled={!isUnlocked}
                          className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer ${
                            isCompleted
                              ? 'bg-marka-derin border-b-4 border-[#0F766E] shadow-lg shadow-marka-derin/30 hover:scale-105 active:translate-y-1 text-white'
                              : isCurrentActive
                              ? 'bg-uyari border-b-4 border-[#B45309] shadow-xl shadow-uyari/35 hover:scale-105 active:translate-y-1 animate-gentle-pulse text-toprak-2'
                              : 'bg-[#152E36] border-b-4 border-[#0A1A1F] text-[#4B636C] cursor-not-allowed opacity-80'
                          }`}
                        >
                          {/* Inner Icon or Rune */}
                          {isCompleted ? (
                            <Check className="w-8 h-8 stroke-[3]" />
                          ) : isCurrentActive ? (
                            <Play className="w-8 h-8 fill-current ml-0.5" />
                          ) : isExam ? (
                            <Shield className="w-7 h-7" />
                          ) : (
                            <Lock className="w-6 h-6" />
                          )}

                          {/* Mini Star / Crown on top */}
                          {isCompleted && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-uyari border-2 border-derin-3 flex items-center justify-center text-toprak-2 shadow-sm">
                              <Star className="w-3.5 h-3.5 fill-current" />
                            </div>
                          )}
                        </button>

                        {/* Lesson Title Label Below Node */}
                        {/* truncate yerine iki satır: ders adları tek
                            satıra sığmıyordu ve "I/İ, O/U ve Ö/Ü Tamgal…"
                            gibi kırpılıp bilgi kaybediyordu. */}
                        <div className="mt-2 text-center w-[150px]">
                          <p className={`text-xs font-bold leading-tight line-clamp-2 ${
                            isCurrentActive ? 'text-uyari' : isCompleted ? 'text-white' : 'text-[#64748B]'
                          }`}>
                            {lesson.title}
                          </p>
                          <span className="text-[10px] text-marka-acik font-mono">
                            +{lesson.xp} XP
                          </span>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}

                {/* Bölüm Sonu Toyu / Kurultay Final Sınavı Kapısı */}
                <div className="relative z-10 mt-4 text-center">
                  <div className="p-4 rounded-3xl bg-gradient-to-b from-[#13353E] to-[#0A1E24] border-2 border-uyari/50 shadow-xl max-w-sm flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-uyari/10 border border-uyari/40 flex items-center justify-center text-uyari">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-serif">{unit.number}. Aşama Bozkır Toyu</h4>
                      <p className="text-[11px] text-metin-4">
                        Bu aşamadaki tüm tamgaları tamamlayıp büyük kitabe sınavına katıl!
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const lastLesson = unit.lessons[unit.lessons.length - 1];
                        if (isLessonUnlocked(unit, unit.lessons.length - 1)) {
                          onStartLesson(lastLesson);
                        }
                      }}
                      disabled={!isLessonUnlocked(unit, unit.lessons.length - 1)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                        isLessonUnlocked(unit, unit.lessons.length - 1)
                          ? 'btn-3d-gold shadow-lg shadow-uyari/25'
                          : 'bg-[#152D34] text-gray-500 cursor-not-allowed opacity-60'
                      }`}
                    >
                      Toya Başla
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* "Bugün Ne Öğrendin?" Özet Kartı */}
        <div className="bg-derin-3 border border-[#1A4752] rounded-3xl p-6 sm:p-7 shadow-xl text-left space-y-4">
          <div className="flex items-center justify-between border-b border-[#183F49] pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-marka-acik/10 text-marka-acik border border-marka-acik/20">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-white font-serif">Bugün Ne Öğrendin?</h4>
                <p className="text-[11px] text-metin-4">Günlük Bozkır İlerleme Özeti</p>
              </div>
            </div>
            <span className="text-xs font-bold text-uyari font-mono">
              🔥 {progress.streak} Günlük Seri
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-[#08191E] border border-[#163840] text-center">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">Tamamlanan</span>
              <span className="text-lg font-bold text-white font-mono">{todayCompletedCount} Ders</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#08191E] border border-[#163840] text-center">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">Toplam XP</span>
              <span className="text-lg font-bold text-uyari font-mono">{todayXp} XP</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#08191E] border border-[#163840] text-center">
              <span className="text-[10px] text-[#64748B] uppercase font-bold block">Mevcut Rütbe</span>
              <span className="text-lg font-bold text-marka-acik font-serif">{progress.rank}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Kompakt Günün Tamgası, Hızlı Can & Görevler */}
      <div className="space-y-6">
        
        {/* İnteraktif Günün Tamgası Kartı (Tıklanınca Detay Modal Açar) */}
        <div 
          onClick={() => setIsGununTamgasiOpen(true)}
          className="group relative overflow-hidden bg-gradient-to-br from-derin-3 to-[#08191D] border border-[#1E4852] hover:border-uyari rounded-3xl p-5 shadow-xl transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-uyari/10 text-uyari border border-uyari/30">
              <Sparkles className="w-3 h-3" /> Günün Tamgası
            </span>
            <span className="text-[11px] text-marka-acik group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-bold">
              Hikayeyi Aç <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="flex items-center gap-4 bg-[#07161A] p-4 rounded-2xl border border-[#163B43]">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#163842] to-[#0B1E22] border border-uyari flex items-center justify-center flex-shrink-0 shadow-md">
              <span className="runic text-3xl text-marka-acik group-hover:scale-110 transition-transform">
                {todaysTamga.rune}
              </span>
            </div>

            <div className="space-y-1 text-left">
              <h4 className="text-base font-bold text-white font-serif">{todaysTamga.name}</h4>
              <p className="text-xs text-metin-4">
                Ses: <span className="text-marka-acik font-bold">/{todaysTamga.sound}/</span> · {todaysTamga.type || 'Nötr'}
              </p>
              <p className="text-[11px] text-uyari italic truncate max-w-[180px]">
                "{todaysTamga.mnemonicHint}"
              </p>
            </div>
          </div>
        </div>

        {/* Kompakt Hızlı Can & Talimhane Kartı */}
        <div className="bg-[#0C2228] border border-[#1B424B] rounded-3xl p-5 shadow-xl space-y-3 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-xs font-bold text-white">Bozkır Can Gücü</span>
            </div>
            <span className="text-xs font-mono font-bold text-uyari">
              {progress.hearts} / {progress.maxHearts} Can
            </span>
          </div>

          {/* Heart meter */}
          <div className="flex items-center gap-1.5 py-1">
            {Array.from({ length: progress.maxHearts }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all ${
                  i < progress.hearts ? 'bg-rose-500 shadow-sm shadow-rose-500/50' : 'bg-[#15313A]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={onQuickPractice}
              className="flex-1 py-2 px-3 rounded-xl btn-3d-teal text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Hızlı Can Tazele</span>
            </button>
            <button
              onClick={() => onNavigateToTab('alistirma')}
              className="py-2 px-3 rounded-xl btn-3d-bronze text-xs font-bold flex items-center justify-center cursor-pointer"
              title="Yazma Talimhanesi"
            >
              <PenTool className="w-3.5 h-3.5 text-marka-acik" />
            </button>
          </div>
        </div>

        {/* Günlük Görevler Widget */}
        <DailyQuestsWidget
          dailyQuests={progress.dailyQuests}
          onClaimReward={onClaimReward}
          onClaimSuperBonus={onClaimSuperBonus}
          onNavigateToTab={onNavigateToTab}
        />
      </div>

      {/* Lesson Selection Modal */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeInDown">
          <div className="relative w-full max-w-md bg-derin-3 border border-[#20535E] rounded-3xl p-6 sm:p-7 shadow-2xl text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[#183E47] pb-3">
              <span className="text-xs font-bold text-uyari tracking-wider uppercase font-mono">
                Ders Hazırlığı
              </span>
              <span className="text-xs text-marka-acik font-mono">+{selectedLesson.xp} XP</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white font-serif">{selectedLesson.title}</h3>
              <p className="text-xs text-metin-4">{selectedLesson.subtitle}</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#07171B] border border-[#163840] flex items-center justify-between text-xs text-[#CBD5E1]">
              <span>Toplam Soru:</span>
              <span className="font-bold text-white">{selectedLesson.exercises.length} Alıştırma</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const lessonToStart = selectedLesson;
                  setSelectedLesson(null);
                  onStartLesson(lessonToStart);
                }}
                className="flex-1 py-3 px-4 rounded-xl btn-3d-teal font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Derse Başla</span>
              </button>

              <button
                onClick={() => setSelectedLesson(null)}
                className="py-3 px-4 rounded-xl btn-3d-bronze text-xs font-bold cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Günün Tamgası Hikaye & Ses Modalı */}
      <GununTamgasiModal
        tamga={todaysTamga}
        isOpen={isGununTamgasiOpen}
        onClose={() => setIsGununTamgasiOpen(false)}
        onStartDrawing={(t) => {
          if (onStartDrawingTamga) {
            onStartDrawingTamga(t);
          } else {
            onNavigateToTab('alistirma');
          }
        }}
        onOpenFlashcards={onOpenFlashcards}
      />
    </div>
  );
};
