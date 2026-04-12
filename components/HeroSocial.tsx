import React from 'react';

const HeroSocial = () => {
  return (
    <section className="relative bg-white pt-24 pb-12 overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Top Tagline */}
        <div className="text-center mb-8 animate-fade-in-up">
          <span className="text-gray-900 font-bold tracking-[0.2em] text-sm uppercase">
            Top Rated and Award Winning
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-black leading-[0.9] tracking-tight">
            <span className="block text-6xl md:text-8xl lg:text-[100px] font-bold">
              Social Media Agency
            </span>
            <span className="italic-text text-gray-900 block text-6xl md:text-8xl lg:text-[100px]">
              That Delivers Results
            </span>
          </h1>
        </div>

        {/* Hero Visual Container */}
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Floating Icons - Absolute positioned relative to this container */}
          <div className="absolute -left-10 top-10 w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg animate-bounce duration-3000ms">
            <span className="text-white text-xl">👍</span>
          </div>
          <div className="absolute -right-8 top-40 w-14 h-14 bg-linear-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white text-xl">📸</span>
          </div>
          <div className="absolute left-0 bottom-10 w-10 h-10 bg-[#FF0050] rounded-full flex items-center justify-center shadow-lg">
             <span className="text-white text-sm">🎵</span>
          </div>

          {/* Central Phone/Post Visual */}
          <div className="mx-auto w-70 md:w-87.5 bg-[#1A1A1A] rounded-[40px] p-4 shadow-2xl border-8 border-[#262626]">
            <div className="bg-[#111111] rounded-[30px] overflow-hidden p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center font-bold text-xs">SM</div>
                <div>
                  <p className="text-white text-xs font-bold">@sandmedia</p>
                  <p className="text-gray-500 text-[10px]">2m ago</p>
                </div>
                <div className="ml-auto bg-pink-600/20 text-pink-500 text-[9px] px-2 py-1 rounded-full font-bold">Instagram</div>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                🚀 Just launched a killer campaign for our latest client — 340% engagement boost in week 1! #DigitalMarketing
              </p>
              <div className="flex gap-4 text-gray-500 text-[10px] pt-2 border-t border-gray-800">
                <span>❤️ 1.2K</span>
                <span>🔄 Share</span>
                <span>💬 Comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-gray-light)_0%,transparent_70%)] opacity-50 z-0" />
    </section>
  );
};

export default HeroSocial;