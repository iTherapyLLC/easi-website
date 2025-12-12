"use client"

import { AnimatedWrapper } from "./animated-wrapper"
import { AnimatedTitle } from "./animated-title"
import { Award, BookOpen, Brain, MessageCircle, Microscope, Users, GraduationCap } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Lois Jean Brady, MA, SLP",
    role: "Co-Founder & CEO, Principal Investigator",
    image: "/images/jeani-20headshot.avif",
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
    bio: "30+ years advancing communication access through clinical excellence and technological innovation. Leading research that bridges speech-language pathology with assistive technology development.",
    credentials: [
      { icon: Award, text: "Principal Investigator: NSF Phase I & II, NIH R43, AFWERX Phase I" },
      { icon: BookOpen, text: "Author: Apps for Autism, Speak Move Play and Learn, Speech in Action" },
      { icon: Users, text: "Board of Directors, US Society for Augmentative & Alternative Communication" },
      { icon: Brain, text: "Certified Autism Specialist with expertise in AAC systems & IEP development" },
      { icon: Microscope, text: "Microsoft AI for Accessibility & Epic Unreal MegaGrant recipient" },
      { icon: GraduationCap, text: "M.A. Speech-Language Pathology, CSU Northridge" },
    ],
  },
  {
    name: "Matthew Guggemos, MS, CCC-SLP",
    role: "Co-Founder & Chief Technology Officer",
    image: "/images/mensa-20headshot.jpeg",
    gradient: "from-[#14B8A6] to-[#5EEAD4]",
    bio: "Speech-language pathologist bridging clinical practice with technology innovation. Expertise in computational linguistics, speech processing, and multi-sensory intervention design.",
    credentials: [
      { icon: Award, text: "CTO, NSF SBIR Phase 2 (Grant #2133148) developing EASI platform" },
      { icon: Microscope, text: "Co-PI on NIH & NSF grants for speech technology research" },
      { icon: Brain, text: "2013 Mensa Intellectual Benefits to Society Award for autism technology" },
      { icon: Users, text: "Board Member: American Society for AI, Mensa Foundation Trustee" },
      { icon: BookOpen, text: "Guest Editor, Mensa Research Journal; National Academies invited speaker" },
      { icon: GraduationCap, text: "M.S. Speech Pathology & Audiology, CSU East Bay; ASHA CCC" },
    ],
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedWrapper className="text-center mb-16">
          <AnimatedTitle as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1F2937]">
            Built by SLPs Who Lived Your Challenges
          </AnimatedTitle>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            We're practicing clinicians who built what we desperately needed in our own practice.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <AnimatedWrapper key={index} delay={index * 200} animation={index === 0 ? "reveal-left" : "reveal-right"}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 h-full flex flex-col">
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 relative`}
                  >
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  {/* Decorative ring */}
                  <div
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300`}
                  />
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] mb-1">{member.name}</h3>
                <p className="text-[#8B5CF6] font-medium text-sm mb-3">{member.role}</p>

                <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">{member.bio}</p>

                <ul className="space-y-2.5 flex-grow">
                  {member.credentials.map((credential, credIndex) => (
                    <li
                      key={credIndex}
                      className="flex items-start gap-3 text-sm text-[#6B7280] group-hover:text-[#1F2937] transition-colors"
                    >
                      <credential.icon className="w-4 h-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      {credential.text}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Why This Matters callout */}
        <AnimatedWrapper delay={500} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-[#E5E7EB] shadow-sm">
            <MessageCircle className="w-5 h-5 text-[#8B5CF6]" />
            <span className="text-[#6B7280]">
              <strong className="text-[#1F2937]">Why This Matters:</strong> We're practicing SLPs who built what we
              desperately needed.
            </span>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}
