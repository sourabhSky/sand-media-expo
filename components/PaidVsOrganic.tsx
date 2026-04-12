import React from 'react';

const PaidVsOrganic = () => {
  const comparisonData = [
    {
      title: "Paid Social",
      emoji: "💰",
      description: (
        <>
          Paid social involves promoting your content through <strong className="text-black">sponsored social media ads</strong>. 
          This strategy allows for precise audience targeting based on demographics, interests, 
          behaviour, and more. It's a powerful tool for increasing brand visibility, generating 
          leads, and driving conversions, particularly when you need <strong className="text-black">immediate results</strong>.
        </>
      ),
      points: [
        "Immediate reach and visibility",
        "Precise demographic targeting",
        "Measurable ROI from day one",
        "Scalable budget control"
      ]
    },
    {
      title: "Organic Social",
      emoji: "🌱",
      description: (
        <>
          Organic social relies on naturally <strong className="text-black">engaging your audience</strong> with regular, non-promoted 
          content. It helps build a loyal community, fosters long-term relationships, and 
          enhances brand reputation over time. While it doesn't offer the immediate reach of 
          paid social, it is crucial for <strong className="text-black">authentic, ongoing conversation</strong>.
        </>
      ),
      points: [
        "Long-term community building",
        "Authentic brand voice",
        "Trust and credibility growth",
        "Lower ongoing cost at scale"
      ]
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        {/* Header Section */}
        <div className="max-w-4xl mb-16 animate-fade-in-up">
          <h2 className="mb-6 text-black font-bold tracking-tight">
            Paid Social VS Organic Social
          </h2>
          <p className="text-gray-medium text-lg leading-relaxed">
            In the realm of social media, two principal strategies reign supreme: paid social and organic 
            social. Understanding their differences is key to devising a balanced and effective approach.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {comparisonData.map((item, index) => (
            <div key={index} className="card group flex flex-col h-full bg-gray-light/30">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                {item.emoji}
              </div>
              
              <h3 className="text-2xl md:text-3xl mb-6 text-black font-bold">
                {item.title}
              </h3>

              <div className="text-gray-medium leading-relaxed mb-8 grow text-[15px] md:text-base">
                <p>{item.description}</p>
              </div>

              <ul className="space-y-4 border-t border-gray-200 pt-8">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-black font-medium text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaidVsOrganic;