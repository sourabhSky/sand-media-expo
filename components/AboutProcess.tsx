const steps = [
  {
    num: "01",
    emoji: "🔬",
    title: "Discovery",
    desc: "We go deep before we go wide — immersing ourselves in your brand, market, competitors, and audience to find the real opportunity.",
    details: [
      "Brand & business audit",
      "Competitor landscape mapping",
      "Audience research & personas",
      "Opportunity identification",
    ],
  },
  {
    num: "02",
    emoji: "🧭",
    title: "Strategy",
    desc: "Discovery becomes direction — a clear, prioritised strategy with measurable goals, defined channels, and a realistic creative brief.",
    details: [
      "Positioning & messaging",
      "Channel & content strategy",
      "KPI framework",
      "Project roadmap",
    ],
  },
  {
    num: "03",
    emoji: "⚙️",
    title: "Design & Execution",
    desc: "Strategy comes to life — design, copy, build, and launch delivered with precision, craft, and obsessive attention to detail.",
    details: [
      "Creative design & copy",
      "Build & development",
      "Client review cycles",
      "Launch & deployment",
    ],
  },
  {
    num: "04",
    emoji: "📈",
    title: "Growth & Optimisation",
    desc: "We don't disappear after launch. We monitor, measure, and optimise continuously — turning initial results into compounding growth.",
    details: [
      "Performance tracking",
      "A/B testing & iteration",
      "Monthly reporting",
      "Strategy evolution",
    ],
  },
];

export default function AboutProcess() {
  return (
    <section className="section-padding bg-white" id="process">
      <div className="container-custom">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            How We Work
          </p>
          <h2 className="mb-6">
            A Process Built for<br />
            <span className="italic-text">Clarity & Results</span>
          </h2>
          <p className="text-lg text-gray-medium leading-relaxed max-w-2xl mx-auto">
            No surprises. No scope creep. Just a focused, transparent process that 
            consistently delivers exceptional work on time.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-15 left-0 right-0 h-px bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Number Circle */}
              <div className="relative mb-8">
                <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-poppins font-bold text-lg border-4 border-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex flex-col">
                <span className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {step.emoji}
                </span>
                <h3 className="text-xl font-bold mb-4 font-poppins text-black">
                  {step.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Sub-details List */}
                <ul className="space-y-3 mt-auto">
                  {step.details.map((detail, dIdx) => (
                    <li 
                      key={dIdx} 
                      className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2 group-hover:text-black transition-colors duration-300"
                    >
                      <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-black" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}