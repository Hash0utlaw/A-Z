import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, address, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email, and phone are required" }, { status: 400 })
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeAddress = address ? escapeHtml(address) : ""
    const safeService = service ? escapeHtml(service) : ""
    const safeMessage = message ? escapeHtml(message) : ""

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "A-Z Landscapes <onboarding@resend.dev>",
      to: [process.env.LEAD_TO_EMAIL || "azlandscapesllc@gmail.com"],
      subject: `New Quote Request from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Quote Request - A-Z Landscapes
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            ${safeAddress ? `<p><strong>Project Address:</strong> ${safeAddress}</p>` : ""}
            ${safeService ? `<p><strong>Service Interested In:</strong> ${safeService}</p>` : ""}
          </div>

          ${
            safeMessage
              ? `
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Project Details</h3>
              <p style="white-space: pre-wrap;">${safeMessage}</p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This email was sent from the A-Z Landscapes website contact form.</p>
            <p>Please respond to the customer at: ${safeEmail}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
