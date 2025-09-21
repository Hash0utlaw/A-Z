"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import OptimizedImage from "@/components/optimized-image"
import { countries } from "@/lib/countries" // Ensure this file exists

import { Loader2, Briefcase, Users, Leaf, UploadCloud } from "lucide-react"

const careerFormSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^[0-9()-.\s+]+$/, { message: "Please enter a valid phone number." }),
  positionOfInterest: z.string().optional(),
  experience: z.string().min(10, { message: "Please briefly describe your experience (min 10 characters)." }),
  whyJoin: z.string().min(10, { message: "Please tell us why you want to join (min 10 characters)." }),
  country: z.string().optional(),
  resume: z.any().optional(), // For react-hook-form; actual file handling via 'selectedFile' state
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy." }),
  }),
})

type CareerFormValues = z.infer<typeof careerFormSchema>

export default function CareersPageClient() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const form = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      positionOfInterest: "",
      experience: "",
      whyJoin: "",
      country: "",
      agreeToTerms: false,
      resume: undefined,
    },
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast({
          title: "File too large",
          description: "Resume file should not exceed 5MB.",
          variant: "destructive",
        })
        setFileName(null)
        setSelectedFile(null)
        form.setValue("resume", undefined) // Clear RHF value
        event.target.value = "" // Clear the input
        return
      }
      setFileName(file.name)
      setSelectedFile(file)
      form.setValue("resume", event.target.files) // Set RHF value
    } else {
      setFileName(null)
      setSelectedFile(null)
      form.setValue("resume", undefined) // Clear RHF value
    }
  }

  async function onSubmit(data: CareerFormValues) {
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("fullName", data.fullName)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    if (data.positionOfInterest) {
      formData.append("positionOfInterest", data.positionOfInterest)
    }
    formData.append("experience", data.experience)
    formData.append("whyJoin", data.whyJoin)
    if (data.country) {
      formData.append("country", data.country)
    }

    if (selectedFile) {
      formData.append("resume", selectedFile)
    }

    try {
      const response = await fetch("/api/apply", {
        // Corrected API endpoint
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "Application Submitted!",
          description:
            "Thank you for your interest. We'll review your application and be in touch if there's a potential fit.",
        })
        form.reset()
        setFileName(null)
        setSelectedFile(null)
        const fileInput = document.getElementById("resume-upload") as HTMLInputElement | null
        if (fileInput) fileInput.value = ""
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "An error occurred. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-kelly-50 via-emerald-50 to-teal-50">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-navy-100 text-navy-700 hover:bg-navy-200 py-1 px-3">
              <Briefcase className="mr-2 h-4 w-4" /> We&apos;re Hiring!
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">Grow Your Career with A-Z Landscapes</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              At A-Z Landscapes, we&apos;re passionate about transforming outdoor spaces and creating lasting beauty for
              our clients. We value teamwork, dedication, and a love for the great outdoors. If you&apos;re looking for
              a dynamic work environment where your skills can flourish, you&apos;ve come to the right place.
            </p>
            <Button size="lg" className="bg-kelly-500 hover:bg-kelly-600 text-white" asChild>
              <Link href="#application-form">Apply Now</Link>
            </Button>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy-800 text-center mb-12">Why Build Your Future with Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-kelly-50 rounded-lg shadow-sm">
                <Leaf className="h-12 w-12 text-kelly-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-700 mb-2">Passion for Landscaping</h3>
                <p className="text-gray-600">
                  Work on diverse projects, from intricate garden designs to large-scale hardscape installations.
                </p>
              </div>
              <div className="p-6 bg-navy-50 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-navy-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-kelly-700 mb-2">Supportive Team Culture</h3>
                <p className="text-gray-600">
                  Join a collaborative team that values respect, learning, and mutual growth.
                </p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-lg shadow-sm">
                <Briefcase className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-700 mb-2">Opportunities to Grow</h3>
                <p className="text-gray-600">
                  We invest in our employees&apos; development with training and advancement possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-bold text-navy-800 mb-2 text-center">Apply to Join Our Team</h2>
              <p className="text-gray-600 mb-8 text-center">
                Interested in a career with A-Z Landscapes? Fill out the form below to express your interest. We are
                always looking for talented and dedicated individuals.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-700">Full Name*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., John Doe"
                            {...field}
                            className="border-gray-300 focus:border-kelly-500 focus:ring-kelly-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-700">Email Address*</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              {...field}
                              className="border-gray-300 focus:border-kelly-500 focus:ring-kelly-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-700">Phone Number*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(704) 989-4839"
                              {...field}
                              className="border-gray-300 focus:border-kelly-500 focus:ring-kelly-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="positionOfInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-700">Position of Interest (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-kelly-500 focus:ring-kelly-500">
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="landscape-technician">Landscape Technician / Crew Member</SelectItem>
                            <SelectItem value="team-lead">Team Lead / Foreman</SelectItem>
                            <SelectItem value="hardscape-installer">Hardscape Installer</SelectItem>
                            <SelectItem value="irrigation-specialist">Irrigation Specialist</SelectItem>
                            <SelectItem value="garden-designer">Garden Designer</SelectItem>
                            <SelectItem value="sales-estimator">Sales / Estimator</SelectItem>
                            <SelectItem value="general-interest">General Interest / Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          If your desired position isn&apos;t listed, please describe it in the experience section.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-700">Relevant Experience*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe your landscaping or related experience, skills, and any certifications."
                            className="min-h-[120px] border-gray-300 focus:border-kelly-500 focus:ring-kelly-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="whyJoin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-700">Why do you want to join A-Z Landscapes?*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what motivates you and why you'd be a great fit for our team."
                            className="min-h-[100px] border-gray-300 focus:border-kelly-500 focus:ring-kelly-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Country field - assuming lib/countries.ts exists */}
                  <FormField
                    control={form.control}
                    name="country" // Assuming you want to add this field back
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-700">Country (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-kelly-500 focus:ring-kelly-500">
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country.code} value={country.name}>
                                {country.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="resume" // This name matches the schema
                    render={({ fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-navy-700">Upload Resume (Optional)</FormLabel>
                        <FormControl>
                          <div className="relative flex items-center justify-center w-full">
                            <label
                              htmlFor="resume-upload"
                              className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-8 h-8 mb-2 text-gray-500" />
                                <p className="mb-1 text-sm text-gray-500">
                                  <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
                                {fileName && <p className="text-xs text-kelly-600 mt-1">{fileName}</p>}
                              </div>
                            </label>
                            <Input
                              id="resume-upload"
                              type="file"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              accept=".pdf,.doc,.docx,.txt"
                              onChange={handleFileChange}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>Accepted file types: PDF, DOC, DOCX, TXT. Max file size: 5MB.</FormDescription>
                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-gray-200 p-4 shadow-sm">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} id="agreeToTerms" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel htmlFor="agreeToTerms" className="text-sm font-medium text-gray-700">
                            I acknowledge that I have read and understood the{" "}
                            <Link href="/privacy-policy" className="underline text-kelly-600 hover:text-kelly-700">
                              Privacy Policy
                            </Link>{" "}
                            regarding my application data.*
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-kelly-500 hover:bg-kelly-600 text-white py-3 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>

        {/* Our Values/Culture Snippet */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Our Commitment to Excellence</h2>
              <OptimizedImage
                src="/careers/team-working.png" // Ensure this image exists
                alt="A-Z Landscapes team collaborating on a project"
                width={700}
                height={400}
                className="rounded-lg shadow-xl mx-auto mb-6"
              />
              <p className="text-lg text-gray-700 mb-4">
                At A-Z Landscapes, we believe in quality craftsmanship, exceptional customer service, and fostering a
                work environment where every team member can thrive. We are dedicated to sustainable practices and
                innovative solutions in all our landscaping endeavors.
              </p>
              <p className="text-lg text-gray-700">
                If you share our commitment to excellence and have a passion for creating beautiful, functional outdoor
                spaces, we encourage you to apply.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Toaster />
    </>
  )
}
