"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ShieldCheck,
  GraduationCap,
  Cloud,
  Lock,
  ClipboardCheck,
  Globe,
  FileText,
  Award,
  Users,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant",
    description:
      "Business Associate Agreement in place. Your protected health information is handled according to HIPAA requirements.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: GraduationCap,
    title: "FERPA Compliant",
    description:
      "Safe for school-based SLPs. Student data is protected in compliance with federal education privacy requirements.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Cloud,
    title: "AWS Healthcare Infrastructure",
    description:
      "Built on Amazon Web Services healthcare-grade infrastructure with FedRAMP authorization—the same technology trusted by major health systems.",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "All data encrypted at rest via AWS KMS and in transit using TLS 1.2+ protocols.",
    color: "from-slate-500 to-slate-600",
  },
  {
    icon: ClipboardCheck,
    title: "NIST CSF v1.1 Aligned",
    description:
      "Security practices aligned with all five core functions: Identify, Protect, Detect, Respond, and Recover.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "NDPA Compliant",
    description:
      "Participant in the National Student Data Privacy Agreement supporting 15+ states including NY, IL, MA, and CA.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Database,
    title: "Secure Data Lifecycle",
    description:
      "24-hour TTL for conversational data, automated deletion within 90 days of contract termination, NIST SP 800-88 compliant disposal.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "Multi-State Compliance",
    description:
      "Compliant with state-specific student data privacy laws including NY Education Law § 2-d, Illinois SOPPA, and more.",
    color: "from-teal-500 to-teal-600",
  },
]

export function SecuritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="security"
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M30 10c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2zm-8.5 3.5c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l2.8 2.8c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8l-2.8-2.8zm17 0l-2.8 2.8c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l2.8-2.8c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0zM30 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-18 8c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm32 0c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Security & Compliance
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#3F4B5B] mb-6">
            Enterprise-Grade Security, <span className="text-blue-600">Built for Healthcare & Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EASI was designed from the ground up to protect sensitive clinical and student data. Your patients' privacy,
            your students' information, and your professional compliance are non-negotiable.
          </p>
        </motion.div>

        {/* Compliance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {complianceItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3F4B5B] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 mb-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3F4B5B] to-slate-600 flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#3F4B5B] mb-2">Enterprise & District Procurement</h3>
              <p className="text-gray-600 leading-relaxed">
                Need detailed security documentation for your organization's procurement process? We provide
                comprehensive security documentation including NIST CSF alignment, NDPA agreements, Data Security and
                Privacy Plans, and BAAs for enterprise customers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button
                asChild
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
              >
                <Link href="/privacy">View Full Policy</Link>
              </Button>
              <Button asChild className="bg-[#3F4B5B] hover:bg-[#2d3744] text-white px-6 py-3 rounded-xl">
                <a href="mailto:admin@itherapyllc.com?subject=Security Documentation Request">Request Documentation</a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trust Reinforcement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-blue-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3F4B5B] mb-3">Federally Validated Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                EASI's development was funded by the National Science Foundation through a rigorous peer-review process.
                Federal investment of over $2.5 million across NSF, NIH, IES, and AFWERX reflects independent scientific
                validation of our approach. We built EASI as practicing clinicians—your trust is the foundation of
                everything we do.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
