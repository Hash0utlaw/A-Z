import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join Our Team | Careers at A-Z Landscapes",
  description:
    "Looking for a rewarding career in landscaping? A-Z Landscapes is hiring passionate individuals. Apply today and grow with us!",
  keywords:
    "landscaping careers, landscape jobs, hardscaping jobs, A-Z Landscapes careers, apply for landscaping, outdoor careers",
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
