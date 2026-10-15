import React, { useState } from 'react';
import { Check, Lock, Star, Play, Sparkles, Award, Shield, Flame, BookOpen, Compass, Layers, RefreshCw, BarChart2 } from 'lucide-react';
import { Unit, Lesson, UserProgress } from '../types';
import { MascotBoru } from './MascotBoru';
import { TAMGALAR } from '../data/tamgalarData';
import { playChiselSound } from '../utils/audio';
import { DailyQuestsWidget } from './DailyQuestsWidget';

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
  onNavigateToTab
}) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  // Pick today's tamga based on day of year
  const dayIndex = Math.floor(Date.now() / 86400000) % TAMGALAR.length;
  const todaysTamga = TAMGALAR[dayIndex];

  // Helper to determine if a lesson is unlocked
  const isLessonUnlocked = (unit: Unit, lessonIndex: number): boolean => {
    // First lesson in first unit is always unlocked
    if (unit.number === 1 && lessonIndex === 0) return true;
    
    // Check if previous lesson in this unit is completed
    if (lessonIndex > 0) {
      const prevLesson = unit.lessons[lessonIndex - 1];
      return !!progress.completedLessons[prevLesson.id];
    }
    
    // If it's the first lesson of a subsequent unit, check if the previous unit's exam was completed
    const prevUnit = units[unit.number - 2];
    if (prevUnit) {
      const lastLessonOfPrevUnit = prevUnit.lessons[prevUnit.lessons.length - 1];
      return !!progress.completedLessons[lastLessonOfPrevUnit.id];
    }
    
    return false;
  };

  const ranks = [
    { title: 'Er', minXp: 0, rune: '𐰼', desc: 'Acemi Alp' },
    { title: 'Çor', minXp: 50, rune: '𐰱', desc: 'Bozkır Savaşçısı' },
    { title: 'Tarkan', minXp: 120, rune: '𐱃', desc: 'Ordu Komutanı' },
    { title: 'Toygun', minXp: 200, rune: '𐱃𐰆', desc: 'Kurultay Üyesi' },
    { title: 'Bilge', minXp: 320, rune: '𐰋', desc: 'Ulu Bilgin' },
    { title: 'Kağan', minXp: 500, rune: '𐰴', desc: 'Bütün Türklerin Hakanı' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left 2 Columns: Main Duolingo Learning Tree */}
      <div className="lg:col-span-2 space-y-12">
        {/* Banner with mascot */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#101B2C] via-[#152338] to-[#101B2C] border border-[#233754] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2BC4C4]/10 text-[#2BC4C4] border border-[#2BC4C4]/30">
              <Sparkles className="w-3.5 h-3.5" /> Kadim Yazı Macerası
            </span>
            <h2 className="text-2xl font-bold text-white font-serif">
              Taşlara Kazınan Tarih Seni Bekliyor
            </h2>
            <p className="text-sm text-[#9FB0C6] max-w-md">
              Her gün 5 dakika ayırarak Orhun bengü taşlarını doğrudan orijinal runik tamgalarıyla okumayı öğren.
            </p>
          </div>
          <div className="z-10 flex-shrink-0">
            <MascotBoru 
              mood="happy" 
              speech="Esen olsun alpım! Bugün hangi tamgayı öğreniyoruz?" 
              size={110} 
            />
          </div>
          {/* Subtle background rune watermark */}
          <div className="absolute right-0 top-0 bottom-0 pointer-events-none opacity-5 flex items-center justify-center select-none">
            <span className="runic text-9xl font-bold text-white">𐱅𐰇𐰼𐰜</span>
          </div>
        </div>

        {/* Quick Access to Istatistiklerim & Grafikler Banner */}
        <div 
          onClick={() => onNavigateToTab('istatistik')}
          className="p-4 rounded-2xl bg-[#101B2C] border border-[#2BC4C4]/50 hover:border-[#2BC4C4] transition-all cursor-pointer flex items-center justify-between gap-4 shadow-lg hover:shadow-[#2BC4C4]/10 group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#2BC4C4]/15 border border-[#2BC4C4]/40 flex items-center justify-center text-[#2BC4C4] group-hover:scale-110 transition-transform">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-serif group-hover:text-[#2BC4C4] transition-colors">
                  İstatistiklerim & Gelişim Grafikleri
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#2BC4C4] text-[#0B1320]">
                  YENİ SAYFA
                </span>
              </div>
              <p className="text-xs text-[#9FB0C6] mt-0.5">
                Kelime haznesi, 21 günlük seri (streak) takvimi ve haftalık XP aktivite grafiklerini incele &rarr;
              </p>
            </div>
          </div>
          <button className="px-3.5 py-1.5 rounded-xl bg-[#152338] group-hover:bg-[#2BC4C4] text-[#2BC4C4] group-hover:text-[#0B1320] font-bold text-xs border border-[#233754] group-hover:border-[#2BC4C4] transition-all flex items-center gap-1.5 flex-shrink-0">
            <span>Aç</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* Units and Nodes Path */}
        {units.map((unit) => {
          const completedCount = unit.lessons.filter(l => progress.completedLessons[l.id]).length;
          const totalCount = unit.lessons.length;
          const percent = Math.round((completedCount / totalCount) * 100);

          return (
            <div key={unit.id} className="space-y-6">
              {/* Unit Header Card */}
              <div className={`p-5 rounded-2xl bg-gradient-to-r ${unit.accentColor} text-white shadow-lg relative overflow-hidden`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                      {unit.number}. AŞAMA
                    </span>
                    <h3 className="text-xl font-bold font-serif">{unit.title}</h3>
                    <p className="text-xs text-white/90 font-medium mt-0.5">{unit.subtitle}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs font-bold bg-black/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {completedCount} / {totalCount} Tamamlandı
                    </span>
                    <div className="w-24 h-2 bg-black/20 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stepping Stones Path */}
              <div className="flex flex-col items-center py-4 space-y-6 relative">
                {unit.lessons.map((lesson, idx) => {
                  const unlocked = isLessonUnlocked(unit, idx);
                  const completed = !!progress.completedLessons[lesson.id];
                  
                  // Gentle S-curve sine horizontal shift
                  const offsetX = Math.sin((unit.number * 3 + idx) * 0.9) * 55;

                  return (
                    <div
                      key={lesson.id}
                      style={{ transform: `translateX(${offsetX}px)` }}
                      className="relative transition-all duration-300 flex flex-col items-center"
                    >
                      {/* Node Button */}
                      <button
                        onClick={() => {
                          playChiselSound();
                          if (unlocked) {
                            setSelectedLesson(lesson);
                          }
                        }}
                        disabled={!unlocked}
                        className={`group relative w-18 h-18 rounded-3xl flex items-center justify-center transition-all duration-200 ${
                          completed
                            ? 'bg-[#37B36A] hover:bg-[#2e9c5b] text-white shadow-[0_6px_0_#1e6b3e] active:translate-y-1 active:shadow-[0_2px_0_#1e6b3e]'
                            : unlocked
                            ? 'bg-[#2BC4C4] hover:bg-[#25adad] text-[#0B1320] shadow-[0_6px_0_#177575] active:translate-y-1 active:shadow-[0_2px_0_#177575] animate-pulse ring-4 ring-[#2BC4C4]/30'
                            : 'bg-[#152338] text-[#6C7F99] border-2 border-[#233754] shadow-[0_4px_0_#0e1826] cursor-not-allowed opacity-75'
                        }`}
                      >
                        {/* Center Icon */}
                        {completed ? (
                          <Check className="w-8 h-8 stroke-[3]" />
                        ) : !unlocked ? (
                          <Lock className="w-6 h-6 text-[#6C7F99]" />
                        ) : lesson.type === 'exam' ? (
                          <Award className="w-8 h-8" />
                        ) : (
                          <Star className="w-7 h-7 fill-current" />
                        )}

                        {/* Top-Right Mini XP Badge */}
                        {unlocked && !completed && (
                          <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 font-bold text-[10px] px-1.5 py-0.5 rounded-full shadow">
                            +{lesson.xp}
                          </span>
                        )}
                      </button>

                      {/* Lesson Title Label under node */}
                      <div className="mt-2 text-center max-w-[140px]">
                        <span className={`text-xs font-semibold leading-tight line-clamp-1 ${unlocked ? 'text-white' : 'text-[#6C7F99]'}`}>
                          {lesson.title}
                        </span>
                      </div>

                      {/* Interactive Lesson Card Dialog on click */}
                      {selectedLesson?.id === lesson.id && (
                        <div className="absolute top-22 z-30 w-72 bg-[#152338] border-2 border-[#2BC4C4] rounded-2xl p-4 shadow-2xl animate-in fade-in zoom-in duration-150">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2BC4C4]">
                                {lesson.type === 'exam' ? 'Aşama Sınavı' : 'Ders'}
                              </span>
                              <h4 className="text-base font-bold text-white font-serif">{lesson.title}</h4>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedLesson(null);
                              }}
                              className="text-[#9FB0C6] hover:text-white p-1"
                            >
                              ✕
                            </button>
                          </div>
                          <p className="text-xs text-[#9FB0C6] mb-4">{lesson.subtitle}</p>

                          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-4 bg-[#101B2C] p-2 rounded-lg border border-[#233754]">
                            <span>Ödül: +{lesson.xp} Tamga XP</span>
                            <span>{lesson.exercises.length} Alıştırma</span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLesson(null);
                              onStartLesson(lesson);
                            }}
                            className="w-full py-2.5 rounded-xl bg-[#2BC4C4] hover:bg-[#25adad] text-[#0B1320] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#2BC4C4]/20 active:scale-95 transition-transform"
                          >
                            <Play className="w-4 h-4 fill-current" />
                            <span>{completed ? 'Tekrar Et' : 'Ders Başlat'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Right 1 Column: Gamification Widgets & Quick Practice */}
      <div className="space-y-6">
        {/* Günlük Görevler / Buyruklar Widget */}
        {progress.dailyQuests && (
          <DailyQuestsWidget
            dailyQuests={progress.dailyQuests}
            onClaimReward={onClaimReward}
            onClaimSuperBonus={onClaimSuperBonus}
            onNavigateToTab={onNavigateToTab}
            onStartRandomLesson={() => {
              const firstLesson = units[0]?.lessons[0];
              if (firstLesson) onStartLesson(firstLesson);
            }}
          />
        )}

        {/* Günün Tamgası Card */}
        <div className="bg-[#101B2C] border border-[#233754] rounded-2xl p-5 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2BC4C4]">
              <Sparkles className="w-4 h-4" /> Günün Tamgası
            </div>
            <button 
              onClick={onOpenTamgalik}
              className="text-xs text-[#9FB0C6] hover:text-[#2BC4C4] transition-colors underline"
            >
              Tamgalık &rarr;
            </button>
          </div>

          <div className="flex items-center gap-4 bg-[#152338] border border-[#233754] p-4 rounded-xl">
            <div className="w-16 h-16 rounded-xl bg-[#0B1320] border border-[#2BC4C4]/40 flex items-center justify-center text-[#2BC4C4] shadow-inner flex-shrink-0">
              <span className="runic text-4xl leading-none">{todaysTamga.rune}</span>
            </div>
            <div className="min-w-0">
              <h4 className="text-base font-bold text-white font-serif">{todaysTamga.name}</h4>
              <p className="text-xs text-[#2BC4C4] font-semibold">{todaysTamga.sound}</p>
              <p className="text-xs text-[#9FB0C6] mt-0.5 truncate">{todaysTamga.exampleWord} — {todaysTamga.exampleMeaning}</p>
            </div>
          </div>

          <p className="text-xs text-[#9FB0C6] italic bg-[#0B1320]/60 p-2.5 rounded-lg border border-[#233754]">
            💡 {todaysTamga.mnemonicHint}
          </p>
        </div>

        {/* Kartlarla Çalış (Flashcards) Quick Widget */}
        <div className="bg-[#101B2C] border-2 border-[#2BC4C4]/50 rounded-2xl p-5 shadow-lg space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2BC4C4] flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Kartlarla Çalış
            </span>
            <span className="text-[10px] bg-[#2BC4C4]/15 text-[#2BC4C4] font-bold px-2 py-0.5 rounded-full">
              Hızlı Ezber
            </span>
          </div>
          <p className="text-xs text-[#9FB0C6]">
            Ön yüzde runik tamga, arka yüzde okunuşu. Tamgaları 3D çevrilebilir kartlarla hafızana kazı!
          </p>
          <button
            onClick={onOpenFlashcards}
            className="w-full py-2.5 rounded-xl bg-[#2BC4C4] hover:bg-[#25adad] text-[#0B1320] font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#2BC4C4]/20 active:scale-95 transition-transform"
          >
            <Layers className="w-4 h-4" />
            <span>Kart Modunu Başlat</span>
          </button>
        </div>

        {/* Hızlı Antrenman & Can Tazele */}
        <div className="bg-gradient-to-br from-[#101B2C] to-[#152338] border border-[#233754] rounded-2xl p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 font-serif">
              <RefreshCw className="w-4 h-4 text-rose-400" /> Hızlı Can Tazeleme
            </h4>
            <span className="text-xs font-semibold text-rose-400">❤️ {progress.hearts}/{progress.maxHearts}</span>
          </div>
          <p className="text-xs text-[#9FB0C6]">
            Canın azaldıysa veya öğrendiklerini pekiştirmek istersen hızlı bir tamga antrenmanı yap ve canını tazele!
          </p>
          <button
            onClick={onQuickPractice}
            className="w-full py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-rose-500/20 active:scale-95 transition-transform"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Alıştırma Yap (+1 Can / +10 XP)</span>
          </button>
        </div>

        {/* Kağanlık Rütbeleri (Rank Ladder) */}
        <div className="bg-[#101B2C] border border-[#233754] rounded-2xl p-5 shadow-lg space-y-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-2 font-serif">
            <Shield className="w-4 h-4 text-[#C9A24A]" /> Bozkır Rütbe Basamakları
          </h4>
          <div className="space-y-2.5">
            {ranks.map((r) => {
              const isCurrent = progress.rank === r.title;
              const isPassed = progress.xp >= r.minXp;
              return (
                <div
                  key={r.title}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                    isCurrent
                      ? 'bg-[#C9A24A]/15 border-[#C9A24A] text-white shadow-md'
                      : isPassed
                      ? 'bg-[#152338] border-[#233754] text-[#E6EDF5] opacity-80'
                      : 'bg-[#0B1320] border-[#1b2b42] text-[#6C7F99] opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#0B1320] flex items-center justify-center runic text-base font-bold text-[#C9A24A] border border-[#233754]">
                      {r.rune}
                    </span>
                    <div>
                      <span className="text-xs font-bold block">{r.title}</span>
                      <span className="text-[10px] text-[#9FB0C6]">{r.desc}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#2BC4C4]">{r.minXp} XP</span>
                    {isCurrent && (
                      <span className="block text-[9px] font-bold text-amber-400 uppercase tracking-wider">
                        Mevcut
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* İstatistiklerim & Profil Özeti Widget */}
        <div className="bg-gradient-to-br from-[#101B2C] via-[#152338] to-[#101B2C] border border-[#233754] hover:border-[#2BC4C4]/50 rounded-2xl p-5 shadow-lg space-y-3 transition-all">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-white flex items-center gap-2 font-serif">
              <BarChart2 className="w-4 h-4 text-[#2BC4C4]" /> İstatistiklerim & Gelişim
            </h4>
            <span className="text-xs font-bold text-orange-400 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-current" /> {progress.streak} Gün
            </span>
          </div>
          <p className="text-xs text-[#9FB0C6]">
            Kelime hazneni, haftalık tecrübe grafiğini ve ardışık gün geçmişini incele.
          </p>
          <button
            onClick={() => onNavigateToTab('istatistik')}
            className="w-full py-2.5 rounded-xl bg-[#152338] hover:bg-[#1f3350] border border-[#233754] hover:border-[#2BC4C4] text-[#2BC4C4] hover:text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <BarChart2 className="w-4 h-4" />
            <span>Detaylı İstatistikleri Gör</span>
          </button>
        </div>
      </div>
    </div>
  );
};
