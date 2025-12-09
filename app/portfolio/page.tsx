import type { Metadata } from "next"
import Image from "next/image"
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
  {
    src: "/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg",
    title: "Aerial View Fire Pit Patio",
    description: "Custom hardscape design with circular fire pit and stone patio",
  },
  {
    src: "/user-uploads/backyard-fire-pit-patio-residential.jpeg",
    title: "Residential Fire Pit Retreat",
    description: "Cozy backyard gathering space with built-in seating",
  },
  {
    src: "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
    title: "Evening Outdoor Living Space",
    description: "Complete patio with fire pit and outdoor kitchen at dusk",
  },
  {
    src: "/user-uploads/backyard-pool-linear-fire-pit-night-ambiance.jpeg",
    title: "Pool & Linear Fire Feature",
    description: "Modern linear fire pit with poolside ambiance lighting",
  },
  {
    src: "/user-uploads/luxury-pool-fire-feature-evening-lighting.jpeg",
    title: "Luxury Pool Fire Display",
    description: "Elegant evening fire feature integrated with pool design",
  },
  {
    src: "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
    title: "Complete Outdoor Kitchen",
    description: "Full kitchen with grill, smoker, and custom storage cabinets",
  },
  {
    src: "/user-uploads/outdoor-kitchen-island-grill-stone-countertop-side-view.jpeg",
    title: "Stone Countertop Kitchen Island",
    description: "Built-in grill island with natural stone countertops",
  },
  {
    src: "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
    title: "Night-Lit Outdoor Kitchen",
    description: "Professional stainless steel appliances with ambient lighting",
  },
  {
    src: "/user-uploads/outdoor-kitchen-patio-dining-area-stone-pavers.jpeg",
    title: "Patio Dining & Kitchen Area",
    description: "Outdoor entertaining space with stone paver flooring",
  },
  {
    src: "/user-uploads/stone-walkway-residential.jpeg",
    title: "Natural Stone Walkway",
    description: "Elegant stone pathway leading through residential landscape",
  },
  {
    src: "/user-uploads/concrete-pad-stone-walkway-residential.jpeg",
    title: "Concrete & Stone Pathway",
    description: "Modern concrete pad with decorative stone walkway accents",
  },
  {
    src: "/user-uploads/decorative-concrete-outdoor-living-space.jpeg",
    title: "Decorative Concrete Patio",
    description: "Stamped decorative concrete outdoor living area",
  },
  {
    src: "/user-uploads/natural-stone-steps-retaining-wall-landscaping.jpeg",
    title: "Stone Steps & Retaining Wall",
    description: "Natural stone stairway with integrated retaining wall",
  },
  {
    src: "/user-uploads/completed-artificial-turf-pool-landscape-design.jpeg",
    title: "Artificial Turf Pool Landscape",
    description: "Low-maintenance turf installation around pool area",
  },
  {
    src: "/user-uploads/butterfly-garden-flower-residential.jpeg",
    title: "Butterfly Garden Installation",
    description: "Colorful pollinator-friendly flower garden design",
  },
  {
    src: "/user-uploads/stone-driveway-resident-lake.jpeg",
    title: "Lakefront Stone Driveway",
    description: "Premium stone driveway with scenic lake views",
  },
  {
    src: "/user-uploads/lake-driveway-stone-resident.jpeg",
    title: "Lake Residence Entry Drive",
    description: "Custom stone driveway for waterfront property",
  },
  {
    src: "/user-uploads/Patio-walkway-landscape-resident.jpg",
    title: "Patio & Walkway Design",
    description: "Integrated patio and walkway landscape installation",
  },
  {
    src: "/user-uploads/residental-backyard-water-fountain.jpeg",
    title: "Backyard Water Fountain",
    description: "Tranquil water fountain feature in residential setting",
  },
  {
    src: "/user-uploads/backyard-pool-waterfall-resident.jpeg",
    title: "Pool Waterfall Feature",
    description: "Custom waterfall cascading into backyard pool",
  },
  {
    src: "/user-uploads/residential-backyard-gazebo-landscaping.jpeg",
    title: "Gazebo & Garden Landscape",
    description: "Elegant gazebo surrounded by professional landscaping",
  },
  {
    src: "/user-uploads/retaining-wall-terraced-residential-front-yard.jpeg",
    title: "Terraced Front Yard Wall",
    description: "Multi-level retaining wall with fresh plantings",
  },
  {
    src: "/user-uploads/curved-retaining-wall-paver-patio-landscape-lighting.jpeg",
    title: "Curved Wall & Paver Patio",
    description: "Elegant curved retaining wall with landscape lighting",
  },
  {
    src: "/user-uploads/stacked-stone-retaining-wall-curved-residential.jpeg",
    title: "Stacked Stone Curved Wall",
    description: "Natural stacked stone retaining wall design",
  },
  {
    src: "/user-uploads/natural-stone-retaining-wall-dry-creek-bed-transformation.jpg",
    title: "Dry Creek Bed Transformation",
    description: "Natural stone wall with decorative dry creek bed",
  },
]

export default function PortfolioPage() {
  return (
    <div className="bg-gray-50 text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/hero-landscape.png"
            alt="Beautifully landscaped property showcase"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
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
            items={projectImages.map((project) => ({
              image: project.src,
              title: project.title,
              description: project.description,
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
