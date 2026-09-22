import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { img, photos } from "@/lib/images";
import { categories } from "@/lib/product.config";

const tilePhotos = [
  photos.breakfast[1],
  photos.lunch[1],
  photos.dinner[2],
  photos.snack[2],
  photos.airFryer[2],
  photos.dessert[2],
];

const spans = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
];

export function Categories() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
            Categorias
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-xl text-balance font-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl">
            Uma receita para cada momento do dia.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-flow-dense lg:grid-cols-12 lg:auto-rows-[220px]">
          {categories.map((category, index) => (
            <Reveal
              key={category.name}
              delay={index * 60}
              variant="mask"
              className={`group relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-auto ${spans[index]}`}
            >
              <a href="#oferta" className="block h-full w-full" aria-label={`Ver receitas de ${category.name}`}>
                <Image
                  src={img(tilePhotos[index], 1200)}
                  alt={`Composição fotográfica representando a categoria ${category.name}`}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-charcoal/0 transition-colors duration-500 group-hover:from-charcoal/80" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-2xl font-medium text-cream transition-transform duration-500 group-hover:-translate-y-1 sm:text-3xl">
                    {category.name}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-cream/70">{category.count}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
