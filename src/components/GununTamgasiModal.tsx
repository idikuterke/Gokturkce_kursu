import React from 'react';
import { X, Volume2, Sparkles, BookOpen, PenTool, Compass } from 'lucide-react';
import { TamgaItem } from '../types';
import { playSuccessSound } from '../utils/audio';

interface GununTamgasiModalProps {
  tamga: TamgaItem;
  isOpen: boolean;
  onClose: () => void;
  onStartDrawing?: (tamga: TamgaItem) => void;
  onOpenFlashcards?: () => void;
}

export const GununTamgasiModal: React.FC<GununTamgasiModalProps> = ({
  tamga,
  isOpen,
  onClose,
  onStartDrawing,
  onOpenFlashcards
}) => {
  if (!isOpen) return null;

  // Authentic Steppe Pictographic Stories
  const getTamgaStory = (t: TamgaItem): { origin: string; story: string } => {
    if (t.name.toLowerCase().includes('ok') || t.rune === '𐰸') {
      return {
        origin: '🏹 Sadak ve Ok Figürü',
        story: 'Kadim Türk alpleri için ok, yalnızca bir av silahı değil; boyların birliğini, hakanın buyruğunu ve yönü temsil eden kutsal bir damgadır.'
      };
    }
    if (t.name.toLowerCase().includes('ay') || t.rune === '𐰖') {
      return {
        origin: '🌙 Hilal ve Gökyüzü',
        story: 'Gök Tanrı inancında ay, zamanın döngüsünü ve geceleri bozkırda yol alan kervanların kılavuz ışığını simgeler.'
      };
    }
    if (t.name.toLowerCase().includes('eb') || t.name.toLowerCase().includes('ev') || t.rune === '𐰋') {
      return {
        origin: '⛺ Bozkır Keçe Çadırı (Yurt)',
        story: 'Bu tamga, göçebe Türklerin yuvası olan kubbeli çadırın (yurt/kerge) iskeletinden ilham alınarak taşa işlenmiştir.'
      };
    }
    return {
      origin: '𐰋 Kadim Bozkır Damgası',
      story: `Bu damga, Orhun ve Yenisey nehirleri boyunca dikilen bengü taşlarda bin yılı aşkın süredir Türk milletinin sesini geleceğe taşımaktadır.`
    };
  };

  const storyInfo = getTamgaStory(tamga);

  const handlePlaySound = () => {
    playSuccessSound();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(tamga.sound);
      utterance.lang = 'tr-TR';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeInDown">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0D262C] to-[#08181C] border border-[#215661] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-marka-acik/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#112F37] hover:bg-[#183E48] text-metin-4 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-uyari/10 text-uyari border border-uyari/30">
            <Sparkles className="w-3.5 h-3.5" /> Günün Kadim Tamgası
          </span>
          <span className="text-xs text-marka-acik font-mono">Orhun Alfabesi</span>
        </div>

        {/* Center Stone Slab Visual */}
        <div className="flex flex-col sm:flex-row items-center gap-6 my-4 bg-[#091D22] border border-[#1B434C] rounded-2xl p-5">
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#163842] to-[#0A1B1F] border-2 border-uyari shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center flex-shrink-0 group">
            <span className="runic text-5xl text-marka-acik drop-shadow-[0_2px_10px_rgba(45,212,191,0.5)]">
              {tamga.rune}
            </span>
            <button
              onClick={handlePlaySound}
              title="Sesi Dinle"
              className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-uyari hover:bg-uyari-acik text-toprak-2 shadow-md transition-transform hover:scale-110 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-bold text-white font-serif">{tamga.name}</h2>
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-marka-acik/15 text-marka-acik">
                /{tamga.sound}/
              </span>
            </div>
            <p className="text-xs text-metin-4">
              Tür: <span className="text-white font-semibold">{tamga.type || 'Nötr'}</span> · Kategori: <span className="text-white capitalize font-semibold">{tamga.category}</span>
            </p>
            <p className="text-xs text-uyari font-medium">
              Hatırlatıcı: "{tamga.mnemonicHint || 'Kadim Türk tamgası'}"
            </p>
          </div>
        </div>

        {/* Origin & Historical Steppe Story */}
        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl bg-derin-4 border border-[#194049]">
            <h4 className="text-xs font-bold text-uyari flex items-center gap-1.5 mb-1">
              <BookOpen className="w-3.5 h-3.5" /> Piktografik Köken & Hikaye
            </h4>
            <p className="text-xs font-medium text-marka-acik mb-1">{storyInfo.origin}</p>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              {storyInfo.story}
            </p>
          </div>

          {/* Example from Orhun Inscriptions */}
          <div className="p-4 rounded-xl bg-derin-4 border border-[#194049]">
            <h4 className="text-xs font-bold text-marka-acik flex items-center gap-1.5 mb-1.5">
              <span>Bengü Taş Örneği:</span>
              <span className="text-white font-semibold">{tamga.exampleWord}</span>
            </h4>
            <div className="flex items-center justify-between gap-2 bg-[#061417] px-3 py-2 rounded-lg border border-[#16363D]">
              <span className="runic text-lg text-uyari">{tamga.exampleRunic}</span>
              <span className="text-xs text-metin-4">{tamga.exampleMeaning}</span>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
          {onStartDrawing && (
            <button
              onClick={() => {
                onStartDrawing(tamga);
                onClose();
              }}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl btn-3d-teal font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <PenTool className="w-4 h-4" />
              <span>Bu Tamgayı Tuvalde Çiz</span>
            </button>
          )}

          {onOpenFlashcards && (
            <button
              onClick={() => {
                onOpenFlashcards();
                onClose();
              }}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl btn-3d-gold font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Compass className="w-4 h-4" />
              <span>Alfabede İncele</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl btn-3d-bronze text-xs font-bold cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
