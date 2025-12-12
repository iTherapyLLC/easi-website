"use client"

import type React from "react"

import { useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface AnimatedTitleProps {
  children?: string
  text?: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "span"
  gradient?: boolean
  gradientFrom?: string
  gradientTo?: string
  activeColor?: string
}

export function AnimatedTitle({
  children,
  text,
  className = "",
  as: Component = "h2",
  gradient = false,
  gradientFrom = "#8B5CF6",
  gradientTo = "#14B8A6",
  activeColor = "#14B8A6",
}: AnimatedTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [letterStates, setLetterStates] = useState<{ [key: number]: { x: number; y: number; active: boolean } }>({})

  const content = text || children

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const letters = containerRef.current.querySelectorAll("[data-letter-index]")
    const newStates: { [key: number]: { x: number; y: number; active: boolean } } = {}

    letters.forEach((letter) => {
      const index = Number.parseInt(letter.getAttribute("data-letter-index") || "0")
      const letterRect = letter.getBoundingClientRect()
      const letterCenterX = letterRect.left - rect.left + letterRect.width / 2
      const letterCenterY = letterRect.top - rect.top + letterRect.height / 2

      const distance = Math.sqrt(Math.pow(mouseX - letterCenterX, 2) + Math.pow(mouseY - letterCenterY, 2))

      if (distance < 80) {
        const intensity = 1 - distance / 80
        const angle = Math.atan2(letterCenterY - mouseY, letterCenterX - mouseX)
        const push = intensity * 8

        newStates[index] = {
          x: Math.cos(angle) * push,
          y: Math.sin(angle) * push - intensity * 4,
          active: true,
        }
      } else {
        newStates[index] = { x: 0, y: 0, active: false }
      }
    })

    setLetterStates(newStates)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setLetterStates({})
  }, [])

  if (!content || typeof content !== "string") {
    return <Component className={className}>{content || ""}</Component>
  }

  // Split text into words and letters, preserving spaces
  const words = content.split(" ")
  let globalIndex = 0

  return (
    <div
      ref={containerRef}
      className="inline-block cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Component className={className}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((letter, letterIndex) => {
              const currentIndex = globalIndex++
              const state = letterStates[currentIndex] || { x: 0, y: 0, active: false }

              return (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  data-letter-index={currentIndex}
                  className="inline-block transition-colors duration-200"
                  style={
                    gradient
                      ? {
                          background: state.active
                            ? `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                            : `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          filter: state.active ? "brightness(1.3)" : "brightness(1)",
                        }
                      : {
                          color: state.active ? activeColor : undefined,
                        }
                  }
                  animate={{
                    x: state.x,
                    y: state.y,
                    scale: state.active ? 1.15 : 1,
                    rotateZ: state.active ? (state.x > 0 ? 3 : -3) : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    mass: 0.5,
                  }}
                >
                  {letter}
                </motion.span>
              )
            })}
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </Component>
    </div>
  )
}

interface AnimatedTitleMultiLineProps {
  lines: Array<{
    text: string
    gradient?: boolean
    gradientFrom?: string
    gradientTo?: string
    className?: string
  }>
  containerClassName?: string
  as?: "h1" | "h2" | "h3" | "h4"
}

export function AnimatedTitleMultiLine({
  lines,
  containerClassName = "",
  as: Component = "h1",
}: AnimatedTitleMultiLineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [letterStates, setLetterStates] = useState<{ [key: string]: { x: number; y: number; active: boolean } }>({})

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const letters = containerRef.current.querySelectorAll("[data-letter-key]")
    const newStates: { [key: string]: { x: number; y: number; active: boolean } } = {}

    letters.forEach((letter) => {
      const key = letter.getAttribute("data-letter-key") || ""
      const letterRect = letter.getBoundingClientRect()
      const letterCenterX = letterRect.left - rect.left + letterRect.width / 2
      const letterCenterY = letterRect.top - rect.top + letterRect.height / 2

      const distance = Math.sqrt(Math.pow(mouseX - letterCenterX, 2) + Math.pow(mouseY - letterCenterY, 2))

      if (distance < 80) {
        const intensity = 1 - distance / 80
        const angle = Math.atan2(letterCenterY - mouseY, letterCenterX - mouseX)
        const push = intensity * 8

        newStates[key] = {
          x: Math.cos(angle) * push,
          y: Math.sin(angle) * push - intensity * 4,
          active: true,
        }
      } else {
        newStates[key] = { x: 0, y: 0, active: false }
      }
    })

    setLetterStates(newStates)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setLetterStates({})
  }, [])

  if (!lines || !Array.isArray(lines) || lines.length === 0) {
    return <Component className={containerClassName}></Component>
  }

  return (
    <div
      ref={containerRef}
      className={`cursor-default ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Component className={containerClassName}>
        {lines.map((line, lineIndex) => {
          if (!line.text || typeof line.text !== "string") {
            return <span key={lineIndex} className={`block ${line.className || ""}`}></span>
          }

          const words = line.text.split(" ")

          return (
            <span key={lineIndex} className={`block ${line.className || ""}`}>
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word.split("").map((letter, letterIndex) => {
                    const key = `${lineIndex}-${wordIndex}-${letterIndex}`
                    const state = letterStates[key] || { x: 0, y: 0, active: false }

                    return (
                      <motion.span
                        key={key}
                        data-letter-key={key}
                        className={`inline-block transition-colors duration-200`}
                        style={
                          line.gradient
                            ? {
                                background: `linear-gradient(135deg, ${line.gradientFrom || "#8B5CF6"}, ${line.gradientTo || "#14B8A6"})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                filter: state.active ? "brightness(1.3)" : "brightness(1)",
                              }
                            : {
                                color: state.active ? "#14B8A6" : undefined,
                              }
                        }
                        animate={{
                          x: state.x,
                          y: state.y,
                          scale: state.active ? 1.15 : 1,
                          rotateZ: state.active ? (state.x > 0 ? 3 : -3) : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                          mass: 0.5,
                        }}
                      >
                        {letter}
                      </motion.span>
                    )
                  })}
                  {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </span>
          )
        })}
      </Component>
    </div>
  )
}
