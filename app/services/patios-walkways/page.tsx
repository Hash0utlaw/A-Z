import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patios & Walkways | A-Z Landscapes",
  description:
    "Create beautiful outdoor living spaces with custom patios and walkways by A-Z Landscapes. Expert design and installation of stone, concrete, and paver surfaces.",
}

export default function PatiosWalkwaysPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Patios & Walkways"
      description="Transform your outdoor space with expertly designed and installed patios and walkways. From intimate garden paths to expansive entertainment areas, we create beautiful, functional hardscapes that enhance your property's value and your quality of life."
      heroImage="/patios-walkways/Patio-walkway-landscape-resident.jpg"
      benefits={[
        "Expand your living space with beautiful outdoor areas perfect for entertaining",
        "Increase property value with professionally installed hardscaping",
        "Choose from a wide variety of materials including natural stone, pavers, and concrete",
        "Create safe, accessible pathways throughout your landscape",
        "Enjoy low-maintenance surfaces that look great year-round",
        "Design custom patterns, borders, and features to match your style",
      ]}
      process={[
        {
          title: "Design Consultation",
          description:
            "We meet with you to understand your vision, assess your space, and discuss material options, layout possibilities, and budget considerations.",
        },
        {
          title: "Site Analysis & Measurement",
          description:
            "Our team conducts a thorough site evaluation, including drainage assessment, soil conditions, and existing landscape features that will influence the design.",
        },
        {
          title: "Custom Design Development",
          description:
            "We create detailed plans showing layout, materials, patterns, and any special features like built-in seating, fire pits, or lighting integration.",
        },
        {
          title: "Material Selection & Ordering",
          description:
            "Once you approve the design, we source high-quality materials from trusted suppliers, ensuring consistency and durability for your project.",
        },
        {
          title: "Site Preparation & Installation",
          description:
            "Our skilled crews excavate, prepare the base, and install your patio or walkway using proper techniques to ensure longevity and stability.",
        },
        {
          title: "Finishing & Cleanup",
          description:
            "We complete all finishing touches, including joint sand, sealing if needed, and thorough cleanup, leaving you with a beautiful, ready-to-enjoy space.",
        },
      ]}
      gallery={[
        {
          image: "/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg",
          title: "Comprehensive Patio Design - Aerial View",
          description:
            "Aerial perspective of an extensive paver patio project featuring multiple paver patterns, integrated fire features, and comprehensive drainage solutions",
        },
        {
          image: "/user-uploads/backyard-fire-pit-patio-residential.jpeg",
          title: "Fire Pit Patio with Curved Seating",
          description:
            "Expansive paver patio featuring integrated fire pit, curved stone seating walls, and decorative drainage elements",
        },
        {
          image: "/patios-walkways/modern-paver-patio.png",
          title: "Modern Paver Patio",
          description: "Clean lines and contemporary design with high-quality concrete pavers",
        },
        {
          image: "/user-uploads/stone-walkway-residential.jpeg",
          title: "Illuminated Stone Walkway",
          description: "Beautiful paver walkway with integrated landscape lighting and garden beds",
        },
        {
          image: "/patios-walkways/stone-walkway.png",
          title: "Natural Stone Walkway",
          description: "Elegant flagstone path winding through landscaped garden areas",
        },
        {
          image: "/patios-walkways/stamped-concrete.png",
          title: "Stamped Concrete Patio",
          description: "Decorative stamped concrete with natural stone appearance",
        },
      ]}
      testimonials={[
        {
          name: "Jennifer & Mark Stevens",
          location: "Residential Clients",
          rating: 5,
          text: "Our new paver patio has become the heart of our outdoor entertaining. A-Z Landscapes created exactly what we envisioned - a beautiful space that flows perfectly with our home and garden.",
        },
        {
          name: "Patricia Williams",
          location: "Residential Client",
          rating: 5,
          text: "The flagstone walkway A-Z installed has completely transformed our front yard. The craftsmanship is exceptional, and the design perfectly complements our home's architecture.",
        },
        {
          name: "Michael Chen",
          location: "Residential Client",
          rating: 5,
          text: "We're thrilled with our new stamped concrete patio. It looks like expensive natural stone but was much more budget-friendly. The team was professional and the quality is outstanding.",
        },
        {
          name: "David & Lisa Thompson",
          location: "Residential Clients",
          rating: 5,
          text: "The aerial view of our completed patio project really shows the incredible scope of work A-Z accomplished. The different paver patterns and integration with our landscape is masterful.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between pavers, flagstone, and stamped concrete?",
          answer:
            "Pavers are manufactured units (concrete or clay) that offer consistent size and color with easy repair options. Flagstone is natural stone with unique patterns and colors but irregular shapes. Stamped concrete is poured concrete textured to mimic stone or brick, offering a seamless surface at a lower cost. Each has different maintenance requirements, costs, and aesthetic qualities.",
        },
        {
          question: "How do you ensure proper drainage for patios and walkways?",
          answer:
            "Proper drainage is critical for any hardscape project. We ensure adequate slope away from structures (typically 1/4 inch per foot), install appropriate base materials, and may incorporate drainage systems like French drains or permeable materials when needed. Our site evaluation identifies potential drainage issues before installation begins.",
        },
        {
          question: "Can you install patios and walkways in winter?",
          answer:
            "Installation is weather-dependent. We can work in cool weather, but avoid installation during freezing conditions or when the ground is frozen. Concrete work requires temperatures above 40°F. The best seasons are spring through fall when ground conditions are stable and temperatures are moderate.",
        },
        {
          question: "How long will my new patio or walkway last?",
          answer:
            "With proper installation and maintenance, patios and walkways can last decades. Pavers typically last 25+ years, natural stone can last 50+ years, and concrete 20-30 years. Longevity depends on material quality, installation techniques, local climate, and maintenance. We provide care instructions to maximize the life of your investment.",
        },
        {
          question: "Can you create complex patio designs with multiple materials and patterns?",
          answer:
            "We specialize in comprehensive patio designs that incorporate multiple paver patterns, different materials, integrated features like fire pits and seating walls, and decorative elements like dry creek beds. Our design team can create detailed plans showing how all elements work together harmoniously.",
        },
      ]}
      relatedServices={[
        {
          title: "Landscape Lighting",
          slug: "landscape-lighting",
        },
        {
          title: "Outdoor Kitchens & Fire Features",
          slug: "outdoor-kitchens-fire-features",
        },
        {
          title: "Garden Design & Planting",
          slug: "garden-design-planting",
        },
      ]}
    />
  )
}
