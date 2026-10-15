import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Check, Sparkles, Volume2, Eye, EyeOff, RotateCcw, Award } from 'lucide-react';
import { TAMGALAR } from '../data/tamgalarData';
import { TamgaItem } from '../types';
import { playChiselSound, playSuccessSound } from '../utils/audio';

interface TamgaDrawingPracticeProps {
  initialTamga?: TamgaItem;
  onEarnXp?: (xp: number) => void;
  onRefillHeart?: () => void;
}

export const TamgaDrawingPractice: React.FC<TamgaDrawingPracticeProps> = ({
  initialTamga,
  onEarnXp,
  onRefillHeart
}) => {
  const [selectedTamga, setSelectedTamga] = useState<TamgaItem>(initialTamga || TAMGALAR[0]);
  const [showGuide, setShowGuide] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize and clear canvas when tamga changes
  useEffect(() => {
    clearCanvas();
  }, [selectedTamga]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setScore(null);
    setFeedback('');
    setHasDrawn(false);
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY
      };
    } else {
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#2DD4BF'; // Steppe Turquoise chisel stroke
    ctx.shadowColor = 'rgba(45, 212, 191, 0.4)';
    ctx.shadowBlur = 8;

    setIsDrawing(true);
    setHasDrawn(true);
    playChiselSound();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const evaluateDrawing = () => {
    if (!hasDrawn) {
      setFeedback('Lütfen önce ekrana tamgayı çizin!');
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check drawn pixels count
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let drawnPixels = 0;
    for (let i = 3; i < imgData.data.length; i += 4) {
      if (imgData.data[i] > 50) drawnPixels++;
    }

    // Dynamic scoring based on reasonable coverage
    let calculatedScore = 85;
    if (drawnPixels > 1200 && drawnPixels < 8000) {
      calculatedScore = Math.floor(Math.random() * 8) + 93; // 93-100%
      setFeedback('Harika bir bengü taş yazımı! Orhun ustası gibi çizdin.');
      playSuccessSound();
      if (onEarnXp) onEarnXp(15);
      if (onRefillHeart) onRefillHeart();
    } else if (drawnPixels >= 8000) {
      calculatedScore = 78;
      setFeedback('Çizgi biraz kalın oldu ama tamganın ruhu yerinde! Devam et.');
      if (onEarnXp) onEarnXp(10);
    } else {
      calculatedScore = 65;
      setFeedback('Çizgiyi tamamlamak için tamganın tüm hatlarını çizmelisin.');
    }

    setScore(calculatedScore);
  };

  return (
    <div className="bg-[#0C2228] border border-[#1B444C] rounded-2xl p-5 sm:p-7 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1A3E45] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#133840] text-[#2DD4BF] border border-[#20525C]">
              Yazma Pratiği
            </span>
            <span className="text-xs text-[#E2E8F0]/70">Bengü Taş Kazıma Tuvali</span>
          </div>
          <h3 className="text-xl font-bold text-white font-serif mt-1 flex items-center gap-2">
            <span>Tamga Çizimi:</span>
            <span className="text-[#F59E0B]">{selectedTamga.name}</span>
            <span className="text-xs text-[#2DD4BF] font-mono">({selectedTamga.sound})</span>
          </h3>
        </div>

        {/* Quick Tamga Selector Carousel */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
          {TAMGALAR.slice(0, 8).map((t) => (
            <button
              key={t.rune}
              onClick={() => setSelectedTamga(t)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${
                selectedTamga.rune === t.rune
                  ? 'bg-[#2DD4BF] text-[#052327] shadow-md shadow-[#2DD4BF]/20 scale-105'
                  : 'bg-[#102B33] hover:bg-[#163842] text-[#E2E8F0] border border-[#1E4953]'
              }`}
            >
              <span className="runic">{t.rune}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative mx-auto max-w-sm aspect-square bg-[#07171B] border-2 border-[#1E4953] rounded-2xl overflow-hidden shadow-inner flex items-center justify-center select-none touch-none">
        {/* Ancient Stone Carving Grid & Guidelines */}
        <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Subtle Reference Guide Template */}
        {showGuide && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="runic text-[140px] text-[#2DD4BF]/15 font-bold animate-pulse">
              {selectedTamga.rune}
            </span>
          </div>
        )}

        {/* Touch/Mouse Canvas */}
        <canvas
          ref={canvasRef}
          width={360}
          height={360}
          className="relative z-10 w-full h-full cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />

        {/* Hint banner at top */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#2DD4BF]/80 pointer-events-none z-20">
          <span>Parmağınla veya fareyle taşı yont</span>
          <span className="font-mono">Orhun Usulü</span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#112C34] hover:bg-[#183B47] text-[#E2E8F0] border border-[#1E4953] transition-colors cursor-pointer"
          >
            {showGuide ? <EyeOff className="w-3.5 h-3.5 text-[#2DD4BF]" /> : <Eye className="w-3.5 h-3.5 text-[#2DD4BF]" />}
            <span>{showGuide ? 'Şablonu Gizle' : 'Şablonu Göster'}</span>
          </button>
          
          <button
            onClick={clearCanvas}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#112C34] hover:bg-[#183B47] text-[#E2E8F0] border border-[#1E4953] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Temizle</span>
          </button>
        </div>

        <button
          onClick={evaluateDrawing}
          disabled={!hasDrawn}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
            hasDrawn
              ? 'btn-3d-teal shadow-lg shadow-[#0D9488]/25'
              : 'bg-[#132C33] text-gray-500 cursor-not-allowed opacity-60'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Taşı Kontrol Et</span>
        </button>
      </div>

      {/* Evaluation Feedback Modal / Banner */}
      {score !== null && (
        <div className="animate-popIn p-4 rounded-xl bg-[#091D22] border border-[#20525C] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg font-mono ${
              score >= 80 ? 'bg-[#2DD4BF] text-[#042023]' : 'bg-[#F59E0B] text-[#381E02]'
            }`}>
              %{score}
            </div>
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#F59E0B]" />
                {score >= 80 ? 'Yazım Onaylandı!' : 'Pratiğe Devam Et'}
              </p>
              <p className="text-xs text-[#94A3B8]">{feedback}</p>
            </div>
          </div>

          {score >= 80 && (
            <span className="text-xs font-bold text-[#F59E0B] px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 whitespace-nowrap">
              +15 XP & Can Yenilendi
            </span>
          )}
        </div>
      )}
    </div>
  );
};
