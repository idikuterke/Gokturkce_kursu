export interface Badge {
  id: string;
  name: string;
  runicTitle: string; // e.g. 𐰼 / 𐰋𐰃𐰠𐰏𐰀 / 𐰉𐰆𐰑𐰣
  description: string;
  category: 'streak' | 'words' | 'xp' | 'lessons' | 'special';
  icon: string; // icon name for rendering
  targetValue: number;
  unlockedAt?: string;
  bonusXp: number;
}

export const BADGES: Badge[] = [
  // Streak Badges (Süreklilik Rozetleri)
  {
    id: 'streak_3',
    name: 'Kutlu Kıvılcım',
    runicTitle: '𐰆𐱃',
    description: '3 gün boyunca aralıksız Göktürkçe çalış',
    category: 'streak',
    icon: 'flame',
    targetValue: 3,
    bonusXp: 25
  },
  {
    id: 'streak_7',
    name: 'Bozkır Kurdu',
    runicTitle: '𐰋𐰇𐰼𐰃',
    description: '7 günlük kesintisiz öğrenme serisine (streak) ulaş',
    category: 'streak',
    icon: 'flame',
    targetValue: 7,
    bonusXp: 60
  },
  {
    id: 'streak_14',
    name: 'Bengü Ateş',
    runicTitle: '𐰢𐰭𐰏𐰇',
    description: '14 gün boyunca her gün tamga ve kitabe oku',
    category: 'streak',
    icon: 'flame',
    targetValue: 14,
    bonusXp: 150
  },
  {
    id: 'streak_30',
    name: 'Sonsuz Süreklilik',
    runicTitle: '𐰘𐰃𐰞',
    description: '30 günlük ulu öğrenme serisini tamamla',
    category: 'streak',
    icon: 'flame',
    targetValue: 30,
    bonusXp: 300
  },

  // Word Milestones (Kelime Haznesi Rozetleri)
  {
    id: 'words_5',
    name: 'İlk Sözler',
    runicTitle: '𐰽𐰇𐰔',
    description: 'Sözlükten veya derslerden ilk 5 kadim kelimeyi öğren',
    category: 'words',
    icon: 'book',
    targetValue: 5,
    bonusXp: 30
  },
  {
    id: 'words_15',
    name: 'Yazıt Kâtibi',
    runicTitle: '𐰋𐰃𐱅𐰃𐰏𐰲𐰃',
    description: '15 farklı Orhun kelimesini hafızana kazı',
    category: 'words',
    icon: 'book',
    targetValue: 15,
    bonusXp: 80
  },
  {
    id: 'words_25',
    name: 'Kadim Lügat',
    runicTitle: '𐱅𐰃𐰠',
    description: 'Sözlükteki 25 temel Göktürkçe kelimeyi kavra',
    category: 'words',
    icon: 'book',
    targetValue: 25,
    bonusXp: 150
  },
  {
    id: 'words_100',
    name: 'Yula & Kam Bilgesi',
    runicTitle: '𐰋𐰃𐰠𐰏𐰀',
    description: 'Toplam 100 kelime ve deyim bilgisine ulaş',
    category: 'words',
    icon: 'book',
    targetValue: 100,
    bonusXp: 500
  },

  // XP Milestones (Tecrübe Rozetleri)
  {
    id: 'xp_100',
    name: 'Toy Alp',
    runicTitle: '𐰼',
    description: '100 XP tecrübe puanına eriş',
    category: 'xp',
    icon: 'zap',
    targetValue: 100,
    bonusXp: 20
  },
  {
    id: 'xp_300',
    name: 'Tarkan Erdemi',
    runicTitle: '𐱃𐰺𐰴𐰣',
    description: '300 XP kazanarak savaşçı kumandan rütbesine yaklaş',
    category: 'xp',
    icon: 'zap',
    targetValue: 300,
    bonusXp: 75
  },
  {
    id: 'xp_600',
    name: 'Toygun Şerefi',
    runicTitle: '𐱃𐰆𐰖𐰍𐰣',
    description: '600 XP ile kurultay meclisinde söz sahibi ol',
    category: 'xp',
    icon: 'zap',
    targetValue: 600,
    bonusXp: 150
  },
  {
    id: 'xp_1000',
    name: 'Büyük Kağan',
    runicTitle: '𐰴𐰍𐰣',
    description: '1000 XP eşiğini aşarak efsanevi lider unvanını kazan',
    category: 'xp',
    icon: 'zap',
    targetValue: 1000,
    bonusXp: 350
  },

  // Lesson Milestones (Ders & Müfredat Rozetleri)
  {
    id: 'lesson_1',
    name: 'İlk Tamga',
    runicTitle: '𐰀',
    description: 'İlk Göktürkçe dersini başarıyla tamamla',
    category: 'lessons',
    icon: 'award',
    targetValue: 1,
    bonusXp: 20
  },
  {
    id: 'lesson_3',
    name: 'Tamga Çözücü',
    runicTitle: '𐱃𐰢𐰍𐰀',
    description: '3 ders modülünü tamamla',
    category: 'lessons',
    icon: 'award',
    targetValue: 3,
    bonusXp: 50
  },
  {
    id: 'lesson_6',
    name: 'Bengü Taş Okuru',
    runicTitle: '𐰋𐰭𐰇',
    description: '6 farklı yazıt ve gramer dersini hatmet',
    category: 'lessons',
    icon: 'award',
    targetValue: 6,
    bonusXp: 120
  }
];
