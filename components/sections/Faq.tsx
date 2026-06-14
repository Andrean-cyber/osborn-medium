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
      question: "Bagaimana status legalitas sertifikat unit The Osborn Living?",
      answer: "Seluruh unit di The Osborn Living sudah memiliki legalitas yang aman dan lengkap. Sertifikat Hak Milik (SHM) dan Persetujuan Bangunan Gedung (PBG) sudah pecah per kavling, sehingga siap langsung diproses balik nama ke atas nama Anda di hadapan Notaris saat pelunasan."
    },
    {
      question: "Bagaimana sistem pengelolaan pasif jika saya tinggal di luar kota?",
      answer: "Kami menyediakan sistem '100% Hands-off Management'. Operasional harian, perawatan fasilitas, kolam renang, hingga strategi pemasaran digital untuk penyewaan villa akan dikelola penuh oleh Villa Operator Eksklusif kami. Anda tinggal memantau laporan pendapatan bulanan secara transparan via aplikasi investor."
    },
    {
      question: "Apakah harga IDR 4,85 Miliar sudah benar-benar All-Inclusive?",
      answer: "Ya, betul. Skema harga kami menganut transparansi penuh tanpa biaya siluman. Nilai tersebut sudah mencakup unit bangunan 2 lantai, fully furnished luxury interior (senilai IDR 350 Juta), biaya Notaris, AJB, Pajak Pembelian (BPHTB), serta instalasi jaringan listrik underground dan smart home system."
    },
    {
      question: "Apakah view pegunungan di unit ini berisiko terhalang bangunan lain?",
      answer: "Tidak. Kavling The Osborn Signature di Kota Batu ini berada di zonasi khusus dengan kontur tanah berundak (staggered land). Posisi tata ruang unit didesain sedemikian rupa menghadap langsung ke lembah hijau, menjamin panorama 180° gunung dan kabut alami bebas dari hambatan bangunan di masa depan."
    },
    {
      question: "Berapa lama masa pembangunan hingga serah terima kunci (STK)?",
      answer: "Masa pembangunan unit eksklusif ini memakan waktu berkisar antara 10 hingga 12 bulan sejak penandatanganan ikatan jual beli. Komitmen ketepatan waktu serah terima ini dilindungi oleh jaminan klausul penalti tertulis demi kenyamanan dan kepastian investasi Anda."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="bg-[#FFFFFF] py-24 px-4 md:px-8 lg:px-16 w-full relative font-sans"
    >
      <div className="mx-auto w-full max-w-[840px]">
        
        {/* ========================================================= */}
        {/* CENTERED SECTION HEADER (Symmetric Layout)                */}
        {/* ========================================================= */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex items-center gap-2 bg-[#E2D8CC]/40 border border-[#543420]/10 px-3.5 py-1.5 rounded-full">
            <HelpCircle size={12} className="text-[#543420]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#543420]">
              Information Hub
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light text-[#543420] tracking-tight leading-snug mt-3 font-sans">
            FAQ <br />
            <span className="font-semibold italic">Pertanyaan yang Sering Diajukan</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-12 bg-[#543420]/20 block" />
            <Star size={10} className="text-[#543420]/40 fill-[#543420]/20" />
            <span className="h-px w-12 bg-[#543420]/20 block" />
          </div>
          
          <p className="text-zinc-400 font-light text-sm max-w-md mx-auto mt-5 leading-relaxed">
            Temukan jawaban komprehensif mengenai legalitas, skema investasi pasif, dan mekanisme kepemilikan unit premium kami.
          </p>
        </div>

        {/* ========================================================= */}
        {/* ACCORDION WRAPPER CONTAINER (ANIMATED)                    */}
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
                  isOpen 
                    ? "border-[#543420] shadow-[0_15px_35px_rgba(84,52,32,0.06)] bg-white" 
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
                    isOpen ? "text-[#543420]" : "text-zinc-700 group-hover:text-zinc-900"
                  )}>
                    {item.question}
                  </span>
                  
                  <div className={cn(
                    "w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-[#543420] transition-all duration-300 shadow-sm",
                    isOpen && "rotate-180 border-[#543420]/20 bg-[#543420] text-white"
                  )}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Smooth Expandable Content Panel using CSS Grid Technique */}
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
        {/* FOOTNOTE ASSISTANCE (ANIMATED)                            */}
        {/* ========================================================= */}
        <div className={cn(
          "mt-12 text-center p-5 md:p-6 border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50 transition-all duration-1000 delay-300 ease-out",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
              <MessageSquare size={14} className="text-[#543420] shrink-0" />
              <span>Punya pertanyaan spesifik lainnya yang belum terangkum?</span>
            </div>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20The%20Osborn%20Living,%20ada%20hal%20mengenai%20legalitas%20yang%20ingin%20saya%20tanyakan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#543420] hover:text-[#432918] underline tracking-widest uppercase transition-colors font-sans"
            >
              Hubungi Investment Officer
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}