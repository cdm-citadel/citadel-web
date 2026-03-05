import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 * Creates a Freshdesk ticket from the contact form submission.
 *
 * Env vars required:
 *   FRESHDESK_DOMAIN   – e.g. "citadeldigitalsignage" (the subdomain, or full custom domain)
 *   FRESHDESK_API_KEY  – API key from Freshdesk (Admin → Profile → API Key)
 */

const FRESHDESK_DOMAIN = process.env.FRESHDESK_DOMAIN ?? "";
const FRESHDESK_API_KEY = process.env.FRESHDESK_API_KEY ?? "";

export async function POST(req: NextRequest) {
  // Validate server config
  if (!FRESHDESK_DOMAIN || !FRESHDESK_API_KEY) {
    console.error("Missing FRESHDESK_DOMAIN or FRESHDESK_API_KEY env vars");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  let body: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    inquiryType: string;
    message: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Basic validation
  const { firstName, lastName, email, company, inquiryType, message } = body;
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !company?.trim() || !inquiryType || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Build Freshdesk ticket payload — only required fields
  // https://developers.freshdesk.com/api/#create_ticket
  const ticketPayload = {
    name: `${firstName.trim()} ${lastName.trim()}`,
    email: email.trim(),
    subject: `[Website] ${inquiryType} — ${firstName.trim()} ${lastName.trim()} (${company.trim()})`,
    description: `<p><strong>Name:</strong> ${firstName.trim()} ${lastName.trim()}</p>
<p><strong>Email:</strong> ${email.trim()}</p>
<p><strong>Company:</strong> ${company.trim()}</p>
<p><strong>Inquiry Type:</strong> ${inquiryType}</p>
<hr/>
<p>${message.trim().replace(/\n/g, "<br/>")}</p>`,
    status: 2, // Open
    priority: 1, // Low
    source: 2, // Portal
    tags: ["website-contact-form"],
  };

  // Determine the Freshdesk API URL
  // Custom domain: "support.citadeldigitalsignage.com" → use as-is
  // Subdomain: "citadelcenter" → append .freshdesk.com
  const baseUrl = FRESHDESK_DOMAIN.includes(".")
    ? `https://${FRESHDESK_DOMAIN}`
    : `https://${FRESHDESK_DOMAIN}.freshdesk.com`;

  try {
    const res = await fetch(`${baseUrl}/api/v2/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${FRESHDESK_API_KEY}:X`).toString("base64")}`,
      },
      body: JSON.stringify(ticketPayload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Freshdesk API error:", res.status, errText);
      return NextResponse.json(
        { error: `Freshdesk error: ${res.status} — ${errText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Freshdesk fetch error:", err);
    return NextResponse.json(
      { error: "Failed to reach support system. Please try again." },
      { status: 502 }
    );
  }
}
