"use client";

import TerminalMockup from "./Terminal";

interface Review {
  score: string;
  platform: string;
  count: string;
}

interface HeroNewProps {
  data: {
   
    titleBold: string;
    titleLight: string;
    description: string;
    placeholder: string;
    buttonText: string;
    
  };
}

export default function HeroNew({ data }: HeroNewProps) {
  return (
    <section className="relative bg-white overflow-hidden px-6 md:px-10 lg:px-12 py-20">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 grid-background pointer-events-none" />

      <div className="relative max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="pt-10">
         

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {data.titleBold} <br />
            <span className="font-light text-gray-500">
              {data.titleLight}
            </span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-7 mb-6 max-w-xl">
            {data.description}
          </p>

          {/* FORM */}
          <form className="flex flex-col sm:flex-row gap-3 mb-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="url"
              placeholder={data.placeholder}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm outline-none focus:border-black"
            />
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
              {data.buttonText}
            </button>
          </form>

        
        </div>

        {/* RIGHT IMAGE / TERMINAL */}
        <div className="relative w-full h-auto">
          <TerminalMockup />
        </div>
      </div>
    </section>
  );
}