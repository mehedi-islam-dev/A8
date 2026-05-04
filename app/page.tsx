// app/page.tsx
import HeroSlider from "@/components/HeroSlider";
import LottieAnimation from "@/components/LottieAnimation";
import Link from "next/link";
import productsData from "@/data/products.json";

export default function Home() {
  const popularProducts = productsData.slice(0, 3);

  return (
    <div className="w-full flex flex-col min-h-screen pb-20 bg-white">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeroSlider />
      </section>

      {/* 2. Popular Products Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-500">
              <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
            </svg>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">Popular Products</h2>
          </div>
          <p className="text-gray-500 font-medium">Handpicked essentials for your next adventure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-gray-900 line-clamp-1">{product.name}</h3>
                  <span className="flex items-center gap-1 text-sm font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    {product.rating}
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">{product.brand}</p>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-2xl font-black text-gray-900">${product.price}</p>
                  <Link href={`/products/${product.id}`} className="px-5 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-orange-500 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button Added Here */}
        <div className="mt-14 flex justify-center">
          <Link href="/products" className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all hover:-translate-y-1">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 3. Summer Care Tips Section */}
      <section className="w-full bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
               <LottieAnimation />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-orange-500 font-black tracking-[0.2em] uppercase text-sm">Expert Advice</span>
                <div className="flex items-center gap-3 mt-2">
                  <h2 className="text-4xl font-black text-gray-900 leading-tight">Summer Care Tips</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 text-orange-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-5 p-6 bg-white rounded-4xl shadow-sm border border-gray-100 group transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.303.025-.607.045-.913.059A11.483 11.483 0 0112 18.75c-3.12 0-6.03-.503-8.756-1.424l-.151-.053A2.25 2.25 0 011.5 15.111V10.89c0-.969.616-1.813 1.5-2.097a48.392 48.392 0 0017.25 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Stay Hydrated</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Drink at least 8-10 glasses of water daily to maintain electrolyte balance during peak heat hours.</p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 bg-white rounded-4xl shadow-sm border border-gray-100 group transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">UV Protection</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Apply broad-spectrum SPF 50+ sunscreen every 2 hours and wear UV-rated eyewear outdoors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Top Brands Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-xl font-black text-gray-900 tracking-widest uppercase">Featured Top Brands</h2>
          <div className="h-1 w-12 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center p-10 bg-white border border-gray-100 rounded-[2.5rem] grayscale hover:grayscale-0 hover:border-orange-200 transition-all duration-500 group cursor-default">
            <svg className="w-12 h-12 text-gray-400 group-hover:text-orange-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            <span className="mt-4 font-black text-gray-900 tracking-tighter text-lg italic">SUNSHADE</span>
          </div>

          <div className="flex flex-col items-center justify-center p-10 bg-white border border-gray-100 rounded-[2.5rem] grayscale hover:grayscale-0 hover:border-blue-200 transition-all duration-500 group cursor-default">
            <svg className="w-12 h-12 text-gray-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
            </svg>
            <span className="mt-4 font-black text-gray-900 tracking-tighter text-lg italic uppercase">AquaShield</span>
          </div>

          <div className="flex flex-col items-center justify-center p-10 bg-white border border-gray-100 rounded-[2.5rem] grayscale hover:grayscale-0 hover:border-cyan-200 transition-all duration-500 group cursor-default">
            <svg className="w-12 h-12 text-gray-400 group-hover:text-cyan-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="mt-4 font-black text-gray-900 tracking-tighter text-lg italic uppercase">OceanVibe</span>
          </div>

          <div className="flex flex-col items-center justify-center p-10 bg-white border border-gray-100 rounded-[2.5rem] grayscale hover:grayscale-0 hover:border-emerald-200 transition-all duration-500 group cursor-default">
            <svg className="w-12 h-12 text-gray-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
            <span className="mt-4 font-black text-gray-900 tracking-tighter text-lg italic uppercase">HydroCool</span>
          </div>
        </div>
      </section>
      
    </div>
  );
}