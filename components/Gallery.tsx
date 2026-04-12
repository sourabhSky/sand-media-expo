"use client";
import React, { useState } from "react";
import Image from "next/image";

const categories = ["all", "product", "food", "fashion", "corporate"];

const galleryItems = [
  { id: 1, cat: "fashion", size: "tall", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop", alt: "Fashion shoot" },
  { id: 2, cat: "product", size: "small", src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&fit=crop", alt: "Product shoot" },
  { id: 3, cat: "food", size: "small", src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&fit=crop", alt: "Food shoot" },
  { id: 4, cat: "product", size: "wide", src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=80&fit=crop", alt: "Watch product shoot" },
  { id: 5, cat: "food", size: "small", src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&fit=crop", alt: "Food styling" },
  { id: 6, cat: "corporate", size: "small", src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&fit=crop&crop=faces", alt: "Corporate portrait" },
  { id: 7, cat: "product", size: "tall", src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80&fit=crop", alt: "Shoe product shoot" },
  { id: 8, cat: "fashion", size: "small", src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&fit=crop", alt: "Fashion editorial" },
  { id: 9, cat: "food", size: "small", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&fit=crop", alt: "Coffee artisan" },
  { id: 10, cat: "corporate", size: "small", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop", alt: "Office corporate" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.cat === filter
  );

  return (
    <section className="section-padding bg-gray-light" id="gallery">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-12 animate-fade-in-up">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-medium mb-4">
            Our Portfolio
          </p>
          <h2 className="mb-6">
            Visual Stories We&apos;ve<br />
            <span className="italic-text">Told for Brands</span>
          </h2>
          <p className="text-xl text-gray-medium leading-relaxed">
            A curated selection of our commercial work across product, food, fashion, and brand photography.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up [animation-delay:100ms]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] animate-fade-in-up [animation-delay:200ms]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item.src)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-gray-200 transition-all duration-500 hover:shadow-2xl ${
                item.size === "tall" ? "row-span-2" : ""
              } ${item.size === "wide" ? "md:col-span-2" : ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-2xl mb-2 block">🔍</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {item.cat}
                  </span>
                </div>
              </div>
              {/* Corner Label */}
              <span className="absolute bottom-4 left-4 text-[9px] font-black uppercase tracking-widest text-white/80 bg-black/20 backdrop-blur-sm px-2 py-1 rounded group-hover:hidden">
                {item.cat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white text-4xl hover:rotate-90 transition-transform">&times;</button>
          <div className="relative w-full h-full">
            <Image
              src={selectedImg}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}