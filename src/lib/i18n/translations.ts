import type { Locale } from "./types";

export type Translations = {
  nav: {
    home: string;
    about: string;
    services: string;
    team: string;
    contact: string;
    freeConsult: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaConsult: string;
    ctaServices: string;
    quote: string;
    managingPartner: string;
    stats: { years: string; cases: string; clients: string };
    scrollDown: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    credentials: string[];
    values: { title: string; description: string }[];
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  team: {
    label: string;
    title: string;
    subtitle: string;
    members: { role: string; focus: string; bio: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    office: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
    hoursValue: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    fullName: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceType: string;
    servicePlaceholder: string;
    serviceOptions: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    privacy: string;
    whatsappError: string;
    whatsappGreeting: string;
    whatsappTopic: string;
    whatsappPhone: string;
    whatsappEmail: string;
    whatsappMessage: string;
    mapTitle: string;
    openInMaps: string;
  };
  footer: {
    about: string;
    services: string;
    team: string;
    contact: string;
    copyright: string;
    disclaimer: string;
    tagline: string;
  };
};

const teamNames = [
  "Dr. Aida Ardini S.H.,M.H.,CLA.,CCD.,CMED.",
  "Dr. Aida Ardini S.H.,M.H.,CLA.,CCD.,CMED.",
  "Dr. Aida Ardini S.H.,M.H.,CLA.,CCD.,CMED.",
] as const;

export const teamInitials = ["AR", "DW", "BP", "SK"] as const;

export { teamNames };

export const translations: Record<Locale, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      team: "Tim Advokat",
      contact: "Kontak",
      freeConsult: "Konsultasi Gratis",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
    },
    hero: {
      badge: "Firma Hukum Terpercaya sejak 2008",
      title: "Solusi Hukum",
      titleHighlight: "yang Tegas & Terukur",
      description:
        "Ultimate Solution Partners mendampingi perusahaan dan individu dalam sengketa bisnis, regulasi korporasi, ketenagakerjaan, hingga properti — dengan integritas dan pendekatan strategis.",
      ctaConsult: "Jadwalkan Konsultasi",
      ctaServices: "Lihat Layanan",
      quote:
        "Untuk memperoleh kepastian hukum maka dimulai dari pendampingan yang tepat",
      managingPartner: "Senior Partners Ultimate Solution Lawfirm",
      stats: {
        years: "Tahun Pengalaman",
        cases: "Kasus Ditangani",
        clients: "Klien Puas",
      },
      scrollDown: "Scroll ke bawah",
    },
    about: {
      label: "Tentang Kami",
      title: "Menjadi rumah bagi solusi hukum yang berkelas, berani, dan bernilai jangka panjang",
      p1: "Kami menyediakan layanan penyelesaian sengketa secara komprehensif melalui pendekatan litigasi maupun alternatif penyelesaian sengketa (ADR), dengan mengedepankan strategi hukum yang terukur, kami membantu klien dalam menghadapi berbagai sengketa bisnis, perdata, ketenagakerjaan, maupun korporasi secara efektif dan profesional.",
      p2: "Tim kami memahami bahwa setiap sengketa tidak hanya berkaitan dengan aspek hukum, tetapi juga reputasi dan keberlangsungan bisnis klien. Oleh karena itu, kami berfokus pada solusi yang tidak hanya memenangkan perkara, tetapi juga memberikan perlindungan jangka panjang terhadap kepentingan klien.",
      credentials: [
        "Terdaftar di Perhimpunan Advokat Indonesia (PERADI)",
        "Anggota International Bar Association (IBA)",
        "ISO 9001:2015 — Manajemen Mutu Layanan Hukum",
      ],
      values: [
        {
          title: "Integritas",
          description:
            "Setiap nasihat dan langkah hukum kami dasarkan pada etika profesi dan transparansi penuh kepada klien.",
        },
        {
          title: "Keunggulan",
          description:
            "Tim multidisiplin dengan spesialisasi mendalam di setiap area praktik hukum utama.",
        },
        {
          title: "Kemitraan",
          description:
            "Kami memposisikan diri sebagai mitra jangka panjang, bukan sekadar penyedia jasa hukum.",
        },
      ],
    },
    services: {
      label: "Area Praktik",
      title: "Layanan Hukum Kami",
      subtitle:
        "Solusi terpadu untuk kebutuhan hukum bisnis dan personal Anda, dengan tim spesialis di setiap bidang.",
      items: [
        {
          title: "Hukum Perusahaan & Korporasi",
          description:
            "Pendirian PT, merger & akuisisi, due diligence, kontrak komersial, dan tata kelola perusahaan.",
        },
        {
          title: "Litigasi & Arbitrase",
          description:
            "Sengketa perdata, pidana ekonomi, banding, serta penyelesaian sengketa di BANI dan pengadilan.",
        },
        {
          title: "Ketenagakerjaan & PHK",
          description:
            "Perjanjian kerja, pemutusan hubungan kerja, sengketa industrial, dan kepatuhan UU Cipta Kerja.",
        },
        {
          title: "Properti & Real Estat",
          description:
            "Jual beli tanah, sertifikat, sengketa hak milik, sewa-menyewa, dan proyek properti skala besar.",
        },
        {
          title: "Kepatuhan & Regulasi",
          description:
            "Licensing, AML, perlindungan data pribadi (UU PDP), dan audit kepatuhan sektor finansial.",
        },
        {
          title: "Hukum Keluarga & Waris",
          description:
            "Perceraian, hak asuh anak, pembagian harta warisan, dan pendampingan di pengadilan agama.",
        },
      ],
    },
    team: {
      label: "Tim Advokat",
      title: "Para Ahli di Balik Kesuksesan Anda",
      subtitle:
        "Advokat berpengalaman dengan rekam jejak terbukti di pengadilan dan ruang negosiasi bisnis.",
      members: [
        {
          role: "Managing Partner",
          focus: "Litigasi & Arbitrase",
          bio: "Alumni Universitas Indonesia. 20 tahun pengalaman di pengadilan niaga dan BANI.",
        },
        {
          role: "Senior Partner",
          focus: "Hukum Korporasi & M&A",
          bio: "Magister Hukum dari National University of Singapore. Spesialis transaksi lintas batas.",
        },
        {
          role: "Partner",
          focus: "Ketenagakerjaan & Industrial Relations",
          bio: "Mendampingi lebih dari 120 perusahaan dalam restrukturisasi dan sengketa PHI.",
        },
        {
          role: "Partner",
          focus: "Properti & Kepatuhan",
          bio: "Ahli sertifikasi tanah dan regulasi OSS. Aktif di forum hukum properti nasional.",
        },
      ],
    },
    contact: {
      label: "Hubungi Kami",
      title: "Konsultasi Awal Gratis",
      subtitle:
        "Ceritakan kebutuhan hukum Anda. Tim kami akan merespons dalam 1×24 jam kerja untuk menjadwalkan pertemuan awal — secara langsung atau daring.",
      office: "Kantor Pusat",
      phone: "Telepon",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Jam Operasional",
      hoursValue: "Senin–Jumat, 08.00–18.00 WIB",
      successTitle: "Pesan Terkirim",
      successMessage:
        "Terima kasih. Permintaan konsultasi Anda telah dikirim ke tim kami. Kami akan menghubungi Anda melalui email atau telepon yang dicantumkan.",
      sendAnother: "Kirim pesan lain",
      fullName: "Nama Lengkap",
      fullNamePlaceholder: "Nama Anda",
      phoneLabel: "Nomor Telepon",
      phonePlaceholder: "08xx xxxx xxxx",
      emailLabel: "Email",
      emailPlaceholder: "nama@perusahaan.com",
      serviceType: "Jenis Layanan",
      servicePlaceholder: "Pilih area kebutuhan",
      serviceOptions: [
        "Hukum Perusahaan & Korporasi",
        "Litigasi & Arbitrase",
        "Ketenagakerjaan",
        "Properti & Real Estat",
        "Kepatuhan & Regulasi",
        "Hukum Keluarga & Waris",
        "Lainnya",
      ],
      message: "Uraian Singkat",
      messagePlaceholder: "Jelaskan kebutuhan hukum Anda secara ringkas...",
      submit: "Konsultasi via WhatsApp",
      submitting: "Membuka WhatsApp...",
      privacy:
        "Dengan mengirimkan, Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.",
      whatsappError: "Gagal membuka WhatsApp. Silakan coba manual.",
      whatsappGreeting: "Halo, saya",
      whatsappTopic: "Saya ingin konsultasi tentang:",
      whatsappPhone: "Nomor telepon:",
      whatsappEmail: "Email:",
      whatsappMessage: "Pesan:",
      mapTitle: "Peta lokasi kantor Ultimate Solution Partners",
      openInMaps: "Buka di Google Maps",
    },
    footer: {
      about: "Tentang",
      services: "Layanan",
      team: "Tim",
      contact: "Kontak",
      copyright: "Hak cipta dilindungi.",
      disclaimer:
        "Informasi di situs ini bersifat umum dan bukan nasihat hukum. Hubungi advokat untuk konsultasi spesifik.",
      tagline: "Keadilan · Integritas · Keunggulan",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      team: "Our Lawyers",
      contact: "Contact",
      freeConsult: "Free Consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Trusted Law Firm Since 2008",
      title: "Legal Solutions",
      titleHighlight: "That Are Firm & Measured",
      description:
        "Ultimate Solution Partners advises companies and individuals on business disputes, corporate regulation, employment law, and property matters — with integrity and a strategic approach.",
      ctaConsult: "Schedule a Consultation",
      ctaServices: "View Services",
      quote:
        "Law is not merely rules — it is the foundation of trust in every business decision you make.",
      managingPartner: "Senior Partners Ultimate Solution Lawfirm",
      stats: {
        years: "Years of Experience",
        cases: "Cases Handled",
        clients: "Satisfied Clients",
      },
      scrollDown: "Scroll down",
    },
    about: {
      label: "About Us",
      title: "Your Legal Partner for Business Growth",
      p1: "We provide comprehensive dispute resolution services through litigation and alternative dispute resolution (ADR) approaches. Emphasizing measurable legal strategies, we assist clients in effectively and professionally resolving various business, civil, employment, and corporate disputes",
      p2: "Our team understands that every dispute concerns not only the legal aspects but also the reputation and sustainability of our clients' businesses. Therefore, we focus on solutions that not only win the case but also provide long-term protection for our clients' interests..",
      credentials: [
        "Registered with the Indonesian Advocates Association (PERADI)",
        "Member of the International Bar Association (IBA)",
        "ISO 9001:2015 — Legal Services Quality Management",
      ],
      values: [
        {
          title: "Integrity",
          description:
            "Every piece of advice and legal step we take is grounded in professional ethics and full transparency with clients.",
        },
        {
          title: "Excellence",
          description:
            "A multidisciplinary team with deep specialization in every major area of legal practice.",
        },
        {
          title: "Partnership",
          description:
            "We position ourselves as long-term partners, not merely legal service providers.",
        },
      ],
    },
    services: {
      label: "Practice Areas",
      title: "Our Legal Services",
      subtitle:
        "Integrated solutions for your business and personal legal needs, with specialist teams in every field.",
      items: [
        {
          title: "Corporate & Business Law",
          description:
            "Company formation, mergers & acquisitions, due diligence, commercial contracts, and corporate governance.",
        },
        {
          title: "Litigation & Arbitration",
          description:
            "Civil disputes, economic crimes, appeals, and dispute resolution at BANI and in court.",
        },
        {
          title: "Employment & Termination",
          description:
            "Employment agreements, termination, industrial disputes, and compliance with the Omnibus Law.",
        },
        {
          title: "Property & Real Estate",
          description:
            "Land transactions, certificates, title disputes, leasing, and large-scale property projects.",
        },
        {
          title: "Compliance & Regulation",
          description:
            "Licensing, AML, personal data protection (PDP Law), and financial sector compliance audits.",
        },
        {
          title: "Family & Inheritance Law",
          description:
            "Divorce, child custody, estate distribution, and representation in religious courts.",
        },
      ],
    },
    team: {
      label: "Our Lawyers",
      title: "The Experts Behind Your Success",
      subtitle:
        "Experienced advocates with proven track records in courtrooms and business negotiations.",
      members: [
        {
          role: "Managing Partner",
          focus: "Litigation & Arbitration",
          bio: "University of Indonesia alumnus. 20 years of experience in commercial courts and BANI.",
        },
        {
          role: "Senior Partner",
          focus: "Corporate Law & M&A",
          bio: "Master of Laws from National University of Singapore. Specialist in cross-border transactions.",
        },
        {
          role: "Partner",
          focus: "Employment & Industrial Relations",
          bio: "Advised more than 120 companies on restructuring and industrial relations disputes.",
        },
        {
          role: "Partner",
          focus: "Property & Compliance",
          bio: "Expert in land certification and OSS regulations. Active in national property law forums.",
        },
      ],
    },
    contact: {
      label: "Contact Us",
      title: "Free Initial Consultation",
      subtitle:
        "Tell us about your legal needs. Our team will respond within one business day to schedule an initial meeting — in person or online.",
      office: "Head Office",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Business Hours",
      hoursValue: "Monday–Friday, 08:00–18:00 WIB",
      successTitle: "Message Sent",
      successMessage:
        "Thank you. Your consultation request has been sent to our team. We will contact you via the email or phone number provided.",
      sendAnother: "Send another message",
      fullName: "Full Name",
      fullNamePlaceholder: "Your name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "08xx xxxx xxxx",
      emailLabel: "Email",
      emailPlaceholder: "name@company.com",
      serviceType: "Service Type",
      servicePlaceholder: "Select area of need",
      serviceOptions: [
        "Corporate & Business Law",
        "Litigation & Arbitration",
        "Employment",
        "Property & Real Estate",
        "Compliance & Regulation",
        "Family & Inheritance Law",
        "Other",
      ],
      message: "Brief Description",
      messagePlaceholder: "Briefly describe your legal needs...",
      submit: "Consult via WhatsApp",
      submitting: "Opening WhatsApp...",
      privacy:
        "By submitting, you will be redirected to WhatsApp to continue your consultation.",
      whatsappError: "Failed to open WhatsApp. Please try manually.",
      whatsappGreeting: "Hello, I am",
      whatsappTopic: "I would like to consult about:",
      whatsappPhone: "Phone number:",
      whatsappEmail: "Email:",
      whatsappMessage: "Message:",
      mapTitle: "Ultimate Solution Partners office location map",
      openInMaps: "Open in Google Maps",
    },
    footer: {
      about: "About",
      services: "Services",
      team: "Team",
      contact: "Contact",
      copyright: "All rights reserved.",
      disclaimer:
        "Information on this site is general and not legal advice. Contact an advocate for specific consultation.",
      tagline: "Justice · Integrity · Excellence",
    },
  },
};
