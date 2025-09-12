import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-8">📝</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    </div>
  )
}
