"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MapPin, Car, Clock, Sparkles, Navigation, ArrowUpRight } from "lucide-react";

export default function Location() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nearbyDestinations = [
    {
      name: "Ubud Center & Cultural Palace",
      time: "5 Menit",
      distance: "2.1 km",
      category: "Culture & Arts",
      image: "/images/location-ubud.jpg", // Ganti dengan foto Ubud Center / Pura / Center Hub
    },
    {
      name: "Premium Gastronomy & Fine Dining",
      time: "3 Menit",
      distance: "1.2 km",
      category: "Culinary Hub",
      image: "/images/location-dining.jpg", // Ganti dengan foto restoran mewah terdekat
    },
    {
      name: "Sanur Exclusive Beach Clubs",
      time: "25 Menit",
      distance: "18 km",
      category: "Leisure & Coastal",
      image: "/images/location-beach.jpg", // Ganti dengan foto beach club premium
    },
    {
      name: "Ngurah Rai International Airport",
      time: "45 Menit",
      distance: "36 km",
      category: "Accessibility",
      image: "/images/location-airport.jpg", // Ganti dengan foto bandara / akses jalan tol
    },
  ];

  return (
    <section id="location" className={cn('bg-[#FFFFFF]', 'py-20', 'px-4', 'md:px-8', 'lg:px-16', 'w-full', 'relative', 'overflow-hidden')}>
      {/* Accent Light Background Gradient */}
      <div className={cn('absolute', 'bottom-0', 'left-0', 'w-[400px]', 'h-[400px]', 'bg-[#E2D8CC]/10', 'rounded-full', 'blur-3xl', 'pointer-events-none', '-z-10')} />

      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]')}>
        
        {/* ========================================================= */}
        {/* UPPER ROW: TEXT HEADING                                   */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-6', 'items-end', 'mb-16')}>
          <div className={cn('lg:col-span-7', 'space-y-3')}>
            <div className={cn('inline-flex', 'items-center', 'gap-2', 'bg-[#E2D8CC]/40', 'border', 'border-[#543420]/10', 'px-3.5', 'py-1', 'rounded-full')}>
              <Sparkles size={12} className="text-[#543420]" />
              <span className={cn('text-[10px]', 'font-extrabold', 'tracking-widest', 'uppercase', 'text-[#543420]')}>
                Strategic Micro-Location
              </span>
            </div>
            <h2 className={cn('font-serif', 'font-light', 'text-3xl', 'md:text-5xl', 'text-[#543420]', 'tracking-tight', 'leading-tight')}>
              Konektivitas di <br />
              <span className={cn('font-semibold', 'italic')}>Lokasi Paling Prestige</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'md:text-sm', 'leading-relaxed')}>
              Dikelilingi oleh keasrian alam yang tenang, namun tetap memiliki akses instan menuju pusat kuliner bintang lima, galeri seni internasional, dan konektivitas jalur utama bandara. Keseimbangan sempurna antara privasi dan aksesibilitas.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CONTENT: GRID ACCESSIBILITY                         */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-10', 'items-stretch')}>
          
          {/* LEFT SIDE: SUMMARY LIST & EMBED MAP / LOCATION TRIVIA */}
          <div className={cn('lg:col-span-4', 'flex', 'flex-col', 'justify-between', 'gap-6')}>
            <div className="space-y-4">
              <span className={cn('text-[10px]', 'font-bold', 'text-zinc-400', 'uppercase', 'tracking-widest', 'block', 'border-b', 'border-zinc-100', 'pb-2')}>
                Poin Akses Utama
              </span>
              
              <div className="space-y-3">
                {nearbyDestinations.map((spot, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer",
                      hoveredIndex === idx 
                        ? "bg-[#543420] border-[#543420] text-white shadow-md shadow-[#543420]/10" 
                        : "bg-[#FAFAFA] border-zinc-100 text-[#543420]"
                    )}
                  >
                    <div className="space-y-0.5">
                      <span className={cn(
                        "text-[9px] font-bold uppercase tracking-wider block",
                        hoveredIndex === idx ? "text-[#E2D8CC]" : "text-zinc-400"
                      )}>
                        {spot.category}
                      </span>
                      <h4 className={cn('text-xs', 'font-bold', 'tracking-wide', 'transition-colors')}>
                        {spot.name}
                      </h4>
                    </div>

                    <div className={cn('flex', 'items-center', 'gap-1.5', 'shrink-0', 'pl-4', 'font-mono', 'text-xs', 'font-bold')}>
                      <Car size={13} className={hoveredIndex === idx ? "text-[#E2D8CC]" : "text-[#543420]/60"} />
                      <span>{spot.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Call-to-action Card */}
            <div className={cn('p-5', 'bg-[#E2D8CC]/20', 'border', 'border-[#543420]/5', 'rounded-2xl', 'flex', 'items-center', 'justify-between', 'gap-4', 'mt-4')}>
              <div className={cn('flex', 'items-center', 'gap-3')}>
                <div className={cn('w-8', 'h-8', 'rounded-lg', 'bg-[#543420]', 'text-white', 'flex', 'items-center', 'justify-center')}>
                  <Navigation size={14} />
                </div>
                <div>
                  <h4 className={cn('text-xs', 'font-bold', 'text-[#543420]')}>Ingin Survey Lokasi?</h4>
                  <p className={cn('text-[10px]', 'text-zinc-500', 'font-light')}>Eksplor rute digital via Google Maps</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn('w-7', 'h-7', 'bg-white', 'border', 'border-[#543420]/10', 'text-[#543420]', 'rounded-lg', 'flex', 'items-center', 'justify-center', 'hover:bg-[#543420]', 'hover:text-white', 'transition-colors')}
              >
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: PHOTO SHOWCASE COLLAGE GRID */}
          <div className={cn('lg:col-span-8', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
            {nearbyDestinations.map((spot, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn('relative', 'h-[200px]', 'sm:h-full', 'min-h-[200px]', 'rounded-2xl', 'overflow-hidden', 'shadow-sm', 'group', 'border-2', 'border-white', 'transition-all', 'duration-500')}
              >
                {/* Image Overlay */}
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out",
                    hoveredIndex === idx ? "scale-105" : "scale-100"
                  )}
                />
                
                {/* Gradient Shading */}
                <div className={cn('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#543420]/80', 'via-[#543420]/20', 'to-transparent', 'opacity-80', 'transition-opacity', 'duration-300')} />

                {/* Floating Info Over Picture */}
                <div className={cn('absolute', 'inset-x-0', 'bottom-0', 'p-5', 'text-white', 'flex', 'flex-col', 'justify-end', 'h-full')}>
                  <div className={cn('flex', 'items-center', 'justify-between', 'gap-2')}>
                    <div className="space-y-1">
                      <span className={cn('text-[9px]', 'font-bold', 'tracking-widest', 'text-[#E2D8CC]', 'uppercase', 'bg-white/10', 'backdrop-blur-md', 'px-2', 'py-0.5', 'rounded', 'border', 'border-white/10', 'inline-block')}>
                        {spot.category}
                      </span>
                      <h3 className={cn('text-xs', 'md:text-sm', 'font-bold', 'tracking-wide', 'leading-snug', 'max-w-[85%]', 'text-white')}>
                        {spot.name}
                      </h3>
                    </div>

                    {/* Time Badge in Image corner */}
                    <div className={cn('bg-white', 'text-[#543420]', 'px-2.5', 'py-1.5', 'rounded-xl', 'flex', 'flex-col', 'items-center', 'justify-center', 'shadow-md', 'border', 'border-zinc-100', 'shrink-0', 'text-center', 'min-w-[65px]')}>
                      <span className={cn('text-[10px]', 'font-bold', 'leading-none')}>{spot.time}</span>
                      <span className={cn('text-[8px]', 'text-zinc-400', 'font-medium', 'tracking-wide', 'uppercase', 'mt-0.5')}>{spot.distance}</span>
                    </div>
                  </div>
                </div>

                {/* Active Highlight Border Line */}
                <div className={cn(
                  "absolute inset-0 border-2 rounded-2xl transition-all duration-300 pointer-events-none",
                  hoveredIndex === idx ? "border-[#E2D8CC]" : "border-transparent"
                )} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}