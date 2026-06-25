import type { Amenity } from "@/app/lib/listings-data";

type RoomAmenitiesProps = {
  amenities: Amenity[];
};

/*
Componente: RoomAmenities
Props:
- amenities: Amenity[]
Relacion de layout:
- Seccion de servicios en una cuadricula icono + etiqueta.
*/
export const RoomAmenities = ({ amenities }: RoomAmenitiesProps) => {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold">Servicios</h3>
      <ul className="grid grid-cols-1 gap-3 min-[640px]:grid-cols-2">
        {amenities.map((amenity) => (
          <li key={amenity.label} className="rounded-xl bg-[#f7f7f7] px-3 py-2 text-sm">
            <span className="mr-2">{amenity.icon}</span>
            {amenity.label}
          </li>
        ))}
      </ul>
    </section>
  );
};
