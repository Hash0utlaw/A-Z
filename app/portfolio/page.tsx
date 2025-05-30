import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Portfolio | A-Z Landscapes",
  description: "View our completed landscaping and hardscaping projects across residential and commercial properties.",
}

// Portfolio project data
const projects = [
  {
    id: 1,
    title: "Modern Paver Patio Retreat",
    description:
      "A contemporary paver patio with built-in seating and fire pit, creating an elegant outdoor living space.",
    category: "patios-walkways",
    image: "/gallery/patios/modern-paver-patio.png",
    location: "Suburban Residence",
    date: "Spring 2023",
  },
  {
    id: 2,
    title: "Natural Stone Terraced Garden",
    description: "Multi-level retaining walls creating usable garden spaces on a sloped property.",
    category: "retaining-walls",
    image: "/gallery/walls/terraced-garden.png",
    location: "Hillside Property",
    date: "Summer 2022",
  },
  {
    id: 3,
    title: "Elegant Paver Driveway",
    description: "Custom paver driveway with decorative borders and lighting, enhancing curb appeal.",
    category: "driveways",
    image: "/driveways/paver-driveway.png",
    location: "Executive Home",
    date: "Fall 2023",
  },
  {
    id: 4,
    title: "Outdoor Kitchen & Fireplace",
    description: "Complete outdoor kitchen with stone fireplace, creating a perfect entertainment area.",
    category: "outdoor-kitchens-fire-features",
    image: "/gallery/outdoor-kitchens/complete-kitchen.png",
    location: "Luxury Residence",
    date: "Summer 2023",
  },
  {
    id: 5,
    title: "Tranquil Backyard Pond",
    description: "Natural-looking pond with waterfall, aquatic plants, and stone accents.",
    category: "water-features",
    image: "/water-features/natural-pond.png",
    location: "Garden Retreat",
    date: "Spring 2022",
  },
  {
    id: 6,
    title: "Cedar Pergola & Outdoor Living",
    description: "Custom cedar pergola with integrated lighting and comfortable seating area.",
    category: "pergolas-gazebos",
    image: "/pergolas-gazebos/cedar-pergola.png",
    location: "Backyard Oasis",
    date: "Summer 2023",
  },
  {
    id: 7,
    title: "Premium Lawn Renovation",
    description: "Complete lawn renovation with sod installation, irrigation, and landscape design.",
    category: "lawn-care-maintenance",
    image: "/lawn-care-maintenance/lawn-renovation.png",
    location: "New Construction",
    date: "Spring 2023",
  },
  {
    id: 8,
    title: "Colorful Perennial Garden",
    description: "Vibrant perennial garden designed for year-round interest and color.",
    category: "garden-design-planting",
    image: "/garden-design-planting/perennial-garden.png",
    location: "Cottage Garden",
    date: "Summer 2022",
  },
  {
    id: 9,
    title: "Professional Tree Care",
    description: "Comprehensive tree pruning and health treatment for mature landscape trees.",
    category: "tree-services",
    image: "/tree-services/tree-pruning.png",
    location: "Historic Property",
    date: "Winter 2023",
  },
  {
    id: 10,
    title: "Smart Irrigation System",
    description: "Water-efficient irrigation system with smart controllers and zoned watering.",
    category: "irrigation-systems",
    image: "/irrigation-systems/smart-controller.png",
    location: "Drought-Prone Area",
    date: "Spring 2023",
  },
  {
    id: 11,
    title: "Dramatic Landscape Lighting",
    description: "Custom lighting design highlighting architectural features and garden elements.",
    category: "landscape-lighting",
    image: "/landscape-lighting/architectural-lighting.png",
    location: "Evening Entertainment Space",
    date: "Fall 2022",
  },
  {
    id: 12,
    title: "Four-Season Landscape Plan",
    description: "Comprehensive landscape design providing interest through all four seasons.",
    category: "seasonal-services",
    image: "/seasonal-services/seasonal-color.png",
    location: "Year-Round Residence",
    date: "Ongoing",
  },
  {
    id: 13,
    title: "Flagstone Patio & Walkway",
    description: "Natural stone patio and connecting pathways with planted joints.",
    category: "patios-walkways",
    image: "/gallery/patios/flagstone-patio.png",
    location: "Woodland Setting",
    date: "Summer 2022",
  },
  {
    id: 14,
    title: "Boulder Retaining Wall",
    description: "Natural boulder wall creating terraced planting beds on a sloped property.",
    category: "retaining-walls",
    image: "/gallery/walls/boulder-wall.png",
    location: "Lakefront Property",
    date: "Fall 2022",
  },
  {
    id: 15,
    title: "Circular Driveway Design",
    description: "Elegant circular driveway with central island landscaping and lighting.",
    category: "driveways",
    image: "/driveways/circular-driveway.png",
    location: "Estate Home",
    date: "Spring 2023",
  },
  {
    id: 16,
    title: "Pondless Waterfall Feature",
    description: "Space-saving pondless waterfall with natural stone and low maintenance.",
    category: "water-features",
    image: "/water-features/pondless-waterfall.png",
    location: "Urban Garden",
    date: "Summer 2023",
  },
  {
    id: 17,
    title: "Native Plant Landscape",
    description: "Eco-friendly garden featuring native plants that attract pollinators.",
    category: "garden-design-planting",
    image: "/garden-design-planting/native-plants.png",
    location: "Sustainable Home",
    date: "Spring 2022",
  },
  {
    id: 18,
    title: "Path Lighting Installation",
    description: "Elegant path lighting enhancing safety and nighttime garden enjoyment.",
    category: "landscape-lighting",
    image: "/landscape-lighting/path-lighting.png",
    location: "Garden Walkways",
    date: "Fall 2023",
  },
]

