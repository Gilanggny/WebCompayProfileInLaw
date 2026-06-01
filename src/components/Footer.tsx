import Logo from "@/components/Logo";
import { company } from "@/lib/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Logo href="#beranda" size="lg" onDark showTagline />

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <a href="#tentang" className="hover:text-gold">
              Tentang
            </a>
            <a href="#layanan" className="hover:text-gold">
              Layanan
            </a>
            <a href="#tim" className="hover:text-gold">
              Tim
            </a>
            <a href="#kontak" className="hover:text-gold">
              Kontak
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/35 md:flex-row md:text-left">
          <p>© {year} {company.fullName}. Hak cipta dilindungi.</p>
          <p>
            Informasi di situs ini bersifat umum dan bukan nasihat hukum. Hubungi
            advokat untuk konsultasi spesifik.
          </p>
        </div>
      </div>
    </footer>
  );
}
