"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Quote, Sparkles, Building2, ShieldCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "Keputusan terbaik investasi di tahun ini. Udara Kota Batu sangat sejuk, kualitas bangunan dari The Osborn benar-benar presisi menggunakan marmer premium, dan sistem hands-off management-nya berjalan sangat transparan.",
      author: "Hendra Wijaya",
      title: "Property Investor & Entrepreneur",
      origin: "Surabaya",
      avatar: "/psn1.jfif",
      highlightIcon: <TrendingUp size={12} />
    },
    {
      quote: "Awalnya mencari vila untuk peristirahatan pribadi, tapi melihat proyeksi yield dan okupansi pasarnya yang tinggi, ini jadi portofolio pasif yang luar biasa menguntungkan.",
      author: "Dr. Amalia Citra",
      title: "Spesialis Jantung",
      origin: "Jakarta Pusat",
      avatar: "/dokter.jfif",
      highlightIcon: <Building2 size={12} />
    },
    {
      quote: "Legalitas SHM-nya clear dan proses transaksinya dibantu dengan sangat profesional oleh tim legal The Osborn. Sangat aman untuk investasi jangka panjang.",
      author: "Robert Janssen",
      title: "Expatriate & Tech Consultant",
      origin: "Bali / Netherlands",
      avatar: "/psn2.jfif",
      highlightIcon: <ShieldCheck size={12} />
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="bg-[#FAFAF8] py-14 md:py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden"
    >
      {/* Decorative Top Shadow Blend */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E67E22]/20 to-transparent" />
      {/* Background Subtle Glow Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F39C12]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[1360px]">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER                                   */}
        {/* ========================================================= */}
        <div className={cn(
          "mb-16 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#E67E22]/20 px-3.5 py-1.5 rounded-full">
            <Sparkles size={12} className="text-[#E67E22]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#D35400]">
              TESTIMONIAL
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3">
            Apa Kata Mereka {" "}
            <span className="font-semibold italic text-[#E67E22]">Tentang The Osborn</span>
          </h2>
       
          <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            Bergabunglah dengan puluhan investor cerdas yang telah mengamankan unit eksklusif mereka di lokasi paling strategis Kota Batu.
          </p>
        </div>

        {/* ========================================================= */}
        {/* TESTIMONIAL EDITORIAL GRID                                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              style={{ transitionDelay: isVisible ? `${idx * 150}ms` : "0ms" }}
              className={cn(
                "bg-white border border-zinc-200/60 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between relative group text-left transition-all duration-1000 ease-out",
                /* AKUBAH: Shadow dan warna border berubah ke rona terakota tipis saat di-hover */
                isVisible 
                  ? "opacity-100 translate-y-0 shadow-[0_15px_40px_rgba(84,52,32,0.01)] hover:shadow-[0_25px_50px_rgba(230,126,34,0.08)] hover:-translate-y-1 hover:border-[#E67E22]/25" 
                  : "opacity-0 translate-y-12 shadow-none"
              )}
            >
              {/* Decorative Floating Quote Icon */}
              {/* AKUBAH: Ubah warna hover ikon tanda petik melayang menjadi terakota muda */}
              <div className="absolute top-6 right-6 text-[#E2D8CC]/30 group-hover:text-[#E67E22]/10 transition-colors duration-300 pointer-events-none">
                <Quote size={32} className="fill-current" />
              </div>

              <div className="space-y-5 relative z-10">
                {/* Five Stars Rating */}
                {/* AKUBAH: Mengubah sistem rating lima bintang ke warna emas hangat amber (#F39C12) */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-[#F39C12] text-[#F39C12]" />
                  ))}
                </div>

                {/* Main Quote Content */}
                <p className="text-zinc-600 font-light text-xs md:text-sm leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Profile Block */}
              <div className="pt-5 mt-6 border-t border-zinc-100 flex items-center gap-3.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-100 shrink-0 border border-[#E2D8CC]/60 shadow-sm">
                  <Image 
                    src={item.avatar} 
                    alt={item.author} 
                    fill 
                    sizes="40px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 justify-between">
                    <h4 className="text-xs font-bold text-[#543420] truncate">
                      {item.author}
                    </h4>
                    {/* AKUBAH: Mengubah warna boks lingkaran ikon sorotan kecil dari krem menjadi amber-terracotta */}
                    <div className="w-5 h-5 rounded-full bg-[#F39C12]/10 text-[#E67E22] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#E67E22] group-hover:text-white transition-all duration-300">
                      {item.highlightIcon}
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-zinc-400 font-medium truncate leading-none">
                    {item.title}
                  </p>
                  
                  <div className="pt-0.5">
                    <span className="text-[8px] md:text-[9px] bg-zinc-100 text-zinc-500 font-mono px-2 py-0.5 rounded font-medium tracking-wide inline-block">
                      {item.origin}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM SOCIAL PROOF METRIC                                */}
        {/* ========================================================= */}
        {/* AKUBAH: Menambahkan border penunjuk kiri tebal berwarna terakota agar seirama */}
        <div className={cn(
          "mt-12 p-6 bg-[#543420] border-l-4 border-l-[#E67E22] text-white rounded-[2rem] text-center max-w-2xl mx-auto relative overflow-hidden transition-all duration-1000 delay-500 ease-out",
          isVisible ? "opacity-100 scale-100 shadow-xl shadow-[rgba(84,52,32,0.15)]" : "opacity-0 scale-95 shadow-none"
        )}>
          <div className="absolute inset-0 bg-[radial-gradient(#E2D8CC_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />
          <p className="text-xs md:text-sm font-light text-zinc-200 relative z-10 leading-relaxed px-2">
            ⚡ <strong className="text-[#F39C12] font-semibold">Plot Tahap 1 Tersisa 3 Unit Lagi.</strong> Jadilah bagian dari komunitas eksklusif pemilik vila mewah di The Osborn Living.
          </p>
        </div>

        {/* Active Frame Boundary Accent to close layout harmoniously */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E67E22]/10 to-transparent" />
      </div>
    </section>
  );
}