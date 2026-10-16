import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import './index.css';

// Denetim ekrani yalnizca gelistirme modunda, #denetim adresiyle acilir.
// Uretim derlemesinde import.meta.env.DEV false oldugundan bu dal
// tamamen elenir ve modul pakete hic girmez.
const denetimModu = import.meta.env.DEV && window.location.hash === '#denetim';
const DenetimView = denetimModu
  ? lazy(() => import('./denetim/DenetimView'))
  : null;

// Adres cubugundaki #denetim acilip kapandiginda yeniden yukle.
window.addEventListener('hashchange', () => {
  const istenen = window.location.hash === '#denetim';
  if (istenen !== denetimModu) window.location.reload();
});

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        {DenetimView ? (
          <Suspense fallback={<p className="p-8 text-[#6C7F99]">Denetim ekranı yükleniyor…</p>}>
            <DenetimView />
          </Suspense>
        ) : (
          <AuthProvider>
            <App />
          </AuthProvider>
        )}
      </ErrorBoundary>
    </React.StrictMode>
  );
}
