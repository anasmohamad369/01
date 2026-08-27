"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenRegister: (defaultClass?: string) => void;
}

const HERO_IMAGES = [
  { src: "/images/image-3.png", alt: "1" },
  { src: "/images/image-1.png", alt: "2" },
  { src: "/images/image-2.png", alt: "3" },
  { src: "/images/image-4.png", alt: "4" },
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
    <section className="relative overflow-hidden py-12 lg:py-20 bg-[#FBF9F5]">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1C1C1C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column - Clean Headline & Content */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1ECE3] border border-[#E7DFCE] text-[#C8232C] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Teja Taekwondo & Karate Club</span>
            </div>

            {/* Main Headline (Clean & Proportional) */}
            <div className="space-y-1">
              <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-[#1C1C1C] leading-[0.98] uppercase font-bold tracking-wide">
                KARATE FOR <br />
                <span className="inline-flex items-center gap-2">
                  THE MIND,

                  {/* Rotating Discipline Stamp Badge */}
                  <span className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F1ECE3] border border-[#C8232C]/30 shadow-sm flex-shrink-0">
                    <svg
                      className="w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <path
                        id="textPath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[10px] font-semibold tracking-[0.16em] fill-[#C8232C] uppercase">
                        <textPath href="#textPath" startOffset="0%">
                          DISCIPLINE • CONTROL • GAINPOWER •
                        </textPath>
                      </text>
                    </svg>

                    {/* Belt Knot Icon */}
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg width="20" height="14" viewBox="0 0 100 60" fill="none">
                        <path d="M30 25 C15 10, 5 30, 25 45 C35 52, 45 35, 30 25 Z" fill="#C8232C" />
                        <path d="M70 25 C85 10, 95 30, 75 45 C65 52, 55 35, 70 25 Z" fill="#C8232C" />
                        <rect x="40" y="20" width="20" height="20" rx="4" fill="#A51B23" />
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
              Experience the power, kicking agility, and mental discipline of Teja Taekwondo Club.
              Whether you&apos;re a beginner or an experienced practitioner, our Karate program
              will help you build strength, focus, and confidence.
            </p>

            {/* Dark Counter Pill & CTA Card (Matching Reference Layout) */}
            <div className="relative inline-flex items-center justify-between p-2 pl-5 rounded-2xl bg-[#1F1F1F] text-white shadow-xl max-w-md w-full border border-white/10">
              <p className="text-xs font-semibold text-gray-200">
                We have over <strong className="text-white font-bold">1,500 active students</strong>
              </p>

              <button
                onClick={() => onOpenRegister()}
                className="bg-[#C8232C] hover:bg-[#A51B23] text-white font-bold text-xs px-6 py-3 rounded-xl shadow transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>Join Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column - Big Cutout Image with Japanese Brush Ring Graphic (NO Frame/Box) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px]">
            
            {/* Japanese Red & Black Brush Circle Backdrop Graphic */}
         

            {/* Big Cutout Image with Smooth Crossfade */}
            <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[580px] flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={HERO_IMAGES[currentImageIndex].src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={HERO_IMAGES[currentImageIndex].src}
                    alt={HERO_IMAGES[currentImageIndex].alt}
                    fill
                    priority
                    className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
