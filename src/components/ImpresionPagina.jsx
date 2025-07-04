import { forwardRef } from 'react';
import { NuevaEtiqueta } from './NuevaEtiqueta';

export const ImpresionPagina = forwardRef(({ etiquetasPagina, styleGrid, hojaWidth, hojaHeight, escalaHoja, escalaTexto, borrarEtiqueta, duplicarEtiqueta }, ref) => {

    return (
        <div
            ref={ref}
            className={`border-2 border-gray-300 rounded-lg grid  ${styleGrid} gap-0`}
            style={{ 
                width: hojaWidth * escalaHoja, 
                height: hojaHeight * escalaHoja 
            }}
        >
            {etiquetasPagina.map((etiqueta) => (
                <div className=' flex justify-center items-center'>
                <NuevaEtiqueta
                    key={etiqueta.id}
                    escalaTexto={escalaTexto}
                    {...etiqueta}
                    borrarEtiqueta={borrarEtiqueta}
                    duplicarEtiqueta={duplicarEtiqueta}
                />
                </div>
            ))}
        </div>
    );
});