import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    value: "93%",
    label: "of online experiences begin with a search engine",
  },
  {
    value: "4×",
    label: "higher ROI from PPC vs. traditional advertising",
  },
  {
    value: "65%",
    label: "of high-intent keyword clicks go to paid ads",
  },
  {
    value: "2×",
    label: "more brand awareness through PPC vs. organic",
  },
];

export default function DarkStatsSection() {
  return (
    <section className="bg-black py-20 px-6 md:px-10">
      <div className="max-w-350 mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Harness the{" "}
            <span className="font-light text-gray-400">
              Power of PPC
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8">
            In the ever-evolving world of digital marketing, the use of{" "}
            <span className="text-white font-semibold">
              meticulously targeted keywords
            </span>{" "}
            holds the key to effective PPC campaigns. .sand Media leverages deep
            keyword dynamics to deliver{" "}
            <span className="text-white font-semibold">
              tailored PPC services
            </span>{" "}
            designed to elevate your online presence and drive conversions.
          </p>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-xl p-5 text-center"
              >
                <div className="text-2xl md:text-3xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
          <Image
  src="/darksection.avif"
  alt="PPC Team Working"
  width={700}
  height={420}
  className="w-full h-auto object-cover"
/>
        </div>
      </div>
    </section>
  );
}