'use client'

import { Search, Globe, Palette, Code, TrendingUp, Share2 } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Search,
    title: 'SEO',
    description: 'Enhanced Visibility: Utilise SEO to reach global audiences, elevating brand and growth prospects.',
    features: [
      'Precision Targeting: Craft SEO-centric campaigns to engage ideal customers and maximise ROI.',
      'Data-Driven Optimisation: Employ SEO analytics for strategy enhancement and better performance.',
    ],
    href: '#seo',
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Customised Websites: Create online realms aligning with brand essence and business objectives.',
    features: [
      'Functional Features: Boost user experience focusing on usability and smooth navigation.',
      'Reliable Performance: Ensure uptime, security, and speed for optimal website functions.',
    ],
    href: '#web-design',
  },
  {
    icon: Palette,
    title: 'Creative',
    description: 'Strong Brand Presence: Build a cohesive, memorable identity resonating with target audience.',
    features: [
      'Engaging Visuals: Capture audience interest with top-notch photography, video, and promos.',
      'Seamless User Interactions: Design user interfaces enhancing customer satisfaction and conversions.',
    ],
    href: '#creative',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Global Accessibility: Build lightweight websites to reach diverse audiences, boosting your brand.',
    features: [
      'Bespoke Development: Tailor projects to meet client needs, engaging target audiences, maximising ROI.',
      'Analytical Advancements: Use data-driven methods for continuous website refinement.',
    ],
    href: '#web-development',
  },
  {
    icon: TrendingUp,
    title: 'PPC',
    description: 'Global Engagement: Launch PPC campaigns for instant global reach, enhancing brand visibility.',
    features: [
      'Precision Targeting: Design tailored PPC strategies to capture ideal customers, maximising ROI.',
      'Performance Metrics: Harness data insights for ongoing PPC optimisation, improving campaigns.',
    ],
    href: '#ppc',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Audience Expansion: Engage and grow your audience through social media\'s interactive nature.',
    features: [
      'Content Innovation: Drive brand loyalty with creative social media campaigns and strategies.',
      'Interactive Promotions: Execute real-time promotions on social media to boost brand affinity.',
    ],
    href: '#social-media',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Digital Marketing Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            In the highly competitive online market, building a digital strategy is crucial to cultivating successful, revenue-driving brand engagements. .sand, a leading award-winning digital marketing agency in the UK, can harness the power of data-driven campaigns and multi-channel outreach to elevate your brand's presence across the web.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                href={service.href}
                key={index}
                className="group card hover:scale-[1.02] cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-display mb-4 text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-black rounded-full shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mr-2">Learn More</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
