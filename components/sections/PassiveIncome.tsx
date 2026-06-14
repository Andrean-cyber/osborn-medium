"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  TrendingUp, Landmark, ShieldCheck, 
  DollarSign, ArrowUpRight, BarChart3, HelpCircle 
} from "lucide-react";

export default function PassiveIncome() {
  const [animateChart, setAnimateChart] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animasi grafik saat section masuk ke layar browser
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimateChart(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const investmentMetrics = [
    {
      icon: <TrendingUp size={18} />,
      title: "Estimasi ROI Tahunan",
      value: "11.4% - 14.2%",
      desc: "Jauh mengungguli rata-rata instrumen investasi konvensional atau deposito bank."
    },
    {
      icon: <DollarSign size={18} />,
      title: "Proyeksi Occupancy Rate",
      value: "78% - 85%",
      desc: "Didukung oleh lokasi premium terkurasi dengan traksi kunjungan wisatawan tinggi."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "100% Hands-off Management",
      value: "Fully Managed",
      desc: "Pemeliharaan, operasional harian, dan pemasaran dikelola penuh oleh eksklusif operator."
    }
  ];

  const chartData = [
    { year: "Tahun 1", height: "45%", income: "IDR 420M", yield: "11.2%" },
    { year: "Tahun 2", height: "58%", income: "IDR 485M", yield: "12.4%" },
    { year: "Tahun 3", height: "72%", income: "IDR 550M", yield: "13.1%" },
    { year: "Tahun 4", height: "85%", income: "IDR 610M", yield: "13.9%" },
    { year: "Tahun 5", height: "100%", income: "IDR 690M", yield: "14.5%" },
  ];

  return (
    <section 
      ref={sectionRef}
      className={cn('bg-[#FAFAFA]', 'py-20', 'px-4', 'md:px-8', 'lg:px-16', 'w-full', 'overflow-hidden')}
    >
      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]', 'grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'lg:gap-8', 'items-center')}>
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: FINANCIAL VALUE PROPOSITION                  */}
        {/* ========================================================= */}
        <div className={cn('lg:col-span-6', 'space-y-6', 'md:space-y-8')}>
          <div className="space-y-3">
            <span className={cn('text-[11px]', 'font-extrabold', 'tracking-[0.2em]', 'text-[#543420]', 'uppercase', 'block')}>
              High-Yield Real Estate
            </span>
            <h2 className={cn('font-serif', 'font-light', 'text-3xl', 'md:text-5xl', 'text-[#543420]', 'tracking-tight', 'leading-tight')}>
              Biarkan Properti Anda <br />
              <span className={cn('font-semibold', 'italic')}>Bekerja untuk Anda</span>
            </h2>
            <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'md:text-sm', 'max-w-xl', 'leading-relaxed', 'pt-1')}>
              Memiliki unit di **The Osborn Living** bukan sekadar membeli tempat berlibur, melainkan membangun mesin pencetak *passive income* yang aman, tersertifikasi, dan terus bertumbuh seiring waktu.
            </p>
          </div>

          {/* Metrics List */}
          <div className="space-y-4">
            {investmentMetrics.map((metric, idx) => (
              <div 
                key={idx}
                className={cn('flex', 'items-start', 'gap-4', 'p-5', 'bg-white', 'border', 'border-zinc-100', 'rounded-2xl', 'shadow-[0_4px_20px_rgba(84,52,32,0.02)]')}
              >
                <div className={cn('p-2.5', 'bg-[#E2D8CC]/30', 'text-[#543420]', 'rounded-xl', 'shrink-0')}>
                  {metric.icon}
                </div>
                <div className="space-y-1">
                  <div className={cn('flex', 'flex-col', 'sm:flex-row', 'sm:items-center', 'gap-1', 'sm:gap-3')}>
                    <h4 className={cn('text-xs', 'text-zinc-400', 'uppercase', 'tracking-wider', 'font-medium')}>
                      {metric.title}
                    </h4>
                    <span className={cn('text-xs', 'font-bold', 'text-[#543420]', 'sm:border-l', 'sm:border-zinc-200', 'sm:pl-3')}>
                      {metric.value}
                    </span>
                  </div>
                  <p className={cn('text-zinc-500', 'font-light', 'text-xs', 'leading-relaxed')}>
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: ANNOTATED LIVE GRAPH PANEL                  */}
        {/* ========================================================= */}
        <div className="lg:col-span-6">
          <div className={cn('bg-white', 'border', 'border-zinc-200/60', 'rounded-[2.5rem]', 'p-6', 'md:p-8', 'shadow-[0_20px_50px_rgba(84,52,32,0.04)]', 'space-y-6', 'relative')}>
            
            {/* Widget Top Bar Header */}
            <div className={cn('flex', 'justify-between', 'items-center', 'border-b', 'border-zinc-100', 'pb-4')}>
              <div className={cn('flex', 'items-center', 'gap-3')}>
                <div className={cn('w-8', 'h-8', 'rounded-lg', 'bg-[#543420]', 'text-[#E2D8CC]', 'flex', 'items-center', 'justify-center')}>
                  <BarChart3 size={16} />
                </div>
                <div>
                  <h3 className={cn('text-xs', 'md:text-sm', 'font-bold', 'text-[#543420]', 'tracking-wide')}>
                    Proyeksi Pendapatan Sewa Bersih
                  </h3>
                  <span className={cn('text-[10px]', 'text-zinc-400', 'block', 'font-light')}>
                    Kalkulasi berdasarkan tren apresiasi pasar properti 2026
                  </span>
                </div>
              </div>
              <span className={cn('text-[10px]', 'bg-[#E2D8CC]/40', 'border', 'border-[#543420]/10', 'text-[#543420]', 'font-bold', 'px-2.5', 'py-1', 'rounded-md')}>
                5-Year Forecast
              </span>
            </div>

            {/* Main Graph Area Container */}
            <div className={cn('h-[240px]', 'md:h-[280px]', 'w-full', 'flex', 'items-end', 'justify-between', 'gap-2', 'sm:gap-4', 'pt-4', 'px-2', 'relative', 'border-b', 'border-zinc-200')}>
              
              {/* Y-Axis Guidelines (Background) */}
              <div className={cn('absolute', 'inset-x-0', 'top-0', 'h-full', 'flex', 'flex-col', 'justify-between', 'pointer-events-none', 'opacity-40', 'text-[9px]', 'text-zinc-300', 'font-mono')}>
                <div className={cn('border-b', 'border-dashed', 'border-zinc-200', 'w-full', 'pb-0.5', 'text-right')}>IDR 700M</div>
                <div className={cn('border-b', 'border-dashed', 'border-zinc-200', 'w-full', 'pb-0.5', 'text-right')}>IDR 525M</div>
                <div className={cn('border-b', 'border-dashed', 'border-zinc-200', 'w-full', 'pb-0.5', 'text-right')}>IDR 350M</div>
                <div className={cn('border-b', 'border-dashed', 'border-zinc-200', 'w-full', 'pb-0.5', 'text-right')}>IDR 175M</div>
              </div>

              {/* Animated Bars Map */}
              {chartData.map((data, idx) => (
                <div key={idx} className={cn('flex-1', 'flex', 'flex-col', 'items-center', 'gap-2', 'group', 'z-10', 'relative', 'h-full', 'justify-end')}>
                  
                  {/* Floating Micro Tooltip on Hover */}
                  <div className={cn('absolute', '-top-6', 'bg-[#543420]', 'text-white', 'font-mono', 'font-bold', 'text-[9px]', 'px-2', 'py-0.5', 'rounded', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'pointer-events-none', 'shadow-sm')}>
                    {data.yield} Yield
                  </div>

                  {/* The Actual Bar Graphic */}
                  <div 
                    className={cn('w-full', 'bg-[#E2D8CC]/40', 'hover:bg-[#543420]', 'rounded-t-xl', 'transition-all', 'duration-[1200ms]', 'ease-out', 'shadow-sm', 'group-hover:shadow-md', 'flex', 'flex-col', 'justify-between', 'p-1.5', 'md:p-2', 'overflow-hidden')}
                    style={{ 
                      height: animateChart ? data.height : "0%",
                      transitionDelay: `${idx * 150}ms` 
                    }}
                  >
                    {/* Inner Text Micro Metric */}
                    <span className={cn('text-[8px]', 'md:text-[10px]', 'font-bold', 'text-[#543420]', 'group-hover:text-[#E2D8CC]', 'text-center', 'block', 'tracking-tight', 'truncate', 'transition-colors')}>
                      {data.income}
                    </span>
                  </div>

                  {/* X-Axis Label */}
                  <span className={cn('text-[10px]', 'text-zinc-400', 'font-medium', 'whitespace-nowrap', 'mt-1')}>
                    {data.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Graph Footer Caption Info */}
            <div className={cn('flex', 'items-start', 'gap-2', 'bg-[#E2D8CC]/10', 'p-4', 'rounded-2xl', 'border', 'border-[#543420]/5')}>
              <HelpCircle size={14} className={cn('text-[#543420]', 'shrink-0', 'mt-0.5')} />
              <p className={cn('text-[10px]', 'md:text-[11px]', 'text-[#543420]/80', 'font-light', 'leading-relaxed')}>
                *Angka di atas merupakan pemodelan finansial moderat mengacu pada performa pasar hospitality lokal. Kenaikan nilai aset pokok properti (*capital gain*) belum termasuk di dalam grafik.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}