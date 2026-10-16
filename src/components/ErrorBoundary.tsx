import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Tek bir bileşenin hatası tüm uygulamayı beyaz ekrana düşürmesin diye
 * kök seviyede kullanılan hata sınırı. Hatayı yutmaz: konsola yazar ve
 * kullanıcıya kurtarma yolu sunar.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uygulama hatası:', error, info.componentStack);
  }

  private handleReset = () => {
    this.setState({ error: null });
  };

  private handleHardReset = () => {
    try {
      // Anahtar adlarını burada tekrarlamak yerine ön ekle süpür; yeni bir
      // gokturkce_* anahtarı eklendiğinde bu kod kendiliğinden kapsar.
      Object.keys(localStorage)
        .filter((key) => key.startsWith('gokturkce_'))
        .forEach((key) => localStorage.removeItem(key));
    } catch {
      // localStorage erişilemiyorsa sessizce geç; yine de sayfayı tazeleyelim.
    }
    window.location.reload();
  };

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-zemin text-white">
        <div className="w-full max-w-md bg-zemin-2 border-2 border-marka rounded-3xl p-6 space-y-4 shadow-2xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-marka">
              Bir aksaklık oldu
            </span>
            <h1 className="text-lg font-bold font-serif mt-1">
              Yolculuk beklenmedik bir taşa takıldı
            </h1>
            <p className="text-xs text-metin-2 mt-2 leading-snug">
              İlerlemen kayıtlı. Aşağıdan yeniden deneyebilir, sorun sürerse
              kayıtlı ilerlemeyi sıfırlayarak temiz bir başlangıç yapabilirsin.
            </p>
          </div>

          <pre className="text-[11px] text-[#F87171] bg-zemin border border-zemin-4 rounded-xl p-3 overflow-auto max-h-32 whitespace-pre-wrap">
            {error.message}
          </pre>

          <div className="flex gap-2">
            <button
              onClick={this.handleReset}
              className="flex-1 py-2.5 rounded-xl bg-marka hover:bg-[#3DD6D6] text-zemin font-bold text-xs transition-colors active:scale-95"
            >
              Yeniden Dene
            </button>
            <button
              onClick={this.handleHardReset}
              className="flex-1 py-2.5 rounded-xl border border-zemin-4 hover:bg-zemin-3 text-metin-2 font-bold text-xs transition-colors active:scale-95"
            >
              İlerlemeyi Sıfırla
            </button>
          </div>
        </div>
      </div>
    );
  }
}
