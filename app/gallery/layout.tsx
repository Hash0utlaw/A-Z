import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photo Gallery | A-Z Landscaping",
  description:
    "Browse our photo gallery of landscaping and hardscaping projects. View high-quality images of our work across various categories.",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
