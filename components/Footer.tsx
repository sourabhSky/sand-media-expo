'use client'

import Link from 'next/link'
import { Share2, MessageSquare, Briefcase, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        {/* Logo and Description */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="text-3xl font-display font-bold">
                <span className="text-white">.sand</span>
                <span className="text-gray-400 font-light"> Media</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A multi award winning digital agency based in the United Kingdom. With a distinct offering in Technical Web, Digital Marketing and Creative.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Interested in working with us? <Link href="#quote" className="text-white underline hover:text-gray-300 transition-colors">Start a Project</Link>
            </p>

          
          </div>

          {/* London Office */}
          <div>
            <h4 className="font-bold text-lg mb-4">London</h4>
            <address className="not-italic text-gray-400 text-sm mb-4">
              <div>13 Austin Friars</div>
              <div>London</div>
              <div>EC2N 2HE</div>
            </address>
            <div className="space-y-2 text-sm">
              <a href="tel:+442083381206" className="block text-gray-400 hover:text-white transition-colors">
                +44 208 338 1206
              </a>
              <a href="mailto:hello@sandmedia.co.uk" className="block text-gray-400 hover:text-white transition-colors">
                hello@sandmedia.co.uk
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="#case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Careers & Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Careers</h4>
            <p className="text-gray-400 text-sm mb-4">
              We are always looking for talented people to join the team.
            </p>
            <Link href="#careers" className="text-white underline hover:text-gray-300 transition-colors text-sm">
              Careers
            </Link>

            <h4 className="font-bold text-lg mt-8 mb-4">Need Support?</h4>
            <p className="text-gray-400 text-sm mb-2">
              On our support plan? Submit a ticket or call us.
            </p>
            <div className="text-sm text-gray-400">
              09.00 am – 17.00 pm
            </div>
            <a href="mailto:support@sandmedia.co.uk" className="text-gray-400 hover:text-white transition-colors text-sm">
              support@sandmedia.co.uk
            </a>
          </div>
        </div>

      

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400 text-center lg:text-left">
              <div className="mb-2">
                © {currentYear} .sand Media. .sand Media Limited - Company No. 08051880 - VAT Reg No. GB204642831
              </div>
              <div>
                Registered Address: 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link href="#twitter" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <MessageSquare size={20} />
              </Link>
              <Link href="#facebook" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Share2 size={20} />
              </Link>
              <Link href="#linkedin" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Briefcase size={20} />
              </Link>
              <Link href="#instagram" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Heart size={20} />
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
            <Link href="#terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
