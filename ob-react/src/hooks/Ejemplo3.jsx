/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 * @returns Componente1
 */

const miContexto= React.createContext(null);

const Componente1 = () => {
    /**
     * Inicializamos un estado vacío que va a rellnerase con los
     * datos del contexto del padre
     */
    const state= useContext(miContexto);

    return (
        <div>
            <p>
                El Token es: {state.token}
            </p>
            {/**Pintamos el componente2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state= useContext(miContexto);

    return (
        <div>
            <p>
                La sesión es: {state.sesion}
            </p>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial= {
                            token:'1234567',
                            sesion: 1
    };

    /**Cremos el estado de este componente */
    const [sessionData, setSessionData] = useState(estadoInicial);


    function actualizarSesion(){

        let num= Math.round(Math.random() * (9876543210 - 12345678) + 12345678);

        setSessionData(
            {
                token: num,
                sesion: sessionData.sesion + 1
            }
        )
    }

  return (
    <miContexto.Provider value={sessionData}>
    {/**Todo lo que está aquí dentro puede leer los datos de sessionData */}
    {/**Además, si se actualiza, los componentes de aquí, también lo actualizan */}
    <p>Ejemplo de useState y useContext</p>
    <Componente1></Componente1>
    <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}

