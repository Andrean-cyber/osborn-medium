"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowUpRight, CheckCircle, Volume2, Film } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VideoReview() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Ganti ID ini dengan ID video YouTube review villa asli kamu nanti
  const youtubeVideoId = "dQw4w9WgXcQ"; 

  return (
    <section id="video-review" className={cn('bg-[#FAFAFA]', 'py-20', 'px-4', 'md:px-8', 'lg:px-16', 'w-full', 'relative', 'overflow-hidden')}>
      {/* Background Ornaments */}
      <div className={cn('absolute', 'top-1/2', 'left-0', 'w-[500px]', 'h-[500px]', 'bg-[#E2D8CC]/15', 'rounded-full', 'blur-3xl', 'pointer-events-none', '-translate-y-1/2', '-z-10')} />

      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]')}>
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'lg:gap-8', 'items-center')}>
          
          {/* ========================================================= */}
          {/* LEFT SIDE: SMART VIDEO EMBED PLAYER                       */}
          {/* ========================================================= */}
          <div className={cn('lg:col-span-7', 'w-full')}>
            <div className={cn('relative', 'aspect-video', 'w-full', 'bg-zinc-900', 'rounded-[2.5rem]', 'overflow-hidden', 'shadow-[0_25px_60px_rgba(84,52,32,0.12)]', 'border-4', 'border-white', 'group')}>
              
              {!isPlaying ? (
                /* CUSTOM PREMIUM COVER PREVIEW */
                <div className={cn('absolute', 'inset-0', 'w-full', 'h-full', 'z-10')}>
                  <Image
                    src="/images/video-cover.jpg" // Ganti dengan screenshot video/foto eksterior villa terbaik
                    alt="The Osborn Living Exclusive Video Tour"
                    fill
                    className={cn('object-cover', 'transition-transform', 'duration-700', 'group-hover:scale-102')}
                    priority
                  />
                  {/* Dark Elegant Shade */}
                  <div className={cn('absolute', 'inset-0', 'bg-gradient-to-t', 'from-black/50', 'via-transparent', 'to-black/20')} />

                  {/* Micro Badges over thumbnail */}
                  <div className={cn('absolute', 'top-4', 'left-4', 'bg-white/90', 'backdrop-blur-md', 'px-3', 'py-1.5', 'rounded-xl', 'flex', 'items-center', 'gap-2', 'border', 'border-zinc-100')}>
                    <Volume2 size={12} className="text-[#543420]" />
                    <span className={cn('text-[10px]', 'font-bold', 'text-zinc-800', 'tracking-wide')}>Audio On • Walkthrough Tour</span>
                  </div>

                  {/* MAIN FLOATING PLAY BUTTON */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className={cn('absolute', 'inset-0', 'm-auto', 'w-16', 'h-16', 'md:w-20', 'md:h-20', 'bg-white/20', 'backdrop-blur-md', 'hover:bg-[#543420]', 'text-white', 'hover:text-[#E2D8CC]', 'rounded-full', 'flex', 'items-center', 'justify-center', 'transition-all', 'duration-300', 'shadow-2xl', 'border', 'border-white/40', 'scale-100', 'hover:scale-110', 'active:scale-95', 'group/btn')}
                    aria-label="Play Video Tour"
                  >
                    <Play size={24} className={cn('fill-current', 'translate-x-0.5', 'group-hover/btn:scale-110', 'transition-transform')} />
                  </button>

                  {/* Video duration badge */}
                  <span className={cn('absolute', 'bottom-4', 'right-4', 'bg-black/60', 'backdrop-blur-sm', 'px-2.5', 'py-1', 'rounded-md', 'text-white', 'font-mono', 'text-[10px]', 'font-medium', 'tracking-wider')}>
                    04:12 Mins
                  </span>
                </div>
              ) : (
                /* LIVE IFRAME YOUTUBE INJECTOR */
                <iframe
                  className={cn('w-full', 'h-full', 'absolute', 'inset-0', 'z-10')}
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="The Osborn Living Video Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: EDITORIAL SALES COPY DESCRIPTION              */}
          {/* ========================================================= */}
          <div className={cn('lg:col-span-5', 'space-y-6', 'md:space-y-8', 'text-center', 'lg:text-left')}>
            
            <div className="space-y-4">
              <div className={cn('inline-flex', 'items-center', 'gap-2', 'bg-[#E2D8CC]/40', 'border', 'border-[#543420]/10', 'px-3.5', 'py-1', 'rounded-full', 'mx-auto', 'lg:mx-0')}>
                <Film size={12} className="text-[#543420]" />
                <span className={cn('text-[10px]', 'font-extrabold', 'tracking-widest', 'uppercase', 'text-[#543420]')}>
                  Cinematic Property Tour
                </span>
              </div>
              
              <h2 className={cn('font-serif', 'font-light', 'text-3xl', 'md:text-4xl', 'text-[#543420]', 'tracking-tight', 'leading-tight')}>
                Saksikan Langsung <br />
                <span className={cn('font-semibold', 'italic')}>Kemewahan Nyatanya</span>
              </h2>
              
              <p className={cn('text-[#543420]', 'font-serif', 'font-medium', 'text-base', 'md:text-lg', 'italic', 'leading-relaxed')}>
                “Tunggu apa lagi? Segera ambil langkah nyata untuk jadi sultan villa sesungguhnya di kawasan paling prestisius.”
              </p>

              <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'md:text-sm', 'leading-relaxed')}>
                Video ini merangkum detail kemegahan arsitektur, lanskap kolam renang privat, hingga suasana senja langsung dari balkon unit **The Osborn Living**. Rasakan atmosfer kemewahan resor yang siap menjadi generator kekayaan pasif Anda.
              </p>
            </div>

            {/* Benefit Bullets Checklist */}
            <div className={cn('space-y-2.5', 'max-w-md', 'mx-auto', 'lg:mx-0')}>
              {[
                "Tur detail seluruh tata ruang (layouting) unit",
                "Ulasan kualitas material marmer & kayu jati asli",
                "Analisis proyeksi *view* alam sekitar unit",
              ].map((bullet, index) => (
                <div key={index} className={cn('flex', 'items-center', 'gap-3', 'text-zinc-700', 'text-xs', 'font-medium', 'justify-center', 'lg:justify-start')}>
                  <CheckCircle size={14} className={cn('text-[#543420]', 'shrink-0')} />
                  <span className={cn('text-zinc-600', 'font-light')}>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Direct Instant Action Button */}
            <div className="pt-2">
              <a 
                href="#consultation"
                className={cn('group', 'inline-flex', 'items-center', 'justify-center', 'gap-3', 'bg-[#543420]', 'text-white', 'font-bold', 'text-xs', 'px-8', 'py-4', 'rounded-xl', 'shadow-xl', 'shadow-[#543420]/10', 'hover:bg-[#432918]', 'transition-all', 'w-full', 'sm:w-auto', 'active:scale-95')}
              >
                <span>Amankan Unit Anda Sekarang</span>
                <ArrowUpRight size={14} className={cn('group-hover:translate-x-0.5', 'group-hover:-translate-y-0.5', 'transition-transform')} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}