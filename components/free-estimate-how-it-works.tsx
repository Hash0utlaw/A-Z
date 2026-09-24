import { Badge } from "@/components/ui/badge"

const STEPS = [
  {
    title: "On-Site Consultation",
    description: "We visit your property to understand your vision, assess site conditions, and take measurements.",
  },
  {
    title: "Design & Written Estimate",
    description: "You get a clear, itemized written estimate with scope, materials, and timeline before any work begins.",
  },
  {
    title: "Build & Cleanup",
    description: "Our crew completes the work with attention to detail and a thorough cleanup when we're done.",
  },
]

export function FreeEstimateHowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Process</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        </div>

        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
