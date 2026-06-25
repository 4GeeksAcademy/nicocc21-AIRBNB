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
        <div
          className="h-64 rounded-2xl min-[786px]:row-span-2 min-[786px]:h-full"
          style={{ background: photos[index] }}
        />
        {photos.slice(1, 5).map((photo, photoIndex) => (
          <div key={photoIndex} className="hidden rounded-2xl min-[786px]:block" style={{ background: photo }} />
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
