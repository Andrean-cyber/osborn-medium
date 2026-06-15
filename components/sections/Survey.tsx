"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sparkles, MapPin, Users } from "lucide-react";

export default function SurveyCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const surveyGalleries = [
    {
      title: "Family Private Gathering Tour",
      visitor: "Keluarga Bp. Hendra (Surabaya)",
      image: "/srvy1.jpg",
    },
    {
      title: "Investor Executive Briefing",
      visitor: "Ibu Citra & Rekan (Jakarta Pusat)",
      image: "/srvy2.jpg",
    },
    {
      title: "Weekend Site Inspection",
      visitor: "Dr. Aditya (Malang)",
      image: "/srvy3.jpg",
    },
    {
      title: "VIP Booking Deal Survey",
      visitor: "Bp. Ronald & Istri (Sidoarjo)",
      image: "/srvy4.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="survey-showcase" 
      ref={sectionRef}
      className="bg-[#FAFAF8] py-14 md:py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F39C12]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[1360px]">
        
        {/* ── CENTERED SECTION HEADER ── */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#E67E22]/20 px-3.5 py-1.5 rounded-full">
            <Sparkles size={12} className="text-[#E67E22]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#D35400]">
              Live Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3">
            Keseruan Dokumentasi {" "}
            <span className="font-semibold italic text-[#E67E22]">Survei Lokasi</span>
          </h2>
          
          <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Suasana nyata kunjungan para calon investor dan keluarga yang telah meninjau langsung proyek modern tropical estate kami secara eksklusif.
          </p>
        </div>

        {/* ── ELEGANT PORTRAIT GRID CARDS (3 Columns Row / Scrollable Mobile) ── */}
        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {surveyGalleries.map((gallery, index) => (
            <div 
              key={index}
              className="group relative aspect-[9/14] w-full rounded-[2rem] overflow-hidden bg-zinc-100 border border-zinc-100/80 shadow-[0_4px_20px_rgba(84,52,32,0.03)] hover:shadow-[0_20px_40px_rgba(230,126,34,0.1)] transition-all duration-500 ease-out"
            >
              {/* Portrait Image */}
              <Image
                src={gallery.image}
                alt={gallery.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                priority={index < 2}
              />
              
              {/* Default Light Shading Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#432918]/60 via-transparent to-black/10 transition-all duration-500 group-hover:from-[#432918]/90 group-hover:via-[#543420]/40" />

              {/* Top Corner: Static Minimalist Icon Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded-xl border border-white/20 shadow-sm opacity-100 transition-opacity duration-300">
                <Users size={12} className="text-[#E67E22]" />
              </div>

              {/* Bottom Layout: Permanent Location Marker */}
              <div className="absolute bottom-5 left-5 flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300">
                <MapPin size={10} className="text-[#F39C12]" />
                <span className="text-[9px] font-bold text-white tracking-wide uppercase">Oro-Oro Ombo</span>
              </div>

              {/* INTERACTIVE HOVER CARD DETAILS: Rises clean from bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                <div className="space-y-2">
                  <span className="text-[9px] font-bold tracking-widest text-[#F39C12] uppercase block">
                    Verified Visitor
                  </span>
                  <h3 className="font-bold text-sm md:text-base text-white tracking-tight leading-snug">
                    {gallery.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#E67E22] rounded-full" />
                  <p className="text-[11px] text-zinc-300/90 font-light truncate">
                    {gallery.visitor}
                  </p>
                </div>
              </div>

              {/* Active Hover Frame Accent */}
              <div className="absolute inset-0 border-2 border-transparent rounded-[2rem] group-hover:border-[#E67E22] transition-colors duration-500 pointer-events-none z-20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}