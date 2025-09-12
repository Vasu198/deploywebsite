"use client"

import { GlassHeader } from "@/components/glass-header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Users, FileText, Phone, Mail, CheckCircle, Globe, Database, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function PrivacyPage() {
  const privacySections = [
    {
      id: "collection",
      icon: Eye,
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We collect information to provide better services to our users. This includes:
          </p>
          <div className="grid gap-4">
            {[
              {
                title: "Personal Information",
                desc: "Name, email, phone number, and business details when you contact us",
              },
              { title: "Payment Information", desc: "Securely processed through trusted payment gateways" },
              { title: "Usage Analytics", desc: "Website behavior, IP address, browser type, and device information" },
              { title: "Communication Data", desc: "Emails, messages, and inquiries through our platforms" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "usage",
      icon: Users,
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">Your information helps us deliver exceptional service:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Provide and improve our AI advertising services",
              "Respond to inquiries and provide customer support",
              "Process payments securely and efficiently",
              "Send updates and marketing communications (with consent)",
              "Analyze performance to enhance user experience",
              "Ensure platform security and prevent fraud",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-200">
                <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "security",
      icon: Lock,
      title: "Data Protection & Security",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-amber-600" />
              <h4 className="font-bold text-gray-900">Our Security Promise</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-leading security measures to protect your data with the same standards used by major
              financial institutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Lock, title: "SSL Encryption", desc: "All data transmitted with 256-bit encryption" },
              { icon: Database, title: "Secure Storage", desc: "Data stored in SOC 2 compliant data centers" },
              { icon: UserCheck, title: "Access Control", desc: "Strict employee access controls and monitoring" },
              { icon: Shield, title: "Regular Audits", desc: "Continuous security assessments and updates" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-lg border border-amber-200 hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="w-5 h-5 text-amber-600" />
                  <h5 className="font-semibold text-gray-900">{item.title}</h5>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "rights",
      icon: Shield,
      title: "Your Privacy Rights",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">You have complete control over your personal information:</p>
          <div className="space-y-3">
            {[
              "Access all personal information we hold about you",
              "Request correction of inaccurate or incomplete data",
              "Request deletion of your data (subject to legal obligations)",
              "Opt-out of marketing communications at any time",
              "Data portability - receive your data in a structured format",
              "Object to processing for legitimate interests",
            ].map((right, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{idx + 1}</span>
                </div>
                <span className="text-gray-700">{right}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "cookies",
      icon: Globe,
      title: "Cookies & Tracking",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience and analyze website performance.
          </p>
          <div className="bg-white p-4 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-gray-900 mb-2">Cookie Categories:</h5>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  <strong>Essential:</strong> Required for basic website functionality
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>
                  <strong>Analytics:</strong> Help us understand how you use our site
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>
                  <strong>Marketing:</strong> Used to show relevant advertisements
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "updates",
      icon: FileText,
      title: "Policy Updates",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h5 className="font-semibold text-gray-900 mb-2">When we update our policy:</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• We'll post the updated policy on this page</li>
              <li>• We'll update the "Last Updated" date</li>
              <li>• For significant changes, we'll notify you via email</li>
              <li>• You'll have 30 days to review changes before they take effect</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60">
      <GlassHeader />

      <main className="pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-300">
                  <Shield className="w-16 h-16 text-amber-600" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 text-balance">
              Privacy{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty leading-relaxed mb-4">
              Your privacy is important to us. We're committed to protecting your personal information and being
              transparent about how we collect, use, and safeguard your data.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span>Last Updated: December 15, 2024</span>
            </div>
          </motion.div>

          <div className="space-y-8 mb-16">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-200">
                      <section.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">{section.title}</h3>
                  </div>
                  <div className="pl-16">{section.content}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 border border-amber-300 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-200 rounded-2xl">
                <Phone className="w-8 h-8 text-amber-700" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">Questions About Your Privacy?</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Our privacy team is here to help. Contact us anytime with questions about your data or this policy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-xl border border-amber-200">
                <Phone className="w-5 h-5 text-amber-600" />
                <span className="text-black font-medium">+91 7017623747</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-xl border border-amber-200">
                <Mail className="w-5 h-5 text-amber-600" />
                <span className="text-black font-medium">privacy@aiadservice.com</span>
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/contact">Contact Privacy Team</a>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
