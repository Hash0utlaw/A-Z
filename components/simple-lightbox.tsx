"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface SimpleLightboxProps {
  isOpen: boolean
  onClose: () => void
  images: { src: string; alt: string }[]
  currentIndex: number
}

export default function SimpleLightbox({ isOpen, onClose, images, currentIndex }: SimpleLightboxProps) {
  const [index, setIndex] = useState(currentIndex)

  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
      } else if (e.key === "ArrowRight") {
        setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Prevent scrolling when lightbox is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, images.length, onClose])

  if (!isOpen) return null

  const goToPrevious = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const goToNext = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={onClose}>
      <div
        className="relative max-w-4xl w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <button
          className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
          onClick={goToPrevious}
        >
          <span className="sr-only">Previous</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
          onClick={goToNext}
        >
          <span className="sr-only">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="relative w-full h-full flex items-center justify-center p-4">
          <img
            src={images[index].src || "/placeholder.svg"}
            alt={images[index].alt}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>

        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}
