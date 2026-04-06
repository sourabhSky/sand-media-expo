import React from 'react';
import Link from 'next/link';

const SEO_SERVICES = [
  {
    title: "On-Page SEO",
    href: "/services/on-page-seo",
    bullets: ["Content Optimization", "Meta Tag Strategy", "Internal Linking", "Keyword Mapping"]
  },
  {
    title: "Technical SEO",
    href: "/services/technical-seo",
    bullets: ["Site Speed Audit", "Schema Markup", "Core Web Vitals", "XML Sitemaps"]
  },
  {
    title: "Off-Page SEO",
    href: "/services/off-page-seo",
    bullets: ["Backlink Building", "Digital PR", "Guest Posting", "Brand Mentions"]
  },
  {
    title: "Local SEO",
    href: "/services/local-seo",
    bullets: ["GMB Optimization", "Local Citations", "Review Management", "Geo-Targeting"]
  }
];

const SEOServices = () => {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        {/* Unified Header - No Division */}
        <div className="max-w-4xl mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase tracking-tight mb-8">
            SEO <span className="italic-text font-light text-gray-medium">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-medium leading-relaxed font-light">
            In the highly competitive digital landscape, <strong className="text-black font-semibold">53% to 58%</strong> of all website traffic comes from organic search. 
            Securing prominent visibility is no longer optional; it's essential for sustainable growth. 
            .sand Media delivers both specialist solutions and end-to-end managed SEO services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SEO_SERVICES.map((service) => (
            <Link 
              href={service.href} 
              key={service.title} 
              className="card group flex flex-col justify-between h-full hover:bg-black transition-all duration-500 border-gray-200"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.bullets.map((bullet, i) => (
                    <li 
                      key={i} 
                      className="text-gray-medium group-hover:text-gray-300 text-sm flex items-center transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full mr-3 transition-colors"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6 group-hover:border-gray-800 transition-colors">
                <span className="text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                  Learn More
                </span>
                <span className="text-xl group-hover:text-white transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOServices;