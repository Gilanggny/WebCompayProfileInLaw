export type ContactPayload = {
  nama: string;
  telepon: string;
  email: string;
  layanan: string;
  pesan: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; errors: ContactFieldErrors } {
  if (!body || typeof body !== "object") {
    return { ok: false, errors: { pesan: "Data formulir tidak valid." } };
  }

  const raw = body as Record<string, unknown>;
  const errors: ContactFieldErrors = {};

  const nama = String(raw.nama ?? "").trim();
  const telepon = String(raw.telepon ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const layanan = String(raw.layanan ?? "").trim();
  const pesan = String(raw.pesan ?? "").trim();

  if (nama.length < 2) errors.nama = "Nama minimal 2 karakter.";
  if (telepon.length < 8) errors.telepon = "Nomor telepon tidak valid.";
  if (!EMAIL_RE.test(email)) errors.email = "Format email tidak valid.";
  if (pesan.length < 10) errors.pesan = "Uraian minimal 10 karakter.";
  if (pesan.length > 5000) errors.pesan = "Uraian terlalu panjang (maks. 5000 karakter).";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { nama, telepon, email, layanan: layanan || "Tidak dipilih", pesan },
  };
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
