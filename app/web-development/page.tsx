"use client"
import GlassHeader from "../../components/glass-header"
import Footer from "../../components/footer"
import LeadCaptureModal from "../../components/lead-capture-modal"
import { motion } from "framer-motion"
import type React from "react"

import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const Rocket = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <line x1="2" y1="12" x2="22" y2="12" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
    />
  </svg>
)

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="16,18 22,12 16,6" strokeWidth={2} />
    <polyline points="8,6 2,12 8,18" strokeWidth={2} />
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

const Smartphone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={2} />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={2} />
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
  "100% Mobile-Responsive Design",
  "SEO-Friendly & Google-Optimized",
  "Fast Loading Speed & Clean Code",
  "Secure with SSL & Firewall",
  "WhatsApp Chat & Lead Form Integration",
  "Payment Gateway & CRM Integrations",
  "On-time Delivery & Ongoing Support",
]

const services = [
  {
    tag: "Business Websites",
    title: "Turn Every Ad Rupee Into Profit",
    description: "Professional websites that establish trust and showcase your services.",
    icon: Globe,
    features: [
      "Custom Home, About, Services, Contact Pages",
      "WhatsApp Chat Button Integration",
      "Contact/Lead Forms with Email Alerts",
      "Blog or News Section (optional)",
      "Google Maps & Analytics Setup",
    ],
    floatingTexts: [
      "Professional Design",
      "Trust Building",
      "Service Showcase",
      "Contact Integration",
      "Analytics Setup",
      "Mobile Responsive",
    ],
  },
  {
    tag: "Static Websites",
    title: "Simple, Fast & Budget-Friendly",
    description: "Simple, fast, and budget-friendly — ideal for small businesses and individuals.",
    icon: Code,
    features: [
      "3–5 Core Pages",
      "Responsive Design for All Devices",
      "Basic SEO Setup",
      "WhatsApp/Call Now Button",
      "Contact Form Integration",
      "Lightweight & Speed-Optimized",
    ],
    floatingTexts: ["Fast Loading", "Budget Friendly", "SEO Ready", "Mobile First", "Clean Code", "Easy Maintenance"],
  },
  {
    tag: "Dynamic Websites",
    title: "Easily Manageable with CMS",
    description: "Easily manageable websites with CMS integration.",
    icon: Rocket,
    features: [
      "CMS (WordPress/Custom)",
      "User-friendly Admin Dashboard",
      "Blog / News / Events Section",
      "Advanced Lead Forms",
      "Social Media Integration",
      "Multi-language Support",
      "SEO & Analytics Setup",
    ],
    floatingTexts: [
      "Content Management",
      "Admin Dashboard",
      "Blog System",
      "Social Integration",
      "Multi-language",
      "SEO Optimized",
    ],
  },
  {
    tag: "E-Commerce Websites",
    title: "Secure Online Stores 24/7",
    description: "Secure and scalable online stores to sell products 24/7.",
    icon: ShoppingCart,
    features: [
      "Product Catalog & Categories",
      "Shopping Cart & Wishlist",
      "Secure Payment Gateways (UPI, Cards, PayPal)",
      "Inventory & Order Management",
      "Coupons, Discounts, and Offers",
      "Customer Login/Signup",
      "Shipping & Delivery Integration",
      "WhatsApp Order Notifications",
    ],
    floatingTexts: [
      "Online Store",
      "Payment Gateway",
      "Order Management",
      "Inventory System",
      "Customer Portal",
      "Secure Shopping",
    ],
  },
  {
    tag: "Web & App Development",
    title: "Custom Apps for Business Needs",
    description: "Custom web apps and mobile apps for advanced business needs.",
    icon: Smartphone,
    features: [
      "CRM/ERP/Portal Development",
      "Mobile Apps (Android & iOS)",
      "API & Third-party Integrations",
      "Secure Login & User Management",
      "Cloud Hosting & Database Setup",
      "Push Notifications & Analytics",
    ],
    floatingTexts: [
      "Custom Development",
      "Mobile Apps",
      "API Integration",
      "Cloud Hosting",
      "User Management",
      "Analytics",
    ],
  },
]

const processSteps = [
  { step: "1", title: "Discovery & Research", description: "Understand your goals & audience" },
  { step: "2", title: "Design", description: "Craft UI/UX that connects with users" },
  { step: "3", title: "Development", description: "Build with speed, security & SEO in mind" },
  { step: "4", title: "Testing & Launch", description: "Smooth, error-free deployment" },
  { step: "5", title: "Support & Growth", description: "Maintenance, updates & scaling" },
]

const faqs = [
  {
    question: "How long will it take to build my website?",
    answer:
      "Simple websites can be done in 5–7 days. Dynamic or e-commerce sites take more time depending on features.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "Yes! All websites are optimized for Google ranking, speed, and mobile performance.",
  },
  {
    question: "Can you redesign my old website?",
    answer: "Absolutely. We transform outdated sites into modern, high-performing platforms.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance, updates, and performance optimization.",
  },
]

export default function WebDevelopmentPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const faqRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const processInView = useInView(processRef, { once: true, margin: "-100px" })
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mousePositions, setMousePositions] = useState<number[]>([0.5, 0.5, 0.5, 0.5, 0.5])

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
                  Build Websites That Convert Visitors into{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Customers
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  We design and develop modern, responsive, and SEO-optimized websites that help businesses grow online.
                  From simple static websites to powerful e-commerce platforms and custom apps — we deliver solutions
                  that attract, engage, and convert.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    onClick={() => openForm("project")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Project
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
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Us?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We are not just another web design company. We create business-focused digital experiences.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUsFeatures.map((feature, index) => (
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
                  With us, your website is not just a showcase — it becomes a{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    lead-generating machine
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
                  Our Website Design & Development{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                  Comprehensive web solutions powered by modern technology
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

          {/* Technologies Section */}
          <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Technologies We Work With</h2>
                <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-gray-700">
                  {[
                    "WordPress",
                    "Shopify",
                    "Magento",
                    "Laravel",
                    "React.js",
                    "Angular",
                    "HTML5",
                    "PHP",
                    "Python",
                    "Custom CMS",
                  ].map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
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

          {/* Client Benefits */}
          <section className="py-16 px-4 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Client Benefits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "More Traffic with SEO-Friendly Design",
                    "More Leads via Integrated Lead Forms & WhatsApp Chat",
                    "More Sales with E-commerce Solutions",
                    "Clear Reporting & Growth Insights",
                  ].map((benefit, index) => (
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
                <h2 className="text-3xl md:text-4xl font-black mb-6">Let's Build Your Website Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  Your customers are searching for you online — let's give them the best experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={() => openForm("project")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-orange-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Consultation
                  </motion.button>
                  <motion.a
                    href="https://wa.me/7017623747"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Or WhatsApp us now: +91 7017623747
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </LeadCaptureModal>
  )
}
