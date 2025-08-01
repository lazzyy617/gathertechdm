"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Courses" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-orange-400" />
            <span className="text-xl font-bold gradient-text">GatherTech DM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-orange-400 ${
                  pathname === item.href ? "text-orange-400" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 transition-colors hover:text-orange-400 ${
                  pathname === item.href ? "text-orange-400" : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
