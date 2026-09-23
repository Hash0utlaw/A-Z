export interface ServiceAreaPermitting {
  authority: string
  notes: string
  sourceUrl: string
}

export interface ServiceAreaFAQ {
  question: string
  answer: string
}

export interface ServiceAreaPriorityService {
  title: string
  slug: string
  reason: string
}

export interface ServiceArea {
  slug: string
  city: string
  county: string
  title: string
  description: string
  intro: string
  terrain: string
  priorityServices: ServiceAreaPriorityService[]
  permitting: ServiceAreaPermitting
  faqs: ServiceAreaFAQ[]
  nearbyAreas: string[]
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "huntersville",
    city: "Huntersville",
    county: "Mecklenburg County",
    title: "Landscaping & Hardscaping in Huntersville, NC",
    description:
      "A-Z Landscapes is based in Huntersville, NC, building patios, retaining walls, and full landscapes with the fastest scheduling of any town in our service area.",
    intro:
      "Huntersville is home base for A-Z Landscapes, which means Huntersville jobs get our fastest scheduling and largest crew availability of any town we serve. We've built patios, walls, and drainage systems across the town's mix of established neighborhoods and newer construction near the I-77 corridor.",
    terrain:
      "Huntersville's rolling Piedmont terrain ranges from mature, tree-shaded lots in older neighborhoods to freshly graded lots in newer subdivisions where construction traffic has compacted the native red clay subgrade. Compacted clay drains poorly, so grading and a properly prepared base are the first things we check on every site visit here.",
    priorityServices: [
      {
        title: "Retaining Walls",
        slug: "retaining-walls",
        reason: "Rolling lots throughout Huntersville often need a wall to create usable, level yard space.",
      },
      {
        title: "Irrigation & Drainage Solutions",
        slug: "irrigation-systems",
        reason: "Compacted clay on newer lots holds water, so drainage work is a frequent first project.",
      },
      {
        title: "Patios & Walkways",
        slug: "patios-walkways",
        reason: "A high concentration of established backyards makes patio additions our most-requested job here.",
      },
    ],
    permitting: {
      authority: "Mecklenburg County Code Enforcement (CIRC), with Town of Huntersville zoning review",
      notes:
        "Huntersville doesn't run its own building-permit office. Permits for structural hardscape work — including any retaining wall supporting 5 feet or more of fill — are submitted through Mecklenburg County's Code Enforcement CIRC process, with the Town of Huntersville handling zoning review (setbacks, fencing, property use).",
      sourceUrl: "https://code.mecknc.gov/customer-tools/circ",
    },
    faqs: [
      {
        question: "Do I need a permit for a retaining wall in Huntersville?",
        answer:
          "If the wall supports 5 feet or more of fill, yes — Mecklenburg County requires sealed engineering drawings and a building permit application through its CIRC process. The Town of Huntersville separately reviews zoning items like setbacks.",
      },
      {
        question: "Why does my new-construction lot in Huntersville drain so poorly?",
        answer:
          "Grading equipment compacts the native red clay during construction, which reduces how well water, air, and roots move through the soil. We regrade and add drainage as part of most new-lot projects.",
      },
      {
        question: "Do you work in older Huntersville neighborhoods as well as new subdivisions?",
        answer:
          "Yes — Huntersville is our home base, so we work across both mature, tree-shaded neighborhoods and newer subdivisions near the I-77 corridor.",
      },
    ],
    nearbyAreas: ["cornelius", "davidson", "mooresville", "charlotte"],
  },
  {
    slug: "cornelius",
    city: "Cornelius",
    county: "Mecklenburg County",
    title: "Landscaping & Hardscaping in Cornelius, NC",
    description:
      "A-Z Landscapes builds retaining walls, terraced patios, and drainage systems for Cornelius homeowners, including lakefront properties on Lake Norman.",
    intro:
      "Cornelius is one of the most heavily lakefront communities we serve, and Lake Norman shapes almost every project here. Duke Energy owns the Lake Norman lakebed under its FERC license, so any shoreline stabilization or wall work near the water goes through a separate permitting process before we can break ground.",
    terrain:
      "Cornelius lots frequently slope down toward the lake, which makes drainage and terracing the core engineering problem on lakefront properties. Combined with the region's slow-draining Piedmont clay, that slope means water needs a deliberate path away from the house and down toward the shoreline rather than pooling against a foundation or wall.",
    priorityServices: [
      {
        title: "Retaining Walls",
        slug: "retaining-walls",
        reason: "Terraced walls are how most sloped Cornelius lakefront lots gain usable, level yard space.",
      },
      {
        title: "Irrigation & Drainage Solutions",
        slug: "irrigation-systems",
        reason: "Slope toward the lake makes controlled drainage essential on nearly every lakefront project.",
      },
      {
        title: "Patios & Walkways",
        slug: "patios-walkways",
        reason: "Terraced patios are a natural fit for stepping down a sloped yard toward the water.",
      },
    ],
    permitting: {
      authority: "Duke Energy Lake Services",
      notes:
        "Because Duke Energy owns the Lake Norman lakebed under its FERC license, shoreline stabilization, retaining walls, or grading work near the water typically requires a separate permit from Duke Energy Lake Services before work begins — in addition to any Town of Cornelius or Mecklenburg County requirements for the rest of the property. Confirm current requirements with Duke Energy before starting shoreline work.",
      sourceUrl: "https://www.duke-energy.com/community/lakes/services/permits-shoreline-activities",
    },
    faqs: [
      {
        question: "Do I need a permit to build a retaining wall near Lake Norman's shoreline?",
        answer:
          "Likely yes. Duke Energy owns the lakebed under its FERC license, so shoreline stabilization and wall work near the water typically needs a Duke Energy Lake Services permit, separate from any town or county permit for the rest of your property.",
      },
      {
        question: "Why does my lakefront yard hold water after rain?",
        answer:
          "Lots that slope toward the lake combine with slow-draining Piedmont clay to trap water on the way down. We address this with terracing and drainage systems designed for the slope, not just the soil.",
      },
      {
        question: "Can you build a patio on a sloped lakefront lot?",
        answer:
          "Yes — terraced patios and retaining walls are our most common lakefront project, designed to create level, usable space on a slope that would otherwise be unusable.",
      },
    ],
    nearbyAreas: ["huntersville", "davidson", "mooresville"],
  },
  {
    slug: "davidson",
    city: "Davidson",
    county: "Mecklenburg County",
    title: "Landscaping & Hardscaping in Davidson, NC",
    description:
      "A-Z Landscapes works carefully on Davidson's smaller historic lots near downtown, handling tight setbacks, mature trees, and historic district review.",
    intro:
      "Davidson's lots near downtown are generally smaller and older than what we see elsewhere in our service area, with tighter setbacks and less room to maneuver equipment. Many of those properties also sit inside Davidson's Local Historic District, which adds a design-review step that doesn't apply anywhere else we work.",
    terrain:
      "Established tree canopy is the defining site condition in Davidson. Mature trees near the house mean root conflicts are common when we excavate for a patio or wall footing, and dense canopy limits equipment access more than on the larger, newer lots we see in other towns.",
    priorityServices: [
      {
        title: "Tree Services",
        slug: "tree-services",
        reason: "Mature canopy on older Davidson lots means root and clearance issues come up on most projects.",
      },
      {
        title: "Garden Design & Planting",
        slug: "garden-design-planting",
        reason: "Smaller historic lots benefit from planting plans designed around existing mature trees.",
      },
      {
        title: "Patios & Walkways",
        slug: "patios-walkways",
        reason: "Compact, well-defined hardscape footprints suit Davidson's smaller in-town lot sizes.",
      },
    ],
    permitting: {
      authority: "Town of Davidson Historic Preservation Commission",
      notes:
        "Properties inside Davidson's Local Historic District near downtown require a Certificate of Appropriateness (COA) for many exterior changes before work begins, regardless of other required town or county permits. Not every Davidson property is inside the district — check with the Town's Historic Preservation Commission if your property is near downtown.",
      sourceUrl: "https://www.townofdavidson.org/1296/Certificates-of-Appropriateness",
    },
    faqs: [
      {
        question: "Is my Davidson property inside the Local Historic District?",
        answer:
          "It depends on location — the district covers Davidson's historic downtown area, not the whole town. If your property is near downtown, check with the Town's Historic Preservation Commission before planning exterior hardscape work.",
      },
      {
        question: "What does a Certificate of Appropriateness mean for my landscaping project?",
        answer:
          "If your property is inside the Local Historic District, many exterior changes need a COA before work starts, in addition to any other required permits. We factor this review step into the project timeline.",
      },
      {
        question: "How do you handle mature trees on smaller Davidson lots?",
        answer:
          "We plan footings and excavation around root zones wherever possible and bring in equipment sized for tighter, tree-shaded lots rather than the larger machinery used on more open sites.",
      },
    ],
    nearbyAreas: ["huntersville", "cornelius", "charlotte"],
  },
  {
    slug: "mooresville",
    city: "Mooresville",
    county: "Iredell County",
    title: "Landscaping & Hardscaping in Mooresville, NC",
    description:
      "A-Z Landscapes serves Mooresville, NC across lakefront Lake Norman properties and newer large-lot subdivisions, under Iredell County's permitting jurisdiction.",
    intro:
      "Mooresville is the only town in our service area outside Mecklenburg County, so permitting here runs through Iredell County and the Town of Mooresville rather than Mecklenburg's process. We see two distinct property types in Mooresville: lakefront lots along Lake Norman and newer large-lot subdivisions further from the water.",
    terrain:
      "Mooresville's lakefront lots share the same slope-and-drainage challenges as other Lake Norman communities, while its newer large-lot subdivisions tend to have more open, less-established ground where proper grading during installation matters most. Both settings still sit on the same slow-draining Piedmont clay common across our whole service area.",
    priorityServices: [
      {
        title: "Retaining Walls",
        slug: "retaining-walls",
        reason: "Lakefront grading and slope management are common needs on Mooresville's Lake Norman lots.",
      },
      {
        title: "Irrigation & Drainage Solutions",
        slug: "irrigation-systems",
        reason: "Newer large-lot subdivisions benefit from drainage planning before turf and beds go in.",
      },
      {
        title: "Driveways",
        slug: "driveways",
        reason: "Larger subdivision lots often have room for the extended or circular driveways we install.",
      },
    ],
    permitting: {
      authority: "Town of Mooresville Building Standards / Iredell County Building Standards Division",
      notes:
        "Since September 2023, the Town of Mooresville administers building permits and inspections within town limits and its extraterritorial jurisdiction (ETJ). Iredell County still handles erosion control, onsite water (well/septic), and food & lodging review for projects in that same area — so a single project can involve both the town and the county depending on scope.",
      sourceUrl: "https://iredellcountync.gov/234/Building-Standards-Division",
    },
    faqs: [
      {
        question: "Does Mooresville use Mecklenburg County's permitting process?",
        answer:
          "No. Mooresville is in Iredell County, not Mecklenburg. Since September 2023 the Town of Mooresville itself administers building permits within town limits and its ETJ, with Iredell County still handling erosion control and onsite water review.",
      },
      {
        question: "Do lakefront rules apply in Mooresville the same way they do in Cornelius?",
        answer:
          "Duke Energy's shoreline permitting applies anywhere along Lake Norman, including Mooresville, so shoreline stabilization or wall work near the water still needs Duke Energy Lake Services review in addition to local permits.",
      },
      {
        question: "What's different about newer Mooresville subdivisions versus older lots?",
        answer:
          "Newer subdivisions tend to have larger, more open lots with less-established grading, so we spend more time on drainage planning up front compared to mature, already-landscaped properties.",
      },
    ],
    nearbyAreas: ["cornelius", "huntersville", "charlotte"],
  },
  {
    slug: "charlotte",
    city: "Charlotte",
    county: "Mecklenburg County",
    title: "Landscaping & Hardscaping in Charlotte, NC",
    description:
      "A-Z Landscapes builds retaining walls and hardscapes for Charlotte, navigating both Mecklenburg County wall permits and the City's Fence and Wall Certificate.",
    intro:
      "Charlotte is unusual in our service area because two separate governments have a say in hardscape projects: Mecklenburg County handles the structural permit for taller retaining walls, and the City of Charlotte separately requires a Fence and Wall Certificate for walls near city streets. We plan for both from the start.",
    terrain:
      "Charlotte's older neighborhoods bring mature trees and root conflicts we plan excavation around, plus drainage systems that are often decades old and undersized for today's storm intensity. Piedmont clay's slow drainage compounds both problems, which is why base prep and drainage behind a wall matter as much here as the wall itself.",
    priorityServices: [
      {
        title: "Retaining Walls",
        slug: "retaining-walls",
        reason: "Mecklenburg's 5-foot permit threshold makes early engineering planning essential in Charlotte.",
      },
      {
        title: "Tree Services",
        slug: "tree-services",
        reason: "Mature trees in established Charlotte neighborhoods frequently conflict with new hardscape.",
      },
      {
        title: "Irrigation & Drainage Solutions",
        slug: "irrigation-systems",
        reason: "Older, undersized drainage on established Charlotte lots is a common project starting point.",
      },
    ],
    permitting: {
      authority: "Mecklenburg County Code Enforcement (CIRC)",
      notes:
        "Mecklenburg County requires a building permit with sealed engineering drawings for retaining walls supporting 5 feet or more of fill within 50 feet of horizontal distance. Separately, the City of Charlotte requires a no-cost Fence and Wall Certificate from its Department of Transportation for any fence or wall built along a city street, and a building permit for any wall over 6 feet tall — on top of, not instead of, the county's structural requirement.",
      sourceUrl: "https://code.mecknc.gov/customer-tools/circ",
    },
    faqs: [
      {
        question: "Does my Charlotte retaining wall need a permit?",
        answer:
          "If it supports 5 feet or more of fill within 50 feet of horizontal distance, Mecklenburg County requires a building permit with sealed engineering drawings. If the wall sits along a city street, the City of Charlotte separately requires a no-cost Fence and Wall Certificate.",
      },
      {
        question: "Is the City of Charlotte's Fence and Wall Certificate the same as a building permit?",
        answer:
          "No — it's a separate, no-cost certificate from the City's Department of Transportation for walls near city streets. It doesn't replace a Mecklenburg County building permit for taller walls, and the City separately requires a permit for any wall over 6 feet.",
      },
      {
        question: "Why do older Charlotte neighborhoods have more drainage problems?",
        answer:
          "Much of the drainage infrastructure in established Charlotte neighborhoods was sized for older storm patterns and is compounded by slow-draining Piedmont clay. We often address drainage as part of a hardscape project rather than as an afterthought.",
      },
    ],
    nearbyAreas: ["huntersville", "cornelius", "mooresville"],
  },
]

export function getServiceArea(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((area) => area.slug === slug)
}

export function getAllServiceAreaSlugs(): string[] {
  return SERVICE_AREAS.map((area) => area.slug)
}
