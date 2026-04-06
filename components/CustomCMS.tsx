"use client";

import Link from "next/link";

const CMS_ADVANTAGES = [
  {
    num: "01",
    title: "Tailored to Your Needs",
    desc: "Custom CMS solutions are built specifically for your business requirements.",
  },
  {
    num: "02",
    title: "Scalability",
    desc: "Easily scale your platform as your business grows.",
  },
  {
    num: "03",
    title: "Enhanced Security",
    desc: "Custom-built systems reduce vulnerabilities compared to common CMS platforms.",
  },
  {
    num: "04",
    title: "Better Performance",
    desc: "Optimized for speed and efficiency with no unnecessary features.",
  },
];

export default function CustomCMS() {
  return (
    <section className="section-padding">
      <div className="container-custom ">

        {/* Title */}
        <h2 className="mb-4">Custom CMS Development</h2>

        <p className="text-gray-600 mb-12 max-w-3xl">
          In today's digital age, the need for a unique online presence is paramount.
          Custom CMS development offers businesses the flexibility to design a platform
          tailored to their specific needs, ensuring a seamless user experience and
          efficient content management.
        </p>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Advantages of Custom CMS Development
            </h3>

            {/* List */}
            <div className="space-y-6 mb-8">
              {CMS_ADVANTAGES.map((item) => (
                <div key={item.num} className="flex gap-4">

                  <span className="text-lg font-semibold text-gray-400 min-w-10">
                    {item.num}
                  </span>

                  <div>
                    <h4 className="font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA Text */}
            <p className="text-sm text-gray-600 mb-4">
              With a custom CMS, you're not just building a website; you're crafting an
              online platform that resonates with your brand's ethos and serves your
              audience in the most efficient way possible.
            </p>

            {/* CTA Link */}
            <div className="text-sm">
              Wanna get in touch?{" "}
              <Link
                href="/contact"
                className="underline font-medium hover:text-black"
              >
                Let’s talk
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="border border-gray-200 rounded-md overflow-hidden">

            {/* Window bar */}
            <div className="flex gap-2 px-4 py-2 border-b bg-gray-50">
              <span className="w-3 h-3 rounded-full bg-gray-300" />
              <span className="w-3 h-3 rounded-full bg-gray-300" />
              <span className="w-3 h-3 rounded-full bg-gray-300" />
            </div>

            <div className="flex">

              {/* Sidebar */}
              <div className="w-40 border-r p-4 space-y-3 text-sm text-gray-600">
                {["Dashboard", "Pages", "Posts", "Media", "Users", "Settings"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-300 rounded-full" />
                      {item}
                    </div>
                  )
                )}
              </div>

              {/* Main Area */}
              <div className="flex-1 p-4">

                {/* Top bar */}
                <div className="flex justify-between mb-4">
                  <div className="h-8 w-32 bg-gray-100 rounded" />
                  <div className="h-8 w-8 bg-gray-200 rounded-full" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    ["Pages", "42"],
                    ["Posts", "128"],
                    ["Users", "8"],
                    ["Media", "2.4k"],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      className="border rounded p-3 text-center"
                    >
                      <div className="font-semibold">{val}</div>
                      <div className="text-xs text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Content rows */}
                <div className="space-y-2">
                  {[90, 80, 70, 60].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 bg-gray-200 rounded"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}