let texto = "Hoy parece que va a salir el sol";

let buscar = /sol/

console.log(buscar.test(texto))

let texto1 = "la espero en el aereopeurto de LA"
let buscar1 = /lA/;

console.log(buscar1.test(texto1))

let texto2 = "te marque anoche"

let buscar2 = /[eo]/;

console.log(buscar2.test(texto2))
