import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"
import { getVerifiedTestimonials } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Pergolas & Gazebos in Huntersville, NC",
  description:
    "Custom pergolas, gazebos, and shade structures by A-Z Landscapes. Enhance your outdoor living space with beautiful and functional designs.",
}

export default function PergolasGazebosPage() {
  return (
    <ServicePageTemplate
      category="hardscape"
      title="Pergolas & Gazebos"
      description="Define your outdoor living space with custom pergolas, gazebos, and shade structures that combine beauty and functionality."
      heroImage="/pergolas-gazebos/Commerical-gazebo-hero.jpeg"
      benefits={[
        "Create defined outdoor living and entertaining spaces",
        "Add architectural interest and vertical elements to your landscape",
        "Provide shade and protection from sun and light rain",
        "Increase usable outdoor time during hot summer months",
        "Enhance property value with high-quality outdoor structures",
        "Customize with features like climbing plants, curtains, lighting, and more",
      ]}
      process={[
        {
          title: "Design Consultation",
          description:
            "We discuss your goals, preferences, and how an outdoor structure can enhance your lifestyle and landscape.",
        },
        {
          title: "Site Planning",
          description:
            "Our team evaluates your property to determine the ideal location, size, and orientation for your structure.",
        },
        {
          title: "Custom Design",
          description:
            "We create a tailored design that complements your home's architecture and fits your specific needs.",
        },
        {
          title: "Material Selection",
          description:
            "We help you choose the best materials based on aesthetics, durability, maintenance requirements, and budget.",
        },
        {
          title: "Professional Construction",
          description: "Our skilled craftsmen build your structure with attention to detail and quality craftsmanship.",
        },
        {
          title: "Final Touches",
          description:
            "We complete your project with any additional features like lighting, fans, or custom elements you've selected.",
        },
      ]}
      gallery={[
        {
          image: "/pergolas-gazebos/cedar-pergola.png",
          title: "Cedar Pergola",
          description: "Custom cedar pergola with stone columns and integrated lighting",
        },
        {
          image: "/pergolas-gazebos/traditional-gazebo.png",
          title: "Traditional Gazebo",
          description: "Octagonal gazebo with decorative railings and copper roof",
        },
        {
          image: "/pergolas-gazebos/modern-pergola.png",
          title: "Modern Pergola",
          description: "Contemporary aluminum pergola with adjustable louvers",
        },
        {
          image: "/pergolas-gazebos/poolside-cabana.png",
          title: "Poolside Cabana",
          description: "Poolside shade structure with curtains and outdoor kitchen",
        },
        {
          image: "/pergolas-gazebos/garden-arbor.png",
          title: "Garden Arbor",
          description: "Decorative garden arbor with climbing roses and seating",
        },
        {
          image: "/pergolas-gazebos/attached-pergola.png",
          title: "Attached Pergola",
          description: "Home-attached pergola creating an outdoor room extension",
        },
      ]}
      testimonials={getVerifiedTestimonials("pergolas-gazebos")}
      faqs={[
        {
          question: "What's the difference between a pergola and a gazebo?",
          answer:
            "Pergolas typically feature an open-roof design with beams and rafters that provide filtered shade while allowing some sunlight through. They can be freestanding or attached to a house. Gazebos are fully roofed structures, usually octagonal or round, that provide complete protection from sun and light rain. They typically stand alone in the landscape as a destination point.",
        },
        {
          question: "What materials are best for outdoor structures?",
          answer:
            "We offer structures in several materials, each with unique benefits. Cedar and redwood provide natural beauty and weather resistance. Pressure-treated pine offers durability at a lower cost. Composite and vinyl materials require minimal maintenance. Aluminum and fiberglass options provide modern aesthetics and exceptional longevity. We'll discuss the pros and cons of each during your consultation.",
        },
        {
          question: "Do I need a permit to build a pergola or gazebo?",
          answer:
            "Permit requirements vary by location. Many municipalities require permits for structures over a certain size or attached to the home. As part of our service, we research local building codes, obtain necessary permits, and ensure your structure meets all requirements. This gives you peace of mind that your installation is properly documented and compliant.",
        },
        {
          question: "What customization options are available?",
          answer:
            "Our structures can be customized in countless ways. Options include integrated lighting, ceiling fans, outdoor speakers, privacy screens, retractable canopies, curtains, climbing plant supports, built-in seating, and decorative elements. We can design your structure to complement your home's architecture and reflect your personal style.",
        },
        {
          question: "How long will it take to build my structure?",
          answer:
            "The timeline varies based on complexity and size. A standard pergola typically takes 2-3 days to construct once materials are on site. Larger or more complex structures like custom gazebos may take 1-2 weeks. The entire process from design to completion typically spans 3-6 weeks, depending on material availability and permitting timelines.",
        },
      ]}
      relatedServices={[
        {
          title: "Patios & Walkways",
          slug: "patios-walkways",
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
