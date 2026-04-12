import React from 'react';
import Link from 'next/link';

const tiers = [
  {
    badge: "Starter",
    name: "Growth",
    desc: "For brands ready to launch their first performance campaigns and start generating consistent leads.",
    price: "₹35K",
    per: "/ month + ad spend",
    featured: false,
    features: [
      "1 Platform (Google OR Meta)",
      "Up to ₹1.5L monthly ad spend",
      "Campaign setup & management",
      "Monthly performance report",
      "Conversion tracking setup",
      "Bi-weekly strategy call",
    ],
    cta: "Get Started →",
  },
  {
    badge: "Most Popular",
    name: "Scale",
    desc: "Our flagship package for businesses ready to dominate across Google and Meta with full-funnel execution.",
    price: "₹85K",
    per: "/ month + ad spend",
    featured: true,
    features: [
      "Both Google + Meta Ads",
      "Up to ₹5L monthly ad spend",
      "Full campaign architecture",
      "A/B creative testing",
      "Retargeting campaigns",
      "Landing page CRO",
      "Weekly strategy calls",
      "Live reporting dashboard",
    ],
    cta: "Start Scaling →",
  },
  {
    badge: "Enterprise",
    name: "Dominate",
    desc: "For high-growth brands with large budgets who want a dedicated team and full-stack performance marketing execution.",
    price: "₹2L+",
    per: "/ month + ad spend",
    featured: false,
    features: [
      "All platforms (Google, Meta, YouTube)",
      "Unlimited ad spend management",
      "Dedicated account strategist",
      "Creative production team",
      "Full funnel build & CRO",
      "AI optimisation tools",
      "Daily performance monitoring",
      "Priority support (2hr response)",
    ],
    cta: "Let's Talk →",
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-white" id="pricing">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            Investment
          </p>
          <h2 className="mb-6">
            Transparent Pricing.<br />
            <span className="italic-text">Premium Execution.</span>
          </h2>
          <p className="text-lg text-gray-medium leading-relaxed">
            We work with brands serious about growth. Our pricing reflects the 
            expertise, systems, and results we deliver — not the cheapest option in the market.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start animate-fade-in-up [animation-delay:100ms]">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${
                tier.featured 
                ? "bg-black text-white border-black shadow-2xl scale-105 z-10" 
                : "bg-gray-light text-black border-gray-100 hover:border-black"
              }`}
            >
              {/* Badge */}
              <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 ${
                tier.featured ? "bg-white/10 text-white" : "bg-white text-black border border-gray-200"
              }`}>
                {tier.badge}
              </span>

              <h3 className={`text-3xl font-bold mb-4 ${tier.featured ? "text-white" : "text-black"}`}>
                {tier.name}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-8 ${tier.featured ? "text-gray-400" : "text-gray-medium"}`}>
                {tier.desc}
              </p>

              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black font-poppins">{tier.price}</span>
                  <span className="text-xs opacity-60">{tier.per}</span>
                </div>
              </div>

              <div className={`h-1px w-full mb-8 ${tier.featured ? "bg-white/10" : "bg-gray-200"}`} />

              <div className="space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <span className={tier.featured ? "text-white" : "text-black"}>✓</span>
                    <span className={`text-sm ${tier.featured ? "text-gray-300" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link 
                href="#contact"
                className={`block w-full py-4 rounded-2xl text-center font-bold text-xs tracking-widest uppercase transition-all duration-300 ${
                  tier.featured
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800 shadow-xl shadow-black/5"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-gray-medium mt-12 animate-fade-in-up [animation-delay:200ms]">
          All plans include onboarding, tracking setup, and a 30-day performance review. 
          <br className="hidden md:block" /> Custom packages available for seasonal campaigns.
        </p>
      </div>
    </section>
  );
}