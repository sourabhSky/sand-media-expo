import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-background" id="about">
      {/* Decorative Blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-125 h-125 bg-gray-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute top-[20%] -left-[5%] w-125 h-125 bg-gray-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="animate-fade-in-up">
          

          <h1 className="mb-6">
            We Build Brands<br />
            <span className="underline-effect">That Grow</span>
          </h1>

          <p className="text-2xl md:text-3xl italic-text text-gray-medium mb-6">
            Strategy. Creativity. Digital Growth.
          </p>

          <p className="text-lg text-gray-medium leading-relaxed max-w-xl mb-10">
            We're a full-service digital agency obsessed with one thing — creating brands 
            that don't just look great but perform exceptionally. From identity and 
            strategy to campaigns and code, we make every touchpoint count.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="#contact" className="btn btn-primary group">
              Work With Us 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link href="#about-story" className="btn btn-secondary group">
              Our Story 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { score: "200+", label: "Projects", sub: "Delivered" },
              { score: "5+", label: "Years", sub: "Experience" },
              { score: "98%", label: "Client", sub: "Retention" },
              { score: "50+", label: "Happy", sub: "Clients" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-4 rounded-lg">
                <div className="text-xl font-bold font-poppins">{item.score}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">
                  <strong className="block text-black">{item.label}</strong>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL COLLAGE */}
        <div className="relative animate-fade-in-up [animation-delay:200ms]">
          <div className="grid grid-cols-2 gap-4 h-125">
            {/* Main Large Image */}
            <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-hero.jpg"
                alt="Agency team at work"
                fill
                className="object-cover image-hover-scale"
              />
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl z-20">
                <div className="text-2xl font-black font-poppins leading-none">50+</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter mt-1">Happy Clients</div>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-blink" />
                Accepting Clients
              </div>
            </div>

            {/* Top Small Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-2.jpg"
                alt="Strategy session"
                fill
                className="object-cover image-hover-scale"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Bottom Small Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-3.jpg"
                alt="Modern office"
                fill
                className="object-cover image-hover-scale"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}