import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ChevronRight, ExternalLink, Star, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Professional Turf Installation Services | A-Z Landscapes",
  description:
    "Transform your lawn with our professional turf installation services. We offer high-quality sod, artificial turf, and hydroseeding solutions for residential and commercial properties.",
}

export default function TurfInstallationPage() {
  const externalTurfSite = "https://www.turf-professionals.com/"

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/turf-installation/hero.png"
            alt="Professional turf installation"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-kelly-500 text-white hover:bg-kelly-600 mb-4">Landscaping</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Turf Installation</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your property with lush, healthy turf that provides instant curb appeal and a beautiful outdoor
              space for your family to enjoy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={externalTurfSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-kelly-500 text-white hover:bg-kelly-600 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Turf Professionals <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={`${externalTurfSite}#gallery`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-700 text-white hover:bg-navy-800 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                View Turf Gallery <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Turf Installation</h2>
            <p className="text-lg text-gray-600">
              Our expert turf installation services provide numerous advantages for your property and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Instant transformation with same-day results",
              "Increased property value and curb appeal",
              "Erosion control and soil stabilization",
              "Cooler outdoor temperatures in summer months",
              "Reduced mud, dust, and dirt tracked into your home",
              "Options for traditional sod, artificial turf, or hydroseeding",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-kelly-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={externalTurfSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-800 font-medium"
            >
              Learn more about our turf options <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Turf Installation Process</h2>
            <p className="text-lg text-gray-600">
              We follow a comprehensive process to ensure your new turf is installed properly and thrives for years to
              come.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-navy-700 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`${externalTurfSite}#process`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-700 text-white hover:bg-navy-800 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              See Our Installation Process <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Turf Installation Projects</h2>
            <p className="text-lg text-gray-600">
              Browse our gallery of completed turf installation projects to see the quality of our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={`${externalTurfSite}#projects`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-navy-700 hover:text-navy-800 font-medium"
                  >
                    View Similar Projects <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`${externalTurfSite}#gallery`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-kelly-500 text-white hover:bg-kelly-600 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              View Full Project Gallery <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Read testimonials from satisfied customers who have transformed their properties with our turf
              installation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4 flex-grow">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`${externalTurfSite}#testimonials`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-800 font-medium"
            >
              Read More Testimonials <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our turf installation services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`${externalTurfSite}#faq`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy-700 hover:text-navy-800 font-medium"
            >
              View More FAQs <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
            <p className="text-lg text-gray-600">
              Explore other landscaping services that complement your turf installation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-navy-700 hover:text-navy-800 font-medium"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kelly-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Lawn?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              Visit our specialized turf installation website for more information, pricing details, and to schedule a
              consultation with our turf experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={externalTurfSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-kelly-500 hover:bg-kelly-50 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Visit Turf Professionals <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={`${externalTurfSite}#contact`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-700 text-white hover:bg-navy-800 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Contact for Quote <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
