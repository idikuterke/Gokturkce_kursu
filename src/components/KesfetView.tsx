import React, { useState, lazy, Suspense } from 'react';
import { BookOpen, Keyboard, Shield, FileText, Compass, Sparkles, PenLine } from 'lucide-react';
import { KitabelerReader } from './KitabelerReader';
import { GokturkKeyboard } from './GokturkKeyboard';
import { SozlukView } from './SozlukView';
// Gündelik modül ayrı parça: 77 kelime + kural adımları taşır,
// Keşfet sekmesi açılırken gereksiz yere yüklenmesin.
const GundelikView = lazy(() =>
  import('./GundelikView').then((m) => ({ default: m.GundelikView }))
);
import { BelgelerView } from './BelgelerView';
import { Sahne } from './Sahne';

interface KesfetViewProps {
  onLearnWord?: (wordId: string) => void;
  onListenPronunciation?: () => void;
  wordsLearnedCount?: number;
  learnedWordsRecord?: Record<string, boolean>;
  initialSection?: 'kitabeler' | 'klavye' | 'sozluk' | 'gundelik' | 'belgeler';
}

export const KesfetView: React.FC<KesfetViewProps> = ({
  onLearnWord,
  onListenPronunciation,
  wordsLearnedCount,
  learnedWordsRecord,
  initialSection = 'kitabeler'
}) => {
  const [activeSection, setActiveSection] = useState<'kitabeler' | 'klavye' | 'sozluk' | 'gundelik' | 'belgeler'>(initialSection);

  const sections = [
    { id: 'kitabeler', label: 'Bengü Taşlar', icon: BookOpen, desc: 'Orhun & Yenisey Yazıtları' },
    { id: 'klavye', label: 'Runik Yazıcı', icon: Keyboard, desc: 'Latin ⇄ Göktürkçe Çevirici' },
    { id: 'sozluk', label: 'Kadim Sözlük', icon: Shield, desc: 'Köktürkçe Söz Varlığı' },
    { id: 'gundelik', label: 'Gündelik Yazı', icon: PenLine, desc: 'Bugünün Türkçesini Tamgalarla Yaz' },
    { id: 'belgeler', label: 'PDF Kütüphane', icon: FileText, desc: 'Akademik Eserler & Tablolar' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Steppe Exploration Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-derin-3 via-[#10323B] to-derin-3 border border-[#1D4853] rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
        {/* Arka plan dokusu: taşa keski, kâğıda fırça. Düşük opaklıkta
            durur, metnin okunurluğunu bozmaz; kökeni aşağıda yazılı. */}
        <div
          className="absolute inset-0 opacity-[0.13] pointer-events-none"
          style={{
            // Metnin durduğu sol taraf temiz kalsın: doku sağa doğru açılır.
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 28%, black 70%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, transparent 28%, black 70%)',
          }}
        >
          <Sahne gorsel="keski-firca" etiket={false} yukseklik="h-full" className="rounded-none h-full" />
        </div>
        <div className="max-w-2xl space-y-2 z-10 relative">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-marka-acik/10 text-marka-acik border border-marka-acik/30 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Bozkır Arşivi
            </span>
            <span className="text-xs text-uyari font-mono">Keşfet & Oku</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-serif">
            Bengü Taşlar, Kadim Sözler ve Yazıtlar
          </h1>
          <p className="text-xs sm:text-sm text-metin-4 leading-relaxed">
            Kül Tigin, Bilge Kağan ve Tonyukuk anıtlarının satırlarını orijinal runik metinleriyle incele, canlı klavye ile yaz ve kaynak eserleri keşfet.
          </p>
          <p className="text-[10px] text-metin-4/70 pt-1">
            Arka plan: yapay zekâ ile üretilmiş canlandırma.
          </p>
        </div>

        {/* Ambient Runic Watermark */}
        {/* Telefonda gizli: dar ekranda tamgalar başlığın arkasından
            geçip kart kenarında yarım kalıyor, çizim hatası gibi
            görünüyordu. Geniş ekranda doku olarak kalır. */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-9xl text-white/5 font-bold pointer-events-none select-none runic hidden sm:block">
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
                  ? 'btn-3d-teal shadow-md shadow-marka-derin/25'
                  : 'bg-[#0E262C] hover:bg-[#14343C] text-metin-4 hover:text-white border border-[#1A424B]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${isActive ? 'text-derin-5' : 'text-marka-acik'}`} />
                <span className={`text-xs font-bold ${isActive ? 'text-derin-5' : 'text-white'}`}>
                  {sec.label}
                </span>
              </div>
              <span className={`text-[10px] mt-0.5 truncate hidden sm:inline ${isActive ? 'text-derin-5/80' : 'text-[#64748B]'}`}>
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
        {activeSection === 'gundelik' && (
          <Suspense fallback={<p className="p-8 text-metin-3">Yükleniyor…</p>}>
            <GundelikView />
          </Suspense>
        )}

        {activeSection === 'belgeler' && <BelgelerView />}
      </div>
    </div>
  );
};
