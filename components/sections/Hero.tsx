"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, Key, Sparkles, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = "transition-all ease-out";

  return (
    <section
      className={cn(
        "relative min-h-screen bg-[#FFFFFF] overflow-hidden",
        "pt-24 pb-16 px-4 md:px-8 lg:px-16 flex items-center"
      )}
    >
      {/* Background texture bintik halus - tetap dipertahankan karena sangat ringan */}
      <div className="absolute inset-0 bg-[radial-gradient(#543420_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.015] pointer-events-none -z-10" />

      {/* PERBAIKAN UTAMA: 
        1. Efek lingkaran blur orange (glow-radial) sudah DIHAPUS TOTAL dari sini.
        2. Menambahkan 'overflow-hidden' pada grid pembungkus utama agar animasi gambar 
           di dalam col-span-6 terpotong rapi di batas layar mobile.
      */}
      <div className="mx-auto w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 overflow-hidden lg:overflow-visible">

        {/* ── LEFT: TYPOGRAPHY & CTA ── */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left">

          {/* 1 — Badge */}
          <div
            className={cn(
              anim, "duration-700 delay-[0ms]",
              "inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#E67E22]/20 px-4 py-1.5 rounded-full",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
          >
            <Sparkles size={14} className="text-[#E67E22]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#D35400]">
              Best Investment
            </span>
          </div>

          {/* 2 — Headline */}
          <div className="space-y-3">
            <h1
              className={cn(
                anim, "duration-700 delay-[150ms]",
                "font-light text-4xl md:text-6xl text-[#543420] tracking-tight leading-[1.1]",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Designed for Life <br />
              <span className="font-bold italic text-[#E67E22]">Built for Profit.</span>
            </h1>

            {/* 3 — Body copy */}
            <p
              className={cn(
                anim, "duration-700 delay-[300ms]",
                "text-zinc-600 font-light text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Temukan villa eksklusif di{" "}
              <strong className="text-[#543420] font-semibold">The Osborn Living</strong>.
              Dirancang dengan arsitektur modern tropis untuk investasi masa depan dan kenyamanan hidup yang hakiki.
            </p>
          </div>

          {/* 4 — Stats mini-grid */}
          <div
            className={cn(
              anim, "duration-700 delay-[450ms]",
              "grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 pt-2",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {[
              { value: "96 m²", label: "Luas Tanah" },
              { value: "80 m²", label: "Luas Bangunan" },
              { value: "Strategic", label: "Location" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start border-l border-[#E67E22]/20 pl-4">
                <span className="text-xl md:text-2xl font-bold text-[#543420]">{s.value}</span>
                <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* 5 — CTA buttons */}
          <div
            className={cn(
              anim, "duration-700 delay-[600ms]",
              "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <a
              href="#explore"
              className="group flex items-center justify-center gap-3 bg-[#543420] hover:bg-[#E67E22] text-white font-bold text-xs px-8 py-4 rounded-xl shadow-xl shadow-[#543420]/10 transition-all duration-300 w-full sm:w-auto active:scale-95"
            >
              <span>Explore Collection</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://wa.me/62816500160?text=Halo%20The%20Osborn%20Living,%20saya%20tertarik%20untuk%20mendapatkan%20informasi%20lebih%20lanjut%20mengenai%20unit%20dan%20potensi%20investasinya.%20Mohon%20bantuannya."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E2D8CC]/30 border border-[#543420]/10 hover:bg-[#F39C12]/10 hover:text-[#D35400] hover:border-[#E67E22]/20 text-[#543420] font-bold text-xs px-8 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto active:scale-95"
            >
              <Compass size={14} />
              <span>Private Consultation</span>
            </a>
          </div>
        </div>

        {/* ── RIGHT: VISUAL SHOWCASE ── */}
        {/* PERBAIKAN: Memastikan wadah visual mengunci luapan horizontal di mobile */}
        <div className="lg:col-span-6 relative h-[450px] md:h-[580px] w-full mt-6 lg:mt-0 overflow-hidden lg:overflow-visible">

          {/* Decorative background block (Blok krem transparan tipis pengganti lingkaran blur) */}
          <div
            className={cn(
              anim, "duration-700 delay-[200ms]",
              "absolute right-[45%] top-[10%] w-[35%] h-[40%] bg-[#543420]/5 rounded-[1.5rem] -z-10",
              isLoaded ? "opacity-100 rotate-6 scale-100" : "opacity-0 rotate-0 scale-90"
            )}
          />

          {/* Main image */}
          <div
            className={cn(
              anim, "duration-[900ms] delay-[350ms]",
              "absolute left-0 top-0 w-[75%] h-[85%] rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(84,52,32,0.15)] z-10",
              /* Menggunakan translasi vertikal (translate-y) agar aman dari kebocoran layar kanan */
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
            )}
          >
            <Image
              src="/heroImg1.png"
              alt="The Osborn Living Main Unit"
              fill
              priority
              className={cn(
                "object-cover transition-transform duration-[2500ms] ease-out",
                isLoaded ? "scale-100" : "scale-110"
              )}
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border border-zinc-100 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
              <MapPin size={12} className="text-[#E67E22]" />
              <span className="text-[10px] font-bold text-zinc-800 tracking-wide">Temas, Batu</span>
            </div>
          </div>

          {/* Secondary image */}
          <div
            className={cn(
              anim, "duration-[900ms] delay-[550ms]",
              "absolute right-0 bottom-0 w-[55%] h-[60%] rounded-[1.5rem] overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(84,52,32,0.12)] z-20",
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
            )}
          >
            <Image
              src="/heroImg2.jpg"
              alt="The Osborn Living Interior"
              fill
              priority
              className={cn(
                "object-cover transition-transform duration-[2500ms] ease-out",
                isLoaded ? "scale-100" : "scale-110"
              )}
            />
          </div>

          {/* Floating trust badge */}
          <div
            className={cn(
              anim, "duration-700 delay-[750ms]",
              "absolute left-4 bottom-4 md:left-28 md:bottom-12 bg-[#543420] border-l-4 border-[#E67E22] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="p-2 bg-white/10 rounded-xl text-[#E67E22]">
              <Key size={16} />
            </div>
            <div className="pr-2">
              <span className="text-[9px] text-zinc-300 uppercase font-medium tracking-wider block">Exclusive</span>
              <span className="text-xs font-bold block tracking-wide text-[#E2D8CC]">Free Jacuzzi</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}