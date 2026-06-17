"use client";

import Logo from "@/components/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { company } from "@/lib/company";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: "#tentang", label: t.footer.about },
    { href: "#layanan", label: t.footer.services },
    { href: "#tim", label: t.footer.team },
    { href: "#kontak", label: t.footer.contact },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Logo href="#beranda" size="lg" onDark showTagline />

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/35 md:flex-row md:text-left">
          <p>
            © {year} {company.fullName}. {t.footer.copyright}
          </p>
          <p>{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
