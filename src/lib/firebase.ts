import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
};

/**
 * Firebase isteğe bağlıdır. Anahtarlar tanımlı değilse uygulama hesapsız,
 * tamamen yerel (localStorage) çalışmaya devam eder.
 */
export const isFirebaseConfigured = Boolean(
  config.apiKey && config.projectId && config.appId
);

export interface FirebaseBundle {
  auth: Auth;
  db: Firestore;
}

let bundlePromise: Promise<FirebaseBundle> | null = null;

/**
 * Firebase SDK'sını ilk ihtiyaç anında yükler.
 *
 * Statik import, SDK'yı (~340 kB) açılış paketine sokar ve hesabı hiç
 * kullanmayan ziyaretçiye de ödetir. Dinamik import ile SDK ayrı bir
 * parçaya düşer; yalnızca yapılandırma varsa ve oturum katmanı
 * devreye girdiğinde indirilir.
 */
export const loadFirebase = async (): Promise<FirebaseBundle | null> => {
  if (!isFirebaseConfigured) return null;

  if (!bundlePromise) {
    bundlePromise = (async () => {
      const [{ initializeApp }, { getAuth }, { getFirestore }] = await Promise.all([
        import('firebase/app'),
        import('firebase/auth'),
        import('firebase/firestore')
      ]);
      const app = initializeApp(config as Required<typeof config>);
      return { auth: getAuth(app), db: getFirestore(app) };
    })();
  }

  return bundlePromise;
};
