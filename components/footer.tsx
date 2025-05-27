import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-kelly-500" />
              <span className="text-xl font-bold text-white">A-Z Landscaping</span>
            </div>
            <p className="mb-4">
              Transforming outdoor spaces with professional landscaping and hardscaping services since 2008.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/patios-walkways" className="hover:text-white transition-colors">
                  Patios & Walkways
                </Link>
              </li>
              <li>
                <Link href="/services/retaining-walls" className="hover:text-white transition-colors">
                  Retaining Walls
                </Link>
              </li>
              <li>
                <Link href="/services/water-features" className="hover:text-white transition-colors">
                  Water Features
                </Link>
              </li>
              <li>
                <Link href="/services/lawn-care-maintenance" className="hover:text-white transition-colors">
                  Lawn Care & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/garden-design-planting" className="hover:text-white transition-colors">
                  Garden Design & Planting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-kelly-400 font-medium hover:text-kelly-300">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/transformations" className="hover:text-white transition-colors">
                  Transformations
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-kelly-400 mt-0.5" />
                <span>
                  123 Landscape Lane
                  <br />
                  Greenville, GA 30222
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-kelly-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-kelly-400" />
                <a href="mailto:info@azlandscaping.com" className="hover:text-white transition-colors">
                  info@azlandscaping.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} A-Z Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
