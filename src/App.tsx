import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { LearningPath } from './components/LearningPath';
import { LessonModal } from './components/LessonModal';
import { DailyQuestsModal } from './components/DailyQuestsModal';
import { QuestToast } from './components/QuestToast';
import { CelebrationBanner } from './components/CelebrationBanner';
import { UNITS } from './data/curriculumData';
import { Lesson, UserProgress, DailyQuest, QuestCategory, TamgaItem, OgrenciProfili } from './types';
import { Badge } from './data/badgesData';
import { playSuccessSound, playVictoryFanfare } from './utils/audio';
import { ensureDailyQuests, updateQuestProgressInState } from './utils/dailyQuests';
import { formatDateToKey, getInitialActivityHistory, yeniSeri } from './utils/statsUtils';
import { sonucGonder, kuyrukTasi } from './utils/sonucGonder';
import { useCloudProgress } from './hooks/useCloudProgress';
import { AuthModal } from './components/AuthModal';
import { GirisKapisi } from './components/GirisKapisi';
import { uretilmisKusaklar } from './data/generated/kusakKur';
import { gundelikKusaklar } from './data/generated/gundelikKusak';
import { sayiKusaklar } from './data/generated/sayiKusak';
import { kursBirimKusaklari } from './data/generated/kursBirimleri';
import { GIZLILIK_URL, KULLANIM_URL } from './data/yasal';

// Acilista yalnizca "Ogren" sekmesi gorunur. Digerleri ayri parcalara
// bolunup ilk acildiklarinda yuklenir; boylece recharts gibi agir
// bagimliliklar ilk yuklemeyi yavaslatmaz.
const AlistirmaView = lazy(() =>
  import('./components/AlistirmaView').then(m => ({ default: m.AlistirmaView }))
);
const KesfetView = lazy(() =>
  import('./components/KesfetView').then(m => ({ default: m.KesfetView }))
);
const IstatistiklerView = lazy(() =>
  import('./components/IstatistiklerView').then(m => ({ default: m.IstatistiklerView }))
);

const TabYukleniyor = () => (
  <div className="flex items-center justify-center py-24 text-sm text-metin-3">
    <span className="w-4 h-4 mr-3 rounded-full border-2 border-marka border-t-transparent animate-spin" />
    Yükleniyor...
  </div>
);

const STORAGE_KEY = 'gokturkce_progress_v1';
// İhtiyaç analizi yanıtları ilerlemeden AYRI dosyada: beyan ilerleme değil.
const PROFIL_KEY = 'gokturkce_profil_v1';

const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 1,
  hearts: 5,
  maxHearts: 5,
  lastActiveDate: new Date().toISOString(),
  completedLessons: {},
  rank: 'Er',
  dailyQuests: ensureDailyQuests(),
  // Hiçbir sözcük önceden "öğrenilmiş" sayılmaz; grafik de boş başlar.
  // Eskiden üç sözcük işaretli, grafik örnek veriyle doluydu.
  learnedWords: {},
  activityHistory: getInitialActivityHistory()
};

/**
 * Eski sürüm, yeni kullanıcıya örnek etkinlik geçmişi ve üç "öğrenilmiş"
 * sözcük yazıyordu. O veri tarayıcılarda duruyor. Hiç ders bitirmemiş ve
 * hiç XP kazanmamış bir profilde geçmişte ne varsa uydurmadır: temizlenir.
 * Gerçek ilerlemesi olan kullanıcıya dokunulmaz.
 */
