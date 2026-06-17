"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n/types";

const options: { locale: Locale; label: string }[] = [
  { locale: "id", label: "ID" },
  { locale: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center rounded-sm border border-white/20 bg-white/5 p-0.5"
      role="group"
      aria-label="Pilih bahasa"
    >
      {options.map((option) => {
        const active = locale === option.locale;
        return (
          <button
            key={option.locale}
            type="button"
            onClick={() => setLocale(option.locale)}
            aria-pressed={active}
            aria-label={option.locale === "id" ? "Bahasa Indonesia" : "English"}
            className={`min-w-[2.25rem] rounded-sm px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
              active
                ? "bg-gold text-navy"
                : "text-white/70 hover:text-gold"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
