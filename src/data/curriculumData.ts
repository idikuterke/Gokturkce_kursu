import { Unit } from '../types';

export const UNITS: Unit[] = [
  {
    id: 'unit-1',
    number: 1,
    title: 'Tamgaların Doğuşu',
    subtitle: 'Yazım Yönü ve 4 Ünlü Tamga',
    description: 'Göktürk yazısının sağdan sola doğası ve 8 sesi karşılayan 4 ana ünlü damgayı öğrenin.',
    accentColor: 'from-marka to-[#1E8A8A]',
    lessons: [
      {
        id: 'lesson-1-1',
        unitId: 'unit-1',
        title: 'Yazı Yönü & A/E Tamgası',
        subtitle: 'İlk adım: Taş kitabelerde sağdan sola akış',
        iconName: 'Compass',
        type: 'standard',
        xp: 15,
        exercises: [
          {
            id: 'ex-1-1-1',
            type: 'choice',
            prompt: 'Göktürk yazıtları hangi yönde okunur ve yazılır?',
            subprompt: 'Orhun bozkırındaki bengü taşların oyuluş mantığını hatırlayın.',
            options: ['Soldan Sağa', 'Sağdan Sola', 'Yukarıdan Aşağıya Yalnızca', 'Dairesel'],
            correctAnswer: 'Sağdan Sola',
            explanation: 'Doğru! Göktürk yazısı geleneksel olarak sağdan sola (veya yukarıdan aşağıya satırlarla) okunur.'
          },
          {
            id: 'ex-1-1-2',
            type: 'choice',
            prompt: 'Aşağıdaki tamgalardan hangisi "A / E" sesini verir?',
            options: ['𐰀', '𐰃', '𐰆', '𐰇'],
            correctAnswer: '𐰀',
            explanation: 'Harika! 𐰀 tamgası kelime başında veya sonunda açık a ve e seslerini temsil eder.'
          },
          {
            id: 'ex-1-1-3',
            type: 'pair_match',
            prompt: 'Tamgaları karşılık gelen seslerle eşleştirin:',
            pairs: [
              { rune: '𐰀', sound: 'A / E' },
              { rune: '𐰃', sound: 'I / İ' },
              { rune: '𐰆', sound: 'O / U' },
              { rune: '𐰇', sound: 'Ö / Ü' }
            ],
            explanation: 'Muhteşem! 4 ünlü tamga tam 8 ses değerini kapsar.'
          },
          {
            id: 'ex-1-1-4',
            type: 'word_builder',
            prompt: 'Tamgaları SAĞDAN SOLA dizerek "ata" (baba) kelimesini oluşturun:',
            subprompt: 'Türkçede ata: 𐱃 (t¹) + 𐰀 (a)',
            targetWord: {
              latin: 'ata',
              meaning: 'baba, ata',
              rune: '𐱃𐰀',
              tokens: ['𐱃', '𐰀']
            },
            explanation: 'Tebrikler! 𐱃 (kalın t) ve 𐰀 (a) birleşerek 𐱃𐰀 (ata) kelimesini oluşturur.'
          }
        ]
      },
      {
        id: 'lesson-1-2',
        unitId: 'unit-1',
        title: 'I/İ, O/U ve Ö/Ü Tamgaları',
        subtitle: 'Kalan ünlüleri ve yuvarlak ünlü mantığını kavrayın',
        iconName: 'Sparkles',
        type: 'standard',
        xp: 20,
        exercises: [
          {
            id: 'ex-1-2-1',
            type: 'choice',
            prompt: '"𐰆" damgası hangi sesleri karşılar?',
            runePrompt: '𐰆',
            options: ['O / U', 'Ö / Ü', 'A / E', 'I / İ'],
            correctAnswer: 'O / U',
            explanation: 'Doğru! 𐰆 damgası kalın yuvarlak ünlüler olan O ve U seslerini verir.'
          },
          {
            id: 'ex-1-2-2',
            type: 'choice',
            prompt: 'Hangisi ince yuvarlak ünlüleri (Ö / Ü) temsil eder?',
            options: ['𐰇', '𐰆', '𐰃', '𐰀'],
            correctAnswer: '𐰇',
            explanation: 'Tam isabet! 𐰇 damgası Ö ve Ü seslerini temsil eder.'
          },
          {
            id: 'ex-1-2-3',
            type: 'cloze',
            prompt: '"Bir" (𐰋𐰃𐰼) kelimesindeki eksik ünlü tamgasını yerleştirin:',
            clozeSentence: {
              preRune: '𐰋',
              missingRune: '𐰃',
              postRune: '𐰼',
              fullMeaning: 'Bir (1 sayısı)',
              latin: 'b² + i + r²'
            },
            options: ['𐰃', '𐰀', '𐰆', '𐰇'],
            correctAnswer: '𐰃',
            explanation: 'Harika! 𐰋 (b²) + 𐰃 (i) + 𐰼 (r²) = 𐰋𐰃𐰼 (bir).'
          }
        ]
      },
      {
        id: 'lesson-1-review',
        unitId: 'unit-1',
        title: '1. Aşama Ustalık Sandığı',
        subtitle: 'Tüm ünlüleri pekiştirin ve ilk rütbenizi kazanın',
        iconName: 'Trophy',
        type: 'exam',
        xp: 30,
        exercises: [
          {
            id: 'ex-1-r-1',
            type: 'pair_match',
            prompt: '4 Ünlü tamgayı eksiksiz eşleştirin:',
            pairs: [
              { rune: '𐰀', sound: 'A / E' },
              { rune: '𐰃', sound: 'I / İ' },
              { rune: '𐰆', sound: 'O / U' },
              { rune: '𐰇', sound: 'Ö / Ü' }
            ]
          },
          {
            id: 'ex-1-r-2',
            type: 'identify_rule',
            prompt: 'Göktürkçede neden 8 ses için yalnızca 4 ünlü damga vardır?',
            options: [
              'Çünkü yanındaki ünsüzün kalın ya da ince olması ünlünün niteliğini belirler (Kutupluluk kuralı).',
              'Eski Türkler diğer 4 sesi telaffuz edemiyordu.',
              'Taşta yer kalmadığı için sonradan silindi.',
              'Sadece sesli harflerle yazmak yasaktı.'
            ],
            correctAnswer: 'Çünkü yanındaki ünsüzün kalın ya da ince olması ünlünün niteliğini belirler (Kutupluluk kuralı).',
            explanation: 'Muazzam bir dilbilgisi tespiti! Kutuplu ünsüzler (b¹, b², k¹, k²) ünlünün kalın mı ince mi olduğunu kendiliğinden gösterir.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    number: 2,
    title: 'Kutuplu Ünsüzler Dünyası',
    subtitle: 'Kalın ve İnce Damga Çiftleri',
    description: 'Türkçenin ünlü uyumunu taşa nakşeden kutuplu ünsüzleri (b¹, b², d¹, d², k¹, k², g¹, g²) keşfedin.',
    accentColor: 'from-bilgi to-[#1D4ED8]',
    lessons: [
      {
        id: 'lesson-2-1',
        unitId: 'unit-2',
        title: 'B ve D Çiftleri (b¹-b², d¹-d²)',
        subtitle: 'Kalınlık ve incelik uyumunu kavrayın',
        iconName: 'Layers',
        type: 'standard',
        xp: 20,
        exercises: [
          {
            id: 'ex-2-1-1',
            type: 'choice',
            prompt: '"Bodun" (millet) kelimesi kalın ünlülü olduğuna göre hangi B tamgasıyla başlar?',
            options: ['𐰉 (b¹)', '𐰋 (b²)', '𐰑 (d¹)', '𐰓 (d²)'],
            correctAnswer: '𐰉 (b¹)',
            explanation: 'Doğru! 𐰉 damgası kalın B (b¹) olup a, ı, o, u sesleriyle hecelenir.'
          },
          {
            id: 'ex-2-1-2',
            type: 'choice',
            prompt: '"Bilge" kelimesi ince ünlülü olduğuna göre hangi B ve D tamgaları kullanılır?',
            options: ['𐰋 (b²) ince B', '𐰉 (b¹) kalın B', '𐰑 (d¹) kalın D', '𐰴 (k¹) kalın K'],
            correctAnswer: '𐰋 (b²) ince B',
            explanation: 'Harika! Bilge ince ünlü olduğu için 𐰋 (b²) damgası ile yazılır: 𐰋𐰃𐰠𐰏𐰀.'
          },
          {
            id: 'ex-2-1-3',
            type: 'pair_match',
            prompt: 'Kutuplu damga çiftlerini eşleştirin:',
            pairs: [
              { rune: '𐰉', sound: 'b¹ (Kalın B)' },
              { rune: '𐰋', sound: 'b² (İnce B)' },
              { rune: '𐰑', sound: 'd¹ (Kalın D)' },
              { rune: '𐰓', sound: 'd² (İnce D)' }
            ]
          },
          {
            id: 'ex-2-1-4',
            type: 'word_builder',
            prompt: 'Tamgaları birleştirerek "edgü" (iyi) sözcüğünü kurun:',
            subprompt: 'İnce ünsüzler: 𐰓 (d²) + 𐰏 (g²) + 𐰇 (ü)',
            targetWord: {
              latin: 'edgü',
              meaning: 'iyi, hayırlı',
              rune: '𐰓𐰏𐰇',
              tokens: ['𐰓', '𐰏', '𐰇']
            },
            explanation: 'Mükemmel! 𐰓 (d²) + 𐰏 (g²) + 𐰇 (ü) = 𐰓𐰏𐰇 (edgü).'
          }
        ]
      },
      {
        id: 'lesson-2-2',
        unitId: 'unit-2',
        title: 'K ve G Çiftleri (k¹-k², g¹-g²)',
        subtitle: 'En sık kullanılan iki anahtar ses',
        iconName: 'Shield',
        type: 'standard',
        xp: 20,
        exercises: [
          {
            id: 'ex-2-2-1',
            type: 'choice',
            prompt: '"Kağan" kelimesindeki ilk harf hangisidir?',
            options: ['𐰴 (k¹)', '𐰚 (k²)', '𐰍 (g¹)', '𐰏 (g²)'],
            correctAnswer: '𐰴 (k¹)',
            explanation: 'Doğru! Kağan kalın bir kelimedir; 𐰴 (k¹) ile başlar.'
          },
          {
            id: 'ex-2-2-2',
            type: 'pair_match',
            prompt: 'K ve G damgalarını doğru seslerle eşleştirin:',
            pairs: [
              { rune: '𐰴', sound: 'k¹ (Kalın K)' },
              { rune: '𐰚', sound: 'k² (İnce K)' },
              { rune: '𐰍', sound: 'g¹ (Kalın G/Ğ)' },
              { rune: '𐰏', sound: 'g² (İnce G)' }
            ]
          },
          {
            id: 'ex-2-2-3',
            type: 'word_builder',
            prompt: 'Tamgaları dizerek "kagan" (kağan) kelimesini oluşturun:',
            subprompt: 'İmla kuralı: 𐰴 (k¹) + 𐰍 (g¹) + 𐰣 (n¹)',
            targetWord: {
              latin: 'kagan',
              meaning: 'hükümdar, kağan',
              rune: '𐰴𐰍𐰣',
              tokens: ['𐰴', '𐰍', '𐰣']
            },
            explanation: 'Bravo! A ünlüleri yazılmaksızın 𐰴𐰍𐰣 şeklinde taşlara kazınmıştır!'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-3',
    number: 3,
    title: 'Hece Damgaları ve Kutupsuz Sesler',
    subtitle: 'Ligatürler ve Taş Tasarrufu',
    description: 'Eski Türk taş ustalarının tek vuruşta iki sesi birden yazmasını sağlayan mucizevi ligatürler (ok, ök, ık, iç, nd, ld, nç).',
    accentColor: 'from-altin to-[#967425]',
    lessons: [
      {
        id: 'lesson-3-1',
        unitId: 'unit-3',
        title: 'Çift Sesli Ok / Ök / Ik / İç Damgaları',
        subtitle: 'Hem harf hem sembol: Ok biçimindeki tamga',
        iconName: 'Zap',
        type: 'standard',
        xp: 25,
        exercises: [
          {
            id: 'ex-3-1-1',
            type: 'choice',
            prompt: 'Görseli yay ve oka benzeyen "𐰸" damgası hangi sesi verir?',
            runePrompt: '𐰸',
            options: ['OK / UK (veya KO / KU)', 'ÖK / ÜK', 'IK / KI', 'İÇ / Çİ'],
            correctAnswer: 'OK / UK (veya KO / KU)',
            explanation: 'Harika! 𐰸 tamgası resimsel olarak doğrudan bir oktur ve ok/uk hecesini okutur.'
          },
          {
            id: 'ex-3-1-2',
            type: 'pair_match',
            prompt: 'Çift sesli hece damgalarını eşleştirin:',
            pairs: [
              { rune: '𐰸', sound: 'OK / UK' },
              { rune: '𐰜', sound: 'ÖK / ÜK' },
              { rune: '𐰶', sound: 'IK / KI' },
              { rune: '𐰱', sound: 'İÇ / Çİ' }
            ]
          },
          {
            id: 'ex-3-1-3',
            type: 'word_builder',
            prompt: '"Kök" (mavi/gök) kelimesini oluşturun:',
            subprompt: 'İnce k (𐰚) ve ök/ük ligatürü (𐰜)',
            targetWord: {
              latin: 'kök',
              meaning: 'gök, mavi',
              rune: '𐰚𐰜',
              tokens: ['𐰚', '𐰜']
            },
            explanation: 'Muhteşem! 𐰚 (k²) + 𐰜 (ök/ük) = 𐰚𐰜 (kök).'
          }
        ]
      },
      {
        id: 'lesson-3-2',
        unitId: 'unit-3',
        title: 'Birleşik Ünsüz Damgaları (ND, LD, NÇ)',
        subtitle: 'Taşta yer tasarrufu sağlayan çift ünsüzler',
        iconName: 'Link',
        type: 'standard',
        xp: 25,
        exercises: [
          {
            id: 'ex-3-2-1',
            type: 'choice',
            prompt: '"𐰡" damgası hangi ünsüz kümesini karşılar?',
            runePrompt: '𐰡',
            options: ['LD / LT', 'ND / NT', 'NÇ / NC', 'OK / UK'],
            correctAnswer: 'LD / LT',
            explanation: 'Doğru! 𐰡 damgası "kıldı" (𐰴𐰃𐰡𐰃) veya "aldı" gibi fiillerde LD sesini verir.'
          },
          {
            id: 'ex-3-2-2',
            type: 'choice',
            prompt: '"And" (ant, yemin) kelimesi tek bir damgayla yazılabilir. O damga hangisidir?',
            options: ['𐰦 (ND/NT)', '𐰡 (LD/LT)', '𐰨 (NÇ/NC)', '𐰸 (OK/UK)'],
            correctAnswer: '𐰦 (ND/NT)',
            explanation: 'Mükemmel! 𐰦 tamgası tek başına "and" (ant, yemin) olarak okunur.'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-4',
    number: 4,
    title: 'Bengü Taş İmla Kuralları',
    subtitle: 'Ünlü Düşmeleri ve Sözcük Çözümleme',
    description: '13 temel Orhun imla kuralı. İlk hecede a/e ünlüsünün yazılmaması ve kelime birleştirme sanatını öğrenin.',
    accentColor: 'from-basari to-[#15803D]',
    lessons: [
      {
        id: 'lesson-4-1',
        unitId: 'unit-4',
        title: 'İlk Hecede Ünlü Kuralı',
        subtitle: 'Taş kitabelerde a ve e sesleri neden yazılmaz?',
        iconName: 'BookOpen',
        type: 'standard',
        xp: 25,
        exercises: [
          {
            id: 'ex-4-1-1',
            type: 'identify_rule',
            prompt: '"Esen" (𐰾𐰤) kelimesinde neden hiç ünlü harf yazılmamıştır?',
            options: [
              'İlk hecedeki e sesi ünsüz damganın içinde içerildiğinden (s² = se/es) ve ikinci hecedeki e de bilindiğinden yazılmaz.',
              'Taş yontucusu unutmuştur.',
              'Esen kelimesi yabancı kökenlidir.',
              'Ünlüler sadece sonda yazılır.'
            ],
            correctAnswer: 'İlk hecedeki e sesi ünsüz damganın içinde içerildiğinden (s² = se/es) ve ikinci hecedeki e de bilindiğinden yazılmaz.',
            explanation: 'Doğru! 𐰾 (es/se) ve 𐰤 (en/ne) damgaları yan yana gelince doğrudan "esen" okunur.'
          },
          {
            id: 'ex-4-1-2',
            type: 'word_builder',
            prompt: 'Kutsal "Tengri" (𐱅𐰭𐰼𐰃) sözcüğünü doğru damgalarla kurun:',
            subprompt: '𐱅 (t²) + 𐰭 (ng) + 𐰼 (r²) + 𐰃 (i)',
            targetWord: {
              latin: 'tengri',
              meaning: 'Gök Tanrı',
              rune: '𐱅𐰭𐰼𐰃',
              tokens: ['𐱅', '𐰭', '𐰼', '𐰃']
            },
            explanation: 'Muazzam! 𐱅𐰭𐰼𐰃 — Türklerin tek ve yüce Gök Tanrısı.'
          },
          {
            id: 'ex-4-1-3',
            type: 'word_builder',
            prompt: '"Türük" (Türk) sözcüğünü oluşturun:',
            subprompt: '𐱅 (t²) + 𐰇 (ü) + 𐰼 (r²) + 𐰜 (ük/kü)',
            targetWord: {
              latin: 'türük',
              meaning: 'Türk milleti, kudretli',
              rune: '𐱅𐰇𐰼𐰜',
              tokens: ['𐱅', '𐰇', '𐰼', '𐰜']
            },
            explanation: 'İşte tarihimizin altın kelimesi: 𐱅𐰇𐰼𐰜 (Türük)!'
          }
        ]
      }
    ]
  },
  {
    id: 'unit-5',
    number: 5,
    title: 'Orhun Grameri & Kitabe Çözümleme',
    subtitle: 'Kül Tigin ve Tonyukuk Yazıtları',
    description: 'İleri seviye dil öğrenimi: İsim hal ekleri (-da, -ka), iyelik ekleri ve gerçek bengü taş cümlelerini tercüme etme.',
    accentColor: 'from-[#8B5CF6] to-[#6D28D9]',
    lessons: [
      {
        id: 'lesson-5-1',
        unitId: 'unit-5',
        title: 'Ekler: Yönelme (-ka/-ke) ve Bulunma (-da/-de)',
        subtitle: 'Cümle kurmaya giden gramer anahtarı',
        iconName: 'Code',
        type: 'standard',
        xp: 30,
        exercises: [
          {
            id: 'ex-5-1-1',
            type: 'choice',
            prompt: '"Teŋride" (Tanrı\'da / Tanrı katından) kelimesindeki bulunma eki hangisidir?',
            options: [
              '-da / -de (𐰑𐰀 / 𐰓𐰀)',
              '-ka / -ke (𐰴𐰀 / 𐰚𐰀)',
              '-dın / -din (𐰑𐰣 / 𐰓𐰤)',
              '-nı / -ni (𐰣𐰃 / 𐰤𐰃)'
            ],
            correctAnswer: '-da / -de (𐰑𐰀 / 𐰓𐰀)',
            explanation: 'Doğru! Orhun Türkçesinde bulunma ve ayrılma görevini -da/-de eki üstlenir. Ekin tek bir yazımı yoktur: ünsüzler kalın/ince çifti olduğu için kelimenin ünlü uyumuna göre seçilir. "Teŋride" ince sıradan olduğu için ince d² tamgası kullanılır: 𐱅𐰭𐰼𐰃 + 𐰓𐰀. Kalın sıradan bir kelimede ise kalın d¹ ile 𐰑𐰀 yazılırdı (örn. "kaganda").'
          },
          {
            id: 'ex-5-1-2',
            type: 'translation',
            prompt: 'Kül Tigin güney yüzündeki bu ünlü cümleyi Türkçeye çevirin:',
            translationData: {
              runicText: '𐱅𐰭𐰼𐰃 : 𐱅𐰏 : 𐱅𐰭𐰼𐰃𐰓𐰀 : 𐰉𐰆𐰞𐰢𐱁 : 𐱅𐰇𐰼𐰜 : 𐰋𐰃𐰠𐰏𐰀 : 𐰴𐰍𐰣 :',
              transcription: 'Teŋri teg teŋride bolmış Türk Bilge Kağan',
              correctWords: ['Tanrı', 'gibi', 'Tanrı\'dan', 'olmuş', 'Türk', 'Bilge', 'Kağan'],
              wordPool: ['Tanrı', 'gibi', 'Tanrı\'dan', 'olmuş', 'Türk', 'Bilge', 'Kağan', 'asker', 'devlet', 'su']
            },
            explanation: 'Muazzam! "Tanrı gibi Tanrı\'dan olmuş Türk Bilge Kağan" — Türk hitabet sanatının zirvesi.'
          },
          {
            id: 'ex-5-1-3',
            type: 'translation',
            prompt: 'Bilge Kağan\'ın halkına seslenişini tercüme edin:',
            translationData: {
              runicText: '𐰇𐰔𐰀 : 𐱅𐰭𐰼𐰃 : 𐰉𐰽𐰢𐰽𐰺 : 𐰽𐰺𐰀 : 𐰘𐰃𐰼 : 𐱅𐰠𐰤𐰢𐰾𐰼 :',
              transcription: 'Üze teŋri basmasar, asra yer telinmeser',
              correctWords: ['Üstte', 'gök', 'çökmedikçe', 'altta', 'yer', 'delinmedikçe'],
              wordPool: ['Üstte', 'gök', 'çökmedikçe', 'altta', 'yer', 'delinmedikçe', 'dağlar', 'ırmak', 'düşman']
            },
            explanation: 'Tarihe geçen o kutlu söz: "Üstte gök çökmedikçe, altta yer delinmedikçe Türk milletini kim yıkabilirdi?"'
          }
        ]
      },
      {
        id: 'lesson-5-exam',
        unitId: 'unit-5',
        title: 'Büyük Kağanlık Sınavı',
        subtitle: 'Bengü taşların sırrını çözün ve Bilge Kağan rütbesine yükselin',
        iconName: 'Award',
        type: 'exam',
        xp: 50,
        exercises: [
          {
            id: 'ex-5-e-1',
            type: 'pair_match',
            prompt: 'Tarihi kelimeleri anlamlarıyla eşleştirin:',
            pairs: [
              { rune: '𐱅𐰭𐰼𐰃', sound: 'Gök Tanrı' },
              { rune: '𐰴𐰍𐰣', sound: 'Hükümdar / Kağan' },
              { rune: '𐰉𐰆𐰑𐰣', sound: 'Millet / Halk' },
              { rune: '𐰃𐰠', sound: 'Devlet / Yurt' }
            ]
          },
          {
            id: 'ex-5-e-2',
            type: 'word_builder',
            prompt: 'Bilge Kağan\'ın adını tamgalarla yazın:',
            subprompt: '𐰋𐰃𐰠𐰏𐰀 (Bilge) + 𐰴𐰍𐰣 (Kağan)',
            targetWord: {
              latin: 'bilge kagan',
              meaning: 'Bilge Kağan',
              rune: '𐰋𐰃𐰠𐰏𐰀:𐰴𐰍𐰣',
              tokens: ['𐰋𐰃𐰠𐰏𐰀', ':', '𐰴𐰍𐰣']
            },
            explanation: 'Tebrikler! Büyük Kağanlık Sınavı\'nı başarıyla tamamladınız!'
          }
        ]
      }
    ]
  }
];
