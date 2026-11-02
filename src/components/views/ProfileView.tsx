import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { currentUser } from '../../data/mockData';
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  RefreshCw,
  Bell,
  Shield,
  HelpCircle,
  GitBranch,
  Github,
  CheckCircle2,
  Users,
  Sparkles,
  ExternalLink,
  LogOut,
  Moon,
} from 'lucide-react';

interface ProfileViewProps {
  onBack: () => void;
  onNavigateToReferrals: () => void;
  onNavigateToBecomeCompanion: () => void;
  onNavigateToSpiritual: () => void;
  onOpenGitHubModal: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  onBack,
  onNavigateToReferrals,
  onNavigateToBecomeCompanion,
  onNavigateToSpiritual,
  onOpenGitHubModal,
}) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [anonymousMode, setAnonymousMode] = useState(true);

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-y-auto pb-6 relative">
      {/* Top Status Bar */}
      <StatusBar />

      {/* Header matching presentation screen */}
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-stone-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1 -ml-1 rounded-full hover:bg-stone-100 active:scale-95 text-stone-700 transition-all"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <h2 className="text-base font-bold text-stone-900">Profil Saya</h2>
        </div>
      </div>

      <div className="px-5 pt-4 space-y-4">
        {/* User Card matching presentation */}
        <div className="p-4 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex items-center gap-4">
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-emerald-600/30"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
          </div>

          <div className="flex-1">
            <h3 className="font-extrabold text-base text-stone-900">
              {currentUser.name}
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              {currentUser.email}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold">
                {currentUser.role}
              </span>
              <span className="text-[10px] text-stone-400">
                Bergabung {currentUser.joinedDate}
              </span>
            </div>
          </div>
        </div>

        {/* GitHub Integration Badge */}
        <div
          onClick={onOpenGitHubModal}
          className="p-3.5 rounded-2xl bg-[#0f172a] text-white flex items-center justify-between shadow-sm cursor-pointer hover:bg-slate-900 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Github className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs">Terkoneksi GitHub</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-[11px] text-slate-300">
                kylilfat-a11y/sambung • Branch main
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
        </div>

        {/* Menu Items matching the presentation screenshot */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden divide-y divide-stone-100">
          {/* 1. Riwayat Konseling */}
          <button
            onClick={() => setActiveModal('riwayat')}
            className="w-full p-4 flex items-center justify-between hover:bg-stone-50 transition-colors text-left group"
          >
            <div className="flex items-center gap-3.5">
              <ClipboardList className="w-5 h-5 text-stone-400 group-hover:text-emerald-700 transition-colors" />
              <span className="text-xs font-semibold text-stone-800 group-hover:text-emerald-900">
                Riwayat Konseling
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 transition-colors" />
          </button>

          {/* 2. Rujukan Layanan */}
          <button
            onClick={onNavigateToReferrals}
            className="w-full p-4 flex items-center justify-between hover:bg-stone-50 transition-colors text-left group"
          >
            <div className="flex items-center gap-3.5">
              <RefreshCw className="w-5 h-5 text-stone-400 group-hover:text-emerald-700 transition-colors" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-stone-800 group-hover:text-emerald-900">
                  Rujukan Layanan
                </span>
                <span className="px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-800 text-[9px] font-bold">
                  1 Aktif
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 transition-colors" />
          </button>

          {/* 3. Pengingat & Notifikasi */}
          <button
            onClick={() => setActiveModal('pengingat')}
            className="w-full p-4 flex items-center justify-between hover:bg-stone-50 transition-colors text-left group"
          >
            <div className="flex items-center gap-3.5">
              <Bell className="w-5 h-5 text-stone-400 group-hover:text-emerald-700 transition-colors" />
              <span className="text-xs font-semibold text-stone-800 group-hover:text-emerald-900">
                Pengingat & Notifikasi
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 transition-colors" />
          </button>

          {/* 4. Pengaturan Privasi */}
          <button
            onClick={() => setActiveModal('privasi')}
            className="w-full p-4 flex items-center justify-between hover:bg-stone-50 transition-colors text-left group"
          >
            <div className="flex items-center gap-3.5">
              <Shield className="w-5 h-5 text-stone-400 group-hover:text-emerald-700 transition-colors" />
              <span className="text-xs font-semibold text-stone-800 group-hover:text-emerald-900">
                Pengaturan Privasi
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 transition-colors" />
          </button>

          {/* 5. Bantuan */}
          <button
            onClick={() => setActiveModal('bantuan')}
            className="w-full p-4 flex items-center justify-between hover:bg-stone-50 transition-colors text-left group"
          >
            <div className="flex items-center gap-3.5">
              <HelpCircle className="w-5 h-5 text-stone-400 group-hover:text-emerald-700 transition-colors" />
              <span className="text-xs font-semibold text-stone-800 group-hover:text-emerald-900">
                Bantuan
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 transition-colors" />
          </button>
        </div>

        {/* Extra Discovery Options */}
        <div className="space-y-2">
          <button
            onClick={onNavigateToBecomeCompanion}
            className="w-full p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center justify-between text-left hover:border-emerald-300 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-emerald-700" />
              <div>
                <h4 className="text-xs font-bold text-stone-900 group-hover:text-emerald-900">
                  Daftar Jadi Pendamping Sebaya
                </h4>
                <p className="text-[10px] text-stone-500">
                  Bantu sesama pemuda dengan pelatihan bersertifikat
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-400" />
          </button>

          <button
            onClick={onNavigateToSpiritual}
            className="w-full p-3.5 rounded-2xl bg-white border border-stone-200 flex items-center justify-between text-left hover:border-emerald-300 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <div>
                <h4 className="text-xs font-bold text-stone-900 group-hover:text-emerald-900">
                  Koleksi Doa & Dzikir Penenang Hati
                </h4>
                <p className="text-[10px] text-stone-500">
                  Amalan harian meredakan kecemasan & gundah
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-400" />
          </button>
        </div>
      </div>

      {/* Sub-Modals */}
      {activeModal === 'riwayat' && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-stone-900">
                Riwayat Konseling
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500"
              >
                ×
              </button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                <span className="text-[10px] text-stone-400 font-semibold">
                  12 Mei 2025 • Selesai
                </span>
                <p className="font-bold text-stone-800 mt-0.5">
                  Sesi Curhat Sebaya dengan Rani
                </p>
                <p className="text-stone-600 mt-1">
                  Mendiskusikan gejala insomnia dan disepakati membuat rujukan ke poli psikologi RS Islam Aisyiyah.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'pengingat' && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-stone-900">
                Pengingat & Notifikasi
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500"
              >
                ×
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-2 rounded-xl bg-stone-50">
                <span>Pengingat Jadwal Janji Rujukan</span>
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                  className="rounded text-emerald-800"
                />
              </label>
              <label className="flex items-center justify-between p-2 rounded-xl bg-stone-50">
                <span>Pengingat Dzikir Pagi & Petang</span>
                <input type="checkbox" defaultChecked className="rounded text-emerald-800" />
              </label>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'privasi' && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-stone-900">
                Pengaturan Privasi
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500"
              >
                ×
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-2 rounded-xl bg-stone-50">
                <div>
                  <p className="font-bold">Mode Anonim di Forum</p>
                  <p className="text-[10px] text-stone-500">
                    Sembunyikan identitas asli saat membalas diskusi
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={anonymousMode}
                  onChange={(e) => setAnonymousMode(e.target.checked)}
                  className="rounded text-emerald-800"
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'bantuan' && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-stone-900">
                Pusat Bantuan & Krisis
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500"
              >
                ×
              </button>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900">
                <p className="font-bold">Butuh Bantuan Mendesak?</p>
                <p className="text-[11px] mt-0.5">
                  Hubungi Hotline Krisis Nasional di 119 ext. 8 (24 Jam Gratis).
                </p>
              </div>
              <p className="text-stone-600">
                Email Dukungan SAMBUNG: support@sambung.id
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
