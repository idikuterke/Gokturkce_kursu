import React from 'react';
import { Flame, Zap, Heart, Shield, BookOpen, Compass, Keyboard, FileText, Bookmark, Layers, Target, Gift, BarChart2 } from 'lucide-react';
import { UserProgress } from '../types';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  progress: UserProgress;
  onRefillHearts: () => void;
  onOpenQuests?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  progress,
  onRefillHearts,
  onOpenQuests
}) => {
  const tabs = [
    { id: 'ogren', label: 'Öğren', icon: Compass },
    { id: 'kartlar', label: 'Kartlarla Çalış', icon: Layers },
    { id: 'tamgalik', label: 'Tamgalık', icon: Bookmark },
    { id: 'kitabeler', label: 'Bengü Taşlar', icon: BookOpen },
    { id: 'sozluk', label: 'Sözlük', icon: Shield },
    { id: 'istatistik', label: 'İstatistiklerim', icon: BarChart2 },
    { id: 'klavye', label: 'Runik Yazıcı', icon: Keyboard },
    { id: 'belgeler', label: 'PDF', icon: FileText },
  ];

  const dailyQuests = progress.dailyQuests?.quests || [];
  const completedCount = dailyQuests.filter(q => q.completed).length;
  const hasUnclaimed = dailyQuests.some(q => q.completed && !q.claimed) || 
    (dailyQuests.length > 0 && dailyQuests.every(q => q.completed) && !progress.dailyQuests?.allCompletedBonusClaimed);

  return (
    <header className="sticky top-0 z-40 bg-[#0B1320]/95 backdrop-blur-md border-b border-[#233754]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={() => onTabChange('ogren')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2BC4C4] to-[#1E8A8A] flex items-center justify-center text-white font-serif text-xl shadow-[0_0_15px_rgba(43,196,196,0.4)] group-hover:scale-105 transition-transform">
            <span className="runic text-2xl leading-none">𐱅</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5 font-serif">
              Göktürkçe <span className="text-[#2BC4C4] font-sans font-semibold text-xs px-2 py-0.5 rounded-full bg-[#2BC4C4]/10 border border-[#2BC4C4]/30">ÖĞRENEK</span>
            </h1>
            <p className="text-xs text-[#9FB0C6] -mt-0.5">Antik Türk Dili & Yazıtları</p>
          </div>
        </div>

        {/* Center Navigation Links (Large Desktops) */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#101B2C] p-1 rounded-xl border border-[#233754]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#2BC4C4] text-[#0B1320] font-bold shadow-md shadow-[#2BC4C4]/20'
                    : 'text-[#9FB0C6] hover:text-white hover:bg-[#152338]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.id === 'istatistik' && (
                  <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${isActive ? 'bg-[#0B1320] text-[#2BC4C4]' : 'bg-[#2BC4C4]/20 text-[#2BC4C4]'}`}>
                    GRAFİK
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Stats & Direct Quick Navigation */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Direct Istatistiklerim Button in Header */}
          <button
            onClick={() => onTabChange('istatistik')}
            title="İstatistiklerimi ve Grafikleri Görüntüle"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border shadow-sm ${
              currentTab === 'istatistik'
                ? 'bg-[#2BC4C4] text-[#0B1320] border-[#2BC4C4] shadow-[#2BC4C4]/25'
                : 'bg-[#152338] hover:bg-[#1e3250] text-[#2BC4C4] hover:text-white border-[#233754] hover:border-[#2BC4C4]/60'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">İstatistikler</span>
          </button>

          {/* Daily Quests Button */}
          {progress.dailyQuests && (
            <button
              onClick={onOpenQuests}
              title="Günlük Görevler & Ödüller"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                hasUnclaimed
                  ? 'bg-amber-400/20 border-amber-400 text-amber-300 shadow-md shadow-amber-400/20 animate-pulse'
                  : 'bg-[#152338] hover:bg-[#1f3350] border-[#233754] text-[#2BC4C4]'
              }`}
            >
              {hasUnclaimed ? (
                <Gift className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Target className="w-3.5 h-3.5" />
              )}
              <span className="hidden md:inline">Görevler</span>
              <span className="bg-[#0B1320] px-1.5 py-0.2 rounded-full text-[10px] font-mono border border-[#233754]">
                {completedCount}/{dailyQuests.length}
              </span>
              {hasUnclaimed && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              )}
            </button>
          )}

          {/* Streak */}
          <button 
            onClick={() => onTabChange('istatistik')}
            title="Günlük Çalışma Serisi & İstatistikler"
            className="flex items-center gap-1 bg-[#152338] hover:bg-[#1f3350] border border-[#233754] hover:border-orange-400/50 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-orange-400 transition-all cursor-pointer"
          >
            <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-500 animate-pulse" />
            <span>{progress.streak}g</span>
          </button>

          {/* XP */}
          <button 
            onClick={() => onTabChange('istatistik')}
            title="Kazanılan Tamga Puanı & İlerleme"
            className="flex items-center gap-1 bg-[#152338] hover:bg-[#1f3350] border border-[#233754] hover:border-[#2BC4C4]/50 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-[#2BC4C4] transition-all cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-[#2BC4C4] text-[#2BC4C4]" />
            <span>{progress.xp}</span>
          </button>

          {/* Hearts / Can */}
          <button
            onClick={onRefillHearts}
            title={progress.hearts < progress.maxHearts ? "Canını 5'e tamamlamak için tıkla!" : "Canların tam!"}
            className="flex items-center gap-1 bg-[#152338] hover:bg-[#1f3350] border border-[#233754] px-2.5 py-1.5 rounded-xl text-xs font-semibold text-rose-400 transition-colors"
          >
            <Heart className={`w-3.5 h-3.5 fill-rose-500 text-rose-500 ${progress.hearts === 0 ? 'animate-bounce' : ''}`} />
            <span>{progress.hearts}</span>
          </button>
        </div>
      </div>

      {/* Global Scrollable Tab Bar (Visible on all screens under XL, ensuring no tab is ever hidden) */}
      <div className="xl:hidden flex items-center border-t border-[#233754] bg-[#0E1726] px-3 py-1.5 overflow-x-auto gap-1.5 scrollbar-thin">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? 'bg-[#2BC4C4] text-[#0B1320] font-bold shadow-sm'
                  : 'text-[#9FB0C6] hover:text-white bg-[#152338]/60 hover:bg-[#152338] border border-[#233754]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.id === 'istatistik' && (
                <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${isActive ? 'bg-[#0B1320] text-[#2BC4C4]' : 'bg-[#2BC4C4]/20 text-[#2BC4C4]'}`}>
                  YENİ
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
};
