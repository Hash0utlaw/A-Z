"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  Leaf,
  Hammer,
  Menu,
  X,
  Footprints,
  Building,
  Car,
  Flame,
  Droplet,
  Tent,
  Scissors,
  Sprout,
  TreePine,
  Lightbulb,
  SunSnow,
  Phone,
  ImageIcon,
  ArrowRightLeft,
  Grid,
  HelpCircle,
  Briefcase,
  Mail,
} from "lucide-react"

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-kelly-500" />
          <span className="text-2xl font-bold text-navy-900">A-Z Landscapes</span>
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            href="/"
            className={`text-gray-700 hover:text-navy-700 transition-colors ${isActive("/") && pathname === "/" && "text-navy-900 font-medium"}`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 text-gray-700 hover:text-navy-700 transition-colors ${isActive("/services") && "text-navy-900 font-medium"}`}
              >
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 border-navy-100">
              <DropdownMenuLabel className="flex items-center gap-2 text-navy-900">
                <Hammer className="h-4 w-4 text-navy-700" /> Hardscape Services
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-navy-100" />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/patios-walkways"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Footprints className="h-4 w-4 text-navy-600" /> Patios & Walkways
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/retaining-walls"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Building className="h-4 w-4 text-navy-600" /> Retaining Walls
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/driveways" className="flex items-center gap-2 cursor-pointer hover:bg-navy-50">
                    <Car className="h-4 w-4 text-navy-600" /> Driveways
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/outdoor-kitchens-fire-features"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Flame className="h-4 w-4 text-navy-600" /> Outdoor Kitchens & Fire Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/water-features"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Droplet className="h-4 w-4 text-navy-600" /> Water Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/pergolas-gazebos"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Tent className="h-4 w-4 text-navy-600" /> Pergolas & Gazebos
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className="bg-navy-100" />
              <DropdownMenuLabel className="flex items-center gap-2 text-navy-900">
                <Leaf className="h-4 w-4 text-navy-700" /> Landscaping Services
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-navy-100" />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/lawn-care-maintenance"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Scissors className="h-4 w-4 text-navy-600" /> Lawn Care & Maintenance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/garden-design-planting"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Sprout className="h-4 w-4 text-navy-600" /> Garden Design & Planting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/tree-services"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <TreePine className="h-4 w-4 text-navy-600" /> Tree Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/turf-installation"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Sprout className="h-4 w-4 text-navy-600" /> Turf Installation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/irrigation-systems"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Droplet className="h-4 w-4 text-navy-600" /> Irrigation Systems
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/landscape-lighting"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <Lightbulb className="h-4 w-4 text-navy-600" /> Landscape Lighting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/seasonal-services"
                    className="flex items-center gap-2 cursor-pointer hover:bg-navy-50"
                  >
                    <SunSnow className="h-4 w-4 text-navy-600" /> Seasonal Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className="bg-navy-100" />
              <DropdownMenuItem asChild>
                <Link
                  href="/services"
                  className="flex items-center gap-2 cursor-pointer font-medium text-navy-700 hover:bg-navy-50"
                >
                  View All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className={`text-gray-700 hover:text-navy-700 transition-colors ${isActive("/about") && "text-navy-900 font-medium"}`}
          >
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 text-gray-700 hover:text-navy-700 transition-colors ${(isActive("/portfolio") || isActive("/transformations") || isActive("/gallery")) && "text-navy-900 font-medium"}`}
              >
                Portfolio <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-navy-100">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio" className="flex items-center gap-2 cursor-pointer hover:bg-navy-50">
                    <Grid className="h-4 w-4 text-navy-600" /> All Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/transformations" className="flex items-center gap-2 cursor-pointer hover:bg-navy-50">
                    <ArrowRightLeft className="h-4 w-4 text-navy-600" /> Before & After
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/gallery" className="flex items-center gap-2 cursor-pointer hover:bg-navy-50">
                    <ImageIcon className="h-4 w-4 text-navy-600" /> Photo Gallery
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 text-gray-700 hover:text-navy-700 transition-colors ${(isActive("/contact") || isActive("/faq") || isActive("/careers")) && "text-navy-900 font-medium"}`}
              >
                Contact <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-navy-100">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="flex items-center gap-2 cursor-pointer hover:bg-navy-50">
                    <Mail className="h-4 w-4 text-navy-600" /> Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faq" className="flex items-center gap-2 cursor-pointer hover:bg-navy-50">
                    <HelpCircle className="h-4 w-4 text-navy-600" /> FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/careers" className="flex items-center gap-2 cursor-pointer hover:bg-navy-50">
                    <Briefcase className="h-4 w-4 text-navy-600" /> Careers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-navy-700">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">(555) 123-4567</span>
          </div>
          <Link href="/contact">
            <Button className="bg-kelly-500 hover:bg-kelly-600">Get Quote</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-7 w-7 text-kelly-500" />
          <span className="text-xl font-bold text-navy-900">A-Z Landscapes</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="tel:5551234567" className="text-navy-700">
            <Phone className="h-5 w-5" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-4 overflow-auto">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-lg py-2 border-b border-navy-100" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <div className="py-2 border-b border-navy-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium">Services</span>
              </div>

              <div className="ml-4 mt-2 space-y-2">
                <h3 className="text-sm font-semibold text-navy-700 flex items-center gap-1">
                  <Hammer className="h-3 w-3" /> HARDSCAPE SERVICES
                </h3>
                <Link
                  href="/services/patios-walkways"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patios & Walkways
                </Link>
                <Link
                  href="/services/retaining-walls"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Retaining Walls
                </Link>
                <Link
                  href="/services/driveways"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Driveways
                </Link>
                <Link
                  href="/services/outdoor-kitchens-fire-features"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Outdoor Kitchens & Fire Features
                </Link>
                <Link
                  href="/services/water-features"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Water Features
                </Link>
                <Link
                  href="/services/pergolas-gazebos"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pergolas & Gazebos
                </Link>

                <h3 className="text-sm font-semibold text-navy-700 mt-4 flex items-center gap-1">
                  <Leaf className="h-3 w-3" /> LANDSCAPING SERVICES
                </h3>
                <Link
                  href="/services/lawn-care-maintenance"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lawn Care & Maintenance
                </Link>
                <Link
                  href="/services/garden-design-planting"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Garden Design & Planting
                </Link>
                <Link
                  href="/services/tree-services"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tree Services
                </Link>
                <Link
                  href="/services/turf-installation"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Turf Installation
                </Link>
                <Link
                  href="/services/irrigation-systems"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Irrigation Systems
                </Link>
                <Link
                  href="/services/landscape-lighting"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Landscape Lighting
                </Link>
                <Link
                  href="/services/seasonal-services"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Seasonal Services
                </Link>

                <Link
                  href="/services"
                  className="block text-navy-700 font-medium py-1 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="text-lg py-2 border-b border-navy-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <div className="py-2 border-b border-navy-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium">Portfolio</span>
              </div>

              <div className="ml-4 mt-2 space-y-2">
                <Link href="/portfolio" className="block text-gray-700 py-1" onClick={() => setMobileMenuOpen(false)}>
                  All Projects
                </Link>
                <Link
                  href="/transformations"
                  className="block text-gray-700 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Before & After
                </Link>
                <Link href="/gallery" className="block text-gray-700 py-1" onClick={() => setMobileMenuOpen(false)}>
                  Photo Gallery
                </Link>
              </div>
            </div>

            <div className="py-2 border-b border-navy-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium">Contact</span>
              </div>

              <div className="ml-4 mt-2 space-y-2">
                <Link href="/contact" className="block text-gray-700 py-1" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
                <Link href="/faq" className="block text-gray-700 py-1" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </Link>
                <Link href="/careers" className="block text-gray-700 py-1" onClick={() => setMobileMenuOpen(false)}>
                  Careers
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-kelly-500 hover:bg-kelly-600">Get a Free Quote</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
