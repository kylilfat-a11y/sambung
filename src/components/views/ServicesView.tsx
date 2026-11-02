import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { mockServices } from '../../data/mockData';
import {
  ChevronLeft,
  Search,
  Building2,
  ChevronRight,
  Filter,
  Check,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ServicesViewProps {
  onBack: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onBack,
  onSelectService,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'terdekat' | 'terjangkau' | 'online'>('terdekat');
  const [priceFilter, setPriceFilter] = useState<string>('Semua Biaya');
  const [serviceTypeFilter, setServiceTypeFilter] = useState<string>('Semua Layanan');
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const filteredServices = mockServices.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'online') {
      return service.distance.includes('Online');
    }
    if (selectedCategory === 'terjangkau') {
      return service.priceRange.includes('Gratis') || service.priceRange.includes('25.000') || service.priceRange.includes('75.000');
    }

    if (priceFilter !== 'Semua Biaya') {
      if (priceFilter === 'Gratis / Subsidi' && !service.priceRange.includes('Gratis')) return false;
      if (priceFilter === '< Rp 100.000' && service.priceRange.includes('200.000')) return false;
    }

    if (serviceTypeFilter !== 'Semua Layanan') {
      if (!service.category.includes(serviceTypeFilter)) return false;
    }

    return true;
  });

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-y-auto pb-4">
      {/* Top Status Bar */}
      <StatusBar />

      {/* Header matching presentation screen */}
      <div className="px-5 py-2 flex items-center justify-between border-b border-stone-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 -ml-1.5 rounded-full hover:bg-stone-100 active:scale-95 text-stone-700 transition-all"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <h2 className="text-base font-bold text-stone-900">
            Layanan Kesehatan Mental
          </h2>
        </div>

        <button
          onClick={() => setShowFiltersModal(!showFiltersModal)}
          className="p-1.5 rounded-xl hover:bg-stone-100 text-stone-600 transition-colors"
          title="Filter Tambahan"
        >
          <Filter className="w-4 h-4" />
        </button>
      </div>

      <div className="px-5 pt-4 space-y-4">
        {/* Search Input matching presentation */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama layanan atau lokasi..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs px-1"
            >
              ×
            </button>
          )}
        </div>

        {/* Filter Chips matching presentation */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setSelectedCategory('terdekat')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'terdekat'
                ? 'bg-[#1B4D3E] text-white shadow-sm'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            Terdekat
          </button>

          <button
            onClick={() => {
              setPriceFilter(priceFilter === 'Semua Biaya' ? 'Gratis / Subsidi' : 'Semua Biaya');
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all flex items-center gap-1 ${
              priceFilter !== 'Semua Biaya'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <span>Biaya</span>
            <span className="text-[10px] text-stone-400">▾</span>
          </button>

          <button
            onClick={() => {
              setServiceTypeFilter(serviceTypeFilter === 'Semua Layanan' ? 'Psikolog' : 'Semua Layanan');
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all flex items-center gap-1 ${
              serviceTypeFilter !== 'Semua Layanan'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <span>Jenis Layanan</span>
            <span className="text-[10px] text-stone-400">▾</span>
          </button>

          <button
            onClick={() => setSelectedCategory(selectedCategory === 'online' ? 'terdekat' : 'online')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all ${
              selectedCategory === 'online'
                ? 'bg-[#1B4D3E] text-white'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            Telekonseling
          </button>
        </div>

        {/* Info banner about verified partners */}
        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-center gap-2.5 text-xs text-emerald-900">
          <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            Semua faskes mitra telah diverifikasi dan ramah nilai spiritual pemuda Muslim.
          </span>
        </div>

        {/* Services List matching presentation exactly */}
        <div className="flex flex-col gap-3">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="w-full p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 group"
            >
              <div className="flex items-start gap-3.5">
                {/* Green badge icon from presentation */}
                <div className="w-11 h-11 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5 h-5 text-emerald-800" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-stone-900 text-sm group-hover:text-emerald-900 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-[11px] text-stone-500 font-medium mt-0.5">
                    {service.category.join(', ')}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[11px] text-stone-600">
                    <span className="font-semibold text-emerald-800 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      {service.distance}
                    </span>
                    <span>•</span>
                    <span className="text-stone-700 font-medium">
                      {service.priceRange}
                    </span>
                  </div>

                  <div className="mt-1 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    {service.operatingHours}
                  </div>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-800 group-hover:translate-x-0.5 transition-all shrink-0" />
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-stone-200">
              <p className="text-stone-500 text-xs font-medium">
                Tidak ada layanan yang cocok dengan filter kamu.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('terdekat');
                  setPriceFilter('Semua Biaya');
                  setServiceTypeFilter('Semua Layanan');
                }}
                className="mt-3 text-xs font-bold text-emerald-800 underline"
              >
                Reset Semua Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
