"use client";

import Image from "next/image";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  {
    value: "200%+",
    label: "Average ROI Delivered",
  },
  {
    value: "10+",
    label: "Years of Excellence",
  },
];

export default function AboutSplitSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10 lg:px-12">
      <div className="max-w-350 mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT IMAGE */}
        <div className="relative w-full h-100 lg:h-125 rounded-2xl overflow-hidden">
  <Image
    src="/aboutsplits.jpg"
    alt="Modern agency office"
    fill
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/20" />
</div>
  
          {/* RIGHT CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              About sand Media
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-5">
              Recognised as a Leading Digital Marketing Agency Udaipur
            </h2>

            <p className="text-gray-600 text-sm leading-7 mb-7">
              As a trusted Digital Marketing Agency UK Company, .sand Media has
              been featured in top-tier media and industry-leading platforms.
              With headquarters in London and branches worldwide, we help brands
              outpace the competition and achieve measurable success.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-5 text-center"
                >
                  <div className="text-black text-xl font-extrabold">
                    {item.value}
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-105"
            >
              Discover Our Story →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}