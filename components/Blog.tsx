'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Best SEO Agencies in The UK',
    date: 'July 8, 2025',
    category: 'SEO Strategy',
    excerpt: 'A comprehensive guide to choosing the right SEO partner for your business growth.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&q=80',
  },
  {
    id: 2,
    title: 'The Best Graphic Design Software',
    date: 'May 21, 2024',
    category: 'Design',
    excerpt: 'Explore the top tools professionals use to create stunning visuals.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
  },
  {
    id: 3,
    title: 'The Best Keyword Research Tools',
    date: 'May 15, 2024',
    category: 'SEO',
    excerpt: 'Discover powerful tools to uncover high-value keywords for your content strategy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    id: 4,
    title: 'The Best Link Building Tools',
    date: 'May 9, 2024',
    category: 'SEO',
    excerpt: 'Master link building with these essential tools and techniques.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  },
]

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'SEO', 'Design', 'Digital Marketing', 'Web Design']

  return (
    <section id="blog" className="section-padding bg-white">

      {/* need do redesign for blog in future */}


      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-4 italic">NEWS & INFORMATION</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              Stay up-to-date
            </h2>
            <Link href="#all-articles" className="text-sm font-semibold hover:underline flex items-center space-x-2 group">
              <span>Read all articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-gray-600 mt-4 max-w-3xl">
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`#blog-${post.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-16/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-xs text-gray-500 space-x-2">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold rounded-full">
                  {post.category}
                </div>
                <h3 className="text-lg font-bold font-display group-hover:underline leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-sm font-semibold text-black group-hover:gap-2 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      
      </div>
    </section>
  )
}
