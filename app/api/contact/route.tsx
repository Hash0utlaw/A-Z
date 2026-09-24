import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { put } from "@vercel/blob"

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
  const contentType = request.headers.get("content-type") || ""

  if (contentType.includes("multipart/form-data")) {
    return handleFormDataSubmission(request)
  }

  return handleJsonSubmission(request)
}

async function handleJsonSubmission(request: NextRequest) {
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

const MAX_PHOTO_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]

async function handleFormDataSubmission(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string | null
    const phone = formData.get("phone") as string | null
    const email = formData.get("email") as string | null
    const zip = formData.get("zip") as string | null
    const service = formData.get("service") as string | null
    const message = formData.get("message") as string | null
    const source = formData.get("source") as string | null
    const photoFile = formData.get("photo") as File | null

    // Phone is required; email is optional on this form (unlike the main contact form)
    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }

    let photoUrl: string | undefined

    if (photoFile && photoFile.size > 0) {
      if (photoFile.size > MAX_PHOTO_SIZE) {
        return NextResponse.json({ error: "Photo exceeds 5MB limit." }, { status: 400 })
      }
      if (!ALLOWED_PHOTO_TYPES.includes(photoFile.type)) {
        return NextResponse.json(
          { error: "Invalid photo file type. Allowed: JPEG, PNG, WEBP, HEIC." },
          { status: 400 },
        )
      }

      const sanitizedFilename = photoFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")
      const blobPath = `free-estimate/photos/${Date.now()}-${sanitizedFilename}`

      const blob = await put(blobPath, photoFile, {
        access: "private",
        contentType: photoFile.type,
      })
      photoUrl = blob.url
    }

    const safeName = escapeHtml(name)
    const safePhone = escapeHtml(phone)
    const safeEmail = email ? escapeHtml(email) : ""
    const safeZip = zip ? escapeHtml(zip) : ""
    const safeService = service ? escapeHtml(service) : ""
    const safeMessage = message ? escapeHtml(message) : ""
    const safeSource = source ? escapeHtml(source) : ""

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "A-Z Landscapes <onboarding@resend.dev>",
      to: [process.env.LEAD_TO_EMAIL || "azlandscapesllc@gmail.com"],
      subject: `New Free Estimate Request from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Free Estimate Request - A-Z Landscapes
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            ${safeEmail ? `<p><strong>Email:</strong> ${safeEmail}</p>` : ""}
            ${safeZip ? `<p><strong>Zip Code:</strong> ${safeZip}</p>` : ""}
            ${safeService ? `<p><strong>Project Type:</strong> ${safeService}</p>` : ""}
            ${safeSource ? `<p><strong>Source:</strong> ${safeSource}</p>` : ""}
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

          ${
            photoUrl
              ? `
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Uploaded Photo</h3>
              <p>${photoUrl}</p>
              <p style="color: #64748b; font-size: 13px;">This file is stored privately — open it via the Vercel Blob dashboard for this project.</p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This email was sent from the A-Z Landscapes /free-estimate landing page.</p>
            ${safeEmail ? `<p>Please respond to the customer at: ${safeEmail}</p>` : `<p>No email provided — call the customer back at: ${safePhone}</p>`}
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
    console.error("Free estimate form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
