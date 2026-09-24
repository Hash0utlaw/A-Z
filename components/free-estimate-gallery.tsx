import { Badge } from "@/components/ui/badge"
import OptimizedImage from "@/components/optimized-image"

const PHOTOS = [
  { image: "/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg", caption: "Backyard Fire Pit & Patio" },
  {
    image: "/user-uploads/curved-retaining-wall-paver-patio-landscape-lighting.jpeg",
    caption: "Retaining Wall & Paver Patio with Lighting",
  },
  {
    image: "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
    caption: "Outdoor Kitchen Build",
  },
  {
    image: "/user-uploads/natural-stone-retaining-wall-dry-creek-bed-transformation.jpg",
    caption: "Natural Stone Retaining Wall",
  },
  { image: "/user-uploads/outdoor-kitchen-patio-dining-area-stone-pavers.jpeg", caption: "Paver Patio & Dining Area" },
  { image: "/user-uploads/retaining-wall-terraced-residential-front-yard.jpeg", caption: "Terraced Retaining Wall" },
  { image: "/user-uploads/stone-walkway-residential.jpeg", caption: "Stone Walkway Installation" },
  {
    image: "/user-uploads/stacked-stone-retaining-wall-curved-residential.jpeg",
    caption: "Stacked Stone Retaining Wall",
  },
]

export function FreeEstimateGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Work</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PHOTOS.map((photo) => (
            <div key={photo.image} className="rounded-lg overflow-hidden shadow-sm">
              <OptimizedImage
                src={photo.image}
                alt={photo.caption}
                width={400}
                height={300}
                className="object-cover w-full h-full aspect-[4/3]"
              />
              <p className="bg-white p-2 text-xs font-medium text-gray-700 text-center">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
