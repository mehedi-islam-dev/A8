// components/HeroSlider.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "Limited Time Offer",
      title: "Summer Sale 50% OFF",
      titleColor: "text-orange-400",
      description: "Grab the best summer essentials, premium skincare, and accessories at half price. Don't miss out!",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
      cta: "Shop Sale",
      link: "/products"
    },
    {
      id: 2,
      tag: "Trending Now",
      title: "Hot Deals", // Emoji removed
      hasFireIcon: true, // Flag for SVG Icon
      titleColor: "text-red-500",
      description: "Exclusive discounts on top brands. Upgrade your getaway kit with our handpicked hot deals.",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
      cta: "Grab Deals",
      link: "/products"
    },
    {
      id: 3,
      tag: "New Arrivals",
      title: "Perfect Summer Getaway",
      titleColor: "text-blue-400",
      description: "Explore the latest trends and curated collections to make your summer vacation unforgettable.",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop",
      cta: "Explore Now",
      link: "/products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-112.5 md:h-137.5 rounded-3xl overflow-hidden bg-gray-900 group shadow-xl">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-5000 ease-out" style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)' }} />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 z-20">
            <span className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold tracking-widest uppercase text-xs mb-4 shadow-lg">
              {slide.tag}
            </span>
            
            {/* Title with Conditional SVG Icon */}
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-xl flex items-center justify-center gap-3">
              {slide.title}
              {slide.hasFireIcon && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-14 md:h-14 text-orange-500 animate-pulse">
                  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                </svg>
              )}
            </h1>

            <p className="text-base md:text-lg text-gray-200 font-medium mb-8 max-w-2xl drop-shadow-md px-4">
              {slide.description}
            </p>
            <Link href={slide.link} className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-1">
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 z-30">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`transition-all duration-300 rounded-full h-2 ${index === currentSlide ? "w-8 bg-orange-500" : "w-2 bg-white/50 hover:bg-white/80"}`} />
        ))}
      </div>
    </div>
  );
}