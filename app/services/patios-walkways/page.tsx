import type { Metadata } from "next"
import ServicePageTemplate from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Patios & Walkways Design & Installation | A-Z Landscapes",
  description:
    "A-Z Landscapes designs and installs beautiful, durable patios and walkways using pavers, natural stone, and concrete. Create your ideal outdoor living area.",
}

const patiosWalkwaysData = {
  category: "hardscape" as const,
  title: "Patios & Walkways",
  description:
    "Transform your outdoor areas into a beautiful, functional extension of your home with a custom-designed patio or walkway by A-Z Landscapes. We specialize in creating durable and aesthetically pleasing surfaces that enhance your lifestyle and property value.",
  heroImage: "/patios-walkways/hero.png",
  benefits: [
    "Expands your usable outdoor living and entertainment space.",
    "Significantly increases your property's value and curb appeal.",
    "Offers a wide range of materials, colors, and patterns for a truly custom design.",
    "Provides durable, long-lasting surfaces built to withstand the elements.",
    "Improves accessibility and creates a natural flow throughout your landscape.",
    "Reduces high-maintenance lawn areas, saving you time and effort.",
  ],
  process: [
    {
      title: "1. Consultation & Design",
      description:
        "We start with a detailed consultation to understand your vision. Our design team then creates a custom 3D plan, helping you visualize the layout and select materials.",
    },
    {
      title: "2. Site Preparation & Base Construction",
      description:
        "The longevity of your patio depends on the base. We properly excavate, grade, and install a compacted aggregate base to prevent shifting and settling.",
    },
    {
      title: "3. Meticulous Installation",
      description:
        "Our skilled craftsmen meticulously install your chosen materials, whether it's an intricate paver pattern or elegant natural stone, ensuring clean lines and professional quality.",
    },
    {
      title: "4. Jointing & Finishing",
      description:
        "We complete the project by installing edge restraints, sweeping polymeric sand into the joints to lock pavers in place, and cleaning the surface.",
    },
    {
      title: "5. Final Walkthrough & Care Instructions",
      description:
        "We conduct a final walkthrough to ensure your complete satisfaction and provide guidance on how to care for your new patio or walkway to keep it looking its best.",
    },
  ],
  gallery: [
    {
      image: "/user-uploads/decorative-concrete-outdoor-living-space.jpeg",
      title: "Lakeside Paver Patio",
      description: "A beautiful paver patio designed to maximize views and enjoyment of a lakeside property.",
    },
    {
      image: "/patios-walkways/stone-walkway.png",
      title: "Natural Stone Walkway",
      description: "Elegant natural stone walkway meandering through a garden.",
    },
    {
      image: "/patios-walkways/stamped-concrete.png",
      title: "Stamped Concrete Patio",
      description: "Versatile stamped concrete patio offering various patterns and colors.",
    },
    {
      image: "/patios-walkways/brick-entrance.png",
      title: "Classic Brick Entrance",
      description: "Timeless brick walkway leading to a welcoming home entrance.",
    },
    {
      image: "/patios-walkways/flagstone-patio.png",
      title: "Rustic Flagstone Patio",
      description: "Charming flagstone patio creating a natural, rustic outdoor space.",
    },
    {
      image: "/user-uploads/backyard-patio-fire-pit-outdoor-kitchen-evening.jpeg",
      title: "Expansive Paver Patio",
      description: "A large, multi-zone paver patio with areas for dining, cooking, and relaxing by the fire.",
    },
  ],
  testimonials: [
    {
      name: "Sarah L.",
      location: "Springfield, IL",
      rating: 5,
      text: "A-Z Landscapes transformed our backyard with a stunning paver patio. The craftsmanship is top-notch, and the team was professional throughout the entire process. We love our new outdoor space!",
    },
    {
      name: "John B.",
      location: "Chatham, IL",
      rating: 5,
      text: "The new flagstone walkway they installed is absolutely beautiful and has made such a difference to our front yard's appeal. Highly recommend their services for any hardscaping work.",
    },
  ],
  faqs: [
    {
      question: "What materials do you offer for patios and walkways?",
      answer:
        "We offer a wide variety of materials including interlocking concrete pavers, natural stone (like flagstone and bluestone), traditional bricks, and poured concrete (which can be stamped or colored).",
    },
    {
      question: "How long does a typical patio installation take?",
      answer:
        "The duration depends on the size, complexity, and site conditions. A straightforward walkway might take a few days, while a large, intricate paver patio could take 1-2 weeks. We provide a detailed timeline with our quote.",
    },
    {
      question: "How do I maintain my new paver patio?",
      answer:
        "Maintenance is simple. It generally includes regular sweeping and occasional washing. To keep it looking pristine, we recommend re-applying jointing sand and a protective sealer every 3-5 years.",
    },
    {
      question: "Can you repair my existing, uneven patio?",
      answer:
        "Yes, in many cases we can repair existing paver patios. This often involves lifting the pavers, re-grading and re-compacting the base, and then re-laying the original pavers for a smooth, stable surface.",
    },
  ],
  relatedServices: [
    { title: "Retaining Walls", slug: "retaining-walls" },
    { title: "Landscape Lighting", slug: "landscape-lighting" },
    { title: "Outdoor Kitchens & Fire Features", slug: "outdoor-kitchens-fire-features" },
  ],
}

export default function PatiosWalkwaysPage() {
  return <ServicePageTemplate {...patiosWalkwaysData} />
}
