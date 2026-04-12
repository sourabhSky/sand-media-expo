import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: "📘",
    title: "Meta Ads — Facebook & Instagram",
    desc: "Reach your ideal audience with scroll-stopping creatives on Facebook and Instagram. We handle full-funnel Meta strategy from awareness to conversion.",
    tags: ["Facebook Ads", "Instagram Ads", "Lookalike Audiences", "Reels Ads"],
    linkText: "Explore Meta Ads",
    href: "#contact",
    featured: false,
  },
  {
    icon: "🔄",
    title: "Retargeting Campaigns",
    desc: "Win back lost visitors and warm leads with precision retargeting across Google, Meta, and YouTube. Convert the 97% who didn't buy the first time.",
    tags: ["Dynamic Retargeting", "Cart Abandonment", "Cross-Platform"],
    linkText: "Learn More",
    href: "#contact",
    featured: false,
  },
  {
    icon: "🚀",
    title: "Funnel Optimization",
    desc: "Traffic means nothing without conversion. We audit, redesign, and optimize your entire ad funnel — from click to close — to maximise every rupee spent.",
    tags: ["Landing Pages", "CRO Audit", "A/B Testing"],
    linkText: "Optimise My Funnel",
    href: "#contact",
    featured: false,
  },
];

export default function PerformanceServices() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            What We Do
          </p>
          <h2 className="mb-6 leading-tight">
            Performance Ad Services<br />
            <span className="italic-text text-black">Built to Scale Revenue</span>
          </h2>
          <p className="text-xl text-gray-medium leading-relaxed">
            Every service is engineered around one goal: maximum return on your ad spend. 
            No vanity metrics — just real, measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up [animation-delay:100ms]">
          
          {/* Featured Wide Card: Google Ads */}
          <div className="md:col-span-2 lg:col-span-3 group relative bg-black rounded-[2.5rem] overflow-hidden p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-900 to-black opacity-50" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  🔍
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 font-poppins">
                  Google Ads — Search, Display & YouTube
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
                  Capture high-intent buyers the moment they search. We build tightly structured campaigns 
                  across Search, Display, Shopping, and YouTube with continuous optimization for maximum ROAS.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Search Campaigns", "Display Network", "YouTube Ads", "Shopping Ads", "Performance Max"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="#contact" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-white/20 pb-1 hover:border-white transition-all">
                  Start Google Ads <span>→</span>
                </Link>
              </div>

              {/* Featured Stat Badge */}
              <div className="flex flex-col items-center justify-center bg-white text-black p-10 rounded-full w-48 h-48 text-center shrink-0 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <span className="text-4xl font-black font-poppins">6.2×</span>
                <span className="text-[10px] font-bold uppercase leading-tight mt-1">Avg. ROAS<br />on Google</span>
              </div>
            </div>
          </div>

          {/* Standard Service Cards */}
          {services.map((svc, idx) => (
            <div 
              key={idx}
              className="group bg-gray-light p-10 rounded-[2.5rem] border border-gray-100 hover:border-black transition-all duration-500 flex flex-col"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-black leading-tight">
                {svc.title}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed mb-8 flex-1">
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {svc.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={svc.href} className="inline-flex items-center gap-2 text-black font-bold text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                {svc.linkText} <span>→</span>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}