'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Platform {
  name: string;
  tag: string;
  tagColor: string;
  users: string;
  userType: string;
  description: string;
  features: string[];
  image: string;
}

interface SocialServicesProps {
  data: {
    header: {
      badge: string;
      title: string;
      description: string;
    };
    platforms: Platform[];
  };
}

const SocialServices = ({ data }: SocialServicesProps) => {
  return (
    <section className="bg-white py-20">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-4 block">
            {data.header.badge}
          </span>
          <h2 className="text-black text-5xl md:text-6xl font-bold tracking-tight mb-8">
            {data.header.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            {data.header.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.platforms.map((platform, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              {/* Image Header with Overlay Tags */}
              <div className="relative h-50 overflow-hidden">
                <img 
                  src={platform.image} 
                  alt={platform.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 ${platform.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
                  <span>{platform.tag}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-2xl font-bold leading-none">{platform.users}</p>
                  <p className="text-[10px] opacity-80 uppercase tracking-wider">{platform.userType}</p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg ${platform.tagColor} flex items-center justify-center text-white text-xs font-bold`}>
                    {platform.tag[0]}
                  </div>
                  <h3 className="text-xl font-bold text-black">{platform.name}</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {platform.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-10 grow">
                  {platform.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[13px] text-gray-500">
                      <span className="mt-1.5 w-3 h-1 bg-gray-300 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer Link */}
                <button className="flex items-center gap-2 text-black font-bold text-sm hover:gap-4 transition-all group/btn">
                  Learn More 
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialServices;