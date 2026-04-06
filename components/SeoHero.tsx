import React from 'react';
import Image from 'next/image';

const SEOHero = () => {
  return (
    <section className="section-padding grid-background relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-medium">
                Top Rated and Award Winning
              </span>
            </div>

            <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl">
              SEO Agency <br />
              <span className="italic-text">That Delivers Results</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-medium leading-relaxed font-light mb-10 max-w-2xl mx-auto lg:mx-0">
              Unlock unparalleled online visibility and drive business growth with our expert 
              managed SEO services, backed by <strong className="text-black">over a decade of proven experience</strong>. 
              With <strong className="text-black">8.5 billion Google searches every day</strong>, the opportunity to capture 
              customer attention has never been greater. Achieve lasting growth through 
              <strong className="text-black text-nowrap"> data-driven strategies</strong> and ethical white-hat practices. 
              SEO can generate returns of up to <strong className="text-black">748% ROI</strong>.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="btn btn-primary px-10 group">
                GET MY FREE PROPOSAL
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Smaller, Centered Image with Floating Stat */}
          <div className="order-1 lg:order-2 relative animate-fade-in-up">
            {/* Changed: Added w-4/5 (80% width) and mx-auto to center it. 
              Adjusted aspect ratio to square for a cleaner 'smaller' look.
            */}
            <div className="relative w-4/5 mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black aspect-square">
              <Image 
                src="/aboutsplits.jpg" 
                alt="SEO Analytics Dashboard"
                fill
                priority
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 70vw, 40vw"
              />
            </div>

            {/* Floating Statistic Card - Adjusted position to stay pinned to the smaller image */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 lg:bottom-12 bg-white p-6 md:p-8 rounded-lg shadow-2xl border border-gray-100 max-w-50 z-10">
              <p className="text-4xl md:text-5xl font-bold text-black mb-1">70%</p>
              <p className="text-xs md:text-sm text-gray-medium leading-tight font-medium">
                of clicks go to the top 5 results
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOHero;