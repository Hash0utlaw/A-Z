"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox" // Assuming you have this from shadcn/ui
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Loader2, Briefcase, Users, Leaf, UploadCloud } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import OptimizedImage from "@/components/optimized-image" // Assuming this component exists
import { useState } from "react"

const careerFormSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^[0-9()-.\s]+$/, { message: "Please enter a valid phone number." }),
  positionOfInterest: z.string().optional(),
  experience: z.string().min(10, { message: "Please briefly describe your experience (min 10 characters)." }),
  whyJoin: z.string().min(10, { message: "Please tell us why you want to join (min 10 characters)." }),
  resume: z.any().optional(), // Basic handling for file upload, more robust solution needed for actual upload
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions." }),
  }),
})

type CareerFormValues = z.infer<typeof careerFormSchema>

export default function CareersPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const form = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      positionOfInterest: "",
      experience: "",
      whyJoin: "",
      agreeToTerms: false,
    },
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileName(event.target.files[0].name)
      // Here you would typically also handle the file data itself
      // For this example, we're just setting the name.
      // form.setValue('resume', event.target.files[0]) // If you want to store the file object in form state
    } else {
      setFileName(null)
      // form.setValue('resume', null)
    }
  }

  async function onSubmit(data: CareerFormValues) {
    setIsSubmitting(true)
    console.log("Career Application Data:", data)

    // Simulate API call for form submission
    // In a real application, you would send this data to your backend
    // and handle file uploads appropriately (e.g., to Vercel Blob or S3)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Application Submitted!",
      description:
        "Thank you for your interest. We will review your application and get back to you if there's a suitable opening.",
    })
    form.reset()
    setFileName(null)
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
                              placeholder="(555) 123-4567"
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
                              <SelectValue placeholder="Select a position or type 'Other'" />
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

                  <FormField
                    control={form.control}
                    name="resume"
                    render={(
                      { field }, // field is not directly used for input type="file" with RHF in this basic setup
                    ) => (
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
                              <Input
                                id="resume-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                // {...field} // RHF's field spread might not work as expected for file inputs without custom register
                              />
                            </label>
                          </div>
                        </FormControl>
                        <FormDescription>Accepted file types: PDF, DOC, DOCX. Max file size: 5MB.</FormDescription>
                        <FormMessage />
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
                            I acknowledge that the information provided is true and accurate, and I consent to A-Z
                            Landscapes contacting me regarding potential employment.*
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
                src="/careers/team-working.png"
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

// Note: For actual file uploads, you'll need a backend handler.
// The 'resume' field in the form schema and the file input are placeholders for UI.
// You'd typically use a service like Vercel Blob, AWS S3, or another storage solution,
// and handle the upload in the onSubmit function via an API route.
