import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Landscaping Blog | Tips & Insights from A-Z Landscapes",
  description:
    "Expert landscaping tips, design inspiration, and industry insights for Charlotte, NC homeowners. Learn from the professionals at A-Z Landscapes.",
  keywords: [
    "landscaping blog",
    "Charlotte landscaping tips",
    "landscape design ideas",
    "hardscaping advice",
    "lawn care tips",
  ],
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Landscaping Insights & Tips
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-pretty leading-relaxed">
              Expert advice, design inspiration, and industry insights from Charlotte's premier landscaping
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-kelly-200 transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-kelly-100 text-kelly-700 text-xs font-semibold rounded-full mb-4">
                    {post.category}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-3 hover:text-kelly-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-base leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-kelly-600 font-semibold hover:text-kelly-700 transition-colors group-hover:gap-3"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
