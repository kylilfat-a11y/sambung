import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import {
  ChevronLeft,
  Users,
  ShieldCheck,
  HeartHandshake,
  Compass,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';

interface BecomeCompanionViewProps {
  onBack: () => void;
}

export const BecomeCompanionView: React.FC<BecomeCompanionViewProps> = ({
  onBack,
}) => {
  const [name, setName] = useState('Raka Pratama');
  const [institution, setInstitution] = useState('Universitas Islam Negeri');
  const [motivation, setMotivation] = useState('Ingin menjadi teman dengar yang aman bagi sesama pemuda dan belajar etika pendampingan.');
  const [submitted, setSubmitted] = useState(false);

  const pillars = [
    {
      step: '1. Dengarkan',
      title: 'Ruang Aman Tanpa Menghakimi',
      desc: 'Mendengarkan keluh kesah teman sebaya dengan empati murni dan menjaga kerahasiaan 100%.',
    },
    {
      step: '2. Temukan',
      title: 'Pilih Faskes yang Tepat',
      desc: 'Membantu mengidentifikasi apakah teman butuh konselor sebaya atau rujukan medis (psikolog/psikiater).',
    },
    {
      step: '3. Sambungkan',
      title: 'Dukungan Administratif',
      desc: 'Membantu menavigasi proses pendaftaran faskes terdekat agar teman tidak merasa kebingungan.',
    },
    {
      step: '4. Pastikan Akses',
      title: 'Tindak Lanjut Berkelanjutan',
      desc: 'Memastikan teman benar-benar menghadiri janji konsultasi dan mendampingi pasca sesi.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-y-auto pb-6 relative">
      {/* Top Status Bar */}
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
            Jadi Pendamping Sebaya
          </h2>
        </div>
      </div>

      <div className="px-5 pt-4 space-y-4">
        {/* Banner from presentation */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-900 text-white shadow-sm space-y-2">
          <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-emerald-200 text-[10px] font-bold tracking-wide uppercase">
            Program Relawan SAMBUNG
          </span>
          <h3 className="text-base font-extrabold leading-snug">
            "Bukan hanya memberi saran, tapi memastikan kamu benar-benar sampai."
          </h3>
          <p className="text-xs text-emerald-200/90 leading-relaxed">
            Jadilah jembatan kebaikan pertama bagi teman yang sedang terpuruk atau merasa sendirian.
          </p>
        </div>

        {/* 4 Pillars matching presentation */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
            Alur Pendampingan SAMBUNG
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-stone-900">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-emerald-700" />
            <h3 className="font-bold text-xs text-stone-900 uppercase tracking-wider">
              Formulir Pendaftaran Relawan
            </h3>
          </div>

          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
              <h4 className="font-extrabold text-stone-900 text-sm">
                Pendaftaran Berhasil Dikirim!
              </h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Terima kasih atas niat tulusmu. Tim koordinator SAMBUNG akan menghubungimu via email ({name}) untuk jadwal orientasi dasar psikososial.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  Nama Lengkap:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-800"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  Kampus / Organisasi:
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  required
                  className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-800"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  Motivasi Bergabung:
                </label>
                <textarea
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  rows={3}
                  required
                  className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#1B4D3E] hover:bg-[#143d31] text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                Kirim Pendaftaran Pendamping
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
