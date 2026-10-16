import { useState, useEffect } from 'react';
import { 
  Target, 
  Layers, 
  BookOpen, 
  Award, 
  Volume2, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Heart, 
  Gift, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { DailyQuest, DailyQuestState, QuestCategory } from '../types';
import { getTimeUntilMidnight } from '../utils/dailyQuests';
import { playSuccessSound, playVictoryFanfare, playChiselSound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface DailyQuestsWidgetProps {
  dailyQuests?: DailyQuestState;
  onClaimReward: (questId: string) => void;
  onClaimSuperBonus: () => void;
  onNavigateToTab?: (tab: string) => void;
  onStartRandomLesson?: () => void;
}

export const DailyQuestsWidget: React.FC<DailyQuestsWidgetProps> = ({
  dailyQuests,
  onClaimReward,
  onClaimSuperBonus,
  onNavigateToTab,
  onStartRandomLesson
}) => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  // Update countdown timer every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const quests = dailyQuests?.quests || [];
  const completedCount = quests.filter(q => q.completed).length;
  const claimedCount = quests.filter(q => q.claimed).length;
  const allQuestsCompleted = quests.length > 0 && quests.every(q => q.completed);
  const totalProgressPercent = quests.length > 0 
    ? Math.round((quests.reduce((acc, q) => acc + Math.min(1, q.current / q.target), 0) / quests.length) * 100)
    : 0;

  const getQuestIcon = (category: QuestCategory) => {
    switch (category) {
      case 'words':
        return <BookOpen className="w-4 h-4 text-marka" />;
      case 'tamga_series':
        return <Layers className="w-4 h-4 text-purple-400" />;
      case 'lesson':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'listen':
        return <Volume2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Target className="w-4 h-4 text-marka" />;
    }
  };

  const handleActionClick = (category: QuestCategory) => {
    playChiselSound();
    if (category === 'words' && onNavigateToTab) {
      onNavigateToTab('sozluk');
    } else if (category === 'tamga_series' && onNavigateToTab) {
      onNavigateToTab('kartlar');
    } else if (category === 'listen' && onNavigateToTab) {
      onNavigateToTab('tamgalik');
    } else if (category === 'lesson') {
      if (onStartRandomLesson) {
        onStartRandomLesson();
      } else if (onNavigateToTab) {
        onNavigateToTab('ogren');
      }
    }
  };

  const triggerRewardEffects = () => {
    playSuccessSound();
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  const triggerSuperBonusEffects = () => {
    playVictoryFanfare();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="bg-zemin-2 border-2 border-zemin-4 hover:border-marka/50 rounded-2xl p-5 shadow-xl space-y-4 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zemin-4 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-marka to-[#1E8A8A] flex items-center justify-center text-zemin font-bold shadow-md shadow-marka/20">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white font-serif flex items-center gap-1.5">
              Günlük Görevler
              <span className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full bg-marka/15 text-marka border border-marka/30">
                {completedCount}/{quests.length}
              </span>
            </h3>
            <p className="text-[11px] text-metin-2">Her gün tamamla, tamga ödülleri kazan</p>
          </div>
        </div>

        {/* Reset Countdown */}
        <div 
          title="Yenilenme Vakti: Gece Yarısı 00:00"
          className="flex items-center gap-1 text-[11px] text-metin-2 bg-zemin-3 px-2.5 py-1 rounded-full border border-zemin-4"
        >
          <Clock className="w-3 h-3 text-marka" />
          <span>{timeLeft.hours}s {timeLeft.minutes}d</span>
        </div>
      </div>

      {/* Progress Bar of all quests */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-metin-2">
          <span>Günün İlerlemesi</span>
          <span className="font-semibold text-white">%{totalProgressPercent}</span>
        </div>
        <div className="w-full h-2 bg-zemin-3 rounded-full overflow-hidden border border-zemin-4">
          <div 
            className="h-full bg-gradient-to-r from-marka to-basari rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(43,196,196,0.5)]"
            style={{ width: `${totalProgressPercent}%` }}
          />
        </div>
      </div>

      {/* Quests List */}
      <div className="space-y-2.5 pt-1">
        {quests.map((quest) => {
          const isFinished = quest.completed;
          const isClaimed = quest.claimed;
          const progressPercent = Math.min(100, Math.round((quest.current / quest.target) * 100));

          return (
            <div 
              key={quest.id}
              className={`p-3 rounded-xl border transition-all ${
                isClaimed
                  ? 'bg-zemin-3/40 border-zemin-4 opacity-75'
                  : isFinished
                  ? 'bg-gradient-to-r from-zemin-3 to-[#1c304d] border-amber-400/50 shadow-md shadow-amber-400/5 ring-1 ring-amber-400/30'
                  : 'bg-zemin-3 border-zemin-4 hover:border-marka/40'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-start gap-2.5 min-w-0">
                  <div className="mt-0.5 p-1.5 rounded-lg bg-zemin border border-zemin-4 flex-shrink-0">
                    {getQuestIcon(quest.category)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white leading-snug truncate">
                      {quest.title}
                    </h4>
                    <p className="text-[11px] text-metin-2 leading-tight line-clamp-1 mt-0.5">
                      {quest.description}
                    </p>
                  </div>
                </div>

                {/* Status or Claim Button */}
                <div className="flex-shrink-0">
                  {isClaimed ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-basari bg-basari/10 px-2 py-0.5 rounded-md border border-basari/30">
                      <CheckCircle2 className="w-3 h-3" /> Alındı
                    </span>
                  ) : isFinished ? (
                    <button
                      onClick={() => {
                        triggerRewardEffects();
                        onClaimReward(quest.id);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-900 px-2.5 py-1 rounded-lg shadow-md shadow-amber-400/30 active:scale-95 transition-all animate-bounce"
                      title="Ödülü Al"
                    >
                      <Gift className="w-3.5 h-3.5" />
                      <span>Ödülü Al</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleActionClick(quest.category)}
                      className="inline-flex items-center gap-1 text-[11px] text-marka hover:text-white bg-zemin hover:bg-marka/20 border border-zemin-4 hover:border-marka px-2 py-0.5 rounded-md transition-all"
                    >
                      <span>Yap</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Progress and Reward Badges */}
              <div className="flex items-center justify-between gap-3 text-[11px] mt-2 pt-1 border-t border-zemin-4/60">
                {/* Progress bar */}
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-zemin rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        isFinished ? 'bg-basari' : 'bg-marka'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-metin-2 font-semibold">
                    {quest.current}/{quest.target}
                  </span>
                </div>

                {/* Reward details */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="flex items-center gap-0.5 text-amber-400 font-bold text-[11px]">
                    <Zap className="w-3 h-3 fill-current" />
                    +{quest.reward.xp}
                  </span>
                  {quest.reward.hearts && (
                    <span className="flex items-center gap-0.5 text-rose-400 font-bold text-[11px]">
                      <Heart className="w-3 h-3 fill-current" />
                      +{quest.reward.hearts}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bozkır Kut Sandığı (Super Reward when all 4 are done) */}
      <div className={`p-4 rounded-xl border-2 transition-all relative overflow-hidden ${
        dailyQuests?.allCompletedBonusClaimed
          ? 'bg-zemin-3/50 border-zemin-4 opacity-80'
          : allQuestsCompleted
          ? 'bg-gradient-to-r from-amber-500/20 via-zemin-3 to-amber-500/20 border-amber-400 shadow-xl shadow-amber-400/10 ring-2 ring-amber-400/40'
          : 'bg-gradient-to-br from-zemin-2 to-zemin-3 border-zemin-4'
      }`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-md ${
              dailyQuests?.allCompletedBonusClaimed
                ? 'bg-[#1b2b42] text-amber-400'
                : allQuestsCompleted
                ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 animate-pulse'
                : 'bg-zemin border border-zemin-4 text-metin-3'
            }`}>
              🎁
            </div>
            <div>
              <h4 className="text-xs font-bold text-white font-serif flex items-center gap-1.5">
                Bozkır Kut Sandığı
                <span className="text-[10px] text-amber-400 font-sans font-semibold">
                  (Büyük Günlük Ödül)
                </span>
              </h4>
              <p className="text-[11px] text-metin-2">
                Tüm görevleri tamamla: <span className="text-amber-400 font-semibold">+50 XP</span> & <span className="text-rose-400 font-semibold">❤️ Tam Can</span>
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            {dailyQuests?.allCompletedBonusClaimed ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
                <Sparkles className="w-3 h-3" /> Sandık Açıldı
              </span>
            ) : allQuestsCompleted ? (
              <button
                onClick={() => {
                  triggerSuperBonusEffects();
                  onClaimSuperBonus();
                }}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-400/30 active:scale-95 transition-all flex items-center gap-1.5 animate-pulse"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sandığı Aç!</span>
              </button>
            ) : (
              <span className="text-[11px] text-metin-3 bg-zemin px-2 py-1 rounded-md border border-zemin-4">
                {completedCount}/4 Tamam
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
