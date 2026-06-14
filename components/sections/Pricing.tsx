"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Mountain, BedDouble, Bath, Gift, Sparkles, ShieldCheck, ArrowRight, Home, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
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

  const villaFeatures = [
    { icon: <BedDouble size={14} />, text: "4 Master Bedrooms + Walk-in Closet" },
    { icon: <Bath size={14} />, text: "4 En-suite Bathrooms (Kohler Fittings)" },
    { icon: <Mountain size={14} />, text: "180° Unobstructed Mountain & Valley View" },
    { icon: <Home size={14} />, text: "Private Infinity Pool (12 x 4 Meter)" },
  ];

  const exclusiveBonuses = [
    "Fully Furnished Luxury Interior (Senilai IDR 350 Juta)",
    "Free 1-Year Exclusive Property Management & Marketing",
    "Free Biaya Notaris, Balik Nama, & Upgrade Sertifikat SHM",
    "Smart Home Security System & CCTV Integrated Premium"
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="bg-[#FFFFFF] py-24 px-4 md:px-8 lg:px-16 w-full relative overflow-hidden"
    >
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E2D8CC]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="mx-auto w-full max-w-[1240px]">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER (Symmetric with previous sections)*/}
        {/* ========================================================= */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 bg-[#E2D8CC]/40 border border-[#543420]/10 px-3.5 py-1.5 rounded-full">
            <Sparkles size={12} className="text-[#543420]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#543420]">
              Transparent Investment
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3">
            Penawaran Eksklusif <br />
            <span className="font-semibold italic">Satu Harga, All-Inclusive</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-12 bg-[#543420]/20 block" />
            <Star size={10} className="text-[#543420]/40 fill-[#543420]/20" />
            <span className="h-px w-12 bg-[#543420]/20 block" />
          </div>
          <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            Tanpa biaya siluman tersembunyi. Seluruh fasilitas mewah, legalitas aman, dan panorama alam terbaik sudah terangkum dalam satu nilai investasi pasti.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MAIN SINGLE PRICE CARD GRID (ANIMATED)                    */}
        {/* ========================================================= */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#543420]/10 rounded-[2.5rem] overflow-hidden bg-white transition-all duration-1000 delay-200 ease-out",
          isVisible ? "opacity-100 scale-100 shadow-[0_30px_70px_rgba(84,52,32,0.08)]" : "opacity-0 scale-[0.98] shadow-none"
        )}>
          
          {/* LEFT PANEL: THE VALUE & CORE SPECS (7 Columns) */}
          <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-8">
            
            {/* Core Specs & View Headline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Unit Type</span>
                <h3 className="font-bold text-xl md:text-2xl text-[#543420] tracking-tight">
                  The Osborn Signature Presidential Estate
                </h3>
              </div>

              {/* Special Mountain View Accent Banner */}
              <div className="bg-[#E2D8CC]/20 border border-[#543420]/5 p-4.5 rounded-2xl flex items-start gap-3.5">
                <div className="p-2.5 bg-white text-[#543420] rounded-xl shadow-sm shrink-0">
                  <Mountain size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#543420]">Golden Sunrise Mountain View Included</h4>
                  <p className="text-zinc-500 font-light text-[11px] leading-relaxed">
                    Setiap fajar menyingsing, Anda disajikan lanskap murni barisan pegunungan dan kabut lembah tropis eksotis langsung dari balik jendela kaca kamar tidur utama.
                  </p>
                </div>
              </div>

              {/* Core Features Mini List */}
              <div className="space-y-4 pt-2">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block border-b border-zinc-100 pb-1.5">
                  Kelengkapan Denah Unit
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {villaFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-zinc-700 text-xs font-medium">
                      <div className="w-6 h-6 rounded-lg bg-[#E2D8CC]/40 text-[#543420] flex items-center justify-center shrink-0">
                        {feat.icon}
                      </div>
                      <span className="text-zinc-600 font-light tracking-wide">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal Guarantee Subtext */}
            <div className="pt-6 border-t border-zinc-100 flex items-center gap-2.5 text-zinc-400 text-[11px] font-light">
              <ShieldCheck size={14} className="text-[#543420] shrink-0" />
              <span>Ikatan serah terima unit tepat waktu dijamin dengan jaminan penalti tertulis secara hukum.</span>
            </div>

          </div>

          {/* RIGHT PANEL: PRICE TAG & BONUS PACK (5 Columns) */}
          <div className="lg:col-span-5 bg-[#543420] text-white p-6 md:p-10 lg:p-12 flex flex-col justify-between relative">
            {/* Background Texture Ornament inside dark panel */}
            <div className="absolute inset-0 bg-[radial-gradient(#E2D8CC_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />

            {/* Price Presentation */}
            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#E2D8CC]/60 block">
                  Investment Value
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-3xl md:text-4xl text-[#E2D8CC] tracking-tight">
                    IDR 4.850.000.000
                  </span>
                </div>
                <span className="text-[10px] text-zinc-300/80 font-light tracking-wide block pt-1">
                  *Nett Price — Sudah Termasuk Seluruh Pajak Pembelian (PBP/PPH)
                </span>
              </div>

              {/* Exclusive Bonuses List Container */}
              <div className="space-y-4 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#E2D8CC]">
                  <Gift size={14} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Bonus Pembelian Bulan Ini</span>
                </div>
                
                <div className="space-y-3">
                  {exclusiveBonuses.map((bonus, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 size={14} className="text-[#E2D8CC] shrink-0 mt-0.5" />
                      <span className="text-zinc-200 font-light leading-snug">{bonus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Action CTA Button */}
            <div className="pt-8 relative z-10">
              <a
                href="https://wa.me/6281234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#E2D8CC] hover:bg-white text-[#543420] font-bold text-xs py-4 rounded-xl transition-all shadow-xl hover:scale-[1.02] active:scale-95 w-full text-center"
              >
                <span>Ajukan LOI & Booking Unit</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <span className="text-[9px] text-center block text-[#E2D8CC]/50 mt-3 font-light tracking-wide">
                *Hanya tersedia 1 unit untuk plot view pegunungan terbaik ini.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}