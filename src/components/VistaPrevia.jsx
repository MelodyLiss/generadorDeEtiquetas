import React, { useContext, useState, useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { FcFinePrint } from "react-icons/fc";
import { FaPrint } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { EtiquetaContext } from '../context/etiquetaContext'
import { NuevaEtiqueta } from './NuevaEtiqueta'
import { distribucionGrid } from '../utils/distribuicionGrid';
import { dividirPaginas } from '../utils/dividirPaginas';
import { ImpresionPagina } from './ImpresionPagina';




export const VistaPrevia = () => {


    const { etiquetas, borrarEtiqueta, duplicarEtiqueta } = useContext(EtiquetaContext);


    const [tipoHojaSeleccionada, setTipoHojaSeleccionada] = useState("a4");
    const [orientacionHoja, setOrientacionHoja] = useState("vertical");
    const [etiquetasPorHoja, setEtiquetasPorHoja] = useState(1);
    const [escalaHoja, setEscalaHoja] = useState(0.3);

    /* Tamaño de la hoja */
    const tamaños = {
        a4: { width: 793.8, height: 1122.6 },
        carta: { width: 816, height: 1056 },
        oficio: { width: 816, height: 1344 },
    };
    const { width, height } = tamaños[tipoHojaSeleccionada];

    /* Ajuste por orientación */
    const hojaWidth = orientacionHoja === "vertical" ? width : height; //si es verdadero queda asi
    const hojaHeight = orientacionHoja === "vertical" ? height : width; // si vertical es falso queda asi

    /* Distribución de etiquetas */
    const { styleGrid, escalaTexto: escalaTextoBase } = distribucionGrid(Number(etiquetasPorHoja), orientacionHoja);
    const escalaTexto = escalaTextoBase * (escalaHoja / 0.3); // Ajustamos la escala del texto proporcionalmente

    /* Dividir etiquetas en páginas */
    const [paginaActual, setPaginaActual] = useState(0);
    const paginas = dividirPaginas(etiquetas, Number(etiquetasPorHoja));
    const totalPaginas = paginas.length;
    const etiquetasPagina = paginas[paginaActual] || [];

    const printRef = useRef(null)

    /* Función especial para imprimir */
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        onBeforeGetContent: () => {
            return new Promise((resolve) => {
                setEscalaHoja(1);
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
        },
        onAfterPrint: () => {
            setEscalaHoja(0.3);
        },
        pageStyle: `
            @page {
                size: ${tipoHojaSeleccionada} ${orientacionHoja};
                margin: 0;
            }
            @media print {
                body {
                    margin: 0;
                    padding: 0;
                }
                div {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
                @page {
                    margin: 0;
                    padding: 0;
                }
            }
        `,
        documentTitle: 'Etiquetas',
        removeAfterPrint: true
    });

    // Función para manejar el clic en imprimir
    const handleImprimir = () => {
        handlePrint();
    };

    useEffect(() => {
        setPaginaActual(0);
    }, [etiquetasPorHoja]);



    return (
        <div className="display flex flex-col justify-center items-center">

            <h2 className=" text-lg uppercase my-2 font-medium">Vista previa impresión <FcFinePrint className="inline-block align-middle text-xl ml-1" />
            </h2>
            <div className="flex  gap-10 mb-5">
                <div className="flex flex-col">
                    <label className="text-lg font-bold">Tipo de hoja:</label>
                    <select className="p-2 border rounded"
                        value={tipoHojaSeleccionada}
                        onChange={(e) => setTipoHojaSeleccionada(e.target.value)}>
                        <option value="a4">A4</option>
                        <option value="carta">Carta</option>
                        <option value="oficio">Oficio</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-bold">Orientación:</label>
                    <select className="p-2 border rounded"
                        value={orientacionHoja}
                        onChange={(e) => setOrientacionHoja(e.target.value)}>
                        <option value="vertical">Vertical</option>
                        <option value="horizontal">Horizontal</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-bold">Etiquetas x hoja</label>
                    <select className="p-2 border rounded text-center"
                        value={etiquetasPorHoja}
                        onChange={(e) => setEtiquetasPorHoja(e.target.value)}
                    >
                        <option value="1">1 por hoja</option>
                        <option value="2">2 por hoja</option>
                        <option value="3">3 por hoja</option>
                        <option value="4">4 por hoja</option>
                        <option value="5">5 por hoja</option>
                        <option value="6">6 por hoja</option>
                        <option value="8">8 por hoja</option>
                        <option value="9">9 por hoja</option>
                        <option value="12">12 por hoja</option>
                        <option value="15">15 por hoja</option>
                        <option value="16">16 por hoja</option>
                        <option value="20">20 por hoja</option>
                        <option value="25">25 por hoja</option>

                    </select>
                </div>
            </div>

            {/* Contenedor principal con ref para impresión */}
            <div ref={printRef}>
                {/* Vista previa normal */}
                <div className="print:hidden">
                    <ImpresionPagina
                        etiquetasPagina={etiquetasPagina}
                        styleGrid={styleGrid}
                        escalaTexto={escalaTexto}
                        hojaWidth={hojaWidth}
                        hojaHeight={hojaHeight}
                        escalaHoja={escalaHoja}
                        borrarEtiqueta={borrarEtiqueta}
                        duplicarEtiqueta={duplicarEtiqueta}
                    />
                </div>

                {/* Versión para impresión que muestra todas las páginas */}
                <div className="hidden print:block">
                    {paginas.map((etiquetasPagina, index) => (
                        <div key={index} className="mb-4">
                            <ImpresionPagina
                                etiquetasPagina={etiquetasPagina}
                                styleGrid={styleGrid}
                                escalaTexto={escalaTexto}
                                hojaWidth={hojaWidth}
                                hojaHeight={hojaHeight}
                                escalaHoja={escalaHoja}
                                borrarEtiqueta={borrarEtiqueta}
                                duplicarEtiqueta={duplicarEtiqueta}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="print:hidden">
                <div className="flex justify-between mt-2">
                    <button
                        onClick={() => setPaginaActual(prev => Math.max(prev - 1, 0))}
                        disabled={paginaActual === 0}
                    >
                        <FaArrowCircleLeft className={`text-2xl ${paginaActual === 0 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-800'}`} />
                    </button>

                    <button
                        onClick={() => setPaginaActual(prev => Math.min(prev + 1, paginas.length - 1))}
                        disabled={paginaActual === paginas.length - 1}
                    >
                        <FaArrowCircleRight className={`text-2xl ${paginaActual === paginas.length - 1 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-800'}`} />
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                    Página {paginaActual + 1} de {paginas.length}
                </p>
            </div>

            <div className="print:hidden">
                <button className='flex justify-center items-center bg-blue-200 hover:bg-blue-400 hover:text-white transition duration-300 rounded-lg p-2 mt-5'
                    onClick={handleImprimir}
                >
                    <FaPrint className='mr-2' />Imprimir
                </button>
            </div>

        </div>
    );
}
