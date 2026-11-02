/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ScreenType,
  MainTab,
  MentalHealthService,
  ChatMessage,
  DiscussionThread,
  ReferralStep,
  UserProfile,
} from './types';
import {
  currentUser,
  companionRani,
  mockServices,
  initialChatMessages,
  mockReferralSteps,
  mockDiscussions,
} from './data/mockData';

// Views
import { OnboardingView } from './components/views/OnboardingView';
import { ActionPickerView } from './components/views/ActionPickerView';
import { HomeView } from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { ServiceDetailView } from './components/views/ServiceDetailView';
import { ChatView } from './components/views/ChatView';
import { DiscussionDetailView } from './components/views/DiscussionDetailView';
import { ReferralJourneyView } from './components/views/ReferralJourneyView';
import { ProfileView } from './components/views/ProfileView';
import { SpiritualView } from './components/views/SpiritualView';
import { BecomeCompanionView } from './components/views/BecomeCompanionView';

// Modals & Navigation
import { BottomNav } from './components/common/BottomNav';
import { UserProfileModal } from './components/modals/UserProfileModal';
import { BookingModal } from './components/modals/BookingModal';
import { GitHubModal } from './components/modals/GitHubModal';

export default function App() {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('onboarding');
  const [currentTab, setCurrentTab] = useState<MainTab>('beranda');

  // Application Data State
  const [services, setServices] = useState<MentalHealthService[]>(mockServices);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(mockServices[0].id);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [discussions, setDiscussions] = useState<DiscussionThread[]>(mockDiscussions);
  const [selectedThread, setSelectedThread] = useState<DiscussionThread>(mockDiscussions[0]);
  const [referralSteps, setReferralSteps] = useState<ReferralStep[]>(mockReferralSteps);

  // Modals State
  const [inspectUser, setInspectUser] = useState<UserProfile | null>(null);
  const [bookingService, setBookingService] = useState<MentalHealthService | null>(null);
  const [showGitHubModal, setShowGitHubModal] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Chat message send handler with smart empathetic companion reply
  const handleSendMessage = (text: string) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderRole: 'user',
      avatar: currentUser.avatar,
      text,
      timestamp: new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setChatMessages((prev) => [...prev, newMsg]);

    // Simulated empathetic peer counselor replies based on topic
    setTimeout(() => {
      let replyText =
        'Terima kasih sudah bercerita, Raka. Perasaanmu sangat valid dan wajar dialami. Apakah kamu ingin kita jadwalkan sesi rujukan konsultasi di faskes mitra SAMBUNG seperti RS Islam Aisyiyah?';

      const lower = text.toLowerCase();
      if (lower.includes('cemas') || lower.includes('tidur') || lower.includes('insomnia')) {
        replyText =
          'Aku mengerti rasanya saat pikiran terus berputar di malam hari. Coba lakukan pernapasan 4-7-8 sambil membaca dzikir ketenangan hati di tab Ruang Spiritual. Kamu juga bisa membuat janji ke poli psikologi jika butuh evaluasi medis.';
      } else if (lower.includes('faskes') || lower.includes('rekomendasi') || lower.includes('layanan')) {
        replyText =
          'Untuk faskes terdekat yang ramah nilai islami, kami sangat merekomendasikan RS Islam Aisyiyah (1.2 km) atau Puskesmas Kecamatan yang bisa gratis dengan BPJS. Kamu bisa langsung klik menu Layanan untuk melihat profil lengkapnya.';
      } else if (lower.includes('doa') || lower.includes('dzikir')) {
        replyText =
          'Rasulullah SAW mengajarkan doa: "Allahumma inni a\'udzu bika minal hammi wal hazan...". Membaca ini dengan tadabbur sangat membantu melepaskan beban di dada.';
      }

      const companionReply: ChatMessage = {
        id: `reply-${Date.now()}`,
        senderId: companionRani.id,
        senderName: companionRani.name,
        senderRole: 'companion',
        avatar: companionRani.avatar,
        text: replyText,
        timestamp: new Date().toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setChatMessages((prev) => [...prev, companionReply]);
    }, 1200);
  };

  // Add reply to discussion thread
  const handleAddDiscussionReply = (threadId: string, content: string) => {
    const newReply = {
      id: `rep-${Date.now()}`,
      author: currentUser,
      content,
      timestamp: 'Baru saja',
      likes: 0,
    };

    setDiscussions((prev) =>
      prev.map((thread) => {
        if (thread.id === threadId) {
          return {
            ...thread,
            repliesCount: thread.repliesCount + 1,
            replies: [...thread.replies, newReply],
          };
        }
        return thread;
      })
    );

    setSelectedThread((prev) => {
      if (prev.id === threadId) {
        return {
          ...prev,
          repliesCount: prev.repliesCount + 1,
          replies: [...prev.replies, newReply],
        };
      }
      return prev;
    });

    showToast('Tanggapan berhasil dipublikasikan!');
  };

  // Toggle discussion like
  const handleToggleDiscussionLike = (threadId: string) => {
    setDiscussions((prev) =>
      prev.map((t) => {
        if (t.id === threadId) {
          const isLiked = !t.isLiked;
          return {
            ...t,
            isLiked,
            likes: isLiked ? t.likes + 1 : t.likes - 1,
          };
        }
        return t;
      })
    );

    setSelectedThread((prev) => {
      if (prev.id === threadId) {
        const isLiked = !prev.isLiked;
        return {
          ...prev,
          isLiked,
          likes: isLiked ? prev.likes + 1 : prev.likes - 1,
        };
      }
      return prev;
    });
  };

  // Update referral step status
  const handleUpdateReferralStep = (
    stepNumber: number,
    newStatus: 'Selesai' | 'Dalam Proses' | 'Menunggu'
  ) => {
    setReferralSteps((prev) =>
      prev.map((s) => (s.stepNumber === stepNumber ? { ...s, status: newStatus } : s))
    );
    showToast(`Tahap ${stepNumber} diperbarui menjadi ${newStatus}!`);
  };

  // Confirm appointment booking and add/advance referral step
  const handleConfirmBooking = (bookingData: {
    serviceName: string;
    date: string;
    time: string;
    specialist: string;
    notes: string;
  }) => {
    setReferralSteps((prev) =>
      prev.map((step) => {
        if (step.stepNumber === 3) {
          return {
            ...step,
            status: 'Dalam Proses',
            date: bookingData.date,
            provider: bookingData.specialist,
            notes: `Jadwal konsultasi terdaftar pada ${bookingData.date} pukul ${bookingData.time} di ${bookingData.serviceName}. Catatan keluhan: "${bookingData.notes}"`,
          };
        }
        return step;
      })
    );

    setBookingService(null);
    setCurrentScreen('rujukan');
    showToast('Janji konsultasi berhasil dibuat & masuk ke Perjalanan Rujukan!');
  };

  // Navigation router
  const handleTabChange = (tab: MainTab) => {
    setCurrentTab(tab);
    if (tab === 'beranda') setCurrentScreen('beranda');
    if (tab === 'layanan') setCurrentScreen('layanan');
    if (tab === 'pesan') setCurrentScreen('pesan');
    if (tab === 'profil') setCurrentScreen('profil');
  };

  const selectedService =
    services.find((s) => s.id === selectedServiceId) || services[0];

  // Whether current screen should show the Bottom Navigation Bar
  const shouldShowBottomNav =
    currentScreen === 'beranda' ||
    currentScreen === 'layanan' ||
    currentScreen === 'pesan' ||
    currentScreen === 'profil';

  return (
    <div className="w-full min-h-screen flex justify-center bg-white">
      {/* Mobile container - zero dark background behind */}
      <div className="w-full max-w-[430px] h-[100dvh] bg-white flex flex-col justify-between overflow-hidden relative sm:border-x sm:border-stone-200/60">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute top-12 left-4 right-4 z-50 bg-stone-900/95 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl text-center shadow-lg backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
            {toastMessage}
          </div>
        )}

        {/* View Switcher */}
        <div className="flex-1 overflow-hidden relative">
          {currentScreen === 'onboarding' && (
            <OnboardingView
              onStart={() => setCurrentScreen('action_picker')}
            />
          )}

          {currentScreen === 'action_picker' && (
            <ActionPickerView
              onSelectAction={(action) => {
                if (action === 'chat') {
                  setCurrentTab('pesan');
                  setCurrentScreen('pesan');
                } else if (action === 'services') {
                  setCurrentTab('layanan');
                  setCurrentScreen('layanan');
                } else if (action === 'become_companion') {
                  setCurrentScreen('jadi_pendamping');
                } else {
                  setCurrentTab('beranda');
                  setCurrentScreen('beranda');
                }
              }}
            />
          )}

          {currentScreen === 'beranda' && (
            <HomeView
              onNavigateToChat={() => {
                setCurrentTab('pesan');
                setCurrentScreen('pesan');
              }}
              onNavigateToServices={() => {
                setCurrentTab('layanan');
                setCurrentScreen('layanan');
              }}
              onSelectService={(serviceId) => {
                setSelectedServiceId(serviceId);
                setCurrentScreen('detail_layanan');
              }}
              onNavigateToReferral={() => setCurrentScreen('rujukan')}
              onNavigateToProfile={() => {
                setCurrentTab('profil');
                setCurrentScreen('profil');
              }}
              onNavigateToSpiritual={() => setCurrentScreen('spiritual')}
              onNavigateToDiscussions={() => {
                setCurrentTab('pesan');
                setCurrentScreen('pesan');
              }}
            />
          )}

          {currentScreen === 'layanan' && (
            <ServicesView
              onBack={() => {
                setCurrentTab('beranda');
                setCurrentScreen('beranda');
              }}
              onSelectService={(serviceId) => {
                setSelectedServiceId(serviceId);
                setCurrentScreen('detail_layanan');
              }}
            />
          )}

          {currentScreen === 'detail_layanan' && (
            <ServiceDetailView
              service={selectedService}
              onBack={() => setCurrentScreen('layanan')}
              onBookAppointment={(srv) => setBookingService(srv)}
            />
          )}

          {currentScreen === 'pesan' && (
            <ChatView
              onBack={() => {
                setCurrentTab('beranda');
                setCurrentScreen('beranda');
              }}
              chatMessages={chatMessages}
              onSendMessage={handleSendMessage}
              onOpenUserProfile={(user) => setInspectUser(user)}
              onOpenDiscussion={(thread) => {
                setSelectedThread(thread);
                setCurrentScreen('diskusi_detail');
              }}
              discussions={discussions}
              onQuickReferral={() => setCurrentScreen('rujukan')}
            />
          )}

          {currentScreen === 'diskusi_detail' && (
            <DiscussionDetailView
              thread={selectedThread}
              onBack={() => setCurrentScreen('pesan')}
              onOpenUserProfile={(user) => setInspectUser(user)}
              onAddReply={handleAddDiscussionReply}
              onToggleLike={handleToggleDiscussionLike}
            />
          )}

          {currentScreen === 'rujukan' && (
            <ReferralJourneyView
              steps={referralSteps}
              onBack={() => {
                setCurrentTab('beranda');
                setCurrentScreen('beranda');
              }}
              onUpdateStepStatus={handleUpdateReferralStep}
            />
          )}

          {currentScreen === 'profil' && (
            <ProfileView
              onBack={() => {
                setCurrentTab('beranda');
                setCurrentScreen('beranda');
              }}
              onNavigateToReferrals={() => setCurrentScreen('rujukan')}
              onNavigateToBecomeCompanion={() => setCurrentScreen('jadi_pendamping')}
              onNavigateToSpiritual={() => setCurrentScreen('spiritual')}
              onOpenGitHubModal={() => setShowGitHubModal(true)}
            />
          )}

          {currentScreen === 'spiritual' && (
            <SpiritualView
              onBack={() => {
                setCurrentTab('beranda');
                setCurrentScreen('beranda');
              }}
            />
          )}

          {currentScreen === 'jadi_pendamping' && (
            <BecomeCompanionView
              onBack={() => {
                setCurrentTab('beranda');
                setCurrentScreen('beranda');
              }}
            />
          )}
        </div>

        {/* Persistent Bottom Nav Bar when in main app tabs */}
        {shouldShowBottomNav && (
          <BottomNav
            currentTab={currentTab}
            onSelectTab={handleTabChange}
          />
        )}

        {/* User Profile Modal ("ditekan pengguna ya keluar ke pengguna") */}
        {inspectUser && (
          <UserProfileModal
            user={inspectUser}
            onClose={() => setInspectUser(null)}
            onSendMessage={(u) => {
              setInspectUser(null);
              setCurrentTab('pesan');
              setCurrentScreen('pesan');
            }}
          />
        )}

        {/* Appointment Booking Modal */}
        {bookingService && (
          <BookingModal
            service={bookingService}
            onClose={() => setBookingService(null)}
            onConfirmBooking={handleConfirmBooking}
          />
        )}

        {/* GitHub Connection & Sync Modal */}
        {showGitHubModal && (
          <GitHubModal onClose={() => setShowGitHubModal(false)} />
        )}
      </div>
    </div>
  );
}
