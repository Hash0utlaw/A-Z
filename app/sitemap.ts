import type { MetadataRoute } from "next"

// IMPORTANT: Replace this with your actual production domain
const BASE_URL = "https://www.a-z-landscaping.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Define static pages
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/transformations", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Define service page slugs (based on your app/services/page.tsx)
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
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Define transformation category page slugs
  // (based on app/transformations/backyard-patios/page.tsx and slugs in app/portfolio/page.tsx)
  const transformationCategorySlugs = [
    "backyard-patios",
    "front-yard-makeovers",
    "outdoor-kitchens",
    "water-features-gardens",
    "commercial-projects",
    "sustainable-landscapes",
    // Add any other transformation category page slugs here
  ]

  const transformationPages = transformationCategorySlugs.map((slug) => ({
    url: `${BASE_URL}/transformations/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...transformationPages]
}
