import React from 'react';

const reasons = [
  {
    icon: "🧠",
    title: "Creative Strategy First",
    desc: "We never separate creative from strategy. Every piece of output — from a logo to a campaign — is rooted in a clear strategic rationale. Beautiful work that doesn't perform is decoration, not design."
  },
  {
    icon: "📊",
    title: "Data-Driven Approach",
    desc: "Intuition gets you started; data keeps you honest. We build measurement frameworks from day one and let performance inform every creative and strategic decision we make."
  },
  {
    icon: "🔧",
    title: "Scalable Solutions",
    desc: "We build systems, not just campaigns. Whether you're a 10-person startup or a 500-person scale-up, our work is designed to grow with your ambition — no rebuilding required."
  },
  {
    icon: "💬",
    title: "Dedicated, Responsive Support",
    desc: "You'll have a named account lead who knows your brand inside out — not a rotating junior who needs onboarding every quarter. Real people, real accountability, real responsiveness."
  },
  {
    icon: "🎯",
    title: "Honest, Transparent Pricing",
    desc: "No retainer bloat, no hidden costs, no surprise invoices. We scope projects clearly, price them fairly, and never bill for work we haven't delivered. Trust starts with the first invoice."
  },
  {
    icon: "🌍",
    title: "Global Thinking, Local Understanding",
    desc: "Our team brings international creative standards with genuine regional market knowledge — particularly across the GCC, South Asia, and the UK. Context is everything in brand communication."
  }
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-gray-light " id="why-us">
      <div className="container-custom">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 animate-fade-in-up ">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            Why .sand Media
          </p>
          <h3 className="mb-6">
            The Difference That<br />
            <span className="italic-text">Actually Matters</span>
          </h3>
          <p className="text-sm text-gray-medium leading-relaxed">
            We&apos;ve heard every agency promise. Here&apos;s what we actually deliver — consistently, transparently, and without the fluff.
          </p>
        </div>

        {/* Why Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 animate-fade-in-up [animation-delay:200ms]">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Icon Box */}
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:bg-black group-hover:border-black group-hover:shadow-xl transition-all duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300 ">
                  {item.icon}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3  ">
                <h3 className="text-xl font-bold font-poppins text-black">
                  {item.title}
                </h3>
                <p className="text-gray-medium text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}