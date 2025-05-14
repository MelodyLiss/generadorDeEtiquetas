import React, { useState } from "react";

import { EtiquetaContext } from "./etiquetaContext";

export const EtiquetaProvider = ({ children }) => {
    const [titulo, setTitulo] = useState("");
    const [codigo, setCodigo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [escalaTexto, setEscalaTexto] = useState(3);

    return (
        <EtiquetaContext.Provider value={{ titulo,setTitulo,codigo,setCodigo,setDescripcion,descripcion, precio,setPrecio ,escalaTexto }}>
            {children}
        </EtiquetaContext.Provider>
    );
};