"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenRegister: (defaultClass?: string) => void;
}

const HERO_IMAGES = [
  { src: "/images/image-3.png", alt: "Taekwondo Athlete Kicking Stance" },
  { src: "/images/image-1.png", alt: "Taekwondo Sparring Champion" },
  { src: "/images/image-2.png", alt: "Taekwondo Master Poomsae Form" },
  { src: "/images/image-4.png", alt: "Taekwondo High Kick Action" },
];

export default function HeroSection({ onOpenRegister }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic smooth crossfade every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-6 sm:py-10 lg:py-16 bg-[#FBF9F5]">

      {/* Subtle Background Radial Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1C1C1C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Image & Enso Graphic Section - Rendered FIRST on mobile to match reference image layout */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[440px] lg:min-h-[520px]">
            
       

            {/* Karate Cutout Image with Smooth Crossfade */}
            <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={HERO_IMAGES[currentImageIndex].src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={HERO_IMAGES[currentImageIndex].src}
                    alt={HERO_IMAGES[currentImageIndex].alt}
                    fill
                    priority
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.18)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Left Column - Headline & Content (Rendered SECOND on mobile) */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-5 text-left">

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECE3] border border-[#E7DFCE] text-[#C8232C] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Teja Taekwondo Club</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-[#1C1C1C] leading-[0.98] uppercase font-bold tracking-wide">
                TAEKWONDO FOR <br />
                <span className="inline-flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  THE MIND,

                  {/* Circular Discipline Stamp Badge - Red Filled with Rotating White Text */}
                  <span className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C8232C] shadow-md flex-shrink-0 align-middle">
                    <svg
                      className="w-full h-full animate-spin-slow p-1"
                      viewBox="0 0 100 100"
                    >
                      <path
                        id="textPathStamp"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[9.5px] font-bold tracking-[0.18em] fill-white uppercase">
                        <textPath href="#textPathStamp" startOffset="0%">
                          DISCIPLINE • GAINPOWER • SELF CONTROL •
                        </textPath>
                      </text>
                    </svg>

                    {/* White Belt Knot Icon in Center */}
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg width="20" height="14" viewBox="0 0 100 60" fill="none">
                        <path d="M30 25 C15 10, 5 30, 25 45 C35 52, 45 35, 30 25 Z" fill="#FFFFFF" />
                        <path d="M70 25 C85 10, 95 30, 75 45 C65 52, 55 35, 70 25 Z" fill="#FFFFFF" />
                        <rect x="40" y="20" width="20" height="20" rx="4" fill="#FBF9F5" />
                      </svg>
                    </span>
                  </span>
                </span>
                <br />
                BODY & SPIRIT
              </h1>
            </div>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-[#666666] max-w-md font-normal leading-relaxed">
              Experience the power, kicking agility, and mental discipline of this ancient martial art.
              Whether you&apos;re a beginner or an experienced practitioner, our Taekwondo program.
            </p>

            {/* Dark Pill CTA Card with Red Shadow Offset Backdrop (Exact Match to Reference Screenshot) */}
            <div className="pt-2">
              <div className="relative inline-block w-full max-w-md">
                {/* Red Offset Background Card Shadow */}
                <div className="absolute inset-0 translate-y-2 translate-x-0 bg-[#C8232C] rounded-2xl -z-10" />

                {/* Main Dark Pill Container */}
                <div className="bg-[#1C1C1C] text-white rounded-2xl p-3 pl-5 flex items-center justify-between shadow-lg border border-white/10">
                  <span className="text-sm font-medium text-gray-200">
                    1.5k active students
                  </span>

                  <button
                    onClick={() => onOpenRegister()}
                    className="bg-[#C8232C] hover:bg-[#A51B23] active:bg-[#8F161E] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md transition-all duration-150 cursor-pointer active:scale-95 flex items-center gap-1"
                  >
                    <span>Join Now</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
