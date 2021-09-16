// test ( 'debe de dar true', ()=>{
//    const isActive =true;
//    if (isActive){
//        throw new Error ('No está activo')
//    }

// })
describe('Pruebas en el archivo demo.test.js', () => {
 
    test ( 'deben ser iguales los string', ()=>{
        //1 inicialoizacion
        const mensaje  = "Hola mundo";
        // 2.estimulo 
        const mensaje2 = `Hola mundo`;
        //3 observar el comportamiento
        expect(mensaje).toBe (mensaje2)
        

    })   

})