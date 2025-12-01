"use client"

import { CheckCircle2, XCircle, Lock } from "lucide-react"
import { AnimatedWrapper } from "./animated-wrapper"
import Image from "next/image"

const capabilities = [
  "Cross-checks EASI results, flagging areas for human review",
  "Synthesizes historical records into coherent record reviews",
  "Drafts diagnostic reports and IEP content from assessment data",
  "Suggests evidence-based intervention strategies",
  "Verifies compliance with state eligibility and IDEA requirements",
]

const limitations = ["Make final clinical decisions", "Operate without your approval", "Replace human judgment"]

export function ChatSLP() {
  return (
    <section id="chatslp" className="py-24 lg:py-32 bg-[#3F4B5B] text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - ChatSLP Modal Preview */}
          <AnimatedWrapper animation="reveal-left">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#8B5CF6]/20 rounded-3xl blur-2xl" />

              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                {/* Modal Header */}
                <div className="bg-[#3F4B5B] text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                      <Image src="/easi-logo.png" alt="EASI Logo" width={32} height={32} className="object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold">ChatSLP</div>
                      <div className="text-sm text-white/70">Clinical Colleague</div>
                    </div>
                  </div>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Secure
                  </span>
                </div>

                {/* Modal Content */}
                <div className="p-6 bg-white">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-[#1F2937]">What can I help you with today?</h3>
                    <p className="text-sm text-[#6B7280] mt-1">
                      Choose a quick action or describe what you're working on
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-[#3B82F6] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#2563EB] transition-colors">
                      <CheckCircle2 className="w-5 h-5" />
                      Review My EASI Report
                    </button>
                    <button className="w-full bg-white border border-[#E5E7EB] text-[#1F2937] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#F5F5F5] transition-colors">
                      Plan a Therapy Session
                    </button>
                    <button className="w-full bg-white border border-[#E5E7EB] text-[#1F2937] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#F5F5F5] transition-colors">
                      Write IEP Goals
                    </button>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Describe what you're working on..."
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-sm border border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none text-[#1F2937]"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Right side - Description */}
          <AnimatedWrapper animation="reveal-right">
            <div>
              <span className="text-sm uppercase tracking-widest text-white/60 mb-4 block">Powered by AI</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Your Clinical Reasoning Partner</h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                ChatSLP isn't generic AI—it's purpose-built for speech-language pathologists, trained over 18 months
                with practicing clinicians.
              </p>

              {/* What it does */}
              <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                  What ChatSLP Does
                </h3>
                <ul className="space-y-3">
                  {capabilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8A6] flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it doesn't do */}
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-white/40" />
                  What ChatSLP Doesn't Do
                </h3>
                <ul className="space-y-3">
                  {limitations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/60">
                      <XCircle className="w-4 h-4 text-white/30 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  )
}
