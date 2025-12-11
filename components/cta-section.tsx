"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, MessageCircle } from "lucide-react"
import { AnimatedWrapper } from "./animated-wrapper"

const ctaOptions = [
  {
    title: "Individual SLPs",
    description: "Turn 5-hour evaluations into 15 minutes. Starting at $199/year.",
    icon: Sparkles,
    cta: "Get Started",
    href: "https://www.northernspeech.com/12648/", // Updated NSS link to specific product page
    primary: true,
    action: "link" as const,
  },
  {
    title: "School Districts",
    description: "Volume pricing for your team. See a customized demo.",
    icon: Users,
    cta: "Request Quote",
    href: "/contact?type=district",
    primary: false,
    action: "link" as const,
  },
  {
    title: "Talk to EASI",
    description: "Speak to our EASI agent about all of EASI's features!",
    icon: MessageCircle,
    cta: "Ask EASI",
    primary: false,
    action: "chat" as const,
  },
]

export function CTASection() {
  const openChat = () => {
    window.dispatchEvent(new CustomEvent("openEasiChat"))
  }

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/wide-shot-professional-woman-walking-away-from-mod.jpg"
                alt="SLP walking home at reasonable hour during golden sunset"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3F4B5B]/95 via-[#3F4B5B]/85 to-[#3F4B5B]/70" />
            </div>

            <div className="relative p-12 lg:p-20">
              {/* Animated gradient accents */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#14B8A6]/20 to-transparent rounded-full blur-3xl animate-float" />
                <div
                  className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#14B8A6]/20 to-transparent rounded-full blur-3xl animate-float"
                  style={{ animationDelay: "3s" }}
                />
              </div>

              <div className="relative text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white text-balance">
                  Ready to Leave Work on Time?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Join hundreds of SLPs who are reclaiming their evenings, their weekends, and their passion for the
                  work that matters.
                </p>
              </div>

              {/* CTA Cards */}
              <div className="relative grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {ctaOptions.map((option, index) => (
                  <AnimatedWrapper key={index} delay={index * 100} animation="reveal-scale">
                    <div className="bg-white rounded-xl p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-4">
                        <option.icon className="w-5 h-5 text-[#14B8A6]" />
                      </div>
                      <h3 className="font-bold text-[#1F2937] mb-2">{option.title}</h3>
                      <p className="text-[#6B7280] text-sm mb-4 flex-grow">{option.description}</p>

                      {option.action === "link" ? (
                        <Button
                          asChild
                          className={`w-full justify-center ${
                            option.primary
                              ? "bg-[#3B82F6] hover:bg-[#2563EB] text-white"
                              : "bg-white border border-[#E5E7EB] text-[#1F2937] hover:bg-[#F5F5F5]"
                          }`}
                        >
                          <Link href={option.href || "#"}>
                            {option.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          onClick={openChat}
                          className="w-full justify-center bg-gradient-to-r from-[#14B8A6] to-[#3B82F6] hover:from-[#0D9488] hover:to-[#2563EB] text-white"
                        >
                          {option.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>

              <div className="relative text-center mt-10">
                <p className="text-sm text-white/60">
                  Questions?{" "}
                  <Link href="/contact" className="text-white/80 hover:text-white underline transition-colors">
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={200} className="mt-16">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/speech-language-pathologist-standing-in-doorway-of.jpg"
                alt="SLP ready to leave organized therapy room with satisfaction"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1F2937]">Ready for Tomorrow</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Imagine ending each day with your space organized, your reports complete, and your mind at ease. EASI
                makes this your new normal—not the exception.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                No more Sunday nights spent catching up. No more staying late while your family waits. Just sustainable,
                fulfilling work that leaves room for the rest of your life.
              </p>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}
