import Image from "next/image";
import { img, photos, pick } from "@/lib/images";
import { Reveal } from "@/components/Reveal";

export function Manifesto() {
  return (
    <section className="bg-cream px-6 py-28 sm:px-10 sm:py-36 lg:py-44">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-14 text-center sm:gap-20">
        <Reveal>
          <h2 className="text-balance font-display text-3xl leading-tight font-medium text-charcoal sm:text-5xl">
            Você não precisa escolher entre comer bem e comer gostoso.
          </h2>
        </Reveal>

        <Reveal delay={100} variant="mask" className="w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm sm:aspect-[16/9]">
            <Image
              src={img(pick(photos.overheadSpread, 3), 1600)}
              alt="Mesa farta com pratos coloridos, ingredientes frescos e talheres organizados"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0}>
          <p className="text-balance font-display text-2xl leading-snug font-medium text-olive-deep italic sm:text-4xl">
            Precisa apenas de boas receitas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
