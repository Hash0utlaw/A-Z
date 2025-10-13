import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  sizes?: string
  fill?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  sizes,
  fill = false,
}: OptimizedImageProps) {
  if (fill) {
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes || "100vw"}
      />
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}
