import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const SocialMediaConsultancy = () => {
  const services = [
    "Social Media Strategy Development",
    "Content Creation and Curation",
    "Social Media Advertising",
    "Community Management",
    "Social Listening & Reputation Management",
    "Influencer Marketing",
    "Analytics and Reporting",
    "Account Setup & Optimisation",
    "Crisis Management",
    "Social Media Training",
  ];

  return (
    <section className="bg-black text-white section-padding overflow-hidden">
      <div className="container-custom">
        {/* Full-width Title Section Above the Grid */}
        <div className="mb-16 animate-fade-in-up text-center sm:text-start">
          <h2 className="text-white leading-[1.1] tracking-tight">
            <span className="italic-text text-gray-400 block mb-2 text-3xl md:text-5xl lg:text-6xl">
              Expertise at Your Disposal:
            </span>
            <span className="text-4xl md:text-7xl lg:text-8xl font-bold">
              Social Media Consultancy
            </span>
          </h2>
        </div>

        {/* Split Grid for Content and Card */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Paragraphs (60%) */}
          <div className="w-full lg:w-[60%] space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold">.sand Media's</span> Social Media Consultancy simplifies the intricate world of social media. 
              Recognising each brand's uniqueness, we conduct a <strong className="text-white">thorough audit</strong> to uncover your 
              social media potential and areas of improvement.
            </p>
            
            <p>
              We draw on our deep knowledge to offer <strong className="text-white">strategic advice</strong> tailored to your business, 
              from profile optimisation and content strategy to platform selection. Our insights on 
              social media analytics enable <strong className="text-white">data-driven decision-making</strong>, boosting your social media 
              performance.
            </p>

            <p>
              Join us at .sand Media for insightful consultancy that navigates the vast social media 
              landscape with expertise, strategy, and custom solutions.
            </p>

            <div className="pt-6">
              <button className="btn btn-secondary rounded-2xl px-10 flex hover:border-white cursor-pointer items-center gap-2 group">
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Services Card (40%) */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-[#0A0A0A] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-white text-2xl mb-10 font-bold">
                What We Can Cover
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-5 gap-x-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <Check 
                      size={16} 
                      className="text-gray-400 mt-1 shrink-0 group-hover:text-white transition-colors" 
                    />
                    <span className="text-gray-400 text-[14px] leading-tight font-medium group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 italic text-gray-600 text-sm">Much more...</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialMediaConsultancy;