import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  CartesianGrid 
} from 'recharts';
import { 
  Flame, 
  BookOpen, 
  Award, 
  Zap, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  Shield, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { UserProgress } from '../types';
import { getWeeklyChartData, getStreakCalendarDays } from '../utils/statsUtils';
import { SOZLUK } from '../data/sozlukData';
import { TAMGALAR } from '../data/tamgalarData';
import { BadgesSection } from './BadgesSection';
import { Badge } from '../data/badgesData';

interface IstatistiklerViewProps {
  progress: UserProgress;
  onNavigateToTab: (tab: string) => void;
  onClaimBadge?: (badge: Badge) => void;
}

export const IstatistiklerView: React.FC<IstatistiklerViewProps> = ({
  progress,
  onNavigateToTab,
  onClaimBadge
}) => {
  const [metricMode, setMetricMode] = useState<'xp' | 'kelime'>('xp');

  // Stats derivations
  const learnedWordsCount = Object.keys(progress.learnedWords || {}).length;
  const completedLessonsCount = Object.keys(progress.completedLessons || {}).length;
  const totalDictionaryWords = SOZLUK.length;
  const totalTamgas = TAMGALAR.length;

  const weeklyData = getWeeklyChartData(progress.activityHistory);
  const calendarDays = getStreakCalendarDays(progress.activityHistory, progress.streak);

  const totalWeeklyXp = weeklyData.reduce((sum, d) => sum + d.xp, 0);
  const totalWeeklyWords = weeklyData.reduce((sum, d) => sum + d.kelime, 0);
  const activeDaysThisWeek = weeklyData.filter(d => d.active).length;

  // Dictionary completion percentage
  const wordMasteryPercent = Math.min(100, Math.round((learnedWordsCount / totalDictionaryWords) * 100));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Page Title & Profile Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-derin">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-marka-acik mb-1">
            <Award className="w-4 h-4 text-uyari" />
            <span>Kullanıcı Profili & Gelişim Paneli</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">
            Alp Karnesi & İstatistikler
          </h1>
          <p className="text-sm text-metin-4 mt-1">
            Bozkır yolculuğundaki kadim rütbeleriniz, ardışık alev seriniz ve kazanılan tecrübeler.
          </p>
        </div>

        {/* User Rank & Summary Card */}
        <div className="flex items-center gap-4 bg-derin-3 border border-derin px-4 py-3 rounded-2xl shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-marka-acik to-marka-derin flex items-center justify-center text-derin-5 font-serif text-2xl font-bold shadow-md shadow-marka-acik/20">
            𐱅
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white font-serif">{progress.rank} Alp</span>
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-uyari/15 text-uyari border border-uyari/30">
                Mevcut Rütbe
              </span>
            </div>
            <p className="text-xs text-metin-4 flex items-center gap-2 mt-0.5">
              <span className="text-uyari font-bold flex items-center gap-0.5">
                <Zap className="w-3 h-3 fill-current" /> {progress.xp} XP
              </span>
              <span>•</span>
              <span className="text-orange-400 font-bold flex items-center gap-0.5">
                <Flame className="w-3 h-3 fill-current" /> {progress.streak} Gün Seri
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Görsel Bozkır Rütbe Basamakları (Steppe Rank Ladders) */}
      <div className="bg-derin-3 border border-derin rounded-3xl p-6 shadow-xl space-y-4 text-left">
        <div className="flex items-center justify-between border-b border-[#1A434C] pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-uyari" />
            <h3 className="text-base font-bold text-white font-serif">Bozkır Rütbe Basamakları</h3>
          </div>
          <span className="text-xs text-marka-acik font-mono">
            {progress.xp} XP Toplam
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-1">
          {[
            { title: 'Er', minXp: 0, rune: '𐰼', role: 'Acemi Alp', icon: '🛡️' },
            { title: 'Çor', minXp: 50, rune: '𐰱', role: 'Bozkır Süvarisi', icon: '🐎' },
            { title: 'Tarkan', minXp: 120, rune: '𐱃', role: 'Ordu Komutanı', icon: '⚔️' },
            { title: 'Toygun', minXp: 200, rune: '𐱃𐰆', role: 'Kurultay Üyesi', icon: '🐺' },
            { title: 'Bilge', minXp: 320, rune: '𐰋', role: 'Ulu Bilgin', icon: '📜' },
            { title: 'Kağan', minXp: 500, rune: '𐰴', role: 'Ulu Hakan', icon: '👑' },
          ].map((r) => {
            const isAttained = progress.xp >= r.minXp;
            const isCurrent = progress.rank === r.title;

            return (
              <div
                key={r.title}
                className={`relative p-3.5 rounded-2xl border text-center transition-all ${
                  isCurrent
                    ? 'bg-gradient-to-b from-[#163F49] to-[#0A2227] border-uyari shadow-lg shadow-uyari/20 scale-105 ring-1 ring-uyari'
                    : isAttained
                    ? 'bg-[#0E2930] border-[#1C4B54] text-white opacity-95'
                    : 'bg-[#08181C] border-[#143238] text-gray-500 opacity-60'
                }`}
              >
                {isCurrent && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.2 rounded-full text-[9px] font-black tracking-wider uppercase bg-uyari text-toprak-2">
                    ŞU AN
                  </span>
                )}

                <div className="text-xl mb-1">{r.icon}</div>
                <div className="runic text-2xl font-bold my-0.5 text-marka-acik">
                  {r.rune}
                </div>
                <h4 className="text-xs font-bold text-white font-serif">{r.title}</h4>
                <p className="text-[10px] text-metin-4">{r.role}</p>
                <span className="inline-block mt-1 text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#07161A] text-uyari">
                  {r.minXp} XP
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4 Key Summary Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Learned Words */}
        <div className="bg-zemin-2 border border-zemin-4 hover:border-marka/50 rounded-2xl p-5 shadow-lg space-y-2 transition-all">
          <div className="flex items-center justify-between text-metin-2">
            <span className="text-xs font-semibold">Öğrenilen Kelimeler</span>
            <div className="p-2 rounded-xl bg-zemin border border-zemin-4 text-marka">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
              {learnedWordsCount}
            </span>
            <span className="text-xs text-metin-2">/ {totalDictionaryWords}</span>
          </div>
          <div className="w-full h-1.5 bg-zemin rounded-full overflow-hidden mt-1">
            <div 
              className="h-full bg-marka rounded-full transition-all duration-500"
              style={{ width: `${Math.max(5, wordMasteryPercent)}%` }}
            />
          </div>
          <p className="text-[11px] text-metin-2 flex items-center justify-between pt-1">
            <span>Sözlük Haznesi</span>
            <span className="text-marka font-semibold">%{wordMasteryPercent}</span>
          </p>
        </div>

        {/* Current Active Streak */}
        <div className="bg-zemin-2 border border-zemin-4 hover:border-orange-400/50 rounded-2xl p-5 shadow-lg space-y-2 transition-all">
          <div className="flex items-center justify-between text-metin-2">
            <span className="text-xs font-semibold">Aktif Seri (Streak)</span>
            <div className="p-2 rounded-xl bg-zemin border border-zemin-4 text-orange-400">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-orange-400 font-mono">
              {progress.streak}
            </span>
            <span className="text-xs text-metin-2">Gün Kesintisiz</span>
          </div>
          <p className="text-[11px] text-metin-2 pt-1">
            Her gün bir tamga veya ders tamamlayarak seriyi koru.
          </p>
        </div>

        {/* Total XP Earned */}
        <div className="bg-zemin-2 border border-zemin-4 hover:border-amber-400/50 rounded-2xl p-5 shadow-lg space-y-2 transition-all">
          <div className="flex items-center justify-between text-metin-2">
            <span className="text-xs font-semibold">Kazanılan Tecrübe</span>
            <div className="p-2 rounded-xl bg-zemin border border-zemin-4 text-amber-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">
              {progress.xp}
            </span>
            <span className="text-xs text-metin-2">XP Toplam</span>
          </div>
          <p className="text-[11px] text-metin-2 pt-1">
            Bu hafta kazanılan: <span className="text-amber-400 font-bold">+{totalWeeklyXp} XP</span>
          </p>
        </div>

        {/* Completed Lessons */}
        <div className="bg-zemin-2 border border-zemin-4 hover:border-emerald-400/50 rounded-2xl p-5 shadow-lg space-y-2 transition-all">
          <div className="flex items-center justify-between text-metin-2">
            <span className="text-xs font-semibold">Bitirilen Dersler</span>
            <div className="p-2 rounded-xl bg-zemin border border-zemin-4 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
              {completedLessonsCount}
            </span>
            <span className="text-xs text-metin-2">Ders Modülü</span>
          </div>
          <p className="text-[11px] text-metin-2 pt-1">
            Orhun Yazıtları müfredatında kaydedilen ilerleme.
          </p>
        </div>
      </div>

      {/* Main Charts Row: Haftalık Öğrenme Aktivitesi & Streak Geçmişi */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left 7 Columns: Haftalık Aktivite Grafiği (Recharts Bar & Area) */}
        <div className="lg:col-span-7 bg-zemin-2 border border-zemin-4 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-marka" />
                Haftalık Öğrenme Aktivitesi
              </h2>
              <p className="text-xs text-metin-2 mt-0.5">
                Son 7 gün içindeki tecrübe (XP) ve kelime kazanımlarınız
              </p>
            </div>

            {/* Metric Mode Toggle */}
            <div className="flex items-center bg-zemin p-1 rounded-xl border border-zemin-4 text-xs self-start sm:self-auto">
              <button
                onClick={() => setMetricMode('xp')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  metricMode === 'xp'
                    ? 'bg-marka text-zemin shadow-sm'
                    : 'text-metin-2 hover:text-white'
                }`}
              >
                XP Dağılımı
              </button>
              <button
                onClick={() => setMetricMode('kelime')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  metricMode === 'kelime'
                    ? 'bg-marka text-zemin shadow-sm'
                    : 'text-metin-2 hover:text-white'
                }`}
              >
                Kelimeler
              </button>
            </div>
          </div>

          {/* Recharts Container */}
          <div className="h-[260px] w-full pt-2">
            <ResponsiveContainer width="100%" height={250}>
              {metricMode === 'xp' ? (
                <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2BC4C4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#2BC4C4" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1D2D44" vertical={false} />
                  <XAxis 
                    dataKey="day" 
                    stroke="#6C7F99" 
                    tick={{ fill: '#9FB0C6', fontSize: 12 }} 
                    axisLine={{ stroke: '#233754' }}
                  />
                  <YAxis 
                    stroke="#6C7F99" 
                    tick={{ fill: '#9FB0C6', fontSize: 12 }} 
                    axisLine={{ stroke: '#233754' }}
                  />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const item = payload[0].payload;
                        return (
                          <div className="bg-zemin border border-marka p-3 rounded-xl shadow-xl text-xs space-y-1">
                            <span className="font-bold text-white block">{item.fullDate} ({label})</span>
                            <span className="text-amber-400 font-semibold block">+{item.xp} XP Kazanıldı</span>
                            <span className="text-marka block">{item.kelime} Kelime Öğrenildi</span>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="xp" 
                    stroke="#2BC4C4" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#xpGradient)" 
                  />
                </AreaChart>
              ) : (
                <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1D2D44" vertical={false} />
                  <XAxis 
                    dataKey="day" 
                    stroke="#6C7F99" 
                    tick={{ fill: '#9FB0C6', fontSize: 12 }} 
                    axisLine={{ stroke: '#233754' }}
                  />
                  <YAxis 
                    stroke="#6C7F99" 
                    tick={{ fill: '#9FB0C6', fontSize: 12 }} 
                    axisLine={{ stroke: '#233754' }}
                    allowDecimals={false}
                  />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const item = payload[0].payload;
                        return (
                          <div className="bg-zemin border border-marka p-3 rounded-xl shadow-xl text-xs space-y-1">
                            <span className="font-bold text-white block">{item.fullDate} ({label})</span>
                            <span className="text-marka font-semibold block">{item.kelime} Kelime İncelendi</span>
                            <span className="text-amber-400 block">+{item.xp} XP</span>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="kelime" 
                    fill="#2BC4C4" 
                    radius={[6, 6, 0, 0]} 
                  />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Bottom Chart Footer Insights */}
          <div className="flex items-center justify-between pt-4 border-t border-zemin-4 text-xs">
            <div className="flex items-center gap-2 text-metin-2">
              <span className="w-2.5 h-2.5 rounded-full bg-marka" />
              <span>Bu Hafta Aktif Gün: <strong className="text-white">{activeDaysThisWeek} / 7 gün</strong></span>
            </div>
            <div className="text-right">
              <span className="text-metin-2">Haftalık Toplam: </span>
              <strong className="text-amber-400 font-mono">+{totalWeeklyXp} XP</strong>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Streak (Ardışık Gün) Geçmişi & Takvimi */}
        <div className="lg:col-span-5 bg-zemin-2 border border-zemin-4 rounded-2xl p-6 shadow-xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  Streak (Ardışık Gün) Geçmişi
                </h2>
                <p className="text-xs text-metin-2 mt-0.5">
                  Son 21 günlük devamlılık ve öğrenme ritminiz
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-400/10 border border-orange-400/30 text-orange-400 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>{progress.streak} Gün</span>
              </div>
            </div>

            {/* Streak Calendar Grid (Past 21 Days) */}
            <div className="bg-zemin border border-zemin-4 p-4 rounded-xl">
              <div className="flex items-center justify-between text-xs text-metin-2 mb-3 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-marka" />
                  Son 3 Hafta Ritim Tablosu
                </span>
                <span className="text-[11px]">Koyu: Tamamlandı</span>
              </div>

              {/* 7 Columns Grid */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((item, idx) => (
                  <div
                    key={idx}
                    title={`${item.dayNumber} ${item.monthName} - ${item.isActive ? 'Aktivite var' : 'Aktivite yok'}`}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center text-[10px] font-mono border transition-all ${
                      item.isToday
                        ? 'border-marka ring-2 ring-marka/30'
                        : 'border-transparent'
                    } ${
                      item.isActive
                        ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-slate-950 font-bold shadow-sm shadow-orange-500/20'
                        : 'bg-zemin-3 text-metin-3'
                    }`}
                  >
                    <span>{item.dayNumber}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-metin-3 mt-3 pt-2 border-t border-zemin-4">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-gradient-to-br from-orange-500 to-amber-500 inline-block" />
                  Aktif Çalışma
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-zemin-3 inline-block border border-zemin-4" />
                  Pasif Gün
                </span>
              </div>
            </div>

            {/* Streak Motivation Message */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-zemin-3 to-[#1a2c47] border border-zemin-4 text-xs text-metin space-y-1">
              <span className="font-bold text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Bozkırın Kadim Kuralı: Süreklilik
              </span>
              <p className="text-metin-2 leading-relaxed text-[11px]">
                Her gün 1 tamga okumak veya bir dize çözmek, Orhun yazıtlarının tamamını 30 günde sökmenizi sağlar.
              </p>
            </div>
          </div>

          {/* Fast Action to reinforce streak */}
          <button
            onClick={() => onNavigateToTab('sozluk')}
            className="w-full py-2.5 px-4 rounded-xl bg-zemin-3 hover:bg-[#1f3350] border border-zemin-4 hover:border-marka text-xs font-bold text-marka hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Sözlükte Yeni Kelime Keşfet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Badges and Milestones Section */}
      <BadgesSection 
        progress={progress}
        onClaimBadge={onClaimBadge}
      />

      {/* Words Learned & Category Mastery Breakdown */}
      <div className="bg-zemin-2 border border-zemin-4 rounded-2xl p-6 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-white font-serif flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-marka" />
              Kelime Haznesi & Sözlük Durumu
            </h2>
            <p className="text-xs text-metin-2 mt-0.5">
              İncelediğiniz ve hafızanıza aldığınız Orhun Yazıtları kelimeleri
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-metin-2">Toplam Hazne:</span>
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">
              {learnedWordsCount} / {totalDictionaryWords} Sözcük
            </span>
          </div>
        </div>

        {/* Recently Learned Words Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SOZLUK.slice(0, 6).map((word) => {
            const isLearned = Boolean(progress.learnedWords?.[word.id]);

            return (
              <div
                key={word.id}
                className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                  isLearned
                    ? 'bg-zemin-3 border-marka/40 shadow-sm'
                    : 'bg-zemin-2 border-zemin-4 opacity-70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zemin border border-zemin-4 flex items-center justify-center text-xl text-marka font-serif flex-shrink-0">
                    {word.runic}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white font-serif block">
                      {word.transcription}
                    </span>
                    <span className="text-xs text-metin-2 line-clamp-1">
                      {word.meaning}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {isLearned ? (
                    <span className="text-[10px] font-bold text-basari bg-basari/15 px-2 py-0.5 rounded-md border border-basari/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Hafızada
                    </span>
                  ) : (
                    <button
                      onClick={() => onNavigateToTab('sozluk')}
                      className="text-[11px] text-metin-3 hover:text-marka flex items-center gap-0.5"
                    >
                      Öğren &rarr;
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action to view all dictionary */}
        <div className="pt-2 text-center">
          <button
            onClick={() => onNavigateToTab('sozluk')}
            className="inline-flex items-center gap-2 text-xs text-marka hover:text-white font-bold bg-zemin-3 hover:bg-[#1f3350] border border-zemin-4 hover:border-marka px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            <span>Tüm Sözlüğü İncele ({totalDictionaryWords} Kelime)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
