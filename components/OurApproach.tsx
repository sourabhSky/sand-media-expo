"use client";

import React from "react";

const APPROACH_PILLARS = [
  {
    icon: "🏅",
    heading: "Award-Winning Expertise",
    text: ".sand Media is the recipient of multiple awards in recognition of our exceptional work in the web development industry, solidifying our reputation as a trusted partner for businesses of all sizes.",
  },
  {
    icon: "⚡",
    heading: "Efficiency-Driven Processes",
    text: "We utilise highly efficient systems and processes, focusing on delivering top-quality web development services in a timely and cost-effective manner.",
  },
  {
    icon: "🔧",
    heading: "Comprehensive Services",
    text: ".sand Media offers a comprehensive suite of web development services, including design, development, CMS integration, e-commerce solutions, and ongoing maintenance and support.",
  },
  {
    icon: "👥",
    heading: "Industry-Leading Professionals",
    text: "Our team comprises some of the industry's most skilled professionals, bringing a wealth of experience and expertise to every project.",
  },
  {
    icon: "🌐",
    heading: "Pakistan-Based, Global Reach",
    text: "While we are proudly Pakistan-based, our services have a global reach, catering to businesses across various sectors and industries.",
  },
];

const OurApproach = () => {
  return (
    <section className="section- py-12 bg-white">
      <div className="container-custom">

        {/* Heading */}
        <div className="max-w-4xl mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-5xl">
            Web Development Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            In an era dominated by the digital landscape, your online presence becomes a cornerstone of your business strategy. .sand Media, an award-winning web development agency, provides a transformative approach to web development, leveraging our exceptional technical acumen to bring your digital vision to life. We understand that every business has unique digital needs, and we endeavour to meet these with bespoke, high-quality solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APPROACH_PILLARS.map((item, index) => (
            <div
              key={index}
              className="card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-3">
                {item.heading}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurApproach;