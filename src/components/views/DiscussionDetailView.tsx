import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { DiscussionThread, UserProfile } from '../../types';
import { currentUser } from '../../data/mockData';
import {
  ChevronLeft,
  ThumbsUp,
  MessageCircle,
  Share2,
  Send,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface DiscussionDetailViewProps {
  thread: DiscussionThread;
  onBack: () => void;
  onOpenUserProfile: (user: UserProfile) => void;
  onAddReply: (threadId: string, content: string) => void;
  onToggleLike: (threadId: string) => void;
}

export const DiscussionDetailView: React.FC<DiscussionDetailViewProps> = ({
  thread,
  onBack,
  onOpenUserProfile,
  onAddReply,
  onToggleLike,
}) => {
  const [replyText, setReplyText] = useState('');

  const handleSubmitReply = () => {
    if (!replyText.trim()) return;
    onAddReply(thread.id, replyText);
    setReplyText('');
  };

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-hidden relative">
      {/* Top Status Bar */}
      <StatusBar />

      {/* Top Header */}
      <div className="px-4 py-2 border-b border-stone-200/70 bg-white/90 backdrop-blur-md flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1 -ml-1 rounded-full hover:bg-stone-100 text-stone-700 transition-all"
            aria-label="Kembali ke Diskusi"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <span className="font-bold text-xs text-stone-900 truncate max-w-[220px]">
            {thread.title}
          </span>
        </div>

        <button
          onClick={() => onToggleLike(thread.id)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
            thread.isLiked
              ? 'bg-rose-50 text-rose-600'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <ThumbsUp className="w-3.5 h-3.5" />
          <span>{thread.likes}</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Main Post Card */}
        <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
          {/* Author info (Clickable to open user profile: "ditekan pengguna ya keluar ke pengguna") */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => onOpenUserProfile(thread.author)}
              className="flex items-center gap-2.5 text-left group"
              title="Lihat profil pengguna"
            >
              <img
                src={thread.author.avatar}
                alt={thread.author.name}
                className="w-9 h-9 rounded-full object-cover group-hover:ring-2 group-hover:ring-emerald-700 transition-all"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {thread.author.name}
                  </h4>
                  <span className="px-1.5 py-0.2 rounded-md bg-stone-100 text-[10px] text-stone-600 font-medium">
                    {thread.author.role}
                  </span>
                </div>
                <span className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" />
                  {thread.timestamp}
                </span>
              </div>
            </button>

            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold">
              {thread.category}
            </span>
          </div>

          <h1 className="text-sm font-extrabold text-stone-900 leading-snug">
            {thread.title}
          </h1>

          <p className="text-xs text-stone-700 leading-relaxed font-normal whitespace-pre-line">
            {thread.content}
          </p>

          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[11px] text-emerald-800 font-semibold">
                <MessageCircle className="w-3.5 h-3.5" />
                {thread.replies.length} Balasan
              </span>
            </div>
            <span className="text-[10px] text-stone-400">
              Diskusi diawasi moderator pendamping
            </span>
          </div>
        </div>

        {/* Replies List */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wider px-1">
            Balasan & Tanggapan ({thread.replies.length})
          </h3>

          {thread.replies.map((reply) => (
            <div
              key={reply.id}
              className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs space-y-2 hover:border-emerald-200 transition-all"
            >
              <div className="flex items-center justify-between">
                {/* Author clickable to open profile */}
                <button
                  onClick={() => onOpenUserProfile(reply.author)}
                  className="flex items-center gap-2 text-left group"
                  title="Lihat profil pengguna"
                >
                  <img
                    src={reply.author.avatar}
                    alt={reply.author.name}
                    className="w-7 h-7 rounded-full object-cover group-hover:ring-2 group-hover:ring-emerald-600 transition-all"
                  />
                  <div>
                    <span className="font-bold text-xs text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {reply.author.name}
                    </span>
                    <span className="text-[10px] text-emerald-800 block -mt-0.5 font-medium">
                      {reply.author.role}
                    </span>
                  </div>
                </button>

                <span className="text-[10px] text-stone-400">
                  {reply.timestamp}
                </span>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed pl-9">
                {reply.content}
              </p>

              <div className="pl-9 pt-1 flex items-center gap-3 text-[11px] text-stone-500">
                <span className="flex items-center gap-1 text-stone-500">
                  <ThumbsUp className="w-3 h-3" />
                  {reply.likes}
                </span>
                <button
                  onClick={() => setReplyText(`@${reply.author.name} `)}
                  className="text-emerald-800 font-semibold hover:underline"
                >
                  Balas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reply Input Bar */}
      <div className="p-3 bg-white border-t border-stone-200 shrink-0 flex items-center gap-2">
        <input
          type="text"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmitReply()}
          placeholder={`Tulis tanggapan untuk ${thread.author.name}...`}
          className="flex-1 px-4 py-2 bg-stone-100 rounded-full text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:bg-white transition-all"
        />

        <button
          onClick={handleSubmitReply}
          disabled={!replyText.trim()}
          className="w-9 h-9 rounded-full bg-[#1B4D3E] hover:bg-[#143d31] disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-all shadow-sm active:scale-95"
          aria-label="Kirim balasan"
        >
          <Send className="w-4 h-4 ml-0.5" />
        </button>
      </div>
    </div>
  );
};
