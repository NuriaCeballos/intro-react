import React from 'react';//sin importarlo no me da error
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';
import './index.css'




const divRoot = document.querySelector('#app');


// ReactDOM.render(<PrimeraApp saludo= "Hola, Soy Nuria" />,divRoot)

ReactDOM.render(<CounterApp  />,divRoot)//1º agumento lo que quiero poner,//
// 2º arumento donde lo quiero poner