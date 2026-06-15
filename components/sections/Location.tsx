"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Car, Sparkles, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Location() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const nearbyDestinations = [
    {
      name: "Alun-Alun Kota Wisata Batu",
      time: "3 Menit",
      distance: "1.2 km",
      category: "City Center Hub",
      image: "/alunbatu.png",
    },
    {
      name: "Batu Love Garden (BALOGA)",
      time: "2 Menit",
      distance: "850 m",
      category: "Nature & Flora Park",
      image: "/baloga.jpg",
    },
    {
      name: "Jatim Park 2 (Batu Secret Zoo)",
      time: "5 Menit",
      distance: "2.4 km",
      category: "Family Theme Park",
      image: "/jatimpark.jpg",
    },
    {
      name: "Museum Angkut",
      time: "6 Menit",
      distance: "2.9 km",
      category: "Edu-Tourism & Culture",
      image: "/museum.png",
    },
  ];

  return (
    <section 
      id="location" 
      ref={sectionRef}
      className="bg-[#FAFAF8] py-14 md:py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden relative"
    >
      {/* PERBAIKAN: Elemen lingkaran pembawa efek 'blur-3xl' warna amber/orange pengganggu di sini SUDAH DIHAPUS TOTAL */}

      <div className="mx-auto w-full max-w-[1360px]">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER                                   */}
        {/* ========================================================= */}
        <div className={cn(
          "mb-10 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#E67E22]/20 px-3.5 py-1.5 rounded-full">
            <Sparkles size={12} className="text-[#E67E22]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#D35400]">
              Strategic Micro-Location
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3">
            Konektivitas di{" "}
            <span className="font-semibold italic text-[#E67E22]">Lokasi Paling Prestige</span>
          </h2>
          
          <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            Dikelilingi oleh keasrian alam yang sejuk khas pegunungan, namun tetap memiliki akses instan menuju pusat destinasi hiburan keluarga berkelas dunia, eduwisata modern, serta area kuliner populer Kota Wisata Batu.
          </p>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CONTENT: GRID ACCESSIBILITY                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: SUMMARY LIST & GOOGLE MAPS CTA */}
          <div className={cn(
            "lg:col-span-5 flex flex-col justify-between gap-8 transition-all duration-1000 delay-200 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="space-y-5">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block border-b border-zinc-100 pb-2">
                Poin Akses Utama & Destinasi Terdekat
              </span>
              
              <div className="space-y-3.5">
                {nearbyDestinations.map((spot, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn(
                      "flex items-center justify-between p-4.5 rounded-xl border transition-all duration-300 cursor-pointer group",
                      hoveredIndex === idx 
                        ? "bg-[#E67E22] border-[#E67E22] text-white shadow-xl shadow-[#E67E22]/20 scale-[1.01]" 
                        : "bg-[#FAFAFA] border-zinc-100 text-[#543420] hover:bg-zinc-50"
                    )}
                  >
                    <div className="space-y-0.5 min-w-0 pr-2">
                      <span className={cn(
                        "text-[9px] font-bold uppercase tracking-wider block transition-colors duration-300",
                        hoveredIndex === idx ? "text-[#F39C12]" : "text-zinc-400"
                      )}>
                        {spot.category}
                      </span>
                      <h4 className="text-xs md:text-sm font-bold tracking-wide truncate">
                        {spot.name}
                      </h4>
                    </div>

                    <div className={cn(
                      "flex items-center gap-1.5 shrink-0 pl-4 font-mono text-xs font-bold px-3 py-1.5 rounded-lg transition-colors duration-300",
                      hoveredIndex === idx ? "bg-white/10 text-white" : "bg-[#543420]/5 text-[#543420]"
                    )}>
                      <Car size={13} className={hoveredIndex === idx ? "text-white" : "text-[#543420]/60"} />
                      <span>{spot.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Call-to-action Card */}
            <div className="p-5 bg-[#F39C12]/5 border border-[#E67E22]/10 border-l-4 border-l-[#E67E22] rounded-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E67E22] text-white flex items-center justify-center shrink-0 shadow-inner">
                  <Navigation size={16} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#543420]">Ingin Survey Lokasi?</h4>
                  <p className="text-[10px] text-zinc-500 font-light mt-0.5">Eksplor rute digital via Google Maps</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/place/The+Osborn+Living/@-7.8713679,112.5361277,672m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e78810071e5329f:0xd6aeb00719d4879c!8m2!3d-7.8713732!4d112.5387026!16s%2Fg%2F11y48cgz0q?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white border border-[#543420]/10 text-[#543420] rounded-xl flex items-center justify-center shadow-sm hover:bg-[#E67E22] hover:border-[#E67E22] hover:text-white hover:scale-105 transition-all duration-300"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: PHOTO SHOWCASE COLLAGE GRID */}
          <div className={cn(
            "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-400 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            {nearbyDestinations.map((spot, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative h-[240px] sm:h-full min-h-[240px] rounded-2xl overflow-hidden shadow-sm group border border-zinc-100 transition-all duration-500",
                  hoveredIndex === idx ? "shadow-2xl shadow-[#E67E22]/15" : ""
                )}
              >
                {/* Image Overlay */}
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 2}
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    hoveredIndex === idx ? "scale-105" : "scale-100"
                  )}
                />
                
                {/* Gradient Shading */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-[#432918] via-[#543420]/40 to-transparent transition-opacity duration-300",
                  hoveredIndex === idx ? "opacity-95" : "opacity-80"
                )} />

                {/* Floating Info Over Picture */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end h-full z-10">
                  <div className="flex items-end justify-between gap-3">
                    <div className="space-y-1.5 min-w-0">
                      <span className="text-[9px] font-bold tracking-widest text-[#F39C12] uppercase bg-black/30 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10 inline-block">
                        {spot.category}
                      </span>
                      <h3 className={cn(
                        "text-xs md:text-sm font-bold tracking-wide leading-snug text-white transition-colors duration-300",
                        hoveredIndex === idx ? "text-[#F39C12]" : "text-white"
                      )}>
                        {spot.name}
                      </h3>
                    </div>

                    {/* Time Badge in Image corner */}
                    <div className="bg-white text-[#543420] px-3 py-2 rounded-xl flex flex-col items-center justify-center shadow-lg border border-zinc-100 shrink-0 text-center min-w-[70px]">
                      <span className="text-xs font-extrabold leading-none tracking-tight text-[#D35400]">{spot.time}</span>
                      <span className="text-[8px] text-zinc-400 font-bold tracking-wide uppercase mt-1">{spot.distance}</span>
                    </div>
                  </div>
                </div>

                {/* Active Highlight Border Line */}
                <div className={cn(
                  "absolute inset-0 border-2 rounded-2xl transition-all duration-300 pointer-events-none z-20",
                  hoveredIndex === idx ? "border-[#E67E22]" : "border-transparent"
                )} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}