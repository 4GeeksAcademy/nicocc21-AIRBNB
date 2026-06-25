type LoadingIndicatorProps = {
  label: string;
};

/*
Componente: LoadingIndicator
Props:
- label: string
Relacion de layout:
- Estado de carga reutilizable para Home, Catalogo y Detalle.
*/
export const LoadingIndicator = ({ label }: LoadingIndicatorProps) => {
  return (
    <div className="rounded-2xl border border-dashed border-[#d4d4d4] bg-white px-4 py-8 text-center">
      <p className="text-sm text-[#666]">{label}</p>
    </div>
  );
};
