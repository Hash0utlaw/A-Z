import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"
import { Button } from "@/components/ui/button"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | A-Z Landscapes Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-kelly-600 text-white text-sm font-semibold rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-base text-gray-300">
              <span className="inline-flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 -mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-64 md:h-96 lg:h-[28rem] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10 lg:p-14">
              <div
                className="prose prose-lg md:prose-xl max-w-none 
                  prose-headings:font-bold prose-headings:text-navy-900 prose-headings:tracking-tight
                  prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                  prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-navy-900 prose-strong:font-semibold
                  prose-a:text-kelly-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-kelly-700 hover:prose-a:underline
                  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                  prose-li:my-2 prose-li:text-gray-700 prose-li:leading-relaxed
                  first:prose-p:text-xl first:prose-p:leading-relaxed first:prose-p:text-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-kelly-600 via-kelly-600 to-kelly-700 rounded-xl p-8 md:p-12 text-white text-center shadow-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Ready to Transform Your Outdoor Space?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-kelly-50 max-w-2xl mx-auto text-pretty">
                Let our expert team bring your landscaping vision to life with professional design and quality
                craftsmanship.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-kelly-700 hover:bg-gray-50 font-semibold text-base px-8 py-6 h-auto"
              >
                <Link href="/contact">Get Your Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
