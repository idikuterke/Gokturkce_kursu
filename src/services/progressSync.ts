import { loadFirebase } from '../lib/firebase';
import { UserProgress, DayActivity } from '../types';
import { ensureDailyQuests } from '../utils/dailyQuests';

const PROGRESS_COLLECTION = 'users';

const unionFlags = (
  a: Record<string, boolean> = {},
  b: Record<string, boolean> = {}
): Record<string, boolean> => {
  const merged: Record<string, boolean> = { ...a };
  for (const [key, value] of Object.entries(b)) {
    merged[key] = merged[key] || value;
  }
  return merged;
};

const mergeActivity = (
  a: Record<string, DayActivity> = {},
  b: Record<string, DayActivity> = {}
): Record<string, DayActivity> => {
  const merged: Record<string, DayActivity> = { ...a };
  for (const [date, day] of Object.entries(b)) {
    const existing = merged[date];
    merged[date] = existing
      ? {
          ...existing,
          xp: Math.max(existing.xp, day.xp),
          lessonsCompleted: Math.max(existing.lessonsCompleted, day.lessonsCompleted),
          wordsLearned: Math.max(existing.wordsLearned, day.wordsLearned)
        }
      : day;
  }
  return merged;
};

/**
 * İki ilerleme kaydını kayıpsız birleştirir.
 *
 * Kullanıcı çevrimdışıyken ya da başka bir cihazda ilerlemiş olabilir; bu
 * yüzden "son yazan kazanır" yerine her alanda daha ileri olan değer alınır.
 * Sayısal alanlarda maksimum, kümelerde birleşim uygulanır.
 */
export const mergeProgress = (local: UserProgress, remote: UserProgress): UserProgress => {
  const leader = remote.xp > local.xp ? remote : local;

  return {
    ...leader,
    xp: Math.max(local.xp, remote.xp),
    hearts: Math.max(local.hearts, remote.hearts),
    maxHearts: Math.max(local.maxHearts, remote.maxHearts),
    streak: Math.max(local.streak, remote.streak),
    lastActiveDate:
      local.lastActiveDate > remote.lastActiveDate ? local.lastActiveDate : remote.lastActiveDate,
    rank: leader.rank,
    completedLessons: unionFlags(local.completedLessons, remote.completedLessons),
    unlockedUnits: unionFlags(local.unlockedUnits, remote.unlockedUnits),
    learnedWords: unionFlags(local.learnedWords, remote.learnedWords),
    claimedBadges: unionFlags(local.claimedBadges, remote.claimedBadges),
    tamgaInventory: Array.from(
      new Set([...(local.tamgaInventory || []), ...(remote.tamgaInventory || [])])
    ),
    activityHistory: mergeActivity(local.activityHistory, remote.activityHistory),
    // Günlük görevler güne bağlıdır; birleştirmek yerine bugüne göre tazelenir.
    dailyQuests: ensureDailyQuests(
      (local.dailyQuests?.date ?? '') >= (remote.dailyQuests?.date ?? '')
        ? local.dailyQuests
        : remote.dailyQuests
    )
  };
};

export const fetchRemoteProgress = async (uid: string): Promise<UserProgress | null> => {
  const bundle = await loadFirebase();
  if (!bundle) return null;
  const { doc, getDoc } = await import('firebase/firestore');
  const snapshot = await getDoc(doc(bundle.db, PROGRESS_COLLECTION, uid));
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  return (data?.progress as UserProgress) ?? null;
};

export const saveRemoteProgress = async (uid: string, progress: UserProgress): Promise<void> => {
  const bundle = await loadFirebase();
  if (!bundle) return;
  const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
  await setDoc(
    doc(bundle.db, PROGRESS_COLLECTION, uid),
    { progress, updatedAt: serverTimestamp() },
    { merge: true }
  );
};
