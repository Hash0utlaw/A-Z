import type { Metadata } from "next"
import HomeContent from "@/components/home-content"

export const metadata: Metadata = {
  title: "Landscaping & Hardscaping in Huntersville & Lake Norman",
  description:
    "A-Z Landscapes designs and builds custom patios, retaining walls, and landscapes for homeowners across Huntersville and the Lake Norman area of North Carolina.",
}

export default function HomePage() {
  return <HomeContent />
}
