/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        /**
            Todo lo que tenga que ser un proceso asíncrono previo a que se monte el componente
         * se hará aquí dentro
         */
        console.log('Comportamiento antes de que el componente sea añadido al DOOM (renderice)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}









export const DidMountHook = () => {


    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOOM (renderice)');
        
    }, []); /**Al poner solo un array vacío se ejecuta SOLO una vez */


    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

export default DidMount;


