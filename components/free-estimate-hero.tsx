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
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-900/90" />
      </div>

      <div className="relative container mx-auto px-4">
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

        <div id="estimate-form" className="max-w-md mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-8">
          <FreeEstimateForm source={source} />
        </div>
      </div>
    </section>
  )
}
