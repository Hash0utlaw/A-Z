import ServicePageTemplate from "@/components/service-page-template"
import { ServiceBeforeAfter } from "@/components/service-before-after"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pergolas & Gazebos Design & Construction | A-Z Landscapes",
  description:
    "Custom pergolas, gazebos, and shade structures by A-Z Landscapes. Enhance your outdoor living space with beautiful and functional designs.",
}

export default function PergolasGazebosPage() {
  return (
    <>
      <ServicePageTemplate
        category="hardscape"
        title="Pergolas & Gazebos"
        description="Define your outdoor living space with custom pergolas, gazebos, and shade structures that combine beauty and functionality."
        heroImage="/pergolas-gazebos/hero.png"
        benefits={[
          "Create defined outdoor living and entertaining spaces",
          "Add architectural interest and vertical elements to your landscape",
          "Provide shade and protection from sun and light rain",
          "Increase usable outdoor time during hot summer months",
          "Enhance property value with high-quality outdoor structures",
          "Customize with features like climbing plants, curtains, lighting, and more",
        ]}
        process={[
          {
            title: "Design Consultation",
            description:
              "We discuss your goals, preferences, and how an outdoor structure can enhance your lifestyle and landscape.",
          },
          {
            title: "Site Planning",
            description:
              "Our team evaluates your property to determine the ideal location, size, and orientation for your structure.",
          },
          {
            title: "Custom Design",
            description:
              "We create a tailored design that complements your home's architecture and fits your specific needs.",
          },
          {
            title: "Material Selection",
            description:
              "We help you choose the best materials based on aesthetics, durability, maintenance requirements, and budget.",
          },
          {
            title: "Professional Construction",
            description:
              "Our skilled craftsmen build your structure with attention to detail and quality craftsmanship.",
          },
          {
            title: "Final Touches",
            description:
              "We complete your project with any additional features like lighting, fans, or custom elements you've selected.",
          },
        ]}
        gallery={[
          {
            image: "/pergolas-gazebos/cedar-pergola.png",
            title: "Cedar Pergola",
            description: "Custom cedar pergola with stone columns and integrated lighting",
          },
          {
            image: "/pergolas-gazebos/traditional-gazebo.png",
            title: "Traditional Gazebo",
            description: "Octagonal gazebo with decorative railings and copper roof",
          },
          {
            image: "/pergolas-gazebos/modern-pergola.png",
            title: "Modern Pergola",
            description: "Contemporary aluminum pergola with adjustable louvers",
          },
          {
            image: "/pergolas-gazebos/poolside-cabana.png",
            title: "Poolside Cabana",
            description: "Poolside shade structure with curtains and outdoor kitchen",
          },
          {
            image: "/pergolas-gazebos/garden-arbor.png",
            title: "Garden Arbor",
            description: "Decorative garden arbor with climbing roses and seating",
          },
          {
            image: "/pergolas-gazebos/attached-pergola.png",
            title: "Attached Pergola",
            description: "Home-attached pergola creating an outdoor room extension",
          },
        ]}
        testimonials={[
          {
            name: "Christopher & Lisa Hamilton",
            location: "Residential Clients",
            rating: 5,
            text: "Our cedar pergola from A-Z has transformed our backyard into an outdoor living room. It provides just the right amount of shade while looking absolutely beautiful with the climbing vines we planted.",
          },
          {
            name: "Riverside Community Center",
            location: "Commercial Client",
            rating: 5,
            text: "A-Z built a series of gazebos throughout our community park that have become favorite gathering spots. The quality of construction is exceptional, and they worked closely with us on every design detail.",
          },
          {
            name: "The Rodriguez Family",
            location: "Residential Clients",
            rating: 5,
            text: "We love our new poolside cabana! A-Z designed it to match our home perfectly, and the added shade has made our pool area usable even on the hottest days. The built-in lighting lets us enjoy the space well into the evening.",
          },
        ]}
        faqs={[
          {
            question: "What's the difference between a pergola and a gazebo?",
            answer:
              "Pergolas typically feature an open-roof design with beams and rafters that provide filtered shade while allowing some sunlight through. They can be freestanding or attached to a house. Gazebos are fully roofed structures, usually octagonal or round, that provide complete protection from sun and light rain. They typically stand alone in the landscape as a destination point.",
          },
          {
            question: "What materials are best for outdoor structures?",
            answer:
              "We offer structures in several materials, each with unique benefits. Cedar and redwood provide natural beauty and weather resistance. Pressure-treated pine offers durability at a lower cost. Composite and vinyl materials require minimal maintenance. Aluminum and fiberglass options provide modern aesthetics and exceptional longevity. We'll discuss the pros and cons of each during your consultation.",
          },
          {
            question: "Do I need a permit to build a pergola or gazebo?",
            answer:
              "Permit requirements vary by location. Many municipalities require permits for structures over a certain size or attached to the home. As part of our service, we research local building codes, obtain necessary permits, and ensure your structure meets all requirements. This gives you peace of mind that your installation is properly documented and compliant.",
          },
          {
            question: "What customization options are available?",
            answer:
              "Our structures can be customized in countless ways. Options include integrated lighting, ceiling fans, outdoor speakers, privacy screens, retractable canopies, curtains, climbing plant supports, built-in seating, and decorative elements. We can design your structure to complement your home's architecture and reflect your personal style.",
          },
          {
            question: "How long will it take to build my structure?",
            answer:
              "The timeline varies based on complexity and size. A standard pergola typically takes 2-3 days to construct once materials are on site. Larger or more complex structures like custom gazebos may take 1-2 weeks. The entire process from design to completion typically spans 3-6 weeks, depending on material availability and permitting timelines.",
          },
        ]}
        relatedServices={[
          {
            title: "Patios & Walkways",
            slug: "patios-walkways",
          },
          {
            title: "Outdoor Kitchens & Fire Features",
            slug: "outdoor-kitchens-fire-features",
          },
          {
            title: "Landscape Lighting",
            slug: "landscape-lighting",
          },
        ]}
      />

      {/* Add Before/After Transformation Section */}
      <section className="py-16 bg-kelly-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See the Transformation</h2>
            <p className="text-lg text-gray-600">
              Drag the slider to see how our pergolas and gazebos can transform your outdoor space from ordinary to
              extraordinary.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backyard Patio Transformation</h3>
              <p className="text-gray-600 mb-6">
                This basic concrete patio was transformed into a beautiful outdoor living space with a custom cedar
                pergola, comfortable seating, and integrated lighting.
              </p>
              <ServiceBeforeAfter
                beforeImage="/basic-concrete-patio.png"
                afterImage="/cedar-pergola-patio.png"
                beforeAlt="Basic concrete patio before pergola installation"
                afterAlt="Beautiful patio with cedar pergola after installation"
                height={500}
              />
              <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600">
                  "Our backyard was too hot to use in the summer until A-Z installed our beautiful pergola. Now we have
                  a comfortable, shaded space that we use almost every day. The craftsmanship is outstanding!"
                </p>
                <p className="mt-2 font-medium text-gray-900">— Michael & Sarah Johnson, Homeowners</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Garden Retreat Creation</h3>
              <p className="text-gray-600 mb-6">
                This unused corner of the yard was transformed into a charming garden retreat with a traditional gazebo,
                creating a perfect spot for relaxation and conversation.
              </p>
              <ServiceBeforeAfter
                beforeImage="/unused-yard-corner.png"
                afterImage="/garden-gazebo.png"
                beforeAlt="Unused corner of yard before gazebo installation"
                afterAlt="Beautiful garden gazebo after installation"
                height={500}
              />
              <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
                <p className="italic text-gray-600">
                  "A-Z Landscaping helped us create our dream garden retreat. The gazebo is the perfect centerpiece, and
                  the surrounding plantings make it feel like a private oasis. It's become our favorite spot to relax."
                </p>
                <p className="mt-2 font-medium text-gray-900">— Elizabeth & Robert Taylor, Homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
