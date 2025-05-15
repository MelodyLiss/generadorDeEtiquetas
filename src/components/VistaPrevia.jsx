import React, { useContext, useState} from 'react'
import { FcFinePrint } from "react-icons/fc";
import { EtiquetaContext } from '../context/etiquetaContext'
import { NuevaEtiqueta } from './NuevaEtiqueta'
import { distribucionGrid } from '../utils/distribuicionGrid';



export const VistaPrevia = () => {



    const { etiquetas, borrarEtiqueta, duplicarEtiqueta } = useContext(EtiquetaContext);


    const escalaVista = 0.3; // Escala para vista previa
    const [tipoHojaSeleccionada, setTipoHojaSeleccionada] = useState("a4");
    const [orientacionHoja, setOrientacionHoja] = useState("vertical");
    const [etiquetasPorHoja, setEtiquetasPorHoja] = useState(1);

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
    const { styleGrid, escalaTexto } = distribucionGrid(Number(etiquetasPorHoja), orientacionHoja);

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
                        <option value="7">7 por hoja</option>
                        <option value="8">8 por hoja</option>
                        <option value="9">9 por hoja</option>
                        <option value="10">10 por hoja</option>
                        <option value="11">11 por hoja</option>
                        <option value="12">12 por hoja</option>

                    </select>
                </div>
            </div>

            <div>


                <div className={`bg-gray-200   rounded-lg grid ${styleGrid} gap-0`} style={{ width: hojaWidth * escalaVista, height: hojaHeight * escalaVista }}>

                    {etiquetas.map((etiqueta) => (
                        <NuevaEtiqueta
                            key={etiqueta.id}
                            escalaTexto={escalaTexto}
                            {...etiqueta}
                            borrarEtiqueta={borrarEtiqueta}   
                            duplicarEtiqueta={duplicarEtiqueta}   
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
