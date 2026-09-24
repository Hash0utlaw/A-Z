import { Phone } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"
import { BUSINESS } from "@/lib/business"
import type { LandingVariant } from "@/lib/landing-variants"
import { FreeEstimateForm } from "@/components/free-estimate-form"

interface FreeEstimateHeroProps {
  variant: LandingVariant
  source: string
}

export function FreeEstimateHero({ variant, source }: FreeEstimateHeroProps) {
  return (
    <section className="bg-gradient-to-br from-navy-700 to-navy-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{variant.h1}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">{variant.subhead}</p>
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 bg-kelly-500 hover:bg-kelly-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div>
            <OptimizedImage
              src="/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg"
              alt="Completed backyard patio and fire pit project"
              width={640}
              height={480}
              priority
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div id="estimate-form" className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <FreeEstimateForm source={source} />
          </div>
        </div>
      </div>
    </section>
  )
}
