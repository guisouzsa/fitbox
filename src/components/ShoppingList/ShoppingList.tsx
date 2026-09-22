"use client";

import { useReveal } from "@/hooks/useReveal";
import { shoppingList } from "@/lib/product.config";

export function ShoppingList() {
  const { ref, visible } = useReveal<HTMLUListElement>(0.4);

  return (
    <section className="bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-lg">
        <p className="mb-4 text-center text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
          Lista de compras
        </p>
        <h2 className="mb-12 text-center font-display text-3xl font-medium text-charcoal sm:text-4xl">
          Sua lista da semana
        </h2>

        <ul ref={ref} className="divide-y divide-line rounded-sm border border-line bg-parchment/50">
          {shoppingList.map((item, index) => {
            const delay = `${280 + index * 80}ms`;
            return (
              <li key={item} className="flex items-center gap-4 px-6 py-4">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border transition-colors duration-300"
                  style={{
                    borderColor: visible ? "var(--color-olive-deep)" : "var(--color-charcoal)",
                    backgroundColor: visible ? "var(--color-olive-deep)" : "transparent",
                    transitionDelay: visible ? delay : "0ms",
                  }}
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 text-cream transition-all duration-300"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "scale(1)" : "scale(0.5)",
                      transitionDelay: visible ? delay : "0ms",
                    }}
                  >
                    <path
                      d="M2 6l3 3 5-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="text-base capitalize transition-colors duration-300"
                  style={{
                    color: visible ? "var(--color-stone)" : "var(--color-charcoal)",
                    textDecorationLine: visible ? "line-through" : "none",
                    textDecorationColor: "var(--color-stone-light)",
                    transitionDelay: visible ? delay : "0ms",
                  }}
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
