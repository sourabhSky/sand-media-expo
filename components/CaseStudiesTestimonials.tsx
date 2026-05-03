'use client'

import { Quote } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    quote:
      'Sand Media completely transformed our online presence. Within 3 months, our enquiries tripled. These guys are the real deal.',
    name: 'Rohan Mehta',
    title: 'Founder, LuxeHomes India',
    initials: 'RM',
  },
  {
    quote:
      'Our Instagram went from ghost town to buzzing community in under 6 months. The content strategy was spot on.',
    name: 'Priya Sharma',
    title: 'Marketing Head, BrewCraft Udaipur',
    initials: 'PS',
  },
  {
    quote: "The PPC results were beyond what we expected. 5.8x ROAS is insane. I wish we'd found them sooner.",
    name: 'Aakash Verma',
    title: 'CEO, FitLife Studio',
    initials: 'AV',
  },
  {
    quote: "Their attention to detail and creative approach set them apart. We've seen a massive spike in engagement.",
    name: 'Vikram Singh',
    title: 'Director, Royal Heritage Resorts',
    initials: 'VS',
  },
]

export default function CaseStudiesTestimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ])

  return (
    <section className="section-padding bg-black overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">
            Client Voices
          </p>
          <h2 className="text-white m-0 leading-tight">
            What Our Clients<br />
            <span className="italic-text text-gray-300">Say About Us</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 pr-4"
              >
                <div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl h-full flex flex-col">
                  <Quote className="w-8 h-8 text-white/20 mb-6" />
                  <p className="text-white/80 leading-relaxed mb-8 text-sm flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.title}</p>
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
