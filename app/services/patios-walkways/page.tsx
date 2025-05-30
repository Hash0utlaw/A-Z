import ServicePageTemplate from "@/components/service-page-template"

export default function PatiosWalkwaysPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Patios & Walkways"
      description="Transform your outdoor living space with custom-designed patios and walkways that blend beauty, functionality, and durability."
      heroImage="/patios-walkways/hero.png"
      benefits={[
        "Create an inviting outdoor living and entertaining space",
        "Increase your property's value and curb appeal",
        "Reduce lawn maintenance and water usage",
        "Define outdoor spaces and improve landscape flow",
        "Prevent erosion and drainage issues",
        "Enjoy a durable, long-lasting investment in your property",
      ]}
      process={[
        {
          title: "Initial Consultation",
          description: "We discuss your vision, needs, budget, and timeline to understand your project goals.",
        },
        {
          title: "Site Evaluation",
          description: "We assess your property's topography, drainage, soil conditions, and existing features.",
        },
        {
          title: "Design Development",
          description: "Our designers create a custom plan incorporating your preferences and site requirements.",
        },
        {
          title: "Material Selection",
          description:
            "We help you choose the perfect materials that match your aesthetic, durability needs, and budget.",
        },
        {
          title: "Professional Installation",
          description: "Our skilled craftsmen handle all aspects of construction with attention to detail.",
        },
        {
          title: "Final Walkthrough",
          description: "We inspect the completed project together to ensure your complete satisfaction.",
        },
      ]}
      gallery={[
        {
          image: "/patios-walkways/modern-paver-patio.png",
          title: "Modern Paver Patio",
          description: "Contemporary paver patio with outdoor dining furniture",
        },
        {
          image: "/patios-walkways/stone-walkway.png",
          title: "Natural Stone Walkway",
          description: "Curved stone path through lush garden landscape",
        },
        {
          image: "/patios-walkways/stamped-concrete.png",
          title: "Stamped Concrete Patio",
          description: "Decorative stamped concrete with custom pattern and coloring",
        },
        {
          image: "/patios-walkways/brick-entrance.png",
          title: "Brick Entrance Path",
          description: "Classic brick walkway with border plantings",
        },
        {
          image: "/patios-walkways/flagstone-patio.png",
          title: "Flagstone Patio",
          description: "Natural flagstone patio with integrated fire pit",
        },
        {
          image: "/patios-walkways/multi-level-patio.png",
          title: "Multi-Level Design",
          description: "Terraced patio with stone steps and custom railing",
        },
      ]}
      testimonials={[
        {
          name: "The Johnsons",
          location: "Residential Clients",
          rating: 5,
          text: "A-Z Landscapes transformed our backyard with a beautiful paver patio and stone walkways. The attention to detail was impressive, and the space has become our favorite place to entertain.",
        },
        {
          name: "Riverfront Restaurant",
          location: "Commercial Client",
          rating: 5,
          text: "The outdoor dining patio A-Z Landscapes created for our restaurant has significantly increased our seating capacity and customer satisfaction. The design perfectly complements our riverfront location.",
        },
        {
          name: "David & Sarah",
          location: "Residential Clients",
          rating: 5,
          text: "We couldn't be happier with our new flagstone patio and walkways. The A-Z Landscapes team was professional, punctual, and the craftsmanship is outstanding. Worth every penny!",
        },
      ]}
      faqs={[
        {
          question: "What materials do you offer for patios and walkways?",
          answer:
            "We work with a wide range of materials including concrete pavers, natural stone (flagstone, bluestone, limestone, etc.), brick, stamped concrete, gravel, and permeable pavers. Each material has unique aesthetic qualities, durability characteristics, and price points. During our consultation, we'll help you select the best material for your specific project needs and preferences.",
        },
        {
          question: "How long does it take to install a patio or walkway?",
          answer:
            "Project timelines vary based on size, complexity, material choice, and weather conditions. A simple walkway might take 2-3 days, while a large, multi-level patio with special features could take 2-3 weeks. During our consultation, we'll provide a specific timeline for your project. We pride ourselves on efficient work while never compromising on quality.",
        },
        {
          question: "Do patios and walkways require maintenance?",
          answer:
            "All hardscape features benefit from some maintenance, though requirements vary by material. Generally, we recommend periodic cleaning, occasional resealing (for certain materials), joint sand replenishment, and checking for any settling or damage. Many materials require minimal maintenance—one of the benefits of hardscaping over traditional lawns. We provide detailed care instructions for your specific installation.",
        },
        {
          question: "Can you incorporate other features into my patio design?",
          answer:
            "We specialize in creating integrated outdoor living spaces. We can incorporate fire pits, outdoor kitchens, built-in seating, pergolas, water features, lighting, and more into your patio design. These features can transform a simple patio into a complete outdoor room that extends your living space.",
        },
        {
          question: "How do you handle drainage issues with patios and walkways?",
          answer:
            "Proper drainage is critical for any hardscape project. We carefully grade all installations to direct water away from structures and prevent pooling. Depending on your site, we may incorporate French drains, channel drains, permeable pavers, or other drainage solutions. Our designs always consider water management to ensure the longevity of your investment and prevent potential problems.",
        },
      ]}
      relatedServices={[
        {
          title: "Retaining Walls",
          slug: "retaining-walls",
        },
        {
          title: "Outdoor Kitchens & Fire Features",
          slug: "outdoor-kitchens-fire-features",
        },
        {
          title: "Landscape Lighting",
          slug: "landscape-lighting",
        },
      ]}
    />
  )
}
