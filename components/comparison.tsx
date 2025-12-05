"use client"

import Image from "next/image"
import { Shield, ShieldAlert, Check, X, AlertTriangle } from "lucide-react"
import { AnimatedWrapper } from "./animated-wrapper"
import { motion } from "framer-motion"

const comparisonData = [
  { feature: "HIPAA Compliance", chatgpt: false, easi: true, easiNote: "Full BAA provided" },
  { feature: "FERPA Compliance", chatgpt: false, easi: true, easiNote: "Encrypted & secure" },
  { feature: "Audio Processing", chatgpt: false, easi: true, easiNote: "Full analysis" },
  { feature: "Speaker Separation", chatgpt: false, easi: true, easiNote: "98-99% accuracy" },
  { feature: "Clinical Metrics (PCC, MLU, IPSYN)", chatgpt: false, easi: true, easiNote: "Precise calculations" },
  { feature: "IPA Transcription", chatgpt: false, easi: true, easiNote: "Fully editable" },
  { feature: "Healthcare-Grade Security", chatgpt: false, easi: true, easiNote: "Amazon Bedrock" },
]

export function Comparison() {
  return (
    <section id="comparison" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedWrapper className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#EF4444] mb-4">
            <AlertTriangle className="w-4 h-4" />
            Critical Distinction
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1F2937]">Why EASI is NOT ChatGPT</h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Uploading patient recordings or documents to ChatGPT violates HIPAA and FERPA regulations. EASI provides a
            legally compliant alternative.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={100}>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* The Old Way - Before */}
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-red-200 relative"
                whileHover={{
                  borderColor: "rgb(239, 68, 68)",
                  boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.35)",
                }}
              >
                <Image
                  src="/diverse-slp-working-late.jpg"
                  alt="The old way - exhausted SLP working late into the night"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-red-900/20 to-transparent"
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Scan line effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(transparent 50%, rgba(239, 68, 68, 0.1) 50%)",
                    backgroundSize: "100% 4px",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.span
                    className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full mb-2"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                    >
                      <X className="w-4 h-4" />
                    </motion.span>
                    The Old Way
                  </motion.span>
                  <motion.p
                    className="text-white font-semibold text-lg drop-shadow-lg"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1, x: 5 }}
                  >
                    9:15 PM. Still working.
                  </motion.p>
                </div>
                {/* Corner accent */}
                <motion.div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-red-500 border-l-[60px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>

            {/* The New Way - After */}
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-green-200 relative"
                whileHover={{
                  borderColor: "rgb(34, 197, 94)",
                  boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.35)",
                }}
              >
                <Image
                  src="/slp-casual-professional-happy.jpg"
                  alt="The new way - SLP in casual professional attire leaving work at reasonable hour, relaxed and satisfied"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Shimmer effect on hover */}
                <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                  />
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.span
                    className="inline-flex items-center gap-2 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full mb-2"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                    >
                      <Check className="w-4 h-4" />
                    </motion.span>
                    With EASI
                  </motion.span>
                  <motion.p
                    className="text-white font-semibold text-lg drop-shadow-lg"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1, x: 5 }}
                  >
                    4:30 PM. Work complete.
                  </motion.p>
                </div>
                {/* Corner accent with checkmark */}
                <motion.div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-green-500 border-l-[60px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-green-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        bottom: "20%",
                      }}
                      animate={{
                        y: [-10, -40, -10],
                        opacity: [0.5, 1, 0.5],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={200}>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* ChatGPT Column - Risk */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200 relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full opacity-50" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                    <ShieldAlert className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">ChatGPT / Generic Tools</h3>
                    <p className="text-sm text-red-600">Not designed for healthcare</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {comparisonData.map((row, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-[#6B7280]">{row.feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <p className="text-red-800 font-medium text-sm flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    Uploading patient data violates HIPAA and FERPA regulations
                  </p>
                </div>
              </div>
            </div>

            {/* EASI Column - Safe */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200 relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-50" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">EASI + MySLP</h3>
                    <p className="text-sm text-green-600">Purpose-built for clinical use</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {comparisonData.map((row, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-[#1F2937]">{row.feature}</span>
                      <span className="text-xs text-green-600 ml-auto">{row.easiNote}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-medium text-sm flex items-start gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    Your data never leaves the secure system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={400} className="text-center">
          <p className="text-sm text-[#6B7280] bg-[#F5F5F5] border border-[#E5E7EB] rounded-lg p-4 inline-block">
            <strong className="text-[#1F2937]">Bottom Line:</strong> EASI is built on HIPAA-protected infrastructure.
            Your data never leaves the secure system.
          </p>
        </AnimatedWrapper>
      </div>
    </section>
  )
}
