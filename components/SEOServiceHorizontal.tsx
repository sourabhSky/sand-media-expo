"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SEO_SERVICES = [
  {
    id: "technical",
    title: "Technical SEO",
    href: "/seo/technical",
    description: "Faster site performance and enhanced crawlability. We optimize site structure and speed for improved user experience and streamlined indexing.",
    bullets: ["Faster site performance", "Enhanced crawlability", "Security boost", "Core Web Vitals"]
  },
  {
    id: "local",
    title: "Local SEO",
    href: "/seo/local",
    description: "Targeted reach to attract nearby customers. Enhance visibility in local searches and drive foot traffic to physical locations.",
    bullets: ["Targeted local reach", "Increased foot traffic", "Google Maps Optimization", "Local Citations"]
  },
  {
    id: "mobile",
    title: "Mobile SEO",
    href: "/seo/mobile",
    description: "Optimal mobile experience for better engagement. Boost rankings on mobile searches and ensure faster loading times on all devices.",
    bullets: ["Responsive design audit", "Mobile indexing", "Speed optimization", "Touch-target UX"]
  }
];

const SEOServiceHorizontal = () => {
  const [activeTab, setActiveTab] = useState(SEO_SERVICES[0]);

  return (
    <section 
      id="services" 
      className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white scroll-mt-24"
    >
      <div className="container-custom">
        
        {/* 1. Header Area */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase tracking-tight mb-6">
            SEO <span className="italic-text font-light text-gray-medium">Solutions</span>
          </h2>
        </div>

        {/* 2. Horizontal Navbar Style Selector */}
        <div className="flex border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
          {SEO_SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service)}
              className={`pb-4 px-2 mr-10 text-sm md:text-base font-bold uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                activeTab.id === service.id ? 'text-black' : 'text-gray-medium hover:text-black'
              }`}
            >
              {service.title}
              {activeTab.id === service.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black animate-fade-in" />
              )}
            </button>
          ))}
        </div>

        {/* 3. The Content Card */}
        <div className="bg-gray-light rounded-2xl border border-gray-200 p-8 lg:p-16 animate-fade-in-up shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side of card: Text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-gray-medium uppercase tracking-widest mb-4 block">
                Service Strategy 0{SEO_SERVICES.indexOf(activeTab) + 1}
              </span>
              <h3 className="text-3xl md:text-5xl font-bold uppercase mb-6 leading-tight">
                {activeTab.title}
              </h3>
              <p className="text-xl text-gray-medium font-light leading-relaxed mb-8 max-w-2xl">
                {activeTab.description}
              </p>
              
              <Link href={activeTab.href} className="btn btn-primary group w-full md:w-fit">
                GET STARTED
                <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>

            {/* Right side of card: Benefits Checklist */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0 lg:pl-12">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-black">What we cover:</h4>
              <ul className="space-y-5">
                {activeTab.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center text-lg font-medium text-black">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOServiceHorizontal;