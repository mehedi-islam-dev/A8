// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function Navbar() {
  const pathname = usePathname();

  // Better-Auth hook
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("Failed to logout. Please try again.");
    } else {
      toast.success("Logged out successfully.");
      // Full page reload to clear cached session
      window.location.href = "/login";
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-orange-500 group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 transition-colors duration-300">
                Sun<span className="text-orange-500">Cart</span>
              </span>
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className={`font-semibold transition-colors text-sm tracking-wide uppercase ${pathname === "/" ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`}>
              Home
            </Link>
            <Link href="/products" className={`font-semibold transition-colors text-sm tracking-wide uppercase ${pathname?.startsWith("/products") ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`}>
              Products
            </Link>
            {session?.user && (
              <Link href="/my-profile" className={`font-semibold transition-colors text-sm tracking-wide uppercase ${pathname === "/my-profile" ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}`}>
                My Profile
              </Link>
            )}
          </div>

          {/* Auth Actions */}
          <div className="flex items-center space-x-4">
            {isPending ? (
              <div className="w-8 h-8 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"></div>
            ) : session?.user ? (
              <div className="flex items-center gap-4">
                <Link href="/my-profile" title={session.user.name || "User"}>
                  {/* Secure Avatar Fallback */}
                  {session.user.image ? (
                    <img 
                      src={session.user.image} 
                      alt="Avatar" 
                      className="w-10 h-10 rounded-full object-cover border-2 border-orange-200 hover:border-orange-500 transition-colors cursor-pointer shadow-sm"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-lg border-2 border-orange-200 hover:border-orange-500 transition-colors cursor-pointer shadow-sm">
                      {session.user.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                    </div>
                  )}
                </Link>
                <button onClick={handleLogout} className="text-gray-600 hover:text-red-500 font-bold text-sm transition-all hidden sm:block uppercase tracking-wide">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-600 hover:text-orange-600 font-bold text-sm transition-all hidden sm:block uppercase tracking-wide">
                  Login
                </Link>
                <Link href="/register" className="px-6 py-2.5 rounded-full bg-gray-900 text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase tracking-wide">
                  Register
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}