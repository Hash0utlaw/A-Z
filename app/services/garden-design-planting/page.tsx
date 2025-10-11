import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Garden Design & Planting | A-Z Landscapes",
  description:
    "Professional garden design and planting services by A-Z Landscapes. Create beautiful, sustainable gardens with native plants, perennials, and custom landscape designs.",
}

export default function GardenDesignPlantingPage() {
  return (
    <ServicePageTemplate
      category="softscape"
      title="Garden Design & Planting"
      description="Transform your outdoor space with thoughtfully designed gardens that reflect your style and thrive in your environment. From native plant gardens to formal landscapes, we create beautiful, sustainable plantings that provide year-round interest and support local ecosystems."
      heroImage="/garden-design-planting/hero.png"
      benefits={[
        "Create stunning visual interest with carefully selected plant combinations",
        "Support local wildlife and pollinators with native and beneficial plants",
        "Enjoy year-round beauty with plants selected for seasonal interest",
        "Reduce maintenance with drought-tolerant and climate-appropriate selections",
        "Increase property value with professional landscape design",
        "Improve air quality and environmental sustainability",
      ]}
      process={[
        {
          title: "Site Assessment & Consultation",
          description:
            "We evaluate your site conditions including soil type, drainage, sun exposure, and existing vegetation. We discuss your preferences, maintenance expectations, and design goals.",
        },
        {
          title: "Custom Design Development",
          description:
            "Our designers create detailed planting plans showing plant placement, mature sizes, bloom times, and seasonal interest. We consider color schemes, textures, and growth habits.",
        },
        {
          title: "Plant Selection & Sourcing",
          description:
            "We select high-quality plants from trusted nurseries, choosing specimens that are healthy, appropriately sized, and well-suited to your specific site conditions.",
        },
        {
          title: "Soil Preparation & Installation",
          description:
            "We prepare planting beds with proper soil amendments, install plants at the correct depth and spacing, and apply appropriate mulch for moisture retention and weed control.",
        },
        {
          title: "Establishment Care & Guidance",
          description:
            "We provide detailed care instructions and can offer ongoing maintenance services to ensure your new plantings establish successfully and thrive long-term.",
        },
      ]}
      gallery={[
        {
          image: "/user-uploads/butterfly-garden-flower-residential.jpeg",
          title: "Pollinator-Friendly Butterfly Garden",
          description:
            "Vibrant native flowering plants designed to attract butterflies and beneficial pollinators while creating a sustainable, beautiful ecosystem",
        },
        {
          image: "/garden-design-planting/perennial-garden.png",
          title: "Colorful Perennial Garden",
          description: "Mixed perennial border with plants selected for continuous bloom and seasonal interest",
        },
        {
          image: "/garden-design-planting/native-plants.png",
          title: "Native Plant Landscape",
          description: "Sustainable garden featuring regional native plants that support local wildlife",
        },
        {
          image: "/garden-design-planting/formal-garden.png",
          title: "Formal Garden Design",
          description: "Structured garden with geometric patterns and carefully maintained plantings",
        },
        {
          image: "/garden-design-planting/shade-garden.png",
          title: "Shade Garden Sanctuary",
          description: "Lush shade garden with hostas, ferns, and other shade-loving plants",
        },
        {
          image: "/garden-design-planting/foundation-planting.png",
          title: "Foundation Planting Design",
          description: "Professional foundation plantings that complement home architecture",
        },
      ]}
      testimonials={[
        {
          name: "Margaret Wilson",
          location: "Residential Client",
          rating: 5,
          text: "A-Z Landscapes created the most beautiful butterfly garden for us. We now have monarchs, swallowtails, and hummingbirds visiting daily. It's like having our own nature preserve!",
        },
        {
          name: "Robert & Susan Davis",
          location: "Residential Clients",
          rating: 5,
          text: "The perennial garden A-Z designed has something blooming from spring through fall. The plant combinations are stunning and the maintenance is much easier than we expected.",
        },
        {
          name: "Jennifer Martinez",
          location: "Residential Client",
          rating: 5,
          text: "Our native plant garden is not only beautiful but has significantly reduced our water usage. A-Z's knowledge of local plants and growing conditions is exceptional.",
        },
        {
          name: "Thomas Anderson",
          location: "Residential Client",
          rating: 5,
          text: "The shade garden A-Z created under our mature trees has transformed a previously unused area into our favorite peaceful retreat. The plant selection is perfect for the conditions.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between native plants and non-native plants?",
          answer:
            "Native plants are species that naturally occur in your region and have evolved with local climate, soil, and wildlife. They typically require less water, fertilizer, and pest control while providing better habitat for local wildlife. Non-native plants may offer different aesthetic options but often require more maintenance and resources.",
        },
        {
          question: "When is the best time to plant new gardens?",
          answer:
            "Spring and fall are generally the best planting seasons. Spring planting allows plants to establish before summer heat, while fall planting takes advantage of cooler temperatures and natural rainfall. We can advise on the best timing for specific plants and your local climate conditions.",
        },
        {
          question: "How do you choose plants for different site conditions?",
          answer:
            "We consider multiple factors including sun exposure, soil type, drainage, mature plant size, bloom time, and maintenance requirements. We also factor in your aesthetic preferences, wildlife goals, and long-term garden vision to create the perfect plant palette for each area.",
        },
        {
          question: "Do you provide ongoing garden maintenance services?",
          answer:
            "Yes, we offer comprehensive maintenance services including pruning, fertilizing, pest management, seasonal cleanup, and plant replacement. We can create a custom maintenance plan based on your garden's specific needs and your preferences.",
        },
        {
          question: "Can you create gardens that attract specific wildlife like butterflies or birds?",
          answer:
            "We specialize in creating habitat gardens that attract butterflies, birds, bees, and other beneficial wildlife. This involves selecting plants that provide nectar, seeds, nesting sites, and host plants for different species throughout their life cycles.",
        },
      ]}
      relatedServices={[
        {
          title: "Lawn Care & Maintenance",
          slug: "lawn-care-maintenance",
        },
        {
          title: "Irrigation Systems",
          slug: "irrigation-systems",
        },
        {
          title: "Seasonal Services",
          slug: "seasonal-services",
        },
      ]}
    />
  )
}
