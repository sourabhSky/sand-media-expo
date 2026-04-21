'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ResultsSlider({ data }: { data: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % data.studies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + data.studies.length) % data.studies.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD]" id="results">
      <div className="container-custom px-5">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
              {data.sectionHeader.badge}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              {data.sectionHeader.title} <span className="italic font-light text-gray-500">{data.sectionHeader.titleItalic}</span>
            </h2>
          </div>
          <Link href="#contact" className="hidden md:block px-8 py-4 bg-black text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gray-800 transition-all">
            {data.sectionHeader.cta}
          </Link>
        </div>

        {/* Slider Area */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {data.studies.map((slide: any, idx: number) => (
              <div key={idx} className="min-w-full">
                <div className="bg-white rounded-[2.5rem] border border-gray-100 flex flex-col lg:flex-row min-h-[500px] overflow-hidden shadow-sm">
                  
                  {/* Left Side: Story */}
                  <div className="lg:w-3/5 p-8 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-50">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 bg-gray-50 px-3 py-1 rounded-full self-start">
                      {slide.tag}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-bold mb-6 text-black leading-tight">
                      {slide.headline}
                    </h3>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                      {slide.desc}
                    </p>
                    <Link href="#contact" className="text-black font-bold text-xs uppercase tracking-widest border-b-2 border-black/10 pb-1 self-start hover:border-black transition-all">
                      {slide.cta}
                    </Link>
                  </div>

                  {/* Right Side: Metrics - Eye Friendly Dark Grey */}
                  <div className="lg:w-2/5 bg-[#1A1A1A] p-8 md:p-14 grid grid-cols-2 gap-8 content-center">
                    {slide.metrics.map((m: any, mIdx: number) => (
                      <div key={mIdx} className={`${m.wide ? 'col-span-2' : ''}`}>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{m.num}</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{m.lbl}</div>
                        <div className="text-[10px] text-gray-400 italic">{m.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Pagination & Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
          <div className="flex gap-3 order-2 md:order-1">
            {data.studies.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  currentSlide === i ? "w-10 bg-black" : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
          
          <div className="flex gap-4 order-1 md:order-2">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              ←
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}