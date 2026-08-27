"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      {/* Top Banner Header Notice with Direct Telephone & WhatsApp */}
      <div className="bg-[#1C1C1C] text-white text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-between max-w-7xl mx-auto flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C8232C] animate-ping" />
          <span>Teja Taekwondo & Karate Club • Fitness Center</span>
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
            : "bg-[#FBF9F5] py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex flex-col items-center">
              {/* Belt Knot SVG Logo Icon */}
              <div className="flex items-center gap-1">
                <svg
                  width="36"
                  height="22"
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:scale-105 transition-transform duration-200"
                >
                  {/* Left belt loop */}
                  <path
                    d="M30 25 C15 10, 5 30, 25 45 C35 52, 45 35, 30 25 Z"
                    fill="#C8232C"
                  />
                  {/* Right belt loop */}
                  <path
                    d="M70 25 C85 10, 95 30, 75 45 C65 52, 55 35, 70 25 Z"
                    fill="#C8232C"
                  />
                  {/* Center belt knot */}
                  <rect x="40" y="20" width="20" height="20" rx="4" fill="#A51B23" />
                  {/* Belt tail left */}
                  <path d="M43 38 L30 58 L42 58 L50 40 Z" fill="#C8232C" />
                  {/* Belt tail right */}
                  <path d="M57 38 L70 58 L58 58 L50 40 Z" fill="#A51B23" />
                </svg>
              </div>
              <span className="font-bebas text-3xl tracking-wider text-[#1C1C1C] leading-none font-bold">
                BD<span className="text-[#C8232C]">KARATE</span>
              </span>
            </div>
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenRegister()}
              className="bg-[#C8232C] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1C1C] hover:bg-[#F2EFE8] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
