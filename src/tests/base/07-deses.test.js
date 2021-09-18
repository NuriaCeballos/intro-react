import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas 07-deses.test.js', () => {
    test ( 'retornaArreglo debe retornar un string y un número', ()=>{

        const [letras,numeros] = retornaArreglo()

        expect(letras).toBe ('ABC')
        expect (typeof letras).toEqual('string')

        expect ( numeros ).toBe (123)
        expect ( typeof numeros ).toEqual ('number')
    
    })
    
})
