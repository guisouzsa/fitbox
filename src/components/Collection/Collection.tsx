import { BookCover } from "@/components/BookCover/BookCover";
import { Reveal } from "@/components/Reveal";
import { img, photos } from "@/lib/images";
import { collection } from "@/lib/product.config";

const coverPhotos = [photos.lunch[4], photos.airFryer[4], photos.dessert[4], photos.breakfast[4]];

export function Collection() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-olive-deep uppercase">
            A coleção
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-xl text-balance font-display text-4xl leading-[1.08] font-medium text-charcoal sm:text-5xl">
            Quatro livros, uma só cozinha.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
          {collection.map((book, index) => (
            <div key={book.slug}>
              <Reveal delay={index * 80} variant="mask">
                <BookCover
                  title={book.title}
                  subtitle={book.subtitle}
                  image={img(coverPhotos[index], 900)}
                  alt={`Capa do ebook Fitbox ${book.title}`}
                  sizes="(min-width: 1024px) 320px, 45vw"
                />
              </Reveal>
              <Reveal delay={index * 80 + 150}>
                <p className="mt-4 text-sm leading-relaxed text-stone">{book.description}</p>
                <p className="mt-2 text-xs tracking-wide text-charcoal/60 uppercase">{book.recipes}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
