import React, { useState } from 'react';
import { BookOpen, Keyboard, Shield, FileText, Compass, Sparkles } from 'lucide-react';
import { KitabelerReader } from './KitabelerReader';
import { GokturkKeyboard } from './GokturkKeyboard';
import { SozlukView } from './SozlukView';
import { BelgelerView } from './BelgelerView';

interface KesfetViewProps {
  onLearnWord?: (wordId: string) => void;
  onListenPronunciation?: () => void;
  wordsLearnedCount?: number;
  learnedWordsRecord?: Record<string, boolean>;
  initialSection?: 'kitabeler' | 'klavye' | 'sozluk' | 'belgeler';
}

export const KesfetView: React.FC<KesfetViewProps> = ({
  onLearnWord,
  onListenPronunciation,
  wordsLearnedCount,
  learnedWordsRecord,
  initialSection = 'kitabeler'
}) => {
  const [activeSection, setActiveSection] = useState<'kitabeler' | 'klavye' | 'sozluk' | 'belgeler'>(initialSection);

  const sections = [
    { id: 'kitabeler', label: 'Bengü Taşlar', icon: BookOpen, desc: 'Orhun & Yenisey Yazıtları' },
    { id: 'klavye', label: 'Runik Yazıcı', icon: Keyboard, desc: 'Latin ⇄ Göktürkçe Çevirici' },
    { id: 'sozluk', label: 'Kadim Sözlük', icon: Shield, desc: 'Köktürkçe Söz Varlığı' },
    { id: 'belgeler', label: 'PDF Kütüphane', icon: FileText, desc: 'Akademik Eserler & Tablolar' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Steppe Exploration Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0C242A] via-[#10323B] to-[#0C242A] border border-[#1D4853] rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
        <div className="max-w-2xl space-y-2 z-10 relative">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/30 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Bozkır Arşivi
            </span>
            <span className="text-xs text-[#F59E0B] font-mono">Keşfet & Oku</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Bengü Taşlar, Kadim Sözler ve Yazıtlar
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Kül Tigin, Bilge Kağan ve Tonyukuk anıtlarının satırlarını orijinal runik metinleriyle incele, canlı klavye ile yaz ve kaynak eserleri keşfet.
          </p>
        </div>

        {/* Ambient Runic Watermark */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-9xl text-white/5 font-bold pointer-events-none select-none runic">
          𐰋𐰃𐰠𐰏𐰀
        </div>
      </div>

      {/* Segmented Section Switcher */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-[#081B20] border border-[#183E46] rounded-2xl">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id as any)}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left p-3 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'btn-3d-teal shadow-md shadow-[#0D9488]/25'
                  : 'bg-[#0E262C] hover:bg-[#14343C] text-[#94A3B8] hover:text-white border border-[#1A424B]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#042023]' : 'text-[#2DD4BF]'}`} />
                <span className={`text-xs font-bold ${isActive ? 'text-[#042023]' : 'text-white'}`}>
                  {sec.label}
                </span>
              </div>
              <span className={`text-[10px] mt-0.5 truncate hidden sm:inline ${isActive ? 'text-[#042023]/80' : 'text-[#64748B]'}`}>
                {sec.desc}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content */}
      <div className="pt-2">
        {activeSection === 'kitabeler' && <KitabelerReader />}
        {activeSection === 'klavye' && <GokturkKeyboard />}
        {activeSection === 'sozluk' && (
          <SozlukView
            onLearnWord={onLearnWord}
            onListenPronunciation={onListenPronunciation}
            wordsLearnedCount={wordsLearnedCount}
            learnedWordsRecord={learnedWordsRecord}
          />
        )}
        {activeSection === 'belgeler' && <BelgelerView />}
      </div>
    </div>
  );
};
