import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const SERVICES = [
  "Paver Patios & Walkways",
  "Retaining Walls",
  "Outdoor Kitchens & Fire Pits",
  "Landscape Design & Installation",
  "Driveways",
  "Water Features & Landscape Lighting",
]

export function FreeEstimateServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Services</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services We Cover</h2>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <div key={service} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-navy-100">
              <CheckCircle className="h-5 w-5 text-navy-700 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
