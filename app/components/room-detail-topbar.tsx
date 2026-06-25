import Link from "next/link";

type RoomDetailTopbarProps = {
  title: string;
};

/*
Componente: RoomDetailTopbar
Props:
- title: string
Relacion de layout:
- Encabezado superior de la pagina de detalle con boton de retorno.
*/
export const RoomDetailTopbar = ({ title }: RoomDetailTopbarProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Link href="/catalog" className="text-sm font-semibold text-[#ff385c]">
        Volver al catalogo
      </Link>
    </div>
  );
};
