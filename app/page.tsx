"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Leaf, Hammer, CheckCircle, Users, Award, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Landscaper"],
    name: "A-Z Landscapes",
    image: "https://www.a-z-landscaping.com/logo.png", // IMPORTANT: Update domain
    url: "https://www.a-z-landscaping.com", // IMPORTANT: Update domain
    telephone: "+1-704-989-4839", // IMPORTANT: Update phone
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
      <section id="home" className="relative bg-gradient-to-br from-kelly-50 to-kelly-100 py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200">A-Z Landscapes: Since 2008</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforming Your
                  <span className="text-kelly-500"> Outdoor Dreams</span> Into Reality
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  With over 20 years of passion and expertise, we turn ordinary spaces into something to be proud of.
                  From concept to completion, A-Z Landscapes creates beautiful, sustainable landscapes that enhance your
                  property and bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-lg px-8 py-3 w-full sm:w-auto">
                    Get Quote
                  </Button>
                </Link>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-navy-500 text-navy-700 hover:bg-navy-50 text-lg px-8 py-3 bg-transparent w-full sm:w-auto"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-navy-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-navy-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">20+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-navy-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">Passion-Driven Work</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <Image
                src="/user-uploads/Patio-walkway-landscape-resident.jpg"
                alt="Beautifully landscaped property by A-Z Landscapes"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
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
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Landscape & Hardscape Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From stunning hardscapes to lush landscapes, we bring your outdoor vision to life with expert design and
              craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Hardscape Design Card */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-kelly-400">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src="/driveways/stone-driveway-landscape-lake-resident.jpeg"
                  alt="Professional hardscape design featuring stone driveways and patios"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <Hammer className="h-6 w-6 sm:h-8 sm:w-8 text-navy-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Hardscape Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your outdoor space with expertly crafted patios, driveways, retaining walls, outdoor
                  kitchens, water features, and custom structures. Built to last with premium materials and meticulous
                  attention to detail.
                </p>
                <Link href="/services#hardscape">
                  <Button className="bg-kelly-500 hover:bg-kelly-600 w-full sm:w-auto group">
                    Explore Hardscape Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Landscape Design Card */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-kelly-400">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src="/patios-walkways/Patio-walkway-landscape-resident.jpg"
                  alt="Beautiful landscape design with stone walkways and lush plantings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-kelly-600" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Landscape Design</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Create your perfect outdoor oasis with custom garden designs, professional lawn care, smart irrigation
                  systems, landscape lighting, and seasonal maintenance. Sustainable beauty that thrives year-round.
                </p>
                <Link href="/services#landscaping">
                  <Button className="bg-kelly-500 hover:bg-kelly-600 w-full sm:w-auto group">
                    Explore Landscape Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-navy-500 text-navy-700 hover:bg-navy-50 bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section id="about-snippet" className="py-16 sm:py-20 bg-kelly-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200">Why Choose A-Z Landscapes?</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Your Passionate & Experienced Landscape Partner
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Founded on a love for transforming spaces and a commitment to quality, A-Z Landscapes brings over 20
                  years of industry experience to your project. We started with a simple goal: to do great work and
                  treat people right.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Today, we've grown into a full-service design, build, and maintenance company, but our core values
                  remain. We're dedicated to creating outdoor environments you'll love, built with craftsmanship and a
                  personal touch.
                </p>
              </div>
              <Link href="/about" className="inline-block">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-navy-500 text-navy-700 hover:bg-navy-50 bg-transparent"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <Image
                src="/zach-owner-headshot.jpeg"
                alt="Zach Wardell, Founder of A-Z Landscapes"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Snippet Section */}
      <section id="portfolio-snippet" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Work</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Transformations We're Proud Of</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Seeing is believing. Explore a selection of our recent projects and imagine the possibilities for your own
              outdoor space.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Woodland Fire Pit Retreat", image: "/user-uploads/backyard-fire-pit-patio-residential.jpeg" },
              {
                title: "Complete Outdoor Kitchen",
                image: "/user-uploads/complete-outdoor-kitchen-grill-smoker-storage-cabinets.jpeg",
              },
              { title: "Pollinator Paradise Garden", image: "/user-uploads/butterfly-garden-flower-residential.jpeg" },
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-base sm:text-lg font-semibold">
                    {project.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/portfolio">
              <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Client Love</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Hear From Our Happy Customers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
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
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Get In Touch</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how A-Z Landscapes can bring your outdoor vision to life. Contact us today for a free,
              no-obligation consultation and estimate.
            </p>
          </div>
          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-kelly-500 hover:bg-kelly-600 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
              >
                Request Your Free Consultation
              </Button>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 mt-6">
              Or call us at (704) 989-4839 to speak with our team directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
