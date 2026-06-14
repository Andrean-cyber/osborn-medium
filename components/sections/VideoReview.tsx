"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowUpRight, CheckCircle, Volume2, Film, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VideoReview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // URL Video Shorts Resmi The Osborn Living
  const youtubeShortsUrl = "https://youtube.com/shorts/NESL4Hqcg1E?si=1wmgg2JWpL80UZlw";
  // Menggunakan Thumbnail Resmi Resolusi Tertinggi (Maxresdefault) dari YouTube agar tidak blur
  const highResThumbnail = "https://i.ytimg.com/vi/NESL4Hqcg1E/maxresdefault.jpg";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="video-review" 
      ref={sectionRef}
      className="bg-[#FAFAFA] py-24 px-4 md:px-8 lg:px-16 w-full relative overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#E2D8CC]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -z-10" />

      <div className="mx-auto w-full max-w-[1360px]">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER                                   */}
        {/* ========================================================= */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block text-[10px] font-extrabold tracking-[0.28em] text-[#543420]/60 uppercase mb-3">
            Cinematic Property Tour
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug">
            Saksikan Langsung <br />
            <span className="font-semibold italic">Kemewahan Nyatanya</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-12 bg-[#543420]/20 block" />
            <Star size={10} className="text-[#543420]/40 fill-[#543420]/20" />
            <span className="h-px w-12 bg-[#543420]/20 block" />
          </div>
          <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            Membongkar rahasia dan keuntungan finansial memiliki aset premium di fase awal pembangunan sebelum harga pasar melonjak naik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: ULTRA-SHARP VIDEO THUMBNAIL PLAYER             */}
          {/* ========================================================= */}
          <div className={cn(
            "lg:col-span-7 w-full transition-all duration-1000 delay-200 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <a 
              href={youtubeShortsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[16/9] w-full bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(84,52,32,0.12)] border-4 border-white group block cursor-pointer"
            >
              {/* CUSTOM HIGH-RESOLUTION COVER PREVIEW */}
              <div className="absolute inset-0 w-full h-full z-10">
                <img
                  src={highResThumbnail}
                  alt="Beli Villa Belum Jadi, Apakah Worth It? - The Osborn Living"

                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"

                />
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Micro Floating Badges */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-sm border border-zinc-100/50">
                  <Volume2 size={12} className="text-[#543420] animate-bounce" />
                  <span className="text-[10px] font-bold text-zinc-800 tracking-wide">Eksklusif Walkthrough Tour</span>
                </div>

                {/* MAIN FLOATING PLAY BUTTON */}
                <div className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md text-white group-hover:bg-[#543420] group-hover:text-[#E2D8CC] rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl border border-white/30 group-hover:scale-110 group-hover:rotate-12 z-20">
                  <Play size={24} className="fill-current translate-x-0.5" />
                </div>

                {/* Shorts Indicator Badge */}
                <span className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white font-sans text-[10px] font-bold tracking-wider uppercase border border-white/10">
                  Tonton di YouTube Shorts
                </span>
              </div>
            </a>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: EDITORIAL SALES COPY DESCRIPTION              */}
          {/* ========================================================= */}
          <div className={cn(
            "lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left transition-all duration-1000 delay-400 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-[#543420] tracking-tight leading-snug">
                Beli Villa Belum Jadi, <br />
                <span className="font-light italic font-sans text-lg md:text-xl text-zinc-500 block mt-1">Apakah Benar-Benar Worth It? 🫣</span>
              </h3>
              
              <p className="text-[#543420] font-medium text-sm md:text-base italic leading-relaxed bg-[#E2D8CC]/20 p-4 rounded-2xl border-l-4 border-[#543420] text-left">
                “Ternyata banyak yang belum tahu kalau beli Villa yang masih dalam proses pembangunan tuh banyak banget benefitnya! 🔥”
              </p>

              <p className="text-zinc-500 font-light text-xs md:text-sm leading-relaxed text-left">
                Banyak orang memilih menunggu hingga bangunan selesai berdiri sempurna. Padahal, berinvestasi di fase awal pembangunan memberikan Anda keuntungan harga terendah (*ground-floor price*). Seiring berjalannya progres proyek, nilai valuasi dan harga unit akan otomatis meningkat tinggi.
              </p>
            </div>

            {/* Benefit Bullets Checklist */}
            <div className="space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              {[
                "Harga awal termurah mulai dari Rp 1,3 M-an",
                "Kawasan eksklusif yang lebih tinggi, luas, & cantik",
                "Fasilitas premium Free Private Jacuzzi",
                "Potensi lonjakan Capital Gain sejak awal pembangunan",
              ].map((bullet, index) => (
                <div key={index} className="flex items-center gap-3 text-zinc-700 text-xs font-medium">
                  <CheckCircle size={15} className="text-[#543420] shrink-0" />
                  <span className="text-zinc-600 font-light">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Direct Instant Action Button */}
            <div className="pt-2">
              <a 
                href={youtubeShortsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#543420] text-white font-bold text-xs px-8 py-4 'rounded-xl shadow-xl shadow-[#543420]/10 hover:bg-[#432918] transition-all w-full sm:w-auto active:scale-95"
              >
                <span>Putar Video Tour Selengkapnya</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}