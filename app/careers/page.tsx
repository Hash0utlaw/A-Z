import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  GraduationCap,
  Clock,
  Heart,
  Briefcase,
  Calendar,
  DollarSign,
  Award,
  Send,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"

// Job listings data
const jobListings = [
  {
    id: "landscape-technician",
    title: "Landscape Technician",
    type: "Full-time",
    location: "Anytown, USA",
    experience: "Entry-level to 2 years",
    description:
      "Join our team as a Landscape Technician responsible for maintaining residential and commercial properties. Duties include mowing, trimming, planting, and basic hardscape maintenance.",
    requirements: [
      "Valid driver's license",
      "Physical ability to lift up to 50 lbs",
      "Reliable transportation",
      "Ability to work outdoors in various weather conditions",
      "Weekend availability (seasonal)",
    ],
  },
  {
    id: "hardscape-installer",
    title: "Hardscape Installer",
    type: "Full-time",
    location: "Anytown, USA",
    experience: "2+ years",
    description:
      "We're seeking experienced Hardscape Installers to join our team. You'll be responsible for installing patios, walkways, retaining walls, and other hardscape features according to design specifications.",
    requirements: [
      "2+ years experience in hardscape installation",
      "Knowledge of various materials (pavers, natural stone, concrete)",
      "Ability to read and interpret landscape plans",
      "Experience with proper grading and drainage techniques",
      "Valid driver's license",
    ],
  },
  {
    id: "landscape-designer",
    title: "Landscape Designer",
    type: "Full-time",
    location: "Anytown, USA",
    experience: "3+ years",
    description:
      "Design beautiful outdoor spaces for our residential and commercial clients. You'll work directly with clients to understand their needs, create detailed design plans, and collaborate with our installation teams.",
    requirements: [
      "Degree in Landscape Architecture or related field",
      "3+ years experience in landscape design",
      "Proficiency in CAD and design software",
      "Strong plant knowledge and hardscape design experience",
      "Excellent communication and client service skills",
    ],
  },
  {
    id: "irrigation-specialist",
    title: "Irrigation Specialist",
    type: "Full-time",
    location: "Anytown, USA",
    experience: "2+ years",
    description:
      "Responsible for the installation, maintenance, and repair of irrigation systems for residential and commercial properties. You'll ensure efficient water usage while maintaining healthy landscapes.",
    requirements: [
      "2+ years experience with irrigation systems",
      "Knowledge of controllers, valves, and sprinkler components",
      "Troubleshooting and repair skills",
      "Valid driver's license",
      "Irrigation certification preferred",
    ],
  },
]

// Benefits data
const benefits = [
  {
    icon: <DollarSign className="h-10 w-10 text-kelly-500" />,
    title: "Competitive Pay",
    description: "We offer industry-leading compensation packages based on experience and skills.",
  },
  {
    icon: <Heart className="h-10 w-10 text-kelly-500" />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for full-time employees.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-kelly-500" />,
    title: "Paid Time Off",
    description: "Generous vacation, sick leave, and paid holidays to ensure work-life balance.",
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-kelly-500" />,
    title: "Training & Development",
    description: "Ongoing education, certifications, and skills development opportunities.",
  },
  {
    icon: <Award className="h-10 w-10 text-kelly-500" />,
    title: "Recognition Programs",
    description: "Employee recognition and performance-based incentives and bonuses.",
  },
  {
    icon: <Clock className="h-10 w-10 text-kelly-500" />,
    title: "Year-Round Work",
    description: "Stable employment with opportunities for year-round work in all seasons.",
  },
]

