"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// 1. Import Autoplay
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  /* ... same testimonial data as before ... */
  {
    quote: ".sand Media rebuilt our entire brand identity from the ground up. The new positioning, visual system, and website completely transformed how we show up in market. Enquiry quality improved immediately — and measurably.",
    author: "Reza Khalil",
    role: "CEO, Khalil Architecture — Dubai",
    initials: "RK",
  },
  {
    quote: "The team genuinely cares about results, not just deliverables. They challenged our thinking, pushed back where needed, and ultimately delivered a brand and website that we're incredibly proud of. Would not hesitate to recommend.",
    author: "Sophie Laurent",
    role: "CMO, Maison Skincare — London",
    initials: "SL",
  },
  {
    quote: "Best investment we made during our Series A year. .sand Media helped us define and articulate our positioning in a crowded SaaS market. Our website conversion rate doubled within three months of relaunch.",
    author: "Aman Mehta",
    role: "Founder, Stackly — Karachi / London",
    initials: "AM",
  },
  {
    quote: ".sand Media rebuilt our entire brand identity from the ground up. The new positioning, visual system, and website completely transformed how we show up in market. Enquiry quality improved immediately — and measurably.",
    author: "Reza Khalil",
    role: "CEO, Khalil Architecture — Dubai",
    initials: "RK",
  },
  {
    quote: "The team genuinely cares about results, not just deliverables. They challenged our thinking, pushed back where needed, and ultimately delivered a brand and website that we're incredibly proud of. Would not hesitate to recommend.",
    author: "Sophie Laurent",
    role: "CMO, Maison Skincare — London",
    initials: "SL",
  },
  {
    quote: "Best investment we made during our Series A year. .sand Media helped us define and articulate our positioning in a crowded SaaS market. Our website conversion rate doubled within three months of relaunch.",
    author: "Aman Mehta",
    role: "Founder, Stackly — Karachi / London",
    initials: "AM",
  },
];

export default function Testimonials() {
  // 2. Initialize the Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start", 
      loop: true 
    }, 
    [
      Autoplay({ 
        delay: 4000, // 4 seconds per slide
        stopOnInteraction: false, // Continue playing after user clicks buttons
        stopOnMouseEnter: true    // Pause when user hovers to read
      })
    ]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="section-padding bg-black text-white overflow-hidden" id="testimonials">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-in-up">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Client Stories
            </p>
            <h2 className="text-white mb-6 font-poppins">
              What Our Clients<br />
              <span className="italic-text text-white">Actually Say</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              ←
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="h-full bg-gray-dark border border-gray-800 p-10 rounded-3xl flex flex-col justify-between group hover:border-gray-600 transition-colors">
                  <div>
                    <div className="text-yellow-500 text-sm tracking-widest mb-6">★★★★★</div>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-gray-800 pt-8">
                    <div className="w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white leading-tight">{t.author}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}