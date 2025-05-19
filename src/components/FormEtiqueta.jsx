import { useContext } from "react";
import { EtiquetaContext } from "../context/etiquetaContext";

export const FormEtiqueta = () => {
    // Extraer el contexto incluyendo la función agregarEtiqueta
    const {
        titulo, setTitulo,
        codigo, setCodigo,
        descripcion, setDescripcion,
        precio, setPrecio,
        agregarEtiqueta
    } = useContext(EtiquetaContext);

    // Función para agregar etiqueta
    const handleAgregar = (e) => {
        e.preventDefault();

        const nuevaEtiqueta = {
            titulo,
            codigo,
            descripcion,
            precio,
        };

        agregarEtiqueta(nuevaEtiqueta);  // Aquí usas la función del contexto

        // Limpiar campos
        setTitulo("");
        setCodigo("");
        setDescripcion("");
        setPrecio("");
    };

    return (
        <form
            onSubmit={handleAgregar}  // Manejas el submit aquí
            className="bg-amber-100 p-4 rounded-b-md shadow-md gap-2 border-2 border-gray-400 border-dashed"
        >
            {/* Título de la etiqueta */}
            <input
                type="text"
                placeholder="Título de la etiqueta"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="uppercase text-3xl font-bold w-full"
            />

            {/* Código de la etiqueta */}
            <div className="flex items-center text-2xl">
                <label htmlFor="codigo" className="text-right mr-2">
                    Código :
                </label>
                <input
                    type="text"
                    id="codigo"
                    placeholder=" Codigo"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    className=""
                />
            </div>

            {/* Descripción de la etiqueta */}
            <div className="w-full">
                <textarea
                    value={descripcion}
                    placeholder="Ingrese información adicional (opcional)"
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="text-xl w-full focus:border-blue-500 focus:outline-none resize-none group-hover:border-gray-300 transition-colors duration-300"
                    rows="3"
                    maxLength="150"
                />
            </div>

            {/* Precio de la etiqueta */}
            <div className="flex items-end justify-end ">
                <div className="text-2xl flex font-bold py-1 rounded-md ">
                    <label className="text-right" htmlFor="precio">
                        $
                    </label>
                    <input
                        type="number"
                        id="precio"
                        placeholder=" Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        className="w-24 text-right"
                    />
                </div>
            </div>

            {/* Botón de generar etiqueta */}
            <button
                disabled={!titulo || !codigo}
                type="submit"  // mejor usar submit para el form
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 hover:cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
                Agregar etiqueta
            </button>
        </form>
    );
};
