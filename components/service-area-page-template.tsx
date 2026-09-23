import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { BUSINESS } from "@/lib/business"

interface ServiceAreaPageProps {
  city: string
  county: string
  title: string
  intro: string
  terrain: string
  priorityServices: {
    title: string
    slug: string
    reason: string
  }[]
  permitting: {
    authority: string
    notes: string
    sourceUrl: string
  }
  faqs: {
    question: string
    answer: string
  }[]
  nearbyAreas: {
    name: string
    slug: string
  }[]
}

export default function ServiceAreaPageTemplate({
  city,
  county,
  title,
  intro,
  terrain,
  priorityServices = [],
  permitting,
  faqs = [],
  nearbyAreas = [],
}: ServiceAreaPageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-700 to-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">{county}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-white/90 mb-8">{intro}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-kelly-600 hover:bg-kelly-50 px-8 py-3 rounded-md font-semibold transition-colors w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact">
                <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-white w-full sm:w-auto">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terrain & Conditions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Local Conditions</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Terrain &amp; Drainage in {city}</h2>
            <p className="text-lg text-gray-600">{terrain}</p>
          </div>
        </div>
      </section>

      {/* Priority Services Section */}
      {priorityServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Priority Services</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Matters Most for {city} Properties</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {priorityServices.map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-navy-100 hover:border-navy-200 h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.reason}</p>
                    <span className="text-navy-700 font-medium">Learn More</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Permitting Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Permitting</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Permitting in {city}</h2>
            <p className="text-lg text-gray-600 mb-4">{permitting.notes}</p>
            <a
              href={permitting.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 font-medium hover:underline"
            >
              {permitting.authority} &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      {nearbyAreas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Nearby</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Also Serving Nearby</h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-navy-100 hover:border-navy-300 text-navy-700 font-medium transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">FAQ</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Common questions about our work in {city}.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent forceMount className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-kelly-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your {city} Project?</h2>
            <p className="text-xl text-kelly-100 mb-8">
              Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life.
            </p>
            <Link
              href="/contact"
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
