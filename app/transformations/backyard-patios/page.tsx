import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TransformationGallery } from "@/components/transformation-gallery"

export const metadata: Metadata = {
  title: "Backyard Patio Transformations | A-Z Landscaping",
  description:
    "See our stunning backyard patio transformations that create beautiful outdoor living spaces for our clients.",
}

const patioTransformations = [
  {
    id: 1,
    title: "Suburban Backyard Retreat",
    beforeImage: "/transformations/backyard-patio-before-1.png",
    afterImage: "/transformations/backyard-patio-after-1.png",
  },
  {
    id: 2,
    title: "Modern Multi-Level Patio",
    beforeImage: "/transformations/backyard-patio-before-2.png",
    afterImage: "/transformations/backyard-patio-after-2.png",
  },
  {
    id: 3,
    title: "Cozy Fire Pit Gathering Space",
    beforeImage: "/transformations/backyard-patio-before-3.png",
    afterImage: "/transformations/backyard-patio-after-3.png",
  },
  {
    id: 4,
    title: "Terraced Hillside Solution",
    beforeImage: "/transformations/backyard-patio-before-4.png",
    afterImage: "/transformations/backyard-patio-after-4.png",
  },
]

export default function BackyardPatioTransformationsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/transformations">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to All Transformations
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Backyard Patio Transformations</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Explore our collection of backyard patio transformations. These projects showcase how we can turn unused or
          outdated spaces into beautiful outdoor living areas that extend your home and enhance your lifestyle.
        </p>
      </div>

      <TransformationGallery options={patioTransformations} category="Backyard Patio" />

      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Patio Transformation?</h2>
          <p className="text-gray-600 mb-6">
            Our team specializes in creating custom patio spaces that perfectly match your style, needs, and budget.
            From simple paver patios to elaborate outdoor living rooms, we can design and build the perfect space for
            your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button className="bg-kelly-500 hover:bg-kelly-600">Request a Consultation</Button>
            </Link>
            <Link href="/services/patios-walkways">
              <Button variant="outline">Learn About Our Patio Services</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
