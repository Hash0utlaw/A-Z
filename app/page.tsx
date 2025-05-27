"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
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
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Building,
  Car,
  Flame,
  Tent,
  Sprout,
  Lightbulb,
  SunSnow,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"

export default function LandscapingWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-kelly-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <MainNavigation />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-kelly-50 to-kelly-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200">Professional Landscaping Services</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <span className="text-kelly-500"> Outdoor Space</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From concept to completion, we create beautiful, sustainable landscapes that enhance your property
                  value and bring your vision to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-lg px-8 py-3">
                    Get Free Estimate
                  </Button>
                </Link>
                <Link href="/#portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-navy-500 text-navy-700 hover:bg-navy-50 text-lg px-8 py-3"
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
                  <span className="text-gray-700">15+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero-landscape.png"
                alt="Beautiful landscaped garden"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Landscaping Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to maintenance, we offer comprehensive landscaping services to keep your outdoor space
              beautiful year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy-100 p-2 rounded-lg">
                  <Hammer className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hardscape Services</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Create beautiful and functional outdoor living spaces with our premium hardscaping services.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/services/patios-walkways"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Footprints className="h-5 w-5 text-navy-600" />
                  <span>Patios & Walkways</span>
                </Link>
                <Link
                  href="/services/retaining-walls"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Building className="h-5 w-5 text-navy-600" />
                  <span>Retaining Walls</span>
                </Link>
                <Link
                  href="/services/driveways"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Car className="h-5 w-5 text-navy-600" />
                  <span>Driveways</span>
                </Link>
                <Link
                  href="/services/outdoor-kitchens-fire-features"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Flame className="h-5 w-5 text-navy-600" />
                  <span>Outdoor Kitchens</span>
                </Link>
                <Link
                  href="/services/water-features"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Droplet className="h-5 w-5 text-navy-600" />
                  <span>Water Features</span>
                </Link>
                <Link
                  href="/services/pergolas-gazebos"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Tent className="h-5 w-5 text-navy-600" />
                  <span>Pergolas & Gazebos</span>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/services" className="text-navy-700 font-medium hover:text-navy-700 transition-colors">
                  View All Hardscape Services →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy-100 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Landscaping Services</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Keep your outdoor space healthy, beautiful, and thriving with our expert landscaping services.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/services/lawn-care-maintenance"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Scissors className="h-5 w-5 text-navy-600" />
                  <span>Lawn Care</span>
                </Link>
                <Link
                  href="/services/garden-design-planting"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Sprout className="h-5 w-5 text-navy-600" />
                  <span>Garden Design</span>
                </Link>
                <Link
                  href="/services/tree-services"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <TreePine className="h-5 w-5 text-navy-600" />
                  <span>Tree Services</span>
                </Link>
                <Link
                  href="/services/irrigation-systems"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Droplet className="h-5 w-5 text-navy-600" />
                  <span>Irrigation Systems</span>
                </Link>
                <Link
                  href="/services/landscape-lighting"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <Lightbulb className="h-5 w-5 text-navy-600" />
                  <span>Landscape Lighting</span>
                </Link>
                <Link
                  href="/services/seasonal-services"
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <SunSnow className="h-5 w-5 text-navy-600" />
                  <span>Seasonal Services</span>
                </Link>
              </div>
              <div className="mt-6">
                <Link href="/services" className="text-navy-700 font-medium hover:text-navy-700 transition-colors">
                  View All Landscaping Services →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600">
                Explore All Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-kelly-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200">About A-Z Landscaping</Badge>
                <h2 className="text-4xl font-bold text-gray-900">Your Trusted Landscaping Partner Since 2008</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For over 15 years, A-Z Landscaping has been transforming outdoor spaces across the region. Our team of
                  certified professionals combines creativity with expertise to deliver exceptional results that exceed
                  expectations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that every property has unique potential. Whether you're looking for a complete landscape
                  makeover or ongoing maintenance, we're committed to bringing your vision to life with quality
                  craftsmanship and sustainable practices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-navy-700 mb-2">15+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-navy-700 mb-2">500+</div>
                  <div className="text-gray-700">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-navy-700 mb-2">100%</div>
                  <div className="text-gray-700">Satisfaction Rate</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-navy-700 mb-2">24/7</div>
                  <div className="text-gray-700">Emergency Service</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/team-at-work.png"
                alt="A-Z Landscaping team at work"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-navy-900 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8" />
                  <div>
                    <div className="font-bold">Licensed</div>
                    <div className="text-kelly-100">& Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Work</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent landscaping transformations. Each project showcases our commitment to
              quality and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Backyard Oasis",
                category: "Complete Landscape Design",
                image: "/modern-backyard.png",
              },
              {
                title: "Front Yard Transformation",
                category: "Curb Appeal Enhancement",
                image: "/front-yard.png",
              },
              {
                title: "Outdoor Living Space",
                category: "Hardscaping & Patio",
                image: "/outdoor-living.png",
              },
              {
                title: "Garden Paradise",
                category: "Garden Design & Planting",
                image: "/garden-paradise.png",
              },
              {
                title: "Commercial Landscaping",
                category: "Business Property",
                image: "/commercial-landscape.png",
              },
              {
                title: "Sustainable Landscape",
                category: "Eco-Friendly Design",
                image: "/sustainable-landscape.png",
              },
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-navy-700 text-white mb-2">{project.category}</Badge>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-navy-500 text-navy-700 hover:bg-kelly-50">
              View All Projects
            </Button>
          </div>

          {/* Transformations Link */}
          <div className="text-center mt-8 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Before & After Transformations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              See the dramatic difference our landscaping services can make. Explore our before and after gallery to
              witness stunning property transformations.
            </p>
            <Link href="/transformations">
              <Button variant="outline" className="border-kelly-500 text-kelly-500 hover:bg-kelly-50">
                View Transformations <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our landscaping
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Residential Customer",
                rating: 5,
                text: "A-Z Landscaping transformed our backyard into a beautiful oasis. The team was professional, punctual, and exceeded our expectations. Highly recommended!",
              },
              {
                name: "Mike Chen",
                location: "Commercial Property",
                rating: 5,
                text: "Outstanding service! They maintain our office complex grounds perfectly. Always reliable and the quality of work is consistently excellent.",
              },
              {
                name: "Emily Rodriguez",
                location: "Residential Customer",
                rating: 5,
                text: "From design to installation, the entire process was smooth. Our new garden is absolutely stunning and has increased our property value significantly.",
              },
            ].map((testimonial, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Landscape?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today for a free consultation and estimate. We're here to bring your outdoor vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-navy-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Get Your Free Estimate</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="patios-walkways">Patios & Walkways</SelectItem>
                        <SelectItem value="retaining-walls">Retaining Walls</SelectItem>
                        <SelectItem value="driveways">Driveways</SelectItem>
                        <SelectItem value="outdoor-kitchens">Outdoor Kitchens & Fire Features</SelectItem>
                        <SelectItem value="water-features">Water Features</SelectItem>
                        <SelectItem value="pergolas-gazebos">Pergolas & Gazebos</SelectItem>
                        <SelectItem value="lawn-care">Lawn Care & Maintenance</SelectItem>
                        <SelectItem value="garden-design">Garden Design & Planting</SelectItem>
                        <SelectItem value="tree-services">Tree Services</SelectItem>
                        <SelectItem value="irrigation">Irrigation Systems</SelectItem>
                        <SelectItem value="landscape-lighting">Landscape Lighting</SelectItem>
                        <SelectItem value="seasonal-services">Seasonal Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-kelly-500 hover:bg-kelly-600">
                    <Link href="/contact">Send Message</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">(555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@azlandscaping.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Service Area</div>
                      <div className="text-gray-600">Greater Metro Area & Surrounding Counties</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Business Hours</div>
                      <div className="text-gray-600">Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-navy-900 text-white border-kelly-500">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">Emergency Services Available</h4>
                  <p className="mb-4">
                    Storm damage? Tree emergency? We offer 24/7 emergency services for urgent landscaping needs.
                  </p>
                  <Button variant="secondary" className="bg-white text-kelly-500 hover:bg-kelly-50">
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-kelly-400" />
                <span className="text-2xl font-bold">A-Z Landscaping</span>
              </div>
              <p className="text-gray-400">
                Transforming outdoor spaces with professional landscaping services since 2008. Your trusted partner for
                all landscaping needs.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hardscape Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/patios-walkways" className="hover:text-white transition-colors">
                    Patios & Walkways
                  </Link>
                </li>
                <li>
                  <Link href="/services/retaining-walls" className="hover:text-white transition-colors">
                    Retaining Walls
                  </Link>
                </li>
                <li>
                  <Link href="/services/driveways" className="hover:text-white transition-colors">
                    Driveways
                  </Link>
                </li>
                <li>
                  <Link href="/services/outdoor-kitchens-fire-features" className="hover:text-white transition-colors">
                    Outdoor Kitchens & Fire Features
                  </Link>
                </li>
                <li>
                  <Link href="/services/water-features" className="hover:text-white transition-colors">
                    Water Features
                  </Link>
                </li>
                <li>
                  <Link href="/services/pergolas-gazebos" className="hover:text-white transition-colors">
                    Pergolas & Gazebos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Landscaping Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/lawn-care-maintenance" className="hover:text-white transition-colors">
                    Lawn Care & Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/services/garden-design-planting" className="hover:text-white transition-colors">
                    Garden Design & Planting
                  </Link>
                </li>
                <li>
                  <Link href="/services/tree-services" className="hover:text-white transition-colors">
                    Tree Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/irrigation-systems" className="hover:text-white transition-colors">
                    Irrigation Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-lighting" className="hover:text-white transition-colors">
                    Landscape Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/services/seasonal-services" className="hover:text-white transition-colors">
                    Seasonal Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@azlandscaping.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Landscape Lane</span>
                </div>
                <div className="ml-6">
                  <span>Anytown, USA 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} A-Z Landscaping. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
