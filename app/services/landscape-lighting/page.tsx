import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landscape Lighting Design & Installation | A-Z Landscapes",
  description:
    "Custom LED landscape lighting by A-Z Landscapes. Enhance beauty, safety, and ambiance with uplighting, path lights, and more. Energy-efficient and professionally installed.",
}

const landscapeLightingData = {
  category: "landscaping" as const,
  title: "Custom Landscape Lighting",
  description:
    "Illuminate your property's beauty, enhance safety, and extend your outdoor enjoyment with A-Z Landscapes' custom low-voltage LED lighting designs. We create breathtaking scenes that highlight your home's architecture and landscape features.",
  heroImage: "/landscape-lighting/hero.png",
  benefits: [
    "Extend your outdoor living hours well into the evening.",
    "Highlight architectural features, trees, and garden elements beautifully.",
    "Improve safety and security along walkways, steps, and around your property.",
    "Create captivating ambiance and drama with professional lighting design.",
    "Energy-efficient LED systems for lower operating costs and longevity.",
    "Increase your home's curb appeal and overall value.",
  ],
  process: [
    {
      title: "1. Consultation & Vision",
      description:
        "We start by discussing your goals. Do you want to create a mood, improve safety, or highlight specific features? We'll walk your property with you to understand your vision.",
    },
    {
      title: "2. Design & Fixture Selection",
      description:
        "Our experts design a custom lighting plan, selecting from a range of high-quality, low-voltage LED fixtures like uplights, path lights, and accent lights to achieve the desired effect.",
    },
    {
      title: "3. Nighttime Demonstration (Optional)",
      description:
        "For some projects, we can set up a temporary lighting demo at night. This allows you to see the design in action and make adjustments before the final installation.",
    },
    {
      title: "4. Professional Installation",
      description:
        "Our technicians expertly install your lighting system with meticulous care and minimal disruption, ensuring all wiring is hidden and connections are secure for lasting durability.",
    },
    {
      title: "5. Final Adjustments & Walkthrough",
      description:
        "After installation, we perform a final walkthrough at night to make precise adjustments, ensuring every light is perfectly aimed. We'll also show you how to operate your new system.",
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
        "We use a wide variety of professional-grade, low-voltage LED fixtures, including uplights, downlights, path lights, wash lights, and specialty lights. We select fixtures based on the desired effect, durability, and your budget.",
    },
    {
      question: "Can I get color-changing lights for holidays?",
      answer:
        "Yes! We offer advanced smart LED systems that are color-changing and can be programmed via a smartphone app for holidays, parties, or any mood you want to create.",
    },
    {
      question: "Is LED lighting energy-efficient?",
      answer:
        "Absolutely. Modern LED lighting uses up to 80% less energy than traditional halogen systems and has a much longer lifespan, resulting in significant savings on operating costs and maintenance.",
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
