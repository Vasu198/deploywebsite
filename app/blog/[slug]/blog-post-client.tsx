"use client"

import { motion } from "framer-motion"

interface BlogPostClientProps {
  content: string
}

export default function BlogPostClient({ content }: BlogPostClientProps) {
  // Split content into paragraphs and format
  const paragraphs = content.split("\n\n").filter((p) => p.trim())

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {paragraphs.map((paragraph, index) => {
        // Check if paragraph contains bullet points
        if (paragraph.includes("•")) {
          const lines = paragraph.split("\n")
          const title = lines[0]
          const bullets = lines.slice(1).filter((line) => line.includes("•"))

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {title && <p className="text-gray-800 text-lg leading-relaxed mb-4 font-medium">{title}</p>}
              <ul className="space-y-2 ml-4">
                {bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-gray-700 leading-relaxed flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span>{bullet.replace("•", "").trim()}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        }

        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            {paragraph}
          </motion.p>
        )
      })}
    </motion.div>
  )
}
