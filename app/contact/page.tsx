"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, MessageSquare, Calendar, Award } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-kelly-500 text-white mb-6 text-sm px-3 py-1">Get Your Free Quote</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Bring Your Outdoor Vision to Life</h1>
              <p className="text-xl text-navy-100 mb-8">
                Ready to transform your outdoor space? Contact A-Z Landscapes today for a free consultation and
                personalized quote. We're here to help make your landscaping dreams a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-kelly-400 mr-2" />
                  <span className="text-lg">(704) 989-4839</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-kelly-400 mr-2" />
                  <span className="text-lg">Azlandscapesllc@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/zach-owner-headshot.jpeg"
                alt="Zach Wardell, Founder of A-Z Landscapes, ready to help with your project"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900 flex items-center">
                  <MessageSquare className="h-6 w-6 text-kelly-500 mr-2" />
                  Get Your Free Quote
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized quote for your
                  project.
                </p>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert className="mb-6 border-red-200 bg-red-50">
                    <AlertDescription className="text-red-800">
                      Sorry, there was an error sending your message. Please try again or call us directly at (704)
                      989-4839.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Project Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter the address where work will be performed"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-kelly-500 focus:border-kelly-500"
                    >
                      <option value="">Select a service...</option>
                      <option value="patios-walkways">Patios & Walkways</option>
                      <option value="retaining-walls">Retaining Walls</option>
                      <option value="fire-features">Fire Features</option>
                      <option value="outdoor-kitchens">Outdoor Kitchens</option>
                      <option value="water-features">Water Features</option>
                      <option value="lawn-care">Lawn Care & Maintenance</option>
                      <option value="garden-design">Garden Design & Planting</option>
                      <option value="tree-services">Tree Services</option>
                      <option value="irrigation">Irrigation Systems</option>
                      <option value="lighting">Landscape Lighting</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your project, timeline, budget range, and any specific ideas you have in mind..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-kelly-500 hover:bg-kelly-600 text-white"
                  >
                    {isSubmitting ? "Sending..." : "Get My Free Quote"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-kelly-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-kelly-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">Phone</h3>
                      <p className="text-gray-600">(704) 989-4839</p>
                      <p className="text-sm text-gray-500">Call or text for fastest response</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-kelly-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-kelly-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">Email</h3>
                      <p className="text-gray-600">Azlandscapesllc@gmail.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-kelly-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-kelly-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">Service Area</h3>
                      <p className="text-gray-600">Charlotte, NC and surrounding areas</p>
                      <p className="text-sm text-gray-500">50-mile radius from Charlotte</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-kelly-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-kelly-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-900">Why Choose A-Z Landscapes?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-kelly-500" />
                    <span className="text-gray-700">20+ years of experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-kelly-500" />
                    <span className="text-gray-700">Licensed and fully insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-kelly-500" />
                    <span className="text-gray-700">5-star customer satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-kelly-500" />
                    <span className="text-gray-700">Free consultations and quotes</span>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Services */}
              <Card className="shadow-lg border-orange-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800">Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Need emergency tree removal or storm damage cleanup? We offer 24/7 emergency services for urgent
                    situations.
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Emergency Line: (704) 989-4839
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Areas We Serve</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A-Z Landscapes proudly serves Charlotte, NC and the surrounding communities within a 50-mile radius.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              "Charlotte",
              "Gastonia",
              "Concord",
              "Huntersville",
              "Matthews",
              "Mint Hill",
              "Pineville",
              "Cornelius",
              "Davidson",
              "Mooresville",
              "Kannapolis",
              "Monroe",
              "Indian Trail",
              "Waxhaw",
              "Belmont",
              "Mount Holly",
            ].map((city) => (
              <div key={city} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-navy-800">{city}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? <span className="text-kelly-600 font-medium">Give us a call</span> - we may
              still be able to help!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
