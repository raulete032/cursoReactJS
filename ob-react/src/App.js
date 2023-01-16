import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/taskListComponent';
import ContactoA from './components/container/contactoA';
import { Contacto } from './models/contacto.class';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  
  const contactoPrueba= new Contacto('Raúl', 'Carneros Rodríguez', 'rcr@hotmail.comm', false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/**Componente propio Greeting.jsx */}
        {/* <Greeting name={'Raúl'}></Greeting> */}
        {/* <GreetingF name={'Raúl'}></GreetingF> */}
        
        {/**Componente de ejemplo funcional */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* <ContactoA contacto={contactoPrueba}></ContactoA> */}

        {/**Ejemplo de HOOKS */}

        {/* <Ejemplo1></Ejemplo1> */}


        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        
        {/* <Ejemplo4 nombre='Raúl'> */}
        {/** Todo lo que hay aquí, es tratado como props.children  */}
          {/* <h3>Contenido del props.children</h3>
          <p>Hola mundo</p>
        </Ejemplo4> */}
 

        <GreetingStyled name={'Raúl'}></GreetingStyled>
        
      </header>
    </div>
  );
}

export default App;
