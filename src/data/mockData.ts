import {
  UserProfile,
  MentalHealthService,
  ChatMessage,
  DiscussionThread,
  ReferralStep,
  DoaItem,
} from '../types';

export const currentUser: UserProfile = {
  id: 'user_raka',
  name: 'Raka',
  email: 'raka@student.ac.id',
  role: 'Pengguna',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  bio: 'Mahasiswa tingkat akhir yang sedang berproses belajar menjaga kesehatan jiwa dan mentalitas islami.',
  joinedDate: 'Januari 2025',
  status: 'Aktif mencari pendampingan',
  totalConsultations: 2,
  totalDiscussions: 5,
};

export const companionRani: UserProfile = {
  id: 'companion_rani',
  name: 'Rani Maharani',
  email: 'rani.sebaya@sambung.id',
  role: 'Pendamping Sebaya',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  bio: 'Pendamping Sebaya bersertifikat SAMBUNG & Mahasiswi Psikologi Islam. Siap mendengarkan tanpa menghakimi dengan prinsip kerahasiaan penuh.',
  joinedDate: 'November 2024',
  status: 'Online & Siap Mendengarkan',
  isOnline: true,
  totalConsultations: 48,
  totalDiscussions: 19,
};

export const mockUsers: Record<string, UserProfile> = {
  user_raka: currentUser,
  companion_rani: companionRani,
  user_ahmad: {
    id: 'user_ahmad',
    name: 'Ahmad Fauzi',
    email: 'ahmad.f@gmail.com',
    role: 'Pengguna',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    bio: 'Penggiat pemuda masjid & pekerja kreatif. Senang berbagi pengalaman mengatasi burnout dan overthinking.',
    joinedDate: 'Maret 2025',
    status: 'Aktif berdiskusi',
    totalConsultations: 1,
    totalDiscussions: 14,
  },
  user_aisyah: {
    id: 'user_aisyah',
    name: 'Aisyah Putri',
    email: 'aisyah.p@outlook.com',
    role: 'Pengguna',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    bio: 'Pernah berjuang melawan gangguan kecemasan. Menemukan ketenangan lewat terapi medis dan dzikir harian.',
    joinedDate: 'Februari 2025',
    status: 'Alumni rujukan SAMBUNG',
    totalConsultations: 4,
    totalDiscussions: 22,
  },
  user_dr_hafiz: {
    id: 'user_dr_hafiz',
    name: 'dr. Hafiz Al-Baqir, Sp.KJ',
    email: 'hafiz.kj@rsaisyiyah.or.id',
    role: 'Psikolog Mitra',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    bio: 'Spesialis Kedokteran Jiwa di RS Islam Aisyiyah. Mengedepankan pendekatan biopsikososiospiritual.',
    joinedDate: 'Desember 2024',
    status: 'Konsultan Ahli',
    totalConsultations: 85,
    totalDiscussions: 32,
  },
};

