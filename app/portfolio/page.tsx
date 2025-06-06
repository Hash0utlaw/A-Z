import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Portfolio | A-Z Landscapes",
  description:
    "Explore the stunning landscape transformations by A-Z Landscapes. View our portfolio of completed projects, from patios and walkways to gardens and outdoor living spaces in [Your City/Region].",
  keywords: [
    "landscape portfolio",
    "landscaping projects",
    "A-Z Landscapes portfolio",
    "patio design",
    "garden installation",
    "outdoor living spaces",
    "[Your City/Region] landscaping",
  ],
}

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  slug: string
  category: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Modern Backyard Oasis",
    description:
      "Complete transformation of a suburban backyard into a modern oasis featuring a multi-level patio, custom fire pit, and lush plantings.",
    imageUrl: "/projects/modern-backyard-oasis.png",
    slug: "/transformations/backyard-patios", // Link to a relevant transformations sub-page or a dedicated project page
    category: "Patios & Outdoor Living",
  },
  {
    id: "2",
    title: "Front Yard Curb Appeal Enhancement",
    description:
      "Designed and installed a welcoming front yard landscape with a new stone walkway, vibrant flower beds, and accent lighting.",
    imageUrl: "/projects/front-yard-transformation.png",
    slug: "/transformations/front-yard-makeovers",
    category: "Garden Design & Walkways",
  },
  {
    id: "3",
    title: "Expansive Outdoor Living Space",
    description:
      "Created an entertainer's dream with an outdoor kitchen, spacious seating areas, and a custom pergola.",
    imageUrl: "/projects/outdoor-living-space.png",
    slug: "/transformations/outdoor-kitchens",
    category: "Outdoor Kitchens & Structures",
  },
  {
    id: "4",
    title: "Serene Garden Paradise",
    description:
      "A tranquil garden space featuring a koi pond, native plantings, and winding stone paths for a peaceful retreat.",
    imageUrl: "/projects/garden-paradise.png",
    slug: "/transformations/water-features-gardens",
    category: "Gardens & Water Features",
  },
  {
    id: "5",
    title: "Commercial Property Landscaping",
    description:
      "Professional landscaping for a commercial complex, including low-maintenance plantings, irrigation, and seasonal color.",
    imageUrl: "/projects/commercial-landscaping.png",
    slug: "/transformations/commercial-projects",
    category: "Commercial Landscaping",
  },
  {
    id: "6",
    title: "Sustainable & Eco-Friendly Landscape",
    description:
      "Designed with sustainability in mind, this landscape features drought-tolerant plants, permeable pavers, and a rainwater harvesting system.",
    imageUrl: "/projects/sustainable-landscape.png",
    slug: "/transformations/sustainable-landscapes",
    category: "Sustainable Landscaping",
  },
]

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-green-600 to-green-700 text-white">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/hero-landscape.png" // Replace with a stunning, relevant portfolio hero image
            alt="Panoramic view of a beautifully landscaped property"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">Our Landscape Masterpieces</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the quality, creativity, and attention to detail that A-Z Landscapes brings to every project.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-navy-800">Explore Our Work</h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Each project in our portfolio showcases our commitment to transforming outdoor spaces into beautiful,
            functional, and enduring landscapes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group"
              >
                <Link href={project.slug} passHref>
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src={project.imageUrl}
                      alt={`Completed landscape project: ${project.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-700 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Category:</span> {project.category}
                  </p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <Link href={project.slug} passHref>
                    <Button
                      variant="outline"
                      className="w-full group text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                    >
                      View Project Details{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-6">Inspired by Our Work?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Let A-Z Landscapes bring your outdoor vision to life. Contact us today for a consultation.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Get Your Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
