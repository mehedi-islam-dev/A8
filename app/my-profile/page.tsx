// app/my-profile/page.tsx
"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Protected Route Logic
  useEffect(() => {
    if (!isPending && !session?.user) {
      setIsRedirecting(true);
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending || isRedirecting || !session?.user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-orange-500 animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium">Loading profile...</p>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 text-center relative overflow-hidden">
        
        {/* Background Design Element */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-br from-orange-400 to-orange-500"></div>

        {/* Profile Avatar */}
        <div className="relative z-10 flex justify-center mb-6 mt-12">
          {user.image ? (
            <img 
              src={user.image} 
              alt={user.name} 
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg bg-white"
            />
          ) : (
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-orange-500 flex items-center justify-center text-white font-black text-5xl">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
          )}
        </div>

        {/* User Details */}
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-1">{user.name}</h2>
          <p className="text-gray-500 font-medium mb-8 bg-gray-50 inline-block px-4 py-1.5 rounded-full border border-gray-100 text-sm">
            {user.email}
          </p>

          {/* Update Button */}
          <Link 
            href="/my-profile/update" 
            className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-2xl shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-orange-500 transition-all hover:shadow-orange-500/30 hover:shadow-lg hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
}