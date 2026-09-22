"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { img, photos, pick } from "@/lib/images";
import { hero } from "@/lib/product.config";

const HERO_VIDEO_SRC: string | null = null;
const BACKDROP_FRAMES = [0, 2, 4, 1].map((i) => pick(photos.overheadSpread, i));

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const mediaRadius = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentShift = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ scale: mediaScale, borderRadius: mediaRadius }}
        className="absolute inset-0 overflow-hidden"
      >
        {HERO_VIDEO_SRC ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={img(BACKDROP_FRAMES[0], 1920)}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <div className="hero-kenburns absolute inset-0">
            {BACKDROP_FRAMES.map((frame, index) => (
              <div
                key={index}
                className="hero-frame absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img(frame, 1920)})`,
                  animationDelay: `${index * 6}s`,
                }}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/10" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentShift }}
        className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="animate-fade-in mb-5 text-xs font-medium tracking-[0.3em] text-cream/70 uppercase opacity-0 [animation-delay:200ms]">
            {hero.eyebrow}
          </p>
          <h1 className="animate-fade-up max-w-3xl text-balance font-display text-[2.6rem] leading-[1.05] font-medium text-cream opacity-0 sm:text-6xl lg:text-7xl [animation-delay:350ms]">
            {hero.title}
          </h1>
          <p className="animate-fade-up mt-6 max-w-md text-balance text-base leading-relaxed text-cream/80 opacity-0 sm:text-lg [animation-delay:650ms]">
            {hero.subtitle}
          </p>
          <div className="animate-fade-up mt-9 flex flex-col gap-5 opacity-0 sm:flex-row sm:items-center [animation-delay:900ms]">
            <a
              href="#o-livro"
              className="inline-flex w-fit items-center justify-center rounded-full bg-cream px-8 py-3.5 text-xs font-semibold tracking-[0.14em] text-charcoal uppercase transition-transform duration-300 hover:scale-[1.03] hover:bg-white"
            >
              {hero.cta}
            </a>
            <p className="text-xs tracking-[0.05em] text-cream/60">{hero.meta}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
