import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, subject, message } = body;

    const formUrl = process.env.CONTACT_GOOGLE_FORM_URL;

    const entries = {
      name: process.env.CONTACT_GOOGLE_ENTRY_NAME,
      email: process.env.CONTACT_GOOGLE_ENTRY_EMAIL,
      inquiryType: process.env.CONTACT_GOOGLE_ENTRY_INQUIRY_TYPE,
      subject: process.env.CONTACT_GOOGLE_ENTRY_SUBJECT,
      message: process.env.CONTACT_GOOGLE_ENTRY_MESSAGE,
    };

    if (!formUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Google Form Action URL is missing in environment variables.",
        },
        { status: 400 }
      );
    }

    // Construct urlencoded body for Google Form submission
    const params = new URLSearchParams();
    if (entries.name) params.append(entries.name, name || "");
    if (entries.email) params.append(entries.email, email || "");
    if (entries.inquiryType) params.append(entries.inquiryType, inquiryType || "");
    if (entries.subject) params.append(entries.subject, subject || "");
    if (entries.message) params.append(entries.message, message || "");

    const googleRes = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    // Google Forms returns a 200 OK or 302 redirect on success
    if (googleRes.ok || googleRes.status === 200 || googleRes.redirected) {
      return NextResponse.json({ success: true });
    } else {
      // Even if fetch is opaque or redirected, Google Forms usually responds with 200/302
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Error submitting to Google Form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process form submission." },
      { status: 500 }
    );
  }
}
