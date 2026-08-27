"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";
import { HEAD_COACH } from "@/data/karateData";
import { Award, Globe, Trophy, Shield, ArrowLeft, Sparkles, Quote, ChevronRight } from "lucide-react";

export default function CoachProfilePage() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-6 h-6 text-[#FACC15]" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-[#FACC15]" />;
      case "Trophy":
        return <Trophy className="w-6 h-6 text-[#FACC15]" />;
      case "Shield":
        return <Shield className="w-6 h-6 text-[#FACC15]" />;
      default:
        return <Award className="w-6 h-6 text-[#FACC15]" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1C1C]">
      {/* Navigation Header */}
      <Header onOpenRegister={() => setRegisterModalOpen(true)} />

      <main className="flex-grow py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Navigation Button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#666666] hover:text-[#C8232C] transition-colors py-1 px-3 rounded-full bg-[#F1ECE3] border border-[#E7DFCE]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dojo Main Page</span>
            </Link>
          </div>

          {/* Top Hero Banner - Meet The Head Coach */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C] text-[#FACC15] text-xs font-semibold uppercase tracking-wider shadow">
              <Sparkles className="w-4 h-4" />
              <span>Teja Taekwondo Club Head Coach</span>
            </div>
            <h1 className="font-bebas text-5xl sm:text-7xl text-[#1C1C1C] tracking-wide font-extrabold uppercase">
              MEET THE HEAD COACH
            </h1>
            <p className="text-sm sm:text-base text-[#666666]">
              Transforming lives through elite training and martial arts philosophy
            </p>
          </div>

          {/* Coach Main Profile Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#EAE4D9] shadow-xl text-center space-y-6 max-w-3xl mx-auto relative overflow-hidden">
            
            {/* Image Frame */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-3xl overflow-hidden border-4 border-[#FACC15] shadow-2xl bg-[#1C1C1C] group">
              <Image
                src={HEAD_COACH.image}
                alt={HEAD_COACH.name}
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Coach Name & Rank */}
            <div className="space-y-1">
              <h2 className="font-bebas text-4xl sm:text-5xl text-[#1C1C1C] font-bold tracking-wide">
                {HEAD_COACH.name}
              </h2>
              <p className="text-xs sm:text-sm font-extrabold text-[#C8232C] tracking-widest uppercase">
                {HEAD_COACH.belt} • HEAD COACH
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-xs sm:text-base text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
              {HEAD_COACH.bio}
            </p>

          </div>

          {/* Credentials & Accolades Section (Matching Screenshot) */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h3 className="font-bebas text-3xl text-[#1C1C1C] tracking-wider uppercase font-bold text-left border-l-4 border-[#C8232C] pl-3">
              CREDENTIALS & ACCOLADES
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {HEAD_COACH.accolades.map((acc, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#EAE4D9] shadow-sm hover:shadow-md transition-all flex items-center gap-4 text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] text-[#FACC15] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(acc.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1C1C1C]">
                      {acc.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-[#888888]">
                      Verified Qualification & Achievement
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching Philosophy Section (Matching Screenshot) */}
          <div className="bg-[#1C1C1C] text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-3xl mx-auto text-left relative overflow-hidden space-y-4">
            <div className="flex items-center gap-2 text-[#FACC15] text-xs font-bold uppercase tracking-wider">
              <Quote className="w-5 h-5" />
              <span>MY TEACHING PHILOSOPHY</span>
            </div>

            <p className="italic text-base sm:text-xl text-gray-200 leading-relaxed font-light">
              &ldquo;{HEAD_COACH.philosophy}&rdquo;
            </p>

            <div className="pt-2 text-xs font-semibold text-gray-400 tracking-widest uppercase">
              • COURAGE • HONOR • DISCIPLINE •
            </div>
          </div>

          {/* Bottom Call-To-Action Banner Button */}
          <div className="max-w-3xl mx-auto pt-4 text-center">
            <button
              onClick={() => setRegisterModalOpen(true)}
              className="w-full bg-[#FACC15] hover:bg-[#EAB308] text-[#1C1C1C] font-bebas text-2xl tracking-wider py-5 rounded-2xl shadow-xl transition-all duration-200 cursor-pointer active:scale-98 flex items-center justify-center gap-3 uppercase font-extrabold group"
            >
              <span>TRAIN WITH COACH B. SAI TEJA</span>
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </main>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        defaultClass="Private Coaching with B. Sai Teja"
      />

      <Footer />
    </div>
  );
}
