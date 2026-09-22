"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function PhoneClickTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest('a[href^="tel:"]')
      if (!target) return

      window.gtag?.("event", "conversion", { send_to: process.env.NEXT_PUBLIC_GADS_CALL_LABEL })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
