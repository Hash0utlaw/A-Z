import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, HelpCircle, Wrench, Clock, DollarSign, Leaf } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | A-Z Landscapes Landscaping & Hardscaping",
  description:
    "Find answers to frequently asked questions about A-Z Landscapes' services, processes, service areas, and how to get started with your project.",
}

const faqCategories = [
  {
    category: "General Information",
    icon: HelpCircle,
    faqs: [
      {
        question: "What types of landscaping and hardscaping services do you offer?",
        answer:
          "A-Z Landscapes provides comprehensive outdoor solutions including hardscaping (custom patios, walkways, retaining walls, driveways, outdoor kitchens, fire features, and water features) and landscaping services (landscape design with 3D visualization, full-service lawn care and maintenance, professional tree services, artificial turf installation, irrigation and drainage solutions, LED landscape lighting, and seasonal services including grading). We handle projects of all sizes, from small residential upgrades to large-scale commercial installations.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We proudly serve the greater Charlotte, NC area and surrounding communities. Our service area includes residential and commercial properties throughout the region. Please contact us with your specific location to confirm service availability. We're committed to providing exceptional service within our coverage area and may consider projects slightly outside our standard range depending on scope and timing.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, A-Z Landscapes is fully licensed and insured for all services we provide. We carry comprehensive general liability insurance and workers' compensation coverage to protect both our clients and our team members. We prioritize safety, professionalism, and compliance with all local regulations and building codes. Proof of insurance is available upon request.",
      },
      {
        question: "Do you work on both residential and commercial properties?",
        answer:
          "We have extensive experience working on both residential and commercial properties. Our residential services range from small backyard renovations to complete landscape transformations for luxury homes. For commercial clients, we provide ongoing maintenance, seasonal services, and large-scale installation projects for office complexes, retail centers, HOA communities, and more.",
      },
    ],
  },
  {
    category: "Services & Expertise",
    icon: Wrench,
    faqs: [
      {
        question: "What materials do you use for patios and walkways?",
        answer:
          "We offer a wide variety of premium materials to suit your aesthetic preferences and budget, including natural stone (flagstone, bluestone, limestone), pavers (concrete and clay in various patterns and colors), brick (traditional and tumbled), river rock, pea gravel, and stamped concrete. During your consultation, we'll discuss the pros and cons of each material based on your specific needs, climate considerations, maintenance requirements, and design vision.",
      },
      {
        question: "Can you help with landscape design, or do I need to have plans ready?",
        answer:
          "We provide comprehensive landscape design services! You don't need to have plans ready. Our collaborative design process starts with understanding your style preferences (modern, traditional, southern, etc.), site conditions, and functional needs. We'll work with you through plant selection, hardscape integration, and can provide 3D visualizations to help you see your future landscape before installation begins. Whether you have a clear vision or need guidance from scratch, we're here to help.",
      },
      {
        question: "Do you install irrigation systems? What about drainage solutions?",
        answer:
          "Yes, we specialize in both irrigation and drainage solutions. For irrigation, we design and install efficient sprinkler systems and drip irrigation tailored to your landscape's specific water needs, helping you maintain a healthy landscape while conserving water. For drainage, we provide expert solutions including French drains, catch basins, channel drains, and culvert installations to protect your property from water damage, prevent erosion, and eliminate standing water issues.",
      },
      {
        question: "What's the difference between natural stone and manufactured pavers?",
        answer:
          "Natural stone (like flagstone or bluestone) offers unique, one-of-a-kind patterns and colors with an organic, timeless aesthetic. It's extremely durable but can be more expensive and may require more maintenance. Manufactured pavers are engineered for consistency in size, shape, and color, offering more design flexibility with patterns and are typically more budget-friendly. They're also very durable and easier to replace if damaged. We'll help you choose the best option based on your design goals, budget, and maintenance preferences.",
      },
      {
        question: "Can you remove old landscaping or hardscaping before installing new features?",
        answer:
          "Yes, we handle all demolition and removal work as part of our comprehensive service. This includes removing old patios, walkways, retaining walls, overgrown plants, trees, stumps, and existing turf. We'll properly dispose of all materials and prepare the site for your new installation. Site preparation and grading are critical steps we take seriously to ensure the longevity and proper function of your new landscape features.",
      },
      {
        question: "Do you offer artificial turf installation? What are the benefits?",
        answer:
          "Yes, we install premium artificial turf for various applications including putting greens, pet areas, low-maintenance lawns, and problem areas like shady spots where natural grass struggles. Benefits include year-round green appearance, no mowing or watering required, excellent drainage, durability in high-traffic areas, pet-friendly options, and significant water savings. Modern artificial turf looks incredibly realistic and can be a smart solution for busy homeowners or challenging landscape conditions.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    icon: Clock,
    faqs: [
      {
        question: "What is your process for starting a new landscaping or hardscaping project?",
        answer:
          "Our proven process ensures quality results: 1) Initial Consultation & Site Assessment - We visit your property to understand your vision, assess site conditions, take measurements, and discuss your budget. 2) Design & Proposal - We create a detailed design (with 3D visualization if applicable) and provide a comprehensive proposal with timeline and costs. 3) Project Agreement & Scheduling - Once approved, we finalize the contract and schedule your project. 4) Installation/Execution - Our skilled crews complete the work with attention to detail and minimal disruption. 5) Final Walkthrough & Approval - We review the completed project with you to ensure satisfaction. 6) Ongoing Maintenance - We offer optional maintenance packages to keep your landscape looking its best.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project duration varies significantly based on scope and complexity. Small projects like mulch installation or seasonal cleanups may take 1-2 days. Medium projects such as patio installations or garden renovations typically take 1-2 weeks. Large-scale projects involving multiple features (retaining walls, patios, full landscape design, irrigation systems) can take 3-6 weeks or more. Weather, material availability, and permit requirements can also affect timelines. We provide a detailed timeline with your proposal and keep you informed throughout the project.",
      },
      {
        question: "Will I need permits for my project?",
        answer:
          "Permit requirements depend on your location and project scope. Generally, larger structures like retaining walls over a certain height, significant grading work, and some hardscape installations may require permits. We're familiar with local regulations and will advise you on permit needs during the consultation. If permits are required, we can assist with the application process and ensure all work meets code requirements.",
      },
      {
        question: "How much disruption should I expect during installation?",
        answer:
          "We strive to minimize disruption to your daily life. You can expect some noise from equipment, crew presence during working hours (typically 7 AM - 5 PM), and temporary restricted access to work areas. We maintain a clean, organized job site, protect existing landscaping and structures, and perform daily cleanup. For larger projects, we'll discuss logistics like equipment access, material staging areas, and any temporary impacts to driveways or walkways. Our goal is to complete your project efficiently while being respectful of your property and neighbors.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    icon: DollarSign,
    faqs: [
      {
        question: "How do I get a quote for my project?",
        answer:
          "Getting a quote is easy! You can request a free, no-obligation consultation by filling out the contact form on our website, calling us directly at (704) 989-4839, or emailing us at Azlandscapesllc@gmail.com. We'll schedule a convenient time to visit your property, discuss your vision and requirements, take measurements, and assess site conditions. Within a few days, we'll provide a detailed written proposal including scope of work, materials, timeline, and pricing. Our quotes are comprehensive and transparent with no hidden fees.",
      },
      {
        question: "What factors affect the cost of a landscaping or hardscaping project?",
        answer:
          "Several factors influence project costs: 1) Size and scope of the project, 2) Materials selected (natural stone vs. pavers, plant varieties, etc.), 3) Site conditions (accessibility, grading needs, soil quality, drainage issues), 4) Design complexity and custom features, 5) Labor requirements and timeline, 6) Removal of existing features, and 7) Additional services like irrigation, lighting, or drainage. We work with various budgets and can suggest alternatives to help you achieve your goals while staying within your financial parameters.",
      },
      {
        question: "What types of payment do you accept?",
        answer:
          "We accept multiple payment methods for your convenience, including major credit cards (Visa, MasterCard, American Express, Discover), personal and business checks, bank transfers/ACH, and cash. For larger projects, we typically require a deposit to secure your project date and order materials, with progress payments throughout the project and final payment upon completion. All payment terms, schedules, and methods will be clearly outlined in your project agreement.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes, we understand that landscaping and hardscaping projects are significant investments. We can discuss financing options during your consultation to help make your dream outdoor space more accessible. Contact us to learn about current financing programs, terms, and qualification requirements.",
      },
    ],
  },
  {
    category: "Maintenance & Warranties",
    icon: Leaf,
    faqs: [
      {
        question: "Do you offer maintenance services after project completion?",
        answer:
          "We offer comprehensive maintenance packages to protect your investment and keep your landscape looking beautiful year-round. Our maintenance services include weekly or bi-weekly lawn care (mowing, edging, trimming), professional 7-step fertilization programs, weed control, pruning and trimming, mulch replenishment, seasonal cleanups (spring and fall), leaf removal, irrigation system checks and adjustments, and landscape lighting maintenance. We can customize a maintenance plan based on your specific needs and budget.",
      },
      {
        question: "What kind of warranty do you provide on your work?",
        answer:
          "We stand behind the quality of our work and materials. Warranty terms vary depending on the type of project and materials used. Hardscape installations typically include a workmanship warranty covering structural integrity and proper installation. Plant materials come with a limited warranty based on proper care and maintenance. Specific warranty details, coverage periods, and conditions will be clearly outlined in your project agreement. We're committed to your satisfaction and will address any issues that arise.",
      },
      {
        question: "How often should I have my landscape maintained?",
        answer:
          "Maintenance frequency depends on your landscape type and personal preferences. For most residential lawns, we recommend weekly or bi-weekly service during the growing season (spring through fall) to maintain optimal appearance and health. This includes mowing, edging, and trimming. Additional services like fertilization, weed control, and pruning are performed on a seasonal schedule. Irrigation systems should be checked monthly during operation and winterized annually. We'll create a customized maintenance schedule that keeps your landscape thriving while fitting your budget.",
      },
      {
        question: "What should I do to prepare for my landscaping project?",
        answer:
          "We'll provide specific preparation instructions based on your project, but general steps include: 1) Clear the work area of personal items, furniture, and decorations, 2) Ensure clear access for equipment and materials, 3) Mark or identify any underground utilities (we can arrange utility locates if needed), 4) Inform neighbors of upcoming work if it may affect them, 5) Secure pets indoors or in a safe area away from the work zone, and 6) Discuss any concerns or special considerations with your project manager before work begins. We handle most preparation work, but these steps help ensure a smooth, efficient project.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-kelly-50 to-kelly-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Have questions about our landscaping and hardscaping services? We've compiled detailed answers to help you
              understand our process, services, and what to expect when working with A-Z Landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="scroll-mt-20"
                id={category.category.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-kelly-200">
                  <div className="bg-kelly-100 p-2.5 rounded-lg">
                    <category.icon className="h-6 w-6 text-kelly-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.faqs.map((item, index) => (
                    <AccordionItem
                      value={`item-${categoryIndex}-${index}`}
                      key={index}
                      className="border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="p-5 md:p-6 text-left font-semibold text-base md:text-lg hover:no-underline text-gray-900 hover:text-kelly-600 transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="p-5 md:p-6 pt-0 text-base text-gray-700 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-kelly-500 to-kelly-600 p-8 md:p-12 rounded-xl shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-lg text-kelly-50 mb-8 max-w-2xl mx-auto">
                Our experienced team is here to help answer any questions you may have about your landscaping or
                hardscaping project. We're committed to providing clear, helpful information to ensure you feel
                confident moving forward.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-lg text-white bg-transparent hover:bg-white hover:text-kelly-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-5 w-5" /> Send Us a Message
                </Link>
                <a
                  href="tel:7049894839"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-lg text-kelly-600 bg-white hover:bg-kelly-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call (704) 989-4839
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
