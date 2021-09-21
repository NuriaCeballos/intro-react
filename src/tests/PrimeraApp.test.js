// import '@testing-library/jest-dom/extend-expect'
// import {render} from '@testing-library/react';
import React from 'react';
import {shallow} from 'enzyme'

import PrimeraApp from '../PrimeraApp'
import '@testing-library/jest-dom'
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import {createSerializer} from 'enzyme-to-json';





describe('Pruebas en <PrimeraApp/>', () => {

    // test ( 'debe demostrar el mensaje  "Hola, Soy Nuria" ',()=>{
    //const saludo = 'Hola, soy Nuria';
    //const {getByText} = render(<PrimeraApp saludo ={saludo} />)// se destructura wrapper
    // // para sacar getByText
    //// wrapper.getByText()
     //expect( getByText(saludo )).toBeInTheDocument();
    // })

    //**** test con enzyme**** ///////*/

    test ( 'debe de mostrar <PrimeraApp /> correctament', ()=>{
        

        const saludo = 'Hola, soy Nuria'
        const wrapper = shallow(<PrimeraApp saludo = { saludo } />)

        expect (wrapper).toMatchSnapshot()
    
    })

    test ( 'debe de mostrar el suntitulo envisado por props', ()=>{

        const saludo = 'Hola, soy Nuria';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp 
            saludo = {saludo }
            subtitulo = {subTitulo}
            />);

         const textoParrafo = wrapper.find('p').text()  
        //  console.log(textoParrafo);
        
        expect(textoParrafo).toBe(subTitulo)
    
    })
    
})
