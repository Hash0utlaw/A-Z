import ServicePageTemplate from "@/components/service-page-template"

export default function IrrigationSystemsPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Irrigation Systems"
      description="Efficient sprinkler and drip irrigation systems designed to keep your landscape properly watered while conserving water and saving you time."
      heroImage="/irrigation-systems/hero.png"
      benefits={[
        "Save time with automated watering of your lawn and garden",
        "Reduce water usage with efficient, targeted irrigation",
        "Maintain healthier plants with consistent, proper watering",
        "Prevent over or under-watering that can damage your landscape",
        "Add value to your property with a professional irrigation system",
        "Customize zones based on different plant water requirements",
      ]}
      process={[
        {
          title: "Site Assessment",
          description:
            "We evaluate your property's layout, soil conditions, plant types, sun exposure, and water pressure to design an optimal system.",
        },
        {
          title: "Custom Design",
          description:
            "Our irrigation specialists create a tailored design with appropriate zones, head types, and coverage for your specific landscape needs.",
        },
        {
          title: "System Proposal",
          description:
            "We provide a detailed proposal outlining the recommended system, components, installation process, and cost.",
        },
        {
          title: "Professional Installation",
          description:
            "Our experienced team installs your irrigation system with minimal disruption to your existing landscape.",
        },
        {
          title: "Programming & Adjustment",
          description:
            "We program your controller for optimal watering schedules and fine-tune all components for proper coverage and efficiency.",
        },
        {
          title: "System Demonstration",
          description:
            "We show you how to operate your new system and provide maintenance recommendations to ensure long-term performance.",
        },
      ]}
      gallery={[
        {
          image: "/irrigation-systems/lawn-sprinklers.png",
          title: "Lawn Sprinkler System",
          description: "Properly spaced sprinkler heads providing even coverage",
        },
        {
          image: "/irrigation-systems/drip-irrigation.png",
          title: "Drip Irrigation",
          description: "Water-efficient drip irrigation for garden beds and plantings",
        },
        {
          image: "/irrigation-systems/smart-controller.png",
          title: "Smart Controller Installation",
          description: "Weather-based smart controller for automated adjustments",
        },
        {
          image: "/irrigation-systems/commercial-irrigation.png",
          title: "Commercial Irrigation",
          description: "Large-scale commercial property irrigation system",
        },
        {
          image: "/irrigation-systems/system-maintenance.png",
          title: "System Maintenance",
          description: "Professional seasonal maintenance and adjustments",
        },
        {
          image: "/irrigation-systems/irrigation-retrofit.png",
          title: "Irrigation Retrofit",
          description: "Upgrading existing systems with water-saving technology",
        },
      ]}
      testimonials={[
        {
          name: "Jason & Emily Wilson",
          location: "Residential Clients",
          rating: 5,
          text: "A-Z installed our irrigation system three years ago, and it's been flawless. Our lawn stays green with minimal water usage, and the seasonal maintenance keeps everything running perfectly.",
        },
        {
          name: "Westside Community HOA",
          location: "Commercial Client",
          rating: 5,
          text: "The smart irrigation system A-Z designed for our community common areas has reduced our water bills by 30% while keeping the landscaping looking better than ever.",
        },
        {
          name: "Sandra Phillips",
          location: "Residential Client",
          rating: 5,
          text: "The drip irrigation system for my garden beds has been a game-changer. My plants are thriving, I'm using less water, and I love not having to drag hoses around anymore!",
        },
      ]}
      faqs={[
        {
          question: "How much water can an irrigation system save?",
          answer:
            "A properly designed and maintained irrigation system can reduce water usage by 30-50% compared to manual watering. Smart controllers that adjust based on weather conditions, rain sensors that prevent watering during rainfall, and efficient head design all contribute to significant water savings while maintaining a healthy landscape.",
        },
        {
          question: "What's the difference between sprinkler and drip irrigation?",
          answer:
            "Sprinkler systems distribute water over a larger area and are ideal for lawns and large planting beds. Drip irrigation delivers water directly to plant roots at a slow rate, minimizing evaporation and runoff. It's perfect for gardens, shrubs, trees, and container plants. Many properties benefit from a combination of both systems for different areas.",
        },
        {
          question: "How long does an irrigation system installation take?",
          answer:
            "Installation time varies based on property size and system complexity. A typical residential installation takes 1-3 days. Larger properties or more complex systems may take longer. We work efficiently to minimize disruption to your landscape and daily activities.",
        },
        {
          question: "What maintenance does an irrigation system require?",
          answer:
            "Regular maintenance includes seasonal start-ups in spring, mid-season checks, and winterization in colder climates. We recommend professional inspections 2-3 times per year to check for leaks, adjust heads, clean filters, and optimize programming. Proper maintenance extends system life and ensures efficient operation.",
        },
        {
          question: "Can you upgrade my existing irrigation system?",
          answer:
            "Yes, we specialize in irrigation system upgrades and retrofits. Common upgrades include adding smart controllers, installing rain sensors, replacing inefficient heads with water-saving models, converting spray zones to drip irrigation, and fixing coverage issues. We can assess your current system and recommend targeted improvements.",
        },
      ]}
      relatedServices={[
        {
          title: "Lawn Care & Maintenance",
          slug: "lawn-care-maintenance",
        },
        {
          title: "Garden Design & Planting",
          slug: "garden-design-planting",
        },
        {
          title: "Seasonal Services",
          slug: "seasonal-services",
        },
      ]}
    />
  )
}
