/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */


import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores distintos
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(10);

    /**
     * Vamos a crear una referencai con useRef() para asociar una variable
     * con un elemento del DOM del componente (vista)
     */

    const miRef= useRef();

    function incrementar1(){
        setContador1(contador1+1);

    }


    function incrementar2(){
        setContador2(contador2+1);

    }

    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso1: Ejecutar SIEMPRE un snippet de código
     * Cada Vez que hay un cambio en el estado del componente 
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE (SIEMPRE)');
    //     console.log('Mostrndo Referencia a elemento del DOM: ');
    //     console.log(miRef);
    // });


    /**
     * ?Caso 2: Ejecutar SOLO cuando cambie contador1 
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect
     * En caso de que cambie contador2, NO se ejecuta lo que diga el useEffect
     */

    useEffect(()=>{
        console.log('CAMBIO EN  ESTADO DEL CONTADOR 1');
        console.log('Mostrndo Referencia a elemento del DOM: ');
        console.log(miRef);
    }, [contador1]);

    /**
     * ?Caso 3: Ejecutar SOLO cuando cambie contador1 o contador2
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect
     * Cada vez que haya un cambio en contador2, se ejecuta lo que diga el useEffect
     * Si hubiera otro, y ese cambiase, NO se ejecutaría lo que diga el useEffect
     */

    // useEffect(()=>{
    //     console.log('CAMBIO EN  ESTADO DEL CONTADOR 1 o CONTADOR 2');
    //     console.log('Mostrndo Referencia a elemento del DOM: ');
    //     console.log(miRef);
    // }, [contador1, contador2]);

    return (
        <div>
            <h3>*** Ejemplo de useState(), useRef() y useEffect() ***</h3>
            <p>CONTADOR 1: {contador1}</p>
            <p>CONTADOR 2: {contador2}</p>

            {/*Elemento referenciado*/}
            <p ref={miRef}>
                Ejemplo de elemento referenciado
            </p>

            <div>
                {/**Botones para camibar los contadores */}
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
            
        </div>
    );
}

export default Ejemplo2;


