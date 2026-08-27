"use client";

import Image from "next/image";
import { CLASSES_DATA, TAEKWONDO_TENETS, KarateClass } from "@/data/karateData";
import { Clock, Calendar, ChevronRight, CheckCircle2, Sparkles, MessageSquare, PhoneCall } from "lucide-react";

interface ClassFilterSectionProps {
  onOpenRegister: (className?: string) => void;
}

export default function ClassFilterSection({ onOpenRegister }: ClassFilterSectionProps) {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#FBF9F5] text-[#1C1C1C] border-t border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
        
        {/* 1. THE WAY OF THE FOOT & FIST Intro Section */}
        <div className="space-y-5 max-w-4xl border-l-4 border-[#C8232C] pl-5 sm:pl-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1ECE3] border border-[#E7DFCE] text-[#C8232C] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Traditional Taekwondo Philosophy</span>
          </div>
          
          <h2 className="font-bebas text-4xl sm:text-5xl text-[#1C1C1C] tracking-wide font-extrabold uppercase">
            THE WAY OF THE FOOT & FIST
          </h2>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            Taekwondo is more than just a sport; it is a way of life. Originating from Korea, it emphasizes high-velocity kicking techniques and disciplined movement. At Teja Taekwondo, we teach the five tenets: <strong className="text-[#1C1C1C]">Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit</strong>.
          </p>

          {/* 5 Tenets Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {TAEKWONDO_TENETS.map((tenet) => (
              <div
                key={tenet.name}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E7DFCE] text-xs font-bold text-[#1C1C1C] shadow-sm flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#C8232C] flex-shrink-0" />
                <span>{tenet.name}</span>
                <span className="text-[10px] text-gray-400 font-semibold">({tenet.korean})</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. OUR PROGRAMS Section (Direct 3 Program Cards without redundant top tabs) */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#FACC15] pl-5 sm:pl-7 space-y-1">
            <h2 className="font-bebas text-4xl sm:text-5xl text-[#1C1C1C] tracking-wide font-extrabold uppercase">
              OUR PROGRAMS
            </h2>
            <p className="text-xs sm:text-sm text-[#666666]">
              Explore our core training divisions tailored for different age groups and athletic goals.
            </p>
          </div>

          {/* 3 Direct Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLASSES_DATA.map((item: KarateClass) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE4D9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Header */}
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#1C1C1C]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-[#C8232C] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {item.badge}
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-[#1C1C1C] text-xs font-bold px-3 py-1 rounded-lg shadow">
                      {item.ageRange}
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-[#1C1C1C]/80 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C8232C] tracking-wide uppercase">
                        {item.beltFocus}
                      </span>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F1ECE3] text-[#444444]">
                        {item.intensity}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bebas text-3xl text-[#1C1C1C] tracking-wide font-bold">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs font-semibold text-[#666666] mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="pt-3 border-t border-gray-100 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                        <Calendar className="w-4 h-4 text-[#C8232C]" />
                        <span>{item.schedule}</span>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        {item.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#333333]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C8232C] flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-6 pb-6 pt-2 space-y-2">
                  <button
                    onClick={() => onOpenRegister(item.title)}
                    className="w-full bg-[#1C1C1C] hover:bg-[#C8232C] text-white font-bold text-xs py-3 rounded-xl shadow transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider group/btn"
                  >
                    <span>Register for {item.title}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  
                  <a
                    href={`https://wa.me/917981278696?text=Hi%20Coach%20B.%20Sai%20Teja!%20I%20want%20to%20register%20for%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
