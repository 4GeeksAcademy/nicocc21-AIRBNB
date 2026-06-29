import Image from "next/image";

type RoomGalleryProps = {
  photos: string[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
};

/*
Componente: RoomGallery
Props:
- photos: string[]
- index: number
- onPrev: () => void
- onNext: () => void
Relacion de layout:
- Galeria superior de la vista detalle con navegacion entre placeholders.
*/
export const RoomGallery = ({ photos, index, onPrev, onNext }: RoomGalleryProps) => {
  return (
    <section className="mb-5 rounded-3xl bg-white p-3 shadow-sm">
      <div className="grid gap-2 min-[786px]:grid-cols-[2fr_1fr_1fr] min-[786px]:grid-rows-2">
        <div className="relative h-64 overflow-hidden rounded-2xl min-[786px]:row-span-2 min-[786px]:h-full">
          <Image
            src={photos[index]}
            alt={`Foto principal ${index + 1}`}
            fill
            sizes="(max-width: 786px) 100vw, 66vw"
            className="object-cover"
            priority
          />
        </div>
        {photos.slice(1, 5).map((photo, photoIndex) => (
          <div key={photoIndex} className="relative hidden overflow-hidden rounded-2xl min-[786px]:block">
            <Image
              src={photo}
              alt={`Foto miniatura ${photoIndex + 2}`}
              fill
              sizes="22vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-[#ececec] p-2">
        <button type="button" onClick={onPrev} className="rounded-xl border border-[#ddd] px-4 py-2 text-sm">
          Anterior
        </button>
        <p className="text-sm text-[#666]">
          {index + 1} / {photos.length}
        </p>
        <button type="button" onClick={onNext} className="rounded-xl border border-[#ddd] px-4 py-2 text-sm">
          Siguiente
        </button>
      </div>
    </section>
  );
};
