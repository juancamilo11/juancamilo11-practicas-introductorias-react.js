import React from 'react';
import HolaMundoComponente from './components/HolaMundoComponente.jsx';
import ComponentClase from './components/ComponenteClase';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <HolaMundoComponente />
      <ComponentClase mensaje='Esto es un mensaje enviado en las props'/>
    </Fragment>
  );
}

export default App;
