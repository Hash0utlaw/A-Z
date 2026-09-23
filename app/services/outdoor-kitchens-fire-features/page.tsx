import Link from "next/link"
import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"
import { getVerifiedTestimonials } from "@/lib/testimonials"
import { SERVICE_AREAS } from "@/lib/service-areas"

export const metadata: Metadata = {
  title: "Outdoor Kitchens & Firepits in Huntersville",
  description:
    "Design and build services for custom outdoor kitchens, fire pits, and fireplaces. Create your perfect outdoor entertainment space with A-Z Landscapes.",
}

const outdoorKitchensData = {
  category: "hardscape" as const,
  title: "Outdoor Kitchens & Fire Features",
  description:
    "Extend your living space and create the ultimate entertainment hub with a custom-designed outdoor kitchen, fire pit, or fireplace from A-Z Landscapes. We tailor every feature to your lifestyle, space, and budget.",
  heroImage: "/outdoor-kitchens-fire-features/hero.png",
  benefits: [
    "Create a functional and stylish outdoor cooking and dining experience.",
    "Extend your outdoor enjoyment into cooler evenings with a warming fire feature.",
    "Increase your home's value and appeal with high-quality outdoor amenities.",
    "Custom designs that seamlessly integrate with your home's architecture and landscape.",
    "Wide choice of materials, appliances, and design options (gas or wood-burning).",
    "Durable, weather-resistant construction built for years of enjoyment.",
  ],
  process: [
    {
      title: "1. Lifestyle & Needs Consultation",
      description:
        "We start by understanding your vision: How do you plan to use the space? For intimate family gatherings or large parties? What are your cooking needs and fire feature style preferences?",
    },
    {
      title: "2. Site Evaluation & Space Planning",
      description:
        "We assess your outdoor area to determine the optimal location and layout, considering factors like utility access, wind direction, and traffic flow.",
    },
    {
      title: "3. Custom Design & Material Selection",
      description:
        "Our designers create detailed 3D plans, helping you select materials (natural stone, pavers, etc.), appliances, and the style of your fire pit or fireplace to match your aesthetic.",
    },
    {
      title: "4. Expert Construction & Craftsmanship",
      description:
        "Our skilled craftsmen build your outdoor kitchen or fire feature with meticulous attention to detail, ensuring structural integrity and a beautiful finish that lasts.",
    },
    {
      title: "5. Final Walkthrough & Demonstration",
      description:
        "We ensure you're delighted with the result and demonstrate how to safely operate and maintain your new outdoor living features.",
    },
  ],
  gallery: [
    {
      image: "/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg",
      title: "Woodland Fire Pit Retreat - Aerial View",
      description:
        "Aerial perspective showcasing the complete scope of this comprehensive project with circular fire pit, curved seating, extensive paver patio, and decorative drainage elements.",
    },
    {
      image: "/user-uploads/backyard-fire-pit-patio-residential.jpeg",
      title: "Woodland Fire Pit Retreat - Ground Level",
      description:
        "Ground-level view highlighting the craftsmanship of the circular stone fire pit with curved seating walls and decorative dry creek drainage.",
    },
    {
      image: "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
      title: "Full Outdoor Kitchen Suite",
      description: "A complete outdoor kitchen with a built-in grill, smoker, and ample storage.",
    },
    {
      image: "/user-uploads/backyard-pool-linear-fire-pit-night-ambiance.jpeg",
      title: "Modern Linear Fire Pit",
      description: "A sleek, modern fire pit that provides warmth and a stunning visual centerpiece.",
    },
    {
      image: "/outdoor-kitchens-fire-features/outdoor-fireplace.png",
      title: "Cozy Outdoor Fireplace",
      description: "A grand stone fireplace creating a warm and inviting outdoor living room.",
    },
    {
      image: "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
      title: "Illuminated Kitchen at Night",
      description: "Integrated lighting showcases the beauty of this outdoor kitchen after dark.",
    },
  ],
  testimonials: getVerifiedTestimonials("outdoor-kitchens-fire-features"),
  faqs: [
    {
      question: "What's the difference between a wood-burning and gas fire feature?",
      answer:
        "Wood-burning features offer a traditional campfire ambiance and aroma. Gas features provide instant on/off convenience, consistent flame, and no smoke or ash cleanup. We help you choose based on your lifestyle.",
    },
    {
      question: "What appliances can I include in an outdoor kitchen?",
      answer:
        "Almost anything you have indoors! Grills, side burners, refrigerators, ice makers, sinks, pizza ovens, smokers, and beverage centers are all popular options.",
    },
    {
      question: "Do I need a permit for an outdoor kitchen or fireplace?",
      answer:
        "Permit requirements vary by location and project scope, especially when gas or electrical lines are involved. We will advise you on local regulations and can manage the permitting process for you.",
    },
    {
      question: "Can you integrate seating into fire pit designs?",
      answer:
        "We often design curved stone seating walls, built-in benches, or designated seating areas around fire features. This creates a cohesive, functional space perfect for gatherings.",
    },
    {
      question: "How do you handle drainage around fire features and patios?",
      answer:
        "Proper drainage is crucial for any hardscape project. We incorporate decorative drainage solutions like dry creek beds, French drains, and proper grading to manage water flow while enhancing the overall design aesthetic.",
    },
  ],
  relatedServices: [
    { title: "Patios & Walkways", slug: "patios-walkways" },
    { title: "Pergolas & Gazebos", slug: "pergolas-gazebos" },
    { title: "Landscape Lighting", slug: "landscape-lighting" },
  ],
}

export default function OutdoorKitchensFireFeaturesPage() {
  return (
    <>
      <ServicePageTemplate {...outdoorKitchensData} />
      <section className="py-8 bg-gray-50 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          Serving{" "}
          {SERVICE_AREAS.map((area, index) => (
            <span key={area.slug}>
              <Link href={`/service-areas/${area.slug}`} className="text-kelly-700 hover:underline">
                {area.city}
              </Link>
              {index < SERVICE_AREAS.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
