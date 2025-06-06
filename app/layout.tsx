import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A-Z Landscapes | Professional Landscaping & Hardscaping Services",
  description: "Transforming outdoor spaces with professional landscaping and hardscaping services since 2008.",
    generator: 'v0.dev'
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
          <div className="flex min-h-screen flex-col">
            <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
              {" "}
              {/* Header bg navy, text white */}
              <div className="container mx-auto px-4 py-4">
                <MainNavigation />
              </div>
            </header>
            <main className="flex-1 bg-background text-foreground">{children}</main>{" "}
            {/* Main content bg white, text navy */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
