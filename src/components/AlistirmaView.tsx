import React, { useState } from 'react';
import { PenTool, Layers, Heart, Bookmark, Sparkles, Award } from 'lucide-react';
import { FlashcardsView } from './FlashcardsView';
import { TamgaDrawingPractice } from './TamgaDrawingPractice';
import { TamgalikView } from './TamgalikView';
import { UserProgress, TamgaItem } from '../types';

interface AlistirmaViewProps {
  progress: UserProgress;
  onEarnXp: (xp: number) => void;
  onRefillHeart: () => void;
  onListenPronunciation: () => void;
  onCompleteSeries: () => void;
  initialMode?: 'cizim' | 'kartlar' | 'can' | 'tamgalik';
  selectedDrawingTamga?: TamgaItem;
}

export const AlistirmaView: React.FC<AlistirmaViewProps> = ({
  progress,
  onEarnXp,
  onRefillHeart,
  onListenPronunciation,
  onCompleteSeries,
  initialMode = 'cizim',
  selectedDrawingTamga
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'cizim' | 'kartlar' | 'can' | 'tamgalik'>(initialMode);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Steppe Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0C242A] via-[#103038] to-[#0C242A] border border-[#1C4650] rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
        <div className="max-w-xl space-y-2 z-10 relative">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Bozkır Talimhanesi
            </span>
            <span className="text-xs text-[#2DD4BF] font-mono">Alıştırma & Yazım</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Tamgaları Zihnine ve Taşlara Nakşet
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            İster parmağınla taşı kazıyarak yazma pratiği yap, ister kartlarla hafızanı tazele veya hızlı can antrenmanıyla gücünü topla.
          </p>
        </div>

        {/* Ambient Runic Watermark */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-8xl text-white/5 font-bold pointer-events-none select-none runic">
          𐰇𐰏
        </div>
      </div>

      {/* Segmented Sub-Tab Switcher */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 p-1.5 bg-[#091C21] border border-[#193F48] rounded-2xl">
        <button
          onClick={() => setActiveSubTab('cizim')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'cizim'
              ? 'btn-3d-teal shadow-md shadow-[#0D9488]/25'
              : 'text-[#94A3B8] hover:text-white hover:bg-[#102B33]'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>Taş Kazıma Tuvali</span>
        </button>

        <button
          onClick={() => setActiveSubTab('kartlar')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'kartlar'
              ? 'btn-3d-teal shadow-md shadow-[#0D9488]/25'
              : 'text-[#94A3B8] hover:text-white hover:bg-[#102B33]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Kartlarla Çalış</span>
        </button>

        <button
          onClick={() => setActiveSubTab('tamgalik')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'tamgalik'
              ? 'btn-3d-teal shadow-md shadow-[#0D9488]/25'
              : 'text-[#94A3B8] hover:text-white hover:bg-[#102B33]'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Tamgalık Kataloğu</span>
        </button>

        <button
          onClick={() => setActiveSubTab('can')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'can'
              ? 'btn-3d-gold shadow-md shadow-[#F59E0B]/25'
              : 'text-[#F59E0B] hover:text-white hover:bg-[#102B33]'
          }`}
        >
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>Can Tazeleme ({progress.hearts}/{progress.maxHearts})</span>
        </button>
      </div>

      {/* Sub-view Content */}
      <div className="pt-2">
        {activeSubTab === 'cizim' && (
          <TamgaDrawingPractice
            initialTamga={selectedDrawingTamga}
            onEarnXp={onEarnXp}
            onRefillHeart={onRefillHeart}
          />
        )}

        {activeSubTab === 'kartlar' && (
          <FlashcardsView
            onEarnXp={onEarnXp}
            onCompleteSeries={onCompleteSeries}
            onListenPronunciation={onListenPronunciation}
          />
        )}

        {activeSubTab === 'tamgalik' && (
          <TamgalikView
            onOpenFlashcards={() => setActiveSubTab('kartlar')}
            onListenPronunciation={onListenPronunciation}
          />
        )}

        {activeSubTab === 'can' && (
          <div className="bg-[#0C2228] border border-[#1C4650] rounded-3xl p-6 sm:p-8 text-center space-y-6 max-w-lg mx-auto shadow-xl">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-serif">Bozkır Can Pınarı</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                Canların tükendiğinde veya azaldığında taş kazıma talimi yaparak veya hızlı pratikle anında can tazeleyebilirsin.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#07171B] border border-[#173A42] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">Mevcut Can Durumu:</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: progress.maxHearts }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`w-5 h-5 ${
                      i < progress.hearts ? 'text-rose-500 fill-rose-500' : 'text-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onRefillHeart();
                }}
                disabled={progress.hearts >= progress.maxHearts}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer ${
                  progress.hearts < progress.maxHearts
                    ? 'btn-3d-gold'
                    : 'bg-[#15343D] text-gray-400 cursor-not-allowed opacity-60'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>+1 Can Tazele</span>
              </button>

              <button
                onClick={() => setActiveSubTab('cizim')}
                className="flex-1 py-3 px-4 rounded-xl btn-3d-teal font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <PenTool className="w-4 h-4" />
                <span>Çizim Yaparak Can Kazan</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
