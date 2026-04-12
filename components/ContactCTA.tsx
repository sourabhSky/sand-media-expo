import React from 'react';

const ContactCTA = () => {
  return (
    <section className="bg-white section-padding border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="flex-1 space-y-6">
            <span className="text-gray-400 font-bold tracking-widest text-xs uppercase">
              Let's Work Together
            </span>
            
            <h2 className="text-black leading-tight">
              Wanna get in touch? <span className="italic-text text-gray-400">Let's talk</span>
            </h2>

            <div className="space-y-4 max-w-xl">
              <p className="text-gray-medium leading-relaxed">
                We offer exceptional social media services tailored to a wide range of businesses that 
                want to improve the effectiveness of their digital marketing activities with discernible 
                returns on investment. We aim to get back to all enquiries rapidly.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Fill in our simple quotation request form for an indication of just how cost-effective we can be. We aim 
                to have pricing available to review within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="w-full lg:w-140 flex flex-col items-center gap-4">
            <button className="btn btn-primary w-full rounded-xl py-3 text-lg">
              Start a Project
            </button>
            <button className="btn btn-outline w-full rounded-xl py-3 text-lg border-2">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;