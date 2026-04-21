import React from 'react';

export default function ContactHero() {
  return (
    <>
      
      
     

        <div className="container-custom relative z-10 pt-30">
          <div className=" animate-fade-in-up">
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

           
          </div>
        </div>
     

    
    </>
  );
}