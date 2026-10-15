export interface SozlukWord {
  id: string;
  runic: string;
  transcription: string;
  meaning: string;
  category: 'temel' | 'devlet' | 'dogalguc' | 'askeri' | 'sayi';
  breakdown: string;
  source?: string;
}

export const SOZLUK: SozlukWord[] = [
  {
    id: 'tengri',
    runic: '𐱅𐰭𐰼𐰃',
    transcription: 'Teŋri',
    meaning: 'Gök Tanrı, ilahi gök',
    category: 'dogalguc',
    breakdown: '𐱅 (t²) + 𐰭 (ng) + 𐰼 (r²) + 𐰃 (i)',
    source: 'Kül Tigin G1'
  },
  {
    id: 'turuk',
    runic: '𐱅𐰇𐰼𐰜',
    transcription: 'Türük',
    meaning: 'Türk milleti, kudretli, güçlü',
    category: 'devlet',
    breakdown: '𐱅 (t²) + 𐰇 (ü) + 𐰼 (r²) + 𐰜 (ük/kü)',
    source: 'Kül Tigin D1'
  },
  {
    id: 'kagan',
    runic: '𐰴𐰍𐰣',
    transcription: 'Kağan',
    meaning: 'Hükümdar, imparator',
    category: 'devlet',
    breakdown: '𐰴 (k¹) + 𐰍 (g¹) + 𐰣 (n¹) [a ünlüleri kural gereği yazılmaz]',
    source: 'Kül Tigin G1'
  },
  {
    id: 'bilge',
    runic: '𐰋𐰃𐰠𐰏𐰀',
    transcription: 'Bilge',
    meaning: 'Akil, derin bilgiye sahip önder',
    category: 'devlet',
    breakdown: '𐰋 (b²) + 𐰃 (i) + 𐰠 (l²) + 𐰏 (g²) + 𐰀 (a/e)',
    source: 'Bilge Kağan D1'
  },
  {
    id: 'bodun',
    runic: '𐰉𐰆𐰑𐰣',
    transcription: 'Bodun',
    meaning: 'Millet, halk, boylar topluluğu',
    category: 'devlet',
    breakdown: '𐰉 (b¹) + 𐰆 (o/u) + 𐰑 (d¹) + 𐰣 (n¹)',
    source: 'Kül Tigin G1'
  },
  {
    id: 'il',
    runic: '𐰃𐰠',
    transcription: 'İl / El',
    meaning: 'Devlet, yurt, barış',
    category: 'devlet',
    breakdown: '𐰃 (i) + 𐰠 (l²)',
    source: 'Kül Tigin D1'
  },
  {
    id: 'er',
    runic: '𐰼',
    transcription: 'Er',
    meaning: 'Yiğit, er adam, asker',
    category: 'askeri',
    breakdown: '𐰼 (tek başına er tamgası)',
    source: 'Kül Tigin D2'
  },
  {
    id: 'ata',
    runic: '𐱃𐰀',
    transcription: 'Ata',
    meaning: 'Baba, ecdat',
    category: 'temel',
    breakdown: '𐱃 (t¹) + 𐰀 (a)',
    source: 'Tonyukuk 1'
  },
  {
    id: 'sub',
    runic: '𐰽𐰆𐰉',
    transcription: 'Sub / Suw',
    meaning: 'Su, ırmak',
    category: 'dogalguc',
    breakdown: '𐰽 (s¹) + 𐰆 (u) + 𐰉 (b¹)',
    source: 'Kül Tigin D3'
  },
  {
    id: 'altun',
    runic: '𐰞𐱃𐰆𐰣',
    transcription: 'Altun',
    meaning: 'Altın',
    category: 'temel',
    breakdown: '𐰞 (l¹) + 𐱃 (t¹) + 𐰆 (u) + 𐰣 (n¹)',
    source: 'Kül Tigin G4'
  },
  {
    id: 'kok',
    runic: '𐰚𐰜',
    transcription: 'Kök',
    meaning: 'Mavi renk, gökyüzü',
    category: 'dogalguc',
    breakdown: '𐰚 (k²) + 𐰜 (ök/ük)',
    source: 'Kül Tigin D1'
  },
  {
    id: 'edgu',
    runic: '𐰓𐰏𐰇',
    transcription: 'Edgü',
    meaning: 'İyi, hayırlı, güzel',
    category: 'temel',
    breakdown: '𐰓 (d²) + 𐰏 (g²) + 𐰇 (ü)',
    source: 'Kül Tigin G7'
  },
  {
    id: 'esen',
    runic: '𐰾𐰤',
    transcription: 'Esen',
    meaning: 'Sağlıklı, esen, salim',
    category: 'temel',
    breakdown: '𐰾 (s²) + 𐰤 (n²)',
    source: 'Tonyukuk'
  },
  {
    id: 'yagi',
    runic: '𐰖𐰍𐰃',
    transcription: 'Yağı',
    meaning: 'Düşman, hasım',
    category: 'askeri',
    breakdown: '𐰖 (y¹) + 𐰍 (g¹) + 𐰃 (ı)',
    source: 'Kül Tigin D2'
  },
  {
    id: 'adak',
    runic: '𐰑𐰴',
    transcription: 'Adak',
    meaning: 'Ayak',
    category: 'temel',
    breakdown: '𐰑 (d¹) + 𐰴 (k¹)',
    source: 'Tonyukuk'
  },
  {
    id: 'kildi',
    runic: '𐰴𐰃𐰡𐰃',
    transcription: 'Kıldı',
    meaning: 'Yaptı, eyledi',
    category: 'temel',
    breakdown: '𐰴 (k¹) + 𐰃 (ı) + 𐰡 (ld/lt) + 𐰃 (ı)',
    source: 'Kül Tigin D1'
  },
  {
    id: 'bir',
    runic: '𐰋𐰃𐰼',
    transcription: 'Bir',
    meaning: 'Bir (1 sayısı)',
    category: 'sayi',
    breakdown: '𐰋 (b²) + 𐰃 (i) + 𐰼 (r²)',
    source: 'Kül Tigin'
  },
  {
    id: 'otuz',
    runic: '𐰆𐱃𐰔',
    transcription: 'Otuz',
    meaning: 'Otuz (30 sayısı)',
    category: 'sayi',
    breakdown: '𐰆 (o) + 𐱃 (t¹) + 𐰔 (z)',
    source: 'Kül Tigin G1'
  },
  {
    id: 'kul',
    runic: '𐰸𐰆𐰞',
    transcription: 'Kul',
    meaning: 'Hizmetkar, tebaa, kul',
    category: 'devlet',
    breakdown: '𐰸 (ok/uk) + 𐰆 (u) + 𐰞 (l¹)',
    source: 'Kül Tigin D24'
  },
  {
    id: 'men',
    runic: '𐰢𐰤',
    transcription: 'Men',
    meaning: 'Ben (1. tekil kişi)',
    category: 'temel',
    breakdown: '𐰢 (m) + 𐰤 (n²)',
    source: 'Bilge Kağan'
  }
];
