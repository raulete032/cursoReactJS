import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ContactoB = (estado) => {

    //const [variable, metodo para actualizar]= useState(valor inicial);
    const [conectado, setConectado]= useState(estado);

    const conectarDesconectar= ()=>{
         setConectado(!conectado);
    }

    return (
        <div>
            <p>Conectado: {conectado?'En linea':'No disponible' } </p>
            <button onClick={conectarDesconectar}>{ conectado?'Desconectar':'Conectar' }</button>
        </div>
    );
};


ContactoB.propTypes = {
    estado: PropTypes.bool,
};


export default ContactoB;
