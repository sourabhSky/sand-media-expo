"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    tag: "📦 E-Commerce · Google Shopping",
    client: "CartX — Online Retail Brand",
    headline: "From ₹80K/mo ad spend to ₹6.4M in revenue in 90 days",
    desc: "We restructured their entire Google Shopping and Performance Max setup, built audience segments from scratch, and cut wasted spend by 42% — tripling their ROAS within 3 months.",
    cta: "Get a Similar Strategy →",
    metrics: [
      { num: "8.1×", lbl: "ROAS Achieved", change: "↑ from 2.4× baseline" },
      { num: "-42%", lbl: "Wasted Spend", change: "↓ month-over-month" },
      { num: "₹6.4M", lbl: "Revenue Generated in 90 Days", change: "↑ 312% YoY growth", wide: true },
    ]
  },
  {
    tag: "🏠 Real Estate · Meta Lead Ads",
    client: "EliteHomes — Property Developer",
    headline: "240 qualified property leads in 30 days at ₹1,200 CPL",
    desc: "Using hyper-local Facebook audience targeting, video creatives, and an optimised lead funnel, we delivered 240 high-quality property enquiries in just one month — at 60% below industry CPL.",
    cta: "Generate Leads Like This →",
    metrics: [
      { num: "240", lbl: "Qualified Leads", change: "↑ in 30 days" },
      { num: "₹1.2K", lbl: "Cost Per Lead", change: "↓ 60% vs. industry avg" },
      { num: "18×", lbl: "Return on Ad Spend (ROAS)", change: "↑ top-performing campaign", wide: true },
    ]
  },
  {
    tag: "💊 Health Brand · Google + Meta",
    client: "MedixCo. — Wellness Supplements",
    headline: "Scaled from ₹40K to ₹4.2M/month in revenue — 6× ROAS",
    desc: "A full-funnel strategy across Google Search, YouTube pre-rolls, and Meta prospecting combined with retargeting helped MedixCo. 10X their monthly revenue while maintaining 6× ROAS across all channels.",
    cta: "Scale My Brand →",
    metrics: [
      { num: "6.0×", lbl: "Blended ROAS", change: "↑ Google + Meta combined" },
      { num: "10X", lbl: "Revenue Growth", change: "↑ in 5 months" },
      { num: "₹4.2M", lbl: "Monthly Revenue at Scale", change: "↑ from ₹40K starting point", wide: true },
    ]
  }
];

export default function ResultsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  // Optional: Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-gray-light overflow-hidden" id="results">
      <div className="container-custom">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 animate-fade-in-up">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
              Case Studies
            </p>
            <h2 className="m-0 leading-tight">
              Real Results for <span className="italic-text">Real Brands</span>
            </h2>
          </div>
          <Link href="#contact" className="px-10 py-4 bg-black text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
            Get Similar Results →
          </Link>
        </div>

        {/* Slider Area */}
        <div className="relative animate-fade-in-up [animation-delay:100ms]">
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {caseStudies.map((slide, idx) => (
              <div key={idx} className="min-w-full px-1">
                <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 flex flex-col lg:flex-row min-h-125 shadow-sm">
                  
                  {/* Left Side: Story */}
                  <div className="lg:w-3/5 p-8 md:p-14 flex flex-col justify-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 bg-gray-light inline-block self-start px-3 py-1 rounded-full">
                      {slide.tag}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                      <p className="text-sm font-bold text-black uppercase tracking-tighter">
                        {slide.client}
                      </p>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-black leading-tight">
                      {slide.headline}
                    </h3>
                    <p className="text-gray-medium text-lg leading-relaxed mb-10 max-w-xl">
                      {slide.desc}
                    </p>
                    <Link href="#contact" className="text-black font-bold text-xs uppercase tracking-widest border-b-2 border-black pb-1 self-start hover:opacity-60 transition-opacity">
                      {slide.cta}
                    </Link>
                  </div>

                  {/* Right Side: Metrics */}
                  <div className="lg:w-2/5 bg-black p-8 md:p-14 grid grid-cols-2 gap-6 content-center">
                    {slide.metrics.map((m, mIdx) => (
                      <div key={mIdx} className={`${m.wide ? 'col-span-2 mt-4 pt-6 border-t border-white/10' : ''}`}>
                        <div className="text-3xl md:text-4xl font-black text-white font-poppins mb-1">{m.num}</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{m.lbl}</div>
                        <div className="text-[10px] text-white/50">{m.change}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-xl hover:bg-black hover:text-white transition-all duration-300"
              >
                →
              </button>
            </div>
            
            <div className="flex gap-3">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    currentSlide === i ? "w-12 bg-black" : "w-3 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}