// app/products/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import productsData from "@/data/products.json";
import Link from "next/link";

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Protected Route Logic: Redirect to login if not authenticated
  useEffect(() => {
    if (!isPending && !session?.user) {
      setIsRedirecting(true);
      router.push("/login");
    }
  }, [session, isPending, router]);

  // Show loading spinner while checking auth or redirecting
  if (isPending || isRedirecting || !session?.user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-orange-500 animate-spin mb-4"></div>
        <p className="text-gray-500 font-medium">Verifying access...</p>
      </div>
    );
  }

  // Find the specific product based on URL ID
  const product = productsData.find((p) => p.id === parseInt(params.id as string));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-black text-gray-900 mb-2">Product Not Found</h2>
        <Link href="/products" className="text-orange-500 font-bold hover:underline">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-orange-500 mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Product Image */}
          <div className="rounded-[3rem] overflow-hidden bg-gray-50 h-100 md:h-150 shadow-sm border border-gray-100 relative group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-gray-900 shadow-sm">
              {product.category}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-500 font-bold uppercase tracking-widest mb-6">{product.brand}</p>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-black text-orange-500">${product.price}</span>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-xl">
                <span className="text-orange-500">★</span>
                <span className="font-bold text-gray-900">{product.rating} Rating</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex items-center gap-3 mb-10">
              <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? "bg-emerald-500" : "bg-red-500"}`}></div>
              <span className="font-semibold text-gray-700">
                {product.stock > 0 ? `${product.stock} items in stock (Ready to ship)` : "Out of stock"}
              </span>
            </div>

            {/* Call to Action Button */}
            <button className="w-full bg-gray-900 text-white font-black text-lg py-5 rounded-2xl hover:bg-orange-500 transition-colors shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}