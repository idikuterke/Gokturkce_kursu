import React from 'react';

interface MascotAlpProps {
  mood?: 'idle' | 'happy' | 'thinking' | 'proud' | 'cheer';
  speech?: string;
  size?: number;
  customMediaUrl?: string; // ComfyUI animation / video / image integration slot
  customMediaType?: 'video' | 'image';
}

export const MascotAlp: React.FC<MascotAlpProps> = ({ 
  mood = 'idle', 
  speech, 
  size = 140,
  customMediaUrl,
  customMediaType = 'video'
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 select-none">
      {/* Mascot Frame */}
      <div 
        style={{ width: size, height: size }} 
        className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {customMediaUrl ? (
          <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-[#D97706] shadow-[0_0_20px_rgba(217,119,6,0.3)] bg-[#0C2429]">
            {customMediaType === 'video' ? (
              <video 
                src={customMediaUrl} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
              />
            ) : (
              <img 
                src={customMediaUrl} 
                alt="Bilge Bozkır Alpi" 
                className="w-full h-full object-cover" 
              />
            )}
          </div>
        ) : (
          <svg 
            viewBox="0 0 180 180" 
            className="w-full h-full drop-shadow-[0_8px_20px_rgba(20,184,166,0.25)]"
          >
            <defs>
              {/* Stone texture gradient */}
              <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A5568" />
                <stop offset="50%" stopColor="#2D3748" />
                <stop offset="100%" stopColor="#1A202C" />
              </linearGradient>

              {/* Gold gradient for ornamentation */}
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>

              {/* Turquoise kaftan gradient */}
              <linearGradient id="kaftanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F766E" />
                <stop offset="100%" stopColor="#042F2E" />
              </linearGradient>
            </defs>

            {/* Ambient Background Aura */}
            <circle cx="90" cy="90" r="82" fill="#0E282E" stroke="#1D4B54" strokeWidth="2.5" />
            <circle cx="90" cy="90" r="76" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />

            {/* Bilge Alp Body & Kaftan */}
            <path 
              d="M 45 168 C 45 130, 65 118, 90 118 C 115 118, 135 130, 135 168 Z" 
              fill="url(#kaftanGrad)" 
              stroke="#0D9488" 
              strokeWidth="2" 
            />

            {/* Kaftan Lapel & Fur Trim */}
            <path d="M 90 118 L 82 168 L 98 168 Z" fill="#92400E" opacity="0.8" />
            <line x1="90" y1="120" x2="90" y2="168" stroke="url(#goldGrad)" strokeWidth="2" />
            
            {/* Bronze/Gold Medallion on Chest */}
            <circle cx="90" cy="132" r="6" fill="url(#goldGrad)" stroke="#78350F" strokeWidth="1" />
            <circle cx="90" cy="132" r="2.5" fill="#14B8A6" />

            {/* Alp Neck */}
            <rect x="82" y="98" width="16" height="22" rx="3" fill="#E2A77A" />

            {/* Alp Head */}
            <ellipse cx="90" cy="85" rx="27" ry="29" fill="#EAB68E" stroke="#9A3412" strokeWidth="1.2" />

            {/* Ears */}
            <circle cx="63" cy="85" r="5" fill="#E2A77A" />
            <circle cx="117" cy="85" r="5" fill="#E2A77A" />

            {/* Alp Traditional Mustache & Beard */}
            <path 
              d="M 78 95 Q 90 102 102 95 Q 106 100 100 104 Q 90 112 80 104 Q 74 100 78 95 Z" 
              fill="#271C19" 
            />
            {/* Beard Tip */}
            <polygon points="86,104 94,104 90,113" fill="#271C19" />

            {/* Eyes & Eyebrows based on mood */}
            {mood === 'happy' || mood === 'cheer' || mood === 'proud' ? (
              <>
                {/* Cheerful curved eyes ^_^ */}
                <path d="M 72 79 Q 79 71 85 79" fill="none" stroke="#271C19" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 95 79 Q 101 71 108 79" fill="none" stroke="#271C19" strokeWidth="2.8" strokeLinecap="round" />
                {/* Steppe warrior blush */}
                <circle cx="68" cy="88" r="4" fill="#F43F5E" opacity="0.3" />
                <circle cx="112" cy="88" r="4" fill="#F43F5E" opacity="0.3" />
              </>
            ) : mood === 'thinking' ? (
              <>
                {/* One arched eyebrow, thoughtful gaze */}
                <path d="M 72 74 Q 78 69 85 75" fill="none" stroke="#271C19" strokeWidth="2" strokeLinecap="round" />
                <path d="M 95 76 Q 102 73 108 73" fill="none" stroke="#271C19" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="78" cy="79" r="2.8" fill="#271C19" />
                <circle cx="102" cy="78" r="2.8" fill="#271C19" />
              </>
            ) : (
              <>
                {/* Calm, noble, confident eyes */}
                <path d="M 72 74 Q 78 72 85 74" fill="none" stroke="#271C19" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 95 74 Q 102 72 108 74" fill="none" stroke="#271C19" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="78" cy="80" r="2.8" fill="#271C19" />
                <circle cx="102" cy="80" r="2.8" fill="#271C19" />
                {/* Eye reflections */}
                <circle cx="79" cy="79" r="0.9" fill="#FFFFFF" />
                <circle cx="103" cy="79" r="0.9" fill="#FFFFFF" />
              </>
            )}

            {/* Nose */}
            <path d="M 88 77 L 88 88 L 92 88" fill="none" stroke="#C27845" strokeWidth="2" strokeLinecap="round" />

            {/* Traditional Steppe Leather Börk (Hat) */}
            <path 
              d="M 60 74 C 60 48, 80 32, 90 28 C 100 32, 120 48, 120 74 Z" 
              fill="#78350F" 
              stroke="#451A03" 
              strokeWidth="2" 
            />
            {/* Fur Trim at the base of the börk */}
            <ellipse cx="90" cy="73" rx="33" ry="8" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <ellipse cx="90" cy="73" rx="31" ry="6" fill="#F59E0B" opacity="0.6" />

            {/* Gold Crest / Plume ornament on börk */}
            <circle cx="90" cy="50" r="4.5" fill="url(#goldGrad)" stroke="#78350F" strokeWidth="1" />
            <path d="M 90 45 Q 98 32 94 22 Q 88 28 89 45" fill="#E2E8F0" opacity="0.9" />

            {/* Runik Bengü Stone held by the Alp */}
            <g transform="translate(112, 108) rotate(10)">
              {/* Stone Slab */}
              <rect 
                x="0" 
                y="0" 
                width="34" 
                height="50" 
                rx="4" 
                fill="url(#stoneGrad)" 
                stroke="#F59E0B" 
                strokeWidth="1.8" 
                className="drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
              />
              {/* Steppe Turquoise Rune Carvings (𐱅𐰇𐰼𐰜) */}
              <text 
                x="17" 
                y="18" 
                fill="#2DD4BF" 
                fontSize="13" 
                fontWeight="bold" 
                textAnchor="middle" 
                fontFamily="sans-serif"
                className="runic"
              >
                𐱅
              </text>
              <text 
                x="17" 
                y="32" 
                fill="#FBBF24" 
                fontSize="12" 
                fontWeight="bold" 
                textAnchor="middle" 
                fontFamily="sans-serif"
                className="runic"
              >
                𐰇𐰼
              </text>
              <text 
                x="17" 
                y="45" 
                fill="#2DD4BF" 
                fontSize="11" 
                fontWeight="bold" 
                textAnchor="middle" 
                fontFamily="sans-serif"
                className="runic"
              >
                𐰜
              </text>
            </g>

            {/* Alp's Hand Holding the Stone */}
            <circle cx="118" cy="138" r="7" fill="#E2A77A" stroke="#9A3412" strokeWidth="1.2" />
            <circle cx="62" cy="142" r="7" fill="#E2A77A" stroke="#9A3412" strokeWidth="1.2" />
          </svg>
        )}
      </div>

      {/* Atmospheric Speech Bubble */}
      {speech && (
        <div className="relative max-w-xs sm:max-w-sm px-4 py-3 rounded-2xl bg-[#0D242B] border border-[#1E4D57] shadow-lg text-left">
          {/* Arrow pointing to mascot */}
          <div className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-r-[8px] border-r-[#1E4D57] border-b-[7px] border-b-transparent" />
          <div className="hidden sm:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[7px] border-r-[#0D242B] border-b-[6px] border-b-transparent" />
          
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-bold text-[#F59E0B] tracking-wider uppercase font-serif">Bilge Alp</span>
            <span className="text-[10px] text-[#2DD4BF] font-mono">· Kadim Rehber</span>
          </div>
          <p className="text-xs sm:text-sm text-[#E2E8F0] leading-snug font-medium">
            "{speech}"
          </p>
        </div>
      )}
    </div>
  );
};
