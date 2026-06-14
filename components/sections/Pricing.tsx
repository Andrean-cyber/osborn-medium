"use client";

import { CheckCircle2, Mountain, BedDouble, Bath, Gift, Sparkles, ShieldCheck, ArrowRight, Home } from "lucide-react";
import { cn } from "../../lib/utils";

export default function Pricing() {
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
    <section id="pricing" className={cn('bg-[#FFFFFF]', 'py-24', 'px-4', 'md:px-8', 'lg:px-16', 'w-full', 'relative', 'overflow-hidden')}>
      {/* Background Subtle Gradient Blurs */}
      <div className={cn('absolute', 'top-0', 'left-1/4', 'w-[600px]', 'h-[600px]', 'bg-[#E2D8CC]/20', 'rounded-full', 'blur-3xl', 'pointer-events-none', '-z-10')} />
      
      <div className={cn('mx-auto', 'w-full', 'max-w-[1240px]')}>
        
        {/* ========================================================= */}
        {/* HEADER PENDAHULUAN                                        */}
        {/* ========================================================= */}
        <div className={cn('text-center', 'max-w-2xl', 'mx-auto', 'mb-16', 'space-y-3')}>
          <div className={cn('inline-flex', 'items-center', 'gap-2', 'bg-[#E2D8CC]/50', 'border', 'border-[#543420]/10', 'px-3.5', 'py-1', 'rounded-full')}>
            <Sparkles size={12} className="text-[#543420]" />
            <span className={cn('text-[10px]', 'font-extrabold', 'tracking-widest', 'uppercase', 'text-[#543420]')}>
              Transparent Investment
            </span>
          </div>
          <h2 className={cn('font-serif', 'font-light', 'text-3xl', 'md:text-5xl', 'text-[#543420]', 'tracking-tight', 'leading-tight')}>
            Penawaran Eksklusif <br />
            <span className={cn('font-semibold', 'italic')}>Satu Harga, All-Inclusive</span>
          </h2>
          <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'md:text-sm', 'max-w-lg', 'mx-auto', 'leading-relaxed')}>
            Tanpa biaya siluman tersembunyi. Seluruh fasilitas mewah, legalitas aman, dan panorama alam terbaik sudah terangkum dalam satu nilai investasi pasti.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MAIN SINGLE PRICE CARD GRID                               */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-0', 'border', 'border-[#543420]/10', 'rounded-[2.5rem]', 'overflow-hidden', 'shadow-[0_20px_50px_rgba(84,52,32,0.05)]', 'bg-white')}>
          
          {/* LEFT PANEL: THE VALUE & CORE SPECS (7 Columns) */}
          <div className={cn('lg:col-span-7', 'p-6', 'md:p-10', 'lg:p-12', 'space-y-8', 'flex', 'flex-col', 'justify-between')}>
            
            {/* Core Specs & View Headline */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className={cn('text-[10px]', 'font-bold', 'text-zinc-400', 'uppercase', 'tracking-widest', 'block')}>Unit Type</span>
                <h3 className={cn('font-serif', 'font-bold', 'text-xl', 'md:text-2xl', 'text-[#543420]', 'tracking-tight')}>
                  The Osborn Signature Presidential Estate
                </h3>
              </div>

              {/* Special Mountain View Accent Banner */}
              <div className={cn('bg-[#E2D8CC]/20', 'border', 'border-[#543420]/5', 'p-4', 'rounded-2xl', 'flex', 'items-start', 'gap-3.5')}>
                <div className={cn('p-2', 'bg-white', 'text-[#543420]', 'rounded-xl', 'shadow-sm', 'shrink-0')}>
                  <Mountain size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className={cn('text-xs', 'font-bold', 'text-[#543420]')}>Golden Sunrise Mountain View Included</h4>
                  <p className={cn('text-zinc-500', 'font-light', 'text-[11px]', 'leading-relaxed')}>
                    Setiap fajar menyingsing, Anda disajikan lanskap murni barisan pegunungan dan kabut lembah tropis eksotis langsung dari balik jendela kaca kamar tidur utama.
                  </p>
                </div>
              </div>

              {/* Core Features Mini List */}
              <div className={cn('space-y-3', 'pt-2')}>
                <span className={cn('text-[10px]', 'font-bold', 'text-zinc-400', 'uppercase', 'tracking-widest', 'block')}>Kelengkapan Denah Unit</span>
                <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-3')}>
                  {villaFeatures.map((feat, idx) => (
                    <div key={idx} className={cn('flex', 'items-center', 'gap-3', 'text-zinc-700', 'text-xs', 'font-medium')}>
                      <div className={cn('w-5', 'h-5', 'rounded-md', 'bg-[#E2D8CC]/40', 'text-[#543420]', 'flex', 'items-center', 'justify-center', 'shrink-0')}>
                        {feat.icon}
                      </div>
                      <span className={cn('text-zinc-600', 'font-light', 'tracking-wide')}>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal Guarantee Subtext */}
            <div className={cn('pt-6', 'border-t', 'border-zinc-100', 'flex', 'items-center', 'gap-2.5', 'text-zinc-400', 'text-[11px]', 'font-light')}>
              <ShieldCheck size={14} className="text-[#543420]" />
              <span>Ikatan serah terima unit tepat waktu dijamin dengan jaminan penalti tertulis.</span>
            </div>

          </div>

          {/* RIGHT PANEL: PRICE TAG & BONUS PACK (5 Columns) */}
          <div className={cn('lg:col-span-5', 'bg-[#543420]', 'text-white', 'p-6', 'md:p-10', 'lg:p-12', 'flex', 'flex-col', 'justify-between', 'relative')}>
            {/* Background Texture Ornament inside dark panel */}
            <div className={cn('absolute', 'inset-0', 'bg-[radial-gradient(#E2D8CC_1px,transparent_1px)]', '[background-size:20px_20px]', 'opacity-[0.02]', 'pointer-events-none')} />

            {/* Price Presentation */}
            <div className={cn('space-y-6', 'relative', 'z-10')}>
              <div className="space-y-1">
                <span className={cn('text-[10px]', 'font-bold', 'tracking-widest', 'uppercase', 'text-[#E2D8CC]/60', 'block')}>
                  Investment Value
                </span>
                <div className={cn('flex', 'items-baseline', 'gap-2')}>
                  <span className={cn('font-serif', 'font-bold', 'text-3xl', 'md:text-4xl', 'text-[#E2D8CC]')}>
                    IDR 4.850.000.000
                  </span>
                </div>
                <span className={cn('text-[10px]', 'text-zinc-300', 'font-light', 'tracking-wide', 'block', 'pt-1')}>
                  *Nett Price — Sudah Termasuk Seluruh Pajak Pembelian (PBP/PPH)
                </span>
              </div>

              {/* Exclusive Bonuses List Container */}
              <div className={cn('space-y-3', 'pt-4', 'border-t', 'border-white/10')}>
                <div className={cn('flex', 'items-center', 'gap-2', 'text-[#E2D8CC]')}>
                  <Gift size={14} />
                  <span className={cn('text-[10px]', 'font-bold', 'tracking-widest', 'uppercase')}>Bonus Pembelian Bulan Ini</span>
                </div>
                
                <div className="space-y-2.5">
                  {exclusiveBonuses.map((bonus, idx) => (
                    <div key={idx} className={cn('flex', 'items-start', 'gap-2.5', 'text-xs')}>
                      <CheckCircle2 size={14} className={cn('text-[#E2D8CC]', 'shrink-0', 'mt-0.5')} />
                      <span className={cn('text-zinc-200', 'font-light', 'leading-tight')}>{bonus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Action Call-to-action Button */}
            <div className={cn('pt-8', 'relative', 'z-10')}>
              <a
                href="https://wa.me/6281234567890" // Ganti dengan WhatsApp marketing penutup deals kamu
                target="_blank"
                rel="noopener noreferrer"
                className={cn('group', 'flex', 'items-center', 'justify-center', 'gap-3', 'bg-[#E2D8CC]', 'hover:bg-white', 'text-[#543420]', 'font-bold', 'text-xs', 'py-4', 'rounded-xl', 'transition-all', 'shadow-lg', 'active:scale-95', 'w-full', 'text-center')}
              >
                <span>Ajukan LOI & Booking Unit</span>
                <ArrowRight size={14} className={cn('group-hover:translate-x-0.5', 'transition-transform')} />
              </a>
              <span className={cn('text-[9px]', 'text-center', 'block', 'text-zinc-400', 'mt-2.5', 'font-light')}>
                *Hanya tersedia 1 unit untuk plot view pegunungan terbaik ini.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}