import React from 'react';
import { Fragment } from 'react';

const ComponenteProps = (props) => {
    return (
        <Fragment>
            <h3>{props.nombre}</h3>
            <h3>{props.edad}</h3>
            <h3>{props.casado ? 'Casado':'Soltero'}</h3>
            <h3>{props.arrNums.join(', ')}</h3>
            <h3>{props.contacto.nombre}</h3>
            <h3>{props.contacto.telefono}</h3>
            <h3>{props.arrNums.map(props.elevarCuadrado).join(', ')}</h3>
            <div>{props.componenteReact}</div>
        </Fragment>
    );
}
 
export default ComponenteProps;