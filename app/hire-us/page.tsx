"use client"
import GlassHeader from "../../components/glass-header"
import Footer from "../../components/footer"
import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

const serviceOptions = [
  "A new website",
  "Branding",
  "Motion graphics",
  "E-Commerce",
  "Development",
  "On-going support",
  "App from scratch",
]

export default function HireUsPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
    newsletter: false,
    privacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const toggleService = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset previous errors
    setErrors({})

    // Validate required fields
    const newErrors: { [key: string]: string } = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.email.includes("@")) newErrors.email = "Please enter a valid email"
    if (selectedServices.length === 0) newErrors.services = "Please select at least one service"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      const submissionData = {
        ...formData,
        services: selectedServices,
        timestamp: new Date().toISOString(),
      }

      console.log("Form submitted successfully:", submissionData)

      setSubmitStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          budget: "",
          message: "",
          newsletter: false,
          privacy: false,
        })
        setSelectedServices([])
        setSubmitStatus("idle")
      }, 6000)
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60 p-6 pt-24 sm:pt-32">
      <GlassHeader />

      {/* Enhanced warm background to match hero section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          {/* Animated floating shapes with warm colors */}
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
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-orange-300/30 to-amber-300/25 rounded-full blur-2xl"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 lg:p-12 bg-gray-900 rounded-3xl border border-orange-200/20 shadow-2xl shadow-black/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 rounded-3xl pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {/* Service Selection */}
            <div className="space-y-6">
              <h2 className="text-3xl font-medium text-white">I am interested in:</h2>
              <div className="flex flex-wrap gap-3">
                {serviceOptions.map((service) => {
                  const isSelected = selectedServices.includes(service)
                  const buttonClasses = isSelected
                    ? "px-6 py-3 rounded-full border-2 transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-transparent"
                    : "px-6 py-3 rounded-full border-2 transition-all duration-300 bg-transparent text-white border-white/40 hover:border-yellow-400/80 hover:text-yellow-300"

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={buttonClasses}
                    >
                      {service}
                    </button>
                  )
                })}
              </div>
              {errors.services && <p className="text-red-400 text-sm mt-2">{errors.services}</p>}
            </div>

            {/* Form Fields */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-white font-medium text-lg">First name*</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={
                    errors.firstName
                      ? "w-full bg-transparent border-b-2 text-white placeholder-white/50 py-4 focus:outline-none transition-colors text-lg border-red-400 focus:border-red-400"
                      : "w-full bg-transparent border-b-2 text-white placeholder-white/50 py-4 focus:outline-none transition-colors text-lg border-white/40 focus:border-yellow-400"
                  }
                />
                {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-white font-medium text-lg">Last name*</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={
                    errors.lastName
                      ? "w-full bg-transparent border-b-2 text-white placeholder-white/50 py-4 focus:outline-none transition-colors text-lg border-red-400 focus:border-red-400"
                      : "w-full bg-transparent border-b-2 text-white placeholder-white/50 py-4 focus:outline-none transition-colors text-lg border-white/40 focus:border-yellow-400"
                  }
                />
                {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-white font-medium text-lg">Email*</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={
                    errors.email
                      ? "w-full bg-transparent border-b-2 text-white placeholder-white/50 py-4 focus:outline-none transition-colors text-lg border-red-400 focus:border-red-400"
                      : "w-full bg-transparent border-b-2 text-white placeholder-white/50 py-4 focus:outline-none transition-colors text-lg border-white/40 focus:border-yellow-400"
                  }
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-white font-medium text-lg">Budget (₹)</label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-4 focus:border-yellow-400 focus:outline-none transition-colors text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white font-medium text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                  Attachments
                </label>
                <div className="w-full bg-transparent border-b-2 border-white/40 py-4">
                  <input
                    type="file"
                    multiple
                    className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-yellow-500 file:to-orange-500 file:text-black hover:file:from-yellow-400 hover:file:to-orange-400"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-white font-medium text-lg">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/50 py-4 focus:border-yellow-400 focus:outline-none transition-colors resize-none text-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-12">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={
                  isSubmitting
                    ? "px-12 py-4 rounded-full font-semibold text-xl transition-all flex items-center gap-3 bg-gray-500 text-gray-300 cursor-not-allowed"
                    : "px-12 py-4 rounded-full font-semibold text-xl transition-all flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400 shadow-lg"
                }
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </motion.button>
            </div>

            {/* Confirmation Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-6 bg-green-500/20 border border-green-400/30 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 text-green-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg font-medium">Thank you! Your message has been sent successfully.</span>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-6 bg-red-500/20 border border-red-400/30 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 text-red-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg font-medium">Something went wrong. Please try again.</span>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
