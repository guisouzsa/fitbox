import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { img, photos } from "@/lib/images";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-charcoal px-6 py-32 sm:px-10">
      <Image
        src={img(photos.overheadSpread[5], 1920)}
        alt="Mesa farta com receitas Fitbox finalizadas, iluminação natural"
        fill
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-4xl leading-[1.1] font-medium text-cream sm:text-6xl">
            Sua próxima receita começa aqui.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <a
            href="#oferta"
            className="inline-flex items-center justify-center rounded-full bg-cream px-9 py-4 text-xs font-semibold tracking-[0.16em] text-charcoal uppercase transition-transform duration-300 hover:scale-[1.03] hover:bg-white"
          >
            Explorar os ebooks
          </a>
        </Reveal>
      </div>
    </section>
  );
}
