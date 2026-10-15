import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, Flame, ChevronRight, X } from 'lucide-react';
import { playVictoryFanfare, playSuccessSound } from '../utils/audio';
import { Badge } from '../data/badgesData';

interface CelebrationToastProps {
  type: 'rank' | 'badge';
  title: string;
  subtitle: string;
  runicSymbol?: string;
  badge?: Badge;
  onClose: () => void;
}

export const CelebrationBanner: React.FC<CelebrationToastProps> = ({
  type,
  title,
  subtitle,
  runicSymbol = '𐱅',
  badge,
  onClose
}) => {
  useEffect(() => {
    // Sound fanfare
    if (type === 'rank') {
      playVictoryFanfare();
    } else {
      playSuccessSound();
    }

    // Trigger dual cannon celebratory confetti
    const count = 200;
    const defaults = {
      origin: { y: 0.6 },
      zIndex: 9999
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#2BC4C4', '#F59E0B', '#E6C677']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#FFD700', '#2BC4C4', '#FFFFFF']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#F59E0B', '#F97316', '#2BC4C4']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45
    });

    const timer = setTimeout(() => {
      onClose();
    }, 7000);

    return () => clearTimeout(timer);
  }, [type, onClose]);

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg animate-fadeInDown">
      <div className="relative overflow-hidden rounded-2xl border-2 border-amber-400 bg-gradient-to-r from-[#101B2C] via-[#15253F] to-[#0E1726] p-5 shadow-2xl shadow-amber-500/25">
        {/* Glow orb */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#2BC4C4]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex items-center gap-4">
          {/* Runic Badge Medallion */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/30 flex-shrink-0 animate-pulse">
            <div className="w-full h-full bg-[#0B1320] rounded-[14px] flex items-center justify-center text-3xl font-serif text-amber-300">
              <span className="runic tracking-tight drop-shadow">{runicSymbol}</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-0.5">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>{type === 'rank' ? 'RÜTBE YÜKSELDİ! KUTLU OLSUN' : 'YENİ ROZET KAZANILDI!'}</span>
            </div>
            <h4 className="text-lg font-bold text-white font-serif tracking-tight truncate">
              {title}
            </h4>
            <p className="text-xs text-[#9FB0C6] mt-0.5 line-clamp-2">
              {subtitle}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1.5 rounded-lg text-[#9FB0C6] hover:text-white hover:bg-[#233754] transition-colors"
            title="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
