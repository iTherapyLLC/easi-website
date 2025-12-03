"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award, Play } from "lucide-react"

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-[#FDF8F4] to-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/warm-golden-afternoon-sunlight-streaming-through-o.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
      </div>

      {/* Soft floating gradient orbs with warm tones */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#14B8A6]/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] shadow-sm mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Award className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-sm text-[#6B7280]">NSF Phase II SBIR Award #2133148</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <span className="text-[#1F2937]">Leave Work at 5pm.</span>
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
                Every Day.
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg text-[#6B7280] max-w-xl mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              Transform 5+ hours of speech evaluation into 15-30 minutes. No weekend report writing. Be fully present
              with the children who need you most.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#3B82F6] text-white hover:bg-[#2563EB] rounded-lg px-8 h-14 text-base font-medium group shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/30 transition-all duration-300"
              >
                <a href="https://www.northernspeech.com/" target="_blank" rel="noopener noreferrer">
                  Start saving time today!
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg px-8 h-14 text-base border-[#E5E7EB] hover:bg-[#F5F5F5] bg-white group"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap items-center gap-6 mt-10 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Shield className="w-5 h-5 text-[#14B8A6]" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Shield className="w-5 h-5 text-[#14B8A6]" />
                <span>FERPA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Clock className="w-5 h-5 text-[#14B8A6]" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image "The Relief" */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-woman-speech-language-pathologist-ear.jpg"
                alt="Speech-language pathologist enjoying work-life balance, closing laptop at reasonable hour"
                fill
                className="object-cover"
                priority
              />

              {/* Subtle overlay gradient for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-[#1F2937] font-medium">
                  "I finally leave work when work is done—not at midnight."
                </p>
                <p className="text-xs text-[#6B7280] mt-1">— Jennifer M., School-Based SLP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-[#3F4B5B] rounded-2xl shadow-xl transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <AnimatedCounter end={4} suffix=".5+" />
            </div>
            <div className="text-sm text-white/70 mt-1">Hours Saved</div>
            <div className="text-xs text-white/50">Per Evaluation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className="text-sm text-white/70 mt-1">Transcription</div>
            <div className="text-xs text-white/50">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              $<AnimatedCounter end={199} />
            </div>
            <div className="text-sm text-white/70 mt-1">Per Year</div>
            <div className="text-xs text-white/50">ChatSLP + 10 Evaluations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <AnimatedCounter end={15} suffix="-30" />
            </div>
            <div className="text-sm text-white/70 mt-1">Minutes</div>
            <div className="text-xs text-white/50">Complete Analysis</div>
          </div>
        </div>
      </div>
    </section>
  )
}
