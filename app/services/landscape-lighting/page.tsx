import ServicePageTemplate from "@/components/service-page-template"

const gallery = [
  {
    image: "/user-uploads/landscape-lighting-front-yard-pathway-trees.jpeg",
    title: "Front Yard Pathway Lighting",
    description: "Elegant landscape lighting illuminating a front yard pathway and trees.",
  },
  {
    image: "/user-uploads/garden-lights-stone-pathway-bushes.jpeg",
    title: "Garden Pathway Lighting",
    description: "Ambient garden lights enhancing a stone pathway and surrounding bushes.",
  },
  {
    image: "/user-uploads/house-exterior-lights-bushes-trees.jpeg",
    title: "House Exterior Lighting",
    description: "Exterior lighting highlighting the architectural details of a house, bushes, and trees.",
  },
  {
    image: "/user-uploads/outdoor-living-space-patio-lights-furniture.jpeg",
    title: "Outdoor Living Space Lighting",
    description: "Cozy patio lights creating a warm and inviting outdoor living space with comfortable furniture.",
  },
  {
    image: "/user-uploads/backyard-pool-linear-fire-pit-night-ambiance.jpeg",
    title: "Subtle Pool & Fire Pit Lighting",
    description: "Effective landscape lighting enhancing a pool and linear fire pit area at night.",
  },
  {
    image: "/user-uploads/luxury-pool-fire-feature-evening-lighting.jpeg",
    title: "Ambient Lighting for Pool Fire Feature",
    description:
      "Nighttime view of a poolside fire feature, with landscape and string lights creating a luxurious atmosphere.",
  },
  {
    image: "/user-uploads/outdoor-kitchen-night-lighting-stainless-steel-appliances.jpeg",
    title: "Outdoor Kitchen Task & Accent Lighting",
    description: "Well-lit outdoor kitchen at night, showcasing functional under-cabinet and accent lighting.",
  },
]

const LandscapeLightingPage = () => {
  return (
    <ServicePageTemplate
      title="Landscape Lighting"
      description="Transform your outdoor spaces with our professional landscape lighting services. We design and install custom lighting solutions to enhance the beauty, safety, and functionality of your property."
      gallery={gallery}
    />
  )
}

export default LandscapeLightingPage
