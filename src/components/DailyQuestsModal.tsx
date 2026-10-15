import React from 'react';
import { X, Target } from 'lucide-react';
import { DailyQuestState } from '../types';
import { DailyQuestsWidget } from './DailyQuestsWidget';

interface DailyQuestsModalProps {
  isOpen: boolean;
  onClose: () => void;
  dailyQuests: DailyQuestState;
  onClaimReward: (questId: string) => void;
  onClaimSuperBonus: () => void;
  onNavigateToTab?: (tab: string) => void;
  onStartRandomLesson?: () => void;
}

export const DailyQuestsModal: React.FC<DailyQuestsModalProps> = ({
  isOpen,
  onClose,
  dailyQuests,
  onClaimReward,
  onClaimSuperBonus,
  onNavigateToTab,
  onStartRandomLesson
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#0B1320] border-2 border-[#2BC4C4] rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#101B2C] border-b border-[#233754]">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#2BC4C4]" />
            <h2 className="text-base font-bold text-white font-serif">
              Günün Görevleri & Ödülleri
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#152338] hover:bg-[#233754] text-[#9FB0C6] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          <DailyQuestsWidget
            dailyQuests={dailyQuests}
            onClaimReward={onClaimReward}
            onClaimSuperBonus={onClaimSuperBonus}
            onNavigateToTab={(tab) => {
              onClose();
              if (onNavigateToTab) onNavigateToTab(tab);
            }}
            onStartRandomLesson={() => {
              onClose();
              if (onStartRandomLesson) onStartRandomLesson();
            }}
          />
        </div>
      </div>
    </div>
  );
};
