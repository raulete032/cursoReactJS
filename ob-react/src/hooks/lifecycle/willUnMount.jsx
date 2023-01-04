/**
 * Ejemplo de uso del método componenteWillUnmount para componente clase
 * Ejemplo de uso de hooks para el componente funcional
 * (Cuando el componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillMount</h1>
            </div>
        );
    }
}



export const WillUnMountHook = () => {

    useEffect(() => {
        // aquí no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []); /**Solo se ejecuta una vez */


    return (
        <div>
            <h1>WillMount</h1>
        </div>
    );
}


