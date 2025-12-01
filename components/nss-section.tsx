"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink } from "lucide-react"

const benefits = [
  "Established reputation in the SLP community",
  "Proven track record of supporting clinicians",
  "Dedicated support team who understands your needs",
  "Commitment to advancing the profession",
]

export function NSSSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FuP8-7ZRPTffyaw1io-dR-Nv8sGTLrte7oEPV5yx4TXHAOg64dmO.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#3F4B5B]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-[#14B8A6] font-medium text-sm">Exclusive Partner</span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 text-balance">
            Distributed Exclusively Through Northern Speech Services
          </h2>
          <p className="text-xl text-white/80 font-medium mb-6">Your Trusted Partner for 50 Years</p>
          <p className="text-lg text-white/70 leading-relaxed">
            Northern Speech Services has been serving the SLP community for five decades, bringing you proven solutions
            and innovations. EASI represents the next evolution in assessment technology, available exclusively through
            your trusted partner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <div className="w-6 h-6 rounded-full bg-[#14B8A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-sm leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#14B8A6] hover:bg-[#0D9488] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#14B8A6]/30 transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://northernspeech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Get EASI at Northern Speech Services
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