// Team values data
const values = [
  {
    title: "Excellence",
    description: "We take pride in delivering the highest quality work on every project, no matter the size.",
  },
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in all our interactions with clients and team members.",
  },
  {
    title: "Innovation",
    description: "We embrace new techniques, materials, and technologies to improve our services.",
  },
  {
    title: "Sustainability",
    description: "We're committed to environmentally responsible practices in all our operations.",
  },
  {
    title: "Teamwork",
    description: "We collaborate effectively, supporting each other to achieve exceptional results.",
  },
  {
    title: "Growth",
    description: "We provide opportunities for personal and professional development for all team members.",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Join Our Team</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Grow Your Career With A-Z Landscaping
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our team of passionate landscaping professionals and build a rewarding career transforming outdoor
                spaces. We offer competitive pay, benefits, and opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#current-openings">
                  <Button className="bg-kelly-500 hover:bg-kelly-600">View Current Openings</Button>
                </Link>
                <Link href="#application-process">
                  <Button variant="outline" className="border-navy-500 text-navy-700 hover:bg-navy-50">
                    Application Process
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/careers/team-working.png"
                  alt="A-Z Landscaping team working together on a project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white" id="why-work-with-us">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Why Work With Us</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join a Team That Values Your Growth</h2>
            <p className="text-lg text-gray-600">
              At A-Z Landscaping, we believe our success starts with our team. We're committed to creating a positive
              work environment where you can thrive professionally and personally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-navy-100">
                <CardContent className="pt-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Values</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Principles That Guide Our Work</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our company culture is built on a foundation of shared values that guide how we work together and serve
                our clients. These principles define who we are and what we stand for.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle className="h-5 w-5 text-kelly-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/careers/team-meeting.png" alt="Team meeting" fill className="object-cover" />
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/careers/team-installing.png"
                    alt="Team installing landscape"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/careers/team-training.png" alt="Team training session" fill className="object-cover" />
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/careers/team-celebration.png" alt="Team celebration" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white" id="current-openings">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Current Openings</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Team</h2>
            <p className="text-lg text-gray-600">
              We're always looking for talented individuals who are passionate about creating beautiful outdoor spaces.
              Check out our current job openings below.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {jobListings.map((job) => (
              <Card key={job.id} className="border-navy-100 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <div className="flex items-center text-gray-600 text-sm">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <Link href="#application-process">
                      <Button className="mt-4 md:mt-0 bg-kelly-500 hover:bg-kelly-600">Apply Now</Button>
                    </Link>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700">{job.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-kelly-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a position that matches your skills? We're always interested in talented individuals.
            </p>
            <Link href="#application-process">
              <Button variant="outline" className="border-navy-500 text-navy-700 hover:bg-navy-50">
                Submit General Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Team Testimonials</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear From Our Team</h2>
            <p className="text-lg text-gray-600">
              Our employees are our greatest asset. Here's what they have to say about working at A-Z Landscaping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-navy-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image src="/careers/employee-1.png" alt="Michael Johnson" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Michael Johnson</h3>
                    <p className="text-gray-600 text-sm">Landscape Foreman, 5 years</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I started as a crew member and worked my way up to foreman. A-Z Landscaping has invested in my
                  training and given me opportunities to grow. The team feels like family, and I'm proud of the work we
                  do every day."
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image src="/careers/employee-2.png" alt="Sarah Martinez" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Sarah Martinez</h3>
                    <p className="text-gray-600 text-sm">Landscape Designer, 3 years</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Working at A-Z Landscaping has allowed me to be creative while developing my professional skills. I
                  love seeing my designs come to life and the joy they bring to our clients. The collaborative
                  environment here is truly special."
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image src="/careers/employee-3.png" alt="David Thompson" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">David Thompson</h3>
                    <p className="text-gray-600 text-sm">Hardscape Specialist, 4 years</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The training and support I've received at A-Z Landscaping has helped me master my craft. I appreciate
                  working for a company that values quality and craftsmanship. The benefits and steady work year-round
                  have been great for my family."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white" id="application-process">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-kelly-100 text-kelly-700 hover:bg-kelly-200 mb-4">Application Process</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Join Our Team</h2>
            <p className="text-lg text-gray-600">
              We've made our application process straightforward. Here's what to expect when you apply to join A-Z
              Landscaping.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-navy-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Submit Application</h3>
                <p className="text-gray-600">
                  Complete our online application form with your contact information, work history, and relevant skills.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-navy-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Interview Process</h3>
                <p className="text-gray-600">
                  Qualified candidates will be contacted for a phone screening followed by an in-person interview with
                  our team.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-navy-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Join Our Team</h3>
                <p className="text-gray-600">
                  Selected candidates will receive an offer, complete onboarding, and begin training with our
                  experienced team.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ready to Apply?</h3>
              <p className="text-center text-gray-600 mb-6">
                Submit your application today and take the first step toward joining our team.
              </p>
              <div className="flex justify-center">
                <Link href="mailto:careers@azlandscaping.com">
                  <Button className="bg-kelly-500 hover:bg-kelly-600">
                    Email Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our current openings or the application process, please don't hesitate
                  to contact our HR team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-navy-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">careers@azlandscaping.com</p>
                      <p className="text-sm text-gray-500">Email our HR team</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-navy-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">(555) 123-4567 ext. 2</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 9AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-navy-900 p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Benefits of Working With Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Competitive compensation packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Comprehensive health benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Ongoing training and development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Career advancement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-navy-700 p-1 rounded-full mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Positive, supportive work environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
