type RoomDetailHeaderProps = {
  title: string;
  location: string;
  rating: number;
  reviews: number;
};

/*
Componente: RoomDetailHeader
Props:
- title: string
- location: string
- rating: number
- reviews: number
Relacion de layout:
- Cabecera informativa del detalle con titulo, ubicacion y valoracion.
*/
export const RoomDetailHeader = ({
  title,
  location,
  rating,
  reviews,
}: RoomDetailHeaderProps) => {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-[#666]">{location}</p>
      <p className="mt-1 text-sm text-[#666]">
        ★ {rating.toFixed(2)} · {reviews} reseñas
      </p>
    </article>
  );
};
