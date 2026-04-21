'use client'

import React from 'react';

interface GridItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  colSpan: string;
}

interface SocialImageGridProps {
  data: {
    sectionConfig: { bgColor: string; cardRadius: string };
    items: GridItem[];
  };
}

export default function SocialImageGrid({ data }: SocialImageGridProps) {
  // Separate the large item from the small ones for the layout logic
  const largeItem = data.items.find(item => item.id === 'content');
  const smallItems = data.items.filter(item => item.id !== 'content');

  return (
    <section className={`py-12 md:py-24 ${data.sectionConfig.bgColor}`}>
      <div className="container-custom px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 h-full lg:h-[400px]">
          
          {/* Main Hero Card (2/3 width on desktop) */}
          {largeItem && (
            <div className={`${largeItem.colSpan} relative group overflow-hidden ${data.sectionConfig.cardRadius} h-[250px] lg:h-auto`}>
              {/* Eye-friendly soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/20 to-transparent z-10" />
              
              <img 
                src={largeItem.image} 
                alt={largeItem.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-2 tracking-tight">
                  {largeItem.title}
                </h3>
                <p className="text-gray-300 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                  {largeItem.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* Side Stack (1/3 width on desktop) */}
          <div className="flex flex-col gap-5 md:gap-8">
            {smallItems.map((item) => (
              <div 
                key={item.id} 
                className={`relative group overflow-hidden ${data.sectionConfig.cardRadius} flex-1 min-h-[150px]`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent z-10" />
                
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[9px] uppercase tracking-widest font-semibold">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}