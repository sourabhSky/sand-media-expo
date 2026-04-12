import React from 'react';

export default function ContactHero() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white" id="home">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          {/* Animated Decorative Blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[60%] bg-gray-100 blur-[120px] rounded-full animate-pulse opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-gray-100 blur-[100px] rounded-full opacity-40" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-light border border-gray-200 mb-8">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                We&apos;re Ready When You Are
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6">
              Let&apos;s Work<br />
              <span className="italic-text text-black">Together</span>
            </h1>

            <p className="text-2xl font-medium text-black mb-4">
              Grow your brand. Let&apos;s make it happen.
            </p>
            
            <p className="text-xl text-gray-medium leading-relaxed mb-10 max-w-2xl">
              Whether you&apos;re launching something new or scaling what&apos;s already working — 
              we&apos;d love to hear about your goals and show you exactly how we can help.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#contact" className="px-10 py-4 bg-black text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/10">
                Contact Us <span className="ml-2">→</span>
              </a>
              <a href="#info" className="px-10 py-4 bg-transparent text-black border border-gray-200 rounded-full font-bold text-sm tracking-widest uppercase hover:border-black transition-all duration-300">
                Find Our Office
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
              {[
                { score: "4.9/5", label: "Google", sub: "Reviews" },
                { score: "200+", label: "Brands", sub: "Served" },
                { score: "24hr", label: "Response", sub: "Guarantee" },
                { score: "100%", label: "Client", sub: "Satisfaction" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-black font-poppins">{badge.score}</span>
                  <span className="text-[10px] uppercase tracking-tighter text-gray-medium">
                    <strong className="text-black mr-1">{badge.label}</strong>{badge.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-black py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { n: "200+", l: "Happy Clients", d: "0ms" },
              { n: "8+", l: "Years in Business", d: "100ms" },
              { n: "24hr", l: "Response Time", d: "200ms" },
              { n: "98%", l: "Retention Rate", d: "300ms" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: stat.d }}
              >
                <span className="text-4xl md:text-5xl font-bold text-white mb-2 font-poppins">{stat.n}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}