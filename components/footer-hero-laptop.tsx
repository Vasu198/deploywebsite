"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

function SocialIcon({ label, children, href }: { label: string; children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:text-amber-400 hover:border-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      {children}
    </a>
  )
}

// Simple inline SVG social marks (YouTube, Instagram, TikTok) to avoid external icon packages
function YouTube() {
  return (
    <svg width="22" height="16" viewBox="0 0 24 17" fill="none" className="transition-colors">
      <path
        d="M23.5 3.7c-.2-1.2-1.2-2.1-2.4-2.2C18.6 1 12 1 12 1s-6.6 0-9.1.5C1.7 1.6.7 2.5.5 3.7.1 6 .1 8.5.5 10.8c.2 1.2 1.2 2.1 2.4 2.2C5.4 13.5 12 13.5 12 13.5s6.6 0 9.1-.5c1.2-.1 2.2-1 2.4-2.2.4-2.3.4-4.8 0-7.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 4.5v6l5-3-5-3Z" fill="currentColor" />
    </svg>
  )
}
function Instagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="transition-colors" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}
function TikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" className="transition-colors" fill="none">
      <path
        d="M29 5c1.6 3.7 4.2 6.2 8.2 7.1v6.2c-2.8-.1-5.4-1-8.2-2.9v12.4c0 7-5.7 12.6-12.7 12.6S3.7 34.8 3.7 27.8c0-6.2 4.1-11.3 9.7-12.7v6.6c-1.9.9-3.2 2.8-3.2 5 0 3 2.5 5.5 5.6 5.5s5.6-2.5 5.6-5.5V5h7.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Inline SVG laptop with a hinged lid animated by Framer Motion
function AnimatedLaptop({ inView }: { inView: boolean }) {
  // Lid rotates from closed (-92deg) to open (-10deg)
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-4xl md:h-[420px] lg:h-[480px]">
      {/* glow/spotlight */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
      </div>
      <svg viewBox="0 0 900 560" className="h-full w-full">
        {/* base */}
        <defs>
          <linearGradient id="baseGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#1e1e1e" />
            <stop offset="1" stopColor="#2a2a2a" />
          </linearGradient>
          <linearGradient id="lidGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#272727" />
            <stop offset="1" stopColor="#3a3a3a" />
          </linearGradient>
        </defs>
        {/* keyboard deck */}
        <rect x="100" y="360" width="700" height="70" rx="10" fill="url(#baseGrad)" />
        {/* chassis bevel */}
        <rect x="70" y="430" width="760" height="26" rx="6" fill="#111" />
        <rect x="70" y="456" width="760" height="16" rx="6" fill="#0b0b0b" />
        {/* trackpad */}
        <rect x="380" y="375" width="140" height="40" rx="8" fill="#1a1a1a" />
        {/* hinge */}
        <rect x="100" y="345" width="700" height="18" rx="8" fill="#1a1a1a" />

        {/* lid/group: transform origin at hinge center-left */}
        <foreignObject x="100" y="80" width="700" height="280">
          <motion.div
            style={{ transformOrigin: "50% 95%" }}
            initial={{ rotateX: -92, rotateY: 0, rotateZ: 0 }}
            animate={inView ? { rotateX: -10 } : { rotateX: -92 }}
            transition={{ type: "spring", stiffness: 90, damping: 14, mass: 0.6 }}
            className="relative h-full w-full"
          >
            <svg viewBox="0 0 700 280" className="h-full w-full">
              {/* screen frame */}
              <rect
                x="0"
                y="0"
                width="700"
                height="280"
                rx="14"
                fill="url(#lidGrad)"
                stroke="#0f0f0f"
                strokeWidth="2"
              />
              {/* screen content */}
              <rect x="24" y="20" width="652" height="240" rx="10" fill="#0a0a0a" />
              {/* top camera dot */}
              <circle cx="350" cy="10" r="3" fill="#202020" />
              {/* playful animated gradient bars as "UI" */}
              <motion.rect
                x="50"
                y="50"
                width="160"
                height="12"
                rx="6"
                fill="#f59e0b"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.3 }}
              />
              <motion.rect
                x="50"
                y="80"
                width="280"
                height="12"
                rx="6"
                fill="#9ca3af"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.45 }}
              />
              <motion.rect
                x="50"
                y="110"
                width="220"
                height="12"
                rx="6"
                fill="#9ca3af"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.6 }}
              />
              <motion.rect
                x="50"
                y="150"
                width="410"
                height="12"
                rx="6"
                fill="#9ca3af"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.75 }}
              />
              <motion.rect
                x="50"
                y="180"
                width="370"
                height="12"
                rx="6"
                fill="#9ca3af"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.9 }}
              />
            </svg>
          </motion.div>
        </foreignObject>
      </svg>
    </div>
  )
}

export function FooterHeroLaptop({
  className,
}: {
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.3, once: false })

  return (
    <footer className={cn("relative overflow-hidden bg-[#0D0D0D] text-[#F5F5F5]", className)}>
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div ref={ref} className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-20 lg:py-24">
        {/* headline */}
        <div className="mx-auto mb-10 flex max-w-5xl flex-col items-center text-center md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5 }}
            className="text-balance font-sans text-4xl font-extrabold leading-tight tracking-[-0.02em] md:text-6xl lg:text-7xl"
          >
            Supercharge Your Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mt-3 max-w-2xl text-pretty text-sm text-white/70 md:text-base"
          >
            Get exclusive updates, tactics, and early access to launches.
          </motion.p>

          {/* social buttons */}
          <div className="mt-6 flex items-center gap-4 md:mt-8">
            <SocialIcon label="YouTube" href="#">
              <YouTube />
            </SocialIcon>
            <SocialIcon label="Instagram" href="#">
              <Instagram />
            </SocialIcon>
            <SocialIcon label="TikTok" href="#">
              <TikTok />
            </SocialIcon>
          </div>
        </div>

        {/* hero */}
        <AnimatedLaptop inView={inView} />

        {/* links + newsletter */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-white/50">Explore</p>
            <ul className="mt-2 space-y-2 text-white/80">
              <li>
                <a className="hover:text-amber-400" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-amber-400" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="hover:text-amber-400" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-white/50">Company</p>
            <ul className="mt-2 space-y-2 text-white/80">
              <li>
                <a className="hover:text-amber-400" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-amber-400" href="#careers">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-amber-400" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault()
            }}
            aria-label="Newsletter sign up"
          >
            <label htmlFor="footer-email" className="text-xs uppercase tracking-widest text-white/50">
              Stay in the loop
            </label>
            <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 focus-within:border-amber-400">
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="mr-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-black transition-colors hover:bg-amber-400"
                aria-label="Subscribe"
                title="Subscribe"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-white/40">We respect your privacy. Unsubscribe anytime.</p>
          </form>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40 md:mt-12">
          © {new Date().getFullYear()} AI Ad Services — All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterHeroLaptop
