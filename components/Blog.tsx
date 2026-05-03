'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blogData'

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'SEO', 'Design', 'Digital Marketing', 'Technology', 'Marketing', 'Events']

  const filteredPosts = activeFilter === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter)

  return (
    <section id="blog" className="pb-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-4 italic">NEWS & INFORMATION</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold font-display">
              Latest from Sand Media Base
            </h2>
            <Link href="/blog" className="text-sm font-semibold hover:underline flex items-center space-x-2 group">
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-gray-600 mt-4 text-sm max-w-3xl">
            Stay up-to-date with industry news and information with our articles covering all subjects in the Web and Digital Marketing landscape.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="text-sm font-semibold mr-2">Filter</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-black'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-16/10 shadow-sm border border-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-md text-black shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-xs text-gray-500 space-x-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.author}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-display group-hover:text-black transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center text-sm font-bold text-black border-b-2 border-transparent group-hover:border-black transition-all pb-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

