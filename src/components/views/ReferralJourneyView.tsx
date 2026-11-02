import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { ReferralStep } from '../../types';
import {
  ChevronLeft,
  CheckCircle2,
  Clock,
  Hourglass,
  Calendar,
  FileText,
  MapPin,
  Sparkles,
  ExternalLink,
  QrCode,
  ShieldCheck,
} from 'lucide-react';

interface ReferralJourneyViewProps {
  steps: ReferralStep[];
  onBack: () => void;
  onUpdateStepStatus: (stepNumber: number, newStatus: 'Selesai' | 'Dalam Proses' | 'Menunggu') => void;
}

export const ReferralJourneyView: React.FC<ReferralJourneyViewProps> = ({
  steps,
  onBack,
  onUpdateStepStatus,
}) => {
  const [selectedStep, setSelectedStep] = useState<ReferralStep | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-y-auto relative pb-6">
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
          <h2 className="text-base font-bold text-stone-900">
            Perjalanan Rujukan Saya
          </h2>
        </div>

        <button
          onClick={() => setShowQrModal(true)}
          className="p-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold flex items-center gap-1 transition-colors"
          title="Tampilkan Kartu Rujukan Digital"
        >
          <QrCode className="w-3.5 h-3.5" />
          <span className="text-[11px]">Kartu Rujukan</span>
        </button>
      </div>

      <div className="px-6 pt-5 space-y-6">
        {/* Intro Banner */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Rujukan Berkelanjutan SAMBUNG
            </span>
          </div>
          <p className="text-xs text-stone-600 mt-1 leading-relaxed">
            Dari sesi curhat awal bersama pendamping sebaya, terhubung ke fasilitas profesional, hingga pemantauan pasca konsultasi.
          </p>
        </div>

        {/* Vertical Timeline matching the presentation layout */}
        <div className="relative pl-6 space-y-7 before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200">
          {steps.map((step) => {
            const isCompleted = step.status === 'Selesai';
            const isInProgress = step.status === 'Dalam Proses';
            const isPending = step.status === 'Menunggu';

            return (
              <div key={step.stepNumber} className="relative group">
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[30px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isCompleted
                      ? 'bg-emerald-700 text-white shadow-sm ring-4 ring-emerald-50'
                      : isInProgress
                      ? 'bg-amber-500 text-white shadow-sm ring-4 ring-amber-100 animate-pulse'
                      : 'bg-white border-2 border-stone-300 text-stone-400'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  ) : isInProgress ? (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  )}
                </div>

                {/* Step Card */}
                <div
                  onClick={() => setSelectedStep(step)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isInProgress
                      ? 'bg-white border-amber-300 shadow-md ring-1 ring-amber-200'
                      : 'bg-white border-stone-200 shadow-xs hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-extrabold text-stone-900 text-sm">
                        {step.stepNumber}. {step.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium mt-0.5">
                        {step.date} • {step.provider}
                      </p>
                    </div>

                    {/* Status Badge from presentation */}
                    {isCompleted && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold flex items-center gap-1 border border-emerald-200/60">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                        Selesai
                      </span>
                    )}

                    {isInProgress && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold flex items-center gap-1 border border-amber-200">
                        <Clock className="w-3 h-3 text-amber-600 animate-spin" />
                        Dalam Proses
                      </span>
                    )}

                    {isPending && (
                      <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-500 text-[11px] font-medium flex items-center gap-1">
                        <Hourglass className="w-3 h-3" />
                        Menunggu
                      </span>
                    )}
                  </div>

                  {step.notes && (
                    <p className="text-[11.5px] text-stone-600 mt-2.5 leading-relaxed bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                      {step.notes}
                    </p>
                  )}

                  {step.location && (
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium mt-2">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      <span>{step.location}</span>
                    </div>
                  )}

                  {isInProgress && (
                    <div className="mt-3 pt-2 border-t border-amber-100 flex items-center justify-between">
                      <span className="text-[10px] text-amber-700 font-semibold">
                        Jadwal terkonfirmasi di RS Islam Aisyiyah
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onUpdateStepStatus(step.stepNumber, 'Selesai');
                        }}
                        className="px-2.5 py-1 rounded-lg bg-emerald-800 text-white text-[11px] font-bold hover:bg-emerald-900 transition-colors"
                      >
                        Tandai Selesai ✓
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Card matching presentation */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50/60 border border-emerald-200/80 flex items-center gap-3 text-xs text-emerald-950 font-medium shadow-xs">
          <div className="w-8 h-8 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <span>
            Kami akan mengingatkan kamu untuk memastikan kamu tetap terhubung.
          </span>
        </div>
      </div>

      {/* QR Referral Pass Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-xs bg-white rounded-3xl p-6 text-center space-y-4 animate-in zoom-in-95 duration-200 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
              <QrCode className="w-6 h-6" />
            </div>

            <div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                ID Rujukan: SMB-2025-0514-RK
              </span>
              <h3 className="text-base font-extrabold text-stone-900 mt-1.5">
                Surat Pengantar Digital
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Tunjukkan QR code ini kepada petugas loket RS Islam Aisyiyah untuk verifikasi tarif subsidi SAMBUNG.
              </p>
            </div>

            {/* Simulated QR Code Canvas */}
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 inline-block">
              <div className="w-40 h-40 bg-white p-2 rounded-xl border border-stone-300 flex items-center justify-center relative">
                <svg viewBox="0 0 100 100" className="w-full h-full text-stone-900">
                  <rect width="100" height="100" fill="white" />
                  {/* Outer corner squares */}
                  <rect x="10" y="10" width="25" height="25" fill="#1b4d3e" rx="3" />
                  <rect x="15" y="15" width="15" height="15" fill="white" />
                  <rect x="19" y="19" width="7" height="7" fill="#1b4d3e" />

                  <rect x="65" y="10" width="25" height="25" fill="#1b4d3e" rx="3" />
                  <rect x="70" y="15" width="15" height="15" fill="white" />
                  <rect x="74" y="19" width="7" height="7" fill="#1b4d3e" />

                  <rect x="10" y="65" width="25" height="25" fill="#1b4d3e" rx="3" />
                  <rect x="15" y="70" width="15" height="15" fill="white" />
                  <rect x="19" y="74" width="7" height="7" fill="#1b4d3e" />

                  {/* Central pattern */}
                  <rect x="42" y="42" width="16" height="16" fill="#1b4d3e" rx="2" />
                  <circle cx="50" cy="50" r="4" fill="white" />
                </svg>
              </div>
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#1B4D3E] text-white font-bold text-xs hover:bg-emerald-900 transition-colors"
            >
              Tutup Kartu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
