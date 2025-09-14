"use client"

import type React from "react"
import GlassHeader from "../../components/glass-header"
import Footer from "../../components/footer"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [] as string[],
    message: "",
    budget: "",
    newsletter: false,
    privacy: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    "AI-Powered Advertising",
    "Performance Analytics",
    "Creative Optimization",
    "Marketing Automation",
    "Multi-Platform Management",
    "Strategic Consulting",
  ]

  const budgetOptions = [
    "₹5,000 - ₹10,000",
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹100,000",
    "₹100,000+",
  ]

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Handle form submission here
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 flex items-center justify-center px-4 pt-24 sm:pt-32">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">We'll get back to you within 24 hours.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-24 sm:pt-32">
      {/* Header Section */}
      <GlassHeader />

      {/* Hero Section */}
      <div className="pt-8 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Good things happen when you say{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent italic">
              hey.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Ready to transform your advertising with AI? Let's discuss how we can help you achieve better results.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-white/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-white/50"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">I am interested in:</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <motion.label
                        key={service}
                        className="flex items-center space-x-3 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-5 h-5 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-white/50"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your project</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors bg-white/50 resize-none"
                    placeholder="Describe your goals, challenges, and what you'd like to achieve..."
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData((prev) => ({ ...prev, newsletter: e.target.checked }))}
                      className="w-5 h-5 text-amber-500 border-gray-300 rounded focus:ring-amber-500 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      I'm happy to receive a monthly newsletter with AI advertising insights
                    </span>
                  </label>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacy}
                      onChange={(e) => setFormData((prev) => ({ ...prev, privacy: e.target.checked }))}
                      className="w-5 h-5 text-amber-500 border-gray-300 rounded focus:ring-amber-500 mt-0.5"
                    />
                    <span className="text-sm text-gray-600">
                      I understand that my data will be securely held in accordance with the privacy policy *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Offices</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                    New Delhi
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    AI Ad Service
                    <br />
                    MB 17 Master Block
                    <br />
                    Shakarpur , Nirman Vihar
                    <br />
                    New Delhi, Delhi 110092
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                    Aligarh
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    AI Ad Service
                    <br />
                    Prabhat Nagar
                    <br />
                    Dhanipur Mandi
                    <br />
                    House no.420
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-gray-600 hover:text-amber-600 transition-colors">
                      +91 7017623747
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">General</p>
                    <a
                      href="mailto:hello@aiadservices.com"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      hello@aiadservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">New Business</p>
                    <a
                      href="mailto:newbiz@aiadservices.com"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      newbiz@aiadservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">Careers</p>
                    <a
                      href="mailto:careers@aiadservices.com"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      careers@aiadservices.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-2">Quick Response</h3>
              <p className="text-amber-100 text-sm">
                Need immediate assistance? We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
