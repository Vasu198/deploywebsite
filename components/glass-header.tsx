"use client"

import type React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const navigationItems = [
  { name: "Home", href: "/", active: true },
  { name: "Services", href: "#services", active: false, hasDropdown: true },
  { name: "Packages", href: "/packages", active: false },
  { name: "Explore", href: "/contact", active: false, hasDropdown: true },
]

const servicesDropdownItems = [
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Web Design & Development", href: "/web-development" },
  { name: "AI Automation", href: "/ai-automation" },
  { name: "Analytics & Reporting", href: "/analytics-reporting" },
]

const ExploreDropdownItems = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact US", href: "/contact" },
]

function GlassHeader() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeItem, setActiveItem] = useState("Home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(true)
  const scrollDirection = useRef<"up" | "down">("down")
  const scrollVelocity = useRef(0)
  const hideTimeout = useRef<NodeJS.Timeout>()

  const { scrollY } = useScroll()

  // Smooth scroll-based transformations
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.95])
  const headerY = useTransform(scrollY, [0, 100], [0, 5])
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.95])
  const backdropBlur = useTransform(scrollY, [0, 100], [40, 50])
  const borderOpacity = useTransform(scrollY, [0, 100], [0.25, 0.35])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY
      const scrollSpeed = Math.abs(scrollDifference)

      const heroSectionHeight = window.innerHeight
      setIsInHeroSection(currentScrollY < heroSectionHeight)

      scrollDirection.current = scrollDifference > 0 ? "down" : "up"
      scrollVelocity.current = scrollSpeed

      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current)
      }

      if (currentScrollY < heroSectionHeight) {
        setVisible(true)
      } else {
        if (scrollDirection.current === "down" && scrollSpeed > 3) {
          setVisible(false)
          setMobileMenuOpen(false)
          setServicesDropdownOpen(false)
          setExploreDropdownOpen(false)
        } else if (scrollDirection.current === "up" && scrollSpeed > 3 && scrollDifference < -5) {
          setVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    let rafId: number | null = null
    const smoothScroll = () => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        handleScroll()
        rafId = null
      })
    }

    window.addEventListener("scroll", smoothScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", smoothScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current)
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (
        !target.closest(".services-dropdown") &&
        !target.closest(".explore-dropdown") &&
        !target.closest("[data-dropdown-trigger]") &&
        !target.closest(".mobile-menu-container")
      ) {
        setServicesDropdownOpen(false)
        setExploreDropdownOpen(false)
      }
    }

    if (servicesDropdownOpen || exploreDropdownOpen) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("click", handleClickOutside)
      }, 100)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener("click", handleClickOutside)
      }
    }
  }, [servicesDropdownOpen, exploreDropdownOpen])

  useEffect(() => {
    const prev = document.body.style.overflow
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = prev || ""
    }
  }, [mobileMenuOpen])

  const smoothSpring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  }

  const ultraSmoothSpring = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 1,
  }

  const visibilityTransition = {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  }

  const handleMobileMenuToggle = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMobileMenuOpen((prev) => !prev)
    setServicesDropdownOpen(false)
    setExploreDropdownOpen(false)
  }

  const handleNavigation = (href: string, itemName: string) => {
    console.log("[v0] Navigation called:", { href, itemName })

    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      let element = document.querySelector(href)

      // Try alternative selectors if the direct one doesn't work
      if (!element) {
        element = document.getElementById(targetId)
      }
      if (!element) {
        element = document.querySelector(`[data-section="${targetId}"]`)
      }

      console.log("[v0] Anchor navigation:", { targetId, element })

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        console.warn("[v0] Element not found for anchor:", href)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else if (href.startsWith("/")) {
      console.log("[v0] Page navigation:", href)
      window.location.href = href
    }

    setServicesDropdownOpen(false)
    setExploreDropdownOpen(false)
    setMobileMenuOpen(false)
    setActiveItem(itemName)
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -60,
        }}
        transition={visibilityTransition}
        className={`${isInHeroSection ? "fixed" : "absolute"} top-4 sm:top-12 left-0 right-0 z-[80] px-4`}
        style={{
          willChange: "transform, opacity",
        }}
      >
        <motion.nav
          style={{
            scale: headerScale,
            y: headerY,
            opacity: headerOpacity,
            willChange: "transform, opacity",
          }}
          className="relative max-w-6xl mx-auto hidden md:block"
        >
          <motion.div
            className="relative rounded-full shadow-2xl py-3 px-12"
            style={{
              backgroundColor: `rgba(255, 255, 255, 0.25)`,
              backdropFilter: `blur(${backdropBlur}px)`,
              borderColor: `rgba(255, 255, 255, ${borderOpacity})`,
              borderWidth: "1px",
              borderStyle: "solid",
              willChange: "transform",
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.35)",
              transition: smoothSpring,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(251, 191, 36, 0.15) 0%, rgba(254, 243, 199, 0.1) 50%, rgba(245, 158, 11, 0.15) 100%)",
                  "linear-gradient(90deg, rgba(245, 158, 11, 0.15) 0%, rgba(251, 191, 36, 0.1) 50%, rgba(254, 243, 199, 0.15) 100%)",
                  "linear-gradient(90deg, rgba(251, 191, 36, 0.15) 0%, rgba(254, 243, 199, 0.1) 50%, rgba(245, 158, 11, 0.15) 100%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative flex items-center justify-between space-x-12 py-0 px-2.5">
              {/* Logo section */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link href="/" className="flex items-center">
                  <motion.img
                    src="/logo.png"
                    alt="AI Ad Service"
                    className="w-auto mx-0 h-14 px-0 my-0 py-1.5"
                    whileHover={{
                      scale: 1.05,
                      transition: smoothSpring,
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                  />
                </Link>
              </motion.div>

              {/* Navigation items */}
              <div className="flex items-center space-x-12">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="relative">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()

                        if (item.hasDropdown) {
                          if (item.name === "Services") {
                            setServicesDropdownOpen(!servicesDropdownOpen)
                            setExploreDropdownOpen(false)
                          } else if (item.name === "Explore") {
                            setExploreDropdownOpen(!exploreDropdownOpen)
                            setServicesDropdownOpen(false)
                          }
                        } else {
                          handleNavigation(item.href, item.name)
                        }
                      }}
                      className="relative group flex items-center space-x-2 px-5 py-3 rounded-full"
                      data-dropdown-trigger={item.hasDropdown ? "true" : undefined}
                      whileHover={{
                        scale: 1.05,
                        transition: smoothSpring,
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <AnimatePresence>
                        {activeItem === item.name && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-2.5 h-2.5 rounded-full shadow-lg"
                            style={{
                              background: "linear-gradient(45deg, #f59e0b, #f97316)",
                              boxShadow: "0 4px 15px rgba(251, 191, 36, 0.5)",
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={ultraSmoothSpring}
                          />
                        )}
                      </AnimatePresence>

                      <motion.span
                        className="text-base font-semibold drop-shadow-sm"
                        animate={{
                          color:
                            activeItem === item.name ? "#111827" : item.name === "Services" ? "#374151" : "#1f2937",
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {item.name}
                      </motion.span>

                      {item.hasDropdown && (
                        <motion.div
                          animate={{
                            rotate:
                              (item.name === "Services" && servicesDropdownOpen) ||
                              (item.name === "Explore" && exploreDropdownOpen)
                                ? 180
                                : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-black" />
                        </motion.div>
                      )}

                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                          opacity: 1,
                          scale: 1,
                          background: "linear-gradient(45deg, rgba(251, 191, 36, 0.3), rgba(254, 243, 199, 0.3))",
                        }}
                        transition={smoothSpring}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {item.hasDropdown &&
                        ((item.name === "Services" && servicesDropdownOpen) ||
                          (item.name === "Explore" && exploreDropdownOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{
                              duration: 0.2,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-64 z-[100]"
                          >
                            <motion.div
                              className="bg-white/35 backdrop-blur-3xl border border-white/40 rounded-2xl p-3 shadow-2xl"
                              style={{
                                backdropFilter: "blur(50px)",
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/15 via-yellow-100/10 to-orange-200/15 rounded-2xl pointer-events-none" />

                              <div className="relative space-y-1">
                                {(item.name === "Services" ? servicesDropdownItems : ExploreDropdownItems).map(
                                  (dropdownItem, dropdownIndex) => (
                                    <motion.div
                                      key={dropdownItem.name}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: dropdownIndex * 0.05,
                                      }}
                                      whileHover={{
                                        scale: 1.02,
                                      }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      {dropdownItem.href.startsWith("/") ? (
                                        <Link
                                          href={dropdownItem.href}
                                          className="text-sm font-medium text-black drop-shadow-sm no-underline hover:bg-white/20 transition-colors duration-200 rounded-xl touch-manipulation"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            minHeight: "44px",
                                            padding: "12px 16px",
                                            textDecoration: "none",
                                            position: "relative",
                                            zIndex: 10,
                                            WebkitTapHighlightColor: "transparent",
                                            touchAction: "manipulation",
                                            userSelect: "none",
                                          }}
                                          onClick={() => {
                                            setServicesDropdownOpen(false)
                                            setExploreDropdownOpen(false)
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              width: "100%",
                                              height: "100%",
                                              minHeight: "20px",
                                            }}
                                          >
                                            {dropdownItem.name}
                                          </div>
                                        </Link>
                                      ) : (
                                        <button
                                          onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            handleNavigation(dropdownItem.href, dropdownItem.name)
                                          }}
                                          className="text-sm font-medium text-black drop-shadow-sm no-underline hover:bg-white/20 transition-colors duration-200 rounded-xl touch-manipulation"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            minHeight: "44px",
                                            padding: "12px 16px",
                                            textAlign: "left",
                                            border: "none",
                                            background: "transparent",
                                            cursor: "pointer",
                                            position: "relative",
                                            zIndex: 10,
                                            WebkitTapHighlightColor: "transparent",
                                            touchAction: "manipulation",
                                            userSelect: "none",
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              width: "100%",
                                              height: "100%",
                                              minHeight: "20px",
                                            }}
                                          >
                                            {dropdownItem.name}
                                          </div>
                                        </button>
                                      )}
                                    </motion.div>
                                  ),
                                )}
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Spacer for balance */}
              <div className="w-10" />
            </div>

            <motion.div
              className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
              animate={{
                background: [
                  "linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.4) 50%, transparent 100%)",
                  "linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.4) 50%, transparent 100%)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)",
              }}
            />
          </motion.div>

          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-full h-10 rounded-full blur-2xl"
            animate={{
              background: [
                "radial-gradient(ellipse, rgba(251, 191, 36, 0.2) 0%, transparent 70%)",
                "radial-gradient(ellipse, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
              ],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.nav>

        <div className="md:hidden relative max-w-sm mx-auto mt-2 sm:mt-4 mobile-menu-container">
          <motion.div
            className="relative rounded-full px-6 py-4 shadow-2xl border border-white/25"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(40px)",
              willChange: "transform",
              zIndex: 60,
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.35)",
              transition: smoothSpring,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200/15 via-yellow-100/10 to-orange-200/15 rounded-2xl pointer-events-none" />

            {/* Mobile logo */}
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link href="/" className="flex items-center">
                  <motion.img
                    src="/logo.png"
                    alt="AI Ad Service"
                    className="h-10 w-auto"
                    whileHover={{
                      scale: 1.05,
                      transition: smoothSpring,
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 },
                    }}
                  />
                </Link>
              </motion.div>

              {/* Mobile menu button */}
              <motion.button
                onClick={handleMobileMenuToggle}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 touch-manipulation"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                  userSelect: "none",
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
                transition={smoothSpring}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <motion.div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <motion.div
                    animate={{
                      rotate: mobileMenuOpen ? 45 : 0,
                      y: mobileMenuOpen ? 2 : 0,
                    }}
                    transition={smoothSpring}
                    className="w-5 h-0.5 bg-gray-800 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-0.5 bg-gray-800 rounded-full"
                  />
                  <motion.div
                    animate={{
                      rotate: mobileMenuOpen ? -45 : 0,
                      y: mobileMenuOpen ? -2 : 0,
                    }}
                    transition={smoothSpring}
                    className="w-5 h-0.5 bg-gray-800 rounded-full"
                  />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="absolute top-full left-0 right-0 mt-2 z-[90]"
                style={{ zIndex: 90 }}
                id="mobile-menu"
              >
                <motion.div
                  className="bg-white/35 backdrop-blur-xl border border-white/40 rounded-2xl p-3 sm:p-4 shadow-2xl"
                  initial={{ backdropFilter: "blur(0px)" }}
                  animate={{ backdropFilter: "blur(50px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/15 via-yellow-100/10 to-orange-200/15 rounded-2xl pointer-events-none" />

                  <div className="relative space-y-1 sm:space-y-2">
                    {navigationItems.map((item, index) => (
                      <div key={item.name}>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (item.hasDropdown) {
                              if (item.name === "Services") {
                                setServicesDropdownOpen(!servicesDropdownOpen)
                                setExploreDropdownOpen(false)
                              } else if (item.name === "Explore") {
                                setExploreDropdownOpen(!exploreDropdownOpen)
                                setServicesDropdownOpen(false)
                              }
                            } else {
                              handleNavigation(item.href, item.name)
                            }
                          }}
                          className="w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 rounded-xl touch-manipulation"
                          style={{
                            WebkitTapHighlightColor: "transparent",
                            touchAction: "manipulation",
                            userSelect: "none",
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            scale: 1.02,
                            transition: smoothSpring,
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3">
                            <AnimatePresence>
                              {activeItem === item.name && (
                                <motion.div
                                  className="w-2 h-2 rounded-full shadow-lg"
                                  style={{
                                    background: "linear-gradient(45deg, #f59e0b, #f97316)",
                                    boxShadow: "0 2px 8px rgba(251, 191, 36, 0.5)",
                                  }}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  transition={ultraSmoothSpring}
                                />
                              )}
                            </AnimatePresence>

                            <motion.span
                              className="text-base font-semibold drop-shadow-sm"
                              animate={{
                                color: activeItem === item.name ? "#111827" : "#1f2937",
                              }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              {item.name}
                            </motion.span>
                          </div>

                          {item.hasDropdown && (
                            <motion.div
                              animate={{
                                rotate:
                                  (item.name === "Services" && servicesDropdownOpen) ||
                                  (item.name === "Explore" && exploreDropdownOpen)
                                    ? 180
                                    : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-5 h-5 text-black" />
                            </motion.div>
                          )}
                        </motion.button>

                        <AnimatePresence>
                          {item.hasDropdown &&
                            ((item.name === "Services" && servicesDropdownOpen) ||
                              (item.name === "Explore" && exploreDropdownOpen)) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-2 sm:ml-4 mt-1 sm:mt-2 space-y-1 services-dropdown"
                              >
                                {(item.name === "Services" ? servicesDropdownItems : ExploreDropdownItems).map(
                                  (dropdownItem, dropdownIndex) => (
                                    <motion.div key={dropdownItem.name}>
                                      {dropdownItem.href.startsWith("/") ? (
                                        <Link
                                          href={dropdownItem.href}
                                          className="text-sm font-medium text-black no-underline hover:bg-white/15 transition-colors duration-200 rounded-lg touch-manipulation"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            minHeight: "44px",
                                            padding: "12px 16px",
                                            textDecoration: "none",
                                            position: "relative",
                                            zIndex: 10,
                                            WebkitTapHighlightColor: "transparent",
                                            touchAction: "manipulation",
                                            userSelect: "none",
                                          }}
                                          onClick={() => {
                                            setMobileMenuOpen(false)
                                            setServicesDropdownOpen(false)
                                            setExploreDropdownOpen(false)
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              width: "100%",
                                              height: "100%",
                                              minHeight: "20px",
                                            }}
                                          >
                                            {dropdownItem.name}
                                          </div>
                                        </Link>
                                      ) : (
                                        <button
                                          onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            handleNavigation(dropdownItem.href, dropdownItem.name)
                                          }}
                                          className="text-sm font-medium text-black drop-shadow-sm no-underline hover:bg-white/15 transition-colors duration-200 rounded-lg touch-manipulation"
                                          style={{
                                            display: "block",
                                            width: "100%",
                                            minHeight: "44px",
                                            padding: "12px 16px",
                                            textAlign: "left",
                                            border: "none",
                                            background: "transparent",
                                            cursor: "pointer",
                                            position: "relative",
                                            zIndex: 10,
                                            WebkitTapHighlightColor: "transparent",
                                            touchAction: "manipulation",
                                            userSelect: "none",
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              width: "100%",
                                              height: "100%",
                                              minHeight: "20px",
                                            }}
                                          >
                                            {dropdownItem.name}
                                          </div>
                                        </button>
                                      )}
                                    </motion.div>
                                  ),
                                )}
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {(mobileMenuOpen || servicesDropdownOpen || exploreDropdownOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[70] ${mobileMenuOpen ? "md:hidden" : ""}`}
            style={{ zIndex: 70 }}
            onClick={() => {
              setMobileMenuOpen(false)
              setServicesDropdownOpen(false)
              setExploreDropdownOpen(false)
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export { GlassHeader }
export default GlassHeader
