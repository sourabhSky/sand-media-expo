"use client";

import {
  Search,
  Globe,
  Palette,
  Code,
  TrendingUp,
  Share2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Enhanced visibility strategies that drive rankings, traffic, and long-term growth.",
    features: [
      "Precision targeting to engage high-value customers.",
      "Data-backed optimisation for measurable performance.",
    ],
    href: "#seo",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Custom-crafted websites aligned with your brand and business objectives.",
    features: [
      "Smooth navigation with user-first experiences.",
      "Reliable, secure, and high-performing designs.",
    ],
    href: "#web-design",
  },
  {
    icon: Palette,
    title: "Creative",
    description:
      "Memorable visuals and storytelling that strengthen brand identity.",
    features: [
      "Engaging content across photography and video.",
      "Seamless UI/UX for customer satisfaction.",
    ],
    href: "#creative",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Fast, scalable, and conversion-driven websites built for impact.",
    features: [
      "Tailored development to meet business needs.",
      "Continuous optimisation for long-term growth.",
    ],
    href: "#web-development",
  },
  {
    icon: TrendingUp,
    title: "PPC",
    description:
      "Performance marketing campaigns designed for instant visibility.",
    features: [
      "High-converting paid ad strategies.",
      "Real-time analytics for campaign refinement.",
    ],
    href: "#ppc",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Creative campaigns that expand reach and boost engagement.",
    features: [
      "Brand loyalty through innovative storytelling.",
      "Interactive promotions for stronger affinity.",
    ],
    href: "#social-media",
  },
];

// const highlights = [
//   "Data Driven",
//   "Result Focused",
//   "Expert Team",
//   "Transparent",
// ];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 md:px-10 lg:px-12 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full text-sm font-semibold text-gray-700 mb-6">
            <Sparkles className="w-4 h-4" />
            WHAT WE DO
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
            Digital Marketing Services
          </h2>

          <p className="text-lg md:text-sm text-gray-600 leading-relaxed">
            In the highly competitive online market, building a digital strategy is crucial to cultivating successful, revenue-driving brand engagements. .sand, a leading award-winning digital marketing agency in the UK, can harness the power of data-driven campaigns and multi-channel outreach to elevate your brand's presence across the web.


          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                href={service.href}
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-black shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover CTA */}
                <div className="mt-8 flex items-center gap-2 font-semibold text-black opacity-0 group-hover:opacity-100 transition">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Highlights */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
            >
              <h4 className="font-bold text-lg text-black">{item}</h4>
              <p className="text-sm text-gray-500 mt-2">
                Strategies built for measurable business growth.
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}