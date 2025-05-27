"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  height?: number
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  height = 400,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const calculateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return

    const { left, width } = containerRef.current.getBoundingClientRect()
    const position = ((clientX - left) / width) * 100

    // Clamp the position between 0 and 100
    return Math.min(Math.max(position, 0), 100)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    const newPosition = calculateSliderPosition(e.clientX)
    if (newPosition !== undefined) {
      setSliderPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return
    const newPosition = calculateSliderPosition(e.touches[0].clientX)
    if (newPosition !== undefined) {
      setSliderPosition(newPosition)
    }
  }

  // Handle keyboard controls for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(prev - 5, 0))
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(prev + 5, 100))
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove, { passive: true })
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg shadow-md"
      style={{ height: `${height}px` }}
      aria-label="Before and after image comparison slider"
    >
      {/* Before Image (Full width) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage || "/placeholder.svg?height=800&width=1200&query=before"}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement
            target.src = "/before-text.png"
          }}
        />
      </div>

      {/* After Image (Partial width based on slider) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }} aria-hidden="true">
        <Image
          src={afterImage || "/placeholder.svg?height=800&width=1200&query=after"}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement
            target.src = "/after-text.png"
          }}
        />
      </div>

      {/* Slider Control */}
      <div className="absolute inset-y-0" style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}>
        <div className="absolute inset-y-0 w-0.5 bg-white"></div>
        <button
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-kelly-500 focus:ring-offset-2"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          aria-label="Drag to adjust before and after view"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          role="slider"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-kelly-500"
          >
            <path d="m9 18 6-6-6-6" />
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-sm font-medium px-2 py-1 rounded">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm font-medium px-2 py-1 rounded">
        After
      </div>
    </div>
  )
}
