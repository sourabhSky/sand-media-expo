import React from 'react';

const MeasuredResults = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        {/* Changed items-center to lg:items-start and text-center to lg:text-left */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left  space-y-8 animate-fade-in-up">
          
          {/* Top Label */}
          <span className="text-gray-medium font-bold tracking-[0.2em] text-xs uppercase">
            Proven Results
          </span>

          {/* Main Headline - Removed mx-auto to allow left alignment */}
          <h2 className="text-black leading-tight tracking-tight">
            <span className="block text-6xl md:text-7xl lg:text-8xl font-bold">
              Results You Can
            </span>
            <span className="italic-text text-gray-400 block text-6xl md:text-7xl lg:text-8xl">
              Actually Measure
            </span>
          </h2>

          {/* Paragraph Content - Adjusted max-width for better left-aligned flow */}
          <div className="space-y-6 pt-4 max-w-3xl">
            <p className="text-gray-medium text-lg md:text-xl leading-relaxed">
              Our data-driven social media management delivers consistent, measurable growth across 
              every platform. We don't just post content — we engineer campaigns that build audiences, 
              drive engagement, and convert followers into paying customers.
            </p>
            
            <p className="text-gray-medium text-lg md:text-xl leading-relaxed">
              Every client account receives a dedicated strategist, monthly analytics reports, and a custom 
              growth roadmap reviewed quarterly.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="btn btn-primary rounded-lg px-12 py-5 text-lg">
              Start a project
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MeasuredResults;