import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from '../common/StatusBar';
import {
  ChatMessage,
  DiscussionThread,
  UserProfile,
} from '../../types';
import { companionRani, currentUser, mockDiscussions } from '../../data/mockData';
import {
  ChevronLeft,
  Send,
  Sparkles,
  Users,
  MessageSquare,
  MessageCircle,
  ThumbsUp,
  Clock,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

interface ChatViewProps {
  onBack: () => void;
  chatMessages: ChatMessage[];
  onSendMessage: (text: string) => void;
  onOpenUserProfile: (user: UserProfile) => void;
  onOpenDiscussion: (thread: DiscussionThread) => void;
  discussions: DiscussionThread[];
  onQuickReferral: () => void;
}

export const ChatView: React.FC<ChatViewProps> = ({
  onBack,
  chatMessages,
  onSendMessage,
  onOpenUserProfile,
  onOpenDiscussion,
  discussions,
  onQuickReferral,
}) => {
  const [activeTab, setActiveTab] = useState<'companion' | 'forum'>('companion');
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab === 'companion') {
      scrollToBottom();
    }
  }, [chatMessages, activeTab, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    onSendMessage(text);

    // Simulate Rani replying with empathy
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1800);
  };

  const quickPrompts = [
    'Mau tahu opsi faskes terdekat',
    'Doa penenang ketika gelisah',
    'Bagaimana cara konseling pertama kali?',
  ];

  return (
    <div className="flex flex-col h-full bg-[#f8faf9] text-stone-900 select-none overflow-hidden relative">
      {/* Top Status Bar */}
      <StatusBar />

      {/* Header matching presentation screen */}
      <div className="px-4 py-2 border-b border-stone-200/70 bg-white/90 backdrop-blur-md flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBack}
            className="p-1 -ml-1 rounded-full hover:bg-stone-100 text-stone-700"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {activeTab === 'companion' ? (
            <div
              onClick={() => onOpenUserProfile(companionRani)}
              className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
              title="Lihat Profil Pendamping"
            >
              <div className="relative">
                <img
                  src={companionRani.avatar}
                  alt={companionRani.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-600/30"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                  <span>Pendamping Sebaya</span>
                </h3>
                <p className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="font-bold text-xs text-stone-900">
                Forum Diskusi Pemuda
              </h3>
              <p className="text-[10px] text-stone-500">
                Ruang berbagi dan saling menguatkan
              </p>
            </div>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-stone-100 p-0.5 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('companion')}
            className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
              activeTab === 'companion'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Pendamping
          </button>
          <button
            onClick={() => setActiveTab('forum')}
            className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
              activeTab === 'forum'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Diskusi
          </button>
        </div>
      </div>

      {/* Main Body */}
      {activeTab === 'companion' ? (
        <div className="flex-1 flex flex-col justify-between overflow-hidden">
          {/* Confidentiality Notice */}
          <div className="bg-emerald-50/70 border-b border-emerald-100 px-4 py-1.5 flex items-center justify-center gap-1.5 text-[10.5px] text-emerald-900 font-medium">
            <Sparkles className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>Percakapan ini dienkripsi & dilindungi kode etik kerahasiaan.</span>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {chatMessages.map((msg) => {
              const isMe = msg.senderRole === 'user';

              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${
                    isMe ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {!isMe && (
                    <button
                      onClick={() => onOpenUserProfile(companionRani)}
                      className="shrink-0 hover:scale-105 transition-transform"
                      title="Lihat profil Rani"
                    >
                      <img
                        src={msg.avatar}
                        alt={msg.senderName}
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-emerald-600/30"
                      />
                    </button>
                  )}

                  <div className={`max-w-[80%] flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-xs ${
                        isMe
                          ? 'bg-[#1B4D3E] text-white rounded-br-xs'
                          : 'bg-white text-stone-800 border border-stone-200/80 rounded-bl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>

                    <span className="text-[10px] text-stone-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2">
                <img
                  src={companionRani.avatar}
                  alt="Rani"
                  className="w-7 h-7 rounded-full object-cover"
                />
                <div className="bg-white border border-stone-200 px-3 py-2 rounded-2xl rounded-bl-xs text-xs text-stone-400 flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-1.5 bg-stone-50 border-t border-stone-200/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(prompt);
                }}
                className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-600 text-[11px] whitespace-nowrap hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar matching presentation */}
          <div className="p-3 bg-white border-t border-stone-200/80 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tulis pesan..."
              className="flex-1 px-4 py-2.5 bg-stone-100 rounded-full text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:bg-white transition-all"
            />

            <button
              onClick={handleSend}
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-full bg-[#1B4D3E] hover:bg-[#143d31] disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-all shadow-sm active:scale-95"
              aria-label="Kirim"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Forum Diskusi Feed ("misal ke diskusi a ke diskusi") */
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-bold text-stone-800">
              Topik Diskusi Hangat
            </span>
            <span className="text-[11px] text-emerald-800 font-semibold">
              {discussions.length} Diskusi Aktif
            </span>
          </div>

          {discussions.map((thread) => (
            <div
              key={thread.id}
              className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all space-y-2.5"
            >
              {/* Author Row ("ditekan pengguna ya keluar ke pengguna") */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => onOpenUserProfile(thread.author)}
                  className="flex items-center gap-2 text-left group"
                  title="Lihat profil pengguna"
                >
                  <img
                    src={thread.author.avatar}
                    alt={thread.author.name}
                    className="w-7 h-7 rounded-full object-cover group-hover:ring-2 group-hover:ring-emerald-600 transition-all"
                  />
                  <div>
                    <span className="font-bold text-xs text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {thread.author.name}
                    </span>
                    <span className="text-[10px] text-stone-400 block -mt-0.5">
                      {thread.author.role}
                    </span>
                  </div>
                </button>

                <span className="text-[10px] text-stone-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {thread.timestamp}
                </span>
              </div>

              {/* Title & summary clickable to discussion room ("ke diskusi a ke diskusi") */}
              <div
                onClick={() => onOpenDiscussion(thread)}
                className="cursor-pointer group/title"
              >
                <div className="inline-block px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-semibold mb-1">
                  {thread.category}
                </div>
                <h4 className="font-bold text-xs text-stone-900 group-hover/title:text-emerald-800 transition-colors">
                  {thread.title}
                </h4>
                <p className="text-[11px] text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                  {thread.content}
                </p>
              </div>

              {/* Footer actions */}
              <div className="pt-1 flex items-center justify-between border-t border-stone-100 text-xs text-stone-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px]">
                    <ThumbsUp className="w-3 h-3 text-stone-400" />
                    {thread.likes} Suka
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <MessageCircle className="w-3 h-3 text-stone-400" />
                    {thread.repliesCount} Balasan
                  </span>
                </div>

                <button
                  onClick={() => onOpenDiscussion(thread)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                >
                  <span>Buka Diskusi</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
