'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let startTime: number
    let frame: number
    const update = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(update)
    }
    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [end, duration])
  return count
}

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: 'x', label: 'Avg. ROI Generated' },
  { value: 50, suffix: '+', label: 'Brands Scaled' },
]

export default function CaseStudiesHero() {
  const projects = useCounter(120)
  return (
    <section className="relative min-h-screen flex items-center pt-4 pb-16 overflow-hidden grid-background">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-gray-50 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="animate-fade-in-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Real Work. Real Results.
              </span>
            </div>

            <h1 className="mb-6 text-4xl md:text-5xl lg:text-5xl">
              Our Case<br />
              <span className="italic-text">Studies</span>
            </h1>

            <p className="text-xl text-gray-medium leading-relaxed mb-10 max-w-lg">
              From bold rebrands to performance-led campaigns — explore the work
              we've done for brands that dared to grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#case-grid"
                className="px-10 py-4 bg-black text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/10"
              >
                View All Work <span className="ml-2">↓</span>
              </a>
              <Link
                href="/contact"
                className="px-10 py-4 bg-transparent text-black border border-gray-200 rounded-full font-bold text-xs tracking-widest uppercase hover:border-black transition-all duration-300"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* RIGHT — Stats grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up [animation-delay:200ms]">
            {stats.map((s, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const v = useCounter(s.value)
              return (
                <div
                  key={i}
                  className="bg-white border-2 border-gray-50 hover:border-black rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="text-4xl font-black text-black mb-2">
                    {v}{s.suffix}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {s.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
