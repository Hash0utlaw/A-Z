import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { SkipNavigation } from "@/components/skip-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "A-Z Landscapes | Top Landscaping & Hardscaping Services",
    template: "%s | A-Z Landscapes",
  },
  description:
    "A-Z Landscapes offers expert landscaping, hardscaping, design, and maintenance services. Transform your outdoor space with our passionate team. Free estimates!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
