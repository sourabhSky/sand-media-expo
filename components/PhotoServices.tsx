import Image from "next/image";
import Link from "next/link";

const photoServices = [
  {
    title: "Product Photography",
    desc: "Studio-perfect shots that showcase every detail — ideal for e-commerce, catalogues, and ad campaigns that sell.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&fit=crop",
    icon: "📦",
    delay: "delay-0",
  },
  {
    title: "Brand Photoshoot",
    desc: "Strategic brand imagery that communicates your values, personality, and market positioning across all touchpoints.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80&fit=crop",
    icon: "🎯",
    delay: "delay-100",
  },
  {
    title: "Food Photography",
    desc: "Mouth-watering imagery for restaurants, food brands, menus, and social campaigns that make people hungry to buy.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&fit=crop",
    icon: "🍽️",
    delay: "delay-200",
  },
  {
    title: "Real Estate Shoots",
    desc: "Architectural and interior photography that sells properties faster — showcasing space, light, and lifestyle beautifully.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop",
    icon: "🏛️",
    delay: "delay-0",
  },
  {
    title: "Fashion Photography",
    desc: "Editorial and commercial fashion photography that captures the essence of your collection with striking, aspirational imagery.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    icon: "👗",
    delay: "delay-100",
  },
  {
    title: "Corporate Shoots",
    desc: "Professional headshots, team portraits, and workplace photography that build trust and credibility for your brand.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop",
    icon: "🏢",
    delay: "delay-200",
  },
];

export default function PhotoServices() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            What We Offer
          </p>
          <h2 className="mb-6">
            Premium Photography Services<br />
            <span className="italic-text">Crafted for Every Industry</span>
          </h2>
          <p className="text-xl text-gray-medium leading-relaxed">
            From e-commerce product shots to full-scale brand campaigns, our studio delivers 
            visuals that command attention and drive real business results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoServices.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up ${service.delay}`}
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover image-hover-scale"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 font-poppins text-black">
                  {service.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group/link"
                >
                  Book This Service 
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