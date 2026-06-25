/*
Componente: HomeNavbar
Props:
- Sin props.
Relacion de layout:
- Barra superior de la Home con logo, menu y accion de usuario.
*/
export const HomeNavbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e8e8e8] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 min-[786px]:px-8">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-[#ff385c] text-white">⌂</span>
          <p className="text-xl font-bold text-[#ff385c]">airbnb</p>
        </div>
        <div className="hidden items-center gap-6 text-sm text-[#6a6a6a] min-[786px]:flex">
          <button type="button" className="border-b-2 border-[#222] pb-1 font-semibold text-[#222]">
            Alojamientos
          </button>
          <button type="button" className="hover:text-[#222]">
            Experiencias
          </button>
          <button type="button" className="hover:text-[#222]">
            Servicios
          </button>
        </div>
        <button type="button" className="rounded-full border border-[#ddd] px-3 py-2 text-sm shadow-sm">
          ☰
        </button>
      </div>
    </header>
  );
};
