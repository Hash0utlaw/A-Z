import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how A-Z Landscapes collects, uses, and protects your personal data. Understand your rights under GDPR and our commitment to your privacy.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Our Commitment</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <article className="prose prose-lg max-w-none prose-h2:text-navy-800 prose-a:text-kelly-600 hover:prose-a:text-kelly-700">
            <p>
              A-Z Landscapes ("us", "we", or "our") operates the https://azlandscaping.com website (the "Service"). This
              page informs you of our policies regarding the collection, use, and disclosure of personal data when you
              use our Service and the choices you have associated with that data. We use your data to provide and
              improve the Service. By using the Service, you agree to the collection and use of information in
              accordance with this policy.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 rounded-r-lg">
              <p className="!my-0 text-yellow-800">
                <strong>Disclaimer:</strong> This is a sample privacy policy. You should consult with a legal
                professional to ensure it meets all legal requirements for your specific business and jurisdiction.
              </p>
            </div>

            <h2>Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information
              that can be used to contact or identify you ("Personal Data"). Personally identifiable information may
              include, but is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <h4>Usage Data</h4>
            <p>
              We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data
              may include information such as your computer's Internet Protocol address (e.g. IP address), browser type,
              browser version, the pages of our Service that you visit, the time and date of your visit, the time spent
              on those pages, unique device identifiers and other diagnostic data.
            </p>

            <h2>Use of Data</h2>
            <p>A-Z Landscapes uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To process your requests for quotes or job applications</li>
            </ul>

            <h2>Legal Basis for Processing Personal Data Under GDPR</h2>
            <p>
              If you are from the European Economic Area (EEA), A-Z Landscapes' legal basis for collecting and using the
              personal information described in this Privacy Policy depends on the Personal Data we collect and the
              specific context in which we collect it.
            </p>

            <h2>Your Data Protection Rights Under GDPR</h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. A-Z
              Landscapes aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your
              Personal Data.
            </p>
            <ul>
              <li>
                <strong>The right to access, update or delete the information we have on you.</strong>
              </li>
              <li>
                <strong>The right of rectification.</strong>
              </li>
              <li>
                <strong>The right to object.</strong>
              </li>
              <li>
                <strong>The right to restriction.</strong>
              </li>
              <li>
                <strong>The right to data portability.</strong>
              </li>
              <li>
                <strong>The right to withdraw consent.</strong>
              </li>
            </ul>
            <p>Please note that we may ask you to verify your identity before responding to such requests.</p>

            <h2>Cookies Policy</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and we hold certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>

            <h2>Service Providers</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to
              provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how
              our Service is used. For example, we use Vercel Blob for file storage. These third parties have access to
              your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it
              for any other purpose.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service,
              prior to the change becoming effective and update the "last updated" date at the top of this Privacy
              Policy.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>
                By email: <Link href="mailto:Azlandscapesllc@gmail.com">Azlandscapesllc@gmail.com</Link>
              </li>
              <li>
                By visiting this page on our website: <Link href="/contact">https://azlandscaping.com/contact</Link>
              </li>
              <li>By phone number: (704) 989-4839</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  )
}
