import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how A-Z Landscapes uses cookies and similar technologies on our website. Understand your choices and how to manage cookie preferences.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Transparency</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <article className="prose prose-lg max-w-none prose-h2:text-navy-800 prose-a:text-kelly-600 hover:prose-a:text-kelly-700">
            <p>
              This Cookie Policy explains how A-Z Landscapes ("we", "us", or "our") uses cookies and similar
              technologies on our website. By using our website, you consent to the use of cookies in accordance with
              this policy.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you
              visit a website. They are widely used to make websites work more efficiently and provide information to
              website owners. Cookies help us understand how you use our site and improve your experience.
            </p>

            <h2>Types of Cookies We Use</h2>

            <h3>1. Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page
              navigation, access to secure areas, and form submissions. The website cannot function properly without
              these cookies.
            </p>
            <ul>
              <li>Session management</li>
              <li>Security features</li>
              <li>Load balancing</li>
            </ul>

            <h3>2. Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which pages are visited most
              often and if users receive error messages. This helps us improve how our website works.
            </p>
            <ul>
              <li>Page load times</li>
              <li>Error tracking</li>
              <li>User navigation patterns</li>
            </ul>

            <h3>3. Functionality Cookies</h3>
            <p>
              These cookies allow our website to remember choices you make (such as your preferred language or region)
              and provide enhanced, personalized features.
            </p>
            <ul>
              <li>Language preferences</li>
              <li>User interface preferences</li>
              <li>Previously submitted form data</li>
            </ul>

            <h3>4. Analytics Cookies</h3>
            <p>
              We use analytics cookies to understand how visitors interact with our website. This information helps us
              improve our content and user experience. These cookies collect information anonymously.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may use third-party cookies from trusted partners to help us analyze
              website usage and improve our services:
            </p>
            <ul>
              <li>
                <strong>Vercel Analytics:</strong> For website performance monitoring and analytics
              </li>
              <li>
                <strong>Google Fonts:</strong> For displaying custom fonts on our website
              </li>
            </ul>
            <p>
              These third parties have their own privacy policies, and we have no control over their cookies. We
              recommend reviewing their policies for more information.
            </p>

            <h2>How Long Do Cookies Last?</h2>
            <p>Cookies can be either session cookies or persistent cookies:</p>
            <ul>
              <li>
                <strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser
              </li>
              <li>
                <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete
                them. We use persistent cookies for up to 12 months to remember your preferences
              </li>
            </ul>

            <h2>Managing Your Cookie Preferences</h2>
            <p>You have several options for managing cookies:</p>

            <h3>Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse
              cookies or delete certain cookies. However, please note that if you disable cookies, some features of our
              website may not function properly.
            </p>
            <p>Here's how to manage cookies in popular browsers:</p>
            <ul>
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
              </li>
            </ul>

            <h3>Cookie Consent Banner</h3>
            <p>
              When you first visit our website, you'll see a cookie consent banner. You can choose to accept or decline
              non-essential cookies. Your preferences will be saved for future visits.
            </p>

            <h2>Do Not Track Signals</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be
              tracked. We respect DNT signals and will not track users who have DNT enabled in their browser.
            </p>

            <h2>Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our
              business practices. We will notify you of any significant changes by posting the updated policy on this
              page with a new "Last updated" date.
            </p>

            <h2>Your Rights Under GDPR</h2>
            <p>
              If you are located in the European Economic Area (EEA), you have certain rights regarding cookies and
              personal data:
            </p>
            <ul>
              <li>The right to access your data</li>
              <li>The right to rectification</li>
              <li>The right to erasure</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              For more information about your data protection rights, please see our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/gdpr">GDPR Information</Link> pages.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us:</p>
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
