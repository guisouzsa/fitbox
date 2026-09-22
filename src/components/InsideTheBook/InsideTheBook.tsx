import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { img, photos } from "@/lib/images";
import { categories, collection, dayInRecipes, shoppingList } from "@/lib/product.config";

const recipe = dayInRecipes[1];
const ingredients = shoppingList.slice(0, 6);
const steps = [
  "Separe os ingredientes e pré-aqueça o que for necessário.",
  "Tempere e leve ao fogo médio até o ponto certo.",
  "Finalize, monte o prato e sirva em seguida.",
];

export function InsideTheBook() {
  return (
    <section className="bg-charcoal py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <p className="mb-5 text-xs font-medium tracking-[0.3em] text-cream/50 uppercase">
            Dentro do livro
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="max-w-2xl text-balance font-display text-4xl leading-[1.08] font-medium text-cream sm:text-5xl">
            Abra e veja.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 max-w-md text-sm text-cream/50">
            Arraste para acompanhar a sequência — capa, índice, receita, ingredientes, preparo e foto.
          </p>
        </Reveal>
      </div>

      <Reveal delay={250}>
        <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <PageCard label="Capa" className="bg-olive-deep">
            <div className="relative h-full w-full">
              <Image
                src={img(photos.overheadSpread[1], 900)}
                alt="Capa do ebook Fitbox"
                fill
                sizes="300px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/40" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-cream uppercase">
                  Fitbox
                </p>
                <p className="mt-2 font-display text-2xl font-medium text-cream">
                  {collection[0].title}
                </p>
              </div>
            </div>
          </PageCard>

          <PageCard label="Índice" className="bg-parchment">
            <div className="flex h-full flex-col justify-center p-7">
              <p className="mb-4 font-display text-xl text-charcoal">Índice</p>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li
                    key={category.name}
                    className="flex items-baseline justify-between border-b border-charcoal/10 pb-2 text-sm text-charcoal/80"
                  >
                    <span>
                      <span className="mr-2 text-stone">0{index + 1}</span>
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </PageCard>

          <PageCard label="Receita" className="bg-cream">
            <div className="flex h-full flex-col justify-center p-7">
              <p className="text-xs tracking-[0.2em] text-olive-deep uppercase">{recipe.label}</p>
              <p className="mt-3 font-display text-2xl leading-snug text-charcoal">{recipe.recipe}</p>
              <p className="mt-4 text-xs text-stone">{recipe.meta}</p>
            </div>
          </PageCard>

          <PageCard label="Ingredientes" className="bg-parchment">
            <div className="flex h-full flex-col justify-center p-7">
              <p className="mb-4 font-display text-xl text-charcoal">Ingredientes</p>
              <ul className="space-y-2.5 text-sm text-charcoal/80">
                {ingredients.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-3.5 w-3.5 shrink-0 rounded-[2px] border border-charcoal/30" />
                    <span className="capitalize">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </PageCard>

          <PageCard label="Preparo" className="bg-cream">
            <div className="flex h-full flex-col justify-center p-7">
              <p className="mb-4 font-display text-xl text-charcoal">Modo de preparo</p>
              <ol className="space-y-4 text-sm text-charcoal/80">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-display text-olive-deep">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </PageCard>

          <PageCard label="Fotografia" className="bg-charcoal">
            <div className="relative h-full w-full">
              <Image
                src={img(photos.lunch[3], 900)}
                alt="Fotografia do prato finalizado, com detalhe de textura e vapor"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </PageCard>
        </div>
      </Reveal>
    </section>
  );
}

function PageCard({
  label,
  className,
  children,
}: {
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[260px] shrink-0 snap-start flex-col gap-3 sm:w-[300px]">
      <div className={`aspect-[3/4] w-full overflow-hidden rounded-[2px] ${className}`}>{children}</div>
      <span className="text-[0.65rem] tracking-[0.25em] text-cream/40 uppercase">{label}</span>
    </div>
  );
}
