import type { Metadata } from "next"
import ServicePageTemplate from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Retaining Wall Construction & Design | A-Z Landscapes",
  description:
    "A-Z Landscapes builds durable and decorative retaining walls using natural stone, boulders, and blocks. Solve slope issues and enhance your landscape.",
}

const retainingWallsData = {
  category: "hardscape" as const,
  title: "Durable & Decorative Retaining Walls",
  description:
    "A-Z Landscapes designs and builds structurally sound and aesthetically pleasing retaining walls. We specialize in various materials including natural stone, boulders, and manufactured block systems to manage slopes, create terraced gardens, and define outdoor spaces.",
  heroImage: "/retaining-walls/hero.png",
  benefits: [
    "Effectively manage sloped terrain and prevent soil erosion.",
    "Create more usable flat areas for gardens, patios, or play spaces.",
    "Enhance the visual appeal and definition of your landscape.",
    "Increase property value with professionally engineered and constructed walls.",
    "Wide choice of materials: natural stone, boulders, manufactured blocks.",
    "Custom designs to complement your home and landscape style.",
  ],
  process: [
    {
      title: "Site Evaluation & Engineering Needs",
      description:
        "We assess the slope, soil conditions, and drainage requirements. For larger walls, engineering considerations are paramount.",
    },
    {
      title: "Material Selection & Design",
      description:
        "Choose from natural stone, boulders, or versatile manufactured blocks. We design the wall's height, length, and style to meet your needs.",
    },
    {
      title: "Proper Footing & Base Preparation",
      description:
        "A solid foundation is critical. We ensure proper excavation, footing construction, and base material compaction for longevity.",
    },
    {
      title: "Wall Construction & Drainage Integration",
      description:
        "Our experienced team constructs the wall with precision, incorporating necessary drainage systems (e.g., gravel backfill, weep holes) to relieve hydrostatic pressure.",
    },
    {
      title: "Backfilling & Finishing",
      description:
        "Once the wall is built, we carefully backfill and compact the soil. We can also integrate landscaping, capstones, or lighting into the final design.",
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
      question: "What materials are best for retaining walls?",
      answer:
        "The best material depends on the wall's height, purpose, and your budget. Manufactured blocks are versatile and cost-effective. Natural stone and boulders offer unique, high-end looks. We'll help you choose.",
    },
    {
      question: "Does my retaining wall need drainage?",
      answer:
        "Yes, almost all retaining walls require proper drainage to prevent water buildup, which can cause it to fail. We incorporate drainage solutions like gravel backfill and perforated pipes into our designs.",
    },
    {
      question: "How tall can a retaining wall be?",
      answer:
        "Wall height limits vary by local codes and often require engineering for taller structures. We design and build walls that are safe, compliant, and appropriate for your site.",
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