const temizlenmisBaslangic = (parsed: Partial<UserProgress>): Partial<UserProgress> => {
  const dokunulmamis =
    !parsed.xp && Object.keys(parsed.completedLessons ?? {}).length === 0;
  if (!dokunulmamis) return {};
  return { activityHistory: getInitialActivityHistory(), learnedWords: {}, streak: 1 };
};

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>(() => {
    try {
      const savedTab = localStorage.getItem('gokturkce_active_tab');
      if (savedTab) return savedTab;
    } catch {
      // ignore
    }
    return 'ogren';
  });

  const [selectedDrawingTamga, setSelectedDrawingTamga] = useState<TamgaItem | undefined>(undefined);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  // İhtiyaç analizi: yoksa giriş kapısı açılır, varsa yol ona göre kurulur.
  const [profil, setProfil] = useState<OgrenciProfili | null>(() => {
    try {
      const kayit = localStorage.getItem(PROFIL_KEY);
      return kayit ? (JSON.parse(kayit) as OgrenciProfili) : null;
    } catch {
      return null;
    }
  });
  const [girisAcik, setGirisAcik] = useState(false);
  // Elle yazılmış 5 aşamanın ardına eklenen, korpustan üretilmiş kuşaklar.
  // Ayrı parçada; öğrenme yolu açılınca iniyor. İnmezse yol elle yazılmış
  // içerikle sorunsuz çalışmaya devam eder.
  const [uretilmisUniteler, setUretilmisUniteler] = useState<typeof UNITS>([]);
  // Gündelik üniteler ALFABEDEN SONRA, kitabeden önce: tamgalar
  // öğrenildikten sonra bilinen sözcüklerle pekiştirilir.
  const [gundelikUniteler, setGundelikUniteler] = useState<typeof UNITS>([]);
  // Sayı modülü gündelikten SONRA, kitabeden önce: Orhon sayı mantığı
  // (eki yegirmi = 12) bilinmeden kitabedeki tarihler yanlış okunur.
  const [sayiUniteleri, setSayiUniteleri] = useState<typeof UNITS>([]);
  // Dereceli yazıt birimleri yolun EN SONUNDA: tamlama → cümlecik →
  // paragraf. Tek sözcük okumayı bitiren buradan gerçek pasajlara geçer.
  const [kursBirimleri, setKursBirimleri] = useState<typeof UNITS>([]);

  useEffect(() => {
    let iptal = false;
    uretilmisKusaklar()
      .then((u) => { if (!iptal) setUretilmisUniteler(u); })
      .catch(() => { /* yol elle yazılmış içerikle çalışır */ });
    gundelikKusaklar()
      .then((u) => { if (!iptal) setGundelikUniteler(u); })
      .catch(() => { /* gündelik modül isteğe bağlı */ });
    sayiKusaklar()
      .then((u) => { if (!iptal) setSayiUniteleri(u); })
      .catch(() => { /* sayı modülü isteğe bağlı */ });
    kursBirimKusaklari()
      .then((u) => { if (!iptal) setKursBirimleri(u); })
      .catch(() => { /* dereceli birimler isteğe bağlı */ });
    return () => { iptal = true; };
  }, []);

  // ÖĞRENME YOLU SIRASI
  //
  //   1) ALFABE   — elle yazılmış unit-1..4: bütün tamgalar, kutuplu
  //                 ünsüzler, hece damgaları, imla kuralları.
  //   2) GÜNDELİK — öğrenilen tamgalarla bugünün Türkçesi (sayı, renk,
  //                 hayvan…). Harf biliniyor, sözcük zaten biliniyor:
  //                 sadece yazım çalışılır.
  //   3) SAYI     — Orhon sayı sistemi (Tekin §280-290). Bugünkünden
  //                 farklı: *eki yegirmi* 22 değil 12. Bilinmezse
  //                 kitabedeki her tarih yanlış okunur.
  //   4) KİTABE   — unit-5 (gramer + kitabe çözümleme) ve korpustan
  //                 üretilen kuşaklar.
  //   5) BİRİMLER — Tekin 1998'den dereceli gerçek pasajlar:
  //                 tamlama → cümlecik → paragraf.
  //
  // Önceki sıra gündelik'i en başa koyuyordu: harfleri görmeden sözcük
  // yazdırıyordu. Alfabe önce gelmeli.
  const alfabeUniteleri = useMemo(
    () => UNITS.filter((u) => u.id !== 'unit-5'),
    []
  );
  const kitabeGirisi = useMemo(
    () => UNITS.filter((u) => u.id === 'unit-5'),
    []
  );

  const tumUniteler = useMemo(
    () =>
      [
        ...alfabeUniteleri,
        ...gundelikUniteler,
        ...sayiUniteleri,
        ...kitabeGirisi,
        ...uretilmisUniteler,
        ...kursBirimleri
      ].map((u, i) => ({ ...u, number: i + 1 })),
    [alfabeUniteleri, gundelikUniteler, sayiUniteleri, kitabeGirisi, uretilmisUniteler, kursBirimleri]
  );

  /**
   * Beyan edilen aşamaya kadarki ünitelerin kimlikleri. Ders sırası
   * konumla (number) değil aşamayla belirleniyor: üretilmiş kuşaklar
   * sonradan indiği için numaralar kayıyor, aşama kaymıyor.
   *
   * Açmak tamamlamak değildir: bu üniteler kilitsiz görünür ama hiçbiri
   * "bitti" sayılmaz, XP getirmez.
   */
  const beyanlaAcilan = useMemo(() => {
    if (!profil || profil.baslangic === 'alfabe') return {} as Record<string, boolean>;
    const asamalar: { ad: OgrenciProfili['baslangic']; uniteler: typeof UNITS }[] = [
      { ad: 'alfabe', uniteler: alfabeUniteleri },
      { ad: 'gundelik', uniteler: gundelikUniteler },
      { ad: 'sayi', uniteler: sayiUniteleri },
      { ad: 'kitabe', uniteler: kitabeGirisi },
    ];
    const sinir = asamalar.findIndex((a) => a.ad === profil.baslangic);
    const acik: Record<string, boolean> = {};
    // Beyan edilen aşama DAHİL açılır; öğrenci oradan başlar.
    for (const a of asamalar.slice(0, sinir + 1))
      for (const u of a.uniteler) acik[u.id] = true;
    return acik;
  }, [profil, alfabeUniteleri, gundelikUniteler, sayiUniteleri, kitabeGirisi]);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    try {
      localStorage.setItem('gokturkce_active_tab', tab);
    } catch {
      // ignore
    }
  };

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isQuestsModalOpen, setIsQuestsModalOpen] = useState(false);
  const [toastQuest, setToastQuest] = useState<DailyQuest | null>(null);
  const [activeCelebration, setActiveCelebration] = useState<{
    type: 'rank' | 'badge';
    title: string;
    subtitle: string;
    runicSymbol?: string;
    badge?: Badge;
  } | null>(null);

  // Load progress from localStorage or default
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          ...temizlenmisBaslangic(parsed),
          dailyQuests: ensureDailyQuests(parsed.dailyQuests)
        };
      }
    } catch {
      // ignore
    }
    return INITIAL_PROGRESS;
  });

  // Ensure daily quests are refreshed if day changed while app is open
  useEffect(() => {
    setProgress(prev => {
      const ensured = ensureDailyQuests(prev.dailyQuests);
      if (ensured.date !== prev.dailyQuests?.date) {
        return { ...prev, dailyQuests: ensured };
      }
      return prev;
    });
  }, []);

  // Oturum acikken ilerlemeyi buluta da tasi (yerel kayit hizli yol olarak kalir)
  useCloudProgress(progress, setProgress);

  // Çevrimdışı kalan sınav sonuçlarını yeniden göndermeye çalış (ağ varken)
  useEffect(() => {
    kuyrukTasi();
  }, []);

  // Persist progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Rank calculator helper
  const calculateRank = (xp: number): 'Er' | 'Çor' | 'Tarkan' | 'Toygun' | 'Bilge' | 'Kağan' => {
    if (xp >= 500) return 'Kağan';
    if (xp >= 320) return 'Bilge';
    if (xp >= 200) return 'Toygun';
    if (xp >= 120) return 'Tarkan';
    if (xp >= 50) return 'Çor';
    return 'Er';
  };

  // Helper to record daily activity into history
  const recordActivity = (xpGained = 0, lessonsGained = 0, wordsGained = 0) => {
    const todayKey = formatDateToKey(new Date());
    const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
    const dayName = dayNames[new Date().getDay()];

    setProgress(prev => {
      const history = prev.activityHistory ? { ...prev.activityHistory } : getInitialActivityHistory();
      const currentDay = history[todayKey] || {
        date: todayKey,
        dayName,
        xp: 0,
        lessonsCompleted: 0,
        wordsLearned: 0
      };

      history[todayKey] = {
        ...currentDay,
        xp: currentDay.xp + xpGained,
        lessonsCompleted: currentDay.lessonsCompleted + lessonsGained,
        wordsLearned: currentDay.wordsLearned + wordsGained
      };

      // Seri ve son etkinlik tarihi burada güncelleniyor: etkinlik
      // kaydedilen tek yer burası.
      return {
        ...prev,
        activityHistory: history,
        streak: yeniSeri(prev.streak, prev.lastActiveDate),
        lastActiveDate: new Date().toISOString(),
      };
    });
  };

  // Helper to increment quest progress
  const handleUpdateQuest = useCallback((category: QuestCategory, amount = 1) => {
    setProgress(prev => {
      const currentQuests = ensureDailyQuests(prev.dailyQuests);
      const { updatedState, newlyCompleted } = updateQuestProgressInState(currentQuests, category, amount);

      if (newlyCompleted.length > 0) {
        playVictoryFanfare();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
        setToastQuest(newlyCompleted[0]);
      }

      return {
        ...prev,
        dailyQuests: updatedState
      };
    });
  }, []);

  // Handle learning a word in dictionary or lesson
  const handleLearnWord = (wordId: string) => {
    handleUpdateQuest('words', 1);
    recordActivity(5, 0, 1);
    setProgress(prev => ({
      ...prev,
      learnedWords: {
        ...(prev.learnedWords || {}),
        [wordId]: true
      }
    }));
  };

  // Handle claiming individual quest reward
  const handleClaimReward = (questId: string) => {
    setProgress(prev => {
      if (!prev.dailyQuests) return prev;
      const targetQuest = prev.dailyQuests.quests.find(q => q.id === questId);
      if (!targetQuest || !targetQuest.completed || targetQuest.claimed) return prev;

      playVictoryFanfare();
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 }
      });

      const updatedQuests = prev.dailyQuests.quests.map(q => 
        q.id === questId ? { ...q, claimed: true } : q
      );

      const addedXp = targetQuest.reward.xp;
      const addedHearts = targetQuest.reward.hearts || 0;
      const newXp = prev.xp + addedXp;
      const newRank = calculateRank(newXp);
      const newHearts = Math.min(prev.maxHearts, prev.hearts + addedHearts);

      return {
        ...prev,
        xp: newXp,
        rank: newRank,
        hearts: newHearts,
        dailyQuests: {
          ...prev.dailyQuests,
          quests: updatedQuests
        }
      };
    });
  };

  // Handle claiming all-completed super bonus (+50 XP, +2 can)
  const handleClaimSuperBonus = () => {
    setProgress(prev => {
      if (!prev.dailyQuests || prev.dailyQuests.allCompletedBonusClaimed) return prev;

      playVictoryFanfare();
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });

      const bonusXp = 50;
      const newXp = prev.xp + bonusXp;
      const newRank = calculateRank(newXp);
      const newHearts = Math.min(prev.maxHearts, prev.hearts + 2);

      return {
        ...prev,
        xp: newXp,
        rank: newRank,
        hearts: newHearts,
        dailyQuests: {
          ...prev.dailyQuests,
          allCompletedBonusClaimed: true
        }
      };
    });
  };

  // Handle claiming a milestone badge bonus
  const handleClaimBadge = (badge: Badge) => {
    setProgress(prev => {
      if (prev.claimedBadges?.[badge.id]) return prev;

      const bonusXp = badge.bonusXp || 25;
      const newXp = prev.xp + bonusXp;
      const newRank = calculateRank(newXp);
      const isRankUp = newRank !== prev.rank;

      recordActivity(bonusXp, 0, 0);

      // Trigger celebration banner for the unlocked badge or rank up
      if (isRankUp) {
        setActiveCelebration({
          type: 'rank',
          title: `${newRank} Rütbesine Yükseldiniz!`,
          subtitle: `Tebrikler! ${newXp} XP eşiğini aştınız ve Bozkırda kutlu bir makama eriştiniz.`,
          runicSymbol: '𐰚'
        });
      } else {
        setActiveCelebration({
          type: 'badge',
          title: `"${badge.name}" Nişanı Alındı!`,
          subtitle: badge.description,
          runicSymbol: badge.runicTitle,
          badge
        });
      }

      return {
        ...prev,
        xp: newXp,
        rank: newRank,
        claimedBadges: {
          ...(prev.claimedBadges || {}),
          [badge.id]: true
        }
      };
    });
  };

  // Handle lesson completion
  const handleLessonComplete = (xpEarned: number) => {
    if (!activeLesson) return;
    const lessonId = activeLesson.id;

    // Sınav sonucu eğitmene ulaşsın (VITE_GK_SONUC_URL ayarlıysa)
    if (activeLesson.type === 'exam') {
      sonucGonder({
        modul: activeLesson.title,
        ad: '',
        eposta: (import.meta.env.VITE_GK_EPOSTA as string | undefined) ?? '',
        puan: 100,
        dogru: null,
        soru: null,
        gecti: true
      });
    }

    // Advance daily lesson quest
    handleUpdateQuest('lesson', 1);
    recordActivity(xpEarned, 1, 0);

    setProgress(prev => {
      const newXp = prev.xp + xpEarned;
      const newRank = calculateRank(newXp);
      const isRankUp = newRank !== prev.rank;

      if (isRankUp) {
        setActiveCelebration({
          type: 'rank',
          title: `${newRank} Rütbesine Yükseldiniz!`,
          subtitle: `Bozkırın kadim bilgeliğinde yeni mertebeniz kutlu olsun! Toplam ${newXp} XP.`,
          runicSymbol: '𐰚'
        });
      }

      return {
        ...prev,
        xp: newXp,
        rank: newRank,
        completedLessons: {
          ...prev.completedLessons,
          [lessonId]: true
        }
      };
    });
  };

  // Deduct heart
  const handleHeartLoss = () => {
    setProgress(prev => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1)
    }));
  };

  // Refill hearts to max
  const handleRefillHearts = () => {
    playSuccessSound();
    setProgress(prev => ({
      ...prev,
      hearts: prev.maxHearts
    }));
  };

  // Quick practice generator
  const handleQuickPractice = () => {
    const randomUnit = UNITS[0];
    const randomLesson = randomUnit.lessons[0];
    setActiveLesson({
      ...randomLesson,
      id: 'quick-practice',
      title: 'Hızlı Can Tazeleme Antrenmanı',
      subtitle: 'Tamgaları tekrar et, +1 Can ve +10 XP kazan',
      xp: 10
    });
  };

  // Handle chest rewards from the learning path
  const handleEarnChestReward = (bonusXp: number, heartsToAdd: number) => {
    recordActivity(bonusXp, 0, 0);
    setProgress(prev => {
      const newXp = prev.xp + bonusXp;
      const newHearts = Math.min(prev.maxHearts, prev.hearts + heartsToAdd);
      const newRank = calculateRank(newXp);
      const isRankUp = newRank !== prev.rank;

      if (isRankUp) {
        setActiveCelebration({
          type: 'rank',
          title: `${newRank} Rütbesine Yükseldiniz!`,
          subtitle: `Yıldız Sandığı açarak ${newXp} XP eşiğini aştınız ve yeni bir bozkır rütbesine eriştiniz!`,
          runicSymbol: '𐰚'
        });
      }

      return {
        ...prev,
        xp: newXp,
        hearts: newHearts,
        rank: newRank
      };
    });
  };

  // Words learned count for Sozluk display
  const wordsQuest = progress.dailyQuests?.quests.find(q => q.category === 'words');
  const wordsLearnedCount = wordsQuest ? wordsQuest.current : 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#071518] text-metin-acik selection:bg-marka-acik selection:text-derin-5">
      {/* Top Navbar */}
      <a href="#icerik" className="atla-baglantisi">İçeriğe atla</a>
      <Navbar
        currentTab={currentTab}
        onTabChange={handleTabChange}
        progress={progress}
        onRefillHearts={handleRefillHearts}
        onOpenQuests={() => setIsQuestsModalOpen(true)}
        onOpenAccount={() => setIsAuthModalOpen(true)}
      />

      {/* Main Content Body */}
      <main id="icerik" className="flex-1 pb-16">
        <Suspense fallback={<TabYukleniyor />}>
        {currentTab === 'ogren' && (
          <LearningPath
            units={tumUniteler}
            progress={{ ...progress, unlockedUnits: { ...beyanlaAcilan, ...progress.unlockedUnits } }}
            onStartLesson={(lesson) => setActiveLesson(lesson)}
            onOpenTamgalik={() => {
              setSelectedDrawingTamga(undefined);
              handleTabChange('alistirma');
            }}
            onOpenFlashcards={() => {
              handleTabChange('alistirma');
            }}
            onQuickPractice={handleQuickPractice}
            onClaimReward={handleClaimReward}
            onClaimSuperBonus={handleClaimSuperBonus}
            onNavigateToTab={(tab) => handleTabChange(tab)}
            onOpenQuestsModal={() => setIsQuestsModalOpen(true)}
            onEarnChestReward={handleEarnChestReward}
            onStartDrawingTamga={(tamga) => {
              setSelectedDrawingTamga(tamga);
              handleTabChange('alistirma');
            }}
          />
        )}

        {(currentTab === 'alistirma' || currentTab === 'kartlar' || currentTab === 'tamgalik') && (
          <AlistirmaView
            progress={progress}
            initialMode={currentTab === 'kartlar' ? 'kartlar' : currentTab === 'tamgalik' ? 'tamgalik' : 'cizim'}
            selectedDrawingTamga={selectedDrawingTamga}
            onEarnXp={(xp) => {
              recordActivity(xp, 0, 0);
              setProgress(prev => {
                const newXp = prev.xp + xp;
                const newRank = calculateRank(newXp);
                if (newRank !== prev.rank) {
                  setActiveCelebration({
                    type: 'rank',
                    title: `${newRank} Rütbesine Yükseldiniz!`,
                    subtitle: `Tebrikler! ${newXp} XP eşiğini aştınız ve Bozkırda kutlu bir makama eriştiniz.`,
                    runicSymbol: '𐰚'
                  });
                }
                return {
                  ...prev,
                  xp: newXp,
                  rank: newRank
                };
              });
            }}
            onRefillHeart={() => {
              setProgress(prev => ({
                ...prev,
                hearts: Math.min(prev.maxHearts, prev.hearts + 1)
              }));
            }}
            onListenPronunciation={() => handleUpdateQuest('listen', 1)}
            onCompleteSeries={() => handleUpdateQuest('tamga_series', 1)}
          />
        )}

        {(currentTab === 'kesfet' || currentTab === 'kitabeler' || currentTab === 'sozluk' || currentTab === 'klavye' || currentTab === 'belgeler') && (
          <KesfetView
            initialSection={
              currentTab === 'sozluk' ? 'sozluk' :
              currentTab === 'klavye' ? 'klavye' :
              currentTab === 'belgeler' ? 'belgeler' : 'kitabeler'
            }
            onLearnWord={handleLearnWord}
            onListenPronunciation={() => handleUpdateQuest('listen', 1)}
            wordsLearnedCount={wordsLearnedCount}
            learnedWordsRecord={progress.learnedWords}
          />
        )}

        {currentTab === 'istatistik' && (
          <IstatistiklerView
            progress={progress}
            onNavigateToTab={(tab) => handleTabChange(tab)}
            onClaimBadge={handleClaimBadge}
            profil={profil}
            onProfilDuzenle={() => setGirisAcik(true)}
            uniteler={tumUniteler}
          />
        )}
        </Suspense>
      </main>

      {/* Interactive Lesson Modal */}
      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          progress={progress}
          onComplete={(xp) => {
            handleLessonComplete(xp);
            // also award a heart if in quick practice
            if (activeLesson.id === 'quick-practice') {
              setProgress(prev => ({
                ...prev,
                hearts: Math.min(prev.maxHearts, prev.hearts + 1)
              }));
            }
          }}
          onClose={() => setActiveLesson(null)}
          onHeartLoss={handleHeartLoss}
          onRefillHearts={handleRefillHearts}
          onListenPronunciation={() => handleUpdateQuest('listen', 1)}
          onLearnWord={handleLearnWord}
        />
      )}

      {/* Hesap / Giriş Modalı */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* İhtiyaç analizi: ilk açılışta, sonra yalnız istenirse. */}
      {(!profil || girisAcik) && (
        <GirisKapisi
          mevcut={profil ?? undefined}
          onTamamla={(yeni) => {
            setProfil(yeni);
            setGirisAcik(false);
            try {
              localStorage.setItem(PROFIL_KEY, JSON.stringify(yeni));
            } catch {
              // saklanamadıysa oturum boyunca geçerli
            }
          }}
        />
      )}

      {/* Daily Quests Details Modal */}
      {isQuestsModalOpen && progress.dailyQuests && (
        <DailyQuestsModal
          isOpen={isQuestsModalOpen}
          dailyQuests={progress.dailyQuests}
          onClose={() => setIsQuestsModalOpen(false)}
          onClaimReward={handleClaimReward}
          onClaimSuperBonus={handleClaimSuperBonus}
          onNavigateToTab={(tab) => {
            setIsQuestsModalOpen(false);
            setCurrentTab(tab);
          }}
        />
      )}

      {/* Quest Completion Toast Notification */}
      {toastQuest && (
        <QuestToast
          toast={{
            id: toastQuest.id,
            title: toastQuest.title,
            description: toastQuest.description,
            type: 'completed'
          }}
          onClose={() => setToastQuest(null)}
          onOpenQuests={() => {
            setToastQuest(null);
            setIsQuestsModalOpen(true);
          }}
        />
      )}

      {/* Level Up (Rank) & Badge Celebration Banner */}
      {activeCelebration && (
        <CelebrationBanner
          type={activeCelebration.type}
          title={activeCelebration.title}
          subtitle={activeCelebration.subtitle}
          runicSymbol={activeCelebration.runicSymbol}
          badge={activeCelebration.badge}
          onClose={() => setActiveCelebration(null)}
        />
      )}

      {/* Minimal Footer */}
      <footer className="border-t border-zemin-4 py-6 text-center text-xs text-metin-3 bg-[#080E18]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Göktürkçe Öğrenek &copy; {new Date().getFullYear()} — Antik Bozkır Yazıtları ve Dil Eğitimi</span>
          <nav className="flex items-center gap-3">
            <a
              href={GIZLILIK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marka-acik transition-colors underline-offset-2 hover:underline"
            >
              Gizlilik
            </a>
            <span aria-hidden="true" className="text-zemin-4">·</span>
            <a
              href={KULLANIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-marka-acik transition-colors underline-offset-2 hover:underline"
            >
              Kullanım Koşulları
            </a>
          </nav>
          <span className="runic text-sm text-marka">𐱅𐰇𐰼𐰜 : 𐰋𐰃𐰠𐰏𐰀 : 𐰴𐰍𐰣</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
