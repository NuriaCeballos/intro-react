import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp'
import '@testing-library/jest-dom'


describe('pruebas en <CounterApp/>', () => {

    let wrapper = shallow(<CounterApp />);//e valor del wrapper en este punto puede ser undefined pero se pierde
    // el inteligence de visual studio porque no reconoce las propiedades del wrapper pero se podria dejar 
    // así, let wrapper; solo inicializado

    beforeEach(()=>{    /// el beforeEach hace que se reinicialice el wrapper en cada test
         wrapper = shallow(<CounterApp />);

    })

    test ( 'debe mostrar snapshop con sus valores por defecto', ()=>{
    
       
        //aqui iria el wrapper pero como esta global no hace falta pornerlo aquí

        expect (wrapper) .toMatchSnapshot()   // aqui decimos que wrapper  coincida con el snapshot                      
    })
    test ( 'debe de mostrar 100 de valor por defecto', ()=>{

       
        const wrapper = shallow(<CounterApp value = {100} />)

        const valorDefecto = wrapper.find('h2').text ().trim()

        expect (valorDefecto).toBe('100')
    
    })

    test ( 'debe incrementar con el botón +1', ()=>{

        // aqui iria el wrapper pero como esta global no hace falta pornerlo aquí

        //    const btn1=  no es necesario crear la constate 
           wrapper. find ('button').at(0).simulate('click')
        // así seleccionamos el primer boton 
        //    console.log(btn1.html());

        const valorDefecto = wrapper.find('h2').text ().trim()

        expect (valorDefecto).toBe('11')
    
    })
    test ( 'debe restar con el botón -1', ()=>{
       

                 wrapper. find ('button').at(2).simulate('click');
                 const valorDefecto = wrapper.find('h2').text ().trim();

                 expect (valorDefecto).toBe('9');
    
    })

    // para el botón de reset debemos comprobar que al pulsar el boton el valor vuelve al que se le dio en los props
        test ( 'debe de poner valor por defecto al pulsar el reset', ()=>{

            const wrapper = shallow(<CounterApp value = {105} />)

            wrapper. find ('button').at(0).simulate('click')
            wrapper. find ('button').at(1).simulate('click')
            const valorDefecto = wrapper.find('h2').text ().trim()

            expect (valorDefecto).toBe('105')

        
        })
    
})
