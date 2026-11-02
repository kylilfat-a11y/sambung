import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { mockDoaList } from '../../data/mockData';
import {
  ChevronLeft,
  Sparkles,
  BookOpen,
  Volume2,
  Heart,
  RotateCcw,
} from 'lucide-react';

interface SpiritualViewProps {
  onBack: () => void;
}

export const SpiritualView: React.FC<SpiritualViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'doa' | 'dzikir'>('doa');
  const [dzikirCount, setDzikirCount] = useState(0);
  const [currentDzikirIndex, setCurrentDzikirIndex] = useState(0);

  const dzikirItems = [
    {
      arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
      latin: 'Hasbunallahu wa ni’mal wakil',
      meaning: 'Cukuplah Allah menjadi Penolong kami dan Allah adalah sebaik-baik Pelindung.',
      target: 33,
    },
    {
      arabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
      latin: 'Laa ilaaha illaa Anta, subhaanaka innii kuntu minaz-zhaalimiin',
      meaning: 'Tidak ada Tuhan selain Engkau, Maha Suci Engkau, sungguh aku termasuk orang-orang yang zalim.',
      target: 33,
    },
    {
      arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ',
      latin: 'Astaghfirullahal ‘azhim wa atuubu ilaih',
      meaning: 'Aku memohon ampunan kepada Allah Yang Maha Agung dan aku bertaubat kepada-Nya.',
      target: 33,
    },
  ];

  const currentDzikir = dzikirItems[currentDzikirIndex];

  const handleIncrement = () => {
    if (dzikirCount + 1 >= currentDzikir.target) {
      setDzikirCount(0);
      setCurrentDzikirIndex((prev) => (prev + 1) % dzikirItems.length);
    } else {
      setDzikirCount((c) => c + 1);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-y-auto pb-6 relative">
      {/* Status Bar */}
      <StatusBar />

      {/* Header */}
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-stone-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1 -ml-1 rounded-full hover:bg-stone-100 text-stone-700"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <h2 className="text-base font-bold text-stone-900">
            Ruang Ketenangan Spiritual
          </h2>
        </div>

        {/* Tab switch */}
        <div className="flex bg-stone-100 p-0.5 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('doa')}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeTab === 'doa' ? 'bg-white text-emerald-900 shadow-xs' : 'text-stone-500'
            }`}
          >
            Doa Penenang
          </button>
          <button
            onClick={() => setActiveTab('dzikir')}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeTab === 'dzikir' ? 'bg-white text-emerald-900 shadow-xs' : 'text-stone-500'
            }`}
          >
            Tasbih Dzikir
          </button>
        </div>
      </div>

      <div className="px-5 pt-4 space-y-4">
        {/* Ayat banner */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[10px] font-bold text-emerald-300 tracking-wider uppercase">
              QS. Ar-Ra'd : 28
            </span>
            <p className="font-serif text-lg leading-relaxed mt-2 text-right text-emerald-100">
              أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
            </p>
            <p className="text-xs text-emerald-200/90 mt-2 italic leading-relaxed">
              "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram."
            </p>
          </div>
        </div>

        {activeTab === 'doa' ? (
          /* Doa List */
          <div className="space-y-4">
            {mockDoaList.map((doa) => (
              <div
                key={doa.id}
                className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xs text-emerald-950">
                    {doa.title}
                  </h3>
                  <span className="text-[10px] text-stone-400 font-medium">
                    {doa.source}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <p className="font-serif text-lg text-right text-stone-900 leading-loose">
                    {doa.arabic}
                  </p>
                  <p className="text-xs text-emerald-800 font-medium italic mt-2">
                    {doa.transliteration}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">
                    Artinya:
                  </h4>
                  <p className="text-xs text-stone-700 leading-relaxed mt-0.5">
                    "{doa.meaning}"
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50/70 text-[11px] text-emerald-900 flex items-start gap-2">
                  <Heart className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{doa.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Digital Dzikir Counter */
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col items-center text-center space-y-5">
            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                Dzikir Penentram Hati
              </span>
              <p className="font-serif text-2xl text-stone-900 leading-loose mt-3">
                {currentDzikir.arabic}
              </p>
              <p className="text-xs text-emerald-800 font-medium italic mt-1">
                "{currentDzikir.latin}"
              </p>
              <p className="text-xs text-stone-500 mt-2 max-w-[260px] mx-auto">
                {currentDzikir.meaning}
              </p>
            </div>

            {/* Counter Circle Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleIncrement}
                className="w-36 h-36 rounded-full bg-gradient-to-b from-[#1B4D3E] to-[#12362b] text-white shadow-xl shadow-emerald-900/25 flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-all ring-8 ring-emerald-50 cursor-pointer"
              >
                <span className="text-4xl font-black font-sans">{dzikirCount}</span>
                <span className="text-[11px] text-emerald-200 font-medium mt-1">
                  / {currentDzikir.target}
                </span>
                <span className="text-[9px] text-emerald-300 uppercase tracking-wider mt-0.5">
                  Ketuk di sini
                </span>
              </button>

              <button
                onClick={() => setDzikirCount(0)}
                className="mt-4 flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Hitungan</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
