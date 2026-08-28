"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  TAEKWONDO_BELT_RANKS,
  TAEKWONDO_BELT_BENEFITS,
  BeltRank,
  BeltBenefit,
} from "@/data/karateData";
import {
  Award,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Target,
  ShieldAlert,
  Brain,
  Activity,
  Globe2,
  ChevronRight,
  Calculator,
  Compass,
  Zap,
} from "lucide-react";

// Realistic Rendered Taekwondo Belt Graphic Component
function TaekwondoBeltGraphic({
  belt,
  isSelected,
  onClick,
}: {
  belt: BeltRank;
  isSelected: boolean;
  onClick: () => void;
}) {
  const isWhite = belt.colorHex.toUpperCase() === "#FFFFFF";
  const isBlack = belt.colorHex.toUpperCase() === "#111827";
  const hasStripe = !!belt.stripeColorHex;

  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center p-3 rounded-2xl transition-all duration-300 cursor-pointer text-left border ${
        isSelected
          ? "bg-[#1C1C1C] text-white border-[#C8232C] shadow-xl scale-105 ring-2 ring-[#C8232C]/50"
          : "bg-white text-[#1C1C1C] border-[#EAE4D9] hover:border-[#C8232C]/60 hover:bg-[#FBF9F5] shadow-sm hover:shadow-md"
      }`}
    >
      {/* Belt Banner Graphic representation */}
      <div className="relative w-full h-12 rounded-lg overflow-hidden flex items-center justify-between px-3 shadow-inner border border-black/10 transition-transform group-hover:scale-[1.02]"
        style={{ backgroundColor: belt.colorHex }}
      >
        {/* Main Belt Texture & Subtle Shading */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/25 pointer-events-none" />

        {/* Belt Knot Visual representation */}
        <div
          className={`relative z-10 w-5 h-7 rounded-sm shadow-md border ${
            isWhite ? "border-gray-300 bg-white" : "border-black/30"
          } flex items-center justify-center`}
          style={{ backgroundColor: belt.colorHex }}
        >
          <div className="w-1.5 h-full bg-black/20" />
        </div>

        {/* Stripe Bar if Belt has senior stripe */}
        {hasStripe && (
          <div
            className="relative z-10 w-3.5 h-full shadow-md border-x border-black/30"
            style={{ backgroundColor: belt.stripeColorHex }}
          />
        )}

        {/* Black Belt Gold Embroidery Accent */}
        {isBlack && (
          <div className="relative z-10 text-[9.5px] font-extrabold tracking-widest text-[#FACC15] uppercase font-mono drop-shadow-sm">
            KUKKIWON
          </div>
        )}

        {/* Belt Level Tag */}
        <div
          className={`relative z-10 text-[10px] font-bold px-1.5 py-0.5 rounded ${
            isWhite || (hasStripe && belt.colorHex === "#FFFFFF")
              ? "bg-black/80 text-white"
              : isBlack
              ? "bg-white/20 text-white"
              : "bg-black/70 text-white"
          }`}
        >
          L{belt.level}
        </div>
      </div>

      {/* Label under belt graphic */}
      <div className="mt-2.5 w-full text-center">
        <div
          className={`text-xs font-bold uppercase tracking-wide truncate ${
            isSelected ? "text-white" : "text-[#1C1C1C]"
          }`}
        >
          {belt.name}
        </div>
        <div
          className={`text-[10px] font-medium tracking-tight ${
            isSelected ? "text-[#FACC15]" : "text-[#666666]"
          }`}
        >
          {belt.koreanName}
        </div>
      </div>
    </button>
  );
}

export default function BeltProgressionSection() {
  const [viewTab, setViewTab] = useState<"core" | "geup" | "dan">("core");
  const [selectedBelt, setSelectedBelt] = useState<BeltRank>(TAEKWONDO_BELT_RANKS[0]);
  const [activeBenefit, setActiveBenefit] = useState<BeltBenefit>(TAEKWONDO_BELT_BENEFITS[0]);

  // Calculator State
  const [startRankLevel, setStartRankLevel] = useState<number>(1);
  const [targetRankLevel, setTargetRankLevel] = useState<number>(11);

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax Scroll Transformations
  const bgGlowY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  // Filter Belts based on selected View Tab
  const displayedBelts = TAEKWONDO_BELT_RANKS.filter((belt) => {
    if (viewTab === "core") return belt.category === "core" || belt.name.includes("BLACK BELT 1ST DAN");
    if (viewTab === "dan") return belt.category === "dan";
    return true; // "geup" displays full 12 levels
  });

  // Calculator Computations
  const startBelt = TAEKWONDO_BELT_RANKS.find((b) => b.level === startRankLevel) || TAEKWONDO_BELT_RANKS[0];
  const targetBelt = TAEKWONDO_BELT_RANKS.find((b) => b.level === targetRankLevel) || TAEKWONDO_BELT_RANKS[10];
  
  const calculateTotalMonths = () => {
    if (targetRankLevel <= startRankLevel) return "Achieved!";
    let countMonths = 0;
    TAEKWONDO_BELT_RANKS.forEach((b) => {
      if (b.level > startRankLevel && b.level <= targetRankLevel) {
        if (b.durationMonths.includes("2-3")) countMonths += 2.5;
        else if (b.durationMonths.includes("3-4")) countMonths += 3.5;
        else if (b.durationMonths.includes("4-5")) countMonths += 4.5;
        else if (b.durationMonths.includes("5-6")) countMonths += 5.5;
        else if (b.durationMonths.includes("6-8")) countMonths += 7;
        else if (b.durationMonths.includes("6-12")) countMonths += 9;
        else countMonths += 12;
      }
    });
    return `${Math.round(countMonths)} Months`;
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity":
        return <Activity className="w-6 h-6 text-[#C8232C]" />;
      case "Brain":
        return <Brain className="w-6 h-6 text-[#C8232C]" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-[#C8232C]" />;
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-[#C8232C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C8232C]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#FBF9F5] text-[#1C1C1C]"
    >
      {/* Background Radial Glow */}
      <motion.div
        style={{ y: bgGlowY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C8232C]/10 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1ECE3] border border-[#E7DFCE] text-[#C8232C] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4" />
            <span>KUKKIWON TAEKWONDO BELT SYSTEM</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl lg:text-7xl tracking-wide font-extrabold uppercase leading-none">
            The Mastery Journey From <span className="text-[#C8232C]">White Belt</span> To <span className="text-[#1C1C1C] border-b-4 border-[#FACC15]">Black Belt</span>
          </h2>

          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto">
            In World Taekwondo (Kukkiwon), belts are not just ornaments—they represent an authentic progression of technical kicking precision, physical stamina, Taegeuk Poomsae forms, and moral self-control.
          </p>

          {/* Belt View Category Tabs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setViewTab("core")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                viewTab === "core"
                  ? "bg-[#C8232C] text-white border-[#C8232C] shadow-md"
                  : "bg-white text-[#1C1C1C] border-[#EAE4D9] hover:bg-[#F1ECE3]"
              }`}
            >
              Core Ranks (6 Main Belts)
            </button>
            <button
              onClick={() => setViewTab("geup")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                viewTab === "geup"
                  ? "bg-[#C8232C] text-white border-[#C8232C] shadow-md"
                  : "bg-white text-[#1C1C1C] border-[#EAE4D9] hover:bg-[#F1ECE3]"
              }`}
            >
              Complete 10-Geup Hierarchy
            </button>
            <button
              onClick={() => setViewTab("dan")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                viewTab === "dan"
                  ? "bg-[#C8232C] text-white border-[#C8232C] shadow-md"
                  : "bg-white text-[#1C1C1C] border-[#EAE4D9] hover:bg-[#F1ECE3]"
              }`}
            >
              Kukkiwon Black Belt Dan Ranks
            </button>
          </div>
        </div>

        {/* Belt Selection Track */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {displayedBelts.map((belt) => (
            <TaekwondoBeltGraphic
              key={belt.name + belt.level}
              belt={belt}
              isSelected={selectedBelt.level === belt.level}
              onClick={() => setSelectedBelt(belt)}
            />
          ))}
        </div>

        {/* Selected Belt Detail Showcase Card */}
        <motion.div
          key={selectedBelt.name + selectedBelt.level}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE4D9] max-w-5xl mx-auto shadow-xl relative overflow-hidden"
        >
          {/* Top Banner Stripe Overlay */}
          <div
            className="h-2.5 w-full absolute top-0 left-0"
            style={{ backgroundColor: selectedBelt.stripeColorHex || selectedBelt.colorHex }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            
            {/* Left Graphic Showcase Box */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-[#FBF9F5] border border-[#EAE4D9] space-y-4">
              <div className="relative">
                {/* Large Circle Badge */}
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform duration-300 transform hover:scale-105"
                  style={{ backgroundColor: selectedBelt.colorHex }}
                >
                  <Award
                    className="w-14 h-14 drop-shadow-md"
                    style={{ color: selectedBelt.textColor }}
                  />
                </div>
                {selectedBelt.stripeColorHex && (
                  <span
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full border-2 border-white shadow-md flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ backgroundColor: selectedBelt.stripeColorHex }}
                  />
                )}
              </div>

              <div>
                <span className="text-xs font-bold text-[#C8232C] uppercase tracking-widest bg-[#C8232C]/10 px-3 py-1 rounded-full border border-[#C8232C]/20">
                  {selectedBelt.geupOrDan}
                </span>
                <h3 className="font-bebas text-4xl text-[#1C1C1C] font-bold tracking-wide mt-2">
                  {selectedBelt.name}
                </h3>
                <p className="text-xs font-semibold text-gray-500 italic mt-0.5">
                  Korean Name: {selectedBelt.koreanName}
                </p>
              </div>

              {/* Belt Useful Purpose Highlight Box */}
              <div className="w-full text-left p-3.5 rounded-xl bg-white border border-[#EAE4D9] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#C8232C]">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Belt Purpose & Value</span>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  {selectedBelt.usefulnessBenefit}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-[#F1ECE3] px-4 py-1.5 rounded-full border border-[#E7DFCE]">
                <span>Est. Duration:</span>
                <span className="font-bold text-[#1C1C1C]">{selectedBelt.durationMonths}</span>
              </div>
            </div>

            {/* Right Side Specifications & Skills */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Form & Stance Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#C8232C] uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>Official Kukkiwon Form (Poomsae)</span>
                  </h4>
                  <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {selectedBelt.geupOrDan}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EAE4D9] text-xs font-semibold text-[#1C1C1C] flex items-center justify-between">
                  <span>{selectedBelt.poomsae}</span>
                  <span className="text-[11px] font-bold text-[#C8232C]">Required Form</span>
                </div>
              </div>

              {/* Kicking & Hand Skills Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#C8232C] uppercase tracking-wider flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  <span>Core Techniques & Kicks Learned</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedBelt.skillsLearned.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FBF9F5] border border-[#EAE4D9] text-xs text-[#222222]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C8232C] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Board Breaking Test Requirement */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-[#C8232C] uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FACC15]" />
                  <span>Board Breaking Test (Gyeokpa)</span>
                </h4>
                <div className="p-3 rounded-xl bg-[#1C1C1C] text-white text-xs font-semibold flex items-center justify-between">
                  <span className="text-gray-200">{selectedBelt.breakingRequirement}</span>
                  <span className="text-[#FACC15] text-[10px] font-bold uppercase tracking-wider border border-[#FACC15]/40 px-2 py-0.5 rounded">
                    Power & Focus
                  </span>
                </div>
              </div>

              {/* Philosophical Quote */}
              <div className="p-4 rounded-xl bg-[#F1ECE3] border-l-4 border-[#C8232C] italic text-xs sm:text-sm text-[#333333] leading-relaxed font-medium">
                &ldquo;{selectedBelt.quote}&rdquo;
              </div>

            </div>

          </div>
        </motion.div>

        {/* SECTION 2: RESEARCH - WHY TAEKWONDO BELTS ARE USEFUL */}
        <div className="pt-10 border-t border-[#EAE4D9] space-y-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C8232C]/10 border border-[#C8232C]/20 text-[#C8232C] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESEARCH & MARTIAL VALUE</span>
            </div>
            
            <h3 className="font-bebas text-3xl sm:text-5xl font-bold uppercase tracking-wide">
              Why Is The Belt System <span className="text-[#C8232C]">So Useful?</span>
            </h3>

            <p className="text-sm text-[#666666]">
              Discover how Taekwondo belt progression develops physical power, emotional regulation, practical self-defense, and global credentials.
            </p>
          </div>

          {/* Research Interactive Tab Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Benefit Selector Buttons Column */}
            <div className="lg:col-span-5 space-y-3">
              {TAEKWONDO_BELT_BENEFITS.map((item) => {
                const isActive = activeBenefit.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveBenefit(item)}
                    className={`w-full p-4 rounded-2xl transition-all duration-200 text-left cursor-pointer border flex items-center justify-between ${
                      isActive
                        ? "bg-[#1C1C1C] text-white border-[#C8232C] shadow-lg translate-x-1"
                        : "bg-white text-[#1C1C1C] border-[#EAE4D9] hover:bg-[#FBF9F5] hover:border-[#C8232C]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl ${isActive ? "bg-[#C8232C] text-white" : "bg-[#F1ECE3] text-[#C8232C]"}`}>
                        {getBenefitIcon(item.icon)}
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-[#FACC15]" : "text-[#C8232C]"}`}>
                          {item.category} Value
                        </span>
                        <h4 className="text-sm font-bold leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "text-[#C8232C] translate-x-1" : "text-gray-400"}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Benefit Research Details Display Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE4D9] shadow-lg flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8232C]/10 text-[#C8232C] text-xs font-bold uppercase">
                    {getBenefitIcon(activeBenefit.icon)}
                    <span>{activeBenefit.title}</span>
                  </div>

                  <div className="text-right">
                    <div className="font-bebas text-3xl font-extrabold text-[#C8232C] leading-none">
                      {activeBenefit.statNumber}
                    </div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {activeBenefit.statLabel}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#444444] font-medium leading-relaxed bg-[#FBF9F5] p-4 rounded-xl border border-[#EAE4D9]">
                  {activeBenefit.summary}
                </p>

                <div className="space-y-2.5">
                  <h5 className="text-xs font-bold text-[#1C1C1C] uppercase tracking-wider">
                    Key Scientific & Methodological Insights:
                  </h5>
                  <div className="space-y-2">
                    {activeBenefit.details.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#333333]">
                        <CheckCircle2 className="w-4 h-4 text-[#C8232C] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="p-3.5 rounded-xl bg-[#1C1C1C] text-white text-xs font-medium flex items-center justify-between">
                <span className="text-gray-300">Certified standard at Teja Taekwondo Club</span>
                <span className="text-[#FACC15] font-bold">Kukkiwon Standard</span>
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 3: INTERACTIVE BELT JOURNEY CALCULATOR */}
        <div className="pt-10 border-t border-[#EAE4D9]">
          <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2D2D2D] rounded-3xl p-6 sm:p-10 text-white shadow-2xl space-y-8 relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8232C]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8232C] text-white text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE ROADMAP TOOL</span>
              </div>
              <h3 className="font-bebas text-3xl sm:text-5xl font-bold uppercase tracking-wide">
                Calculate Your Personal <span className="text-[#FACC15]">Belt Timeline</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Select your starting experience and target belt rank to project your training timeline, required forms, and milestone expectations under Head Coach B. Sai Teja.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Controls */}
              <div className="space-y-5 bg-white/5 p-5 rounded-2xl border border-white/10">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    1. Select Starting Rank:
                  </label>
                  <select
                    value={startRankLevel}
                    onChange={(e) => setStartRankLevel(Number(e.target.value))}
                    className="w-full bg-[#1C1C1C] border border-white/20 text-white rounded-xl p-3 text-xs font-semibold focus:outline-none focus:border-[#C8232C]"
                  >
                    {TAEKWONDO_BELT_RANKS.map((b) => (
                      <option key={b.level} value={b.level}>
                        {b.name} ({b.geupOrDan})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    2. Select Target Goal Rank:
                  </label>
                  <select
                    value={targetRankLevel}
                    onChange={(e) => setTargetRankLevel(Number(e.target.value))}
                    className="w-full bg-[#1C1C1C] border border-white/20 text-white rounded-xl p-3 text-xs font-semibold focus:outline-none focus:border-[#C8232C]"
                  >
                    {TAEKWONDO_BELT_RANKS.map((b) => (
                      <option key={b.level} value={b.level}>
                        {b.name} ({b.geupOrDan})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Preview */}
              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-gray-300 font-medium">Estimated Training Time:</span>
                  <span className="font-bebas text-3xl font-extrabold text-[#FACC15]">
                    {calculateTotalMonths()}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Starting Form:</span>
                    <span className="font-semibold text-white">{startBelt.poomsae}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target Master Form:</span>
                    <span className="font-semibold text-[#FACC15]">{targetBelt.poomsae}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Final Board Break Test:</span>
                    <span className="font-semibold text-white">{targetBelt.breakingRequirement}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full bg-[#C8232C] hover:bg-[#A51B23] text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Begin Your Belt Journey Today</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
