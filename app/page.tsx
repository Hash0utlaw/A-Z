"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Leaf,
  TreePine,
  Hammer,
  Droplet,
  Scissors,
  Footprints,
  CheckCircle,
  Users,
  Award,
  Building,
  Car,
  Flame,
  Tent,
  Sprout,
  Lightbulb,
  SunSnow,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Landscaper"],
    name: "A-Z Landscapes",
    image: "https://www.a-z-landscaping.com/logo.png", // IMPORTANT: Update domain
    url: "https://www.a-z-landscaping.com", // IMPORTANT: Update domain
    telephone: "+1-555-123-4567", // IMPORTANT: Update phone
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street", // IMPORTANT: Update
      addressLocality: "Your City", // IMPORTANT: Update
      addressRegion: "YS", // IMPORTANT: Update
      postalCode: "00000", // IMPORTANT: Update
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "YOUR_LATITUDE", // IMPORTANT: Update
      longitude: "YOUR_LONGITUDE", // IMPORTANT: Update
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00", // IMPORTANT: Update
        closes: "17:00", // IMPORTANT: Update
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    description:
      "A-Z Landscapes offers comprehensive landscaping and hardscaping services in [Your City] and surrounding areas. With over 20 years of experience, we transform outdoor dreams into reality, from patios and retaining walls to garden design and lawn care.", // IMPORTANT: Update service area
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/your-az-landscapes-profile", // IMPORTANT: Update
      "https://www.instagram.com/your-az-landscapes-profile", // IMPORTANT: Update
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-kelly-50 to-kelly-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200">A-Z Landscapes: Since 2008</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforming Your
                  <span className="text-kelly-500"> Outdoor Dreams</span> Into Reality
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 20 years of passion and expertise, we turn ordinary spaces into something to be proud of.
                  From concept to completion, A-Z Landscapes creates beautiful, sustainable landscapes that enhance your
                  property and bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-lg px-8 py-3">
                    Get Free Estimate
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-navy-500 text-navy-700 hover:bg-navy-50 text-lg px-8 py-3 bg-transparent"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-navy-600" />
                  <span className="text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-navy-600" />
                  <span className="text-gray-700">20+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-navy-600" />
                  <span className="text-gray-700">Passion-Driven Work</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-landscape.png"
                alt="Beautifully landscaped property by A-Z Landscapes"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-kelly-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-kelly-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Landscape & Hardscape Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From meticulous maintenance to stunning design-build projects, we offer a full spectrum of services to
              create and maintain your perfect outdoor environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy-100 p-2 rounded-lg">
                  <Hammer className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hardscape Design & Construction</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Crafting durable and beautiful outdoor living areas, from patios and retaining walls to outdoor kitchens
                and fire features. We love working with natural stone and boulders!
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Patios & Walkways", slug: "patios-walkways", icon: Footprints },
                  { name: "Retaining Walls", slug: "retaining-walls", icon: Building },
                  { name: "Driveways", slug: "driveways", icon: Car },
                  { name: "Outdoor Kitchens", slug: "outdoor-kitchens-fire-features", icon: Flame },
                  { name: "Water Features", slug: "water-features", icon: Droplet },
                  { name: "Pergolas & Gazebos", slug: "pergolas-gazebos", icon: Tent },
                ].map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <service.icon className="h-5 w-5 text-navy-600 flex-shrink-0" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/services#hardscape"
                  className="text-navy-700 font-medium hover:text-navy-700 transition-colors"
                >
                  Explore Hardscape Services →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy-100 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Landscape Design & Maintenance</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Bringing your vision to life with thoughtful garden designs, expert plant selection, lighting,
                irrigation, and comprehensive maintenance programs.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Landscape Design", slug: "garden-design-planting", icon: Sprout },
                  { name: "Lawn Care & Maintenance", slug: "lawn-care-maintenance", icon: Scissors },
                  { name: "Tree Services", slug: "tree-services", icon: TreePine },
                  { name: "Irrigation & Drainage", slug: "irrigation-systems", icon: Droplet },
                  { name: "Landscape Lighting", slug: "landscape-lighting", icon: Lightbulb },
                  { name: "Artificial Turf", slug: "turf-installation", icon: Leaf }, // Changed icon for variety
                  { name: "Seasonal Services", slug: "seasonal-services", icon: SunSnow },
                ].map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <service.icon className="h-5 w-5 text-navy-600 flex-shrink-0" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/services#landscaping"
                  className="text-navy-700 font-medium hover:text-navy-700 transition-colors"
                >
                  Explore Landscaping Services →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600">
                Discover All Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section id="about-snippet" className="py-20 bg-kelly-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200">Why Choose A-Z Landscapes?</Badge>
                <h2 className="text-4xl font-bold text-gray-900">Your Passionate & Experienced Landscape Partner</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded on a love for transforming spaces and a commitment to quality, A-Z Landscapes brings over 20
                  years of industry experience to your project. We started with a simple goal: to do great work and
                  treat people right.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we've grown into a full-service design, build, and maintenance company, but our core values
                  remain. We're dedicated to creating outdoor environments you'll love, built with craftsmanship and a
                  personal touch.
                </p>
              </div>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-navy-500 text-navy-700 hover:bg-navy-50 bg-transparent"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/team-at-work.png"
                alt="A-Z Landscapes team collaborating on a project"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Snippet Section */}
      <section id="portfolio-snippet" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Work</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformations We're Proud Of</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seeing is believing. Explore a selection of our recent projects and imagine the possibilities for your own
              outdoor space.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Modern Backyard Oasis", image: "/projects/modern-backyard-oasis.png" },
              { title: "Front Yard Transformation", image: "/projects/front-yard-transformation.png" },
              { title: "Outdoor Living Space", image: "/projects/outdoor-living-space.png" },
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Client Love</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hear From Our Happy Customers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                text: "A-Z Landscapes turned our backyard vision into a stunning reality. Professional, creative, and a joy to work with!",
              },
              {
                name: "Mike C.",
                text: "The best landscaping company we've ever hired. Their attention to detail is unmatched.",
              },
              {
                name: "Emily R.",
                text: "Our new patio and garden are incredible. Thank you, A-Z Landscapes, for your amazing work!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-navy-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            {/* Placeholder for a link to a full testimonials page if created */}
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-navy-500 text-navy-700 hover:bg-kelly-50 bg-transparent"
              >
                Share Your Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how A-Z Landscapes can bring your outdoor vision to life. Contact us today for a free,
              no-obligation consultation and estimate.
            </p>
          </div>
          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-lg px-10 py-4">
                Request Your Free Consultation
              </Button>
            </Link>
            <p className="text-md text-gray-600 mt-6">Or call us at (555) 123-4567 to speak with our team directly.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
