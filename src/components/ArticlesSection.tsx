"use client";

import Image from "next/image";
import { ARTICLES, Article } from "@/data/karateData";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F1ECE3] text-[#C8232C] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Martial Arts Knowledge</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-[#1C1C1C] tracking-wide font-extrabold uppercase">
            Latest Articles & Wisdom
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Insights into Kata philosophy, belt examination preparation, and martial arts parenting tips.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art: Article) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAE4D9] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-[#1C1C1C]">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1C1C1C] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {art.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{art.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C8232C]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#1C1C1C] group-hover:text-[#C8232C] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] line-clamp-3 leading-relaxed">
                    {art.snippet}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-2">
                <span className="text-xs font-bold text-[#C8232C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
