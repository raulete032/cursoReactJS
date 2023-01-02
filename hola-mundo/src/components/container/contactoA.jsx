import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoB from '../pure/contactoB';

const ContactoA = ( { contacto }) => {
    return (
        <div>
            <p>Nombre: { contacto.nombre }</p>
            <p>Apellido: { contacto.apellido }</p>
            <p>Email: { contacto.email }</p>
            <ContactoB estado={contacto.conectado}></ContactoB>
            
        </div>
    );
};


ContactoA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};


export default ContactoA;
