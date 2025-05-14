
export const NuevaEtiqueta = ({

    escalaTexto = 3,
    nombreProducto = "nombre del Producto",
    codigoProducto = "1283954fdg",
    descripcionProducto = "Descripcion",
    precioProducto = "1.000",

}) => {

    const estiloTexto = {
        titulo: { fontSize: `${0.5 * escalaTexto}rem` },      // base: 1.5rem (text-2xl)
        codigo: { fontSize: `${0.5 * escalaTexto}rem` },     // base: 1.25rem (text-xl)
        descripcion: { fontSize: `${0.5 * escalaTexto}rem` },
        precio: { fontSize: `${0.6 * escalaTexto}rem` },
    };

    return (
        <div className="flex flex-col  gap-0 border-2 border-amber-700 pb-1" style={{ width: "100%", height: "100%" }}>
            <div className="flex flex-col justify-center items-center gap-0 " style={{ width: "100%", height: "100%" }}>
                <p className="uppercase font-black " style={estiloTexto.titulo}>{nombreProducto}</p>
                <p className="uppercase font-medium " style={estiloTexto.codigo}>Codigo : {codigoProducto}</p>
                <p className="font-medium " style={estiloTexto.descripcion}>{descripcionProducto}</p>
            </div>

            <p className="font-black text-end mr-1" style={estiloTexto.precio}>Precio : ${precioProducto}</p>
        </div>
    )
}