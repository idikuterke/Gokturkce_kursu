export type ExerciseType = 
  | 'choice' 
  | 'pair_match' 
  | 'word_builder' 
  | 'cloze' 
  | 'translation' 
  | 'identify_rule';

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  subprompt?: string;
  runePrompt?: string;
  options?: string[];
  correctAnswer?: string;
  pairs?: { rune: string; sound: string }[];
  targetWord?: {
    rune: string;
    latin: string;
    meaning: string;
    tokens: string[]; // runes to arrange
  };
  clozeSentence?: {
    preRune: string;
    missingRune: string;
    postRune: string;
    fullMeaning: string;
    latin: string;
  };
  translationData?: {
    runicText: string;
    transcription: string;
    correctWords: string[];
    wordPool: string[];
  };
  explanation?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  subtitle: string;
  iconName: string;
  type: 'standard' | 'review' | 'exam';
  xp: number;
  exercises: Exercise[];
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  lessons: Lesson[];
}

export type QuestCategory = 'words' | 'tamga_series' | 'lesson' | 'listen' | 'practice';

export interface DailyQuest {
  id: string;
  title: string;
  description: string;
  category: QuestCategory;
  target: number;
  current: number;
  completed: boolean;
  claimed: boolean;
  reward: {
    xp: number;
    hearts?: number;
    badgeName?: string;
  };
}

export interface DailyQuestState {
  date: string; // YYYY-MM-DD
  quests: DailyQuest[];
  allCompletedBonusClaimed: boolean;
}

export interface DayActivity {
  date: string; // YYYY-MM-DD
  dayName: string; // 'Pzt', 'Sal', 'Çar', vb.
  xp: number;
  lessonsCompleted: number;
  wordsLearned: number;
}

/**
 * Giriş ekranında toplanan ihtiyaç analizi yanıtları. İlerleme kaydından
 * AYRI tutuluyor (gokturkce_profil_v1): beyan ilerleme değildir, karışmasın.
 */
export interface OgrenciProfili {
  /** Seçenek kimlikleri; birden çok olabilir. */
  amaclar: string[];
  /** Tek seçenek kimliği. */
  onBilgi: string;
  /** Beyandan türeyen başlangıç aşaması. */
  baslangic: 'alfabe' | 'gundelik' | 'sayi' | 'kitabe';
  /** Haftalık ayırabileceğini söylediği dakika. */
  haftalikDakika: number;
  /** ISO 8601. */
  tarih: string;
  /** Soruları yanıtlamadan geçtiyse true; analiz eksik sayılır. */
  atlandi?: boolean;
}

export interface UserProgress {
  xp: number;
  hearts: number;
  maxHearts: number;
  streak: number;
  lastActiveDate: string;
  completedLessons: Record<string, boolean>; // lessonId -> true
  unlockedUnits?: Record<string, boolean>;
  rank: string; // 'Er', 'Çor', 'Tarkan', 'Toygun', 'Bilge', 'Kağan'
  tamgaInventory?: string[]; // unlocked runes
  dailyQuests?: DailyQuestState;
  learnedWords?: Record<string, boolean>; // wordId or word string -> true
  activityHistory?: Record<string, DayActivity>; // YYYY-MM-DD -> DayActivity
  claimedBadges?: Record<string, boolean>; // badgeId -> claimed or acknowledged
}

export interface TamgaItem {
  rune: string;
  codePoint: string;
  name: string;
  sound: string;
  category: 'unluler' | 'kutuplu' | 'kutupsuz' | 'ligatur' | 'ozel';
  type?: 'kalın' | 'ince' | 'nötr' | 'çift-ses';
  pairWith?: string; // e.g. b1 pairs with b2
  exampleWord: string;
  exampleRunic: string;
  exampleMeaning: string;
  mnemonicHint: string;
}

export interface InscriptionLine {
  id: string;
  monument: string;
  section: string;
  line: number;
  runic: string;
  transcription: string;
  modernTurkish: string;
  historicalContext?: string;
}
