"use client"

import Image from "next/image"
import { Mic, AudioWaveform as Waveform, BarChart3, FileText, Brain, Upload, Shield, MessageSquare } from "lucide-react"
import { AnimatedWrapper } from "./animated-wrapper"
import { AnimatedTitle } from "./animated-title"

const steps = [
  {
    number: "01",
    title: "Record Naturally",
    description:
      "Play-based assessment with infinite, customizable visual prompts. Record during natural play and conversation—no artificial test scenarios.",
    icon: Mic,
    color: "#8B5CF6",
    image: "/easi-recording-interface.png",
    features: ["One-button recording", "Works with any activity", "No distracting note-taking"],
  },
  {
    number: "02",
    title: "Automatic Analysis",
    description:
      "Speech diarization with 98-99% accuracy automatically identifies who's speaking. Full IPA transcription with complete editability.",
    icon: Waveform,
    color: "#14B8A6",
    image: "/easi-transcript-preview.jpg",
    secondaryImage: "/easi-ipa-preview.jpg",
    features: ["Speaker separation", "IPA transcription", "Target vs. actual production"],
  },
  {
    number: "03",
    title: "Comprehensive Results",
    description:
      "Standard scores, percentile rankings, and state eligibility criteria. Key metrics including PCC, MLU, IPSYN, NDW, VOT, and intelligibility scores.",
    icon: BarChart3,
    color: "#3B82F6",
    image: "/easi-eligibility-report.png",
    features: ["Standard scores (Mean=100, SD=15)", "Confidence ratings", "State eligibility built-in"],
  },
  {
    number: "04",
    title: "Professional Reports",
    description:
      "Complete, customizable documentation ready in minutes. Insurance-compliant coding with parent-friendly summaries.",
    icon: FileText,
    color: "#F59E0B",
    image: "/easi-report-introduction.png",
    features: ["Comprehensive evaluation reports", "CPT codes included", "Full clinical control"],
  },
]

const capabilities = [
  {
    icon: Brain,
    title: "Computational Language Analysis",
    description:
      "Generates standard scores and percentile rankings for MLU, IPSYN, vocabulary diversity, and social function analysis.",
    color: "#8B5CF6",
  },
  {
    icon: Waveform,
    title: "Speech Recognition & Diarization",
    description: "Separates and identifies multiple speakers with real-time feedback during assessments.",
    color: "#14B8A6",
  },
  {
    icon: Upload,
    title: "IEP Management",
    description:
      "Upload medical reports, existing IEPs, and developmental histories. EASI extracts relevant data for goal creation.",
    color: "#3B82F6",
  },
  {
    icon: MessageSquare,
    title: "MySLP Second Opinion",
    description:
      "Interactive assistance provides clinicians with real-time guidance and a second look at assessment results.",
    color: "#F59E0B",
  },
  {
    icon: FileText,
    title: "Computer Vision Protocol Analysis",
    description: "Upload images of test protocols for automatic data extraction—no manual entry required.",
    color: "#EC4899",
  },
  {
    icon: Shield,
    title: "HIPAA & FERPA Compliant",
    description: "Enterprise-grade security built from the ground up for healthcare and education settings.",
    color: "#10B981",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedWrapper className="text-center mb-20">
          <AnimatedTitle as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1F2937]">
            Assessment That Works the Way You Work
          </AnimatedTitle>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            From natural recording to professional reports in minutes
          </p>
        </AnimatedWrapper>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <AnimatedWrapper key={step.number} animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}>
              <div
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold opacity-20" style={{ color: step.color }}>
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#E5E7EB] to-transparent" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1F2937]">{step.title}</h3>
                  <p className="text-lg text-[#6B7280] leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-[#6B7280]">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 w-full">
                  {step.number === "02" ? (
                    // Special layout for step 02 showing both transcript and IPA
                    <div className="space-y-4">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-[#E5E7EB] bg-white">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={`${step.title} - Transcript Preview`}
                          width={800}
                          height={600}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        {/* Step number badge */}
                        <div
                          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.number}
                        </div>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl group border border-[#E5E7EB] bg-white">
                        <Image
                          src={(step as any).secondaryImage || "/placeholder.svg"}
                          alt={`${step.title} - IPA Transcription`}
                          width={800}
                          height={600}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        {/* Icon badge */}
                        <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                          <step.icon className="w-6 h-6" style={{ color: step.color }} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-[#E5E7EB] bg-white">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={`${step.title} - ${step.description}`}
                        width={800}
                        height={600}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}10 0%, transparent 50%)`,
                        }}
                      />

                      {/* Step number badge */}
                      <div
                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>

                      {/* Icon badge */}
                      <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                        <step.icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper className="mt-32">
          <div className="text-center mb-16">
            <AnimatedTitle as="h3" className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1F2937]">
              Complete Platform Capabilities
            </AnimatedTitle>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Everything you need for efficient, accurate speech-language assessments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${capability.color}15` }}
                >
                  <capability.icon className="w-7 h-7" style={{ color: capability.color }} />
                </div>
                <h4 className="text-xl font-semibold text-[#1F2937] mb-2 group-hover:text-[#14B8A6] transition-colors">
                  {capability.title}
                </h4>
                <p className="text-[#6B7280] leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}
