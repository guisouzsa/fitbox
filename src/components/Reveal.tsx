"use client";

import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "span";
  delay?: number;
  variant?: "fade" | "mask";
  className?: string;
};

export function Reveal({
  children,
  as = "div",
  delay = 0,
  variant = "fade",
  className = "",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as;
  const base = variant === "mask" ? "reveal-mask" : "reveal";
  const visibleClass = variant === "mask" ? "reveal-mask-visible" : "reveal-visible";

  return (
    <Tag
      ref={ref as never}
      className={`${base} ${visible ? visibleClass : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
