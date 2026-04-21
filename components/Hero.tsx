'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Website submitted:', website)
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-40"></div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-5 py-2 mb-8 animate-fade-up">
            <Star className="w-4 h-4 fill-black text-black" />
            <span className="text-sm font-medium text-black">{data.badge}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-[1.1] animate-fade-up">
            {data.title}
          </h1>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-8 animate-fade-up italic font-light text-[#737373]">
            {data.highlight}
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed animate-fade-up">
            {data.description}
          </p>

          <form onSubmit={handleSubmit} className="mb-12 animate-fade-up">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                type="url"
                placeholder="Enter Website Address"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-md focus:border-black focus:outline-none transition-colors text-base"
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                {data.buttonText}
              </button>
            </div>
          </form>
        </div>

        {/* Image Side */}
        <div className="relative h-100 lg:h-150 w-full animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          {/* Optional decorative overlay card or frame */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block">
            <p className="font-bold text-2xl">100+</p>
            <p className="text-sm text-gray-500">Successful Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}