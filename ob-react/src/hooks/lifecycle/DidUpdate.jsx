/**
 * Ejemplo de uso de metódo componentDidUpdate en componente clase
 * y uso de hook en componente funcional
 */


import React, { Component, useEffect } from 'react';


/**COMPONENTE CLASS */
export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}



/**COMPONENTE FUNCIÓN */
export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambia en su estado privado');
    }); /**Cada vez que se haya un cambio, se ejecutará */

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}



