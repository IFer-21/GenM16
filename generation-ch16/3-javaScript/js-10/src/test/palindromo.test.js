const palindromo = require("../js/palindromo")

describe("Prueba de la funcion palindromo",() =>{
    test("Debe regresar 'es un palindromo' si ingresamos ojo",() =>{
        let mensaje = "Es un palindromo"
        let palabra = "ojo"
        expect(palindromo(palabra) ).toBe(mensaje)
        
    })

    test('No debe regresar "no es un palindromo" al ingreasr generation', () => {
        let mensaje = "Es un palindromo"
        let palabra =  "generation"
        expect(palindromo(palabra) ).not.toBe(mensaje)

    });

    test('Al ingresar un numero debe regresar un mensaje', () => {
        let mensaje = "Tiene que ser una palabra"
        let valor = 4
        expect(palindromo(valor) ).toBe(mensaje)

    });
})

