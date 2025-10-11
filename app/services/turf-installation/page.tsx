import ServicePageTemplate from "@/components/service-page-template"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artificial Turf Installation Services | A-Z Landscapes",
  description:
    "Expert artificial turf installation for pristine, low-maintenance lawns, pet areas, and putting greens. Durable, realistic, and professionally installed by A-Z Landscapes.",
}

function PartnerSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-navy-50 to-kelly-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-navy-700 text-white hover:bg-navy-800 mb-4">Our Trusted Partner</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Turf Installation by Turf Professionals
            </h2>
            <p className="text-lg text-gray-600">
              A-Z Landscapes partners with Turf Professionals to deliver exceptional artificial turf installation
              services for all your turf needs. All turf installation projects are expertly handled by our trusted
              partner.
            </p>
          </div>

          <Card className="border-2 border-navy-200 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-navy-700 mb-4">Why Turf Professionals?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-kelly-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Specialized expertise in artificial turf installation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-kelly-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Premium quality materials and workmanship</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-kelly-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Comprehensive solutions for residential and commercial projects
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-kelly-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Handles all turf jobs and needs with excellence</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900 p-8 rounded-lg text-center">
                  <h4 className="text-xl font-bold text-white mb-4">Ready to Transform Your Lawn?</h4>
                  <p className="text-white/90 mb-6">
                    Visit Turf Professionals to learn more about their services and get started on your turf
                    installation project today.
                  </p>
                  <Link href="https://www.turf-professionals.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-white">
                      Visit Turf Professionals
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function TurfInstallationPage() {
  return (
    <>
      <ServicePageTemplate
        category="landscaping"
        title="Professional Turf Installation"
        description="Achieve a perfect, lush green lawn year-round without the constant maintenance. Our professional artificial turf installation is ideal for busy homeowners, pet owners, and for creating specialized spaces like personal putting greens."
        heroImage="/turf-installation/hero.jpg"
        benefits={[
          "Virtually zero maintenance: no mowing, watering, or fertilizing.",
          "Pet-friendly: durable, easy to clean, and resistant to digging and stains.",
          "Solves problem areas: thrives in deep shade or on slopes where grass won't grow.",
          "Perfect for specific uses: putting greens, play areas, pool surrounds, and rooftop patios.",
          "Conserves water and eliminates the need for pesticides and herbicides.",
          "Stays green and beautiful in all seasons, regardless of weather.",
        ]}
        process={[
          {
            title: "Site Assessment & Consultation",
            description:
              "We evaluate your property's drainage and usage goals, and help you select the perfect turf product for your needs from our range of high-quality samples.",
          },
          {
            title: "Ground Preparation",
            description:
              "This is the most critical step. We excavate the area, install any necessary drainage, and build up a compacted aggregate base to create a stable, permeable foundation.",
          },
          {
            title: "Turf Installation & Seaming",
            description:
              "Our experienced team carefully lays out the turf, meticulously seaming sections together for a completely invisible transition. The perimeter is then securely fastened.",
          },
          {
            title: "Infill Application",
            description:
              "We apply a specialized infill material which helps the turf blades stand upright, provides a soft feel underfoot, and protects the backing from UV rays.",
          },
          {
            title: "Final Grooming & Cleanup",
            description:
              "A final power brushing makes the turf blades stand up for a perfect, natural look. We ensure your property is left clean and your new lawn is ready to enjoy.",
          },
        ]}
        galleryTitle="Turf Installation Examples"
        gallery={[
          {
            image: "/turf-installation/artificial-turf.png",
            title: "Residential Turf Installation",
            description: "Beautiful artificial turf creating a lush, maintenance-free lawn.",
          },
          {
            image: "/turf-installation/putting-green.png",
            title: "Custom Putting Green",
            description: "Professional-grade putting green for backyard golf practice.",
          },
          {
            image: "/turf-installation/pet-area.png",
            title: "Pet-Friendly Turf",
            description: "Durable turf designed specifically for pet areas.",
          },
          {
            image: "/turf-installation/pool-surround.png",
            title: "Pool Surround Turf",
            description: "Artificial turf around pool areas for a clean, green look.",
          },
          {
            image: "/turf-installation/play-area.png",
            title: "Safe Play Area",
            description: "Soft, cushioned turf perfect for children's play spaces.",
          },
          {
            image: "/turf-installation/shade-solution.png",
            title: "Shade Area Solution",
            description: "Turf thriving in areas where natural grass won't grow.",
          },
        ]}
        testimonials={[
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
        ]}
        faqs={[
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
        ]}
        relatedServices={[
          { title: "Garden Design & Planting", slug: "garden-design-planting" },
          { title: "Patios & Walkways", slug: "patios-walkways" },
          { title: "Drainage Solutions", slug: "irrigation-systems" },
        ]}
      />

      <PartnerSection />
    </>
  )
}
