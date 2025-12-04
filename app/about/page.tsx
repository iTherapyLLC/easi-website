import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About EASI | Built by SLPs, Funded by NSF | iTherapy, LLC",
  description:
    "Learn about EASI, the speech-language assessment platform built by practicing SLPs Lois Jean Brady and Matthew Guggemos. NSF SBIR Phase II funded with $2.5M+ in federal grants. Distributed by Northern Speech Services.",
  keywords:
    "about EASI, iTherapy LLC, Lois Jean Brady SLP, Matthew Guggemos SLP, NSF SBIR speech technology, speech pathology software company, Northern Speech Services EASI",
  openGraph: {
    title: "About EASI | Built by SLPs, Funded by NSF",
    description:
      "The story behind the #1 speech-language assessment platform. Built by practicing clinicians with 50+ years combined experience.",
    url: "https://easi-as.com/about",
  },
  alternates: {
    canonical: "/about",
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "iTherapy, LLC",
    description:
      "Developer of EASI, the leading speech-language assessment platform. Founded by practicing SLPs with $2.5M+ in federal research funding.",
    url: "https://easi-as.com",
    foundingDate: "2012",
    founder: [
      {
        "@type": "Person",
        name: "Lois Jean Brady",
        jobTitle: "Co-Founder & CEO",
        description: "MA, SLP with 30+ years clinical experience. Principal Investigator on 4 NSF SBIR grants.",
      },
      {
        "@type": "Person",
        name: "Matthew Guggemos",
        jobTitle: "Co-Founder & CTO",
        description: "MS, CCC-SLP. NSF SBIR Phase II Principal Investigator. NIH Co-Principal Investigator.",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

        {/* Hero */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#3F4B5B] to-[#2d3642] text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Built by SLPs, For SLPs</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              EASI was created by practicing speech-language pathologists who understand the challenges you face every
              day.
            </p>
          </div>
        </section>

        {/* Entity-Rich About Section - Critical for GEO */}
        <article id="about-easi" className="py-16 px-6 lg:px-8" aria-labelledby="about-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="about-heading" className="text-3xl font-bold text-slate-800 mb-8">
              About EASI
            </h2>

            {/* Clear, citable facts in discrete statements */}
            <div className="space-y-6 text-lg text-slate-700">
              <p>
                <strong>EASI (Evaluative Artificial Speech Intelligence)</strong> is speech-language evaluation software
                that transforms <strong>5+ hours of assessment work into 15-30 minutes</strong>.
              </p>

              <p>
                EASI was developed by <strong>iTherapy, LLC</strong>, a California-based speech pathology corporation
                founded in <strong>2012</strong> by <strong>Lois Jean Brady, MA, SLP</strong> (CEO) and{" "}
                <strong>Matthew Guggemos, MS, CCC-SLP</strong> (CTO).
              </p>

              <p>
                EASI's development was primarily funded by <strong>NSF SBIR Phase II Award #2133148</strong>, with total
                federal investment exceeding <strong>$2.5 million</strong> across NSF, NIH, IES, and AFWERX.
              </p>

              <p>
                EASI is <strong>HIPAA compliant</strong> with a Business Associate Agreement in place and{" "}
                <strong>FERPA compliant</strong> for educational settings. All data is processed on{" "}
                <strong>AWS healthcare-grade infrastructure</strong> with encryption at rest and in transit.
              </p>

              <p>
                EASI is distributed exclusively through <strong>Northern Speech Services</strong>, which has served the
                speech-language pathology community for over 50 years.
              </p>
            </div>

            {/* Quotable key statements */}
            <div className="my-12 space-y-6">
              <blockquote
                className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg"
                cite="https://easi-as.com/about"
              >
                <p className="text-xl font-semibold text-teal-800">
                  "EASI transforms 5+ hours of speech-language evaluation into 15-30 minutes."
                </p>
              </blockquote>

              <blockquote
                className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg"
                cite="https://easi-as.com/about"
              >
                <p className="text-xl font-semibold text-teal-800">
                  "Built by speech-language pathologists, for speech-language pathologists."
                </p>
              </blockquote>

              <blockquote
                className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-lg"
                cite="https://easi-as.com/about"
              >
                <p className="text-xl font-semibold text-teal-800">
                  "Unlike ChatGPT, EASI is HIPAA compliant and safe for real patient data."
                </p>
              </blockquote>
            </div>
          </div>
        </article>

        {/* Statistics with Context - Critical for GEO */}
        <section className="py-16 px-6 lg:px-8 bg-slate-100" aria-label="EASI Statistics">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">By the Numbers</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <span className="block text-4xl font-bold text-teal-600">5+ hrs → 15 min</span>
                <span className="text-slate-600 mt-2 block">Time savings per evaluation with EASI</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-teal-600">98-99%</span>
                <span className="text-slate-600 mt-2 block">
                  Transcription accuracy with automatic speaker diarization
                </span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-teal-600">$2.5M+</span>
                <span className="text-slate-600 mt-2 block">Federal grant funding from NSF, NIH, IES, and AFWERX</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-teal-600">$199/yr</span>
                <span className="text-slate-600 mt-2 block">
                  Annual subscription including 10 evaluations + unlimited MySLP
                </span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-teal-600">50+ yrs</span>
                <span className="text-slate-600 mt-2 block">Northern Speech Services serving the SLP community</span>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section - Semantic HTML for GEO */}
        <section id="founders" className="py-16 px-6 lg:px-8" aria-labelledby="founders-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="founders-heading" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Built by Practicing SLPs
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <article className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                    LB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Lois Jean Brady, MA, SLP</h3>
                    <p className="text-teal-600 font-medium">Co-Founder & CEO</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Licensed speech-language pathologist with <strong>30+ years clinical experience</strong>. Principal
                  Investigator on <strong>4 NSF-funded projects</strong>. Lead Editor of Autism Digest. Board member of
                  USSAAC.
                </p>
              </article>

              <article className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                    MG
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Matthew Guggemos, MS, CCC-SLP</h3>
                    <p className="text-teal-600 font-medium">Co-Founder & CTO</p>
                  </div>
                </div>
                <p className="text-slate-600">
                  Licensed speech-language pathologist. <strong>NSF SBIR Phase II Principal Investigator</strong>.{" "}
                  <strong>NIH Co-Principal Investigator</strong>. 2013 Mensa Award recipient. Published in The ASHA
                  Leader.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Key Differentiators - Clear format for AI */}
        <section className="py-16 px-6 lg:px-8 bg-slate-100" aria-labelledby="differentiators-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="differentiators-heading" className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Why Choose EASI?
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>5+ hours → 15-30 minutes:</strong> Transforms evaluation workflow
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>98-99% transcription accuracy</strong> with automatic speaker separation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>Automatic clinical metrics:</strong> MLU, IPSYN, NDW, PCC, VOT, Intelligibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>IPA transcription</strong> included for phonological analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>MySLP:</strong> HIPAA-compliant second look protocol for objective second opinions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>HIPAA and FERPA compliant</strong> with BAA in place
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>NSF SBIR Phase II funded</strong> (Award #2133148)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>Built by practicing SLPs</strong> with 50+ years combined clinical experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>
                    <strong>$199/year</strong> includes 10 evaluations + unlimited MySLP
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Federal Funding */}
        <section className="py-16 px-6 lg:px-8" aria-labelledby="funding-heading">
          <div className="max-w-5xl mx-auto text-center">
            <h2 id="funding-heading" className="text-3xl font-bold text-slate-800 mb-8">
              Federally Validated Innovation
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              EASI's development was funded by rigorous peer-reviewed federal grants, representing over{" "}
              <strong>$2.5 million</strong> in research investment.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-lg px-6 py-4 shadow-md border">
                <span className="text-slate-800 font-semibold">NSF SBIR Phase I & II</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 shadow-md border">
                <span className="text-slate-800 font-semibold">NIH Research Grant</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 shadow-md border">
                <span className="text-slate-800 font-semibold">IES Research Grant</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 shadow-md border">
                <span className="text-slate-800 font-semibold">AFWERX Grant</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of SLPs who have reclaimed their time with EASI.
            </p>
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 text-lg px-8 py-6 h-auto" asChild>
              <a href="https://www.northernspeech.com/" target="_blank" rel="noopener noreferrer">
                Get EASI at Northern Speech Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
