"use client";

import Image from "next/image";
import { Star, Quote, Sparkles, Building2, ShieldCheck, TrendingUp } from "lucide-react";
import { cn } from "../../lib/utils";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Keputusan terbaik investasi di tahun ini. Udara Kota Batu sangat sejuk, kualitas bangunan dari The Osborn benar-benar presisi menggunakan marmer premium, dan sistem hands-off management-nya berjalan sangat transparan.",
      author: "Hendra Wijaya",
      title: "Property Investor & Entrepreneur",
      origin: "Surabaya",
      avatar: "/images/avatar-1.jpg", // Ganti dengan foto profil asli / representatif
      highlightIcon: <TrendingUp size={14} />
    },
    {
      quote: "Awalnya mencari vila untuk peristirahatan pribadi, tapi melihat proyeksi yield dan okupansi pasarnya yang tinggi, ini jadi portofolio pasif yang luar biasa menguntungkan.",
      author: "Dr. Amalia Citra",
      title: "Spesialis Jantung",
      origin: "Jakarta Pusat",
      avatar: "/images/avatar-2.jpg",
      highlightIcon: <Building2 size={14} />
    },
    {
      quote: "Legalitas SHM-nya clear dan proses transaksinya dibantu dengan sangat profesional oleh tim legal The Osborn. Sangat aman untuk investasi jangka panjang.",
      author: "Robert Janssen",
      title: "Expatriate & Tech Consultant",
      origin: "Bali / Netherlands",
      avatar: "/images/avatar-3.jpg",
      highlightIcon: <ShieldCheck size={14} />
    }
  ];

  return (
    <section id="testimonials" className={cn('bg-[#FAFAFA]', 'py-24', 'px-4', 'md:px-8', 'lg:px-16', 'w-full', 'relative', 'overflow-hidden')}>
      {/* Decorative Top Shadow Blend */}
      <div className={cn('absolute', 'top-0', 'inset-x-0', 'h-px', 'bg-gradient-to-r', 'from-transparent', 'via-[#543420]/10', 'to-transparent')} />

      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]')}>
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className={cn('text-center', 'max-w-3xl', 'mx-auto', 'mb-16', 'space-y-4')}>
          <div className={cn('inline-flex', 'items-center', 'gap-2', 'bg-[#E2D8CC]/50', 'border', 'border-[#543420]/10', 'px-3.5', 'py-1', 'rounded-full')}>
            <Sparkles size={12} className="text-[#543420]" />
            <span className={cn('text-[10px]', 'font-extrabold', 'tracking-widest', 'uppercase', 'text-[#543420]')}>
              Investor Society
            </span>
          </div>
          
          <h2 className={cn('font-serif', 'font-light', 'text-3xl', 'md:text-5xl', 'text-[#543420]', 'tracking-tight', 'leading-tight')}>
            Apa Kata Mereka <br />
            <span className={cn('font-semibold', 'italic')}>Tentang The Osborn</span>
          </h2>
          
          <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'md:text-sm', 'max-w-xl', 'mx-auto', 'leading-relaxed')}>
            Bergabunglah dengan puluhan investor cerdas yang telah mengamankan unit eksklusif mereka di lokasi paling strategis Kota Batu.
          </p>
        </div>

        {/* ========================================================= */}
        {/* TESTIMONIAL EDITORIAL GRID                                */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6', 'items-stretch')}>
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className={cn('bg-white', 'border', 'border-zinc-200/60', 'rounded-[2rem]', 'p-6', 'md:p-8', 'flex', 'flex-col', 'justify-between', 'shadow-[0_15px_40px_rgba(84,52,32,0.02)]', 'hover:shadow-[0_20px_50px_rgba(84,52,32,0.06)]', 'hover:-translate-y-1', 'transition-all', 'duration-300', 'relative', 'group')}
            >
              {/* Decorative Floating Quote Icon */}
              <div className={cn('absolute', 'top-6', 'right-6', 'text-[#E2D8CC]/40', 'group-hover:text-[#543420]/10', 'transition-colors', 'pointer-events-none')}>
                <Quote size={32} className="fill-current" />
              </div>

              <div className="space-y-6">
                {/* Five Stars Rating */}
                <div className={cn('flex', 'items-center', 'gap-1')}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className={cn('fill-[#543420]', 'text-[#543420]')} />
                  ))}
                </div>

                {/* Main Quote Content */}
                <p className={cn('text-zinc-600', 'font-light', 'text-xs', 'md:text-sm', 'leading-relaxed', 'relative', 'z-10')}>
                  “{item.quote}”
                </p>
              </div>

              {/* Author Profile Block */}
              <div className={cn('pt-6', 'mt-6', 'border-t', 'border-zinc-100', 'flex', 'items-center', 'gap-3.5')}>
                <div className={cn('relative', 'w-10', 'h-10', 'rounded-full', 'overflow-hidden', 'bg-zinc-100', 'shrink-0', 'border', 'border-[#E2D8CC]')}>
                  <Image 
                    src={item.avatar} 
                    alt={item.author} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className={cn('space-y-0.5', 'min-w-0')}>
                  <div className={cn('flex', 'items-center', 'gap-2')}>
                    <h4 className={cn('text-xs', 'font-bold', 'text-[#543420]', 'truncate')}>
                      {item.author}
                    </h4>
                    <div className={cn('w-4', 'h-4', 'rounded-full', 'bg-[#E2D8CC]/40', 'text-[#543420]', 'flex', 'items-center', 'justify-center', 'shrink-0', 'text-[9px]')}>
                      {item.highlightIcon}
                    </div>
                  </div>
                  <p className={cn('text-[10px]', 'text-zinc-400', 'font-medium', 'truncate')}>
                    {item.title}
                  </p>
                  <span className={cn('text-[9px]', 'bg-zinc-100', 'text-zinc-500', 'font-mono', 'px-1.5', 'py-0.5', 'rounded', 'inline-block', 'mt-0.5')}>
                    {item.origin}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM SOCIAL PROOF METRIC                                */}
        {/* ========================================================= */}
        <div className={cn('mt-12', 'p-6', 'bg-[#543420]', 'text-white', 'rounded-[2rem]', 'shadow-xl', 'shadow-[#543420]/10', 'text-center', 'max-w-2xl', 'mx-auto', 'relative', 'overflow-hidden')}>
          <div className={cn('absolute', 'inset-0', 'bg-[radial-gradient(#E2D8CC_1px,transparent_1px)]', '[background-size:16px_16px]', 'opacity-[0.03]', 'pointer-events-none')} />
          <p className={cn('text-xs', 'md:text-sm', 'font-light', 'text-zinc-200', 'relative', 'z-10')}>
            ⚡ <strong className={cn('text-[#E2D8CC]', 'font-semibold')}>Plot Tahap 1 Tersisa 3 Unit Lagi.</strong> Jadilah bagian dari komunitas eksklusif pemilik vila mewah di The Osborn Living.
          </p>
        </div>

      </div>
    </section>
  );
}