import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";  
import { EtiquetaContext } from "./etiquetaContext";

export const EtiquetaProvider = ({ children }) => {
    const [titulo, setTitulo] = useState("");
    const [codigo, setCodigo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [etiquetas, setEtiquetas] = useState([]);

    // Agregar etiqueta con id único
    const agregarEtiqueta = (etiqueta) => {
        const nuevaEtiqueta = { ...etiqueta, id: uuidv4() };
        setEtiquetas((prev) => [...prev, nuevaEtiqueta]);
    };

    // Borrar etiqueta por id
    const borrarEtiqueta = (id) => {
        setEtiquetas((prev) => prev.filter((etiqueta) => etiqueta.id !== id));
    };

    // Duplicar etiqueta por id
    const duplicarEtiqueta = (id) => {
        const etiquetaOriginal = etiquetas.find((etiqueta) => etiqueta.id === id);
        if (!etiquetaOriginal) return;

        const etiquetaDuplicada = {
            ...etiquetaOriginal,
            id: uuidv4(), 
            codigo: etiquetaOriginal.codigo , 
        };
        setEtiquetas((prev) => [...prev, etiquetaDuplicada]);
    };

    return (
        <EtiquetaContext.Provider
            value={{
                titulo,
                setTitulo,
                codigo,
                setCodigo,
                descripcion,
                setDescripcion,
                precio,
                setPrecio,
                etiquetas,
                setEtiquetas,
                agregarEtiqueta,
                borrarEtiqueta,
                duplicarEtiqueta,
            }}
        >
            {children}
        </EtiquetaContext.Provider>
    );
};
