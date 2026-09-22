"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { weeklyMenu } from "@/lib/product.config";

const mealLabels = ["Café da manhã", "Almoço", "Jantar"];

export function WeeklyMenu() {
  const [activeDay, setActiveDay] = useState(0);
  const day = weeklyMenu[activeDay];

  return (
    <section className="bg-parchment px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
            Cardápio
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-balance font-display text-4xl leading-[1.1] font-medium text-charcoal sm:text-5xl">
            E se você não precisasse pensar no que cozinhar?
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 grid gap-10 md:grid-cols-[220px_1fr] md:gap-14">
            <div
              role="tablist"
              aria-label="Dias da semana"
              className="flex gap-2 overflow-x-auto md:flex-col md:gap-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {weeklyMenu.map((entry, index) => (
                <button
                  key={entry.day}
                  role="tab"
                  aria-selected={activeDay === index}
                  onClick={() => setActiveDay(index)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-left text-sm font-medium tracking-wide transition-colors duration-300 md:rounded-none md:border-l-2 md:px-4 md:py-2.5 ${
                    activeDay === index
                      ? "bg-charcoal text-cream md:border-olive-deep md:bg-transparent md:text-charcoal"
                      : "bg-cream/60 text-stone md:border-transparent md:bg-transparent hover:md:text-charcoal"
                  }`}
                >
                  {entry.day}
                </button>
              ))}
            </div>

            <div key={activeDay} className="animate-fade-in rounded-sm bg-cream p-8 sm:p-10">
              <p className="mb-6 font-display text-2xl text-charcoal">{day.day}</p>
              <ul className="divide-y divide-line">
                {day.meals.map((meal, index) => (
                  <li key={meal} className="flex items-baseline justify-between gap-6 py-4">
                    <span className="text-xs tracking-[0.15em] text-stone uppercase">
                      {mealLabels[index]}
                    </span>
                    <span className="text-right font-display text-lg text-charcoal">{meal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
