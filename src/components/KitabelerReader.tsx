import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, Compass, Layers, Info } from 'lucide-react';
import { ORHUN_LINES } from '../data/orhunData';
import { playChiselSound } from '../utils/audio';
import { Sahne } from './Sahne';

/**
 * Her yazıt için bir sahne görseli. Irk Bitig bir kâğıt defter, ötekiler
 * taş anıt — ikisi aynı görselle temsil edilemez.
 */
const YAZIT_GORSELI: Record<string, string> = {
  all: 'orhun-bengu-tas',
  KT: 'orhun-bengu-tas',
  BK: 'orhun-bengu-tas',
  TY: 'orhun-bengu-tas',
  IRK: 'irk-bitig-sayfa',
};

export const KitabelerReader: React.FC = () => {
  const [selectedMonument, setSelectedMonument] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'stele' | 'academic'>('stele');
  const [activeLineId, setActiveLineId] = useState<string>(ORHUN_LINES[0].id);

  const filteredLines = ORHUN_LINES.filter(line => {
    if (selectedMonument === 'all') return true;
    if (selectedMonument === 'KT') return line.monument.includes('Kül Tigin');
    if (selectedMonument === 'BK') return line.monument.includes('Bilge Kağan');
    if (selectedMonument === 'TY') return line.monument.includes('Tonyukuk');
    if (selectedMonument === 'IRK') return line.monument.includes('Irk Bitig');
    return true;
  });

  const activeLine = ORHUN_LINES.find(l => l.id === activeLineId) || ORHUN_LINES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zemin-4 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-marka flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Orhun Vadisi Kitabeleri
          </span>
          <h2 className="text-3xl font-bold text-white font-serif mt-1">
            Bengü Taş Okuma Odası
          </h2>
          <p className="text-sm text-metin-2 mt-1">
            Kül Tigin, Bilge Kağan ve Tonyukuk yazıtlarından orijinal dizeler ve Irk Bitig kadim fal metinleri.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-zemin-2 border border-zemin-4 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('stele')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'stele'
                ? 'bg-marka text-zemin'
                : 'text-metin-2 hover:text-white'
            }`}
          >
            Bengü Taş Görünümü
          </button>
          <button
            onClick={() => setViewMode('academic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'academic'
                ? 'bg-marka text-zemin'
                : 'text-metin-2 hover:text-white'
            }`}
          >
            Akademik Tahlil
          </button>
        </div>
      </div>

      {/* Monument Tabs */}
      <div className="kaydirma-ipucu flex items-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'Tüm Yazıtlar' },
          { id: 'KT', label: 'Kül Tigin Yazıtı (732)' },
          { id: 'BK', label: 'Bilge Kağan Yazıtı (735)' },
          { id: 'TY', label: 'Tonyukuk Yazıtı (730)' },
          { id: 'IRK', label: 'Irk Bitig (9. yy El Yazması)' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              playChiselSound();
              setSelectedMonument(tab.id);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedMonument === tab.id
                ? 'bg-marka text-zemin shadow-md shadow-marka/20'
                : 'bg-zemin-2 text-metin-2 hover:text-white border border-zemin-4'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Seçili yazıtın sahnesi. Fotoğraf değil canlandırma; rozeti Sahne
          bileşeni kendi basıyor, metin onun üstünde duruyor. */}
      <Sahne
        gorsel={YAZIT_GORSELI[selectedMonument] ?? 'orhun-bengu-tas'}
        yukseklik="h-36 sm:h-52"
        etiket={false}
      >
        <div className="w-full flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-marka-acik font-bold">
              {selectedMonument === 'IRK' ? 'El yazması' : 'Bengü taş'}
            </p>
            <p className="text-lg sm:text-xl font-serif text-white drop-shadow">
              {filteredLines.length} dize okunmayı bekliyor
            </p>
          </div>
          <span
            title="Flux1-dev ile üretilmiş metinsiz sahne"
            className="text-[10px] px-2 py-1 rounded-full bg-black/55 text-metin-2 border border-white/10 backdrop-blur-sm"
          >
            Canlandırma — anıtın fotoğrafı değil
          </span>
        </div>
      </Sahne>

      {/* Main Content Layout */}
      {viewMode === 'stele' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stele Visual Display (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {filteredLines.map((line) => {
              const isActive = activeLine.id === line.id;
              return (
                <div
                  key={line.id}
                  onClick={() => {
                    playChiselSound();
                    setActiveLineId(line.id);
                  }}
                  className={`relative p-6 sm:p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-zemin-2 via-zemin-3 to-[#0d1624] border-marka shadow-2xl shadow-marka/10'
                      : 'bg-zemin-2 border-zemin-4 hover:border-bilgi/60 opacity-90'
                  }`}
                >
                  {/* Stele Top Header */}
                  <div className="flex items-center justify-between border-b border-zemin-4 pb-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-marka">
                      {line.monument} • {line.section} • Satır {line.line}
                    </span>
                    <span className="text-xs text-metin-3 font-mono">{line.id}</span>
                  </div>

                  {/* The Glowing Runic Inscription */}
                  <div className="py-4">
                    <p className="runic text-2xl sm:text-3xl text-metin leading-relaxed text-right tracking-wide select-none drop-shadow-[0_2px_8px_rgba(43,196,196,0.25)]">
                      {line.runic}
                    </p>
                  </div>

                  {/* Quick Translation Snippet */}
                  <div className="mt-4 pt-4 border-t border-zemin-4 flex items-center justify-between text-xs text-metin-2">
                    <span className="line-clamp-1 italic">{line.modernTurkish}</span>
                    <span className="text-marka font-semibold flex-shrink-0 ml-2">İncele &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stele Inspector Panel (Right 1 col) */}
          <div className="space-y-6">
            <div className="sticky top-24 bg-zemin-2 border-2 border-marka/60 rounded-3xl p-6 shadow-2xl space-y-6">
              <div className="border-b border-zemin-4 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-marka block">
                  Metin İncelemesi
                </span>
                <h3 className="text-xl font-bold text-white font-serif mt-1">
                  {activeLine.monument}
                </h3>
                <p className="text-xs text-metin-2 mt-0.5">
                  {activeLine.section} — {activeLine.line}. Satır
                </p>
              </div>

              {/* Runic text in panel */}
              <div className="bg-zemin p-4 rounded-2xl border border-zemin-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-metin-3 block mb-1">
                  Taştaki Orijinal Metin (RTL)
                </span>
                <p className="runic text-xl text-marka text-right leading-relaxed">
                  {activeLine.runic}
                </p>
              </div>

              {/* Transcription */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Transkripsiyon (Latin Çevrim)
                </span>
                <p className="text-xs text-metin italic font-serif leading-relaxed bg-zemin-3 p-3 rounded-xl border border-zemin-4">
                  {activeLine.transcription}
                </p>
              </div>

              {/* Modern Turkish */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-basari block">
                  Türkiye Türkçesi Anlamı
                </span>
                <p className="text-xs text-white leading-relaxed bg-zemin-3 p-3 rounded-xl border border-zemin-4">
                  "{activeLine.modernTurkish}"
                </p>
              </div>

              {/* Historical Context */}
              {activeLine.historicalContext && (
                <div className="bg-zemin border border-zemin-4 p-3.5 rounded-xl space-y-1">
                  <span className="text-[11px] font-bold text-marka flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Tarihsel & Edebi Not
                  </span>
                  <p className="text-xs text-metin-2 leading-relaxed">
                    {activeLine.historicalContext}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Academic Table Layout */
        <div className="bg-zemin-2 border border-zemin-4 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zemin-3 border-b border-zemin-4 text-xs uppercase tracking-wider text-marka">
                <tr>
                  <th className="py-3 px-4">Yazıt / Dize</th>
                  <th className="py-3 px-4 text-right">Runik Orijinal</th>
                  <th className="py-3 px-4">Transkripsiyon</th>
                  <th className="py-3 px-4">Türkiye Türkçesi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zemin-4">
                {filteredLines.map((line) => (
                  <tr key={line.id} className="hover:bg-zemin-3/60 transition-colors">
                    <td className="py-4 px-4 whitespace-nowrap align-top">
                      <span className="font-bold text-white block text-xs">{line.monument}</span>
                      <span className="text-[11px] text-metin-3">{line.section} - Satır {line.line}</span>
                    </td>
                    <td className="py-4 px-4 text-right align-top">
                      <span className="runic text-2xl text-marka block leading-relaxed">{line.runic}</span>
                    </td>
                    <td className="py-4 px-4 align-top text-xs text-metin-2 italic font-serif">
                      {line.transcription}
                    </td>
                    <td className="py-4 px-4 align-top text-xs text-white leading-relaxed">
                      {line.modernTurkish}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
