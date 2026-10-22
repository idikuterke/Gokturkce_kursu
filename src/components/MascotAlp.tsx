import React from 'react';

/** Konuşmada geçen Eski Türkçe sözcüğün onaylı sözlükten künyesi. */
export interface SozcukKunyesi {
  runik: string;
  transkripsiyon: string;
  anlam: string;
  kaynak: string;
}

interface MascotAlpProps {
  mood?: 'idle' | 'happy' | 'thinking' | 'proud' | 'cheer' | 'uyari';
  speech?: string;
  size?: number;
  customMediaUrl?: string; // ComfyUI animation / video / image integration slot
  customMediaType?: 'video' | 'image';
  /** Varsa konuşmanın altında sözcüğün anlamı ve kaynağı gösterilir. */
  sozcuk?: SozcukKunyesi;
}

export const MascotAlp: React.FC<MascotAlpProps> = ({ 
  mood = 'idle', 
  speech, 
  size = 140,
  customMediaUrl,
  customMediaType = 'video',
  sozcuk
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

              {/* Yüz hacmi: düz dolgu yerine hafif radyal gölge. Küçük
                  boyutta fark edilmez ama 130 px'te yüzü yassı olmaktan
                  çıkarıyor. */}
              <radialGradient id="yuzGrad" cx="42%" cy="34%" r="72%">
                <stop offset="0%" stopColor="#F3C9A3" />
                <stop offset="62%" stopColor="#EAB68E" />
                <stop offset="100%" stopColor="#CE9468" />
              </radialGradient>

              {/* Börkün alnına düşürdüğü gölge */}
              <linearGradient id="borkGolge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Turquoise kaftan gradient */}
              <linearGradient id="kaftanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F766E" />
                <stop offset="100%" stopColor="#042F2E" />
              </linearGradient>
            </defs>

            {/* Ambient Background Aura */}
            <circle cx="90" cy="90" r="82" fill="#0E282E" stroke="#1D4B54" strokeWidth="2.5" />
            <circle className="alp-hale" cx="90" cy="90" r="76" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />

            {/* Nefes grubu: gövdeden başa kadar her şey. Ayaklar yok,
                dönüşüm başlangıcı altta — yukarı doğru hafif şişiyor. */}
            <g className="alp-nefes">

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
            <ellipse cx="90" cy="85" rx="27" ry="29" fill="url(#yuzGrad)" stroke="#9A3412" strokeWidth="1.2" />
            {/* Börkün alna düşürdüğü gölge — yüz elipsiyle aynı eğride */}
            <path d="M 64 80 A 27 29 0 0 1 116 80 L 116 70 L 64 70 Z" fill="url(#borkGolge)" />

            {/* Ears */}
            <circle cx="63" cy="85" r="5" fill="#E2A77A" />
            <circle cx="117" cy="85" r="5" fill="#E2A77A" />

            {/* Alp Traditional Mustache & Beard */}
            <path 
              d="M 78 95 Q 90 102 102 95 Q 106 100 100 104 Q 90 112 80 104 Q 74 100 78 95 Z" 
              fill="#271C19" 
            />
            {/* Bıyık üstünde ince parlama: tek renk koyu leke olmaktan
                çıkarır, kıl yönünü sezdirir. */}
            <path d="M 80 96 Q 90 101 100 96" fill="none" stroke="#4A3A33" strokeWidth="1.1" strokeLinecap="round" opacity="0.8" />

            {/* Beard Tip */}
            <polygon points="86,104 94,104 90,113" fill="#271C19" />

            {/* Eyes & Eyebrows based on mood */}
            {mood === 'happy' || mood === 'cheer' || mood === 'proud' ? (
              <>
                {/* Cheerful curved eyes ^_^ */}
                <path d="M 72 85 Q 79 77 85 85" fill="none" stroke="#271C19" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 95 85 Q 101 77 108 85" fill="none" stroke="#271C19" strokeWidth="2.8" strokeLinecap="round" />
                {/* Steppe warrior blush */}
                <circle cx="68" cy="92" r="4" fill="#F43F5E" opacity="0.3" />
                <circle cx="112" cy="92" r="4" fill="#F43F5E" opacity="0.3" />
              </>
            ) : mood === 'uyari' ? (
              <>
                {/* Çatık kaş, kısık göz: azarlamaz, uyarır. */}
                <path d="M 71 78 Q 78 82 85 79" fill="none" stroke="#271C19" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M 95 79 Q 102 82 109 78" fill="none" stroke="#271C19" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M 73 86 Q 79 84 85 86" fill="none" stroke="#271C19" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M 95 86 Q 101 84 107 86" fill="none" stroke="#271C19" strokeWidth="2.6" strokeLinecap="round" />
              </>
            ) : mood === 'thinking' ? (
              <>
                {/* One arched eyebrow, thoughtful gaze */}
                <path d="M 72 80 Q 78 75 85 81" fill="none" stroke="#271C19" strokeWidth="2" strokeLinecap="round" />
                <path d="M 95 82 Q 102 79 108 79" fill="none" stroke="#271C19" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="78" cy="85" r="2.8" fill="#271C19" />
                <circle cx="102" cy="84" r="2.8" fill="#271C19" />
              </>
            ) : (
              <>
                {/* Calm, noble, confident eyes */}
                <path d="M 72 80 Q 78 78 85 80" fill="none" stroke="#271C19" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 95 80 Q 102 78 108 80" fill="none" stroke="#271C19" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="78" cy="86" r="2.8" fill="#271C19" />
                <circle cx="102" cy="86" r="2.8" fill="#271C19" />
                {/* Eye reflections */}
                <circle cx="79" cy="85" r="0.9" fill="#FFFFFF" />
                <circle cx="103" cy="85" r="0.9" fill="#FFFFFF" />
              </>
            )}

            {/* Nose */}
            <path d="M 88 86 L 87.5 93 L 92 93" fill="none" stroke="#C27845" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Traditional Steppe Leather Börk (Hat) */}
            <path 
              d="M 60 70 C 60 45, 80 30, 90 26 C 100 30, 120 45, 120 70 Z" 
              fill="#78350F" 
              stroke="#451A03" 
              strokeWidth="2" 
            />
            {/* Fur Trim at the base of the börk */}
            <ellipse cx="90" cy="69" rx="33" ry="6" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <ellipse cx="90" cy="69" rx="31" ry="4.5" fill="#F59E0B" opacity="0.6" />

            {/* Gold Crest / Plume ornament on börk */}
            <circle cx="90" cy="47" r="4.5" fill="url(#goldGrad)" stroke="#78350F" strokeWidth="1" />
            <path className="alp-tuy" d="M 90 42 Q 98 29 94 19 Q 88 25 89 42" fill="#E2E8F0" opacity="0.9" />

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

            {/* Göz kapakları: en üstte, göz çiziminin üzerini örter.
                Ten renginde, yüzün gölgesiyle aynı tonda. Düşündüğü ya da
                uyardığı anda kırpmaz — o yüzlerde göz zaten kısık. */}
            {mood !== 'thinking' && mood !== 'uyari' && (
              <>
                <rect className="alp-goz-kapak" x="70" y="78" width="17" height="12" rx="3" fill="#E8B88E" />
                <rect className="alp-goz-kapak alp-goz-kapak-sag" x="93" y="78" width="17" height="12" rx="3" fill="#E8B88E" />
              </>
            )}

            </g>
          </svg>
        )}
      </div>

      {/* Atmospheric Speech Bubble */}
      {/* Telefonda gizli: giriş bölümünü bir ekran boyu uzatıyor ve
          öğrenme yolu kıvrımın altında kalıyordu. Geniş ekranda kalır. */}
      {speech && (
        <div className="relative hidden sm:block max-w-xs sm:max-w-sm px-4 py-3 rounded-2xl bg-[#0D242B] border border-derin shadow-lg text-left">
          {/* Arrow pointing to mascot */}
          <div className="hidden sm:block absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-r-[8px] border-r-derin border-b-[7px] border-b-transparent" />
          <div className="hidden sm:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[7px] border-r-[#0D242B] border-b-[6px] border-b-transparent" />
          
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-bold text-uyari tracking-wider uppercase font-serif">Bilge Alp</span>
            <span className="text-[10px] text-marka-acik font-mono">· Kadim Rehber</span>
          </div>
          <p className="text-xs sm:text-sm text-metin-acik leading-snug font-medium">
            "{speech}"
          </p>

          {/* Sözcük künyesi: anlam ve kaynak onaylı sözlükten okunur,
              burada elle yazılmaz. Maskot süs değil, öğretim yüzeyi. */}
          {sozcuk && (
            <div className="mt-2 pt-2 border-t border-derin/70 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="runic text-sm text-marka-acik">{sozcuk.runik}</span>
              <span className="text-[11px] font-semibold text-metin">{sozcuk.transkripsiyon}</span>
              <span className="text-[11px] text-metin-2">— {sozcuk.anlam}</span>
              <span className="text-[10px] text-metin-3 font-mono w-full">{sozcuk.kaynak}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
