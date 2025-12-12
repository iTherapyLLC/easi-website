"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedWrapper } from "./animated-wrapper"
import { AnimatedTitle } from "./animated-title"
import { HelpCircle, Settings, Scale } from "lucide-react"

const faqs = [
  {
    category: "Clinical",
    icon: HelpCircle,
    color: "#8B5CF6",
    questions: [
      {
        q: "How accurate is the transcription?",
        a: "Our speech diarization achieves 98-99% accuracy—far exceeding typical dictation software. You always review and can edit before finalizing.",
      },
      {
        q: "What if I disagree with the results?",
        a: "Everything is editable. EASI provides objective data to support your clinical judgment—you make the final determination. The system documents your clinical reasoning.",
      },
      {
        q: "Can it handle dialectal differences?",
        a: "Yes. Input cultural background and languages spoken. EASI recognizes various English dialects and second language influences to prevent misidentification of differences as disorders.",
      },
    ],
  },
  {
    category: "Technical",
    icon: Settings,
    color: "#14B8A6",
    questions: [
      {
        q: "Do I need special equipment?",
        a: "No. Any device with internet access works—phone, tablet, or computer. No special microphones or software required.",
      },
      {
        q: "How long does analysis take?",
        a: "15-30 minutes for full analysis, depending on recording length. You can review results immediately.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. HIPAA-compliant infrastructure on Amazon Bedrock (healthcare-grade security), encrypted storage, signed BAAs for all users.",
      },
    ],
  },
  {
    category: "Comparison",
    icon: Scale,
    color: "#3B82F6",
    questions: [
      {
        q: "Could I just use ChatGPT instead?",
        a: "No. ChatGPT cannot process audio files, calculate clinical metrics, separate speakers, provide IPA transcription, or comply with HIPAA/FERPA requirements. Uploading patient data to ChatGPT violates privacy laws and risks your license.",
      },
      {
        q: "How is this different from traditional tests?",
        a: "Traditional tests assess decontextualized skills. EASI analyzes natural communication—providing a complete picture of how children actually communicate.",
      },
    ],
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedWrapper className="text-center mb-16">
          <AnimatedTitle as="h2" className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1F2937]">
            Frequently Asked Questions
          </AnimatedTitle>
          <p className="text-lg text-[#6B7280]">Everything you need to know about EASI</p>
        </AnimatedWrapper>

        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <AnimatedWrapper key={categoryIndex} delay={categoryIndex * 150}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="w-4 h-4" style={{ color: category.color }} />
                </div>
                <h3 className="text-sm uppercase tracking-widest text-[#6B7280] font-medium">{category.category}</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl px-6 data-[state=open]:shadow-md data-[state=open]:border-[#8B5CF6]/30 transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5 text-[#1F2937] font-medium">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#6B7280] pb-5 leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
