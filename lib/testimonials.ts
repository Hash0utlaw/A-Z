export interface Testimonial {
  page: string
  name: string
  location?: string
  rating: number
  text: string
  verified: boolean
}

// Every testimonial that previously lived hardcoded on a page, moved here so
// none of it is live until someone confirms it's a real, verifiable review.
// Flip `verified` to true (and correct the copy if needed) once confirmed.
export const TESTIMONIALS: Testimonial[] = [
  // Home page
  {
    page: "home",
    name: "Sarah J.",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes turned our backyard vision into a stunning reality. Professional, creative, and a joy to work with!",
  },
  {
    page: "home",
    name: "Mike C.",
    rating: 5,
    verified: false,
    text: "The best landscaping company we've ever hired. Their attention to detail is unmatched.",
  },
  {
    page: "home",
    name: "Emily R.",
    rating: 5,
    verified: false,
    text: "Our new patio and garden are incredible. Thank you, A-Z Landscapes, for your amazing work!",
  },

  // /services/patios-walkways
  {
    page: "patios-walkways",
    name: "Jennifer & Mark Stevens",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "Our new paver patio has become the heart of our outdoor entertaining. A-Z Landscapes created exactly what we envisioned - a beautiful space that flows perfectly with our home and garden.",
  },
  {
    page: "patios-walkways",
    name: "Patricia Williams",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "The flagstone walkway A-Z installed has completely transformed our front yard. The craftsmanship is exceptional, and the design perfectly complements our home's architecture.",
  },
  {
    page: "patios-walkways",
    name: "Michael Chen",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "We're thrilled with our new stamped concrete patio. It looks like expensive natural stone but was much more budget-friendly. The team was professional and the quality is outstanding.",
  },
  {
    page: "patios-walkways",
    name: "David & Lisa Thompson",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "The aerial view of our completed patio project really shows the incredible scope of work A-Z accomplished. The different paver patterns and integration with our landscape is masterful.",
  },

  // /services/retaining-walls
  {
    page: "retaining-walls",
    name: "The Jacksons",
    location: "Springfield, IL",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes built a beautiful and sturdy retaining wall that solved our erosion problem and gave us more garden space. Highly recommend!",
  },
  {
    page: "retaining-walls",
    name: "Maria B.",
    location: "Chatham, IL",
    rating: 5,
    verified: false,
    text: "The boulder wall is a work of art! It completely transformed our difficult slope. The team was professional and efficient.",
  },

  // /services/turf-installation
  {
    page: "turf-installation",
    name: "Sarah Williams",
    location: "Chatham, IL",
    rating: 5,
    verified: false,
    text: "We opted for artificial turf in our backyard due to shade issues and our dogs, and we couldn't be happier. It looks incredibly realistic, drains perfectly, and has eliminated mud and brown spots. Worth every penny!",
  },
  {
    page: "turf-installation",
    name: "The Davis Family",
    location: "Springfield, IL",
    rating: 5,
    verified: false,
    text: "The putting green A-Z installed is amazing! The quality is top-notch and the installation was fast and professional. It's the highlight of our backyard.",
  },

  // /services/water-features
  {
    page: "water-features",
    name: "Jennifer S.",
    location: "Maplewood, NJ",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes transformed our backyard with a stunning waterfall and pond. It's now our favorite place to relax. The team was incredibly professional and attentive to detail.",
  },
  {
    page: "water-features",
    name: "David R.",
    location: "Summit, NJ",
    rating: 5,
    verified: false,
    text: "We wanted a unique fountain for our courtyard, and A-Z delivered beyond our expectations. The craftsmanship is superb, and it's become a real centerpiece.",
  },
  {
    page: "water-features",
    name: "Maria G.",
    location: "Chatham, NJ",
    rating: 4,
    verified: false,
    text: "Our pondless waterfall is beautiful and so easy to maintain. The installation was quick and efficient. We get so many compliments!",
  },

  // /services/landscape-lighting
  {
    page: "landscape-lighting",
    name: "The Bennetts",
    location: "Springfield, IL",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes' lighting design transformed our home! We enjoy our patio so much more in the evenings, and it looks spectacular.",
  },
  {
    page: "landscape-lighting",
    name: "Riverside Restaurant",
    location: "Chatham, IL",
    rating: 5,
    verified: false,
    text: "The lighting in our outdoor dining area is perfect. Customers love the ambiance, and it's boosted our evening business.",
  },

  // /services/outdoor-kitchens-fire-features
  {
    page: "outdoor-kitchens-fire-features",
    name: "The Thompsons",
    location: "Springfield, IL",
    rating: 5,
    verified: false,
    text: "Our A-Z Landscapes outdoor kitchen is a game-changer! We entertain constantly now. The quality is outstanding.",
  },
  {
    page: "outdoor-kitchens-fire-features",
    name: "Daniel W.",
    location: "Chatham, IL",
    rating: 5,
    verified: false,
    text: "The fire pit area A-Z built is our family's favorite spot. Beautiful stonework and perfectly integrated with our patio.",
  },
  {
    page: "outdoor-kitchens-fire-features",
    name: "Rebecca & Tom Martinez",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "The circular fire pit with curved seating that A-Z designed has become the heart of our backyard. The aerial view really shows how well it integrates with our entire landscape - it's absolutely stunning.",
  },
  {
    page: "outdoor-kitchens-fire-features",
    name: "Sarah Johnson",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes transformed our wooded backyard into an incredible entertainment space. The fire pit design with the decorative drainage and boulder placement is pure artistry.",
  },

  // /services/irrigation-systems
  {
    page: "irrigation-systems",
    name: "Jason & Emily W.",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes installed our irrigation, and it's been flawless. Our lawn is green, and we're using less water!",
  },
  {
    page: "irrigation-systems",
    name: "Westside HOA",
    rating: 5,
    verified: false,
    text: "The smart irrigation system has significantly cut our water bills while keeping our community landscaping beautiful.",
  },
  {
    page: "irrigation-systems",
    name: "Sandra P.",
    rating: 5,
    verified: false,
    text: "The French drain they installed solved our soggy backyard problem completely. Very professional and effective.",
  },

  // /services/driveways
  {
    page: "driveways",
    name: "John & Mary Peterson",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes installed our concrete driveway with such precision and attention to detail. The drainage is perfect and it looks fantastic. Excellent workmanship!",
  },
  {
    page: "driveways",
    name: "Robert Thompson",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "Our new paver driveway has completely transformed our home's curb appeal. The quality of installation and materials is outstanding. Highly recommend A-Z Landscapes.",
  },
  {
    page: "driveways",
    name: "Lisa & David Chen",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "The team at A-Z handled our circular driveway project professionally from start to finish. The design is beautiful and the installation was completed on time and on budget.",
  },
  {
    page: "driveways",
    name: "Michael Rodriguez",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "A-Z installed a concrete pad and walkway system for us that perfectly balances functionality with aesthetic appeal. The craftsmanship is evident in every detail.",
  },

  // /services/garden-design-planting
  {
    page: "garden-design-planting",
    name: "Margaret Wilson",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes created the most beautiful butterfly garden for us. We now have monarchs, swallowtails, and hummingbirds visiting daily. It's like having our own nature preserve!",
  },
  {
    page: "garden-design-planting",
    name: "Robert & Susan Davis",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "The perennial garden A-Z designed has something blooming from spring through fall. The plant combinations are stunning and the maintenance is much easier than we expected.",
  },
  {
    page: "garden-design-planting",
    name: "Jennifer Martinez",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "Our native plant garden is not only beautiful but has significantly reduced our water usage. A-Z's knowledge of local plants and growing conditions is exceptional.",
  },
  {
    page: "garden-design-planting",
    name: "Thomas Anderson",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "The shade garden A-Z created under our mature trees has transformed a previously unused area into our favorite peaceful retreat. The plant selection is perfect for the conditions.",
  },

  // /services/seasonal-services
  {
    page: "seasonal-services",
    name: "The Harrison Family",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "A-Z's seasonal services keep our property looking immaculate year-round. Their spring cleanup is particularly impressive - our gardens look perfectly manicured and ready for the growing season.",
  },
  {
    page: "seasonal-services",
    name: "Oakwood Office Park",
    location: "Commercial Client",
    rating: 5,
    verified: false,
    text: "We rely on A-Z for all our seasonal property maintenance. Their snow removal service is exceptional - always prompt and thorough, keeping our parking lots and walkways safe for employees and visitors.",
  },
  {
    page: "seasonal-services",
    name: "James & Victoria Elliott",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "Fall leaf cleanup used to take us entire weekends. Now A-Z handles it efficiently and thoroughly. They're respectful of our property and always leave everything looking better than we could have done ourselves.",
  },

  // /services/tree-services
  {
    page: "tree-services",
    name: "Richard & Karen Davis",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes did an amazing job pruning our large oak trees. Their arborists were knowledgeable, careful with our property, and the trees look healthier than ever.",
  },
  {
    page: "tree-services",
    name: "Linda Martinez",
    location: "Residential Client",
    rating: 5,
    verified: false,
    text: "When a storm damaged several trees on our property, A-Z responded quickly and professionally. They removed the hazardous limbs and helped save trees we thought were lost.",
  },
  {
    page: "tree-services",
    name: "Community Association Board",
    location: "HOA Client",
    rating: 5,
    verified: false,
    text: "We've used A-Z for all our tree care needs for years. Their comprehensive tree management program has improved the health and appearance of all the trees in our community.",
  },

  // /services/lawn-care-maintenance
  {
    page: "lawn-care-maintenance",
    name: "David & Lisa T.",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes has kept our lawn looking its best for years. Reliable, thorough, and always professional. We've had them for twelve years and wouldn't trust anyone else!",
  },
  {
    page: "lawn-care-maintenance",
    name: "Amanda R., HOA Manager",
    rating: 5,
    verified: false,
    text: "A-Z Landscapes maintains all common areas in our community impeccably. They are responsive and the quality is outstanding.",
  },
  {
    page: "lawn-care-maintenance",
    name: "James W.",
    rating: 5,
    verified: false,
    text: "My lawn was a disaster. A-Z Landscapes developed a restoration plan, and now it's the best on the block! Their proactive approach makes a huge difference.",
  },

  // /services/pergolas-gazebos
  {
    page: "pergolas-gazebos",
    name: "Christopher & Lisa Hamilton",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "Our cedar pergola from A-Z has transformed our backyard into an outdoor living room. It provides just the right amount of shade while looking absolutely beautiful with the climbing vines we planted.",
  },
  {
    page: "pergolas-gazebos",
    name: "Riverside Community Center",
    location: "Commercial Client",
    rating: 5,
    verified: false,
    text: "A-Z built a series of gazebos throughout our community park that have become favorite gathering spots. The quality of construction is exceptional, and they worked closely with us on every design detail.",
  },
  {
    page: "pergolas-gazebos",
    name: "The Rodriguez Family",
    location: "Residential Clients",
    rating: 5,
    verified: false,
    text: "We love our new poolside cabana! A-Z designed it to match our home perfectly, and the added shade has made our pool area usable even on the hottest days. The built-in lighting lets us enjoy the space well into the evening.",
  },
]

export function getVerifiedTestimonials(page: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.page === page && t.verified)
}
