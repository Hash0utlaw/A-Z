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
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ChevronDown, Leaf, Hammer, Menu, Grid, Home, User, Briefcase, Phone } from "lucide-react"
import OptimizedImage from "@/components/optimized-image"

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const navLinkBaseClasses = "transition-colors text-primary-foreground/80 hover:text-primary-foreground"
  const navLinkActiveClasses = "text-primary-foreground font-semibold"

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <Link href="/" className="flex items-center" aria-label="A-Z Landscapes Home">
          <OptimizedImage
            src="/logo-white.png"
            alt="A-Z Landscapes Logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center space-x-6">
          <Link
            href="/"
            className={`${navLinkBaseClasses} ${isActive("/") && pathname === "/" ? navLinkActiveClasses : ""}`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 ${navLinkBaseClasses} ${isActive("/services") ? navLinkActiveClasses : ""}`}
                aria-haspopup="true"
                aria-label="Services menu"
              >
                Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 border-border bg-card text-card-foreground" role="menu">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild role="menuitem">
                  <Link href="/services" className="flex items-center gap-2 cursor-pointer hover:bg-muted py-3">
                    <Hammer className="h-5 w-5 text-primary/70" aria-hidden="true" />
                    <span className="font-medium">Hardscape Services</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild role="menuitem">
                  <Link href="/services" className="flex items-center gap-2 cursor-pointer hover:bg-muted py-3">
                    <Leaf className="h-5 w-5 text-primary/70" aria-hidden="true" />
                    <span className="font-medium">Landscaping Services</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className={`${navLinkBaseClasses} ${isActive("/about") ? navLinkActiveClasses : ""}`}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`flex items-center gap-1 ${navLinkBaseClasses} ${isActive("/portfolio") ? navLinkActiveClasses : ""}`}
                aria-haspopup="true"
                aria-label="Portfolio menu"
              >
                Portfolio <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-border bg-card text-card-foreground" role="menu">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild role="menuitem">
                  <Link href="/portfolio" className="flex items-center gap-2 cursor-pointer hover:bg-muted">
                    <Grid className="h-4 w-4 text-primary/70" aria-hidden="true" /> All Projects
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
        <Link href="/" className="flex items-center" aria-label="A-Z Landscapes Home">
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
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 flex flex-col">
          <SheetHeader className="px-6 py-6 border-b bg-gradient-to-br from-primary to-primary/90">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center">
              <OptimizedImage
                src="/logo-white.png"
                alt="A-Z Landscapes Logo"
                width={160}
                height={45}
                className="object-contain"
              />
            </Link>
          </SheetHeader>

          <nav className="flex-1 overflow-y-auto py-6 px-4" aria-label="Mobile navigation">
            <div className="space-y-1">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === "/" ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted"
                }`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                <Home className="h-5 w-5" aria-hidden="true" />
                <span className="text-base">Home</span>
              </Link>

              {/* Services Section */}
              <div className="pt-2">
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Services
                </div>
                <div className="space-y-1">
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive("/services")
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Hammer className="h-5 w-5" aria-hidden="true" />
                    <span className="text-base">Hardscape Design</span>
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive("/services")
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Leaf className="h-5 w-5" aria-hidden="true" />
                    <span className="text-base">Landscape Design</span>
                  </Link>
                </div>
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/about") ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted"
                }`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                <User className="h-5 w-5" aria-hidden="true" />
                <span className="text-base">About</span>
              </Link>

              {/* Portfolio */}
              <Link
                href="/portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/portfolio") ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted"
                }`}
                aria-current={isActive("/portfolio") ? "page" : undefined}
              >
                <Grid className="h-5 w-5" aria-hidden="true" />
                <span className="text-base">Portfolio</span>
              </Link>

              {/* FAQ */}
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive("/faq") ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted"
                }`}
                aria-current={isActive("/faq") ? "page" : undefined}
              >
                <Briefcase className="h-5 w-5" aria-hidden="true" />
                <span className="text-base">FAQ</span>
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t bg-muted/30">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-6 text-base shadow-lg"
                size="lg"
              >
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
