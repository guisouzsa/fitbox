"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/product.config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className={`font-display text-xl font-semibold tracking-wide transition-colors duration-500 ${
            scrolled ? "text-charcoal" : "text-cream"
          }`}
        >
          {brand.name}
        </a>
        <a
          href="#oferta"
          className={`hidden rounded-full border px-5 py-2 text-xs font-medium tracking-[0.14em] uppercase transition-colors duration-500 sm:inline-block ${
            scrolled
              ? "border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream"
              : "border-cream/40 text-cream hover:bg-cream hover:text-charcoal"
          }`}
        >
          Ver ebooks
        </a>
      </div>
    </header>
  );
}
