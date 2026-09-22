import { Reveal } from "@/components/Reveal";
import { pricingPlans } from "@/lib/product.config";

export function Pricing() {
  return (
    <section id="oferta" className="bg-parchment px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
            Oferta
          </p>
          <h2 className="text-balance font-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl">
            Escolha seu livro.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 100}
              className={`flex flex-col rounded-sm border p-8 sm:p-10 ${
                plan.featured
                  ? "border-olive-deep bg-cream shadow-[0_20px_45px_-25px_rgba(28,26,22,0.35)]"
                  : "border-line bg-cream/60"
              }`}
            >
              {plan.featured && (
                <span className="mb-6 w-fit rounded-full bg-olive-deep px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-cream uppercase">
                  Coleção completa
                </span>
              )}
              <p className="font-display text-2xl font-medium text-charcoal">{plan.name}</p>
              <p className="mt-2 text-sm text-stone">{plan.description}</p>

              <div className="mt-8">
                {plan.price ? (
                  <>
                    <p className="font-display text-4xl font-medium text-charcoal">{plan.price}</p>
                    {plan.installments && <p className="mt-1 text-xs text-stone">{plan.installments}</p>}
                  </>
                ) : (
                  <p className="text-xs tracking-[0.1em] text-stone uppercase">Valor em breve</p>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-8">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-olive-deep" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#faq"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${
                  plan.featured
                    ? "bg-charcoal text-cream hover:bg-olive-deep"
                    : "border border-charcoal/30 text-charcoal hover:border-charcoal"
                }`}
              >
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
