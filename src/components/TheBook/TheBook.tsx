import Image from "next/image";
import { BookCover } from "@/components/BookCover/BookCover";
import { Reveal } from "@/components/Reveal";
import { img, photos } from "@/lib/images";
import { collection, productStats } from "@/lib/product.config";

const cover = collection[0];

export function TheBook() {
  return (
    <section id="o-livro" className="relative overflow-hidden bg-cream px-6 py-28 sm:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1300px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-[360px] lg:mx-0">
          <div className="relative">
            <BookCover
              title={cover.title}
              subtitle={cover.subtitle}
              image={img(photos.overheadSpread[1], 1200)}
              alt="Capa do ebook Fitbox Receitas Proteicas"
              priority
              className="relative z-10"
            />
            <div className="absolute -right-8 -bottom-10 z-0 hidden aspect-[4/5] w-40 overflow-hidden rounded-[2px] shadow-xl ring-4 ring-cream sm:block">
              <Image
                src={img(photos.cookbook[3], 600)}
                alt="Página interna com receita ilustrada do ebook Fitbox"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="max-w-xl">
          <Reveal>
            <p className="mb-5 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
              O livro
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-balance font-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl">
              Um livro para a vida real.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-balance text-base leading-relaxed text-stone sm:text-lg">
              Nada de fórmulas complicadas. A Fitbox reúne receitas testadas, com ingredientes
              fáceis de encontrar e passo a passo direto — organizadas como um livro de verdade,
              feito para ser aberto todos os dias.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {productStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-medium text-charcoal sm:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs tracking-wide text-stone uppercase">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
