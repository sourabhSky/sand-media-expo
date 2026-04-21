'use client'

import React, { useState, useEffect } from 'react';

interface HeroSocialProps {
  data: {
    topTagline: string;
    titleMain: string;
    titleItalic: string;
    notifications: Array<{
      id: number;
      user: string;
      platform: string;
      time: string;
      content: string;
      stats: { likes: string; shares: string; comments: string };
    }>;
  };
}

const HeroSocial = ({ data }: HeroSocialProps) => {
  const [activeNotification, setActiveNotification] = useState(0);

  // Auto-slide effect for the notification inside the mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % data.notifications.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [data.notifications.length]);

  const currentNote = data.notifications[activeNotification];

  return (
    <section className="relative bg-white pt-24 pb-12 overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Top Tagline */}
        <div className="text-center mb-8">
          <span className="text-gray-900 font-bold tracking-[0.2em] text-sm uppercase">
            {data.topTagline}
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-black leading-[0.9] tracking-tight">
            <span className="block text-5xl md:text-8xl lg:text-[100px] font-bold">
              {data.titleMain}
            </span>
            <span className="italic font-light text-gray-400 block text-5xl md:text-8xl lg:text-[100px]">
              {data.titleItalic}
            </span>
          </h1>
        </div>

        {/* Hero Visual Container */}
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Static Platform Icons */}
          <div className="absolute -left-10 top-10 w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">f</span>
          </div>
          <div className="absolute -right-8 top-40 w-14 h-14 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">📸</span>
          </div>
          <div className="absolute left-10 bottom-0 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
             <span className="text-white text-sm">X</span>
          </div>

          {/* Central Phone Visual with Slider */}
          <div className="mx-auto w-[280px] md:w-[350px] bg-[#1A1A1A] rounded-[40px] p-4 shadow-2xl border-8 border-[#262626]">
            <div className="bg-[#111111] rounded-[30px] h-[450px] overflow-hidden p-6 border border-gray-800 relative">
              
              {/* Notification Slide */}
              <div key={currentNote.id} className="animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center font-bold text-xs text-white">
                    SM
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">{currentNote.user}</p>
                    <p className="text-gray-500 text-[10px]">{currentNote.time}</p>
                  </div>
                  <div className="ml-auto bg-pink-600/20 text-pink-500 text-[9px] px-2 py-1 rounded-full font-bold">
                    {currentNote.platform}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {currentNote.content}
                </p>
                
                <div className="flex gap-4 text-gray-500 text-[11px] pt-4 border-t border-gray-800">
                  <span>❤️ {currentNote.stats.likes}</span>
                  <span>🔄 {currentNote.stats.shares}</span>
                  <span>💬 {currentNote.stats.comments}</span>
                </div>
              </div>

              {/* Slider Dots indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {data.notifications.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-1.5 h-1.5 rounded-full transition-all ${idx === activeNotification ? 'bg-pink-500 w-4' : 'bg-gray-700'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)] z-0" />
    </section>
  );
};

export default HeroSocial;