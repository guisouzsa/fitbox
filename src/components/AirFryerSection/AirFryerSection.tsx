import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { img, photos, pick } from "@/lib/images";
import { airFryerRecipes } from "@/lib/product.config";

export function AirFryerSection() {
  return (
    <section className="bg-charcoal-soft py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-cream/50 uppercase">
            Air Fryer
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-xl text-balance font-display text-4xl leading-[1.08] font-medium text-cream sm:text-5xl">
            Crocante. Sem complicação.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {airFryerRecipes.map((recipe, index) => (
            <div
              key={recipe}
              className="relative aspect-[3/4] w-[220px] shrink-0 snap-start overflow-hidden rounded-sm sm:w-[280px]"
            >
              <Image
                src={img(pick(photos.airFryer, index), 900)}
                alt={`Receita de air fryer: ${recipe}`}
                fill
                sizes="280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/0 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-5 font-display text-xl font-medium text-cream">
                {recipe}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
