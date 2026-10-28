import { DayActivity } from '../types';

const TURKISH_DAY_NAMES = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

export const formatDateToKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getPastDaysList = (daysCount = 7): { date: string; dayName: string; formattedDate: string }[] => {
  const result = [];
  const today = new Date();

  for (let i = daysCount - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = formatDateToKey(d);
    const dayName = TURKISH_DAY_NAMES[d.getDay()];
    const formattedDate = `${d.getDate()} ${['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'][d.getMonth()]}`;
    result.push({ date: key, dayName, formattedDate });
  }

  return result;
};

/**
 * Son 14 günün BOŞ çerçevesi. Eskiden buraya örnek veri yazılıyordu
 * (35 XP, 2 kelime, 1 ders…); yeni kullanıcı hiç çalışmadan grafiğinde
 * çalışmış görünüyordu. Ölçme geçerliliğini doğrudan bozuyordu:
 * ön test / son test karşılaştırmasında başlangıç değeri sahteydi.
 * Artık gerçekten sıfırdan başlıyor.
 */
export const getInitialActivityHistory = (): Record<string, DayActivity> => {
  const history: Record<string, DayActivity> = {};
  for (const day of getPastDaysList(14)) {
    history[day.date] = {
      date: day.date,
      dayName: day.dayName,
      xp: 0,
      lessonsCompleted: 0,
      wordsLearned: 0,
    };
  }
  return history;
};

/**
 * Seri (streak) hesabı. Eskiden hiçbir yerde artmıyordu, hep 1'de
 * kalıyordu: ekranda gösterilen sayı ölçüm değil süstü.
 *
 * Aynı gün içindeki ikinci çalışma seriyi artırmaz; dün çalışılmışsa
 * bir artar; arada boş gün varsa 1'e döner.
 */
export const yeniSeri = (oncekiSeri: number, sonEtkinlik?: string, simdi = new Date()): number => {
  if (!sonEtkinlik) return 1;
  const onceki = new Date(sonEtkinlik);
  if (Number.isNaN(onceki.getTime())) return 1;
  const gun = (d: Date) => Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  const fark = Math.round((gun(simdi) - gun(onceki)) / 86400000);
  if (fark <= 0) return Math.max(1, oncekiSeri);
  if (fark === 1) return Math.max(1, oncekiSeri) + 1;
  return 1;
};

export const getWeeklyChartData = (
  activityHistory?: Record<string, DayActivity>
): { day: string; fullDate: string; xp: number; kelime: number; ders: number; active: boolean }[] => {
  const last7Days = getPastDaysList(7);
  const todayKey = formatDateToKey(new Date());

  return last7Days.map(item => {
    const rec = activityHistory?.[item.date];
    const xp = rec?.xp || 0;
    const kelime = rec?.wordsLearned || 0;
    const ders = rec?.lessonsCompleted || 0;
    const active = xp > 0 || kelime > 0 || ders > 0;

    return {
      day: item.dayName,
      fullDate: item.formattedDate,
      xp,
      kelime,
      ders,
      active
    };
  });
};

export const getStreakCalendarDays = (
  activityHistory?: Record<string, DayActivity>,
  streakCount = 1
): { dateKey: string; dayNumber: number; monthName: string; isActive: boolean; isToday: boolean }[] => {
  const today = new Date();
  const todayKey = formatDateToKey(today);
  const past21Days = getPastDaysList(21);

  return past21Days.map(d => {
    const rec = activityHistory?.[d.date];
    const isActive = (rec?.xp ?? 0) > 0 || (rec?.wordsLearned ?? 0) > 0 || (rec?.lessonsCompleted ?? 0) > 0;
    const dateObj = new Date(d.date);

    return {
      dateKey: d.date,
      dayNumber: dateObj.getDate(),
      monthName: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'][dateObj.getMonth()],
      isActive,
      isToday: d.date === todayKey
    };
  });
};
