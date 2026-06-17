"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const valueIcons = [
  <path
    key="integrity"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
  />,
  <path
    key="excellence"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V9.402m0 0a3.375 3.375 0 10-6.75 0v3.375m6.75 0V9.402"
  />,
  <path
    key="partnership"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
  />,
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              {t.about.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{t.about.p1}</p>
            <p className="mt-4 leading-relaxed text-muted">{t.about.p2}</p>
            <ul className="mt-8 space-y-3">
              {t.about.credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            {t.about.values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 rounded-sm border border-navy/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {valueIcons[index]}
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
