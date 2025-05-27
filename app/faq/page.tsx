"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Mail, Phone, ArrowRight } from "lucide-react"

// FAQ categories and questions
const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    questions: [
      {
        question: "How long has A-Z Landscaping been in business?",
        answer:
          "A-Z Landscaping has been transforming outdoor spaces since 2008. With over 15 years of experience, we've completed more than 500 projects and built a reputation for quality craftsmanship and exceptional customer service.",
      },
      {
        question: "What areas do you service?",
        answer:
          "We primarily serve the Greater Metro Area and surrounding counties. Our service area extends approximately 50 miles from our main office. If you're unsure whether we service your area, please contact us, and we'll be happy to let you know.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, A-Z Landscaping is fully licensed and insured. We carry comprehensive general liability insurance and workers' compensation coverage to protect both our clients and our team. We're happy to provide proof of insurance upon request.",
      },
      {
        question: "Do you offer free consultations?",
        answer:
          "Yes, we offer free initial consultations and estimates for all potential projects. During this consultation, we'll discuss your vision, assess your property, and provide professional recommendations tailored to your needs and budget.",
      },
      {
        question: "How do I get started with a landscaping project?",
        answer:
          "Getting started is easy! Simply contact us through our website, by phone, or by email to schedule a free consultation. During this initial meeting, we'll discuss your ideas, assess your space, and begin developing a plan that meets your needs and budget.",
      },
    ],
  },
  {
    id: "services",
    title: "Services & Pricing",
    questions: [
      {
        question: "What services do you offer?",
        answer:
          "We offer a comprehensive range of landscaping and hardscaping services, including: patios and walkways, retaining walls, driveways, outdoor kitchens and fire features, water features, pergolas and gazebos, lawn care and maintenance, garden design and planting, tree services, irrigation systems, landscape lighting, and seasonal services. Visit our Services page for more detailed information.",
      },
      {
        question: "How much does landscaping cost?",
        answer:
          "Landscaping costs vary widely depending on the scope of work, materials chosen, property size, and specific features. Small projects might start at a few thousand dollars, while comprehensive landscape transformations can range from $15,000 to $50,000 or more. We provide detailed, transparent estimates after our initial consultation.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes, we partner with several financing companies to offer flexible payment options for larger projects. During your consultation, we can discuss the available financing plans and help you find the option that best suits your needs.",
      },
      {
        question: "Do you offer maintenance packages?",
        answer:
          "Yes, we offer several maintenance packages to keep your landscape looking its best year-round. These can include regular lawn care, seasonal cleanups, pruning, fertilization, and more. We can customize a maintenance plan specifically for your property's needs.",
      },
      {
        question: "Can you work with my budget?",
        answer:
          "We strive to work with clients across various budget ranges. During our consultation, we'll discuss your priorities and can suggest phasing options or alternative materials to help align the project with your budget while still achieving your goals.",
      },
    ],
  },
  {
    id: "process",
    title: "Project Process",
    questions: [
      {
        question: "How long does a typical landscaping project take?",
        answer:
          "Project timelines vary based on scope and complexity. Small projects like a simple patio might take 1-2 weeks, while comprehensive landscape transformations could take 4-8 weeks or longer. Weather, material availability, and project complexity all affect timelines. We provide estimated completion dates before beginning work.",
      },
      {
        question: "What is your design process?",
        answer:
          "Our design process begins with an initial consultation to understand your vision and needs. For larger projects, we create a conceptual design followed by detailed plans. We may use 2D drawings, 3D renderings, or material samples to help you visualize the final result. We refine the design based on your feedback before beginning installation.",
      },
      {
        question: "Do I need permits for my landscaping project?",
        answer:
          "Some landscaping projects require permits, particularly those involving structures, electrical work, or significant changes to drainage. As part of our service, we handle the permit application process for you, ensuring all work complies with local regulations and building codes.",
      },
      {
        question: "Will you work with my existing landscape features?",
        answer:
          "We often incorporate existing landscape elements that are in good condition or have sentimental value. During our initial assessment, we'll evaluate existing features and discuss which elements to keep, enhance, or replace to create a cohesive overall design.",
      },
      {
        question: "How do you handle changes during the project?",
        answer:
          "We understand that you might want to make changes as you see the project taking shape. We manage change requests through a formal change order process, documenting the requested changes, any associated costs, and potential timeline impacts. This ensures clear communication and prevents misunderstandings.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Care",
    questions: [
      {
        question: "How should I care for my new landscape?",
        answer:
          "After completing your project, we provide detailed care instructions specific to your new landscape. This includes watering schedules, fertilization recommendations, pruning guidelines, and seasonal maintenance tips. We're also available to answer questions as they arise.",
      },
      {
        question: "Do you offer warranties on plants and materials?",
        answer:
          "Yes, we offer warranties on both our workmanship and materials. Plant warranties typically range from 30 days to one year, depending on the type of plant and care requirements. Hardscape elements like patios and walls come with longer warranties, typically 2-5 years for workmanship.",
      },
      {
        question: "How often should I water my new plants?",
        answer:
          "Watering needs vary based on plant type, soil conditions, weather, and season. Generally, new plants require more frequent watering until established (typically 6-12 months). We provide a customized watering schedule for your specific landscape and are happy to install irrigation systems to automate this process.",
      },
      {
        question: "When is the best time to prune trees and shrubs?",
        answer:
          "The optimal pruning time depends on the specific plant species and your goals. Generally, most deciduous trees and shrubs are best pruned during late winter dormancy. Spring-flowering shrubs should be pruned after flowering. Evergreens typically respond well to early summer pruning. Our maintenance team can handle pruning at the appropriate times.",
      },
      {
        question: "How do I prepare my landscape for winter?",
        answer:
          "Winter preparation typically includes fall cleanup (removing leaves and debris), cutting back perennials, applying mulch to protect plant roots, wrapping sensitive plants or young trees, disconnecting and draining irrigation systems, and applying anti-desiccant sprays to evergreens. Our seasonal services include comprehensive winterization.",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment & Scheduling",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept multiple payment methods including checks, credit cards, electronic bank transfers, and cash. For larger projects, we typically work with a payment schedule tied to project milestones, with a deposit required to secure your place in our schedule.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, we typically require a deposit to secure your place in our schedule and cover initial material costs. The deposit amount is usually 25-33% of the total project cost, with the remainder due either in installments or upon completion, depending on the project size.",
      },
      {
        question: "How far in advance should I book your services?",
        answer:
          "For maintenance services, we recommend booking 1-2 weeks in advance. For installation projects, our schedule typically fills up 4-8 weeks in advance during peak season (spring and fall). For large-scale projects, especially those you want completed by a specific date, we recommend contacting us 2-3 months in advance.",
      },
      {
        question: "What happens if there's bad weather during my project?",
        answer:
          "Weather delays are sometimes unavoidable in outdoor work. We monitor weather forecasts closely and will communicate any potential delays. While light rain may not affect hardscape work, activities like planting, seeding, and certain construction tasks require dry conditions. We build some flexibility into our schedules to accommodate weather delays.",
      },
      {
        question: "Can you work with my HOA or property management company?",
        answer:
          "Yes, we have extensive experience working with HOAs and property management companies. We're familiar with the approval processes and can provide the documentation needed for architectural review committees. We can also coordinate directly with your HOA or property manager if you prefer.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter questions based on search query and active category
  const filteredCategories = faqCategories
    .map((category) => {
      const filteredQuestions = category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      return {
        ...category,
        questions: filteredQuestions,
      }
    })
    .filter((category) => activeCategory === "all" || category.id === activeCategory)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Frequently Asked Questions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Can We Help You?</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about our landscaping services, process, and more.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for questions..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === "all"
                        ? "bg-navy-100 text-navy-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    All Questions
                  </button>

                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? "bg-navy-100 text-navy-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Accordions */}
            <div className="lg:w-3/4">
              {filteredCategories.length > 0 ? (
                filteredCategories.map(
                  (category) =>
                    category.questions.length > 0 && (
                      <div key={category.id} className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
                        <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm overflow-hidden">
                          {category.questions.map((faq, index) => (
                            <AccordionItem key={index} value={`${category.id}-${index}`}>
                              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                                <span className="text-lg font-medium">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                                <p className="text-base leading-relaxed">{faq.answer}</p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ),
                )
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any questions matching your search. Try different keywords or browse by category.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Please contact our customer support team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-navy-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-navy-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">info@azlandscaping.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-kelly-500 hover:bg-kelly-600">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-navy-900 p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Request a Free Consultation</h3>
                <p className="mb-6">
                  Ready to transform your outdoor space? Schedule a free consultation with our expert team.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Personalized design recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Detailed project estimate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Timeline and process overview</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-white text-navy-900 hover:bg-navy-50">Schedule Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
