"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HEAD_COACH } from "@/data/karateData";
import { ChevronRight, Medal, Sparkles } from "lucide-react";

export default function InstructorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax Scroll Transformations
  const titleY = useTransform(scrollYProgress, [0, 1], [-40, 30]);
  const cardY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const cardScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  return (
    <section
      ref={sectionRef}
      id="coach"
      className="py-24 sm:py-28 bg-[#0A0B0E] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Background Red & Gold Parallax Flares */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-120, 120]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C8232C]/15 rounded-full blur-[160px] pointer-events-none"
      />

      {/* Decorative Parallax Kanji Watermark */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-70, 70]) }}
        className="absolute left-6 bottom-10 text-white/5 font-bebas text-[180px] leading-none select-none pointer-events-none hidden lg:block"
      >
        師範
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center relative z-10">
        
        {/* Section Header with Parallax */}
        <motion.div
          style={{ y: titleY }}
          className="space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FACC15] text-xs font-semibold uppercase tracking-wider border border-white/10 shadow">
            <Sparkles className="w-4 h-4" />
            <span>Meet The Head Coach</span>
          </div>
          
          <h2 className="font-bebas text-5xl sm:text-7xl text-white tracking-wide font-extrabold uppercase">
            Guided By Excellence
          </h2>
          
          <p className="text-sm sm:text-base text-gray-300">
            Transforming lives through elite training, technical precision, and martial arts values.
          </p>
        </motion.div>

        {/* Head Coach Featured Card in Dark Obsidian Styling */}
        <motion.div
          style={{ y: cardY, scale: cardScale }}
          className="max-w-4xl mx-auto bg-[#14161E] rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:border-[#C8232C]/40 transition-colors duration-300 group"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Coach Photo */}
            <div className="md:col-span-5 relative h-80 sm:h-96 md:h-full min-h-[380px] w-full bg-[#0A0B0E]">
              <Image
                src={HEAD_COACH.image}
                alt={HEAD_COACH.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14161E] via-transparent to-transparent md:hidden" />
              
              <div className="absolute bottom-4 left-4 md:hidden text-white">
                <span className="text-xs font-bold text-[#FACC15] uppercase tracking-wider block">
                  {HEAD_COACH.belt}
                </span>
                <h3 className="font-bebas text-3xl text-white font-bold">
                  {HEAD_COACH.name}
                </h3>
              </div>
            </div>

            {/* Coach Summary & Details */}
            <div className="md:col-span-7 p-6 sm:p-10 space-y-6 text-left flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="hidden md:block">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#C8232C]/20 text-[#FF6B6B] border border-[#C8232C]/30 uppercase tracking-wider">
                    {HEAD_COACH.belt}
                  </span>
                  <h3 className="font-bebas text-4xl text-white font-bold tracking-wide mt-1">
                    {HEAD_COACH.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {HEAD_COACH.title}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {HEAD_COACH.bio}
                </p>

                {/* Accolades Quick List */}
                <div className="space-y-2 pt-2">
                  {HEAD_COACH.accolades.slice(0, 3).map((acc, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200 font-medium">
                      <Medal className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                      <span>{acc.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link to Full Coach Profile Page */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/coach"
                  className="inline-flex items-center gap-2 bg-[#C8232C] hover:bg-[#A51B23] text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition-all duration-200 cursor-pointer active:scale-95 group/btn uppercase tracking-wider"
                >
                  <span>Know More & Full Profile</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>

                <span className="text-xs font-bold text-[#FACC15] hidden sm:inline-block">
                  ★ Gold Medalist Coach
                </span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
