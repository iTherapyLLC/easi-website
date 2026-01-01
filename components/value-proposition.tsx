"use client"

import Image from "next/image"
import { User, Users, Building } from "lucide-react"
import { AnimatedWrapper } from "./animated-wrapper"
import { AnimatedTitle } from "./animated-title"

const benefits = [
  {
    category: "For You",
    icon: User,
    color: "bg-[#8B5CF6]",
    image: "/slp-leaving-work-on-time.jpg",
    items: ["Leave work on time", "No weekend report writing", "More energy for therapy", "Prevent burnout"],
  },
  {
    category: "For Your Clients",
    icon: Users,
    color: "bg-[#14B8A6]",
    image: "/happy-child-therapy-session.jpg",
    items: [
      "Waitlists shrink dramatically",
      "Faster access to services",
      "More therapy slots available",
      "Better outcomes",
    ],
  },
  {
    category: "For Your Organization",
    icon: Building,
    color: "bg-[#3B82F6]",
    image: "/three-healthcare-professionals-having-brief-relaxe.jpg",
    items: ["See 20% more clients", "Clear evaluation backlogs", "Improve staff retention", "Increase revenue"],
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] via-[#14B8A6] to-[#3B82F6]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedWrapper className="text-center mb-16">
          <AnimatedTitle as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1F2937]">
            The Time You'll Get Back
          </AnimatedTitle>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">What saving 4+ hours per evaluation really means</p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedWrapper key={benefit.category} delay={index * 150} className="group">
              <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-2xl overflow-hidden h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-[#8B5CF6]/30 active:scale-[0.98]">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={benefit.image || "/placeholder.svg"}
                    alt={`${benefit.category} - Time saved visualization`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${benefit.color} flex items-center justify-center shadow-lg`}>
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg">{benefit.category}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-[#6B7280] group-hover:text-[#1F2937] transition-colors"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${benefit.color} flex-shrink-0 group-hover:scale-125 transition-transform`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
