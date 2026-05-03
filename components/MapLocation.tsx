import React from 'react';

export default function MapLocation() {
  const mapUrl = "https://maps.google.com/maps?q=Udaipur,Rajasthan,India"; // Udaipur location map link

  return (
    <section className="section-padding bg-white" id="location">
      <div className="container-custom">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 animate-fade-in-up">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
              Find Us
            </p>
            <h2 className="m-0 leading-tight">
              Our Office <br></br> <span className="italic-text text-black">Location</span>
            </h2>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent text-black border border-gray-200 rounded-full font-bold text-xs tracking-widest uppercase hover:border-black transition-all duration-300"
          >
            Open in Google Maps <span className="ml-2">→</span>
          </a>
        </div>

        {/* Map Container */}
        <div className="animate-fade-in-up [animation-delay:100ms]">
          <div className="relative w-full h-[600px] bg-black rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0535359146!2d73.6609968412629!3d24.576395567362796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28cca95b825!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714666680000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(100%) grayscale(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 border-t border-gray-100 pt-10">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Address</span>
              <p className="text-sm font-bold text-black leading-relaxed">
                Udaipur, Rajasthan<br />
                India
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Office Hours</span>
              <p className="text-sm font-bold text-black leading-relaxed">
                Mon – Sat: 10am – 7pm<br />
                Sunday: By appointment
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Nearest Landmark</span>
              <p className="text-sm font-bold text-black leading-relaxed">
                City Palace, Udaipur<br />
                Near Lake Pichola
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}