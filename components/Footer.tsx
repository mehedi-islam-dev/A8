// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-orange-500 group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                Sun<span className="text-orange-500">Cart</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Master the summer heat with our premium collection of essentials, skincare, and accessories.
            </p>
            
            {/* Social Links Added Here */}
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-all hover:-translate-y-1">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-all hover:-translate-y-1">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-all hover:-translate-y-1">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-500 hover:text-orange-500 transition-colors text-sm font-medium">All Products</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm font-medium">Trending Now</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm font-medium">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm font-medium">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Stay Updated</h3>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block w-full p-3 outline-none transition-all" />
              <button type="submit" className="bg-gray-900 text-white rounded-xl px-5 py-3 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 text-sm font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-100 pt-8 flex justify-between items-center">
          <p className="text-gray-400 text-sm font-medium">&copy; {new Date().getFullYear()} SunCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}