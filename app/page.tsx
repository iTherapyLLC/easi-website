import { Header } from "@/components/header"
import { BetaBanner } from "@/components/beta-banner"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { HowItWorks } from "@/components/how-it-works"
import { ChatSLP } from "@/components/chat-slp"
import { Comparison } from "@/components/comparison"
import { TeamSection } from "@/components/team-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ChatAssistant } from "@/components/chat-assistant"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <BetaBanner />
      <Header />
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <ChatSLP />
      <Comparison />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ChatAssistant />
    </main>
  )
}
