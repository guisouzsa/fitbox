import { Reveal } from "@/components/Reveal";

export function BrandStatement() {
  return (
    <section className="bg-cream px-6 py-36 sm:px-10 sm:py-48">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <Reveal>
          <p className="text-balance font-display text-3xl leading-[1.15] font-medium text-stone-light sm:text-5xl lg:text-6xl">
            Não criamos receitas para impressionar o Instagram.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-balance font-display text-3xl leading-[1.15] font-medium text-charcoal sm:text-5xl lg:text-6xl">
            Criamos receitas para você realmente fazer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
