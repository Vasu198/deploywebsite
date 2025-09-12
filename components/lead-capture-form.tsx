"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  website: string
  budget: string
  message: string
}

interface FormVariant {
  title: string
  subtitle: string
  buttonText: string
  icon: string
  fields: (keyof FormData)[]
}

const formVariants: Record<string, FormVariant> = {
  marketing: {
    title: "Get Your Free Marketing Plan",
    subtitle: "Discover how AI can transform your marketing strategy and boost ROI",
    buttonText: "Get My Free Marketing Plan ⚡",
    icon: "📈",
    fields: ["name", "email", "phone", "company", "budget", "message"],
  },
  project: {
    title: "Start Your Project Today",
    subtitle: "Let's build something amazing together with cutting-edge technology",
    buttonText: "Start My Project ⚡",
    icon: "🚀",
    fields: ["name", "email", "phone", "company", "website", "budget", "message"],
  },
  consultation: {
    title: "Get Free AI Consultation",
    subtitle: "Unlock the power of AI for your business with expert guidance",
    buttonText: "Book My AI Consultation ⚡",
    icon: "🤖",
    fields: ["name", "email", "phone", "company", "message"],
  },
  audit: {
    title: "Get Free Analytics Audit",
    subtitle: "Discover hidden insights in your data and optimize performance",
    buttonText: "Get My Free Audit ⚡",
    icon: "📊",
    fields: ["name", "email", "phone", "company", "website", "message"],
  },
}

const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,000,000",
  "₹10,000,000+",
]

const fieldLabels: Record<keyof FormData, string> = {
  name: "Full Name *",
  email: "Email Address *",
  phone: "Phone Number",
  company: "Company Name",
  website: "Website URL",
  budget: "Project Budget",
  message: "Tell us about your project *",
}

interface LeadCaptureFormProps {
  variant: keyof typeof formVariants
  isOpen: boolean
  onClose: () => void
}

