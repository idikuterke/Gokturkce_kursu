import { useState, FormEvent } from 'react';
import { X, Mail, Lock, User as UserIcon, Loader2, CloudUpload } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { GIZLILIK_URL, KULLANIM_URL } from '../data/yasal';

/** Google'ın marka kılavuzuna uygun çok renkli "G" işareti. */
const GoogleLogo = () => (
  <svg className="w-4 h-4" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Mode = 'signIn' | 'signUp' | 'reset';

/** Metinler onozlabs.com'da; uygulama yalnız bağlantı verir. */
const YasalBaglantilar = () => (
  <>
    <a
      href={KULLANIM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-marka-acik underline underline-offset-2 hover:text-white"
    >
      Kullanım Koşulları
    </a>
    {' ve '}
    <a
      href={GIZLILIK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-marka-acik underline underline-offset-2 hover:text-white"
    >
      Gizlilik Politikası
    </a>
  </>
);

/** Firebase hata kodlarını kullanıcıya gösterilebilir Türkçe metne çevirir. */
const ONAY_UYARISI =
  'Devam etmek için Kullanım Koşulları ve Gizlilik Politikası\'nı onaylaman gerekiyor.';

const readableError = (error: unknown): string => {
  if ((error as Error)?.message === 'ONAY_YOK') return ONAY_UYARISI;
  const code = (error as { code?: string })?.code ?? '';
  switch (code) {
    case 'auth/invalid-email':
      return 'E-posta adresi geçersiz görünüyor.';
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'E-posta veya parola hatalı.';
    case 'auth/email-already-in-use':
      return 'Bu e-posta ile bir hesap zaten var. Giriş yapmayı deneyin.';
    case 'auth/weak-password':
      return 'Parola en az 6 karakter olmalı.';
    case 'auth/too-many-requests':
      return 'Çok fazla deneme yapıldı. Biraz bekleyip tekrar deneyin.';
    case 'auth/network-request-failed':
      return 'Ağ bağlantısı kurulamadı.';
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return 'Google penceresi kapatıldı. Tekrar deneyebilirsin.';
    case 'auth/popup-blocked':
      return 'Tarayıcı açılır pencereyi engelledi. İzin verip tekrar dene.';
    case 'auth/unauthorized-domain':
      return 'Bu alan adı Firebase\'de yetkili değil. Konsolda Authorized Domains listesine eklenmeli.';
    case 'auth/account-exists-with-different-credential':
      return 'Bu e-posta başka bir giriş yöntemiyle kayıtlı. Önce o yöntemle giriş yap.';
    default:
      return (error as Error)?.message || 'Beklenmeyen bir hata oluştu.';
  }
};

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signIn, signUp, resetPassword, signInWithGoogle } = useAuth();
  const [mode, setMode] = useState<Mode>('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  // Yalnız yeni hesapta sorulur; mevcut kullanıcının girişini engellemez.
  const [yasalOnay, setYasalOnay] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setNotice(null);
    setIsBusy(true);
    try {
      if (mode === 'signIn') {
        await signIn(email.trim(), password);
        onClose();
      } else if (mode === 'signUp') {
        if (!yasalOnay) throw new Error('ONAY_YOK');
        await signUp(email.trim(), password, displayName.trim() || undefined);
        onClose();
      } else {
        await resetPassword(email.trim());
        setNotice('Parola sıfırlama bağlantısı e-postanıza gönderildi.');
      }
    } catch (err) {
      setError(readableError(err));
    } finally {
      setIsBusy(false);
    }
  };

  const title =
    mode === 'signIn' ? 'Bozkıra Geri Dön' : mode === 'signUp' ? 'Yolculuğa Katıl' : 'Parolanı Sıfırla';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#0D262C] border-2 border-[#215661] rounded-3xl p-6 sm:p-8 shadow-2xl animate-zoomIn">
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#112F37] hover:bg-[#183E48] text-metin-4 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-marka-acik">Hesap</span>
          <h2 className="text-2xl font-bold text-white font-serif">{title}</h2>
          <p className="text-xs text-metin-2 leading-snug">
            İlerlemen hesabına kaydedilir; telefonda ve bilgisayarda aynı yerden devam edersin.
          </p>
        </div>

        {mode !== 'reset' && (
          <>
            <button
              type="button"
              onClick={async () => {
                setError(null);
                setNotice(null);
                if (mode === 'signUp' && !yasalOnay) {
                  setError(ONAY_UYARISI);
                  return;
                }
                setIsBusy(true);
                try {
                  await signInWithGoogle();
                  onClose();
                } catch (err) {
                  setError(readableError(err));
                } finally {
                  setIsBusy(false);
                }
              }}
              disabled={isBusy}
              className="w-full py-3 mb-4 rounded-xl bg-white hover:bg-[#F1F5F9] text-zemin font-bold text-sm transition-colors active:scale-95 flex items-center justify-center gap-2.5 disabled:opacity-60"
            >
              <GoogleLogo />
              Google ile devam et
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="flex-1 h-px bg-[#1B434C]" />
              <span className="text-[11px] text-metin-3 uppercase tracking-wider">veya</span>
              <span className="flex-1 h-px bg-[#1B434C]" />
            </div>
          </>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signUp' && (
            <label className="block">
              <span className="sr-only">Görünen ad</span>
              <div className="flex items-center gap-2 px-3 rounded-xl bg-[#091D22] border border-[#1B434C] focus-within:border-marka-acik transition-colors">
                <UserIcon className="w-4 h-4 text-metin-3" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Adın (isteğe bağlı)"
                  className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-metin-3 outline-none"
                />
              </div>
            </label>
          )}

          <label className="block">
            <span className="sr-only">E-posta</span>
            <div className="flex items-center gap-2 px-3 rounded-xl bg-[#091D22] border border-[#1B434C] focus-within:border-marka-acik transition-colors">
              <Mail className="w-4 h-4 text-metin-3" />
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta"
                className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-metin-3 outline-none"
              />
            </div>
          </label>

          {mode !== 'reset' && (
            <label className="block">
              <span className="sr-only">Parola</span>
              <div className="flex items-center gap-2 px-3 rounded-xl bg-[#091D22] border border-[#1B434C] focus-within:border-marka-acik transition-colors">
                <Lock className="w-4 h-4 text-metin-3" />
                <input
                  type="password"
                  required
                  minLength={6}
                  autoComplete={mode === 'signUp' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parola (en az 6 karakter)"
                  className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-metin-3 outline-none"
                />
              </div>
            </label>
          )}

          {mode === 'signUp' && (
            <label className="flex items-start gap-2.5 text-[11px] text-metin-2 leading-snug cursor-pointer">
              <input
                type="checkbox"
                checked={yasalOnay}
                onChange={(e) => { setYasalOnay(e.target.checked); setError(null); }}
                className="mt-0.5 w-4 h-4 flex-shrink-0 accent-marka cursor-pointer"
              />
              <span>
                <YasalBaglantilar />
                {'\u2019nı okudum, kabul ediyorum.'}
              </span>
            </label>
          )}

          {error && (
            <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2">
              {error}
            </p>
          )}
          {notice && (
            <p className="text-xs text-basari bg-basari/10 border border-basari/30 rounded-xl px-3 py-2">
              {notice}
            </p>
          )}

          <button
            type="submit"
            disabled={isBusy}
            className="w-full py-3 rounded-xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-sm transition-colors active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isBusy && <Loader2 className="w-4 h-4 animate-spin" />}
            {mode === 'signIn' ? 'Giriş Yap' : mode === 'signUp' ? 'Hesap Oluştur' : 'Bağlantı Gönder'}
          </button>
        </form>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
          {mode !== 'signUp' ? (
            <button onClick={() => { setMode('signUp'); setError(null); setNotice(null); }} className="text-marka-acik hover:text-white font-bold">
              Hesabın yok mu? Oluştur
            </button>
          ) : (
            <button onClick={() => { setMode('signIn'); setError(null); setNotice(null); }} className="text-marka-acik hover:text-white font-bold">
              Zaten hesabın var mı? Giriş yap
            </button>
          )}
          {mode !== 'reset' && (
            <button onClick={() => { setMode('reset'); setError(null); setNotice(null); }} className="text-metin-3 hover:text-white">
              Parolamı unuttum
            </button>
          )}
        </div>

        <p className="mt-4 pt-4 border-t border-[#183E47] text-[11px] text-metin-3 flex items-start gap-1.5 leading-snug">
          <CloudUpload className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-marka-acik" />
          Bu cihazdaki mevcut ilerlemen giriş yaptığında hesabınla birleştirilir; hiçbir şey kaybolmaz.
        </p>

        {mode !== 'signUp' && (
          <p className="mt-2 text-[11px] text-metin-3 leading-snug">
            Hesap açarken topladığımız veriler ve haklarınız: <YasalBaglantilar />.
          </p>
        )}
      </div>
    </div>
  );
};
