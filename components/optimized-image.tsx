import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
}: OptimizedImageProps) {
  // Check if the src is a placeholder URL
  const isPlaceholder = src.includes("/placeholder.svg")

  // For placeholder images, use the Image component with the full URL
  if (isPlaceholder) {
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width ?? 800}
        height={height ?? 600}
        className={className}
        priority={priority}
      />
    )
  }

  // For regular images, use a regular img tag for simplicity
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
    />
  )
}
