// app/products/page.tsx
import Link from "next/link";
import productsData from "@/data/products.json";

export default function AllProducts() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">All Products</h1>
          <p className="text-gray-500 font-medium mt-2">Explore our complete summer collection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col">
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-1" title={product.name}>{product.name}</h3>
                  <span className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md shrink-0">
                    ★ {product.rating}
                  </span>
                </div>
                <p className="text-gray-500 text-xs font-medium mb-4 uppercase tracking-wider">{product.brand}</p>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
                  <p className="text-xl font-black text-gray-900">${product.price}</p>
                  <Link href={`/products/${product.id}`} className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-colors">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}