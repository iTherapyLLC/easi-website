"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Features", href: "#how-it-works" },
  { label: "ChatSLP", href: "#chatslp" },
  { label: "Why EASI", href: "#comparison" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#3F4B5B] shadow-lg" : "bg-[#3F4B5B]/95 backdrop-blur-md",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-full p-1 transition-transform duration-300 group-hover:scale-110">
              <Image src="/easi-logo.png" alt="EASI Logo" width={40} height={40} />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">EASI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors duration-300 relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-sm text-white/80 hover:text-white hover:bg-white/10" asChild>
              <a href="https://easievaluation.com/login" target="_blank" rel="noopener noreferrer">
                Log In
              </a>
            </Button>
            <Button
              className="text-sm bg-white text-[#3F4B5B] hover:bg-white/90 rounded-lg px-6 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              asChild
            >
              <a href="https://www.northernspeech.com/" target="_blank" rel="noopener noreferrer">
                Get EASI at Northern Speech
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                )}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block text-lg text-white/80 hover:text-white transition-all duration-300",
                  isMobileMenuOpen && "animate-slide-up",
                )}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
              <Button
                variant="ghost"
                className="justify-start text-white/80 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="https://easievaluation.com/login" target="_blank" rel="noopener noreferrer">
                  Log In
                </a>
              </Button>
              <Button className="bg-white text-[#3F4B5B] hover:bg-white/90 rounded-lg" asChild>
                <a href="https://www.northernspeech.com/" target="_blank" rel="noopener noreferrer">
                  Get EASI at Northern Speech
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
