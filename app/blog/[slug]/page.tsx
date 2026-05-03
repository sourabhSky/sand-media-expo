import { blogPosts } from '@/data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ChevronRight, Share2, MessageCircle, Mail, ChevronDown } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);


  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 text-white mt-20 lg:ml-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-in">
              <span className="px-4 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-3xl text-white md:text-5xl lg:text-4xl font-bold mb-8 leading-tight animate-fade-in-up">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white overflow-hidden border-2 border-white/20">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{post.author}</p>
                  <p className="text-xs text-gray-400">Expert Contributor</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm font-medium hidden sm:block">Share this article:</p>
                <div className="flex gap-2">
                  {[Share2, MessageCircle, Mail].map((Icon, i) => (
                    <button key={i} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main Content Area */}
      <section className="py-12 md:py-20">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-12 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-black font-medium truncate max-w-[200px] md:max-w-md">{post.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Content Left */}
            <div className="lg:w-2/3">
              {/* Excerpt */}
              <div className="text-xl md:text-2xl text-gray-600 font-light italic mb-12 leading-relaxed border-l-4 border-black pl-8 py-2">
                {post.excerpt}
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold m-0">Table of Contents</h3>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
                <ul className="space-y-4">
                  {post.tableOfContents.map((item, index) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <span className="text-gray-300 font-mono text-sm mt-1">0{index + 1}.</span>
                      <a href={`#${item.id}`} className="text-gray-700 hover:text-black hover:underline transition-all">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Body */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Content relate to Sand Media Base */}
              <div className="mt-16 p-8 bg-black text-white rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Elevate Your Presence with Sand Media Base</h3>
                  <p className="text-gray-300 mb-8 max-w-xl">
                    Ready to transform your digital strategy? Sand Media Base offers end-to-end solutions for enterprises looking to scale with AI, SEO, and advanced media production.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    Get Started Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Right */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Trending Topics */}
              <div className="sticky top-24">
                <div className="mb-10">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-black inline-block"></span>
                    Trending Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.trendingTopics.map((topic) => (
                      <Link
                        key={topic}
                        href={`/blog/category/${topic.toLowerCase().replace(' ', '-')}`}
                        className="px-4 py-2 bg-gray-100 hover:bg-black hover:text-white text-sm font-medium rounded-md transition-all"
                      >
                        {topic}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Related Articles */}
                <div>
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-black inline-block"></span>
                    Related Articles
                  </h4>
                  <div className="space-y-6">
                    {post.relatedArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h5 className="font-bold text-sm leading-snug group-hover:text-black transition-colors line-clamp-3">
                            {article.title}
                          </h5>
                          <span className="text-xs text-gray-400 mt-2 flex items-center gap-1 group-hover:text-black transition-colors">
                            Read Article <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Card */}
                <div className="mt-12 p-8 border-2 border-dashed border-gray-200 rounded-2xl text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <h4 className="font-bold mb-2">Subscribe to our newsletter</h4>
                  <p className="text-sm text-gray-500 mb-6">Get the latest insights from Sand Media Base delivered to your inbox.</p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                    <button className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
