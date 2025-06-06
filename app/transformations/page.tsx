import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Before & After Landscape Transformations | A-Z Landscapes",
  description:
    "See dramatic before and after photos of landscape transformations by A-Z Landscapes. Witness how we revitalize outdoor spaces with our expert services.",
}

const transformations = [
  {
    id: 1,
    title: "Backyard Patio Transformation",
    description:
      "This neglected backyard was transformed into a stunning outdoor living space with a paver patio, fire pit, and lush landscaping.",
    category: "Patios & Walkways",
    beforeImage: "/transformations/backyard-patio-before-1.png",
    afterImage: "/transformations/backyard-patio-after-1.png",
    location: "Suburban Residence",
  },
  {
    id: 2,
    title: "Front Yard Landscape Renovation",
    description:
      "We replaced an outdated front yard with a modern landscape design featuring native plants, decorative stone, and accent lighting.",
    category: "Garden Design & Planting",
    beforeImage: "/placeholder-lc1f7.png",
    afterImage: "/modern-native-landscaping.png",
    location: "Residential Property",
  },
  {
    id: 3,
    title: "Sloped Property Solution",
    description:
      "This challenging sloped property was transformed with a series of retaining walls, creating usable terraced garden spaces.",
    category: "Retaining Walls",
    beforeImage: "/steep-sloped-erosion.png",
    afterImage: "/terraced-garden-slope.png",
    location: "Hillside Home",
  },
  {
    id: 4,
    title: "Outdoor Kitchen Addition",
    description:
      "We converted this basic patio into a complete outdoor entertainment area with a built-in kitchen, bar seating, and pergola.",
    category: "Outdoor Kitchens & Fire Features",
    beforeImage: "/basic-concrete-patio.png",
    afterImage: "/luxury-outdoor-kitchen.png",
    location: "Family Backyard",
  },
  {
    id: 5,
    title: "Lawn Renovation Project",
    description:
      "This patchy, weed-filled lawn was completely renovated with proper grading, soil preparation, and premium sod installation.",
    category: "Lawn Care & Maintenance",
    beforeImage: "/patchy-brown-lawn.png",
    afterImage: "/perfect-green-lawn.png",
    location: "New Construction",
  },
  {
    id: 6,
    title: "Water Feature Installation",
    description:
      "We transformed this unused corner of the yard into a tranquil retreat with a custom waterfall and naturalistic pond.",
    category: "Water Features",
    beforeImage: "/unused-yard-corner.png",
    afterImage: "/garden-pond-waterfall.png",
    location: "Garden Retreat",
  },
]

export default function TransformationsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Before & After Transformations</h1>
        <p className="text-lg text-gray-600">
          Drag the slider to reveal the dramatic transformations we've created for our clients. These projects showcase
          our ability to reimagine and revitalize outdoor spaces of all types.
        </p>
      </div>

      <div className="space-y-16 mb-16">
        {transformations.map((transformation) => (
          <div key={transformation.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block bg-navy-100 text-navy-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                    {transformation.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">{transformation.title}</h2>
                </div>
                <span className="text-sm text-gray-500">{transformation.location}</span>
              </div>
              <p className="text-gray-600 mb-6">{transformation.description}</p>
            </div>

            <BeforeAfterSlider
              beforeImage={transformation.beforeImage}
              afterImage={transformation.afterImage}
              beforeAlt={`Before: ${transformation.title}`}
              afterAlt={`After: ${transformation.title}`}
              height={500}
            />
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Own Transformation?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss how we can transform your outdoor space into something extraordinary.
          </p>
          <Link href="/contact">
            <Button className="bg-kelly-500 hover:bg-kelly-600">
              Request a Consultation <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
