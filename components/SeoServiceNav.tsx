"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SEO_SERVICES = [
  {
    id: "technical",
    title: "Technical SEO",
    href: "/seo/technical",
    description: "Faster site performance and enhanced crawlability. We optimize site structure and speed for improved user experience and streamlined indexing.",
    bullets: ["Faster site performance", "Enhanced crawlability", "Security boost"]
  },
  {
    id: "local",
    title: "Local SEO",
    href: "/seo/local",
    description: "Targeted reach to attract nearby customers. Enhance visibility in local searches and drive foot traffic to physical locations.",
    bullets: ["Targeted reach", "Increased foot traffic", "Local reputation"]
  },
  {
    id: "mobile",
    title: "Mobile SEO",
    href: "/seo/mobile",
    description: "Optimal mobile experience for better engagement. Boost rankings on mobile searches and ensure faster loading times on all devices.",
    bullets: ["Optimal mobile experience", "Higher mobile rankings", "Faster loading times"]
  }
];

const SEOServiceNav = () => {
  const [activeTab, setActiveTab] = useState(SEO_SERVICES[0]);

  return (
    <section 
      id="services" 
      /* pt-32 ensures it starts BELOW your navigation bar */
      className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white border-b border-gray-100 scroll-mt-20"
    >
      <div className="container-custom">
        
        {/* Header - Unified and clean */}
        <div className="max-w-4xl mb-12 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase tracking-tight mb-6">
            SEO <span className="italic-text font-light text-gray-medium">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-medium font-light leading-relaxed">
            Strategic search engine optimization tailored for high-growth brands. 
            We focus on technical excellence and local dominance.
          </p>
        </div>

        {/* The Tabs Interface */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            {SEO_SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`text-left px-6 py-4 rounded-lg border transition-all shrink-0 lg:shrink ${
                  activeTab.id === service.id 
                  ? 'bg-black border-black text-white shadow-lg' 
                  : 'bg-transparent border-transparent text-gray-medium hover:text-black hover:bg-gray-50'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${activeTab.id === service.id ? 'text-gray-400' : 'text-gray-medium'}`}>
                  Service
                </span>
                <span className="text-base lg:text-lg font-bold whitespace-nowrap lg:whitespace-normal">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content Window - Uses 'flex-1' to fill remaining space properly */}
          <div className="flex-1 w-full bg-gray-light rounded-2xl p-8 lg:p-14 border border-gray-200 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-5xl font-bold uppercase mb-4">{activeTab.title}</h3>
                <p className="text-lg lg:text-xl text-gray-medium font-light leading-relaxed">
                  {activeTab.description}
                </p>
              </div>
              <span className="text-6xl lg:text-8xl font-serif italic text-gray-200 leading-none">
                0{SEO_SERVICES.indexOf(activeTab) + 1}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
              {activeTab.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start group">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4 shrink-0 transition-transform group-hover:scale-125" />
                  <p className="text-black font-medium text-lg leading-snug">{bullet}</p>
                </div>
              ))}
            </div>

            <Link href={activeTab.href} className="btn btn-primary w-full md:w-fit group">
              GET STARTED
              <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SEOServiceNav;