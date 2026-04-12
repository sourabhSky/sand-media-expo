import React from 'react';
import { ArrowRight } from 'lucide-react';

const SocialServices = () => {
  const platforms = [
    {
      name: "Instagram Handling",
      tag: "Instagram",
      tagColor: "bg-[#E1306C]",
      users: "2B+",
      userType: "Active Users",
      description: "Full-service Instagram management — from feed curation and Reels production to Stories, influencer outreach, and shopping integrations that convert followers into customers.",
      features: [
        "Content calendar creation & scheduling",
        "Reels & Stories production & editing",
        "Hashtag strategy & community growth",
        "Instagram Shopping & product tagging",
        "Influencer collaboration management"
      ],
      image: "/api/placeholder/400/320" // Replace with your Instagram 3D icon image
    },
    {
      name: "Facebook Handling",
      tag: "Facebook",
      tagColor: "bg-[#1877F2]",
      users: "3B+",
      userType: "Monthly Users",
      description: "Strategic Facebook management that maximises organic reach and paid performance — from Page optimisation and content creation to targeted ad campaigns and group management.",
      features: [
        "Facebook Page management & optimisation",
        "Targeted ad campaigns & retargeting",
        "Facebook Groups & community building",
        "Marketplace listings management",
        "Messenger chatbot & response handling"
      ],
      image: "/api/placeholder/400/320" // Replace with your Facebook "Social Media" text image
    },
    {
      name: "Pinterest Handling",
      tag: "Pinterest",
      tagColor: "bg-[#BD081C]",
      users: "500M+",
      userType: "Monthly Users",
      description: "Drive discovery and sales through expertly curated Pinterest boards, Rich Pins, Shop the Look integrations, and visual content strategies tailored for your niche.",
      features: [
        "Board strategy & pin optimisation",
        "Rich Pins & Shop the Look setup",
        "Visual content design & scheduling",
        "Pinterest SEO & keyword strategy",
        "Promoted Pin ad campaigns"
      ],
      image: "/api/placeholder/400/320" // Replace with your Pinterest Stormtrooper image
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-16 animate-fade-in-up">
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-black text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Social Media Management Services
          </h2>
          <p className="text-gray-medium text-lg max-w-3xl leading-relaxed">
            We provide end-to-end social media management across every major platform. From content 
            strategy to community management, paid advertising to analytics — we handle it all so your 
            brand can focus on growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col bg-white rounded-4xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
              {/* Image Header with Overlay Tags */}
              <div className="relative h-64 overflow-hidden">
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
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-8 h-8 rounded-lg ${platform.tagColor} flex items-center justify-center text-white text-xs`}>
                    {platform.tag[0]}
                  </div>
                  <h3 className="text-xl font-bold text-black">{platform.name}</h3>
                </div>

                <p className="text-gray-medium text-sm leading-relaxed mb-8">
                  {platform.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-10 grow">
                  {platform.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-[13px] text-gray-medium">
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