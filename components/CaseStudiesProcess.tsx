import { CheckCircle2 } from 'lucide-react'

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We start with a deep-dive into your business, goals, audience and current gaps. No templates — only custom strategy.',
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description:
      'We map out a tailored roadmap with clear KPIs, timelines and deliverables. Everything is data-backed.',
  },
  {
    step: '03',
    title: 'Execution',
    description:
      'Our team gets to work — creative, tech, and media all aligned to one goal: your growth.',
  },
  {
    step: '04',
    title: 'Report & Scale',
    description: "Monthly transparent reporting with actionable insights. We scale what works and fix what doesn't — fast.",
  },
]

const differentiators = [
  'No-cookie-cutter strategies',
  'Dedicated account manager',
  'Weekly check-ins',
  'Full ownership of all assets',
  'No long-term lock-in contracts',
  'Results-first mindset always',
]

export default function CaseStudiesProcess() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Process */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">
              How We Work
            </p>
            <h2 className="mb-12 leading-tight text-4xl md:text-5xl lg:text-5xl">
              Our Proven<br />
              <span className="italic-text">Process</span>
            </h2>

            <div className="space-y-8">
              {process.map((p, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-gray-100 group-hover:border-black group-hover:bg-black flex items-center justify-center font-black text-sm text-black group-hover:text-white transition-all duration-300">
                      {p.step}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-bold text-black mb-2">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-black rounded-[40px] p-12 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">
              Why Sand Media
            </p>
            <h2 className="text-white mb-8 leading-tight text-3xl">
              What Makes Us<br />
              <span className="italic-text text-gray-300">Different</span>
            </h2>

            <div className="space-y-4">
              {differentiators.map((d, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  <span className="text-gray-300 font-medium">{d}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-gray-400 text-sm leading-relaxed italic">
                &ldquo;We don&apos;t just run campaigns — we become an extension of your team.
                Every number we report, we stand behind.&rdquo;
              </p>
              <p className="text-white font-bold text-sm mt-4">— The .sand Media Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
