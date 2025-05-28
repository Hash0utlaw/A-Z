import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Before & After Transformations | A-Z Landscaping",
  description:
    "See dramatic before and after transformations of outdoor spaces by A-Z Landscaping. View our landscape and hardscape makeovers.",
}

export default function TransformationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
