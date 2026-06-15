"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, HelpCircle, Sparkles, MessageSquare, Star } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqItems = [
    {
      question: "Apakah ada promo yang tersedia?",
      answer: "Ya, saat ini kami memiliki promo spesial awal tahun. Anda bisa mendapatkan potongan harga khusus dan bonus furnitur untuk unit tertentu. Hubungi marketing kami untuk detail lengkapnya."
    },
    {
      question: "Lokasinya dimana?",
      answer: "The Osborn Living berlokasi strategis di Pandanrejo, Bumiaji, Kota Batu, Jawa Timur. Lokasi ini sangat dekat dengan alun-alun Kota Batu (5 menit) dan berbagai destinasi wisata utama."
    },
    {
      question: "Dimana aku bisa mendapatkan pricelistnya?",
      answer: "Pricelist lengkap dan simulasi cicilan bisa Anda dapatkan dengan mudah melalui WhatsApp. Klik tombol 'Hubungi Kami' di bawah untuk terhubung langsung dengan tim sales."
    },
    {
      question: "Berapa kamar tidur yang tersedia?",
      answer: "Jumlah kamar tidur Type Medium memiliki 3."
    },
    {
      question: "Bagaimana sistem pengelolaan pasif jika saya tinggal di luar kota?",
      answer: "Kami menyediakan sistem '100% Hands-off Management'. Operasional harian, perawatan fasilitas, kolam renang, hingga strategi pemasaran digital untuk penyewaan villa akan dikelola penuh oleh Villa Operator Eksklusif kami. Anda tinggal memantau laporan pendapatan bulanan secara transparan via aplikasi investor."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="bg-[#FAFAF8] py-14 md:py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[840px]">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER                                   */}
        {/* ========================================================= */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* AKUBAH: Penyesuaian warna boks info badge atas */}
          <div className="inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#E67E22]/20 px-3.5 py-1.5 rounded-full">
            <HelpCircle size={12} className="text-[#E67E22]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#D35400]">
              Information Hub
            </span>
          </div>
          
          {/* AKUBAH: Sentuhan rona miring terracotta pada judul */}
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3 font-sans">
            FAQ <br />
            <span className="font-semibold italic text-[#E67E22]">Pertanyaan yang Sering Diajukan</span>
          </h2>

          
          
          <p className="text-zinc-400 font-light text-sm max-w-md mx-auto mt-5 leading-relaxed">
            Temukan jawaban komprehensif mengenai legalitas, skema investasi pasif, dan mekanisme kepemilikan unit premium kami.
          </p>
        </div>

        {/* ========================================================= */}
        {/* ACCORDION WRAPPER CONTAINER                               */}
        {/* ========================================================= */}
        <div className={cn(
          "space-y-4 transition-all duration-1000 delay-200 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={cn(
                  "border rounded-2xl transition-all duration-300 overflow-hidden bg-[#FAFAFA]",
                  /* AKUBAH: Border boks aktif berotasi ke warna terracotta hangat dengan pendar halus */
                  isOpen 
                    ? "border-[#E67E22] shadow-[0_15px_35px_rgba(230,126,34,0.05)] bg-white" 
                    : "border-zinc-200/60 hover:border-zinc-300"
                )}
              >
                {/* Accordion Trigger Header Bar */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 select-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-sm md:text-base font-semibold tracking-wide transition-colors duration-200 font-sans",
                    /* AKUBAH: Warna judul pertanyaan saat aktif terbuka */
                    isOpen ? "text-[#E67E22]" : "text-zinc-700 group-hover:text-zinc-900"
                  )}>
                    {item.question}
                  </span>
                  
                  {/* AKUBAH: Bulatan tombol panah chevron bertransisi warna ke terracotta blok */}
                  <div className={cn(
                    "w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-[#543420] transition-all duration-300 shadow-sm",
                    isOpen && "rotate-180 border-[#E67E22]/20 bg-[#E67E22] text-white"
                  )}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Smooth Expandable Content Panel */}
                <div className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 md:px-6 text-zinc-500 font-light text-xs md:text-sm leading-relaxed border-t border-zinc-100/50 pt-4 font-sans">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* FOOTNOTE ASSISTANCE                                       */}
        {/* ========================================================= */}
        <div className={cn(
          "mt-12 text-center p-5 md:p-6 border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50 transition-all duration-1000 delay-300 ease-out",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
              {/* AKUBAH: Mengubah warna ikon balon chat kecil */}
              <MessageSquare size={14} className="text-[#E67E22] shrink-0" />
              <span>Punya pertanyaan spesifik lainnya yang belum terangkum?</span>
            </div>
            {/* AKUBAH: Mengubah warna teks interaktif tautan konsultasi khusus */}
            <a 
              href="https://wa.me/6281234567890?text=Halo%20The%20Osborn%20Living,%20ada%20hal%20mengenai%20promo%20dan%20pricelist%20yang%20ingin%20saya%20tanyakan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#543420] hover:text-[#E67E22] underline tracking-widest uppercase transition-colors font-sans"
            >
              Hubungi Investment Officer
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}