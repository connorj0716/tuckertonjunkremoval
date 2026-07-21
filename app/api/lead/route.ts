import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TABLE = "OCJR - Leads";
const SOURCE = "tuckerton-website";
const TO_EMAIL = "connor@cjresults.com";
const FROM_EMAIL = "Tuckerton Junk Removal <connor@cjresults.com>";

type LeadBody = {
  name?: string;
  phone?: string;
  email?: string;
  town?: string;
  service?: string;
  message?: string;
};

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: LeadBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const town = clean(body.town, 80);
  const service = clean(body.service, 120);
  const message = clean(body.message, 2000);

  if (!name || !phone || !town || !service) {
    return NextResponse.json(
      { error: "Please fill in your name, phone, town, and service." },
      { status: 400 }
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables.");
    return NextResponse.json(
      { error: "The form is temporarily unavailable." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error: dbError } = await supabase.from(TABLE).insert({
    name,
    phone,
    email: email || null,
    town,
    service,
    message: message || null,
    source: SOURCE,
    handled: false,
  });

  if (dbError) {
    console.error("Supabase insert failed:", dbError.message);
    return NextResponse.json(
      { error: "We could not save your request. Please call us instead." },
      { status: 500 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const rows: Array<[string, string]> = [
        ["Name", name],
        ["Phone", phone],
        ["Email", email || "Not provided"],
        ["Town", town],
        ["Service", service],
        ["Message", message || "No message provided"],
        ["Source", SOURCE],
      ];

      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email || undefined,
        subject: `New Tuckerton Lead: ${name} — ${service}`,
        html: `
          <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#0d2444;padding:24px;border-radius:12px 12px 0 0;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;">New Tuckerton Junk Removal Lead</h1>
              <p style="margin:6px 0 0;color:#bcd2ec;font-size:14px;">Submitted from tuckertonjunkremoval.com</p>
            </div>
            <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-top:0;">
              ${rows
                .map(
                  ([k, v]) => `
                    <tr>
                      <td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;font-weight:700;color:#0d2444;width:120px;vertical-align:top;">${k}</td>
                      <td style="padding:12px 16px;border-bottom:1px solid #f1f5f9;color:#334155;">${escapeHtml(v)}</td>
                    </tr>`
                )
                .join("")}
            </table>
            <p style="margin:16px 0 0;color:#64748b;font-size:12px;">Saved to Supabase table "${TABLE}".</p>
          </div>
        `,
        text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      });
    } catch (emailError) {
      console.error("Resend notification failed:", emailError);
    }
  } else {
    console.error("Missing RESEND_API_KEY, skipping notification email.");
  }

  return NextResponse.json({ ok: true });
}
