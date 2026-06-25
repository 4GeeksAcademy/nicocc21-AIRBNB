"use client";

import type { Listing } from "@/app/lib/listings-data";
import { LoadingIndicator } from "@/app/components/loading-indicator";
import { RoomAmenities } from "@/app/components/room-amenities";
import { RoomBookingCard } from "@/app/components/room-booking-card";
import { RoomDetailHeader } from "@/app/components/room-detail-header";
import { RoomGallery } from "@/app/components/room-gallery";
import { RoomHostInfo } from "@/app/components/room-host-info";
import { RoomDetailTopbar } from "@/app/components/room-detail-topbar";
import { useRoomDetailState } from "@/app/lib/use-room-detail-state";

type RoomDetailPageClientProps = {
  listing: Listing;
};

/*
Componente: RoomDetailPageClient
Props:
- listing: Listing
Relacion de layout:
- Vista completa de /rooms/[id].
- Incluye carga simulada, galeria con indice y secciones de detalle.
*/
export const RoomDetailPageClient = ({ listing }: RoomDetailPageClientProps) => {
  const {
    loading,
    photoIndex,
    guests,
    prevPhoto,
    nextPhoto,
    decreaseGuests,
    increaseGuests,
  } = useRoomDetailState(listing.id, listing.photos.length);

  if (loading) {
    return (
      <div className="mx-auto mt-8 max-w-[900px] px-4">
        <LoadingIndicator label="Cargando detalle de la habitacion..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f6f6] px-4 py-6 min-[786px]:px-8">
      <main className="mx-auto max-w-[1200px]">
        <RoomDetailTopbar title={listing.title} />

        <RoomGallery photos={listing.photos} index={photoIndex} onPrev={prevPhoto} onNext={nextPhoto} />

        <div className="grid grid-cols-1 gap-6 min-[960px]:grid-cols-[2fr_1fr]">
          <section className="space-y-4">
            <RoomDetailHeader
              title={listing.title}
              location={listing.location}
              rating={listing.rating}
              reviews={listing.reviews}
            />
            <RoomHostInfo hostName={listing.hostName} hostYears={listing.hostYears} />
            <RoomAmenities amenities={listing.amenities} />
          </section>

          <RoomBookingCard
            pricePerNight={listing.pricePerNight}
            guests={guests}
            onDecrease={decreaseGuests}
            onIncrease={increaseGuests}
          />
        </div>
      </main>
    </div>
  );
};
