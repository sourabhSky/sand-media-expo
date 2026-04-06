"use client";

import Image from "next/image";
import TerminalMockup from "./Terminal";
const reviews = [
  { score: "4.9/5", platform: "Trustpilot", count: "98 Reviews" },
  { score: "4.9/5", platform: "Google", count: "64 Reviews" },
  { score: "5/5", platform: "GoodFirms", count: "60 Reviews" },
  { score: "5/5", platform: "Clutch", count: "65 Reviews" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden px-6 md:px-10 lg:px-12 py-20">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="relative max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="inline-block text-xs font-semibold px-4 py-2 bg-gray-100 rounded-full mb-5">
            ⭐ Top Rated & Award Winning Digital Agency UK
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Digital Marketing Agency in UK <br />
            <span className="font-light text-gray-500">
              That Delivers Results
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-7 mb-6 max-w-xl">
            Accelerate your business growth with our multi award-winning, Full
            Service Digital Marketing Agency, offering a broad spectrum of
            tailored digital solutions. Our proven expertise ensures you outpace
            the competition.
          </p>

          {/* FORM */}
          <form className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="url"
              placeholder="Enter your website address…"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm outline-none focus:border-black"
            />
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
              GET MY FREE PROPOSAL
            </button>
          </form>

          {/* REVIEWS */}
          <div className="flex flex-wrap gap-3">
            {reviews.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full"
              >
                <span className="text-sm font-bold text-black">
                  {item.score}
                </span>
                <div className="text-[11px] leading-tight text-gray-600">
                  <strong className="block text-black">
                    {item.platform}
                  </strong>
                  {item.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-100 ">
         <TerminalMockup />
         </div>
      </div>
    </section>
  );
}