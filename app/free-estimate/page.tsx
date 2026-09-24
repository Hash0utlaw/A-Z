import type { Metadata } from "next"
import { Phone } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { getLandingVariant } from "@/lib/landing-variants"
import { FreeEstimateHero } from "@/components/free-estimate-hero"
import { FreeEstimateTrustStrip } from "@/components/free-estimate-trust-strip"
import { FreeEstimateGallery } from "@/components/free-estimate-gallery"
import { FreeEstimateHowItWorks } from "@/components/free-estimate-how-it-works"
import { FreeEstimateServices } from "@/components/free-estimate-services"
import { FreeEstimateReviews } from "@/components/free-estimate-reviews"
import { FreeEstimateFaq } from "@/components/free-estimate-faq"
import { FreeEstimateMobileCtaBar } from "@/components/free-estimate-mobile-cta-bar"

export const metadata: Metadata = {
  title: "Free Estimate",
  robots: {
    index: false,
    follow: false,
  },
}

interface FreeEstimatePageProps {
  searchParams: { s?: string }
}

export default function FreeEstimatePage({ searchParams }: FreeEstimatePageProps) {
  const variant = getLandingVariant(searchParams.s)
  const source = `google-ads-lp${searchParams.s ? ":" + searchParams.s : ""}`

  return (
    <div className="pb-20 md:pb-0">
      <FreeEstimateHero variant={variant} source={source} />
      <FreeEstimateTrustStrip />
      <FreeEstimateGallery />
      <FreeEstimateHowItWorks />
      <FreeEstimateServices />
      <FreeEstimateReviews />
      <FreeEstimateFaq />

      <section className="bg-kelly-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              Get a free, no-obligation estimate from your local Lake Norman landscaping team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-kelly-600 hover:bg-kelly-50 px-8 py-3 rounded-md font-semibold transition-colors w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phoneDisplay}
              </a>
              <a
                href="#estimate-form"
                className="inline-flex items-center justify-center bg-navy-900 text-white hover:bg-navy-800 px-8 py-3 rounded-md font-semibold transition-colors w-full sm:w-auto"
              >
                Get Your Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <FreeEstimateMobileCtaBar />
    </div>
  )
}
