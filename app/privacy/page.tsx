import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield,
  Lock,
  FileText,
  Users,
  AlertTriangle,
  Database,
  Server,
  CheckCircle,
  ArrowLeft,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy & Security Policies | EASI - HIPAA & FERPA Compliant",
  description:
    "Comprehensive information security and privacy policies for EASI. HIPAA compliant with BAA. FERPA compliant. NIST CSF 2.0 aligned. Built by SLPs for speech-language pathologists. NSF SBIR Phase II funded.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy & Security Policies | EASI",
    description:
      "HIPAA and FERPA compliant security framework. NIST CSF 2.0 aligned. Protecting student data and PHI with healthcare-grade infrastructure.",
    url: "https://easi-as.com/privacy",
    siteName: "EASI",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-[#3F4B5B] text-white py-8">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">
            Information Security and Privacy Policies
          </h1>
          <p className="text-white/70">
            Comprehensive security framework protecting student data and ensuring compliance with federal and state
            education privacy laws
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/60">
            <span>Effective Date: 11/18/2025</span>
            <span>|</span>
            <span>Last Reviewed: 11/18/2025</span>
            <span>|</span>
            <span>Next Review: 5/18/2026</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Quick Contact */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[#3F4B5B] mb-1">Need to contact our Privacy Officer?</h2>
            <p className="text-gray-600 text-sm">
              For questions about Student Data privacy, FERPA compliance, or policy interpretation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-100 bg-transparent"
            >
              <a href="mailto:admin@itherapyllc.com">
                <Mail className="w-4 h-4 mr-2" />
                admin@itherapyllc.com
              </a>
            </Button>
            <Button asChild variant="outline" className="border-red-200 text-red-700 hover:bg-red-100 bg-transparent">
              <a href="mailto:admin@itherapyllc.com?subject=Security Incident Report">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Security Incident
              </a>
            </Button>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
          <h2 className="text-lg font-semibold text-[#3F4B5B] mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            {[
              "1. Enterprise-Wide Computer Network Security Policy",
              "2. Employee Information Security Training",
              "3. Formal Privacy Policy",
              "4. Customer Opt-Out Preferences",
              "5. Transmission of Sensitive Information",
              "6. Data Classification, Retention & Disposal",
              "7. Security Incident Response Plan",
              "8-12. Incident Response Procedures",
              "13-14. Student Data Incident Considerations",
              "15. Access Control & Authentication",
              "16. Physical & Environmental Security",
              "17. Third-Party & Vendor Management",
              "18. Business Continuity & Disaster Recovery",
              "19. Compliance Monitoring & Audit",
              "20. NIST Cybersecurity Framework Alignment",
            ].map((item, i) => (
              <a key={i} href={`#section-${i + 1}`} className="text-blue-600 hover:text-blue-800 hover:underline py-1">
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Section 1 */}
        <section id="section-1" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Server className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">
              1. Enterprise-Wide Computer Network and Information Security Policy
            </h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Purpose</h3>
            <p className="text-gray-600">
              To establish consistent and secure standards for iTherapy's computer networks and information systems,
              applicable to all employees, independent contractors, and third-party vendors, protecting both company and
              client data in compliance with federal and state education privacy laws including FERPA, COPPA, and
              state-specific student data privacy statutes.
            </p>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Policy</h3>
            <p className="text-gray-600">
              iTherapy maintains a comprehensive information security policy that outlines protocols to safeguard data,
              including requirements for network access, device security, and handling of sensitive information
              including Student Data as defined under Education Law § 2-d and equivalent state statutes.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Data Encryption</h4>
                <p className="text-sm text-gray-600">AES-256 at rest via AWS KMS and TLS 1.2 or higher in transit</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Password Security</h4>
                <p className="text-sm text-gray-600">Minimum 12 characters, complexity requirements, 90-day rotation</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Multi-Factor Authentication</h4>
                <p className="text-sm text-gray-600">
                  Required for all administrative access and systems containing Student Data or PHI
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Access Control</h4>
                <p className="text-sm text-gray-600">Role-based access control ensuring least-privilege access</p>
              </div>
            </div>

            <h4 className="text-md font-medium text-[#3F4B5B] mt-6">Infrastructure Standards</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>All production systems operate on AWS infrastructure with FedRAMP authorization</li>
              <li>HIPAA Business Associate Agreement (BAA) in place with AWS for Bedrock services</li>
              <li>Multi-AZ deployment for high availability</li>
              <li>Regular security patching within 30 days of critical vulnerability disclosure</li>
              <li>Automatic session timeout after 30 minutes of inactivity</li>
              <li>Audit logging of all access to systems containing Student Data or PHI</li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">2. Employee Information Security Training</h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Purpose</h3>
            <p className="text-gray-600">
              To ensure that all employees and contractors understand their specific responsibilities in maintaining
              information security within their roles, with particular emphasis on the protection of Student Data and
              compliance with FERPA, state education privacy laws, and HIPAA where applicable.
            </p>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Training Topics</h3>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {[
                { title: "FERPA Requirements", desc: "School official responsibilities and compliance obligations" },
                {
                  title: "State Privacy Laws",
                  desc: "State-specific student data privacy laws for states where we operate",
                },
                { title: "HIPAA Requirements", desc: "Handling Protected Health Information properly" },
                { title: "Threat Recognition", desc: "Identifying phishing attempts and social engineering" },
                { title: "Secure Data Transfer", desc: "Using secure channels for data transfer" },
                { title: "Incident Reporting", desc: "Procedures for reporting security incidents" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-[#3F4B5B] mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h4 className="text-md font-medium text-[#3F4B5B] mt-6">Training Requirements</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>New employees must complete security training within 7 days of starting employment</li>
              <li>Training required before being granted access to any systems containing Student Data or PHI</li>
              <li>Additional training provided within 30 days of identifying new threats</li>
              <li>All subcontractors must complete equivalent training before access is granted</li>
              <li>Training records maintained for a minimum of 7 years</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
              <h4 className="font-medium text-amber-800 mb-2">Reporting Requirements</h4>
              <p className="text-sm text-amber-700">
                Employees are required to report any suspected security incidents immediately (within 1 hour of
                discovery) to admin@itherapyllc.com or management. Failure to report incidents may result in
                disciplinary action.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">3. Formal Privacy Policy</h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Purpose</h3>
            <p className="text-gray-600">
              To establish iTherapy's commitment to protecting client, student, and employee personal information and to
              ensure compliance with legal standards including FERPA (34 CFR Part 99), COPPA (15 U.S.C. § 6501-6506),
              HIPAA (45 CFR Parts 160 and 164), and state-specific education privacy laws.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Data Minimization</h4>
                <p className="text-sm text-gray-600">
                  We collect only the minimum personal information necessary to provide contracted services. For Student
                  Data, this is limited to: student name, date of birth, sex/gender, and system-generated identifiers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Purpose Limitation</h4>
                <p className="text-sm text-gray-600">
                  Student Data is used exclusively for the educational services specified in our contracts with
                  Educational Agencies. We do not use Student Data for marketing or commercial purposes.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Transparency</h4>
                <p className="text-sm text-gray-600">
                  We maintain public-facing privacy notices and provide Educational Agencies with detailed descriptions
                  of our data practices.
                </p>
              </div>
            </div>

            <h4 className="text-md font-medium text-[#3F4B5B] mt-6">Student Data Specific Protections</h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Student Data is never sold, rented, leased, or traded to third parties</li>
              <li>Student Data is never used for targeted advertising</li>
              <li>
                Student Data is never used to develop commercial products beyond our contracted educational services
              </li>
              <li>
                Student Data retention is limited to the duration necessary to provide services (24-hour TTL for
                conversational data, deletion within 90 days of contract termination)
              </li>
              <li>
                Access to Student Data is restricted to employees and subcontractors with legitimate educational
                interest
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <Database className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">
              6. Data Classification, Retention, and Disposal Policy
            </h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Data Classification</h3>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              {[
                {
                  level: "Public",
                  desc: "Information intended for public distribution",
                  color: "bg-green-50 border-green-200",
                },
                {
                  level: "Internal",
                  desc: "Business information not intended for public distribution",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  level: "Confidential",
                  desc: "Sensitive business information requiring protection",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  level: "Highly Confidential",
                  desc: "Student Data, PHI, SSNs, or regulated information",
                  color: "bg-red-50 border-red-200",
                },
              ].map((item, i) => (
                <div key={i} className={`${item.color} border rounded-lg p-4`}>
                  <h4 className="font-medium text-[#3F4B5B] mb-1">{item.level}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Retention Periods</h3>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <h4 className="font-medium text-[#3F4B5B] mb-3">Student Data</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                <li>
                  <strong>Active Service Period:</strong> Retained for duration of contract with Educational Agency
                </li>
                <li>
                  <strong>Post-Contract:</strong> Deleted within 90 days of contract termination unless otherwise
                  specified
                </li>
                <li>
                  <strong>Conversational Data (ChatSLP):</strong> Automatic 24-hour deletion via DynamoDB TTL
                </li>
                <li>
                  <strong>Audit Logs:</strong> Retained for 7 years to comply with federal record-keeping requirements
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Disposal Procedures</h3>
            <p className="text-gray-600">
              Digital data disposal follows NIST SP 800-88 compliant methods including cryptographic erasure. Physical
              media undergoes destruction via shredding or degaussing. All disposal activities involving Student Data
              are logged and verified.
            </p>
          </div>
        </section>

        {/* Section 7 - Incident Response */}
        <section id="section-7" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">7. Formal Security Incident Response Plan (SIRP)</h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Scope</h3>
            <p className="text-gray-600">
              This plan applies to any security incident that may compromise the confidentiality, integrity, or
              availability of iTherapy information systems or data, including unauthorized access, malware infections,
              data breaches, denial of service attacks, physical security breaches, lost devices, and insider threats.
            </p>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Incident Response Team</h3>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <strong>Incident Response Coordinator:</strong> Matthew Guggemos (matthew@itherapyllc.com)
                </li>
                <li>
                  <strong>Privacy Officer:</strong> admin@itherapyllc.com
                </li>
                <li>
                  <strong>Extended Team:</strong> AWS Support, Forensics specialists, Law enforcement liaison (as
                  needed)
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Response Process</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  phase: "Detection & Analysis",
                  time: "Within 1 hour",
                  desc: "Incident Response Coordinator notified, preliminary assessment conducted",
                },
                {
                  phase: "Containment",
                  time: "Immediate",
                  desc: "Isolate affected systems, revoke credentials, block threats",
                },
                {
                  phase: "Eradication",
                  time: "As needed",
                  desc: "Remove malware, close vulnerabilities, verify complete removal",
                },
                {
                  phase: "Recovery",
                  time: "4-72 hours",
                  desc: "Restore from backups, verify integrity, resume operations",
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-[#3F4B5B]">{item.phase}</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Notification Requirements</h3>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <h4 className="font-medium text-amber-800 mb-2">
                Educational Agency Notification (for Student Data breaches)
              </h4>
              <ul className="list-disc pl-5 text-amber-700 space-y-1 text-sm">
                <li>
                  <strong>Timeline:</strong> Within 72 hours of confirmation that incident constitutes a breach
                </li>
                <li>
                  <strong>Content:</strong> Contact information, incident description, data types involved, number of
                  students affected, response actions taken
                </li>
                <li>
                  <strong>Parent Notification:</strong> Educational Agency maintains responsibility; iTherapy provides
                  information needed
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 15 - Access Control */}
        <section id="section-15" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Lock className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">15. Access Control and Authentication Policy</h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Authentication Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Password Standards</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>Minimum 12 characters</li>
                  <li>Must include uppercase, lowercase, numbers, and special characters</li>
                  <li>Cannot reuse last 5 passwords</li>
                  <li>Must be changed every 90 days</li>
                  <li>Account lockout after 5 failed attempts</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-[#3F4B5B] mb-2">Multi-Factor Authentication</h4>
                <p className="text-sm text-gray-600 mb-2">Required for:</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>All administrative access</li>
                  <li>Systems containing Student Data or PHI</li>
                  <li>Remote access to corporate network</li>
                  <li>AWS Management Console access</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Role-Based Access Control</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {[
                { role: "End User", desc: "Educational Agency personnel: Access only to their agency's data" },
                { role: "Clinical Support", desc: "Read-only access for customer support (with MFA)" },
                { role: "Developer", desc: "Access to development/staging environments only" },
                { role: "System Admin", desc: "Full production access (requires MFA and logging)" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-[#3F4B5B] mb-1">{item.role}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 20 - NIST Framework */}
        <section id="section-20" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">
              20. Alignment with NIST Cybersecurity Framework 2.0
            </h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              iTherapy's security program is designed to align with all six core functions of the NIST CSF 2.0 (February
              2024): Govern, Identify, Protect, Detect, Respond, and Recover.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {[
                {
                  title: "GOVERN (GV)",
                  color: "bg-purple-50 border-purple-200",
                  items: [
                    "Organizational Context",
                    "Risk Management Strategy",
                    "Roles & Responsibilities",
                    "Policy & Procedures",
                    "Oversight & Accountability",
                    "Supply Chain Risk Management",
                  ],
                },
                {
                  title: "IDENTIFY (ID)",
                  color: "bg-blue-50 border-blue-200",
                  items: ["Asset Management", "Business Environment", "Risk Assessment", "Improvement"],
                },
                {
                  title: "PROTECT (PR)",
                  color: "bg-green-50 border-green-200",
                  items: [
                    "Identity Management & Access Control",
                    "Awareness and Training",
                    "Data Security",
                    "Platform Security",
                    "Technology Infrastructure Resilience",
                  ],
                },
                {
                  title: "DETECT (DE)",
                  color: "bg-yellow-50 border-yellow-200",
                  items: ["Continuous Monitoring", "Adverse Event Analysis"],
                },
                {
                  title: "RESPOND (RS)",
                  color: "bg-orange-50 border-orange-200",
                  items: [
                    "Incident Management",
                    "Incident Analysis",
                    "Incident Response Reporting",
                    "Incident Mitigation",
                  ],
                },
                {
                  title: "RECOVER (RC)",
                  color: "bg-red-50 border-red-200",
                  items: ["Incident Recovery Plan Execution", "Incident Recovery Communication"],
                },
              ].map((section, i) => (
                <div key={i} className={`${section.color} border rounded-lg p-4`}>
                  <h4 className="font-medium text-[#3F4B5B] mb-3">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NDPA Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-slate-600" />
            </div>
            <h2 className="text-2xl font-semibold text-[#3F4B5B]">National Student Data Privacy Agreement (NDPA)</h2>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              iTherapy participates in the Student Data Privacy Consortium's National Data Privacy Agreement (NDPA)
              framework, supporting standardized data privacy agreements across multiple states.
            </p>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Supported States</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Massachusetts",
                "Maine",
                "Illinois",
                "Iowa",
                "Missouri",
                "Nebraska",
                "New Hampshire",
                "New Jersey",
                "New York",
                "Ohio",
                "Rhode Island",
                "Tennessee",
                "Vermont",
                "Virginia",
                "Washington",
              ].map((state) => (
                <span key={state} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {state}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-medium text-[#3F4B5B] mt-6">Key NDPA Provisions</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Provider acts as School Official with legitimate educational interest under FERPA</li>
              <li>Student Data remains property of the LEA</li>
              <li>No sale, rental, or trading of Student Data to third parties</li>
              <li>Prohibition on targeted advertising using Student Data</li>
              <li>Data breach notification within 72 hours</li>
              <li>Data disposition within 60-90 days of contract termination</li>
              <li>Annual audits available upon request</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h4 className="font-medium text-[#3F4B5B] mb-2">Request NDPA Documentation</h4>
              <p className="text-sm text-gray-600 mb-3">
                Educational agencies can request complete NDPA documentation including state-specific exhibits.
              </p>
              <Button asChild variant="outline">
                <a href="mailto:admin@itherapyllc.com?subject=NDPA Documentation Request">Request NDPA Documents</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Document Control */}
        <section className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold text-[#3F4B5B] mb-4">Document Control</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">
                <strong>Policy Owner:</strong> Matthew Guggemos, Chief Technology Officer and Privacy Officer
              </p>
              <p className="text-gray-600">
                <strong>Approval Authority:</strong> Executive Management and Legal Counsel
              </p>
              <p className="text-gray-600">
                <strong>Version:</strong> 2.0
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>Effective Date:</strong> November 18, 2025
              </p>
              <p className="text-gray-600">
                <strong>Last Review:</strong> November 18, 2025
              </p>
              <p className="text-gray-600">
                <strong>Next Scheduled Review:</strong> May 18, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section className="bg-[#3F4B5B] text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Commitment to Security and Trust</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            These policies are designed to protect iTherapy's information systems and client data while fostering a
            culture of security and trust with our Educational Agency partners. Security is everyone's responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              <a href="mailto:admin@itherapyllc.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact Privacy Officer
              </a>
            </Button>
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
              <a href="mailto:admin@itherapyllc.com?subject=Security Concern">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Security Concern
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
