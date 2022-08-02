/* Tipos de datos */

// Number
let numero = 10;
console.log(numero);

// String
let texto = "Hola mundo";
console.log(texto);

// Boolean
let verdadero = true;
console.log(verdadero);

// Undefined
let indefinido;
console.log(indefinido);

// Null
let nulo = null;
console.log(nulo);

let nombre = "Iker F";
console.log(`Mi nombre es ${nombre}`);
console.log("Mi nombre es " + nombre);

// Array
let array = [1, 1, 2, 3, 5, 8, 13, 21, 34, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
console.log(array);

// Object
const objeto = {
  nombre: "Iker",
  apellido: "F",
  stats: { edad: 20, 
            altura: 178, 
            peso: 60 },
  saludar: function () {
            return nombre;
  },
};
console.log(objeto.stats.edad);
console.log(objeto.saludar());

/*  const persona = { 
            nombre: 'Raúl', 
            edad: 31,
            hobbies: [
                  "Leer",
                  "Ver Srek 1 y 2",
                  "Comer"
            ],
            auto: {
                  marca: "VW",
                  modelo: "Pointer",
                  year: 2000,
            },
            saludar: function (){
                  return "Hola"
            }
      };
      
        

 */
