import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | A-Z Landscapes",
  description: "Read the terms and conditions for using A-Z Landscapes services.",
}

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}
