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

// Generates an initial realistic history if user has zero history yet (e.g. initial streak)
export const getInitialActivityHistory = (currentStreak = 1): Record<string, DayActivity> => {
  const pastDays = getPastDaysList(14);
  const history: Record<string, DayActivity> = {};

  // Fill default empty for all past 14 days
  pastDays.forEach(day => {
    history[day.date] = {
      date: day.date,
      dayName: day.dayName,
      xp: 0,
      lessonsCompleted: 0,
      wordsLearned: 0
    };
  });

  // For the active streak days ending today, add some realistic learning history
  const activeStreakLen = Math.min(pastDays.length, Math.max(1, currentStreak));
  const sampleXp = [35, 50, 40, 65, 80, 55, 70];
  const sampleWords = [2, 4, 3, 5, 6, 3, 4];
  const sampleLessons = [1, 2, 1, 2, 3, 1, 2];

  for (let i = 0; i < activeStreakLen; i++) {
    const dayIndex = pastDays.length - 1 - i;
    const day = pastDays[dayIndex];
    if (day) {
      history[day.date] = {
        date: day.date,
        dayName: day.dayName,
        xp: sampleXp[i % sampleXp.length],
        lessonsCompleted: sampleLessons[i % sampleLessons.length],
        wordsLearned: sampleWords[i % sampleWords.length]
      };
    }
  }

  return history;
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
