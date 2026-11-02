import React from 'react';
import { StatusBar } from '../common/StatusBar';
import { MessageSquare, Search, Users, Shield, ArrowRight } from 'lucide-react';
import { SambungLogo } from '../common/SambungLogo';

interface ActionPickerViewProps {
  onSelectAction: (action: 'chat' | 'services' | 'become_companion' | 'home') => void;
}

export const ActionPickerView: React.FC<ActionPickerViewProps> = ({
  onSelectAction,
}) => {
  return (
    <div className="flex flex-col h-full bg-white text-stone-900 justify-between select-none relative overflow-y-auto">
      {/* Top Status Bar */}
      <StatusBar />

      <div className="px-6 pt-4 pb-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Logo */}
          <div className="mb-6">
            <SambungLogo size="sm" />
          </div>

          {/* Heading */}
          <h2 className="text-[26px] font-extrabold text-stone-900 tracking-tight leading-tight max-w-[280px]">
            Apa yang ingin kamu lakukan hari ini?
          </h2>
          <p className="text-stone-500 text-xs mt-1.5">
            Pilih langkah nyamanmu, kami siap mendampingi setiap tahapnya.
          </p>

          {/* 3 Action Cards matching the screenshot */}
          <div className="flex flex-col gap-3.5 mt-7">
            {/* 1. Bercerita */}
            <button
              onClick={() => onSelectAction('chat')}
              className="w-full text-left p-4 rounded-2xl border border-stone-200/90 bg-[#fafcfb] hover:bg-emerald-50/50 hover:border-emerald-300 transition-all flex items-start gap-4 group active:scale-[0.99] shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-900">
                    Bercerita
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                  Punya sesuatu yang ingin disampaikan? Kami siap mendengarkan.
                </p>
              </div>
            </button>

            {/* 2. Cari Layanan */}
            <button
              onClick={() => onSelectAction('services')}
              className="w-full text-left p-4 rounded-2xl border border-stone-200/90 bg-[#fafcfb] hover:bg-emerald-50/50 hover:border-emerald-300 transition-all flex items-start gap-4 group active:scale-[0.99] shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Search className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-900">
                    Cari Layanan
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                  Temukan layanan kesehatan mental terdekat dan terpercaya.
                </p>
              </div>
            </button>

            {/* 3. Jadi Pendamping */}
            <button
              onClick={() => onSelectAction('become_companion')}
              className="w-full text-left p-4 rounded-2xl border border-stone-200/90 bg-[#fafcfb] hover:bg-emerald-50/50 hover:border-emerald-300 transition-all flex items-start gap-4 group active:scale-[0.99] shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-900">
                    Jadi Pendamping
                  </h3>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                  Ingin membantu teman atau sesama? Pelajari cara yang tepat.
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 mt-4">
          {/* Trust badge */}
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-900 text-xs font-medium">
            <Shield className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Semua layanan gratis, aman, dan rahasia.</span>
          </div>

          <button
            onClick={() => onSelectAction('home')}
            className="w-full text-center text-xs font-semibold text-stone-500 hover:text-emerald-800 py-3 mt-1 transition-colors"
          >
            Lewati dan Masuk ke Beranda →
          </button>
        </div>
      </div>
    </div>
  );
};
