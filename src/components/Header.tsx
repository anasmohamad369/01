"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Shield, Sparkles, ChevronRight, Award } from "lucide-react";

interface HeaderProps {
  onOpenRegister: (defaultClass?: string) => void;
}

export default function Header({ onOpenRegister }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Shop", href: "#shop" },
    { name: "Articles", href: "#articles" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Top Banner Header Notice with Direct Telephone & WhatsApp - Hidden on small mobile screens */}
      <div className="hidden sm:flex bg-[#1C1C1C] text-white text-xs py-2 px-4 text-center tracking-wide font-medium items-center justify-between max-w-7xl mx-auto flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C8232C] animate-ping" />
          <span>Teja Taekwondo Club • Kukkiwon Certified Center</span>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <a
            href="tel:+917981278696"
            className="hover:text-[#FACC15] transition-colors flex items-center gap-1 font-semibold"
          >
            📞 +91 7981278696
          </a>
          <span className="opacity-40">•</span>
          <a
            href="https://wa.me/917981278696?text=Hi%20Coach%20B.%20Sai%20Teja!%20I%20want%20to%20inquire%20about%20Teja%20Taekwondo%20Club%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors flex items-center gap-1 font-semibold"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
            ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#EAE4D9]"
            : "bg-[#FBF9F5] py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="BD Karate Logo"
              width={140}
              height={45}
              priority
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2C2C2C] hover:text-[#C8232C] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8232C] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenRegister()}
              className="bg-[#C8232C] hover:bg-[#A51B23] text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-2 group"
            >
              <span>Register Now</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button - Clean 3-bar hamburger icon */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1C1C1C] hover:bg-[#F2EFE8] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7 stroke-[2.25]" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF9F5] border-b border-[#EAE4D9] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#1C1C1C] hover:text-[#C8232C] py-2 px-3 rounded-lg hover:bg-[#F1ECE3] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full bg-[#C8232C] hover:bg-[#A51B23] text-white font-medium py-3 rounded-full text-center shadow-md active:scale-95 transition-all"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
