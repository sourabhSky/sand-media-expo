type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "£50M+", label: "Ad Spend Managed" },
  { value: "98%", label: "Client Retention" },
];

export default function StatsBar() {
  return (
    <section className="bg-black py-6 px-6 md:px-10 lg:px-12">
      <div className="max-w-350 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {stats.map((item, i) => (
          <div key={i}>
            <div className="text-white text-2xl md:text-3xl font-extrabold">
              {item.value}
            </div>
            <div className="text-gray-400 text-xs mt-1">
              {item.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}