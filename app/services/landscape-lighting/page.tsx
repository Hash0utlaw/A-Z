import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landscape Lighting Design & Installation | A-Z Landscapes",
  description:
    "Custom LED landscape lighting by A-Z Landscapes. Enhance beauty, safety, and ambiance with uplighting, path lights, and more. Energy-efficient.",
}

const landscapeLightingData = {
  category: "landscaping" as const,
  title: "Custom Landscape Lighting",
  description:
    "Illuminate your property's beauty, enhance safety, and extend outdoor enjoyment with A-Z Landscapes' custom low-voltage LED lighting designs. We offer a wide array of fixtures and techniques to create the perfect ambiance.",
  heroImage: "/landscape-lighting/hero.png",
  benefits: [
    "Extend your outdoor living hours well into the evening.",
    "Highlight architectural features, trees, and garden elements beautifully.",
    "Improve safety and security along walkways, steps, and around your property.",
    "Create captivating ambiance and drama with professional lighting design.",
    "Energy-efficient LED systems for lower operating costs and longevity.",
    "Options for color-changing LEDs for seasonal or festive displays.",
  ],
  process: [
    {
      title: "Lighting Consultation & Goal Setting",
      description:
        "We discuss your objectives: Do you want to highlight specific features, improve safety, create a mood, or all of the above? We also consider your budget.",
    },
    {
      title: "Fixture Selection & Design Plan",
      description:
        "We select from a range of high-quality, low-voltage LED fixtures (uplights, downlights, path lights, well lights) based on your needs and create a comprehensive design plan.",
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
  ],
  gallery: [
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
      image: "/user-uploads/luxury-pool-fire-feature-evening-lighting.jpeg",
      title: "Poolside Ambiance",
      description: "Low-voltage lighting creating a luxurious and safe poolside environment at night.",
    },
    {
      image: "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
      title: "Outdoor Kitchen Lighting",
      description: "Functional and aesthetic lighting for an outdoor kitchen area.",
    },
    {
      image: "/landscape-lighting/security-lighting.png",
      title: "Effective Security Lighting",
      description: "Strategically placed lights to deter intruders and enhance visibility.",
    },
  ],
  testimonials: [
    {
      name: "The Bennetts",
      location: "Springfield, IL",
      rating: 5,
      text: "A-Z Landscapes' lighting design transformed our home! We enjoy our patio so much more in the evenings, and it looks spectacular.",
    },
    {
      name: "Riverside Restaurant",
      location: "Chatham, IL",
      rating: 5,
      text: "The lighting in our outdoor dining area is perfect. Customers love the ambiance, and it's boosted our evening business.",
    },
  ],
  faqs: [
    {
      question: "What types of landscape lighting fixtures do you use?",
      answer:
        "We use a wide variety of low-voltage LED fixtures, including uplights, downlights, path lights, well lights, wash lights, and specialty lights. We select fixtures based on the desired effect, durability, and your budget.",
    },
    {
      question: "Can I get color-changing lights for holidays?",
      answer:
        "Yes! We offer advanced LED systems that are color-changing and can be programmed for holidays like Christmas or Halloween, or any other mood you want to create.",
    },
    {
      question: "Is LED lighting energy-efficient?",
      answer:
        "Absolutely. LED lighting uses significantly less energy than traditional halogen systems and has a much longer lifespan, resulting in lower operating costs and less maintenance.",
    },
  ],
  relatedServices: [
    { title: "Garden Design & Planting", slug: "garden-design-planting" },
    { title: "Patios & Walkways", slug: "patios-walkways" },
    { title: "Outdoor Kitchens & Fire Features", slug: "outdoor-kitchens-fire-features" },
  ],
}

export default function LandscapeLightingPage() {
  return <ServicePageTemplate {...landscapeLightingData} />
}
