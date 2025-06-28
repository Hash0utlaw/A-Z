import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outdoor Kitchens & Fire Features | A-Z Landscapes",
  description:
    "Custom outdoor kitchens, fire pits, and fireplaces by A-Z Landscapes. Design and build services for your perfect outdoor entertainment space.",
}

const outdoorKitchensData = {
  category: "hardscape" as const,
  title: "Outdoor Kitchens & Fire Features",
  description:
    "Extend your living space and create the ultimate entertainment hub with custom-designed outdoor kitchens, fire pits, and fireplaces from A-Z Landscapes. We tailor every feature to your lifestyle, space, and budget.",
  heroImage: "/outdoor-kitchens-fire-features/hero.png",
  benefits: [
    "Create a functional and stylish outdoor cooking and dining experience.",
    "Extend your outdoor enjoyment into cooler evenings with warming fire pits or fireplaces.",
    "Increase your home's value and appeal with high-quality outdoor amenities.",
    "Custom designs that seamlessly integrate with your home's architecture and landscape.",
    "Wide choice of materials, appliances, and design options (gas or wood-burning).",
    "Durable, weather-resistant construction built to last for years of enjoyment.",
  ],
  process: [
    {
      title: "Lifestyle & Needs Consultation",
      description:
        "We start by understanding your vision: How do you plan to use the space? For intimate family gatherings or larger entertaining? What are your cooking needs and style preferences?",
    },
    {
      title: "Site Evaluation & Space Planning",
      description:
        "We assess your outdoor area to determine the optimal location, layout, and integration with existing landscape and structures, considering factors like utility access and traffic flow.",
    },
    {
      title: "Custom Design & Material Selection",
      description:
        "Our designers create detailed plans, helping you select materials (natural stone, pavers, etc.), appliances for kitchens, and the style of your fire pit or fireplace.",
    },
    {
      title: "Expert Construction & Craftsmanship",
      description:
        "Our skilled craftsmen build your outdoor kitchen or fire feature with meticulous attention to detail, ensuring structural integrity and a beautiful finish.",
    },
    {
      title: "Final Walkthrough & Feature Demonstration",
      description:
        "We ensure you're delighted with the result and demonstrate how to safely use and maintain your new outdoor living features.",
    },
  ],
  gallery: [
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
      image: "/outdoor-kitchens-fire-features/pizza-oven.png",
      title: "Artisan Pizza Oven",
      description: "A custom-built pizza oven, perfect for gourmet outdoor cooking and family fun.",
    },
    {
      image: "/outdoor-kitchens-fire-features/fire-table.png",
      title: "Casual Fire Table",
      description: "A stylish and functional fire table, perfect for conversations and casual evenings.",
    },
    {
      image: "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
      title: "Illuminated Kitchen at Night",
      description: "Integrated lighting showcases the beauty of this outdoor kitchen after dark.",
    },
  ],
  testimonials: [
    {
      name: "The Thompsons",
      location: "Springfield, IL",
      rating: 5,
      text: "Our A-Z Landscapes outdoor kitchen is a game-changer! We entertain constantly now. The quality is outstanding.",
    },
    {
      name: "Daniel W.",
      location: "Chatham, IL",
      rating: 5,
      text: "The fire pit area A-Z built is our family's favorite spot. Beautiful stonework and perfectly integrated with our patio.",
    },
  ],
  faqs: [
    {
      question: "What's the difference between a wood-burning and gas fire feature?",
      answer:
        "Wood-burning fire pits/fireplaces offer a traditional campfire ambiance. Gas features provide instant on/off convenience and no smoke or ash cleanup. We discuss your preferences to help you choose.",
    },
    {
      question: "What appliances can I include in an outdoor kitchen?",
      answer:
        "Almost anything you have indoors! Grills, side burners, refrigerators, ice makers, sinks, pizza ovens, and beverage centers are all popular options.",
    },
    {
      question: "Do I need a permit for an outdoor kitchen or fireplace?",
      answer:
        "Permit requirements vary by location and project scope. We can advise you on local regulations and assist with the permitting process if needed.",
    },
  ],
  relatedServices: [
    { title: "Patios & Walkways", slug: "patios-walkways" },
    { title: "Pergolas & Gazebos", slug: "pergolas-gazebos" },
    { title: "Landscape Lighting", slug: "landscape-lighting" },
  ],
}

export default function OutdoorKitchensFireFeaturesPage() {
  return <ServicePageTemplate {...outdoorKitchensData} />
}
