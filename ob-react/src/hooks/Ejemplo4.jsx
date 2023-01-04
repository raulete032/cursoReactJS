/**
 * Ejemplo para enteder el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS *** </h1>
            <h2>
                Nombre: {props.nombre}
                {/**Props.children pintará por defecto
                aquello que se encuentre entre las etiquetas de apertura y cierre
                de este componente desde el componente de orden superior */}
                {props.children}
            </h2>
        </div>
    );
}

export default Ejemplo4;


