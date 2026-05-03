// components/Navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-orange-500 group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 transition-colors duration-300">
                Sun<span className="text-orange-500">Cart</span>
              </span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-600 hover:text-orange-500 font-semibold transition-colors text-sm tracking-wide uppercase">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-orange-500 font-semibold transition-colors text-sm tracking-wide uppercase">
              Collection
            </Link>
          </div>

          {/* Auth Actions (Static for now) */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-orange-600 font-bold text-sm transition-all hidden sm:block">
              Sign In
            </Link>
            <Link href="/register" className="px-6 py-2.5 rounded-full bg-gray-900 text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Register
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}