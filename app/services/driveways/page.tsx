import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Driveways | A-Z Landscapes",
  description:
    "Professional driveway installation and repair services by A-Z Landscapes. Concrete, asphalt, paver, and gravel driveways designed for durability and curb appeal.",
}

export default function DrivewaysPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Driveways"
      description="Create a lasting first impression with a professionally installed driveway from A-Z Landscapes. We specialize in concrete, asphalt, paver, and decorative driveway solutions that combine durability, functionality, and aesthetic appeal to enhance your property's value and curb appeal."
      heroImage="/driveways/stone-driveway-landscape-lake-resident.jpeg"
      benefits={[
        "Enhance your home's curb appeal and create a strong first impression",
        "Increase property value with professional driveway installation",
        "Choose from multiple materials including concrete, pavers, asphalt, and gravel",
        "Ensure proper drainage and long-lasting durability",
        "Custom designs that complement your home's architecture",
        "Low-maintenance solutions built to withstand weather and traffic",
      ]}
      process={[
        {
          title: "Initial Consultation & Site Assessment",
          description:
            "We evaluate your property's grade, drainage, soil conditions, and access requirements. We discuss your preferences for materials, design, and budget considerations.",
        },
        {
          title: "Design & Permitting",
          description:
            "Our team creates detailed plans showing layout, materials, and drainage solutions. We handle any necessary permits and ensure compliance with local regulations.",
        },
        {
          title: "Excavation & Site Preparation",
          description:
            "We carefully excavate to proper depth, address any drainage issues, and prepare a stable base using appropriate aggregate materials compacted to specifications.",
        },
        {
          title: "Installation & Finishing",
          description:
            "We install your chosen driveway material using professional techniques and equipment, ensuring proper thickness, slope, and finishing for optimal performance and appearance.",
        },
        {
          title: "Final Inspection & Maintenance Guidance",
          description:
            "We conduct a thorough final inspection and provide you with care instructions to maximize the life and appearance of your new driveway.",
        },
      ]}
      gallery={[
        {
          image: "/user-uploads/concrete-pad-stone-walkway-residential.jpeg",
          title: "Professional Concrete Installation",
          description:
            "Clean, durable concrete pad installation showcasing precision in both functionality and design with complementary walkway elements",
        },
        {
          image: "/driveways/concrete-driveway.png",
          title: "Standard Concrete Driveway",
          description: "Clean, durable concrete driveway with proper drainage and finishing",
        },
        {
          image: "/driveways/paver-driveway.png",
          title: "Elegant Paver Driveway",
          description: "Sophisticated paver driveway with decorative borders and patterns",
        },
        {
          image: "/driveways/asphalt-driveway.png",
          title: "Professional Asphalt Installation",
          description: "Smooth asphalt driveway with proper edging and drainage",
        },
        {
          image: "/driveways/circular-driveway.png",
          title: "Circular Driveway Design",
          description: "Elegant circular driveway providing convenient access and impressive curb appeal",
        },
        {
          image: "/driveways/permeable-driveway.png",
          title: "Permeable Paver System",
          description: "Eco-friendly permeable pavers that manage stormwater runoff",
        },
      ]}
      testimonials={[
        {
          name: "John & Mary Peterson",
          location: "Residential Clients",
          rating: 5,
          text: "A-Z Landscapes installed our concrete driveway with such precision and attention to detail. The drainage is perfect and it looks fantastic. Excellent workmanship!",
        },
        {
          name: "Robert Thompson",
          location: "Residential Client",
          rating: 5,
          text: "Our new paver driveway has completely transformed our home's curb appeal. The quality of installation and materials is outstanding. Highly recommend A-Z Landscapes.",
        },
        {
          name: "Lisa & David Chen",
          location: "Residential Clients",
          rating: 5,
          text: "The team at A-Z handled our circular driveway project professionally from start to finish. The design is beautiful and the installation was completed on time and on budget.",
        },
        {
          name: "Michael Rodriguez",
          location: "Residential Client",
          rating: 5,
          text: "A-Z installed a concrete pad and walkway system for us that perfectly balances functionality with aesthetic appeal. The craftsmanship is evident in every detail.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between concrete, asphalt, and paver driveways?",
          answer:
            "Concrete offers durability and low maintenance with a clean appearance, lasting 25-30 years. Asphalt is cost-effective and flexible, ideal for colder climates, lasting 15-20 years. Pavers provide the most design flexibility and easy repair options, lasting 25+ years but at a higher initial cost. Each has different maintenance requirements and aesthetic qualities.",
        },
        {
          question: "How long does driveway installation take?",
          answer:
            "Installation time varies by size, material, and site conditions. A standard concrete driveway typically takes 2-3 days, while paver installations may take 3-5 days. Weather conditions and curing time for concrete can affect the timeline. We provide detailed schedules during the planning phase.",
        },
        {
          question: "Do I need permits for driveway installation?",
          answer:
            "Permit requirements vary by location and project scope. New driveways, significant expansions, or changes to drainage patterns often require permits. We're familiar with local regulations and can handle the permitting process for you.",
        },
        {
          question: "How do you ensure proper drainage for driveways?",
          answer:
            "Proper drainage is crucial for driveway longevity. We ensure adequate slope away from structures (typically 1-2% grade), install appropriate base materials, and may incorporate drainage systems like French drains or permeable materials when needed. Our site evaluation identifies potential drainage issues before installation.",
        },
        {
          question: "Can you repair or resurface existing driveways?",
          answer:
            "Yes, we offer repair and resurfacing services for concrete and asphalt driveways. Options include crack repair, resurfacing, and partial replacement depending on the condition. We'll assess your existing driveway and recommend the most cost-effective solution.",
        },
      ]}
      relatedServices={[
        {
          title: "Patios & Walkways",
          slug: "patios-walkways",
        },
        {
          title: "Retaining Walls",
          slug: "retaining-walls",
        },
        {
          title: "Landscape Lighting",
          slug: "landscape-lighting",
        },
      ]}
    />
  )
}
