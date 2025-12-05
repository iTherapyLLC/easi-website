"use client"

import type React from "react"
import { useState, useRef } from "react"
import { CheckCircle2, XCircle, Lock, FileText, Brain, Shield, MapPin, Sparkles, ShieldAlert } from "lucide-react"
import { AnimatedWrapper } from "./animated-wrapper"
import Image from "next/image"
import { motion } from "framer-motion"

const capabilities = [
  {
    icon: FileText,
    title: "Clinical Report Review",
    description:
      "Reviews your evaluation reports for clinical accuracy, appropriate diagnostic language, and functional impact documentation",
  },
  {
    icon: MapPin,
    title: "State-Specific IEP Criteria",
    description:
      "Provides state-specific IEP eligibility criteria for all 50 states—not generic guidance, but the actual requirements your district needs",
  },
  {
    icon: Brain,
    title: "SETT Framework Templates",
    description: "Offers SETT framework templates for assistive technology evaluations, complete and copy-paste ready",
  },
  {
    icon: Sparkles,
    title: "Light Speed Literacy Guidance",
    description:
      "Guides literacy intervention using the Light Speed Literacy curriculum, with structured session planning that builds systematically",
  },
  {
    icon: Shield,
    title: "Defensible Documentation",
    description:
      "Helps you phrase findings in defensible, evidence-based language that protects you and serves the child",
  },
]

const limitations = ["Tell you what to diagnose", "Make eligibility determinations", "Replace your clinical judgment"]

const comparisonData = [
  {
    feature: "HIPAA Compliance",
    chatgpt: "Uploading patient data violates federal law",
    myslp: "Full BAA on HIPAA-compliant AWS Bedrock infrastructure",
  },
  {
    feature: "FERPA Compliance",
    chatgpt: "Student records cannot be legally processed",
    myslp: "Encrypted, secure, compliant",
  },
  {
    feature: "Clinical Knowledge",
    chatgpt: "Generic responses requiring verification",
    myslp:
      "Purpose-built knowledge base with state-specific eligibility, clinical frameworks, and evidence-based protocols",
  },
  { feature: "PHI Handling", chatgpt: "Prohibited", myslp: "Designed for it—review real reports with real names" },
  {
    feature: "Your Data",
    chatgpt: "Used for model training",
    myslp: "Never leaves the secure system, never used for training",
  },
]

