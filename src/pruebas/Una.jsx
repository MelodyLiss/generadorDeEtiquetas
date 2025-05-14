

export const Etiqueta = ({
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





export const Una = () => {

    const tipoHoja = "a4"; // Cambia a "carta" o "oficio" según sea necesario
    const orientacion = "horizontal"; // Cambia a "horizontal" si es necesario

    const tamaños = {
        a4: { width: 793.8, height: 1122.6 },
        carta: { width: 816, height: 1056 },
        oficio: { width: 816, height: 1344 },
    };

    const { width, height } = tamaños[tipoHoja];
    const escala = 0.3; // Escala para vista previa

    // Ajuste por orientación
    const hojaWidth = orientacion === "vertical" ? width : height;
    const hojaHeight = orientacion === "vertical" ? height : width;

    return (

        <>

            <div> {/* div generar para ver los 2  */}
                <div className="flex justify-center h-screen  bg-gray-200" > {/* div vista previa */}
                    <div className=" text-center gap-0 grid grid-cols-1 grid-rows-1 justify-center bg-amber-300 " style={{ width: hojaWidth * escala, height: hojaHeight * escala }}>
                        <Etiqueta />
                       
                     
                        
                        
                        
                       
                       
                       
                      
                       
                        
                        
                        
                       

                    </div>
                </div>


            </div>






        </>
    )
}