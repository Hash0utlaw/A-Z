"use client"

import { Button } from "@/components/ui/button"

export function SkipNavigation() {
  const skipToMain = () => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView()
    }
  }

  return (
    <Button
      onClick={skipToMain}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-kelly-600 hover:bg-kelly-700 text-white"
      aria-label="Skip to main content"
    >
      Skip to main content
    </Button>
  )
}
