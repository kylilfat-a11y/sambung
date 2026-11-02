import React from 'react';
import { UserProfile } from '../../types';
import {
  MessageSquare,
  ShieldCheck,
  Calendar,
  Share2,
  X,
  Heart,
  MessageCircle,
} from 'lucide-react';

interface UserProfileModalProps {
  user: UserProfile;
  onClose: () => void;
  onSendMessage?: (user: UserProfile) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  user,
  onClose,
  onSendMessage,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 relative animate-in zoom-in-95 duration-200 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* User Card Content */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-emerald-600/20 shadow-md"
            />
            {user.isOnline && (
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
            )}
          </div>

          <h3 className="text-lg font-extrabold text-stone-900 mt-3">
            {user.name}
          </h3>

          <span className="mt-1 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
            {user.role}
          </span>

          <p className="text-xs text-stone-600 mt-3 leading-relaxed px-2 bg-stone-50 p-3 rounded-2xl border border-stone-100 text-left w-full">
            "{user.bio}"
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-2 w-full mt-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-center">
              <span className="text-base font-extrabold text-emerald-900 block">
                {user.totalConsultations ?? 2}
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold">
                Sesi Konsultasi
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-center">
              <span className="text-base font-extrabold text-stone-800 block">
                {user.totalDiscussions ?? 5}
              </span>
              <span className="text-[10px] text-stone-500 font-semibold">
                Partisipasi Diskusi
              </span>
            </div>
          </div>

          {/* Info Details */}
          <div className="w-full text-left space-y-1.5 mt-3 text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>Bergabung sejak {user.joinedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Identitas terverifikasi SAMBUNG</span>
            </div>
          </div>

          {/* Actions */}
          <div className="w-full flex items-center gap-2 mt-5">
            {onSendMessage && user.role === 'Pendamping Sebaya' && (
              <button
                onClick={() => {
                  onClose();
                  onSendMessage(user);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#1B4D3E] text-white font-bold text-xs hover:bg-emerald-900 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Mulai Percakapan</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-stone-200 text-stone-700 font-bold text-xs hover:bg-stone-50 transition-colors"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
