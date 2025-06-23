import type { Metadata } from "next"
import ServicePageTemplate from "@/components/service-page-template" // Corrected import path

export const metadata: Metadata = {
  title: "Patios & Walkways Design & Installation | A-Z Landscapes",
  description:
    "A-Z Landscapes designs and installs beautiful, durable patios and walkways using pavers, natural stone, concrete, and more. Create your ideal outdoor living area in [Your City/Region].",
  keywords: [
    "patios",
    "walkways",
    "paver patios",
    "stone walkways",
    "concrete patios",
    "outdoor living spaces",
    "hardscaping",
    "landscape design",
    "A-Z Landscapes",
    "patio installation",
    "walkway installation",
  ],
}

const patiosWalkwaysData = {
  category: "hardscape" as "hardscape" | "landscaping",
  title: "Patios & Walkways",
  description:
    "Transform your outdoor areas into beautiful, functional extensions of your home with custom-designed patios and walkways by A-Z Landscapes. We specialize in creating durable and aesthetically pleasing surfaces that enhance your lifestyle and property value.",
  heroImage: "/patios-walkways/hero.png",
  benefits: [
    "Expands usable outdoor living and entertainment space.",
    "Increases property value and curb appeal significantly.",
    "Offers a wide range of materials, colors, and patterns for custom designs (pavers, natural stone, concrete, flagstone, brick).",
    "Provides durable, long-lasting surfaces built to withstand weather and use.",
    "Improves accessibility and flow throughout your landscape.",
    "Reduces lawn maintenance in paved areas.",
  ],
  process: [
    {
      title: "Consultation & Design",
      description:
        "We start with a detailed consultation to understand your vision, needs, and budget. Our design team then creates a custom plan, selecting materials and layouts that complement your home and landscape.",
    },
    {
      title: "Site Preparation",
      description:
        "Proper site preparation is key. This includes excavation, grading, and ensuring a stable base to prevent shifting and settling, guaranteeing the longevity of your patio or walkway.",
    },
    {
      title: "Material Installation",
      description:
        "Our skilled craftsmen meticulously install your chosen materials, whether it's intricate paver patterns, elegant natural stone, or durable concrete, paying close attention to detail and quality.",
    },
    {
      title: "Finishing & Sealing (Optional)",
      description:
        "We complete the project with joint sanding for pavers, edge restraints, and optional sealing to protect against stains and enhance color, ensuring a beautiful finish.",
    },
    {
      title: "Final Walkthrough & Care",
      description:
        "We conduct a final walkthrough to ensure your complete satisfaction and provide guidance on how to care for your new patio or walkway to keep it looking its best for years to come.",
    },
  ],
  gallery: [
    {
      image: "/patios-walkways/modern-paver-patio.png",
      title: "Modern Paver Patio",
      description: "Sleek and contemporary paver patio design for outdoor entertaining.",
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
      image: "/patios-walkways/multi-level-patio.png",
      title: "Multi-Level Paver Patio",
      description: "Expansive multi-level paver patio with integrated seating and planters.",
    },
    {
      image: "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
      title: "Spacious Evening Patio",
      description: "Large paver patio designed for entertainment with fire pit and outdoor kitchen.",
    },
    {
      image: "/user-uploads/decorative-concrete-outdoor-living-space.jpeg",
      title: "Patterned Patio Overlooking Water",
      description:
        "Patterned paver or stamped concrete patio with a curved design, leading to a lawn and waterfront view.",
    },
    {
      image: "/user-uploads/outdoor-kitchen-patio-dining-area-stone-pavers.jpeg",
      title: "Multi-Zone Paver Patio",
      description: "Expansive paver patio with distinct zones for cooking, dining, and relaxation around a fire pit.",
    },
    {
      image: "/user-uploads/natural-stone-steps-retaining-wall-landscaping.jpeg",
      title: "Natural Stone Slab Steps",
      description:
        "Wide, natural stone steps integrated into a landscaped slope, enhancing accessibility and aesthetics.",
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
    {
      name: "Maria G.",
      location: "Rochester, IL",
      rating: 4,
      text: "We had a concrete patio poured and stamped. It looks great, and the price was competitive. The project took a little longer than expected, but the end result was worth it.",
    },
  ],
  faqs: [
    {
      question: "What materials do you offer for patios and walkways?",
      answer:
        "We offer a wide variety of materials including concrete pavers, natural stone (flagstone, bluestone, slate), traditional bricks, and poured concrete (stamped, colored, or brushed). We can help you choose the best material for your style and budget.",
    },
    {
      question: "How long does a typical patio or walkway installation take?",
      answer:
        "The duration depends on the size and complexity of the project, materials chosen, and site conditions. Small walkways might take a few days, while large, intricate patios could take 1-2 weeks or more. We provide a detailed timeline after the initial design.",
    },
    {
      question: "Do I need a permit for a new patio or walkway?",
      answer:
        "Permit requirements vary by location and the scope of the project. We can advise you on local regulations and assist with the permit process if necessary.",
    },
    {
      question: "How do I maintain my new patio or walkway?",
      answer:
        "Maintenance depends on the material. Generally, regular sweeping, occasional washing, and weed control between joints are recommended. For pavers, periodic re-sanding and sealing (every 3-5 years) can prolong their life and appearance.",
    },
    {
      question: "Can you repair existing patios or walkways?",
      answer:
        "Yes, in many cases we can repair existing patios and walkways, including resetting loose pavers, fixing cracks in concrete, or addressing drainage issues. We'll assess the condition and recommend the best course of action.",
    },
  ],
  relatedServices: [
    { title: "Retaining Walls", slug: "retaining-walls" },
    { title: "Landscape Lighting", slug: "landscape-lighting" },
    { title: "Garden Design & Planting", slug: "garden-design-planting" },
    { title: "Outdoor Kitchens & Fire Features", slug: "outdoor-kitchens-fire-features" },
  ],
}

export default function PatiosWalkwaysPage() {
  return <ServicePageTemplate {...patiosWalkwaysData} />
}
