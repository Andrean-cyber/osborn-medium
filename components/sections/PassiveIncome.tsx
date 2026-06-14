"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  TrendingUp, ShieldCheck,
  DollarSign, BarChart3, HelpCircle, Star
} from "lucide-react";

export default function PassiveIncome() {
  const [animateChart, setAnimateChart] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateChart(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const investmentMetrics = [
    {
      icon: <TrendingUp size={16} />,
      title: "Estimasi ROI Tahunan",
      value: "11.4% – 14.2%",
      desc: "Jauh mengungguli rata-rata instrumen investasi konvensional atau deposito bank.",
    },
    {
      icon: <DollarSign size={16} />,
      title: "Proyeksi Occupancy Rate",
      value: "78% – 85%",
      desc: "Didukung lokasi premium dengan traksi kunjungan wisatawan yang konsisten tinggi.",
    },
    {
      icon: <ShieldCheck size={16} />,
      title: "100% Hands-off Management",
      value: "Fully Managed",
      desc: "Operasional harian & pemasaran dikelola penuh oleh operator eksklusif berpengalaman.",
    },
  ];

  const chartData = [
    { year: "Thn 1", height: "45%", income: "420M", yield: "11.2%" },
    { year: "Thn 2", height: "58%", income: "485M", yield: "12.4%" },
    { year: "Thn 3", height: "72%", income: "550M", yield: "13.1%" },
    { year: "Thn 4", height: "85%", income: "610M", yield: "13.9%" },
    { year: "Thn 5", height: "100%", income: "690M", yield: "14.5%" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAF8] py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1360px]">

        {/* SECTION HEADER */}
        <div
          className={cn(
            "mb-16 text-center transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-[10px] font-extrabold tracking-[0.28em] text-[#543420]/60 uppercase mb-3">
            High-Yield Real Estate
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug">
            Biarkan Properti Anda{" "}
            <span className="font-semibold italic">Bekerja untuk Anda</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-12 bg-[#543420]/20 block" />
            <Star size={10} className="text-[#543420]/40 fill-[#543420]/20" />
            <span className="h-px w-12 bg-[#543420]/20 block" />
          </div>
          <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            Memiliki unit di <strong className="text-[#543420] font-semibold">The Osborn Living</strong> berarti
            membangun mesin <em>passive income</em> yang aman, tersertifikasi, dan terus bertumbuh seiring waktu.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT: METRICS */}
          <div className="lg:col-span-5 space-y-4">
            {investmentMetrics.map((metric, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: isVisible ? `${100 + idx * 120}ms` : "0ms" }}
                className={cn(
                  "flex items-start gap-4 p-5 bg-white border border-zinc-100 rounded-2xl",
                  "shadow-[0_2px_16px_rgba(84,52,32,0.04)] hover:shadow-[0_4px_24px_rgba(84,52,32,0.08)]",
                  "hover:border-[#543420]/15 transition-all duration-500 ease-out group",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                )}
              >
                <div className="p-2.5 bg-[#E2D8CC]/40 text-[#543420] rounded-xl shrink-0 group-hover:bg-[#543420] group-hover:text-white transition-colors duration-300">
                  {metric.icon}
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium block">
                    {metric.title}
                  </span>
                  <span className="text-sm font-bold text-[#543420] block">
                    {metric.value}
                  </span>
                  <p className="text-zinc-400 font-light text-xs leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Trust strip */}
            <div
              style={{ transitionDelay: isVisible ? "480ms" : "0ms" }}
              className={cn(
                "flex items-center gap-3 p-4 bg-[#543420] rounded-2xl shadow-lg",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
            >
              <ShieldCheck size={18} className="text-[#E2D8CC] shrink-0" />
              <p className="text-[11px] font-medium text-[#E2D8CC] leading-relaxed tracking-wide">
                Seluruh proyeksi terikat dalam perjanjian investasi yang tersertifikasi secara hukum.
              </p>
            </div>
          </div>

          {/* RIGHT: CHART PANEL */}
          <div
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            className={cn(
              "lg:col-span-7 transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="bg-white border border-zinc-100 rounded-[2rem] p-6 md:p-8 shadow-[0_8px_40px_rgba(84,52,32,0.06)] space-y-6">

              {/* Chart header */}
              <div className="flex flex-wrap justify-between items-start gap-4 border-b border-zinc-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#543420] text-[#E2D8CC] flex items-center justify-center shrink-0">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#543420] tracking-wide">
                      Proyeksi Pendapatan Sewa Bersih
                    </h3>
                    <span className="text-[10px] text-zinc-400 block font-light mt-0.5">
                      Berdasarkan tren apresiasi pasar properti 2026
                    </span>
                  </div>
                </div>
                <span className="text-[10px] bg-[#E2D8CC]/40 border border-[#543420]/10 text-[#543420] font-bold px-3 py-1.5 rounded-lg shrink-0">
                  5-Year Forecast
                </span>
              </div>

              {/* Bars */}
              <div className="relative h-[260px] md:h-[300px] w-full flex items-end gap-3 sm:gap-5 pl-16 pr-1">

                {/* Y-axis grid lines */}
                <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between pointer-events-none">
                  {["IDR 700M", "IDR 525M", "IDR 350M", "IDR 175M"].map((label, i) => (
                    <div key={i} className="flex items-center gap-2 w-full">
                      <span className="text-[9px] text-zinc-300 font-mono w-16 text-right shrink-0 pr-2">{label}</span>
                      <div className="flex-1 border-t border-dashed border-zinc-100" />
                    </div>
                  ))}
                  <div className="h-0" />
                </div>

                {/* Bar columns */}
                {chartData.map((data, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center gap-2 group relative h-full justify-end z-10"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#543420] text-white text-[9px] font-bold px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap">
                      {data.yield} Yield
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#543420] rotate-45" />
                    </div>

                    {/* Bar */}
                    <div
                      className="w-full relative rounded-t-xl overflow-hidden transition-all duration-[1100ms] ease-out cursor-pointer"
                      style={{
                        height: animateChart ? data.height : "0%",
                        transitionDelay: `${idx * 120}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#543420] to-[#8a6048] group-hover:from-[#432918] group-hover:to-[#7a4f35] transition-all duration-300" />
                      <div className="absolute top-0 inset-x-0 h-px bg-white/20" />
                      <div className="absolute top-2 inset-x-0 flex justify-center">
                        <span className="text-[8px] md:text-[10px] font-bold text-white/90 tracking-tight">
                          {data.income}
                        </span>
                      </div>
                    </div>

                    {/* X-axis label */}
                    <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">
                      {data.year}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-5 pt-1 border-t border-zinc-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-t from-[#543420] to-[#8a6048]" />
                  <span className="text-[10px] text-zinc-400">Pendapatan Sewa (IDR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-[#543420]/30 border-t border-dashed border-[#543420]/30" />
                  <span className="text-[10px] text-zinc-400">Yield tahunan proyeksi</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 bg-[#faf7f4] p-4 rounded-2xl border border-[#543420]/6">
                <HelpCircle size={13} className="text-[#543420]/50 shrink-0 mt-0.5" />
                <p className="text-[10px] md:text-[11px] text-[#543420]/60 font-light leading-relaxed">
                  *Angka merupakan pemodelan finansial moderat berdasarkan performa pasar hospitality lokal.
                  Kenaikan nilai aset pokok (<em>capital gain</em>) belum termasuk dalam grafik di atas.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
