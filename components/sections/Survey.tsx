"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar, Users, MapPin, ArrowLeft, ArrowRight, Sparkles, Star } from "lucide-react";

export default function SurveyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const surveyGalleries = [
    {
      title: "Family Private Gathering Tour",
      date: "Juni 2026",
      visitor: "Keluarga Bp. Hendra (Surabaya)",
      desc: "Menikmati teh hangat di area balkoni lantai 2 sembari merasakan langsung sejuknya kabut sore Kota Batu.",
      image: "/unit.jpg",
    },
    {
      title: "Investor Executive Briefing",
      date: "Mei 2026",
      visitor: "Ibu Citra & Rekan (Jakarta Pusat)",
      desc: "Pengecekan langsung ketebalan marmer lantai dan kekuatan fondasi mikro bangunan bersama tim kontraktor.",
      image: "/unit.jpg",
    },
    {
      title: "Weekend Site Inspection",
      date: "Mei 2026",
      visitor: "Dr. Aditya (Malang)",
      desc: "Melihat langsung 180° unobstructed view pegunungan yang mengitari seluruh kavling The Osborn Living.",
      image: "/unit.jpg",
    },
    {
      title: "VIP Booking Deal Survey",
      date: "April 2026",
      visitor: "Bp. Ronald & Istri (Sidoarjo)",
      desc: "Peninjauan akhir layout carport dan infinity pool sebelum penandatanganan Letter of Intent (LOI).",
      image: "/unit.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % surveyGalleries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + surveyGalleries.length) % surveyGalleries.length);
  };

  // Efek geser carousel otomatis tiap 5 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer untuk memicu animasi scroll
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

  return (
    <section 
      id="survey-showcase" 
      ref={sectionRef}
      className="bg-[#FFFFFF] py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden relative"
    >
      <div className="mx-auto w-full max-w-[1360px]">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER (Symmetric Layout)                */}
        {/* ========================================================= */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 bg-[#E2D8CC]/40 border border-[#543420]/10 px-3.5 py-1.5 rounded-full">
            <Sparkles size={12} className="text-[#543420]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#543420]">
              Live Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3">
            Segera Survei Lokasi <br />
            <span className="font-semibold italic">Seperti Mereka</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-12 bg-[#543420]/20 block" />
            <Star size={10} className="text-[#543420]/40 fill-[#543420]/20" />
            <span className="h-px w-12 bg-[#543420]/20 block" />
          </div>
          <p className="text-[#543420] font-medium text-sm md:text-base max-w-xl mx-auto mt-5 italic leading-relaxed">
            “Jangan lewatkan kesempatan melihat langsung kualitas bangunan premium dan merasakan kesegaran udara sejuk alami Kota Batu.”
          </p>
        </div>

        {/* ========================================================= */}
        {/* CAROUSEL TRACK VIEWPORT (ANIMATED)                        */}
        {/* ========================================================= */}
        <div className={cn(
          "relative w-full transition-all duration-1000 delay-200 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {surveyGalleries.map((gallery, index) => (
                <div 
                  key={index}
                  className="w-full shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Side A: Big Styled Image Box */}
                  <div className="lg:col-span-7 relative h-[240px] sm:h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md border-4 border-white">
                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Subtle Elegant Shadow Shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Micro Location Tag in Image */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 border border-zinc-100 shadow-sm">
                      <MapPin size={12} className="text-[#543420]" />
                      <span className="text-[10px] font-bold text-zinc-800 tracking-wide">Kawasan Oro-Oro Ombo, Batu</span>
                    </div>
                  </div>

                  {/* Side B: Data & Editorial Description */}
                  <div className="lg:col-span-5 space-y-5 md:space-y-6 px-1 text-left">
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center gap-3 text-zinc-400 text-[10px] md:text-[11px] font-medium tracking-wider uppercase">
                        <span className="flex items-center gap-1 bg-zinc-100 text-zinc-500 px-2.5 py-1 rounded-md">
                          <Calendar size={12} className="text-zinc-400" />
                          {gallery.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#E2D8CC] hidden sm:inline-block" />
                        <span className="flex items-center gap-1 bg-[#E2D8CC]/30 text-[#543420] font-bold px-2.5 py-1 rounded-md">
                          <Users size={12} />
                          {gallery.visitor}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-xl md:text-2xl text-[#543420] tracking-tight leading-tight">
                        {gallery.title}
                      </h3>
                    </div>

                    <p className="text-zinc-500 font-light text-xs md:text-sm leading-relaxed border-l-2 border-[#E2D8CC] pl-4 py-0.5">
                      {gallery.desc}
                    </p>

                    <div className="pt-4 border-t border-zinc-100">
                      <a
                        href="https://wa.me/6281234567890?text=Halo%20The%20Osborn%20Living,%20saya%20ingin%20jadwalkan%20survei%20lokasi%20ke%20Batu"
                        target="_blank"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-sans font-bold text-[10px] md:text-[11px] text-[#543420] tracking-widest uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#543420] hover:text-[#432918]"
                      >
                        <span>Reservasi Jadwal Survei Anda</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM METRIC: TIMELINE PROGRESS BAR & NAVIGATION         */}
        {/* ========================================================= */}
        <div className={cn(
          "mt-10 flex items-center justify-between gap-6 border-t border-zinc-100 pt-6 transition-all duration-1000 delay-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {/* Progress Indicators Line */}
          <div className="flex items-center gap-2">
            {surveyGalleries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  currentIndex === index ? "w-12 bg-[#543420]" : "w-4 bg-[#E2D8CC]"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Universal Control Arrows (Visible on Desktop and Mobile smoothly) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-11 md:h-11 rounded-xl border border-[#543420]/20 text-[#543420] hover:bg-[#543420] hover:text-white flex items-center justify-center transition-all active:scale-95"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#543420] text-white hover:bg-[#432918] flex items-center justify-center transition-all active:scale-95 shadow-md shadow-[#543420]/10"
              aria-label="Next Slide"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}