export interface LandingVariant {
  h1: string
  subhead: string
}

export const LANDING_VARIANTS: Record<string, LandingVariant> = {
  patios: {
    h1: "Custom Paver Patios in Huntersville & Lake Norman",
    subhead: "Beautiful outdoor living space built for entertaining, rain or shine.",
  },
  walls: {
    h1: "Retaining Walls Built to Last in Huntersville & Lake Norman",
    subhead: "Engineered slope control, drainage, and erosion protection that holds up for decades.",
  },
  kitchens: {
    h1: "Outdoor Kitchens & Fire Pits in Huntersville & Lake Norman",
    subhead: "Cook, gather, and entertain outside all year long.",
  },
  design: {
    h1: "Landscape Design & Installation in Huntersville & Lake Norman",
    subhead: "A full-yard transformation, designed and built by one local team.",
  },
}

export const DEFAULT_VARIANT: LandingVariant = {
  h1: "Landscaping & Hardscaping in Huntersville & Lake Norman",
  subhead: "Free estimates on patios, walls, outdoor kitchens, and full landscape design.",
}

export function getLandingVariant(s: string | undefined): LandingVariant {
  if (!s) return DEFAULT_VARIANT
  return LANDING_VARIANTS[s] ?? DEFAULT_VARIANT
}
