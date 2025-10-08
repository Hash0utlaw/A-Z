"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <Cookie className="h-6 w-6 text-kelly-600" />
              <CardTitle className="text-xl">We Value Your Privacy</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 -mt-2 -mr-2"
              onClick={handleDecline}
              aria-label="Close cookie banner"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="text-base">
            We use cookies to enhance your browsing experience and analyze our traffic.
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="text-sm text-gray-600">
            By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more
            about how we use cookies in our{" "}
            <Link href="/cookie-policy" className="text-kelly-600 hover:text-kelly-700 underline font-medium">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-kelly-600 hover:text-kelly-700 underline font-medium">
              Privacy Policy
            </Link>
            . For information about your data rights, visit our{" "}
            <Link href="/gdpr" className="text-kelly-600 hover:text-kelly-700 underline font-medium">
              GDPR page
            </Link>
            .
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-3">
          <Button onClick={handleAccept} className="w-full sm:w-auto bg-kelly-600 hover:bg-kelly-700">
            Accept All Cookies
          </Button>
          <Button onClick={handleDecline} variant="outline" className="w-full sm:w-auto bg-transparent">
            Decline Non-Essential
          </Button>
          <Button asChild variant="ghost" className="w-full sm:w-auto">
            <Link href="/cookie-policy">Manage Preferences</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
