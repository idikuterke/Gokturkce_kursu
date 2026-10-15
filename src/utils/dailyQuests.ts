import { DailyQuest, DailyQuestState, QuestCategory } from '../types';

export const getTodayDateString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDefaultDailyQuests = (dateString?: string): DailyQuestState => {
  const today = dateString || getTodayDateString();
  return {
    date: today,
    allCompletedBonusClaimed: false,
    quests: [
      {
        id: `quest-words-${today}`,
        title: '3 Kelime Öğren',
        description: 'Sözlükte veya derslerde 3 kadim Türkçe kelime incele ve öğren',
        category: 'words',
        target: 3,
        current: 0,
        completed: false,
        claimed: false,
        reward: {
          xp: 20,
          hearts: 1,
          badgeName: 'Kelime Avcısı'
        }
      },
      {
        id: `quest-series-${today}`,
        title: 'Bir Tamga Serisi Tamamla',
        description: 'Kartlarla Çalış (Flashcard) modunda bir tamga destesini tamamla',
        category: 'tamga_series',
        target: 1,
        current: 0,
        completed: false,
        claimed: false,
        reward: {
          xp: 25,
          hearts: 1,
          badgeName: 'Taş Ustası'
        }
      },
      {
        id: `quest-lesson-${today}`,
        title: 'Günün Dersini Bitir',
        description: 'Öğrenme yolunda bir dersi veya aşama sınavını tamamla',
        category: 'lesson',
        target: 1,
        current: 0,
        completed: false,
        claimed: false,
        reward: {
          xp: 30,
          badgeName: 'Bozkır Alpi'
        }
      },
      {
        id: `quest-listen-${today}`,
        title: '3 Telaffuz Dinle',
        description: 'Derslerde veya sözlükte tamgaların ve sözcüklerin sesli okunuşunu dinle',
        category: 'listen',
        target: 3,
        current: 0,
        completed: false,
        claimed: false,
        reward: {
          xp: 15,
          badgeName: 'Keskin Kulak'
        }
      }
    ]
  };
};

export const ensureDailyQuests = (currentState?: DailyQuestState): DailyQuestState => {
  const today = getTodayDateString();
  if (!currentState || currentState.date !== today || !Array.isArray(currentState.quests)) {
    return getDefaultDailyQuests(today);
  }
  return currentState;
};

export interface QuestUpdateResult {
  updatedState: DailyQuestState;
  newlyCompleted: DailyQuest[];
}

export const updateQuestProgressInState = (
  state: DailyQuestState,
  category: QuestCategory,
  amount = 1
): QuestUpdateResult => {
  const today = getTodayDateString();
  // Ensure we are working on today's state
  const baseState = state.date === today ? state : getDefaultDailyQuests(today);
  const newlyCompleted: DailyQuest[] = [];

  const updatedQuests = baseState.quests.map((quest) => {
    if (quest.category !== category) return quest;

    const newCurrent = Math.min(quest.target, quest.current + amount);
    const wasCompleted = quest.completed;
    const isNowCompleted = newCurrent >= quest.target;

    if (!wasCompleted && isNowCompleted) {
      newlyCompleted.push({
        ...quest,
        current: newCurrent,
        completed: true
      });
    }

    return {
      ...quest,
      current: newCurrent,
      completed: isNowCompleted
    };
  });

  return {
    updatedState: {
      ...baseState,
      quests: updatedQuests
    },
    newlyCompleted
  };
};

export const getTimeUntilMidnight = (): { hours: number; minutes: number } => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diffMs = Math.max(0, midnight.getTime() - now.getTime());
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  return { hours, minutes };
};
