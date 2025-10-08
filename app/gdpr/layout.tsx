import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GDPR Information & Data Rights | A-Z Landscapes",
  description: "Understand your data protection rights under GDPR and how A-Z Landscapes protects your privacy.",
}

export default function GDPRLayout({ children }: { children: React.ReactNode }) {
  return children
}
