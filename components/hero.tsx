"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import GlassHeader from "./glass-header"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["convert", "perform", "win"]
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      } else {
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
          }, 3000)
        }
      }
    }

    intervalRef.current = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Glass Header - Navigation Only */}
      <GlassHeader />

      {/* Main Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-end justify-center pb-20 overflow-hidden">
        {/* Enhanced warm background to match the image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60">
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

        {/* Organic Scattered Gradient Overlay with warm tones */}
        <div className="absolute inset-0 z-10">
          {/* Base layer */}
          <div
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{
              background: `
                radial-gradient(ellipse 1200px 800px at ${mousePosition.x - 30}% ${mousePosition.y - 20}%, 
                  rgba(254, 243, 199, 0.4) 0%, 
                  rgba(251, 191, 36, 0.3) 30%, 
                  transparent 70%),
                radial-gradient(ellipse 800px 1200px at ${mousePosition.x + 40}% ${mousePosition.y + 30}%, 
                  rgba(245, 158, 11, 0.2) 0%, 
                  rgba(251, 191, 36, 0.15) 40%, 
                  transparent 80%),
                radial-gradient(ellipse 1500px 600px at ${mousePosition.x + 20}% ${mousePosition.y - 40}%, 
                  rgba(254, 243, 199, 0.3) 0%, 
                  rgba(255, 248, 220, 0.4) 50%, 
                  transparent 90%)
              `,
            }}
          />

          {/* Additional scattered elements for more organic feel */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle 350px at ${mousePosition.x + 70}% ${mousePosition.y - 30}%, 
                  rgba(251, 191, 36, 0.2) 0%, 
                  transparent 70%),
                radial-gradient(circle 250px at ${mousePosition.x - 60}% ${mousePosition.y + 70}%, 
                  rgba(245, 158, 11, 0.25) 0%, 
                  transparent 60%),
                radial-gradient(circle 450px at ${mousePosition.x + 30}% ${mousePosition.y + 20}%, 
                  rgba(254, 243, 199, 0.2) 0%, 
                  transparent 80%)
              `,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full px-8 lg:px-12 xl:px-16 pt-40 pb-20 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Main Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-black text-black leading-none tracking-tight drop-shadow-sm"
            >
              Ads
              <br />
              that
              <br />
              <div className="relative inline-block min-h-[1.2em]">
                <motion.div
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent font-black"
                >
                  {words[currentWord]}
                </motion.div>
              </div>
            </motion.h1>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8 lg:text-right flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-black leading-relaxed drop-shadow-sm">
                We're an AI-powered advertising
                <br />
                agency that creates high-converting
                <br />
                campaigns using advanced machine
                <br />
                learning and <span className="font-bold">data-driven strategies.</span>
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <a
                href="/hire-us"
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg text-center"
              >
                Hire Us
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive cursor indicator with warm colors */}
        <motion.div
          className="absolute pointer-events-none z-30 w-5 h-5 bg-amber-400/50 rounded-full blur-sm"
          animate={{
            x: typeof window !== "undefined" ? (mousePosition.x * window.innerWidth) / 100 - 10 : 0,
            y: typeof window !== "undefined" ? (mousePosition.y * window.innerHeight) / 100 - 10 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </section>
    </>
  )
}
