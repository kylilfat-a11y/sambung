import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { SambungLogo } from '../common/SambungLogo';
import { ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

interface OnboardingViewProps {
  onStart: () => void;
}

export const OnboardingView: React.FC<OnboardingViewProps> = ({ onStart }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Kamu Tidak Sendirian',
      subtitle:
        'SAMBUNG hadir untuk menemani kamu, dari mendengar, menemukan layanan yang tepat, hingga memastikan kamu benar-benar mendapatkan pertolongan.',
      tag: 'Dukungan Holistik & Spiritual',
    },
    {
      title: 'Dengarkan Tanpa Menghakimi',
      subtitle:
        'Ceritakan beban pikiranmu kepada pendamping sebaya yang terlatih secara aman, rahasia, dan terikat etika privasi.',
      tag: 'Pendamping Sebaya Terlatih',
    },
    {
      title: 'Temukan Layanan Tepat',
      subtitle:
        'Akses direktori rumah sakit Islam, puskesmas, klinik pratama, hingga telekonseling psikolog dengan biaya transparan.',
      tag: 'Direktori Terverifikasi',
    },
    {
      title: 'Kawal Sampai Tuntas',
      subtitle:
        'Bukan sekadar memberi saran, SAMBUNG memantau proses rujukan dan perkembangan kesehatan mentalmu secara berkelanjutan.',
      tag: 'Sistem Rujukan Berkelanjutan',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f6f9f7] text-stone-900 justify-between relative overflow-hidden select-none">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <StatusBar />
      </div>

      {/* Top Graphic Section (Minarets and Youth Silhouette) */}
      <div className="relative w-full h-[54%] bg-gradient-to-b from-[#e3efe8] via-[#d6ebd9] to-[#f6f9f7] pt-12 flex flex-col items-center justify-between overflow-hidden">
        {/* Subtle decorative Islamic geometric pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="islamic-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#1b4d3e" strokeWidth="0.8" />
                <circle cx="20" cy="20" r="4" fill="none" stroke="#1b4d3e" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-grid)" />
          </svg>
        </div>

        {/* Small top branding badge */}
        <div className="mt-4 z-10">
          <SambungLogo size="sm" />
        </div>

        {/* The Mosque Minaret & Silhouettes Artwork from presentation */}
        <div className="relative w-full flex-1 flex items-end justify-center px-4">
          <svg
            viewBox="0 0 360 260"
            className="w-full max-w-[340px] h-auto drop-shadow-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft Sun/Moon glow */}
            <circle cx="180" cy="110" r="75" fill="#fefae0" fillOpacity="0.7" />

            {/* Distant Mosque silhouette */}
            <path
              d="M100 230 V120 Q100 100 120 100 Q140 100 140 120 V230 Z"
              fill="#2e5d4e"
              opacity="0.3"
            />
            {/* Left Minaret */}
            <path
              d="M75 230 V70 L80 60 L85 70 V230 Z"
              fill="#204b3e"
              opacity="0.5"
            />
            <path
              d="M72 105 H88 M70 140 H90 M68 180 H92"
              stroke="#204b3e"
              strokeWidth="2"
              opacity="0.4"
            />
            <path d="M80 50 L80 60" stroke="#163e32" strokeWidth="2.5" />
            <circle cx="80" cy="48" r="2.5" fill="#e9c46a" />

            {/* Central Grand Dome */}
            <path
              d="M140 230 V130 C140 90 220 90 220 130 V230 Z"
              fill="#1d4d3f"
              opacity="0.4"
            />
            <path
              d="M180 82 C178 72 182 72 180 65"
              stroke="#1b4d3e"
              strokeWidth="2.5"
            />
            <circle cx="180" cy="62" r="3" fill="#e9c46a" />

            {/* Right Minaret */}
            <path
              d="M275 230 V85 L280 75 L285 85 V230 Z"
              fill="#1d473b"
              opacity="0.45"
            />
            <circle cx="280" cy="72" r="2" fill="#e9c46a" />

            {/* Foreground Landscape hill */}
            <path
              d="M0 240 Q180 180 360 240 L360 260 L0 260 Z"
              fill="#1b4d3e"
            />

            {/* Sitting youth silhouette looking thoughtfully toward minarets */}
            <g transform="translate(145, 155)">
              {/* Head / hair */}
              <circle cx="25" cy="18" r="11" fill="#0d2920" />
              {/* Neck & shoulders */}
              <path
                d="M14 36 C14 26 36 26 36 36 L40 68 C40 76 10 76 10 68 Z"
                fill="#0d2920"
              />
              {/* Arms / knees hugged */}
              <path
                d="M12 45 C5 52 8 72 26 72 C35 72 45 60 40 45"
                fill="#0d2920"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Content & Action Section */}
      <div className="flex-1 bg-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.04)] px-6 pt-7 pb-8 flex flex-col justify-between -mt-4 z-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold tracking-wide uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            {slides[activeSlide].tag}
          </span>

          <h1 className="text-2xl font-extrabold text-stone-900 tracking-tight leading-snug">
            {slides[activeSlide].title}
          </h1>

          <p className="mt-3 text-stone-600 text-[13.5px] leading-relaxed max-w-[320px]">
            {slides[activeSlide].subtitle}
          </p>

          {/* Pagination Dots matching presentation */}
          <div className="flex items-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all rounded-full ${
                  activeSlide === idx
                    ? 'w-6 h-2 bg-emerald-800'
                    : 'w-2 h-2 bg-stone-200 hover:bg-stone-300'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="w-full flex flex-col gap-2.5 mt-6">
          <button
            onClick={onStart}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#1B4D3E] hover:bg-[#153e32] active:scale-[0.99] text-white font-semibold text-[15px] shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Mulai</span>
          </button>

          <p className="text-[11px] text-center text-stone-600 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Aman, terpercaya, dan menjaga kerahasiaanmu
          </p>
        </div>
      </div>
    </div>
  );
};
