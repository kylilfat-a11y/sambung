import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const SambungLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SAMBUNG stylized sprout icon */}
      <div
        className={`${iconSizes[size]} flex items-center justify-center rounded-2xl bg-emerald-800/10 text-emerald-800 p-1.5 shrink-0`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-emerald-800 drop-shadow-sm"
        >
          {/* Stem & Leaves */}
          <circle cx="50" cy="50" r="46" fill="#1B4D3E" opacity="0.08" />
          {/* Main Leaf */}
          <path
            d="M50 82C50 82 48 55 28 44C24 41 24 35 28 32C35 27 50 34 50 56C50 32 65 24 73 29C77 32 76 38 72 42C52 53 50 82 50 82Z"
            fill="#1B4D3E"
          />
          {/* Inner Light Leaf Accent */}
          <path
            d="M50 78C50 78 52 50 68 38C71 35 73 38 70 41C56 50 51 78 50 78Z"
            fill="#40916C"
          />
          <circle cx="50" cy="22" r="7" fill="#1B4D3E" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-tight text-emerald-950 font-sans ${textSizes[size]}`}
          style={{ letterSpacing: '-0.03em' }}
        >
          SAMBUNG
        </span>
        {showSubtitle && (
          <span className="text-[11px] font-medium text-emerald-800 tracking-normal mt-0.5">
            Dari Cerita Menuju Pertolongan Nyata
          </span>
        )}
      </div>
    </div>
  );
};
