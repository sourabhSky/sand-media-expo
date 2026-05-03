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
      loop: true,
      skipSnaps: false
    },
    [
      Autoplay({
        delay: 5000, // 5 seconds per slide for better readability
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="section-padding bg-black text-white relative overflow-hidden" id="testimonials">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gray-900 rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-900 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center md:items-end md:flex-row justify-between gap-8 mb-8 animate-fade-in-up text-center md:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-gray-400 mb-6 border border-gray-800">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
                Client Stories
              </p>
            </div>

            <h3 className="text-white mb-3 font-poppins leading-[1.1]">
              What Our Clients<br />
              <span className="text-gradient italic-text !from-white !to-gray-500">Actually Say</span>
            </h3>
          </div>

          <div className="hidden md:flex gap-4 justify-center md:justify-start">
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer group"
              aria-label="Previous testimonial"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </button>
            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer group"
              aria-label="Next testimonial"
            >
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing " ref={emblaRef}>
          <div className="flex gap-6 py-4 ">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="h-full bg-linear-to-b from-gray-900/50 to-black border border-gray-800 p-8 md:p-10 rounded-[2rem] flex flex-col justify-between group hover:border-gray-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                  <div>
                    <div className="flex gap-1 mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-yellow-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 group-hover:text-white transition-colors">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-8 border-t border-gray-800/50">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-linear-to-br from-white to-gray-400 text-black font-black flex items-center justify-center text-base shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {t.initials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black border-2 border-gray-900 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg leading-tight group-hover:text-white transition-colors">{t.author}</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em] mt-1.5 flex items-center gap-2">
                        <span className="w-4 h-px bg-gray-800" />
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Arrows (Visible only on Mobile) */}
        <div className="flex md:hidden justify-center gap-4 mt-10 animate-fade-in-up">
          <button
            onClick={scrollPrev}
            className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer active:scale-95"
            aria-label="Previous testimonial"
          >
            <span>←</span>
          </button>
          <button
            onClick={scrollNext}
            className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 cursor-pointer active:scale-95"
            aria-label="Next testimonial"
          >
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}