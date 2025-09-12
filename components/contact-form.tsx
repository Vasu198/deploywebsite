"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "",
    currentRevenue: "",
    challenges: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={ref} className="py-24 px-6 relative bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-black">AI Growth Discovery Form</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-black font-semibold">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-semibold">Business Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Enter your business name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-semibold">Contact Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-semibold">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-semibold">Business Industry *</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  >
                    <option value="">Select Your Industry</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="coaching">Coaching</option>
                    <option value="saas">SaaS</option>
                    <option value="realestate">Real Estate</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="local">Local Business</option>
                    <option value="professional">Professional Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-semibold">Current Monthly Revenue *</label>
                  <select
                    name="currentRevenue"
                    value={formData.currentRevenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                  >
                    <option value="">Select Revenue Range</option>
                    <option value="0-1l">₹0 - ₹1 Lakh</option>
                    <option value="1l-5l">₹1 - ₹5 Lakh</option>
                    <option value="5l-10l">₹5 - ₹10 Lakh</option>
                    <option value="10l-50l">₹10 - ₹50 Lakh</option>
                    <option value="50l+">₹50 Lakh+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-black font-semibold">What are your top 3 advertising challenges? *</label>
                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                  placeholder="Describe your main advertising challenges..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
              >
                Submit My Business Details & Get My AI Growth Plan
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
