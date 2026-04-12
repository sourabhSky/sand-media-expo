import React from 'react';

const features = [
  {
    icon: "🧪",
    title: "A/B Testing at Scale",
    desc: "We run structured split tests on headlines, creatives, audiences, landing pages, and bidding strategies — systematically finding what converts at the lowest cost.",
    list: [
      "Creative variant testing (5–10 per campaign)",
      "Audience split testing methodology",
      "Bidding strategy experiments",
      "Statistical significance validation",
    ],
    isDark: true,
  },
  {
    icon: "📊",
    title: "Conversion Tracking Mastery",
    desc: "Accurate data is the foundation of profitable ads. We implement bulletproof server-side tracking so every conversion is attributed correctly — even with iOS privacy changes.",
    list: [
      "Server-side conversion API (Meta CAPI)",
      "Google Tag Manager setup",
      "Cross-device attribution",
      "Revenue & ROAS reporting dashboards",
    ],
    isDark: false,
  },
  {
    icon: "🎯",
    title: "Precision Audience Targeting",
    desc: "We go beyond basic interests. Leveraging first-party data, lookalikes, intent signals, and behavioural layers to build audiences that actually convert — not just click.",
    list: [
      "1st-party data & CRM matching",
      "Lookalike audience engineering",
      "In-market & intent audience layers",
      "Demographic + behavioural stacking",
    ],
    isDark: false,
  },
  {
    icon: "🤖",
    title: "AI-Powered Optimisation",
    desc: "We deploy smart bidding, responsive ad assets, and AI creative tools alongside human expertise — giving you the best of automation without losing strategic control.",
    list: [
      "Smart bidding strategy management",
      "Performance Max optimisation",
      "AI creative generation & testing",
      "Automated anomaly detection alerts",
    ],
    isDark: true,
  },
];

export default function AdvancedFeatures() {
  return (
    <section className="section-padding bg-black" id="features">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Advanced Capabilities
          </p>
          <h2 className="text-white mb-6 leading-tight">
            What Separates Us from<br />
            <span className="italic-text text-white">Every Other Ad Agency</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            We combine proprietary systems, AI-powered tools, and creative expertise 
            to build campaigns that consistently outperform industry benchmarks.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up [animation-delay:100ms]">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 group ${
                feature.isDark 
                ? "bg-gray-dark border-white/5 hover:border-white/20" 
                : "bg-white border-transparent hover:shadow-2xl hover:shadow-white/5"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 transition-transform duration-500 group-hover:scale-110 ${
                feature.isDark ? "bg-white/5 text-white" : "bg-gray-light text-black"
              }`}>
                {feature.icon}
              </div>

              <h3 className={`text-2xl font-bold mb-4 font-poppins ${
                feature.isDark ? "text-white" : "text-black"
              }`}>
                {feature.title}
              </h3>

              <p className={`text-sm leading-relaxed mb-8 ${
                feature.isDark ? "text-gray-400" : "text-gray-medium"
              }`}>
                {feature.desc}
              </p>

              <div className="space-y-4">
                {feature.list.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-3">
                    <span className={`text-xs mt-1 ${feature.isDark ? "text-white/40" : "text-black/40"}`}>—</span>
                    <span className={`text-xs font-medium tracking-wide uppercase ${
                      feature.isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}