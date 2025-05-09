export const VistaEtiqueta = ({ titulo, codigo, descripcion, precio }) => {
    return (
        <div className="bg-white border p-4 rounded shadow text-left">
            <h2 className="text-2xl font-bold uppercase">{titulo}</h2>
            <p className="text-lg font-semibold">Código: {codigo}</p>

            {/* Mostrar solo si hay descripción */}
            {descripcion && (
                <p className="text-sm mt-2 text-gray-700 whitespace-pre-line">
                    {descripcion}
                </p>
            )}

            {/* Mostrar solo si hay precio */}
            {precio && (
                <p className="text-right text-xl font-bold text-green-700 mt-2">
                    ${precio}
                </p>
            )}
        </div>
    )
}
