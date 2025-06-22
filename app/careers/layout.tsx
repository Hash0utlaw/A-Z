import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers | A-Z Landscapes",
  description:
    "Explore exciting career opportunities at A-Z Landscapes. We're looking for passionate individuals to join our dedicated landscaping and hardscaping team. Apply today and grow with us!",
  keywords:
    "landscaping careers, A-Z Landscapes jobs, hardscaping jobs, outdoor careers, landscape technician jobs, garden design careers, join our team",
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
