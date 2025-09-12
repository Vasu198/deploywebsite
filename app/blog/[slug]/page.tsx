import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, ExternalLink } from "lucide-react"
import { getBlogPost, blogPosts } from "@/lib/blog-data"
import BlogPostClient from "./blog-post-client"
import { GlassHeader } from "@/components/glass-header"
import { Footer } from "@/components/footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: `${post.title} | AI Ad Service Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <GlassHeader />

      {/* Header Navigation */}
      <div className="pt-40 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </header>

          {/* Post Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 mb-16">
            <div className="prose prose-lg max-w-none">
              <BlogPostClient content={post.content} />
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <ExternalLink className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                          <span>{relatedPost.category}</span>
                          <span>{relatedPost.readTime} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to implement these strategies?</h2>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how we can help your business grow with proven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+917017623747"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  📞 Call +91 7017623747
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/20 transition-colors duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  )
}
