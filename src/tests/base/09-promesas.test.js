import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";
// se usa done porque es asincrono hay que llamarlo siempre debajo del expect
describe('pruebas con promesas', () => {
    test ( 'getHeroeByIdAsync debe retornar un Heroe async', (done)=>{
        const id = 2;
        getHeroeByIdAsync (id)

        .then (heroe =>{
            expect (heroe).toBe(heroes[1])
            done();
        })
    });
    
    test ( 'debe de obtener un error cuande el id del heroe no existe', (done)=>{
        
        const id =10;
        getHeroeByIdAsync(id)
        .catch(error =>{

            expect ( error ).toBe('No se pudo encontrar el héroe')
            done()
        })
    
    });
})
