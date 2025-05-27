"use client"

import { useState } from "react"
import SimpleLightbox from "./simple-lightbox"

interface GalleryItem {
  image: string
  title: string
  description?: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const lightboxImages = items.map((item) => ({
    src: item.image,
    alt: item.title,
  }))

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading={index < 6 ? "eager" : "lazy"}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.description && <p className="text-sm text-white/80">{item.description}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SimpleLightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={lightboxImages}
        currentIndex={currentImageIndex}
      />
    </>
  )
}