export const mockServices: MentalHealthService[] = [
  {
    id: 'rs-islam-aisyiyah',
    name: 'RS Islam Aisyiyah',
    category: ['Konseling', 'Psikolog', 'Psikiater'],
    distance: '1.2 km',
    priceRange: 'Rp 50.000 - 150.000',
    operatingHours: 'Buka 08.00 - 16.00',
    rating: 4.8,
    reviewCount: 120,
    description:
      'Konseling individual, terapi kelompok, psikiater, dan layanan rawat jalan dengan lingkungan yang ramah, islami, dan mengutamakan privasi pasien.',
    address: 'Jl. KH. Ahmad Dahlan No. 42, Gondomanan, Yogyakarta',
    phone: '0812-3456-7890',
    website: 'rsaisyiyah.or.id',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    facilities: ['Ruang Konseling Privat', 'Apotek Jiwa Lengkap', 'Musholla Sejuk', 'Parkir Luas', 'BPJS Kesehatan Tersedia'],
    isVerified: true,
  },
  {
    id: 'puskesmas-kecamatan',
    name: 'Puskesmas Kecamatan',
    category: ['Konseling', 'Psikolog'],
    distance: '2.4 km',
    priceRange: 'Gratis - Rp 25.000',
    operatingHours: 'Buka 08.00 - 14.00',
    rating: 4.6,
    reviewCount: 84,
    description:
      'Layanan Poli Jiwa dan Psikolog Klinis pertama di tingkat pertama. Biaya sangat terjangkau atau gratis dengan KTP/BPJS setempat.',
    address: 'Jl. Melati No. 15, Sukajadi',
    phone: '0813-7788-9900',
    website: 'puskesmaskecamatan.go.id',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    facilities: ['Poli Jiwa BPJS', 'Konseling Sebaya', 'Layanan Skrining Depresi'],
    isVerified: true,
  },
  {
    id: 'klinik-pratama-sehat',
    name: 'Klinik Pratama Sehat Bersama',
    category: ['Konseling'],
    distance: '3.1 km',
    priceRange: 'Rp 75.000',
    operatingHours: 'Buka 16.00 - 21.00',
    rating: 4.7,
    reviewCount: 56,
    description:
      'Klinik konseling sore dan malam hari, sangat cocok untuk mahasiswa atau pekerja kantor yang butuh ruang curhat profesional setelah jam kerja.',
    address: 'Jl. Terusan Veteran No. 8',
    phone: '0811-2233-4455',
    website: 'sehatbersama.klinik.id',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    facilities: ['Jadwal Malam', 'Konseling Fleksibel', 'Kopi & Teh Herbal Penenang'],
    isVerified: true,
  },
  {
    id: 'layanan-online-telekonseling',
    name: 'Layanan Online (Telekonseling)',
    category: ['Psikolog', 'Konselor'],
    distance: 'Online (Jarak Jauh)',
    priceRange: 'Rp 50.000 - 200.000',
    operatingHours: 'Online • 24 Jam Jadwal Fleksibel',
    rating: 4.9,
    reviewCount: 230,
    description:
      'Sesi tatap muka via video call terenkripsi atau obrolan suara aman langsung dari kamar tidurmu bersama psikolog klinis berlisensi.',
    address: 'Platform SAMBUNG Cloud Room',
    phone: '0800-140-7788',
    website: 'telekonseling.sambung.id',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    facilities: ['Enkripsi End-to-End', 'Bisa Tanpa Kamera (Voice Only)', 'Pencatatan Rujukan Otomatis'],
    isVerified: true,
  },
];

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    senderId: 'companion_rani',
    senderName: 'Rani',
    senderRole: 'companion',
    avatar: companionRani.avatar,
    text: 'Halo, aku Rani, pendamping sebaya di SAMBUNG. Kamu bisa cerita apa saja di sini. Ceritamu akan tetap rahasia, ya. 😊',
    timestamp: '14.02',
  },
  {
    id: 'msg-2',
    senderId: 'user_raka',
    senderName: 'Raka',
    senderRole: 'user',
    avatar: currentUser.avatar,
    text: 'Aku akhir-akhir ini merasa susah tidur dan gampang cemas.',
    timestamp: '14.05',
  },
  {
    id: 'msg-3',
    senderId: 'companion_rani',
    senderName: 'Rani',
    senderRole: 'companion',
    avatar: companionRani.avatar,
    text: 'Terima kasih sudah percaya cerita ini. Kamu tidak sendiri. Kalau kamu bersedia, kita bisa cari layanan yang sesuai. Mau aku bantu cari opsi yang dekat dengan kamu?',
    timestamp: '14.07',
  },
  {
    id: 'msg-4',
    senderId: 'user_raka',
    senderName: 'Raka',
    senderRole: 'user',
    avatar: currentUser.avatar,
    text: 'Iya, terima kasih. Aku juga mau coba konseling.',
    timestamp: '14.08',
  },
];

