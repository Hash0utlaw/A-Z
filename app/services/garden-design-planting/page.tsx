import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landscape Design & Planting Services | A-Z Landscapes",
  description:
    "Creative landscape design and expert planting services from A-Z Landscapes. Personalized garden designs, plant selection, and installation for beautiful results.",
}

export default function GardenDesignPlantingPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Creative Landscape Design & Planting"
      description="Transform your property with bespoke landscape designs from A-Z Landscapes. We specialize in creating personalized outdoor environments, from vibrant flower beds and ornamental shrubs to complete property master plans, always tailored to your style and site."
      heroImage="/garden-design-planting/hero.png"
      benefits={[
        "Personalized designs reflecting your style (Modern, Southern, English, Beachy, etc.).",
        "Expert plant selection for year-round interest, color, and suitability to your site.",
        "Enhanced curb appeal and property value through thoughtful design.",
        "Creation of functional and beautiful outdoor living spaces.",
        "Solutions for challenging sites, incorporating elements like grading and drainage.",
        "Collaborative process ensuring your vision is realized.",
      ]}
      process={[
        {
          title: "Initial Consultation & Vision Sharing",
          description:
            "We start by listening. We'll discuss your likes, dislikes, how you envision using the space, preferred styles (e.g., modern, southern, formal, natural), and budget.",
        },
        {
          title: "Site Analysis & Assessment",
          description:
            "Our team thoroughly evaluates your property, considering house style, neighborhood context, soil conditions, sun exposure, drainage, and existing features.",
        },
        {
          title: "Concept Development & Plant Palette Curation",
          description:
            "Based on your input and our analysis, we develop design concepts. This includes selecting a palette of plants from our trusted nurseries, focusing on variety, color, texture, and seasonal interest. We love incorporating diverse plants beyond standard 'builder packages'.",
        },
        {
          title: "Design Presentation & Refinement",
          description:
            "We present you with a detailed design plan, which can include sketches or 3D renderings. We'll walk you through the plant choices and layout, inviting your feedback and making any necessary revisions to perfect the plan.",
        },
        {
          title: "Deposit & Material Sourcing",
          description:
            "Once the design is approved, we secure a deposit and begin sourcing the highest quality plants and materials for your project.",
        },
        {
          title: "Professional Installation & Site Management",
          description:
            "Our skilled crews meticulously install your new landscape, including any necessary site preparation like grading. We ensure every plant is perfectly placed and the site is left clean.",
        },
        {
          title: "Post-Installation Guidance & Maintenance Options",
          description:
            "We provide comprehensive care instructions for your new garden. We highly recommend our full-service maintenance to ensure your landscape thrives, allowing us to monitor irrigation, lighting, and plant health proactively.",
        },
      ]}
      gallery={[
        {
          image: "/garden-design-planting/perennial-garden.png",
          title: "Vibrant Perennial Garden",
          description: "A riot of color and texture designed for continuous blooms.",
        },
        {
          image: "/garden-design-planting/native-plants.png",
          title: "Sustainable Native Planting",
          description: "Eco-friendly design supporting local pollinators and requiring less water.",
        },
        {
          image: "/garden-design-planting/formal-garden.png",
          title: "Elegant Formal Garden",
          description: "Structured design with clean lines and classic symmetry.",
        },
        {
          image: "/garden-design-planting/shade-garden.png",
          title: "Lush Shade Garden Retreat",
          description: "Thriving plants selected for low-light conditions, creating a cool oasis.",
        },
        {
          image: "/garden-design-planting/foundation-planting.png",
          title: "Inviting Foundation Plantings",
          description: "Enhancing home architecture and creating a welcoming entrance.",
        },
        {
          image: "/garden-design-planting/cottage-garden.png",
          title: "Charming Cottage Garden",
          description: "Informal, romantic, and abundant with a mix of flowers and foliage.",
        },
      ]}
      testimonials={[
        {
          name: "Elizabeth P.",
          rating: 5,
          text: "A-Z Landscapes transformed our yard into a stunning garden. Their plant knowledge is impressive, and they created a design that gives us beauty in every season.",
        },
        {
          name: "Susan M.",
          rating: 5,
          text: "I wanted a low-maintenance native garden, and A-Z delivered beyond expectations. It's now a haven for butterflies and birds!",
        },
        {
          name: "Robert G.",
          rating: 5,
          text: "The designers truly listened and created a garden perfect for our lifestyle. The installation team was meticulous.",
        },
      ]}
      faqs={[
        {
          question: "How do you tailor a design to my personal style?",
          answer:
            "Our first step is always a detailed conversation to understand your preferences – whether you love a modern, minimalist look, a lush Southern garden, a formal English style, or a relaxed beachy vibe. We then combine this with your home's architecture and site conditions to create something uniquely yours.",
        },
        {
          question: "What if I don't know what plants I want?",
          answer:
            "That's perfectly fine! Many clients don't. Part of our expertise is recommending plants that will thrive in your specific environment and match your desired aesthetic. We'll show you options and explain their characteristics.",
        },
        {
          question: "How long does the landscape design process take?",
          answer:
            "The design phase duration varies based on project complexity and client responsiveness. It can range from a few days for simple plans to several weeks for extensive designs. Installation lead times also vary, typically from a few weeks to a couple of months depending on our schedule.",
        },
        {
          question: "Do you use 3D design software?",
          answer:
            "Yes, we have 3D design software with CAD capabilities that allows us to create detailed visualizations, including a library of plants, so you can see a virtual representation of your future landscape. This helps in making informed decisions.",
        },
        {
          question: "Why is post-installation maintenance important?",
          answer:
            "A new landscape needs careful attention to establish. We prefer to manage the ongoing maintenance (irrigation adjustments, plant health checks, lighting tweaks) to ensure everything thrives as intended. While we provide care guides if you self-maintain, we cannot offer the same guarantees as when we manage the aftercare.",
        },
      ]}
      relatedServices={[
        { title: "Hardscape & Patios", slug: "patios-walkways" },
        { title: "Landscape Lighting", slug: "landscape-lighting" },
        { title: "Irrigation & Drainage", slug: "irrigation-systems" },
        { title: "Lawn Care & Maintenance", slug: "lawn-care-maintenance" },
      ]}
    />
  )
}
