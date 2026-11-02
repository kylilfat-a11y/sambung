export type ScreenType =
  | 'onboarding'
  | 'action_picker'
  | 'beranda'
  | 'layanan'
  | 'detail_layanan'
  | 'pesan'
  | 'diskusi_detail'
  | 'rujukan'
  | 'profil'
  | 'spiritual'
  | 'jadi_pendamping';

export type MainTab = 'beranda' | 'layanan' | 'pesan' | 'profil';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'Pengguna' | 'Pendamping Sebaya' | 'Psikolog Mitra';
  avatar: string;
  bio: string;
  joinedDate: string;
  status?: string;
  isOnline?: boolean;
  totalConsultations?: number;
  totalDiscussions?: number;
}

export interface MentalHealthService {
  id: string;
  name: string;
  category: string[];
  distance: string;
  priceRange: string;
  operatingHours: string;
  rating: number;
  reviewCount: number;
  description: string;
  address: string;
  phone: string;
  website: string;
  image: string;
  facilities: string[];
  isVerified: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'user' | 'companion' | 'system';
  avatar: string;
  text: string;
  timestamp: string;
  isQuickAction?: boolean;
}

export interface DiscussionReply {
  id: string;
  author: UserProfile;
  content: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

export interface DiscussionThread {
  id: string;
  title: string;
  category: string;
  author: UserProfile;
  summary: string;
  content: string;
  timestamp: string;
  repliesCount: number;
  likes: number;
  isLiked?: boolean;
  replies: DiscussionReply[];
}

export type ReferralStepStatus = 'Selesai' | 'Dalam Proses' | 'Menunggu';

export interface ReferralStep {
  stepNumber: number;
  title: string;
  date: string;
  provider: string;
  status: ReferralStepStatus;
  notes?: string;
  location?: string;
  doctor?: string;
}

export interface DoaItem {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  source: string;
  benefit: string;
}
