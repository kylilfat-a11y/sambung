import React, { useState } from 'react';
import { MentalHealthService } from '../../types';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  ShieldCheck,
  X,
  CheckCircle2,
} from 'lucide-react';

interface BookingModalProps {
  service: MentalHealthService;
  onClose: () => void;
  onConfirmBooking: (bookingData: {
    serviceName: string;
    date: string;
    time: string;
    specialist: string;
    notes: string;
  }) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  service,
  onClose,
  onConfirmBooking,
}) => {
  const [selectedDate, setSelectedDate] = useState('20 Mei 2025');
  const [selectedTime, setSelectedTime] = useState('10.00 WIB');
  const [selectedSpecialist, setSelectedSpecialist] = useState('Psikolog Klinis (Dra. Nurul Hidayah, M.Psi)');
  const [notes, setNotes] = useState('Keluhan susah tidur dan cemas menjelang tugas akhir');
  const [isSuccess, setIsSuccess] = useState(false);

  const availableDates = ['20 Mei 2025', '21 Mei 2025', '22 Mei 2025', '25 Mei 2025'];
  const availableTimes = ['09.00 WIB', '10.00 WIB', '13.30 WIB', '15.00 WIB'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onConfirmBooking({
        serviceName: service.name,
        date: selectedDate,
        time: selectedTime,
        specialist: selectedSpecialist,
        notes,
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-5 space-y-4 animate-in slide-in-from-bottom duration-200 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-stone-900">
                Buat Janji Konsultasi
              </h3>
              <p className="text-[10px] text-stone-500">{service.name}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-stone-900 text-sm">
              Janji Berhasil Didaftarkan!
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Jadwal konsultasimu di {service.name} telah dicatat dalam <strong>Perjalanan Rujukan Saya</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            {/* Pick Date */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">
                Pilih Tanggal:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {availableDates.map((date) => (
                  <button
                    type="button"
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-2 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                      selectedDate === date
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Pick Time */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">
                Pilih Waktu Konsultasi:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {availableTimes.map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-xl border text-[11px] font-semibold text-center transition-all ${
                      selectedTime === time
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-700'
                        : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Specialist selection */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">
                Tenaga Ahli:
              </label>
              <select
                value={selectedSpecialist}
                onChange={(e) => setSelectedSpecialist(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
              >
                <option value="Psikolog Klinis (Dra. Nurul Hidayah, M.Psi)">
                  Psikolog Klinis - Dra. Nurul Hidayah, M.Psi
                </option>
                <option value="Psikiater Spesialis Jiwa (dr. Hafiz Al-Baqir, Sp.KJ)">
                  Psikiater - dr. Hafiz Al-Baqir, Sp.KJ
                </option>
                <option value="Konselor Kesehatan Mental Remaja">
                  Konselor Pendamping Remaja
                </option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="font-bold text-stone-700 block mb-1">
                Catatan Singkat Keluhan (Opsional):
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Misal: sering panik, susah konsentrasi..."
                className="w-full p-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
              />
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 rounded-xl border border-stone-200 text-stone-700 font-bold hover:bg-stone-50"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-[#1B4D3E] text-white font-bold hover:bg-emerald-900 shadow-md transition-all active:scale-95"
              >
                Konfirmasi Janji
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
