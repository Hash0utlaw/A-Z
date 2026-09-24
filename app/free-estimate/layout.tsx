import type React from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"
import { BUSINESS } from "@/lib/business"

export default function FreeEstimateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/free-estimate" aria-label="A-Z Landscapes">
            <OptimizedImage src="/logo.png" alt="A-Z Landscapes Logo" width={150} height={42} className="object-contain" />
          </Link>
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="inline-flex items-center gap-2 bg-kelly-500 hover:bg-kelly-600 text-white px-4 py-2 rounded-md font-semibold text-sm md:text-base transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="py-4 border-t border-gray-100 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {BUSINESS.name}.{" "}
        <Link href="/privacy-policy" className="underline hover:text-gray-700">
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}
