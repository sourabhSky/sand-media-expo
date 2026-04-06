'use client'

export default function MediaCoverage() {
  const mediaOutlets = [
    'GoDaddy', 'Business Matters', 'Tech Times', 'Digital Journal',
    'Cloudways', 'Teamwork', 'Influencer Marketing Hub', 'MSN',
    'Ahrefs', 'Yahoo Finance'
  ]

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Recognised as a Leading Digital Marketing Agency UK Company
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As a trusted Digital Marketing Agency UK Company, .sand has been featured in top-tier media and industry-leading platforms, showcasing our expertise in delivering exceptional digital marketing results.
          </p>
        </div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {mediaOutlets.map((outlet, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:border-black transition-colors group"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-gray-400 group-hover:text-black transition-colors">
                  {outlet}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">
            Endorsed by <strong className="text-black">10+ Global Media Outlets</strong> for Exceptional <strong className="text-black">Digital Marketing Agency UK Results</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
