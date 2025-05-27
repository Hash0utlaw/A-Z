import ServicePageTemplate from "@/components/service-page-template"

export default function LandscapeLightingPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Landscape Lighting"
      description="Enhance your property's beauty, safety, and security with custom landscape lighting designs that highlight architectural features and create ambiance."
      heroImage="/landscape-lighting/hero.png"
      benefits={[
        "Extend your outdoor living hours into the evening",
        "Highlight architectural features and landscape elements",
        "Improve safety along walkways, steps, and entrances",
        "Enhance security around your property",
        "Create ambiance and drama with professional lighting design",
        "Increase property value with energy-efficient LED lighting systems",
      ]}
      process={[
        {
          title: "Lighting Consultation",
          description:
            "We discuss your goals, preferences, and areas you want to highlight or illuminate for safety and security.",
        },
        {
          title: "Nighttime Demonstration",
          description:
            "We conduct an optional nighttime demonstration with portable lights to show the effect of different lighting techniques.",
        },
        {
          title: "Custom Design",
          description:
            "Our lighting designers create a tailored plan selecting fixture types, placement, and lighting techniques for your property.",
        },
        {
          title: "Proposal Review",
          description:
            "We present a detailed proposal with fixture selections, installation plan, and investment required for your approval.",
        },
        {
          title: "Professional Installation",
          description:
            "Our technicians install your lighting system with minimal disruption to your landscape, using proper wiring and connection methods.",
        },
        {
          title: "Final Adjustments",
          description:
            "We make final adjustments at night to ensure perfect positioning and illumination levels for each fixture.",
        },
      ]}
      gallery={[
        {
          image: "/landscape-lighting/architectural-lighting.png",
          title: "Architectural Lighting",
          description: "Highlighting home architecture with well-placed uplighting",
        },
        {
          image: "/landscape-lighting/path-lighting.png",
          title: "Path Lighting",
          description: "Elegant path lighting for safety and ambiance",
        },
        {
          image: "/landscape-lighting/tree-lighting.png",
          title: "Tree & Garden Lighting",
          description: "Dramatic tree lighting and garden illumination",
        },
        {
          image: "/landscape-lighting/water-lighting.png",
          title: "Water Feature Lighting",
          description: "Submersible lighting for ponds and water features",
        },
        {
          image: "/landscape-lighting/deck-lighting.png",
          title: "Deck & Patio Lighting",
          description: "Subtle lighting for outdoor living spaces",
        },
        {
          image: "/landscape-lighting/security-lighting.png",
          title: "Security Lighting",
          description: "Strategic lighting for enhanced property security",
        },
      ]}
      testimonials={[
        {
          name: "Michael & Laura Bennett",
          location: "Residential Clients",
          rating: 5,
          text: "The landscape lighting A-Z designed for our home has transformed how we use our outdoor space. We can now enjoy our patio well into the evening, and the lighting makes our home look spectacular at night.",
        },
        {
          name: "Riverside Restaurant",
          location: "Commercial Client",
          rating: 5,
          text: "A-Z installed lighting throughout our outdoor dining area and garden. Our customers love the ambiance, and it's significantly increased our evening business.",
        },
        {
          name: "The Jacksons",
          location: "Residential Clients",
          rating: 5,
          text: "We were concerned about dark areas around our property for security reasons. A-Z created a lighting plan that addressed all our concerns while still being beautiful and energy-efficient.",
        },
      ]}
      faqs={[
        {
          question: "What types of landscape lighting fixtures do you offer?",
          answer:
            "We offer a complete range of fixtures including path lights, uplights, downlights, wall washes, step lights, underwater lights, and specialty fixtures. We select from high-quality, durable fixtures in various styles, finishes, and light outputs to achieve the desired effect while complementing your landscape and architecture.",
        },
        {
          question: "Do you use LED lighting?",
          answer:
            "Yes, we exclusively use LED lighting for our landscape lighting systems. LED technology offers numerous advantages including energy efficiency (using up to 80% less energy than halogen), longer bulb life (typically 15-20 years), reduced maintenance, and better control over light color and intensity. This results in lower operating costs and reduced environmental impact.",
        },
        {
          question: "How is landscape lighting controlled?",
          answer:
            "Modern landscape lighting systems can be controlled in several ways. Basic systems use astronomical timers that automatically adjust to seasonal daylight changes. More advanced options include smart controllers that allow operation from your smartphone, integration with home automation systems, and programmable scenes for different occasions or areas of your property.",
        },
        {
          question: "What maintenance does landscape lighting require?",
          answer:
            "LED landscape lighting requires minimal maintenance compared to older systems. We recommend an annual check to clean fixtures, trim any encroaching vegetation, check connections, and make any needed adjustments. With proper installation and quality components, most systems operate reliably for many years with only occasional attention.",
        },
        {
          question: "Can you add lighting to my existing landscape?",
          answer:
            "Landscape lighting can be added to established landscapes with minimal disruption. Our installation techniques protect existing plants and hardscapes. We can work around mature trees, established gardens, and existing structures to enhance your current landscape with beautiful lighting effects.",
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
          title: "Outdoor Kitchens & Fire Features",
          slug: "outdoor-kitchens-fire-features",
        },
      ]}
    />
  )
}
