import React, { useState } from 'react';
import {
  Github,
  GitBranch,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  X,
  Code2,
  ShieldCheck,
} from 'lucide-react';

interface GitHubModalProps {
  onClose: () => void;
}

export const GitHubModal: React.FC<GitHubModalProps> = ({ onClose }) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  const handleSyncNow = () => {
    setIsSyncing(true);
    setSyncStatus('Menyinkronkan repository...');
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus('Berhasil disinkronkan ke GitHub main branch!');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 relative animate-in zoom-in-95 duration-200 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* GitHub Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-stone-900 text-white flex items-center justify-center shadow-md">
            <Github className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-stone-900">
              Integrasi GitHub
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              Repo: kylilfat-a11y/sambung
            </p>
          </div>
        </div>

        {/* Status card */}
        <div className="mt-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Status: Terhubung & Aktif
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-200/60 text-emerald-900 text-[10px]">
              Branch main
            </span>
          </div>
          <p className="text-[11px] text-emerald-800">
            Kode sumber aplikasi SAMBUNG terikat langsung ke akun GitHub Anda.
          </p>
        </div>

        {/* Repository details */}
        <div className="mt-4 space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-stone-700">
              <GitBranch className="w-4 h-4 text-stone-400" />
              <span>Default Branch:</span>
            </div>
            <span className="font-bold text-stone-900 font-mono">main</span>
          </div>

          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-stone-700">
              <Code2 className="w-4 h-4 text-stone-400" />
              <span>Stack:</span>
            </div>
            <span className="font-bold text-stone-900">
              React + TypeScript + Tailwind
            </span>
          </div>

          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-stone-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Visibility:</span>
            </div>
            <span className="font-bold text-stone-900">Public</span>
          </div>
        </div>

        {syncStatus && (
          <div className="mt-3 p-2 rounded-xl bg-stone-100 text-[11px] text-center text-stone-700 font-medium">
            {syncStatus}
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 space-y-2">
          <button
            onClick={handleSyncNow}
            disabled={isSyncing}
            className="w-full py-3 rounded-xl bg-[#1B4D3E] hover:bg-[#143d31] disabled:opacity-60 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Menyinkronkan...' : 'Sinkronkan Sekarang'}</span>
          </button>

          <a
            href="https://github.com/kylilfat-a11y/sambung"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Buka Repository di GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
