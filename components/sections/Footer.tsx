"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { cn } from "../../lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={cn('bg-[#543420]', 'text-[#E2D8CC]', 'pt-16', 'pb-8', 'px-6', 'md:px-12', 'lg:px-16', 'relative', 'overflow-hidden')}>
      {/* BACKGROUND DECORATIVE ACCENT */}
      <div className={cn('absolute', 'inset-0', 'bg-[radial-gradient(#E2D8CC_1px,transparent_1px)]', '[background-size:24px_24px]', 'opacity-[0.03]', 'pointer-events-none')} />

      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]', 'relative', 'z-10')}>

        {/* ========================================================= */}
        {/* TOP ROW: BRANDING & CALL TO ACTION                        */}
        {/* ========================================================= */}
        <div className={cn('flex', 'flex-col', 'lg:flex-row', 'justify-between', 'items-start', 'lg:items-center', 'gap-8', 'pb-12', 'border-b', 'border-[#E2D8CC]/20')}>
          <div className={cn('space-y-3', 'max-w-xl')}>
            <div className={cn('flex', 'items-center', 'gap-3')}>
              {/* LOGO IMAGE */}
              <Image
                src="/Logo-white.png"
                alt="The Osborn Living Logo"
                width={160}
                height={48}
                className={cn('h-10', 'w-auto', 'object-contain')}
                priority
              />
            </div>
            <p className={cn('text-zinc-300/80', 'font-light', 'text-xs', 'md:text-sm', 'leading-relaxed')}>
            Investasi properti terbaik di Kota Batu dengan lokasi strategis, view pegunungan, dan fasilitas manajemen villa profesional.
            </p>
          </div>

          <div
  className={cn(
    'w-full',
    'lg:w-auto',
    'flex',
    'flex-col',
    'sm:flex-row',
    'gap-4',
    'shrink-0'
  )}
>
  <a
    href="mailto:info@osbornliving.com"
    className={cn(
      'flex',
      'items-center',
      'justify-center',
      'gap-2',
      'bg-[#E2D8CC]',
      'text-[#543420]',
      'hover:bg-white',
      'font-bold',
      'text-xs',
      'px-6',
      'py-3.5',
      'rounded-xl',
      'transition-all',
      'shadow-md',
      'active:scale-95'
    )}
  >
    <Mail size={14} />
    <span>Request Brochure</span>
  </a>
</div>
        </div>

        {/* ========================================================= */}
        {/* MIDDLE ROW: NAV LINKS & INFORMATION GRID                  */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-4', 'gap-10', 'py-12', 'border-b', 'border-[#E2D8CC]/10')}>

          {/* Column 1: Office & Gallery */}
          <div className="space-y-4">
            <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#E2D8CC]')}>
              Marketing Gallery
            </h4>
            <ul className={cn('space-y-3', 'text-zinc-300/80', 'text-xs', 'font-light', 'leading-relaxed')}>
              <li className={cn('flex', 'items-start', 'gap-2.5')}>
                <MapPin size={16} className={cn('text-[#E2D8CC]', 'shrink-0', 'mt-0.5')} />
                <span>4GHQ+XFG, Temas, Bumiaji, Kota Batu</span>
              </li>
              <li className={cn('flex', 'items-center', 'gap-2.5')}>
                <Phone size={14} className="text-[#E2D8CC]" />
                <span>+62 816-500-160</span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Collections */}
          <div className="space-y-4">
            <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#E2D8CC]')}>
              The Estates
            </h4>
            <ul className={cn('space-y-2.5', 'text-zinc-300/70', 'text-xs', 'font-light')}>
              <li><Link href="#explore" className={cn('hover:text-white', 'transition-colors')}>The Grand Osborn Villa</Link></li>
              <li><Link href="#explore" className={cn('hover:text-white', 'transition-colors')}>The Riverside Pavilion</Link></li>
              <li><Link href="#explore" className={cn('hover:text-white', 'transition-colors')}>The Sanctuary Suite</Link></li>
              <li><Link href="#explore" className={cn('hover:text-white', 'transition-colors')}>Private Residence Pool</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div className="space-y-4">
            <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#E2D8CC]')}>
              Company
            </h4>
            <ul className={cn('space-y-2.5', 'text-zinc-300/70', 'text-xs', 'font-light')}>
              <li><Link href="#about" className={cn('hover:text-white', 'transition-colors')}>Our Philosophy</Link></li>
              <li><Link href="#developers" className={cn('hover:text-white', 'transition-colors')}>The Developers</Link></li>
              <li><Link href="#news" className={cn('hover:text-white', 'transition-colors')}>Press & Journal</Link></li>
              <li><Link href="#contact" className={cn('hover:text-white', 'transition-colors')}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Legals & Media */}
          <div className="space-y-5">
            <div className="space-y-3">
              <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#E2D8CC]')}>
                Legal Documentation
              </h4>
              <ul className={cn('space-y-2.5', 'text-zinc-300/70', 'text-xs', 'font-light')}>
                <li><Link href="/privacy" className={cn('hover:text-white', 'transition-colors')}>Privacy Policy</Link></li>
                <li><Link href="/terms" className={cn('hover:text-white', 'transition-colors')}>Terms of Ownership</Link></li>
              </ul>
            </div>

            {/* Social Media Link */}
            <div className={cn('flex', 'items-center', 'gap-4', 'text-zinc-300/70', 'pt-2')}>
              <a href="#" className={cn('hover:text-white', 'transition-colors')} aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="#" className={cn('hover:text-white', 'transition-colors')} aria-label="Facebook"><FaFacebook size={18} /></a>
              <a href="#" className={cn('hover:text-white', 'transition-colors')} aria-label="Youtube"><FaYoutube size={18} /></a>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM ROW: COPYRIGHT & SCROLL TO TOP                     */}
        {/* ========================================================= */}
        <div className={cn('pt-8', 'flex', 'flex-col', 'sm:flex-row', 'items-center', 'justify-between', 'gap-4', 'text-center', 'sm:text-left')}>
          <p className={cn('text-zinc-400', 'text-[11px]', 'font-light', 'tracking-wide')}>
            &copy; 2026 The Osborn Living. Luxury Property Developer. All rights reserved.
          </p>

          {/* Back To Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className={cn('group', 'flex', 'items-center', 'gap-2', 'text-zinc-400', 'hover:text-white', 'transition-colors', 'text-[11px]', 'tracking-widest')}
          >
            <span>Back to top</span>
            <div className={cn('p-1.5', 'border', 'border-zinc-500/30', 'group-hover:border-white', 'rounded-lg', 'transition-colors')}>
              <ArrowUp size={12} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}