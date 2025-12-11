import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Clock, MapPin, Shield, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | EASI - Speech-Language Assessment Platform",
  description:
    "Get in touch with the EASI team. Questions about our speech-language assessment platform? Request a demo, get technical support, or explore partnership opportunities.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#3F4B5B] via-[#4a5568] to-[#3F4B5B] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14B8A6]/20 text-[#14B8A6] text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              We're here to help
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let's Start a Conversation</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Have questions about EASI? Want to see a demo? Our team of SLPs and clinical specialists is ready to help
              you transform your assessment workflow.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#3F4B5B] mb-6">Other Ways to Reach Us</h2>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#14B8A6]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#3F4B5B]">Phone</h3>
                        <a href="tel:707-651-9915" className="text-[#14B8A6] hover:underline">
                          707-651-9915
                        </a>
                        <p className="text-sm text-[#3F4B5B]/60 mt-1">For urgent technical support</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#14B8A6]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#3F4B5B]">Response Time</h3>
                        <p className="text-[#3F4B5B]/80">1-2 business days</p>
                        <p className="text-sm text-[#3F4B5B]/60 mt-1">Mon-Fri, 9am-5pm PT</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#14B8A6]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#3F4B5B]">Headquarters</h3>
                        <p className="text-[#3F4B5B]/80">Vallejo, California</p>
                        <p className="text-sm text-[#3F4B5B]/60 mt-1">iTherapy, LLC</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#3F4B5B]/10">
                  <h3 className="font-semibold text-[#3F4B5B] mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#14B8A6]" />
                    Your Privacy Matters
                  </h3>
                  <p className="text-sm text-[#3F4B5B]/70 mb-4">
                    We take your privacy seriously. Your contact information is never shared with third parties or used
                    for unsolicited marketing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-medium rounded-full">
                      HIPAA Compliant
                    </span>
                    <span className="px-3 py-1 bg-[#14B8A6]/10 text-[#14B8A6] text-xs font-medium rounded-full">
                      FERPA Compliant
                    </span>
                    <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium rounded-full">
                      Secure Form
                    </span>
                  </div>
                </div>

                {/* For Districts */}
                <div className="bg-gradient-to-br from-[#3F4B5B] to-[#2d3748] rounded-2xl p-6 text-white">
                  <h3 className="font-semibold mb-2">School Districts</h3>
                  <p className="text-sm text-white/70 mb-4">
                    Looking for district-wide licensing? EASI is distributed exclusively through Northern Speech
                    Services for educational institutions.
                  </p>
                  <a
                    href="https://www.northernspeech.com/12648/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#14B8A6] text-sm font-medium hover:underline"
                  >
                    Visit Northern Speech Services
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-[#3F4B5B]/10">
                  <h2 className="text-2xl font-bold text-[#3F4B5B] mb-2">Send Us a Message</h2>
                  <p className="text-[#3F4B5B]/70 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
