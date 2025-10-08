import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions for using A-Z Landscapes services. Understand your rights and responsibilities when working with us.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <article className="prose prose-lg max-w-none prose-h2:text-navy-800 prose-a:text-kelly-600 hover:prose-a:text-kelly-700">
            <p>
              Welcome to A-Z Landscapes. These Terms of Service ("Terms") govern your use of our website and services.
              By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 rounded-r-lg">
              <p className="!my-0 text-yellow-800">
                <strong>Disclaimer:</strong> This is a sample terms of service document. You should consult with a legal
                professional to ensure it meets all legal requirements for your specific business and jurisdiction.
              </p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the A-Z Landscapes website and services, you accept and agree to be bound by the
              terms and provision of this agreement. If you do not agree to these Terms, please do not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              A-Z Landscapes provides professional landscaping and hardscaping services including but not limited to:
              lawn care, garden design, patio installation, retaining walls, water features, irrigation systems, and
              related outdoor improvement services. All services are subject to availability and may vary based on
              location and season.
            </p>

            <h2>3. Quotes and Estimates</h2>
            <p>
              All quotes and estimates provided by A-Z Landscapes are valid for 30 days from the date of issue unless
              otherwise specified. Quotes are based on the information provided at the time of assessment and may be
              subject to change if site conditions differ from initial expectations. Final pricing will be confirmed in
              writing before work begins.
            </p>

            <h2>4. Payment Terms</h2>
            <p>Payment terms will be outlined in your project agreement and may include:</p>
            <ul>
              <li>Deposit requirements before work begins</li>
              <li>Progress payments for larger projects</li>
              <li>Final payment upon project completion</li>
              <li>Accepted payment methods: credit cards, checks, and bank transfers</li>
            </ul>
            <p>
              Late payments may be subject to interest charges as permitted by law. We reserve the right to suspend
              services for accounts with outstanding balances.
            </p>

            <h2>5. Project Timeline</h2>
            <p>
              Project timelines are estimates and may be affected by weather conditions, material availability, site
              conditions, and other factors beyond our control. We will make reasonable efforts to complete projects
              within the estimated timeframe and will communicate any delays promptly.
            </p>

            <h2>6. Cancellation and Refund Policy</h2>
            <p>Cancellations must be made in writing. Cancellation terms vary by project stage:</p>
            <ul>
              <li>Before work begins: Deposit may be refunded minus administrative fees</li>
              <li>After work has started: Charges will apply for work completed and materials ordered</li>
              <li>For recurring services: 14 days notice required for cancellation</li>
            </ul>

            <h2>7. Warranties and Guarantees</h2>
            <p>
              A-Z Landscapes stands behind the quality of our work. Specific warranties vary by service type and will be
              detailed in your project agreement. Generally:
            </p>
            <ul>
              <li>Workmanship warranty: 1 year from project completion</li>
              <li>Plant material warranty: As specified by supplier (typically 30-90 days)</li>
              <li>Hardscape materials: Manufacturer warranties apply</li>
            </ul>
            <p>Warranties do not cover damage from improper maintenance, natural disasters, or normal wear and tear.</p>

            <h2>8. Property Access and Safety</h2>
            <p>
              By engaging our services, you grant A-Z Landscapes and our team members access to your property during
              scheduled work hours. You agree to:
            </p>
            <ul>
              <li>Provide safe access to work areas</li>
              <li>Secure pets during our visits</li>
              <li>Notify us of any underground utilities or hazards</li>
              <li>Maintain adequate property insurance</li>
            </ul>

            <h2>9. Limitation of Liability</h2>
            <p>
              A-Z Landscapes will not be liable for any indirect, incidental, special, or consequential damages arising
              from our services. Our total liability shall not exceed the amount paid for the specific service in
              question. We maintain appropriate insurance coverage for our operations.
            </p>

            <h2>10. Intellectual Property</h2>
            <p>
              All designs, plans, and creative work produced by A-Z Landscapes remain our intellectual property unless
              otherwise agreed in writing. You may not reproduce or use our designs for other projects without
              permission.
            </p>

            <h2>11. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our <Link href="/privacy-policy">Privacy Policy</Link> to
              understand how we collect, use, and protect your personal information in compliance with GDPR and other
              applicable regulations.
            </p>

            <h2>12. Dispute Resolution</h2>
            <p>
              In the event of any dispute arising from these Terms or our services, both parties agree to first attempt
              resolution through good faith negotiation. If negotiation fails, disputes will be resolved through binding
              arbitration in accordance with the laws of North Carolina.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              to our website. Your continued use of our services after changes are posted constitutes acceptance of the
              modified Terms.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of North Carolina,
              without regard to its conflict of law provisions.
            </p>

            <h2>15. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <ul>
              <li>
                By email: <Link href="mailto:Azlandscapesllc@gmail.com">Azlandscapesllc@gmail.com</Link>
              </li>
              <li>
                By visiting: <Link href="/contact">https://azlandscaping.com/contact</Link>
              </li>
              <li>By phone: (704) 989-4839</li>
              <li>By mail: 11525 Reames Rd, Suite 112, Charlotte, NC 28269</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  )
}
