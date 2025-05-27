import type React from "react"
import type { Metadata } from "next"
import { MainNavigation } from "@/components/main-navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Before & After Transformations | A-Z Landscaping",
  description:
    "See dramatic before and after transformations of outdoor spaces by A-Z Landscaping. View our landscape and hardscape makeovers.",
}

export default function TransformationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNavigation />
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
