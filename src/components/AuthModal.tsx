import { useState, FormEvent } from 'react';
import { X, Mail, Lock, User as UserIcon, Loader2, CloudUpload } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Mode = 'signIn' | 'signUp' | 'reset';

/** Firebase hata kodlarını kullanıcıya gösterilebilir Türkçe metne çevirir. */
const readableError = (error: unknown): string => {
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
    default:
      return (error as Error)?.message || 'Beklenmeyen bir hata oluştu.';
  }
};

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signIn, signUp, resetPassword } = useAuth();
  const [mode, setMode] = useState<Mode>('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [isBusy, setIsBusy] = useState(false);

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
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#112F37] hover:bg-[#183E48] text-[#94A3B8] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#2DD4BF]">Hesap</span>
          <h2 className="text-2xl font-bold text-white font-serif">{title}</h2>
          <p className="text-xs text-[#9FB0C6] leading-snug">
            İlerlemen hesabına kaydedilir; telefonda ve bilgisayarda aynı yerden devam edersin.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signUp' && (
            <label className="block">
              <span className="sr-only">Görünen ad</span>
              <div className="flex items-center gap-2 px-3 rounded-xl bg-[#091D22] border border-[#1B434C] focus-within:border-[#2DD4BF] transition-colors">
                <UserIcon className="w-4 h-4 text-[#6C7F99]" />
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Adın (isteğe bağlı)"
                  className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-[#6C7F99] outline-none"
                />
              </div>
            </label>
          )}

          <label className="block">
            <span className="sr-only">E-posta</span>
            <div className="flex items-center gap-2 px-3 rounded-xl bg-[#091D22] border border-[#1B434C] focus-within:border-[#2DD4BF] transition-colors">
              <Mail className="w-4 h-4 text-[#6C7F99]" />
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta"
                className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-[#6C7F99] outline-none"
              />
            </div>
          </label>

          {mode !== 'reset' && (
            <label className="block">
              <span className="sr-only">Parola</span>
              <div className="flex items-center gap-2 px-3 rounded-xl bg-[#091D22] border border-[#1B434C] focus-within:border-[#2DD4BF] transition-colors">
                <Lock className="w-4 h-4 text-[#6C7F99]" />
                <input
                  type="password"
                  required
                  minLength={6}
                  autoComplete={mode === 'signUp' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parola (en az 6 karakter)"
                  className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-[#6C7F99] outline-none"
                />
              </div>
            </label>
          )}

          {error && (
            <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2">
              {error}
            </p>
          )}
          {notice && (
            <p className="text-xs text-[#37B36A] bg-[#37B36A]/10 border border-[#37B36A]/30 rounded-xl px-3 py-2">
              {notice}
            </p>
          )}

          <button
            type="submit"
            disabled={isBusy}
            className="w-full py-3 rounded-xl bg-[#2BC4C4] hover:bg-[#25adad] text-[#0B1320] font-bold text-sm transition-colors active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isBusy && <Loader2 className="w-4 h-4 animate-spin" />}
            {mode === 'signIn' ? 'Giriş Yap' : mode === 'signUp' ? 'Hesap Oluştur' : 'Bağlantı Gönder'}
          </button>
        </form>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
          {mode !== 'signUp' ? (
            <button onClick={() => { setMode('signUp'); setError(null); setNotice(null); }} className="text-[#2DD4BF] hover:text-white font-bold">
              Hesabın yok mu? Oluştur
            </button>
          ) : (
            <button onClick={() => { setMode('signIn'); setError(null); setNotice(null); }} className="text-[#2DD4BF] hover:text-white font-bold">
              Zaten hesabın var mı? Giriş yap
            </button>
          )}
          {mode !== 'reset' && (
            <button onClick={() => { setMode('reset'); setError(null); setNotice(null); }} className="text-[#6C7F99] hover:text-white">
              Parolamı unuttum
            </button>
          )}
        </div>

        <p className="mt-4 pt-4 border-t border-[#183E47] text-[11px] text-[#6C7F99] flex items-start gap-1.5 leading-snug">
          <CloudUpload className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#2DD4BF]" />
          Bu cihazdaki mevcut ilerlemen giriş yaptığında hesabınla birleştirilir; hiçbir şey kaybolmaz.
        </p>
      </div>
    </div>
  );
};
