"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { 
  Layers, Maximize2, BedDouble, Bath, ShieldCheck, 
  Waves, Sparkles, Sliders, ChevronRight, Hammer, Check
} from "lucide-react";

export default function UnitDetail() {
  const [activeTab, setActiveTab] = useState<"spec" | "facility" | "interior">("spec");

  const details = {
    spec: {
      title: "Spesifikasi Struktural",
      subtitle: "Fondasi kokoh dengan efisiensi ruang maksimal.",
      image: "/images/villa-spec.jpg", // Ganti dengan path foto struktur/blueprint/eksterior
      items: [
        { icon: <Maximize2 size={16} />, label: "Luas Tanah", value: "350 m²" },
        { icon: <Layers size={16} />, label: "Luas Bangunan", value: "420 m² (2 Lantai)" },
        { icon: <BedDouble size={16} />, label: "Kamar Tidur", value: "4 Master Bedrooms" },
        { icon: <Bath size={16} />, label: "Kamar Mandi", value: "4 En-suite + 1 Powder Room" },
        { icon: <ShieldCheck size={16} />, label: "Legalitas Sertifikat", value: "SHM (Freehold) & PBG Ready" },
        { icon: <Sliders size={16} />, label: "Kapasitas Listrik", value: "11,000 VA Underground Cable" },
      ]
    },
    facility: {
      title: "Fasilitas Internal Premium",
      subtitle: "Kenyamanan resor bintang lima di dalam rumah Anda.",
      image: "/images/villa-facility.jpg", // Ganti dengan path foto kolam renang/area santai
      items: [
        { icon: <Waves size={16} />, label: "Private Infinity Pool", value: "12 x 4 Meter dengan Sun Deck" },
        { icon: <Sparkles size={16} />, label: "Smart Home System", value: "Automated Lighting, AC, & Door Lock" },
        { icon: <ShieldCheck size={16} />, label: "Keamanan Kawasan", value: "24/7 Gated Community & CCTV" },
        { icon: <Layers size={16} />, label: "Dapur Gourmet", value: "Fully Equipped Kitchen & Island Table" },
        { icon: <Maximize2 size={16} />, label: "Private Carport", value: "Kapasitas 2 Mobil SUV Besar" },
        { icon: <Sliders size={16} />, label: "Wellness Space", value: "Dedicated Area untuk Yoga / Meditasi" },
      ]
    },
    interior: {
      title: "Material & Craftsmanship",
      subtitle: "Sentuhan kurasi material terbaik standar dunia.",
      image: "/images/villa-interior-detail.jpg", // Ganti dengan path foto close-up marmer/kayu jati
      items: [
        { icon: <Hammer size={16} />, label: "Lantai Utama", value: "Italian Carrara Marble Signature" },
        { icon: <Sparkles size={16} />, label: "Aksen & Dinding", value: "Solid Grade-A Premium Teak Wood" },
        { icon: <Layers size={16} />, label: "Tinggi Plafon", value: "High Ceiling 4.2 Meter (Sirkulasi Maksim)" },
        { icon: <Sliders size={16} />, label: "Sanitari Fitting", value: "Full Premium Kohler Collections" },
        { icon: <Maximize2 size={16} />, label: "Panel Jendela", value: "Double-Glazed Soundproof Glass" },
        { icon: <Hammer size={16} />, label: "Finishing Cat", value: "Eco-Friendly Weather Shield Premium" },
      ]
    }
  };

  return (
    <section id="explore" className={cn('bg-[#FFFFFF]', 'py-20', 'px-4', 'md:px-8', 'lg:px-16', 'w-full')}>
      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]')}>
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-6', 'items-end', 'mb-14')}>
          <div className={cn('lg:col-span-7', 'space-y-3')}>
            <span className={cn('text-[11px]', 'font-extrabold', 'tracking-[0.2em]', 'text-[#543420]', 'uppercase', 'block')}>
              Architectural Details
            </span>
            <h2 className={cn('font-serif', 'font-light', 'text-3xl', 'md:text-5xl', 'text-[#543420]', 'tracking-tight', 'leading-tight')}>
              Eksplorasi Keunggulan <br />
              <span className={cn('font-semibold', 'italic')}>Setiap Sudut Unit</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'md:text-sm', 'leading-relaxed')}>
              Kami tidak berkompromi dengan kualitas. Dari struktur fondasi mikro hingga detail urat marmer interior, semuanya dikerjakan oleh tim artisan terbaik untuk memastikan standar hidup paling prestisius.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE NAVIGATION TABS                               */}
        {/* ========================================================= */}
        <div className={cn('flex', 'border-b', 'border-[#543420]/10', 'mb-12', 'overflow-x-auto', 'scrollbar-none', 'gap-2', 'sm:gap-6')}>
          {[
            { id: "spec", name: "Spesifikasi Unit" },
            { id: "facility", name: "Fasilitas & Fitur" },
            { id: "interior", name: "Interior & Material" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "spec" | "facility" | "interior")}
              className={cn(
                "pb-4 px-2 font-medium text-xs md:text-sm tracking-widest uppercase border-b-2 transition-all duration-300 shrink-0 whitespace-nowrap",
                activeTab === tab.id
                  ? "border-[#543420] text-[#543420] font-bold"
                  : "border-transparent text-zinc-400 hover:text-[#543420]"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* ========================================================= */}
        {/* CONTENT DUAL PANEL (IMAGE & GRID DESCRIPTION)             */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-10', 'items-center')}>
          
          {/* Left Side: Animated Dynamic Text Grid */}
          <div className={cn('lg:col-span-7', 'space-y-6', 'order-2', 'lg:order-1')}>
            <div>
              <h3 className={cn('text-xl', 'md:text-2xl', 'font-serif', 'font-bold', 'text-[#543420]', 'tracking-tight')}>
                {details[activeTab].title}
              </h3>
              <p className={cn('text-zinc-400', 'text-xs', 'mt-1', 'font-light', 'italic')}>
                {details[activeTab].subtitle}
              </p>
            </div>

            <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4', 'pt-2')}>
              {details[activeTab].items.map((item, idx) => (
                <div 
                  key={idx}
                  className={cn('flex', 'items-center', 'gap-4', 'p-4', 'bg-[#E2D8CC]/10', 'border', 'border-[#543420]/5', 'rounded-2xl', 'transition-all', 'duration-300', 'hover:bg-[#E2D8CC]/20')}
                >
                  <div className={cn('p-2.5', 'bg-white', 'text-[#543420]', 'rounded-xl', 'shadow-sm', 'border', 'border-[#543420]/10', 'shrink-0')}>
                    {item.icon}
                  </div>
                  <div className="space-y-0.5">
                    <span className={cn('text-[10px]', 'text-zinc-400', 'font-medium', 'uppercase', 'tracking-wider', 'block')}>
                      {item.label}
                    </span>
                    <span className={cn('text-xs', 'md:text-sm', 'font-semibold', 'text-[#543420]', 'block', 'tracking-wide')}>
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Guarantee Badge */}
            <div className={cn('flex', 'items-center', 'gap-3', 'p-4', 'bg-[#543420]', 'text-white', 'rounded-2xl', 'shadow-md', 'max-w-md', 'mt-6')}>
              <div className={cn('w-5', 'h-5', 'rounded-full', 'bg-[#E2D8CC]', 'text-[#543420]', 'flex', 'items-center', 'justify-center', 'font-bold', 'text-[10px]')}>
                <Check size={12} />
              </div>
              <p className={cn('text-[11px]', 'font-medium', 'tracking-wide', 'text-[#E2D8CC]')}>
                Seluruh spesifikasi di atas terikat secara legal dalam MoU jual beli unit.
              </p>
            </div>
          </div>

          {/* Right Side: Image Display Box */}
          <div className={cn('lg:col-span-5', 'order-1', 'lg:order-2')}>
            <div className={cn('relative', 'h-[300px]', 'md:h-[450px]', 'w-full', 'rounded-[2.5rem]', 'overflow-hidden', 'shadow-[0_20px_50px_rgba(84,52,32,0.08)]', 'border-4', 'border-white', 'group')}>
              <Image
                src={details[activeTab].image}
                alt={details[activeTab].title}
                fill
                className={cn('object-cover', 'transition-transform', 'duration-700', 'ease-out', 'group-hover:scale-105')}
                priority
              />
              <div className={cn('absolute', 'inset-0', 'bg-gradient-to-t', 'from-[#543420]/40', 'via-transparent', 'to-transparent', 'opacity-60')} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}