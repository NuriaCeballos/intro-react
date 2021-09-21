import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp'
import '@testing-library/jest-dom'


describe('pruebas en <CounterApp/>', () => {

    test ( 'debe mostrar snapshop con sus valores por defecto', ()=>{
    
       
        const wrapper = shallow(<CounterApp />) // aqui decimos que wrapper 

        expect (wrapper) .toMatchSnapshot() // coincida con el snapshot
    })
    test ( 'debe de mostrar 100 de valor por defecto', ()=>{

       
        const wrapper = shallow(<CounterApp value = {100} />)

        const valorDefecto = wrapper.find('h2').text ().trim()

        expect (valorDefecto).toBe('100')
    
    })
    
    
})
