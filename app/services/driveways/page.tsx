import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Driveway Design & Installation | A-Z Landscapes",
  description:
    "Enhance curb appeal with custom driveways by A-Z Landscapes. We install paver, concrete, and asphalt driveways. Durable and stylish solutions.",
}

export default function DrivewaysPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Driveways"
      description="Enhance your property's curb appeal and functionality with durable, attractive driveways designed and installed by our expert hardscape team."
      heroImage="/driveways/hero.png"
      benefits={[
        "Create a stunning first impression with a beautifully designed driveway",
        "Increase your property value with high-quality hardscaping",
        "Choose from a variety of materials including asphalt, concrete, and pavers",
        "Improve drainage and reduce pudding with proper grading and installation",
        "Enjoy decades of use with minimal maintenance",
        "Design custom features like borders, patterns, and decorative elements",
      ]}
      process={[
        {
          title: "Site Evaluation",
          description:
            "We assess your existing driveway or site, including soil conditions, drainage patterns, and space requirements.",
        },
        {
          title: "Design Consultation",
          description:
            "Our designers work with you to select materials, layout, patterns, and any special features for your new driveway.",
        },
        {
          title: "Proposal Development",
          description:
            "We create a detailed proposal outlining materials, timeline, process, and investment for your driveway project.",
        },
        {
          title: "Site Preparation",
          description:
            "Our team removes your old driveway if needed, establishes proper grading, and prepares a stable foundation.",
        },
        {
          title: "Installation",
          description:
            "We install your new driveway using quality materials and proper techniques to ensure durability and appearance.",
        },
        {
          title: "Final Inspection",
          description:
            "We complete a thorough inspection to ensure every detail meets our high standards and your expectations.",
        },
      ]}
      gallery={[
        {
          image: "/driveways/concrete-driveway.png",
          title: "Concrete Driveway",
          description: "Stamped and colored concrete driveway with decorative border",
        },
        {
          image: "/driveways/paver-driveway.png",
          title: "Paver Driveway",
          description: "Interlocking concrete paver driveway with contrasting border pattern",
        },
        {
          image: "/driveways/asphalt-driveway.png",
          title: "Asphalt Driveway",
          description: "Smooth asphalt driveway with paver border accent",
        },
        {
          image: "/driveways/circular-driveway.png",
          title: "Circular Driveway",
          description: "Elegant circular driveway design with central landscaped island",
        },
        {
          image: "/driveways/permeable-driveway.png",
          title: "Permeable Paver Driveway",
          description: "Eco-friendly permeable paver system for improved drainage",
        },
        {
          image: "/driveways/stone-driveway.png",
          title: "Natural Stone Driveway",
          description: "Premium natural stone driveway with custom inlay design",
        },
      ]}
      testimonials={[
        {
          name: "Robert & Claire Thompson",
          location: "Residential Clients",
          rating: 5,
          text: "Our new paver driveway from A-Z Landscaping has completely transformed the front of our home. The design team helped us choose the perfect pattern and colors to complement our home's architecture.",
        },
        {
          name: "David Wilson",
          location: "Residential Client",
          rating: 5,
          text: "After years of patching our old cracked concrete driveway, we finally decided to replace it. A-Z did an amazing job with our new driveway - the stamped concrete looks like natural stone but at a fraction of the cost.",
        },
        {
          name: "Lakeview Estates HOA",
          location: "Commercial Client",
          rating: 5,
          text: "A-Z replaced all the driveways in our community with a cohesive design that has dramatically improved our neighborhood's appearance. Their team was professional, efficient, and the quality of work is outstanding.",
        },
      ]}
      faqs={[
        {
          question: "What driveway material is most durable?",
          answer:
            "All materials we offer (concrete, asphalt, and pavers) are durable when properly installed. Concrete typically lasts 30+ years, asphalt 15-20 years with maintenance, and pavers 25+ years with the advantage of being repairable in sections if needed. The best choice depends on your budget, aesthetic preferences, climate, and maintenance preferences.",
        },
        {
          question: "How long will it take to install my new driveway?",
          answer:
            "Installation time varies based on size, design complexity, and materials. A typical residential driveway replacement takes 3-7 days from demolition to completion. Concrete driveways require additional curing time of 7-10 days before they can be used. We'll provide a specific timeline for your project during the proposal phase.",
        },
        {
          question: "Can you install a driveway in winter?",
          answer:
            "Installation during freezing temperatures is not recommended for most driveway materials. Concrete shouldn't be installed when temperatures are below 40°F, and asphalt requires warm temperatures for proper compaction. The ideal seasons for driveway installation are spring, summer, and fall when temperatures are moderate.",
        },
        {
          question: "What maintenance will my new driveway require?",
          answer:
            "Maintenance requirements vary by material. Concrete needs periodic cleaning and sealing every 2-3 years. Asphalt should be seal-coated every 2-5 years and may need minor repairs over time. Paver driveways require occasional joint sand replenishment and may need periodic sealing depending on the product. We provide detailed maintenance instructions for your specific driveway.",
        },
        {
          question: "Can you incorporate drainage solutions into my driveway design?",
          answer:
            "Yes, proper drainage is a critical component of any driveway project. We can incorporate various drainage solutions including proper sloping away from structures, channel drains, catch basins, or permeable paving options. During our site evaluation, we'll assess your specific drainage needs and recommend appropriate solutions.",
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
