import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Seasonal Landscape Services & Cleanups | A-Z Landscapes",
  description:
    "A-Z Landscapes offers spring/fall cleanups, leaf removal, snow management, and grading services to keep your property pristine year-round.",
}

export default function SeasonalServicesPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Seasonal Services"
      description="Keep your property looking its best year-round with our comprehensive seasonal services including spring cleanup, fall leaf removal, and winter snow management."
      heroImage="/seasonal-services/hero.jpg"
      benefits={[
        "Maintain a well-groomed property throughout all four seasons",
        "Prevent damage to your landscape from seasonal debris and weather conditions",
        "Save time and effort with professional seasonal maintenance",
        "Protect your plants and hardscapes from seasonal stresses",
        "Prepare your landscape for optimal growth and health each season",
        "Enhance curb appeal and property value with consistent care",
      ]}
      process={[
        {
          title: "Seasonal Assessment",
          description:
            "We evaluate your property's specific needs for each season and develop a customized maintenance plan.",
        },
        {
          title: "Service Scheduling",
          description:
            "We schedule seasonal services at optimal times to protect your landscape and prepare for changing conditions.",
        },
        {
          title: "Professional Execution",
          description:
            "Our trained crews perform all seasonal services with attention to detail and care for your property.",
        },
        {
          title: "Debris Management",
          description:
            "We properly handle and dispose of or recycle all seasonal debris in an environmentally responsible manner.",
        },
        {
          title: "Post-Service Inspection",
          description: "After each service, we inspect your property to ensure all work meets our high standards.",
        },
        {
          title: "Ongoing Communication",
          description:
            "We keep you informed about upcoming seasonal needs and any recommendations for your specific landscape.",
        },
      ]}
      gallery={[
        {
          image: "/seasonal-services/spring-cleanup.png",
          title: "Spring Cleanup",
          description: "Comprehensive spring property preparation and garden bed cleanup",
        },
        {
          image: "/seasonal-services/fall-leaves.png",
          title: "Fall Leaf Removal",
          description: "Professional leaf collection and removal services",
        },
        {
          image: "/seasonal-services/snow-removal.png",
          title: "Winter Snow Clearing",
          description: "Prompt snow removal from driveways and walkways",
        },
        {
          image: "/seasonal-services/winterization.png",
          title: "Garden Winterization",
          description: "Proper protection of plants and garden beds for winter",
        },
        {
          image: "/seasonal-services/summer-maintenance.png",
          title: "Summer Maintenance",
          description: "Regular summer maintenance to keep properties looking their best",
        },
        {
          image: "/seasonal-services/seasonal-color.png",
          title: "Seasonal Color Rotation",
          description: "Seasonal flower bed updates for year-round color",
        },
      ]}
      testimonials={[
        {
          name: "The Harrison Family",
          location: "Residential Clients",
          rating: 5,
          text: "A-Z's seasonal services keep our property looking immaculate year-round. Their spring cleanup is particularly impressive - our gardens look perfectly manicured and ready for the growing season.",
        },
        {
          name: "Oakwood Office Park",
          location: "Commercial Client",
          rating: 5,
          text: "We rely on A-Z for all our seasonal property maintenance. Their snow removal service is exceptional - always prompt and thorough, keeping our parking lots and walkways safe for employees and visitors.",
        },
        {
          name: "James & Victoria Elliott",
          location: "Residential Clients",
          rating: 5,
          text: "Fall leaf cleanup used to take us entire weekends. Now A-Z handles it efficiently and thoroughly. They're respectful of our property and always leave everything looking better than we could have done ourselves.",
        },
      ]}
      faqs={[
        {
          question: "What does spring cleanup include?",
          answer:
            "Our spring cleanup service typically includes removing winter debris, cutting back perennials and ornamental grasses, pruning winter damage from shrubs, cleaning out garden beds, applying fresh mulch, lawn dethatching or raking, initial fertilization, and a general property cleanup. We customize the service based on your specific landscape needs.",
        },
        {
          question: "When should fall cleanup be performed?",
          answer:
            "We typically schedule fall cleanups after the majority of leaves have fallen but before the first snowfall. In most regions, this means late October through November. For properties with many trees, we may recommend multiple visits to manage leaves throughout the fall season rather than a single extensive cleanup.",
        },
        {
          question: "What winter services do you offer?",
          answer:
            "Our winter services include snow removal from driveways, walkways, and parking areas; ice management; winter pruning of dormant trees and shrubs; holiday lighting installation and removal; and winter protection for sensitive plants. We offer both on-demand and contract snow removal services to meet different needs.",
        },
        {
          question: "How do you handle seasonal color in the landscape?",
          answer:
            "We offer seasonal color rotations for flower beds and container gardens. This typically includes spring, summer, and fall plantings with appropriate selections for each season. We handle all aspects including design, plant selection, installation, and maintenance to ensure continuous color and interest throughout the growing seasons.",
        },
        {
          question: "Can you create a customized annual maintenance plan for my property?",
          answer:
            "Yes, we specialize in creating comprehensive annual maintenance plans tailored to your specific property and needs. These plans coordinate all seasonal services with appropriate timing and can include everything from routine maintenance to specialized seasonal care. Many clients find that a planned approach ensures nothing is overlooked and provides consistent, professional care year-round.",
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
          title: "Tree Services",
          slug: "tree-services",
        },
      ]}
    />
  )
}
