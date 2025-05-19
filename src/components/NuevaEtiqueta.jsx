import { useContext } from "react"
import { EtiquetaContext } from "../context/etiquetaContext"
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";


export const NuevaEtiqueta = ({ titulo, codigo, descripcion, precio, escalaTexto, id, borrarEtiqueta,
    duplicarEtiqueta }) => {
    const estiloTexto = {
        titulo: { fontSize: `${0.5 * escalaTexto}em` },
        codigo: { fontSize: `${0.5 * escalaTexto}em` },
        descripcion: { fontSize: `${0.5 * escalaTexto}em` },
        precio: { fontSize: `${0.6 * escalaTexto}em` },
    };

    return (
        <div className="relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button className=" bg-blue-200 p-1 rounded-full hover:bg-blue-400 transition duration-300"
                onClick={() => {
                        duplicarEtiqueta(id);
                    }}>
                    <FaRegCopy className="text-gray-600" 
                    />
                </button>
                <button className="a bg-red-200 p-1 rounded-full hover:bg-red-400 transition duration-300"
                    onClick={() => {
                        borrarEtiqueta(id);
                    }}>
                    <MdOutlineDelete className="text-gray-600" />
                </button>
            </div>

            <div className="flex flex-col gap-0 border-1 border-gray-600 pb-1 bg-white " style={{ width: "100%", height: "100%" }}>
                <div className="flex flex-col justify-center items-center gap-0" style={{ width: "100%", height: "100%" }}>
                    <p className="uppercase font-black text-center " style={estiloTexto.titulo}>{titulo}</p>
                    <p className="uppercase font-medium" style={estiloTexto.codigo}>Código: {codigo}</p>
                    <p className="font-medium text-center" style={estiloTexto.descripcion}>{descripcion}</p>
                </div>

                {precio.trim() && (<p className="font-black text-end mr-1" style={estiloTexto.precio}>${precio}</p>)}
                {/* si precio existe entonces muestra ese p */}
            </div>
        </div>
    );
}
