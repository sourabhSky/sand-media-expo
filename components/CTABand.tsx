import Link from "next/link";

export default function CTABand() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-white mb-8 leading-tight">
            Ready to Elevate Your<br />
            <span className="italic-text text-white">Brand Visuals?</span>
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            Join 500+ brands that have transformed their commercial presence 
            with studio-grade photography. Let&apos;s create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-white/5"
            >
              Book Your Photoshoot <span className="ml-1">→</span>
            </Link>
            
            <Link 
              href="#gallery" 
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/20 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}