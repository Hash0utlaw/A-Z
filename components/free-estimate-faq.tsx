import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQS = [
  {
    question: "How much does a project like this cost?",
    // TODO: no confirmed pricing figures exist anywhere on the site — do not fabricate a range.
    // Replace with real cost ranges once the business confirms them.
    answer:
      "Every project is different — cost depends on size, materials, and site conditions. We'll give you an itemized written estimate after a free on-site consultation, with no obligation.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Project duration varies with scope and complexity. Small projects may take 1-2 days, patio or garden installations typically take 1-2 weeks, and larger projects involving multiple features can take 3-6 weeks or more. We'll give you a detailed timeline with your written estimate.",
  },
  {
    question: "Will I need a permit for my project?",
    answer:
      "Permit needs depend on your location and project scope — larger structures like retaining walls over a certain height, significant grading, and some hardscape installations may require one. We're familiar with local regulations and will advise you on permit needs during your consultation.",
  },
  {
    question: "What kind of warranty do you provide?",
    answer:
      "We stand behind our work. Hardscape installations typically include a workmanship warranty covering structural integrity and proper installation, and plant materials come with a limited warranty. Specific warranty terms and coverage will be outlined in your project agreement.",
  },
]

export function FreeEstimateFaq() {
  return (
    <section className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
                <AccordionContent forceMount className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
