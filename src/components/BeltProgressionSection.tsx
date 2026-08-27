"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BELT_RANKS, BeltRank } from "@/data/karateData";
import { Award, CheckCircle2 } from "lucide-react";

export default function BeltProgressionSection() {
  const [selectedBelt, setSelectedBelt] = useState<BeltRank>(BELT_RANKS[0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax Scroll Transformations
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const titleY = useTransform(scrollYProgress, [0, 1], [-40, 25]);
  const cardY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  
  // Parallax Background Color Shift from White/Cream (#FBF9F5) towards Black (#0A0B0E) as user scrolls into Head Coach
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["#FBF9F5", "#FBF9F5", "#0A0B0E"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    ["#1C1C1C", "#1C1C1C", "#FFFFFF"]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      style={{ backgroundColor }}
      className="py-24 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background Radial Glow */}
      <motion.div
        style={{ y: bgGlowY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8232C]/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <motion.div
          style={{ y: titleY }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1ECE3] border border-[#E7DFCE] text-[#C8232C] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>BELT JOURNEY & PHILOSOPHY</span>
          </div>
          
          <motion.h2
            style={{ color: textColor }}
            className="font-bebas text-4xl sm:text-6xl tracking-wide font-extrabold uppercase"
          >
            The Journey From <span className="text-[#C8232C]">White</span> To <span className="text-[#FACC15]">Black Belt</span>
          </motion.h2>

          <p className="text-sm sm:text-base text-[#666666]">
            Select a belt to discover its meaning, techniques, and philosophy.
          </p>
        </motion.div>

        {/* Belt Rank Buttons Track */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {BELT_RANKS.map((belt) => {
            const isSelected = selectedBelt.level === belt.level;
            return (
              <button
                key={belt.name}
                onClick={() => setSelectedBelt(belt)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-[#C8232C] text-white border-[#C8232C] shadow-lg scale-105"
                    : "bg-white text-[#1C1C1C] border-[#EAE4D9] hover:border-[#C8232C] hover:bg-[#F1ECE3]"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-gray-300 shadow-inner flex-shrink-0"
                  style={{ backgroundColor: belt.colorHex }}
                />
                <span>{belt.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Belt Detail Card */}
        <motion.div
          style={{ y: cardY }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE4D9] max-w-4xl mx-auto shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Belt Graphic Showcase */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-4 p-6 rounded-2xl bg-[#FBF9F5] border border-[#EAE4D9]">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform duration-300 transform hover:scale-110"
                style={{ backgroundColor: selectedBelt.colorHex }}
              >
                <Award
                  className="w-12 h-12"
                  style={{ color: selectedBelt.textColor }}
                />
              </div>
              <div>
                <span className="text-xs font-bold text-[#888888] uppercase tracking-widest">
                  Level {selectedBelt.level} of 6
                </span>
                <h3 className="font-bebas text-3xl text-[#1C1C1C] font-bold tracking-wide mt-0.5">
                  {selectedBelt.name}
                </h3>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#C8232C]/10 text-[#C8232C] border border-[#C8232C]/20">
                  Est. {selectedBelt.durationMonths}
                </span>
              </div>
            </div>

            {/* Belt Details & Skills */}
            <div className="md:col-span-8 space-y-6 text-left">
              <div>
                <h4 className="text-xs font-bold text-[#C8232C] uppercase tracking-wider">
                  Core Requirements & Techniques
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {selectedBelt.skillsLearned.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FBF9F5] border border-[#EAE4D9] text-xs text-[#333333]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C8232C] flex-shrink-0" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-xl bg-[#F1ECE3]/70 border-l-4 border-[#C8232C] italic text-xs sm:text-sm text-[#444444] leading-relaxed font-medium">
                &ldquo;{selectedBelt.quote}&rdquo;
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
