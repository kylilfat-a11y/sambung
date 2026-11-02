import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { MentalHealthService } from '../../types';
import {
  ChevronLeft,
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  Share2,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface ServiceDetailViewProps {
  service: MentalHealthService;
  onBack: () => void;
  onBookAppointment: (service: MentalHealthService) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onBookAppointment,
}) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-y-auto relative pb-20">
      {/* Top Image & Header */}
      <div className="relative w-full h-56 bg-stone-900 shrink-0">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <StatusBar dark />
        </div>

        {/* Top Action Nav */}
        <div className="absolute top-10 left-4 right-4 flex items-center justify-between z-20">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-stone-800 flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow-md"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={handleCopyLink}
            className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-stone-800 flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow-md"
            title="Bagikan Layanan"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {copiedNotice && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs px-3 py-1 rounded-full z-30 shadow-lg">
            Tautan tersalin!
          </div>
        )}
      </div>

      {/* Main Details Body */}
      <div className="px-5 pt-4 space-y-4">
        {/* Title, Rating & Verification */}
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Fasilitas Terverifikasi SAMBUNG
            </span>
          </div>

          <h1 className="text-xl font-extrabold text-stone-900 tracking-tight mt-1.5">
            {service.name}
          </h1>

          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{service.rating}</span>
            </div>
            <span className="text-stone-400 text-xs">•</span>
            <span className="text-stone-500 text-xs font-medium">
              ({service.reviewCount} ulasan)
            </span>
          </div>

          {/* Tags from presentation */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            {service.category.map((cat, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Location & Operating Hours */}
          <div className="flex items-center gap-3 mt-3 text-xs text-stone-600">
            <span className="flex items-center gap-1 text-emerald-800 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              {service.distance}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium text-emerald-700">
              <Clock className="w-3.5 h-3.5" />
              {service.operatingHours}
            </span>
          </div>
        </div>

        <hr className="border-stone-200" />

        {/* Informasi Layanan */}
        <div>
          <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider text-stone-500">
            Informasi Layanan
          </h2>
          <p className="text-xs text-stone-700 leading-relaxed mt-1.5 font-normal">
            {service.description}
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3">
            {service.facilities.map((fac, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-[11px] text-stone-600 bg-white p-2 rounded-xl border border-stone-100"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{fac}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Biaya */}
        <div>
          <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider text-stone-500">
            Biaya
          </h2>
          <p className="text-xs text-stone-800 font-semibold mt-1">
            {service.priceRange}{' '}
            <span className="font-normal text-stone-500">(tergantung layanan)</span>
          </p>
          <p className="text-[11px] text-emerald-700 mt-0.5">
            *Dapat memanfaatkan keringanan rujukan dan subsidi komunitas SAMBUNG.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider text-stone-500">
            Kontak
          </h2>
          <div className="space-y-1.5 mt-2">
            <div className="flex items-center gap-2 text-xs text-stone-700">
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-medium">{service.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-800">
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-medium underline cursor-pointer">
                {service.website}
              </span>
            </div>
          </div>
        </div>

        {/* Lokasi Alamat Lengkap */}
        <div className="p-3 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600">
          <div className="flex items-start gap-2">
            <Building className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-stone-800">Alamat Lengkap</p>
              <p className="text-[11px] text-stone-500 mt-0.5">{service.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar matching presentation screen */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white/95 backdrop-blur-md border-t border-stone-200/90 flex items-center gap-3 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <button
          onClick={() => setShowContactModal(true)}
          className="flex-1 py-3 px-4 rounded-xl border-2 border-[#1B4D3E] text-[#1B4D3E] font-bold text-xs hover:bg-emerald-50 active:scale-95 transition-all text-center"
        >
          Hubungi
        </button>

        <button
          onClick={() => onBookAppointment(service)}
          className="flex-1 py-3 px-4 rounded-xl bg-[#1B4D3E] hover:bg-[#143d31] text-white font-bold text-xs active:scale-95 transition-all shadow-md shadow-emerald-950/20 text-center flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Buat Janji</span>
        </button>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 space-y-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-stone-900">
                Hubungi {service.name}
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="w-7 h-7 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center hover:bg-stone-200"
              >
                ×
              </button>
            </div>

            <p className="text-xs text-stone-600">
              Pilih kanal komunikasi langsung untuk konfirmasi pendaftaran atau rujukan:
            </p>

            <div className="space-y-2">
              <a
                href={`https://wa.me/6281234567890?text=Halo%20${encodeURIComponent(service.name)},%20saya%20pengguna%20SAMBUNG%20ingin%20konsultasi`}
                target="_blank"
                rel="noreferrer"
                className="w-full p-3 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-between hover:bg-emerald-100 transition-colors"
              >
                <span>WhatsApp Poli Psikologi</span>
                <span>Buka Chat →</span>
              </a>

              <a
                href={`tel:${service.phone}`}
                className="w-full p-3 rounded-xl border border-stone-200 text-stone-800 font-bold text-xs flex items-center justify-between hover:bg-stone-50 transition-colors"
              >
                <span>Telepon Resepsionis ({service.phone})</span>
                <span>Panggil →</span>
              </a>
            </div>

            <button
              onClick={() => setShowContactModal(false)}
              className="w-full py-2.5 text-xs text-stone-500 font-semibold"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