function MySLP() {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHoveringTherapyCard, setIsHoveringTherapyCard] = useState(false)
  const therapyCardRef = useRef<HTMLDivElement>(null)

  const [logoMousePosition, setLogoMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringLogo, setIsHoveringLogo] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsHoveringCard(true)
  const handleMouseLeave = () => {
    setIsHoveringCard(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const handleLogoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return
    const rect = logoRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setLogoMousePosition({ x, y })
  }

  return (
    <section id="myslp" className="py-24 lg:py-32 bg-[#3F4B5B] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#14B8A6]/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#3B82F6]/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <AnimatedWrapper animation="reveal-up">
          <div className="text-center mb-16">
            <span className="inline-block text-sm uppercase tracking-widest text-[#14B8A6] mb-4 px-4 py-2 bg-[#14B8A6]/10 rounded-full border border-[#14B8A6]/20">
              My Second Look Protocol
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The colleague you wish you had
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              <span className="text-[#14B8A6] font-semibold">mySLP doesn't think for you.</span> It thinks with you.
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper animation="reveal-up">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-lg text-white/70 leading-relaxed">
              When you bring your evaluation data, your therapy plans, your diagnostic questions—mySLP offers what every
              clinician needs but rarely gets:
              <span className="text-white font-medium">
                {" "}
                a thoughtful second look from someone who knows the research, understands the regulations, and respects
                that you're the one who saw the whole child.
              </span>
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left side - MySLP Modal Preview */}
          <AnimatedWrapper animation="reveal-left">
            <div className="relative lg:sticky lg:top-24">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#8B5CF6]/20 rounded-3xl blur-2xl transition-all duration-500 hover:bg-[#8B5CF6]/30" />

              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_-12px_rgba(139,92,246,0.4)]">
                {/* Modal Header */}
                <div className="bg-[#3F4B5B] text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 transition-transform duration-300 hover:rotate-12">
                      <Image src="/easi-logo.png" alt="EASI Logo" width={32} height={32} className="object-contain" />
                    </div>
                    <div>
                      <div className="font-semibold">mySLP</div>
                      <div className="text-sm text-white/70">My Second Look Protocol</div>
                    </div>
                  </div>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full flex items-center gap-1 transition-all duration-300 hover:bg-white/30">
                    <Lock className="w-3 h-3" /> HIPAA Secure
                  </span>
                </div>

                {/* Modal Content */}
                <div className="p-6 bg-white">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-[#1F2937]">What can I help you with today?</h3>
                    <p className="text-sm text-[#6B7280] mt-1">
                      Get a second look at your findings or describe what you're working on
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Review My Evaluation Report",
                      "Check State Eligibility Criteria",
                      "Generate SETT Framework",
                      "Plan Literacy Intervention",
                    ].map((text, i) => (
                      <button
                        key={i}
                        className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                          i === 0
                            ? "bg-[#3B82F6] text-white hover:bg-[#2563EB]"
                            : "bg-white border border-[#E5E7EB] text-[#1F2937] hover:bg-[#F5F5F5] hover:border-[#3B82F6]"
                        }`}
                      >
                        {i === 0 && <CheckCircle2 className="w-5 h-5" />}
                        {text}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Describe what you're working on..."
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-sm border border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] outline-none text-[#1F2937] transition-all duration-300 group-hover:border-[#3B82F6]/50"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#14B8A6]/20 via-[#8B5CF6]/20 to-[#3B82F6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#14B8A6]/20 group-hover:border-[#14B8A6]/30">
                  <Image
                    src="/professional-female-speech-language-pathologist-sm.jpg"
                    alt="Speech-language pathologist happily working on a report"
                    width={480}
                    height={320}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F4B5B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium text-center">
                      "I finally leave work when work is done—not at midnight."
                    </p>
                    <p className="text-white/70 text-xs text-center mt-1">— School-Based SLP</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

          {/* Right side - What a Second Look Means */}
          <AnimatedWrapper animation="reveal-right">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">What a Second Look Means</h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                You've administered the tests. You've observed the child. You've talked with the family. Now you need
                someone to review your reasoning, catch what you might have missed, and help you build a case that holds
                up when administrators push back.
              </p>

              <div className="space-y-4">
                {capabilities.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className={`bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/10 transition-all duration-300 cursor-default ${
                        hoveredCapability === index
                          ? "bg-white/20 border-[#14B8A6]/50 transform translate-x-2 shadow-lg shadow-[#14B8A6]/10"
                          : "hover:bg-white/15"
                      }`}
                      onMouseEnter={() => setHoveredCapability(index)}
                      onMouseLeave={() => setHoveredCapability(null)}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            hoveredCapability === index ? "bg-[#14B8A6] rotate-6 scale-110" : "bg-[#14B8A6]/20"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 transition-colors duration-300 ${
                              hoveredCapability === index ? "text-white" : "text-[#14B8A6]"
                            }`}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-center items-center py-12">
                <motion.div
                  ref={logoRef}
                  className="relative cursor-pointer"
                  onMouseMove={handleLogoMouseMove}
                  onMouseEnter={() => setIsHoveringLogo(true)}
                  onMouseLeave={() => {
                    setIsHoveringLogo(false)
                    setLogoMousePosition({ x: 0, y: 0 })
                  }}
                  animate={{
                    rotateX: isHoveringLogo ? logoMousePosition.y * -20 : 0,
                    rotateY: isHoveringLogo ? logoMousePosition.x * 20 : 0,
                    scale: isHoveringLogo ? 1.15 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ perspective: 1000 }}
                >
                  {/* Shadow */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl"
                    animate={{
                      opacity: isHoveringLogo ? 0.7 : 0.4,
                      scale: isHoveringLogo ? 1.3 : 1.1,
                      x: isHoveringLogo ? logoMousePosition.x * -15 : 0,
                      y: isHoveringLogo ? logoMousePosition.y * -15 + 15 : 15,
                    }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(20,184,166,0.6) 0%, rgba(59,130,246,0.4) 50%, transparent 70%)",
                    }}
                  />

                  {/* Glow ring */}
                  <motion.div
                    className="absolute -inset-8 rounded-full"
                    animate={{
                      opacity: isHoveringLogo ? 1 : 0,
                      scale: isHoveringLogo ? 0.8 : 0.8,
                      rotate: isHoveringLogo ? 360 : 0,
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 },
                    }}
                    style={{
                      background: "conic-gradient(from 0deg, #14B8A6, #3B82F6, #3F4B5B, #14B8A6)",
                      filter: "blur(20px)",
                    }}
                  />

                  {/* Orbiting particles on hover */}
                  {isHoveringLogo && (
                    <>
                      <motion.div
                        className="absolute w-4 h-4 bg-[#14B8A6] rounded-full shadow-lg shadow-[#14B8A6]/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        style={{
                          transformOrigin: "120px 120px",
                          top: "50%",
                          left: "50%",
                          marginTop: "-8px",
                          marginLeft: "-8px",
                        }}
                      />
                      <motion.div
                        className="absolute w-3 h-3 bg-[#3F4B5B] rounded-full shadow-lg shadow-[#3F4B5B]/50"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        style={{
                          transformOrigin: "100px 100px",
                          top: "50%",
                          left: "50%",
                          marginTop: "-6px",
                          marginLeft: "-6px",
                        }}
                      />
                      <motion.div
                        className="absolute w-2 h-2 bg-[#3B82F6] rounded-full shadow-lg shadow-[#3B82F6]/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        style={{
                          transformOrigin: "90px 90px",
                          top: "50%",
                          left: "50%",
                          marginTop: "-4px",
                          marginLeft: "-4px",
                        }}
                      />
                    </>
                  )}

                  {/* Sparkles on hover */}
                  {isHoveringLogo &&
                    [...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.cos((i * Math.PI * 2) / 8) * 100,
                          y: Math.sin((i * Math.PI * 2) / 8) * 100,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.15,
                        }}
                        style={{
                          top: "50%",
                          left: "50%",
                          marginTop: "-4px",
                          marginLeft: "-4px",
                        }}
                      />
                    ))}

                  {/* Logo container - 20% larger (w-48 h-48 = 192px, was w-40 h-40 = 160px) */}
                  <div className="relative w-48 h-48 rounded-full bg-white shadow-2xl overflow-hidden border-4 border-white/50">
                    <Image src="/images/easi-logo-large.jpg" alt="EASI Logo" fill className="object-contain p-4" />
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>

        {/* Therapy Planning & Structured Interventions section */}
        <AnimatedWrapper animation="reveal-up">
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div>
                <span className="inline-block text-sm uppercase tracking-widest text-[#14B8A6] mb-4 px-4 py-2 bg-[#14B8A6]/10 rounded-full border border-[#14B8A6]/20">
                  Structured Interventions
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Therapy Planning & Structured Interventions</h3>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  Ask mySLP about literacy intervention and you won't get generic suggestions. You'll get{" "}
                  <span className="text-[#14B8A6] font-semibold">Light Speed Literacy</span>—thirteen progressive phases
                  of Orton-Gillingham-based structured literacy, session by session, ready to implement.
                </p>
                <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#14B8A6]/20 rounded-xl p-6 border border-[#8B5CF6]/30">
                  <p className="text-white/90 text-lg mb-2">
                    The same caliber of intervention that costs{" "}
                    <span className="text-[#14B8A6] font-bold">$150/hour</span> through private tutoring.
                  </p>
                  <p className="text-white font-semibold text-xl">Built in.</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "13 progressive phases of structured literacy",
                    "Orton-Gillingham principles endorsed by IDA",
                    "Session-by-session planning ready to implement",
                    "Multi-sensory techniques for all learning styles",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6] flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Screenshot only, logo moved to capabilities section above */}
              <div className="relative">
                {/* Screenshot container */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/images/screenshot-202025-12-05-20at-209.png"
                    alt="mySLP literacy intervention conversation showing Light Speed Literacy curriculum guidance"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F4B5B]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* See it in action badge */}
                <motion.div
                  className="absolute -bottom-4 right-4 bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ y: { duration: 2, repeat: Number.POSITIVE_INFINITY } }}
                >
                  See it in action
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* What mySLP Won't Do section */}
        <AnimatedWrapper animation="reveal-up">
          <div className="max-w-5xl mx-auto mb-24">
            <motion.div
              className="relative overflow-hidden rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Background with gradient mesh */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(239,68,68,0.1)_0%,_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.08)_0%,_transparent_50%)]" />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border border-red-500/20" />

              {/* Content */}
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Left side - Text content */}
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ShieldAlert className="w-4 h-4 text-red-400" />
                      <span className="text-sm font-medium text-red-300">Important Boundaries</span>
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      What mySLP <span className="text-red-400">Won't</span> Do
                    </h3>

                    <p className="text-lg text-white/70 mb-8 leading-relaxed">
                      mySLP is designed to support and enhance your clinical judgment—never to replace it. These
                      boundaries exist to protect you and the children you serve.
                    </p>

                    <motion.div
                      className="inline-block bg-gradient-to-r from-[#14B8A6]/20 to-[#14B8A6]/10 rounded-xl px-6 py-4 border border-[#14B8A6]/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <p className="text-[#14B8A6] font-medium">
                        Every response ends where it should: with your expertise making the final call.
                      </p>
                    </motion.div>
                  </div>

                  {/* Right side - Limitation cards */}
                  <div className="space-y-4">
                    {limitations.map((limitation, index) => (
                      <motion.div
                        key={index}
                        className="group relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                      >
                        <motion.div
                          className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
                          whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(239, 68, 68, 0.08)",
                            borderColor: "rgba(239, 68, 68, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Icon container */}
                          <motion.div
                            className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <XCircle className="w-6 h-6 text-red-400" />
                          </motion.div>

                          {/* Text */}
                          <div className="flex-1">
                            <p className="text-white font-medium text-lg">{limitation}</p>
                          </div>

                          {/* Hover indicator */}
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                          </motion.div>

                          {/* Subtle gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedWrapper>

        {/* Why This Isn't ChatGPT */}
        <AnimatedWrapper animation="reveal-up">
          <div className="mb-24">
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Shield className="w-4 h-4 text-[#14B8A6]" />
                <span className="text-sm font-medium text-[#14B8A6]">Purpose-Built for Clinical Use</span>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Why This Isn't ChatGPT</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Generic AI tools weren't designed for healthcare. mySLP was built from the ground up with clinical
                knowledge and security you can trust.
              </p>
            </div>

            <motion.div
              className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-sm shadow-2xl"
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="text-left p-4 md:p-6 font-semibold text-white/60 text-sm uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="text-left p-4 md:p-6 font-semibold text-sm uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <span className="text-red-400">ChatGPT / Generic AI</span>
                        </div>
                      </th>
                      <th className="text-left p-4 md:p-6 font-semibold text-sm uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#14B8A6]" />
                          <span className="text-[#14B8A6]">mySLP</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className={`border-b border-white/5 transition-all duration-300 ${
                          hoveredRow === index ? "bg-white/10" : "hover:bg-white/5"
                        }`}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <td className="p-4 md:p-6 font-medium text-white">{row.feature}</td>
                        <td className="p-4 md:p-6 text-red-300/80 text-sm">
                          <div className="flex items-start gap-2">
                            <XCircle
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${hoveredRow === index ? "scale-110" : ""}`}
                            />
                            <span>{row.chatgpt}</span>
                          </div>
                        </td>
                        <td className="p-4 md:p-6 text-[#14B8A6] text-sm">
                          <div className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${hoveredRow === index ? "scale-110" : ""}`}
                            />
                            <span>{row.myslp}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper animation="reveal-up">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">The Bottom Line</h3>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              You already do excellent clinical work. mySLP helps you{" "}
              <span className="text-[#14B8A6] font-semibold">document it</span>,
              <span className="text-[#14B8A6] font-semibold">defend it</span>, and{" "}
              <span className="text-[#14B8A6] font-semibold">deliver it faster</span>.
            </p>
            <div className="inline-block bg-gradient-to-r from-[#14B8A6]/20 to-[#8B5CF6]/20 rounded-xl px-8 py-6 border border-[#14B8A6]/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#14B8A6]/20">
              <p className="text-lg md:text-xl font-medium text-white mb-2">
                Your judgment. Your license. Your decisions.
              </p>
              <p className="text-white/70">mySLP just makes sure you've seen everything before you sign your name.</p>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}

export { MySLP }
