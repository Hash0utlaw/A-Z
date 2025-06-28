import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GalleryGrid from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Project Gallery | A-Z Landscapes",
  description:
    "Browse our gallery of completed projects. See stunning examples of our work in patios, retaining walls, outdoor kitchens, water features, and more.",
}

const galleryCategories = [
  {
    name: "Patios & Walkways",
    images: [
      "/patios-walkways/modern-paver-patio.png",
      "/patios-walkways/stone-walkway.png",
      "/patios-walkways/stamped-concrete.png",
      "/patios-walkways/brick-entrance.png",
      "/patios-walkways/flagstone-patio.png",
      "/patios-walkways/multi-level-patio.png",
      "/user-uploads/decorative-concrete-outdoor-living-space.jpeg",
      "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
      "/user-uploads/outdoor-kitchen-patio-dining-area-stone-pavers.jpeg",
    ],
  },
  {
    name: "Retaining Walls",
    images: [
      "/retaining-walls/natural-stone-wall.png",
      "/retaining-walls/block-wall-system.png",
      "/retaining-walls/terraced-garden.png",
      "/retaining-walls/boulder-wall.png",
      "/retaining-walls/concrete-wall.png",
      "/retaining-walls/timber-wall.png",
      "/user-uploads/natural-stone-steps-retaining-wall-landscaping.jpeg",
    ],
  },
  {
    name: "Outdoor Kitchens",
    images: [
      "/outdoor-kitchens-fire-features/complete-kitchen.png",
      "/outdoor-kitchens-fire-features/covered-kitchen.png",
      "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
      "/user-uploads/outdoor-kitchen-island-grill-stone-countertop-side-view.jpeg",
      "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
    ],
  },
  {
    name: "Fire Features",
    images: [
      "/outdoor-kitchens-fire-features/stone-firepit.png",
      "/outdoor-kitchens-fire-features/outdoor-fireplace.png",
      "/outdoor-kitchens-fire-features/fire-table.png",
      "/user-uploads/backyard-pool-linear-fire-pit-night-ambiance.jpeg",
      "/user-uploads/luxury-pool-fire-feature-evening-lighting.jpeg",
    ],
  },
  {
    name: "Water Features",
    images: [
      "/water-features/garden-fountain.png",
      "/water-features/natural-pond.png",
      "/water-features/waterfall.png",
      "/water-features/pondless-waterfall.png",
      "/water-features/water-wall.png",
      "/water-features/koi-pond.png",
    ],
  },
  {
    name: "Pergolas & Gazebos",
    images: [
      "/pergolas-gazebos/cedar-pergola.png",
      "/pergolas-gazebos/traditional-gazebo.png",
      "/pergolas-gazebos/modern-pergola.png",
      "/pergolas-gazebos/poolside-cabana.png",
      "/pergolas-gazebos/garden-arbor.png",
      "/pergolas-gazebos/attached-pergola.png",
    ],
  },
  {
    name: "Gardens & Planting",
    images: [
      "/garden-design-planting/perennial-garden.png",
      "/garden-design-planting/native-plants.png",
      "/garden-design-planting/formal-garden.png",
      "/garden-design-planting/shade-garden.png",
      "/garden-design-planting/foundation-planting.png",
      "/garden-design-planting/cottage-garden.png",
    ],
  },
  {
    name: "Lawn & Turf",
    images: [
      "/lawn-care-maintenance/lush-lawn.png",
      "/lawn-care-maintenance/lawn-renovation.png",
      "/turf-installation/artificial-turf.png",
      "/turf-installation/sod-installation.png",
      "/user-uploads/completed-artificial-turf-pool-landscape-design.jpeg",
    ],
  },
  {
    name: "Landscape Lighting",
    images: [
      "/landscape-lighting/architectural-lighting.png",
      "/landscape-lighting/path-lighting.png",
      "/landscape-lighting/tree-lighting.png",
      "/landscape-lighting/water-lighting.png",
      "/landscape-lighting/deck-lighting.png",
      "/landscape-lighting/security-lighting.png",
      "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
      "/user-uploads/luxury-pool-fire-feature-evening-lighting.jpeg",
    ],
  },
]

const allImages = Array.from(new Set(galleryCategories.flatMap((category) => category.images)))

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Project Gallery</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-navy-200">
            Explore our portfolio of stunning landscapes and hardscapes. Get inspired for your own outdoor
            transformation.
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-4xl grid-cols-3 md:grid-cols-5 lg:grid-cols-10 h-auto">
                <TabsTrigger value="all" className="whitespace-nowrap">
                  All Photos
                </TabsTrigger>
                {galleryCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name} className="whitespace-nowrap">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all">
              <GalleryGrid
                items={allImages.map((src) => ({ image: src, title: "Project", description: "View our work" }))}
              />
            </TabsContent>

            {galleryCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <GalleryGrid
                  items={category.images.map((src) => ({
                    image: src,
                    title: category.name,
                    description: "View our work",
                  }))}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
