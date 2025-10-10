import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Footprints,
  Building,
  Car,
  Flame,
  Droplet,
  Tent,
  Scissors,
  TreePine,
  SunSnow,
  Paintbrush,
  Layers,
  Wrench,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landscaping & Hardscaping Services | A-Z Landscapes",
  description:
    "A-Z Landscapes offers comprehensive landscaping, hardscaping, design, maintenance, irrigation, lighting, and seasonal services. Explore our solutions.",
}

const hardscapeServices = [
  {
    title: "Patios & Walkways",
    description:
      "Custom designed patios and walkways using pavers, natural stone, flagstone, brick, river rock, or pea gravel.",
    icon: Footprints,
    image: "/patios-walkways/hero.png", // Updated to more relevant hero
    slug: "patios-walkways",
    details: "Crafting beautiful and durable surfaces for outdoor living and easy navigation.",
  },
  {
    title: "Retaining Walls",
    description:
      "Functional and decorative walls using natural stone, boulders, or manufactured blocks to manage slopes and create usable space.",
    icon: Building,
    image: "/retaining-walls/hero.png", // Updated
    slug: "retaining-walls",
    details: "Expertly built retaining walls for structural integrity and aesthetic appeal.",
  },
  {
    title: "Driveways",
    description: "Durable and attractive driveways using asphalt, concrete, or pavers, enhancing curb appeal.",
    icon: Car,
    image: "/driveways/hero.png", // Updated
    slug: "driveways",
    details: "Professional driveway installation designed to last and impress.",
  },
  {
    title: "Outdoor Kitchens & Fire Features",
    description:
      "Custom outdoor kitchens, fire pits (gas/wood), and fireplaces for the ultimate entertainment and relaxation hub.",
    icon: Flame,
    image: "/outdoor-kitchens-fire-features/hero.png", // Updated
    slug: "outdoor-kitchens-fire-features",
    details: "Extend your living space outdoors with custom-built amenities.",
  },
  {
    title: "Water Features",
    description: "Designing and integrating beautiful fountains, ponds, and waterfalls. (Service offering expanding)",
    icon: Droplet,
    image: "/water-features/hero.png", // Updated
    slug: "water-features",
    details: "Add tranquility and visual interest with custom water elements.",
  },
  {
    title: "Pergolas & Gazebos",
    description:
      "Elegant outdoor structures providing shade, defining living spaces, and enhancing your landscape's architecture.",
    icon: Tent,
    image: "/pergolas-gazebos/hero.png", // Updated
    slug: "pergolas-gazebos",
    details: "Custom-built pergolas, arbors, and gazebos to complement your outdoor lifestyle.",
  },
]

const landscapingServices = [
  {
    title: "Landscape Design",
    description:
      "Collaborative design process focusing on your style (modern, southern, etc.), site conditions, and plant preferences for a unique outdoor space.",
    icon: Paintbrush,
    image: "/garden-design-planting/hero.png", // Updated
    slug: "garden-design-planting", // Existing slug, good fit
    details: "From initial concept and plant selection to 3D visualization and final plan.",
  },
  {
    title: "Lawn Care & Full-Service Maintenance",
    description:
      "Comprehensive weekly/bi-weekly maintenance: mowing, edging, weed control, fertilization programs (7-step), pruning, mulching, and seasonal cleanups.",
    icon: Scissors,
    image: "/lawn-care-maintenance/hero.png", // Updated
    slug: "lawn-care-maintenance",
    details: "Keeping your property pristine year-round with our dedicated maintenance crews.",
  },
  {
    title: "Tree Services",
    description:
      "Professional tree pruning, removal, planting, and health assessments to maintain the safety and beauty of your mature trees.",
    icon: TreePine,
    image: "/tree-services/hero.png", // Updated
    slug: "tree-services",
    details: "Expert care for one of your landscape's most valuable assets.",
  },
  {
    title: "Artificial Turf Installation",
    description:
      "Premium artificial turf solutions for putting greens, pet areas, low-maintenance lawns, and problem (e.g. shady) areas.",
    icon: ShieldCheck, // Changed icon
    image: "/turf-installation/hero.png", // Updated
    slug: "turf-installation",
    details: "Durable, realistic-looking turf options for a perfect lawn without the upkeep.",
  },
  {
    title: "Irrigation & Drainage Solutions",
    description:
      "Efficient sprinkler and drip irrigation system installation & maintenance. Expert drainage solutions (French drains, culverts) to protect your property.",
    icon: Wrench, // Changed icon
    image: "/irrigation-systems/hero.jpg", // Updated to use new irrigation hero image with sprinklers
    slug: "irrigation-systems",
    details: "Smart water management for healthy landscapes and property protection.",
  },
  {
    title: "Landscape Lighting",
    description:
      "Custom low-voltage LED lighting designs: uplights, downlights, path, well, wash, and accent lights to enhance beauty, safety, and ambiance.",
    icon: Sparkles, // Changed icon
    image: "/landscape-lighting/hero.png", // Updated
    slug: "landscape-lighting",
    details: "Illuminate your landscape's best features and extend your outdoor enjoyment.",
  },
  {
    title: "Seasonal Services & Grading",
    description:
      "Spring/fall cleanups, leaf removal, snow removal, and land grading for optimal landscape health and site preparation.",
    icon: SunSnow,
    image: "/seasonal-services/hero.png", // Updated
    slug: "seasonal-services",
    details: "Comprehensive care throughout the year, adapting to every season's needs.",
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelly-50 to-kelly-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Our Expertise</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Full-Service Landscape & Hardscape Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A-Z Landscapes offers a complete range of services, from initial design and meticulous installation to
              ongoing maintenance. We're your partners in creating and sustaining beautiful, functional outdoor
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-lg grid-cols-3">
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="hardscape" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" /> Hardscape
                </TabsTrigger>
                <TabsTrigger value="landscaping" className="flex items-center gap-2">
                  <Paintbrush className="h-4 w-4" /> Landscaping
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...hardscapeServices, ...landscapingServices]
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="hardscape" id="hardscape">
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Hardscape Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
                  Our hardscaping services build the enduring structures that define your outdoor living space,
                  enhancing functionality, beauty, and property value with expert craftsmanship.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {hardscapeServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="landscaping" id="landscaping">
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Landscaping Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
                  From visionary design to meticulous installation and ongoing care, our landscaping services bring your
                  outdoor space to life with vibrant plants, strategic lighting, efficient irrigation, and healthy
                  lawns.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {landscapingServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kelly-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Outdoor Space?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              No matter the scale of your project, A-Z Landscapes is ready to bring expertise, passion, and precision.
              Contact us for a free consultation and let's discuss your vision.
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

function ServiceCard({
  service,
}: {
  service: {
    title: string
    description: string
    icon: React.ElementType
    image: string
    slug: string
    details?: string
  }
}) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-kelly-100 hover:border-kelly-200 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg?height=300&width=400&query=landscape+service"}
          alt={service.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-kelly-100 p-2 rounded-lg mt-1">
            <service.icon className="h-6 w-6 text-kelly-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{service.description}</p>
        {service.details && <p className="text-xs text-gray-500 mb-4 italic">{service.details}</p>}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-kelly-500 hover:text-kelly-600 font-medium mt-auto"
        >
          Learn More <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
