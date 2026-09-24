import type React from "react"
import { SkipNavigation } from "@/components/skip-navigation"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SkipNavigation />
      <div className="flex min-h-screen flex-col">
        <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
          <nav aria-label="Main navigation" className="container mx-auto px-4 py-4">
            <MainNavigation />
          </nav>
        </header>
        <main id="main-content" tabIndex={-1} className="flex-1 bg-background text-foreground focus:outline-none">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
