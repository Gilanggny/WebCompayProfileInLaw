"use client";

import { FormEvent, useState } from "react";
import ContactMap from "@/components/ContactMap";
import type { ContactFieldErrors } from "@/lib/contact";
import { useLanguage } from "@/contexts/LanguageContext";
import { officeLocation } from "@/lib/location";

type FormStatus = "idle" | "loading" | "success" | "error";

function normalizePhoneNumber(input: string) {
  const digits = input.replace(/\D/g, "");
  if (!digits) return "6281234567890";
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  if (!digits.startsWith("62")) return `62${digits}`;
  return digits;
}

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  function buildWhatsappMessage(
    nama: string,
    telepon: string,
    email: string,
    layanan: string,
    pesan: string,
  ) {
    return `${t.contact.whatsappGreeting} ${nama || "-"}\n${t.contact.whatsappTopic} ${
      layanan || "-"
    }\n${t.contact.whatsappPhone} ${telepon || "-"}\n${t.contact.whatsappEmail} ${
      email || "-"
    }\n${t.contact.whatsappMessage} ${pesan || "-"}`;
  }

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

    const message = buildWhatsappMessage(nama, telepon, email, layanan, pesan);
    const OFFICE_WA = "+62 821 1333 302";
    const phone = normalizePhoneNumber(OFFICE_WA);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    try {
      window.open(url, "_blank");
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(t.contact.whatsappError);
      setStatus("error");
    }
  }

  const contactItems = [
    { label: t.contact.office, value: officeLocation.addressMultiline },
    { label: t.contact.phone, value: "+62 821 1333 302" },
    { label: t.contact.whatsapp, value: "+62 821 1333 302" },
    { label: t.contact.email, value: "contact@ultimatesolution.co.id" },
    { label: t.contact.hours, value: t.contact.hoursValue },
  ];

  return (
    <section id="kontak" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              {t.contact.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{t.contact.subtitle}</p>

            <address className="mt-10 space-y-6 not-italic">
              {contactItems.map((item) => (
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
                  <svg
                    className="h-8 w-8"
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
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-navy">
                  {t.contact.successTitle}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  {t.contact.successMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-gold hover:text-navy"
                >
                  {t.contact.sendAnother}
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
                      {t.contact.fullName}
                    </label>
                    <input
                      id="nama"
                      name="nama"
                      type="text"
                      required
                      disabled={status === "loading"}
                      aria-invalid={!!fieldErrors.nama}
                      className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                      placeholder={t.contact.fullNamePlaceholder}
                    />
                    {fieldErrors.nama && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.nama}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="telepon" className="block text-sm font-medium text-navy">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      id="telepon"
                      name="telepon"
                      type="tel"
                      required
                      disabled={status === "loading"}
                      aria-invalid={!!fieldErrors.telepon}
                      className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                      placeholder={t.contact.phonePlaceholder}
                    />
                    {fieldErrors.telepon && (
                      <p className="mt-1 text-xs text-red-600">{fieldErrors.telepon}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.email}
                    className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                    placeholder={t.contact.emailPlaceholder}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="layanan" className="block text-sm font-medium text-navy">
                    {t.contact.serviceType}
                  </label>
                  <select
                    id="layanan"
                    name="layanan"
                    disabled={status === "loading"}
                    className="mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                  >
                    <option value="">{t.contact.servicePlaceholder}</option>
                    {t.contact.serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-navy">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={4}
                    required
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.pesan}
                    className="mt-1.5 w-full resize-none rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60"
                    placeholder={t.contact.messagePlaceholder}
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
                  {status === "loading" ? t.contact.submitting : t.contact.submit}
                </button>
                <p className="text-center text-xs text-muted">{t.contact.privacy}</p>
              </form>
            )}
          </div>
        </div>

        <ContactMap />
      </div>
    </section>
  );
}
