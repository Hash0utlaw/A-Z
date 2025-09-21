import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | A-Z Landscapes Landscaping & Hardscaping",
  description:
    "Find answers to frequently asked questions about A-Z Landscapes' services, processes, service areas, and how to get started with your project.",
}

const faqData = [
  {
    question: "What types of landscaping services do you offer?",
    answer:
      "A-Z Landscapes offers a comprehensive range of services including landscape design, hardscaping (patios, retaining walls, walkways), lawn care and maintenance, garden design and planting, tree services, turf installation, irrigation systems, landscape lighting, and seasonal services like spring/fall cleanups and snow removal.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the [Your City/Region] area and surrounding communities. Please contact us with your specific location to confirm if you are within our service range.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "You can request a free, no-obligation quote by filling out the contact form on our website, calling us at (704) 989-4839, or emailing us at Azlandscapesllc@gmail.com. We'll schedule a consultation to discuss your needs and assess your property.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, A-Z Landscapes is fully licensed and insured for all the services we provide. We prioritize safety and professionalism in every project.",
  },
  {
    question: "How long does a typical landscaping project take?",
    answer:
      "The duration of a project varies greatly depending on its scope and complexity. Small maintenance tasks might take a few hours, while large design and installation projects can take several weeks. We will provide a projected timeline with your quote.",
  },
  {
    question: "What is your process for a new landscaping project?",
    answer:
      "Our process typically involves: 1. Initial Consultation & Site Assessment. 2. Design & Proposal (if applicable). 3. Project Agreement & Scheduling. 4. Installation/Execution. 5. Final Walkthrough & Approval. 6. Ongoing Maintenance (optional).",
  },
  {
    question: "Do you offer maintenance services after a project is completed?",
    answer:
      "We offer a variety of maintenance packages to keep your new landscape looking its best, including lawn care, garden upkeep, irrigation system checks, and seasonal adjustments.",
  },
  {
    question: "What types of payment do you accept?",
    answer:
      "We accept various forms of payment including major credit cards, checks, and bank transfers. Payment terms will be outlined in your project agreement.",
  },
]

export default function FAQPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-12 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Have questions about our landscaping and hardscaping services? We've compiled answers to some of the most
            common inquiries we receive.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                value={`item-${index + 1}`}
                key={index}
                className="border border-border rounded-lg shadow-sm bg-card"
              >
                <AccordionTrigger className="p-6 text-left font-medium text-lg hover:no-underline text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-base text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center bg-accent/10 p-8 rounded-lg border border-accent/30">
            <h2 className="text-2xl font-semibold text-primary mb-4">Can't find the answer you're looking for?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Feel free to reach out to us directly with any other questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <Mail className="mr-2 h-5 w-5" /> Contact Us Online
              </Link>
              <a
                href="tel:7049894839"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Us: (704) 989-4839
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
