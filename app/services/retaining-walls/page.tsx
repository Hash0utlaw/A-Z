import type { Metadata } from "next"
import ServicePageTemplate from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Retaining Wall Construction & Design | A-Z Landscapes",
  description:
    "A-Z Landscapes builds beautiful, durable retaining walls from natural stone, boulders, and blocks. We solve slope issues and enhance your landscape's usability and appeal.",
}

const retainingWallsData = {
  category: "hardscape" as const,
  title: "Durable & Decorative Retaining Walls",
  description:
    "A-Z Landscapes designs and builds structurally sound and aesthetically pleasing retaining walls. We specialize in using natural stone, boulders, and manufactured block systems to manage slopes, prevent erosion, and create more usable space.",
  heroImage: "/retaining-walls/retaining-wall-residential-image.jpeg",
  benefits: [
    "Effectively manage sloped terrain and prevent costly soil erosion.",
    "Create more usable flat areas for patios, gardens, or lawns.",
    "Enhance the visual appeal and definition of your landscape.",
    "Increase property value with professionally engineered and constructed walls.",
    "Wide choice of materials: natural stone, boulders, or manufactured blocks.",
    "Custom designs to complement your home and landscape style.",
  ],
  process: [
    {
      title: "1. Site Evaluation & Engineering",
      description:
        "We perform a thorough assessment of the slope, soil conditions, and water drainage. For taller walls, we adhere to strict engineering standards to ensure safety and longevity.",
    },
    {
      title: "2. Material Selection & Design",
      description:
        "Choose from natural stone for a rustic look, boulders for a dramatic statement, or versatile manufactured blocks. We design the wall to meet your functional needs and aesthetic goals.",
    },
    {
      title: "3. Foundation & Base Preparation",
      description:
        "A solid, compacted gravel footing is critical for a retaining wall's stability. We never cut corners on this essential step, ensuring a foundation that lasts.",
    },
    {
      title: "4. Wall Construction & Drainage",
      description:
        "Our experienced team constructs the wall with precision, incorporating robust drainage systems (like gravel backfill and drain pipes) to relieve water pressure and prevent failure.",
    },
    {
      title: "5. Backfilling & Final Grading",
      description:
        "Once the wall is complete, we carefully backfill the area with soil and grade the surrounding landscape for a seamless, professional finish.",
    },
  ],
  gallery: [
    {
      image: "/retaining-walls/natural-stone-wall.png",
      title: "Natural Stone Retaining Wall",
      description: "Classic beauty and durability with a natural stacked stone wall.",
    },
    {
      image: "/retaining-walls/block-wall-system.png",
      title: "Manufactured Block Wall",
      description: "Versatile and uniform, block walls offer many design options.",
    },
    {
      image: "/retaining-walls/terraced-garden.png",
      title: "Terraced Garden Walls",
      description: "Creating multiple levels for planting on a sloped yard.",
    },
    {
      image: "/user-uploads/natural-stone-steps-retaining-wall-landscaping.jpeg",
      title: "Stone Steps with Boulder Wall",
      description: "Natural stone slab steps integrated with a robust boulder retaining wall.",
    },
    {
      image: "/retaining-walls/boulder-wall.png",
      title: "Impressive Boulder Wall",
      description: "Large boulders creating a natural and robust retaining solution.",
    },
    {
      image: "/retaining-walls/timber-wall.png",
      title: "Timber Retaining Wall",
      description: "A more rustic option, suitable for certain aesthetics and smaller walls.",
    },
  ],
  testimonials: [
    {
      name: "The Jacksons",
      location: "Springfield, IL",
      rating: 5,
      text: "A-Z Landscapes built a beautiful and sturdy retaining wall that solved our erosion problem and gave us more garden space. Highly recommend!",
    },
    {
      name: "Maria B.",
      location: "Chatham, IL",
      rating: 5,
      text: "The boulder wall is a work of art! It completely transformed our difficult slope. The team was professional and efficient.",
    },
  ],
  faqs: [
    {
      question: "What is the best material for my retaining wall?",
      answer:
        "The best material depends on the wall's height, purpose, your aesthetic preference, and budget. Manufactured blocks are versatile and cost-effective. Natural stone and boulders offer unique, high-end looks. We'll help you choose the right fit.",
    },
    {
      question: "Does my retaining wall need a drainage system?",
      answer:
        "Yes, absolutely. Proper drainage is the most critical factor in a retaining wall's longevity. It prevents water pressure (hydrostatic pressure) from building up behind the wall, which is the primary cause of failure.",
    },
    {
      question: "How tall can a retaining wall be before it needs an engineer?",
      answer:
        "This varies by local building codes, but typically walls over 3-4 feet in height require a permit and an engineered design. We are knowledgeable about local requirements and ensure all our walls are built to be safe and compliant.",
    },
  ],
  relatedServices: [
    { title: "Patios & Walkways", slug: "patios-walkways" },
    { title: "Garden Design & Planting", slug: "garden-design-planting" },
    { title: "Drainage Solutions", slug: "irrigation-systems" },
  ],
}

export default function RetainingWallsPage() {
  return <ServicePageTemplate {...retainingWallsData} />
}
