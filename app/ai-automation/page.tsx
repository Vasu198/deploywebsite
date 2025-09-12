"use client"
import GlassHeader from "../../components/glass-header"
import Footer from "../../components/footer"
import LeadCaptureModal from "../../components/lead-capture-modal"
import { motion } from "framer-motion"
import type React from "react"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const Bot = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="10" rx="2" strokeWidth={2} />
    <circle cx="12" cy="5" r="2" strokeWidth={2} />
    <path d="M12 7v4" strokeWidth={2} />
    <line x1="8" y1="16" x2="8" y2="16" strokeWidth={2} />
    <line x1="16" y1="16" x2="16" y2="16" strokeWidth={2} />
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

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
)

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" strokeWidth={2} />
  </svg>
)

const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
    />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const BarChart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2} />
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2} />
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2} />
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

const whyChooseUsFeatures = [
  "Reduce manual work with smart automation",
  "Save time & cut marketing costs",
  "Increase ROI with AI-driven optimization",
  "Personalize customer experiences at scale",
  "24/7 engagement with AI chatbots",
  "Transparent dashboards & predictive insights",
]

const services = [
  {
    tag: "AI-Powered SEO",
    title: "Rank Higher & Faster with AI",
    description: "AI keyword clustering, competitor analysis, and automated content optimization.",
    icon: Target,
    features: [
      "AI keyword clustering & topic research",
      "Competitor analysis with machine learning",
      "Automated content optimization",
      "Voice & semantic search readiness",
      "Real-time SEO performance monitoring",
    ],
    floatingTexts: [
      "Smart SEO",
      "AI Keywords",
      "Auto Optimization",
      "Voice Search",
      "Real-time Tracking",
      "ML Analysis",
    ],
  },
  {
    tag: "AI Marketing",
    title: "Smarter Campaigns with Maximum ROI",
    description: "AI audience targeting, predictive bidding, and dynamic creative optimization.",
    icon: Brain,
    features: [
      "AI audience targeting & segmentation",
      "Predictive bidding for Google & Meta Ads",
      "Dynamic creative optimization",
      "Funnel tracking & lead scoring",
      "Real-time campaign adjustments",
    ],
    floatingTexts: [
      "Smart Targeting",
      "Predictive Ads",
      "Dynamic Creative",
      "Lead Scoring",
      "Real-time Adjust",
      "AI Campaigns",
    ],
  },
  {
    tag: "AI Consulting",
    title: "Integrate AI into Your Business",
    description: "Business process analysis, AI adoption roadmap, and custom solution development.",
    icon: Zap,
    features: [
      "Business process analysis",
      "AI adoption roadmap",
      "Tool & platform recommendations",
      "Custom AI solution development",
      "Training & ongoing support",
    ],
    floatingTexts: ["AI Strategy", "Process Analysis", "Custom Solutions", "Training", "Ongoing Support", "AI Roadmap"],
  },
  {
    tag: "Marketing Automation",
    title: "Turn Tasks into Automated Workflows",
    description: "Email & WhatsApp drip campaigns, lead nurturing, and CRM integrations.",
    icon: Bot,
    features: [
      "Email & WhatsApp drip campaigns",
      "Automated lead nurturing",
      "Abandoned cart recovery",
      "Customer journey automation",
      "CRM & ERP integrations",
    ],
    floatingTexts: [
      "Auto Campaigns",
      "Lead Nurturing",
      "Cart Recovery",
      "Journey Mapping",
      "CRM Integration",
      "Workflows",
    ],
  },
  {
    tag: "E-commerce Automation",
    title: "Intelligent Product Feed Management",
    description: "Automated catalog syncing, dynamic pricing, and AI product recommendations.",
    icon: ShoppingBag,
    features: [
      "Automated product catalog syncing",
      "Dynamic pricing & inventory updates",
      "AI product recommendations",
      "Shopping ads optimization",
      "Multi-channel integration",
    ],
    floatingTexts: [
      "Auto Sync",
      "Dynamic Pricing",
      "AI Recommendations",
      "Ad Optimization",
      "Multi-channel",
      "Smart Inventory",
    ],
  },
  {
    tag: "Account-Based Marketing",
    title: "Hyper-Targeted Marketing for High-Value Clients",
    description: "AI-powered account selection, personalized campaigns, and sales enablement.",
    icon: Users,
    features: [
      "Account selection & profiling with AI",
      "Personalized campaigns at scale",
      "Multi-channel ABM strategies",
      "Lead nurturing sequences",
      "Sales enablement dashboards",
    ],
    floatingTexts: [
      "AI Targeting",
      "Personalized Scale",
      "Multi-channel",
      "Lead Sequences",
      "Sales Dashboards",
      "ABM Strategy",
    ],
  },
  {
    tag: "AI Chatbots",
    title: "Always-On Customer Support & Lead Gen",
    description: "AI-powered website & WhatsApp bots with multi-language support.",
    icon: MessageCircle,
    features: [
      "AI-powered website & WhatsApp bots",
      "Lead qualification & appointment booking",
      "Multi-language support",
      "Integration with CRMs & sales funnels",
    ],
    floatingTexts: [
      "AI Chatbots",
      "Lead Qualification",
      "Multi-language",
      "CRM Integration",
      "24/7 Support",
      "Auto Booking",
    ],
  },
  {
    tag: "Predictive Analytics",
    title: "Make Data-Driven Decisions with AI",
    description: "Sales forecasting, customer behavior prediction, and real-time dashboards.",
    icon: BarChart,
    features: [
      "Sales forecasting",
      "Customer behavior prediction",
      "Lead scoring & prioritization",
      "Real-time performance dashboards",
    ],
    floatingTexts: [
      "Sales Forecast",
      "Behavior Prediction",
      "Lead Scoring",
      "Real-time Data",
      "AI Insights",
      "Smart Analytics",
    ],
  },
]

