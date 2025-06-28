import type { Metadata } from "next"
import ServicePageTemplate from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Water Feature Design & Installation | A-Z Landscapes",
  description:
    "A-Z Landscapes creates beautiful custom water features: ponds, waterfalls, and fountains to add tranquility and elegance to your outdoor space.",
  keywords: [
    "water features",
    "pond installation",
    "waterfall design",
    "garden fountains",
    "custom water features",
    "landscape water elements",
  ],
}

const waterFeatureData = {
  category: "landscaping" as "landscaping" | "hardscape",
  title: "Water Feature Design & Installation",
  description:
    "Transform your outdoor space into a tranquil oasis with our custom water feature design and installation services. From elegant fountains and natural ponds to breathtaking waterfalls, we create stunning focal points that enhance serenity and beauty.",
  heroImage: "/water-features/hero.png",
  benefits: [
    "Creates a calming and relaxing atmosphere in your yard.",
    "Increases property value and aesthetic appeal.",
    "Attracts beneficial wildlife like birds and butterflies.",
    "Masks unwanted noise with soothing sounds of water.",
    "Custom designs tailored to your unique space and style preferences.",
    "Expert installation ensures durable, low-maintenance enjoyment.",
  ],
  process: [
    {
      title: "Consultation & Vision",
      description:
        "We start with a detailed consultation to understand your desires, assess your space, and discuss potential water feature types that fit your landscape and budget.",
    },
    {
      title: "Custom Design & Planning",
      description:
        "Our designers create a tailored water feature plan, considering aesthetics, functionality, and integration with your existing landscape. We provide detailed mockups for your approval.",
    },
    {
      title: "Site Preparation & Excavation",
      description:
        "Our team carefully prepares the site, handling any necessary excavation, grading, and ensuring proper access for plumbing and electrical components.",
    },
    {
      title: "Installation & Construction",
      description:
        "Using high-quality materials and proven techniques, our skilled craftsmen construct your water feature, from laying liners and placing stones to installing pumps and filtration systems.",
    },
    {
      title: "Aquatic Planting & Finishing Touches",
      description:
        "We can incorporate aquatic plants and surrounding landscaping to seamlessly blend your new water feature into its environment, adding natural beauty and character.",
    },
    {
      title: "System Testing & Client Walkthrough",
      description:
        "We thoroughly test the entire system to ensure optimal performance and provide you with a comprehensive walkthrough, including maintenance tips for long-lasting enjoyment.",
    },
  ],
  gallery: [
    {
      image: "/water-features/garden-fountain.png",
      title: "Elegant Garden Fountain",
      description:
        "A classic tiered fountain adding sophistication and a gentle water sound to a formal garden setting.",
    },
    {
      image: "/water-features/natural-pond.png",
      title: "Natural Ecosystem Pond",
      description:
        "A serene, naturalistic pond with aquatic plants and rock edging, creating a haven for local wildlife.",
    },
    {
      image: "/water-features/waterfall.png",
      title: "Custom Rock Waterfall",
      description: "A dynamic multi-tiered waterfall built with natural boulders, cascading into a clear pool.",
    },
    {
      image: "/water-features/pondless-waterfall.png",
      title: "Pondless Waterfall Feature",
      description:
        "Enjoy the sight and sound of a waterfall without the maintenance of a full pond, perfect for smaller spaces.",
    },
    {
      image: "/water-features/water-wall.png",
      title: "Modern Water Wall Design",
      description: "A sleek and contemporary water wall with a smooth cascade, ideal for modern landscape aesthetics.",
    },
    {
      image: "/water-features/koi-pond.png",
      title: "Tranquil Koi Pond",
      description:
        "A beautifully designed, clear koi pond providing a peaceful home for colorful fish, complete with proper filtration.",
    },
  ],
  testimonials: [
    {
      name: "Jennifer S.",
      location: "Maplewood, NJ",
      rating: 5,
      text: "A-Z Landscapes transformed our backyard with a stunning waterfall and pond. It's now our favorite place to relax. The team was incredibly professional and attentive to detail.",
    },
    {
      name: "David R.",
      location: "Summit, NJ",
      rating: 5,
      text: "We wanted a unique fountain for our courtyard, and A-Z delivered beyond our expectations. The craftsmanship is superb, and it's become a real centerpiece.",
    },
    {
      name: "Maria G.",
      location: "Chatham, NJ",
      rating: 4,
      text: "Our pondless waterfall is beautiful and so easy to maintain. The installation was quick and efficient. We get so many compliments!",
    },
  ],
  faqs: [
    {
      question: "How much maintenance does a water feature typically require?",
      answer:
        "Maintenance varies. Pondless waterfalls are very low-maintenance. Ponds require occasional skimming, filter cleaning, and seasonal care. We design for ease of maintenance and provide clear instructions.",
    },
    {
      question: "Can a water feature be installed in a small yard or patio?",
      answer:
        "We specialize in designing water features for all sizes of spaces, including compact bubbling urns, wall fountains, or small pondless waterfalls that can fit beautifully on patios or in small garden areas.",
    },
    {
      question: "What is the typical cost range for installing a water feature?",
      answer:
        "Costs vary widely based on the type, size, complexity, materials, and site conditions. We offer solutions for various budgets and provide detailed, transparent quotes after an initial consultation.",
    },
    {
      question: "How long does it take to install a water feature?",
      answer:
        "Installation time depends on the project's scope. Small features might take a few days, while larger, more complex installations like ponds or extensive waterfalls could take one to two weeks or more.",
    },
  ],
  relatedServices: [
    { title: "Patios & Walkways", slug: "patios-walkways" },
    { title: "Landscape Lighting", slug: "landscape-lighting" },
    { title: "Garden Design & Planting", slug: "garden-design-planting" },
    { title: "Retaining Walls", slug: "retaining-walls" },
  ],
}

const WaterFeaturesPage = () => {
  return <ServicePageTemplate {...waterFeatureData} />
}

export default WaterFeaturesPage
