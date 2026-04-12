import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "🎯",
    title: "Our Mission",
    desc: "Build brands that create genuine market impact — not just beautiful artefacts.",
  },
  {
    icon: "🔭",
    title: "Our Vision",
    desc: "To be the agency brands trust most when growth truly matters to them.",
  },
  {
    icon: "⚡",
    title: "Our Energy",
    desc: "We move fast, think deeply, and stay obsessively focused on outcomes.",
  },
  {
    icon: "🤝",
    title: "Our Promise",
    desc: "Total transparency — in thinking, in process, and in how we talk about results.",
  },
];

export default function AboutStory() {
  return (
    <section className="section-padding bg-white" id="about-story">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT — CONTENT */}
          <div className="animate-fade-in-up">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
              Our Story
            </p>
            <h2 className="mb-8">
              Not Just an Agency.<br />
              <span className="italic-text">A Growth Partner.</span>
            </h2>
            
            <div className="space-y-6 text-gray-medium text-lg leading-relaxed mb-10">
              <p>
                We started .sand Media with a simple conviction: most agencies do too little, 
                charge too much, and disappear after the kickoff call. We built the agency 
                we always wished existed — one that combines genuine creative depth with 
                the strategic rigour of a consultancy.
              </p>
              <p>
                Over five years and 200+ projects across branding, web, social, and content, 
                we&apos;ve refined a process that consistently moves the needle for ambitious 
                brands — from early-stage startups finding their voice to established businesses 
                ready to scale.
              </p>
              <p>
                Today we&apos;re a tight-knit team of strategists, designers, writers, and 
                developers who care deeply about the work and even more about the results it delivers.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-2xl shrink-0">{value.icon}</span>
                  <div>
                    <h4 className="text-base font-bold mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-medium leading-snug">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#contact" className="btn btn-primary group">
              Start a Conversation 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative animate-fade-in-up [animation-delay:200ms]">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85&fit=crop"
                alt="Agency working session"
                fill
                className="object-cover image-hover-scale"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/5" />

              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-4xl font-black font-poppins text-black leading-none">200+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-medium mt-2">
                  Projects Delivered Globally
                </div>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-blink" />
                Accepting Projects Now
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}