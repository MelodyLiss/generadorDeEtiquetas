import { FormEtiqueta } from "../components/FormEtiqueta.jsx";
import { EtiquetaProvider } from "../context/EtiquetaProvider.jsx";

export const Home = () => {
    

    return (
        <EtiquetaProvider>
            <header>
                <h1 className="text-5xl text-center uppercase font-black p-4">Generador de Etiquetas</h1>
            </header>

            <main className="flex justify-center bg-gray-100 gap-20">
                {/* Generador de etiqueta */}
                <div>
                    <h2>Completa tu etiqueta</h2>
                    <FormEtiqueta />
                </div>
                {/* Vista previa de la etiqueta */}
                <div>

                </div>



            </main>

            <footer className="text-center p-4 bg-red-500 text-amber-50 font-bold">
                <p>Generador de etiquetas creado por <a className="hover:text-black" href="https://www.linkedin.com/in/melodydev/">Melody.Dev 🍊</a></p>
            </footer>

        </EtiquetaProvider>
    );
};
