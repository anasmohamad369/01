"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Shield, Globe, Share2, MessageSquare, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FBF9F5] text-[#1C1C1C] pt-16 pb-12 border-t border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C8232C] text-white flex items-center justify-center shadow">
                <span className="text-lg font-bold">🥋</span>
              </div>
              <span className="font-bebas text-3xl tracking-wider text-[#1C1C1C] leading-none font-bold">
                TEJA <span className="text-[#C8232C]">TAEKWONDO</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-sm font-normal">
              Teja Taekwondo & Karate Club. Dedicated to developing self-defense skills, mental discipline, kicking precision, and Kukkiwon certified martial arts excellence.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/917981278696"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-2 shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+917981278696"
                className="px-4 py-2.5 rounded-xl bg-[#1C1C1C] hover:bg-[#C8232C] text-white text-xs font-bold flex items-center gap-2 shadow transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#FACC15]" />
                <span>Call Coach</span>
              </a>
            </div>
          </div>

          {/* Programs Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bebas text-xl text-[#1C1C1C] tracking-wider uppercase font-bold">
              Our Programs
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#444444]">
              <li><a href="#programs" className="hover:text-[#C8232C] transition-colors">Little Tigers (Ages 4-7)</a></li>
              <li><a href="#programs" className="hover:text-[#C8232C] transition-colors">Olympic Sparring (Ages 8+)</a></li>
              <li><a href="#programs" className="hover:text-[#C8232C] transition-colors">Self-Defense (All Ages)</a></li>
              <li><a href="#about" className="hover:text-[#C8232C] transition-colors">Kukkiwon Belt Progression</a></li>
              <li><Link href="/coach" className="hover:text-[#C8232C] transition-colors">Coach B. Sai Teja Profile</Link></li>
            </ul>
          </div>

          {/* Dojo Schedule Col */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bebas text-xl text-[#1C1C1C] tracking-wider uppercase font-bold">
              Dojo Hours
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#444444]">
              <li><strong className="text-[#1C1C1C]">Mon - Fri:</strong> 4:00 PM - 8:30 PM</li>
              <li><strong className="text-[#1C1C1C]">Saturday:</strong> 8:30 AM - 1:00 PM</li>
              <li><strong className="text-[#1C1C1C]">Sunday:</strong> Sparring Practice</li>
            </ul>
          </div>

          {/* Contact & Location Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bebas text-xl text-[#1C1C1C] tracking-wider uppercase font-bold">
              Club Contact
            </h4>
            <ul className="space-y-3 text-xs font-medium text-[#444444]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8232C] flex-shrink-0 mt-0.5" />
                <span className="text-[#333333]">Teja Taekwondo Club Dojang Center</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8232C] flex-shrink-0" />
                <a href="tel:+917981278696" className="hover:text-[#C8232C] font-bold text-[#1C1C1C] transition-colors">
                  +91 7981278696
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a href="https://wa.me/917981278696" target="_blank" rel="noopener noreferrer" className="hover:text-[#20ba5a] font-bold text-[#25D366] transition-colors">
                  WhatsApp: +91 7981278696
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4 font-medium">
          <p>© {new Date().getFullYear()} Teja Taekwondo Club. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">Privacy Policy</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-[#1C1C1C] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
