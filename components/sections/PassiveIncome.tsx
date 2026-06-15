"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  TrendingUp, ShieldCheck,
  DollarSign, BarChart3, HelpCircle, Sparkles
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
      title: "Potensi Pendapatan / Tahun",
      value: "Rp. 267.600.000",
      desc: "Proyeksi hasil kelola sewa bersih tahunan yang dihitung secara transparan dan moderat.",
    },
    {
      icon: <DollarSign size={16} />,
      title: "Potential Income / Month",
      value: "Rp. 22.300.000",
      desc: "Rata-rata pendapatan pasif bulanan yang masuk langsung ke rekening instrumen investasi Anda.",
    },
    {
      icon: <ShieldCheck size={16} />,
      title: "Spesifikasi Type Medium",
      value: "LB: 80 m² | LT: 96 m²",
      desc: "Bangunan modern tropis 2 lantai dengan layout optimal yang dilengkapi dengan 3 Kamar Tidur (3 Room).",
    },
  ];

  const chartData = [
    { period: "Weekdays", height: "45%", income: "10.0M", rate: "Rp 1.000.000 x 10 Hari" },
    { period: "Weekend", height: "48%", income: "10.5M", rate: "Rp 1.750.000 x 6 Hari" },
    { period: "Minggu", height: "15%", income: "1.8M", rate: "Rp 900.000 x 2 Hari" },
    { period: "Total / Bln", height: "100%", income: "22.3M", rate: "Potensi Akumulasi" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAF8] py-14 md:py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1360px]">

        {/* SECTION HEADER */}
        <div
          className={cn(
            "mb-10 text-center transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#E67E22]/20 px-3.5 py-1.5 rounded-full">
            <Sparkles size={12} className="text-[#E67E22]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#D35400]">
              PROFIT INVESTMENT
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3">
            Biarkan Properti Anda{" "}
            <span className="font-semibold italic text-[#E67E22]">Bekerja untuk Anda</span>
          </h2>
          
          <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            Memiliki unit <strong className="text-[#543420] font-semibold">Sultan Villa (Type Medium)</strong> di{" "}
            <span className="text-[#543420] font-medium">The Osborn Living</span> berarti membangun mesin <em>passive income</em> yang terukur, stabil, dan terproyeksi dengan jelas.
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
                  "flex items-start gap-4 p-5 bg-white border border-zinc-100 Flyout rounded-2xl",
                  "shadow-[0_2px_16px_rgba(84,52,32,0.04)] hover:shadow-[0_4px_24px_rgba(230,126,34,0.08)]",
                  "hover:border-[#E67E22]/30 transition-all duration-500 ease-out group",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                )}
              >
                <div className="p-2.5 bg-[#F39C12]/10 text-[#E67E22] rounded-xl shrink-0 group-hover:bg-[#E67E22] group-hover:text-white transition-colors duration-300">
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
                "flex items-center gap-3 p-4 bg-[#543420] border-l-4 border-[#E67E22] rounded-2xl shadow-lg",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              )}
            >
              <ShieldCheck size={18} className="text-[#E2D8CC] shrink-0" />
              <p className="text-[11px] font-medium text-[#E2D8CC] leading-relaxed tracking-wide">
                Seluruh simulasi dihitung berdasarkan skema okupansi berkala (Weekdays, Weekend, & Minggu).
              </p>
            </div>
          </div>

          {/* RIGHT: CHART PANEL */}
          <div
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            className={cn(
              "lg:col-span-7 transition-all duration-700 ease-out w-full",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="bg-white border border-zinc-100 rounded-[2rem] p-4 md:p-8 shadow-[0_8px_40px_rgba(84,52,32,0.06)] space-y-6 overflow-hidden">

              {/* Chart header */}
              <div className="flex flex-wrap justify-between items-start gap-4 border-b border-zinc-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E67E22] text-white flex items-center justify-center shrink-0">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#543420] tracking-wide">
                      Breakdown Simulasi Pendapatan Bulanan
                    </h3>
                    <span className="text-[10px] text-zinc-400 block font-light mt-0.5">
                      Berdasarkan performa akomodasi harian Sultan Villa
                    </span>
                  </div>
                </div>
                <span className="text-[10px] bg-[#F39C12]/10 border border-[#E67E22]/20 text-[#D35400] font-bold px-3 py-1.5 rounded-lg shrink-0">
                  Type Medium - 3 Room
                </span>
              </div>

              {/* AKUBAH: Ditambahkan wrapper scroll horizontal khusus layar mobile agar bar tidak gepeng/terpotong */}
              <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-200">
                <div className="relative h-[280px] md:h-[300px] w-full flex items-end gap-3 sm:gap-5 pl-14 md:pl-16 pr-2 min-w-[460px]">

                  {/* Y-axis grid lines */}
                  <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between pointer-events-none">
                    {["Rp 25.0M", "Rp 18.7M", "Rp 12.5M", "Rp 6.2M"].map((label, i) => (
                      <div key={i} className="flex items-center gap-2 w-full">
                        {/* AKUBAH: Ukuran font teks ordinat sumbu Y dikecilkan sedikit pada mobile (text-[8px] ke text-[9px]) */}
                        <span className="text-[8px] md:text-[9px] text-zinc-300 font-mono w-12 md:w-14 text-right shrink-0 pr-1 md:pr-2">
                          {label}
                        </span>
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
                        {data.rate}
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
                        <div className="absolute inset-0 bg-gradient-to-t from-[#543420] via-[#8a6048] to-[#E67E22] group-hover:to-[#D35400] transition-all duration-300" />
                        <div className="absolute top-0 inset-x-0 h-px bg-white/20" />
                        <div className="absolute top-2 inset-x-0 flex justify-center">
                          <span className="text-[9px] md:text-[10px] font-bold text-white/90 tracking-tight">
                            {data.income}
                          </span>
                        </div>
                      </div>

                      {/* X-axis label */}
                      <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">
                        {data.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 border-t border-zinc-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-t from-[#543420] to-[#E67E22]" />
                  <span className="text-[10px] text-zinc-400">Akumulasi IDR (Per Bulan)</span>
                </div>
                <div className="flex items-center gap-2">
                  <HelpCircle size={12} className="text-zinc-300" />
                  <span className="text-[10px] text-zinc-400">Hover batang chart untuk detail rate harian</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 bg-[#faf7f4] p-4 rounded-2xl border border-[#543420]/6">
                <HelpCircle size={13} className="text-[#E67E22]/70 shrink-0 mt-0.5" />
                <p className="text-[10px] md:text-[11px] text-[#543420]/60 font-light leading-relaxed">
                  *Angka di atas merupakan pemodelan finansial berbasis okupansi berkala dari brosur resmi. Kenaikan nilai investasi properti tahunan pokok (<em>capital gain</em>) belum dimasukkan ke dalam perhitungan grafik pendapatan bersih harian ini.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}