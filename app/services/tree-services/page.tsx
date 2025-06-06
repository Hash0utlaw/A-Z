import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Tree Care Services | A-Z Landscapes",
  description:
    "Expert tree services from A-Z Landscapes: pruning, removal, planting, and health assessments by certified professionals for healthy, beautiful trees.",
}

export default function TreeServicesPage() {
  return (
    <ServicePageTemplate
      category="landscaping"
      title="Tree Services"
      description="Professional tree care services including pruning, removal, planting, and health assessments to maintain beautiful, healthy trees on your property."
      heroImage="/tree-services/hero.png"
      benefits={[
        "Maintain tree health and appearance with professional pruning techniques",
        "Prevent property damage from diseased or unstable trees",
        "Enhance your landscape with strategic tree placement and selection",
        "Improve safety by removing hazardous limbs and trees",
        "Increase property value with well-maintained, mature trees",
        "Receive expert advice on tree species selection for your specific location",
      ]}
      process={[
        {
          title: "Tree Assessment",
          description:
            "Our certified arborists evaluate your trees' health, structure, and any potential issues or hazards.",
        },
        {
          title: "Service Recommendation",
          description:
            "Based on the assessment, we provide recommendations for pruning, treatment, removal, or planting as needed.",
        },
        {
          title: "Detailed Proposal",
          description:
            "We provide a comprehensive proposal outlining the recommended services, process, timeline, and cost.",
        },
        {
          title: "Scheduled Service",
          description:
            "Our skilled team performs the tree services using proper techniques and equipment for optimal results and safety.",
        },
        {
          title: "Clean-up",
          description:
            "We thoroughly clean up all debris, leaving your property neat and tidy after completing the work.",
        },
        {
          title: "Follow-up Care",
          description:
            "For new plantings or treated trees, we provide care instructions and can schedule follow-up visits as needed.",
        },
      ]}
      gallery={[
        {
          image: "/tree-services/tree-pruning.png",
          title: "Professional Tree Pruning",
          description: "Skilled arborists performing structural pruning on mature trees",
        },
        {
          image: "/tree-services/tree-removal.png",
          title: "Tree Removal",
          description: "Safe removal of damaged or diseased trees in tight spaces",
        },
        {
          image: "/tree-services/tree-planting.png",
          title: "New Tree Planting",
          description: "Installation of new trees with proper staking and initial care",
        },
        {
          image: "/tree-services/tree-treatment.png",
          title: "Tree Health Treatment",
          description: "Application of treatments to improve tree health and resist disease",
        },
        {
          image: "/tree-services/stump-grinding.png",
          title: "Stump Grinding",
          description: "Removal of tree stumps to below ground level",
        },
        {
          image: "/tree-services/emergency-service.png",
          title: "Emergency Tree Service",
          description: "Rapid response to storm damage and hazardous tree situations",
        },
      ]}
      testimonials={[
        {
          name: "Richard & Karen Davis",
          location: "Residential Clients",
          rating: 5,
          text: "A-Z Landscaping did an amazing job pruning our large oak trees. Their arborists were knowledgeable, careful with our property, and the trees look healthier than ever.",
        },
        {
          name: "Linda Martinez",
          location: "Residential Client",
          rating: 5,
          text: "When a storm damaged several trees on our property, A-Z responded quickly and professionally. They removed the hazardous limbs and helped save trees we thought were lost.",
        },
        {
          name: "Community Association Board",
          location: "HOA Client",
          rating: 5,
          text: "We've used A-Z for all our tree care needs for years. Their comprehensive tree management program has improved the health and appearance of all the trees in our community.",
        },
      ]}
      faqs={[
        {
          question: "When is the best time to prune trees?",
          answer:
            "The optimal pruning time depends on the tree species and your goals. Generally, dormant pruning (late winter/early spring) is best for most deciduous trees, while spring-flowering trees should be pruned after they bloom. Hazardous limbs can be removed any time of year. Our arborists will recommend the best timing for your specific trees.",
        },
        {
          question: "How do I know if a tree needs to be removed?",
          answer:
            "Signs that may indicate a tree needs removal include significant trunk damage, large dead branches, leaning, root damage, disease, or fungal growth. However, many issues can be addressed with proper care rather than removal. Our certified arborists can assess your trees and provide professional recommendations based on safety, tree health, and your property needs.",
        },
        {
          question: "What's involved in planting a new tree?",
          answer:
            "Successful tree planting involves selecting the right species for your location, proper placement considering mature size and site conditions, correct planting depth, initial staking if needed, mulching, and establishing a watering schedule. Our team handles all aspects of tree planting to ensure your new trees have the best start possible.",
        },
        {
          question: "Do you provide emergency tree services?",
          answer:
            "Yes, we offer 24/7 emergency response for hazardous tree situations, such as storm damage or fallen trees. Our team is equipped to handle emergency situations safely and efficiently to protect your property from further damage.",
        },
        {
          question: "How often should trees be professionally inspected?",
          answer:
            "We recommend having mature trees inspected by a certified arborist every 3-5 years, or after major storms. Young trees benefit from more frequent inspections as they establish. Regular inspections can identify potential issues before they become serious problems, saving you money and potentially saving the tree.",
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
