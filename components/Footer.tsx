'use client'

import Link from 'next/link'
import { Share2, MessageSquare, Briefcase, Heart } from 'lucide-react'

interface FooterProps {
  data: {
    brand: any;
    quickLinks: { label: string; href: string }[];
    support: any;
    office: any;
    legalLinks: { label: string; href: string }[];
  }
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* LEFT SIDE: Logo and Description (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-3xl font-display font-bold">
                <span className="text-white">{data.brand.nameMain}</span>
                <span className="text-gray-400 font-light">{data.brand.nameAlt}</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              {data.brand.description}
            </p>
            <p className="text-sm text-gray-500">
              {data.brand.ctaText} <Link href={data.brand.ctaHref} className="text-white underline hover:text-gray-300 transition-colors">{data.brand.ctaLinkText}</Link>
            </p>
          </div>

          {/* RIGHT SIDE: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {data.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE: Support & Office */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">{data.support.title}</h4>
            <p className="text-gray-400 text-sm mb-2">{data.support.message}</p>
            <div className="text-sm text-gray-400 mb-1">{data.support.hours}</div>
            <a href={`mailto:${data.support.email}`} className="text-white hover:text-gray-300 transition-colors text-sm block mb-8">
              {data.support.email}
            </a>

            <h4 className="font-bold text-lg text-white mb-4">{data.office.city}</h4>
            <address className="not-italic text-gray-400 text-sm mb-4">
              {data.office.address.map((line: string, i: number) => (
                <div key={i}>{line}</div>
              ))}
            </address>
            <div className="space-y-1 text-sm">
              <a href={`tel:${data.office.phone.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-white transition-colors">
                {data.office.phone}
              </a>
              <a href={`mailto:${data.office.email}`} className="block text-gray-400 hover:text-white transition-colors">
                {data.office.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">
              © {currentYear} {data.brand.nameMain.replace('.', '')} {data.brand.nameAlt}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><MessageSquare size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Briefcase size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors"><Heart size={20} /></Link>
            </div>
          </div>

          {/* Legal */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
            {data.legalLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}