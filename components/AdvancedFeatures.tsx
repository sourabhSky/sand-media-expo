'use client'

import React from 'react';

interface AdvancedFeaturesProps {
  data: any; // Use the interface from previous steps if preferred
}

export default function AdvancedFeatures({ data }: AdvancedFeaturesProps) {
  return (
    <section className={`py-16 md:py-24 ${data.colors.background}`} id="features">
      <div className="container-custom px-5">
        
        {/* Header - Improved spacing for mobile */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4">
            {data.header.badge}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 leading-tight">
            {data.header.titleMain}<br />
            <span className="italic font-light text-gray-400">{data.header.titleItalic}</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            {data.header.description}
          </p>
        </div>

        {/* Features Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {data.features.map((feature: any, idx: number) => (
            <div 
              key={idx}
              className={`p-7 md:p-10 rounded-[2rem] border transition-all duration-300 ${
                feature.isDark 
                ? `${data.colors.cardDark} border-white/5` 
                : `${data.colors.cardLight} border-transparent`
              }`}
            >
              {/* Icon Container - Smaller for mobile */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 ${
                feature.isDark ? "bg-white/5 text-white" : "bg-gray-200/50 text-black"
              }`}>
                {feature.icon}
              </div>

              <h3 className={`text-xl md:text-2xl font-bold mb-3 ${
                feature.isDark ? "text-gray-100" : "text-black"
              }`}>
                {feature.title}
              </h3>

              <p className={`text-sm md:text-base leading-relaxed mb-6 ${
                feature.isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                {feature.desc}
              </p>

              {/* Minimalist List */}
              <div className="space-y-3 pt-6 border-t border-gray-500/10">
                {feature.list.map((item: string, iIdx: number) => (
                  <div key={iIdx} className="flex items-center gap-3">
                    <div className={`w-1 h-1 rounded-full ${feature.isDark ? "bg-gray-600" : "bg-gray-300"}`} />
                    <span className={`text-[11px] font-semibold tracking-wider uppercase ${
                      feature.isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}