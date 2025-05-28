import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | A-Z Landscaping",
  description:
    "Browse our portfolio of completed landscaping and hardscaping projects. See examples of patios, retaining walls, gardens, and more.",
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
