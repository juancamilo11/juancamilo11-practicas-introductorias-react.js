import React from 'react';
import { Fragment } from 'react';

const ComponenteProps = (props) => {
    return (
        <Fragment>
            <h3>{props.nombre}</h3>
            <h3>{props.edad}</h3>
            <h3>{props.casado ? 'Casado':'Soltero'}</h3>
        </Fragment>
    );
}
 
export default ComponenteProps;