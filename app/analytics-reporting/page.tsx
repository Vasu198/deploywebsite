"use client"
import GlassHeader from "../../components/glass-header"
import Footer from "../../components/footer"
import LeadCaptureModal from "../../components/lead-capture-modal"
import { motion } from "framer-motion"
import type React from "react"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const BarChart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2} />
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2} />
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2} />
  </svg>
)

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2} />
    <polyline points="17,6 23,6 23,12" strokeWidth={2} />
  </svg>
)

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
)

const Brain = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" strokeWidth={2} />
    <circle cx="20" cy="21" r="1" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
    />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    />
    <polyline points="22,6 12,13 2,6" strokeWidth={2} />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const FloatingParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const MouseInteractiveTexts = ({ texts, mouseX }: { texts: string[]; mouseX: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {texts.map((text, index) => {
        const baseX = 10 + ((index * 25) % 80)
        const baseY = 15 + ((index * 20) % 70)
        const offsetX = (mouseX - 0.5) * 30 * (index % 2 === 0 ? 1 : -1)
        const offsetY = (mouseX - 0.5) * 15 * (index % 3 === 0 ? 1 : -1)

        return (
          <motion.div
            key={index}
            className="absolute text-white/25 font-medium text-sm select-none whitespace-nowrap"
            style={{
              left: `${baseX + offsetX}%`,
              top: `${baseY + offsetY}%`,
            }}
            animate={{
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 3 + index * 0.3,
              delay: index * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {text}
          </motion.div>
        )
      })}
    </div>
  )
}

const whyAnalyticsMatters = [
  "Real-time campaign performance tracking",
  "Data-backed decisions instead of guesswork",
  "Transparent ROI reporting",
  "Insights on customer behavior & trends",
  "Predictive models for future growth",
]

const services = [
  {
    tag: "Web & Campaign Analytics",
    title: "Track Every Click & Conversion",
    description: "Google Analytics 4 setup, conversion tracking, and user behavior analysis.",
    icon: BarChart,
    features: [
      "Google Analytics 4 (GA4) setup & tracking",
      "Conversion rate & funnel analysis",
      "Heatmaps & user behavior tracking",
      "Real-time traffic & engagement insights",
    ],
    floatingTexts: [
      "GA4 Setup",
      "Conversion Tracking",
      "User Behavior",
      "Real-time Data",
      "Traffic Analysis",
      "Engagement",
    ],
  },
  {
    tag: "Performance Dashboards",
    title: "Visual Data That Makes Sense",
    description: "Custom live dashboards with multi-channel reporting and ROI tracking.",
    icon: TrendingUp,
    features: [
      "Custom live dashboards (Google Data Studio, Power BI, Tableau)",
      "Multi-channel reporting (Google Ads, Meta Ads, SEO, Email)",
      "ROI tracking by channel & campaign",
      "Easy-to-understand executive reports",
    ],
    floatingTexts: [
      "Live Dashboards",
      "Multi-channel",
      "ROI Tracking",
      "Executive Reports",
      "Data Studio",
      "Visual Data",
    ],
  },
  {
    tag: "Conversion Tracking",
    title: "Know What Drives Results",
    description: "End-to-end tracking setup and cross-platform attribution analysis.",
    icon: Target,
    features: [
      "End-to-end tracking setup (Google Tag Manager, Pixels, Events)",
      "Cross-device & cross-platform attribution",
      "Identify your highest converting channels",
      "Track micro & macro conversions",
    ],
    floatingTexts: [
      "GTM Setup",
      "Attribution",
      "Cross-device",
      "Conversion Events",
      "Channel Analysis",
      "Pixel Tracking",
    ],
  },
  {
    tag: "Predictive Analytics",
    title: "Forecast Your Business Growth",
    description: "AI-powered sales forecasting and customer lifetime value prediction.",
    icon: Brain,
    features: [
      "Forecast sales & leads using AI models",
      "Predict customer lifetime value (CLV)",
      "Identify churn risks early",
      "Data-driven ad budget allocation",
    ],
    floatingTexts: [
      "Sales Forecast",
      "CLV Prediction",
      "Churn Analysis",
      "Budget Allocation",
      "AI Models",
      "Growth Prediction",
    ],
  },
  {
    tag: "E-commerce Analytics",
    title: "Optimize Every Sale",
    description: "Product performance analysis and customer segmentation insights.",
    icon: ShoppingCart,
    features: [
      "Product & category-level performance",
      "Shopping cart & checkout funnel analysis",
      "Customer segmentation & insights",
      "ROI from ad spends across platforms",
    ],
    floatingTexts: [
      "Product Analytics",
      "Funnel Analysis",
      "Customer Segments",
      "Shopping ROI",
      "Cart Analysis",
      "Performance",
    ],
  },
  {
    tag: "Marketing Automation Reporting",
    title: "Track Every Touchpoint",
    description: "Email, WhatsApp campaign analytics and workflow optimization.",
    icon: Mail,
    features: [
      "Email & WhatsApp campaign analytics",
      "Lead nurturing performance reports",
      "Chatbot interaction tracking",
      "Workflow optimization with data",
    ],
    floatingTexts: [
      "Email Analytics",
      "WhatsApp Reports",
      "Lead Nurturing",
      "Chatbot Tracking",
      "Workflow Data",
      "Automation",
    ],
  },
]

const processSteps = [
  { step: "1", title: "Audit & Setup", description: "Identify KPIs & tracking gaps" },
  { step: "2", title: "Integration", description: "Connect Google Ads, Meta Ads, CRM, E-commerce" },
  { step: "3", title: "Dashboard Creation", description: "Build real-time visual dashboards" },
  { step: "4", title: "Reporting", description: "Weekly & monthly detailed reports" },
  { step: "5", title: "Optimization", description: "Adjust campaigns based on insights" },
]

const benefits = [
  "Complete transparency in marketing spends",
  "Know exactly where leads & sales come from",
  "Better decision-making with real data",
  "Save money by cutting wasteful channels",
  "Forecast growth with confidence",
  "Reports tailored for your business goals",
]

const faqs = [
  {
    question: "Do you provide real-time dashboards?",
    answer: "Yes, we build live dashboards with Google Data Studio, Power BI, or Tableau.",
  },
  {
    question: "Can you track ROI of my ad campaigns?",
    answer: "Absolutely, we provide channel-wise ROI reports for Google, Meta, and other platforms.",
  },
  {
    question: "What if I don't have proper tracking set up?",
    answer: "Don't worry — we handle full tracking setup (GTM, Pixels, Events, Conversions).",
  },
  {
    question: "Can you integrate CRM & Sales data into reports?",
    answer: "Yes, we connect CRMs like HubSpot, Zoho, Salesforce with marketing dashboards.",
  },
]

export default function AnalyticsReportingPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const faqRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px" })
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mousePositions, setMousePositions] = useState<number[]>([0.5, 0.5, 0.5, 0.5, 0.5, 0.5])

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const newPositions = [...mousePositions]
    newPositions[cardIndex] = x
    setMousePositions(newPositions)
  }

  return (
    <LeadCaptureModal>
      {(openForm) => (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60 pt-24 sm:pt-32">
          {/* Header Component */}
          <GlassHeader />

          {/* Hero Section */}
          <section ref={heroRef} className="pt-8 pb-16 px-4 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60">
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
              </div>
            </div>
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                  Data That Drives{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Decisions 📈
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  We turn raw marketing data into actionable insights with advanced analytics, custom dashboards, and
                  real-time reporting — so you always know what's working, what's not, and where to scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    onClick={() => openForm("audit")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Analytics Audit
                  </motion.button>
                  <motion.a
                    href="https://wa.me/7017623747"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    WhatsApp Us: +91 7017623747
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Why Analytics Matters Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                  Why Analytics &{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Reporting Matters
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Most businesses fail not because of poor marketing — but because they don't track results properly.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyAnalyticsMatters.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-br from-amber-100/90 via-yellow-100/80 to-orange-100/70 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-700 font-semibold">
                  We don't just run campaigns. We{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    prove their impact
                  </span>
                  .
                </p>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section ref={servicesRef} className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-4 sm:mb-6 lg:mb-8"
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight tracking-tight px-2">
                  Our Analytics & Reporting{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                  Comprehensive analytics solutions powered by advanced technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-3 sm:gap-4 lg:gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 60, scale: 0.9 }}
                      animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="relative h-full"
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={() => {
                        const newPositions = [...mousePositions]
                        newPositions[index] = 0.5
                        setMousePositions(newPositions)
                      }}
                    >
                      <div className="card-hover relative h-full flex flex-col bg-gradient-to-br from-amber-100/90 via-yellow-100/80 to-orange-100/70 backdrop-blur-sm border border-amber-200/30 rounded-3xl overflow-hidden shadow-lg shadow-amber-200/20 transform-gpu transition-all duration-100 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-300/30">
                        <FloatingParticles />
                        <MouseInteractiveTexts texts={service.floatingTexts} mouseX={mousePositions[index]} />
                        <div className="relative z-10 flex-1 flex flex-col items-center text-center p-3 sm:p-4 lg:p-6">
                          <div className="w-full flex flex-col items-center lg:min-h-72">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                              className="mb-2 sm:mb-3"
                            >
                              <div className="icon-hover inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg transform-gpu transition-all duration-100 ease-out hover:rotate-12 hover:scale-110 cursor-pointer">
                                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                              className="mb-2 sm:mb-3"
                            >
                              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                {service.tag}
                              </span>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                              className="mb-3 sm:mb-4"
                            >
                              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800 leading-tight px-1">
                                {service.title}
                              </h3>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                              className="mb-3 sm:mb-4"
                            >
                              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm max-w-sm px-1">
                                {service.description}
                              </p>
                            </motion.div>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            className="w-full mt-2 sm:mt-3 lg:mt-2 pb-4 sm:pb-5"
                          >
                            <ul className="space-y-1.5 sm:space-y-2 text-left max-w-sm mx-auto break-words">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start text-gray-700">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-2 flex-shrink-0 mt-1.5" />
                                  <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        </div>
                      </div>
                      <div className="card-glow absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-100 ease-out pointer-events-none bg-gradient-to-r from-amber-400/10 to-orange-400/10 blur-xl" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section ref={processRef} className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Our Process</h2>
              </motion.div>

              <div className="grid md:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
                  Benefits of Analytics & Reporting
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={processInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg"
                    >
                      <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                      <p className="font-semibold text-gray-800">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section ref={faqRef} className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/30 shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full p-6 text-left font-semibold text-gray-900 hover:bg-amber-50/50 transition-colors duration-200 flex justify-between items-center"
                    >
                      <span>{faq.question}</span>
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-amber-200/30">{faq.answer}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-amber-500">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-black mb-6">Let's Build Your Data-Driven Business</h2>
                <p className="text-xl mb-8 opacity-90">Stop guessing. Start scaling with real numbers.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => openForm("audit")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-orange-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Analytics Audit
                  </motion.button>
                  <motion.a
                    href="https://wa.me/7017623747"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {"WhatsApp Us Now: +91 \n7017623747"}
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer Component */}
          <Footer />
        </div>
      )}
    </LeadCaptureModal>
  )
}
