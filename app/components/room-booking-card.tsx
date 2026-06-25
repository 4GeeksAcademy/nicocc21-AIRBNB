type RoomBookingCardProps = {
  pricePerNight: number;
  guests: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

/*
Componente: RoomBookingCard
Props:
- pricePerNight: number
- guests: number
- onDecrease: () => void
- onIncrease: () => void
Relacion de layout:
- Tarjeta de reserva con precio por noche, contador de huespedes y CTA.
*/
export const RoomBookingCard = ({
  pricePerNight,
  guests,
  onDecrease,
  onIncrease,
}: RoomBookingCardProps) => {
  return (
    <aside className="rounded-3xl border border-[#e5e5e5] bg-white p-5 shadow-sm">
      <p className="text-2xl font-semibold">{pricePerNight} € / noche</p>
      <div className="mt-4 overflow-hidden rounded-xl border border-[#ddd]">
        <div className="grid grid-cols-2 border-b border-[#ddd] text-sm">
          <div className="border-r border-[#ddd] p-3">
            <p className="text-[11px] font-semibold uppercase">Llegada</p>
            <p>10/07/2026</p>
          </div>
          <div className="p-3">
            <p className="text-[11px] font-semibold uppercase">Salida</p>
            <p>12/07/2026</p>
          </div>
        </div>
        <div className="p-3">
          <p className="mb-2 text-xs font-semibold uppercase">Huespedes</p>
        </div>
        <div className="px-3 pb-3">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onDecrease} className="rounded-lg border border-[#ddd] px-3 py-1">
            -
          </button>
          <span className="min-w-6 text-center">{guests}</span>
          <button type="button" onClick={onIncrease} className="rounded-lg border border-[#ddd] px-3 py-1">
            +
          </button>
        </div>
        </div>
      </div>
      <button type="button" className="mt-4 w-full rounded-xl bg-[#ff385c] py-3 font-semibold text-white">
        Reservar
      </button>
      <p className="mt-3 text-center text-xs text-[#666]">Cancelacion gratuita antes del 5 de julio.</p>
    </aside>
  );
};
