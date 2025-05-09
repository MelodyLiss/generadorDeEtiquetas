import { useState } from "react"


export const Etiqueta = ({titulo, setTitulo, codigo, setCodigo, descripcion, setDescripcion, precio, setPrecio}) => {


    

    return (
        <form onSubmit={(e) => e.preventDefault()} action="" className="bg-amber-100 p-4 rounded-md shadow-md gap-2">

            {/* Titulo de la etiqueta */}
            <input type="text"
                placeholder="Titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="uppercase text-3xl font-bold w-full "
            />

            {/* Codigo de la etiqueta */}
            <div className="flex  items-center text-2xl">
                <label
                    htmlFor="codigo"
                    className="text-right mr-2"
                >código : </label>
                <input type="text"
                    id="codigo"
                    placeholder=" Codigo"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    className=""
                />
            </div>

            {/* Descripcion de la etiqueta */}
            <div className="w-full">
                <textarea

                    value={descripcion}
                    placeholder="Ingrese información adicional (máximo 3 líneas)"
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="text-xl  w-full   focus:border-blue-500 focus:outline-none resize-none group-hover:border-gray-300 transition-colors duration-300"
                    rows="3"
                    maxLength="150"
                />
            </div>

            {/* Precio de la etiqueta */}
            <div className="flex items-end justify-end ">
                <div className="text-2xl flex font-bold  py-1 rounded-md ">
                    <label className="text-right" htmlFor="precio">$</label>
                    <input type="number"
                        id="precio"
                        placeholder=" Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        className="w-24 text-right"
                    />
                </div>
            </div>

            {/* Boton de generar etiqueta */}
            <button
                type="button"
                disabled={!titulo || !codigo}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Agregar etiqueta
            </button>


            



        </form>
    )
}