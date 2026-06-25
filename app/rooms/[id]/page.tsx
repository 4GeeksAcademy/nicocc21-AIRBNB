import { notFound } from "next/navigation";
import { RoomDetailPageClient } from "@/app/components/room-detail-page-client";
import { findListingById, listingsData } from "@/app/lib/listings-data";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
  const routeParams = await params;
  const listing = findListingById(routeParams.id);

  if (!listing) {
    notFound();
  }

  return <RoomDetailPageClient listing={listing} />;
}

export function generateStaticParams() {
  return listingsData.map((listing) => ({ id: listing.id }));
}
