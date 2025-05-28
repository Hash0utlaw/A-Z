import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Hammer,
  Leaf,
  ChevronRight,
  Footprints,
  Building,
  Car,
  Flame,
  Droplet,
  Tent,
  Scissors,
  TreePine,
  Sprout,
  Lightbulb,
  SunSnow,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const hardscapeServices = [
  {
    title: "Patios & Walkways",
    description: "Custom designed patios and walkways using concrete, pavers, or natural stone.",
    icon: Footprints,
    image: "/stone-patio-furniture.png",
    slug: "patios-walkways",
  },
  {
    title: "Retaining Walls",
    description: "Functional and decorative wall systems to manage slopes and create usable space.",
    icon: Building,
    image: "/natural-stone-terraced-garden.png",
    slug: "retaining-walls",
  },
  {
    title: "Driveways",
    description: "Durable and attractive driveways using asphalt, concrete, or pavers.",
    icon: Car,
    image: "/elegant-paver-driveway.png",
    slug: "driveways",
  },
  {
    title: "Outdoor Kitchens & Fire Features",
    description: "Custom outdoor kitchens, fire pits, and fireplaces for entertaining.",
    icon: Flame,
    image: "/outdoor-kitchen-firepit.png",
    slug: "outdoor-kitchens-fire-features",
  },
  {
    title: "Water Features",
    description: "Beautiful fountains, ponds, and waterfalls to enhance your landscape.",
    icon: Droplet,
    image: "/garden-pond-waterfall.png",
    slug: "water-features",
  },
  {
    title: "Pergolas & Gazebos",
    description: "Elegant outdoor structures providing shade and defining outdoor living spaces.",
    icon: Tent,
    image: "/pergola-outdoor-seating.png",
    slug: "pergolas-gazebos",
  },
]

const landscapingServices = [
  {
    title: "Lawn Care & Maintenance",
    description: "Complete lawn care services including mowing, fertilizing, and seasonal cleanup.",
    icon: Scissors,
    image: "/lawn-care-maintenance/lush-lawn.png",
    slug: "lawn-care-maintenance",
  },
  {
    title: "Garden Design & Planting",
    description: "Custom garden designs with flower beds, shrubs, and perennial gardens.",
    icon: Sprout,
    image: "/garden-design-planting/perennial-garden.png",
    slug: "garden-design-planting",
  },
  {
    title: "Tree Services",
    description: "Professional tree pruning, removal, planting, and health assessments.",
    icon: TreePine,
    image: "/tree-services/tree-pruning.png",
    slug: "tree-services",
  },
  {
    title: "Turf Installation",
    description: "Premium sod, artificial turf, and hydroseeding solutions for beautiful lawns.",
    icon: Sprout,
    image: "/turf-installation/sod-installation.png",
    slug: "turf-installation",
  },
  {
    title: "Irrigation Systems",
    description: "Efficient sprinkler installation and maintenance for healthy landscapes.",
    icon: Droplet,
    image: "/irrigation-systems/lawn-sprinklers.png",
    slug: "irrigation-systems",
  },
  {
    title: "Landscape Lighting",
    description: "Accent, security, and pathway lighting to enhance your property day and night.",
    icon: Lightbulb,
    image: "/landscape-lighting/path-lighting.png",
    slug: "landscape-lighting",
  },
  {
    title: "Seasonal Services",
    description: "Spring cleanup, fall leaf removal, and winter snow removal services.",
    icon: SunSnow,
    image: "/seasonal-services/spring-cleanup.png",
    slug: "seasonal-services",
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelly-50 to-kelly-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Landscaping & Hardscaping Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From design to installation and maintenance, we offer comprehensive services to transform your outdoor
              space into a beautiful, functional extension of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="hardscape" className="flex items-center gap-2">
                  <Hammer className="h-4 w-4" /> Hardscape
                </TabsTrigger>
                <TabsTrigger value="landscaping" className="flex items-center gap-2">
                  <Leaf className="h-4 w-4" /> Landscaping
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...hardscapeServices, ...landscapingServices].map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hardscape">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Hardscape Services</h2>
                <p className="text-lg text-gray-600">
                  Our hardscaping services create the foundation of your outdoor living space with durable, beautiful
                  structures that enhance your property's functionality and value.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {hardscapeServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="landscaping">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Landscaping Services</h2>
                <p className="text-lg text-gray-600">
                  Our landscaping services bring life and color to your outdoor space with expert plant selection,
                  installation, and ongoing care to keep your property looking its best year-round.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {landscapingServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              Contact us today for a free consultation and estimate. Our team of experts is ready to bring your vision
              to life.
            </p>
            <Link
              href="/#contact"
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

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-kelly-100 hover:border-kelly-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-kelly-100 p-2 rounded-lg">
            <service.icon className="h-6 w-6 text-kelly-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-kelly-500 hover:text-kelly-600 font-medium"
        >
          Learn More <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
