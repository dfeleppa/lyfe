import { NextResponse } from "next/server";

export const runtime = "nodejs";

// ─── Lead capture endpoint ────────────────────────────────────────────────────
// Logs the lead to the console for now.
// To connect to a CRM or email platform:
//   - Mailchimp: POST to their API with email + merge fields
//   - HubSpot: POST to forms API
//   - Resend/SendGrid: send a notification email to yourself
//   - Supabase: insert into a leads table
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof (body as Record<string, unknown>)?.name === "string"
    ? ((body as Record<string, unknown>).name as string).trim()
    : "";
  const email = typeof (body as Record<string, unknown>)?.email === "string"
    ? ((body as Record<string, unknown>).email as string).trim().toLowerCase()
    : "";
  const phone = typeof (body as Record<string, unknown>)?.phone === "string"
    ? ((body as Record<string, unknown>).phone as string).trim()
    : "";

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  // Log to console — replace with your CRM integration
  console.log("[LEAD]", { name, email, phone, at: new Date().toISOString() });

  // ── Example: Send notification email via Resend ─────────────────────────
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "leads@daneff.com",
  //   to: "you@daneff.com",
  //   subject: `New lead: ${name || email}`,
  //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
  // });

  // ── Example: Save to Supabase ───────────────────────────────────────────
  // import { createClient } from "@supabase/supabase-js";
  // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  // await supabase.from("leads").insert({ name, email, phone });

  return NextResponse.json({ ok: true }, { status: 201 });
}
