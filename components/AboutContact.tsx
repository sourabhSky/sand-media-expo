"use client";
import React, { useState } from "react";

export default function AboutContact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("sent");
    }, 1500);
  };

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT — INFO */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
              Get In Touch
            </p>
            <h2 className="mb-6 leading-[1.1]">
              Let&apos;s Talk About<br />
              <span className="italic-text">Your Next Project</span>
            </h2>
            <p className="text-lg text-gray-medium leading-relaxed mb-10 max-w-md">
              Tell us what you&apos;re working on — whether it&apos;s a brand refresh, 
              a new website, or a full growth strategy. We&apos;ll come back to you 
              within one business day.
            </p>

            <div className="space-y-6">
              {[
                { icon: "✉️", title: "hello@sandmedia.co", sub: "Replied within 24 hours", href: "mailto:hello@sandmedia.co" },
                { icon: "📞", title: "+92 300 123 4567", sub: "Mon – Fri, 9am – 6pm PKT", href: "tel:+923001234567" },
                { icon: "💬", title: "WhatsApp Us", sub: "Quickest way to reach us", href: "https://wa.me/923001234567" },
                { icon: "📍", title: "Lahore · Dubai · London", sub: "Globally distributed team", href: "#" },
              ].map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-light flex items-center justify-center text-xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-bold text-black group-hover:underline decoration-1 underline-offset-4">
                      {link.title}
                    </div>
                    <div className="text-xs text-gray-medium uppercase tracking-wider mt-0.5">
                      {link.sub}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-gray-light p-8 md:p-10 rounded-3xl border border-gray-200 animate-fade-in-up [animation-delay:200ms]">
            <h3 className="text-xl font-bold mb-8 font-poppins">Start a Conversation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">First Name *</label>
                  <input required type="text" placeholder="Ahmed" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Last Name *</label>
                  <input required type="text" placeholder="Al-Rashid" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Business Email *</label>
                <input required type="email" placeholder="ahmed@company.com" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Service Interested In</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-black transition-colors appearance-none">
                  <option value="">Select a service…</option>
                  <option>Branding & Identity</option>
                  <option>Website Development</option>
                  <option>Social Media Marketing</option>
                  <option>Content Creation</option>
                  <option>SEO Optimisation</option>
                  <option>Strategy & Consulting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Project Details *</label>
                <textarea required rows={4} placeholder="What are you building?" className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>

              <button 
                disabled={status !== "idle"}
                type="submit" 
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                  status === "sent" 
                  ? "bg-green-500 text-white" 
                  : "bg-black text-white hover:bg-gray-800 hover:-translate-y-1 shadow-lg shadow-black/5"
                }`}
              >
                {status === "idle" && "Send Message →"}
                {status === "submitting" && "Sending..."}
                {status === "sent" && "✓ Message Sent!"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}