import Image from "next/image"

export const metadata = {
  title: "Careers | A-Z Landscapes",
  description: "Join the A-Z Landscapes team and build your career in landscaping.",
}

const CareersPage = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join the A-Z Landscapes Team</h1>
        <p className="text-gray-600 mb-8">
          At A-Z Landscapes, we're more than just a landscaping company; we're a family. We're passionate about creating
          beautiful outdoor spaces and providing exceptional service to our clients. If you're looking for a rewarding
          career with opportunities for growth, we encourage you to apply.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          View Open Positions
        </button>
      </section>

      {/* Why Work With Us? */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Work at A-Z Landscapes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p className="text-gray-600">
              We're committed to helping our employees grow and develop their skills. We offer training programs and
              opportunities for advancement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Competitive Pay & Benefits</h3>
            <p className="text-gray-600">
              We offer competitive salaries and a comprehensive benefits package, including health insurance, paid time
              off, and retirement plan options.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Positive Work Environment</h3>
            <p className="text-gray-600">
              We foster a positive and supportive work environment where employees feel valued and respected.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Hear from the A-Z Landscapes Family</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 italic mb-4">
              "I've been with A-Z Landscapes for five years, and it's been the best job I've ever had. The people are
              great, and I feel like I'm making a real difference."
            </p>
            <p className="font-semibold">- John Smith, Landscape Technician</p>
          </div>
          <div>
            <p className="text-gray-600 italic mb-4">
              "A-Z Landscapes is a great place to work. They care about their employees and provide opportunities for
              growth."
            </p>
            <p className="font-semibold">- Jane Doe, Landscape Designer</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="text-center">
        <Image
          src="/images/landscaping-team.jpg" // Replace with your image path
          alt="A-Z Landscaping Team"
          width={800}
          height={600}
          className="mx-auto rounded-lg shadow-lg"
        />
        <p className="text-gray-600 mt-4">Our dedicated team at work.</p>
      </section>
    </div>
  )
}

export default CareersPage
