import ServicePageTemplate from "@/components/service-page-template"

export default function RetainingWallsPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Retaining Walls"
      description="Create beautiful, functional solutions for sloped properties with our custom retaining walls that prevent erosion, define spaces, and enhance your landscape."
      heroImage="/retaining-walls/hero.png"
      benefits={[
        "Prevent soil erosion and manage sloped terrain",
        "Create usable, level spaces in your landscape",
        "Add visual interest and architectural elements",
        "Increase property value with professional hardscaping",
        "Define garden beds and landscape zones",
        "Solve drainage issues and protect your property",
      ]}
      process={[
        {
          title: "Site Analysis",
          description:
            "We evaluate your property's topography, soil conditions, and drainage patterns to determine the best wall solution.",
        },
        {
          title: "Engineering Assessment",
          description:
            "For larger walls, we ensure proper engineering to guarantee stability, safety, and compliance with local codes.",
        },
        {
          title: "Design Development",
          description:
            "We create a custom design that addresses your functional needs while enhancing your landscape aesthetics.",
        },
        {
          title: "Material Selection",
          description:
            "We help you choose from natural stone, engineered blocks, timber, or other materials based on style and requirements.",
        },
        {
          title: "Professional Construction",
          description:
            "Our skilled team handles excavation, base preparation, drainage installation, and precise wall construction.",
        },
        {
          title: "Landscape Integration",
          description:
            "We complete your project with appropriate plantings, lighting, or other features to integrate the wall into your landscape.",
        },
      ]}
      gallery={[
        {
          image: "/retaining-walls/natural-stone-wall.png",
          title: "Natural Stone Wall",
          description: "Dry-stacked natural stone wall with integrated steps",
        },
        {
          image: "/retaining-walls/block-wall-system.png",
          title: "Engineered Block System",
          description: "Modern engineered block wall with tiered plantings",
        },
        {
          image: "/retaining-walls/terraced-garden.png",
          title: "Terraced Garden Walls",
          description: "Multi-level retaining walls creating garden terraces",
        },
        {
          image: "/retaining-walls/boulder-wall.png",
          title: "Boulder Retaining Wall",
          description: "Natural boulder wall with native plant landscaping",
        },
        {
          image: "/retaining-walls/concrete-wall.png",
          title: "Decorative Concrete Wall",
          description: "Stamped concrete wall with integrated lighting",
        },
        {
          image: "/retaining-walls/timber-wall.png",
          title: "Timber Retaining Wall",
          description: "Pressure-treated timber wall for garden elevation",
        },
      ]}
      testimonials={[
        {
          name: "The Martinez Family",
          location: "Residential Clients",
          rating: 5,
          text: "Our sloped backyard was practically unusable until A-Z installed a beautiful terraced retaining wall system. Now we have flat areas for gardening and a patio where we can actually enjoy our yard!",
        },
        {
          name: "Hillside Community Center",
          location: "Commercial Client",
          rating: 5,
          text: "A-Z Landscaping solved our serious erosion problems with an engineered retaining wall that not only functions perfectly but looks fantastic. Their knowledge of proper drainage was impressive.",
        },
        {
          name: "Robert & Emma",
          location: "Residential Clients",
          rating: 5,
          text: "The natural stone retaining wall A-Z built transformed our front yard. It's become a neighborhood showpiece, and we've received countless compliments on the craftsmanship.",
        },
      ]}
      faqs={[
        {
          question: "Do I need a permit for a retaining wall?",
          answer:
            "Permit requirements vary by location and wall height. Generally, walls over 3-4 feet tall require permits and possibly engineered plans. Even for smaller walls, there may be setback requirements or other regulations. We handle all permitting processes for our clients, ensuring your wall is compliant with local codes and built to proper safety standards.",
        },
        {
          question: "What types of retaining walls do you build?",
          answer:
            "We construct various types of retaining walls including gravity walls (natural stone, boulder, or block), reinforced walls with geogrid for additional stability, cantilevered walls, and segmental retaining walls. Material options include natural stone, manufactured concrete blocks, timber, poured concrete, and gabion baskets. We'll recommend the best system based on your site conditions, aesthetic preferences, and budget.",
        },
        {
          question: "How long will my retaining wall last?",
          answer:
            "A properly designed and constructed retaining wall should last decades. Natural stone walls can last 100+ years, quality concrete block systems 50+ years, and pressure-treated timber walls 20-30 years. The key to longevity is proper design, drainage, construction techniques, and materials. All our walls are built with durability in mind, using industry best practices to ensure a long-lasting structure.",
        },
        {
          question: "How do you handle drainage for retaining walls?",
          answer:
            "Proper drainage is critical for retaining wall performance. We install drainage systems behind all our walls, typically including gravel backfill, filter fabric, and perforated drain pipes. For larger walls, we may incorporate additional drainage features. These systems prevent water pressure buildup behind the wall, which is the most common cause of wall failure. Our drainage solutions are designed specifically for your site's conditions.",
        },
        {
          question: "Can you incorporate steps or lighting into my retaining wall?",
          answer:
            "We often integrate steps, lighting, seating, planters, and other features into our retaining wall designs. These elements not only enhance functionality but also create a more cohesive and attractive landscape. During the design phase, we'll discuss these options and how they might work with your specific project.",
        },
      ]}
      relatedServices={[
        {
          title: "Patios & Walkways",
          slug: "patios-walkways",
        },
        {
          title: "Driveways",
          slug: "driveways",
        },
        {
          title: "Garden Design & Planting",
          slug: "garden-design-planting",
        },
      ]}
    />
  )
}
