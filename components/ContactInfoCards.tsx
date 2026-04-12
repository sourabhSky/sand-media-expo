import React from 'react';

const contactMethods = [
  {
    icon: "✉️",
    label: "Email Address",
    value: "hello@growthlab.agency",
    sub: "We reply within 24 business hours, usually much faster.",
    href: "mailto:hello@growthlab.agency",
  },
  {
    icon: "📞",
    label: "Phone Number",
    value: "+92 300 123 4567",
    sub: "Mon – Sat, 10am – 7pm PKT. We love a good conversation.",
    href: "tel:+923001234567",
  },
  {
    icon: "📍",
    label: "Office Location",
    value: "Studio 4B, Creative Quarter",
    sub: "Lahore, Pakistan — walk-ins welcome by appointment.",
    href: "#",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="section-padding bg-white" id="info">
      <div className="container-custom">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            Reach Us Directly
          </p>
          <h2 className="mb-6 leading-tight">
            Multiple Ways to<br />
            <span className="italic-text text-black">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-medium leading-relaxed">
            Prefer a call? An email? A visit? We&apos;re available across all channels — choose what works best for you.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 animate-fade-in-up [animation-delay:100ms]">
          {contactMethods.map((method, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-light p-10 rounded-3xl border border-gray-100 hover:border-black transition-all duration-500 hover:shadow-2xl hover:shadow-black/5"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {method.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                {method.label}
              </p>
              <p className="text-lg font-bold text-black mb-4 font-poppins">
                {method.value}
              </p>
              <p className="text-sm text-gray-medium leading-relaxed">
                {method.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="animate-fade-in-up [animation-delay:200ms]">
          <p className="text-[10px] font-black uppercase tracking-widest text-black mb-6">
            Quick Actions
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="tel:+923001234567" 
              className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-base">📞</span> Call Now
            </a>
            <a 
              href="https://wa.me/923001234567" 
              className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-black rounded-xl font-bold text-xs tracking-widest uppercase hover:border-black hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <span className="text-base">💬</span> WhatsApp Us
            </a>
            <a 
              href="mailto:hello@growthlab.agency" 
              className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 text-black rounded-xl font-bold text-xs tracking-widest uppercase hover:border-black hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <span className="text-base">✉️</span> Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}