// Get unique categories and count projects in each
const categories = [
  { id: "all", name: "All Projects" },
  { id: "patios-walkways", name: "Patios & Walkways" },
  { id: "retaining-walls", name: "Retaining Walls" },
  { id: "driveways", name: "Driveways" },
  { id: "outdoor-kitchens-fire-features", name: "Outdoor Kitchens" },
  { id: "water-features", name: "Water Features" },
  { id: "pergolas-gazebos", name: "Pergolas & Gazebos" },
  { id: "lawn-care-maintenance", name: "Lawn Care" },
  { id: "garden-design-planting", name: "Garden Design" },
  { id: "tree-services", name: "Tree Services" },
  { id: "irrigation-systems", name: "Irrigation" },
  { id: "landscape-lighting", name: "Lighting" },
  { id: "seasonal-services", name: "Seasonal Services" },
]

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
        <p className="text-lg text-gray-600">
          Browse our collection of completed landscaping and hardscaping projects. From elegant patios to lush gardens,
          explore how we've transformed properties throughout the region.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <div className="relative">
          <div className="absolute right-0 top-1 z-10 h-12 w-12 bg-gradient-to-l from-white via-white to-transparent md:hidden" />
          <TabsList className="h-12 w-full justify-start overflow-x-auto scrollbar-none space-x-2 rounded-md bg-transparent p-0 md:flex md:justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-md border border-gray-200 bg-white px-4 py-2 data-[state=active]:border-navy-500 data-[state=active]:bg-navy-50 data-[state=active]:text-navy-700"
              >
                {category.name}
                <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 data-[state=active]:bg-navy-100 data-[state=active]:text-navy-700">
                  {category.id === "all"
                    ? projects.length
                    : projects.filter((project) => project.category === category.id).length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        {categories
          .filter((category) => category.id !== "all")
          .map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category.id)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
      </Tabs>

      {/* Transformations Section */}
      <div className="bg-navy-50 rounded-xl p-8 mt-12 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Before & After Transformations</h2>
            <p className="text-gray-600">
              Want to see the dramatic difference our work makes? Check out our before and after transformations to see
              how we've helped homeowners completely reimagine their outdoor spaces.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Link href="/transformations">
              <Button className="bg-kelly-500 hover:bg-kelly-600">
                View Transformations <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 rounded-xl p-8 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Property?</h2>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your project ideas and schedule a free consultation with our design team.
          </p>
          <Link href="/contact">
            <Button className="bg-kelly-500 hover:bg-kelly-600">
              Request an Estimate <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-5">
        <div className="mb-3">
          <Badge variant="outline" className="bg-navy-50 text-navy-700 border-navy-200">
            {categories.find((c) => c.id === project.category)?.name}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{project.location}</span>
          <span>{project.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}
