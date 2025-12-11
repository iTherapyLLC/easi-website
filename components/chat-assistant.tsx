"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Send, Shield } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const QUICK_PROMPTS = [
  "What can EASI do?",
  "How is this different from ChatGPT?",
  "Tell me about MySLP",
  "How much does it cost?",
]

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm the EASI Agent. I can answer your questions about EASI, MySLP, pricing, compliance, and how it can help transform your practice. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showQuickPrompts, setShowQuickPrompts] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true)
    }

    window.addEventListener("openEasiChat", handleOpenChat)
    return () => window.removeEventListener("openEasiChat", handleOpenChat)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    await sendMessage(input.trim())
  }

  const sendMessage = async (messageText: string) => {
    setShowQuickPrompts(false)

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: data.text,
        },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting right now. Please try again in a moment or visit our contact page for assistance.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-110",
          isOpen ? "bg-[#3F4B5B] text-white" : "bg-white shadow-xl shadow-[#14B8A6]/25",
        )}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        <div className={cn("transition-all duration-300")}>
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Image src="/easi-logo.png" alt="EASI Agent" width={48} height={48} className="rounded-full" />
          )}
        </div>

        {!isOpen && <span className="absolute inset-0 rounded-full bg-[#14B8A6] animate-ping opacity-20" />}
      </button>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] bg-white border border-[#E5E7EB] rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden",
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none",
        )}
      >
        <div className="bg-[#3F4B5B] text-white p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/20 via-transparent to-[#3B82F6]/20 animate-gradient" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <Image src="/easi-logo.png" alt="EASI" width={40} height={40} />
              </div>
              <div>
                <h3 className="font-semibold">EASI Agent</h3>
                <p className="text-xs text-white/60">Ask me anything about EASI</p>
              </div>
            </div>
            {/* HIPAA-secure indicator */}
            <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
              <Shield className="w-3 h-3 text-[#14B8A6]" />
              <span className="text-[10px] text-white/80">Secure</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-[#F5F5F5]">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn("flex animate-slide-up", message.role === "user" ? "justify-end" : "justify-start")}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center mr-2 flex-shrink-0 shadow-sm">
                  <Image src="/easi-logo.png" alt="EASI" width={24} height={24} />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                  message.role === "user"
                    ? "bg-[#3F4B5B] text-white rounded-br-md"
                    : "bg-white text-[#1F2937] rounded-bl-md border border-[#E5E7EB]",
                )}
              >
                {message.content}
              </div>
            </div>
          ))}

          {showQuickPrompts && messages.length === 1 && !isLoading && (
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <p className="text-xs text-[#6B7280] px-1">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="text-xs bg-white border border-[#E5E7EB] text-[#3F4B5B] px-3 py-1.5 rounded-full hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all duration-200 shadow-sm"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex justify-start animate-slide-up">
              <div className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center mr-2 flex-shrink-0 shadow-sm">
                <Image src="/easi-logo.png" alt="EASI" width={24} height={24} />
              </div>
              <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 border border-[#E5E7EB] shadow-sm">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div
                    className="w-2 h-2 rounded-full bg-[#14B8A6] animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-[#14B8A6] animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about EASI..."
              className="flex-1 bg-[#F5F5F5] rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#14B8A6]/50 placeholder:text-[#9CA3AF] border border-transparent focus:border-[#14B8A6]/30 transition-all"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#3B82F6] text-white hover:opacity-90 w-11 h-11 flex-shrink-0 shadow-lg shadow-[#14B8A6]/20 transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
