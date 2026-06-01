import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact";
import { isEmailConfigured, sendContactEmail } from "@/lib/send-contact-email";

export async function POST(request: Request) {
  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        error:
          "Layanan email belum aktif. Admin perlu mengisi RESEND_API_KEY dan CONTACT_EMAIL_TO di .env.local.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Format permintaan tidak valid." }, { status: 400 });
  }

  const validated = validateContactPayload(body);
  if (!validated.ok) {
    return NextResponse.json({ errors: validated.errors }, { status: 400 });
  }

  const result = await sendContactEmail(validated.data);
  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
