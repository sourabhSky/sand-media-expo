'use client'

import Link from 'next/link'
import { Building2, Briefcase, GraduationCap, Heart, Scale, Plane, Bitcoin, Factory } from 'lucide-react'

const industries = [
  { name: 'Accountant', icon: Briefcase, href: '#accountant' },
  { name: 'Automotive', icon: Building2, href: '#automotive' },
  { name: 'Casino & Gambling', icon: Building2, href: '#casino' },
  { name: 'Cryptocurrency', icon: Bitcoin, href: '#crypto' },
  { name: 'Construction', icon: Factory, href: '#construction' },
  { name: 'Dental', icon: Heart, href: '#dental' },
  { name: 'Ecommerce', icon: Building2, href: '#ecommerce' },
  { name: 'Education', icon: GraduationCap, href: '#education' },
  { name: 'Energy', icon: Building2, href: '#energy' },
  { name: 'Fashion', icon: Building2, href: '#fashion' },
  { name: 'Finance', icon: Briefcase, href: '#finance' },
  { name: 'Healthcare', icon: Heart, href: '#healthcare' },
  { name: 'Insurance', icon: Briefcase, href: '#insurance' },
  { name: 'Law & Legal', icon: Scale, href: '#law' },
  { name: 'Manufacturing', icon: Factory, href: '#manufacturing' },
  { name: 'Pharmaceutical', icon: Heart, href: '#pharma' },
  { name: 'Real Estate', icon: Building2, href: '#real-estate' },
  { name: 'SaaS', icon: Building2, href: '#saas' },
  { name: 'Small Business', icon: Building2, href: '#small-business' },
  { name: 'Technology', icon: Building2, href: '#technology' },
  { name: 'Tourism & Travel', icon: Plane, href: '#travel' },
  { name: 'Logistics', icon: Building2, href: '#logistics' },
]

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Industries We Work With
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            At .sand, we extend our Digital Marketing Agency UK expertise across a diverse range of industries, tailoring strategies to meet the unique demands and opportunities each sector presents.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <Link
                key={index}
                href={industry.href}
                className="group card p-6 text-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-sm text-black group-hover:text-white transition-colors">
                  {industry.name}
                </h4>
              </Link>
            )
          })}
        </div>

       
      </div>
    </section>
  )
}
