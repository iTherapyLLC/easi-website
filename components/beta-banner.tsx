"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"

export function BetaBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-[#8B5CF6] to-[#14B8A6] text-white py-2.5 px-4 relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 animate-shimmer" />

      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm relative">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span className="font-medium">Join the Beta Community — Be part of the evolution!</span>
        <a href="#faq" className="underline underline-offset-2 hover:no-underline font-medium">
          Learn more
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
