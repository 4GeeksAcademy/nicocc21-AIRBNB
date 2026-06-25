import Link from "next/link";
import type { Listing } from "@/app/lib/listings-data";

type ListingCardProps = {
  listing: Listing;
  href: string;
};

/*
Componente: ListingCard
Props:
- listing: Listing
- href: string
Relacion de layout:
- Tarjeta reutilizable entre Home y Catalogo.
- Punto de navegacion a detalle con Link interno.
*/
export const ListingCard = ({ listing, href }: ListingCardProps) => {
  return (
    <Link href={href} className="group block rounded-3xl bg-white p-3 shadow-sm transition hover:shadow-lg">
      <article>
        <div className="relative mb-3 h-44 rounded-2xl" style={{ background: listing.imageColor }}>
          <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-1 text-xs font-medium">
            Recomendacion del viajero
          </span>
          <span className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-black/20 text-white">
            ♡
          </span>
        </div>
        <h3 className="truncate text-lg font-semibold group-hover:underline">{listing.title}</h3>
        <p className="text-sm text-[#666]">{listing.location}</p>
        <p className="mt-1 text-sm text-[#444]">
          {listing.pricePerNight} € / noche · ★ {listing.rating.toFixed(2)}
        </p>
      </article>
    </Link>
  );
};
