import ServicePageTemplate from "@/components/service-page-template"

export default function OutdoorKitchensFireFeaturesPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Outdoor Kitchens & Fire Features"
      description="Extend your living space with custom outdoor kitchens, fire pits, and fireplaces that create the perfect environment for entertaining and relaxation."
      heroImage="/outdoor-kitchens-fire-features/hero.png"
      benefits={[
        "Create a functional outdoor cooking and dining space for entertaining",
        "Extend your outdoor living season with warming fire features",
        "Increase your home's value with high-quality outdoor living amenities",
        "Design custom features that complement your home's architecture and style",
        "Choose from a variety of materials, appliances, and design options",
        "Build durable, weather-resistant features that will last for years",
      ]}
      process={[
        {
          title: "Design Consultation",
          description:
            "We discuss your vision, how you plan to use the space, your entertaining needs, and design preferences.",
        },
        {
          title: "Site Planning",
          description:
            "We evaluate your outdoor space to determine the optimal location and layout for your kitchen or fire feature.",
        },
        {
          title: "Custom Design",
          description:
            "Our designers create detailed plans including layout, materials, appliances, and any special features you desire.",
        },
        {
          title: "Material & Appliance Selection",
          description:
            "We help you select the perfect materials and appliances that balance aesthetics, functionality, and durability.",
        },
        {
          title: "Construction",
          description:
            "Our skilled craftsmen build your outdoor kitchen or fire feature with attention to detail and quality craftsmanship.",
        },
        {
          title: "Final Walkthrough",
          description:
            "We demonstrate how to use and maintain your new outdoor living features and ensure everything meets your expectations.",
        },
      ]}
      gallery={[
        {
          image: "/outdoor-kitchens-fire-features/complete-kitchen.png",
          title: "Complete Outdoor Kitchen",
          description: "Full-featured outdoor kitchen with grill, refrigerator, and bar seating",
        },
        {
          image: "/outdoor-kitchens-fire-features/stone-firepit.png",
          title: "Stone Fire Pit",
          description: "Natural stone fire pit with surrounding patio and seating",
        },
        {
          image: "/outdoor-kitchens-fire-features/outdoor-fireplace.png",
          title: "Outdoor Fireplace",
          description: "Masonry outdoor fireplace with built-in wood storage",
        },
        {
          image: "/outdoor-kitchens-fire-features/pizza-oven.png",
          title: "Pizza Oven Installation",
          description: "Custom outdoor pizza oven with countertop prep space",
        },
        {
          image: "/outdoor-kitchens-fire-features/fire-table.png",
          title: "Modern Fire Table",
          description: "Contemporary gas fire table in outdoor lounge setting",
        },
        {
          image: "/outdoor-kitchens-fire-features/covered-kitchen.png",
          title: "Covered Outdoor Kitchen",
          description: "Pergola-covered outdoor kitchen with lighting and fans",
        },
      ]}
      testimonials={[
        {
          name: "Brian & Jessica Thompson",
          location: "Residential Clients",
          rating: 5,
          text: "Our outdoor kitchen from A-Z Landscaping has completely transformed how we use our backyard. We're entertaining more than ever, and the quality of the construction is outstanding.",
        },
        {
          name: "Daniel Wright",
          location: "Residential Client",
          rating: 5,
          text: "The fire pit area A-Z designed and built has become our family's favorite gathering spot. The stonework is beautiful, and they perfectly integrated it with our existing patio.",
        },
        {
          name: "Michelle & Kevin Barnes",
          location: "Residential Clients",
          rating: 5,
          text: "From design to completion, A-Z made the process of installing our outdoor kitchen seamless. They thought of details we hadn't considered, and the result is both beautiful and functional.",
        },
      ]}
      faqs={[
        {
          question: "What appliances can be included in an outdoor kitchen?",
          answer:
            "Outdoor kitchens can include a wide range of appliances including built-in grills, side burners, refrigerators, ice makers, pizza ovens, smokers, sinks with running water, beverage centers, warming drawers, and storage components. We'll help you select the right appliances based on how you plan to use your outdoor kitchen.",
        },
        {
          question: "What's the difference between a fire pit and a fireplace?",
          answer:
            "Fire pits are typically open on all sides, allowing people to gather around them in a circle. They're great for larger groups and provide a 360-degree view of the fire. Outdoor fireplaces are more architectural, with a chimney and usually open on only one side. They provide more of a focal point, offer better smoke control, and can provide more privacy and wind protection.",
        },
        {
          question: "What materials are best for outdoor kitchens?",
          answer:
            "We use durable, weather-resistant materials specifically designed for outdoor use. Popular options include natural stone, brick, concrete pavers, stucco, and tile for construction, with stainless steel appliances and granite, concrete, or composite countertops. The best choice depends on your design preferences, climate, and budget.",
        },
        {
          question: "Do I need utilities run to my outdoor kitchen or fire feature?",
          answer:
            "Outdoor kitchens typically require gas, water, and electrical connections. Gas fire features need a gas line, while wood-burning features don't require utilities. We coordinate with licensed plumbers and electricians to ensure all utility connections are properly installed and meet local building codes.",
        },
        {
          question: "How much maintenance do outdoor kitchens and fire features require?",
          answer:
            "Maintenance requirements vary based on materials and usage. Generally, outdoor kitchens need regular cleaning of appliances and surfaces, occasional sealing of countertops, and winterizing in cold climates. Fire features require ash removal for wood-burning units and periodic inspection of gas components. We provide detailed maintenance instructions for your specific installation.",
        },
      ]}
      relatedServices={[
        {
          title: "Patios & Walkways",
          slug: "patios-walkways",
        },
        {
          title: "Pergolas & Gazebos",
          slug: "pergolas-gazebos",
        },
        {
          title: "Landscape Lighting",
          slug: "landscape-lighting",
        },
      ]}
    />
  )
}
