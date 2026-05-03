import React from 'react';

export default function ContactHero() {
  return (
    <>
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
          {/* Left Side: Content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-light border border-gray-200 mb-8">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                We&apos;re Ready When You Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-5xl md:text-6xl font-display font-bold">
              Let&apos;s Work<br />
              <span className="italic-text text-black">Together</span>
            </h2>

            <p className="text-2xl font-medium text-black mb-4">
              Grow your brand. Let&apos;s make it happen.
            </p>

            <p className="text-xl text-gray-medium leading-relaxed mb-10 max-w-xl">
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
          </div>

          {/* Right Side: Map */}
          <div className="relative h-[500px] md:h-[500px] w-full rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl group bg-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0535359146!2d73.6609968412629!3d24.576395567362796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28cca95b825!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714666680000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(100%) grayscale(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-1000 group-hover:filter-none group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-white mb-1">Our Udaipur Studio</p>
                  <p className="text-gray-400 text-sm">Udaipur, Rajasthan, India</p>
                </div>
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl">
                  📍
                </div>
              </div>
            </div>

            {/* Decorative Pulse Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-pulse scale-[3]"></div>
                <div className="w-4 h-4 bg-white rounded-full border-2 border-black shadow-xl relative z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}