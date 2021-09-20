import React from 'react';
import {render} from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom/extend-expect'




describe('Pruebas en <PrimeraApp/>', () => {

    test ( 'debe demostrar el mensaje  "Hola, Soy Nuria" ',()=>{

        const saludo = 'Hola, soy Nuria';
        
        const {getByText} = render(<PrimeraApp saludo ={saludo} />)// se destructura wrapper
        // para sacar getByText

        // wrapper.getByText()

        expect( getByText(saludo )).toBeInTheDocument();

    
    })
    
})
