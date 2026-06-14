"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, Key, Sparkles, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={cn('relative', 'min-h-screen', 'bg-[#FFFFFF]', 'overflow-hidden', 'pt-24', 'pb-16', 'px-4', 'md:px-8', 'lg:px-16', 'flex', 'items-center')}>
      {/* BACKGROUND TEXTURE & ACCENT */}
      <div className={cn('absolute', 'inset-0', 'bg-[radial-gradient(#543420_1px,transparent_1px)]', '[background-size:32px_32px]', 'opacity-[0.02]')} />
      <div className={cn('absolute', 'top-0', 'right-0', 'w-[500px]', 'h-[500px]', 'bg-[#E2D8CC]/20', 'rounded-full', 'blur-3xl', 'pointer-events-none', '-z-10')} />

      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]', 'grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'lg:gap-8', 'items-center', 'relative', 'z-10')}>
        
        {/* ========================================================= */}
        {/* LEFT SIDE: TYPOGRAPHY & CTA BUTTONS                       */}
        {/* ========================================================= */}
        <div className={cn('lg:col-span-6', 'space-y-6', 'md:space-y-8', 'text-center', 'lg:text-left')}>
          
          {/* Tagline Badge */}
          <div 
            className={cn(
              "inline-flex items-center gap-2 bg-[#E2D8CC]/40 border border-[#543420]/10 px-4 py-1.5 rounded-full transition-all duration-1000 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
          >
            <Sparkles size={14} className="text-[#543420]" />
            <span className={cn('text-[11px]', 'font-bold', 'tracking-widest', 'uppercase', 'text-[#543420]')}>
              The Pinnacle of Private Living
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 
              className={cn(
                "font-serif font-light text-4xl md:text-6xl text-[#543420] tracking-tight leading-[1.1] transition-all duration-1000 delay-150 transform",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Where Nature <br />
              <span className={cn('font-semibold', 'italic', 'text-[#543420]')}>Meets Sophistication.</span>
            </h1>
            <p 
              className={cn(
                "text-zinc-600 font-light text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-300 transform",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              Temukan koleksi vila eksklusif di <strong className={cn('text-[#543420]', 'font-semibold')}>The Osborn Living</strong>. Dirancang dengan arsitektur tropis modern pasca-kontemporer untuk investasi masa depan dan kenyamanan hidup yang hakiki.
            </p>
          </div>

          {/* Interactive Feature Mini Grid */}
          <div 
            className={cn(
              "grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-2 transition-all duration-1000 delay-500 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className={cn('flex', 'flex-col', 'items-center', 'lg:items-start', 'border-l', 'border-[#543420]/20', 'pl-4')}>
              <span className={cn('font-serif', 'text-xl', 'md:text-2xl', 'font-bold', 'text-[#543420]')}>01</span>
              <span className={cn('text-[10px]', 'text-zinc-400', 'font-medium', 'uppercase', 'tracking-wider', 'mt-0.5')}>Premium Villa</span>
            </div>
            <div className={cn('flex', 'flex-col', 'items-center', 'lg:items-start', 'border-l', 'border-[#543420]/20', 'pl-4')}>
              <span className={cn('font-serif', 'text-xl', 'md:text-2xl', 'font-bold', 'text-[#543420]')}>100%</span>
              <span className={cn('text-[10px]', 'text-zinc-400', 'font-medium', 'uppercase', 'tracking-wider', 'mt-0.5')}>Private Pool</span>
            </div>
            <div className={cn('flex', 'flex-col', 'items-center', 'lg:items-start', 'border-l', 'border-[#543420]/20', 'pl-4')}>
              <span className={cn('font-serif', 'text-xl', 'md:text-2xl', 'font-bold', 'text-[#543420]')}>Strategic</span>
              <span className={cn('text-[10px]', 'text-zinc-400', 'font-medium', 'uppercase', 'tracking-wider', 'mt-0.5')}>Location</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 transition-all duration-1000 delay-700 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <a 
              href="#explore"
              className={cn('group', 'flex', 'items-center', 'justify-center', 'gap-3', 'bg-[#543420]', 'text-white', 'font-bold', 'text-xs', 'px-8', 'py-4', 'rounded-xl', 'shadow-xl', 'shadow-[#543420]/10', 'hover:bg-[#432918]', 'transition-all', 'w-full', 'sm:w-auto', 'active:scale-95')}
            >
              <span>Explore Collection</span>
              <ArrowUpRight size={14} className={cn('group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform')} />
            </a>
            
            <a 
              href="#consultation"
              className={cn('flex', 'items-center', 'justify-center', 'gap-2', 'bg-[#E2D8CC]/30', 'border', 'border-[#543420]/10', 'hover:bg-[#E2D8CC]/50', 'text-[#543420]', 'font-bold', 'text-xs', 'px-8', 'py-4', 'rounded-xl', 'transition-all', 'w-full', 'sm:w-auto', 'active:scale-95')}
            >
              <Compass size={14} />
              <span>Private Consultation</span>
            </a>
          </div>

        </div>

        {/* ========================================================= */}
        {/* RIGHT SIDE: ASYMMETRIC VISUAL SHOWCASE                    */}
        {/* ========================================================= */}
        <div className={cn('lg:col-span-6', 'relative', 'h-[450px]', 'md:h-[580px]', 'w-full', 'mt-6', 'lg:mt-0')}>
          
          {/* Main Big Image Card */}
          <div 
            className={cn(
              "absolute left-0 top-0 w-[75%] h-[85%] rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(84,52,32,0.15)] transition-all duration-1000 delay-300 transform z-10",
              isLoaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-95"
            )}
          >
            {/* Ganti src dengan foto villa asli kamu nanti */}
            <Image 
              src="/images/villa-main.jpg" 
              alt="The Osborn Living Main Unit" 
              fill 
              className={cn('object-cover', 'hover:scale-105', 'transition-transform', 'duration-700')}
              priority
            />
            {/* Location Badge Over Image */}
            <div className={cn('absolute', 'bottom-4', 'left-4', 'bg-white/90', 'backdrop-blur-md', 'border', 'border-zinc-100', 'px-3', 'py-1.5', 'rounded-xl', 'flex', 'items-center', 'gap-2', 'shadow-sm')}>
              <MapPin size={12} className="text-[#543420]" />
              <span className={cn('text-[10px]', 'font-bold', 'text-zinc-800', 'tracking-wide')}>Ubud, Bali</span>
            </div>
          </div>

          {/* Secondary Tucked Image Card */}
          <div 
            className={cn(
              "absolute right-0 bottom-0 w-[55%] h-[60%] rounded-[1.5rem] overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(84,52,32,0.12)] transition-all duration-1000 delay-500 transform z-20",
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            )}
          >
            {/* Ganti src dengan foto interior/detail villa asli */}
            <Image 
              src="/images/villa-interior.jpg" 
              alt="The Osborn Living Interior" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Decorative Framing Accent (Krem) */}
          <div 
            className={cn(
              "absolute right-[40%] top-[10%] w-[35%] h-[40%] bg-[#E2D8CC] rounded-[1.5rem] -z-10 transition-all duration-1000 delay-200 transform",
              isLoaded ? "opacity-100 rotate-6 scale-100" : "opacity-0 rotate-0 scale-90"
            )}
          />

          {/* Floating Luxury Trust Badge */}
          <div 
            className={cn(
              "absolute left-4 bottom-4 md:left-8 md:bottom-12 bg-[#543420] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30 transition-all duration-1000 delay-700 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <div className={cn('p-2', 'bg-white/10', 'rounded-xl', 'text-[#E2D8CC]')}>
              <Key size={16} />
            </div>
            <div className="pr-2">
              <span className={cn('text-[9px]', 'text-zinc-300', 'uppercase', 'font-medium', 'tracking-wider', 'block')}>Ownership</span>
              <span className={cn('text-xs', 'font-bold', 'block', 'tracking-wide', 'text-[#E2D8CC]')}>SHM / Freehold Certified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}