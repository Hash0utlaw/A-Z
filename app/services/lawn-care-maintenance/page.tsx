import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lawn Care & Full-Service Maintenance | A-Z Landscapes",
  description:
    "A-Z Landscapes provides comprehensive lawn care and landscape maintenance. Mowing, fertilization, weed control, seasonal cleanups. Reliable service.",
}

export default function LawnCareMaintenancePage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Lawn Care & Full-Service Maintenance"
      description="Comprehensive year-round care to keep your lawn and landscape healthy, green, and immaculate. We offer tailored maintenance packages, from weekly mowing and fertilization to seasonal cleanups and proactive property care."
      heroImage="/lawn-care-maintenance/hero.png"
      benefits={[
        "Enjoy a consistently beautiful and healthy lawn without the hassle.",
        "Save time and energy with our reliable, professional services.",
        "Benefit from our 7-step fertilization and weed control program for optimal turf health.",
        "Proactive care that identifies and addresses potential issues before they escalate.",
        "Customizable packages: weekly (Mar-Dec) & bi-weekly (Jan-Feb) visits.",
        "Includes mowing, edging, trimming, blowing, and bed weed control.",
        "A la carte options for pruning, mulching, and specialized treatments.",
        "Priority storm cleanup services for maintenance clients.",
      ]}
      process={[
        {
          title: "Initial Consultation & Property Assessment",
          description:
            "We discuss your needs and assess your property to create a tailored maintenance plan. We identify grass types, soil conditions, and any specific challenges.",
        },
        {
          title: "Customized Maintenance Schedule",
          description:
            "Based on 48 visits per year, we establish a weekly (growing season) or bi-weekly (winter) schedule. This includes mowing, edging, trimming, and blowing.",
        },
        {
          title: "Turf Health Program",
          description:
            "Implementation of our 7-application fertilization and weed control program, using organic options where possible, to ensure a lush, healthy lawn.",
        },
        {
          title: "Ongoing Landscape Bed Care",
          description: "Regular weed control in landscape beds to keep them looking neat and tidy.",
        },
        {
          title: "Seasonal Adjustments & A La Carte Services",
          description:
            "Services like pruning and mulching are typically offered as separate, per-service items. We also handle seasonal needs like leaf removal and storm cleanup.",
        },
        {
          title: "Proactive Monitoring & Communication",
          description:
            "Our team proactively looks for ways to improve your property, such as suggesting beneficial pruning or identifying drainage issues. We believe in open communication.",
        },
      ]}
      gallery={[
        {
          image: "/lawn-care-maintenance/lush-lawn.png",
          title: "Lush Green Lawn",
          description: "Perfectly maintained residential lawn with clean edges",
        },
        {
          image: "/lawn-care-maintenance/commercial-property.png",
          title: "Commercial Property Maintenance",
          description: "Well-maintained commercial property with manicured lawn areas",
        },
        {
          image: "/lawn-care-maintenance/lawn-renovation.png",
          title: "Lawn Renovation",
          description: "Before and after of a lawn renovation project",
        },
        {
          image: "/lawn-care-maintenance/fall-cleanup.png",
          title: "Seasonal Cleanup",
          description: "Fall cleanup service with leaf removal and lawn preparation",
        },
        {
          image: "/lawn-care-maintenance/weed-control.png",
          title: "Weed Control Treatment",
          description: "Professional weed control application for a healthier lawn",
        },
        {
          image: "/lawn-care-maintenance/lawn-aeration.png",
          title: "Lawn Aeration",
          description: "Core aeration service to improve soil health and grass growth",
        },
      ]}
      testimonials={[
        {
          name: "David & Lisa T.",
          rating: 5,
          text: "A-Z Landscapes has kept our lawn looking its best for years. Reliable, thorough, and always professional. We've had them for twelve years and wouldn't trust anyone else!",
        },
        {
          name: "Amanda R., HOA Manager",
          rating: 5,
          text: "A-Z Landscapes maintains all common areas in our community impeccably. They are responsive and the quality is outstanding.",
        },
        {
          name: "James W.",
          rating: 5,
          text: "My lawn was a disaster. A-Z Landscapes developed a restoration plan, and now it's the best on the block! Their proactive approach makes a huge difference.",
        },
      ]}
      faqs={[
        {
          question: "What's included in your full-service maintenance?",
          answer:
            "Our full-service packages typically include weekly/bi-weekly mowing, edging, trimming, blowing, bed weed control, and our comprehensive fertilization/weed control program for the turf. Pruning and mulching are usually a la carte but can be incorporated. We tailor packages to your needs.",
        },
        {
          question: "How often will you service my property?",
          answer:
            "During the main growing season (approx. March 1st through New Year's), we provide weekly service. In January and February, service is typically bi-weekly. This totals around 48 visits per year.",
        },
        {
          question: "Do you use organic products?",
          answer:
            "We try to use as much organic material as we can. For example, in our fertilization programs. Currently, a fully organic broadleaf herbicide isn't available, but we are always looking for effective and environmentally conscious options.",
        },
        {
          question: "How do you handle storm cleanup?",
          answer:
            "Our maintenance customers receive priority for storm cleanup. Minor debris removal is often part of the regular service. For significant damage requiring extra equipment or time, we provide a separate estimate.",
        },
        {
          question: "Can I customize my maintenance package?",
          answer:
            "Absolutely. While we offer comprehensive packages, we understand every property and client has unique needs. We can customize services like pruning and mulching frequency, or focus on specific areas.",
        },
      ]}
      relatedServices={[
        { title: "Landscape Design & Planting", slug: "garden-design-planting" },
        { title: "Irrigation & Drainage", slug: "irrigation-systems" },
        { title: "Seasonal Services & Grading", slug: "seasonal-services" },
      ]}
    />
  )
}