export const mockReferralSteps: ReferralStep[] = [
  {
    stepNumber: 1,
    title: 'Konseling Awal',
    date: '12 Mei 2025',
    provider: 'Pendamping Sebaya',
    status: 'Selesai',
    notes: 'Sesi pendengaran awal dan validasi emosi bersama Pendamping Rani. Raka bersedia dirujuk ke faskes terdekat untuk penanganan insomnia & kecemasan.',
  },
  {
    stepNumber: 2,
    title: 'Rujukan Layanan',
    date: '14 Mei 2025',
    provider: 'RS Islam Aisyiyah',
    status: 'Selesai',
    notes: 'Surat rekomendasi pengantar digital telah diterbitkan dan diverifikasi oleh sistem SAMBUNG.',
    location: 'RS Islam Aisyiyah, Poli Jiwa & Psikologi',
  },
  {
    stepNumber: 3,
    title: 'Janji Konsultasi',
    date: '20 Mei 2025',
    provider: 'Psikolog',
    status: 'Dalam Proses',
    notes: 'Jadwal tatap muka telah terkonfirmasi dengan Psikolog Klinis. Silakan hadir 15 menit sebelum waktu konsultasi (10:00 WIB).',
    location: 'Gedung A Lantai 2, RS Islam Aisyiyah',
    doctor: 'Dra. Nurul Hidayah, M.Psi., Psikolog',
  },
  {
    stepNumber: 4,
    title: 'Tindak Lanjut',
    date: '27 Mei 2025',
    provider: 'Pendamping Sebaya',
    status: 'Menunggu',
    notes: 'Check-in berkala paska konsultasi untuk memantau perkembangan emosional dan efektivitas terapi atau rujukan obat.',
  },
];

export const mockDiscussions: DiscussionThread[] = [
  {
    id: 'diskusi-a',
    title: 'Diskusi A: Cara Mengatasi Cemas & Susah Tidur Tanpa Overthinking',
    category: 'Kecemasan & Insomnia',
    author: mockUsers.user_ahmad,
    summary: 'Sharing pengalaman saat tugas akhir numpuk dan dada sering berdebar di malam hari.',
    content:
      'Assalamu’alaikum teman-teman SAMBUNG. Ada ngga yang akhir-akhir ini jam 12 malam ke atas bukannya ngantuk malah mikirin hal-hal yang belum tentu terjadi? Dada kerasa berat dan sesak. Apa trik kalian selain dzikir nafas dan wudhu sebelum tidur?',
    timestamp: '2 jam yang lalu',
    repliesCount: 4,
    likes: 19,
    replies: [
      {
        id: 'rep-1',
        author: mockUsers.companion_rani,
        content:
          'Wa’alaikumsalam Ahmad. Gejala overthinking malam hari sangat lazim saat beban kognitif tinggi. Cobalah teknik "Brain Dump": tulis semua kekhawatiran di buku catatan 1 jam sebelum tidur, lalu baca doa tidur dengan tadabbur makna.',
        timestamp: '1 jam yang lalu',
        likes: 12,
      },
      {
        id: 'rep-2',
        author: mockUsers.user_aisyah,
        content:
          'Aku dulu parah banget kak Ahmad sampai 3 minggu kurang tidur. Setelah ikut rujukan ke RS Islam Aisyiyah lewat SAMBUNG, diajarin relaksasi progresif otot. Alhamdulillah sekarang jauh lebih tenang.',
        timestamp: '45 menit yang lalu',
        likes: 8,
      },
      {
        id: 'rep-3',
        author: mockUsers.user_dr_hafiz,
        content:
          'Penting juga untuk membatasi layar ponsel 45 menit sebelum tidur karena blue light menekan hormon melatonin. Jika berdebar hebat menetap > 2 minggu, konsultasikan ke dokter faskes ya.',
        timestamp: '20 menit yang lalu',
        likes: 15,
      },
    ],
  },
  {
    id: 'diskusi-b',
    title: 'Diskusi B: Mencari Psikolog Muslim yang Nyaman Diajak Ngobrol',
    category: 'Rujukan & Konseling',
    author: mockUsers.user_aisyah,
    summary: 'Bagaimana pengalaman pertama kali kalian konseling? Apakah ada rasa takut dihakimi?',
    content:
      'Dulu sebelum kenal SAMBUNG aku takut banget curhat ke psikolog, takut dibilang "kurang iman" atau malah sebaliknya dikasih saran yang bertentangan dengan prinsip nilai agama. Ternyata di sini ada mitra yang paham biopsikososiospiritual.',
    timestamp: 'Kemarin',
    repliesCount: 3,
    likes: 31,
    replies: [
      {
        id: 'rep-4',
        author: mockUsers.user_raka,
        content:
          'Sama banget kak Aisyah! Aku awalnya ragu, tapi setelah ngobrol sama Rani pendamping sebaya, sekarang aku mau coba buat janji di RS Islam Aisyiyah.',
        timestamp: '18 jam yang lalu',
        likes: 7,
      },
      {
        id: 'rep-5',
        author: mockUsers.companion_rani,
        content:
          'Masya Allah, glad to hear that! Di SAMBUNG semua faskes mitra sudah menandatangani pakta integritas ramah pemuda dan menghormati keyakinan klien.',
        timestamp: '12 jam yang lalu',
        likes: 14,
      },
    ],
  },
  {
    id: 'diskusi-c',
    title: 'Diskusi C: Mengatasi Toxic Productivity & Menjaga Istiqomah Ibadah',
    category: 'Spiritual & Produktivitas',
    author: mockUsers.user_raka,
    summary: 'Merasa bersalah kalau istirahat sebentar, padahal tubuh dan pikiran udah minta jeda.',
    content:
      'Kadang kita lupa kalau tubuh dan ruh punya hak untuk istirahat. Istirahat bukan berarti malas, Rasulullah SAW pun mengajarkan qailulah (tidur siang singkat) dan menyeimbangkan hak badan.',
    timestamp: '3 hari yang lalu',
    repliesCount: 2,
    likes: 42,
    replies: [
      {
        id: 'rep-6',
        author: mockUsers.user_ahmad,
        content:
          'Relate banget Mas Raka. "Sesungguhnya badanmu memiliki hak atas dirimu" (HR. Bukhari). Sekarang saya jadikan sholat tepat waktu sebagai momen break murni dari laptop.',
        timestamp: '2 hari yang lalu',
        likes: 18,
      },
    ],
  },
];

