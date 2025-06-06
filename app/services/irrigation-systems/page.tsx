import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Irrigation & Drainage Solutions | A-Z Landscapes",
  description:
    "A-Z Landscapes offers expert irrigation system installation, maintenance, and drainage solutions (French drains, culverts) for healthy landscapes.",
}

export default function IrrigationSystemsPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Irrigation & Drainage Solutions"
      description="A-Z Landscapes provides expert irrigation system installation and maintenance, alongside comprehensive drainage solutions like French drains and culverts, to ensure a healthy landscape and protect your property from water damage."
      heroImage="/irrigation-systems/hero.png"
      benefits={[
        "Maintain a lush, healthy lawn and garden with efficient, automated watering.",
        "Conserve water and reduce utility bills with smart irrigation technology.",
        "Prevent plant loss due to over or under-watering.",
        "Protect your home's foundation and landscape from water damage with effective drainage.",
        "Customized solutions for city water, lake water sources (well systems facilitated via partners).",
        "Expert installation of French drains, culverts, and other drainage systems.",
      ]}
      process={[
        {
          title: "Site Assessment & Water Source Evaluation",
          description:
            "We analyze your property's layout, soil, plant types, sun exposure, and water source (city, lake, well) to design an optimal irrigation and/or drainage plan. For wells, we coordinate with specialized companies.",
        },
        {
          title: "Custom Irrigation System Design",
          description:
            "Our specialists create a tailored irrigation plan with appropriate zones, sprinkler heads (for lawns) or drip lines (for beds), and smart controllers for efficiency.",
        },
        {
          title: "Drainage System Design & Planning",
          description:
            "If drainage issues are present or anticipated (especially with new construction), we design solutions like French drains, tying in downspouts, and proper grading to manage water flow effectively.",
        },
        {
          title: "Professional Installation",
          description:
            "Our experienced team installs your irrigation and/or drainage systems with minimal disruption, using quality materials like corrugated pipe, PVC, or double-wall pipes for durability.",
        },
        {
          title: "System Programming, Testing & Adjustments",
          description:
            "We program irrigation controllers for optimal schedules, test all components, and make fine-tune adjustments for coverage and efficiency. Drainage systems are tested for proper flow.",
        },
        {
          title: "Client Demonstration & Maintenance Guidance",
          description:
            "We show you how to operate your new system(s) and provide recommendations for ongoing maintenance to ensure long-term performance. We also offer full-service irrigation maintenance.",
        },
      ]}
      galleryTitle="Irrigation & Drainage Examples"
      gallery={[
        {
          image: "/irrigation-systems/lawn-sprinklers.png",
          title: "Efficient Lawn Sprinklers",
          description: "Evenly spaced sprinklers ensuring complete lawn coverage.",
        },
        {
          image: "/irrigation-systems/drip-irrigation.png",
          title: "Targeted Drip Irrigation",
          description: "Water-wise drip systems for garden beds and specific plantings.",
        },
        {
          image: "/irrigation-systems/smart-controller.png",
          title: "Smart Irrigation Controller",
          description: "Weather-based controllers for automated water savings.",
        },
        {
          image: "/french-drain-installation.png",
          title: "French Drain System",
          description: "Installation of a French drain to manage excess groundwater.",
        },
        {
          image: "/downspout-drainage-tie-in.png",
          title: "Downspout Drainage Solution",
          description: "Gutter downspouts tied into an underground drainage system.",
        },
        {
          image: "/irrigation-systems/system-maintenance.png",
          title: "Irrigation System Maintenance",
          description: "Professional seasonal checks and adjustments for optimal performance.",
        },
      ]}
      testimonials={[
        {
          name: "Jason & Emily W.",
          rating: 5,
          text: "A-Z Landscapes installed our irrigation, and it's been flawless. Our lawn is green, and we're using less water!",
        },
        {
          name: "Westside HOA",
          rating: 5,
          text: "The smart irrigation system has significantly cut our water bills while keeping our community landscaping beautiful.",
        },
        {
          name: "Sandra P.",
          rating: 5,
          text: "The French drain they installed solved our soggy backyard problem completely. Very professional and effective.",
        },
      ]}
      faqs={[
        {
          question: "What types of drainage solutions do you offer?",
          answer:
            "We offer various drainage solutions including French drains, surface drains, catch basins, and tying in gutter downspouts to underground piping to carry water away from your home and landscape. The best solution depends on your specific issue.",
        },
        {
          question: "Why is proper drainage important?",
          answer:
            "Proper drainage prevents water from pooling around your home's foundation, which can cause structural damage. It also prevents soil erosion, soggy lawns, and unhealthy plant conditions. As we say, 'water is not your friend' when it's uncontrolled.",
        },
        {
          question: "Do you install irrigation for well water systems?",
          answer:
            "While we can design and install the irrigation system itself, for connecting to a well, we typically partner with a specialized well company as it can be complex. We manage the overall project for you.",
        },
        {
          question: "Can you maintain my existing irrigation system?",
          answer:
            "Yes, we offer full-service irrigation maintenance, including spring start-ups, mid-season checks, adjustments, repairs, and winterization to keep your system running efficiently.",
        },
        {
          question: "What is the difference between sprinkler and drip irrigation?",
          answer:
            "Sprinkler systems are best for covering larger areas like lawns. Drip irrigation delivers water slowly and directly to the roots of individual plants, ideal for garden beds, shrubs, and trees, and is very water-efficient.",
        },
      ]}
      relatedServices={[
        { title: "Lawn Care & Maintenance", slug: "lawn-care-maintenance" },
        { title: "Landscape Design & Planting", slug: "garden-design-planting" },
        { title: "Grading & Site Preparation", slug: "seasonal-services" }, // Assuming grading is part of seasonal
      ]}
    />
  )
}
