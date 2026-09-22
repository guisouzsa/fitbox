"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faq } from "@/lib/product.config";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">FAQ</p>
          <h2 className="text-balance font-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl">
            Perguntas frequentes.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 divide-y divide-line border-t border-b border-line">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive-deep"
                    >
                      <span className="font-display text-lg text-charcoal sm:text-xl">
                        {item.question}
                      </span>
                      <span
                        className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-charcoal" />
                        <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-charcoal" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 max-w-lg text-sm leading-relaxed text-stone">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
