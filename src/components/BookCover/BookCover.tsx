import Image from "next/image";
import { brand } from "@/lib/product.config";

type BookCoverProps = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function BookCover({
  title,
  subtitle,
  image,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 380px, 60vw",
  className = "",
}: BookCoverProps) {
  return (
    <div
      className={`group relative aspect-[3/4] w-full overflow-hidden rounded-[2px] shadow-[0_30px_60px_-25px_rgba(28,26,22,0.45)] ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-charcoal/25" />
      <div className="absolute inset-0 border border-cream/15" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5">
        <span className="text-[0.65rem] font-semibold tracking-[0.3em] text-cream uppercase">
          {brand.name}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-olive" />
      </div>
      <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
        <p className="font-display text-2xl leading-tight font-medium text-cream sm:text-3xl">{title}</p>
        <p className="mt-1.5 text-xs tracking-[0.08em] text-cream/70 italic">{subtitle}</p>
      </div>
    </div>
  );
}
