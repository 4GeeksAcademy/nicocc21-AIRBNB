"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ListingCard } from "@/app/components/listing-card";
import { LoadingIndicator } from "@/app/components/loading-indicator";
import { listingsData } from "@/app/lib/listings-data";

/*
Componente: CatalogPageClient
Props:
- Sin props.
Relacion de layout:
- Vista de catalogo con conteo de resultados, orden por precio, grid y placeholder de mapa.
*/
export const CatalogPageClient = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<typeof listingsData>([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(listingsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const sortedItems = useMemo(() => {
    const copy = [...items];
    return copy.sort((a, b) =>
      sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
    );
  }, [items, sortOrder]);

  if (loading) {
    return <LoadingIndicator label="Cargando catalogo..." />;
  }

  return (
    <div className="min-h-screen bg-[#f6f6f6] px-4 py-6 min-[786px]:px-8">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-5 rounded-3xl bg-white px-5 py-4 shadow-sm min-[786px]:px-6">
          <div className="flex flex-col gap-3 min-[786px]:flex-row min-[786px]:items-center min-[786px]:justify-between">
            <h1 className="text-2xl font-semibold">{sortedItems.length} resultados disponibles</h1>
            <label className="flex items-center gap-2 text-sm">
              Orden por precio
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="rounded-xl border border-[#ddd] bg-white px-3 py-2"
              >
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </label>
          </div>
        </header>

        <div className="mb-4 flex items-center justify-between text-sm">
          <p className="text-[#6a6a6a]">Alicante · Vista de catalogo</p>
          <Link href="/" className="font-semibold text-[#ff385c]">
            Volver a inicio
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[1000px]:grid-cols-[2fr_1fr]">
          <section className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-2">
            {sortedItems.map((listing) => (
              <ListingCard key={listing.id} listing={listing} href={`/rooms/${listing.id}`} />
            ))}
          </section>
          <aside className="rounded-3xl border border-[#ddd] bg-white p-3 text-center text-[#555] min-[1000px]:sticky min-[1000px]:top-24 min-[1000px]:h-[420px]">
            <div className="relative h-full overflow-hidden rounded-2xl">
              <Image
                src="/imagenes/hoteles-de-la-costa-mediterranea-de-Espana.webp"
                alt="Vista costera de Alicante"
                fill
                sizes="(max-width: 1000px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#333]">
                Zona destacada
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
