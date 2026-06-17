"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { officeLocation } from "@/lib/location";

export default function ContactMap() {
  const { t, locale } = useLanguage();
  const hl = locale === "id" ? "id" : "en";

  return (
    <div className="mt-12 overflow-hidden rounded-sm border border-navy/8 bg-white shadow-sm">
      <iframe
        title={t.contact.mapTitle}
        src={`${officeLocation.mapsEmbedUrl}&hl=${hl}`}
        className="h-80 w-full border-0 sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col gap-2 border-t border-navy/8 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-navy">{officeLocation.addressMultiline.replace("\n", ", ")}</p>
        <a
          href={officeLocation.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-gold transition-colors hover:text-navy"
        >
          {t.contact.openInMaps} →
        </a>
      </div>
    </div>
  );
}
