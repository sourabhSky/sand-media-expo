import React from 'react';

export default function MapLocation() {
  const mapUrl = "https://maps.google.com"; // Replace with your actual Google Maps link

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
              Our Office <span className="italic-text text-black">Location</span>
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

        {/* Map Placeholder */}
        <div className="animate-fade-in-up [animation-delay:100ms]">
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full h-100 md:h-125 bg-gray-light rounded-3xl overflow-hidden group cursor-pointer border border-gray-100"
          >
            {/* Background pattern to simulate a map look */}
            <div className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.15] transition-opacity duration-500" 
                 style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>
            
            {/* Center Pin UI */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-black rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-3xl shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  📍
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-bold text-black font-poppins mb-1">Studio 4B, Creative Quarter</p>
                <p className="text-xs text-gray-medium uppercase tracking-widest">Lahore, Pakistan — Click to expand</p>
              </div>
            </div>
          </a>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 border-t border-gray-100 pt-10">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Address</span>
              <p className="text-sm font-bold text-black leading-relaxed">
                Studio 4B, Creative Quarter<br />
                Lahore, Pakistan
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
                5 min from Liberty Market<br />
                Free parking available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}