"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedWrapperProps {
  children: ReactNode
  className?: string
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale"
  delay?: number
  threshold?: number
}

export function AnimatedWrapper({
  children,
  className,
  animation = "reveal",
  delay = 0,
  threshold = 0.1,
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
          }
        })
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div ref={ref} className={cn(animation, className)}>
      {children}
    </div>
  )
}
