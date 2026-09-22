type SectionDividerProps = {
  from: string;
  to: string;
};

/**
 * A soft color bleed between two sections that would otherwise meet at a
 * hard cut. Purely decorative continuity — no motion, no observer.
 */
export function SectionDivider({ from, to }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className="h-14 w-full sm:h-20"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    />
  );
}
