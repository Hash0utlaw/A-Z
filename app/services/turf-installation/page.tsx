import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Services | A-Z Landscapes",
  description:
    "A-Z Landscapes offers expert artificial turf installation for low-maintenance lawns, pet areas, and putting greens. Durable and realistic solutions.",
}

const turfInstallationData = {
  category: "landscaping" as const,
  title: "Professional Turf Installation",
  description:
    "Achieve a perfect, low-maintenance lawn with our professional artificial turf installation. Ideal for pet owners, busy families, challenging shady areas, or creating specialized spaces like putting greens.",
  heroImage: "/turf-installation/hero.png",
  benefits: [
    "Virtually no maintenance: no mowing, watering, or fertilizing.",
    "Perfect for pets: durable, easy to clean, and resistant to digging/stains.",
    "Solves problem areas: thrives in shade or hard-to-grow spots.",
    "Ideal for specific uses: putting greens, play areas, pool surrounds.",
    "Conserves water and eliminates need for pesticides/herbicides.",
    "Stays green and beautiful year-round, regardless of weather.",
  ],
  process: [
    {
      title: "Site Assessment & Consultation",
      description:
        "We evaluate your property's drainage, usage goals, and discuss the best turf options for your needs.",
    },
    {
      title: "Site Preparation",
      description:
        "We remove existing vegetation, grade the area properly, and install a compacted base material to create a stable and permeable foundation.",
    },
    {
      title: "Turf Selection & Layout",
      description:
        "We help you choose from various artificial turf options, considering texture, color, and pile height, then lay it out with precision.",
    },
    {
      title: "Seaming & Securing",
      description:
        "Our experienced team carefully seams sections together for an invisible transition and secures the perimeter for a durable, long-lasting installation.",
    },
    {
      title: "Infill & Final Grooming",
      description:
        "We apply infill to help the blades stand up, add ballast, and protect the backing. A final grooming ensures a perfect, natural look.",
    },
  ],
  gallery: [
    {
      image: "/user-uploads/completed-artificial-turf-pool-landscape-design.jpeg",
      title: "Poolside Artificial Turf",
      description: "Vibrant artificial turf perfectly complementing a poolside landscape design.",
    },
    {
      image: "/turf-installation/artificial-turf.png",
      title: "Backyard Play Area",
      description: "Low-maintenance artificial turf installation for a family backyard play area.",
    },
    {
      image: "/turf-installation/sports-turf.png",
      title: "Personal Putting Green",
      description: "Specialized sports turf installation for a residential putting green.",
    },
    {
      image: "/turf-installation/commercial-turf.png",
      title: "Commercial Turf Installation",
      description: "Large-scale turf installation for a clean, professional commercial property entrance.",
    },
    {
      image: "/turf-installation/drought-resistant.png",
      title: "Drought-Resistant Solution",
      description: "A water-wise turf variety for an environmentally conscious homeowner.",
    },
    {
      image: "/turf-installation/sod-installation.png",
      title: "Lush Sod Alternative",
      description: "Artificial turf provides an instant, perfect lawn without the needs of traditional sod.",
    },
  ],
  testimonials: [
    {
      name: "Sarah Williams",
      location: "Chatham, IL",
      rating: 5,
      text: "We opted for artificial turf in our backyard due to shade issues and our dogs, and we couldn't be happier. It looks incredibly realistic, drains perfectly, and has eliminated mud and brown spots. Worth every penny!",
    },
    {
      name: "The Davis Family",
      location: "Springfield, IL",
      rating: 5,
      text: "The putting green A-Z installed is amazing! The quality is top-notch and the installation was fast and professional. It's the highlight of our backyard.",
    },
  ],
  faqs: [
    {
      question: "How much maintenance does artificial turf require?",
      answer:
        "Artificial turf requires minimal maintenance. Regular tasks include occasional rinsing to remove dust and debris, brushing high-traffic areas to keep fibers upright, and removing leaves. No mowing, watering, or fertilizing is needed.",
    },
    {
      question: "Is artificial turf safe for pets and children?",
      answer:
        "Yes, our artificial turf products are non-toxic and lead-free, making them perfectly safe for both pets and children. They also provide a soft, cushioned surface for play.",
    },
    {
      question: "How long will my new turf last?",
      answer:
        "High-quality artificial turf, when properly installed and maintained, can last 15-20 years or more. Manufacturer warranties typically cover color fading and material degradation for 8-15 years.",
    },
    {
      question: "How does artificial turf handle drainage?",
      answer:
        "Our turf products have a perforated backing that allows water to drain through. We also prepare a permeable base underneath, ensuring that rainwater and pet urine drain away efficiently, preventing puddles and odors.",
    },
  ],
  relatedServices: [
    { title: "Garden Design & Planting", slug: "garden-design-planting" },
    { title: "Patios & Walkways", slug: "patios-walkways" },
    { title: "Drainage Solutions", slug: "irrigation-systems" },
  ],
}

export default function TurfInstallationPage() {
  return <ServicePageTemplate {...turfInstallationData} />
}
