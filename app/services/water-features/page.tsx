import ServicePageTemplate from "@/components/service-page-template"

export default function WaterFeaturesPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Water Features"
      description="Add tranquility, beauty, and natural ambiance to your landscape with custom water features including fountains, ponds, waterfalls, and streams."
      heroImage="/water-features/hero.png"
      benefits={[
        "Create a soothing, peaceful ambiance with the sound of flowing water",
        "Add a stunning focal point to your landscape design",
        "Increase property value with professionally designed water features",
        "Attract birds and beneficial wildlife to your garden",
        "Mask unwanted noise with the pleasant sound of moving water",
        "Enjoy the therapeutic benefits of water elements in your outdoor space",
      ]}
      process={[
        {
          title: "Design Consultation",
          description:
            "We discuss your vision, preferences, and how a water feature can enhance your specific landscape.",
        },
        {
          title: "Site Assessment",
          description:
            "Our experts evaluate your property to determine the ideal location and type of water feature for your space.",
        },
        {
          title: "Feature Design",
          description:
            "We create a custom design that integrates your water feature naturally with your existing landscape.",
        },
        {
          title: "Material Selection",
          description:
            "We help you select appropriate materials, equipment, and plantings to achieve your desired aesthetic.",
        },
        {
          title: "Professional Installation",
          description:
            "Our skilled team handles all aspects of installation, from excavation to plumbing, electrical, and finishing touches.",
        },
        {
          title: "System Testing",
          description:
            "We thoroughly test all components, make adjustments, and provide instructions for maintenance and operation.",
        },
      ]}
      gallery={[
        {
          image: "/water-features/garden-fountain.png",
          title: "Formal Garden Fountain",
          description: "Elegant multi-tiered fountain as a garden centerpiece",
        },
        {
          image: "/water-features/natural-pond.png",
          title: "Natural Pond",
          description: "Naturalistic pond with aquatic plants and stone edging",
        },
        {
          image: "/water-features/waterfall.png",
          title: "Cascading Waterfall",
          description: "Custom stone waterfall integrated into landscape slope",
        },
        {
          image: "/water-features/pondless-waterfall.png",
          title: "Pondless Water Feature",
          description: "Low-maintenance pondless waterfall with recirculating system",
        },
        {
          image: "/water-features/water-wall.png",
          title: "Contemporary Water Wall",
          description: "Modern water wall feature with LED lighting",
        },
        {
          image: "/water-features/koi-pond.png",
          title: "Koi Pond",
          description: "Ecosystem pond with fish, plants, and filtration system",
        },
      ]}
      testimonials={[
        {
          name: "Jennifer & Mark Stevens",
          location: "Residential Clients",
          rating: 5,
          text: "The pondless waterfall A-Z designed for our backyard has transformed our outdoor space. The sound of flowing water is so relaxing, and we love how it looks both natural and sophisticated.",
        },
        {
          name: "Oakridge Medical Center",
          location: "Commercial Client",
          rating: 5,
          text: "A-Z installed a stunning fountain in our entrance courtyard that has become a favorite spot for patients and staff alike. The soothing sound creates a welcoming atmosphere for our facility.",
        },
        {
          name: "The Williamson Family",
          location: "Residential Clients",
          rating: 5,
          text: "Our ecosystem pond from A-Z is better than we ever imagined. It's become the focal point of our backyard and brings us joy every day watching the fish and wildlife it attracts.",
        },
      ]}
      faqs={[
        {
          question: "What types of water features do you offer?",
          answer:
            "We design and install a wide range of water features including traditional fountains, natural and formal ponds, waterfalls, streams, pondless water features, water gardens, reflection pools, bubbling urns, water walls, and custom designs. Each feature is tailored to your space, preferences, and maintenance requirements.",
        },
        {
          question: "How much maintenance do water features require?",
          answer:
            "Maintenance requirements vary by feature type. Pondless features require minimal maintenance, while ponds with fish and plants need more regular attention. Basic maintenance includes clearing debris, occasional cleaning, equipment checks, and seasonal care. We provide detailed maintenance instructions and offer maintenance services for all types of water features we install.",
        },
        {
          question: "Can water features be used year-round in cold climates?",
          answer:
            "Many water features can operate year-round with proper winterization. Pondless features can often run during winter, creating beautiful ice formations. Ponds with fish require special consideration including appropriate depth and possibly a heater or aerator. Some features may need to be drained for winter. We design with your climate in mind and provide seasonal care instructions.",
        },
        {
          question: "How much does a water feature cost to operate?",
          answer:
            "Modern water features use energy-efficient pumps that typically cost $10-30 per month in electricity depending on size and runtime. We select appropriately sized equipment and can incorporate timers to reduce operating costs. Water usage is minimal for most features as they recirculate water, with only occasional topping off needed due to evaporation.",
        },
        {
          question: "Are water features safe for children and pets?",
          answer:
            "Safety is a priority in our water feature designs. For families with small children or pets, we often recommend pondless features that have no standing water. When designing ponds, we can incorporate shallow edges, gradual depth changes, and barrier plantings. We discuss safety considerations during the design process to ensure your water feature is appropriate for your household.",
        },
      ]}
      relatedServices={[
        {
          title: "Patios & Walkways",
          slug: "patios-walkways",
        },
        {
          title: "Garden Design & Planting",
          slug: "garden-design-planting",
        },
        {
          title: "Landscape Lighting",
          slug: "landscape-lighting",
        },
      ]}
    />
  )
}
