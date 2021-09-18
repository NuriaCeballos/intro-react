import '@testing-library/jest-dom';// es para que salga la ayuda con los metodos del expect
// a mi no me sale esa ayuda

import { getSaludo } from '../../base/02-template-string'

describe('pruebas en 02-template-string.js', () => {
    test ( 'getSaludo debe de retornar Hola Nuria', ()=>{

      const nombre ='Nuria';  

       const saludo = getSaludo(nombre);
       

       expect (saludo). toBe('Hola ' + nombre + '!');
    
    })

    //ejercicio: getSaludo debe devolver Hola Carlos! si no se manda argumento

    test ( 'getSaludo debe devolver Hola Carlos! sin no se manda argumento', ()=>{

            const nombre = "Carlos"
            const saludo = getSaludo ();

            expect (saludo). toBe ('Hola ' + nombre + '!')
    
    })


    
})
