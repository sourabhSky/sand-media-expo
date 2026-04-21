import React from 'react';
import Link from 'next/link';

export default function PpcHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-white" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        {/* Decorative Orbs & Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-gray-100 blur-[120px] rounded-full opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-gray-100 blur-[100px] rounded-full opacity-40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-light border border-gray-200 mb-8">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                Google & Meta Ads Specialists
              </span>
            </div>

            <h1 className="mb-6 text-5xl md:text-7xl">
              High-Performance<br />
              <span className="italic-text text-black">Google Ads</span><br />
              & Meta Ads
            </h1>

            <p className="text-2xl font-medium text-black mb-4 font-poppins">
              Agency That Scales Your Revenue
            </p>
            
            <p className="text-xl text-gray-medium leading-relaxed mb-10 max-w-xl">
              We don&apos;t run ads — we engineer growth systems. From search to social, 
              our data-driven PPC strategies deliver measurable ROI and scalable results.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="#contact" className="px-10 py-4 bg-black text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/10">
                Get Free Ad Strategy <span className="ml-2">→</span>
              </Link>
              <Link href="#results" className="px-10 py-4 bg-transparent text-black border border-gray-200 rounded-full font-bold text-sm tracking-widest uppercase hover:border-black transition-all duration-300">
                See Case Studies
              </Link>
            </div>

           
          </div>

          {/* RIGHT SIDE — Performance Dashboard */}
          <div className="w-full lg:w-2/5 animate-fade-in-up [animation-delay:200ms]">
            <div className="relative bg-gray-light p-8 md:p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-black/5">
              
              {/* Main Stat Card */}
              <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-50 mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Total ROAS This Month</p>
                    <div className="text-6xl font-black font-poppins text-black tracking-tighter">5.8×</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-bold uppercase">Live Campaign</span>
                  </div>
                </div>
                
                <p className="text-xs font-bold text-gray-medium mb-6">↑ Up from 4.2× last month · Google + Meta</p>
                
                {/* CSS Sparkline Chart */}
                <div className="flex items-end justify-between h-24 gap-2">
                  {[40, 55, 45, 70, 60, 80, 75, 100].map((h, i) => (
                    <div 
                      key={i} 
                      className={`w-full rounded-t-lg transition-all duration-1000 ${i === 7 ? 'bg-black' : 'bg-gray-200'}`} 
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🎯", num: "+312%", lbl: "Lead Volume YoY" },
                  { icon: "💸", num: "-34%", lbl: "Cost Per Lead" },
                  { icon: "📈", num: "$2.1M", lbl: "Revenue Attributed" },
                  { icon: "⚡", num: "4.9★", lbl: "Client Satisfaction" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-white/80">
                    <span className="text-xl mb-3 block">{stat.icon}</span>
                    <div className="text-xl font-bold text-black font-poppins">{stat.num}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-gray-400">{stat.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}