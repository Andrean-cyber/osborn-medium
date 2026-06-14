"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar, Users, MapPin, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function SurveyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const surveyGalleries = [
    {
      title: "Family Private Gathering Tour",
      date: "Juni 2026",
      visitor: "Keluarga Bp. Hendra (Surabaya)",
      desc: "Menikmati teh hangat di area balkoni lantai 2 sembari merasakan langsung sejuknya kabut sore Kota Batu.",
      image: "/images/survey-1.jpg", // Ganti dengan foto dokumentasi survei asli
    },
    {
      title: "Investor Executive Briefing",
      date: "Mei 2026",
      visitor: "Ibu Citra & Rekan (Jakarta Pusat)",
      desc: "Pengecekan langsung ketebalan marmer lantai dan kekuatan fondasi mikro bangunan bersama tim kontraktor.",
      image: "/images/survey-2.jpg",
    },
    {
      title: "Weekend Site Inspection",
      date: "Mei 2026",
      visitor: "Dr. Aditya (Malang)",
      desc: "Melihat langsung 180° unobstructed view pegunungan yang mengitari seluruh kavling The Osborn Living.",
      image: "/images/survey-3.jpg",
    },
    {
      title: "VIP Booking Deal Survey",
      date: "April 2026",
      visitor: "Bp. Ronald & Istri (Sidoarjo)",
      desc: "Peninjauan akhir layout carport dan infinity pool sebelum penandatanganan Letter of Intent (LOI).",
      image: "/images/survey-4.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % surveyGalleries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + surveyGalleries.length) % surveyGalleries.length);
  };

  // Efek geser carousel otomatis (opsional, bisa dimatikan dengan menghapus useEffect ini)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="survey-showcase" className={cn('bg-[#FFFFFF]', 'py-24', 'px-4', 'md:px-8', 'lg:px-16', 'w-full', 'overflow-hidden')}>
      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]')}>
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-6', 'items-end', 'mb-16')}>
          <div className={cn('lg:col-span-8', 'space-y-4')}>
            <div className={cn('inline-flex', 'items-center', 'gap-2', 'bg-[#E2D8CC]/40', 'border', 'border-[#543420]/10', 'px-3.5', 'py-1', 'rounded-full')}>
              <Sparkles size={12} className="text-[#543420]" />
              <span className={cn('text-[10px]', 'font-extrabold', 'tracking-widest', 'uppercase', 'text-[#543420]')}>
                Live Experience
              </span>
            </div>
            
            <h2 className={cn('font-serif', 'font-light', 'text-3xl', 'md:text-5xl', 'text-[#543420]', 'tracking-tight', 'leading-tight')}>
              Segera Survei Lokasi <br />
              <span className={cn('font-semibold', 'italic')}>Seperti Mereka</span>
            </h2>
            
            <p className={cn('text-[#543420]', 'font-medium', 'text-sm', 'md:text-base', 'max-w-2xl', 'font-serif', 'italic', 'pt-1')}>
              “Jangan lewatkan kesempatan melihat langsung kualitas bangunan premium dan merasakan kesegaran udara sejuk alami Kota Batu.”
            </p>
          </div>

          {/* Luxury Custom Arrow Buttons Navigation */}
          <div className={cn('lg:col-span-4', 'flex', 'items-center', 'justify-end', 'gap-3', 'hidden', 'lg:flex')}>
            <button
              onClick={prevSlide}
              className={cn('w-12', 'h-12', 'rounded-xl', 'border', 'border-[#543420]/20', 'text-[#543420]', 'hover:bg-[#543420]', 'hover:text-white', 'flex', 'items-center', 'justify-center', 'transition-all', 'active:scale-95')}
              aria-label="Previous Slide"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className={cn('w-12', 'h-12', 'rounded-xl', 'bg-[#543420]', 'text-white', 'hover:bg-[#432918]', 'flex', 'items-center', 'justify-center', 'transition-all', 'active:scale-95', 'shadow-md', 'shadow-[#543420]/10')}
              aria-label="Next Slide"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CAROUSEL TRACK VIEWPORT                                   */}
        {/* ========================================================= */}
        <div className={cn('relative', 'w-full')}>
          <div 
            className={cn('flex', 'transition-transform', 'duration-700', 'ease-out', 'gap-6')}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {surveyGalleries.map((gallery, index) => (
              <div 
                key={index}
                className={cn('w-full', 'lg:w-[100%]', 'shrink-0', 'grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'items-center')}
              >
                {/* Side A: Big Styled Image Box */}
                <div className={cn('lg:col-span-7', 'relative', 'h-[280px]', 'md:h-[450px]', 'rounded-[2.5rem]', 'overflow-hidden', 'shadow-lg', 'border-4', 'border-white')}>
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Subtle Elegant Shadow Shading */}
                  <div className={cn('absolute', 'inset-0', 'bg-gradient-to-t', 'from-black/40', 'via-transparent', 'to-transparent')} />
                  
                  {/* Micro Location Tag in Image */}
                  <div className={cn('absolute', 'bottom-5', 'left-5', 'bg-white/90', 'backdrop-blur-md', 'px-3', 'py-1.5', 'rounded-xl', 'flex', 'items-center', 'gap-2', 'border', 'border-zinc-100')}>
                    <MapPin size={12} className="text-[#543420]" />
                    <span className={cn('text-[10px]', 'font-bold', 'text-zinc-800', 'tracking-wide')}>Kawasan Oro-Oro Ombo, Batu</span>
                  </div>
                </div>

                {/* Side B: Data & Editorial Description */}
                <div className={cn('lg:col-span-5', 'space-y-6', 'px-2')}>
                  <div className="space-y-2">
                    <div className={cn('flex', 'items-center', 'gap-4', 'text-zinc-400', 'text-[11px]', 'font-medium', 'tracking-wider', 'uppercase')}>
                      <span className={cn('flex', 'items-center', 'gap-1')}>
                        <Calendar size={12} />
                        {gallery.date}
                      </span>
                      <span className={cn('w-1.5', 'h-1.5', 'rounded-full', 'bg-[#E2D8CC]')} />
                      <span className={cn('flex', 'items-center', 'gap-1', 'text-[#543420]', 'font-semibold')}>
                        <Users size={12} />
                        {gallery.visitor}
                      </span>
                    </div>
                    
                    <h3 className={cn('font-serif', 'font-bold', 'text-xl', 'md:text-2xl', 'text-[#543420]', 'tracking-tight')}>
                      {gallery.title}
                    </h3>
                  </div>

                  <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'md:text-sm', 'leading-relaxed', 'border-l-2', 'border-[#E2D8CC]', 'pl-4')}>
                    {gallery.desc}
                  </p>

                  <div className={cn('pt-4', 'border-t', 'border-zinc-100')}>
                    <a
                      href="https://wa.me/6281234567890?text=Halo%20The%20Osborn%20Living,%20saya%20ingin%20jadwalkan%20survei%20lokasi%20ke%20Batu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn('group', 'inline-flex', 'items-center', 'gap-2', 'font-sans', 'font-bold', 'text-[11px]', 'text-[#543420]', 'tracking-widest', 'uppercase', 'relative', 'py-1', "after:content-['']", 'after:absolute', 'after:bottom-0', 'after:left-0', 'after:w-full', 'after:h-[1px]', 'after:bg-[#543420]', 'hover:text-[#432918]')}
                    >
                      <span>Reservasi Jadwal Survei Anda</span>
                      <ArrowRight size={12} className={cn('group-hover:translate-x-1', 'transition-transform')} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM METRIC: TIMELINE PROGRESS BAR                      */}
        {/* ========================================================= */}
        <div className={cn('mt-12', 'flex', 'flex-col', 'sm:flex-row', 'items-center', 'justify-between', 'gap-6', 'border-t', 'border-zinc-100', 'pt-6')}>
          {/* Progress Indicators Line */}
          <div className={cn('flex', 'items-center', 'gap-2', 'w-full', 'sm:w-auto')}>
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

          {/* Mobile Arrows Fallback */}
          <div className={cn('flex', 'items-center', 'gap-3', 'lg:hidden', 'w-full', 'sm:w-auto', 'justify-end')}>
            <button
              onClick={prevSlide}
              className={cn('w-10', 'h-10', 'rounded-lg', 'border', 'border-zinc-200', 'text-[#543420]', 'flex', 'items-center', 'justify-center')}
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={nextSlide}
              className={cn('w-10', 'h-10', 'rounded-lg', 'bg-[#543420]', 'text-white', 'flex', 'items-center', 'justify-center')}
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}