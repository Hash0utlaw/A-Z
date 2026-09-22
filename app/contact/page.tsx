import type { Metadata } from "next"
import ContactContent from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Free Estimate",
  description:
    "Request a free landscaping or hardscaping estimate from A-Z Landscapes, proudly serving Huntersville, Lake Norman, and the greater Charlotte, NC area.",
}

export default function ContactPage() {
  return <ContactContent />
}
