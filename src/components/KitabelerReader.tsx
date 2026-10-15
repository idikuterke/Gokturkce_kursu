import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, Compass, Layers, Info } from 'lucide-react';
import { ORHUN_LINES } from '../data/orhunData';
import { playChiselSound } from '../utils/audio';

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#233754] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#2BC4C4] flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Orhun Vadisi Kitabeleri
          </span>
          <h2 className="text-3xl font-bold text-white font-serif mt-1">
            Bengü Taş Okuma Odası
          </h2>
          <p className="text-sm text-[#9FB0C6] mt-1">
            Kül Tigin, Bilge Kağan ve Tonyukuk yazıtlarından orijinal dizeler ve Irk Bitig kadim fal metinleri.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-[#101B2C] border border-[#233754] p-1 rounded-xl">
          <button
            onClick={() => setViewMode('stele')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'stele'
                ? 'bg-[#2BC4C4] text-[#0B1320]'
                : 'text-[#9FB0C6] hover:text-white'
            }`}
          >
            Bengü Taş Görünümü
          </button>
          <button
            onClick={() => setViewMode('academic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'academic'
                ? 'bg-[#2BC4C4] text-[#0B1320]'
                : 'text-[#9FB0C6] hover:text-white'
            }`}
          >
            Akademik Tahlil
          </button>
        </div>
      </div>

      {/* Monument Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
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
                ? 'bg-[#2BC4C4] text-[#0B1320] shadow-md shadow-[#2BC4C4]/20'
                : 'bg-[#101B2C] text-[#9FB0C6] hover:text-white border border-[#233754]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

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
                      ? 'bg-gradient-to-br from-[#101B2C] via-[#152338] to-[#0d1624] border-[#2BC4C4] shadow-2xl shadow-[#2BC4C4]/10'
                      : 'bg-[#101B2C] border-[#233754] hover:border-[#3B82F6]/60 opacity-90'
                  }`}
                >
                  {/* Stele Top Header */}
                  <div className="flex items-center justify-between border-b border-[#233754] pb-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2BC4C4]">
                      {line.monument} • {line.section} • Satır {line.line}
                    </span>
                    <span className="text-xs text-[#6C7F99] font-mono">{line.id}</span>
                  </div>

                  {/* The Glowing Runic Inscription */}
                  <div className="py-4">
                    <p className="runic text-2xl sm:text-3xl text-[#E6EDF5] leading-relaxed text-right tracking-wide select-none drop-shadow-[0_2px_8px_rgba(43,196,196,0.25)]">
                      {line.runic}
                    </p>
                  </div>

                  {/* Quick Translation Snippet */}
                  <div className="mt-4 pt-4 border-t border-[#233754] flex items-center justify-between text-xs text-[#9FB0C6]">
                    <span className="line-clamp-1 italic">{line.modernTurkish}</span>
                    <span className="text-[#2BC4C4] font-semibold flex-shrink-0 ml-2">İncele &rarr;</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stele Inspector Panel (Right 1 col) */}
          <div className="space-y-6">
            <div className="sticky top-24 bg-[#101B2C] border-2 border-[#2BC4C4]/60 rounded-3xl p-6 shadow-2xl space-y-6">
              <div className="border-b border-[#233754] pb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2BC4C4] block">
                  Metin İncelemesi
                </span>
                <h3 className="text-xl font-bold text-white font-serif mt-1">
                  {activeLine.monument}
                </h3>
                <p className="text-xs text-[#9FB0C6] mt-0.5">
                  {activeLine.section} — {activeLine.line}. Satır
                </p>
              </div>

              {/* Runic text in panel */}
              <div className="bg-[#0B1320] p-4 rounded-2xl border border-[#233754]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6C7F99] block mb-1">
                  Taştaki Orijinal Metin (RTL)
                </span>
                <p className="runic text-xl text-[#2BC4C4] text-right leading-relaxed">
                  {activeLine.runic}
                </p>
              </div>

              {/* Transcription */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Transkripsiyon (Latin Çevrim)
                </span>
                <p className="text-xs text-[#E6EDF5] italic font-serif leading-relaxed bg-[#152338] p-3 rounded-xl border border-[#233754]">
                  {activeLine.transcription}
                </p>
              </div>

              {/* Modern Turkish */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#37B36A] block">
                  Türkiye Türkçesi Anlamı
                </span>
                <p className="text-xs text-white leading-relaxed bg-[#152338] p-3 rounded-xl border border-[#233754]">
                  "{activeLine.modernTurkish}"
                </p>
              </div>

              {/* Historical Context */}
              {activeLine.historicalContext && (
                <div className="bg-[#0B1320] border border-[#233754] p-3.5 rounded-xl space-y-1">
                  <span className="text-[11px] font-bold text-[#2BC4C4] flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Tarihsel & Edebi Not
                  </span>
                  <p className="text-xs text-[#9FB0C6] leading-relaxed">
                    {activeLine.historicalContext}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Academic Table Layout */
        <div className="bg-[#101B2C] border border-[#233754] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#152338] border-b border-[#233754] text-xs uppercase tracking-wider text-[#2BC4C4]">
                <tr>
                  <th className="py-3 px-4">Yazıt / Dize</th>
                  <th className="py-3 px-4 text-right">Runik Orijinal</th>
                  <th className="py-3 px-4">Transkripsiyon</th>
                  <th className="py-3 px-4">Türkiye Türkçesi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#233754]">
                {filteredLines.map((line) => (
                  <tr key={line.id} className="hover:bg-[#152338]/60 transition-colors">
                    <td className="py-4 px-4 whitespace-nowrap align-top">
                      <span className="font-bold text-white block text-xs">{line.monument}</span>
                      <span className="text-[11px] text-[#6C7F99]">{line.section} - Satır {line.line}</span>
                    </td>
                    <td className="py-4 px-4 text-right align-top">
                      <span className="runic text-2xl text-[#2BC4C4] block leading-relaxed">{line.runic}</span>
                    </td>
                    <td className="py-4 px-4 align-top text-xs text-[#9FB0C6] italic font-serif">
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
