import React, { useState } from 'react';
import { 
  Award, 
  Flame, 
  BookOpen, 
  Zap, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Trophy,
  Filter
} from 'lucide-react';
import { Badge, BADGES } from '../data/badgesData';
import { UserProgress } from '../types';

interface BadgesSectionProps {
  progress: UserProgress;
  onClaimBadge?: (badge: Badge) => void;
}

export const BadgesSection: React.FC<BadgesSectionProps> = ({ progress, onClaimBadge }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'streak' | 'words' | 'xp' | 'lessons'>('all');
  const [activeBadgeModal, setActiveBadgeModal] = useState<Badge | null>(null);

  // Derive user progress values
  const learnedWordsCount = Object.keys(progress.learnedWords || {}).length;
  const completedLessonsCount = Object.keys(progress.completedLessons || {}).length;
  const userXp = progress.xp;
  const userStreak = progress.streak;

  // Helper to compute progress for a badge
  const getBadgeStatus = (badge: Badge) => {
    let current = 0;
    let target = badge.targetValue;

    switch (badge.category) {
      case 'streak':
        current = userStreak;
        break;
      case 'words':
        current = learnedWordsCount;
        break;
      case 'xp':
        current = userXp;
        break;
      case 'lessons':
        current = completedLessonsCount;
        break;
      default:
        current = 0;
    }

    const isUnlocked = current >= target;
    const isClaimed = Boolean(progress.claimedBadges?.[badge.id]);
    const percent = Math.min(100, Math.round((current / target) * 100));

    return {
      current,
      target,
      isUnlocked,
      isClaimed,
      percent
    };
  };

  const filteredBadges = BADGES.filter(badge => {
    if (selectedCategory === 'all') return true;
    return badge.category === selectedCategory;
  });

  const totalBadges = BADGES.length;
  const unlockedCount = BADGES.filter(b => getBadgeStatus(b).isUnlocked).length;

  const categories = [
    { id: 'all', label: 'Tüm Rozetler', count: totalBadges },
    { id: 'streak', label: 'Süreklilik (Streak)', icon: Flame, count: BADGES.filter(b => b.category === 'streak').length },
    { id: 'words', label: 'Kelime Haznesi', icon: BookOpen, count: BADGES.filter(b => b.category === 'words').length },
    { id: 'xp', label: 'Tecrübe (XP)', icon: Zap, count: BADGES.filter(b => b.category === 'xp').length },
    { id: 'lessons', label: 'Dersler', icon: Award, count: BADGES.filter(b => b.category === 'lessons').length }
  ];

  return (
    <div className="bg-[#101B2C] border border-[#233754] rounded-2xl p-6 shadow-xl space-y-6">
      {/* Header & Badges Trophy Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Trophy className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-white font-serif flex items-center gap-2">
              Kilometre Taşları & Kutlu Rozetler
            </h2>
          </div>
          <p className="text-xs text-[#9FB0C6] mt-1">
            Belirli kelime hedeflerine, streak serilerine ve tecrübe eşiklerine ulaşarak kadim runik nişanları kazanın.
          </p>
        </div>

        {/* Global Badge Progress Pill */}
        <div className="flex items-center gap-3 bg-[#152338] border border-[#233754] px-3.5 py-2 rounded-xl">
          <Award className="w-4 h-4 text-[#2BC4C4]" />
          <div className="text-xs">
            <span className="text-[#9FB0C6]">Kazanılan: </span>
            <span className="font-bold text-white font-mono">{unlockedCount}</span>
            <span className="text-[#6C7F99] font-mono"> / {totalBadges}</span>
          </div>
          <div className="w-16 h-2 bg-[#0B1320] rounded-full overflow-hidden border border-[#233754]">
            <div 
              className="h-full bg-gradient-to-r from-[#2BC4C4] to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.round((unlockedCount / totalBadges) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {categories.map(cat => {
          const isActive = selectedCategory === cat.id;
          const Icon = cat.icon || Filter;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                isActive
                  ? 'bg-[#2BC4C4] text-[#0B1320] border-[#2BC4C4] shadow-sm font-bold'
                  : 'bg-[#152338] hover:bg-[#1a2c46] text-[#9FB0C6] hover:text-white border-[#233754]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-[#0B1320] text-[#2BC4C4]' : 'bg-[#0B1320] text-[#6C7F99]'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredBadges.map((badge) => {
          const { current, target, isUnlocked, isClaimed, percent } = getBadgeStatus(badge);

          return (
            <div
              key={badge.id}
              onClick={() => setActiveBadgeModal(badge)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-3 relative overflow-hidden group ${
                isUnlocked
                  ? 'bg-gradient-to-br from-[#152338] via-[#14233a] to-[#101B2C] border-amber-400/40 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/10'
                  : 'bg-[#101B2C] border-[#233754] opacity-80 hover:opacity-100 hover:border-[#2BC4C4]/50'
              }`}
            >
              {/* Decorative Corner Glow if Unlocked */}
              {isUnlocked && (
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-400/10 rounded-full blur-xl pointer-events-none group-hover:bg-amber-400/20 transition-all" />
              )}

              {/* Top Row: Runic Seal & Badge Meta */}
              <div className="flex items-start gap-3.5">
                {/* Runic Badge Medallion */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-serif text-xl border transition-all flex-shrink-0 shadow-md ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-amber-400/25 to-amber-600/30 text-amber-300 border-amber-400 shadow-amber-400/20 group-hover:scale-105'
                      : 'bg-[#0B1320] text-[#6C7F99] border-[#233754]'
                  }`}
                >
                  {isUnlocked ? (
                    <span className="runic tracking-tighter drop-shadow">{badge.runicTitle}</span>
                  ) : (
                    <Lock className="w-5 h-5 text-[#6C7F99]" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-bold text-white font-serif tracking-tight truncate">
                      {badge.name}
                    </span>
                    {isUnlocked && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> KAZANILDI
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#9FB0C6] mt-0.5 line-clamp-2 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Progress Bar & Target Value */}
              <div className="space-y-1.5 pt-1 border-t border-[#233754]/80">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#9FB0C6] font-mono">
                    {current} / {target} {badge.category === 'streak' ? 'gün' : badge.category === 'words' ? 'kelime' : badge.category === 'xp' ? 'XP' : 'ders'}
                  </span>
                  <span className={`font-mono font-bold ${isUnlocked ? 'text-amber-400' : 'text-[#6C7F99]'}`}>
                    %{percent}
                  </span>
                </div>

                <div className="w-full h-1.5 bg-[#0B1320] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isUnlocked
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                        : 'bg-[#2BC4C4]'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                {/* Reward Action / Notice */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-amber-400/90 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" /> +{badge.bonusXp} XP Ödülü
                  </span>

                  {isUnlocked && !isClaimed && onClaimBadge ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onClaimBadge(badge);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#0B1320] font-bold text-[10px] transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      Ödülü Al
                    </button>
                  ) : isClaimed ? (
                    <span className="text-[10px] text-[#37B36A] font-semibold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Alındı
                    </span>
                  ) : (
                    <span className="text-[10px] text-[#6C7F99]">
                      {isUnlocked ? 'Kazanıldı' : 'Kilitli'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Modal / Bottom Sheet for Active Badge */}
      {activeBadgeModal && (
        <div 
          onClick={() => setActiveBadgeModal(null)}
          className="fixed inset-0 z-50 bg-[#070D18]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#101B2C] border border-amber-400/40 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 relative"
          >
            {/* Modal Header with Big Medallion */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/20 via-[#152338] to-[#0B1320] border-2 border-amber-400 flex items-center justify-center text-4xl font-serif text-amber-300 shadow-xl shadow-amber-400/20">
                <span className="runic drop-shadow-md">{activeBadgeModal.runicTitle}</span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {activeBadgeModal.category.toUpperCase()} KİLOMETRE TAŞI
                </span>
                <h3 className="text-xl font-bold text-white font-serif mt-0.5">
                  {activeBadgeModal.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#9FB0C6] text-center leading-relaxed">
              {activeBadgeModal.description}
            </p>

            {/* Target & Status Details */}
            {(() => {
              const { current, target, isUnlocked, isClaimed, percent } = getBadgeStatus(activeBadgeModal);
              return (
                <div className="bg-[#0B1320] border border-[#233754] rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#9FB0C6]">İlerleme Durumu:</span>
                    <span className="font-bold text-white font-mono">
                      {current} / {target} ({percent}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#152338] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-[#233754]/60">
                    <span className="text-amber-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Bonus: +{activeBadgeModal.bonusXp} XP
                    </span>
                    <span className={`font-bold ${isUnlocked ? 'text-[#37B36A]' : 'text-[#6C7F99]'}`}>
                      {isUnlocked ? '✓ Hak Edildi' : 'Kilit Açılmadı'}
                    </span>
                  </div>
                </div>
              );
            })()}

            {/* Actions: Claim if unlocked & unclaimed, otherwise close */}
            {(() => {
              const isUnlocked = isBadgeUnlocked(activeBadgeModal, progress);
              const isClaimed = progress.claimedBadges?.[activeBadgeModal.id];
              if (isUnlocked && !isClaimed && onClaimBadge) {
                return (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        onClaimBadge(activeBadgeModal);
                        setActiveBadgeModal(null);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0B1320] font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4 text-[#0B1320]" />
                      <span>+{activeBadgeModal.bonusXp} XP Ödülünü Al</span>
                    </button>
                    <button
                      onClick={() => setActiveBadgeModal(null)}
                      className="px-4 py-2.5 rounded-xl bg-[#152338] hover:bg-[#1a2c46] border border-[#233754] text-white font-bold text-xs transition-all cursor-pointer"
                    >
                      Kapat
                    </button>
                  </div>
                );
              }
              return (
                <button
                  onClick={() => setActiveBadgeModal(null)}
                  className="w-full py-2.5 rounded-xl bg-[#152338] hover:bg-[#1a2c46] border border-[#233754] text-white font-bold text-xs transition-all cursor-pointer"
                >
                  Kapat
                </button>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};
