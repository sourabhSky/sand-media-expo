"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Play, ArrowRight, BarChart3, Sparkles } from "lucide-react";

type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

const stats: StatItem[] = [
  {
    value: 200,
    suffix: "%+",
    label: "Average ROI Delivered",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
  },
];

function Counter({
  end,
  suffix,
  duration = 1800,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSplitSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 md:px-10 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">

          {/* LEFT IMAGE SIDE */}
          <div className={`relative group w-full max-w-[600px] mx-auto lg:mx-0 ${isVisible ? 'animate-fade-up' : ''}`}>
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[28px] overflow-hidden shadow-2xl lg:ml-10">
              <Image
                src="/aboutsplits.jpg"
                alt="Modern agency office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center hover:scale-110 transition">
                  <Play className="w-8 h-8 text-black fill-black" />
                </button>
              </div>
            </div>

            {/* Floating Success Card */}
            <div className={`absolute -bottom-6 left-4 md:-bottom-8 md:left-8 bg-white rounded-2xl shadow-2xl px-4 py-3 md:px-6 md:py-5 flex items-center gap-4 border border-gray-100 lg:ml-4 ${isVisible ? 'animate-fade-up animation-delay-300' : ''}`}>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-black ">
                  <Counter end={100} suffix="+" />
                </h3>
                <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-wider md:normal-case md:tracking-normal">Successful Projects</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={`w-full transition-all duration-700 ${isVisible ? 'animate-fade-up' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-5">
              <Sparkles className="w-4 h-4" />
              About sand Media
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
              Recognised as a Leading Digital Marketing Agency in Udaipur
            </h2>

            <p className="text-gray-600 text-base md:text-sm leading-8 mb-8 max-w-xl">
              As a trusted digital marketing company, .sand Media has been
              featured in top-tier media and industry-leading platforms.
              With headquarters in London and branches worldwide, we help
              brands outperform competitors and achieve measurable success.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {stats.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                  className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 ${isVisible ? 'animate-fade-up' : ''}`}
                >
                  <div className="text-black text-3xl font-extrabold">
                    <Counter end={item.value} suffix={item.suffix} />
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-lg"
            >
              Discover Our Story
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}