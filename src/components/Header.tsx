"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#layanan", label: "Layanan" },
  { href: "#tim", label: "Tim Advokat" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
        <Logo onDark />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light md:inline-block"
        >
          Konsultasi Gratis
        </a>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-white/80 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontak"
                className="inline-block rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy"
                onClick={() => setOpen(false)}
              >
                Konsultasi Gratis
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
