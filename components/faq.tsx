"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const faqs = [
  {
    question: "What exactly is AI Ad Service?",
    answer:
      "AI Ad Service is your fully-managed advertising growth partner. We combine advanced AI-powered marketing with expert human strategies to deliver consistent leads, higher conversions, and predictable revenue growth — without you managing any complexity.",
  },
  {
    question: "Is this only for big businesses or can small businesses also use it?",
    answer:
      "Both. Whether you're starting or scaling, our AI advertising system is customized to fit your current stage, budget, and industry. Many of our biggest success stories started as small businesses.",
  },
  {
    question: "I have already tried agencies before and got poor results — how is this different?",
    answer:
      "Most agencies run generic campaigns. We build a fully customized AI-powered advertising strategy based 100% on your business data, goals, market & competition. You get full transparency, daily optimization, and expert human guidance — not guesswork.",
  },
  {
    question: "How fast can I expect results?",
    answer:
      "Initial leads & growth start typically within 30-60 days. Full revenue scaling generally compounds within 90 days as AI data learns & optimizes continuously.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "We guarantee delivering your fully customized AI Growth Plan based on your data & market. Our clients consistently achieve 2X-5X revenue scaling — but every business outcome depends on correct execution & market factors.",
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 px-6 relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to your most common questions</p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative bg-white border border-yellow-200 rounded-3xl overflow-hidden hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-100/50 transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left hover:bg-yellow-50/50 transition-all duration-300 flex justify-between items-center group"
                >
                  <span
                    className={`text-xl font-bold pr-4 transition-all duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
                        : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1,
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:from-yellow-500 group-hover:to-orange-600 transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-700 leading-relaxed border-t border-yellow-200 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
