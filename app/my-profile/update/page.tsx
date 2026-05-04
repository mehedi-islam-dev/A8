// app/my-profile/update/page.tsx
"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function UpdateProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Pre-fill the form with current user data
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    } else if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session, isPending, router]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Better-Auth updateUser method
    const { error } = await authClient.updateUser({
      name: name,
      image: image || undefined, // If empty, make it undefined
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "Failed to update information.");
    } else {
      toast.success("Profile updated successfully!");
      // Full reload to update navbar and profile state instantly
      window.location.href = "/my-profile"; 
    }
  };

  if (isPending || !session?.user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-orange-500 animate-spin mb-4"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
        
        <div className="flex items-center mb-8">
          <Link href="/my-profile" className="p-2 rounded-full hover:bg-gray-100 transition-colors mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Update Info</h2>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
            <input 
              type="text" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white" 
              placeholder="Your Name" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Profile Picture URL</label>
            <input 
              type="url" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 bg-gray-50 focus:bg-white" 
              placeholder="https://example.com/photo.jpg" 
            />
            <p className="mt-2 text-xs text-gray-400 font-medium">* Leave blank to use default avatar</p>
          </div>

          <button 
            type="submit" 
            disabled={isLoading} 
            className="w-full py-4 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all disabled:opacity-50 mt-4"
          >
            {isLoading ? "Updating..." : "Update Information"}
          </button>
        </form>

      </div>
    </div>
  );
}