import { useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserProgress } from '../types';
import { fetchRemoteProgress, mergeProgress, saveRemoteProgress } from '../services/progressSync';

const SAVE_DEBOUNCE_MS = 1500;

/**
 * İlerlemeyi hesaba bağlar.
 *
 * Yerel depolama hızlı yol olarak kalır: uygulama çevrimdışı da, hesapsız da
 * aynı şekilde çalışır. Oturum açıldığında buluttaki kayıt yerelle kayıpsız
 * birleştirilir, sonrasındaki değişiklikler geciktirilerek yazılır (her
 * tuş vuruşunda yazma maliyeti olmasın diye).
 */
export const useCloudProgress = (
  progress: UserProgress,
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>
) => {
  const { user, isEnabled } = useAuth();
  // Birleştirme bitmeden yazmaya başlarsak buluttaki kaydı ezeriz.
  const hasMergedRef = useRef(false);
  const latestProgressRef = useRef(progress);
  latestProgressRef.current = progress;

  // Oturum açılınca: buluttaki kaydı çek, yerelle birleştir, geri yaz.
  useEffect(() => {
    if (!isEnabled || !user) {
      hasMergedRef.current = false;
      return;
    }
    let cancelled = false;

    (async () => {
      try {
        const remote = await fetchRemoteProgress(user.uid);
        if (cancelled) return;
        if (remote) {
          const merged = mergeProgress(latestProgressRef.current, remote);
          setProgress(merged);
          await saveRemoteProgress(user.uid, merged);
        } else {
          await saveRemoteProgress(user.uid, latestProgressRef.current);
        }
      } catch (error) {
        // Senkron başarısız olsa bile uygulama yerel kayıtla çalışmaya devam etsin.
        console.error('İlerleme senkronizasyonu başarısız:', error);
      } finally {
        if (!cancelled) hasMergedRef.current = true;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isEnabled, user, setProgress]);

  // Sonraki değişiklikleri geciktirerek buluta yaz.
  useEffect(() => {
    if (!isEnabled || !user || !hasMergedRef.current) return;
    const timer = setTimeout(() => {
      saveRemoteProgress(user.uid, progress).catch((error) => {
        console.error('İlerleme buluta yazılamadı:', error);
      });
    }, SAVE_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [isEnabled, user, progress]);
};
