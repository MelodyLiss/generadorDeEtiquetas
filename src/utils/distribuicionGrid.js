

export const distribucionGrid = (etiquetasPorHoja, orientacionHoja) => {

    if (orientacionHoja === "vertical") {
        switch (etiquetasPorHoja) {
            case 1:
                return {
                    styleGrid: "grid-cols-1 grid-rows-1",
                    escalaTexto: 3.5,
                };
            case 2:
                return {
                    styleGrid: " grid-cols-1 grid-rows-2",
                    escalaTexto: 2.3,
                };
            case 3:
                return {
                    styleGrid: " grid-cols-1 grid-rows-3",
                    escalaTexto: 1.5,
                };
            case 4:
                return {
                    styleGrid: " grid-cols-1 grid-rows-4",
                    escalaTexto: 1.5,
                };
            case 5:
                return {
                    styleGrid: "grid-cols-1 grid-rows-5",
                    escalaTexto: 1.2,
                };
            case 6:
                return {
                    styleGrid: "grid-cols-2 grid-rows-3",
                    escalaTexto: 1.2,
                };
            case 7:
                return {
                    styleGrid: "grid-cols-2 grid-rows-4",
                    escalaTexto: 1.1,
                };
            case 8:
                return {
                    styleGrid: "grid-cols-2 grid-rows-4",
                    escalaTexto: 1.1,
                };
            case 9:
                return {
                    styleGrid: "grid-cols-3 grid-rows-3",
                    escalaTexto: 1,
                };
            case 10:
                return {
                    styleGrid: "grid-cols-2 grid-rows-5",
                    escalaTexto: 1,
                };
            case 15:
                return {
                    styleGrid: "grid-cols-3 grid-rows-5",
                    escalaTexto: 1,
                };
            case 16:
                return {
                    styleGrid: "grid-cols-4 grid-rows-4",
                    escalaTexto: 1,
                };
            case 20:
                return {
                    styleGrid: "grid-cols-4 grid-rows-5",
                    escalaTexto: 1
                };
            case 24:
                return {
                    styleGrid: "grid-cols-5 grid-rows-5",
                    escalaTexto: 1,
                };

            default:
                return {
                    styleGrid: " grid-cols-2 grid-rows-6 ",
                    escalaTexto: 1,
                };
        }
    } else {
        switch (etiquetasPorHoja) {
            case 1:
                return {
                    styleGrid: "grid-cols-1 grid-rows-1",
                    escalaTexto: 4,
                };
            case 2:
                return {
                    styleGrid: " grid-cols-2 grid-rows-1",
                    escalaTexto: 2.3,
                };
            case 3:
                return {
                    styleGrid: " grid-cols-1 grid-rows-3",
                    escalaTexto: 1.5,
                };
            case 4:
                return {
                    styleGrid: " grid-cols-2 grid-rows-2",
                    escalaTexto: 1.5,
                };
            case 5:
                return {
                    styleGrid: "grid-cols-3 grid-rows-2",
                    escalaTexto: 1.2,
                };
            case 6:
                return {
                    styleGrid: "grid-cols-3 grid-rows-2",
                    escalaTexto: 1.2,
                };
            case 8:
                return {
                    styleGrid: "grid-cols-4 grid-rows-2",
                    escalaTexto: 1.1,
                };
            case 9:
                return {
                    styleGrid: "grid-cols-3 grid-rows-3",
                    escalaTexto: 1,
                };
            case 10:
                return {
                    styleGrid: "grid-cols-5 grid-rows-2",
                    escalaTexto: 1,
                };
            case 15:
                return {
                    styleGrid: "grid-cols-5 grid-rows-3",
                    escalaTexto: 1,
                };
            case 16:
                return {
                    styleGrid: "grid-cols-4 grid-rows-4",
                    escalaTexto: 1,
                };
            case 20:
                return {
                    styleGrid: "grid-cols-5 grid-rows-4",
                    escalaTexto: 1,
                };
            case 24:
                return {
                    styleGrid: "grid-cols-5 grid-rows-5",
                    escalaTexto: 1,
                };
            default:
                return {
                    styleGrid: " grid-cols-4 grid-rows-3 ",
                    escalaTexto: 1,
                };
        }

    }

}