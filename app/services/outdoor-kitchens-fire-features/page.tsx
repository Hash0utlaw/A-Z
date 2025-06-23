import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outdoor Kitchens & Fire Features | A-Z Landscapes",
  description:
    "Custom outdoor kitchens, fire pits, and fireplaces by A-Z Landscapes. Design and build services for your perfect outdoor entertainment space.",
}

export default function OutdoorKitchensFireFeaturesPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Outdoor Kitchens & Fire Features"
      description="Extend your living space and create the ultimate entertainment hub with custom-designed outdoor kitchens, fire pits, and fireplaces from A-Z Landscapes. We tailor every feature to your lifestyle, space, and budget."
      heroImage="/outdoor-kitchens-fire-features/hero.png"
      benefits={[
        "Create a functional and stylish outdoor cooking and dining experience.",
        "Extend your outdoor enjoyment into cooler evenings with warming fire pits or fireplaces.",
        "Increase your home's value and appeal with high-quality outdoor amenities.",
        "Custom designs that seamlessly integrate with your home's architecture and landscape.",
        "Wide choice of materials, appliances, and design options (gas or wood-burning fire features).",
        "Durable, weather-resistant construction built to last for years of enjoyment.",
      ]}
      process={[
        {
          title: "Lifestyle & Needs Consultation",
          description:
            "We start by understanding your vision: How do you plan to use the space? For intimate family gatherings or larger entertaining? What are your cooking needs and style preferences for fire features (e.g., wood-burning vs. gas)?",
        },
        {
          title: "Site Evaluation & Space Planning",
          description:
            "We assess your outdoor area to determine the optimal location, layout, and integration with existing landscape and structures, considering factors like utility access and traffic flow.",
        },
        {
          title: "Custom Design & Material Selection",
          description:
            "Our designers create detailed plans, helping you select materials (natural stone, pavers, etc.), appliances for kitchens, and the style of your fire pit or fireplace to match your aesthetic and budget.",
        },
        {
          title: "Utility Coordination (If Needed)",
          description:
            "For outdoor kitchens (gas, water, electric) or gas fire features, we coordinate with licensed professionals to ensure proper and safe utility connections.",
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
      ]}
      galleryTitle="Outdoor Living Inspirations"
      gallery={[
        {
          image: "/outdoor-kitchens-fire-features/complete-kitchen.png",
          title: "Full Outdoor Kitchen",
          description: "Gourmet outdoor kitchen with grill, sink, refrigerator, and bar seating.",
        },
        {
          image: "/outdoor-kitchens-fire-features/stone-firepit.png",
          title: "Cozy Stone Fire Pit",
          description: "Natural stone fire pit with built-in seating, perfect for gatherings.",
        },
        {
          image: "/outdoor-kitchens-fire-features/outdoor-fireplace.png",
          title: "Elegant Outdoor Fireplace",
          description: "Grand masonry outdoor fireplace creating a stunning focal point.",
        },
        {
          image: "/outdoor-kitchens-fire-features/pizza-oven.png",
          title: "Artisan Pizza Oven",
          description: "Custom outdoor pizza oven for authentic wood-fired cooking.",
        },
        {
          image: "/outdoor-kitchens-fire-features/fire-table.png",
          title: "Modern Gas Fire Table",
          description: "Sleek and contemporary gas fire table for ambiance and warmth.",
        },
        {
          image: "/outdoor-kitchens-fire-features/covered-kitchen.png",
          title: "Covered Outdoor Kitchen & Dining",
          description: "Outdoor kitchen under a pergola for all-weather enjoyment.",
        },
        {
          image: "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
          title: "Evening Patio with Fire Pit & Kitchen",
          description:
            "Spacious paver patio featuring a modern fire pit and full outdoor kitchen, perfect for evening gatherings.",
        },
        {
          image: "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
          title: "Complete Outdoor Kitchen Setup",
          description:
            "Grey stone outdoor kitchen with smoker, grill, sink, and stainless steel cabinets on a paver patio.",
        },
        {
          image: "/user-uploads/outdoor-kitchen-island-grill-stone-countertop-side-view.jpeg",
          title: "Outdoor Kitchen Island Detail",
          description:
            "Side view of a custom outdoor kitchen island with integrated grill and smoker, showcasing stone and countertop work.",
        },
        {
          image: "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
          title: "Illuminated Outdoor Kitchen at Night",
          description:
            "Outdoor kitchen with under-cabinet lighting highlighting stainless steel appliances and stone construction.",
        },
        {
          image: "/user-uploads/luxury-pool-fire-feature-evening-lighting.jpeg",
          title: "Poolside Linear Fire Feature",
          description: "Modern linear fire pit with fire glass enhancing a luxury pool area at night.",
        },
        {
          image: "/user-uploads/backyard-pool-linear-fire-pit-night-ambiance.jpeg",
          title: "Pool & Fire Pit Night Ambiance",
          description: "Backyard pool with a glowing linear fire pit creating a warm ambiance with landscape lighting.",
        },
        {
          image: "/user-uploads/outdoor-kitchen-patio-dining-area-stone-pavers.jpeg",
          title: "Expansive Patio with Kitchen & Dining",
          description: "Large paver patio featuring an outdoor kitchen, wooden dining set, and fire pit zone.",
        },
      ]}
      testimonials={[
        {
          name: "The Thompsons",
          rating: 5,
          text: "Our A-Z Landscapes outdoor kitchen is a game-changer! We entertain constantly now. The quality is outstanding.",
        },
        {
          name: "Daniel W.",
          rating: 5,
          text: "The fire pit area A-Z built is our family's favorite spot. Beautiful stonework and perfectly integrated with our patio.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between a wood-burning and gas fire feature?",
          answer:
            "Wood-burning fire pits/fireplaces offer a traditional campfire ambiance and aroma. Gas features provide instant on/off convenience, consistent flame, and no smoke or ash cleanup. We discuss your preferences to help you choose.",
        },
        {
          question: "What appliances can I include in an outdoor kitchen?",
          answer:
            "Almost anything you have indoors! Grills, side burners, refrigerators, ice makers, sinks, pizza ovens, smokers, warming drawers, and beverage centers are all popular options.",
        },
        {
          question: "What materials are best for outdoor kitchens and fire features?",
          answer:
            "We use durable, weather-resistant materials like natural stone, brick, pavers, and high-quality stainless steel for appliances. Countertops can be granite, concrete, or other suitable outdoor surfaces.",
        },
        {
          question: "Do I need a permit for an outdoor kitchen or fireplace?",
          answer:
            "Permit requirements vary by location and project scope. We can advise you on local regulations and assist with the permitting process if needed.",
        },
      ]}
      relatedServices={[
        { title: "Patios & Walkways", slug: "patios-walkways" },
        { title: "Pergolas & Gazebos", slug: "pergolas-gazebos" },
        { title: "Landscape Lighting", slug: "landscape-lighting" },
      ]}
    />
  )
}
