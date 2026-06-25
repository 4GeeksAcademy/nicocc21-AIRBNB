type CategoryOption = {
  id: string;
  label: string;
  icon: string;
};

type HomeSearchPanelProps = {
  query: string;
  activeCategory: string;
  categories: CategoryOption[];
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

/*
Componente: HomeSearchPanel
Props:
- query: string
- activeCategory: string
- categories: CategoryOption[]
- onQueryChange: (value: string) => void
- onCategoryChange: (value: string) => void
Relacion de layout:
- Bloque superior de Home con barra de busqueda y filtros por categoria.
*/
export const HomeSearchPanel = ({
  query,
  activeCategory,
  categories,
  onQueryChange,
  onCategoryChange,
}: HomeSearchPanelProps) => {
  return (
    <>
      <div className="mb-4 flex w-full items-center gap-2 rounded-full border border-[#ddd] bg-white px-5 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        <span aria-hidden>⌕</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Empieza a buscar"
          className="w-full border-none bg-transparent text-sm outline-none"
        />
      </div>
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category.id
                ? "border-[#222] bg-[#222] text-white"
                : "border-[#ddd] bg-white text-[#4f4f4f] hover:border-[#bdbdbd]"
            }`}
          >
            <span className="mr-1">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
    </>
  );
};
