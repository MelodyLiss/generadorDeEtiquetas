import { useState } from "react";
import { Etiqueta } from "../components/Etiqueta.jsx";
import { VistaEtiqueta } from "../components/VistaEtiqueta.jsx";

export const Home = () => {
    const [titulo, setTitulo] = useState('')
    const [codigo, setCodigo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')

    return (
        <>
            <header>
                <h1 className="text-5xl text-center uppercase font-black p-4">Generador de Etiquetas</h1>
            </header>

            <main className="flex  justify-center  bg-gray-100 gap-20">
                <div>
                    <h2>Completa tu etiqueta</h2>
                    <Etiqueta
                        titulo={titulo}
                        setTitulo={setTitulo}
                        codigo={codigo}
                        setCodigo={setCodigo}
                        descripcion={descripcion}
                        setDescripcion={setDescripcion}
                        precio={precio}
                        setPrecio={setPrecio}
                    />
                </div>

                <div>
                    <h3>Vista previa</h3>
                    <VistaEtiqueta
                        titulo={titulo}
                        codigo={codigo}
                        descripcion={descripcion}
                        precio={precio}
                    />
                </div>

            </main>

            <footer className="text-center p-4 bg-red-500 text-amber-50 font-bold">
                <p>Generador de etiquetas creado por <a className="hover:text-black" href="https://www.linkedin.com/in/melodydev/">Melody.Dev 🍊</a></p>
            </footer>
        </>
    )
}