export default function LeadCaptureForm({ variant, isOpen, onClose }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    budget: "",
    message: "",
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [focusedFields, setFocusedFields] = useState<Set<keyof FormData>>(new Set())
  const modalRef = useRef<HTMLDivElement>(null)

  const currentVariant = formVariants[variant]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const validateField = (field: keyof FormData, value: string): string | null => {
    switch (field) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : null
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? "Please enter a valid email address" : null
      case "phone":
        const phoneRegex = /^[+]?[\d\s\-()]{10,}$/
        return value && !phoneRegex.test(value) ? "Please enter a valid phone number" : null
      default:
        return null
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    const error = validateField(field, value)
    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newErrors: Partial<FormData> = {}
    const requiredFields = currentVariant.fields.filter((field) => fieldLabels[field].includes("*"))

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${fieldLabels[field].replace(" *", "")} is required`
      } else {
        const error = validateField(field, formData[field])
        if (error) newErrors[field] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  const handleFocus = (field: keyof FormData) => {
    setFocusedFields((prev) => new Set(prev).add(field))
  }

  const handleBlur = (field: keyof FormData) => {
    if (!formData[field]) {
      setFocusedFields((prev) => {
        const newSet = new Set(prev)
        newSet.delete(field)
        return newSet
      })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 pb-8 px-4 bg-black/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      <div ref={modalRef} className="relative w-full max-w-2xl animate-in zoom-in-95 duration-300">
        <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-orange-50/80 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl shadow-orange-500/10">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 hover:bg-white/90 border border-gray-200/50 transition-all duration-300 hover:scale-110 hover:rotate-90 z-10 group"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center mb-8">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-full animate-pulse opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-3xl shadow-lg shadow-orange-500/30 transform hover:scale-110 transition-transform duration-300">
                {currentVariant.icon}
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-orange-800 bg-clip-text text-transparent mb-3">
              {currentVariant.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">{currentVariant.subtitle}</p>
          </div>

          {isSuccess && (
            <div className="text-center py-12 animate-in zoom-in duration-500">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
                  ✅
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You! 🎉</h3>
              <p className="text-gray-600 text-lg">
                We've received your request and will get back to you within 24 hours.
              </p>
            </div>
          )}

          {!isSuccess && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {currentVariant.fields.map((field) => (
                  <div key={field} className={field === "message" ? "md:col-span-2" : ""}>
                    {field === "budget" ? (
                      <div className="relative group">
                        <label
                          className={`absolute left-6 transition-all duration-300 pointer-events-none z-10 ${
                            formData[field] || focusedFields.has(field)
                              ? "-top-3 left-4 text-sm bg-white/90 px-2 rounded-full text-orange-600 font-medium"
                              : "top-4 text-gray-500"
                          }`}
                        >
                          {fieldLabels[field]}
                        </label>
                        <select
                          value={formData[field]}
                          onChange={(e) => handleInputChange(field, e.target.value)}
                          onFocus={() => handleFocus(field)}
                          onBlur={() => handleBlur(field)}
                          className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-white/80 focus:scale-[1.02] hover:bg-white/70 appearance-none ${
                            errors[field]
                              ? "border-red-300 focus:border-red-400 shadow-red-100"
                              : "border-gray-200/60 hover:border-orange-300 focus:border-orange-400 focus:shadow-orange-100"
                          } shadow-lg hover:shadow-xl focus:shadow-2xl`}
                        >
                          <option value="" disabled hidden></option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    ) : field === "message" ? (
                      <div className="relative group">
                        <textarea
                          value={formData[field]}
                          onChange={(e) => handleInputChange(field, e.target.value)}
                          onFocus={() => handleFocus(field)}
                          onBlur={() => handleBlur(field)}
                          rows={4}
                          className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-white/80 focus:scale-[1.02] hover:bg-white/70 resize-none ${
                            errors[field]
                              ? "border-red-300 focus:border-red-400 shadow-red-100"
                              : "border-gray-200/60 hover:border-orange-300 focus:border-orange-400 focus:shadow-orange-100"
                          } shadow-lg hover:shadow-xl focus:shadow-2xl`}
                          placeholder=""
                        />
                        <label
                          className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                            formData[field] || focusedFields.has(field)
                              ? "-top-3 left-4 text-sm bg-white/90 px-2 rounded-full text-orange-600 font-medium"
                              : "top-4 text-gray-500"
                          }`}
                        >
                          {fieldLabels[field]}
                        </label>
                      </div>
                    ) : (
                      <div className="relative group">
                        <input
                          type={
                            field === "email"
                              ? "email"
                              : field === "phone"
                                ? "tel"
                                : field === "website"
                                  ? "url"
                                  : "text"
                          }
                          value={formData[field]}
                          onChange={(e) => handleInputChange(field, e.target.value)}
                          onFocus={() => handleFocus(field)}
                          onBlur={() => handleBlur(field)}
                          className={`w-full px-6 py-4 bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 focus:outline-none focus:bg-white/80 focus:scale-[1.02] hover:bg-white/70 ${
                            errors[field]
                              ? "border-red-300 focus:border-red-400 shadow-red-100"
                              : "border-gray-200/60 hover:border-orange-300 focus:border-orange-400 focus:shadow-orange-100"
                          } shadow-lg hover:shadow-xl focus:shadow-2xl`}
                          placeholder=""
                        />
                        <label
                          className={`absolute left-6 transition-all duration-300 pointer-events-none ${
                            formData[field] || focusedFields.has(field)
                              ? "-top-3 left-4 text-sm bg-white/90 px-2 rounded-full text-orange-600 font-medium"
                              : "top-4 text-gray-500"
                          }`}
                        >
                          {fieldLabels[field]}
                        </label>
                      </div>
                    )}

                    {errors[field] && (
                      <div className="mt-3 text-sm text-red-600 flex items-center animate-in slide-in-from-left duration-300">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2">
                          <span className="text-xs">⚠️</span>
                        </div>
                        {errors[field]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-5 px-8 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>{currentVariant.buttonText}</span>
                        <svg
                          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 flex items-center justify-center bg-gray-50/50 rounded-xl py-3 px-4 backdrop-blur-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Your information is secure and never shared</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
