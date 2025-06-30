import ServicePageTemplate from "@/components/service-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Services | A-Z Landscapes",
  description:
    "Expert artificial turf installation for pristine, low-maintenance lawns, pet areas, and putting greens. Durable, realistic, and professionally installed by A-Z Landscapes.",
}

const turfInstallationData = {
  category: "landscaping" as const,
  title: "Professional Turf Installation",
  description:
    "Achieve a perfect, lush green lawn year-round without the constant maintenance. Our professional artificial turf installation is ideal for busy homeowners, pet owners, and for creating specialized spaces like personal putting greens.",
  heroImage: "/turf-installation/hero.png",
  benefits: [
    "Virtually zero maintenance: no mowing, watering, or fertilizing.",
    "Pet-friendly: durable, easy to clean, and resistant to digging and stains.",
    "Solves problem areas: thrives in deep shade or on slopes where grass won't grow.",
    "Perfect for specific uses: putting greens, play areas, pool surrounds, and rooftop patios.",
    "Conserves water and eliminates the need for pesticides and herbicides.",
    "Stays green and beautiful in all seasons, regardless of weather.",
  ],
  process: [
    {
      title: "1. Site Assessment & Consultation",
      description:
        "We evaluate your property's drainage and usage goals, and help you select the perfect turf product for your needs from our range of high-quality samples.",
    },
    {
      title: "2. Ground Preparation",
      description:
        "This is the most critical step. We excavate the area, install any necessary drainage, and build up a compacted aggregate base to create a stable, permeable foundation.",
    },
    {
      title: "3. Turf Installation & Seaming",
      description:
        "Our experienced team carefully lays out the turf, meticulously seaming sections together for a completely invisible transition. The perimeter is then securely fastened.",
    },
    {
      title: "4. Infill Application",
      description:
        "We apply a specialized infill material which helps the turf blades stand upright, provides a soft feel underfoot, and protects the backing from UV rays.",
    },
    {
      title: "5. Final Grooming & Cleanup",
      description:
        "A final power brushing makes the turf blades stand up for a perfect, natural look. We ensure your property is left clean and your new lawn is ready to enjoy.",
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
      description: "A clean, safe, and low-maintenance artificial turf installation for a family backyard play area.",
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
        "Artificial turf requires very little maintenance. We recommend occasional rinsing to remove dust, brushing high-traffic areas to keep fibers upright, and removing leaves or debris. No mowing, watering, or fertilizing is ever needed.",
    },
    {
      question: "Is artificial turf safe for pets and children?",
      answer:
        "Yes, all our artificial turf products are non-toxic and lead-free, making them perfectly safe for both pets and children. They also provide a soft, cushioned surface for play.",
    },
    {
      question: "How long will my new turf last?",
      answer:
        "High-quality artificial turf, when properly installed and maintained, can last 15-20 years or more. Manufacturer warranties typically cover aspects like color fading for 8-15 years.",
    },
    {
      question: "How does artificial turf handle drainage from rain or pets?",
      answer:
        "Our turf products have a fully permeable backing that allows liquids to drain through. We install it over a compacted, permeable base, ensuring that rainwater and pet urine drain away efficiently, preventing puddles and odors.",
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
