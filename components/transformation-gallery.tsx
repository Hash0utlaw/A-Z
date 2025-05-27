"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BeforeAfterSlider } from "./before-after-slider"
import { Button } from "@/components/ui/button"

interface TransformationOption {
  id: number
  beforeImage: string
  afterImage: string
  title: string
}

interface TransformationGalleryProps {
  options: TransformationOption[]
  category: string
}

export function TransformationGallery({ options, category }: TransformationGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? options.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === options.length - 1 ? 0 : prev + 1))
  }

  const currentOption = options[currentIndex]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{category} Transformations</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {options.length}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handlePrevious} aria-label="Previous transformation">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next transformation">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h4 className="text-lg font-medium text-gray-900 mb-2">{currentOption.title}</h4>
        </div>
        <BeforeAfterSlider
          beforeImage={currentOption.beforeImage}
          afterImage={currentOption.afterImage}
          beforeAlt={`Before: ${currentOption.title}`}
          afterAlt={`After: ${currentOption.title}`}
          height={500}
        />
      </div>
    </div>
  )
}
