type RoomHostInfoProps = {
  hostName: string;
  hostYears: number;
};

/*
Componente: RoomHostInfo
Props:
- hostName: string
- hostYears: number
Relacion de layout:
- Bloque de informacion del anfitrion dentro del detalle.
*/
export const RoomHostInfo = ({ hostName, hostYears }: RoomHostInfoProps) => {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">Anfitrion: {hostName}</h3>
      <p className="text-sm text-[#666]">{hostYears} anos como anfitrion</p>
    </article>
  );
};
