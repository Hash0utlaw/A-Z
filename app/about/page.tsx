import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Leaf, Recycle, Star, Trophy, Users, Heart, MessageSquare, Eye } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About A-Z Landscapes | Our Story & Values",
  description:
    "Learn about A-Z Landscapes, our founder Zach Wardell, our mission, and our 20+ years of experience in creating beautiful outdoor spaces.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Crafting Beautiful Outdoors for Over 20 Years
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                A-Z Landscapes, founded by Zach Wardell, has been turning outdoor visions into reality since 2008. With
                over two decades in the landscaping industry, Zach's journey began with a summer job that blossomed into
                a lifelong passion for transforming ordinary spaces into something to be proud of.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our dedicated team combines artistic vision with technical expertise to deliver exceptional landscaping
                and hardscaping solutions, tailored to each client's unique needs and dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button className="bg-kelly-500 hover:bg-kelly-600">Our Services</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-navy-200 text-navy-700 hover:bg-navy-50 bg-transparent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/user-uploads/aerial-backyard-fire-pit-patio-hardscape.jpeg"
                alt="A-Z Landscapes aerial view of completed fire pit and patio project"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Our Mission</h2>
            <div className="relative p-8 border-l-4 border-r-4 border-kelly-500">
              <p className="text-xl italic text-navy-800 mb-0">
                "To create exceptional outdoor spaces that enhance the beauty, functionality, and value of our clients'
                properties by making people happy, producing something at the end of the day to be proud of, and
                ensuring our team feels that same pride in their hard work."
              </p>
            </div>
            <p className="mt-8 text-gray-700">
              At A-Z Landscapes, we believe that thoughtfully designed and expertly crafted outdoor spaces can transform
              not just properties, but lives. We approach each project with creativity, precision, and a commitment to
              excellence, ensuring that every landscape we create exceeds our clients' expectations and stands the test
              of time. We're not just about aesthetics; we're about creating lasting enjoyment and value.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Meet Our Founder: Zach Wardell</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/zach-owner-headshot.jpeg"
                alt="Zach Wardell, Founder of A-Z Landscapes"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Zach Wardell</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-gray-700 mb-6">
                Zach's passion for landscaping started as a summer job. He quickly realized the joy in being outdoors
                and "making something out of nothing, turning something that was really bad into something to be proud
                of." After eight years honing his skills in the industry, Zach founded A-Z Landscapes in 2008.
              </p>
              <p className="text-gray-700 mb-6">
                His motivation was clear: "I found out the good ways and bad ways to treat people and try to use that as
                best as I can to benefit me and to help customers along the way." This principle, combined with over 20
                years of hands-on experience, has shaped A-Z Landscapes into a company renowned for quality, creativity,
                and genuine customer care.
              </p>
              <div className="p-4 bg-white border-l-4 border-kelly-500 rounded shadow-sm">
                <p className="italic text-navy-700">
                  "I enjoy making people happy and producing something at the end of the day to be proud of, and that
                  your guys can be proud of... that feels good to me and makes me feel better than just anything."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Evolution & Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Our Journey & Approach</h2>
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">
                From Maintenance Roots to Design-Build Excellence
              </h3>
              <p className="text-gray-700 mb-4">
                A-Z Landscapes initially focused on maintenance – mowing, pruning, and general property care. This was
                Zach's early experience. However, a growing interest in more transformative work led to a pivotal shift:
                "After doing that for a couple of years, I got kind of bored with it... and did a couple of hardscape
                jobs, a couple of retainer walls and realized how much fun they were. So that kind of really developed
                me into wanting to grow the business into more of a landscape design and hardscape company with a
                maintenance side."
              </p>
              <p className="text-gray-700">
                Today, while "mowing grass is fun," the real passion lies in starting from scratch and building
                something truly special – a space clients and our team can be proud of.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">
                More Than Just "Yard Maids" – Your Landscape Partners
              </h3>
              <p className="text-gray-700 mb-4">
                We strive to be more than just a service provider; we aim to be your trusted landscape contractors and
                consultants. Zach explains, "I want them to feel that we're more of contractors... you communicate with
                them, you try to help them benefit their property more, give them ideas." This means a collaborative
                approach, where we listen to your needs, offer expert advice, and work together to find the best
                solutions for your property.
              </p>
              <p className="text-gray-700">
                It's about "going from reactive to proactive." We believe in putting in the extra effort – like pulling
                up a client's trash can or noticing potential issues before they're pointed out – because "it shows the
                customer that we care. And we're not there just to do a job and hurry up and leave."
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">Our Team: The Heart of A-Z Landscapes</h3>
              <p className="text-gray-700 mb-4">
                Zach deeply values his team: "I got all these guys that rely on me to support their families. So I've
                got to make sure that this train keeps moving forward." This sense of responsibility translates into
                fostering a supportive environment and ensuring the team has what they need to succeed and take pride in
                their work. "I think I've weeded those people out [who just skate by], and they all got a really, really
                good group of guys so thankful that I got the guys I got."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={Star}
              title="Quality & Craftsmanship"
              description="We take immense pride in our work, delivering the highest quality in every project. Our attention to detail ensures landscapes that are built to last and exceed expectations."
            />
            <ValueCard
              icon={Heart}
              title="Customer Happiness"
              description="Our clients are at the heart of everything. We listen, communicate clearly, and work tirelessly to ensure complete satisfaction and a positive experience."
            />
            <ValueCard
              icon={MessageSquare}
              title="Collaborative Partnership"
              description="We believe in working with you, offering expert advice and tailored solutions. We aim to be proactive partners in enhancing your property."
            />
            <ValueCard
              icon={Recycle}
              title="Environmental Responsibility"
              description="We're committed to sustainable practices, from water-wise designs to eco-friendly materials, creating beautiful landscapes that are kind to the earth."
            />
            <ValueCard
              icon={Eye}
              title="Attention to Detail"
              description="It's the little things that make a big difference. From proactive care to meticulous installation, we focus on every detail to ensure excellence."
            />
            <ValueCard
              icon={Users}
              title="Valued Team"
              description="We invest in our team through training and support, fostering a culture where everyone can take pride in their work and contribute to our collective success."
            />
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Industry Expertise</h3>
              <p className="text-gray-700">
                With decades of combined experience, our team brings deep knowledge to every aspect of landscape design,
                construction, and maintenance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Sustainable Practices</h3>
              <p className="text-gray-700">
                We are dedicated to using sustainable methods and materials, ensuring your landscape is not only
                beautiful but also environmentally conscious.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Licensed & Insured</h3>
              <p className="text-gray-700">
                A-Z Landscapes is fully licensed and insured, providing peace of mind and professional assurance for all
                our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Landscape Transformation?</h2>
          <p className="text-lg text-navy-100 max-w-2xl mx-auto mb-8">
            Let's discuss your vision. Contact A-Z Landscapes today to schedule a consultation with Zach and our design
            team.
          </p>
          <div className="mb-8">
            <p className="text-lg text-navy-100 mb-2">Call us today:</p>
            <a
              href="tel:7040-989-4839"
              className="text-2xl font-bold text-kelly-400 hover:text-kelly-300 transition-colors"
            >
              (704) 989-4839
            </a>
          </div>
          <Link href="/contact">
            <Button className="bg-kelly-500 hover:bg-kelly-600 text-white">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="bg-navy-100 p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-navy-600" />
        </div>
        <h3 className="text-xl font-bold text-navy-800">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
