import ServicePageTemplate from "@/components/service-page-template"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Professional Turf Installation Services | A-Z Landscaping",
  description:
    "Transform your lawn with our professional turf installation services. We offer high-quality sod, artificial turf, and hydroseeding solutions for residential and commercial properties.",
}

export default function TurfInstallationPage() {
  // Custom CTA component that links to external website
  const ExternalCTA = () => (
    <section className="bg-kelly-500 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-xl text-kelly-100 mb-8">
            Visit our specialized turf installation website for more information, pricing details, and to schedule a
            consultation with our turf experts.
          </p>
          <a
            href="https://www.turf-professionals.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-kelly-500 hover:bg-kelly-50 px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Visit Turf Professionals <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )

  return (
    <>
      <ServicePageTemplate
        category="landscaping"
        title="Turf Installation"
        description="Transform your property with lush, healthy turf that provides instant curb appeal and a beautiful outdoor space for your family to enjoy."
        heroImage="/turf-installation/hero.png"
        benefits={[
          "Instant transformation with same-day results",
          "Increased property value and curb appeal",
          "Erosion control and soil stabilization",
          "Cooler outdoor temperatures in summer months",
          "Reduced mud, dust, and dirt tracked into your home",
          "Options for traditional sod, artificial turf, or hydroseeding",
        ]}
        process={[
          {
            title: "Site Assessment & Consultation",
            description:
              "We evaluate your property's soil conditions, drainage, sun exposure, and discuss your goals and budget to determine the best turf solution for your needs.",
          },
          {
            title: "Site Preparation",
            description:
              "We remove existing vegetation, address drainage issues, grade the soil properly, and add necessary amendments to create the perfect foundation for your new turf.",
          },
          {
            title: "Turf Selection",
            description:
              "Based on your property's conditions and your preferences, we help you select the ideal turf variety from our premium sod options, artificial turf materials, or hydroseeding mixes.",
          },
          {
            title: "Professional Installation",
            description:
              "Our experienced team installs your selected turf with precision, ensuring proper placement, seaming, and finishing touches for a seamless, beautiful result.",
          },
          {
            title: "Initial Care & Maintenance",
            description:
              "We provide comprehensive care instructions and initial maintenance to ensure your new turf establishes properly and thrives for years to come.",
          },
        ]}
        gallery={[
          {
            image: "/turf-installation/sod-installation.png",
            title: "Premium Sod Installation",
            description: "Fresh sod installation for a residential front yard, providing instant curb appeal.",
          },
          {
            image: "/turf-installation/artificial-turf.png",
            title: "Artificial Turf",
            description: "Low-maintenance artificial turf installation for a family backyard play area.",
          },
          {
            image: "/turf-installation/hydroseeding.png",
            title: "Hydroseeding",
            description:
              "Hydroseeding application for a large residential property, providing economical lawn establishment.",
          },
          {
            image: "/turf-installation/commercial-turf.png",
            title: "Commercial Turf Installation",
            description: "Large-scale sod installation for a commercial property entrance.",
          },
          {
            image: "/turf-installation/sports-turf.png",
            title: "Sports Turf",
            description: "Specialized sports turf installation for a residential putting green.",
          },
          {
            image: "/turf-installation/drought-resistant.png",
            title: "Drought-Resistant Turf",
            description: "Water-wise turf variety installation for an environmentally conscious homeowner.",
          },
        ]}
        testimonials={[
          {
            name: "Michael Johnson",
            location: "Anytown, USA",
            rating: 5,
            text: "The turf installation team was professional and efficient. Our yard went from patchy and brown to lush and green in a single day! The quality of the sod is excellent, and they provided detailed care instructions that made maintenance easy.",
          },
          {
            name: "Sarah Williams",
            location: "Anytown, USA",
            rating: 5,
            text: "We opted for artificial turf in our backyard due to shade issues and dogs, and we couldn't be happier. It looks incredibly realistic, drains perfectly, and has eliminated mud and brown spots. Worth every penny!",
          },
          {
            name: "Robert Chen",
            location: "Anytown, USA",
            rating: 4,
            text: "The hydroseeding option was perfect for our budget and large property. It took a few weeks to fully establish, but the results are fantastic. The team was knowledgeable and helped us choose the right seed mix for our specific conditions.",
          },
        ]}
        faqs={[
          {
            question: "What's the difference between sod, artificial turf, and hydroseeding?",
            answer:
              "Sod provides instant results with pre-grown grass that's installed in rolls. Artificial turf offers a maintenance-free synthetic option that looks realistic and lasts for years. Hydroseeding applies a mixture of seed, mulch, fertilizer, and water that grows into a lawn over several weeks, offering a more economical solution for larger areas.",
          },
          {
            question: "How long does it take for newly installed sod to root?",
            answer:
              "Newly installed sod typically begins rooting within 10-14 days under proper conditions. However, it takes about 4-6 weeks for the root system to establish fully. During this time, careful watering and limited foot traffic are essential.",
          },
          {
            question: "How much maintenance does artificial turf require?",
            answer:
              "Artificial turf requires minimal maintenance compared to natural grass. Regular tasks include occasional rinsing to remove dust and debris, brushing to keep fibers upright, and removing leaves or organic matter. No mowing, watering, fertilizing, or weed control is needed.",
          },
          {
            question: "What is the best time of year to install new turf?",
            answer:
              "For sod and hydroseeding, spring and fall are ideal due to moderate temperatures and typically adequate rainfall. Summer installations are possible but require more careful watering. Artificial turf can be installed year-round, though installation is easier when temperatures are moderate.",
          },
          {
            question: "How long will my new turf last?",
            answer:
              "Properly maintained natural sod can last indefinitely as it's living grass that regenerates. Premium artificial turf typically lasts 15-20 years before needing replacement. Hydroseeded lawns, once established, are also permanent with proper maintenance.",
          },
          {
            question: "Do you offer warranties on turf installation?",
            answer:
              "Yes, we offer warranties on both our installation work and the turf materials. Sod typically comes with a 30-day establishment warranty, while artificial turf includes manufacturer warranties ranging from 8-15 years depending on the product selected. Please visit our specialized turf website for detailed warranty information.",
          },
        ]}
        relatedServices={[
          {
            title: "Lawn Care & Maintenance",
            slug: "lawn-care-maintenance",
          },
          {
            title: "Irrigation Systems",
            slug: "irrigation-systems",
          },
          {
            title: "Garden Design & Planting",
            slug: "garden-design-planting",
          },
        ]}
      />

      {/* Replace the standard CTA with our custom external CTA */}
      <ExternalCTA />
    </>
  )
}
