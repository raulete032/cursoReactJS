import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    /**Breve introducción a useState */
    //const [variable, metodo para actualizar]= useState(valor inicial);

    const [age, setAge] = useState(29);

    const birthday= ()=>{
        //Actualiza el State
        setAge(age + 1);
    }

    return (
        <div>
                <h1>
                    HOLA {props.name} desde componente funcional!
                </h1>
                <h2>Tu edad es de: {age}</h2>

                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
    );
};




GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
