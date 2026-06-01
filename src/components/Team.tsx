const team = [
  {
    initials: "AR",
    name: "Dr. Ahmad Rizaldi, S.H., M.H.",
    role: "Managing Partner",
    focus: "Litigasi & Arbitrase",
    bio: "Alumni Universitas Indonesia. 20 tahun pengalaman di pengadilan niaga dan BANI.",
  },
  {
    initials: "DW",
    name: "Dewi Wulandari, S.H., LL.M.",
    role: "Senior Partner",
    focus: "Hukum Korporasi & M&A",
    bio: "Magister Hukum dari National University of Singapore. Spesialis transaksi lintas batas.",
  },
  {
    initials: "BP",
    name: "Bambang Prasetyo, S.H.",
    role: "Partner",
    focus: "Ketenagakerjaan & Industrial Relations",
    bio: "Mendampingi lebih dari 120 perusahaan dalam restrukturisasi dan sengketa PHI.",
  },
  {
    initials: "SK",
    name: "Siti Kartika, S.H., M.Kn.",
    role: "Partner",
    focus: "Properti & Kepatuhan",
    bio: "Ahli sertifikasi tanah dan regulasi OSS. Aktif di forum hukum properti nasional.",
  },
];

export default function Team() {
  return (
    <section id="tim" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Tim Advokat
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Para Ahli di Balik Kesuksesan Anda
          </h2>
          <p className="mt-4 text-white/60">
            Advokat berpengalaman dengan rekam jejak terbukti di pengadilan dan ruang
            negosiasi bisnis.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col rounded-sm border border-white/10 bg-navy-light/50 p-6 transition-colors hover:border-gold/30"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-sm bg-gradient-to-br from-gold/30 to-gold/10 font-serif text-2xl font-semibold text-gold transition-transform group-hover:scale-105">
                {member.initials}
              </div>
              <h3 className="font-serif text-lg font-semibold text-white leading-snug">
                {member.name}
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
