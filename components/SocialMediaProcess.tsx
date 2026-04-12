import React from 'react';

const SocialMediaProcess = () => {
  const steps = [
    {
      number: "01",
      icon: "🔍",
      title: "Audit & Analysis",
      description: "We audit your current social presence, competitors, and audience to identify opportunities"
    },
    {
      number: "02",
      icon: "🎯",
      title: "Strategy Build",
      description: "Custom content strategy, platform selection, posting cadence, and KPI targets are defined"
    },
    {
      number: "03",
      icon: "✍️",
      title: "Content Creation",
      description: "Our creative team produces scroll-stopping visuals, copy, and video for every platform"
    },
    {
      number: "04",
      icon: "🚀",
      title: "Publish & Manage",
      description: "Content is scheduled, published, and managed — community engagement handled daily"
    },
    {
      number: "05",
      icon: "📊",
      title: "Report & Optimise",
      description: "Monthly analytics reports with actionable insights and strategy refinements"
    }
  ];

  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            Our 5-Step Social Media Process
          </h2>
        </div>

        {/* Process Steps Wrapper */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="absolute top-10 left-0 w-full h-px border-t border-dashed border-gray-200 hidden lg:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Number Circle */}
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-8 transition-all duration-300 group-hover:border-black group-hover:shadow-md">
                  <span className="text-black font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all">
                  {step.icon}
                </div>

                {/* Text Content */}
                <h3 className="text-black text-xl font-bold mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-gray-medium text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaProcess;