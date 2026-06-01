import { Resend } from "resend";
import { company } from "./company";
import type { ContactPayload } from "./contact";
import { escapeHtml } from "./contact";

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from =
    process.env.CONTACT_EMAIL_FROM ??
    `${company.name} <onboarding@resend.dev>`;

  if (!apiKey || !to) {
    return null;
  }

  return { apiKey, to, from };
}

export function isEmailConfigured(): boolean {
  return getEmailConfig() !== null;
}

export async function sendContactEmail(
  payload: ContactPayload
): Promise<{ ok: true } | { ok: false; message: string }> {
  const config = getEmailConfig();

  if (!config) {
    return {
      ok: false,
      message:
        "Email belum dikonfigurasi. Isi RESEND_API_KEY dan CONTACT_EMAIL_TO di file .env.local.",
    };
  }

  const resend = new Resend(config.apiKey);
  const rows = [
    ["Nama", payload.nama],
    ["Telepon", payload.telepon],
    ["Email", payload.email],
    ["Layanan", payload.layanan],
    ["Pesan", payload.pesan],
  ] as const;

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;color:#0f1c2e;">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#1a2332;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");

  const { error } = await resend.emails.send({
    from: config.from,
    to: [config.to],
    replyTo: payload.email,
    subject: `[Konsultasi] ${payload.nama} — ${payload.layanan}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:560px;">
        <h2 style="color:#0f1c2e;margin:0 0 16px;">Permintaan Konsultasi Baru</h2>
        <p style="color:#5c6b7a;margin:0 0 20px;">Diterima dari formulir website ${escapeHtml(company.fullName)}.</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${htmlRows}</table>
      </div>
    `,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
  });

  if (error) {
    console.error("[contact-email]", error);
    return {
      ok: false,
      message: "Gagal mengirim email. Periksa konfigurasi Resend atau coba lagi nanti.",
    };
  }

  return { ok: true };
}
