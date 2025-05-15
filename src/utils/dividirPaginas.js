export const dividirPaginas = (etiquetas, etiquetasPorHoja) => {
    const paginas = [];
    let paginaActual = [];

    // Recorre las etiquetas y las divide en páginas 
    for (let i = 0; i < etiquetas.length; i++) {
        paginaActual.push(etiquetas[i]);

        if (paginaActual.length === etiquetasPorHoja) {
            paginas.push(paginaActual);
            paginaActual = [];
        }
    }
    // Si quedan etiquetas en la última página, añádelas
    if (paginaActual.length > 0) {
        paginas.push(paginaActual);
    }

    return paginas;
};
