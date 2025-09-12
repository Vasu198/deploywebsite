"use client"

import type React from "react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-neutral-900 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-60"
        style={{
          background: "radial-gradient(60% 50% at 50% 10%, rgba(253,224,71,0.25), rgba(253,186,116,0.10) 60%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20 lg:pt-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-pretty text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none"
        >
          {"#GROWRESPONSIBLY"}
        </motion.h2>

        <div className="mt-8 flex items-center gap-4">
          <CircleIcon
            label="YouTube"
            className="border-transparent bg-red-600 text-white hover:bg-red-700"
            href="https://www.youtube.com/@aiadservice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </CircleIcon>
          <CircleIcon
            label="Instagram"
            className="border-transparent bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white hover:from-purple-700 hover:via-pink-600 hover:to-orange-500"
            href="https://www.instagram.com/aiadservice?igsh=MWdyd3VlczMxMXZvdg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="fill-current">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-2.75a1 1 0 1 1-1.5 1.3 1 1 0 0 1 1.5-1.3Z" />
            </svg>
          </CircleIcon>
          <CircleIcon
            label="LinkedIn"
            className="border-transparent bg-blue-600 text-white hover:bg-blue-700"
            href="https://www.linkedin.com/company/ai-ad-service/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="fill-current">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </CircleIcon>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-16 md:pb-24 lg:pb-28">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16 items-start">
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <FooterColumn
              title="Services"
              items={["Digital Marketing", "Web Design & Development", "AI Automation", "Analytics & Reporting"]}
            />
            <FooterColumn title="Company" items={["About US", "Blogs", "Contact Us", "Resources"]} />
          </div>

          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-3 text-neutral-800">Get exclusive insights</h4>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Get early access and stay informed about product updates, events, and more.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="group relative"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter" className="sr-only">
                Enter your email
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-white/40 backdrop-blur-sm border border-amber-200/60 focus:border-yellow-500 focus:outline-none rounded-md py-3 pr-12 text-lg placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 h-10 w-10 rounded-md grid place-items-center bg-yellow-500 text-neutral-900 hover:bg-yellow-400 transition"
                aria-label="Subscribe"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                  <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-amber-200/60 pt-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white/70 grid place-items-center border border-amber-200/60">
              <span className="text-yellow-600 font-black text-sm">AI</span>
            </div>
            <span className="text-sm text-neutral-600">
              © {new Date().getFullYear()} AI Ad Service. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="/privacy" className="hover:text-neutral-900">
              Privacy
            </a>
            <a href="/terms" className="hover:text-neutral-900">
              Terms
            </a>
            <a href="/contact" className="hover:text-neutral-900">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background: "radial-gradient(80% 60% at 50% 0%, rgba(253,224,71,0.18), rgba(255,255,255,0) 60%)",
        }}
      />
    </footer>
  )
}

export default Footer

function CircleIcon({
  children,
  label,
  className = "",
  href = "#",
  target,
  rel,
}: {
  children: React.ReactNode
  label: string
  className?: string
  href?: string
  target?: string
  rel?: string
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      className={`relative inline-flex h-12 w-12 items-center justify-center rounded-full border transition ${className}`}
    >
      {children}
    </a>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  const getHref = (item: string) => {
    switch (item) {
      case "Digital Marketing":
        return "/digital-marketing"
      case "Web Design & Development":
        return "/web-development"
      case "AI Automation":
        return "/ai-automation"
      case "Analytics & Reporting":
        return "/analytics-reporting"
      case "Contact Us":
        return "/contact"
      case "About US":
        return "/about"
      case "Blogs":
        return "/blog"
      case "Resources":
        return "/resources"
      default:
        return "#"
    }
  }

  return (
    <div>
      <h5 className="text-neutral-800 font-semibold mb-4">{title}</h5>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href={getHref(item)} className="text-neutral-600 hover:text-neutral-900 transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
