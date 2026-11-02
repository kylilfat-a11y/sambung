import React from 'react';
import { StatusBar } from '../common/StatusBar';
import { SambungLogo } from '../common/SambungLogo';
import { currentUser, mockServices, mockReferralSteps } from '../../data/mockData';
import {
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
  Heart,
  MessageCircle,
  FileCheck2,
  Calendar,
} from 'lucide-react';

interface HomeViewProps {
  onNavigateToChat: () => void;
  onNavigateToServices: () => void;
  onSelectService: (serviceId: string) => void;
  onNavigateToReferral: () => void;
  onNavigateToProfile: () => void;
  onNavigateToSpiritual: () => void;
  onNavigateToDiscussions: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToChat,
  onNavigateToServices,
  onSelectService,
  onNavigateToReferral,
  onNavigateToProfile,
  onNavigateToSpiritual,
  onNavigateToDiscussions,
}) => {
  const nearbyService = mockServices[0]; // RS Islam Aisyiyah
  const activeReferral = mockReferralSteps.find((s) => s.status === 'Dalam Proses') || mockReferralSteps[2];

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-y-auto pb-6">
      {/* Top Status Bar */}
      <StatusBar />

      {/* Main Container */}
      <div className="px-5 pt-1 space-y-5">
        {/* Top Header matching presentation */}
        <div className="flex items-center justify-between">
          <SambungLogo size="sm" />
          <button
            onClick={onNavigateToProfile}
            className="w-9 h-9 rounded-full ring-2 ring-emerald-800/20 p-0.5 hover:ring-emerald-800 transition-all overflow-hidden relative shadow-sm"
            title="Profil Saya"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
          </button>
        </div>

        {/* Greeting Banner */}
        <div className="pt-1">
          <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
            Assalamu'alaikum, {currentUser.name}
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Hari ini, kamu sudah melangkah untuk menjadi lebih baik.
          </p>
        </div>

        {/* Hero Card: "Butuh Bercerita?" matching presentation */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#e8f4ed] via-[#d7ede0] to-[#c8e6d4] p-5 border border-emerald-200/70 overflow-hidden shadow-sm">
          {/* Subtle background ambient circles */}
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-emerald-200/40 blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-between max-w-[62%]">
            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                <Heart className="w-3 h-3 fill-emerald-700 text-emerald-700" />
                Ruang Aman
              </span>
              <h3 className="text-lg font-extrabold text-emerald-950 mt-1">
                Butuh Bercerita?
              </h3>
              <p className="text-[12px] text-emerald-900/80 leading-relaxed mt-1">
                Kamu bisa berbicara dengan pendamping sebaya atau konselor kami secara anonim.
              </p>
            </div>

            <button
              onClick={onNavigateToChat}
              className="mt-4 self-start px-4 py-2 rounded-xl bg-[#1B4D3E] hover:bg-[#143d31] active:scale-95 text-white text-xs font-bold shadow-md shadow-emerald-900/15 transition-all flex items-center gap-1.5"
            >
              <span>Mulai Bercerita</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Counselor Graphic on Right matching presentation illustration */}
          <div className="absolute right-2 bottom-1 w-32 h-36 flex items-end justify-center pointer-events-none">
            <svg viewBox="0 0 120 140" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Floor rug */}
              <ellipse cx="60" cy="130" rx="55" ry="8" fill="#a3d9bc" opacity="0.6" />
              {/* Listening Counselor Figure */}
              <g transform="translate(15, 20)">
                {/* Head */}
                <circle cx="50" cy="22" r="13" fill="#1b4d3e" />
                {/* Hijab/Hair flow */}
                <path d="M37 22 C37 10 63 10 63 22 C63 32 60 46 50 46 C40 46 37 32 37 22 Z" fill="#205948" />
                {/* Body torso sitting */}
                <path d="M35 48 C30 65 25 90 20 105 H78 C73 90 68 65 63 48 Z" fill="#1b4d3e" />
                {/* Knees folded */}
                <path d="M20 102 C15 95 30 85 48 85 C66 85 82 95 78 102 Z" fill="#153e32" />
                {/* Notepad / cup */}
                <rect x="42" y="70" width="14" height="18" rx="2" fill="#ffffff" opacity="0.9" transform="rotate(-10 42 70)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Section: Layanan Terdekat matching presentation */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-stone-900 text-sm tracking-tight">
              Layanan Terdekat
            </h3>
            <button
              onClick={onNavigateToServices}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-0.5 transition-colors"
            >
              Lihat Semua
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Card matching screenshot */}
          <div
            onClick={() => onSelectService(nearbyService.id)}
            className="w-full p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-stone-500 block">
                  Klinik Kesehatan Mental
                </span>
                <h4 className="font-bold text-stone-900 text-sm group-hover:text-emerald-900 transition-colors">
                  {nearbyService.name}
                </h4>
                <div className="flex items-center gap-2 mt-0.5 text-[11px] text-stone-600">
                  <span className="font-medium text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    {nearbyService.distance}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {nearbyService.operatingHours}
                  </span>
                </div>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>
        </div>

        {/* Section: Status Rujukan Aktif (Perjalanan Rujukan) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-stone-900 text-sm tracking-tight flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-emerald-700" />
              Perjalanan Rujukan Saya
            </h3>
            <button
              onClick={onNavigateToReferral}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-0.5 transition-colors"
            >
              Lihat Progres
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div
            onClick={onNavigateToReferral}
            className="w-full p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between gap-3 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">
                    Tahap 3 • Dalam Proses
                  </span>
                  <span className="text-[11px] text-stone-400 font-medium">
                    {activeReferral.date}
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-xs mt-1">
                  Janji Konsultasi Psikolog
                </h4>
                <p className="text-[11px] text-stone-600 line-clamp-1 mt-0.5">
                  RS Islam Aisyiyah • Bersiap 15 menit sebelum waktu
                </p>
              </div>
            </div>

            <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 group-hover:translate-x-0.5 transition-all shrink-0" />
          </div>
        </div>

        {/* Quick Discovery Cards (Nilai Spiritual & Forum Diskusi) */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Spiritual Space */}
          <button
            onClick={onNavigateToSpiritual}
            className="p-3.5 rounded-2xl bg-emerald-900 text-white text-left hover:bg-emerald-950 transition-all flex flex-col justify-between h-28 shadow-sm group"
          >
            <div className="flex items-center justify-between w-full">
              <span className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-200" />
              </span>
              <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div>
              <h4 className="font-bold text-xs">Ruang Spiritual</h4>
              <p className="text-[10px] text-emerald-200/80 mt-0.5">
                Doa & Dzikir penenang cemas
              </p>
            </div>
          </button>

          {/* Forum Diskusi */}
          <button
            onClick={onNavigateToDiscussions}
            className="p-3.5 rounded-2xl bg-white border border-stone-200/90 text-stone-900 text-left hover:border-emerald-300 transition-all flex flex-col justify-between h-28 shadow-sm group"
          >
            <div className="flex items-center justify-between w-full">
              <span className="w-8 h-8 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </span>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-stone-900 group-hover:text-emerald-900">
                Forum Diskusi
              </h4>
              <p className="text-[10px] text-stone-600 mt-0.5">
                Ruang bicara sesama pemuda
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
