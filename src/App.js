import React from 'react';
import HolaMundoComponente from './components/HolaMundoComponente.jsx';
import ComponenteClase from './components/ComponenteClase';
import ComponenteFuncion from './components/ComponenteFuncion.jsx';
import ComponenteFuncion2 from './components/ComponenteFuncion2.jsx';
import CompFuncionProps from './components/CompFuncionProps.jsx';
import CompFuncionProps2 from './components/CompFuncionProps2.jsx';
import ComponenteProps from './components/ComponenteProps.jsx';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <HolaMundoComponente />
      <hr />
      <ComponenteClase mensaje='Esto es un mensaje enviado en las props'/>
      <hr />
      <ComponenteFuncion />
      <hr />
      <ComponenteFuncion2 />
      <hr />
      <CompFuncionProps mensaje='Esto es un mensaje enviado en las props a un componente funcion declarada' />
      <hr />
      <CompFuncionProps2 mensaje='Esto es un mensaje enviado en las props a un componente funcion expresada' />
      <hr />  
      <ComponenteProps 
        nombre='Juan Camilo Cardona' 
        edad={22} 
        casado={false}
        arrNums={[1,2,3,4,5]}
        contacto= {{nombre: 'Juan',telefono:'311235645'}}
        elevarCuadrado = {(num) => num * num }
        componenteReact ={<CompFuncionProps mensaje='Hola soy un componente pasado como props'/>}
      />
      <hr /> 
    </Fragment>
  );
}

export default App;
