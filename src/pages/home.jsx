import { FormEtiqueta } from "../components/FormEtiqueta.jsx";
import { NuevaEtiqueta } from "../components/NuevaEtiqueta.jsx";
import { useContext } from "react"
import { EtiquetaContext } from "../context/etiquetaContext.js"
import { VistaPrevia } from "../components/VistaPrevia.jsx";

export const Home = (children) => {
    // Extraer el contexto
    


    return (
        <>
            <header>
                <h1 className="text-5xl text-center uppercase font-black p-4">Generador de Etiquetas</h1>
            </header>

            <main className="flex justify-center  bg-gray-100 gap-20">
                {/* Generador de etiqueta */}
                <div className="flex flex-col justify-center  gap-0 my-8">
                    <h2 className="text-center font-bold text-xl bg-red-400 p-2 text-white rounded-t-2xl">Ingresa los datos de la etiqueta</h2>
                    <FormEtiqueta />

                    <p className="text-center p-2 text-sm font-stretch-ultra-expanded">Solo los campos de título y código son obligatorios </p>
                </div>

                {/* Vista previa de la etiqueta */}
                <VistaPrevia/>



            </main>

            <footer className="text-center p-4 bg-red-500 text-amber-50 font-bold">
                <p>Generador de etiquetas creado por <a className="hover:text-black" href="https://www.linkedin.com/in/melodydev/">Melody.Dev 🍊</a></p>
            </footer>

        </>
    );
};
