/**
 * Ejemplo deuso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado
 * privado a través de un hook y, además, poder modificarlo
 */

import React, { useState, useEffect } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial=0;

    //Valor inicial para una persona
    const personaInicial={  nombre: 'Raúl',
                            email: 'rcr@hotmail.com'
                        };

    /**
     * Queremos que el valorInicial y personaInicial sean
     * parte del estado del componente para así poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVarible, funcionParaCambiar]= useState(valorInicial)
     */
    const [contador, setContador]= useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    /****************** */

    useEffect(() => {
        document.getElementById('nombre').value='';
    }, [persona]);


    /****************** */

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador+1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){

        let nombre= document.getElementById('nombre').value;

        setPersona(
            {
                nombre: nombre,
                email: 'pepe@hotmail.com'
            }
        )
    }

    return (
        <div>
            <h3>*** Ejemplo de useState() ***</h3>
            <p>Contador: {contador}</p>
            <p>Datos persona: </p>
            <p>Nombre: {persona.nombre}</p>
            <p>Email: {persona.email}</p>
            {/**Bloque de botones para actualizar el estado del componente */}


            {/** */}
            <input id='nombre' type='text' placeholder='Nombre'></input>
            <br></br>
            {/** */}

            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>

        </div>
    );
}

export default Ejemplo1;


