import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EASI - Speech & Language Analysis for Clinical Settings",
  description:
    "Evaluative Artificial Speech Intelligence transforms 5 hours of assessment into 15-30 minutes of insight. HIPAA & FERPA compliant clinical assessment tool for SLPs.",
  keywords: [
    "speech pathology",
    "SLP",
    "language assessment",
    "clinical tools",
    "HIPAA compliant",
    "speech therapy",
    "EASI",
  ],
  openGraph: {
    title: "EASI - Speech & Language Analysis for Clinical Settings",
    description: "Transform 5 hours of assessment into 15-30 minutes of insight.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#3F4B5B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
