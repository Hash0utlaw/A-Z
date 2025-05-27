import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import GalleryGrid from "./gallery-grid"
import { ChevronRight } from "lucide-react"

interface ServicePageProps {
  category: "hardscape" | "landscaping"
  title: string
  description: string
  heroImage: string
  benefits: string[]
  process: {
    title: string
    description: string
  }[]
  gallery: {
    image: string
    title: string
    description: string
  }[]
  testimonials: {
    name: string
    location: string
    rating: number
    text: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: {
    title: string
    slug: string
  }[]
}

export default function ServicePageTemplate({
  category,
  title,
  description,
  heroImage,
  benefits,
  process,
  gallery,
  testimonials,
  faqs,
  relatedServices,
}: ServicePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[400px] md:h-[500px]">
          <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
                {category === "hardscape" ? "Hardscape Service" : "Landscaping Service"}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
              <p className="text-xl text-white/90 mb-8">{description}</p>
              <Link href="/#contact">
                <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-white">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Benefits</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our {title} Service</h2>
            <p className="text-lg text-gray-600">
              Discover the advantages of working with A-Z Landscaping for your {title.toLowerCase()} project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">
              Our proven process ensures your {title.toLowerCase()} project is completed efficiently and to the highest
              standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
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

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Work</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent {title} Projects</h2>
            <p className="text-lg text-gray-600">
              Browse our portfolio of completed {title.toLowerCase()} projects to see our quality craftsmanship.
            </p>
          </div>

          <GalleryGrid items={gallery} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">
              Read reviews from satisfied customers who have experienced our {title.toLowerCase()} services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
              Find answers to common questions about our {title.toLowerCase()} services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
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
              Discover other services that complement your {title.toLowerCase()} project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
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

      {/* Transformations Link */}
      <section className="py-12 bg-white border-t border-navy-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">See Our Transformations</h2>
            <p className="text-lg text-gray-600 mb-6">
              Curious about the dramatic difference our {title.toLowerCase()} services can make? Check out our before
              and after gallery to see real transformations.
            </p>
            <Link href="/transformations">
              <Button variant="outline" className="border-navy-500 text-navy-500 hover:bg-navy-50">
                View Before & After Gallery <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kelly-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your {title} Project?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              Contact us today for a free consultation and estimate. Our team of experts is ready to bring your vision
              to life.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-kelly-500 hover:bg-kelly-50 px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
