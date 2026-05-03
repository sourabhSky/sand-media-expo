'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const filters = ['All', 'SEO', 'Web Dev', 'Social Media', 'PPC', 'Photography']

const caseStudies = [
  {
    id: 1,
    category: 'SEO',
    client: 'LuxeHomes India',
    title: 'From Page 4 to #1 — A Real Estate SEO Overhaul',
    description:
      'A comprehensive SEO strategy that drove a 340% increase in organic traffic in just 6 months, dominating competitive real estate keywords.',
    results: [
      { label: 'Organic Traffic', value: '+340%' },
      { label: 'Keyword Rankings', value: '#1 × 28' },
      { label: 'Lead Growth', value: '+210%' },
    ],
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
    gradient: 'from-gray-900 to-gray-700',
    accent: 'bg-white text-black',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'PPC',
    client: 'FitLife Studio',
    title: 'Cutting CAC by 60% with Smart PPC Campaigns',
    description:
      'Rebuilt their entire paid media funnel with precision targeting, reducing cost per acquisition while tripling membership sign-ups.',
    results: [
      { label: 'CAC Reduced', value: '−60%' },
      { label: 'ROAS', value: '5.8x' },
      { label: 'Conversions', value: '+3×' },
    ],
    tags: ['Google Ads', 'Meta Ads', 'Funnel Design'],
    gradient: 'from-black to-gray-800',
    accent: 'bg-white text-black',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Web Dev',
    client: 'Bloom Bakery',
    title: 'A Shopify-Powered Store That Sells While They Sleep',
    description:
      'Custom-built e-commerce experience with seamless UX, same-day delivery features, and mobile-first design that doubled online revenue.',
    results: [
      { label: 'Online Revenue', value: '+200%' },
      { label: 'Bounce Rate', value: '−42%' },
      { label: 'Avg. Order Value', value: '+38%' },
    ],
    tags: ['E-Commerce', 'UX Design', 'Shopify'],
    gradient: 'from-gray-800 to-gray-600',
    accent: 'bg-black text-white',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Social Media',
    client: 'BrewCraft Udaipur',
    title: 'Building a Cult Brand on Instagram — 0 to 80K',
    description:
      'A local craft brewery went from zero social presence to 80,000 engaged followers with a content strategy rooted in storytelling and community.',
    results: [
      { label: 'Followers', value: '80K+' },
      { label: 'Engagement Rate', value: '7.2%' },
      { label: 'Walk-ins from Social', value: '+180%' },
    ],
    tags: ['Instagram', 'Reels', 'Community Building'],
    gradient: 'from-gray-900 to-black',
    accent: 'bg-white text-black',
    image: 'https://images.unsplash.com/photo-1575037614876-c38e4d28f712?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Photography',
    client: 'Maheswari Fabrics',
    title: 'Product Photography That Tripled Catalogue Sales',
    description:
      'High-end commercial photography and videography that elevated this heritage textile brand and drove a 3x spike in their B2B catalogue orders.',
    results: [
      { label: 'Catalogue Orders', value: '+3×' },
      { label: 'Brand Perception', value: 'Premium' },
      { label: 'Shoot Duration', value: '3 Days' },
    ],
    tags: ['Commercial', 'Studio Shoot', 'Retouching'],
    gradient: 'from-black to-gray-700',
    accent: 'bg-white text-black',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 6,
    category: 'SEO',
    client: 'LegalEdge Advisors',
    title: 'Dominating Local Search for a Law Firm in 90 Days',
    description:
      'Local SEO overhaul with GMB optimisation, hyper-local content and authority building that made them the #1 search result in Rajasthan.',
    results: [
      { label: 'Local Rankings', value: '#1 Maps' },
      { label: 'Organic Calls', value: '+275%' },
      { label: 'Time to Results', value: '90 Days' },
    ],
    tags: ['Local SEO', 'GMB', 'Content'],
    gradient: 'from-gray-700 to-gray-900',
    accent: 'bg-white text-black',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop',
  },
]

export default function CaseStudiesGrid() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? caseStudies : caseStudies.filter((c) => c.category === active)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) emblaApi.reInit()
  }, [active, emblaApi])

  return (
    <section id="case-grid" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
              Portfolio
            </p>
            <h2 className="m-0 leading-tight text-4xl md:text-5xl lg:text-5xl">
              Featured <br />
              <span className="italic-text">Projects</span>
            </h2>
          </div>

          {/* Filters & Navigation */}
          <div className="flex flex-col items-end gap-6">
            <div className="flex flex-wrap justify-end gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${active === f
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies Slider */}
        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex">
            {filtered.map((cs) => (
              <div
                key={cs.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 pr-4 py-2"
              >
                <div className="group relative bg-white border-2 border-gray-50 hover:border-black rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                  {/* Visual header */}
                  <div className={`bg-gradient-to-br ${cs.gradient} h-48 relative flex items-end p-8 shrink-0 overflow-hidden`}>
                    {/* Background Image with Overlay */}
                    {cs.image && (
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={cs.image} 
                          alt={cs.title} 
                          className="w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                        />
                      </div>
                    )}
                    <div className="relative z-10">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${cs.accent}`}>
                        {cs.category}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6 opacity-30 text-white font-black text-6xl leading-none select-none z-10">
                      {cs.id.toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                      {cs.client}
                    </p>
                    <h3 className="text-xl font-bold text-black mb-3 leading-tight line-clamp-2">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                      {cs.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-50 rounded-2xl mt-auto">
                      {cs.results.map((r, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-black text-black">{r.value}</div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mt-0.5">{r.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.tags.map((t, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-bold text-black border-b-2 border-transparent group-hover:border-black transition-all duration-300 pb-1 w-fit mt-auto">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
