import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EASI: Speech & Language Assessment Software | 5 Hours → 15 Minutes",
  description:
    "EASI transforms 5+ hours of speech-language evaluation into 15-30 minutes. HIPAA compliant. 98-99% accuracy. Built by SLPs. NSF SBIR Phase II funded. $199/year at Northern Speech Services.",
  keywords:
    "speech language assessment software, SLP evaluation tool, language sample analysis, HIPAA compliant speech therapy, MLU calculator, ChatSLP, speech pathology, EASI, clinical assessment",
  authors: [{ name: "iTherapy, LLC" }],
  icons: {
    icon: "/easi-logo.png",
    shortcut: "/easi-logo.png",
    apple: "/easi-logo.png",
  },
  openGraph: {
    title: "EASI: Speech & Language Assessment in 15 Minutes, Not 5 Hours",
    description:
      "HIPAA compliant speech assessment built by SLPs. 98-99% accuracy. NSF funded. Available at Northern Speech Services.",
    url: "https://easi-as.com",
    siteName: "EASI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EASI: Speech & Language Assessment in 15 Minutes",
    description: "HIPAA compliant. Built by SLPs. NSF funded. Transform your evaluation workflow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#3F4B5B",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "EASI - Evaluative Artificial Speech Intelligence",
      applicationCategory: "HealthApplication",
      description:
        "EASI transforms 5+ hours of speech-language evaluation into 15-30 minutes using computational linguistics. HIPAA and FERPA compliant. Built by practicing SLPs. NSF SBIR Phase II funded.",
      url: "https://easi-as.com",
      operatingSystem: "Web-based",
      offers: {
        "@type": "Offer",
        price: "199.00",
        priceCurrency: "USD",
        seller: {
          "@type": "Organization",
          name: "Northern Speech Services",
        },
      },
      featureList: [
        "98-99% transcription accuracy",
        "Automatic speaker diarization",
        "IPA transcription",
        "MLU, IPSYN, NDW, PCC calculation",
        "ChatSLP clinical reasoning partner",
        "HIPAA compliant",
        "FERPA compliant",
      ],
      author: {
        "@type": "Organization",
        name: "iTherapy, LLC",
      },
      award: "NSF SBIR Phase II Award #2133148",
    },
    {
      "@type": "Organization",
      name: "iTherapy, LLC",
      url: "https://easi-as.com",
      foundingDate: "2012",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1175 Nimitz Ave. Suite #180",
        addressLocality: "Vallejo",
        addressRegion: "CA",
        postalCode: "94592",
        addressCountry: "US",
      },
      telephone: "+1-707-651-9915",
      email: "admin@itherapyllc.com",
      founder: [
        {
          "@type": "Person",
          name: "Lois Jean Brady",
          jobTitle: "Co-Founder & CEO",
        },
        {
          "@type": "Person",
          name: "Matthew Guggemos",
          jobTitle: "Co-Founder & CTO",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is EASI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EASI (Evaluative Artificial Speech Intelligence) transforms 5+ hours of speech-language evaluation into 15-30 minutes using computational linguistics. It's HIPAA compliant, built by SLPs, and NSF SBIR Phase II funded.",
          },
        },
        {
          "@type": "Question",
          name: "Is EASI HIPAA compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, fully. iTherapy provides a Business Associate Agreement. All data is processed on Amazon Bedrock healthcare-grade infrastructure with encryption.",
          },
        },
        {
          "@type": "Question",
          name: "Can SLPs use ChatGPT instead?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ChatGPT has no BAA (HIPAA violation), cannot process audio, cannot separate speakers, and cannot calculate clinical metrics like MLU or PCC. EASI is the compliant alternative.",
          },
        },
        {
          "@type": "Question",
          name: "How much does EASI cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$199/year includes unlimited ChatSLP access plus 10 evaluation credits. Additional credits available. Distributed exclusively through Northern Speech Services.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I buy EASI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EASI is distributed exclusively through Northern Speech Services at northernspeech.com.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>{children}</body>
    </html>
  )
}
