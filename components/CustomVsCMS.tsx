"use client";

import Link from "next/link";

const CustomVsCMS = () => {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-6xl">

        {/* Title */}
        <h2 className="mb-12">
          Custom Web Development VS CMS: Tailoring Your Digital Presence
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Custom Dev */}
          <div className="border border-gray-200 rounded-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-xl font-semibold">
                Custom Web Development
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Opting for custom web development provides a{" "}
              <strong>higher degree of flexibility and uniqueness</strong>.
              Your website is built from the ground up, tailored to your
              specific business requirements. This approach enables us to
              create bespoke functionalities, ensure optimal performance,
              and deliver a site that stands out from the crowd.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Fully bespoke functionality</li>
              <li>• Optimal performance at scale</li>
              <li>• Distinctive competitive advantage</li>
              <li>• Ideal for complex, unique requirements</li>
            </ul>
          </div>

          {/* CMS */}
          <div className="border border-gray-200 rounded-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📦</span>
              <h3 className="text-xl font-semibold">
                CMS / Pre-made Templates
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              A CMS or pre-made website template can offer a{" "}
              <strong>quicker and more cost-effective route</strong> to
              launching your website. These platforms provide a
              user-friendly interface for managing content and come
              equipped with a range of features and design options.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Faster launch timeline</li>
              <li>• Lower upfront investment</li>
              <li>• User-friendly content management</li>
              <li>• Ideal for SMEs and startups</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 text-sm text-gray-700">
          Wanna get in touch?{" "}
          <Link
            href="/contact"
            className="font-semibold underline hover:text-black"
          >
            Let’s talk
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CustomVsCMS;