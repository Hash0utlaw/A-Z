import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData()

    const fullName = formData.get("fullName") as string | null
    const email = formData.get("email") as string | null
    const phone = formData.get("phone") as string | null
    const positionOfInterest = formData.get("positionOfInterest") as string | null
    const experience = formData.get("experience") as string | null
    const whyJoin = formData.get("whyJoin") as string | null
    const resumeFile = formData.get("resume") as File | null

    // Basic validation
    if (!fullName || !email || !phone || !experience || !whyJoin) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 })
    }
    // Add more specific validation if needed (e.g., email format)

    let resumeUrl: string | undefined = undefined

    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        // 5MB limit
        return NextResponse.json({ success: false, message: "Resume file exceeds 5MB limit." }, { status: 400 })
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ]
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { success: false, message: "Invalid resume file type. Allowed: PDF, DOC, DOCX, TXT." },
          { status: 400 },
        )
      }

      const sanitizedFilename = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")
      const blobPath = `careers/resumes/${Date.now()}-${sanitizedFilename}`

      const blob = await put(blobPath, resumeFile, {
        access: "public",
        contentType: resumeFile.type, // Pass content type for better handling
      })
      resumeUrl = blob.url
    }

    // **TODO: Save application data to your database here**
    // This is where you would typically interact with your database
    // For example:
    // await db.insertInto('applications').values({
    //   fullName, email, phone, positionOfInterest, experience, whyJoin, resumeUrl, submittedAt: new Date()
    // }).execute();

    console.log("Application Received (Server):", {
      fullName,
      email,
      phone,
      positionOfInterest,
      experience,
      whyJoin,
      resumeUrl,
    })

    // For now, we'll just simulate success
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        application: { fullName, email, resumeUrl },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing application:", error)
    let errorMessage = "An unexpected error occurred on the server."
    if (error instanceof Error) {
      errorMessage = error.message
    }
    // Avoid sending detailed internal error messages to the client in production
    return NextResponse.json({ success: false, message: "Server error processing application." }, { status: 500 })
  }
}
