import type { Metadata } from "next"
import { CheckCircle, Phone } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { FreeEstimateConversion } from "@/components/free-estimate-conversion"

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
}

export default function FreeEstimateThanksPage() {
  return (
    <section className="py-20">
      <FreeEstimateConversion />
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-kelly-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thanks — We've Got Your Request</h1>
          <p className="text-lg text-gray-600 mb-8">
            We'll get back to you within 24 hours with next steps for your free estimate.
          </p>
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 bg-kelly-500 hover:bg-kelly-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            Or call us now: {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
