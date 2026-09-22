import { brand } from "@/lib/product.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-line-dark pt-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-lg font-medium text-cream">{brand.name}</p>
          <p className="mt-1 text-xs text-cream/50">{brand.tagline}</p>
        </div>
        <p className="text-xs text-cream/40">
          © {year} {brand.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
