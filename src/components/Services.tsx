const services = [
  {
    title: "Hukum Perusahaan & Korporasi",
    description:
      "Pendirian PT, merger & akuisisi, due diligence, kontrak komersial, dan tata kelola perusahaan.",
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h15M3 3v18",
  },
  {
    title: "Litigasi & Arbitrase",
    description:
      "Sengketa perdata, pidana ekonomi, banding, serta penyelesaian sengketa di BANI dan pengadilan.",
    icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a45.731 45.731 0 01-9.562.001c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a45.731 45.731 0 009.562.001c-.483-.174-.711-.703-.59-1.202L5.25 4.97z",
  },
  {
    title: "Ketenagakerjaan & PHK",
    description:
      "Perjanjian kerja, pemutusan hubungan kerja, sengketa industrial, dan kepatuhan UU Cipta Kerja.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Properti & Real Estat",
    description:
      "Jual beli tanah, sertifikat, sengketa hak milik, sewa-menyewa, dan proyek properti skala besar.",
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l1.5.545M5.25 5.25l1.5-1.5m11.25 0l1.5 1.5M12 2.25V4.5",
  },
  {
    title: "Kepatuhan & Regulasi",
    description:
      "Licensing, AML, perlindungan data pribadi (UU PDP), dan audit kepatuhan sektor finansial.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.375 3.375 0 11-6.75 0 3.375 3.375 0 01-6.75 0 3.375 3.375 0 01-6.75 0 3.375 3.375 0 01-6.75 0C2.63 14.39 2 13.268 2 12s.63-2.39 1.593-3.068a3.375 3.375 0 016.75 0 3.375 3.375 0 016.75 0 3.375 3.375 0 016.75 0 3.375 3.375 0 016.75 0C21.37 9.61 22 10.732 22 12z",
  },
  {
    title: "Hukum Keluarga & Waris",
    description:
      "Perceraian, hak asuh anak, pembagian harta warisan, dan pendampingan di pengadilan agama.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Area Praktik
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Layanan Hukum Kami
          </h2>
          <p className="mt-4 text-muted">
            Solusi terpadu untuk kebutuhan hukum bisnis dan personal Anda, dengan
            tim spesialis di setiap bidang.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-sm border border-navy/8 bg-cream/50 p-8 transition-all hover:border-gold/40 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={service.icon}
                  />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
