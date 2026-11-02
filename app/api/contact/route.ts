import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, roleType, service, message, notes, date } = data;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    console.log("=== NEW INQUIRY FOR BALAJI PALANI ===");
    console.log(`From: ${name} (${email})`);
    console.log(`Company: ${company || "Not specified"}`);
    console.log(`Requirement / Scope: ${roleType || service || "General"}`);
    console.log(`Target Date: ${date || "Immediate"}`);
    console.log(`Message: ${message || notes || "No additional notes"}`);
    console.log("======================================");

    // If an external service key is configured in the environment:
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          to: "balajinia@gmail.com",
          subject: `Portfolio Inquiry from ${name} (${company || "Recruiter"})`,
          ...data,
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Balaji Palani will respond within 24 hours.",
    });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}
