// FC funtional components
//import React, { Fragment } from 'react'; // sin importarlo no me da error
import React from 'react';
import PropTypes from 'prop-types'; //sirve para que obligar a mandar las props


const PrimeraApp=({saludo,subtitulo})=>{

  

    return(
        <>
        <h1> { saludo } </h1>
        {/* <pre>{ JSON.stringify(saludo) }</pre> */}
        <p> { subtitulo } </p>
        </>
    );

}

PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired// con esto obligamos a 
    //mandar la porperty
}
PrimeraApp.defaultProps = {
    subtitulo: "Soy el subtitulo"
}
export default PrimeraApp;