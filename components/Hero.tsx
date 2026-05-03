'use client'

import { useEffect, useState } from 'react'
import { Star, TrendingUp } from 'lucide-react'

interface HeroProps {
  data: {
    badge: string
    title: string
    highlight: string
    description: string
    buttonText: string
    image: { src: string; alt: string }
  }
}

export default function Hero({ data }: HeroProps) {
  const [website, setWebsite] = useState('')
  const [count, setCount] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Website submitted:', website)
  }

  // Counter animation for 100+
  useEffect(() => {
    let start = 0
    const end = 100
    const duration = 2000
    const increment = end / (duration / 30)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative pb-24 md:pt-8 md:pb-32 bg-white overflow-hidden"
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Decorative blurred circle */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-5 py-2 mb-8 shadow-sm animate-fade-up">
            <Star className="w-4 h-4 fill-black text-black" />
            <span className="text-sm font-medium text-black">{data.badge}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-[1.05] tracking-tight animate-fade-up animation-delay-100">
            {data.title}
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-3xl italic font-light text-gray-500 mb-8 animate-fade-up animation-delay-200">
            {data.highlight}
          </h2>

          <p className="text-sm text-gray-600 mb-10 max-w-2xl leading-relaxed animate-fade-up animation-delay-300">
            {data.description}
          </p>

          <form onSubmit={handleSubmit} className="mb-12 animate-fade-up animation-delay-400">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                type="url"
                placeholder="Enter Website Address"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="flex-1 px-6 py-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:border-black focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                {data.buttonText}
              </button>
            </div>
          </form>

          {/* Brand logos */}
          <div className="mt-10 animate-fade-up animation-delay-500">
            <p className="text-sm text-gray-500 mb-4">Trusted by global brands</p>
            <div className="flex flex-wrap gap-8 text-2xl font-semibold text-gray-500">
              <span>Google</span>
              <span>Clutch</span>
              <span>HubSpot</span>
              <span>AWS</span>
              <span>Forbes</span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center animate-fade-up animation-delay-500">
          {/* dotted background */}
          <div className="absolute -top-8 -left-8 grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-400"
              ></span>
            ))}
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white p-2">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </div>

          {/* Floating counter card */}
          <div className="absolute -bottom-8 left-6 bg-white/95 backdrop-blur-xl px-6 py-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-black" />
            </div>
            <div>
              <p className="font-bold text-3xl">{count}+</p>
              <p className="text-sm text-gray-500">Successful Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}