import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landscape Lighting Design & Installation | A-Z Landscapes",
  description:
    "Custom LED landscape lighting by A-Z Landscapes. Enhance beauty, safety, and ambiance with uplighting, path lights, and more. Energy-efficient.",
}

export default function LandscapeLightingPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Custom Landscape Lighting"
      description="Illuminate your property's beauty, enhance safety, and extend outdoor enjoyment with A-Z Landscapes' custom low-voltage LED lighting designs. We offer a wide array of fixtures and techniques to create the perfect ambiance."
      heroImage="/landscape-lighting/hero.png"
      benefits={[
        "Extend your outdoor living hours well into the evening.",
        "Highlight architectural features, trees, and garden elements beautifully.",
        "Improve safety and security along walkways, steps, and around your property.",
        "Create captivating ambiance and drama with professional lighting design.",
        "Energy-efficient LED systems for lower operating costs and longevity.",
        "Options for color-changing LEDs for seasonal or festive displays (e.g., Halloween, Christmas).",
      ]}
      process={[
        {
          title: "Lighting Consultation & Goal Setting",
          description:
            "We discuss your objectives: Do you want to highlight specific features, improve safety, create a mood, or all of the above? We also consider your budget.",
        },
        {
          title: "Fixture Selection & Design Plan",
          description:
            "We select from a range of high-quality, low-voltage LED fixtures (uplights, downlights, path lights, well lights, wash lights, bullet lights, pergola, cap, and ledge lights) based on your needs and budget (fixtures can range from $75 to $250+ for advanced color-changing options).",
        },
        {
          title: "Nighttime Demonstration (Optional)",
          description:
            "For some projects, we can conduct a nighttime demonstration with temporary lights to help you visualize the effects and make informed decisions.",
        },
        {
          title: "Professional Installation",
          description:
            "Our technicians expertly install your lighting system with minimal disruption, ensuring proper wiring, connections, and fixture placement for optimal effect and durability.",
        },
        {
          title: "Final Adjustments & System Programming",
          description:
            "We make precise adjustments at night to perfect the illumination. If applicable, we program timers or smart controls, including any color-changing scenes.",
        },
      ]}
      galleryTitle="Landscape Lighting Showcase"
      gallery={[
        {
          image: "/landscape-lighting/architectural-lighting.png",
          title: "Architectural Uplighting",
          description: "Highlighting home architecture with strategically placed uplights.",
        },
        {
          image: "/landscape-lighting/path-lighting.png",
          title: "Elegant Path Lighting",
          description: "Guiding the way safely while adding a touch of elegance.",
        },
        {
          image: "/landscape-lighting/tree-lighting.png",
          title: "Dramatic Tree & Garden Illumination",
          description: "Creating depth and highlighting specimen trees and plants.",
        },
        {
          image: "/landscape-lighting/water-lighting.png",
          title: "Enchanting Water Feature Lighting",
          description: "Bringing ponds and waterfalls to life after dark.",
        },
        {
          image: "/landscape-lighting/deck-lighting.png",
          title: "Subtle Deck & Patio Lighting",
          description: "Creating a warm and inviting atmosphere for outdoor living spaces.",
        },
        {
          image: "/landscape-lighting/security-lighting.png",
          title: "Effective Security Lighting",
          description: "Strategically placed lights to deter intruders and enhance visibility.",
        },
      ]}
      testimonials={[
        {
          name: "The Bennetts",
          rating: 5,
          text: "A-Z Landscapes' lighting design transformed our home! We enjoy our patio so much more in the evenings, and it looks spectacular.",
        },
        {
          name: "Riverside Restaurant",
          rating: 5,
          text: "The lighting in our outdoor dining area is perfect. Customers love the ambiance, and it's boosted our evening business.",
        },
      ]}
      faqs={[
        {
          question: "What types of landscape lighting fixtures do you use?",
          answer:
            "We use a wide variety of low-voltage LED fixtures, including uplights, downlights, path lights, well lights, wash lights, bullet lights, pergola lights, cap lights, and ledge lights. We select fixtures based on the desired effect, durability, and your budget.",
        },
        {
          question: "Can I get color-changing lights for holidays?",
          answer:
            "Yes! We offer advanced LED systems that are color-changing and can be programmed for holidays like Christmas or Halloween, or any other mood you want to create. These are typically higher-end fixtures.",
        },
        {
          question: "How much does landscape lighting cost?",
          answer:
            "The cost varies significantly based on the number and type of fixtures, complexity of installation, and control systems. Basic fixtures might be $75-$100 each, while advanced color-changing ones can be $250 or more. We provide a detailed quote after the design consultation.",
        },
        {
          question: "Is LED lighting energy-efficient?",
          answer:
            "Absolutely. LED lighting uses significantly less energy than traditional halogen systems and has a much longer lifespan, resulting in lower operating costs and less maintenance.",
        },
      ]}
      relatedServices={[
        { title: "Garden Design & Planting", slug: "garden-design-planting" },
        { title: "Patios & Walkways", slug: "patios-walkways" },
        { title: "Outdoor Kitchens & Fire Features", slug: "outdoor-kitchens-fire-features" },
      ]}
    />
  )
}
