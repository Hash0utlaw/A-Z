import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Star, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
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
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={turfInstallationData.heroImage || "/placeholder.svg"}
            alt={turfInstallationData.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Landscaping Service</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{turfInstallationData.title}</h1>
              <p className="text-xl text-white/90 mb-8">{turfInstallationData.description}</p>
              <Link href="https://www.turf-professionals.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-white">
                  Get Started with Turf Professionals
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Benefits</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Artificial Turf Installation</h2>
            <p className="text-lg text-gray-600">
              Discover the advantages of professional artificial turf installation for your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {turfInstallationData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-navy-100 p-2 rounded-full flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Process</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Turf Installation Works</h2>
            <p className="text-lg text-gray-600">
              Our partner's proven process ensures your turf installation project is completed efficiently and to the
              highest standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {turfInstallationData.process.map((step, index) => (
              <div key={index} className="flex items-start gap-6 mb-8">
                <div className="bg-navy-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy-700 to-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">Get Started</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your Turf Installation Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Visit Turf Professionals to see their portfolio, learn more about their services, and get started on
              transforming your outdoor space with premium artificial turf.
            </p>
            <Link href="https://www.turf-professionals.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-white text-lg px-8 py-6 h-auto">
                Visit Turf Professionals
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">
              Read reviews from satisfied customers who have experienced professional turf installation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {turfInstallationData.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-navy-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about artificial turf installation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {turfInstallationData.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Explore More</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
            <p className="text-lg text-gray-600">
              Discover other services that complement your turf installation project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {turfInstallationData.relatedServices.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-navy-100 hover:border-navy-200 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <span className="text-navy-700 font-medium">Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-kelly-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Turf Installation Project?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              Contact Turf Professionals today for a free consultation and estimate. Their team of experts is ready to
              bring your vision to life with premium artificial turf installation.
            </p>
            <Link href="https://www.turf-professionals.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-kelly-500 hover:bg-kelly-50">
                Get Your Free Estimate
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
