import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface StatusBarProps {
  dark?: boolean;
}

export const StatusBar: React.FC<StatusBarProps> = ({ dark = false }) => {
  return (
    <div
      className={`w-full px-6 pt-3 pb-2 flex items-center justify-between text-xs select-none transition-colors ${
        dark ? 'text-white' : 'text-stone-800'
      }`}
    >
      <span className="font-semibold tracking-tight text-[13px]">9:41</span>
      <div className="flex items-center gap-2">
        {/* Cellular bars */}
        <div className="flex items-end gap-0.5 h-3">
          <span className={`w-0.5 h-1.5 rounded-sm ${dark ? 'bg-white' : 'bg-stone-800'}`} />
          <span className={`w-0.5 h-2 rounded-sm ${dark ? 'bg-white' : 'bg-stone-800'}`} />
          <span className={`w-0.5 h-2.5 rounded-sm ${dark ? 'bg-white' : 'bg-stone-800'}`} />
          <span className={`w-0.5 h-3 rounded-sm ${dark ? 'bg-white' : 'bg-stone-800'}`} />
        </div>
        <Wifi className="w-3.5 h-3.5" />
        <div className="flex items-center gap-0.5">
          <Battery className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
