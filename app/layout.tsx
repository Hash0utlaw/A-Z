import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { PhoneClickTracking } from "@/components/phone-click-tracking"
import { BUSINESS } from "@/lib/business"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: "A-Z Landscapes | Top Landscaping & Hardscaping Services",
    template: "%s | A-Z Landscapes",
  },
  description:
    "A-Z Landscapes offers expert landscaping, hardscaping, design, and maintenance services. Transform your outdoor space with our passionate team. Free estimates!",
  alternates: {
    canonical: "./",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  url: BUSINESS.domain,
  telephone: BUSINESS.phoneE164,
  logo: `${BUSINESS.domain}/logo.png`,
  image: `${BUSINESS.domain}/logo.png`,
  founder: {
    "@type": "Person",
    name: BUSINESS.founder,
  },
  foundingDate: BUSINESS.foundingYear,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: "US",
  },
  areaServed: BUSINESS.areaServed.map((city) => ({
    "@type": "City",
    name: city,
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gadsId = process.env.NEXT_PUBLIC_GADS_ID

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {gadsId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gadsId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gadsId}');
              `}
            </Script>
          </>
        )}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <CookieConsent />
          <PhoneClickTracking />
        </ThemeProvider>
      </body>
    </html>
  )
}
