import type { Metadata } from "next"
import ServicePageTemplate from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Patios & Walkways Design & Installation | A-Z Landscapes",
  description:
    "A-Z Landscapes designs and installs beautiful, durable patios and walkways using pavers, natural stone, concrete, and more. Create your ideal outdoor living area.",
}

const patiosWalkwaysData = {
  category: "hardscape" as const,
  title: "Patios & Walkways",
  description:
    "Transform your outdoor areas into beautiful, functional extensions of your home with custom-designed patios and walkways by A-Z Landscapes. We specialize in creating durable and aesthetically pleasing surfaces that enhance your lifestyle and property value.",
  heroImage: "/patios-walkways/hero.png",
  benefits: [
    "Expands usable outdoor living and entertainment space.",
    "Increases property value and curb appeal significantly.",
    "Offers a wide range of materials, colors, and patterns for custom designs.",
    "Provides durable, long-lasting surfaces built to withstand weather and use.",
    "Improves accessibility and flow throughout your landscape.",
    "Reduces lawn maintenance in paved areas.",
  ],
  process: [
    {
      title: "Consultation & Design",
      description:
        "We start with a detailed consultation to understand your vision. Our design team then creates a custom plan, selecting materials and layouts that complement your home.",
    },
    {
      title: "Site Preparation",
      description:
        "Proper site preparation is key. This includes excavation, grading, and ensuring a stable base to prevent shifting and settling, guaranteeing longevity.",
    },
    {
      title: "Material Installation",
      description:
        "Our skilled craftsmen meticulously install your chosen materials, whether it's intricate paver patterns, elegant natural stone, or durable concrete.",
    },
    {
      title: "Finishing & Sealing",
      description:
        "We complete the project with joint sanding for pavers, edge restraints, and optional sealing to protect against stains and enhance color.",
    },
  ],
  gallery: [
    {
      image: "/user-uploads/decorative-concrete-outdoor-living-space.jpeg",
      title: "Lakeside Paver Patio",
      description: "A beautiful paver patio designed to maximize views and enjoyment of a lakeside property.",
    },
    {
      image: "/patios-walkways/stone-walkway.png",
      title: "Natural Stone Walkway",
      description: "Elegant natural stone walkway meandering through a garden.",
    },
    {
      image: "/patios-walkways/stamped-concrete.png",
      title: "Stamped Concrete Patio",
      description: "Versatile stamped concrete patio offering various patterns and colors.",
    },
    {
      image: "/patios-walkways/brick-entrance.png",
      title: "Classic Brick Entrance",
      description: "Timeless brick walkway leading to a welcoming home entrance.",
    },
    {
      image: "/patios-walkways/flagstone-patio.png",
      title: "Rustic Flagstone Patio",
      description: "Charming flagstone patio creating a natural, rustic outdoor space.",
    },
    {
      image: "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
      title: "Expansive Paver Patio",
      description: "A large, multi-zone paver patio with areas for dining, cooking, and relaxing by the fire.",
    },
  ],
  testimonials: [
    {
      name: "Sarah L.",
      location: "Springfield, IL",
      rating: 5,
      text: "A-Z Landscapes transformed our backyard with a stunning paver patio. The craftsmanship is top-notch, and the team was professional throughout the entire process. We love our new outdoor space!",
    },
    {
      name: "John B.",
      location: "Chatham, IL",
      rating: 5,
      text: "The new flagstone walkway they installed is absolutely beautiful and has made such a difference to our front yard's appeal. Highly recommend their services for any hardscaping work.",
    },
  ],
  faqs: [
    {
      question: "What materials do you offer for patios and walkways?",
      answer:
        "We offer a wide variety of materials including concrete pavers, natural stone (flagstone, bluestone), traditional bricks, and poured concrete (stamped, colored, or brushed).",
    },
    {
      question: "How long does a typical patio or walkway installation take?",
      answer:
        "The duration depends on the size and complexity of the project. Small walkways might take a few days, while large, intricate patios could take 1-2 weeks. We provide a detailed timeline with our quote.",
    },
    {
      question: "How do I maintain my new paver patio?",
      answer:
        "Maintenance generally includes regular sweeping, occasional washing, and weed control between joints. We also recommend re-sanding and sealing every 3-5 years to prolong its life and appearance.",
    },
  ],
  relatedServices: [
    { title: "Retaining Walls", slug: "retaining-walls" },
    { title: "Landscape Lighting", slug: "landscape-lighting" },
    { title: "Outdoor Kitchens & Fire Features", slug: "outdoor-kitchens-fire-features" },
  ],
}

export default function PatiosWalkwaysPage() {
  return <ServicePageTemplate {...patiosWalkwaysData} />
}
