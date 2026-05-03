'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = {
  'Web': [
    { name: 'Web Development', href: '/web-dev' },
    { name: 'Custom Plugin', href: '/custom-plugin' },
    { name: 'Website Support', href: '#support' },
  ],
  'Digital Marketing': [
    { name: 'SEO', href: '/seo' },
    { name: 'PPC', href: '/ppc' },
    { name: 'Social Media', href: '/social-media' },
    { name: 'Commercial Photography', href: '/commercial-photoshoot' },
  ],
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={` w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="text-3xl font-display font-bold tracking-tight">
                <span className="text-black">.sand</span>
                <span className="text-gray-600 font-light"> Media</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            <Link
              href="/about"
              className="text-sm font-medium text-gray-900 hover:text-black transition-colors h-20 flex items-center"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="text-sm font-medium text-gray-900 hover:text-black transition-colors flex items-center space-x-1 h-full">
                <span>Services</span>
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-[500px] bg-white border border-gray-100 shadow-2xl rounded-xl p-8 grid grid-cols-2 gap-8 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                {/* Invisible bridge to maintain hover state */}
                <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />

                {Object.entries(services).map(([category, items]) => (
                  <div key={category} className="space-y-4">
                    <h4 className="font-bold text-black text-xs uppercase tracking-wider border-b border-gray-100 pb-2">
                      {category}
                    </h4>
                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-black transition-all hover:translate-x-1 inline-block"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/case-studies"
              className="text-sm font-medium text-gray-900 hover:text-black transition-colors h-20 flex items-center"
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-gray-900 hover:text-black transition-colors h-20 flex items-center"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-900 hover:text-black transition-colors h-20 flex items-center"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="#quote" className="btn btn-primary">
              Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-6 animate-fade-in">
            <div className="space-y-4">
              <Link
                href="/about"
                className="block text-base font-medium text-gray-900 hover:text-black px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="px-4">
                <div className="font-semibold text-black mb-2">Services</div>
                {Object.entries(services).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">{category}</div>
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-black py-1 pl-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <Link
                href="#industries"
                className="block text-base font-medium text-gray-900 hover:text-black px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>

              <Link
                href="#case-studies"
                className="block text-base font-medium text-gray-900 hover:text-black px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>

              <Link
                href="#blog"
                className="block text-base font-medium text-gray-900 hover:text-black px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block text-base font-medium text-gray-900 hover:text-black px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-4 pt-4">
                <Link
                  href="#quote"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
