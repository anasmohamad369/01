"use client";

import { useState } from "react";
import Image from "next/image";
import { SHOP_ITEMS, ShopItem } from "@/data/karateData";
import { ShoppingBag, Star, Check, Sparkles } from "lucide-react";

export default function ShopSection() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const handleAddToCart = (id: string) => {
    setCartCount((prev) => prev + 1);
    setAddedItemId(id);
    setTimeout(() => setAddedItemId(null), 1500);
  };

  return (
    <section id="shop" className="py-20 bg-[#F5F1E8] border-t border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3D2] text-[#C8232C] text-xs font-semibold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Official Dojo Pro Shop</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-6xl text-[#1C1C1C] tracking-wide font-extrabold uppercase">
              Authentic Karate Equipment & Uniforms
            </h2>
            <p className="text-sm text-[#666666]">
              Hand-picked, WKF approved heavy-duty canvas Gis, silk satin belts, and protective sparring gear.
            </p>
          </div>

          {/* Cart Indicator */}
          <div className="bg-white px-5 py-2.5 rounded-full border border-[#EAE4D9] shadow-sm flex items-center gap-3 self-start md:self-auto">
            <ShoppingBag className="w-5 h-5 text-[#C8232C]" />
            <span className="text-xs font-bold text-[#1C1C1C]">Cart ({cartCount} Items)</span>
          </div>
        </div>

        {/* Shop Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOP_ITEMS.map((item: ShopItem) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAE4D9] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 w-full bg-[#FAF7F2] p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isPopular && (
                    <span className="absolute top-3 left-3 bg-[#1C1C1C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Best Seller
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1C1C1C] text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow">
                    <Star className="w-3 h-3 fill-[#FACC15] text-[#FACC15]" />
                    {item.rating}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 space-y-2 text-left">
                  <span className="text-[11px] font-semibold text-[#C8232C] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-sm text-[#1C1C1C] line-clamp-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="font-bebas text-2xl text-[#1C1C1C] font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="px-5 pb-5">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    addedItemId === item.id
                      ? "bg-green-600 text-white"
                      : "bg-[#1C1C1C] hover:bg-[#C8232C] text-white"
                  }`}
                >
                  {addedItemId === item.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
