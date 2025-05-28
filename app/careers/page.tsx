"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  GraduationCap,
  Clock,
  Heart,
  Briefcase,
  Calendar,
  DollarSign,
  Award,
  Mail,
  Phone,
  CheckCircle,
  Loader2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Job categories data
const jobCategories = [
  {
    title: "Landscape Maintenance",
    description:
      "Join our maintenance crews responsible for keeping residential and commercial properties looking their best. Positions include crew members, equipment operators, and crew leaders.",
    icon: <Clock className="h-10 w-10 text-kelly-500" />,
  },
  {
    title: "Landscape Installation",
    description:
      "Be part of our installation teams that transform outdoor spaces with plants, trees, and softscape elements. Roles include planting specialists, irrigation technicians, and project leads.",
    icon: <Users className="h-10 w-10 text-kelly-500" />,
  },
  {
    title: "Hardscape Construction",
    description:
      "Work on our hardscape teams building patios, walkways, retaining walls, and other permanent structures. Positions include hardscape installers, masons, and construction leads.",
    icon: <Briefcase className="h-10 w-10 text-kelly-500" />,
  },
  {
    title: "Design & Management",
    description:
      "Office-based roles including landscape designers, project managers, estimators, and administrative positions that support our field operations and client relationships.",
    icon: <GraduationCap className="h-10 w-10 text-kelly-500" />,
  },
]

// Benefits data
const benefits = [
  {
    icon: <DollarSign className="h-10 w-10 text-kelly-500" />,
    title: "Competitive Pay",
    description: "We offer industry-leading compensation packages based on experience and skills.",
  },
  {
    icon: <Heart className="h-10 w-10 text-kelly-500" />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for full-time employees.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-kelly-500" />,
    title: "Paid Time Off",
    description: "Generous vacation, sick leave, and paid holidays to ensure work-life balance.",
  },
  {
    icon: <Award className="h-10 w-10 text-kelly-500" />,
    title: "Growth Opportunities",
    description: "Training, certifications, and clear paths for advancement within the company.",
  },
]

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id.replace("-", "")]: value,
    }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call with timeout
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Form submission would go here in a real implementation
    console.log("Form submitted:", formData)

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Scroll to the success message
    setTimeout(() => {
      document.getElementById("success-message")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
      resume: null,
    })

    // Scroll back to the form
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Join Our Team</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grow Your Career With A-Z Landscaping
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our team of passionate landscaping professionals and build a rewarding career transforming outdoor
                spaces. We offer competitive pay, benefits, and opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#job-categories">
                  <Button className="bg-kelly-500 hover:bg-kelly-600">View Job Categories</Button>
                </Link>
                <Link href="#application-form">
                  <Button variant="outline" className="border-navy-500 text-navy-700 hover:bg-navy-50">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/careers/team-working.png"
                  alt="A-Z Landscaping team working together on a project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-white" id="job-categories">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Job Categories</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
            <p className="text-lg text-gray-600">
              We offer a variety of positions across different specialties in the landscaping industry. Find the
              category that matches your skills and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobCategories.map((category, index) => (
              <Card key={index} className="border-navy-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50" id="why-work-with-us">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Why Work With Us</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join a Team That Values Your Growth</h2>
            <p className="text-lg text-gray-600">
              At A-Z Landscaping, we believe our success starts with our team. We're committed to creating a positive
              work environment where you can thrive professionally and personally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-navy-100">
                <CardContent className="pt-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white" id="application-form">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Apply Now</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600">
              Interested in working with us? Fill out the form below and we'll contact you about current openings that
              match your skills and experience.
            </p>
          </div>

          {isSubmitted ? (
            <div id="success-message" className="max-w-2xl mx-auto">
              <Alert className="bg-kelly-50 border-kelly-200">
                <CheckCircle className="h-5 w-5 text-kelly-500" />
                <AlertTitle className="text-kelly-700 text-xl font-bold mb-2">
                  Application Submitted Successfully!
                </AlertTitle>
                <AlertDescription className="text-kelly-700">
                  <p className="mb-4">
                    Thank you for your interest in joining the A-Z Landscaping team. We've received your application and
                    will review it shortly.
                  </p>
                  <p className="mb-6">
                    Our hiring team will contact you within 3-5 business days if your qualifications match our current
                    openings.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-navy-500 text-navy-700 hover:bg-navy-50"
                    >
                      Submit Another Application
                    </Button>
                    <Link href="/">
                      <Button className="bg-kelly-500 hover:bg-kelly-600">Return to Homepage</Button>
                    </Link>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <Card className="border-navy-100">
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Position Interested In</Label>
                      <select
                        id="position"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                        value={formData.position}
                        onChange={handleChange}
                      >
                        <option value="">Select a position category</option>
                        <option value="landscape-maintenance">Landscape Maintenance</option>
                        <option value="landscape-installation">Landscape Installation</option>
                        <option value="hardscape-construction">Hardscape Construction</option>
                        <option value="design-management">Design & Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <select
                        id="experience"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                        value={formData.experience}
                        onChange={handleChange}
                      >
                        <option value="">Select experience level</option>
                        <option value="entry">Entry Level (0-1 years)</option>
                        <option value="junior">1-3 years</option>
                        <option value="mid">3-5 years</option>
                        <option value="senior">5+ years</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about yourself</Label>
                      <Textarea
                        id="message"
                        placeholder="Share your relevant experience, skills, and why you're interested in joining our team"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume (Optional)</Label>
                      <Input id="resume" type="file" className="cursor-pointer" onChange={handleFileChange} />
                      <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX files only. Max 5MB.</p>
                    </div>

                    <Button type="submit" className="w-full bg-kelly-500 hover:bg-kelly-600" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our current openings or the application process, please don't hesitate
                  to contact our HR team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-navy-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">careers@azlandscaping.com</p>
                      <p className="text-sm text-gray-500">Email our HR team</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-navy-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">(555) 123-4567 ext. 2</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 9AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-navy-900 p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Our Hiring Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Submit your application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Initial phone screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>In-person interview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Job offer and onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Training and team integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
