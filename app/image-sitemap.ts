import type { MetadataRoute } from "next"

// IMPORTANT: Replace this with your actual production domain
const BASE_URL = "https://www.a-z-landscaping.com"

export default function imageSitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Define image entries with proper metadata
  const imageEntries = [
    // Hero and Main Images
    {
      url: `${BASE_URL}/hero-landscape.png`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 1.0,
      images: [
        {
          url: `${BASE_URL}/hero-landscape.png`,
          title: "Professional Landscaping Services by A-Z Landscapes",
          caption: "Transform your outdoor space with expert landscape design and hardscape construction",
        },
      ],
    },

    // Owner and Team Images
    {
      url: `${BASE_URL}/zach-owner-headshot.jpeg`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.9,
      images: [
        {
          url: `${BASE_URL}/zach-owner-headshot.jpeg`,
          title: "Zach Wardell - Founder and Owner of A-Z Landscapes",
          caption: "Meet Zach, the passionate founder bringing 15+ years of landscaping expertise to every project",
        },
      ],
    },

    // Featured Project Images
    {
      url: `${BASE_URL}/user-uploads/backyard-fire-pit-patio-residential.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [
        {
          url: `${BASE_URL}/user-uploads/backyard-fire-pit-patio-residential.jpeg`,
          title: "Woodland Fire Pit Retreat - Custom Paver Patio with Stone Fire Pit",
          caption:
            "Stunning outdoor living space featuring circular stone fire pit, curved seating walls, and decorative dry creek drainage",
        },
      ],
    },

    {
      url: `${BASE_URL}/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [
        {
          url: `${BASE_URL}/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg`,
          title: "Aerial View - Complete Hardscape Installation with Fire Feature",
          caption:
            "Comprehensive outdoor living project showing paver patio, stone fire pit, landscaping, and drainage solutions",
        },
      ],
    },

    {
      url: `${BASE_URL}/user-uploads/concrete-pad-stone-walkway-residential.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/user-uploads/concrete-pad-stone-walkway-residential.jpeg`,
          title: "Professional Concrete Pad Installation with Stone Walkway",
          caption: "Durable concrete foundation work with integrated stone walkway design for residential property",
        },
      ],
    },

    {
      url: `${BASE_URL}/user-uploads/stone-walkway-residential.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/user-uploads/stone-walkway-residential.jpeg`,
          title: "Illuminated Stone Walkway with Landscape Lighting",
          caption:
            "Beautiful stone walkway with integrated landscape lighting for safe and elegant nighttime navigation",
        },
      ],
    },

    {
      url: `${BASE_URL}/user-uploads/butterfly-garden-flower-residential.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/user-uploads/butterfly-garden-flower-residential.jpeg`,
          title: "Pollinator-Friendly Butterfly Garden Design",
          caption:
            "Sustainable garden design featuring native plants and flowers to attract butterflies and beneficial insects",
        },
      ],
    },

    // Service Category Images - Patios & Walkways
    {
      url: `${BASE_URL}/patios-walkways/Patio-walkway-landscape-resident.jpg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/patios-walkways/Patio-walkway-landscape-resident.jpg`,
          title: "Professional Patio and Walkway Installation Services",
          caption: "Expert hardscape construction for patios, walkways, and outdoor living spaces",
        },
      ],
    },

    {
      url: `${BASE_URL}/patios-walkways/modern-paver-patio.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: `${BASE_URL}/patios-walkways/modern-paver-patio.png`,
          title: "Modern Paver Patio Installation",
          caption: "Contemporary paver patio design with clean lines and durable materials",
        },
      ],
    },

    // Service Category Images - Outdoor Kitchens & Fire Features
    {
      url: `${BASE_URL}/outdoor-kitchens-fire-features/hero.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/outdoor-kitchens-fire-features/hero.png`,
          title: "Custom Outdoor Kitchen and Fire Feature Construction",
          caption: "Professional outdoor kitchen and fire feature installation for ultimate outdoor entertaining",
        },
      ],
    },

    {
      url: `${BASE_URL}/outdoor-kitchens-fire-features/complete-kitchen.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: `${BASE_URL}/outdoor-kitchens-fire-features/complete-kitchen.png`,
          title: "Complete Outdoor Kitchen Installation",
          caption: "Full-service outdoor kitchen with grill, countertops, storage, and dining area",
        },
      ],
    },

    // Service Category Images - Water Features
    {
      url: `${BASE_URL}/water-features/backyard-pool-waterfall-resident.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/water-features/backyard-pool-waterfall-resident.jpeg`,
          title: "Custom Water Feature Design and Installation",
          caption: "Professional water feature construction including fountains, ponds, and waterfalls",
        },
      ],
    },

    // Service Category Images - Garden Design & Planting
    {
      url: `${BASE_URL}/garden-design-planting/hero.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/garden-design-planting/hero.png`,
          title: "Professional Garden Design and Planting Services",
          caption: "Expert landscape design with native plants, perennials, and sustainable gardening practices",
        },
      ],
    },

    // Service Category Images - Retaining Walls
    {
      url: `${BASE_URL}/retaining-walls/hero.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/retaining-walls/hero.png`,
          title: "Professional Retaining Wall Construction",
          caption: "Durable retaining wall installation for erosion control and landscape terracing",
        },
      ],
    },

    // Service Category Images - Driveways
    {
      url: `${BASE_URL}/driveways/stone-driveway-landscape-lake-resident.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/driveways/stone-driveway-landscape-lake-resident.jpeg`,
          title: "Professional Driveway Installation and Repair",
          caption: "Expert driveway construction using concrete, asphalt, and paver materials",
        },
      ],
    },

    // Service Category Images - Pergolas & Gazebos
    {
      url: `${BASE_URL}/pergolas-gazebos/Commerical-gazebo-hero.jpeg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: `${BASE_URL}/pergolas-gazebos/Commerical-gazebo-hero.jpeg`,
          title: "Custom Pergola and Gazebo Construction Services",
          caption: "Professional pergola and gazebo installation for outdoor living spaces and shade structures",
        },
      ],
    },

    // Portfolio Project Images
    {
      url: `${BASE_URL}/projects/modern-backyard-oasis.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: `${BASE_URL}/projects/modern-backyard-oasis.png`,
          title: "Modern Backyard Oasis Transformation",
          caption: "Complete backyard renovation featuring contemporary design elements and outdoor living spaces",
        },
      ],
    },

    {
      url: `${BASE_URL}/projects/front-yard-transformation.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: `${BASE_URL}/projects/front-yard-transformation.png`,
          title: "Front Yard Landscape Transformation",
          caption: "Stunning front yard makeover with professional landscaping and curb appeal enhancement",
        },
      ],
    },

    // Before/After Transformation Images
    {
      url: `${BASE_URL}/transformations/backyard-patio-before-1.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [
        {
          url: `${BASE_URL}/transformations/backyard-patio-before-1.png`,
          title: "Backyard Patio Transformation - Before",
          caption: "Before photo showing unused backyard space ready for professional landscaping transformation",
        },
      ],
    },

    {
      url: `${BASE_URL}/transformations/backyard-patio-after-1.png`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [
        {
          url: `${BASE_URL}/transformations/backyard-patio-after-1.png`,
          title: "Backyard Patio Transformation - After",
          caption: "After photo showing completed patio installation with professional hardscaping and landscaping",
        },
      ],
    },
  ]

  return imageEntries
}
