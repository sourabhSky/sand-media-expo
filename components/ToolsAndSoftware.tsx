import React from 'react';

const ToolsAndSoftware = () => {
  const tools = [
    { name: "Hootsuite", icon: "🦉" },
    { name: "Buffer", icon: "🟦" },
    { name: "Sprout Social", icon: "🌱" },
    { name: "Later", icon: "🕘" },
    { name: "Zoho Social", icon: "🔷" },
    { name: "SocialBee", icon: "🐝" },
    { name: "Canva", icon: "🎨" },
    { name: "Meta Ads", icon: "📘" },
    { name: "Google Analytics", icon: "📊" },
    { name: "BuzzSumo", icon: "📡" },
    { name: "Mention", icon: "🔔" },
    { name: "Ahrefs", icon: "🔗" },
  ];

  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-16 animate-fade-in-up">
          <span className="text-gray-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Industry Leading
          </span>
          <h2 className="text-black text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Social Media Tools & Software
          </h2>
          <p className="text-gray-medium text-lg max-w-3xl leading-relaxed">
            <span className="text-black font-semibold">Social Media tools & software</span> support efficient project delivery by enabling teams to manage processes, maintain quality, and adapt to changing requirements at scale.
          </p>
        </div>

        {/* Interactive Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:border-black"
            >
              {/* Tool Icon with hover scale effect */}
              <div className="text-3xl mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                {tool.icon}
              </div>
              
              {/* Tool Name */}
              <span className="text-gray-medium font-semibold text-sm transition-colors duration-300 group-hover:text-black">
                {tool.name}
              </span>

              {/* Decorative background element that appears on hover */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndSoftware;