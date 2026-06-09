import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";

export function Shop() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Lashes", "Tools", "Skincare Prep", "Accessories"];

  const products = [
    {
      id: 1,
      name: "Signature Fluffy Lashes",
      price: 15.00,
      category: "Lashes",
      img: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVsYXNoZXN8ZW58MXx8fHwxNzc4MDAwMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Pro Master Brush Set",
      price: 85.00,
      category: "Tools",
      img: "https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBicnVzaGVzfGVufDF8fHx8MTc3ODAwMDMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      name: "Radiance Pre-Glam Serum",
      price: 45.00,
      category: "Skincare Prep",
      img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzc4MDAwMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      name: "Flawless Blending Sponge",
      price: 12.00,
      category: "Tools",
      img: "https://images.unsplash.com/photo-1631214499995-468422da65d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBzcG9uZ2V8ZW58MXx8fHwxNzc4MDAwMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="bg-cream min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-black mb-6">Shop</h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Professional-grade tools and essentials, curated by Priscilla to keep your glam flawless at home.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeFilter === filter 
                  ? "bg-black text-white" 
                  : "bg-white text-black/60 hover:text-black hover:bg-black/5"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden group border border-black/5 flex flex-col hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-square overflow-hidden bg-black/5 relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold hover:text-white flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-black/40 uppercase tracking-widest mb-2">{product.category}</p>
                      <h3 className="font-serif text-xl text-black mb-4">{product.name}</h3>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <p className="text-lg font-medium text-rose">£{product.price.toFixed(2)}</p>
                      <button className="w-full border border-black/20 hover:border-black text-black py-2 rounded-full text-sm uppercase tracking-wider transition-colors md:hidden">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-black/5">
            <ShoppingBag className="w-12 h-12 text-black/20 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-black mb-2">No products found</h3>
            <p className="text-black/60">Check back later or try a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}