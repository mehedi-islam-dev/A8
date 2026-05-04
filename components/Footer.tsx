// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-orange-500 group-hover:rotate-180 transition-transform duration-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Sun<span className="text-orange-500">Cart</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Master the summer heat with our premium collection of essentials, skincare, and accessories.
            </p>
          </div>

          {/* 2. Shop Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5">Shop</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/products" className="hover:text-orange-500 transition-colors">All Products</Link></li>
              <li><Link href="/products" className="hover:text-orange-500 transition-colors">Trending Now</Link></li>
              <li><Link href="/products" className="hover:text-orange-500 transition-colors">Summer Sale</Link></li>
            </ul>
          </div>

          {/* 3. Support Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5">Support</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500" 
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} SunCart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}