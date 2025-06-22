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
import OptimizedImage from "@/components/optimized-image"

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  // Consistent text color for nav items on navy background
  const navLinkBaseClasses = "transition-colors text-primary-foreground/80 hover:text-primary-foreground"
  const navLinkActiveClasses = "text-primary-foreground font-semibold"

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <Link href="/" className="flex items-center">
          <OptimizedImage
            src="/logo.png"
            alt="A-Z Landscapes Logo"
            width={180} // Adjust width as needed for desktop
            height={50} // Adjust height based on aspect ratio and desired size
            className="object-contain" // Ensures logo scales nicely
          />
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className={`${navLinkBaseClasses} ${isActive("/") && pathname === "/" ? navLinkActiveClasses : ""}`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 ${navLinkBaseClasses} ${isActive("/services") ? navLinkActiveClasses : ""}`}
              >
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 border-border bg-card text-card-foreground">
              {" "}
              {/* Dropdown on light bg */}
              <DropdownMenuLabel className="flex items-center gap-2 text-primary">
                {" "}
                {/* Navy text */}
                <Hammer className="h-4 w-4 text-primary/80" /> Hardscape Services
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* Example Item: Patios & Walkways */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/patios-walkways"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Footprints className="h-4 w-4 text-primary/70" /> Patios & Walkways {/* Navy icon/text */}
                  </Link>
                </DropdownMenuItem>
                {/* ... other hardscape services, styled similarly ... */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/retaining-walls"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Building className="h-4 w-4 text-primary/70" /> Retaining Walls
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/driveways" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <Car className="h-4 w-4 text-primary/70" /> Driveways
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/outdoor-kitchens-fire-features"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Flame className="h-4 w-4 text-primary/70" /> Outdoor Kitchens & Fire Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/water-features"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Droplet className="h-4 w-4 text-primary/70" /> Water Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/pergolas-gazebos"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Tent className="h-4 w-4 text-primary/70" /> Pergolas & Gazebos
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="flex items-center gap-2 text-primary">
                <Leaf className="h-4 w-4 text-primary/80" /> Landscaping Services
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* Example Item: Lawn Care */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/lawn-care-maintenance"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Scissors className="h-4 w-4 text-primary/70" /> Lawn Care & Maintenance
                  </Link>
                </DropdownMenuItem>
                {/* ... other landscaping services, styled similarly ... */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/garden-design-planting"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Sprout className="h-4 w-4 text-primary/70" /> Garden Design & Planting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/tree-services"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <TreePine className="h-4 w-4 text-primary/70" /> Tree Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/turf-installation"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Sprout className="h-4 w-4 text-primary/70" /> Turf Installation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/irrigation-systems"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Droplet className="h-4 w-4 text-primary/70" /> Irrigation Systems
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/landscape-lighting"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <Lightbulb className="h-4 w-4 text-primary/70" /> Landscape Lighting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/seasonal-services"
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted"
                  >
                    <SunSnow className="h-4 w-4 text-primary/70" /> Seasonal Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/services"
                  className="flex items-center gap-2 cursor-pointer font-medium text-accent hover:bg-muted" // Accent for "View All"
                >
                  View All Services
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className={`${navLinkBaseClasses} ${isActive("/about") ? navLinkActiveClasses : ""}`}>
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 ${navLinkBaseClasses} ${isActive("/portfolio") || isActive("/transformations") || isActive("/gallery") ? navLinkActiveClasses : ""}`}
              >
                Portfolio <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-border bg-card text-card-foreground">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/portfolio" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <Grid className="h-4 w-4 text-primary/70" /> All Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/transformations" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <ArrowRightLeft className="h-4 w-4 text-primary/70" /> Before & After
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/gallery" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <ImageIcon className="h-4 w-4 text-primary/70" /> Photo Gallery
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 ${navLinkBaseClasses} ${isActive("/contact") || isActive("/faq") || isActive("/careers") ? navLinkActiveClasses : ""}`}
              >
                Contact <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-border bg-card text-card-foreground">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <Mail className="h-4 w-4 text-primary/70" /> Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faq" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <HelpCircle className="h-4 w-4 text-primary/70" /> FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/careers" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <Briefcase className="h-4 w-4 text-primary/70" /> Careers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-2 text-primary-foreground/80">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">(555) 123-4567</span>
          </div>
          <Link href="/contact">
            <Button variant="default">Get Quote</Button> {/* Default is Kelly Green */}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between w-full">
        <Link href="/" className="flex items-center">
          <OptimizedImage
            src="/logo.png"
            alt="A-Z Landscapes Logo"
            width={150} // Adjust width as needed for mobile
            height={42} // Adjust height based on aspect ratio and desired size
            className="object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="tel:5551234567" className="text-primary-foreground/80">
            <Phone className="h-5 w-5" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-card text-card-foreground pt-20 px-4 overflow-auto top-[68px]">
          {" "}
          {/* Adjust top if header height changes */}
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              className="text-lg py-3 border-b border-border text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="py-2 border-b border-border">
              <span className="text-lg font-medium text-primary">Services</span>
              <div className="ml-4 mt-2 space-y-1">
                <h3 className="text-sm font-semibold text-primary/80 flex items-center gap-1 pt-2">
                  <Hammer className="h-3 w-3" /> HARDSCAPE SERVICES
                </h3>
                {/* Example mobile menu item */}
                <Link
                  href="/services/patios-walkways"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Patios & Walkways
                </Link>
                {/* ... other mobile menu items ... */}
                <Link
                  href="/services/retaining-walls"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Retaining Walls
                </Link>
                <Link
                  href="/services/driveways"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Driveways
                </Link>
                <Link
                  href="/services/outdoor-kitchens-fire-features"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Outdoor Kitchens & Fire Features
                </Link>
                <Link
                  href="/services/water-features"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Water Features
                </Link>
                <Link
                  href="/services/pergolas-gazebos"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pergolas & Gazebos
                </Link>

                <h3 className="text-sm font-semibold text-primary/80 flex items-center gap-1 pt-3">
                  <Leaf className="h-3 w-3" /> LANDSCAPING SERVICES
                </h3>
                <Link
                  href="/services/lawn-care-maintenance"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lawn Care & Maintenance
                </Link>
                <Link
                  href="/services/garden-design-planting"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Garden Design & Planting
                </Link>
                <Link
                  href="/services/tree-services"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tree Services
                </Link>
                <Link
                  href="/services/turf-installation"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Turf Installation
                </Link>
                <Link
                  href="/services/irrigation-systems"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Irrigation Systems
                </Link>
                <Link
                  href="/services/landscape-lighting"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Landscape Lighting
                </Link>
                <Link
                  href="/services/seasonal-services"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Seasonal Services
                </Link>

                <Link
                  href="/services"
                  className="block text-accent font-medium py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="text-lg py-3 border-b border-border text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <div className="py-2 border-b border-border">
              <span className="text-lg font-medium text-primary">Portfolio</span>
              <div className="ml-4 mt-2 space-y-1">
                <Link
                  href="/portfolio"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Projects
                </Link>
                <Link
                  href="/transformations"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Before & After
                </Link>
                <Link
                  href="/gallery"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Photo Gallery
                </Link>
              </div>
            </div>

            <div className="py-2 border-b border-border">
              <span className="text-lg font-medium text-primary">Contact</span>
              <div className="ml-4 mt-2 space-y-1">
                <Link
                  href="/contact"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/careers"
                  className="block text-foreground py-2 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Get a Free Quote</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
