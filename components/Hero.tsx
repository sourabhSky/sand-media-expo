'use client'

import { useState } from 'react'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  const [website, setWebsite] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Website submitted:', website)
    // Handle form submission
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-background opacity-40"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-5 py-2 mb-8 animate-fade-up">
            <Star className="w-4 h-4 fill-black text-black" />
            <span className="text-sm font-medium text-black">Top Rated and Award Winning</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-6 leading-[1.1] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Digital Marketing Agency in UK
          </h1>

          {/* Subheading with italic emphasis */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            That <span className="italic font-light">Delivers Results</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Accelerate your business growth with our multi award-winning, Full Service Digital Marketing Agency in UK, offering a broad spectrum of tailored digital solutions. With headquarters in the UK and branches worldwide, our proven expertise ensures you outpace the competition and achieve measurable success.
          </p>

          {/* Website Form */}
          <form onSubmit={handleSubmit} className="mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                type="url"
                placeholder="Enter Website Address"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-md focus:border-black focus:outline-none transition-colors text-base"
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                GET MY FREE PROPOSAL
              </button>
            </div>
          </form>

          {/* Review Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {[
              { platform: 'Trustpilot', rating: '4.9/5', reviews: '(98 Reviews)' },
              { platform: 'Google', rating: '4.9/5', reviews: '(64 Reviews)' },
              { platform: 'GoodFirms', rating: '5/5', reviews: '(60 Reviews)' },
              { platform: 'Clutch', rating: '5/5', reviews: '(65 Reviews)' },
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="font-semibold text-black mb-1">{review.platform}</div>
                <div className="text-2xl font-bold text-black mb-1">{review.rating}</div>
                <div className="text-sm text-gray-600">{review.reviews}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  )
}
