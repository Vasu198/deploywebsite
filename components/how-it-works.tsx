"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We analyze your business, target audience, and current advertising performance to identify opportunities and create a customized strategy.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" />
      </svg>
    ),
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200 hover:border-blue-300",
    shadowColor: "shadow-blue-100/50",
  },
  {
    number: "02",
    title: "AI Strategy Development",
    description:
      "Our AI algorithms process your data and market insights to create a comprehensive advertising strategy with predictable ROI projections.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200 hover:border-purple-300",
    shadowColor: "shadow-purple-100/50",
  },
  {
    number: "03",
    title: "Campaign Launch",
    description:
      "We launch your optimized campaigns across selected platforms with advanced targeting, compelling creatives, and smart bidding strategies.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200 hover:border-yellow-300",
    shadowColor: "shadow-yellow-100/50",
  },
  {
    number: "04",
    title: "AI Optimization",
    description:
      "Our AI continuously monitors and optimizes your campaigns 24/7, making real-time adjustments to maximize performance and ROI.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200 hover:border-green-300",
    shadowColor: "shadow-green-100/50",
  },
  {
    number: "05",
    title: "Scale & Growth",
    description:
      "As performance improves, we scale successful campaigns and expand to new opportunities, ensuring sustainable business growth.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
    color: "from-red-400 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200 hover:border-red-300",
    shadowColor: "shadow-red-100/50",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,152,0,0.1),transparent_50%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-black text-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How AI Ad Service{" "}
            <motion.span
              className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Transforms Your Advertising
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our proven 5-step process combines AI technology with strategic expertise to deliver exceptional results
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-400 to-yellow-500 transform -translate-x-1/2 hidden lg:block rounded-full"
            style={{ opacity }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {steps.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="absolute left-1/2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform -translate-x-1/2 hidden lg:block shadow-lg"
              style={{
                top: `${(index + 1) * 20}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.2,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.5 }}
            />
          ))}

          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                }}
                className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-20 gap-12`}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                <div className="flex-1 relative">
                  <motion.div
                    className={`relative bg-white/80 backdrop-blur-sm border-2 ${step.borderColor} rounded-3xl p-10 transition-all duration-700 group cursor-pointer ${step.shadowColor}`}
                    whileHover={{
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                    style={{
                      boxShadow:
                        hoveredStep === index
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                          : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <motion.div
                      className={`flex items-center mb-6 relative`}
                      animate={hoveredStep === index ? { x: 10 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white shadow-lg`}
                        animate={{
                          rotate: hoveredStep === index ? 360 : 0,
                          scale: hoveredStep === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        {step.icon}
                      </motion.div>
                      <motion.span
                        className="ml-4 text-sm font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
                        animate={hoveredStep === index ? { scale: 1.1 } : { scale: 1 }}
                      >
                        STEP {step.number}
                      </motion.span>
                    </motion.div>

                    <motion.h3
                      className="text-3xl font-bold text-black mb-6 group-hover:text-gray-800 transition-colors"
                      animate={hoveredStep === index ? { x: 10 } : { x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors"
                      animate={hoveredStep === index ? { x: 10 } : { x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {step.description}
                    </motion.p>

                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-b-3xl"
                      initial={{ width: "0%" }}
                      animate={hoveredStep === index ? { width: "100%" } : { width: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    rotate: hoveredStep === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  <motion.div
                    className={`w-28 h-28 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-3xl font-black shadow-2xl relative overflow-hidden`}
                    animate={{
                      boxShadow:
                        hoveredStep === index ? "0 0 40px rgba(255, 193, 7, 0.6)" : "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <motion.span
                      animate={hoveredStep === index ? { scale: 1.2 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                    </motion.span>

                    <motion.div
                      className="absolute inset-0 border-4 border-white/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-50`}
                      animate={{
                        scale: hoveredStep === index ? [1, 1.5, 1] : [1, 1.2, 1],
                        opacity: hoveredStep === index ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                </motion.div>

                <div className="flex-1 lg:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
