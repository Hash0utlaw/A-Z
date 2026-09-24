import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServiceAreaPageTemplate from "@/components/service-area-page-template"
import { BUSINESS } from "@/lib/business"
import { getAllServiceAreaSlugs, getServiceArea } from "@/lib/service-areas"

interface ServiceAreaPageParams {
  params: { city: string }
}

export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((city) => ({ city }))
}

export function generateMetadata({ params }: ServiceAreaPageParams): Metadata {
  const area = getServiceArea(params.city)
  if (!area) return {}

  return {
    title: area.title,
    description: area.description,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
  }
}

export default function ServiceAreaPage({ params }: ServiceAreaPageParams) {
  const area = getServiceArea(params.city)
  if (!area) notFound()

  const nearbyAreas = area.nearbyAreas
    .map((slug) => {
      const match = getServiceArea(slug)
      return match ? { name: match.city, slug: match.slug } : null
    })
    .filter((value): value is { name: string; slug: string } => value !== null)

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Landscaping and Hardscaping Services",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phoneE164,
      url: BUSINESS.domain,
    },
    areaServed: {
      "@type": "City",
      name: area.city,
    },
    url: `${BUSINESS.domain}/service-areas/${area.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <ServiceAreaPageTemplate
        city={area.city}
        county={area.county}
        title={area.title}
        intro={area.intro}
        terrain={area.terrain}
        priorityServices={area.priorityServices}
        permitting={area.permitting}
        faqs={area.faqs}
        nearbyAreas={nearbyAreas}
      />
    </>
  )
}
