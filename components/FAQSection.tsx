"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What services does .sand Media provide?",
    a: ".sand Media offers a comprehensive suite of web development services including bespoke website design, front-end and back-end development, CMS integration, e-commerce development, and website maintenance and support.",
  },
  {
    q: "What platforms does .sand Media work with?",
    a: "At .sand Media, we are well-versed in WordPress, Shopify, Magento, Laravel and React.",
  },
  {
    q: "How does .sand Media ensure the efficiency of its web development process?",
    a: ".sand Media utilises efficient systems and modern technologies to ensure fast delivery.",
  },
  {
    q: "What services does .sand Media provide?",
    a: ".sand Media offers a comprehensive suite of web development services including bespoke website design, front-end and back-end development, CMS integration, e-commerce development, and website maintenance and support.",
  },
  {
    q: "What platforms does .sand Media work with?",
    a: "At .sand Media, we are well-versed in WordPress, Shopify, Magento, Laravel and React.",
  },
  {
    q: "How does .sand Media ensure the efficiency of its web development process?",
    a: ".sand Media utilises efficient systems and modern technologies to ensure fast delivery.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="section-padding">
      <div className="container-custom ">

        {/* Title */}
        <h2 className="mb-10">Web Development FAQ's</h2>

        {/* List */}
        <div className="divide-y border-t border-gray-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-5">

                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.q}
                  </span>

                  <span className="text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}