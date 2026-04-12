import Link from "next/link";

const highlights = [
  {
    icon: "🏆",
    title: "Award-Winning Quality",
    desc: "Industry-recognised photography that has helped 500+ brands stand out in crowded markets with visuals that genuinely convert.",
  },
  {
    icon: "⚡",
    title: "48-Hour Delivery",
    desc: "Professionally edited, colour-graded images in your hands within 48 hours of the shoot. No waiting weeks for your assets.",
  },
  {
    icon: "🎨",
    title: "Creative Direction",
    desc: "Our in-house creative directors ensure every shoot has a coherent visual strategy aligned with your brand identity and goals.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden costs, no surprises. Fixed-price packages with clear deliverables — from compact product shoots to full brand campaigns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-light" id="why-us">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
              Why LensWork Studio
            </p>
            <h2 className="mb-6 leading-tight">
              Above and Beyond<br />
              <span className="italic-text">Traditional Photography</span>
            </h2>
            <p className="text-lg text-gray-medium leading-relaxed mb-10 max-w-lg">
              We don&apos;t just take photos — we engineer visual narratives that 
              accelerate brand growth, build customer trust, and generate 
              measurable commercial returns.
            </p>
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center bg-black text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/10 group"
            >
              Start Your Project 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:200ms]">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-black transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-gray-light rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 font-poppins text-black leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-medium text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}