import Link from "next/link";
import type { Listing } from "@/app/lib/listings-data";
import { ListingCard } from "@/app/components/listing-card";
import { LoadingIndicator } from "@/app/components/loading-indicator";

type HomeListingsSectionProps = {
  loading: boolean;
  listings: Listing[];
};

/*
Componente: HomeListingsSection
Props:
- loading: boolean
- listings: Listing[]
Relacion de layout:
- Seccion de Home con titulo, enlace a catalogo y grilla de tarjetas.
*/
export const HomeListingsSection = ({ loading, listings }: HomeListingsSectionProps) => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold leading-tight">Alojamientos populares en Alicante</h1>
        <Link href="/catalog" className="grid size-9 place-items-center rounded-full bg-[#efefef] text-lg">
          →
        </Link>
      </div>

      {loading ? (
        <LoadingIndicator label="Cargando alojamientos..." />
      ) : (
        <section className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4 min-[1200px]:grid-cols-5">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} href={`/rooms/${listing.id}`} />
          ))}
        </section>
      )}
    </>
  );
};
