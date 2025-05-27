import type React from "react"
import type { Metadata } from "next"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"

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
  return (
    <>
      <header className="bg-white shadow-sm border-b border-kelly-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <MainNavigation />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
