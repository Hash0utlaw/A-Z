import type { Metadata } from "next"
import CareersPageClient from "./CareersPageClient"

export const metadata: Metadata = {
  title: "Join Our Team | Careers at A-Z Landscapes",
  description:
    "Looking for a rewarding career in landscaping? A-Z Landscapes is hiring passionate individuals. Apply today and grow with us!",
}

export default function CareersPage() {
  return <CareersPageClient />
}
