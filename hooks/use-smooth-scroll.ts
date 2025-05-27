"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    // Function to handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      // Check if the link is an anchor link on the current page
      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (!targetElement) return

      e.preventDefault()

      // Scroll smoothly to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update URL without page reload
      window.history.pushState(null, "", href)

      // Set focus to the target element for accessibility
      targetElement.tabIndex = -1
      targetElement.focus({ preventScroll: true })
    }

    // Add event listener
    document.addEventListener("click", handleAnchorClick)

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}
