import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Shield } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#how-it-works" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "MySLP", href: "#myslp" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About Us", href: "#team" },
    { label: "Team", href: "#team" },
    { label: "Research", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy & Security Policy", href: "/privacy" },
    { label: "HIPAA Compliance", href: "/privacy#section-1" },
    { label: "FERPA Compliance", href: "/privacy#section-3" },
    { label: "NDPA Documentation", href: "/privacy#ndpa" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="bg-white rounded-full p-1 transition-transform duration-300 group-hover:scale-110">
                <Image src="/easi-logo.png" alt="EASI Logo" width={36} height={36} />
              </div>
              <span className="text-xl font-semibold">EASI</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Evaluative Artificial Speech Intelligence. Transforming speech-language assessment through computational
              linguistics that preserves clinical judgment.
            </p>
            <p className="text-sm text-white/60 mb-6">Distributed exclusively through Northern Speech Services</p>

            {/* Contact info - Removed email, kept phone and location, added contact form link */}
            <div className="space-y-2">
              <a
                href="tel:707-651-9915"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                707-651-9915
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm text-[#14B8A6] hover:text-[#14B8A6]/80 transition-colors font-medium"
              >
                Contact Us →
              </Link>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4" />
                Vallejo, CA
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-white/10 gap-4">
          <p className="text-sm text-white/50">© 2025 iTherapy, LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#14B8A6]" />
              NSF Phase II SBIR Award #2133148
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#14B8A6]" />
              HIPAA & FERPA Compliant
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#14B8A6]" />
              NIST CSF Aligned
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
