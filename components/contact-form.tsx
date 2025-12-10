"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Building, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm } from "@/app/actions/contact"

type FormStatus = "idle" | "submitting" | "success" | "error"

interface FormData {
  name: string
  email: string
  organization: string
  subject: string
  message: string
  inquiryType: "general" | "demo" | "support" | "partnership" | "press"
}

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "demo", label: "Request a Demo" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "press", label: "Press & Media" },
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          organization: "",
          subject: "",
          message: "",
          inquiryType: "general",
        })
      } else {
        setStatus("error")
        setErrorMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Unable to send message. Please try again later.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#14B8A6]/10 border border-[#14B8A6]/30 rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="w-16 h-16 bg-[#14B8A6] rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-[#3F4B5B] mb-2">Message Sent Successfully!</h3>
            <p className="text-[#3F4B5B]/70 mb-6">
              Thank you for reaching out. Our team will review your message and get back to you within 1-2 business
              days.
            </p>
            <Button onClick={() => setStatus("idle")} className="bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white">
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Inquiry Type */}
            <div className="space-y-2">
              <Label htmlFor="inquiryType" className="text-[#3F4B5B] font-medium">
                What can we help you with?
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, inquiryType: type.value as FormData["inquiryType"] }))
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      formData.inquiryType === type.value
                        ? "bg-[#14B8A6] text-white shadow-md"
                        : "bg-[#F5F5F5] text-[#3F4B5B] hover:bg-[#14B8A6]/10"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#3F4B5B] font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-[#14B8A6]" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. Jane Smith"
                  className="bg-white border-[#3F4B5B]/20 focus:border-[#14B8A6] focus:ring-[#14B8A6]/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#3F4B5B] font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#14B8A6]" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane.smith@school.edu"
                  className="bg-white border-[#3F4B5B]/20 focus:border-[#14B8A6] focus:ring-[#14B8A6]/20"
                />
              </div>
            </div>

            {/* Organization & Subject Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-[#3F4B5B] font-medium flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#14B8A6]" />
                  Organization
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Springfield School District"
                  className="bg-white border-[#3F4B5B]/20 focus:border-[#14B8A6] focus:ring-[#14B8A6]/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-[#3F4B5B] font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#14B8A6]" />
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Question about EASI evaluations"
                  className="bg-white border-[#3F4B5B]/20 focus:border-[#14B8A6] focus:ring-[#14B8A6]/20"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#3F4B5B] font-medium">
                Your Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you. Include any relevant details about your practice, caseload, or specific questions..."
                className="bg-white border-[#3F4B5B]/20 focus:border-[#14B8A6] focus:ring-[#14B8A6]/20 resize-none"
              />
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-[#14B8A6] hover:bg-[#14B8A6]/90 text-white py-6 text-lg font-medium rounded-xl shadow-lg shadow-[#14B8A6]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#14B8A6]/30 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              )}
            </Button>

            {/* Privacy Note */}
            <p className="text-xs text-center text-[#3F4B5B]/50">
              By submitting this form, you agree to our{" "}
              <a href="/privacy" className="text-[#14B8A6] hover:underline">
                Privacy Policy
              </a>
              . We never share your information with third parties.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
