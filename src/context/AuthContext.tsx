import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import type { User } from 'firebase/auth';
import { loadFirebase, isFirebaseConfigured } from '../lib/firebase';

interface AuthContextValue {
  user: User | null;
  /** Oturum durumu ilk kez çözülene kadar true. */
  isLoading: boolean;
  /** Firebase anahtarları tanımlı mı; değilse uygulama yerel modda çalışır. */
  isEnabled: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName?: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/** SDK yüklü değilse hesap işlemleri çağrılamaz; net bir hata ver. */
const requireBundle = async () => {
  const bundle = await loadFirebase();
  if (!bundle) {
    throw new Error('Hesap özellikleri bu kurulumda yapılandırılmamış.');
  }
  return bundle;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setIsLoading(false);
      return;
    }

    let unsubscribe: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      try {
        const [bundle, { onAuthStateChanged }] = await Promise.all([
          requireBundle(),
          import('firebase/auth')
        ]);
        if (cancelled) return;
        unsubscribe = onAuthStateChanged(bundle.auth, (nextUser) => {
          setUser(nextUser);
          setIsLoading(false);
        });
      } catch (error) {
        // SDK yüklenemese bile uygulama yerel modda açılmaya devam etsin.
        console.error('Oturum katmanı yüklenemedi:', error);
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isLoading,
    isEnabled: isFirebaseConfigured,
    signIn: async (email, password) => {
      const [{ auth }, { signInWithEmailAndPassword }] = await Promise.all([
        requireBundle(),
        import('firebase/auth')
      ]);
      await signInWithEmailAndPassword(auth, email, password);
    },
    signUp: async (email, password, displayName) => {
      const [{ auth }, { createUserWithEmailAndPassword, updateProfile }] = await Promise.all([
        requireBundle(),
        import('firebase/auth')
      ]);
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await updateProfile(credential.user, { displayName });
      }
    },
    resetPassword: async (email) => {
      const [{ auth }, { sendPasswordResetEmail }] = await Promise.all([
        requireBundle(),
        import('firebase/auth')
      ]);
      await sendPasswordResetEmail(auth, email);
    },
    logOut: async () => {
      const [{ auth }, { signOut }] = await Promise.all([
        requireBundle(),
        import('firebase/auth')
      ]);
      await signOut(auth);
    }
  }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth, AuthProvider içinde kullanılmalıdır.');
  }
  return context;
};
