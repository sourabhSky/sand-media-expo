import Link from 'next/link'
import { ArrowRight, BarChart2, Globe, Share2, Search, Camera, Megaphone } from 'lucide-react'

const industries = [
  { icon: Globe, label: 'Real Estate' },
  { icon: BarChart2, label: 'Finance' },
  { icon: Share2, label: 'Retail & E-Com' },
  { icon: Search, label: 'Legal & B2B' },
  { icon: Camera, label: 'F&B & Hospitality' },
  { icon: Megaphone, label: 'Healthcare' },
]

export default function CaseStudiesCTA() {
  return (
    <section className="section- py-10 bg-white">
      <div className="container-custom">
        {/* Industries we serve */}
        <div className="mb-24">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 text-center">
            Industries We&apos;ve Worked In
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 p-6 rounded-[24px] border-2 border-gray-50 hover:border-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-black text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Big CTA banner */}
        <div className="relative bg-black rounded-[40px] p-16 md:p-20 overflow-hidden text-center">
          {/* decorative */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                Currently Accepting Projects
              </span>
            </div>

            <h2 className="text-white mb-6 leading-tight">
              Ready to Become<br />
              <span className="italic-text text-gray-300">Our Next Case Study?</span>
            </h2>

            <p className="text-gray-400 text-xl max-w-xl mx-auto mb-12">
              Let&apos;s build something you&apos;re proud to talk about. Get in touch and
              let&apos;s discuss your goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:hello@sandmedia.in"
                className="inline-flex items-center gap-3 px-10 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold text-sm tracking-widest uppercase hover:border-white transition-all duration-300"
              >
                hello@sandmedia.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
