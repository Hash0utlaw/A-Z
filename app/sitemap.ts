import type { MetadataRoute } from "next"
import { getAllServiceAreaSlugs } from "@/lib/service-areas"

const BASE_URL = "https://www.a-zlandscapes.com"

// Fixed build date instead of `new Date()` so the sitemap doesn't
// report every URL as modified on every request.
const BUILD_DATE = new Date("2026-09-22")

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/gdpr", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Define service page slugs with high priority for SEO
  const serviceSlugs = [
    "patios-walkways",
    "retaining-walls",
    "driveways",
    "outdoor-kitchens-fire-features",
    "water-features",
    "pergolas-gazebos",
    "garden-design-planting",
    "lawn-care-maintenance",
    "tree-services",
    "turf-installation",
    "irrigation-systems",
    "landscape-lighting",
    "seasonal-services",
  ]

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const areaSlugs = getAllServiceAreaSlugs()

  const serviceAreaPages = areaSlugs.map((slug) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const serviceAreaIndexPage = {
    url: `${BASE_URL}/service-areas`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }

  const allPages = [...staticPages, ...servicePages, ...serviceAreaPages, serviceAreaIndexPage]

  return allPages.sort((a, b) => b.priority - a.priority)
}
