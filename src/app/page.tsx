"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClassFilterSection from "@/components/ClassFilterSection";
import BeltProgressionSection from "@/components/BeltProgressionSection";
import InstructorsSection from "@/components/InstructorsSection";
import ShopSection from "@/components/ShopSection";
import ArticlesSection from "@/components/ArticlesSection";
import RegistrationModal from "@/components/RegistrationModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string>("Little Tigers Martial Arts");

  const handleOpenRegister = (className?: string) => {
    if (className) {
      setSelectedClass(className);
    }
    setRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1C1C]">
      {/* Header Navigation */}
      <Header onOpenRegister={handleOpenRegister} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenRegister={handleOpenRegister} />

        {/* Class Offers Filter */}
        <ClassFilterSection onOpenRegister={handleOpenRegister} />

        {/* Belt Progression Journey */}
        <BeltProgressionSection />

        {/* Certified Instructors */}
        <InstructorsSection />

        {/* Pro Shop */}
        {/* <ShopSection /> */}

        {/* Articles & Insights */}
        <ArticlesSection />
      </main>

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        defaultClass={selectedClass}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
