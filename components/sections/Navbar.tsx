"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Pilihan Unit", href: "#explore" },
  { name: "Lokasi Strategis", href: "#location" },
  { name: "Daftar Harga", href: "#pricing" },
  { name: "Tanya Jawab (FAQ)", href: "#faq" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // WhatsApp Tautan Integrasi
  const whatsappUrl = "https://wa.me/62816500160?text=Halo%20The%20Osborn%20Living,%20saya%20tertarik%20dengan%20Villa%20dan%20ingin%20konsultasi%20mengenai%20unit%20ini.";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#543420]/10 bg-white/90 backdrop-blur-md shadow-sm font-sans">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:h-20 lg:px-8">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={closeMobileMenu}
            className={cn(
              "relative z-[60] block shrink-0 transition-all duration-1000 ease-out",
              isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            )}
          >
            <div className="relative h-8 w-[120px] sm:h-9 sm:w-[135px] md:h-10 md:w-[150px] lg:w-[165px]">
              <Image
                src="/Logo.png"
                alt="The Osborn Living"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 135px, (max-width: 1024px) 150px, 165px"
              />
            </div>
          </a>

          {/* Desktop / Tablet Navigation */}
          {/* AKUBAH: Mengecilkan font dari text-[11px] ke text-[9.5px] / text-xs serta merapatkan gap */}
          <nav className={cn(
            "hidden md:flex items-center gap-4 lg:gap-6 transition-all duration-1000 delay-150 ease-out",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          )}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[9.5px] lg:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#543420]/70 transition-colors duration-200 hover:text-[#E67E22] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#E67E22] after:transition-all after:duration-300 hover:after:w-full font-sans"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop / Tablet CTA */}
          <div className={cn(
            "hidden md:flex items-center transition-all duration-1000 delay-300 ease-out",
            isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          )}>
            {/* AKUBAH: Mengubah nama menjadi 'Hubungi Kami', mengecilkan font padding, dan mengarahkan ke nomor WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#543420] hover:border-[#E67E22] px-3.5 py-2 lg:px-4.5 lg:py-2.5 text-[9.5px] lg:text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#543420] transition-all duration-300 hover:bg-[#E67E22] hover:text-white active:scale-95 font-sans"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight
                size={11}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="relative z-[60] inline-flex items-center justify-center rounded-xl p-2 text-[#543420] transition-colors hover:bg-[#E2D8CC]/30 md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300 font-sans",
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-white transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#543420_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

          <div
            id="mobile-menu"
            className="relative flex h-full flex-col justify-between px-6 pb-8 pt-24"
          >
            {/* Mobile nav links */}
            <nav className="flex flex-col gap-5">
              <span className="block border-b border-zinc-100 pb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 font-sans">
                Navigation Menu
              </span>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="font-sans font-medium text-xl text-[#543420] transition-all duration-200 hover:text-[#E67E22] hover:translate-x-1 sm:text-2xl"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="space-y-6">
              {/* AKUBAH: Tombol mobile CTA diselaraskan rute dan penamaannya */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#543420] hover:bg-[#E67E22] py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#543420]/10 transition-colors font-sans"
              >
                <span>Hubungi Kami via WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="text-center">
                <span className="block text-[10px] font-medium uppercase tracking-widest text-zinc-400 font-sans">
                  The Osborn Living &copy; 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}