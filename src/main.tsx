import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import { ErisimKapisi, kapiAcikMi } from './components/ErisimKapisi';
import './index.css';

// Denetim ekrani: gelistirmede her zaman, uretimde yalnizca VITE_DENETIM
// acikken pakete girer. Boylece kapali tanitim surumunde admin ekrani
// kullanilabilir, herkese acik surumde paketin icinde hic bulunmaz.
const denetimKullanilabilir = import.meta.env.DEV || import.meta.env.VITE_DENETIM === 'acik';
const denetimModu = denetimKullanilabilir && window.location.hash === '#denetim';
const DenetimView = denetimModu
  ? lazy(() => import('./denetim/DenetimView'))
  : null;

// Uygulamadaki giris dugmesi de ayni kosula bagli.
const DenetimGirisi = denetimKullanilabilir
  ? lazy(() => import('./denetim/DenetimGirisi'))
  : null;

// Adres cubugundaki #denetim acilip kapandiginda yeniden yukle. Denetim
// hic kullanilamiyorsa (herkese acik paket) dinleyici de kurulmaz; yoksa
// adrese #denetim yazan ziyaretci bos yere bir kez sayfa yeniler.
if (denetimKullanilabilir) {
  window.addEventListener('hashchange', () => {
    const istenen = window.location.hash === '#denetim';
    if (istenen !== denetimModu) window.location.reload();
  });
}

/** Kapi kapaliysa once kodu sorar, gectikten sonra uygulamayi acar. */
const Kok = () => {
  const [acik, setAcik] = useState(kapiAcikMi);
  if (!acik) return <ErisimKapisi onAcildi={() => setAcik(true)} />;
  if (DenetimView) {
    return (
      <Suspense fallback={<p className="p-8 text-metin-3">Denetim ekranı yükleniyor…</p>}>
        <DenetimView />
      </Suspense>
    );
  }
  return (
    <AuthProvider>
      <App />
      {DenetimGirisi && (
        <Suspense fallback={null}>
          <DenetimGirisi />
        </Suspense>
      )}
    </AuthProvider>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <Kok />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
