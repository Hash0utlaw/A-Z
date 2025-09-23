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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Leaf, Hammer, Menu, X, Grid } from "lucide-react"
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
            src="/logo-white.png"
            alt="A-Z Landscapes Logo"
            width={180}
            height={50}
            className="object-contain"
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
            <DropdownMenuContent className="w-64 border-border bg-card text-card-foreground">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/services" className="flex items-center gap-2 cursor-pointer hover:bg-muted py-3">
                    <Hammer className="h-5 w-5 text-primary/70" />
                    <span className="font-medium">Hardscape Services</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services" className="flex items-center gap-2 cursor-pointer hover:bg-muted py-3">
                    <Leaf className="h-5 w-5 text-primary/70" />
                    <span className="font-medium">Landscaping Services</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className={`${navLinkBaseClasses} ${isActive("/about") ? navLinkActiveClasses : ""}`}>
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 ${navLinkBaseClasses} ${isActive("/portfolio") ? navLinkActiveClasses : ""}`}
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
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0"
            >
              Get Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between w-full">
        <Link href="/" className="flex items-center">
          <OptimizedImage
            src="/logo-white.png"
            alt="A-Z Landscapes Logo"
            width={150}
            height={42}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
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
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-foreground py-3 hover:bg-muted font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Hammer className="h-4 w-4 text-primary/70" /> Hardscape Services
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-foreground py-3 hover:bg-muted font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Leaf className="h-4 w-4 text-primary/70" /> Landscaping Services
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
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 text-lg shadow-lg"
                  size="lg"
                >
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
