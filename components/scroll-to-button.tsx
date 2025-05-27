"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ScrollToButtonProps extends ButtonProps {
  targetId: string
  offset?: number
}

export function ScrollToButton({ targetId, children, className, offset = 0, ...props }: ScrollToButtonProps) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId)
    if (!targetElement) return

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })

    // Update URL without page reload
    window.history.pushState(null, "", `#${targetId}`)

    // Set focus to the target element for accessibility
    targetElement.tabIndex = -1
    targetElement.focus({ preventScroll: true })
  }

  return (
    <Button className={cn(className)} onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
