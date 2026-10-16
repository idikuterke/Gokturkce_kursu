import React, { useEffect } from 'react';
import { Target, Gift, X, Sparkles, CheckCircle2 } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type?: 'completed' | 'reward' | 'bonus';
}

interface QuestToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
  onOpenQuests?: () => void;
}

export const QuestToast: React.FC<QuestToastProps> = ({
  toast,
  onClose,
  onOpenQuests
}) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-slideInUp">
      <div className="bg-[#101B2C] border-2 border-[#2BC4C4] rounded-2xl p-4 shadow-2xl shadow-black/60 flex items-start justify-between gap-3 text-white">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2BC4C4] to-[#1E8A8A] flex items-center justify-center text-[#0B1320] flex-shrink-0 shadow-md">
            {toast.type === 'bonus' ? (
              <Sparkles className="w-5 h-5 text-amber-300" />
            ) : toast.type === 'reward' ? (
              <Gift className="w-5 h-5" />
            ) : (
              <CheckCircle2 className="w-5 h-5" />
            )}
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2BC4C4] flex items-center gap-1">
              <Target className="w-3 h-3" /> Günlük Görev
            </span>
            <h4 className="text-sm font-bold text-white font-serif mt-0.5">
              {toast.title}
            </h4>
            <p className="text-xs text-[#9FB0C6] mt-0.5 leading-snug">
              {toast.description}
            </p>
            {onOpenQuests && (
              <button
                onClick={() => {
                  onClose();
                  onOpenQuests();
                }}
                className="mt-2 text-xs text-[#2BC4C4] hover:text-white font-bold underline flex items-center gap-1"
              >
                Görevleri Gör &rarr;
              </button>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-[#9FB0C6] hover:text-white p-1 rounded-lg hover:bg-[#152338] transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
