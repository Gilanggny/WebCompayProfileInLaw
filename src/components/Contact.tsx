"use client";

import React, { FormEvent, useState } from "react";
import type { ContactFieldErrors } from "@/lib/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const nama = String(formData.get("nama") ?? "");
    const telepon = String(formData.get("telepon") ?? "");
    const email = String(formData.get("email") ?? "");
    const layanan = String(formData.get("layanan") ?? "");
    const pesan = String(formData.get("pesan") ?? "");

    const message = `Halo, saya ${nama || "-"}\nSaya ingin konsultasi tentang: ${
      layanan || "-"
    }\nNomor telepon: ${telepon || "-"}\nEmail: ${email || "-"}\nPesan: ${pesan || "-"}`;

    const OFFICE_WA = "+62 813 8538 6986";
    const phone = normalizePhoneNumber(OFFICE_WA);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    try {
      window.open(url, "_blank");
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Gagal membuka WhatsApp. Silakan coba manual.");
      setStatus("error");
    }
  }

  // Open WhatsApp chat with prefilled message using form values
  function normalizePhoneNumber(input: string) {
    const digits = input.replace(/\D/g, "");
    if (!digits) return "6281234567890"; // fallback office number
    if (digits.startsWith("0")) return `62${digits.slice(1)}`;
    if (!digits.startsWith("62")) return `62${digits}`;
    return digits;
  }

  function handleWhatsappClick(e: React.MouseEvent<HTMLButtonElement>) {
    const btn = e.currentTarget;
    const form = btn.closest("form") as HTMLFormElement | null;
    const OFFICE_WA = "+62 812 3456 7890";

    let nama = "";
    let telepon = "";
    let email = "";
    let layanan = "";
    let pesan = "";

    if (form) {
      const formData = new FormData(form);
      nama = String(formData.get("nama") ?? "");
      telepon = String(formData.get("telepon") ?? "");
      email = String(formData.get("email") ?? "");
      layanan = String(formData.get("layanan") ?? "");
      pesan = String(formData.get("pesan") ?? "");
    }

    const message = `Halo, saya ${nama}\nSaya ingin konsultasi tentang: ${layanan || "-"}\nNomor telepon: ${telepon || "-"}\nEmail: ${email || "-"}\nPesan: ${pesan || "-"}`;

    const phone = normalizePhoneNumber(OFFICE_WA);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section id="kontak" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Hubungi Kami
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              Konsultasi Awal Gratis
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Ceritakan kebutuhan hukum Anda. Tim kami akan merespons dalam 1×24 jam
              kerja untuk menjadwalkan pertemuan awal — secara langsung atau daring.
            </p>

            <address className="mt-10 space-y-6 not-italic">
              {[
                {
                  label: "Kantor Pusat",
                  value:
                    "Gedung Nusantara Tower Lt. 18\nJl. Sudirman Kav. 52–53, Jakarta Selatan 12190",
                },
                { label: "Telepon", value: "+62 21 5790 4500" },
                { label: "WhatsApp", value: "+62 812 3456 7890" },
                { label: "Email", value: "kontak@nusantaralegal.id" },
                { label: "Jam Operasional", value: "Senin–Jumat, 08.00–18.00 WIB" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {item.label}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-sm text-navy">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </address>
          </div>

          <div className="rounded-sm border border-navy/8 bg-white p-8 shadow-sm lg:p-10">
            {status === "success" ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-navy">
                  Pesan Terkirim
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Terima kasih. Permintaan konsultasi Anda telah dikirim ke tim kami.
                  Kami akan menghubungi Anda melalui email atau telepon yang dicantumkan.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-gold hover:text-navy"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {status === "error" && errorMessage && (
                  <div
                    role="alert"
                    className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nama" className="block text-sm font-medium text-navy">
                      Nama Lengkap
                    </label>
                    <input
                      id="nama"
                      name="nama"
                      type="text"
                      required
                      disabled={status === "loading"}
                      aria-invalid={!!fieldErrors.nama}
                      className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                      placeholder="Nama Anda"
                    />
                    {fieldErrors.nama && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.nama}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="telepon" className="block text-sm font-medium text-navy">
                      Nomor Telepon
                    </label>
                    <input
                      id="telepon"
                      name="telepon"
                      type="tel"
                      required
                      disabled={status === "loading"}
                      aria-invalid={!!fieldErrors.telepon}
                      className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                      placeholder="08xx xxxx xxxx"
                    />
                    {fieldErrors.telepon && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.telepon}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.email}
                    className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                    placeholder="nama@perusahaan.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="layanan" className="block text-sm font-medium text-navy">
                    Jenis Layanan
                  </label>
                  <select
                    id="layanan"
                    name="layanan"
                    disabled={status === "loading"}
                    className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                  >
                    <option value="">Pilih area kebutuhan</option>
                    <option>Hukum Perusahaan & Korporasi</option>
                    <option>Litigasi & Arbitrase</option>
                    <option>Ketenagakerjaan</option>
                    <option>Properti & Real Estat</option>
                    <option>Kepatuhan & Regulasi</option>
                    <option>Hukum Keluarga & Waris</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-navy">
                    Uraian Singkat
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={4}
                    required
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.pesan}
                    className="mt-1.5 w-full resize-none rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                    placeholder="Jelaskan kebutuhan hukum Anda secara ringkas..."
                  />
                  {fieldErrors.pesan && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.pesan}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-sm bg-green-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Membuka WhatsApp..." : "Konsultasi via WhatsApp"}
                </button>
                <p className="text-center text-xs text-muted">
                  Dengan mengirimkan, Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
