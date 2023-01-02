import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/taskListComponent';
import ContactoA from './components/container/contactoA';
import { Contacto } from './models/contacto.class';

function App() {

  const contactoPrueba= new Contacto('Raul', 'Carneros', 'rcr_032@hotmail.com', false);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx */}
        {/* <Greeting name={'Raúl'}></Greeting> */}

        {/**Componente de ejemplo funcional */}
        {/* <GreetingF name={'Raúl'}></GreetingF> */}

        {/**Componente de listado de Tareas */}
        
        {/* <TaskListComponent></TaskListComponent> */}

        <ContactoA contacto={contactoPrueba}></ContactoA>
        

      </header>
    </div>
  );
}

export default App;
