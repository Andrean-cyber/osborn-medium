"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Layers, Maximize2, BedDouble, Bath, 
  Sparkles, Building, Flower2, Car, Mountain, Wind, Sunset, TreePine, Check
} from "lucide-react";

export default function UnitDetail() {
  const [activeTab, setActiveTab] = useState<"spec" | "facility">("spec");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const bonusPoints = [
    { icon: <Mountain size={14} />, label: "View Gunung Arjuna", desc: "Panorama langsung dari rooftop & kamar utama" },
    { icon: <Wind size={14} />, label: "Udara Sejuk Pegunungan", desc: "Ketinggian ideal, suhu alami sepanjang hari" },
    { icon: <Sunset size={14} />, label: "Golden Hour Sunsets", desc: "Orientasi bangunan menghadap barat — pemandangan sunset dramatis" },
    { icon: <TreePine size={14} />, label: "Lingkungan Hijau & Asri", desc: "Dikelilingi vegetasi alami, jauh dari kebisingan kota" },
  ];

  const details = {
    spec: {
      title: "Exclusive Type Medium",
      subtitle:
        "Pilihan ruang yang lebih luas dengan fitur yang lebih lengkap. Tipe ini cocok untuk keluarga yang membutuhkan ruang lebih dan fasilitas yang lebih baik.",
      image: "/unit.jpg",
      items: [
        { icon: <Maximize2 size={15} />, label: "Luas Tanah", value: "96 m²" },
        { icon: <Layers size={15} />, label: "Luas Bangunan", value: "80 m² (2 Lantai + Rooftop)" },
        { icon: <BedDouble size={15} />, label: "Kamar Tidur", value: "3 Master Bedrooms" },
        { icon: <Bath size={15} />, label: "Kamar Mandi", value: "3 Bathrooms + Jacuzzi" },
      ],
    },
    facility: {
      title: "Fasilitas Internal Premium",
      subtitle: "Kenyamanan resor bintang lima di dalam rumah Anda, setiap hari.",
      image: "/interior.jpg",
      items: [
        { icon: <Bath size={15} />, label: "Free Jacuzzi", value: "Area Relaksasi Pribadi Premium" },
        { icon: <Building size={15} />, label: "Free Rooftop", value: "Area Terbuka dengan Pemandangan Luas" },
        { icon: <Car size={15} />, label: "Parkir Kendaraan", value: "Kapasitas 2 Mobil & 1 Motor" },
        { icon: <Flower2 size={15} />, label: "Space Exclusive", value: "Dengan taman lebih luas" },
      ],
    },
  };

  return (
    <section
      id="explore"
      className="bg-[#FAFAF8] py-14 md:py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden relative"
    >
      <div ref={sectionRef} className="mx-auto w-full max-w-[1360px]">

        {/* ── SECTION HEADER ── */}
        <div
          className={cn(
            "mb-10 text-center transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#E67E22]/20 px-3.5 py-1.5 rounded-full">
            <Sparkles size={12} className="text-[#E67E22]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#D35400]">
              SPESIFIKASI UNIT
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3">
            Eksplorasi Keunggulan{" "}
            <span className="font-semibold italic text-[#E67E22]">Setiap Sudut Unit</span>
          </h2>
        </div>

        {/* ── TABS ── */}
        {/* PERBAIKAN: Mengatur gap agar lebih rapat di mobile (gap-4 sm:gap-12) agar tidak mendorong layout keluar viewport */}
        <div
          className={cn(
            "flex justify-center border-b border-[#543420]/10 mb-12 gap-4 sm:gap-12 transition-all duration-700 delay-100 ease-out w-full",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {[
            { id: "spec", name: "Spesifikasi Unit" },
            { id: "facility", name: "Fasilitas & Fitur" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "spec" | "facility")}
              className={cn(
                "pb-4 px-1 text-xs md:text-sm tracking-widest uppercase border-b-2 transition-all duration-300 whitespace-nowrap font-medium cursor-pointer",
                activeTab === tab.id
                  ? "border-[#E67E22] text-[#E67E22] font-bold"
                  : "border-transparent text-zinc-400 hover:text-[#543420]/70"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* ── DUAL PANEL ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: Text & Items */}
          <div
            className={cn(
              "lg:col-span-7 space-y-6 order-2 lg:order-1 transition-all duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            {/* Title */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#543420] tracking-tight">
                {details[activeTab].title}
              </h3>
              <p className="text-zinc-400 text-xs mt-1.5 font-light italic leading-relaxed max-w-lg">
                {details[activeTab].subtitle}
              </p>
            </div>

            {/* Spec/Facility Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {details[activeTab].items.map((item, idx) => (
                <div
                  key={idx}
                  style={{ transitionDelay: isVisible ? `${200 + idx * 80}ms` : "0ms" }}
                  className={cn(
                    "flex items-center gap-4 p-4 bg-[#faf7f4] border border-[#543420]/8 rounded-2xl",
                    "transition-all duration-500 ease-out hover:bg-[#fcf9f5] hover:border-[#E67E22]/30 hover:shadow-sm group",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                >
                  <div className="p-2.5 bg-[#F39C12]/10 text-[#E67E22] rounded-xl shadow-sm border border-[#E67E22]/10 shrink-0 group-hover:bg-[#E67E22] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-[#543420] block tracking-wide truncate">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ── BONUS POINTS ── */}
            <div
              className={cn(
                "pt-2 transition-all duration-700 delay-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <p className="text-[10px] font-extrabold tracking-[0.2em] text-[#D35400] uppercase mb-3">
                Keistimewaan Lokasi
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {bonusPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    style={{ transitionDelay: isVisible ? `${600 + idx * 80}ms` : "0ms" }}
                    className={cn(
                      "flex items-start gap-3 p-3.5 rounded-xl border border-[#543420]/8",
                      "bg-gradient-to-br from-[#fdf9f6] to-[#f5ede4]",
                      "hover:border-[#E67E22]/30 hover:shadow-sm transition-all duration-300 group",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                  >
                    <div className="mt-0.5 p-1.5 bg-[#E67E22]/10 text-[#D35400] rounded-lg shrink-0 group-hover:bg-[#E67E22] group-hover:text-white transition-colors duration-300">
                      {pt.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold text-[#543420] block leading-tight">
                        {pt.label}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-light leading-snug block mt-0.5">
                        {pt.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal guarantee badge */}
            <div
              className={cn(
                "flex items-center gap-3 p-4 bg-[#543420] border-l-4 border-[#E67E22] text-white rounded-2xl shadow-lg max-w-md",
                "transition-all duration-700 delay-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <div className="w-6 h-6 rounded-full bg-[#E67E22] text-white flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={3} />
              </div>
              <p className="text-[11px] font-medium tracking-wide text-[#E2D8CC] leading-relaxed">
                Seluruh spesifikasi di atas terikat secara legal dalam MoU jual beli unit.
              </p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div
            className={cn(
              "lg:col-span-5 order-1 lg:order-2 transition-all duration-700 delay-300 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="relative h-[300px] md:h-[520px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_24px_60px_rgba(84,52,32,0.12)] border-4 border-white group">
              <Image
                src={details[activeTab].image}
                alt={details[activeTab].title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#543420]/50 via-[#543420]/10 to-transparent" />

              {/* Floating label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-[10px] font-extrabold tracking-widest text-[#E67E22] uppercase">
                    {activeTab === "spec" ? "Tipe Unit" : "Fasilitas"}
                  </p>
                  <p className="text-sm font-bold text-[#543420] mt-0.5">
                    {details[activeTab].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Small accent stat cards below image */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { value: "96 m²", label: "Luas Tanah" },
                { value: "80 m²", label: "Luas Bangunan" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={cn(
                    "bg-[#faf7f4] border border-[#543420]/8 rounded-2xl p-4 text-center",
                    "transition-all duration-700 ease-out hover:border-[#E67E22]/30",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  )}
                  style={{ transitionDelay: isVisible ? `${500 + i * 100}ms` : "0ms" }}
                >
                  <p className="text-xl font-bold text-[#D35400]">{stat.value}</p>
                  <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}