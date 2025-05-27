import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Photo Gallery | A-Z Landscaping",
  description: "Browse our extensive photo gallery showcasing our landscaping and hardscaping work.",
}

// Gallery categories with images
const galleryCategories = [
  {
    id: "all",
    name: "All Photos",
    images: [],
  },
  {
    id: "patios-walkways",
    name: "Patios & Walkways",
    images: [
      "/gallery/patios/modern-paver-patio.png",
      "/gallery/patios/flagstone-patio.png",
      "/gallery/patios/stone-walkway.png",
      "/gallery/patios/stamped-concrete.png",
      "/gallery/patios/brick-entrance.png",
      "/gallery/patios/multi-level-patio.png",
    ],
  },
  {
    id: "retaining-walls",
    name: "Retaining Walls",
    images: [
      "/gallery/walls/natural-stone-wall.png",
      "/gallery/walls/block-wall-system.png",
      "/gallery/walls/terraced-garden.png",
      "/gallery/walls/boulder-wall.png",
      "/gallery/walls/concrete-wall.png",
      "/gallery/walls/timber-wall.png",
    ],
  },
  {
    id: "water-features",
    name: "Water Features",
    images: [
      "/gallery/water/garden-fountain.png",
      "/gallery/water/natural-pond.png",
      "/gallery/water/waterfall.png",
      "/gallery/water/pondless-waterfall.png",
      "/gallery/water/water-wall.png",
      "/gallery/water/koi-pond.png",
    ],
  },
  {
    id: "outdoor-living",
    name: "Outdoor Living",
    images: [
      "/gallery/outdoor-kitchens/complete-kitchen.png",
      "/gallery/outdoor-kitchens/stone-firepit.png",
      "/gallery/outdoor-kitchens/outdoor-fireplace.png",
      "/gallery/pergolas/cedar-pergola.png",
      "/gallery/pergolas/traditional-gazebo.png",
      "/gallery/pergolas/modern-pergola.png",
    ],
  },
  {
    id: "gardens",
    name: "Gardens",
    images: [
      "/gallery/gardens/perennial-garden.png",
      "/gallery/gardens/native-plants.png",
      "/gallery/gardens/formal-garden.png",
      "/gallery/gardens/shade-garden.png",
      "/gallery/gardens/foundation-planting.png",
      "/gallery/gardens/cottage-garden.png",
    ],
  },
  {
    id: "lighting",
    name: "Lighting",
    images: [
      "/gallery/lighting/architectural-lighting.png",
      "/gallery/lighting/path-lighting.png",
      "/gallery/lighting/tree-lighting.png",
      "/gallery/lighting/water-lighting.png",
      "/gallery/lighting/deck-lighting.png",
      "/gallery/lighting/security-lighting.png",
    ],
  },
]

// Get all images for "All Photos" tab
const allImages = galleryCategories.filter((cat) => cat.id !== "all").flatMap((cat) => cat.images)

export default function GalleryPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
        <p className="text-lg text-gray-600">
          Explore our extensive collection of landscaping and hardscaping projects. Each photo showcases our attention
          to detail and commitment to quality craftsmanship.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="relative mb-8">
          <div className="absolute right-0 top-1 z-10 h-12 w-12 bg-gradient-to-l from-white via-white to-transparent md:hidden" />
          <TabsList className="h-12 w-full justify-start overflow-x-auto scrollbar-none space-x-2 rounded-md bg-transparent p-0 md:flex md:justify-center">
            {galleryCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-md border border-gray-200 bg-white px-4 py-2 data-[state=active]:border-navy-500 data-[state=active]:bg-navy-50 data-[state=active]:text-navy-700"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </TabsContent>

        {galleryCategories
          .filter((category) => category.id !== "all")
          .map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${category.name} ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
      </Tabs>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-navy-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">See the Transformations</h2>
          <p className="text-gray-600 mb-6">
            Want to see the dramatic before and after changes? Check out our transformation gallery to see how we've
            completely reimagined outdoor spaces.
          </p>
          <Link href="/transformations">
            <Button className="bg-kelly-500 hover:bg-kelly-600">
              View Before & After <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Project</h2>
          <p className="text-gray-600 mb-6">
            Inspired by what you see? Let's discuss how we can transform your outdoor space into something
            extraordinary.
          </p>
          <Link href="/contact">
            <Button className="bg-kelly-500 hover:bg-kelly-600">
              Get a Free Quote <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
