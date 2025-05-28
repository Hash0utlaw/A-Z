import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | A-Z Landscaping",
  description:
    "Find answers to common questions about our landscaping and hardscaping services, pricing, process, and more.",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
