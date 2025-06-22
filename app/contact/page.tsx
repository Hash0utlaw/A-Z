"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Quote request form schema
const quoteFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^[0-9()-.\s]+$/, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your property address" }),
  serviceType: z.string({ required_error: "Please select a service type" }),
  budget: z.string().optional(),
  timeframe: z.string().optional(),
  hearAbout: z.string().optional(),
  projectDetails: z.string().min(10, { message: "Please provide some details about your project" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
})

// Question form schema
const questionFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Your question must be at least 10 characters" }),
})

// Emergency form schema
const emergencyFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^[0-9()-.\s]+$/, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your property address" }),
  issue: z.string({ required_error: "Please select the type of emergency" }),
  details: z.string().min(10, { message: "Please provide details about the emergency" }),
})

type QuoteFormValues = z.infer<typeof quoteFormSchema>
type QuestionFormValues = z.infer<typeof questionFormSchema>
type EmergencyFormValues = z.infer<typeof emergencyFormSchema>

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("quote")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Quote form
  const quoteForm = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      projectDetails: "",
    },
  })

  // Question form
  const questionForm = useForm<QuestionFormValues>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Emergency form
  const emergencyForm = useForm<EmergencyFormValues>({
    resolver: zodResolver(emergencyFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      details: "",
    },
  })

  // Form submission handlers
  function onQuoteSubmit(data: QuoteFormValues) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsSubmitting(false)
      toast({
        title: "Quote Request Submitted",
        description: "We'll get back to you within 24 hours.",
      })
      quoteForm.reset()
    }, 1500)
  }

  function onQuestionSubmit(data: QuestionFormValues) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsSubmitting(false)
      toast({
        title: "Question Submitted",
        description: "We'll respond to your inquiry soon.",
      })
      questionForm.reset()
    }, 1500)
  }

  function onEmergencySubmit(data: EmergencyFormValues) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsSubmitting(false)
      toast({
        title: "Emergency Request Submitted",
        description: "Our team has been notified and will contact you shortly.",
        variant: "destructive",
      })
      emergencyForm.reset()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelly-50 to-kelly-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch With Our Team</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our services or ready to start your project? We're here to help transform your
              outdoor space into something beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="quote"
            className="w-full max-w-4xl mx-auto"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="quote">Request a Quote</TabsTrigger>
              <TabsTrigger value="question">Ask a Question</TabsTrigger>
              <TabsTrigger value="emergency">Emergency Service</TabsTrigger>
            </TabsList>

            {/* Quote Request Form */}
            <TabsContent value="quote">
              <Card className="border-navy-100">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Free Project Estimate</h2>
                    <p className="text-gray-600">
                      Fill out the form below with details about your project, and we'll get back to you within 24 hours
                      with a free estimate.
                    </p>
                  </div>

                  <Form {...quoteForm}>
                    <form onSubmit={quoteForm.handleSubmit(onQuoteSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address*</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number*</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={quoteForm.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property Address*</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St, Anytown, USA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Type*</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
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
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Approximate Budget</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                  <SelectItem value="over-50k">Over $50,000</SelectItem>
                                  <SelectItem value="not-sure">Not Sure</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="timeframe"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Desired Timeframe</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a timeframe" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="asap">As Soon As Possible</SelectItem>
                                  <SelectItem value="1-month">Within 1 Month</SelectItem>
                                  <SelectItem value="1-3-months">1-3 Months</SelectItem>
                                  <SelectItem value="3-6-months">3-6 Months</SelectItem>
                                  <SelectItem value="6-plus-months">6+ Months</SelectItem>
                                  <SelectItem value="just-planning">Just Planning</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="hearAbout"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>How did you hear about us?</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="search">Search Engine</SelectItem>
                                  <SelectItem value="social">Social Media</SelectItem>
                                  <SelectItem value="referral">Friend/Family Referral</SelectItem>
                                  <SelectItem value="drive-by">Saw Your Work</SelectItem>
                                  <SelectItem value="repeat">Previous Customer</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={quoteForm.control}
                        name="projectDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details*</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your project in detail, including any specific features or materials you're interested in."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={quoteForm.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                            <FormControl>
                              <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-kelly-500 focus:ring-kelly-500"
                                checked={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the terms and have read the{" "}
                                <Link href="/privacy-policy" className="underline text-kelly-600 hover:text-kelly-700">
                                  Privacy Policy
                                </Link>
                                .*
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-kelly-500 hover:bg-kelly-600" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        Fields marked with an asterisk (*) are required.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* General Question Form */}
            <TabsContent value="question">
              <Card className="border-navy-100">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Ask a Question</h2>
                    <p className="text-gray-600">
                      Have a question about our services or need more information? We're happy to help.
                    </p>
                  </div>

                  <Form {...questionForm}>
                    <form onSubmit={questionForm.handleSubmit(onQuestionSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={questionForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={questionForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address*</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={questionForm.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject*</FormLabel>
                            <FormControl>
                              <Input placeholder="Question about your services" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={questionForm.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Question*</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please type your question here..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full bg-kelly-500 hover:bg-kelly-600" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Question"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Emergency Service */}
            <TabsContent value="emergency">
              <Card className="border-red-200">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency Landscaping Services</h2>
                      <p className="text-gray-600">
                        For urgent issues like fallen trees, storm damage, or irrigation leaks that require immediate
                        attention.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">For immediate assistance:</h3>
                    <div className="flex items-center space-x-2 text-xl font-bold text-red-600 mb-4">
                      <Phone className="h-5 w-5" />
                      <span>(555) 911-TREE</span>
                    </div>
                    <p className="text-gray-700">
                      Our emergency response team is available 24/7 for urgent landscaping and tree issues.
                    </p>
                  </div>

                  <Form {...emergencyForm}>
                    <form onSubmit={emergencyForm.handleSubmit(onEmergencySubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={emergencyForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={emergencyForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number*</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={emergencyForm.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property Address*</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St, Anytown, USA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={emergencyForm.control}
                        name="issue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Issue*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select emergency type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="fallen-tree">Fallen Tree</SelectItem>
                                <SelectItem value="hanging-limb">Dangerous Hanging Limb</SelectItem>
                                <SelectItem value="irrigation-leak">Major Irrigation Leak</SelectItem>
                                <SelectItem value="drainage-issue">Flooding/Drainage Issue</SelectItem>
                                <SelectItem value="structure-damage">Landscape Structure Damage</SelectItem>
                                <SelectItem value="other">Other Emergency</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={emergencyForm.control}
                        name="details"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Details*</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe the emergency situation in detail..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Emergency Request"
                        )}
                      </Button>

                      <p className="text-sm text-center text-gray-700">
                        For fastest service, please call our emergency line while submitting this form.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-kelly-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600 mb-1">Main Office: (555) 123-4567</p>
                      <p className="text-gray-600">Emergency: (555) 911-TREE</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 mb-1">General Inquiries: info@azlandscaping.com</p>
                      <p className="text-gray-600">Customer Support: support@azlandscaping.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        123 Landscape Lane
                        <br />
                        Anytown, USA 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-navy-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                      <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                        <div>Monday - Friday</div>
                        <div>7:00 AM - 6:00 PM</div>
                        <div>Saturday</div>
                        <div>8:00 AM - 4:00 PM</div>
                        <div>Sunday</div>
                        <div>Closed</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <Link
                        href="#"
                        className="bg-kelly-100 p-3 rounded-full hover:bg-kelly-200 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-6 w-6 text-kelly-500" />
                      </Link>
                      <Link
                        href="#"
                        className="bg-kelly-100 p-3 rounded-full hover:bg-kelly-200 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-6 w-6 text-kelly-500" />
                      </Link>
                      <Link
                        href="#"
                        className="bg-kelly-100 p-3 rounded-full hover:bg-kelly-200 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-6 w-6 text-kelly-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
                <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
                  <Image
                    src="/location-map.png"
                    alt="Map showing A-Z Landscaping location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                      <h3 className="font-bold text-gray-900 mb-1">A-Z Landscaping</h3>
                      <p className="text-gray-600 text-sm mb-2">123 Landscape Lane, Anytown, USA 12345</p>
                      <Button size="sm" className="bg-kelly-500 hover:bg-kelly-600 text-white">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Area</h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve residential and commercial clients throughout the greater Anytown area, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Anytown",
                      "Springfield",
                      "Riverside",
                      "Oakwood",
                      "Maplewood",
                      "Greenville",
                      "Lakeside",
                      "Hillcrest",
                    ].map((city, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-kelly-500" />
                        <span className="text-gray-700">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I get a quote for my landscaping project?",
                answer:
                  "You can request a quote by filling out our online form, calling our office, or sending us an email. We'll schedule a consultation to assess your needs and provide a detailed estimate.",
              },
              {
                question: "What is your service area?",
                answer:
                  "We serve the greater Anytown area, including Springfield, Riverside, Oakwood, Maplewood, Greenville, Lakeside, and Hillcrest. If you're unsure if we service your area, please contact us.",
              },
              {
                question: "Do you offer maintenance plans for commercial properties?",
                answer:
                  "Yes, we offer customized maintenance plans for commercial properties of all sizes. Our commercial services include regular lawn care, seasonal cleanups, snow removal, and more.",
              },
              {
                question: "How far in advance should I book my landscaping project?",
                answer:
                  "We recommend booking 2-4 weeks in advance for maintenance services and 4-8 weeks for installation projects during peak season (spring and summer). For larger projects, booking 2-3 months ahead is advisable.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-kelly-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" className="border-kelly-500 text-kelly-500 hover:bg-kelly-50">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  )
}