const processSteps = [
  { step: "1", title: "Discovery", description: "Identify opportunities for AI in your business" },
  { step: "2", title: "Strategy", description: "Create an automation & AI adoption roadmap" },
  { step: "3", title: "Implementation", description: "Deploy AI tools, bots, feeds & workflows" },
  { step: "4", title: "Integration", description: "Connect with CRMs, Ads & Marketing Systems" },
  { step: "5", title: "Optimization", description: "AI learns, adapts, and keeps improving" },
  { step: "6", title: "Support", description: "Ongoing monitoring & scaling" },
]

const benefits = [
  "Save Time & Reduce Costs",
  "Smarter Campaigns with Higher ROI",
  "Consistent Lead Nurturing & Conversions",
  "24/7 Customer Engagement",
  "Real-Time Insights & Reporting",
  "Scalable Solutions for Any Business",
]

const faqs = [
  {
    question: "Can AI really improve my marketing?",
    answer: "Yes, AI improves targeting, reduces costs, and increases conversions by learning from real-time data.",
  },
  {
    question: "Is automation only for big businesses?",
    answer: "No, even small businesses benefit from AI chatbots, automated campaigns & e-commerce feed automation.",
  },
  {
    question: "Do you provide custom AI solutions?",
    answer: "We design tailored automation systems for your unique business needs.",
  },
  {
    question: "Will AI replace my team?",
    answer: "No, AI supports your team by reducing repetitive work, so they can focus on strategy & growth.",
  },
]

export default function AIAutomationPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const faqRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px" })
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mousePositions, setMousePositions] = useState<number[]>([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5])

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
                  Scale Smarter with{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    AI & Automation 🚀
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  From AI-powered SEO and Digital Marketing to chatbots, CRM automation, and predictive analytics, we
                  help businesses automate workflows, optimize campaigns, and generate consistent revenue — all powered
                  by Artificial Intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    onClick={() => openForm("consultation")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free AI Consultation
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

          {/* Why Choose Us Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                  Why Choose Our{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    AI Services?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  With us, AI is not just a tool — it becomes your business growth partner.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUsFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-gradient-to-br from-amber-100/90 via-yellow-100/80 to-orange-100/70 backdrop-blur-sm border border-amber-200/30 rounded-2xl border border-amber-200/30 shadow-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
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
                  Our AI & Automation{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                  Comprehensive AI solutions powered by cutting-edge technology
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-3 sm:gap-4 lg:gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 60, scale: 0.9 }}
                      animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
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
                              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                              className="mb-2 sm:mb-3"
                            >
                              <div className="icon-hover inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg transform-gpu transition-all duration-100 ease-out hover:rotate-12 hover:scale-110 cursor-pointer">
                                <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                              </div>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                              className="mb-2 sm:mb-3"
                            >
                              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                {service.tag}
                              </span>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                              className="mb-3 sm:mb-4"
                            >
                              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800 leading-tight px-1">
                                {service.title}
                              </h3>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
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
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
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

              <div className="grid md:grid-cols-6 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={processInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
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
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Benefits of AI & Automation</h2>
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/70 backdrop-blur-sm border border-amber-200/30 rounded-2xl overflow-hidden shadow-lg"
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
                      animate={{ height: openFaq === index ? "auto" : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
                    </motion.div>
                  </motion.div>
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
                <h2 className="text-3xl md:text-4xl font-black mb-6">Let's Automate Your Business Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Stop wasting time on manual tasks. Scale faster with AI-powered marketing & automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => openForm("consultation")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-orange-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Free AI Consultation
                  </motion.button>
                  <motion.a
                    href="https://wa.me/7017623747"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    WhatsApp Us Now: +91 7017623747
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
