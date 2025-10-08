import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Download, Trash2, Lock, UserCheck, FileText, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "GDPR Information & Data Rights",
  description:
    "Understand your data protection rights under GDPR. Learn how A-Z Landscapes protects your privacy and how to exercise your rights.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function GDPRPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 mb-4">Your Rights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">GDPR & Data Protection</h1>
            <p className="text-lg text-gray-600">
              Your privacy matters. Learn about your data protection rights and how we safeguard your information.
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-h2:text-navy-800 prose-a:text-kelly-600 hover:prose-a:text-kelly-700 mb-12">
            <p>
              The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives
              individuals control over their personal data. At A-Z Landscapes, we are committed to protecting your
              privacy and ensuring compliance with GDPR and other data protection regulations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Access</CardTitle>
                <CardDescription>View the personal data we hold about you</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  You have the right to request a copy of all personal information we have collected about you. We will
                  provide this information in a clear, structured format within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Rectification</CardTitle>
                <CardDescription>Correct inaccurate or incomplete data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  If any of your personal information is inaccurate or incomplete, you have the right to request that we
                  correct or update it promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trash2 className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Erasure</CardTitle>
                <CardDescription>Request deletion of your personal data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Also known as the "right to be forgotten," you can request that we delete your personal data when it
                  is no longer necessary for the purposes it was collected.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Restrict Processing</CardTitle>
                <CardDescription>Limit how we use your data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  You can request that we limit the processing of your personal data in certain circumstances, such as
                  when you contest the accuracy of the data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Data Portability</CardTitle>
                <CardDescription>Receive your data in a portable format</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  You have the right to receive your personal data in a structured, commonly used, and machine-readable
                  format and transmit it to another controller.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Object</CardTitle>
                <CardDescription>Object to certain data processing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  You can object to the processing of your personal data for direct marketing purposes or when
                  processing is based on legitimate interests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserCheck className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Withdraw Consent</CardTitle>
                <CardDescription>Revoke your consent at any time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Where we process your data based on consent, you have the right to withdraw that consent at any time
                  without affecting the lawfulness of processing before withdrawal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-kelly-600 mb-2" />
                <CardTitle>Right to Lodge a Complaint</CardTitle>
                <CardDescription>File a complaint with authorities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  You have the right to lodge a complaint with a supervisory authority if you believe your data
                  protection rights have been violated.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-navy-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Protect Your Data</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kelly-600 flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Encryption</h3>
                  <p className="text-sm">
                    All data transmitted to and from our website is encrypted using industry-standard SSL/TLS protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kelly-600 flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Access Controls</h3>
                  <p className="text-sm">
                    We implement strict access controls to ensure only authorized personnel can access personal data.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kelly-600 flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Regular Audits</h3>
                  <p className="text-sm">
                    We conduct regular security audits and assessments to identify and address potential
                    vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kelly-600 flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Data Minimization</h3>
                  <p className="text-sm">
                    We only collect and retain the minimum amount of personal data necessary for our services.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kelly-600 flex items-center justify-center text-white text-sm font-bold mt-0.5">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Staff Training</h3>
                  <p className="text-sm">
                    Our team receives regular training on data protection best practices and GDPR compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-kelly-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-700 mb-6">
              To exercise any of your data protection rights, please contact us using one of the methods below. We will
              respond to your request within 30 days and may need to verify your identity before processing your
              request.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-kelly-600" />
                <span className="text-gray-700">
                  Email:{" "}
                  <Link
                    href="mailto:Azlandscapesllc@gmail.com"
                    className="text-kelly-600 hover:text-kelly-700 font-medium"
                  >
                    Azlandscapesllc@gmail.com
                  </Link>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-kelly-600" />
                <span className="text-gray-700">
                  Contact Form:{" "}
                  <Link href="/contact" className="text-kelly-600 hover:text-kelly-700 font-medium">
                    Visit our contact page
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Related Information</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cookie-policy">Cookie Policy</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/terms-of-service">Terms of Service</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
