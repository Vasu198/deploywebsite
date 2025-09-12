"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
)

const Palette = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3v18M11 21a4 4 0 004-4V5a2 2 0 00-2-2H9a2 2 0 00-2 2v18a4 4 0 004 4z"
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

const BarChart3 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 17V9l-5 5-2-2-3 3" />
  </svg>
)

const services = [
  {
    tag: "AI-Powered Advertising",
    title: "Turn Every Ad Rupee Into Profit",
    description:
      "Stop guessing. Start winning. Our AI eliminates wasted ad spend and finds your highest-converting customers automatically.",
    features: [
      "3x Better ROI - Smart bidding that outperforms human guesswork",
      "Laser-Targeted Reach - AI finds your ideal customers, not random clicks",
      "24/7 Optimization - Your campaigns improve while you sleep",
      "Future-Proof Strategy - Predictive insights keep you ahead of trends",
    ],
    icon: Zap,
  },
  {
    tag: "Performance Analytics",
    title: "See Exactly Where Your Money Goes (And Comes Back)",
    description:
      "Finally understand what's working. Our dashboards turn complex data into clear profit opportunities you can act on today.",
    features: [
      "Live Revenue Tracking - Watch your ROI grow in real-time",
      "Conversion Microscope - See which ads turn clicks into customers",
      "Profit Clarity - Know your true cost per customer acquisition",
      "Competitor Edge - Spy on what's working for your competition",
    ],
    icon: Target,
  },
  {
    tag: "Creative Optimization",
    title: "Ads That Stop Scrolls & Start Sales",
    description: "Your audience sees 5,000+ ads daily. We make yours impossible to ignore and impossible to forget.",
    features: [
      "Winner-Takes-All Testing - Only your best-performing ads survive",
      "Endless Fresh Creative - AI generates new winning ads automatically",
      "Scroll-Stopping Visuals - Data-driven designs that demand attention",
      "Conversion-Focused Copy - Words that turn browsers into buyers",
    ],
    icon: Palette,
  },
  {
    tag: "Multi-Platform Management",
    title: "Dominate Every Platform Where Your Customers Are",
    description:
      "Your customers are everywhere. We make sure your winning message reaches them on Google, Meta, LinkedIn, and beyond - seamlessly.",
    features: [
      "Unified Campaign Strategy - Consistent messaging across all platforms",
      "Cross-Platform Optimization - Budget flows to your best-performing channels",
      "Platform-Specific Creative - Tailored content for each audience behavior",
      "Reporting - See all your results in one comprehensive dashboard",
    ],
    icon: Globe,
  },
  {
    tag: "Marketing Automation",
    title: "Your Sales Machine That Never Sleeps",
    description:
      "Set it once, profit forever. Our automation turns prospects into customers and customers into repeat buyers - completely hands-off.",
    features: [
      "24/7 Lead Nurturing - Automated follow-ups that feel personal",
      "Perfect Timing - Campaigns launch at optimal moments automatically",
      "Instant Problem Alerts - Know about issues before they cost you money",
      "Growth While You Sleep - Detailed reports delivered every morning",
    ],
    icon: Zap,
  },
  {
    tag: "Strategic Consulting",
    title: "Your Shortcut to Marketing That Actually Works",
    description:
      "Skip the expensive trial-and-error. Get battle-tested strategies from experts who've generated 3cr in client revenue.",
    features: [
      "Custom Growth Roadmap - Your personalized path to doubling revenue",
      "Market Intelligence - Deep insights into your industry and competitors",
      "Competitive Advantage - Strategies your competitors don't know about",
      "Continuous Optimization - Ongoing refinements that compound your results",
    ],
    icon: BarChart3,
  },
]

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

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 relative bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-4 sm:mb-6 lg:mb-8"
        >
          <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight tracking-tight px-2">
            That's exactly where AI Ad Service is{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              different
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight tracking-tight px-2">
            Our AI-Powered{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Comprehensive advertising solutions powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative h-full"
              >
                <div className="card-hover relative h-full flex flex-col bg-gradient-to-br from-amber-100/90 via-yellow-100/80 to-orange-100/70 backdrop-blur-sm border border-amber-200/30 rounded-3xl overflow-hidden shadow-lg shadow-amber-200/20 transform-gpu transition-all duration-100 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-300/30">
                  <FloatingParticles />
                  <div className="relative z-10 flex-1 flex flex-col items-center text-center p-3 sm:p-4 lg:p-6">
                    <div className="w-full flex flex-col items-center lg:min-h-72">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        className="mb-2 sm:mb-3"
                      >
                        <div className="icon-hover inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg transform-gpu transition-all duration-100 ease-out hover:rotate-12 hover:scale-110 cursor-pointer">
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="mb-2 sm:mb-3"
                      >
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                          {service.tag}
                        </span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="mb-3 sm:mb-4"
                      >
                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800 leading-tight px-1">
                          {service.title}
                        </h3>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
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
  )
}
