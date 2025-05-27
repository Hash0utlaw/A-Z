import ServicePageTemplate from "@/components/service-page-template"

export default function GardenDesignPlantingPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Garden Design & Planting"
      description="Transform your outdoor space with custom garden designs featuring beautiful flower beds, shrubs, and perennial gardens tailored to your property and preferences."
      heroImage="/garden-design-planting/hero.png"
      benefits={[
        "Create beautiful, colorful outdoor spaces that enhance your property's appeal",
        "Design gardens that provide interest and beauty throughout all seasons",
        "Select plants that thrive in your specific soil conditions and climate",
        "Reduce maintenance with proper plant selection and garden design",
        "Increase biodiversity and support local pollinators with native plant options",
        "Improve your property value with professional landscape design",
      ]}
      process={[
        {
          title: "Initial Consultation",
          description:
            "We meet to discuss your vision, preferences, budget, and how you want to use your outdoor space.",
        },
        {
          title: "Site Analysis",
          description:
            "We evaluate your property's soil conditions, sun exposure, drainage patterns, and existing vegetation.",
        },
        {
          title: "Concept Design",
          description:
            "Our designers create a custom garden plan with plant selections, layout, and features tailored to your property.",
        },
        {
          title: "Design Presentation",
          description:
            "We present the design concept with visual representations and plant selections for your review and approval.",
        },
        {
          title: "Installation",
          description:
            "Our skilled team prepares the soil, installs plants according to the design plan, and adds mulch and edging as needed.",
        },
        {
          title: "Care Instructions",
          description:
            "We provide detailed care instructions and can set up a maintenance schedule to ensure your garden thrives.",
        },
      ]}
      gallery={[
        {
          image: "/garden-design-planting/perennial-garden.png",
          title: "Perennial Garden",
          description: "Colorful perennial garden with year-round interest",
        },
        {
          image: "/garden-design-planting/native-plants.png",
          title: "Native Plant Landscape",
          description: "Eco-friendly garden featuring native plants and pollinators",
        },
        {
          image: "/garden-design-planting/formal-garden.png",
          title: "Formal Garden Design",
          description: "Structured formal garden with symmetrical layout and boxwood hedges",
        },
        {
          image: "/garden-design-planting/shade-garden.png",
          title: "Shade Garden",
          description: "Lush shade garden with hostas, ferns, and woodland flowers",
        },
        {
          image: "/garden-design-planting/foundation-planting.png",
          title: "Foundation Planting",
          description: "Attractive foundation plantings enhancing home architecture",
        },
        {
          image: "/garden-design-planting/cottage-garden.png",
          title: "Cottage Garden",
          description: "Informal cottage garden with abundant flowers and herbs",
        },
      ]}
      testimonials={[
        {
          name: "Elizabeth & John Parker",
          location: "Residential Clients",
          rating: 5,
          text: "A-Z Landscaping transformed our boring yard into a stunning garden retreat. Their plant knowledge is impressive, and they created a design that gives us something beautiful to look at in every season.",
        },
        {
          name: "Susan Miller",
          location: "Residential Client",
          rating: 5,
          text: "I wanted a low-maintenance native garden, and A-Z delivered beyond my expectations. The garden attracts so many butterflies and birds now, and it requires minimal care.",
        },
        {
          name: "Robert & Maria Garcia",
          location: "Residential Clients",
          rating: 5,
          text: "The designers at A-Z really listened to what we wanted and created a garden that perfectly suits our lifestyle and home. The installation team was meticulous and left everything spotless.",
        },
      ]}
      faqs={[
        {
          question: "How do you select plants for my garden design?",
          answer:
            "We select plants based on several factors: your site conditions (soil, sun exposure, drainage), your aesthetic preferences, maintenance requirements, and seasonal interest. We also consider how plants will mature and interact with each other over time to create a cohesive, long-lasting garden.",
        },
        {
          question: "Can you design a low-maintenance garden?",
          answer:
            "We specialize in creating beautiful gardens that require minimal maintenance. This involves selecting the right plants for your conditions, proper spacing to reduce pruning needs, effective mulching to minimize weeding, and efficient irrigation systems to reduce watering time.",
        },
        {
          question: "Do you offer eco-friendly or native garden designs?",
          answer:
            "Yes, we're passionate about sustainable landscaping. We can design gardens using native plants that support local wildlife, require less water and maintenance, and thrive naturally in your local environment. These gardens can be just as beautiful as traditional gardens while being more environmentally friendly.",
        },
        {
          question: "What's the best time of year to install a new garden?",
          answer:
            "Spring and fall are generally the best times for planting in most regions, as temperatures are moderate and rainfall is typically adequate. However, with proper care and irrigation, we can install gardens throughout the growing season. For larger projects, we often phase the installation to ensure optimal planting times for different plant types.",
        },
        {
          question: "Do you offer ongoing maintenance for the gardens you design?",
          answer:
            "Yes, we offer comprehensive maintenance services to keep your garden looking its best. This can include seasonal pruning, fertilization, mulching, division of perennials, and ongoing care tailored to your specific garden. Many clients find that professional maintenance, especially in the first few years, helps their garden develop as intended.",
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
          title: "Landscape Lighting",
          slug: "landscape-lighting",
        },
      ]}
    />
  )
}
