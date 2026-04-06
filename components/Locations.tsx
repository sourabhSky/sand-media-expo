'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

const locations = [
  {
    city: 'Digital Marketing London',
    address: '13 Austin Friars',
    addressLine2: 'London, EC2N 2HE',
    phone: '0208 338 1206',
    email: 'hello@sandmedia.co.uk',
  },
  {
    city: 'Digital Marketing Essex',
    address: '128a High Street',
    addressLine2: 'Billericay, Essex, CM12 9XE',
    phone: '01277 286565',
    email: 'hello@sandmedia.co.uk',
  },
  {
    city: 'Digital Marketing Glasgow',
    address: '30 Stanley Street',
    addressLine2: 'Glasgow, G41 1JB',
    phone: '0141 471 9099',
    email: 'hello@sandmedia.co.uk',
  },
]

export default function Locations() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Digital Marketing Locations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We specialise in providing advanced digital marketing strategies across the United Kingdom. Seize growth opportunities with our innovative, location-focused full service digital marketing services in the vibrant UK online landscape.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold font-display mb-6 text-black">
                {location.city}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-black mt-0.5 shrink-0" />
                  <div className="text-gray-600">
                    <div>{location.address}</div>
                    <div>{location.addressLine2}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-black shrink-0" />
                  <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-black transition-colors">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-black shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-black transition-colors">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Locations */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            <strong className="text-black">Other:</strong> Edinburgh, Liverpool, Manchester, Norfolk, Birmingham, Bristol, Cardiff, Blackpool, Southampton, Cornwall, Leeds, Hampshire, Belfast, Sheffield
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-black text-white rounded-2xl p-12 text-center">
          <div className="text-sm uppercase tracking-wider mb-4 text-gray-400 italic">Let's work together</div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            Wanna get in touch? Let's talk
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            We offer exceptional services tailored to a wide range of businesses that want to improve the effectiveness of their digital marketing activities with discernible returns on investment. We aim to get back to all enquiries rapidly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-gray-300">
              Interested in working with us? <Link href="#contact-form" className="underline hover:text-white transition-colors">Contact us</Link>
            </p>
            <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="#quote" className="btn bg-white text-black hover:bg-gray-100">
              Start a project
            </Link>
          </div>
          
          {/* START A PROJECT Marquee */}
          <div className="mt-12 overflow-hidden border-t border-gray-800 pt-8">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center mx-8">
                  <span className="text-4xl md:text-5xl font-bold font-display text-gray-800 italic">
                    START A PROJECT
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
