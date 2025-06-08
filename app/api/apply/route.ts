import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest): Promise<NextResponse> {
  const formData = await request.formData()

  const fullName = formData.get("fullName") as string | null
  const email = formData.get("email") as string | null
  const phone = formData.get("phone") as string | null
  const positionOfInterest = formData.get("positionOfInterest") as string | null
  const experience = formData.get("experience") as string | null
  const whyJoin = formData.get("whyJoin") as string | null
  const resumeFile = formData.get("resume") as File | null

  if (!fullName || !email || !phone || !experience || !whyJoin) {
    return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 })
  }

  let resumeUrl: string | undefined = undefined

  try {
    if (resumeFile && resumeFile.size > 0) {
      // Sanitize filename (optional but good practice)
      const sanitizedFilename = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")
      const blobPath = `careers/resumes/${Date.now()}-${sanitizedFilename}`

      const blob = await put(blobPath, resumeFile, {
        access: "public", // Make it public to get a URL, or keep private and handle access later
        // You can add contentType if needed: contentType: resumeFile.type,
      })
      resumeUrl = blob.url
    }

    // **TODO: Save application data to your database here**
    // Example:
    // await db.insert(applicationsTable).values({
    //   fullName,
    //   email,
    //   phone,
    //   positionOfInterest,
    //   experience,
    //   whyJoin,
    //   resumeUrl, // Save the URL from Vercel Blob
    //   submittedAt: new Date(),
    // });

    console.log("Application Received:", {
      fullName,
      email,
      phone,
      positionOfInterest,
      experience,
      whyJoin,
      resumeUrl,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        application: { resumeUrl }, // You might return more data if needed
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing application:", error)
    let errorMessage = "An unexpected error occurred."
    if (error instanceof Error) {
      errorMessage = error.message
    }
    return NextResponse.json({ success: false, message: `Server error: ${errorMessage}` }, { status: 500 })
  }
}
