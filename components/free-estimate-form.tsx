"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Upload } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { PROJECT_TYPES } from "@/lib/project-types"

interface FreeEstimateFormProps {
  source: string
}

function validatePhone(phone: string) {
  return phone.replace(/\D/g, "").length === 10
}

export function FreeEstimateForm({ source }: FreeEstimateFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    service: "",
    message: "",
  })
  const [photo, setPhoto] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle")
  const [phoneError, setPhoneError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isPhoneValid = validatePhone(formData.phone)
    if (!isPhoneValid) {
      setPhoneError("Please enter a valid 10-digit phone number")
      return
    }
    setPhoneError("")

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const body = new FormData()
      body.append("name", formData.name)
      body.append("phone", formData.phone)
      if (formData.email) body.append("email", formData.email)
      if (formData.zip) body.append("zip", formData.zip)
      if (formData.service) body.append("service", formData.service)
      if (formData.message) body.append("message", formData.message)
      body.append("source", source)
      if (photo) body.append("photo", photo)

      const response = await fetch("/api/contact", {
        method: "POST",
        body,
      })

      if (response.ok) {
        router.push("/free-estimate/thanks")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Free estimate form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Get Your Free Estimate</h2>

      {submitStatus === "error" && (
        <Alert className="border-red-300 bg-red-50">
          <AlertDescription className="text-red-800">
            Something went wrong sending your request. Please call us directly at{" "}
            <strong>{BUSINESS.phoneDisplay}</strong>.
          </AlertDescription>
        </Alert>
      )}

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
            if (phoneError) setPhoneError("")
          }}
          className={`mt-1 ${phoneError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
        />
        {phoneError && <p className="text-sm text-red-600 mt-1">{phoneError}</p>}
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="more-details" className="border-none">
          <AccordionTrigger className="justify-start gap-1.5 py-2 text-sm font-semibold text-navy-700 hover:no-underline hover:text-navy-800">
            Add more details (optional)
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="zip">Zip Code</Label>
              <Input
                id="zip"
                value={formData.zip}
                onChange={(e) => setFormData((prev) => ({ ...prev, zip: e.target.value }))}
                className="mt-1"
                placeholder="28078"
              />
            </div>

            <div>
              <Label htmlFor="service">Project Type (Optional)</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
              >
                <SelectTrigger id="service" className="mt-1">
                  <SelectValue placeholder="Select a project type" />
                </SelectTrigger>
                <SelectContent>
                  {PROJECT_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="photo">Photo of your project area (optional)</Label>
              <div className="mt-1 flex items-center gap-2">
                <Label
                  htmlFor="photo"
                  className="cursor-pointer inline-flex items-center gap-2 border border-input rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                >
                  <Upload className="h-4 w-4" />
                  {photo ? photo.name : "Choose a photo"}
                </Label>
                <input
                  id="photo"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                  className="hidden"
                  onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="mt-1"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-kelly-500 hover:bg-kelly-600 text-white text-lg py-6 h-auto"
      >
        {isSubmitting ? "Sending..." : "Get My Free Estimate"}
      </Button>

      <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-1">
        <Phone className="h-4 w-4" />
        Or call {BUSINESS.phoneDisplay} — we respond within 24 hours
      </p>
    </form>
  )
}
