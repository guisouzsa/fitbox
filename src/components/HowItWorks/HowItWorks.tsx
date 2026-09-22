import { Reveal } from "@/components/Reveal";
import { purchaseSteps } from "@/lib/product.config";

export function HowItWorks() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
            A compra
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-xl text-balance font-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl">
            Como funciona.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {purchaseSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 100}
              className="border-t border-line pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8 first:border-l-0 first:pl-0"
            >
              <p className="font-display text-3xl font-medium text-stone-light">
                0{index + 1}
              </p>
              <p className="mt-4 font-display text-xl text-charcoal">{step.title}</p>
              <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-stone">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
