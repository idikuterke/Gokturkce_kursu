import React from 'react';

interface MascotBoruProps {
  mood?: 'idle' | 'happy' | 'thinking' | 'proud' | 'cheer';
  speech?: string;
  size?: number;
}

export const MascotBoru: React.FC<MascotBoruProps> = ({ 
  mood = 'idle', 
  speech, 
  size = 120 
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div 
        style={{ width: size, height: size }} 
        className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <svg 
          viewBox="0 0 160 160" 
          className="w-full h-full drop-shadow-[0_8px_16px_rgba(43,196,196,0.25)]"
        >
          {/* Ambient Glow */}
          <circle cx="80" cy="80" r="72" fill="#152338" stroke="#233754" strokeWidth="3" />
          
          {/* Steppe Turquoise Headband with Runes */}
          <path d="M 32 65 Q 80 50 128 65 Q 128 78 80 68 Q 32 78 32 65 Z" fill="#2BC4C4" />
          <text x="80" y="64" fill="#0B1320" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            𐱅𐰇𐰼𐰜
          </text>

          {/* Wolf Ears */}
          <polygon points="40,65 24,18 64,48" fill="#3B82F6" stroke="#233754" strokeWidth="2" />
          <polygon points="38,60 29,26 56,48" fill="#93C5FD" />
          <polygon points="120,65 136,18 96,48" fill="#3B82F6" stroke="#233754" strokeWidth="2" />
          <polygon points="122,60 131,26 104,48" fill="#93C5FD" />

          {/* Wolf Head */}
          <ellipse cx="80" cy="88" rx="46" ry="42" fill="#60A5FA" />
          
          {/* White Snout */}
          <ellipse cx="80" cy="102" rx="26" ry="20" fill="#F8FAFC" />
          
          {/* Wolf Nose */}
          <polygon points="80,95 72,88 88,88" fill="#0B1320" />
          
          {/* Eyes according to mood */}
          {mood === 'happy' || mood === 'proud' || mood === 'cheer' ? (
            <>
              {/* Joyful curved happy eyes ^_^ */}
              <path d="M 52 82 Q 62 70 72 82" fill="none" stroke="#0B1320" strokeWidth="4" strokeLinecap="round" />
              <path d="M 88 82 Q 98 70 108 82" fill="none" stroke="#0B1320" strokeWidth="4" strokeLinecap="round" />
              {/* Pink blush cheeks */}
              <circle cx="48" cy="94" r="6" fill="#F472B6" opacity="0.6" />
              <circle cx="112" cy="94" r="6" fill="#F472B6" opacity="0.6" />
            </>
          ) : mood === 'thinking' ? (
            <>
              {/* One curious eye, one slightly squinted */}
              <ellipse cx="62" cy="78" rx="6" ry="8" fill="#0B1320" />
              <circle cx="60" cy="76" r="2.5" fill="#FFF" />
              <path d="M 88 78 Q 98 72 108 78" fill="none" stroke="#0B1320" strokeWidth="4" strokeLinecap="round" />
            </>
          ) : (
            <>
              {/* Expressive alert big friendly eyes */}
              <ellipse cx="62" cy="78" rx="7" ry="9" fill="#0B1320" />
              <circle cx="60" cy="75" r="3" fill="#FFF" />
              <circle cx="64" cy="81" r="1.5" fill="#FFF" />
              
              <ellipse cx="98" cy="78" rx="7" ry="9" fill="#0B1320" />
              <circle cx="96" cy="75" r="3" fill="#FFF" />
              <circle cx="100" cy="81" r="1.5" fill="#FFF" />
            </>
          )}

          {/* Wolf Mouth */}
          <path d="M 80 95 Q 74 108 66 104" fill="none" stroke="#0B1320" strokeWidth="3" strokeLinecap="round" />
          <path d="M 80 95 Q 86 108 94 104" fill="none" stroke="#0B1320" strokeWidth="3" strokeLinecap="round" />
          
          {/* Tongue on happy/cheer */}
          {(mood === 'happy' || mood === 'cheer') && (
            <path d="M 75 102 Q 80 115 85 102 Z" fill="#FB7185" />
          )}

          {/* Kağan Crown if proud */}
          {mood === 'proud' && (
            <polygon points="62,44 70,30 80,40 90,30 98,44" fill="#C9A24A" stroke="#F59E0B" strokeWidth="1.5" />
          )}
        </svg>
      </div>

      {speech && (
        <div className="relative bg-zemin-3 border border-zemin-4 text-metin rounded-2xl px-4 py-2.5 text-sm shadow-lg max-w-[280px]">
          {/* Chat bubble tail */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-6 border-t-transparent border-b-6 border-b-transparent border-r-8 border-r-zemin-4" />
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-0 h-0 border-t-5 border-t-transparent border-b-5 border-b-transparent border-r-7 border-r-zemin-3" />
          <p className="font-medium leading-relaxed">{speech}</p>
        </div>
      )}
    </div>
  );
};
