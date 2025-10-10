import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Camera } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Portfolio | A-Z Landscapes",
  description:
    "Explore the stunning landscape transformations by A-Z Landscapes. View our portfolio of completed projects, from patios and walkways to gardens and outdoor living spaces in Your City/Region.",
  keywords: [
    "landscape portfolio",
    "landscaping projects",
    "A-Z Landscapes portfolio",
    "patio design",
    "garden installation",
    "outdoor living spaces",
    "Your City/Region landscaping",
    "landscape design showcase",
    "best landscaping work",
  ],
}

const projectImages = [
  "/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg",
  "/user-uploads/backyard-fire-pit-patio-residential.jpeg",
  "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
  "/user-uploads/backyard-pool-linear-fire-pit-night-ambiance.jpeg",
  "/user-uploads/luxury-pool-fire-feature-evening-lighting.jpeg",
  "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
  "/user-uploads/outdoor-kitchen-island-grill-stone-countertop-side-view.jpeg",
  "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
  "/user-uploads/outdoor-kitchen-patio-dining-area-stone-pavers.jpeg",
  "/user-uploads/stone-walkway-residential.jpeg",
  "/user-uploads/concrete-pad-stone-walkway-residential.jpeg",
  "/user-uploads/decorative-concrete-outdoor-living-space.jpeg",
  "/user-uploads/natural-stone-steps-retaining-wall-landscaping.jpeg",
  "/user-uploads/completed-artificial-turf-pool-landscape-design.jpeg",
  "/user-uploads/butterfly-garden-flower-residential.jpeg",
]

export default function PortfolioPage() {
  return (
    <div className="bg-gray-50 text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="/hero-landscape.png"
            alt="Beautifully landscaped property showcase"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Camera className="mx-auto h-12 w-12 text-amber-400 mb-4" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Our Project Portfolio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-100">
            Browse our gallery of completed landscaping projects. See the quality and craftsmanship that defines A-Z
            Landscapes.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">Professional Project Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every image showcases real projects completed by our team. Click any photo to view it in full detail.
            </p>
          </div>

          <GalleryGrid
            items={projectImages.map((src) => ({
              image: src,
              title: "A-Z Landscapes Project",
              description: "Professional landscaping work",
            }))}
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-navy-100 mb-8 max-w-xl mx-auto">
            Let A-Z Landscapes transform your outdoor space with the same quality and attention to detail you see in our
            portfolio.
          </p>
          <Link href="/contact" passHref>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-navy-800 font-semibold px-8 py-3 transition-colors"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
