import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Portfolio | A-Z Landscapes",
  description:
    "Explore the stunning landscape transformations by A-Z Landscapes. View our portfolio of completed projects, from patios and walkways to gardens and outdoor living spaces in Your City/Region.",
  // Remember to replace "[Your City/Region]" in the description and keywords
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

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  slug: string // This should link to a detailed project page or a relevant transformations category
  category: string
}

// Ensure these image paths are correct and images exist in /public/
const projects: Project[] = [
  {
    id: "1",
    title: "Modern Backyard Oasis",
    description:
      "A complete overhaul transforming a standard backyard into a luxurious modern retreat with a multi-level paver patio, integrated fire pit, and ambient lighting.",
    imageUrl: "/projects/modern-backyard-oasis.png",
    slug: "/transformations/backyard-patios",
    category: "Patios & Outdoor Living",
  },
  {
    id: "2",
    title: "Front Yard Curb Appeal Enhancement",
    description:
      "Elevated this home's street presence with a new natural stone walkway, terraced garden beds, and carefully selected plantings for year-round interest.",
    imageUrl: "/projects/front-yard-transformation.png",
    slug: "/transformations/front-yard-makeovers",
    category: "Garden Design & Walkways",
  },
  {
    id: "3",
    title: "Expansive Outdoor Living Space",
    description:
      "Designed for entertainment, this space features a fully equipped outdoor kitchen, a spacious dining area under a custom cedar pergola, and cozy seating zones.",
    imageUrl: "/projects/outdoor-living-space.png",
    slug: "/transformations/outdoor-kitchens",
    category: "Outdoor Kitchens & Structures",
  },
  {
    id: "4",
    title: "Serene Garden Paradise",
    description:
      "Crafted a tranquil escape with a naturalistic koi pond, meandering flagstone paths, and a diverse palette of native and ornamental plants.",
    imageUrl: "/projects/garden-paradise.png",
    slug: "/transformations/water-features-gardens",
    category: "Gardens & Water Features",
  },
  {
    id: "5",
    title: "Commercial Property Landscaping",
    description:
      "Professional and inviting landscape solution for a corporate campus, focusing on low-maintenance, drought-tolerant plantings and clear, accessible pathways.",
    imageUrl: "/projects/commercial-landscaping.png",
    slug: "/transformations/commercial-projects",
    category: "Commercial Landscaping",
  },
  {
    id: "6",
    title: "Sustainable & Eco-Friendly Landscape",
    description:
      "An environmentally conscious design incorporating permeable pavers, a rainwater harvesting system, native plant species, and organic lawn care practices.",
    imageUrl: "/projects/sustainable-landscape.png",
    slug: "/transformations/sustainable-landscapes",
    category: "Sustainable Landscaping",
  },
  {
    id: "user-1",
    title: "Evening Patio Retreat with Fire Pit & Kitchen",
    description:
      "A stunning paver patio designed for evening enjoyment, featuring a modern fire pit, outdoor dining, and a complete outdoor kitchen setup.",
    imageUrl: "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
    slug: "/services/outdoor-kitchens-fire-features",
    category: "Patios & Outdoor Living",
  },
  {
    id: "user-2",
    title: "Deluxe Outdoor Kitchen Installation",
    description:
      "This full-featured outdoor kitchen boasts a built-in grill, smoker, ample storage, and elegant stone construction for the ultimate culinary experience.",
    imageUrl: "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
    slug: "/services/outdoor-kitchens-fire-features",
    category: "Outdoor Kitchens & Structures",
  },
  {
    id: "user-3",
    title: "Poolside Paradise with Artificial Turf",
    description:
      "Transforming a poolside area with vibrant, low-maintenance artificial turf and complementary landscaping for year-round beauty.",
    imageUrl: "/user-uploads/completed-artificial-turf-pool-landscape-design.jpeg",
    slug: "/services/turf-installation",
    category: "Lawn & Turf Solutions",
  },
  {
    id: "user-4",
    title: "Elegant Natural Stone Steps",
    description:
      "Beautifully crafted natural stone slab steps integrated into a sloped landscape with boulder accents, enhancing accessibility and aesthetics.",
    imageUrl: "/user-uploads/natural-stone-steps-retaining-wall-landscaping.jpeg",
    slug: "/services/retaining-walls",
    category: "Hardscaping & Retaining Walls",
  },
]

export default function PortfolioPage() {
  return (
    <div className="bg-gray-50 text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-600 text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="/hero-landscape.png"
            alt="Beautifully landscaped property showcase"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-amber-400 mb-4" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Our Landscape Transformations
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-green-50">
            Witness the artistry and dedication A-Z Landscapes invests in every project. Explore our gallery of
            beautifully crafted outdoor spaces.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">A Showcase of Our Finest Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each project reflects our commitment to quality, innovative design, and exceeding client expectations.
              Find inspiration for your own outdoor transformation.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
                >
                  <Link href={project.slug} className="block overflow-hidden">
                    <div className="relative aspect-[4/3] w-full">
                      <OptimizedImage
                        src={project.imageUrl}
                        alt={`Showcase of ${project.title}`}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                      {project.category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-semibold text-navy-800 mb-2">
                      <Link href={project.slug} className="hover:text-green-600 transition-colors duration-200">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>
                    <Link href={project.slug} passHref className="mt-auto block">
                      <Button
                        variant="default"
                        className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors"
                        aria-label={`View details for ${project.title}`}
                      >
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Sparkles className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-2xl font-semibold text-navy-700 mb-2">Our Portfolio is Growing!</h3>
              <p className="text-gray-600">
                We're currently curating our best projects to showcase here. Check back soon to see our latest work.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-lg text-navy-100 mb-8 max-w-xl mx-auto">
            If our portfolio has inspired you, let's discuss how A-Z Landscapes can bring your dream outdoor space to
            life.
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
