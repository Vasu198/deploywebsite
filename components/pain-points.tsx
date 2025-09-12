"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { TrendingDown, Compass, Users } from "lucide-react"

const painPoints = [
  {
    tag: "Poor ROI",
    title:
      "You're spending big on ads, but the promises feel empty and the results are disappointing. Your ROI is a mystery.",
    icon: TrendingDown,
    floatingTexts: [
      "Brand Partners",
      "Business Development",
      "We craft strategic",
      "AI-Powered Optimization",
      "Performance Analytics",
      "Multi-Platform Management",
    ],
  },
  {
    tag: "Feeling Lost?",
    title:
      "Entering the digital ad world is overwhelming. You're worried about wasting money and don't know where to start.",
    icon: Compass,
    floatingTexts: [
      "Brand Partners",
      "Business Development",
      "We craft strategic",
      "AI-Powered Optimization",
      "Performance Analytics",
      "Multi-Platform Management",
    ],
  },
  {
    tag: "In-House Limitations",
    title:
      "Your team is talented but stretched thin, lacking the specialized AI tools and expertise to truly optimize your ad spend.",
    icon: Users,
    floatingTexts: [
      "Brand Partners",
      "Business Development",
      "We craft strategic",
      "AI-Powered Optimization",
      "Performance Analytics",
      "Multi-Platform Management",
    ],
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

export default function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mousePositions, setMousePositions] = useState<number[]>([0.5, 0.5, 0.5])

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const newPositions = [...mousePositions]
    newPositions[cardIndex] = x
    setMousePositions(newPositions)
  }

  return (
    <section ref={ref} className="py-16 px-6 relative bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Are You Struggling With These{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Advertising Challenges?
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((pain, index) => {
            const IconComponent = pain.icon

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
                className="relative h-[400px]"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => {
                  const newPositions = [...mousePositions]
                  newPositions[index] = 0.5
                  setMousePositions(newPositions)
                }}
              >
                {/* Main card container */}
                <div className="card-hover relative h-full bg-gradient-to-br from-amber-100/90 via-yellow-100/80 to-orange-100/70 backdrop-blur-sm border border-amber-200/30 rounded-3xl overflow-hidden shadow-lg shadow-amber-200/20 transform-gpu transition-all duration-100 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-300/30">
                  {/* Floating particles */}
                  <FloatingParticles />

                  {/* Interactive floating text elements */}
                  <MouseInteractiveTexts texts={pain.floatingTexts} mouseX={mousePositions[index]} />

                  {/* Content overlay */}
                  <div className="relative z-10 h-full flex flex-col p-8">
                    {/* Icon above the tag */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="mb-6 text-center"
                    >
                      <div className="icon-hover inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg transform-gpu transition-all duration-100 ease-out hover:rotate-12 hover:scale-110 cursor-pointer">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Tag at top */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="mb-8 text-center"
                    >
                      <span className="inline-block px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-lg font-semibold shadow-lg">
                        {pain.tag}
                      </span>
                    </motion.div>

                    {/* Main content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex-1 flex flex-col justify-center"
                    >
                      <h3 className="text-gray-800 text-xl font-medium leading-relaxed text-center">{pain.title}</h3>
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
