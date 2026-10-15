import React, { useState } from 'react';
import { Flame, Zap, Heart, BookOpen, Compass, Layers, BarChart2, Target, Menu, X, ChevronDown } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 4 Primary Streamlined Tabs
  const primaryTabs = [
    { id: 'ogren', label: 'Öğren', icon: Compass },
    { id: 'alistirma', label: 'Alıştırma', icon: Layers },
    { id: 'kesfet', label: 'Keşfet', icon: BookOpen },
    { id: 'istatistik', label: 'Profil', icon: BarChart2 },
  ];

  const dailyQuests = progress.dailyQuests?.quests || [];
  const completedCount = dailyQuests.filter(q => q.completed).length;
  const hasUnclaimed = dailyQuests.some(q => q.completed && !q.claimed) || 
    (dailyQuests.length > 0 && dailyQuests.every(q => q.completed) && !progress.dailyQuests?.allCompletedBonusClaimed);

  // Map legacy tabs if needed
  const isCurrentTabActive = (tabId: string) => {
    if (currentTab === tabId) return true;
    if (tabId === 'alistirma' && (currentTab === 'kartlar' || currentTab === 'tamgalik')) return true;
    if (tabId === 'kesfet' && (currentTab === 'kitabeler' || currentTab === 'sozluk' || currentTab === 'klavye' || currentTab === 'belgeler')) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#07161A]/95 backdrop-blur-md border-b border-[#1A3E47] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark */}
        <div 
          onClick={() => onTabChange('ogren')}
          className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2DD4BF] to-[#0D9488] flex items-center justify-center text-[#042023] font-serif text-xl shadow-[0_0_15px_rgba(45,212,191,0.35)] group-hover:scale-105 transition-transform">
            <span className="runic text-2xl leading-none">𐱅</span>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5 font-serif">
              Göktürkçe <span className="text-[#2DD4BF] font-sans font-semibold text-[10px] px-1.5 py-0.2 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/30">ÖĞRENEK</span>
            </h1>
            <p className="text-[10px] text-[#94A3B8] -mt-0.5 hidden sm:block">Kadim Bozkır Dili & Yazıtları</p>
          </div>
        </div>

        {/* Zone 2: 4 Streamlined Navigation Tabs (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0B2026] p-1 rounded-2xl border border-[#173D46]">
          {primaryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = isCurrentTabActive(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'btn-3d-teal shadow-md shadow-[#0D9488]/25 text-[#042023]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#122F37]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Compact Duolingo Style Progress Pills (Streak, XP, Hearts, Quests) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Flame Streak Indicator */}
          <div 
            title={`${progress.streak} Günlük Öğrenme Serisi`}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#0B2026] border border-[#1E4D57] text-[#F59E0B] text-xs font-bold shadow-inner"
          >
            <Flame className="w-4 h-4 fill-[#F59E0B] animate-pulse" />
            <span className="font-mono">{progress.streak}</span>
          </div>

          {/* XP Meter */}
          <div 
            title={`${progress.xp} Toplam Tecrübe Puanı`}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#0B2026] border border-[#1E4D57] text-[#2DD4BF] text-xs font-bold shadow-inner"
          >
            <Zap className="w-4 h-4 fill-[#2DD4BF]" />
            <span className="font-mono">{progress.xp}</span>
          </div>

          {/* Hearts Indicator with Quick Refill Action */}
          <button
            onClick={onRefillHearts}
            title="Can Durumu (Tıklayarak Yenile)"
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#0B2026] hover:bg-[#122F37] border border-[#1E4D57] text-rose-400 hover:text-rose-300 text-xs font-bold transition-colors cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span className="font-mono">{progress.hearts}</span>
          </button>

          {/* Daily Quests Quick Button */}
          {onOpenQuests && (
            <button
              onClick={onOpenQuests}
              title="Günlük Görevler & Ödüller"
              className={`relative p-1.5 sm:px-2.5 sm:py-1 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                hasUnclaimed
                  ? 'btn-3d-gold shadow-md shadow-[#F59E0B]/25 text-[#381E02]'
                  : 'bg-[#0B2026] hover:bg-[#122F37] border-[#1E4D57] text-[#94A3B8]'
              }`}
            >
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-bold font-mono">
                {completedCount}/3
              </span>
              {hasUnclaimed && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping" />
              )}
            </button>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-xl bg-[#0B2026] border border-[#173D46] text-[#94A3B8] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#091C21] border-b border-[#1A3E47] p-3 space-y-1">
          {primaryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = isCurrentTabActive(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'btn-3d-teal text-[#042023]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#102B33]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
