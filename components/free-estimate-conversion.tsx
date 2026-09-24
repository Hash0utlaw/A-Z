"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function FreeEstimateConversion() {
  useEffect(() => {
    window.gtag?.("event", "conversion", { send_to: process.env.NEXT_PUBLIC_GADS_FORM_LABEL })
    window.gtag?.("event", "generate_lead")
  }, [])

  return null
}
