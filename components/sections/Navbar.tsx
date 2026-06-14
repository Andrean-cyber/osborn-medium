"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Our Collections", href: "#explore" },
  { name: "Amenities", href: "#amenities" },
  { name: "About The Osborn", href: "#about" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Auto close menu saat resize ke tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#543420]/10 bg-white shadow-sm">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <Link href="/" className="relative z-[60] block shrink-0">
            <div className="relative h-9 w-[130px] sm:h-10 sm:w-[145px] md:h-11 md:w-[160px] lg:w-[180px]">
              <Image
                src="/Logo.png"
                alt="The Osborn Living"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 130px, (max-width: 768px) 145px, (max-width: 1024px) 160px, 180px"
              />
            </div>
          </Link>

          {/* Desktop / Tablet Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#543420]/70 transition-colors duration-200 hover:text-[#543420] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#543420] after:transition-all after:duration-300 hover:after:w-full lg:text-xs"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop / Tablet CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#consultation"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#543420] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#543420] transition-all duration-300 hover:bg-[#543420] hover:text-white active:scale-95 lg:px-5"
            >
              <span>Schedule a Tour</span>
              <ArrowUpRight
                size={12}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
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
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
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
          {/* Decorative pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#543420_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.015]" />

          <div
            id="mobile-menu"
            className="relative flex h-full flex-col justify-between px-6 pb-8 pt-24"
          >
            {/* Mobile nav links */}
            <nav className="flex flex-col gap-6">
              <span className="block border-b border-zinc-100 pb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Navigation Menu
              </span>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="font-serif text-2xl text-[#543420] transition-all duration-200 hover:italic sm:text-3xl"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="space-y-6">
              <Link
                href="#consultation"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#543420] py-4 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#543420]/10"
              >
                <span>Schedule a Private Tour</span>
                <ArrowUpRight size={14} />
              </Link>

              <div className="text-center">
                <span className="block text-[10px] font-medium uppercase tracking-widest text-zinc-400">
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