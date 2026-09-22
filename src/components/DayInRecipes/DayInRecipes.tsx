import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { img, photos, pick } from "@/lib/images";
import { dayInRecipes } from "@/lib/product.config";

const momentPhotos = [photos.breakfast, photos.lunch, photos.snack, photos.dinner];

export function DayInRecipes() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
            Um dia de receitas
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-xl text-balance font-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl">
            Do café da manhã ao jantar.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col">
        {dayInRecipes.map((moment, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={moment.time}
              className="mx-auto grid w-full max-w-[1400px] items-center gap-8 border-t border-line px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-20"
            >
              <Reveal
                variant="mask"
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-[5/4] ${
                  reversed ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={img(pick(momentPhotos[index], index), 1400)}
                  alt={`Fotografia da receita: ${moment.recipe}`}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover"
                />
              </Reveal>

              <Reveal delay={120} className={reversed ? "lg:order-1" : ""}>
                <p className="font-display text-6xl font-light text-stone-light sm:text-7xl">
                  {moment.time}
                </p>
                <p className="mt-4 text-xs font-medium tracking-[0.25em] text-olive-deep uppercase">
                  {moment.label}
                </p>
                <p className="mt-3 max-w-sm text-balance font-display text-3xl leading-snug text-charcoal sm:text-4xl">
                  {moment.recipe}
                </p>
                <p className="mt-4 text-sm text-stone">{moment.meta}</p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
