import type React from "react"
import { Leaf } from "lucide-react"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-kelly-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <MainNavigation />
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-kelly-400" />
                <span className="text-2xl font-bold">A-Z Landscaping</span>
              </div>
              <p className="text-gray-400">
                Transforming outdoor spaces with professional landscaping services since 2008. Your trusted partner for
                all landscaping needs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hardscape Services</h4>
              <ul className="space-y-2 text-gray-400">
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
                  <Link href="/services/driveways" className="hover:text-white transition-colors">
                    Driveways
                  </Link>
                </li>
                <li>
                  <Link href="/services/outdoor-kitchens-fire-features" className="hover:text-white transition-colors">
                    Outdoor Kitchens & Fire Features
                  </Link>
                </li>
                <li>
                  <Link href="/services/water-features" className="hover:text-white transition-colors">
                    Water Features
                  </Link>
                </li>
                <li>
                  <Link href="/services/pergolas-gazebos" className="hover:text-white transition-colors">
                    Pergolas & Gazebos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Landscaping Services</h4>
              <ul className="space-y-2 text-gray-400">
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
                  <Link href="/services/tree-services" className="hover:text-white transition-colors">
                    Tree Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/irrigation-systems" className="hover:text-white transition-colors">
                    Irrigation Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services/landscape-lighting" className="hover:text-white transition-colors">
                    Landscape Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/services/seasonal-services" className="hover:text-white transition-colors">
                    Seasonal Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <div className="font-semibold text-gray-300">Phone</div>
                  <div>(555) 123-4567</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-300">Email</div>
                  <div>info@azlandscaping.com</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-300">Address</div>
                  <div>123 Landscape Lane</div>
                  <div>Anytown, USA 12345</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} A-Z Landscaping. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
