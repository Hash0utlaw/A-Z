import type React from "react"
import { Footer } from "@/components/footer"
import { MainNavigation } from "@/components/main-navigation"

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <MainNavigation />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
