import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, MapPin } from "lucide-react"
import { SERVICE_AREAS } from "@/lib/service-areas"

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "A-Z Landscapes proudly serves Huntersville, Cornelius, Davidson, Mooresville, and Charlotte, NC with landscaping and hardscaping services tailored to each community.",
}

export default function ServiceAreasPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelly-50 to-kelly-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Where We Work</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Service Areas</h1>
            <p className="text-xl text-gray-600 mb-8">
              A-Z Landscapes builds patios, retaining walls, and outdoor living spaces across the Lake Norman region.
              Each community has its own terrain, permitting rules, and priorities — find yours below.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Card
                key={area.slug}
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-kelly-100 hover:border-kelly-200 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-kelly-100 p-2 rounded-lg mt-1">
                      <MapPin className="h-6 w-6 text-kelly-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{area.city}</h2>
                      <p className="text-sm text-gray-500">{area.county}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{area.intro}</p>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex items-center text-kelly-500 hover:text-kelly-600 font-medium mt-auto"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kelly-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't See Your Town?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              We work throughout the greater Lake Norman area. Contact us to confirm we cover your property.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-kelly-500 hover:bg-kelly-50 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
