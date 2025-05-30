import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Leaf, Recycle, Star, ThumbsUp, Trophy, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Transforming Outdoor Spaces Since 2008
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                A-Z Landscapes has been creating beautiful, functional outdoor environments for residential and
                commercial clients for over 15 years. Our dedicated team combines artistic vision with technical
                expertise to deliver exceptional landscaping solutions tailored to each client's unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button className="bg-kelly-500 hover:bg-kelly-600">Our Services</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-navy-200 text-navy-700 hover:bg-navy-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about/team-landscape.png"
                alt="A-Z Landscaping Team"
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
                properties while providing unmatched customer service and sustainable landscaping practices."
              </p>
            </div>
            <p className="mt-8 text-gray-700">
              At A-Z Landscapes, we believe that thoughtfully designed and expertly crafted outdoor spaces can transform
              not just properties, but lives. We approach each project with creativity, precision, and a commitment to
              excellence, ensuring that every landscape we create exceeds our clients' expectations and stands the test
              of time.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Meet Our Founder</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image src="/about/founder.png" alt="Michael Anderson, Founder" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Michael Anderson</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-gray-700 mb-6">
                Michael founded A-Z Landscapes in 2008 with a passion for creating beautiful outdoor spaces and a
                commitment to exceptional craftsmanship. With over 20 years of experience in the landscaping industry,
                Michael began his career as a landscape laborer while studying Horticulture and Landscape Design at
                State University.
              </p>
              <p className="text-gray-700 mb-6">
                After working for several established landscaping companies and gaining expertise in all aspects of the
                industry, Michael decided to start his own company with a focus on quality, creativity, and customer
                satisfaction. Under his leadership, A-Z Landscapes has grown from a small operation to a full-service
                landscaping company with a reputation for excellence.
              </p>
              <div className="p-4 bg-white border-l-4 border-kelly-500 rounded shadow-sm">
                <p className="italic text-navy-700">
                  "I believe that every outdoor space has the potential to be both beautiful and functional. Our goal is
                  to help our clients realize that potential through thoughtful design, quality materials, and expert
                  craftsmanship."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy-100"></div>

            {/* 2008 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-kelly-500 text-white font-bold py-2 px-6 rounded-full z-10">2008</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Company Founded</h3>
                <p className="text-gray-700">
                  Michael Anderson establishes A-Z Landscapes with a small team focusing on residential landscape
                  maintenance and basic installation services.
                </p>
              </div>
            </div>

            {/* 2012 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-kelly-500 text-white font-bold py-2 px-6 rounded-full z-10">2012</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Expansion into Hardscaping</h3>
                <p className="text-gray-700">
                  The company expands services to include patios, retaining walls, and other hardscape elements,
                  doubling the size of the team and acquiring specialized equipment.
                </p>
              </div>
            </div>

            {/* 2015 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-kelly-500 text-white font-bold py-2 px-6 rounded-full z-10">2015</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Commercial Division Launch</h3>
                <p className="text-gray-700">
                  A-Z Landscapes launches a dedicated commercial division, serving businesses, HOAs, and municipal
                  clients with comprehensive landscape management services.
                </p>
              </div>
            </div>

            {/* 2018 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-kelly-500 text-white font-bold py-2 px-6 rounded-full z-10">2018</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Sustainable Practices Initiative</h3>
                <p className="text-gray-700">
                  The company implements a comprehensive sustainability program, incorporating eco-friendly practices,
                  materials, and equipment across all services.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-kelly-500 text-white font-bold py-2 px-6 rounded-full z-10">2021</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-navy-800 mb-2">Design Studio Opening</h3>
                <p className="text-gray-700">
                  A-Z Landscapes opens a dedicated design studio with 3D visualization capabilities, allowing clients to
                  see their projects come to life before installation begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-navy-100 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-800">Quality & Craftsmanship</h3>
              </div>
              <p className="text-gray-700">
                We take pride in our work and are committed to delivering the highest quality in every project, no
                matter the size. Our attention to detail and dedication to craftsmanship ensure that each landscape we
                create is built to last and exceed expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-navy-100 p-3 rounded-full mr-4">
                  <ThumbsUp className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-800">Customer Satisfaction</h3>
              </div>
              <p className="text-gray-700">
                Our clients are at the heart of everything we do. We listen carefully to their needs, communicate
                clearly throughout the process, and work tirelessly to ensure their complete satisfaction. We measure
                our success by the happiness of our clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-navy-100 p-3 rounded-full mr-4">
                  <Recycle className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-800">Environmental Responsibility</h3>
              </div>
              <p className="text-gray-700">
                We are committed to sustainable landscaping practices that protect and enhance the environment. From
                water conservation and native plantings to eco-friendly materials and methods, we strive to create
                landscapes that are as kind to the earth as they are beautiful.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-navy-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-800">Professional Development</h3>
              </div>
              <p className="text-gray-700">
                We invest in our team through ongoing training, education, and certification programs. By fostering a
                culture of continuous learning and growth, we ensure that our staff remains at the forefront of industry
                knowledge and techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Certifications & Affiliations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Certified Landscape Professional</h3>
              <p className="text-gray-700">
                Our team includes multiple certified landscape professionals with extensive training and expertise in
                design, installation, and maintenance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Sustainable Landscape Certification</h3>
              <p className="text-gray-700">
                We hold certification in sustainable landscaping practices, demonstrating our commitment to
                environmentally responsible methods and materials.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-navy-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Industry Association Member</h3>
              <p className="text-gray-700">
                A-Z Landscapes is a proud member of the National Association of Landscape Professionals and our local
                landscape contractors association.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Team</h2>
              <p className="text-gray-700 mb-6">
                The heart of A-Z Landscapes is our dedicated team of professionals who bring expertise, creativity, and
                passion to every project. From our designers and horticulturists to our installation crews and
                maintenance specialists, each team member plays a vital role in delivering exceptional results.
              </p>
              <p className="text-gray-700 mb-8">
                We invest in our people through ongoing training, competitive compensation, and a positive work
                environment that values safety, collaboration, and growth. Many of our team members have been with us
                for years, contributing to the consistency and quality that defines our work.
              </p>
              <Link href="/careers">
                <Button className="bg-navy-700 hover:bg-navy-800 text-white">Join Our Team</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about/company-history.png"
                alt="A-Z Landscaping Team at Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-lg text-navy-100 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation with our design team. We'll work with you to create a landscape
            that reflects your style, meets your needs, and exceeds your expectations.
          </p>
          <Link href="/contact">
            <Button className="bg-kelly-500 hover:bg-kelly-600 text-white">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
