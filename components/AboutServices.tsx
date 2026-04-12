import Link from "next/link";

const services = [
  {
    icon: "🎨",
    title: "Branding & Identity",
    desc: "Strategy-first brand building — from positioning and naming through visual identity, tone of voice, and brand guidelines that hold across every touchpoint.",
    tags: ["Brand Strategy", "Logo Design", "Visual Identity", "Tone of Voice"],
    delay: "delay-0",
  },
  {
    icon: "💻",
    title: "Website Development",
    desc: "Performance-obsessed websites built for conversion — clean code, exceptional design, lightning-fast load times, and CMS setups your team can actually use.",
    tags: ["UI/UX Design", "React / Next.js", "CMS Integration", "CRO"],
    delay: "delay-100",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Content strategies rooted in platform intelligence — organic growth, community management, and creative that builds genuine audience relationships over time.",
    tags: ["Content Strategy", "Community Mgmt", "Instagram · LinkedIn"],
    delay: "delay-200",
  },
  {
    icon: "✍️",
    title: "Content Creation",
    desc: "Words and visuals that earn attention — brand copywriting, editorial content, video scripting, and creative campaigns that make your audience stop scrolling.",
    tags: ["Copywriting", "Editorial", "Video Scripts", "Photography"],
    delay: "delay-0",
  },
  {
    icon: "🔍",
    title: "SEO Optimisation",
    desc: "Sustainable, compounding organic growth — technical audits, content strategy, link building, and the kind of SEO that pays dividends for years, not months.",
    tags: ["Technical SEO", "Content SEO", "Link Building", "Local SEO"],
    delay: "delay-100",
  },
  {
    icon: "📊",
    title: "Strategy & Consulting",
    desc: "For brands at an inflection point — market positioning, go-to-market planning, competitive analysis, and digital transformation roadmaps that turn ambition into a plan.",
    tags: ["GTM Strategy", "Market Research", "Digital Roadmaps"],
    delay: "delay-200",
  },
];

export default function AboutServices() {
  return (
    <section className="section-padding bg-gray-light" id="services">
      <div className="container-custom">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            What We Do
          </p>
          <h2 className="mb-6">
            Services Built for<br />
            <span className="italic-text">Modern Brands</span>
          </h2>
          <p className="text-xl text-gray-medium leading-relaxed">
            We don&apos;t offer everything. We offer the things that matter most — and we do them exceptionally well.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-black animate-fade-in-up ${service.delay}`}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 font-poppins text-black">
                  {service.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed mb-8 grow">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-bold uppercase tracking-wider bg-gray-light text-gray-500 px-3 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group/link"
                >
                  Explore Service 
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}