"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Filter,
  Clock,
  ExternalLink,
  Calendar,
  User,
  Sparkles,
  TrendingUp,
  BookOpen,
  ChevronDown,
  Check,
} from "lucide-react"
import { categories, getBlogsByCategory, searchBlogs } from "@/lib/blog-data"
import Image from "next/image"
import Link from "next/link"
import { GlassHeader } from "@/components/glass-header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (isDropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
      })
    }
  }, [isDropdownOpen])

  const filteredPosts = useMemo(() => {
    let posts = getBlogsByCategory(selectedCategory)
    if (searchQuery) {
      posts = searchBlogs(searchQuery).filter(
        (post) => selectedCategory === "All" || post.category === selectedCategory,
      )
    }
    return posts
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen">
      <GlassHeader />

      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-lg"
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-44 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative mb-6">
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 left-1/4 text-4xl"
                >
                  💡
                </motion.div>
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 right-1/4 text-3xl"
                >
                  🚀
                </motion.div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
                  Our Blog – Learn, Grow &
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                    {" "}
                    Succeed
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed">
                Welcome to AI Ad Service Blog. Digital marketing is changing every single day. We believe in sharing
                knowledge, not just services.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
                >
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">8+ Articles</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
                >
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">Growth Tips</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30"
                >
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700">AI Insights</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <div className="sticky top-20 z-40 bg-gradient-to-br from-amber-50/95 via-orange-50/95 to-yellow-50/95 backdrop-blur-xl border-b border-white/20 px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 max-w-3xl mx-auto"
          >
            {/* Search Input */}
            <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }} className="relative flex-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5 transition-colors duration-300 group-focus-within:text-orange-600" />
                <input
                  type="text"
                  placeholder="Search for insights, tips & strategies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-3xl border-2 border-white/30 bg-white/20 backdrop-blur-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-amber-500/30 focus:border-amber-400/60 transition-all duration-500 hover:bg-white/25 hover:border-white/40 shadow-lg hover:shadow-xl font-medium"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>

            {/* Filter Section */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative group" ref={dropdownRef}>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <Filter className="absolute left-5 top-1/2 transform -translate-y-1/2 text-orange-600 w-5 h-5 transition-colors duration-300 z-10" />

                {/* Custom Dropdown Button */}
                <motion.button
                  ref={buttonRef}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full pl-14 pr-12 py-4 rounded-3xl border-2 border-white/30 bg-white/20 backdrop-blur-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-400/60 transition-all duration-500 min-w-[220px] hover:bg-white/25 hover:border-white/40 shadow-lg hover:shadow-xl font-medium text-left"
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedCategory}
                </motion.button>

                {/* Custom Dropdown Arrow */}
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                >
                  <ChevronDown className="w-5 h-5 text-orange-600" />
                </motion.div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {categories.map((category, index) => (
                          <motion.button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category)
                              setIsDropdownOpen(false)
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-200 flex items-center justify-between group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 4 }}
                          >
                            <span
                              className={`font-medium transition-colors duration-200 ${
                                selectedCategory === category
                                  ? "text-orange-600"
                                  : "text-gray-700 group-hover:text-orange-600"
                              }`}
                            >
                              {category}
                            </span>
                            {selectedCategory === category && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                <Check className="w-4 h-4 text-orange-600" />
                              </motion.div>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full hover:border-amber-300/30">
                      {/* Featured Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        {/* Category Badge */}
                        <motion.div whileHover={{ scale: 1.1 }} className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-semibold text-white bg-amber-500/90 backdrop-blur-sm rounded-full shadow-lg">
                            {post.category}
                          </span>
                        </motion.div>

                        {/* External Link Icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                        {/* Meta Information */}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-6xl mb-4"
                >
                  📝
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No blogs found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full"
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want strategies tailored to your business?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Connect with us directly and let's create your growth story together.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="tel:+917017623747"
                    className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                  >
                    📞 Call +91 7017623747
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