export const mockDoaList: DoaItem[] = [
  {
    id: 'doa-1',
    title: 'Doa Menghilangkan Kesedihan & Kegelisahan',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    transliteration:
      'Allahumma inni a’udzu bika minal hammi wal hazan, wa a’udzu bika minal ‘ajzi wal kasal, wa a’udzu bika minal jubni wal bukhl, wa a’udzu bika min ghalabatid dayni wa qahrir rijal.',
    meaning:
      'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat pengecut dan kikir, serta dari lilitan hutang dan tekanan orang lain.',
    source: 'HR. Bukhari no. 2893',
    benefit: 'Sangat dianjurkan dibaca di waktu pagi dan petang saat hati terasa sempit atau menghadapi tekanan berat.',
  },
  {
    id: 'doa-2',
    title: 'Doa Kelapangan Dada & Ketenangan Jiwa',
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
    transliteration: 'Rabbisyrah li shadri, wa yassir li amri, wahlul ‘uqdatam mil lisani, yafqahu qawli.',
    meaning:
      'Ya Tuhanku, lapangkanlah dadaku, mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, agar mereka mengerti perkataanku.',
    source: 'QS. Thaha: 25-28 (Doa Nabi Musa AS)',
    benefit: 'Membantu meredakan gugup, panik sebelum presentasi atau saat mengutarakan unek-unek kepada orang lain.',
  },
  {
    id: 'doa-3',
    title: 'Doa Ketika Merasa Tak Berdaya (Pasrah yang Aktif)',
    arabic: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ',
    transliteration:
      'Ya Hayyu Ya Qayyum, birahmatika astaghits, ashlih li sya’ni kullahu, wa la takilni ila nafsi tharfata ‘ain.',
    meaning:
      'Wahai Dzat Yang Maha Hidup, Yang Terus Menerus Mengurus Makhluk-Nya, dengan rahmat-Mu aku memohon pertolongan. Perbaikilah seluruh urusanku, dan jangan Engkau serahkan aku kepada diriku sendiri walau sekejap mata.',
    source: 'HR. An-Nasa’i & Al-Hakim (Shahih)',
    benefit: 'Meredakan beban berat ketika merasa harus menanggung segala hal sendirian.',
  },
];
