"use client"

import { motion } from "framer-motion"
import { GlassHeader } from "@/components/glass-header"
import { Footer } from "@/components/footer"
import {
  CheckCircle,
  Rocket,
  CreditCard,
  User,
  Lock,
  Shield,
  Scale,
  Link,
  XCircle,
  Building,
  Phone,
} from "lucide-react"

const termsData = [
  {
    id: 1,
    title: "Acceptance of Terms",
    icon: CheckCircle,
    content:
      "By visiting our website or purchasing our services, you confirm that you have read, understood, and agree to be legally bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    id: 2,
    title: "Services Provided",
    icon: Rocket,
    content:
      "AI Ad Service offers: Website design and development, Digital marketing campaigns (Google Ads, Meta Ads, SEO, etc.), AI & automation solutions, Analytics and reporting. We reserve the right to modify, discontinue, or update services at any time without prior notice.",
  },
  {
    id: 3,
    title: "Payments & Billing",
    icon: CreditCard,
    content:
      "All fees must be paid in full as per the agreed package or contract. Payments are processed securely through trusted gateways. Delayed or incomplete payments may result in suspension or termination of services. Fees paid are generally non-refundable, except in cases explicitly mentioned in a written agreement.",
  },
  {
    id: 4,
    title: "Client Responsibilities",
    icon: User,
    content:
      "Clients must provide: Accurate and complete information for campaigns, websites, or automation setup. Access to required accounts/platforms (Google Ads, Meta, Hosting, etc.). Timely approvals and responses for smooth project execution. AI Ad Service will not be held responsible for delays or performance issues caused by incomplete information or late approvals from the client's side.",
  },
  {
    id: 5,
    title: "Intellectual Property",
    icon: Lock,
    content:
      "All content, designs, and creatives developed by AI Ad Service remain our intellectual property until full payment is received. After payment, ownership rights of final deliverables are transferred to the client (unless otherwise agreed). Clients must not resell, reproduce, or misuse our proprietary content, templates, or strategies without written consent.",
  },
  {
    id: 6,
    title: "Confidentiality",
    icon: Shield,
    content:
      "We respect your business privacy. Any information, data, or strategies shared with us will be treated as confidential and will not be disclosed to third parties, except as required by law or to deliver the agreed services.",
  },
  {
    id: 7,
    title: "Limitation of Liability",
    icon: Scale,
    content:
      "AI Ad Service is not responsible for indirect, incidental, or consequential losses arising from the use of our services. While we aim for the best results, we do not guarantee specific sales, rankings, or outcomes, as marketing results depend on multiple external factors beyond our control.",
  },
  {
    id: 8,
    title: "Third-Party Tools & Platforms",
    icon: Link,
    content:
      "Our services may involve third-party tools (Google, Meta, WhatsApp Business API, etc.). AI Ad Service is not responsible for any downtime, errors, or changes in policies by these third-party providers.",
  },
  {
    id: 9,
    title: "Termination of Services",
    icon: XCircle,
    content:
      "We reserve the right to suspend or terminate services if: Payments are not made on time, Terms are violated, The client engages in unlawful, harmful, or unethical activities. Clients may also discontinue services by providing written notice (as per agreed contract terms).",
  },
  {
    id: 10,
    title: "Governing Law & Jurisdiction",
    icon: Building,
    content:
      "These Terms & Conditions are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts located in India.",
  },
  {
    id: 11,
    title: "Contact Us",
    icon: Phone,
    content:
      "If you have questions about these Terms & Conditions, please contact us: Phone: +91 7017623747, Email: support@aiadservice.com",
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60">
      <GlassHeader />

      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-yellow-100/30 to-orange-100/50" />
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200/30 to-orange-200/25 rounded-full blur-3xl"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-200/50 text-amber-800 text-sm font-medium border border-amber-300">
              <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
              Legal Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black leading-tight">
              Terms &
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Clear, transparent terms that protect both you and AI Ad Service. All sections are displayed below for
              easy reading.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {termsData.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-center">
                      <section.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">
                        {section.id}. {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="pl-20">
                    <div className="p-6 bg-amber-50/50 rounded-lg border-l-4 border-amber-500">
                      <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-amber-50 mb-6 max-w-2xl mx-auto">
                By using our services, you agree to these terms. Have questions? We're here to help clarify anything you
                need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors shadow-lg"
                >
                  Contact Us
                </a>
                <a
                  href="/"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
