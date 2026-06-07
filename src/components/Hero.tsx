import { company } from "@/lib/company";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden bg-navy pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-gold/8 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Firma Hukum Terpercaya sejak 2008
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Solusi Hukum
            <span className="block text-gold">yang Tegas & Terukur</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {company.fullName} mendampingi perusahaan dan individu dalam
            sengketa bisnis, regulasi korporasi, ketenagakerjaan, hingga properti
            — dengan integritas dan pendekatan strategis.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontak"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
            >
              Jadwalkan Konsultasi
            </a>
            <a
              href="#layanan"
              className="rounded-sm border border-white/25 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:border-gold/50 hover:text-gold"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative rounded-sm border border-white/10 bg-navy-light/80 p-8 backdrop-blur sm:p-10">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <blockquote className="font-serif text-xl italic leading-relaxed text-white/90 sm:text-2xl">
              &ldquo;Hukum bukan sekadar aturan — ia adalah fondasi kepercayaan
              dalam setiap keputusan bisnis Anda.&rdquo;
            </blockquote>
            <footer className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 font-serif text-lg text-gold">
                AR
              </div>
              <div>
                <p className="font-medium text-white">Dr. Aida Ardini, S.H., M.H.</p>
                <p className="text-sm text-white/50">Managing Partner</p>
              </div>
            </footer>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                { value: "17+", label: "Tahun Pengalaman" },
                { value: "850+", label: "Kasus Ditangani" },
                { value: "98%", label: "Klien Puas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="font-serif text-2xl font-semibold text-gold">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-white/50">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#tentang" aria-label="Scroll ke bawah" className="text-white/40 hover:text-gold">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
