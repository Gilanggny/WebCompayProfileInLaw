"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { teamInitials, teamNames } from "@/lib/i18n/translations";

export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="tim" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t.team.label}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 text-white/60">{t.team.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map((member, index) => (
            <article
              key={teamNames[index]}
              className="group flex flex-col rounded-sm border border-white/10 bg-navy-light/50 p-6 transition-colors hover:border-gold/30"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-sm bg-gradient-to-br from-gold/30 to-gold/10 font-serif text-2xl font-semibold text-gold transition-transform group-hover:scale-105">
                {teamInitials[index]}
              </div>
              <h3 className="font-serif text-lg font-semibold leading-snug text-white">
                {teamNames[index]}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                {member.focus}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
