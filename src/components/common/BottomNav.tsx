import React from 'react';
import { Home, Compass, MessageSquare, User } from 'lucide-react';
import { MainTab } from '../../types';

interface BottomNavProps {
  currentTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  unreadCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onSelectTab,
  unreadCount = 0,
}) => {
  const tabs = [
    {
      id: 'beranda' as MainTab,
      label: 'Beranda',
      icon: Home,
    },
    {
      id: 'layanan' as MainTab,
      label: 'Layanan',
      icon: Compass,
    },
    {
      id: 'pesan' as MainTab,
      label: 'Pesan',
      icon: MessageSquare,
      badge: unreadCount > 0 ? unreadCount : undefined,
    },
    {
      id: 'profil' as MainTab,
      label: 'Profil',
      icon: User,
    },
  ];

  return (
    <nav className="w-full bg-white border-t border-stone-200/80 px-4 py-2 flex items-center justify-around shrink-0 z-30 shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative ${
              isActive
                ? 'text-emerald-800 font-semibold scale-105'
                : 'text-stone-400 hover:text-stone-600 font-medium'
            }`}
          >
            <div className="relative">
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? 'stroke-[2.3]' : 'stroke-[1.8]'
                }`}
              />
              {tab.badge && (
                <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-4 text-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[11px] mt-1 tracking-tight">{tab.label}</span>
            {isActive && (
              <span className="w-1 h-1 bg-emerald-700 rounded-full mt-0.5" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
